import React, { PureComponent } from 'react';
import map from 'lodash/map';
import remove from 'lodash/remove';

var FileSaver = require('file-saver');
import CommonPhrases from '../../../common-phrases.json';

class Main extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      addShortKey: false,
      text: ''
    }
  }

  handleAddKeys(){
    this.setState({
      addShortKey: true
    });
  }

  handleChange(e){
    e.preventDefault();
    let input = e.target.value;
    this.setState({
      text: input
    })
  }

  handleSubmitKeyChange(){
    const _this = this;
    let index
    if (this.props.form.shortKeys){
      index = this.props.form.shortKeys.size + 1
    } else {
      index = 1
    }

    const db = firebase.database().ref('shortKeys/')

    var newPostKey = firebase.database().ref().child('shortKeys').push().key;

    db.once('value', function(snapshot) {
      var num = snapshot.numChildren() + 1
      firebase.database().ref('shortKeys/' + newPostKey).set({
        keyNum: num,
        phrase: _this.state.text
      }).then((resp) => {
        firebase.database().ref('shortKeys/').once('value', function(snapshot) {
          let shortKeys = snapshot.val();
          remove(shortKeys, n => !n );
          _this.props.updateShortKeys(shortKeys)
          return shortKeys
        })

        _this.setState({
          addShortKey: false,
          text: ''
        });
      })
    })
  }

  displayAddShortKey(){
    if(this.state.addShortKey) {
      return (
          <div className="form-group" >
            <textarea className="form-control" rows="10" cols="80" onChange={this.handleChange.bind(this)} value={this.state.text}>
            </textarea>
            <br/>
            <button className="btn btn-primary btn-block" value={'Submit'} onClick={this.handleSubmitKeyChange.bind(this)}>Submit</button>
            <br/>
            <br/>

          </div>
          );
    }

    return null;
  }

  handleDelete(e, shortKeyObj, primaryKey){
    e.preventDefault();
    firebase.database().ref('shortKeys/' + primaryKey).remove();

    const db = firebase.database().ref('shortKeys/')
    const _this = this;

    db.once('value', function(snapshot) {
      let shortKeys = snapshot.val();
      remove(shortKeys, n => !n );
      _this.props.updateShortKeys(shortKeys)
      return shortKeys
    })
  }

  displayShortKeys(){
    const _this = this
    if (!this.props.form.shortKeys) {
      return
    }
    return map(this.props.form.shortKeys.toJS(), function(shortKeyObj, primaryKey){
      console.log('a', shortKeyObj);
      return (
        <li key={primaryKey} className="list-group-item">
         {shortKeyObj.keyNum + ': ' + shortKeyObj.phrase} <a className="btn btn-danger" href="#"  onClick={(e) => _this.handleDelete(e, shortKeyObj, primaryKey)}>Delete</a>
        </li>
      )
    })
  }

  render() {
    const disabled = this.state.addShortKey ? 'disabled' : '';

      return (
        <div className="exampleOutput">
          {this.displayAddShortKey()}
          <h2>ShortKeys</h2>
          <ul className="list-group">
            {this.displayShortKeys()}
          </ul>
          <br/>
          <button className={"btn btn-primary btn-block " + disabled} onClick={this.handleAddKeys.bind(this)} >Add ShortKeys</button>
        </div>
      );
  }
}

export default Main;


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
    const index = this.props.form.shortKeys.size + 1

    firebase.database().ref('shortKeys/' + index).set({
      phrase: this.state.text
    });


    firebase.database().ref('shortKeys/').once('value', function(snapshot) {
      let shortKeys = snapshot.val();
      remove(shortKeys, n => !n );
      _this.props.updateShortKeys(shortKeys)
      return shortKeys
    })

    this.setState({
      addShortKey: false
    });
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

  displayShortKeys(){

    return map(this.props.form.shortKeys.toArray(), function(shortKeyObj, keyNum){
      return (
        <li key={keyNum} className="list-group-item">
         {keyNum + ': ' + shortKeyObj.get('phrase')}
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


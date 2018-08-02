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
    //this.database = firebase.database();
    //firebase.database().ref('shortKeys/' + 2).set({
      //phrase: 'this is the second entry' 
    //});

    //var keys = this.database.ref('shortKeys/')
    //keys.on('value', function(snapshot) {
      //let shortKeys = snapshot.val();

      //remove(shortKeys, n => !n );
      //console.log('shortkeys', shortKeys[1] );
    //});
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
    const index = this.props.form.shortKeys.size + 1

    firebase.database().ref('shortKeys/' + index).set({
      phrase: this.state.text
    });

    this.setState({
      addShortKey: false
    });
  }

  displayAddShortKey(){
    if(this.state.addShortKey) {
      return (
          <div>
          <textarea rows="10" cols="80" onChange={this.handleChange.bind(this)} value={this.state.text}>
          </textarea>
          <button value={'Submit'} onClick={this.handleSubmitKeyChange.bind(this)}>Submit</button>
          </div>
          );
    }

    return null;
  }

  displayShortKeys(){

    return map(this.props.form.shortKeys.toArray(), function(shortKeyObj, keyNum){
      return (
        <li key={keyNum} >
         {keyNum + ': ' + shortKeyObj.get('phrase')}
        </li>
      )
    })
  }

  render() {
      return (
        <div className="exampleOutput">
        {this.displayAddShortKey()}
        <h2>ShortKeys</h2>
        <button onClick={this.handleAddKeys.bind(this)} >Add ShortKeys</button>
          <ul>
            {this.displayShortKeys()}
          </ul>
        </div>
      );
  }
}

export default Main;


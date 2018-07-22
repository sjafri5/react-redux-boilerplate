import React, { PureComponent } from 'react';
import map from 'lodash/map';
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
    const nextKeyNum = Object.keys(CommonPhrases).length + 1;

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
    return map(CommonPhrases, function(phrase, keyNum){
      return (
        <li key={keyNum} >
         {keyNum + ': ' + phrase}
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


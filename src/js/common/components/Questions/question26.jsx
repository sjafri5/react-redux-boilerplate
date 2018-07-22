import React, { PureComponent } from 'react';
import CommonPhrases from '../../../common-phrases.json';

class Question26 extends PureComponent {
  constructor(props){
    super(props);
    this.commonPhrases = CommonPhrases;
    this.state = {
      text: ''
    }
  }
  handleChange(e){
    e.preventDefault();
    let input = e.target.value;
    const shortKeyMatch = input.match(/:\d{1,4}\s/)

    if (shortKeyMatch){
      const shortKey = shortKeyMatch[0];
      const keyNum = shortKey.slice(1, -1).toString();
      if (CommonPhrases[keyNum]) {
        input = input.replace(/:\d{1,4}\s/, CommonPhrases[keyNum])
      }
    }
    this.setState({
      text: input
    })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>PERTINENT NEW HISTORY – CURRENT SIGNS AND SYMPTOMS - FINDINGS:</h1>
          <textarea rows="10" cols="80" onChange={this.handleChange.bind(this)} value={this.state.text}>
          </textarea>
          <button value={'Submit'} onClick={handleSubmit}>Submit</button>
        </div>
        )
  }
}

export default Question26;

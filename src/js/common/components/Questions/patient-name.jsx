import React, { PureComponent } from 'react';
import CommonPhrases from '../../../common-phrases.json';

class PatientName extends PureComponent {
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
          <h1>Enter Patient Name:</h1>
          <input className="form-control" onChange={this.handleChange.bind(this)} value={this.state.text} />
          <br/>
          <button className="btn btn-primary btn-block" value={this.state.text} onClick={handleSubmit}>Submit</button>
        </div>
        )
  }
}

export default PatientName;

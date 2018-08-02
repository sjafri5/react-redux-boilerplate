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
    if (e.key === 'Enter') {
      this.props.handleNameEnter(this.state.text);
      return;
    }

    let input = this.state.text + e.key;
    this.setState({
      text: input
    })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>Enter Patient Name:</h1>
          <input className="form-control" onKeyPress={this.handleChange.bind(this)} value={this.state.text} />
          <br/>
          <button className="btn btn-primary btn-block" value={this.state.text} onClick={handleSubmit}>Submit</button>
        </div>
        )
  }
}

export default PatientName;

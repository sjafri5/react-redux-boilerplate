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
    this.setState({
      text: e.target.value
    })
  }

  handleKeyPress(e){
    if (e.key === 'Enter') {
      this.props.handleNameEnter(this.state.text);
      return;
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const response = e.target.value;
    this.props.handleNameEnter(this.state.text);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>Enter Patient Name:</h1>
          <input className="form-control" onChange={this.handleChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)} value={this.state.text} />
          <br/>
          <button className="btn btn-primary btn-block" value={this.state.text} onClick={this.handleSubmit.bind(this)}>Submit</button>
        </div>
        )
  }
}

export default PatientName;

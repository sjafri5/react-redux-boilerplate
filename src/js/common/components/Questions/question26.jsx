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
    const shortKeys = this.props.shortKeys

    const shortKeyMatch = input.match(/:\d{1,4}\s/)
      console.log('thipasdfasdf', this.props);

    if (shortKeyMatch){
      const shortKey = shortKeyMatch[0];
      const keyNum = shortKey.slice(1, -1).toString();
      if (shortKeys.get(keyNum)) {
        input = input.replace(/:\d{1,4}\s/, shortKeys.get(keyNum).get('phrase'))
      }
    }
    this.setState({
      text: input
    })
  }

  render() {
    const { handleSubmit } = this.props;
    const expStr = ':2 <space> will add the shortkey that is assigned to 2'
    return (
        <div>
          <h1>PERTINENT NEW HISTORY – CURRENT SIGNS AND SYMPTOMS - FINDINGS:</h1>
          <h5>to use a shortkey. enter ':' followed by the numeric code. then press space or enter</h5>
          <h5>example:</h5>
          <h5>{expStr}</h5>
          <textarea className="form-control" rows="10" cols="80" onChange={this.handleChange.bind(this)} value={this.state.text}>
          </textarea>
          <br/>
          <button className="btn btn-primary btn-block" value={this.state.text} onClick={handleSubmit}>Submit</button>
        </div>
        )
  }
}

export default Question26;

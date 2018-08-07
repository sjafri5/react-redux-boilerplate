import React, { PureComponent } from 'react';
import map from 'lodash/map';
import CommonPhrases from '../../../common-phrases.json';

class Question26 extends PureComponent {
  constructor(props){
    super(props);
    this.commonPhrases = CommonPhrases;
    this.shortKeys = this.getShortKeys(this.props.shortKeys)
    this.state = {
      text: '',
      shortKeysUsed: new Set()
    }
  }

  getShortKeys(){
    const shortKeys = this.props.shortKeys.toJS();
    const sKeys = {}
    map(shortKeys, (val, key) => {
      sKeys[val.keyNum] = val.phrase
    })

    return sKeys
  }

  handleChange(e){
    e.preventDefault();
    let input = e.target.value;

    const shortKeyMatch = input.match(/:\d{1,4}\s/)

    if (shortKeyMatch){
      const shortKey = shortKeyMatch[0];
      const keyNum = shortKey.slice(1, -1).toString();
      if (this.shortKeys[keyNum]) {

        input = input.replace(/:\d{1,4}\s/, this.shortKeys[keyNum] + ' ');
        this.setAnalytics(keyNum)

        let shortKeysUsed = this.state.shortKeysUsed
        shortKeysUsed.add(keyNum);
      }
    }
    this.setState({
      text: input
    })
  }

  setAnalytics(){
    firebase.database().ref('analytics/' + this.props.uuid).update({
      shortKeysUsed: this.state.shortKeysUsed
    });
  }

  handleSubmit(e){
    const { handleSubmit } = this.props;
    this.setAnalytics()

    handleSubmit(e)
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
          <button className="btn btn-primary btn-block" value={this.state.text} onClick={this.handleSubmit.bind(this)}>Submit</button>
        </div>
        )
  }
}

export default Question26;

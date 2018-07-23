import React, { PureComponent } from 'react';
import QuestionMap from '../../../question-map.json';
import zipObject from 'lodash/zipObject'
import map from 'lodash/map'
import './question.css';

class Question1 extends PureComponent {
  constructor(props){
    super(props)
    const answers = QuestionMap['1'].answers
    const alphabet = ['1', '2', '3', '4', '5', '6', '7', '8'].slice(0, answers.length)
    this.answerKey = zipObject(alphabet, QuestionMap['1'].answers)
    this.handleKeyDown= this.handleKeyDown.bind(this);
  }

  handleKeyDown(e){
    if (this.answerKey[e.key]) {
      this.handleSelection(this.answerKey[e.key])
    }
  }

  handleSelection(response) {
    const { handleSelection } = this.props;
    handleSelection(response)
  }

  handleSubmit(e) {
    const { handleSelection } = this.props;
    e.preventDefault();
    const response = e.target.value;

    handleSelection(response)
  }

  componentWillMount(){
    window.addEventListener("keypress", this.handleKeyDown, false);
  }

  componentWillUnmount(){
    window.removeEventListener("keypress", this.handleKeyDown, false);
  }

  renderButtons(){
    return map(this.answerKey, (answer, alphabet) => {
      return <button type="button" className="btn btn-default btn-block" key={alphabet} value={answer} onClick={this.handleSubmit.bind(this)}>{alphabet + '. ' + answer}</button>
    })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h2>Coordination of care provided with:</h2>
          { this.renderButtons() }
        </div>
        )
  }
}

export default Question1;

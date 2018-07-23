import React, { PureComponent } from 'react';
import QuestionMap from '../../../question-map.json';
import zipObject from 'lodash/zipObject'
import map from 'lodash/map'


class QuestionComponent extends PureComponent {
  constructor(props){
    super(props)
    this.answerKey = this.createAnswerKey(this.props.currentQuestion)
    this.handleKeyDown= this.handleKeyDown.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.answerKey = this.createAnswerKey(nextProps.currentQuestion)
  }


  createAnswerKey(questionNumber){
    const answers = QuestionMap[questionNumber].answers
    const alphabet = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'].slice(0, answers.length)
    return zipObject(alphabet, answers)
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
}

export default QuestionComponent;

import React, { PureComponent } from 'react';
import QuestionMap from '../../../question-map.json';
import each from 'lodash/each'

import { 
  Question1, 
  Question26, 
  MultiSelect, 
} from '../Questions';

class Review extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      editMode: false 
    }
  }

  transcribeQuestions(){
    const questionCount = Array.from(Array(27)).map((e,i)=>(i+ 1).toString())
    return questionCount.map((QuestionNumber) => {
      return <div>
        <h4>{QuestionMap[QuestionNumber].question}  <a src='foo' onClick={(e) => this.handleEdit(e, QuestionNumber)}>edit</a></h4>
        {this.transcribeAnswers(QuestionNumber)}
        <br/>
      </div>
    })
  }

  handleEdit(e, questionNumber) {
    e.preventDefault();
    this.setState({
      editMode: true,
      editQuestionNumber: questionNumber
    })
  }

  transcribeAnswers(questionNumber){
    const answers = QuestionMap[questionNumber].answers

    return answers.map((answer, index) => {
      const formAnswer = this.props.form.formData.get(questionNumber)
      if (questionNumber === '27') {
        return this.transcribeEssay(formAnswer)
      } else if (QuestionMap[questionNumber].multiselect) {

        if (formAnswer.has(answer)) {
          return <button key={index} className='btn btn-primary'>{answer}</button>
        } else {
          const color = "btn btn-default"
          return <button key={index} className={color}>{answer}</button>
        }
      }


      if (answers.includes(formAnswer)) {
        const charcolor= answer === formAnswer ? 'primary' : 'default';
        const color = "btn btn-" + charcolor
        return <button key={index} className={color}>{answer}</button>
      } else {
        return this.transcribeFullAnswer(answer, formAnswer, index);
      }
    })
  }

  transcribeEssay(formAnswer){
    return (
      <div>
        <h4>IV. PERTINENT NEW HISTORY - CURRENT SIGNS/SYMPTOMS - FINDINGS</h4>
        <span>{formAnswer}</span>
      </div>
    )
  }



  transcribeFullAnswer(answer, formAnswer, index){

    if (answer.slice(0, 4) === formAnswer.slice(0, 4)){
      const color = "btn btn-primary"
      return <button key={index} className={color}>{formAnswer}</button>
    } else {
      const color = "btn btn-default"
      return <button key={index} className={color}>{answer}</button>
    }
  }

  handleSelection(response) {
    //thi
    const currentQuestion = this.state.editQuestionNumber
    this.props.submitResponse({questionNumber: currentQuestion, response})
    this.setState({
      editMode: false
    })
  }

  renderEdit(){
    const currentQuestion = this.state.editQuestionNumber
    const title = QuestionMap[currentQuestion].question

    if (QuestionMap[currentQuestion].multiselect) {
      return <MultiSelect
        currentQuestion={currentQuestion}
        title={title}
        handleSelection={this.handleSelection.bind(this)} />
    }
    else {
      return <Question1 
        currentQuestion={currentQuestion}
        title={title}
        handleSelection={this.handleSelection.bind(this)} />
    }

  }

  render() {
    const { handleDownload } = this.props;
    if (this.state.editMode) {
      return this.renderEdit()
    }

    return (
        <div>
          <h1>Review Page</h1>

          {this.transcribeQuestions()}

          <br/>
          <button className="btn btn-primary btn-block" onClick={handleDownload}>Download Form</button>
        </div>
        )
  }
}

export default Review;


import React, { PureComponent } from 'react';
import QuestionMap from '../../../question-map.json';
import each from 'lodash/each'

class Review extends PureComponent {
  transcribeQuestions(){
    const questionCount = Array.from(Array(26)).map((e,i)=>(i+ 1).toString())
      console.log('questionQount', questionCount);
    return questionCount.map((QuestionNumber) => {
      console.log('num---------', QuestionNumber);
      return <div>
        <h4>{QuestionMap[QuestionNumber].question}</h4>
        {this.transcribeAnswers(QuestionNumber)}
        <br/>
      </div>
    })
  }

  transcribeAnswers(questionNumber){
    const answers = QuestionMap[questionNumber].answers

    return answers.map((answer, index) => {
      const formAnswer = this.props.form.formData.get(questionNumber)
      if (questionNumber === '26') {
        return (
          <div>
            <h4>IV. PERTINENT NEW HISTORY - CURRENT SIGNS/SYMPTOMS - FINDINGS</h4>
            <span>{formAnswer}</span>
          </div>
        )
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

  transcribeFullAnswer(answer, formAnswer, index){
    if (answer.slice(0, 4) === formAnswer.slice(0, 4)){
      const color = "btn btn-primary"
      return <button key={index} className={color}>{formAnswer}</button>
    } else {
      const color = "btn btn-default"
      return <button key={index} className={color}>{answer}</button>
    }
  }

  render() {
    const { handleDownload } = this.props;
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


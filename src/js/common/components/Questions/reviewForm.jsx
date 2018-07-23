import React, { PureComponent } from 'react';
import QuestionMap from '../../../question-map.json';
import each from 'lodash/each'

class Review extends PureComponent {
  transcribeQuestions(){
    const questionCount = Array.from(Array(26)).map((e,i)=>(i+ 1).toString())
    return questionCount.map((QuestionNumber) => {
      return <div>
        <h4>{QuestionMap[QuestionNumber].question}</h4>
        {this.transcribeAnswers(QuestionNumber)}
        <br/>
      </div>
    })
  }

  transcribeAnswers(questionNumber){
    return QuestionMap[questionNumber].answers.map((answer, index) => {
      if (questionNumber === '26') {
        return (
          <div>
            <h4>IV. PERTINENT NEW HISTORY - CURRENT SIGNS/SYMPTOMS - FINDINGS</h4>
            <span>{this.props.form.formData.get(questionNumber)}</span>
          </div>
        )
      }

      const charNumber = answer === this.props.form.formData.get(questionNumber) ? 9632: 9633
      const charcolor= answer === this.props.form.formData.get(questionNumber) ? 'primary' : 'default';
      const color = "btn btn-" + charcolor
      return <button key={index} className={color}>{answer}</button>

    })
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


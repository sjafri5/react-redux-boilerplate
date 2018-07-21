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
    return QuestionMap[questionNumber].answers.map((answer) => {
      const charNumber = answer === this.props.form.formData.get(questionNumber) ? 9632: 9633
      return <span>{String.fromCharCode(charNumber) + answer}</span>

    })
  }

  render() {
    const { handleDownload } = this.props;
    return (
        <div>
          <h1>Review Page</h1>

          {this.transcribeQuestions()}

          <button onClick={handleDownload}>Submit</button>
        </div>
        )
  }
}

export default Review;


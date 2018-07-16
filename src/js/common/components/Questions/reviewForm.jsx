import React, { PureComponent } from 'react';
import QuestionMap from '../../../question-map.json';
import each from 'lodash/each'

class Review extends PureComponent {
  transcribeAnswers(){
    return QuestionMap['1'].answers.map((answer) => {
      const charNumber = answer === this.props.form.formData.get('1') ? 9632: 9633
      return <span>{String.fromCharCode(charNumber) + answer}</span>

    })
  }

  render() {
    const { handleDownload } = this.props;
    return (
        <div>
          <h1>Review Page</h1>
          {this.transcribeAnswers()}

        </div>
        )
  }
}

export default Review;


import React, { PureComponent } from 'react';
import QuestionMap from '../../../question-map.json';

class Review extends PureComponent {
  transcribeAnswers(){
    return (
        <h5>&#9633; {QuestionMap['1'].answers[0]}</h5>

        )

  }

  render() {
    console.log('this.pr', this.props.form.formData);
    console.log('QUESTIONMAP', QuestionMap['1']);

    const { handleDownload } = this.props;
    return (
        <div>
          <h1>Review Page</h1>
          <h4>{QuestionMap['1'].question}</h4>
          {this.transcribeAnswers()}

        </div>
        )
  }
}

export default Review;


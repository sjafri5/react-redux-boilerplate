import React, { PureComponent } from 'react';

import QuestionMap from '../../../question-map.json';
import PdfMaker from '../Utilities/pdfMaker';
import './Example.css';
import './Example.css';

import { 
  Question1, 
  Question26, 
  Review 
} from '../Questions';


class Main extends PureComponent {
  handleSubmit(e) {
    const { form: { currentQuestion  } } = this.props
    e.preventDefault();
    const response = e.target.value;
    this.props.submitResponse({questionNumber: currentQuestion, response})
    this.props.nextQuestion(currentQuestion)
  }

  handleSelection(response) {
    const { form: { currentQuestion  } } = this.props
    this.props.submitResponse({questionNumber: currentQuestion, response})
    this.props.nextQuestion(currentQuestion)
  }

  handleDownload(){
    const pdfMaker = new PdfMaker(this.props.form.formData);
  }

  questionComponent() {
    const { form: { currentQuestion  } } = this.props
    const title = QuestionMap[currentQuestion].question

    if (this.props.form.reviewForm) {
      return <Review form={this.props.form} handleDownload={this.handleDownload.bind(this)}/>
    } else if (currentQuestion === 26) {
      return <Question26 handleSubmit={this.handleSubmit.bind(this)}/>
    } else {
      return <Question1 
              currentQuestion={currentQuestion}
              title={title}
              handleSelection={this.handleSelection.bind(this)} />
    }


  }

  render() {
    const { example } = this.props;
      return (
        <div className="exampleOutput">
          { this.questionComponent() }
        </div>
      );
  }
}

export default Main;


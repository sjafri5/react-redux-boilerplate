import React, { PureComponent } from 'react';
import jsPDF from 'jspdf'

import './Example.css';
import './Example.css';

import { Question1, Question2, Question3, Question4, Question5, Review } from '../Questions';

//import Question1 from '../../Questions/question';

class Main extends PureComponent {
  handleSubmit(e) {
    const { form: { currentQuestion  } } = this.props
    e.preventDefault();
    const response = e.target.value;
    this.props.submitResponse({questionNumber: currentQuestion, response})
    this.props.nextQuestion(currentQuestion)
  }

  handleDownload(){
    console.log('yellow---------');
    var doc = new jsPDF();

    doc.text('Hello world!', 10, 10);
    doc.save('a4.pdf');
  }

  questionComponent() {
    console.log('this.propasques', this.props);
    if (this.props.form.reviewForm) {
      return <Review handleDownload={this.handleDownload.bind(this)}/>
    }

    switch (this.props.form.currentQuestion) {
      case 1:
        return <Question1 handleSubmit={this.handleSubmit.bind(this)}/>
      case 2:
        return <Question2 handleSubmit={this.handleSubmit.bind(this)}/>
      case 3:
        return <Question3 handleSubmit={this.handleSubmit.bind(this)}/>
      case 4:
        return <Question4 handleSubmit={this.handleSubmit.bind(this)}/>
      case 5:
        return <Question5 handleSubmit={this.handleSubmit.bind(this)}/>
      default:
          return null

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


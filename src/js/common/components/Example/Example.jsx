import React, { PureComponent } from 'react';
import jsPDF from 'jspdf'

import QuestionMap from '../../../question-map.json';
import './Example.css';
import './Example.css';

import { 
  Question1, 
  Question2, 
  Question3, 
  Question4, 
  Question5, 
  Question6, 
  Question7, 
  Question8, 
  Question9, 
  Question10, 
  Question11, 
  Question12, 
  Question13, 
  Question14, 
  Question15, 
  Question16, 
  Question17, 
  Question18, 
  Question19, 
  Question20, 
  Question21, 
  Question22, 
  Question23, 
  Question24, 
  Question25, 
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

  handleDownload(){
    const doc = new jsPDF();

    doc.text(QuestionMap['1'].question, 10, 10);
    QuestionMap['1'].answers.map((answer, index) => {
      console.log('index', index);
      const fillStyle = answer === this.props.form.formData.get('1') ? 'F': 'S' 
      doc.rect((10 + (index * 25)), 20, 2, 2, fillStyle)
      doc.setFontSize(8)
      doc.text(answer, (13 + (index * 25)), 20)
    })

    doc.save('a4.pdf');
  }

  questionComponent() {
    //const questionMap = JSON.parse(QuestionMap)
    console.log('question MPAAPAPAPAMform', QuestionMap);
    if (this.props.form.reviewForm) {
      return <Review form={this.props.form} handleDownload={this.handleDownload.bind(this)}/>
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
      case 6:
        return <Question6 handleSubmit={this.handleSubmit.bind(this)}/>
      case 7:
        return <Question7 handleSubmit={this.handleSubmit.bind(this)}/>
      case 8:
        return <Question8 handleSubmit={this.handleSubmit.bind(this)}/>
      case 9:
        return <Question9 handleSubmit={this.handleSubmit.bind(this)}/>
      case 10:
        return <Question10 handleSubmit={this.handleSubmit.bind(this)}/>
      case 11:
        return <Question11 handleSubmit={this.handleSubmit.bind(this)}/>
      case 12:
        return <Question12 handleSubmit={this.handleSubmit.bind(this)}/>
      case 13:
        return <Question13 handleSubmit={this.handleSubmit.bind(this)}/>
      case 14:
        return <Question14 handleSubmit={this.handleSubmit.bind(this)}/>
      case 15:
        return <Question15 handleSubmit={this.handleSubmit.bind(this)}/>
      case 16:
        return <Question16 handleSubmit={this.handleSubmit.bind(this)}/>
      case 17:
        return <Question17 handleSubmit={this.handleSubmit.bind(this)}/>
      case 18:
        return <Question18 handleSubmit={this.handleSubmit.bind(this)}/>
      case 19:
        return <Question19 handleSubmit={this.handleSubmit.bind(this)}/>
      case 20:
        return <Question20 handleSubmit={this.handleSubmit.bind(this)}/>
      case 21:
        return <Question21 handleSubmit={this.handleSubmit.bind(this)}/>
      case 22:
        return <Question22 handleSubmit={this.handleSubmit.bind(this)}/>
      case 23:
        return <Question23 handleSubmit={this.handleSubmit.bind(this)}/>
      case 24:
        return <Question24 handleSubmit={this.handleSubmit.bind(this)}/>
      case 25:
        return <Question25 handleSubmit={this.handleSubmit.bind(this)}/>
      case 26:
        return <Question26 handleSubmit={this.handleSubmit.bind(this)}/>
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


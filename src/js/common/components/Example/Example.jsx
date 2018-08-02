import React, { PureComponent } from 'react';

import QuestionMap from '../../../question-map.json';
import PdfMaker from '../Utilities/pdfMaker';
import remove from 'lodash/remove';
import './Example.css';
import './Example.css';

import { 
  Question1, 
  Question26, 
  MultiSelect, 
  PatientName,
  Review 
} from '../Questions';


class Main extends PureComponent {
  constructor(props){
    super(props);
  }

  componentDidMount(){
  const db = firebase.database().ref('shortKeys/')
  const _this = this;

  db.once('value', function(snapshot) {
    let shortKeys = snapshot.val();
    remove(shortKeys, n => !n );
    _this.props.updateShortKeys(shortKeys)
    return shortKeys
  })

  }

  handleSubmit(e) {
    const { form: { currentQuestion  } } = this.props
    e.preventDefault();
    const response = e.target.value;
    this.props.submitResponse({questionNumber: currentQuestion, response})
    this.props.nextQuestion(currentQuestion)
  }

  handleNameSubmit(response) {
    const { form: { currentQuestion  } } = this.props
    this.props.submitResponse({questionNumber: currentQuestion, response })
    this.props.nextQuestion(currentQuestion)
    this.props.setStart()
  }

  handleSelection(response) {
    const { form: { currentQuestion  } } = this.props
    this.props.submitResponse({questionNumber: currentQuestion, response})
    this.props.nextQuestion(currentQuestion)
  }

  handleDownload(){
    const timestamp = Date.now();
    firebase.database().ref('analytics/' + this.props.analytics.uuid).update({
      endTime: timestamp
    });
    
    const pdfMaker = new PdfMaker(this.props.form.formData);
  }

  questionComponent() {
    const { form: { currentQuestion, shortKeys }, analytics: { uuid } } = this.props
    const title = QuestionMap[currentQuestion].question

    if (this.props.form.reviewForm) {
      return <Review form={this.props.form} handleDownload={this.handleDownload.bind(this)}/>
    } else if (currentQuestion === 0) {
      return <PatientName handleSubmit={this.handleSubmit.bind(this)} handleNameEnter={this.handleNameSubmit.bind(this)}/>
    } else if (currentQuestion === 26) {
      return <Question26 shortKeys={shortKeys} uuid={uuid} handleSubmit={this.handleSubmit.bind(this)}/>
    } else if (QuestionMap[currentQuestion].multiselect) {

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
    const { example } = this.props;
      return (
        <div className="exampleOutput">
          { this.questionComponent() }
        </div>
      );
  }
}

export default Main;


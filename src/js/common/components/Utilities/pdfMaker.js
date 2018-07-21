import QuestionMap from '../../../question-map.json';
import jsPDF from 'jspdf'

class PdfMaker {
  constructor(formData) {
    this.questionMap = QuestionMap;
    this.formData = formData;
    this.doc = new jsPDF()

    this.buildDocument();
  }

  buildDocument(){
    const date = Date.now()

    this.transcribeQuestions()
    this.doc.save(date + '.pdf');
  }

  transcribeQuestions(){
    const questionCount = Array.from(Array(26)).map((e,i)=>(i+ 1).toString())
    questionCount.map((questionNumber, index) => {
      const yAxis = 10 + (index * 20)
      this.doc.setFontSize(12)
      this.doc.text(this.questionMap[questionNumber].question, 10, yAxis);
      this.transcribeAnswers(questionNumber, yAxis)
    })
  }

  transcribeAnswers(questionNumber, yAxis){
    QuestionMap[questionNumber].answers.map((answer, index) => {
      const fillStyle = answer === this.formData.get(questionNumber) ? 'F': 'S' 
      this.doc.rect((10 + (index * 25)), yAxis + 5, 2, 2, fillStyle)
      this.doc.setFontSize(8)
      this.doc.text(answer, (13 + (index * 25)), yAxis + 7)
    })
  }
}

export default PdfMaker 

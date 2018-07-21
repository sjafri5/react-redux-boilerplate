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
    this.doc.setFont('Times')

    this.transcribeDate()
    this.transcribeQuestions()
    this.doc.save(date + '.pdf');
  }

  transcribeDate(){
    const date = new Date().toLocaleDateString("en-US")
    this.doc.setFontSize(12)
    this.doc.text("Date of Service: " + date, 10, 10);
  }

  transcribeQuestions(){
    const questionCount = Array.from(Array(26)).map((e,i)=>(i+ 1).toString())
    let yAxis = 20
    let questionXAxis = 0
    questionCount.map((questionNumber, index) => {
      this.doc.setFontSize(12)

      if(questionNumber === '2'){
        this.doc.text('I. MENTAL STATUS ASSESSMENT', 10, yAxis);
        yAxis += 8
      }

      if(questionNumber === '23'){
        this.doc.text('III. TREATMENT PLAN', 10, yAxis);
        yAxis += 8
      }

      if(questionNumber === '19'){
        this.doc.addPage();
        yAxis = 20
        this.doc.text('II. ASSESSMENT', 10, yAxis);
        yAxis += 8
        questionXAxis = 0
      }

      if (this.questionMap[questionNumber].format === "3") {
        this.doc.text(this.questionMap[questionNumber].question, 10 + questionXAxis, yAxis);
        this.transcribeTriplexAnswers(questionNumber, yAxis, questionXAxis)
        questionXAxis += 65;

        const nextLineQuestion = ["Impulse Control:", "Memory - Remote Past" ]
        if (nextLineQuestion.includes(this.questionMap[questionNumber].question)) {
          questionXAxis = 0;
          yAxis += 15;
        }
        return;
      }

      this.doc.text(this.questionMap[questionNumber].question, 10 , yAxis);
      this.transcribeAnswers(questionNumber, yAxis)

      if (QuestionMap[questionNumber].answers.length > 6) {
        yAxis += 20;
      } else {
        yAxis += 15;
      }
    })
  }

  transcribeTriplexAnswers(questionNumber, yAxis, qxAxis){
    let xAxis = 10
    QuestionMap[questionNumber].answers.map((answer, index) => {
      const fillStyle = answer === this.formData.get(questionNumber) ? 'F': 'S' 
      this.doc.rect(qxAxis + xAxis, yAxis + 5, 2, 2, fillStyle)
      this.doc.setFontSize(8)
      this.doc.text(answer, qxAxis + xAxis + 3, yAxis + 7)
      xAxis += 15
    })
  }

  transcribeAnswers(questionNumber, yAxis){
    let xAxis = 10
    QuestionMap[questionNumber].answers.map((answer, index) => {
      const fillStyle = answer === this.formData.get(questionNumber) ? 'F': 'S' 
      this.doc.rect(xAxis, yAxis + 5, 2, 2, fillStyle)
      this.doc.setFontSize(8)
      this.doc.text(answer, xAxis + 3, yAxis + 7)
      if (index === 5){
        xAxis = 10
        yAxis += 5
      } else {
        xAxis += 25
      }
    })
  }
}

export default PdfMaker 

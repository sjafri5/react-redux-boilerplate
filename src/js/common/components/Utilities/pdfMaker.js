import QuestionMap from '../../../question-map.json';
import jsPDF from 'jspdf'

class PdfMaker {
  constructor(formData) {
    this.questionMap = QuestionMap;
    this.formData = formData;
    this.doc = new jsPDF()
    this.yAxis = 20;

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
    let questionXAxis = 0
    questionCount.map((questionNumber, index) => {
      this.doc.setFontSize(12)

      if(questionNumber === '2'){
        this.doc.text('I. MENTAL STATUS ASSESSMENT', 10, this.yAxis);
        this.yAxis += 8
      }

      if(questionNumber === '23'){
        this.doc.text('III. TREATMENT PLAN', 10, this.yAxis);
        this.yAxis += 8
      }

      if(questionNumber === '19'){
        this.doc.addPage();
        this.yAxis = 20
        this.doc.text('II. ASSESSMENT', 10, this.yAxis);
        this.yAxis += 8
        questionXAxis = 0
      }

      if (this.questionMap[questionNumber].format === "3") {
        this.doc.text(this.questionMap[questionNumber].question, 10 + questionXAxis, this.yAxis);
        this.transcribeTriplexAnswers(questionNumber, this.yAxis, questionXAxis)
        questionXAxis += 65;

        const nextLineQuestion = ["Impulse Control:", "Memory - Remote Past" ]
        if (nextLineQuestion.includes(this.questionMap[questionNumber].question)) {
          questionXAxis = 0;
          this.yAxis += 15;
        }
        return;
      }

      this.doc.text(this.questionMap[questionNumber].question, 10 , this.yAxis);
      this.transcribeAnswers(questionNumber, this.yAxis)

      this.yAxis += 15;
    })
  }

  transcribeTriplexAnswers(questionNumber, yAxis, qxAxis){
    let xAxis = 10
    QuestionMap[questionNumber].answers.map((answer, index) => {
      const fillStyle = answer === this.formData.get(questionNumber) ? 'F': 'S' 
      this.doc.rect(qxAxis + xAxis, this.yAxis + 5, 2, 2, fillStyle)
      this.doc.setFontSize(8)
      this.doc.text(answer, qxAxis + xAxis + 3, this.yAxis + 7)
      xAxis += 15
    })
  }

  transcribeAnswers(questionNumber, yAxis){
    //let longAnswer = 0
    let xAxis = 10
    QuestionMap[questionNumber].answers.map((answer, index) => {

      if (QuestionMap[questionNumber].problematic)  {
        this.handleProblematicQuestions(questionNumber, answer, index);
        return;
      }

      if (answer.length > 100) {
        this.handleLongAnswer(questionNumber, answer, index);
        return
      }

      const fillStyle = answer === this.formData.get(questionNumber) ? 'F': 'S' 
      this.doc.rect(xAxis , this.yAxis + 5, 2, 2, fillStyle)
      this.doc.setFontSize(8)
      this.doc.text(answer, xAxis + 3, this.yAxis + 7)

      if (answer.length > 15) {
          xAxis += answer.length - 10
      }

      if (index === 5 || answer.length > 35){
        xAxis = 10
        this.yAxis += 5
      } else {
        xAxis += 25
      }

    })
  }

  handleLongAnswer(questionNumber, answer, index){
      let xAxis = 10
      const fillStyle = answer === this.formData.get(questionNumber) ? 'F': 'S' 
      const firstHalf = answer.substring(0, 70)
      const secondHalf = answer.substring(71)
      const answerArr = [firstHalf, secondHalf]
      this.doc.rect(xAxis , this.yAxis + 5, 2, 2, fillStyle)
      this.doc.setFontSize(8)

      this.doc.text(answerArr, xAxis + 3, this.yAxis + 7)
      this.yAxis += 7
  }

  handleProblematicQuestions(questionNumber, answer, index){
    let xAxis = 10
    switch(index) {
      case 0: 
        break;
      case 1: 
        xAxis += 80
        break;
      case 2: 
        xAxis = 10
        this.yAxis += 5
        break;
      case 3: 
        xAxis += 80
        break;
    }
    
    const fillStyle = answer === this.formData.get(questionNumber) ? 'F': 'S' 
    this.doc.rect(xAxis, this.yAxis + 5, 2, 2, fillStyle)
    this.doc.setFontSize(8)
    this.doc.text(answer, xAxis + 3, this.yAxis + 7)
  }
}

export default PdfMaker 

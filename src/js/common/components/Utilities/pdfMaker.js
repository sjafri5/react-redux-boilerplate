import QuestionMap from '../../../question-map.json';
import jsPDF from 'jspdf'

class PdfMaker {
  constructor(formData) {
    this.questionMap = QuestionMap;
    this.formData = formData;
    this.doc = new jsPDF()
    this.yAxis = 36;

    this.buildDocument();
  }

  buildDocument(){
    const patientName = this.formData.get('0')
    const date = new Date()
    const locale = date.toLocaleDateString("en-US");
    this.doc.setFont('Times')

    this.transcribeHeader();
    this.transcribeDate();
    this.transcribeQuestions();
    this.doc.save(`${patientName}-${locale}.pdf`);
  }

  transcribeHeader(){
    const patientName = this.formData.get('0')

    this.doc.setFontSize(13)
    this.doc.text(["CHICAGO BEHAVIORAL HOSPITAL"], 10, 15);
    this.doc.text(["CHICAGO BEHAVIORAL HOSPITAL"], 10, 15);
    this.doc.text("|", 105, 0);
    this.doc.text("|", 105, 4);
    this.doc.text("|", 105, 8);
    this.doc.text("|", 105, 12);
    this.doc.text("|", 105, 16);
    this.doc.text("|", 105, 20);
    this.doc.text("|", 105, 24);
    this.doc.text("PSYCHIATRIC PROGRESS NOTE", 12, 20);
    this.doc.text(`PATIENT: (${patientName})`, 140, 15);
    this.doc.text("________________________________________________________________________________________________________________________________", 0, 24);
  }

  transcribeDate(){
    this.doc.setFontSize(12)
    this.doc.text("Date of Service: __________________________", 10, 30);
  }

  transcribeSignatureArea(){
    const date = new Date()
    const locale = date.toLocaleDateString("en-US");
    const hours = date.getHours()
    const minutes = date.getMinutes()
    this.doc.setFontSize(10)
    this.doc.text("Provider Print Name/Credentials: Ejaz Jafri ANP", 9, 290);
    this.doc.text("Signature: __________________________", 85, 290);
    this.doc.text(`Date/Time: _____________________`, 150, 290);
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
      this.transcribeAnswers(questionNumber)

        // if questionCount + 5 ||
        const singleLineQuestions = ['3', '11']
        if(singleLineQuestions.includes(questionNumber)) {
          this.yAxis += 10;
        }
        else {
          this.yAxis += 15;
        }
    })

    this.transcribeSignatureArea()
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

  transcribeAnswers(questionNumber){
    const answers = QuestionMap[questionNumber].answers
    const formAnswer = this.formData.get(questionNumber)
    let xAxis = 10
    answers.map((answer, index) => {

      if (QuestionMap[questionNumber].problematic)  {
        this.handleProblematicQuestions(questionNumber, answer, index);
        return;
      }

      if (answer.length > 100) {
        this.handleLongAnswer(questionNumber, answer, index);
        return
      }

      if (QuestionMap[questionNumber].multiselect) {
        this.transcribeMultiSelectAnswers(answers, answer, formAnswer, xAxis, index)
      } else {
        this.transcribeSingleSelectAnswers(answers, answer, formAnswer, xAxis, index)
      }
      

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
  transcribeMultiSelectAnswers(answers, answer, formAnswer, xAxis, index) {
      const fillStyle = formAnswer.has(answer) ? 'F': 'S' 
      this.doc.rect(xAxis , this.yAxis + 5, 2, 2, fillStyle)
      this.doc.setFontSize(8)
      this.doc.text(answer, xAxis + 3, this.yAxis + 7)
  }

  transcribeSingleSelectAnswers(answers, answer, formAnswer, xAxis, index) {
    if (answers.includes(formAnswer)) {
      const fillStyle = answer === formAnswer ? 'F': 'S' 
      this.doc.rect(xAxis , this.yAxis + 5, 2, 2, fillStyle)
      this.doc.setFontSize(8)
      this.doc.text(answer, xAxis + 3, this.yAxis + 7)
    } else {
      this.transcribeFullAnswer(answer, formAnswer, index, xAxis);
    }
  }

  transcribeFullAnswer(answer, formAnswer, index, xAxis){
    if (answer.slice(0, 4) === formAnswer.slice(0, 4)){
      this.doc.rect(xAxis , this.yAxis + 5, 2, 2, 'F')
      this.doc.setFontSize(8)
      this.doc.text(formAnswer, xAxis + 3, this.yAxis + 7)
    } else {
      this.doc.rect(xAxis , this.yAxis + 5, 2, 2, 'S')
      this.doc.setFontSize(8)
      this.doc.text(answer, xAxis + 3, this.yAxis + 7)
    }
  }

  handleLongAnswer(questionNumber, answer, index){
    // !!! make sure fill is dependent on multiselect or not
      let xAxis = 10
      let fillStyle;
      const multiSelect = QuestionMap[questionNumber].multiselect

      if (multiSelect) {
        fillStyle = this.formData.get(questionNumber).has(answer) ? 'F': 'S' 
      } else {
        fillStyle = answer === this.formData.get(questionNumber) ? 'F': 'S' 
      }

      const firstHalf = answer.substring(0, 70)
      const secondHalf = answer.substring(71)
      const answerArr = [firstHalf, secondHalf]
      this.doc.rect(xAxis , this.yAxis + 5, 2, 2, fillStyle)
      this.doc.setFontSize(8)

      this.doc.text(answerArr, xAxis + 3, this.yAxis + 7)
      this.yAxis += 7
  }

  handleProblematicQuestions(questionNumber, answer, index){
    switch(questionNumber) {
      case '17': 
      case '18': 
        this.handle17(questionNumber, answer, index);
        break;
      case '26': 
        this.handle26(questionNumber, answer, index);
        break;
    }
  }

  handle26(questionNumber, answer, index){
    this.doc.text('IV. PERTINENT NEW HISTORY - CURRENT SIGNS/SYMPTOMS - FINDINGS', 10, this.yAxis);

    this.doc.setFontSize(8)
    this.doc.text(this.formData.get(questionNumber), 10, this.yAxis + 7)
    }


  handle17(questionNumber, answer, index){
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

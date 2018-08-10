import QuestionMap from '../../../question-map.json';
import jsPDF from 'jspdf'
import map from 'lodash/map'

class PdfMaker {
  constructor(formData) {
    this.questionMap = QuestionMap;
    this.formData = formData;
    this.doc = new jsPDF()
    this.yAxis = 36;

    var list = this.doc.getFontList()
      //console.log('list', list);
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
    this.doc.setFontStyle('bold')
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
    this.doc.text('_'.repeat(200), 0, 24);
    this.doc.setFontStyle('normal')
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
    const questionCount = Array.from(Array(27)).map((e,i)=>(i+ 1).toString())
    let questionXAxis = 0
    questionCount.map((questionNumber, index) => {
      this.doc.setFontSize(12)

      if(questionNumber === '2'){
        this.doc.setFontStyle('bold')
        this.doc.text('I. MENTAL STATUS ASSESSMENT', 10, this.yAxis);
        this.doc.rect(8, 49, 194, 10, 's')
        this.doc.setFontStyle('normal')
        this.yAxis += 8
      }

      if(questionNumber === '18'){
        this.doc.setFontStyle('bold')
        this.doc.text('Risk of Harm To Self and Others', 10 , this.yAxis);
        this.doc.setFontStyle('normal')
        this.transcribeHarmAnswers();
        this.yAxis += 15;
        return;
      }

      if(questionNumber === '19'){
        return;
      }

      if(questionNumber === '23'){
        this.doc.setFontStyle('bold')
        this.doc.text('III. TREATMENT PLAN', 10, this.yAxis);
        this.doc.rect(8, 86, 194, 10, 's')
        this.doc.setFontStyle('normal')
        this.yAxis += 8
      }

      if(questionNumber === '20'){
        this.doc.addPage();
        this.yAxis = 20
        this.doc.setFontStyle('bold')
        this.doc.text('II. ASSESSMENT', 10, this.yAxis);
        this.doc.setFontStyle('normal')
        this.doc.rect(8, 13, 194, 10, 's')
        this.yAxis += 8
        questionXAxis = 0
      }

      if (this.questionMap[questionNumber].format === "3") {
        this.doc.setFontStyle('bold')
        this.doc.text(this.questionMap[questionNumber].question, 10 + questionXAxis, this.yAxis);
        this.doc.setFontStyle('normal')
        this.transcribeTriplexAnswers(questionNumber, this.yAxis, questionXAxis)
        questionXAxis += 65;

        const nextLineQuestion = ["Impulse Control:", "Memory - Remote Past" ]
        if (nextLineQuestion.includes(this.questionMap[questionNumber].question)) {
          questionXAxis = 0;
          this.yAxis += 15;
        }
        return;
      }

      this.doc.setFontStyle('bold')
      this.doc.text(this.questionMap[questionNumber].question, 10 , this.yAxis);
      this.doc.setFontStyle('normal')
      this.transcribeAnswers(questionNumber)

        const singleLineQuestions = ['3', '11', '16']
        if(singleLineQuestions.includes(questionNumber)) {
          this.yAxis += 10;
        }
        else {
          this.yAxis += 15;
        }
    })

    this.transcribeSignatureArea()
  }

  transcribeHarmAnswers(){
    const suicideAnswers = QuestionMap['18'].answers
    const suicideFormAnswer = this.formData.get('18')
    const homicideAnswers = QuestionMap['19'].answers
    const homicideFormAnswer = this.formData.get('19')

    map(suicideAnswers, (answer, index) => {
      let xAxis = 10
      switch(index) {
        case 0: 
          break;
        case 1: 
          xAxis += 65
          break;
        case 2: 
          xAxis = 10
          this.yAxis += 5
          break;
        case 3: 
          xAxis += 65
          break;
      }
      
      const fillStyle = suicideFormAnswer .has(answer) ? 'F': 'S' 
      this.doc.rect(xAxis, this.yAxis + 5, 2, 2, fillStyle)
      this.doc.setFontSize(8)
      this.doc.text(answer, xAxis + 3, this.yAxis + 7)
    })
    this.yAxis -= 5

    map(homicideAnswers, (answer, index) => {
      let xAxis = 105
      switch(index) {
        case 0: 
          break;
        case 1: 
          xAxis += 65
          break;
        case 2: 
          xAxis = 105
          this.yAxis += 5
          break;
        case 3: 
          xAxis += 65
          break;
      }
      
      const fillStyle = homicideFormAnswer .has(answer) ? 'F': 'S' 
      this.doc.rect(xAxis, this.yAxis + 5, 2, 2, fillStyle)
      this.doc.setFontSize(8)
      this.doc.text(answer, xAxis + 3, this.yAxis + 7)
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

  transcribeAnswers(questionNumber){
    const answers = QuestionMap[questionNumber].answers
    const formAnswer = this.formData.get(questionNumber)
    let xAxis = 10
    answers.map((answer, index) => {

      if (QuestionMap[questionNumber].problematic)  {
        this.handleEssay(questionNumber, answer, index);
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

  handleEssay(questionNumber, answer, index){
    this.doc.setFontStyle('bold')
    this.doc.text('IV. PERTINENT NEW HISTORY - CURRENT SIGNS/SYMPTOMS - FINDINGS', 10, this.yAxis);
    this.doc.rect(8, 218, 194, 10, 's')
    this.doc.setFontStyle('normal')

    this.doc.setFontSize(8)
    const splitAnswer = this.doc.splitTextToSize(this.formData.get(questionNumber), 180);
    this.doc.text(splitAnswer, 10, this.yAxis + 7)
  }
}

export default PdfMaker 

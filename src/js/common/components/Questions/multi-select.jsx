import React, { PureComponent } from 'react';
import QuestionComponent from './QuestionComponent';
import map from 'lodash/map'

class MultiSelect extends QuestionComponent {
  constructor(props){
    super(props)
  }

  handleSubmit(e) {
    console.log('ya ponche hum');
    return
    const { handleSelection } = this.props;
    e.preventDefault();
    const response = e.target.value;
    if (response === "Other") {
      this.setState({
        fullAnswerFlag: true
      });
    }
    else {
      this.setState({
        fullAnswerFlag: false 
      });
      handleSelection(response)
    }
  }

  renderButtons(){
    return map(this.answerKey, (answer, alphabet) => {
      return <button type="button" className="btn btn-default btn-block" key={alphabet} value={answer} onClick={this.handleSubmit.bind(this)}>{alphabet + '. ' + answer}</button>
    })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h2>{this.props.title}</h2>
          { this.renderButtons() }
          <button className="btn btn-primary btn-block" value={this.state.text} onClick={handleSubmit}>Next</button>
        </div>
        )
  }
}

export default MultiSelect;


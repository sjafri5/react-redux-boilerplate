import React, { PureComponent } from 'react';
import QuestionComponent from './QuestionComponent';
import map from 'lodash/map'

class MultiSelect extends QuestionComponent {
  constructor(props){
    super(props)
      this.state = {
        selections: new Set()
      }

    this.handleKeyDown= () => {}
  }

  handleSubmit(e) {
    const { handleSelection } = this.props;

    this.setState({
      fullAnswerFlag: false 
    });

    this.setState({selections: new Set()})
    handleSelection(this.state.selections)
  }

  handleMultiSelect(e) {
    e.preventDefault();
    let selections = this.state.selections;
    const response = e.target.value;
    selections.add(response)

    this.setState({
      selections
    })
    this.forceUpdate();
  }


  renderButtons(){
    return map(this.answerKey, (answer, alphabet) => {
      const buttonColor = this.state.selections.has(answer)  ? 'btn-success' : 'btn-default'

      return <button type="button" className={"btn btn-block " + buttonColor} key={alphabet} value={answer} onClick={this.handleMultiSelect.bind(this)}>{alphabet + '. ' + answer}</button>
    })
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h2>{this.props.title}</h2>
          <h4>Select All that Apply</h4>
          { this.renderButtons() }
          <button className="btn btn-primary btn-block" value={this.state.text} onClick={this.handleSubmit.bind(this)}>Next</button>
        </div>
        )
  }
}

export default MultiSelect;


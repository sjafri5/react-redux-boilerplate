import React, { PureComponent } from 'react';
import QuestionComponent from './QuestionComponent';
import map from 'lodash/map'

class MultiSelect extends QuestionComponent {
  constructor(props){
    super(props)
      this.state = {
        selections: new Set()
      }
  }

  handleSubmit(e) {
    const { handleSelection } = this.props;
    if (this.state.selections.size < 1) { return; }

    this.setState({
      fullAnswerFlag: false 
    });

    this.setState({selections: new Set()})
    handleSelection(this.state.selections)
  }

  handleKeyDown(e){
    if (e.key === 'Enter') {
      this.handleSubmit()
    }
  }

  handleMultiSelect(e) {
    e.preventDefault();
    let selections = this.state.selections;
    const response = e.target.value;
    this.refs[response].blur();
    selections.add(response)

    this.setState({
      selections
    })
    this.forceUpdate();
  }


  renderButtons(){
    return map(this.answerKey, (answer, alphabet) => {
      const buttonColor = this.state.selections.has(answer)  ? 'btn-success' : 'btn-secondary'

      return <button type="button" className={"btn btn-block " + buttonColor} key={alphabet} value={answer} ref={answer} onClick={this.handleMultiSelect.bind(this)}>{alphabet + '. ' + answer}</button>
    })
  }

  render() {
    const { handleSubmit } = this.props;
    const disabled = this.state.selections.size < 1 ? 'disabled' : '';
    return (
        <div>
          <h2>{this.props.title}</h2>
          <h4>Select All that Apply</h4>
          { this.renderButtons() }
          <button className={"btn btn-primary btn-block " + disabled} value={this.state.text} onClick={this.handleSubmit.bind(this)}>Next</button>
        </div>
        )
  }
}

export default MultiSelect;


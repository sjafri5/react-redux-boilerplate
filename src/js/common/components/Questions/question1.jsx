import React, { PureComponent } from 'react';
import QuestionComponent from './QuestionComponent';

class Question1 extends QuestionComponent {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <div>
          <h2>{this.props.title}</h2>
          { this.state.fullAnswerFlag ? this.renderInput() : null }
          { this.renderButtons() }
        </div>
        )
  }
}

export default Question1;

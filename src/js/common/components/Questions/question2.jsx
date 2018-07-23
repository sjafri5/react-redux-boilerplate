import React, { PureComponent } from 'react';
import QuestionComponent from './QuestionComponent';

class Question2 extends QuestionComponent {
  constructor(props){
    super(props)
  }

  render() {
    return (
        <div>
          <h2>{this.props.title}</h2>
          { this.renderButtons() }
        </div>
        )
  }
}

export default Question2;


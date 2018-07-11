import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom'

import './Example.css';

class Main extends PureComponent {
  constructor(props){
    super(props)
      console.log('props', props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const response = e.target.value;
    this.props.submitResponse({questionNumber: 1, response})
    this.props.nextQuestion 
  }

  render() {
    const { example } = this.props;

      return (
        <div className="exampleOutput">
          <h1>Coordination of care provided with:</h1>
            <button ref="nursing staff" name="careCoordination" value={'Nursing staff'} onClick={this.handleSubmit.bind(this)}>
              Nursing Staff
              </button>
            <button ref="treatment team" name="careCoordination" value={'Treatment Team'} onClick={this.handleSubmit.bind(this)}>
              Treatment Team 
              </button>
        </div>
      );
  }
}

export default Main;


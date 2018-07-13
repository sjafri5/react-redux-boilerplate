
import React, { PureComponent } from 'react';

class Question5 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>I. MENTAL STATUS ASSESSMENT</h1>
          <h2>Behavioral:</h2>
          <button value={'Improving'} onClick={handleSubmit}>Improving</button>
          <button value={'Well Controlled'} onClick={handleSubmit}>Well Controlled</button>
          <button value={'Resolved'} onClick={handleSubmit}>Resolved</button>
          <button value={'Poorly Controlled'} onClick={handleSubmit}>Poorly Controlled</button>
          <button value={'Worsening'} onClick={handleSubmit}>Worsening</button>
          <button value={'Failing to Change'} onClick={handleSubmit}>Failing to Change</button>
          <button value={'Minimal Improvement'} onClick={handleSubmit}>Minimal Improvement</button>
          <button value={'Other'} onClick={handleSubmit}>Other</button>
        </div>
        )
  }
}

export default Question5;

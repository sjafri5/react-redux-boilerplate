
import React, { PureComponent } from 'react';

class Question11 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    console.log('this.propsasfasf', this.props);
    return (
        <div>
          <h1>I. MENTAL STATUS ASSESSMENT</h1>
          <h2>Attention/Concentration:</h2>
          <button value={'Intact'} onClick={handleSubmit}>Intact</button>
          <button value={'Attentive/Focused'} onClick={handleSubmit}>Attentive/Focused</button>
          <button value={'Inattentive'} onClick={handleSubmit}>Inattentive</button>
          <button value={'Distracted'} onClick={handleSubmit}>Distracted</button>
          <button value={'Poor Attention'} onClick={handleSubmit}>Poor Attention</button>
          <button value={'Confused'} onClick={handleSubmit}>Confused</button>
        </div>
        )
  }
}

export default Question11;

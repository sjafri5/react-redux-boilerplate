
import React, { PureComponent } from 'react';

class Question20 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>II. ASSESSMENT</h1>
          <h2>Overall Response to Medication:</h2>
          <button value={'Poor Response'} onClick={handleSubmit}>Poor Response</button>
          <button value={'Partial Response'} onClick={handleSubmit}>Partial Response</button>
          <button value={'Improving'} onClick={handleSubmit}>Improving</button>
          <button value={'Tolerating'} onClick={handleSubmit}>Tolerating</button>
          <button value={'Resolved'} onClick={handleSubmit}>Resolved</button>
          <button value={'Side Effects'} onClick={handleSubmit}>Side Effects</button>
          <button value={'Other'} onClick={handleSubmit}>Other</button>
        </div>
        )
  }
}

export default Question20;

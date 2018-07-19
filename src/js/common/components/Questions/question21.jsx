
import React, { PureComponent } from 'react';

class Question21 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>II. ASSESSMENT</h1>
          <h2>Overall Response to Treatment:</h2>
          <button value={'Reached maximum benefit'} onClick={handleSubmit}>Reached maximum benefit</button>
          <button value={'Improving but has not reached maximum benefit from this level of care'} onClick={handleSubmit}>Improving but has not reached maximum benefit from this level of care</button>
          <button value={'Minimum improvement'} onClick={handleSubmit}>Minimum improvement</button>
          <button value={'Showing no progress'} onClick={handleSubmit}>Showing no progress</button>
          <button value={'Deteriorating'} onClick={handleSubmit}>Deteriorating</button>
          <button value={'Other'} onClick={handleSubmit}>Other</button>
        </div>
        )
  }
}

export default Question21;

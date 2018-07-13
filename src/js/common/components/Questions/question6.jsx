import React, { PureComponent } from 'react';

class Question6 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>I. MENTAL STATUS ASSESSMENT</h1>
          <h2>Insight:</h2>
          <button value={'Good'} onClick={handleSubmit}>Good</button>
          <button value={'Fair'} onClick={handleSubmit}>Fair</button>
          <button value={'Poor'} onClick={handleSubmit}>Poor</button>
          <button value={'Impaired'} onClick={handleSubmit}>Impaired</button>
        </div>
        )
  }
}

export default Question6;

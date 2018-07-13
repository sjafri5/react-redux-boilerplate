import React, { PureComponent } from 'react';

class Question2 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>I. MENTAL STATUS ASSESSMENT</h1>
          <h2>Orientation:</h2>
          <button value={'Person'} onClick={handleSubmit}>Person</button>
          <button value={'Situation'} onClick={handleSubmit}>Situation</button>
          <button value={'Place'} onClick={handleSubmit}>Place</button>
          <button value={'Time'} onClick={handleSubmit}>Time</button>
        </div>
        )
  }
}

export default Question2;


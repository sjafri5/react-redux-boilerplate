import React, { PureComponent } from 'react';

class Question3 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    console.log('this.propsasfasf', this.props);
    return (
        <div>
          <h1>I. MENTAL STATUS ASSESSMENT</h1>
          <h2>Appearance</h2>
          <button value={'Neat & Clean'} onClick={handleSubmit}>Neat & Clean</button>
          <button value={'Poor Hygeine'} onClick={handleSubmit}>Poor Hygeine</button>
          <button value={'Malodorous'} onClick={handleSubmit}>Maladorous</button>
          <button value={'Bizarre'} onClick={handleSubmit}>Bizzarre</button>
          <button value={'Disheveled'} onClick={handleSubmit}>Disheveled</button>
          <button value={'Other'} onClick={handleSubmit}>Other</button>
        </div>
        )
  }
}

export default Question3;


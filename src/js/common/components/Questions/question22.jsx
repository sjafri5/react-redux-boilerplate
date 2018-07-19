
import React, { PureComponent } from 'react';

class Question5 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>Barriers to Discharge:</h1>
          <button value={'Discharge Planning'} onClick={handleSubmit}>Discharge Planning</button>
          <button value={'High Risk for Relapse'} onClick={handleSubmit}>High Risk for Relapse</button>
          <button value={'Lack of Support'} onClick={handleSubmit}>Lack of Support</button>
          <button value={'Noncompliance'} onClick={handleSubmit}>Noncompliance</button>
          <button value={'Medication Changes'} onClick={handleSubmit}>Medication Changes</button>
          <button value={'Family Session'} onClick={handleSubmit}>Family Session</button>
          <button value={'Safety Issues'} onClick={handleSubmit}>Safety Issues</button>
          <button value={'Other'} onClick={handleSubmit}>Other</button>
        </div>
        )
  }
}

export default Question5;

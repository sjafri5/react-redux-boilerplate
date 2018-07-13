import React, { PureComponent } from 'react';

class Question4 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>I. MENTAL STATUS ASSESSMENT</h1>
          <h1>Behavior:</h1>
          <button value={'Cooperative'} onClick={handleSubmit}>Nursing Staff</button>
          <button value={'Resistent'} onClick={handleSubmit}>Treatment Team</button>
          <button value={'Anxious'} onClick={handleSubmit}>Social Work</button>
          <button value={'Defensive'} onClick={handleSubmit}>Physician/s</button>
          <button value={'Guarded'} onClick={handleSubmit}>Family</button>
          <button value={'Passive'} onClick={handleSubmit}>Passive</button>
          <button value={'Threatening'} onClick={handleSubmit}>Threatening</button>
          <button value={'Hyperactive'} onClick={handleSubmit}>Hyperactive</button>
          <button value={'Impulsive'} onClick={handleSubmit}>Impulsive</button>
          <button value={'Isolated'} onClick={handleSubmit}>Isolated</button>
          <button value={'Withdrawn'} onClick={handleSubmit}>Withdrawn</button>
          <button value={'Distrustful'} onClick={handleSubmit}>Distrustful</button>
          <button value={'Evasive'} onClick={handleSubmit}>Evasive</button>
          <button value={'Other'} onClick={handleSubmit}>Other</button>
        </div>
        )
  }
}

export default Question4;


import React, { PureComponent } from 'react';

class Question18 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h2>Risk of Harm to Others:</h2>
          <button value={'Patient denies thought, plan or ideation to harm others'} onClick={handleSubmit}>Patient denies thought, plan or ideation to harm others</button>
          <button value={'Passive thoughts to hurt others'} onClick={handleSubmit}>Passive thoughts to hurt others</button>
          <button value={'Inability to care for self'} onClick={handleSubmit}>Inability to care for self</button>
          <button value={'Homicidal Risk'} onClick={handleSubmit}>Homicidal Risk</button>
        </div>
        )
  }
}

export default Question18;

import React, { PureComponent } from 'react';

class Question17 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h2>Risk of Harm to Self Others:</h2>
          <button value={'Patient denies thought, plan or ideation to harm self'} onClick={handleSubmit}>Patient denies thought, plan or ideation to harm self</button>
          <button value={'Passive death wishes'} onClick={handleSubmit}>Passive death wishes</button>
          <button value={'Patient unable to contract for safety'} onClick={handleSubmit}>Patient unable to contract for safety</button>
          <button value={'Suicidal Risk'} onClick={handleSubmit}>Suicidal Risk</button>
        </div>
        )
  }
}

export default Question17;


import React, { PureComponent } from 'react';

class Question24 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>III. TREATMENT PLAN</h1>
          <h2>Medication</h2>
          <button value={'Continue current medication/No change'} onClick={handleSubmit}>Continue current medication/No change</button>
          <button value={'Change (Specify medication and rationale in narrative)'} onClick={handleSubmit}>Change (Specify medication and rationale in narrative)</button>
        </div>
        )
  }
}

export default Question24;

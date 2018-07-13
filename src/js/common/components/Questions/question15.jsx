
import React, { PureComponent } from 'react';

class Question15 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h2>Thought Process:</h2>
          <button value={'Logical'} onClick={handleSubmit}>Logical</button>
          <button value={'Goal Directed'} onClick={handleSubmit}>Goal Directed</button>
          <button value={'Illogical'} onClick={handleSubmit}>Illogical</button>
          <button value={'Poverty of Thought'} onClick={handleSubmit}>Poverty of Thought</button>
          <button value={'Disorganized'} onClick={handleSubmit}>Disorganized</button>
          <button value={'Intact'} onClick={handleSubmit}>Intact</button>
          <button value={'Loose'} onClick={handleSubmit}>Loose</button>
          <button value={'Tangential'} onClick={handleSubmit}>Tangential</button>
          <button value={'Blocking'} onClick={handleSubmit}>Blocking</button>
          <button value={'Circumstantial'} onClick={handleSubmit}>Circumstantial</button>
          <button value={'Flight of Ideas'} onClick={handleSubmit}>Flight of Ideas</button>
          <button value={'Perservation'} onClick={handleSubmit}>Perservation</button>
          <button value={'Other'} onClick={handleSubmit}>Other</button>
        </div>
        )
  }
}

export default Question15;

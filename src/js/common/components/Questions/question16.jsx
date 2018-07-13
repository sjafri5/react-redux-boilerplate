
import React, { PureComponent } from 'react';

class Question16 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    console.log('this.propsasfasf', this.props);
    return (
        <div>
          <h2>Thought Content:</h2>
          <button value={'Appropriate -- Problems Denied'} onClick={handleSubmit}>Appropriate -- Problems Denied</button>
          <button value={'Paranoid'} onClick={handleSubmit}>Paranoid</button>
          <button value={'Obsessive'} onClick={handleSubmit}>Obsessive</button>
          <button value={'Delusional'} onClick={handleSubmit}>Delusional</button>
          <button value={'Religiosity'} onClick={handleSubmit}>Religiosity</button>
          <button value={'Other'} onClick={handleSubmit}>Other</button>
          <button value={'Denies Hallucinations'} onClick={handleSubmit}>Denies Hallucinations</button>
          <button value={'Hallucinations'} onClick={handleSubmit}>Hallucinations:</button>
        </div>
        )
  }
}

export default Question16;

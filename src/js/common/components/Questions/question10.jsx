
import React, { PureComponent } from 'react';

class Question10 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>I. MENTAL STATUS ASSESSMENT</h1>
          <h2>Affect:</h2>
          <button value={'Appropriate'} onClick={handleSubmit}>Appropriate</button>
          <button value={'Incongruent'} onClick={handleSubmit}>Incongruent</button>
          <button value={'Manic'} onClick={handleSubmit}>Manic</button>
          <button value={'Labile'} onClick={handleSubmit}>Labile</button>
          <button value={'Exaggerated'} onClick={handleSubmit}>Exaggerated</button>
          <button value={'Blunted'} onClick={handleSubmit}>Blunted</button>
          <button value={'Flat'} onClick={handleSubmit}>Flat</button>
          <button value={'Apathetic'} onClick={handleSubmit}>Apathetic</button>
          <button value={'Restricted'} onClick={handleSubmit}>Restricted</button>
          <button value={'Reactive'} onClick={handleSubmit}>Reactive</button>
          <button value={'Other'} onClick={handleSubmit}>Other</button>
        </div>
        )
  }
}

export default Question10;

import React, { PureComponent } from 'react';

class Question14 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>I. MENTAL STATUS ASSESSMENT</h1>
          <h2>Memory:</h2>
          <h3>Remote Past:</h3>
          <button value={'Impaired'} onClick={handleSubmit}>Impaired</button>
          <button value={'Intact'} onClick={handleSubmit}>Intact</button>
        </div>
        )
  }
}

export default Question14;

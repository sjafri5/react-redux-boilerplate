import React, { PureComponent } from 'react';

class Question13 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    console.log('this.propsasfasf', this.props);
    return (
        <div>
          <h1>I. MENTAL STATUS ASSESSMENT</h1>
          <h2>Memory:</h2>
          <h3>Recent Past:</h3>
          <button value={'Impaired'} onClick={handleSubmit}>Impaired</button>
          <button value={'Intact'} onClick={handleSubmit}>Intact</button>
        </div>
        )
  }
}

export default Question13;

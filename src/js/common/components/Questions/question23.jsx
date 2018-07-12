import React, { PureComponent } from 'react';

class Question5 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    console.log('this.propsasfasf', this.props);
    return (
        <div>
          <h1>Justification for continued stay:</h1>
          <button value={'Halting'} onClick={handleSubmit}>Halting</button>
          <button value={'Pressured'} onClick={handleSubmit}>Pressured</button>
          <button value={'Slow'} onClick={handleSubmit}>Slow</button>
          <button value={'Rambling'} onClick={handleSubmit}>Rambling</button>
          <button value={'Rapid'} onClick={handleSubmit}>Rapid</button>
          <button value={'Fluent'} onClick={handleSubmit}>Fluent</button>
          <button value={'Mute'} onClick={handleSubmit}>Mute</button>
          <button value={'Soft'} onClick={handleSubmit}>Soft</button>
          <button value={'Loud'} onClick={handleSubmit}>Loud</button>
        </div>
        )
  }
}

export default Question5;

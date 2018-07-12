
import React, { PureComponent } from 'react';

class Question7 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    console.log('this.propsasfasf', this.props);
    return (
        <div>
          <h1>Judgement:</h1>
          <button value={'Normal Rate'} onClick={handleSubmit}>Normal Rate</button>
          <button value={'Halting'} onClick={handleSubmit}>Halting</button>
          <button value={'Pressured'} onClick={handleSubmit}>Pressured</button>
          <button value={'Slow'} onClick={handleSubmit}>Slow</button>
        </div>
        )
  }
}

export default Question7;

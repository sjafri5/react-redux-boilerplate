import React, { PureComponent } from 'react';

class Question9 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    console.log('this.propsasfasf', this.props);
    return (
        <div>
          <h1>Mood:</h1>
          <button value={'Normal Rate'} onClick={handleSubmit}>Normal Rate</button>
          <button value={'Halting'} onClick={handleSubmit}>Halting</button>
          <button value={'Pressured'} onClick={handleSubmit}>Pressured</button>
        </div>
        )
  }
}

export default Question9;

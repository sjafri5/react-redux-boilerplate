
import React, { PureComponent } from 'react';

class Question10 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    console.log('this.propsasfasf', this.props);
    return (
        <div>
          <h1>Affect:</h1>
          <button value={'Normal Rate'} onClick={handleSubmit}>Normal Rate</button>
          <button value={'Halting'} onClick={handleSubmit}>Halting</button>
        </div>
        )
  }
}

export default Question10;

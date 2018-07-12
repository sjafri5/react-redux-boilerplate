
import React, { PureComponent } from 'react';

class Question6 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>Insight:</h1>
          <button value={'Normal Rate'} onClick={handleSubmit}>Normal Rate</button>
        </div>
        )
  }
}

export default Question6;

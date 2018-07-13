
import React, { PureComponent } from 'react';

class Question26 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>PERTINENT NEW HISTORY – CURRENT SIGNS AND SYMPTOMS - FINDINGS:</h1>
          <textarea>
          </textarea>
          <button value={'Submit'} onClick={handleSubmit}>Submit</button>
        </div>
        )
  }
}

export default Question26;

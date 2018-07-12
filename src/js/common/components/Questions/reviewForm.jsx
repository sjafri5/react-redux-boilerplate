import React, { PureComponent } from 'react';

class Review extends PureComponent {
  render() {
    const { handleDownload } = this.props;
    return (
        <div>
          <h1>Review Page</h1>
          <button value={'Download PDF'} onClick={handleDownload}>Neat & Clean</button>
        </div>
        )
  }
}

export default Review;


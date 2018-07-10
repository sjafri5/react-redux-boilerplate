import React, { PureComponent } from 'react';

import './Example.css';

class ExampleWithError extends PureComponent {
  render() {
    const { example } = this.props;
    const result = example && example.result ? example.result : null;

    return <div />;
  }
}

export default ExampleWithError;

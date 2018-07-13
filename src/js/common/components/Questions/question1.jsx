import React, { PureComponent } from 'react';

class Question1 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    console.log('this.propsasfasf', this.props);
    return (
        <div>
          <h2>Coordination of care provided with:</h2>
          <button value={'Nursing staff'} onClick={handleSubmit}>Nursing Staff</button>
          <button value={'Treatment Team'} onClick={handleSubmit}>Treatment Team</button>
          <button value={'Social Work'} onClick={handleSubmit}>Social Work</button>
          <button value={'Physician/s'} onClick={handleSubmit}>Physician/s</button>
          <button value={'Family'} onClick={handleSubmit}>Family</button>
          <button value={'Caregiver'} onClick={handleSubmit}>Caregiver</button>
          <button value={'Other'} onClick={handleSubmit}>Other</button>
        </div>
        )
  }
}

export default Question1;

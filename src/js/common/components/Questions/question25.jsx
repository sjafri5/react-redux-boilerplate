
import React, { PureComponent } from 'react';

class Question25 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>Therapy/Treatment:</h1>
          <button value={'Continue current treatment plan'} onClick={handleSubmit}>Continue current treatment plan</button>
          <button value={'Change in observation level or precaution(s):'} onClick={handleSubmit}>Change in observation level or precaution(s):</button>
          <button value={'Lab ordered:'} onClick={handleSubmit}>Lab ordered:</button>
          <button value={'Modify treatment plan (Describe changes to treatment plan):'} onClick={handleSubmit}>Modify treatment plan (Describe changes to treatment plan):</button>
          <button value={'Order ____________________________ medications and titrate dosage in order to:'} onClick={handleSubmit}>Order ____________________________ medications and titrate dosage in order to:</button>
          <button value={'Individual session with patient to educate on symptom management of: _________________________________________ through the use of therapy.'} onClick={handleSubmit}>Individual session with patient to educate on symptom management of: _________________________________________ through the use
            of therapy</button>
        </div>
        )
  }
}

export default Question25;

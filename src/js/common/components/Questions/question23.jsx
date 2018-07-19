import React, { PureComponent } from 'react';

class Question23 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>Justification for continued stay:</h1>
          <button value={'Continued danger to self and/or others'} onClick={handleSubmit}>Continued danger to self and/or others</button>
          <button value={'Continued behavior intolerable to patient or society'} onClick={handleSubmit}>Continued behavior intolerable to patient or society</button>
          <button value={'High probability of A or B recurring if patient were to be discharged, and imminent re-hospitalization likely'} onClick={handleSubmit}>High probability of A or B recurring if patient were to be discharged, and imminent re-hospitalization likely</button>
          <button value={'Recovery depends on use of modality, but patient unwilling or unable to cooperate'} onClick={handleSubmit}>Recovery depends on use of modality, but patient unwilling or unable to cooperate</button>
          <button value={'Major change of clinical conditions require extended treatment'} onClick={handleSubmit}>Major change of clinical conditions require extended treatment</button>
          <button value={'Has a general medical condition (other than mental disorder) requiring hospital care and due to psychological aspects, patient cannot be managed as well on non-psychiatric unit.'} onClick={handleSubmit}>Has a general medical condition (other than mental disorder) requiring hospital care and due to psychological aspects, patient cannot be managed as well on non-psychiatric unit.</button>
        </div>
        )
  }
}

export default Question23;

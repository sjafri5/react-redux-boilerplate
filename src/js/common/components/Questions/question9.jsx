import React, { PureComponent } from 'react';

class Question9 extends PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <h1>Mood:</h1>
          <button value={'Neutral'} onClick={handleSubmit}>Neutral</button>
          <button value={'Euthymic'} onClick={handleSubmit}>Euthymic</button>
          <button value={'Depressed'} onClick={handleSubmit}>Depressed</button>
          <button value={'Elated'} onClick={handleSubmit}>Elated</button>
          <button value={'Euphoric'} onClick={handleSubmit}>Euphoric</button>
          <button value={'Angry'} onClick={handleSubmit}>Angry</button>
          <button value={'Anxious'} onClick={handleSubmit}>Anxious</button>
          <button value={'Irritable'} onClick={handleSubmit}>Irritable</button>
          <button value={'Sad'} onClick={handleSubmit}>Sad</button>
          <button value={'Other'} onClick={handleSubmit}>Other</button>
        </div>
        )
  }
}

export default Question9;

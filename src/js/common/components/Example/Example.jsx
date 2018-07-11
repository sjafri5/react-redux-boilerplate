import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom'

import './Example.css';

class Main extends PureComponent {
  constructor(props){
    super(props)
      console.log('props', props);

    this.state = {
      careCoordination: ''
    }
  }
  handleChange(output) {
    this.setState({
      careCoordination: output.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const response = e.target.value
    this.props.submitResponse({questionNumber: 1, response})
  }

  render() {
    const { example } = this.props;

      return (
        <div className="exampleOutput">
          <h1>Coordination of care provided with:</h1>
            <button ref="nursing staff" name="careCoordination" value={'Nursing staff'} onClick={this.handleSubmit.bind(this)}>
              Nursing Staff
              </button>
            <button ref="treatment team" name="careCoordination" value={'Treatment Team'} onClick={this.handleSubmit.bind(this)}>
              Treatment Team 
              </button>
          <p>Answer: {this.state.careCoordination}</p>
        </div>
      );
  }
}

export default Main;

          //<form onSubmit={this.handleSubmit.bind(this)}>
            //<label>
            //</label>
            //<label>
              //<input ref="care" name="careCoordination" type="radio" value={'Treatment Team'} onChange={this.handleChange.bind(this)} />
              //Treatment Team
            //</label>
            //<label>
              //<input ref="care" name="careCoordination" type="radio" value={'Social Work'} onChange={this.handleChange.bind(this)} />
              //Social Work
            //</label>
            //<label>
              //<input ref="care" name="careCoordination" type="radio" value={'Physician/s'} onChange={this.handleChange.bind(this)} />
              //Physician/s
            //</label>
            //<label>
              //<input ref="care" name="careCoordination" type="radio" value={'Family'} onChange={this.handleChange.bind(this)} />
              //Family 
            //</label>
            //<label>
              //<input ref="care" name="careCoordination" type="radio" value={'Caregiver'} onChange={this.handleChange.bind(this)} />
              //Caregiver 
            //</label>
            //<label>
              //<input ref="care" name="careCoordination" type="radio" value={'Other'} onChange={this.handleChange.bind(this)} />
              //Other 
            //</label>
            //<input type="submit" value="Submit" />
          //</form>

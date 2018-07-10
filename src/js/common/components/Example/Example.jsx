import React, { PureComponent } from 'react';

import './Example.css';

class Example extends PureComponent {
  constructor(props){
    super(props)

    this.state = {
      careCoordination: ''
    }
  }
  handleChange(output) {
    console.log('this', this);
    console.log('---------', output.target.value);
    this.setState({
      careCoordination: output.target.value
    })
  }

  render() {
    const { example } = this.props;
    const result = example && example.result ? example.result : null;

    console.log('-state--------', this.state);
    if (result && result.size && result.size > 0) {
      return (
        <div className="exampleOutput">
          <h1>Coordination of care provided with:</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input name="careCoordination" type="radio" value={'Nursing staff'} onChange={this.handleChange.bind(this)} />
              Nursing Staff
            </label>
            <label>
              <input name="careCoordination" type="radio" value={'Treatment Team'} onChange={this.handleChange.bind(this)} />
              Treatment Team
            </label>
            <label>
              <input name="careCoordination" type="radio" value={'Social Work'} onChange={this.handleChange.bind(this)} />
              Social Work
            </label>
            <label>
              <input name="careCoordination" type="radio" value={'Physician/s'} onChange={this.handleChange.bind(this)} />
              Physician/s
            </label>
            <label>
              <input name="careCoordination" type="radio" value={'Family'} onChange={this.handleChange.bind(this)} />
              Family 
            </label>
            <label>
              <input name="careCoordination" type="radio" value={'Caregiver'} onChange={this.handleChange.bind(this)} />
              Caregiver 
            </label>
            <label>
              <input name="careCoordination" type="radio" value={'Other'} onChange={this.handleChange.bind(this)} />
              Other 
            </label>
            <input type="submit" value="Submit" />
          </form>
          <p>Answer: {this.state.careCoordination}</p>
        </div>
      );
    }
    return <div />;
  }
}

export default Example;
          //<h1>Let&apos;s Get <span className="emphasize">Started</span></h1>
          //<p>If you see this screen, it means you are all setup \o/</p>
          //<p>The following JSON are showing contents coming from Redux, Saga and Config.</p>
          //<pre>
            //{JSON.stringify(result.toJS(), undefined, 2)}
          //</pre>

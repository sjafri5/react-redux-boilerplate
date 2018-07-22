import React, { PureComponent } from 'react';
import map from 'lodash/map';
import CommonPhrases from '../../../common-phrases.json';

class Main extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      addShortKey: false,
      text: ''
    }
  }

  handleAddKeys(){
    this.setState({
      addShortKey: true
    });
  }

  handleChange(e){
    e.preventDefault();
    let input = e.target.value;
    this.setState({
      text: input
    })
  }

  handleSubmitKeyChange(){
    const nextKeyNum = Object.keys(CommonPhrases).length + 1;
    CommonPhrases[nextKeyNum] = this.state.text;
    console.log('boobbbb', fs);
    fs.writeFile("./object.json", JSON.stringify({a: 1, b: 3}, null, 4), (err) => {
      if (err) {
        console.error(err);
        return;
      };
      console.log("File has been created");

    });


    file.writeFileSync('../../../common-phrases.json', JSON.stringify(CommonPhrases));
    console.log('yohoo');
    //console.log('file', file);

    //file.readFile('../../../common-phrases.json', 'utf8', function readFileCallback(err, data){
      //if (err){
        //console.log(err);
      //} else {
        //obj = JSON.parse(data); //now it an object
        //console.log('orazP homsilie', data);
        //obj.table.push({id: 2, square:3}); //add some data
        //json = JSON.stringify(obj); //convert it back to json
        //fs.writeFile('myjsonfile.json', json, 'utf8', callback); // write it back 

      //}
    //});

    this.setState({
      addShortKey: false
    });
  }

  displayAddShortKey(){
    if(this.state.addShortKey) {
      return (
          <div>
          <textarea rows="10" cols="80" onChange={this.handleChange.bind(this)} value={this.state.text}>
          </textarea>
          <button value={'Submit'} onClick={this.handleSubmitKeyChange.bind(this)}>Submit</button>
          </div>
          );
    }

    return null;
  }

  displayShortKeys(){
    return map(CommonPhrases, function(phrase, keyNum){
      return (
        <li key={keyNum} >
         {keyNum + ': ' + phrase}
        </li>
      )
    })
  }

  render() {

          //<button onClick={this.handleAddKeys.bind(this)} >Add ShortKeys</button>
      return (
        <div className="exampleOutput">
        {this.displayAddShortKey()}
        <h2>ShortKeys</h2>
          <ul>
            {this.displayShortKeys()}
          </ul>
        </div>
      );
  }
}

export default Main;


import React from 'react';
import CorpProp from './corpProp.js';
import CorpCargo from './corpCargo.js';
import CorpMed from './corpMed.js';
import CorpSpec from './corpSpec.js';

export class CorpPersons extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    pagesArr2:[<CorpProp />, <CorpCargo />, <CorpMed />, <CorpSpec />],
  };
}
createBody = (e) => {
  var table = [];
  table=this.state.pagesArr2.map((obj,i)=> {
    if (this.props.stateButtonsArr2[i] === true)
    return(this.state.pagesArr2[i]);
    else return null;
});
return table;
}
render(){

    return(<div className="PrivatePersons">
    <div className="dataTab">
            {this.createBody()}</div>
    </div>)
  }
}

export default CorpPersons;

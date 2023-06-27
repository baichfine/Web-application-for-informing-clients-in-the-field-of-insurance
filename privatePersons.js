import React from 'react';
import Cars from './cars.js';
import Lodging from './lodging.js';
import Health from './health.js';
import Property from './property.js';
import Travels from './travels.js';

export class PrivatePersons extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    pagesArr2:[<Cars />, <Lodging />, <Health />, <Property />, <Travels />],
  };
}
createBody = (e) => {
  var table = [];
  table=this.state.pagesArr2.map((obj,i)=> {
    if (this.props.stateButtonsArr1[i] === true)
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

export default PrivatePersons;

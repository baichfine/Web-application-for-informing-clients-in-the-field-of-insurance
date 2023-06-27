import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Administrator from './administrator.js';
import Client from './client.js';
import Employee from './employee.js';

class App extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    authorizated: false,
    user: "",
  };

}
//Авторизация
authorization = (e) => {
this.setState ({
  authorizated: !this.state.authorizated
})
}

render(){
  if (this.state.authorizated === true && this.state.user === "administrator") return(<Administrator authorizated={this.state.authorizated} authorization={this.authorization}/>)
  else if (this.state.authorizated === true && this.state.user === "employee") return(<Employee authorizated={this.state.authorizated} authorization={this.authorization}/>)
  else  return(<Client authorizated={this.state.authorizated} authorization={this.authorization}/>)
  }
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

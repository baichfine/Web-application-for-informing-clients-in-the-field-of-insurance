import React from 'react';
import eye from './svg/eye.svg';
import eyeClose from './svg/eyeClose.svg';
import ok from './svg/ok.svg';
import notok from './svg/notok.svg';
import update from 'immutability-helper';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

export class Registration extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    pass: ["password","password","password","password","password","password","password","password"],
    eye: [eye,eye,eye,eye,eye,eye,eye,eye],
    corpArr: ["Название организации: ","ИНН: ","Фамилия Имя: ","Дата рождения:","Контактный телефон: ","Электронная почта: ","Пароль: ","Повторите пароль: "],
    holdercorpArr:["Название","ИНН","Фамилия Имя","Дата","Телефон","E-mail", "Придумайте пароль", "Повторите пароль"],
    corpInpArr: ["","","","","","","",""],
    persArr: ["Фамилия Имя Отчество:","Дата рождения:","Контактный телефон:","Электронная почта:","Пароль: ","Повторите пароль: "],
    holderpersArr:["Фио","Дата","Телефон","E-mail", "Придумайте пароль", "Повторите пароль"],
    persInpArr: ["","","","","",""],
    persOrCorpBut1: "write1",
    persOrCorpBut2: "view1",
    persOrCorp: true,
    barpers: 0,
    barcorp: 0,
    check: false,
  };
}

eyeChange = (i) => {
  if (this.state.pass[i] === "password"){
    this.setState((state, props) => ({
      pass: update(state.pass, {[i]:  {$set: "text"}}),
      eye: update(state.eye, {[i]:  {$set: eyeClose}}),
    }))
}
else {
  this.setState((state, props) => ({
    pass: update(state.pass, {[i]:  {$set: "password"}}),
    eye: update(state.eye, {[i]:  {$set: eye}}),
  }))
}
}
registration = (e) => {
  this.setState ({
    error: true,
  })
  this.props.registration(e);
}
createUsersDataTablepers = (e) => {
  var table = [];
  table=this.state.persArr.map((obj,i)=> {
    if (i === 2)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.persInpArr[i]} placeholder={this.state.holderpersArr[i]} onChange={(e)=>{this.changeValueFuncpers(e, i);}}></input></td><td>{(this.state.persInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else if (i === 1) return (<tr key={i}><td>{obj}</td><td><input type="date" value ={this.state.persInpArr[i]} onChange={(e)=>{this.changeValueFuncpers(e, i);}}></input></td><td>{(this.state.persInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else if (i === 4 || i === 5) return (<tr key={i}><td>{obj}</td><td><input type={this.state.pass[i]} placeholder={this.state.holderpersArr[i]} value ={this.state.persInpArr[i]} onChange={(e)=>{this.changeValueFuncpers(e, i);}}></input><img id="imgGlaz" src={this.state.eye[i]} alt={this.state.eye[i]} onClick={(e)=>{this.eyeChange(i);}}/></td><td>{(this.state.persInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.persInpArr[i]} placeholder={this.state.holderpersArr[i]} onChange={(e)=>{this.changeValueFuncpers(e, i);}}></input></td><td>{(this.state.persInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
  });
  return table;
}
createUsersDataTablecorp = (e) => {
  var table = [];
  table=this.state.corpArr.map((obj,i)=> {
    if (i === 1 || i === 4)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.corpInpArr[i]} placeholder={this.state.holdercorpArr[i]} onChange={(e)=>{this.changeValueFunccorp(e, i);}}></input></td><td>{(this.state.corpInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else if (i === 3) return (<tr key={i}><td>{obj}</td><td><input type="date" value ={this.state.corpInpArr[i]} onChange={(e)=>{this.changeValueFunccorp(e, i);}}></input></td><td>{(this.state.corpInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else if (i === 6 || i === 7) return (<tr key={i}><td>{obj}</td><td><input type={this.state.pass[i]} placeholder={this.state.holdercorpArr[i]} value ={this.state.corpInpArr[i]} onChange={(e)=>{this.changeValueFunccorp(e, i);}}></input><img id="imgGlaz" src={this.state.eye[i]} alt={this.state.eye[i]} onClick={(e)=>{this.eyeChange(i);}}/></td><td>{(this.state.corpInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.corpInpArr[i]} placeholder={this.state.holdercorpArr[i]} onChange={(e)=>{this.changeValueFunccorp(e, i);}}></input></td><td>{(this.state.corpInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
  });
  return table;
}
changeValueFuncpers = (e, i) => {
  if (this.state.persInpArr[i] === "") this.bar = 1;
  if (e.target.value === "") this.bar = -1;
  var value = e.target.value;
    this.setState((state, props) => ({
      persInpArr: update(state.persInpArr, {[i]:  {$set: value}}),
      barpers: state.barpers + this.bar
    }))
    if (i === 0) this.namePers = this.state.persInpArr[0];
}
changeValueFunccorp = (e, i) => {
  if (this.state.corpInpArr[i] === "") this.bar = 1;
  if (e.target.value === "") this.bar = -1;
  var value = e.target.value;
    this.setState((state, props) => ({
      corpInpArr: update(state.corpInpArr, {[i]:  {$set: value}}),
      barcorp: state.barcorp + this.bar
    }))
    if (i === 2) this.nameCorp = this.state.corpInpArr[2];
}
check = (e)=> {
  this.setState({
    check: true
  })
}
clickpersOrCorpButtonFunc = (button) => {
  if (button === "view1")
    this.setState((state, props) => ({
      persOrCorpBut1: "write2",
      persOrCorpBut2: "view2",
      persOrCorp: false,
    }))
  else if (button === "write2")
    this.setState((state, props) => ({
      persOrCorpBut1: "write1",
      persOrCorpBut2: "view1",
      persOrCorp: true,
    }))
}
progressBarpersFunc = (e)=> {
  if (this.state.barpers === 6) return(true)
  else return(false)
}
progressBarcorpFunc = (e)=> {
  if (this.state.barcorp === 8) return(true)
  else return(false)
}
persOrCorpFunc = (e)=> {
  this.bar = 0;
  if (this.state.persOrCorp === true)
  return(<div>
    <p id="left2">Для регистрации укажите следующие данные:</p>
  <table><tbody>
    {this.createUsersDataTablepers()}
  </tbody></table>
  <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
  {(this.progressBarpersFunc() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Зарегистрироваться</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Зарегистрироваться</button>)}
  {(this.state.check === true && this.state.barpers < 6)?(<p className="check">Заполните все поля, чтобы зарегистрироваться!</p>):(null)}
  </div>)
  else return(<div>
    <p id="left2">Для регистрации укажите следующие данные:</p>
  <table><tbody>
    {this.createUsersDataTablecorp()}
  </tbody></table>
  <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
  {(this.progressBarcorpFunc() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Зарегистрироваться</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Зарегистрироваться</button>)}
  {(this.state.check === true && this.state.barcorp < 8)?(<p className="check">Заполните все поля, чтобы зарегистрироваться!</p>):(null)}
  </div>)
}
createZayvka = (e)=> {
  this.props.registration(this.num());
}
num = (e)=> {
  if (this.state.persOrCorp === true) return(this.namePers)
  else return(this.nameCorp)
}
render(){
    return(<div className="calcKasko">
    <div className="buttons"><button className={this.state.persOrCorpBut1} onClick={(e)=>{this.clickpersOrCorpButtonFunc(this.state.persOrCorpBut1);}}>Частное лицо</button><button className ={this.state.persOrCorpBut2} onClick={(e)=>{this.clickpersOrCorpButtonFunc(this.state.persOrCorpBut2);}}>Юр. лицо</button>
    </div>
    {this.persOrCorpFunc()}
    </div>)
  }
}

export default Registration;

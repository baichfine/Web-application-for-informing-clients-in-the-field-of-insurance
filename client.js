import React from 'react';
import update from 'immutability-helper';
import logo from './svg/logo.png';
import Insurance from './insurance.js';
import PrivatePersons from './privatePersons.js';
import CorpPersons from './corpPersons.js';
import FeedBack from './feedback.js';
import PersonalArea from './personalArea.js';



export class Client extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    nameButtonsArr: ["Страхование","Частным лицам","Корпоративным клиентам","Обратная связь", "Личный кабинет"],
    nameButtonsArr1: ["Автомобили","Жилье","Здоровье","Имущество","Путешествия/Туризм"],
    nameButtonsArr2: ["Страхование имущества","Страхование грузов","Медицинское страхование сотрудников","Страхование спецтехники"],
    clickButtonsArr: ["clickButton","","","",""],
    clickButtonsArr1: ["clickButton","","","",""],
    clickButtonsArr2: ["clickButton","","",""],
    stateButtonsArr: [true,false,false,false,false],
    stateButtonsArr1: [true,false,false,false,false],
    stateButtonsArr2: [true,false,false,false],
    pagesArr: [<Insurance more={this.more}/>, <PrivatePersons/>, <CorpPersons/>, <FeedBack/>, <PersonalArea/>],
    numberTab: "",
    components: false,
  };
}
componentsFunc = (e)=> {
  if (this.state.components === false)
    this.setState({
      pagesArr: [<Insurance more={this.more}/>, <PrivatePersons stateButtonsArr1={this.state.stateButtonsArr1}/>, <CorpPersons stateButtonsArr2={this.state.stateButtonsArr2}/>, <FeedBack />, <PersonalArea/>],
      components: true
    })
}
clickButtonFunc = (i) => {
  this.state.stateButtonsArr.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        stateButtonsArr: update(state.stateButtonsArr,{[e]:  {$set: true}}),
        clickButtonsArr: update(state.clickButtonsArr,{[e]:  {$set: "clickButton"}}),
        components: false,
        stateButtonsArr1: [true,false,false,false,false],
        clickButtonsArr1: ["clickButton","","","",""],
        stateButtonsArr2: [true,false,false,false],
        clickButtonsArr2: ["clickButton","","",""],
      }))
    else
      this.setState((state, props) => ({
        stateButtonsArr: update(state.stateButtonsArr,{[e]:  {$set: false}}),
        clickButtonsArr: update(state.clickButtonsArr,{[e]:  {$set: ""}}),
      }))
  });
  if (i === 1) this.tab = "tab2";
  else if (i === 2) this.tab = "tab3";
  else this.tab = "";
  this.setState({
    numberTab: this.tab,
  })
}
clickButtonFunc1 = (i) => {
  this.state.stateButtonsArr1.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        stateButtonsArr1: update(state.stateButtonsArr1,{[e]:  {$set: true}}),
        clickButtonsArr1: update(state.clickButtonsArr1,{[e]:  {$set: "clickButton"}}),
        components: false
      }))
    else
      this.setState((state, props) => ({
        stateButtonsArr1: update(state.stateButtonsArr1,{[e]:  {$set: false}}),
        clickButtonsArr1: update(state.clickButtonsArr1,{[e]:  {$set: ""}}),
      }))
  });
}
clickButtonFunc2 = (i) => {
  this.state.stateButtonsArr2.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        stateButtonsArr2: update(state.stateButtonsArr2,{[e]:  {$set: true}}),
        clickButtonsArr2: update(state.clickButtonsArr2,{[e]:  {$set: "clickButton"}}),
        components: false
      }))
    else
      this.setState((state, props) => ({
        stateButtonsArr2: update(state.stateButtonsArr2,{[e]:  {$set: false}}),
        clickButtonsArr2: update(state.clickButtonsArr2,{[e]:  {$set: ""}}),
      }))
  });
}
clickbut = (i)=> {
if (this.state.stateButtonsArr[1] === true) this.clickButtonFunc1(i);
else if (this.state.stateButtonsArr[2] === true) this.clickButtonFunc2(i);
}
createButtons = (e) => {
  var table = [];
  table=this.state.stateButtonsArr.map((obj,i)=> {
    return(<td key={i}><button id={this.state.clickButtonsArr[i]} onClick={(e)=>{this.clickButtonFunc(i);}}>{this.state.nameButtonsArr[i]}</button></td>)
});
return table;
}
createButtons2 = (e) => {
  var table = [];
  this.arr = [];
  this.clickArr = [];
  if (this.state.stateButtonsArr[1] === true) {
    this.arr = this.state.nameButtonsArr1;
    this.clickArr = this.state.clickButtonsArr1;
  }
  else if (this.state.stateButtonsArr[2] === true) {
    this.arr = this.state.nameButtonsArr2;
    this.clickArr = this.state.clickButtonsArr2;
  }
    table=this.arr.map((obj,i)=> {
      return(<td key={i}><button id={this.clickArr[i]} onClick={(e)=>{this.clickbut(i);}}>{obj}</button></td>)
  });
return table;
}
createBody = (e) => {
  var table = [];
  table=this.state.pagesArr.map((obj,i)=> {
    if (this.state.stateButtonsArr[i] === true && i === 0) return(<div key={i} style={{height: "1277px", flex: "1 0 auto"}}>{this.state.pagesArr[i]}</div>);
    else if (this.state.stateButtonsArr[i] === true) return(<div key={i} style={{flex: "1 0 auto"}}>{this.state.pagesArr[i]}</div>);
    else return null;
});
return table;
}

createPersonalAndNotiFunc = (j)=> {
  var table = [];
  table=this.state.personalAreaStateArr.map((obj,i)=> {
    if (this.state.personalAreaStateArr[i] === true)
    return(<div key={i}>{this.state.pagesArr2[i]} </div>);
    return null;
});
return table;
}
more = (e)=> {
  this.clickButtonFunc(1);
  this.clickButtonFunc1(e);
}
clickButtonCall = (i) => {
    this.setState((state, props) => ({
      components: false,
      clickButtonsArr: ["","","","clickButton",""],
      stateButtonsArr: [false,false,false,true,false],
      stateButtonsArr1: [true,false,false,false,false],
      clickButtonsArr1: ["clickButton","","","",""],
      stateButtonsArr2: [true,false,false,false],
      clickButtonsArr2: ["clickButton","","",""],
    }))
}
render(){
    return(<div>
            {this.componentsFunc()}
            <div className = "headClient">
              <div className = "log"><img src={logo} alt="logo"/></div>
              <table className="tab1"><tbody>
              <tr>{this.createButtons()}</tr>
              </tbody></table>
              <table className={this.state.numberTab} id={this.state.opp}><tbody>
              <tr>{this.createButtons2()}</tr>
              </tbody></table>
            </div>
            <div className = "bodyClient">
            {this.createBody()}
            <div className = "footerClient">
            <div className="comp1"><span>© 2021 Страховая компания</span></div><div className="comp2"><span>8 800 000 00 00</span> <button onClick={(e)=>{this.clickButtonCall(0);}}>Заказать звонок</button><button onClick={(e)=>{this.clickButtonCall(1);}}>Написать нам</button></div>
            </div>
            </div>
        </div>)
  }
}

export default Client;

import React from 'react';
import Authorization from './authorization.js';
import Registration from './registration.js';
import update from 'immutability-helper';
import eye from './svg/eye.svg';
import eyeClose from './svg/eyeClose.svg';
import Cookies from 'js-cookie';

export class PersonalArea extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    registration: false,
    authorizated: this.cooki(),
    backArr: ["Авторизация","Регистрация"],
    backStateArr: true,
    backClassArr: ["infoClass",""],
    classRegOrAuthor1: "formCars4",
    classRegOrAuthor2: "boxInfo5",
    name: "",
    personHolderArr: ["Фамилия Имя Отчество","Год рождения ","Адрес ","Электронная почта ","Телефон ", "Пароль"],
    personInpArr: ["Сидоров Петр Иванович","1974-05-04","Казань","sidorov.petr@mail.ru","+7 9048748734","123456"],
    pass: "password",
    eye: eye,
    save: "check3",
    persOrCorpBut1: "write1",
    persOrCorpBut2: "view1",
    persOrCorp: true,
    arrZaShapka: ["Номер заявки","Статус заявки","Вид страхования","Краткая информация","Дата оформления"],
    arrDogShapka: ["Номер договора","Статус договора","Вид страхования","Краткая информация","Стоимость","Дата оформления"],
    arrZa1: ["456781","456782","456783","456784","456785"],
    arrZa2: ["Рассмотрение","Одобрена","Отклонена","Отклонена","Одобрена"],
    arrZa3: ["КАСКО","Квартира","ДМС","Гражданская ответственность","Зелёная карта"],
    arrZa4: ["Автомобиль BMW Series S, Оценочная стоимость 2 340 000 руюлей...","Город Казань, Срок действия полиса 12 месяцев, Оценочная стоимость...","Страховая программа - Базовый от 37 700 рублей, Город Казань...","Размер страховой защиты - 450 000 рублей, Срок действия полиса 6 месяцев...","Территория страхования полиса - все страны системы Зеленая карта..."],
    arrZa5: ["12.03.2020","15.02.2021","22.09.2020","11.07.2021","27.01.2021"],
    arrDog1: ["352876","352877","352878","352879","352880","352881"],
    arrDog2: ["Заключен","Заключен","Расторгнут","Заключен","Расторгнут","Заключен"],
    arrDog3: ["ОСАГО","ОМС","За рубеж","Квартира","Невыезд","Защита покупки"],
    arrDog4: ["Автомобиль BMW Series S, Оценочная стоимость 2 340 000 руюлей...","Страховая программа - Базовый от 37 700 рублей, Город Казань...","Страна - Италия, Сидоров Иван, от 21.06.2021 по 05.07.2021...","Город Казань, Срок действия полиса 12 месяцев, Оценочная стоимость...","Страна - Италия, Болезнь, от 21.06.2021 по 05.07.2021...","Смартфон, М Видео, от 24.04.2021, Сидаров Иван..."],
    arrDog5: ["158 000","37 000","30 000","58 000","50 000","43 000"],
    arrDog6: ["12.12.2020","15.03.2021","01.06.2021","01.02.2021","22.06.2021","27.04.2021"],
  };
}
cooki = (e) => {
  if (typeof(Cookies.get('personalArea')) === 'undefined') return(false);
  else return (Cookies.get('personalArea'));
}
authorCookies = (branchAndEquip) => {
  Cookies.set('personalArea',branchAndEquip, { path: '/' });
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
authorization = (e) => {
this.authorCookies(true);
this.setState ({
  authorizated: !this.state.authorizated
})
}
seeDateFunc = (e) => {
  var d=new Date(), day, month, year;
  day = d.toLocaleDateString().split('.')[0];
  month = d.toLocaleDateString().split('.')[1];
  year = d.toLocaleDateString().split('.')[2];
  return (year + "-" + month + "-" + day);
}
eyeChange = (e) => {
  if (this.state.pass === "password"){
  this.setState({
    pass: "text",
    eye: eyeClose
  })
}
else {
  this.setState({
    pass: "password",
    eye: eye
  })
}
}
registration = (e) => {
this.setState ({
  backStateArr: true,
  zayvka: true,
  name: e,
  classRegOrAuthor1: "formCars4",
  classRegOrAuthor2: "boxInfo5",
  registration: false,
  backClassArr: ["infoClass",""],
})
}
createButtonsInfo = (e) => {
  var table = [];
  table=this.state.backArr.map((obj,i)=> {
    return(<td key={i} id={this.state.backClassArr[i]}><button onClick={(e)=>{this.clickButtonFunc1(i);}}>{obj}</button></td>);
});
return table;
}
clickButtonFunc1 = (i) => {
  if (i === 0) {
    this.back = true;
    this.class1 = "infoClass";
    this.class2 = "";
    this.class = "boxInfo5";
    this.class3 = "formCars4";
  }
  else {
    this.back = false;
    this.class1 = "";
    this.class2 = "infoClass";
    this.class = "boxInfo6";
    this.class3 = "formCars5";
  }
  this.setState({
    backStateArr: this.back,
    backClassArr: [this.class1, this.class2],
    classRegOrAuthor2: this.class,
    classRegOrAuthor1: this.class3,
  })
}
createPersonalArea = (e)=> {
  if (this.state.authorizated === false) {
      return(<div className={this.state.classRegOrAuthor1}>
                <div className="infoCars4">
                  <table><tbody>
                  <tr>{this.createButtonsInfo()}</tr>
                  </tbody></table>
                </div>
              <div className={this.state.classRegOrAuthor2}>{this.regOrAuthor()}</div>
            </div>)
  }
  else return(<div className="calcCars3">
    <div className="formCars3">
      <div className="boxInfo3">{this.createPersonalInfo()}</div>
    </div>
    <div className="infoCars5">
      <div className="boxInfo4">
        {this.createPersonalDogAndZayav()}
        <div>{this.createDogOrZa()}</div>
      </div>
    </div>
  </div>)
}
createDogOrZa = (e)=> {
  if (this.state.persOrCorp === true)
  return(<div className="dogAndZa1">
      <table><tbody>
        <tr id="fontTab"><td>Номер</td><td>Статус</td><td>Вид страхования</td><td>Краткая информация</td><td>Дата</td></tr>
        {this.createZa()}
      </tbody></table>
  </div>)
  else return(<div className="dogAndZa2">
      <table><tbody>
        <tr id="fontTab"><td>Номер</td><td>Статус</td><td>Вид страхования</td><td>Краткая информация</td><td>Стоимость</td><td>Дата</td></tr>
        {this.createDog()}
      </tbody></table>

  </div>)
}
createZa = (e)=> {
  var table = [];
  table=this.state.arrZaShapka.map((obj,i)=> {
     return (<tr key={i}><td>{this.state.arrZa1[i]}</td>{this.colorFunc(this.state.arrZa2[i], i)}<td>{this.state.arrZa3[i]}</td><td>{this.state.arrZa4[i]}</td><td>{this.state.arrZa5[i]}</td></tr>)
});<td></td>
return table;
}
createDog = (e)=> {
  var table = [];
  table=this.state.arrDogShapka.map((obj,i)=> {
     return (<tr key={i}><td>{this.state.arrDog1[i]}</td>{this.color2Func(this.state.arrDog2[i], i)}<td>{this.state.arrDog3[i]}</td><td>{this.state.arrDog4[i]}</td><td>{this.state.arrDog5[i]} &#8381;</td><td>{this.state.arrDog6[i]}</td></tr>)
});<td></td>
return table;
}
colorFunc = (e, i) => {
  if (e === "Одобрена") return(<td className="green">{this.state.arrZa2[i]}</td>)
  else if (e === "Отклонена")return(<td className="red">{this.state.arrZa2[i]}</td>)
  else return(<td className="gray">{this.state.arrZa2[i]}</td>)
}
color2Func = (e, i) => {
  if (e === "Заключен") return(<td className="green">{this.state.arrDog2[i]}</td>)
  else if (e === "Расторгнут")return(<td className="red">{this.state.arrDog2[i]}</td>)
}
createPersonalDogAndZayav = (e) => {
  return(<div className="calcKasko">
  <div className="buttons"><button className={this.state.persOrCorpBut1} onClick={(e)=>{this.clickpersOrCorpButtonFunc(this.state.persOrCorpBut1);}}>Заявки</button><button className ={this.state.persOrCorpBut2} onClick={(e)=>{this.clickpersOrCorpButtonFunc(this.state.persOrCorpBut2);}}>Договоры</button>
  </div>
  </div>)

}
createUsersDataTableperson = (e) => {
  var table = [];
  table=this.state.personHolderArr.map((obj,i)=> {
       if (i === 1) return (<tr key={i}><td><input type="date" value={this.state.personInpArr[i]} onChange={(e)=>{this.changeValuepersonFunc(e, i);}}></input></td></tr>)
       else if (i === 5) return (<tr key={i}><td><input type={this.state.pass} value={this.state.personInpArr[i]} placeholder={this.state.personHolderArr[i]} onChange={(e)=>{this.changeValuepersonFunc(e, i);}}></input><img id="imgGlaz2" src={this.state.eye} alt={this.state.eye} onClick={(e)=>{this.eyeChange(e);}}/></td></tr>)
       return (<tr key={i}><td><input type="text" value={this.state.personInpArr[i]} placeholder={this.state.personHolderArr[i]} onChange={(e)=>{this.changeValuepersonFunc(e, i);}}></input></td></tr>)
  });
  return table;
}
changeValuepersonFunc = (e, i) => {
  var value = e.target.value;
    this.setState((state, props) => ({
      personInpArr: update(state.personInpArr, {[i]:  {$set: value}}),
    }))
}
createPersonalInfo = (e)=> {
  return(<div className="calcKasko2">
          <p id="center" style={{margin: "0"}}>Личные данные</p>
          <table><tbody>
            {this.createUsersDataTableperson()}
          </tbody></table>
          <div className="butts">
          <p className={this.state.save}>Данные сохранены!</p>
          <button onClick={(e)=>{this.saveF();}}>Сохранить изменения</button>
          <button onClick={(e)=>{this.exit();}}>Выйти</button>
          </div>
    </div>)
}
exit = (e)=> {
  Cookies.remove('personalArea');
  this.setState({
    authorizated: false
  })
}
saveF = (e)=> {
  this.setState({
    save: "check2"
  })
  setTimeout(() => {
  this.setState({ save: "check3" });
}, 4000);
}
regOrAuthor = (e) => {
  if (this.state.backStateArr === true) return(<Authorization authorization={this.authorization}/>)
  else return(<Registration registration={this.registration}/>)
}
zayavkaTime = (e) => {
  setTimeout(() => {
  this.setState({ zayvka: false });
}, 6000);
  return(<div className="zayvkaClass"><div><p id="idZa">Регистрация завершена!<span id="krest" onClick={(e)=>{this.closeZauvka(e);}}>&#215;</span></p>
  <p className="classZa">Спасибо что зарегистрировались <b style={{color: "#3a7d87"}}>{this.state.name}.</b></p>
  <p className="classZa">Теперь Вы поможете пользоваться всеми услугами нашей компании.</p>
  <p className="classZa">Автаризуйтесь, чтобы воспользоваться услугами страхования!</p></div></div>)
}
closeZauvka = (e)=> {
  this.setState({
    zayvka: false
  })
}
render(){
    return(<div className="PrivatePersons">
    <div className="dataTab">
    {this.createPersonalArea()}
    </div>
    {(this.state.zayvka === true)?(this.zayavkaTime()):(null)}
    </div>)
  }
}

export default PersonalArea;

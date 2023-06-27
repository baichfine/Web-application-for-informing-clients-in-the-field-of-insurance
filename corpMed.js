import React from 'react';
import update from 'immutability-helper';
import ProgressBar from "@ramonak/react-progress-bar";
import ok from './svg/ok.svg';
import notok from './svg/notok.svg';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

export class CorpMed extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      infoArr: ["О страховании", "Программа страхования", "Что получаем?"],
      infoStateArr: [true, false, false],
      infoClassArr: ["infoClass","",""],
      corp3Arr: ["Название организации: ","Фамилия Имя: ","Контактный телефон: ","Электронная почта: ","Город: "],
      holdercorp3Arr:["Название или ИНН","Фамилия Имя","Телефон","E-mail","Населенный пункт"],
      corp3InpArr: ["","","","",""],
      check: false,
      barcorp3: 0,
      zayvka: false,
      colorP1: "colorGreen",
      colorP2: "",
    };
  }
  clickButtonFunc1 = (i) => {
    this.state.infoStateArr.forEach((obj,e)=> {
      if (i === e)
        this.setState((state, props) => ({
          infoStateArr: update(state.infoStateArr,{[e]:  {$set: true}}),
          infoClassArr: update(state.infoClassArr,{[e]:  {$set: "infoClass"}}),
        }))
      else
        this.setState((state, props) => ({
          infoStateArr: update(state.infoStateArr,{[e]:  {$set: false}}),
          infoClassArr: update(state.infoClassArr,{[e]:  {$set: ""}}),
        }))
    });
  }
  createButtonsInfo = (e) => {
    var table = [];
    table=this.state.infoStateArr.map((obj,i)=> {
      return(<td key={i} id={this.state.infoClassArr[i]}><button onClick={(e)=>{this.clickButtonFunc1(i);}}>{this.state.infoArr[i]}</button></td>)
  });
  return table;
  }
  createInfo = (e) => {
    var table = [];
    table=this.state.infoStateArr.map((obj,i)=> {
      if(obj === true) return(this.corp3Func(i))
      return(null)
  });
  return table;
  }
  corp3Func = (i)=> {
    if (i === 0) {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Страхование здоровья персонала</b></p>
      <p><b style={{color: "#3a7d87"}}>Управление здоровьем персонала</b> – современный взгляд на добровольное медицинское страхование, где основной целью контракта является рост экономической эффективности компании за счет <b style={{color: "#3a7d87"}}>реализации комплексного подхода к улучшению здоровья сотрудников</b> и проведению оздоровительных и лечебно-профилактических мероприятий.</p>
      </div>)
    }
    else if (i === 1) {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>5 шагов к здоровью и благополучию</b></p>
        <ul className="ulCars">
          <li><span>Выявляем в коллективе характерные зоны риска для здоровья</span></li>
          <li><span>Проводим диагностические мероприятия</span></li>
          <li><span>Ранжируем выявленные факторы риска и формируем приоритеты</span></li>
          <li><span>Формируем согласованный комплекс мероприятий и задачи программы</span></li>
          <li><span>Реализуем мероприятия и оцениваем эффективность</span></li>
          </ul>
       </div>)
    }
    else {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Что получаем?</b></p>
      <p>Формирование комплексной программы базируется на использовании продвинутой аналитики с помощью собственных программных продуктов.</p>
      <p>Эффективность мероприятий обеспечивается сочетанием многолетнего опыта и лучших мировых практик реализации программ здоровья и благополучия.</p>
        <ul className="ulCars2">
        <li><span>Снижение заболеваемости</span></li>
        <li><span>Снижение дней Нетрудоспособности</span></li>
        <li><span>Повышение Производительности</span></li>
        </ul>
       </div>)
    }
  }
  //Квартира
  createForms = (e) => {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Оформление полиса <b style={{color: "#3a7d87"}}> Медицинское страхование</b> для юр. лиц<span className="shag"> Шаг 1 из 1</span></p>
            <p id="left2">Ввод персональных данных:</p>
            <table><tbody>
              {this.createUsersDataTablecorp3()}
            </tbody></table>
            <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
            {(this.progressBarFunc() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
            {(this.state.check === true && this.state.barcorp3 < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  progressBarFunc = (e)=> {
    if (this.state.barcorp3 === 100) return(true)
    else return(false)
  }
  check = (e)=> {
    this.setState({
      check: true
    })
  }
  createUsersDataTablecorp3 = (e) => {
    var table = [];
    table=this.state.corp3Arr.map((obj,i)=> {
      if (i === 2)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.corp3InpArr[i]} placeholder={this.state.holdercorp3Arr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.corp3InpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.corp3InpArr[i]} placeholder={this.state.holdercorp3Arr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.corp3InpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    });
    return table;
  }
  changeValueFunc = (e, i) => {
    if (this.state.corp3InpArr[i] === "") this.bar = 20;
    if (e.target.value === "") this.bar = -20;
    var value = e.target.value;
      this.setState((state, props) => ({
        corp3InpArr: update(state.corp3InpArr, {[i]:  {$set: value}}),
        barcorp3: state.barcorp3 + this.bar
      }))
  }
  //Заявка
  createZayvka = (e)=> {
    this.setState({
      check: false,
      corp3InpArr: ["","","","","","",""],
      zayvka: true,
      barcorp3: 0,
      colorP1: "colorGreen",
      colorP2: "",
    })
  }
  closeZauvka = (e)=> {
    this.setState({
      zayvka: false
    })
  }
  zayavkaTime = (e) => {
    setTimeout(() => {
    this.setState({ zayvka: false });
  }, 6000);
    return(<div className="zayvkaClass"><div><p id="idZa">Заявка оформлена!<span id="krest" onClick={(e)=>{this.closeZauvka(e);}}>&#215;</span></p>
    <p className="classZa">Вы успешно оформили заявку на полис <b style={{color: "#3a7d87"}}>Медицинское страхование для юридических лиц.</b></p>
    <p className="classZa">Скоро с Вами свяжется наш специалист, пожалуйста ожидайте.</p>
    <p className="classZa"><b style={{color: "#3a7d87"}}>Статус заявки</b> Вы можете отслеживать в личном кабинете.</p></div></div>)
  }

  render(){

      return(<div>
              <div className="choiceCars">
                <div className="choice3">
                <table><tbody>
                <tr><td id="houseClass"><button>Медицинское страхование</button></td></tr>
                </tbody></table>
                </div>
                <div className="bar3"><div className="barClass"><ProgressBar className="barBar3" width="400px" bgColor="#46a384" labelAlignment="center" completed={this.state.barcorp3}/></div></div>
              </div>
              <div className="calcCars">
                <div className="formCars">{this.createForms()}</div>
                <div className="infoCars">
                  <table><tbody>
                    <tr>{this.createButtonsInfo()}</tr>
                  </tbody></table>
                  <div className="boxInfo">{this.createInfo()}</div>
                </div>
              </div>
              {(this.state.zayvka === true)?(this.zayavkaTime()):(null)}
            </div>)
    }
  }

export default CorpMed;

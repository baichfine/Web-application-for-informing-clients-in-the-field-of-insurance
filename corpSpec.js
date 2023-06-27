import React from 'react';
import update from 'immutability-helper';
import ProgressBar from "@ramonak/react-progress-bar";
import ok from './svg/ok.svg';
import notok from './svg/notok.svg';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

export class CorpSpec extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      infoArr: ["Объекты страхования", "Страхуемые риски", "Страховая премия"],
      infoStateArr: [true, false, false],
      infoClassArr: ["infoClass","",""],
      corp4Arr: ["Название организации: ","Фамилия Имя: ","Контактный телефон: ","Электронная почта: ","Город: "],
      holdercorp4Arr:["Название или ИНН","Фамилия Имя","Телефон","E-mail","Населенный пункт"],
      corp4InpArr: ["","","","",""],
      check: false,
      barcorp4: 0,
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
      if(obj === true) return(this.corp4Func(i))
      return(null)
  });
  return table;
  }
  corp4Func = (i)=> {
    if (i === 0) {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Объекты страхования</b></p>
      <p>Вы можете застраховать самодвижущуюся или <b style={{color: "#3a7d87"}}>перемещаемую спецтехнику</b>, машины, механизмы, оборудование, используемые в следующих сферах:</p>
      <ul className="ulCars">
        <li><span>Cтроительствo</span></li>
        <li><span>Добыча полезных ископаемых в карьерах (открытым способом)</span></li>
        <li><span>Заготовка леса (кроме форвардеров и харвестеров)</span></li>
        <li><span>Сельское хозяйство</span></li>
        <li><span>Обслуживание транспортных узлов (аэропортов, портов, ж/д станций, складов)</span></li>
        <li><span>Перевозка пассажиров и грузов</span></li>
        <li><span>Коммунальное хозяйство</span></li>
        </ul>
      </div>)
    }
    else if (i === 1) {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Страхуемые риски</b></p>
        <ul className="ulCars">
          <li><span>Пожар, поражение молнией, взрыв бытового газа, падение на спецтехнику летающих объектов или их частей</span></li>
          <li><span>Стихийные бедствия различной природы: цунами, извержения вулканов, действия подземного огня, оползни, град, горные обвалы, землетрясения, просадки грунта, бури, сели, вихри, ураганы, наводнения, затопления</span></li>
          <li><span>Действия злоумышленников: разбой, кража со взломом, хищение, умышленное уничтожение или повреждение оборудования</span></li>
          <li><span>ДТП (дорожно-транспортные происшествия)</span></li>
          <li><span>Столкновение, опрокидывание, наезд на препятствие, падение оборудования с высоты, наезд или падение на технику посторонних предметов, транспортных средств</span></li>
          <li><span>Повреждение спецтехники водой из канализации, водопровода, систем отопления и пожаротушения/span</span></li>
          <li><span>Утрата или повреждение спецтехники при ее перевозке с использованием предназначенного для этих целей оборудования</span></li>
          <li><span>Любые другие непредвиденные и внезапные события, которые не исключены Правилами и Договором страхования оборудования</span></li>
          </ul>
       </div>)
    }
    else {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Страховая премия</b></p>
      <p>Размер премии при страховании спецтехники зависит от следующих факторов:</p>
        <ul className="ulCars2">
        <li><span>Отрасль эксплуатации техники</span></li>
        <li><span>Программа, с использованием которой вы решили застраховать свою технику</span></li>
        <li><span>Группа техники</span></li>
        <li><span>Наличие и размер франшизы</span></li>
        <li><span>Территория страхования</span></li>
        </ul>
       </div>)
    }
  }
  //Квартира
  createForms = (e) => {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Оформление полиса <b style={{color: "#3a7d87"}}> Страхование спецтехники</b> для юр. лиц<span className="shag"> Шаг 1 из 1</span></p>
            <p id="left2">Ввод персональных данных:</p>
            <table><tbody>
              {this.createUsersDataTablecorp4()}
            </tbody></table>
            <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
            {(this.progressBarFunc() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
            {(this.state.check === true && this.state.barcorp4 < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  progressBarFunc = (e)=> {
    if (this.state.barcorp4 === 100) return(true)
    else return(false)
  }
  check = (e)=> {
    this.setState({
      check: true
    })
  }
  createUsersDataTablecorp4 = (e) => {
    var table = [];
    table=this.state.corp4Arr.map((obj,i)=> {
      if (i === 2)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.corp4InpArr[i]} placeholder={this.state.holdercorp4Arr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.corp4InpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.corp4InpArr[i]} placeholder={this.state.holdercorp4Arr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.corp4InpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    });
    return table;
  }
  changeValueFunc = (e, i) => {
    if (this.state.corp4InpArr[i] === "") this.bar = 20;
    if (e.target.value === "") this.bar = -20;
    var value = e.target.value;
      this.setState((state, props) => ({
        corp4InpArr: update(state.corp4InpArr, {[i]:  {$set: value}}),
        barcorp4: state.barcorp4 + this.bar
      }))
  }
  //Заявка
  createZayvka = (e)=> {
    this.setState({
      check: false,
      corp4InpArr: ["","","","","","",""],
      zayvka: true,
      barcorp4: 0,
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
    <p className="classZa">Вы успешно оформили заявку на полис <b style={{color: "#3a7d87"}}>Страхование спецтехники для юридических лиц.</b></p>
    <p className="classZa">Скоро с Вами свяжется наш специалист, пожалуйста ожидайте.</p>
    <p className="classZa"><b style={{color: "#3a7d87"}}>Статус заявки</b> Вы можете отслеживать в личном кабинете.</p></div></div>)
  }

  render(){

      return(<div>
              <div className="choiceCars">
                <div className="choice3">
                <table><tbody>
                <tr><td id="houseClass"><button>Страхование спецтехники</button></td></tr>
                </tbody></table>
                </div>
                <div className="bar3"><div className="barClass"><ProgressBar className="barBar3" width="400px" bgColor="#46a384" labelAlignment="center" completed={this.state.barcorp4}/></div></div>
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

export default CorpSpec;

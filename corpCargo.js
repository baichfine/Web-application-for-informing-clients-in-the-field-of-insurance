import React from 'react';
import update from 'immutability-helper';
import ProgressBar from "@ramonak/react-progress-bar";
import ok from './svg/ok.svg';
import notok from './svg/notok.svg';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

export class CorpCargo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      infoArr: ["Объекты страхования", "Страхуемые риски", "Страховая премия"],
      infoStateArr: [true, false, false],
      infoClassArr: ["infoClass","",""],
      corp2Arr: ["Название организации: ","Фамилия Имя: ","Контактный телефон: ","Электронная почта: ","Город: "],
      holdercorp2Arr:["Название или ИНН","Фамилия Имя","Телефон","E-mail","Населенный пункт"],
      corp2InpArr: ["","","","",""],
      check: false,
      barcorp2: 0,
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
      if(obj === true) return(this.corp2Func(i))
      return(null)
  });
  return table;
  }
  corp2Func = (i)=> {
    if (i === 0) {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Страхование грузов компаний малого и среднего бизнеса</b></p>
      <p>Действие <b style={{color: "#3a7d87"}}>полиса страхования</b> грузоперевозок распространяется на следующие объекты:</p>
      <ul className="ulHouse2">
      <li><span>Грузы, которые перевозятся любыми видами транспорта</span></li>
      <li><span>Расходы по транспортировке груза к месту назначения, уплате таможенных налогов и пошлин</span></li>
      <li><span>Планируемую прибыль в размере до <b style={{color: "#3a7d87"}}>10%</b> от страховой стоимости груза по условиям ИНКОТЕРМС 2010.</span></li>
      </ul>
      <p>Для заключения страхового договора на груз должны быть оформлены установленные законодательством транспортные документы.</p>
      <p>Его стоимость нужно <b style={{color: "#3a7d87"}}>подтвердить контрактом</b> на поставку, договором купли-продажи, инвойсом, спецификацией или другим документом.</p>
      <p>Период страхования охватывает саму доставку, возможные перегрузки и хранение в пунктах их осуществления.</p>
      <p>По вашему желанию могут быть застрахованы <b style={{color: "#3a7d87"}}>погрузочно-разгрузочные работы</b>, хранение в пункте назначения до приемки груза его получателем.</p>
      </div>)
    }
    else if (i === 1) {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Страхуемые риски</b></p>
      <p>Условия страхования можно выбрать на основании одной из <b style={{color: "#3a7d87"}}>стандартных групп рисков</b> в зависимости от необходимого покрытия и подходящей цены.</p>
      <p>Вам предоставляется возможность застраховать грузоперевозки от следующих рисков:</p>
        <ul className="ulHouse2">
          <li><span>Проявления стихийных сил природы</span></li>
          <li><span>Техногенные катастрофы и аварии</span></li>
          <li><span>Противоправные действия третьих лиц (грабеж, вандализм, кража, разбой, пиратские действия)</span></li>
          <li><span>Забастовочные и военные риски</span></li>
          <li><span>Риски, связанные с особенностями транспортировки и хранения груза (несоблюдение требуемого температурного режима, лом и бой, подмочка забортной водой или атмосферными осадками, загрязнение и россыпь при нарушении целостности упаковки и т. д.)</span></li>
          <li><span>Общеаварийные расходы по доле груза при морской транспортировке (включая все возможные гарантии)</span></li>
          <li><span>Риски по <b style={{color: "#3a7d87"}}>Оговоркам Международной Страховой ассоциации</b> (Института Лондонских Страховщиков) или по другим специализированным международным Оговоркам (при выполнении международных перевозок)</span></li>
        </ul>
        <p>Вне зависимости от условий страховки вам <b style={{color: "#3a7d87"}}>компенсируются расходы на привлечение экспертов</b> для выявления причин наступления страхового случая и определение размера ущерба, на осуществление мероприятий по спасению грузов и уменьшению убытков.</p>
       </div>)
    }
    else {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Страховая премия</b></p>
      <p><b style={{color: "#3a7d87"}}>Размер страхового тарифа</b> устанавливается с учетом особенностей предстоящей перевозки: маршрута, типа, стоимости, объема и упаковки груза, наличия перегрузок, сопровождения или охраны, наличия и величины франшизы и других факторов.</p>
      <p>Сегодня действуют следующие <b style={{color: "#3a7d87"}}>тарифы страхования грузов</b>.</p>
        <ul className="ulHouse">
        <li><span>Доставка автомобильным транспортом – 0,02…0,2 %.</span></li>
        <li><span>Доставка железнодорожным транспортом – 0,06…0,17 %.</span></li>
        <li><span>Доставка авиатранспортом – 0,05…0,15 %.</span></li>
        <li><span>Доставка водным транспортом – 0,06…0,2 %.</span></li>
        <li><span>Смешанная доставка – 0,08…0,3 %.</span></li>
        </ul>
       </div>)
    }
  }
  //Квартира
  createForms = (e) => {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Оформление полиса страхования<b style={{color: "#3a7d87"}}> Грузов</b> для юр. лиц<span className="shag"> Шаг 1 из 1</span></p>
            <p id="left2">Ввод персональных данных:</p>
            <table><tbody>
              {this.createUsersDataTablecorp2()}
            </tbody></table>
            <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
            {(this.progressBarFunc() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
            {(this.state.check === true && this.state.barcorp2 < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  progressBarFunc = (e)=> {
    if (this.state.barcorp2 === 100) return(true)
    else return(false)
  }
  check = (e)=> {
    this.setState({
      check: true
    })
  }
  createUsersDataTablecorp2 = (e) => {
    var table = [];
    table=this.state.corp2Arr.map((obj,i)=> {
      if (i === 2)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.corp2InpArr[i]} placeholder={this.state.holdercorp2Arr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.corp2InpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.corp2InpArr[i]} placeholder={this.state.holdercorp2Arr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.corp2InpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    });
    return table;
  }
  changeValueFunc = (e, i) => {
    if (this.state.corp2InpArr[i] === "") this.bar = 20;
    if (e.target.value === "") this.bar = -20;
    var value = e.target.value;
      this.setState((state, props) => ({
        corp2InpArr: update(state.corp2InpArr, {[i]:  {$set: value}}),
        barcorp2: state.barcorp2 + this.bar
      }))
  }
  //Заявка
  createZayvka = (e)=> {
    this.setState({
      check: false,
      corp2InpArr: ["","","","","","",""],
      zayvka: true,
      barcorp2: 0,
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
    <p className="classZa">Вы успешно оформили заявку на полис <b style={{color: "#3a7d87"}}>Страхование грузов для юридических лиц.</b></p>
    <p className="classZa">Скоро с Вами свяжется наш специалист, пожалуйста ожидайте.</p>
    <p className="classZa"><b style={{color: "#3a7d87"}}>Статус заявки</b> Вы можете отслеживать в личном кабинете.</p></div></div>)
  }

  render(){

      return(<div>
              <div className="choiceCars">
                <div className="choice3">
                <table><tbody>
                <tr><td id="houseClass"><button>Страхование грузов</button></td></tr>
                </tbody></table>
                </div>
                <div className="bar3"><div className="barClass"><ProgressBar className="barBar3" width="400px" bgColor="#46a384" labelAlignment="center" completed={this.state.barcorp2}/></div></div>
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

export default CorpCargo;

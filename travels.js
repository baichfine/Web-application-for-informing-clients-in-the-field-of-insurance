import React from 'react';
import update from 'immutability-helper';
import ProgressBar from "@ramonak/react-progress-bar";
import Nouislider from 'react-nouislider';
import "nouislider/distribute/nouislider.css";
import ok from './svg/ok.svg';
import notok from './svg/notok.svg';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

export class Travels extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      rusArr: ["За рубеж","По России","Невыезд"],
      rusStateArr: [true, false, false],
      rusClassArr: ["carsClass","",""],
      infoArr: [["О страховании", "Преимущества", "Необходимые документы"],["Особенности","Преимущества","Необходимые документы"],["О страховании","Преимущества","Страховой случай"]],
      infoStateArr: [true, false, false],
      infoClassArr: ["infoClass","",""],
      amerNum: 1,
      rusNum: 1,
      leaveNum: 1,
      amerArr1: ["Страна поездки:","FAMILIYA как в загранпаспорте:","IMYA как в загранпаспорте:","Дата рождения:","Дата начала путешествия:","Дата окончания путешествия:"],
      holderamerArr1:["Страна","FAMILIYA","IMYA","Дата","Туда","Обратно"],
      amerInpArr1: ["","","","","",""],
      amerArr3: ["FAMILIYA как в загранпаспорте:","IMYA как в загранпаспорте:","Дата рождения:","Контактный телефон:","Электронная почта:"],
      holderamerArr3:["FAMILIYA","IMYA","Дата","Телефон","E-mail"],
      amerInpArr3: ["","","","",""],
      amerServsArr: ["Амбулаторная помощь","Посмертная репатриация ","Медико-транспортные расходы ","COVID-19","Экстренная стоматология ","Стационарная помощь "],
      amerServsInpArr: [true, true, false, false, false, false,],
      amerChoiceArr: ["Спокойных отдых","Активный отдых","Занятие спортом"],
      selectedAmer: [false, false, false],
      rusArr1: ["Страна поездки:","Фамилия Имя Отчество:","Дата рождения:","Дата начала путешествия:","Дата окончания путешествия:"],
      holderrusArr1:["Страна","Фио","Дата","Туда","Обратно"],
      rusInpArr1: ["Россия","","","",""],
      rusArr3: ["Фамилия Имя Отчество:","Дата рождения:","Контактный телефон:","Электронная почта:"],
      holderrusArr3:["Фио","Дата","Телефон","E-mail"],
      rusInpArr3: ["","","",""],
      leaveArr1: ["Страна поездки:","Фамилия Имя Отчество:","Дата рождения:","Дата начала путешествия:","Дата окончания путешествия:"],
      holderleaveArr1:["Страна","Фио","Дата","Туда","Обратно"],
      leaveInpArr1: ["","","","",""],
      leaveArr2: ["Фамилия Имя Отчество:","Дата рождения:","Контактный телефон:","Электронная почта:"],
      holderleaveArr2:["Фио","Дата","Телефон","E-mail"],
      leaveInpArr2: ["","","",""],
      rusChoiceArr: ["Спокойных отдых","Активный отдых","Занятие спортом"],
      rusServsArr: ["Амбулаторная помощь","Посмертная репатриация ","Медико-транспортные расходы ","COVID-19","Экстренная стоматология ","Стационарная помощь "],
      rusServsInpArr: [true, true, false, false, false, false,],
      selectedRus: [false, false, false],
      check: false,
      baramer: 0,
      barRus: 0,
      barleave: 0,
      val1: 30000,
      val2: 30000,
      val3: 30000,
      zayvka: false,
      selectedSex: true,
      selectedSex2: true,
      selectedSex3: true,
      selectedSex4: true,
      colorP1: "colorGreen",
      colorP2: "",
      colorP11: "colorGreen",
      colorP22: "",
      sel1: false,
      sel2: false,
    };
  }
  clickButtonFunc = (i) => {
    this.state.rusArr.forEach((obj,e)=> {
      if (i === e)
        this.setState((state, props) => ({
          rusStateArr: update(state.rusStateArr,{[e]:  {$set: true}}),
          rusClassArr: update(state.rusClassArr,{[e]:  {$set: "carsClass"}}),
          infoStateArr: [true, false, false],
          infoClassArr: ["infoClass","",""],
          check: false,
        }))
      else
        this.setState((state, props) => ({
          rusStateArr: update(state.rusStateArr,{[e]:  {$set: false}}),
          rusClassArr: update(state.rusClassArr,{[e]:  {$set: ""}}),
        }))
    });
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
  createButtons = (e) => {
    var table = [];
    table=this.state.rusArr.map((obj,i)=> {
      return(<td key={i} id={this.state.rusClassArr[i]}><button onClick={(e)=>{this.clickButtonFunc(i);}}>{this.state.rusArr[i]}</button></td>)
  });
  return table;
  }
  createButtonsInfo = (e) => {
    var table = [];
    table=this.state.rusStateArr.map((obj,i)=> {
      return(<td key={i} id={this.state.infoClassArr[i]}><button onClick={(e)=>{this.clickButtonFunc1(i);}}>{this.state.infoArr[e][i]}</button></td>)
  });
  return table;
  }
  funcInforus = (e)=> {
    if (this.state.rusStateArr[0] === true) return 0
    else if (this.state.rusStateArr[1] === true) return 1
    else return 2
  }
  createInfo = (e) => {
    var table = [];
    table=this.state.infoStateArr.map((obj,i)=> {
      if(obj === true) return(this.info(e,i))
      return(null)
  });
  return table;
  }
  info = (e, i)=> {
    if (e === 0) return(this.amerFunc(i));
    else if (e === 1) return(this.rusFunc(i));
    else return(this.leaveFunc(i));
  }
  amerFunc = (i)=> {
    if (i === 0) {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Полис страхования туристов</b>, выезжающих за рубеж (ВЗР), также называют<b style={{color: "#3a7d87"}}> страховкой за границу</b> или медстраховкой для визы.</p>
      <p>Отличительной особенностью нашего предложения является возможность добавления в полис покрытия медицинских и транспортных расходов, возникших в результате заболевания <b style={{color: "#3a7d87"}}>COVID-19</b>.</p>
      <p>Такая возможность позволит позаботится о близких и защитит вас от непредвиденных расходов.</p>
      <p><b style={{color: "#3a7d87"}}>Страхование путешествующих</b> – это в первую очередь медицинская помощь людям, находящимся за границей в путешествии или деловой поездке.</p>
      <p>Полис покрывает риски, связанные с ухудшением здоровья, при обычном заболевании, необходимости экстренного (в том числе операционного) вмешательства, получении медицинской помощи при травме или несчастном случае.</p>
      <p>Данный документ требуется для оформления виз на въезд в ряд государств, в том числе и в страны <b style={{color: "#3a7d87"}}>Шенгенского соглашения</b>.</p>
      <p>Также по полису могут быть застрахованы риски, связанные с потерей багажа или невыезда в запланированную поездку.</p>
      </div>)
    }
    else if (i === 1) {
      return(<div className="carsInfo">
        <p><b style={{color: "#3a7d87"}}>Медицинские расходы</b></p>
        <p>Организация медицинской помощи или компенсация расходов в поездке на амбулаторное и стационарное лечение, покупку медикаментов и др.</p>
        <p><b style={{color: "#3a7d87"}}>Несчастный случай</b></p>
        <p>Выплата компенсации при получении травмы, установлении инвалидности.</p>
        <p><b style={{color: "#3a7d87"}}>Багаж</b></p>
        <p>Выплата компенсации при пропаже или утрате багажа, сданного под ответственность перевозчика.</p>
        <p><b style={{color: "#3a7d87"}}>Невыезд или изменение сроков поездки</b></p>
        <p>Выплата компенсации в случае отмены поездки или переносе сроков, в том числе при отказе в получении визы и т.д.</p>
       </div>)
    }
    else {
      return(<div className="carsInfo">
        <p><b style={{color: "#3a7d87"}}>Какие документы нужны?</b></p>
        <p>Оформить полис страхования туриста, выезжающего за рубеж, можно онлайн на нашем сайте без предоставления документов.</p>
        <p>В процессе оформления могут потребоваться:</p>
        <ul className="ulHouse">
        <li><span><b style={{color: "#3a7d87"}}>Паспорт страхователя</b>(того, кто оформляет полис).</span></li>
        <li><span><b style={{color: "#3a7d87"}}>Заграничный паспорт застрахованных</b>(во избежание искажения ФИО).</span></li>
        <li><span>Точные <b style={{color: "#3a7d87"}}>даты рождения</b>каждого застрахованного.</span></li>
        </ul>
       </div>)
    }
  }
  rusFunc = (i)=> {
    if (i === 0) {
      return(<div className="carsInfo">
      <p>Медицинское страхование туристов при <b style={{color: "#3a7d87"}}>поездках по России</b> обеспечивает вас гарантией организации медицинской помощи при выезде с постоянного места жительства.</p>
      <p>Необходимость оформить <b style={{color: "#3a7d87"}}>туристическую страховку</b> так же может возникнуть у лиц, въезжающих на территорию Российской Федерации и являющихся нерезидентами.</p>
      </div>)
    }
    else if (i === 1) {
      return(<div className="carsInfo">
      <p><b style={{color: "#3a7d87"}}>Медицинские расходы</b></p>
      <p>Организация медицинской помощи или компенсация расходов в поездке: амбулаторное и стационарное лечение, покупка медикаментов и др.</p>
      <p><b style={{color: "#3a7d87"}}>Несчастный случай</b></p>
      <p>Выплата компенсации при получении травмы, установлении инвалидности.</p>
      <p><b style={{color: "#3a7d87"}}>Багаж</b></p>
      <p>Выплата компенсации при пропаже или утрате багажа, сданного под ответственность перевозчика.</p>
       </div>)
    }
    else {
      return(<div className="carsInfo">
      <p><b style={{color: "#3a7d87"}}>Какие документы нужны?</b></p>
      <p>Оформить полис страхования туриста, выезжающего за рубеж, можно онлайн на нашем сайте без предоставления документов.</p>
      <p>В процессе оформления могут потребоваться:</p>
      <ul className="ulHouse">
      <li><span><b style={{color: "#3a7d87"}}>Паспорт страхователя</b>(того, кто оформляет полис).</span></li>
      <li><span><b style={{color: "#3a7d87"}}>Заграничный паспорт застрахованных</b>(во избежание искажения ФИО).</span></li>
      <li><span>Точные <b style={{color: "#3a7d87"}}>даты рождения</b>каждого застрахованного.</span></li>
      </ul>
       </div>)
    }
  }
  leaveFunc = (i)=> {
    if (i === 0) {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>От чего защищает страховка от невыезда?</b></p>
      <p>Страховку от невыезда также называют полисом <b style={{color: "#3a7d87"}}>страхования от отмены поездки</b>.</p>
      <p>Данный полис защищает застрахованного от расходов, которые он может понести, если его поездка отменится по независящим от него обстоятельствам.</p>
      <p>Четыре продукта с разной <b style={{color: "#3a7d87"}}>комбинацией рисков</b> по страхованию от невыезда в запланированную поездку. Каждый клиент может выбрать то, что нужно именно ему.</p>
      </div>)
    }
    else if (i === 1) {
      return(<div className="carsInfo">
      <p><b style={{color: "#3a7d87"}}>Отказ в визе</b></p>
      <p>Первичный отказ в визе и отказ в визе после начала поездки.</p>
      <p><b style={{color: "#3a7d87"}}>Болезнь</b></p>
      <p>Невыезд, досрочное возвращение или задержка в поездке из-за болезни или травмы.</p>
       </div>)
    }
    else {
      return(<div className="carsInfo">
        <p><b style={{color: "#3a7d87"}}>КПроизошел страховой случай?</b></p>
        <ul className="ulHouse2">
        <li><span>Незамедлительно проинформируйте вашу <b style={{color: "#3a7d87"}}>туристическую компанию</b> о невозможности совершить запланированную поездку или аннулируйте приобретенные услуги, если бронировали тур самостоятельно.</span></li>
        <li><span>Проинформируйте компанию о наступлении страхового случая и направьте все необходимые документы <b style={{color: "#3a7d87"}}>в течение 7 дней</b> от даты страхового случая.</span></li>
        </ul>
        <p>Дата страхового случая при отмене поездки - <b style={{color: "#3a7d87"}}>день начала запланированной поездки</b>, а при досрочном возвращении или задержке в путешествии - <b style={{color: "#3a7d87"}}>день возвращения в страну постоянного проживания</b>.</p>
        <p>Срок рассмотрения страхового случая – 30 рабочих дней.</p>
       </div>)
    }
  }
  createForms = (e) => {
    if (e === 0) return(this.amerCalc());
    else if (e === 1) return(this.rusCalc());
    else return(this.leaveCalc());
  }
  //За рубеж
  amerCalc = (e)=> {
    if (this.state.amerNum === 1) return(this.amerNum1Func())
    else if (this.state.amerNum === 2) return(this.amerNum2Func())
    else if (this.state.amerNum === 3) return(this.amerNum3Func())
  }
  amerNumFunc = (i)=> {
    this.setState({
      amerNum: i,
      check: false
    })
  }
  progressBarFunc = (e)=> {
    if (this.state.baramer === 42) return(true)
    else return(false)
  }
  progressBarFunc2 = (e)=> {
    if (this.state.baramer === 65) return(true)
    else return(false)
  }
  progressBarFunc3 = (e)=> {
    if (this.state.baramer === 100) return(true)
    else return(false)
  }
  radioButtonSexFunc = (e) => {
    if (e === true) {
      this.setState ({
        selectedSex: true,
        colorP1: "colorGreen",
        colorP2: "",
      })
    }
    else {
      this.setState ({
        selectedSex: false,
        colorP2: "colorGreen",
        colorP1: "",
      })
    }
  }
  radioButtonSex2Func = (e) => {
    if (e === true) {
      this.setState ({
        selectedSex2: true,
        colorP11: "colorGreen",
        colorP22: "",
      })
    }
    else {
      this.setState ({
        selectedSex2: false,
        colorP22: "colorGreen",
        colorP11: "",
      })
    }
  }
  radioButtonSex3Func = (e) => {
    if (e === true) {
      this.setState ({
        selectedSex3: true,
        colorP11: "colorGreen",
        colorP22: "",
      })
    }
    else {
      this.setState ({
        selectedSex3: false,
        colorP22: "colorGreen",
        colorP11: "",
      })
    }
  }
  radioButtonSex4Func = (e) => {
    if (e === true) {
      this.setState ({
        selectedSex4: true,
        colorP11: "colorGreen",
        colorP22: "",
      })
    }
    else {
      this.setState ({
        selectedSex4: false,
        colorP22: "colorGreen",
        colorP11: "",
      })
    }
  }
  amerNum1Func = (e) => {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Заявка на оформление полиса страхования<b style={{color: "#3a7d87"}}> За рубежом</b><span className="shag"> Шаг {this.num()} из 3</span></p>
            <p id="left2">Ввод персональных данных застрахованного:</p>
            <table><tbody>
              {this.createUsersDataTableamer()}
            </tbody></table>
            <p style={{margin: "0"}} className={this.state.colorP1}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex === true} onChange={(e)=>{this.radioButtonSexFunc(true);}} /><span className="label"></span>Мужчина</label></p>
            <p style={{margin: "0"}} className={this.state.colorP2}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex === false} onChange={(e)=>{this.radioButtonSexFunc(false);}} /><span className="label"></span>Женщина</label></p>
            {(this.progressBarFunc() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.amerNumFunc(2);}}>Далее</button>)}
            {(this.state.check === true && this.state.baramer < 42)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  amerNum2Func = (e) => {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Заявка на оформление полиса страхования<b style={{color: "#3a7d87"}}> За рубежом</b><span className="shag"> Шаг {this.num()} из 3</span></p>
            <p id="left2">Выберите пакет опций:</p>
            <table><tbody>
              {this.createUsersDataTableamer2()}
            </tbody></table>
            <p id="center2">Размер страховой защиты для каждого застрахованного: {(parseInt(this.state.val1,10) !== 30000)?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Укажите оценочную стоимость"/>)}</p>
            <div style={{height: "60px"}}><div className="sliderCar">
                  <Nouislider
                    step ={1000}
                    range={{ min: 30000, max: 100000 }}
                    start={[this.state.val1]}
                    connect ={[true, false]}
                    onSlide ={this.onSlide1}/>
                    <span id="left">30 000 &#8381;</span><span id="right">100 000 &#8381;</span>
                </div>
            <div className="sliderCar2"><span>{this.numberWithSpaces(parseInt(this.state.val1,10))} &#8381;</span></div>
            </div>
            <p id="left2">Выберите Вид отдыха:</p>
            {this.createAmerRadio()}
            {(this.progressBarFunc2() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.amerNumFunc(3);}}>Далее</button>)}
            {(this.state.check === true && this.state.baramer < 65)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  amerNum3Func = (e) => {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Заявка на оформление полиса страхования<b style={{color: "#3a7d87"}}> За рубежом</b><span className="shag"> Шаг {this.num()} из 3</span></p>
            <p id="left2">Ввод персональных данных страхователя:</p>
            <table><tbody>
              {this.createUsersDataTableamer3()}
            </tbody></table>
            <p style={{margin: "0"}} className={this.state.colorP11}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex2 === true} onChange={(e)=>{this.radioButtonSex2Func(true);}} /><span className="label"></span>Мужчина</label></p>
            <p style={{margin: "0"}} className={this.state.colorP22}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex2 === false} onChange={(e)=>{this.radioButtonSex2Func(false);}} /><span className="label"></span>Женщина</label></p>
            <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
            {(this.progressBarFunc3() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
            {(this.state.check === true && this.state.baramer < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  check = (e)=> {
    this.setState({
      check: true
    })
  }
  onSlide1 = (e) => {
    if (parseInt(this.state.val1, 10) === 30000) this.bar = 7;
    if (parseInt(e, 10) === 30000) this.bar = -7;
    this.setState({
      val1: e,
      baramer: this.state.baramer + this.bar
    })
  }
  radioButtonAmerFunc = (i) => {
    if (this.state.sel1 === false)
      this.setState({
        baramer: this.state.baramer + 16,
        sel1: true
      })
    this.state.selectedAmer.forEach((obj,e)=> {
      if (i === e)
        this.setState((state, props) => ({
          selectedAmer: update(state.selectedAmer,{[e]:  {$set: true}}),
        }))
      else
        this.setState((state, props) => ({
          selectedAmer: update(state.selectedAmer,{[e]:  {$set: false}}),
        }))
    });
  }
  createAmerRadio = (e) => {
    var table = [];
    table=this.state.amerChoiceArr.map((obj,i)=> {
      if (this.state.selectedAmer[i] === true)
        return(<p key={i} style={{margin: "0"}} className="colorGreen"><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedAmer[i]} onChange={(e)=>{this.radioButtonAmerFunc(i);}}/><span className="label"></span>{obj}</label></p>)
      else return (<p key={i} style={{margin: "0"}}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedAmer[i]} onChange={(e)=>{this.radioButtonAmerFunc(i);}}/><span className="label"></span>{obj}</label></p>)
    });
    return table;
  }
  numberWithSpaces  = (e) => {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  createUsersDataTableamer = (e) => {
    var table = [];
    table=this.state.amerArr1.map((obj,i)=> {
      if (i === 3 || i === 4 || i === 5) return (<tr key={i}><td>{obj}</td><td><input type="date" name="calendar" value={this.state.amerInpArr1[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.amerInpArr1[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.amerInpArr1[i]} placeholder={this.state.holderamerArr1[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.amerInpArr1[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    });
    return table;
  }
  createUsersDataTableamer2 = (e) => {
    var table = [];
    table=this.state.amerServsArr.map((obj,i)=> {
       return (<tr key={i}><td><Checkbox defaultChecked checked={this.state.amerServsInpArr[i]} onChange={(e)=>{this.changeValueFunc2(e, i);}}/> {obj}</td></tr>)
  });
  return table;
  }
  createUsersDataTableamer3 = (e) => {
    var table = [];
    table=this.state.amerArr3.map((obj,i)=> {
      if (i === 2) return (<tr key={i}><td>{obj}</td><td><input type="date" name="calendar" value={this.state.amerInpArr3[i]} onChange={(e)=>{this.changeValueFunc3(e, i);}}></input></td><td>{(this.state.amerInpArr3[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else if (i === 3)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.amerInpArr3[i]} placeholder={this.state.holderamerArr3[i]} onChange={(e)=>{this.changeValueFunc3(e, i);}}></input></td><td>{(this.state.amerInpArr3[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.amerInpArr3[i]} placeholder={this.state.holderamerArr3[i]} onChange={(e)=>{this.changeValueFunc3(e, i);}}></input></td><td>{(this.state.amerInpArr3[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    });
    return table;
  }
  changeValueFunc = (e, i) => {
    if (this.state.amerInpArr1[i] === "") this.bar = 7;
    if (e.target.value === "") this.bar = -7;
    var value = e.target.value;
      this.setState((state, props) => ({
        amerInpArr1: update(state.amerInpArr1, {[i]:  {$set: value}}),
        baramer: state.baramer + this.bar
      }))
  }
  changeValueFunc2 = (e, i) => {
    var value = e.target.checked;
      this.setState((state, props) => ({
        amerServsInpArr: update(state.amerServsInpArr, {[i]:  {$set: value}}),
      }))
  }
  changeValueFunc3 = (e, i) => {
    if (this.state.amerInpArr3[i] === "") this.bar = 7;
    if (e.target.value === "") this.bar = -7;
    var value = e.target.value;
      this.setState((state, props) => ({
        amerInpArr3: update(state.amerInpArr3, {[i]:  {$set: value}}),
        baramer: state.baramer + this.bar
      }))
  }
  //По России
  rusCalc = (e)=> {
    if (this.state.rusNum === 1) return(this.rusNum1Func())
    else if (this.state.rusNum === 2) return(this.rusNum2Func())
    else if (this.state.rusNum === 3) return(this.rusNum3Func())
  }
  rusNumFunc = (i)=> {
    this.setState({
      rusNum: i,
      check: false
    })
  }
  progressBarrusFunc = (e)=> {
    if (this.state.barRus === 40) return(true)
    else return(false)
  }
  progressBarrusFunc2 = (e)=> {
    if (this.state.barRus === 60) return(true)
    else return(false)
  }
  progressBarrusFunc3 = (e)=> {
    if (parseInt(this.state.barRus,10) === 100) return(true)
    else return(false)
  }
  radioButtonrusFunc = (i) => {
    if (this.state.sel2 === false)
      this.setState({
        barRus: this.state.barRus + 10,
        sel2: true
      })
    this.state.selectedRus.forEach((obj,e)=> {
      if (i === e)
        this.setState((state, props) => ({
          selectedRus: update(state.selectedRus,{[e]:  {$set: true}}),
        }))
      else
        this.setState((state, props) => ({
          selectedRus: update(state.selectedRus,{[e]:  {$set: false}}),
        }))
    });
  }
  createrusRadio = (e) => {
    var table = [];
    table=this.state.rusChoiceArr.map((obj,i)=> {
      if (this.state.selectedRus[i] === true)
        return(<p key={i} style={{margin: "0"}} className="colorGreen"><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedRus[i]} onChange={(e)=>{this.radioButtonrusFunc(i);}}/><span className="label"></span>{obj}</label></p>)
      else return (<p key={i} style={{margin: "0"}}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedRus[i]} onChange={(e)=>{this.radioButtonrusFunc(i);}}/><span className="label"></span>{obj}</label></p>)
    });
    return table;
  }
  onSlide2 = (e) => {
    if (parseInt(this.state.val2, 10) === 30000) this.bar = 10;
    if (parseInt(e, 10) === 30000) this.bar = -10;
    this.setState({
      val2: e,
      barRus: this.state.barRus + this.bar
    })
  }
  rusNum1Func = (e) => {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Заявка на оформление полиса страхования<b style={{color: "#3a7d87"}}> По России</b><span className="shag"> Шаг {this.num()} из 3</span></p>
            <p id="left2">Ввод персональных данных застрахованного:</p>
            <table><tbody>
              {this.createUsersDataTablerus()}
            </tbody></table>
            <p style={{margin: "0"}} className={this.state.colorP1}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex3 === true} onChange={(e)=>{this.radioButtonSex3Func(true);}} /><span className="label"></span>Мужчина</label></p>
            <p style={{margin: "0"}} className={this.state.colorP2}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex3 === false} onChange={(e)=>{this.radioButtonSex3Func(false);}} /><span className="label"></span>Женщина</label></p>
            {(this.progressBarrusFunc() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.rusNumFunc(2);}}>Далее</button>)}
            {(this.state.check === true && this.state.barRus < 40)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  rusNum2Func = (e) => {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Заявка на оформление полиса страхования<b style={{color: "#3a7d87"}}> По России</b><span className="shag"> Шаг {this.num()} из 3</span></p>
            <p id="left2">Выберите пакет опций:</p>
            <table><tbody>
              {this.createUsersDataTablerus2()}
            </tbody></table>
            <p id="center2">Размер страховой защиты для каждого застрахованного: {(parseInt(this.state.val2,10) !== 30000)?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Укажите оценочную стоимость"/>)}</p>
            <div style={{height: "60px"}}><div className="sliderCar">
                  <Nouislider
                    step ={1000}
                    range={{ min: 30000, max: 100000 }}
                    start={this.state.val2}
                    connect ={[true, false]}
                    onSlide ={this.onSlide2}/>
                    <span id="left">30 000 &#8381;</span><span id="right">100 000 &#8381;</span>
                </div>
            <div className="sliderCar2"><span>{this.numberWithSpaces(parseInt(this.state.val2,10))} &#8381;</span></div>
            </div>
            <p id="left2">Выберите Вид отдыха:</p>
            {this.createrusRadio()}
            {(this.progressBarrusFunc2() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.rusNumFunc(3);}}>Далее</button>)}
            {(this.state.check === true && this.state.barRus < 60)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  rusNum3Func = (e) => {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Заявка на оформление полиса страхования<b style={{color: "#3a7d87"}}> По России</b><span className="shag"> Шаг {this.num()} из 3</span></p>
            <p id="left2">Ввод персональных данных страхователя:</p>
            <table><tbody>
              {this.createUsersDataTablerus3()}
            </tbody></table>
            <p style={{margin: "0"}} className={this.state.colorP11}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex4 === true} onChange={(e)=>{this.radioButtonSex4Func(true);}} /><span className="label"></span>Мужчина</label></p>
            <p style={{margin: "0"}} className={this.state.colorP22}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex4 === false} onChange={(e)=>{this.radioButtonSex4Func(false);}} /><span className="label"></span>Женщина</label></p>
            <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
            {(this.progressBarrusFunc3() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
            {(this.state.check === true && this.state.barRus < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  createUsersDataTablerus = (e) => {
    var table = [];
    table=this.state.rusArr1.map((obj,i)=> {
      if (i === 2 || i === 3 || i === 4) return (<tr key={i}><td>{obj}</td><td><input type="date" name="calendar" value={this.state.rusInpArr1[i]} onChange={(e)=>{this.changeValueFuncrus(e, i);}}></input></td><td>{(this.state.rusInpArr1[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.rusInpArr1[i]} placeholder={this.state.holderrusArr1[i]} onChange={(e)=>{this.changeValueFuncrus(e, i);}}></input></td><td>{(this.state.rusInpArr1[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    });
    return table;
  }
  createUsersDataTablerus2 = (e) => {
    var table = [];
    table=this.state.rusServsArr.map((obj,i)=> {
       return (<tr key={i}><td><Checkbox defaultChecked checked={this.state.rusServsInpArr[i]} onChange={(e)=>{this.changeValueFuncrus2(e, i);}}/> {obj}</td></tr>)
  });
  return table;
  }
  createUsersDataTablerus3 = (e) => {
    var table = [];
    table=this.state.rusArr3.map((obj,i)=> {
      if (i === 1) return (<tr key={i}><td>{obj}</td><td><input type="date" name="calendar" value={this.state.rusInpArr3[i]} onChange={(e)=>{this.changeValueFuncrus3(e, i);}}></input></td><td>{(this.state.rusInpArr3[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else if (i === 2)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.rusInpArr3[i]} placeholder={this.state.holderrusArr3[i]} onChange={(e)=>{this.changeValueFuncrus3(e, i);}}></input></td><td>{(this.state.rusInpArr3[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.rusInpArr3[i]} placeholder={this.state.holderrusArr3[i]} onChange={(e)=>{this.changeValueFuncrus3(e, i);}}></input></td><td>{(this.state.rusInpArr3[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    });
    return table;
  }
  changeValueFuncrus = (e, i) => {
    if (i !== 0) {
      if (this.state.rusInpArr1[i] === "") this.bar = 10;
      if (e.target.value === "") this.bar = -10;
      var value = e.target.value;
      this.setState((state, props) => ({
        rusInpArr1: update(state.rusInpArr1, {[i]:  {$set: value}}),
        barRus: state.barRus + this.bar
      }))
    }
  }
  changeValueFuncrus2 = (e, i) => {
    var value = e.target.checked;
      this.setState((state, props) => ({
        rusServsInpArr: update(state.rusServsInpArr, {[i]:  {$set: value}}),
      }))
  }
  changeValueFuncrus3 = (e, i) => {
    if (this.state.rusInpArr3[i] === "") this.bar = 10;
    if (e.target.value === "") this.bar = -10;
    var value = e.target.value;
      this.setState((state, props) => ({
        rusInpArr3: update(state.rusInpArr3, {[i]:  {$set: value}}),
        barRus: state.barRus + this.bar
      }))
  }
  //Невыезд
  leaveCalc = (e)=> {
    if (this.state.leaveNum === 1) return(this.leaveNum1Func())
    else if (this.state.leaveNum === 2) return(this.leaveNum2Func())
  }
  leaveNumFunc = (i)=> {
    this.setState({
      leaveNum: i,
      check: false
    })
  }
  progressbarleaveFunc = (e)=> {
    if (this.state.barleave === 60) return(true)
    else return(false)
  }
  progressbarleaveFunc2 = (e)=> {
    if (this.state.barleave  === 100) return(true)
    else return(false)
  }
  createUsersDataTableleave = (e) => {
    var table = [];
    table=this.state.leaveArr1.map((obj,i)=> {
      if (i === 2 || i === 3 || i === 4) return (<tr key={i}><td>{obj}</td><td><input type="date" name="calendar" value={this.state.leaveInpArr1[i]} onChange={(e)=>{this.changeValueFuncleave(e, i);}}></input></td><td>{(this.state.leaveInpArr1[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.leaveInpArr1[i]} placeholder={this.state.holderleaveArr1[i]} onChange={(e)=>{this.changeValueFuncleave(e, i);}}></input></td><td>{(this.state.leaveInpArr1[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    });
    return table;
  }
  createUsersDataTableleave2 = (e) => {
    var table = [];
    table=this.state.leaveArr2.map((obj,i)=> {
      if (i === 1) return (<tr key={i}><td>{obj}</td><td><input type="date" name="calendar" value={this.state.leaveInpArr2[i]} onChange={(e)=>{this.changeValueFuncleave2(e, i);}}></input></td><td>{(this.state.leaveInpArr2[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else if (i === 2)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.leaveInpArr2[i]} placeholder={this.state.holderleaveArr2[i]} onChange={(e)=>{this.changeValueFuncleave2(e, i);}}></input></td><td>{(this.state.leaveInpArr2[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.leaveInpArr2[i]} placeholder={this.state.holderleaveArr2[i]} onChange={(e)=>{this.changeValueFuncleave2(e, i);}}></input></td><td>{(this.state.leaveInpArr2[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    });
    return table;
  }
  changeValueFuncleave = (e, i) => {
    if (this.state.leaveInpArr1[i] === "") this.bar = 10;
    if (e.target.value === "") this.bar = -10;
    var value = e.target.value;
      this.setState((state, props) => ({
        leaveInpArr1: update(state.leaveInpArr1, {[i]:  {$set: value}}),
        barleave: state.barleave + this.bar
      }))
  }
  changeValueFuncleave2 = (e, i) => {
    if (this.state.leaveInpArr2[i] === "") this.bar = 10;
    if (e.target.value === "") this.bar = -10;
    var value = e.target.value;
      this.setState((state, props) => ({
        leaveInpArr2: update(state.leaveInpArr2, {[i]:  {$set: value}}),
        barleave: state.barleave + this.bar
      }))
  }
  leaveNum1Func = (e) => {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Заявка на оформление полиса страхования<b style={{color: "#3a7d87"}}> Невыезд</b><span className="shag"> Шаг {this.num()} из 2</span></p>
            <p id="left2">Ввод персональных данных застрахованного:</p>
            <table><tbody>
              {this.createUsersDataTableleave()}
            </tbody></table>
            <p style={{margin: "0"}} className={this.state.colorP1}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex3 === true} onChange={(e)=>{this.radioButtonSex3Func(true);}} /><span className="label"></span>Мужчина</label></p>
            <p style={{margin: "0"}} className={this.state.colorP2}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex3 === false} onChange={(e)=>{this.radioButtonSex3Func(false);}} /><span className="label"></span>Женщина</label></p>
            <p id="center2">Размер страховой защиты для каждого застрахованного: {(parseInt(this.state.val3,10) !== 30000)?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Укажите оценочную стоимость"/>)}</p>
            <div style={{height: "60px"}}><div className="sliderCar">
                  <Nouislider
                    step ={1000}
                    range={{ min: 30000, max: 100000 }}
                    start={this.state.val3}
                    connect ={[true, false]}
                    onSlide ={this.onSlide3}/>
                    <span id="left">30 000 &#8381;</span><span id="right">100 000 &#8381;</span>
                </div>
            <div className="sliderCar2"><span>{this.numberWithSpaces(parseInt(this.state.val3,10))} &#8381;</span></div>
            </div>
            {(this.progressbarleaveFunc() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.leaveNumFunc(2);}}>Далее</button>)}
            {(this.state.check === true && this.state.barleave < 60)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  leaveNum2Func = (e) => {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Заявка на оформление полиса страхования<b style={{color: "#3a7d87"}}> Невыезд</b><span className="shag"> Шаг {this.num()} из 2</span></p>
            <p id="left2">Ввод персональных данных страхователя:</p>
            <table><tbody>
              {this.createUsersDataTableleave2()}
            </tbody></table>
            <p style={{margin: "0"}} className={this.state.colorP11}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex4 === true} onChange={(e)=>{this.radioButtonSex4Func(true);}} /><span className="label"></span>Мужчина</label></p>
            <p style={{margin: "0"}} className={this.state.colorP22}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex4 === false} onChange={(e)=>{this.radioButtonSex4Func(false);}} /><span className="label"></span>Женщина</label></p>
            <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
            {(this.progressbarleaveFunc2() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
            {(this.state.check === true && this.state.barleave < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  onSlide3 = (e) => {
    if (parseInt(this.state.val3, 10) === 30000) this.bar = 10;
    if (parseInt(e, 10) === 30000) this.bar = -10;
    this.setState({
      val3: e,
      barleave: this.state.barleave + this.bar
    })
  }
  //Заявка
  createZayvka = (e)=> {
    this.setState({
      amerNum: 1,
      rusNum: 1,
      leaveNum: 1,
      check: false,
      zayvka: true,
      val1: 30000,
      val2: 30000,
      val3: 30000,
      baramer: 0,
      barRus: 0,
      barleave: 0,
      amerInpArr1: ["","","","","",""],
      amerInpArr3: ["","","","",""],
      amerServsInpArr: [true, true, false, false, false, false,],
      selectedAmer: [false, false, false],
      rusInpArr1: ["Россия","","","",""],
      rusInpArr3: ["","","",""],
      leaveInpArr1: ["","","","",""],
      leaveInpArr2: ["","","",""],
      rusServsInpArr: [true, true, false, false, false, false,],
      selectedRus: [false, false, false],
      selectedSex: true,
      selectedSex2: true,
      selectedSex3: true,
      selectedSex4: true,
      colorP1: "colorGreen",
      colorP2: "",
      colorP11: "colorGreen",
      colorP22: "",
      sel1: false,
      sel2: false,
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
    <p className="classZa">Вы успешно оформили заявку на туристический полис страхования <b style={{color: "#3a7d87"}}>{this.name()}.</b></p>
    <p className="classZa">Скоро с Вами свяжется наш специалист, пожалуйста ожидайте.</p>
    <p className="classZa"><b style={{color: "#3a7d87"}}>Статус заявки</b> Вы можете отслеживать в личном кабинете.</p></div></div>)
  }
  name = (e)=> {
    if (this.state.rusStateArr[0] === true) return("За рубежом")
    else if (this.state.rusStateArr[1] === true) return("По России")
    else if (this.state.rusStateArr[2] === true) return("Невыезд")
  }
  num = (e)=> {
    if (this.state.rusStateArr[0] === true) return(this.state.amerNum)
    else if (this.state.rusStateArr[1] === true) return(this.state.rusNum)
    else if (this.state.rusStateArr[2] === true) return(this.state.leaveNum)

  }
  barFunc = (e)=> {
    if (this.state.rusStateArr[0] === true) return(this.state.baramer)
    else if (this.state.rusStateArr[1] === true) return(this.state.barRus)
    else if (this.state.rusStateArr[2] === true) return(this.state.barleave)
  }

  render(){

      return(<div>
              <div className="choiceCars">
                <div className="choice2">
                <table><tbody>
                <tr>{this.createButtons()}</tr>
                </tbody></table>
                </div>
                <div className="bar2"><div className="barClass"><ProgressBar className="barBar2" width="400px" bgColor="#46a384" labelAlignment="center" completed={this.barFunc()}/></div></div>
              </div>
              <div className="calcCars">
                <div className="formCars">{this.createForms(this.funcInforus())}</div>
                <div className="infoCars">
                  <table><tbody>
                    <tr>{this.createButtonsInfo(this.funcInforus())}</tr>
                  </tbody></table>
                  <div className="boxInfo">{this.createInfo(this.funcInforus())}</div>
                </div>
              </div>
              {(this.state.zayvka === true)?(this.zayavkaTime()):(null)}
            </div>)
    }
  }

export default Travels;

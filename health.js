import React from 'react';
import update from 'immutability-helper';
import ProgressBar from "@ramonak/react-progress-bar";
import Nouislider from 'react-nouislider';
import "nouislider/distribute/nouislider.css";
import ok from './svg/ok.svg';
import notok from './svg/notok.svg';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

export class Health extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      healthArr: ["ДМС","ОМС","Несчастный случай"],
      healthStateArr: [true, false, false],
      healthClassArr: ["carsClass","",""],
      infoArr: [["ДМС в России", "Преимущества ДМС", "Страховые продукты"],["О полисе ОМС","Преимущества ОМС","Необходимые документы"],["О полисе","Преимущества","Страховые программы"]],
      infoStateArr: [true, false, false],
      infoClassArr: ["infoClass","",""],
      check: false,
      barDms: 0,
      barOms: 0,
      barNs: 0,
      zayvka: false,
      colorP1: "colorGreen",
      colorP2: "",
      colorP11: "colorGreen",
      colorP22: "",
      selectedDms: [false, false, false, false, false],
      sel1: false,
      dmsChoiceArr: ["Базовый от 37 700 руб.", "Стандарт от 48 200 руб.", "Оптимал от 59 900 руб.", "Премиум от 64 700 руб.", "Платинум от 71 700 руб."],
      dmsArr: ["Ваше имя:","Телефон:","Электронная почта:","Город:"],
      dmsholderArr:["Имя","Номер телефона","E-mail","Населенный пункт"],
      dmsInpArr: ["","","",""],
      omsArr: ["Ваше имя:","Телефон:","Электронная почта:","Город:"],
      omsholderArr:["Имя","Номер телефона","E-mail","Населенный пункт"],
      omsInpArr: ["","","",""],
      nsArr: ["Смерть в результате несчастного случая", "Установление инвалидности в результате несчастного случая", "Телесные повреждения в результате несчастного случая"],
      nsInpArr: [true, false, false],
      val1: 50000,
      dateInp: "",
      nsNum: 1,
      nsArr2: ["Фамилия Имя Отчество: ", "Дата рождения: "],
      nsHolderArr2: ["ФИО", "Дата"],
      nsInpArr2: ["", ""],
      nsArr3: ["Фамилия Имя Отчество: ", "Дата рождения: "],
      nsHolderArr3: ["ФИО", "Дата"],
      nsInpArr3: ["", ""],
      selectedSex: true,
      selectedSex2: true,
      selectedSex3: true,
      nsArr4: ["Страхователь:","Дата рождения:","Контактный телефон:","Данные паспорта - серия:","Данные паспорта - номер:", "Дата выдачи: ", "Адрес Регистрации: "],
      nsHolderArr4:["Фамилия Имя Отчество","Дата","Телефон","Серия","Номер","Дата","Адрес"],
      nsInpArr4: ["","","","","","",""],
    };
  }
  clickButtonFunc = (i) => {
    this.state.healthArr.forEach((obj,e)=> {
      if (i === e)
        this.setState((state, props) => ({
          healthStateArr: update(state.healthStateArr,{[e]:  {$set: true}}),
          healthClassArr: update(state.healthClassArr,{[e]:  {$set: "carsClass"}}),
          infoStateArr: [true, false, false],
          infoClassArr: ["infoClass","",""],
          check: false,
        }))
      else
        this.setState((state, props) => ({
          healthStateArr: update(state.healthStateArr,{[e]:  {$set: false}}),
          healthClassArr: update(state.healthClassArr,{[e]:  {$set: ""}}),
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
    table=this.state.healthArr.map((obj,i)=> {
      return(<td key={i} id={this.state.healthClassArr[i]}><button onClick={(e)=>{this.clickButtonFunc(i);}}>{this.state.healthArr[i]}</button></td>)
  });
  return table;
  }
  createButtonsInfo = (e) => {
    var table = [];
    table=this.state.healthStateArr.map((obj,i)=> {
      return(<td key={i} id={this.state.infoClassArr[i]}><button onClick={(e)=>{this.clickButtonFunc1(i);}}>{this.state.infoArr[e][i]}</button></td>)
  });
  return table;
  }
  funcInfoCars = (e)=> {
    if (this.state.healthStateArr[0] === true) return 0
    else if (this.state.healthStateArr[1] === true) return 1
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
    if (e === 0) return(this.dmsFunc(i));
    else if (e === 1) return(this.omsFunc(i));
    else return(this.nsFunc(i));
  }
  dmsFunc = (i)=> {
    if (i === 0) {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Полис ДМС</b> это добровольное медицинское страхование с целью получения качественной медицинской помощи, которую наша компания организует только в современных клиниках Москвы и других городов России с новейшим оборудованием и лучшими специалистами.</p>
      <p>При покупке <b style={{color: "#3a7d87"}}>полиса ДМС</b> вы можете выбрать как необходимый спектр медицинских услуг (например, поликлинические, стоматологические, стационарные), так и ограниченный объем покрытия (например, на случай лечения заболеваний при укусе иксодовым клещом).</p>
      <p>Отправьте заявку, и мы подберем индивидуальный полис на основе ваших пожеланий.</p>
      </div>)
    }
    else if (i === 1) {
      return(<div className="carsInfo">
        <p><b style={{color: "#3a7d87"}}>Амбулаторно-поликлиническая помощь</b></p>
        <p>Консультации врачей-специалистов, современные исследования и физиолечение</p>
        <b style={{color: "#3a7d87"}}>Аптечное обслуживание</b>
        <p>Компенсация стоимости медикаментов, необходимых для проведения лечения</p>
        <b style={{color: "#3a7d87"}}>Стоматология</b>
        <p>Первичный осмотр с составлением плана лечения, диагностика стоматологических заболеваний, анестезия различных типов, хирургия</p>
        <b style={{color: "#3a7d87"}}>Госпитализация</b>
        <p>Организация и оплата стационарного лечения с возможностью оформления дополнительной услуги скорой медицинской помощи</p>
       </div>)
    }
    else {
      return(<div className="carsInfo">
        <p><b style={{color: "#3a7d87"}}>Основной список продуктов ДМС для физических лиц:</b></p>
        <ul className="ulCars">
        <li><span><b style={{color: "#3a7d87"}}>Базовый.</b> Предполагает только поликлиническое обслуживание, включая помощь на дому. Стоимость от <b style={{color: "#3a7d87"}}>37 700 руб.</b></span></li>
        <li><span><b style={{color: "#3a7d87"}}>Стандарт.</b>  Охватывает поликлинические и стоматологические услуги. Стоимость от <b style={{color: "#3a7d87"}}>48 200 руб.</b></span></li>
        <li><span><b style={{color: "#3a7d87"}}>Оптимал.</b>  Включено поликлиническое и стоматологическое лечение, а также экстренная стационарная помощь. Стоимость от <b style={{color: "#3a7d87"}}>59 900 руб.</b></span></li>
        <li><span><b style={{color: "#3a7d87"}}>Премиум.</b> Включает поликлинические и стоматологические услуги, экстренная стационарная помощь, аптечное обслуживание. Стоимость от <b style={{color: "#3a7d87"}}>64 700 руб.</b></span></li>
        <li><span><b style={{color: "#3a7d87"}}>Платинум.</b> Максимальное покрытие: поликлинические и стоматологические услуги, экстренная стационарная помощь, аптечное обслуживание, услуги личного врача. Стоимость от <b style={{color: "#3a7d87"}}>71 700 руб.</b></span></li>
        </ul>
       </div>)
    }
  }
  omsFunc = (i)=> {
    if (i === 0) {
      return(<div className="carsInfo">
      <p><b style={{color: "#3a7d87"}}>Обязательное медицинское страхование (ОМС)</b></p>
      <p>Согласно Федеральному закону № 326-ФЗ от 29.11.2010 (с изменениями) <b style={{color: "#3a7d87"}}>«Об обязательном медицинском страховании в Российской Федерации»</b> застрахованные лица имеют право на бесплатное оказание им медицинской помощи медицинскими организациями при наступлении страхового случая:</p>
      <ul className="ulCars2">
      <li><span>на всей территории Российской Федерации в объеме, установленном базовой программой обязательного медицинского страхования;</span></li>
      <li><span>на территории субъекта Российской Федерации, в котором выдан полис обязательного медицинского страхования, в объеме, установленном соответствующей территориальной программой.</span></li>
      </ul>
      </div>)
    }
    else if (i === 1) {
      return(<div className="carsInfo">
      <p><b style={{color: "#3a7d87"}}>Бесплатная медицинская помощь</b></p>
      <p>В любом регионе Российской Федерации в объеме базовой программы ОМС</p>
      <b style={{color: "#3a7d87"}}>Защита ваших интересов</b>
      <p>Компания на вашей стороне в разрешении спорных и конфликтных ситуаций с медучреждениями</p>
       </div>)
    }
    else {
      return(<div className="carsInfo">
        <p><b style={{color: "#3a7d87"}}>Какие документы нужны для оформления?</b></p>
        <ul className="ulCars2">
        <li><span>документ, удостоверяющий личность;</span></li>
        <li><span>страховое свидетельство обязательного пенсионного страхования.</span></li>
        </ul>
        <b style={{color: "#3a7d87"}}>Как оформить полис ОМС?</b>
        <ul className="ulCars2">
        <li><span>Выбрать наиболее удобный для вас офис выдачи полисов страховой компании.</span></li>
        <li><span>Подать лично или через своего представителя заявление. Каждый застрахованный получает единый номер полиса обязательного медицинского страхования, действующий на всей территории Российской Федерации. При смене места работы менять полис не нужно.</span></li>
        </ul>
       </div>)
    }
  }
  nsFunc = (i)=> {
    if (i === 0) {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Cтрахование жизни и здоровья от несчастных случаев</b> – это надежный способ позаботиться о себе и своих близких.</p>
      <p>Особенность данной страховки заключается в том, что она предоставляет страхователю широкие возможности для выбора.</p>
      <p><b style={{color: "#3a7d87"}}>Вы можете самостоятельно решить:</b></p>
      <ul className="ulCars2">
      <li><span>на какую сумму заключить договор, ориентируясь на собственный уровень дохода;</span></li>
      <li><span>по каким рискам застраховаться, принимая во внимание свой образ жизни.</span></li>
      </ul>
      </div>)
    }
    else if (i === 1) {
      return(<div className="carsInfo">
      <p><b style={{color: "#3a7d87"}}>Медицинские расходы</b></p>
      <p>Полис покрывает медицинские расходы по риску "Травма в результате несчастного случая".</p>
      <b style={{color: "#3a7d87"}}>Страховые выплаты</b>
      <p>Полис предусматривает выплаты в случае наступления инвалидности или ухода из жизни в результате несчастного случая.</p>
      <b style={{color: "#3a7d87"}}>Страхование для всей семьи</b>
      <p>Оформить полис можно и на детей, и на взрослых.</p>
      <b style={{color: "#3a7d87"}}>Доступная цена</b>
      <p>Страховой взнос от 273 рублей.</p>
       </div>)
    }
    else {
      return(<div className="carsInfo">
        <p><b style={{color: "#3a7d87"}}>Программы страхования от несчастных случаев</b></p>
        <p>Программы добровольного страхования от несчастного случая (НС) включают все основные риски, произошедшие в результате НС: смерть, установление инвалидности, телесные повреждения (травмы).</p>
        <p>Также есть дополнительные риски: хирургическое вмешательство, госпитализация, временное нарушение здоровья в результате инфицирования.</p>
        <b style={{color: "#3a7d87"}}>Классика</b>
        <ul className="ulCars2">
        <li><span>Страхование физических лиц от 1 года до 70 лет на дату окончания действия договора страхования.</span></li>
        <li><span>Территория страхования РФ или Весь мир на выбор.</span></li>
        <li><span>Застраховаться можно на срок от 1 месяца до 1 года.</span></li>
        <li><span>Программа включает дополнительные страховые риски в результате НС: Хирургическое вмешательство, Госпитализация, Временное нарушение здоровья в результате инфицирования.</span></li>
        </ul>
        <b style={{color: "#3a7d87"}}>Для всей семьи</b>
        <ul className="ulCars2">
        <li><span>Система страхования, которая защитит всех членов семьи.</span></li>
        <li><span>Полис «Семья» позволяет застраховать близких родственников до 6 человек в возрасте от 3 лет до 70 на дату окончания действия договора страхования.</span></li>
        <li><span>Территория страхования весь мир.</span></li>
        <li><span>Срок страхования 1 год.</span></li>
        </ul>
       </div>)
    }
  }
  createForms = (e) => {
    if (e === 0) return(this.dmsCalc());
    else if (e === 1) return(this.omsCalc());
    else return(this.nsCalc());
  }
  //ДМС
  dmsCalc = (e)=> {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Заявка на оформление полиса <b style={{color: "#3a7d87"}}>«ДМС»</b><span className="shag"> Шаг 1 из 1</span></p>
            <p id="left2">Выберите страховую программу:</p>
            {this.createDmsRadio()}
            <p id="left2">Укажите свои контактные данные:</p>
            <table><tbody>
              {this.createUsersDataTable()}
            </tbody></table>
            <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
            {(this.progressBarFunc() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
            {(this.state.check === true && this.state.barDms < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  progressBarFunc = (e)=> {
    if (this.state.barDms === 100) return(true)
    else return(false)
  }
  check = (e)=> {
    this.setState({
      check: true
    })
  }
  radioButtonDmsFunc = (i) => {
    if (this.state.sel1 === false)
      this.setState({
        barDms: this.state.barDms + 20,
        sel1: true
      })
    this.state.selectedDms.forEach((obj,e)=> {
      if (i === e)
        this.setState((state, props) => ({
          selectedDms: update(state.selectedDms,{[e]:  {$set: true}}),
        }))
      else
        this.setState((state, props) => ({
          selectedDms: update(state.selectedDms,{[e]:  {$set: false}}),
        }))
    });
  }
  createDmsRadio = (e) => {
    var table = [];
    table=this.state.dmsChoiceArr.map((obj,i)=> {
      if (this.state.selectedDms[i] === true)
        return(<p style={{margin: "0"}} className="colorGreen"><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedDms[i]} onChange={(e)=>{this.radioButtonDmsFunc(i);}}/><span className="label"></span>{obj}</label></p>)
      else return (<p style={{margin: "0"}}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedDms[i]} onChange={(e)=>{this.radioButtonDmsFunc(i);}}/><span className="label"></span>{obj}</label></p>)
    });
    return table;
  }
  createUsersDataTable = (e) => {
    var table = [];
    table=this.state.dmsArr.map((obj,i)=> {
      if (i === 1)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.dmsInpArr[i]} placeholder={this.state.dmsholderArr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.dmsInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.dmsInpArr[i]} placeholder={this.state.dmsholderArr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.dmsInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
  });
  return table;
  }
  changeValueFunc = (e, i) => {
    if (this.state.dmsInpArr[i] === "") this.bar = 20;
    if (e.target.value === "") this.bar = -20;
    var value = e.target.value;
      this.setState((state, props) => ({
        dmsInpArr: update(state.dmsInpArr, {[i]:  {$set: value}}),
        barDms: state.barDms + this.bar
      }))
  }
  //ОМС
  omsCalc = (e)=> {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Заявка на оформление полиса <b style={{color: "#3a7d87"}}>«ОМС»</b><span className="shag"> Шаг 1 из 1</span></p>
            <p id="left2">Укажите свои контактные данные:</p>
            <table><tbody>
              {this.createUsersDataTableoms()}
            </tbody></table>
            <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
            {(this.progressBaromsFunc() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
            {(this.state.check === true && this.state.barOms < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  progressBaromsFunc = (e)=> {
    if (this.state.barOms === 100) return(true)
    else return(false)
  }
  createUsersDataTableoms = (e) => {
    var table = [];
    table=this.state.dmsArr.map((obj,i)=> {
      if (i === 1)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.omsInpArr[i]} placeholder={this.state.omsholderArr[i]} onChange={(e)=>{this.changeValueomsFunc(e, i);}}></input></td><td>{(this.state.omsInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.omsInpArr[i]} placeholder={this.state.omsholderArr[i]} onChange={(e)=>{this.changeValueomsFunc(e, i);}}></input></td><td>{(this.state.omsInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
  });
  return table;;
  }
  changeValueomsFunc = (e, i) => {
    if (this.state.omsInpArr[i] === "") this.bar = 25;
    if (e.target.value === "") this.bar = -25;
    var value = e.target.value;
      this.setState((state, props) => ({
        omsInpArr: update(state.omsInpArr, {[i]:  {$set: value}}),
        barOms: state.barOms + this.bar
      }))
  }
  //Несчастный случай
  nsCalc = (e) => {
    if (this.state.nsNum === 1) return(this.nsNum1Func())
    else if (this.state.nsNum === 2) return(this.nsNum2Func())
    else if (this.state.nsNum === 3) return(this.nsNum3Func())
    }
  nsNumFunc = (i)=> {
      this.setState({
        nsNum: i,
        check: false
      })
  }
  nsNum1Func = (e)=> {
    this.bar=0;
    return(<div className="calcKasko2">
            <p id="center">Заявка на оформление страхования от <b style={{color: "#3a7d87"}}>Несчастного случая</b><span className="shag"> Шаг {this.state.nsNum} из 3</span></p>
            <p id="left2">Выберите включенные риски:</p>
            <table><tbody>
              {this.createUsersDataTableNs()}
            </tbody></table>
            <p id="center2">Выбрать страховую сумму: {(parseInt(this.state.val1,10) !== 50000)?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Укажите оценочную стоимость"/>)}</p>
            <div style={{height: "60px"}}><div className="sliderCar">
                  <Nouislider
                    step ={1000}
                    range={{ min: 50000, max: 200000 }}
                    start={[this.state.val1]}
                    connect ={[true, false]}
                    onSlide ={this.onSlide1}/>
                    <span id="left">50 000 &#8381;</span><span id="right">200 000 &#8381;</span>
                </div>
            <div className="sliderCar2"><span>{this.numberWithSpaces(parseInt(this.state.val1,10))} &#8381;</span></div>
            </div>
            <table><tbody>
              <tr><td>Дата начала действия договора: </td><td><input type="date" value={this.state.dateInp} onChange={(e)=>{this.changeValuedateInp(e);}}></input></td><td>{(this.state.dateInp !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>
            </tbody></table>
            {(this.progressBarNsFunc() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.nsNumFunc(2);}}>Далее</button>)}
            {(this.state.check === true && this.state.barNs < 23)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  nsNum2Func = (e)=> {
    this.bar=0;
    return(<div className="calcKasko2">
            <p id="center">Заявка на оформление страхования от <b style={{color: "#3a7d87"}}>Несчастного случая</b><span className="shag"> Шаг {this.state.nsNum} из 3</span></p>
            <p id="left2">Данные застрахованного № 1</p>
            <table><tbody>
              {this.createUsersDataTableNs2()}
            </tbody></table>
            <p style={{margin: "0"}} className={this.state.colorP1}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex === true} onChange={(e)=>{this.radioButtonSexFunc(true);}} /><span className="label"></span>Мужчина</label></p>
            <p style={{margin: "0"}} className={this.state.colorP2}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex === false} onChange={(e)=>{this.radioButtonSexFunc(false);}} /><span className="label"></span>Женщина</label></p>
            <p id="left2">Данные застрахованного № 2</p>
            <table><tbody>
              {this.createUsersDataTableNs3()}
            </tbody></table>
            <p style={{margin: "0"}} className={this.state.colorP11}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex2 === true} onChange={(e)=>{this.radioButtonSex2Func(true);}} /><span className="label"></span>Мужчина</label></p>
            <p style={{margin: "0"}} className={this.state.colorP22}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex2 === false} onChange={(e)=>{this.radioButtonSex2Func(false);}} /><span className="label"></span>Женщина</label></p>
            {(this.progressBarNsFunc2() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.nsNumFunc(3);}}>Далее</button>)}
            {(this.state.check === true && this.state.barNs < 51)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  nsNum3Func = (e)=> {
    this.bar = 0;
    return(<div className="calcKasko">
            <p id="center">Заявка на оформление страхования от <b style={{color: "#3a7d87"}}>Несчастного случая</b><span className="shag"> Шаг {this.state.nsNum} из 3</span></p>
            <p id="left2">Ввод персональных данных:</p>
            <table><tbody>
              {this.createUsersDataTableNs4()}
            </tbody></table>
            <p style={{margin: "0"}} className={this.state.colorP1}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex3 === true} onChange={(e)=>{this.radioButtonSex3Func(true);}} /><span className="label"></span>Мужчина</label></p>
            <p style={{margin: "0"}} className={this.state.colorP2}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex3 === false} onChange={(e)=>{this.radioButtonSex3Func(false);}} /><span className="label"></span>Женщина</label></p>
            <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
            {(this.progressBarNsFunc3() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
            {(this.state.check === true && this.state.barNs < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
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
        colorP1: "colorGreen",
        colorP2: "",
      })
    }
    else {
      this.setState ({
        selectedSex3: false,
        colorP2: "colorGreen",
        colorP1: "",
      })
    }
  }
  numberWithSpaces  = (e) => {
    return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  onSlide1 = (e) => {
    if (parseInt(this.state.val1, 10) === 50000) this.bar = 7;
    if (parseInt(e, 10) === 50000) this.bar = -7;
    this.setState({
      val1: e,
      barNs: this.state.barNs + this.bar
    })
  }
  progressBarNsFunc = (e)=> {
    if (parseInt(this.state.barNs, 10) === 23) return(true)
    else return(false)
  }
  progressBarNsFunc2 = (e)=> {
    if (parseInt(this.state.barNs, 10) === 51) return(true)
    else return(false)
  }
  progressBarNsFunc3 = (e)=> {
      if (parseInt(this.state.barNs, 10) === 100) return(true)
      else return(false)
  }
  createUsersDataTableNs = (e) => {
    var table = [];
    table=this.state.nsArr.map((obj,i)=> {
       return (<tr key={i}><td><Checkbox defaultChecked checked={this.state.nsInpArr[i]} onChange={(e)=>{this.changeValueFuncNs(e, i);}}/> {obj}</td></tr>)
  });
  return table;
  }
  createUsersDataTableNs2 = (e) => {
    var table = [];
    table=this.state.nsArr2.map((obj,i)=> {
       if (i === 1) return (<tr key={i}><td>{obj}</td><td><input type="date" value={this.state.nsInpArr2[i]} onChange={(e)=>{this.changeValueFuncNs2(e, i);}}></input></td><td>{(this.state.nsInpArr2[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
       else return (<tr key={i}><td>{obj}</td><td><input type="text" value={this.state.nsInpArr2[i]} placeholder={this.state.nsHolderArr2[i]} onChange={(e)=>{this.changeValueFuncNs2(e, i);}}></input></td><td>{(this.state.nsInpArr2[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
  });
  return table;
  }
  createUsersDataTableNs3 = (e) => {
    var table = [];
    table=this.state.nsArr3.map((obj,i)=> {
       if (i === 1) return (<tr key={i}><td>{obj}</td><td><input type="date" value={this.state.nsInpArr3[i]} onChange={(e)=>{this.changeValueFuncNs3(e, i);}}></input></td><td>{(this.state.nsInpArr3[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
       else return (<tr key={i}><td>{obj}</td><td><input type="text" value={this.state.nsInpArr3[i]} placeholder={this.state.nsHolderArr3[i]} onChange={(e)=>{this.changeValueFuncNs3(e, i);}}></input></td><td>{(this.state.nsInpArr3[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
  });
  return table;
  }
  createUsersDataTableNs4 = (e) => {
    var table = [];
    table=this.state.nsArr4.map((obj,i)=> {
      if (i === 1 || i === 5 || i === 7) return (<tr key={i}><td>{obj}</td><td><input type="date" name="calendar" value={this.state.nsInpArr4[i]} onChange={(e)=>{this.changeValueFuncNs4(e, i);}}></input></td><td>{(this.state.nsInpArr4[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else if (i === 2 || i === 3 || i === 4)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.nsInpArr4[i]} placeholder={this.state.nsHolderArr4[i]} onChange={(e)=>{this.changeValueFuncNs4(e, i);}}></input></td><td>{(this.state.nsInpArr4[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.nsInpArr4[i]} placeholder={this.state.nsHolderArr4[i]} onChange={(e)=>{this.changeValueFuncNs4(e, i);}}></input></td><td>{(this.state.nsInpArr4[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    });
    return table;
  }
  changeValuedateInp = (e) => {
    if (this.state.dateInp === "") this.bar = 16;
    if (e.target.value === "") this.bar = -16;
    var value = e.target.value;
      this.setState((state, props) => ({
        dateInp: value,
        barNs: state.barNs + this.bar
      }))
  }
  changeValueFuncNs = (e, i) => {
    var value = e.target.checked;
      this.setState((state, props) => ({
        nsInpArr: update(state.nsInpArr, {[i]:  {$set: value}}),
        barNs: state.barNs + this.bar
      }))
  }
  changeValueFuncNs2 = (e, i) => {
    if (this.state.nsInpArr2[i] === "") this.bar = 7;
    if (e.target.value === "") this.bar = -7;
    var value = e.target.value;
      this.setState((state, props) => ({
        nsInpArr2: update(state.nsInpArr2, {[i]:  {$set: value}}),
        barNs: state.barNs + this.bar
      }))
  }
  changeValueFuncNs3 = (e, i) => {
    if (this.state.nsInpArr3[i] === "") this.bar = 7;
    if (e.target.value === "") this.bar = -7;
    var value = e.target.value;
      this.setState((state, props) => ({
        nsInpArr3: update(state.nsInpArr3, {[i]:  {$set: value}}),
        barNs: state.barNs + this.bar
      }))
  }
  changeValueFuncNs4 = (e, i) => {
    if (this.state.nsInpArr4[i] === "") this.bar = 7;
    if (e.target.value === "") this.bar = -7;
    var value = e.target.value;
      this.setState((state, props) => ({
        nsInpArr4: update(state.nsInpArr4, {[i]:  {$set: value}}),
        barNs: state.barNs + this.bar
      }))
  }
  radioButtonTerFunc = (e) => {
    if (e === true) {
      this.setState ({
        selectedTer: true,
        colorP1: "colorGreen",
        colorP2: "",
      })
    }
    else {
      this.setState ({
        selectedTer: false,
        colorP2: "colorGreen",
        colorP1: "",
      })
    }
  }

  //Заявка
  createZayvka = (e)=> {
    this.setState({
      check: false,
      zayvka: true,
      val1: 50000,
      barDms: 0,
      barOms: 0,
      barNs: 0,
      nsNum: 1,
      sel1: false,
      selectedSex: true,
      selectedSex2: true,
      selectedSex3: true,
      colorP1: "colorGreen",
      colorP2: "",
      colorP11: "colorGreen",
      colorP22: "",
      dmsInpArr: ["","","",""],
      omsInpArr: ["","","",""],
      selectedDms: [false, false, false, false, false],
      nsInpArr: [true, false, false],
      nsInpArr2: ["", ""],
      nsInpArr3: ["", ""],
      nsInpArr4: ["","","","","","",""],
      dateInp: "",
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
    <p className="classZa">Вы успешно оформили заявку на полис <b style={{color: "#3a7d87"}}>{this.name()}.</b></p>
    <p className="classZa">Скоро с Вами свяжется наш специалист, пожалуйста ожидайте.</p>
    <p className="classZa"><b style={{color: "#3a7d87"}}>Статус заявки</b> Вы можете отслеживать в личном кабинете.</p></div></div>)
  }
  name = (e)=> {
    if (this.state.healthStateArr[0] === true) return("ДМС")
    else if (this.state.healthStateArr[1] === true) return("ОМС")
    else if (this.state.healthStateArr[2] === true) return("Несчастный случай")
  }
  barFunc = (e)=> {
    if (this.state.healthStateArr[0] === true) return(this.state.barDms)
    else if (this.state.healthStateArr[1] === true) return(this.state.barOms)
    else if (this.state.healthStateArr[2] === true) return(this.state.barNs)
  }

  render(){
      return(<div>
              <div className="choiceCars">
                <div className="choice">
                <table><tbody>
                <tr>{this.createButtons()}</tr>
                </tbody></table>
                </div>
                <div className="bar"><div className="barClass"><ProgressBar className="barBar" width="400px" bgColor="#46a384" labelAlignment="center" completed={this.barFunc()}/></div></div>
              </div>
              <div className="calcCars">
                <div className="formCars">{this.createForms(this.funcInfoCars())}</div>
                <div className="infoCars">
                  <table><tbody>
                    <tr>{this.createButtonsInfo(this.funcInfoCars())}</tr>
                  </tbody></table>
                  <div className="boxInfo">{this.createInfo(this.funcInfoCars())}</div>
                </div>
              </div>
              {(this.state.zayvka === true)?(this.zayavkaTime()):(null)}
            </div>)
    }
  }


export default Health;

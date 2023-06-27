import React from 'react';
import update from 'immutability-helper';
import ProgressBar from "@ramonak/react-progress-bar";
import "nouislider/distribute/nouislider.css";
import ok from './svg/ok.svg';
import notok from './svg/notok.svg';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

export class Property extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      protecArr: ["Защита покупки","Банковские карты","Ценности"],
      protecStateArr: [true, false, false],
      protecClassArr: ["carsClass","",""],
      infoArr: [["Особенности", "Преимущества", "Как получить полис"],["О страховании","Преимущества","Как застраховаться"],["Особенности","Виды имущества","Риски"]],
      infoStateArr: [true, false, false],
      infoClassArr: ["infoClass","",""],
      protecNum: 1,
      cardsNum: 1,
      protecArr1: ["Адрес: ","Дата приобретения полиса: ","Номер полиса: "],
      holderprotecArr1: ["Населенный пункт","Дата","Номер"],
      protecInpArr1: ["","",""],
      protecArr2: ["Наименование покупки: ","Марка: ","Модель: ","Серийный номер/IMEI: "],
      holderprotecArr2: ["Телефон, планшет, другое","Марка","Модель", "Номер"],
      protecInpArr2: ["","","",""],
      protecArr3: ["Фамилия Имя Отчество: ","Дата рождения: ","Электронная почта: ","Телефон: "],
      holderprotecArr3: ["Фио","Дата","E-mail", "Номер"],
      protecInpArr3: ["","","",""],
      cardsArr1: ["Стоимость полиса: ","Дата приобретения полиса: ","Номер полиса: "],
      holdercardsArr1: ["Стоимость","Дата","Номер"],
      cardsInpArr1: ["","",""],
      cardsArr2: ["Фамилия Имя Отчество: ","Дата рождения: ","Электронная почта: ","Телефон: "],
      holdercardsArr2: ["Телефон, планшет, другое","Марка","Модель", "Номер"],
      cardsInpArr2: ["","","",""],
      cultArr1: ["Фамилия: ","Имя: ","Электронная почта: ","Телефон: "],
      holdercultArr1: ["Фамилия","Имя","E-mail", "Номер"],
      cultInpArr1: ["","","",""],
      check: false,
      barPro: 0,
      barCards: 0,
      barcult: 0,
      zayvka: false,
      selectedSex: true,
      selectedSex2: true,
      colorP1: "colorGreen",
      colorP2: "",
      colorP11: "colorGreen",
      colorP22: "",
      sel1: false,
      sel2: false,
      protecChoiceArr: ["Связной","DNS","М Видео","Tele2","Юлмарт","Мегафон"],
      cardsChoiceArr: ["Кредит Европа Банк","Мегафон Ритейл","Банк «ФК Открытие»","Итеза банк","Липецккомбанк","кубань кредит", "Восточный банк", "Касперский"],
      selectedProtec: [false, false, false, false, false, false,],
      selectedCards: [false, false, false, false, false, false, false, false,],
    };
  }
  clickButtonFunc = (i) => {
    this.state.protecArr.forEach((obj,e)=> {
      if (i === e)
        this.setState((state, props) => ({
          protecStateArr: update(state.protecStateArr,{[e]:  {$set: true}}),
          protecClassArr: update(state.protecClassArr,{[e]:  {$set: "carsClass"}}),
          infoStateArr: [true, false, false],
          infoClassArr: ["infoClass","",""],
          check: false,
        }))
      else
        this.setState((state, props) => ({
          protecStateArr: update(state.protecStateArr,{[e]:  {$set: false}}),
          protecClassArr: update(state.protecClassArr,{[e]:  {$set: ""}}),
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
    table=this.state.protecArr.map((obj,i)=> {
      return(<td key={i} id={this.state.protecClassArr[i]}><button onClick={(e)=>{this.clickButtonFunc(i);}}>{this.state.protecArr[i]}</button></td>)
  });
  return table;
  }
  createButtonsInfo = (e) => {
    var table = [];
    table=this.state.protecStateArr.map((obj,i)=> {
      return(<td key={i} id={this.state.infoClassArr[i]}><button onClick={(e)=>{this.clickButtonFunc1(i);}}>{this.state.infoArr[e][i]}</button></td>)
  });
  return table;
  }
  funcInfocards = (e)=> {
    if (this.state.protecStateArr[0] === true) return 0
    else if (this.state.protecStateArr[1] === true) return 1
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
    if (e === 0) return(this.protecFunc(i));
    else if (e === 1) return(this.cardsFunc(i));
    else return(this.cultFunc(i));
  }
  protecFunc = (i)=> {
    if (i === 0) {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Защита покупки</b> - страхование Вашей покупки от кражи, злоумышленных действия третьих лиц, повреждений, поломок.</p>
      <p>Обязательно сохраните <b style={{color: "#3a7d87"}}>чек после оплаты!</b></p>
      <p>Вы можете застраховать <b style={{color: "#3a7d87"}}>бытовую технику и электронику</b> (в том числе мобильный телефон, компьютерную технику, электронную книгу)</p>
      </div>)
    }
    else if (i === 1) {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Ваша техника</b> застрахована от следующих непредвиденных событий:</p>
        <ul className="ulHouse2">
        <li><span><b style={{color: "#3a7d87"}}>Утрата или повреждение</b> бытовой техники или электроники, произошедшие в результате противоправных действий третьих лиц на территории всего мира.</span></li>
        <li><span><b style={{color: "#3a7d87"}}>Повреждение, гибель или утрата</b> бытовой техники или электроники в результате пожара, взрыва бытового газа, удара молнии, повреждения водой, стихийных бедствий, падения летающих объектов или их обломков, падения деревьев, наезд транспортного средства на территории жилого помещения, указанной в полисе.</span></li>
        <li><span><b style={{color: "#3a7d87"}}>Поломка бытовой техники или электроники</b>, в результате событий, не покрываемыми гарантийными обязательствами производителя – на территории всего мира.</span></li>
        </ul>
       </div>)
    }
    else {
      return(<div className="carsInfo">
        <p><b style={{color: "#3a7d87"}}>Как получить полис?</b></p>
        <p>Приобрести продукт <b style={{color: "#3a7d87"}}>«Защита покупки»</b> можно недалеко от дома — в салонах связи, в магазинах бытовой техники и электроники:</p>
        <ul className="ulHouse">
        <li><span><b style={{color: "#3a7d87"}}>Эльдорадо</b></span></li>
        <li><span><b style={{color: "#3a7d87"}}>Мегафон</b></span></li>
        <li><span><b style={{color: "#3a7d87"}}>Билайн</b></span></li>
        <li><span><b style={{color: "#3a7d87"}}>Связной</b></span></li>
        <li><span><b style={{color: "#3a7d87"}}>М Видео</b></span></li>
        <li><span><b style={{color: "#3a7d87"}}>DNS</b></span></li>
        <li><span><b style={{color: "#3a7d87"}}>Tele2</b></span></li>
        <li><span><b style={{color: "#3a7d87"}}>МТС</b></span></li>
        </ul>
       </div>)
    }
  }
  cardsFunc = (i)=> {
    if (i === 0) {
      return(<div className="carsInfo">
      <p><b style={{color: "#3a7d87"}}>Страхование банковских карт</b> - позволит обеспечить страховую защиту и поможет возместить ущерб при наступлении хищения, утраты карты.</p>
      <p><b style={{color: "#3a7d87"}}>«Страхование банковских карт»</b> — это:</p>
      <ul className="ulHouse2">
      <li><span>Возможность застраховать в одном полисе все Ваши банковские карты;</span></li>
      <li><span>Идеальное соотношение цены продукта и широкого набора рисков;</span></li>
      <li><span>Возможность самостоятельного выбора наполнения страховки;</span></li>
      <li><span>Страховая защита 24 часа в сутки на территории всего мира.</span></li>
      </ul>
      </div>)
    }
    else if (i === 1) {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Преимущества полиса «Страхование банковских карт»</b></p>
        <ul className="ulHouse2">
        <li><span>Страхование от несанкционированного снятия денежных средств со счета, в том числе в результате скимминга или фишинга;</span></li>
        <li><span>Страхование от хищения наличных, снятых в банкомате в результате грабежа или разбойного нападения;</span></li>
        <li><span>Страхование от утраты карты вследствие неисправной работы банкомата, размагничивания, утери и т.п.</span></li>
        </ul>
       </div>)
    }
    else {
      return(<div className="carsInfo">
      <p><b style={{color: "#3a7d87"}}>Как застраховаться?</b></p>
      <ul className="ulHouse">
      <li><span>Оплатите страховую премию;</span></li>
      <li><span>Обязательно сохраните документ, подтверждающий оплату страховой премии;</span></li>
      <li><span>Обязательно в течение 30 дней передайте данные заполненного Вами полиса в компанию.</span></li>
      </ul>
      <p>Период страхования: 12 месяцев.</p>
      <p><b style={{color: "#3a7d87"}}>Получение выплаты (урегулирование убытка)</b></p>
      <ul className="ulHouse">
      <li><span>Позвоните в компанию по телефону 495 788 0 999 (по Москве) или 8 800 333 75 57 (звонок по России бесплатный) и заявите о страховом случае;</span></li>
      <li><span>Предоставьте полис, документ об оплате страховой премии, заявление и справку из компетентных органов в компанию;</span></li>
      <li><span>Получите выплату.</span></li>
      </ul>
       </div>)
    }
  }
  cultFunc = (i)=> {
    if (i === 0) {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Страхование культурных ценностей</b></p>
      <p>Это означает, что в Вашем доме, офисе, кабинете, мастерской хранятся ценности бóльшие, чем просто деньги или драгоценности, — <b style={{color: "#3a7d87"}}>культурные ценности.</b></p>
      <p><b style={{color: "#3a7d87"}}>Произведения искусства, антиквариат, иные предметы коллекционирования — все это имущество</b>, безусловно высокая стоимость которого определяется, прежде всего, его культурной, исторической или мемориальной значимостью.</p>
      <p>И в связи с этим Вы, вероятно, задумывались над тем, как сохранить созданные Вами или собранные произведения искусства и обезопасить себя от риска потери средств, вложенных в коллекцию, или от риска повредить чужие вещи, которые находятся у Вас на сохранении, ведь и стоимость их высока, и ответственность за их утрату громадна.</p>
      <p>Во избежание финансовых потерь, связанных с утратой или повреждением предметов искусства и коллекционирования, мы предлагаем специальную <b style={{color: "#3a7d87"}}>программу страхования культурных ценностей</b>. И мы рассматриваем ее не просто как оказание страховой услуги, но как сотрудничество с Вами в деле сохранения нашей культуры.</p>
      </div>)
    }
    else if (i === 1) {
      return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>К имуществу, покрываемому данным страхованием, относится:</b></p>
      <p>Предметы (вне зависимости от времени изготовления), уникальность, историческая и (или) культурная ценность которых делают необходимым их сохранение:</p>
      <ul className="ulHouse2">
      <li><span><b style={{color: "#3a7d87"}}>Живопись, графика</b> (авторская, а также офорты, гравюры), парсуны и т. п.;</span></li>
      <li><span><b style={{color: "#3a7d87"}}>Иконы, предметы религиозного культа</b>, не находящиеся в употреблении и в силу их художественной, исторической и культурной ценности являющиеся предметом коллекционирования;</span></li>
      <li><span><b style={{color: "#3a7d87"}}>Авторские фотографии</b>, литографии, ксилографии и т. п.;</span></li>
      <li><span>Произведения <b style={{color: "#3a7d87"}}>изобразительного искусства</b>, исполненные в смешанных и специальных техниках;</span></li>
      <li><span>Произведения <b style={{color: "#3a7d87"}}>декоративно-прикладного искусства</b> из любых материалов (в том числе предметы малых форм, а также уникальные ювелирные украшения);</span></li>
      <li><span>Иные <b style={{color: "#3a7d87"}}>предметы коллекционирования</b>, не являющиеся произведениями искусства, но имеющие научную, историческую, этнографическую, археологическую, мемориальную, художественную либо иного рода культурную ценность.</span></li>
      </ul>
       </div>)
    }
    else {
      return(<div className="carsInfo">
        <p><b style={{color: "#3a7d87"}}>Страхование от следующих рисков</b></p>
        <p>В зависимости от избранных Вами условий страхования, страховая защита может включать покрытие рисков утраты и повреждения перечисленного выше имущества, произошедших по любой причине (страхование «от всех рисков»), кроме специально оговоренных в полисе исключений, либо покрытие отдельных рисков, таких как:</p>
        <ul className="ulHouse2">
        <li><span><b style={{color: "#3a7d87"}}>Пожар</b>, взрыв бытовых газов и т. п.;</span></li>
        <li><span><b style={{color: "#3a7d87"}}>Повреждение водой</b>;</span></li>
        <li><span>Противоправные действия третьих лиц — <b style={{color: "#3a7d87"}}>ража, грабеж</b>, поджог и иные виды умышленного причинения ущерба третьими лицами;</span></li>
        <li><span><b style={{color: "#3a7d87"}}>Стихийные бедствия</b>;</span></li>
        <li><span><b style={{color: "#3a7d87"}}>Утрата</b> одного из парных (комплектных) предметов;</span></li>
        <li><span><b style={{color: "#3a7d87"}}>Уменьшение стоимости</b> вследствие повреждения по одной из причин, покрываемых страхованием;</span></li>
        <li><span><b style={{color: "#3a7d87"}}>Акты вандализма</b>;</span></li>
        <li><span><b style={{color: "#3a7d87"}}>Террористические акты</b>.</span></li>
        </ul>
       </div>)
    }
  }
  createForms = (e) => {
    if (e === 0) return(this.protecCalc());
    else if (e === 1) return(this.cardsCalc());
    else return(this.cultCalc());
  }
  //Защита покупки
  protecCalc = (e)=> {
    if (this.state.protecNum === 1) return(this.protecNum1Func())
    else if (this.state.protecNum === 2) return(this.protecNum2Func())
    else if (this.state.protecNum === 3) return(this.protecNum3Func())
  }
  protecNumFunc = (i)=> {
    this.setState({
      protecNum: i,
      check: false
    })
  }
  progressBarFunc = (e)=> {
    if (this.state.barPro === 36) return(true)
    else return(false)
  }
  progressBarFunc2 = (e)=> {
    if (this.state.barPro === 68) return(true)
    else return(false)
  }
  progressBarFunc3 = (e)=> {
    if (this.state.barPro === 100) return(true)
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
  protecNum1Func = (e) => {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Заявка на активацию полиса<b style={{color: "#3a7d87"}}> «Защита покупки»</b><span className="shag"> Шаг {this.num()} из 3</span></p>
            <p id="left2">Укажите данные полиса:</p>
            <table><tbody>
              {this.createUsersDataTableProtec()}
            </tbody></table>
            <p id="left2">Где был приобретен полис:</p>
            {this.createProtecRadio()}
            {(this.progressBarFunc() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.protecNumFunc(2);}}>Далее</button>)}
            {(this.state.check === true && this.state.barPro < 36)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  protecNum2Func = (e) => {
    this.bar =0;
    return(<div className="calcKasko">
            <p id="center">Заявка на активацию полиса<b style={{color: "#3a7d87"}}> «Защита покупки»</b><span className="shag"> Шаг {this.num()} из 3</span></p>
            <p id="left2">Укажите данные товара:</p>
            <table><tbody>
              {this.createUsersDataTableProtec2()}
            </tbody></table>
            {(this.progressBarFunc2() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.protecNumFunc(3);}}>Далее</button>)}
            {(this.state.check === true && this.state.barPro < 68)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  protecNum3Func = (e) => {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Заявка на активацию полиса<b style={{color: "#3a7d87"}}> «Защита покупки»</b><span className="shag"> Шаг {this.num()} из 3</span></p>
            <p id="left2">Ввод персональных данных:</p>
            <table><tbody>
              {this.createUsersDataTableProtec3()}
            </tbody></table>
            <p style={{margin: "0"}} className={this.state.colorP1}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex === true} onChange={(e)=>{this.radioButtonSexFunc(true);}} /><span className="label"></span>Мужчина</label></p>
            <p style={{margin: "0"}} className={this.state.colorP2}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex === false} onChange={(e)=>{this.radioButtonSexFunc(false);}} /><span className="label"></span>Женщина</label></p>
            <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
            {(this.progressBarFunc3() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Активировать</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Активировать</button>)}
            {(this.state.check === true && this.state.barPro < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  check = (e)=> {
    this.setState({
      check: true
    })
  }
  radioButtonProtecFunc = (i) => {
    if (this.state.sel1 === false)
      this.setState({
        barPro: this.state.barPro + 12,
        sel1: true
      })
    this.state.selectedProtec.forEach((obj,e)=> {
      if (i === e)
        this.setState((state, props) => ({
          selectedProtec: update(state.selectedProtec,{[e]:  {$set: true}}),
        }))
      else
        this.setState((state, props) => ({
          selectedProtec: update(state.selectedProtec,{[e]:  {$set: false}}),
        }))
    });
  }
  createProtecRadio = (e) => {
    var table = [];
    table=this.state.protecChoiceArr.map((obj,i)=> {
      if (this.state.selectedProtec[i] === true)
        return(<p style={{margin: "0"}} className="colorGreen"><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedProtec[i]} onChange={(e)=>{this.radioButtonProtecFunc(i);}}/><span className="label"></span>{obj}</label></p>)
      else return (<p style={{margin: "0"}}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedProtec[i]} onChange={(e)=>{this.radioButtonProtecFunc(i);}}/><span className="label"></span>{obj}</label></p>)
    });
    return table;
  }
  createUsersDataTableProtec = (e) => {
    var table = [];
    table=this.state.protecArr1.map((obj,i)=> {
      if (i === 1) return (<tr key={i}><td>{obj}</td><td><input type="date" name="calendar" value={this.state.protecInpArr1[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.protecInpArr1[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else if (i === 2)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.protecInpArr1[i]} placeholder={this.state.holderprotecArr1[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.protecInpArr1[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.protecInpArr1[i]} placeholder={this.state.holderprotecArr1[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.protecInpArr1[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    });
    return table;
  }
  createUsersDataTableProtec2 = (e) => {
    var table = [];
    table=this.state.protecArr2.map((obj,i)=> {
       if (i === 3)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.protecInpArr2[i]} placeholder={this.state.holderprotecArr2[i]} onChange={(e)=>{this.changeValueFunc2(e, i);}}></input></td><td>{(this.state.protecInpArr2[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.protecInpArr2[i]} placeholder={this.state.holderprotecArr2[i]} onChange={(e)=>{this.changeValueFunc2(e, i);}}></input></td><td>{(this.state.protecInpArr2[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    });
    return table;
  }
  createUsersDataTableProtec3 = (e) => {
    var table = [];
    table=this.state.protecArr3.map((obj,i)=> {
      if (i === 1) return (<tr key={i}><td>{obj}</td><td><input type="date" name="calendar" value={this.state.protecInpArr3[i]} onChange={(e)=>{this.changeValueFunc3(e, i);}}></input></td><td>{(this.state.protecInpArr3[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else if (i === 3)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.protecInpArr3[i]} placeholder={this.state.holderprotecArr3[i]} onChange={(e)=>{this.changeValueFunc3(e, i);}}></input></td><td>{(this.state.protecInpArr3[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.protecInpArr3[i]} placeholder={this.state.holderprotecArr3[i]} onChange={(e)=>{this.changeValueFunc3(e, i);}}></input></td><td>{(this.state.protecInpArr3[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    });
    return table;
  }
  changeValueFunc = (e, i) => {
    if (this.state.protecInpArr1[i] === "") this.bar = 8;
    if (e.target.value === "") this.bar = -8;
    var value = e.target.value;
      this.setState((state, props) => ({
        protecInpArr1: update(state.protecInpArr1, {[i]:  {$set: value}}),
        barPro: state.barPro + this.bar
      }))
  }
  changeValueFunc2 = (e, i) => {
    if (this.state.protecInpArr2[i] === "") this.bar = 8;
    if (e.target.value === "") this.bar = -8;
    var value = e.target.value;
      this.setState((state, props) => ({
        protecInpArr2: update(state.protecInpArr2, {[i]:  {$set: value}}),
        barPro: state.barPro + this.bar
      }))
  }
  changeValueFunc3 = (e, i) => {
    if (this.state.protecInpArr3[i] === "") this.bar = 8;
    if (e.target.value === "") this.bar = -8;
    var value = e.target.value;
      this.setState((state, props) => ({
        protecInpArr3: update(state.protecInpArr3, {[i]:  {$set: value}}),
        barPro: state.barPro + this.bar
      }))
  }
  //Страхование банковских карт
  cardsCalc = (e)=> {
    if (this.state.cardsNum === 1) return(this.cardsNum1Func())
    else if (this.state.cardsNum === 2) return(this.cardsNum2Func())
  }
  cardsNumFunc = (i)=> {
    this.setState({
      cardsNum: i,
      check: false
    })
  }
  progressBarcardsFunc = (e)=> {
    if (this.state.barCards === 50) return(true)
    else return(false)
  }
  progressBarcardsFunc2 = (e)=> {
    if (this.state.barCards === 100) return(true)
    else return(false)
  }
  cardsNum1Func = (e) => {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center" style={{margin: "0"}}>Заявка на активацию полиса <b style={{color: "#3a7d87"}}> Страхование банковских карт</b><span className="shag"> Шаг {this.num()} из 2</span></p>
            <p id="left2">Заполните данные полиса:</p>
            <table><tbody>
              {this.createUsersDataTablecards()}
            </tbody></table>
            <p id="left2">Где был приобретен полис:</p>
            {this.createcardsRadio()}
            {(this.progressBarcardsFunc() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.cardsNumFunc(2);}}>Далее</button>)}
            {(this.state.check === true && this.state.barCards < 50)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  cardsNum2Func = (e) => {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center" style={{margin: "0"}}>Заявка на активацию полиса <b style={{color: "#3a7d87"}}> Страхование банковских карт</b><span className="shag"> Шаг {this.num()} из 2</span></p>
            <p id="left2">Ввод персональных данных:</p>
            <table><tbody>
              {this.createUsersDataTablecards2()}
            </tbody></table>
            <p style={{margin: "0"}} className={this.state.colorP11}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex2 === true} onChange={(e)=>{this.radioButtonSex2Func(true);}} /><span className="label"></span>Мужчина</label></p>
            <p style={{margin: "0"}} className={this.state.colorP22}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex2 === false} onChange={(e)=>{this.radioButtonSex2Func(false);}} /><span className="label"></span>Женщина</label></p>
            <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
            {(this.progressBarcardsFunc2() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Активировать</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Активировать</button>)}
            {(this.state.check === true && this.state.barCards < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  radioButtoncardsFunc = (i) => {
    if (this.state.sel2 === false)
      this.setState({
        barCards: this.state.barCards + 12.5,
        sel2: true
      })
    this.state.selectedCards.forEach((obj,e)=> {
      if (i === e)
        this.setState((state, props) => ({
          selectedCards: update(state.selectedCards,{[e]:  {$set: true}}),
        }))
      else
        this.setState((state, props) => ({
          selectedCards: update(state.selectedCards,{[e]:  {$set: false}}),
        }))
    });
  }
  createcardsRadio = (e) => {
    var table = [];
    table=this.state.cardsChoiceArr.map((obj,i)=> {
      if (this.state.selectedCards[i] === true)
        return(<p style={{margin: "0"}} className="colorGreen"><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedCards[i]} onChange={(e)=>{this.radioButtoncardsFunc(i);}}/><span className="label"></span>{obj}</label></p>)
      else return (<p style={{margin: "0"}}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedCards[i]} onChange={(e)=>{this.radioButtoncardsFunc(i);}}/><span className="label"></span>{obj}</label></p>)
    });
    return table;
  }
  createUsersDataTablecards = (e) => {
    var table = [];
    table=this.state.cardsArr1.map((obj,i)=> {
      return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.cardsInpArr1[i]} placeholder={this.state.holdercardsArr1[i]} onChange={(e)=>{this.changeValuecardsFunc(e, i);}}></input></td><td>{(this.state.cardsInpArr1[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
  });
  return table;
  }
  createUsersDataTablecards2 = (e) => {
    var table = [];
    table=this.state.cardsArr2.map((obj,i)=> {
      return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.cardsInpArr2[i]} placeholder={this.state.holdercardsArr2[i]} onChange={(e)=>{this.changeValuecardsFunc2(e, i);}}></input></td><td>{(this.state.cardsInpArr2[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
  });
  return table;
  }
  changeValuecardsFunc = (e, i) => {
    if (this.state.cardsInpArr1[i] === "") this.bar = 12.5;
    if (e.target.value === "") this.bar = 12.5;
    var value = e.target.value;
      this.setState((state, props) => ({
        cardsInpArr1: update(state.cardsInpArr1, {[i]:  {$set: value}}),
        barCards: state.barCards + this.bar
      }))
  }
  changeValuecardsFunc2 = (e, i) => {
    if (this.state.cardsInpArr2[i] === "") this.bar = 12.5;
    if (e.target.value === "") this.bar = 12.5;
    var value = e.target.value;
      this.setState((state, props) => ({
        cardsInpArr2: update(state.cardsInpArr2, {[i]:  {$set: value}}),
        barCards: state.barCards + this.bar
      }))
  }
  //Гражданская ответственность
  cultCalc = (e)=> {
    this.bar =0;
    return(<div className="calcKasko2">
            <p id="center">Заявка на оформление страхования<b style={{color: "#3a7d87"}}> Культурные ценности</b><span className="shag"> Шаг 1 из 1</span></p>
            <p id="left2">Ввод персональных данных:</p>
            <table><tbody>
              {this.createUsersDataTablecult()}
            </tbody></table>
            <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
            {(this.progressbarcultFunc() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
            {(this.state.check === true && this.state.barcult < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
          </div>)
  }
  progressbarcultFunc = (e)=> {
    if (this.state.barcult === 100) return(true)
    else return(false)
  }
  createUsersDataTablecult = (e) => {
    var table = [];
    table=this.state.cultArr1.map((obj,i)=> {
      if (i === 3) return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.cultInpArr1[i]} placeholder={this.state.holdercultArr1[i]} onChange={(e)=>{this.changeValueFunccult(e, i);}}></input></td><td>{(this.state.cultInpArr1[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.cultInpArr1[i]} placeholder={this.state.holdercultArr1[i]} onChange={(e)=>{this.changeValueFunccult(e, i);}}></input></td><td>{(this.state.cultInpArr1[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    });
    return table;
  }
  changeValueFunccult = (e, i) => {
    if (this.state.cultInpArr1[i] === "") this.bar = 25;
    if (e.target.value === "") this.bar = -25;
    var value = e.target.value;
      this.setState((state, props) => ({
        cultInpArr1: update(state.cultInpArr1, {[i]:  {$set: value}}),
        barcult: state.barcult + this.bar
      }))
  }
  //Заявка
  createZayvka = (e)=> {
    this.setState({
      protecNum: 1,
      cardsNum: 1,
      cultNum: 1,
      check: false,
      zayvka: true,
      barPro: 0,
      barCards: 0,
      barcult: 0,
      protecInpArr1: ["","",""],
      protecInpArr2: ["","","",""],
      protecInpArr3: ["","","",""],
      cardsInpArr1: ["","",""],
      cardsInpArr2: ["","","",""],
      cultInpArr1: ["","","",""],
      selectedSex: true,
      selectedSex2: true,
      colorP1: "colorGreen",
      colorP2: "",
      colorP11: "colorGreen",
      colorP22: "",
      sel1: false,
      sel2: false,
      selectedProtec: [false, false, false, false, false, false,],
      selectedCards: [false, false, false, false, false, false, false, false,],
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
  if (this.state.protecStateArr[0] === true || this.state.protecStateArr[1] === true)
    return(<div className="zayvkaClass"><div><p id="idZa">Активация успешно завершена!<span id="krest" onClick={(e)=>{this.closeZauvka(e);}}>&#215;</span></p>
    <p className="classZa">Вы успешно активировали полис <b style={{color: "#3a7d87"}}>{this.name()}.</b></p>
    <p className="classZa"><b style={{color: "#3a7d87"}}>Статус полиса</b> Вы можете отслеживать в личном кабинете.</p></div></div>)
  else if (this.state.protecStateArr[2] === true)
    return(<div className="zayvkaClass"><div><p id="idZa">Заявка оформлена!<span id="krest" onClick={(e)=>{this.closeZauvka(e);}}>&#215;</span></p>
    <p className="classZa">Вы успешно оформили заявку на полис <b style={{color: "#3a7d87"}}>{this.name()}.</b></p>
    <p className="classZa">Скоро с Вами свяжется наш специалист, пожалуйста ожидайте.</p>
    <p className="classZa"><b style={{color: "#3a7d87"}}>Статус заявки</b> Вы можете отслеживать в личном кабинете.</p></div></div>)
  }
  name = (e)=> {
    if (this.state.protecStateArr[0] === true) return("Защита покупки")
    else if (this.state.protecStateArr[1] === true) return("Страхование банковских карт")
    else if (this.state.protecStateArr[2] === true) return("Культурные ценности")
  }
  num = (e)=> {
    if (this.state.protecStateArr[0] === true) return(this.state.protecNum)
    else if (this.state.protecStateArr[1] === true) return(this.state.cardsNum)
    else if (this.state.protecStateArr[2] === true) return(this.state.cultNum)

  }
  barFunc = (e)=> {
    if (this.state.protecStateArr[0] === true) return(this.state.barPro)
    else if (this.state.protecStateArr[1] === true) return(this.state.barCards)
    else if (this.state.protecStateArr[2] === true) return(this.state.barcult)
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
                <div className="formCars">{this.createForms(this.funcInfocards())}</div>
                <div className="infoCars">
                  <table><tbody>
                    <tr>{this.createButtonsInfo(this.funcInfocards())}</tr>
                  </tbody></table>
                  <div className="boxInfo">{this.createInfo(this.funcInfocards())}</div>
                </div>
              </div>
              {(this.state.zayvka === true)?(this.zayavkaTime()):(null)}
            </div>)
    }
  }

export default Property;

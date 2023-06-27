import React from 'react';
import update from 'immutability-helper';
import ProgressBar from "@ramonak/react-progress-bar";
import ok from './svg/ok.svg';
import notok from './svg/notok.svg';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

export class CorpProp extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    infoArr: ["Объекты страхования", "Виды рисков", "Исключения"],
    infoStateArr: [true, false, false],
    infoClassArr: ["infoClass","",""],
    corp1Arr: ["Название организации: ","Фамилия Имя: ","Контактный телефон: ","Электронная почта: ","Город: "],
    holdercorp1Arr:["Название или ИНН","Фамилия Имя","Телефон","E-mail","Населенный пункт"],
    corp1InpArr: ["","","","",""],
    check: false,
    barcorp1: 0,
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
    if(obj === true) return(this.corp1Func(i))
    return(null)
});
return table;
}
corp1Func = (i)=> {
  if (i === 0) {
    return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Страхование имущества юридических лиц</b></p>
    <p>Страховая защита имущества от основных поименованных рисков:</p>
    <p>Пожар, взрыв, стихийные бедствия, противоправные действия третьих лиц.</p>
    <p>окрытие полностью соответствует требованиям банков, лизинговых компаний и арендодателей к страховой защите имущества. Возможно расширение страхового покрытия.</p>
    <p><b style={{color: "#3a7d87"}}>На страхование принимаются:</b></p>
    <ul className="ulHouse2">
    <li><span>здания</span></li>
    <li><span>сооружения</span></li>
    <li><span>конструктивные элементы</span></li>
    <li><span>внутренняя отделка помещений</span></li>
    <li><span>внешняя отделка помещений</span></li>
    <li><span>инженерные системы</span></li>
    <li><span>оборудование</span></li>
    <li><span>инвентарь</span></li>
    <li><span>готовая продукция</span></li>
    <li><span>товары</span></li>
    <li><span>сырье</span></li>
    <li><span>материалы</span></li>
    <li><span>иное движимое и недвижимое имущество,
находящееся в помещениях либо на оборудованных площадках</span></li>
    </ul>
    </div>)
  }
  else if (i === 1) {
    return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Страхование защищает</b> от утраты, гибели и/или повреждения имущества вследствие следующих опасностей:</p>
      <ul className="ulHouse2">
        <li><span>пожара, удара молнии, взрыва газа, употребляемого для бытовых надобностей;</span></li>
        <li><span>падения на застрахованное имущество летающих объектов или их частей и грузов;</span></li>
        <li><span>опасных природных явлений;</span></li>
        <li><span>взрыва паровых котлов, газохранилищ, газопроводов, машин, аппаратов и других технических устройств;</span></li>
        <li><span>повреждения застрахованного имущества в результате аварий гидравлических систем;</span></li>
        <li><span>противоправных действий третьих лиц, а именно:</span></li>
        <li><span>кражи с незаконным проникновением;</span></li>
        <li><span>грабежа;</span></li>
        <li><span>разбоя;</span></li>
        <li><span>умышленного уничтожения или повреждения имущества;</span></li>
        <li><span>хулиганства;</span></li>
        <li><span>вандализма;</span></li>
        <li><span>повреждения, уничтожения, утраты имущества при проведении погрузочно-разгрузочных работ;</span></li>
        <li><span>боя оконных стекол, зеркал и витрин;</span></li>
        <li><span>поломок электротехнического оборудования;</span></li>
        <li><span>поломок машин и механизмов;</span></li>
        <li><span>наезда транспортного средства, навала судна на застрахованное имущество;</span></li>
        <li><span>захламления, загрязнения, заболачивания (подтопления) земельных участков;</span></li>
        <li><span>внезапного и непредвиденного падения на застрахованное имущество деревьев или их частей (за исключением сухостоя), опор линий электропередачи, средств наружной рекламы и других неподвижных предметов;</span></li>
        <li><span>звукового удара. Звуковой удар считается произошедшим только тогда, когда он произведен летательным аппаратом, проходящим через звуковой барьер;</span></li>
      </ul>
     </div>)
  }
  else {
    return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Страхование защищает</b> не распространяется на:</p>
      <ul className="ulHouse">
      <li><span>рукописи, планы, чертежи, акты и иные документы, бухгалтерские и деловые книги, картотеки;</span></li>
      <li><span>модели, макеты, наглядные пособия, образцы, формы, прототипы и выставочные экспонаты и т.п.;</span></li>
      <li><span>драгоценные металлы в слитках, драгоценные камни без оправ;</span></li>
      <li><span>взрывчатые вещества и боеприпасы;</span></li>
      <li><span>имущество, находящееся в застрахованном помещении, но которым Страхователь (Выгодоприобретатель) не распоряжается на правах собственности (владения, пользования, распоряжения), доверительного управления, аренды, лизинга, залога, хранения, комиссии, продажи, а также по другим юридическим основаниям; имущество работников предприятия;</span></li>
      <li><span>здания и сооружения, конструктивные элементы и инженерные системы которых находятся в аварийном состоянии, а также находящееся в них имущество;</span></li>
      <li><span>имущество, находящееся в зоне, которой угрожают обвалы, оползни, наводнения или иные стихийные бедствия, а также в зоне военных действий с момента объявления в установленном порядке о такой угрозе, если такое объявление было произведено до заключения договора страхования;</span></li>
      <li><span>иное имущество, изъятое из оборота или ограниченное в обороте в соответствии с гражданским законодательством Российской Федерации;</span></li>
      <li><span>имущество в процессе перевозки</span></li>
      <li><span>иные случаи и объекты, предусмотренные Правилами (см. Правила) и договором страхования.</span></li>
      </ul>
     </div>)
  }
}
//Квартира
createForms = (e) => {
  this.bar =0;
  return(<div className="calcKasko2">
          <p id="center">Оформление полиса страхования<b style={{color: "#3a7d87"}}> Имущества</b> для юр. лиц<span className="shag"> Шаг 1 из 1</span></p>
          <p id="left2">Ввод персональных данных:</p>
          <table><tbody>
            {this.createUsersDataTablecorp1()}
          </tbody></table>
          <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
          {(this.progressBarFunc() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
          {(this.state.check === true && this.state.barcorp1 < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
}
progressBarFunc = (e)=> {
  if (this.state.barcorp1 === 100) return(true)
  else return(false)
}
check = (e)=> {
  this.setState({
    check: true
  })
}
createUsersDataTablecorp1 = (e) => {
  var table = [];
  table=this.state.corp1Arr.map((obj,i)=> {
    if (i === 2)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.corp1InpArr[i]} placeholder={this.state.holdercorp1Arr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.corp1InpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.corp1InpArr[i]} placeholder={this.state.holdercorp1Arr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.corp1InpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
  });
  return table;
}
changeValueFunc = (e, i) => {
  if (this.state.corp1InpArr[i] === "") this.bar = 20;
  if (e.target.value === "") this.bar = -20;
  var value = e.target.value;
    this.setState((state, props) => ({
      corp1InpArr: update(state.corp1InpArr, {[i]:  {$set: value}}),
      barcorp1: state.barcorp1 + this.bar
    }))
}
//Заявка
createZayvka = (e)=> {
  this.setState({
    check: false,
    corp1InpArr: ["","","","","","",""],
    zayvka: true,
    barcorp1: 0,
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
  <p className="classZa">Вы успешно оформили заявку на полис <b style={{color: "#3a7d87"}}>Страхование имущества для юридических лиц.</b></p>
  <p className="classZa">Скоро с Вами свяжется наш специалист, пожалуйста ожидайте.</p>
  <p className="classZa"><b style={{color: "#3a7d87"}}>Статус заявки</b> Вы можете отслеживать в личном кабинете.</p></div></div>)
}

render(){

    return(<div>
            <div className="choiceCars">
              <div className="choice3">
              <table><tbody>
              <tr><td id="houseClass"><button>Страхование имущества</button></td></tr>
              </tbody></table>
              </div>
              <div className="bar3"><div className="barClass"><ProgressBar className="barBar3" width="400px" bgColor="#46a384" labelAlignment="center" completed={this.state.barcorp1}/></div></div>
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

export default CorpProp;

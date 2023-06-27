import React from 'react';
import update from 'immutability-helper';
import ProgressBar from "@ramonak/react-progress-bar";
import Nouislider from 'react-nouislider';
import "nouislider/distribute/nouislider.css";
import ok from './svg/ok.svg';
import notok from './svg/notok.svg';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

export class Cars extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    carsArr: ["КАСКО","ОСАГО","Зеленая карта"],
    carsStateArr: [true, false, false],
    carsClassArr: ["carsClass","",""],
    infoArr: [["О КАСКО", "Преимущества КАСКО", "Необходимые документы"],["О ОСАГО","Преимущества ОСАГО","Необходимые документы"],["О Зеленая карта","Особенности зеленой карты","Необходимые документы"]],
    infoStateArr: [true, false, false],
    infoClassArr: ["infoClass","",""],
    kasko1: ["Территория страхования — весь мир","Множество страховых продуктов для новых и подержанных ТС в возрасте до 20 лет","Стоимость полиса при пролонгации не увеличивается и не применяется франшиза в случае ремонта, а не замены стекла","Франшиза не применяется, если клиент не виноват в ДТП, и виновник установлен",],
    kasko2: ["Программа «СразуСервис» - клиент с места ДТП направляется сразу в сервис без заезда в страховую компанию","Эвакуатор с места ДТП — 1 раз по каждому страховому случаю","Контроль сроков ремонта на СТОА — max 30 дней","Выплата без справок (стекла без ограничения, кроме крыши и люка, 1 кузовной элемент 1 раз за каждый срок страхования)","Направление на СТОА по выбору клиента из нашего списка",],
    kasko3: ["График платежей по выбору клиента","Минимум документов при урегулировании убытков","Отслеживание статуса урегулирования убытка в личном кабинете","Информирование клиентов по СМС","Круглосуточный контактный центр",],
    kaskoNum: 1,
    osagoNum: 1,
    autoArr: ["Марка автомобиля:","Модель автомобиля:","Год выпуска:","Год начала эксплуатации:","Мощность (Л.С.):"],
    holderArr:["Марка","Модель","","","Мощность"],
    autoInpArr: ["","","","",""],
    val: 200000,
    check: false,
    barKas: 0,
    barOs: 0,
    barGr: 0,
    userArr: ["Укажите количество водителей:","Укажите минимальный возраст водителя:","Укажите минимальный стаж водителя:","Ваше Имя:","Ваш мобильный телефон:","Ваш город:"],
    userInpArr: ["","","","","",""],
    holderuserArr: ["Количество","Возраст","Стаж","Имя","Телефон","Город"],
    servsArr: ["Угон","Ущерб","Аварийный комиссар на место ДТП","Эвакуация","Урегулирование без справок","Территория страхования — весь мир"],
    servsInpArr: [true, true, false,false, false, false],
    contactArr: ["Фамилия Имя Отчество: ","Телефон: ","Электронная почта: "],
    holdercontactArr: ["Фио","Телефон","E-mail"],
    contactInpArr: ["","",""],
    zayvka: false,
    autoArrosago: ["Марка автомобиля:","Модель автомобиля:","Год выпуска:","Дата начала действия полиса:","Мощность (Л.С.):", "Город регистрации собственника"],
    holderArrosago:["Марка","Модель","","","Мощность","Город"],
    autoInpArrosago: ["","","","","",""],
    userArrosago: ["Фамилия Имя Отчество водителя:","Дата рождения водителя:","Серия и номер водительского удостоверения:","Дата выдачи:","Год начала стажа:"],
    userInpArrosago: ["","","","",""],
    holderuserArrosago: ["ФИО","Дата рождения","Серия и номер","Дата выдачи","Стаж"],
    arrOsago: ["Тип страхования:","Цель использования транспортного средства:","Дата начала действия полиса:","Дата окончания действия полиса:"],
    inpArrOsago: ["Обычный договор сроком действия 1 год","Личные","",""],
    holderArrOsago: ["Тип","Цель","Начало","Окончание"],
    arrOsago2: ["Гос. регистрационный знак:","Серия и номер СТС:","Дата выдачи","Телефон:","Электронная почта:"],
    inpArrOsago2: ["","","","","",""],
    holderArrOsago2: ["Номер","Серия и номер","Дата","Телефон","E-mail"],
    greenArr: ["Дата начала поездки: ","Срок страхования: ","Электронная почта: ","Телефон: ","Страхователь: ","Адрес регистрации: "],
    greenholderArr: ["Дата: ","Срок: ","E-mail: ","Ваш номер телефона: ","Фамилия Имя Отчество: ","Населенный пункт: "],
    greenInpArr: ["","","","","",""],
    selectedTer: true,
    colorP1: "colorGreen",
    colorP2: "",
  };
}
clickButtonFunc = (i) => {
  this.state.carsArr.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        carsStateArr: update(state.carsStateArr,{[e]:  {$set: true}}),
        carsClassArr: update(state.carsClassArr,{[e]:  {$set: "carsClass"}}),
        infoStateArr: [true, false, false],
        infoClassArr: ["infoClass","",""],
        check: false,
      }))
    else
      this.setState((state, props) => ({
        carsStateArr: update(state.carsStateArr,{[e]:  {$set: false}}),
        carsClassArr: update(state.carsClassArr,{[e]:  {$set: ""}}),
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
  table=this.state.carsArr.map((obj,i)=> {
    return(<td key={i} id={this.state.carsClassArr[i]}><button onClick={(e)=>{this.clickButtonFunc(i);}}>{this.state.carsArr[i]}</button></td>)
});
return table;
}
createButtonsInfo = (e) => {
  var table = [];
  table=this.state.carsStateArr.map((obj,i)=> {
    return(<td key={i} id={this.state.infoClassArr[i]}><button onClick={(e)=>{this.clickButtonFunc1(i);}}>{this.state.infoArr[e][i]}</button></td>);
});
return table;
}
funcInfoCars = (e)=> {
  if (this.state.carsStateArr[0] === true) return 0
  else if (this.state.carsStateArr[1] === true) return 1
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
  if (e === 0) return(this.kaskoFunc(i));
  else if (e === 1) return(this.osagoFunc(i));
  else return(this.greenCartFunc(i));
}
kaskoFunc = (i)=> {
  if (i === 0) {
    return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Полис КАСКО</b> – это защита от таких рисков, как угон, хищение, повреждение вашего автомобиля.</p>
    <p>При этом в рамках программы страхования будут также включены риски повреждения автомобиля на стоянке, отскочившим предметом, наездом на препятствия, противоправные действия третьих лиц, стихийные бедствия и многое другое.</p>
    <p>Каждая программа автострахования <b style={{color: "#3a7d87"}}>КАСКО</b> позволяет застраховаться от широкого спектра страховых рисков.</p>
    <p>При выборе полиса всегда можно выбрать перечень рисков, которые будут актуальны именно для вашего автомобиля и типа эксплуатации.</p></div>)
  }
  else if (i === 1) {
    return(<div className="carsInfo">
      <p><b style={{color: "#3a7d87"}}>Широкое покрытие</b></p>
      <ul className="ulCars2">{this.liFunc(this.state.kasko1)}</ul>
      <b style={{color: "#3a7d87"}}>Качественный сервис</b>
      <ul className="ulCars2">{this.liFunc(this.state.kasko2)}</ul>
      <b style={{color: "#3a7d87"}}>Комфортные условия обслуживания</b>
      <ul className="ulCars2">{this.liFunc(this.state.kasko3)}</ul>
     </div>)
  }
  else {
    return(<div className="carsInfo">
      <p><b style={{color: "#3a7d87"}}>Необходимые документы</b></p>
      <ul className="ulCars">
      <li><span><b style={{color: "#3a7d87"}}>Паспорт</b> или иной удостоверяющий личность документ страхователя или его представителя.</span></li>
      <li><span><b style={{color: "#3a7d87"}}>Доверенность</b> представителя страхователя на право оформления КАСКО в случае, если договор заключается от имени страхователя.</span></li>
      <li><span><b style={{color: "#3a7d87"}}>Документы</b> подтверждающие интерес в сохранении транспортного средства в случае, если договор заключается не в пользу собственника.</span></li>
      <li><span><b style={{color: "#3a7d87"}}>Паспорт транспортного средства.</b></span></li>
      <li><span><b style={{color: "#3a7d87"}}>Водительские удостоверения лиц</b>, допущенных к управлению транспортным средством.</span></li>
      <li><span>При переходе из другой страховой компании вы можете предоставить <b style={{color: "#3a7d87"}}>справку о безаварийном вождении</b> и получить дополнительную скидку на полис.</span></li>
      </ul>
     </div>)
  }
}
osagoFunc = (i)=> {
  if (i === 0) {
    return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Полис ОСАГО</b> — это обязательное страхование автогражданской ответственности за причинение вреда жизни, здоровью и имуществу третьих лиц при эксплуатации автомобиля.</p>
    <p>Наличие страхового полиса обязательно для каждого автомобилиста, в том числе для осуществления регистрационных действий с автомобилем или иным транспортным средством.</p>
    <p><b style={{color: "#3a7d87"}}>ОСАГО</b> введено в нашей стране с июля 2003 года. С этого времени появилось множество изменений в законе.</p>
    <p>Уже сегодня <b style={{color: "#3a7d87"}}>страховка ОСАГО</b> может быть оформлена в электронном виде — для этого достаточно просто рассчитать стоимость полиса и оформить его через личный кабинет на нашем сайте.</p>
    <p>Просим Вас обратить внимание, что оформление <b style={{color: "#3a7d87"}}>полиса ОСАГО</b> возможно только при наличии диагностической карты.</p>
    </div>)
  }
  else if (i === 1) {
    return(<div className="carsInfo">
    <p><b style={{color: "#3a7d87"}}>Полис ОСАГО</b> позволит компенсировать ущерб, который вы как водитель причинили имуществу и здоровью третьих лиц (пассажиров и пешеходов).
    Под имуществом подразумеваются любые материальные ценности, которые повредила ваша машина (чужое транспортное средство, строение, забор и т д.).</p>
    <ul className="ulCars2">
    <li><span><b style={{color: "#3a7d87"}}>400 тыс. руб.</b> — в части возмещения вреда, причиненного имуществу, здоровью или жизни третьих лиц. К третьим лицам относятся не только водитель и пассажиры чужого транспортного средства, но также пешеходы и пр.</span></li>
    <li><span><b style={{color: "#3a7d87"}}>500 тыс. руб.</b> — в части возмещения вреда, причиненного жизни или здоровью каждого потерпевшего, в том числе:</span></li>
    <li id="newLi"><span><b style={{color: "#3a7d87"}}>475 тыс. руб.</b>— выгодоприобретателям при причинении вреда жизни или здоровью, указанным в п. 6 ст. 12 ФЗ «Об обязательном страховании гражданской ответственности владельцев транспортных средств» от 25 апреля 2002 г. № 40-ФЗ;</span></li>
    <li id="newLi"><span><b style={{color: "#3a7d87"}}>25 тыс. руб.</b>– на возмещение расходов на погребение.</span></li>
    </ul>
     </div>)
  }
  else {
    return(<div className="carsInfo">
      <p><b style={{color: "#3a7d87"}}>Необходимые документы</b></p>
      <ul className="ulCars2">
      <li><span>Для физических лиц —<b style={{color: "#3a7d87"}}>паспортные данные</b> страхователя и собственника автомобиля. Для юридических — <b style={{color: "#3a7d87"}}>свидетельство о государственной регистрации</b> юридического лица;</span></li>
      <li><span><b style={{color: "#3a7d87"}}>Свидетельство о регистрации</b> транспортного средства или <b style={{color: "#3a7d87"}}>паспорт</b> транспортного средства;</span></li>
      <li><span><b style={{color: "#3a7d87"}}>Серия и номер</b> водительских удостоверений лиц, допущенных к управлению;</span></li>
      <li><span><b style={{color: "#3a7d87"}}>Номер диагностической карты</b> на автомобиль (при необходимости).</span></li>
      </ul>
     </div>)
  }
}
greenCartFunc = (i)=> {
  if (i === 0) {
    return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Полис Зеленая карта</b> – это обязательное страхование автогражданской ответственности за причинение вреда жизни и имуществу третьих лиц при эксплуатации автомобиля. Он действует с 1951 года и распространяется уже на <b style={{color: "#3a7d87"}}>48 стран мира</b>.</p>
    <p>Страховка позволяет урегулировать претензии в случае ДТП с участием иностранного автомобиля, при этом защитит Ваши интересы и компенсирует ущерб пострадавшим.</p>
    <p>В России продаются <b style={{color: "#3a7d87"}}>два вида полисов</b> Зеленая карта:</p>
    <ul className="ulCars2">
    <li><span>Действующие только на территории четырех стран – Белоруссии, Украины, Молдавии и Азербайджана.</span></li>
    <li><span>Действующие во всех государствах, входящих в систему (в том числе и в вышеуказанных).</span></li>
    </ul>
    <p>В систему <b style={{color: "#3a7d87"}}>Зеленая карта</b> входит 48 стран: Россия, вся Европа, Израиль, и т.д.</p>
    <p>Страховку <b style={{color: "#3a7d87"}}>нельзя оформить онлайн</b> из-за наличия нескольких степеней защиты: водяные знаки, идентификационный номер и металлизированная полоска, которая наносятся при помощи специального оборудования. Сертификат невозможно передать по электронной почте, как в случае с иными полисами.</p>
    </div>)
  }
  else if (i === 1) {
    return(<div className="carsInfo">
    <p><b style={{color: "#3a7d87"}}>Особенности зеленой карты</b></p>
    <ul className="ulCars2">
    <li><span>Условия страхования одинаковы у всех страховых компаний, продающих сертификат <b style={{color: "#3a7d87"}}>Зеленая карта</b>.</span></li>
    <li><span>Данный документ оформляется на автомобиль с указанием лица, заключающего договор. Страхователь не обязательно должен быть собственником автомобиля.</span></li>
    <li><span><b style={{color: "#3a7d87"}}>Сертификат</b> действует в отношении всех водителей, допущенных к управлению транспортным средством на законном основании.</span></li>
    <li><span>Полис следует приобретать не ранее чем за <b style={{color: "#3a7d87"}}>30 дней</b> до поездки.</span></li>
    <li><span>Если в ДТП виноват водитель иностранного автомобиля, вам возместят ущерб.</span></li>
    <li><span>Если ДТП произошло по вашей вине, нужно лишь предъявить <b style={{color: "#3a7d87"}}>Зеленую карту</b> представителю полиции или пострадавшему.</span></li>
    <li><span>Урегулирование всех претензий осуществляется в рамках страховых сумм согласно законодательству той страны, где произошло ДТП.</span></li>
    </ul>
     </div>)
  }
  else {
    return(<div className="carsInfo">
      <p><b style={{color: "#3a7d87"}}>Необходимые документы</b></p>
      <ul className="ulCars2">
      <li><span><b style={{color: "#3a7d87"}}>Паспорт или иной документ</b>, удостоверяющий личность</span></li>
      <li><span><b style={{color: "#3a7d87"}}>Паспорт транспортного средства</b>, свидетельство о регистрации транспортного средства, технический паспорт или аналогичный документ</span></li>
      </ul>
     </div>)
  }
}
liFunc = (arr) => {
  var table = [];
  table=arr.map((obj,i)=> {
    return(<li key={i} id="list2"><span>{obj}</span></li>)
});
return table;
}
createForms = (e) => {
  if (e === 0) return(this.kaskoCalc());
  else if (e === 1) return(this.osagoCalc());
  else return(this.greenCartCalc());
}
//КАСКО
kaskoCalc = (e)=> {
  if (this.state.kaskoNum === 1) return(this.kaskonum1Func())
  else if (this.state.kaskoNum === 2) return(this.kaskonum2Func())
  else if (this.state.kaskoNum === 3) return(this.kaskonum3Func())
  else return(this.kaskonum4Func())
}
kaskoNumFunc = (i)=> {
  this.setState({
    kaskoNum: i,
    check: false
  })
}
progressBarFunc = (e)=> {
  if (this.state.barKas === 37.5) return(true)
  else return(false)
}
progressBarFunc2 = (e)=> {
  if (this.state.barKas === 75) return(true)
  else return(false)
}
progressBarFunc3 = (e)=> {
  if (this.state.barKas === 81.25)  return(true)
  else return(false)
}
progressBarFunc4 = (e)=> {
  if (this.state.barKas === 100) return(true)
  else return(false)
}
kaskonum1Func = (e) => {
  this.bar =0;
  return(<div className="calcKasko">
          <p id="center">Заявка на оформление полиса <b style={{color: "#3a7d87"}}>«КАСКО»</b><span className="shag"> Шаг {this.num()} из 4</span></p>
          <p id="left2">Заполните информацию об автомобиле:</p>
          <table><tbody>
            {this.createUsersDataTable()}
          </tbody></table>
          <p id="center2">Укажите оценочную стоимость автомобиля {(parseInt(this.state.val,10) !== 200000)?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Укажите оценочную стоимость"/>)}</p>
          <div style={{height: "60px"}}><div className="sliderCar">
                <Nouislider
                  step ={1000}
                  range={{ min: 200000, max: 10000000 }}
                  start={[this.state.val]}
                  connect ={[true, false]}
                  onSlide ={this.onSlide}/>
                  <span id="left">200 000 &#8381;</span><span id="right">10 000 000 &#8381;</span>
              </div>
          <div className="sliderCar2"><span>{this.numberWithSpaces(parseInt(this.state.val,10))} &#8381;</span></div>
          </div>
          {(this.progressBarFunc() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.kaskoNumFunc(2);}}>Далее</button>)}
          {(this.state.check === true && this.state.barKas < 37.5)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
}
kaskonum2Func = (e) => {
  this.bar =0;
  return(<div className="calcKasko2">
          <p id="center">Заявка на оформление полиса <b style={{color: "#3a7d87"}}>«КАСКО»</b><span className="shag"> Шаг {this.num()} из 4</span></p>
          <p id="left2">Заполните информацию об водителях:</p>
          <table><tbody>
            {this.createUsersDataTable2()}
          </tbody></table>
          {(this.progressBarFunc2() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.kaskoNumFunc(3);}}>Далее</button>)}
          {(this.state.check === true && this.state.barKas < 75)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
}
kaskonum3Func = (e) => {
  if (this.state.barKas < 81.25) this.bar=6.25;
  else this.bar=0;
  return(<div className="calcKasko2">
          <p id="center">Заявка на оформление полиса <b style={{color: "#3a7d87"}}>«КАСКО»</b><span className="shag"> Шаг {this.num()} из 4</span></p>
          <p id="left2">Выберите программу страхования.</p>
          <p className="kasko3">Ежемесячная безакцептная оплата договора со счета вашей банковской карты. При этом, вы получаете ежемесячную накопительную скидку в размере 1%, если в течение месяца не было заявлено убытков.</p>
          <table><tbody>
            {this.createUsersDataTable3()}
          </tbody></table>
          {(this.progressBarFunc3() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.kaskoNumFunc(4);}}>Далее</button>)}
          {(this.state.check === true && this.state.barKas < 81.25)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
}
kaskonum4Func = (e) => {
  this.bar =0;
  return(<div className="calcKasko2">
          <p id="center">Заявка на оформление полиса <b style={{color: "#3a7d87"}}>«КАСКО»</b><span className="shag"> Шаг {this.num()} из 4</span></p>
          <p id="left2">Укажите свои контактные данные:</p>
          <table><tbody>
            {this.createUsersDataTable4()}
          </tbody></table>
          <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
          {(this.progressBarFunc4() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
          {(this.state.check === true && this.state.barKas < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
}
check = (e)=> {
  this.setState({
    check: true
  })
}
onSlide = (e) => {
  if (parseInt(this.state.val, 10) === 200000) this.bar = 6.25;
  if (parseInt(e, 10) === 200000) this.bar = -6.25;
  this.setState({
    val: e,
    barKas: this.state.barKas + this.bar
  })
}
numberWithSpaces  = (e) => {
  return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
createUsersDataTable = (e) => {
  var table = [];
  table=this.state.autoArr.map((obj,i)=> {
    if (i === 2 || i === 3) return (<tr key={i}><td>{obj}</td><td><input type="date" name="calendar" value={this.state.autoInpArr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.autoInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else if (i === 4)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.autoInpArr[i]} placeholder={this.state.holderArr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.autoInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.autoInpArr[i]} placeholder={this.state.holderArr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.autoInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
});
return table;
}
createUsersDataTable2 = (e) => {
  var table = [];
  table=this.state.userArr.map((obj,i)=> {
     if (i === 4) return (<tr key={i}><td>{obj}</td><td><input type="tel" name="tel" value={this.state.userInpArr[i]} placeholder={this.state.holderuserArr[i]} onChange={(e)=>{this.changeValueFunc2(e, i);}}></input></td><td>{(this.state.userInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
     else return (<tr key={i}><td>{obj}</td><td><input type="text" value={this.state.userInpArr[i]} placeholder={this.state.holderuserArr[i]} onChange={(e)=>{this.changeValueFunc2(e, i);}}></input></td><td>{(this.state.userInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
});
return table;
}
createUsersDataTable3 = (e) => {
  var table = [];
  table=this.state.servsArr.map((obj,i)=> {
     return (<tr key={i}><td><Checkbox defaultChecked checked={this.state.servsInpArr[i]} onChange={(e)=>{this.changeValueFunc3(e, i);}}/> {obj}</td></tr>)
});
return table;
}
createUsersDataTable4 = (e) => {
  var table = [];
  table=this.state.contactArr.map((obj,i)=> {
      return (<tr key={i}><td>{obj}</td><td><input type="text" value={this.state.contactInpArr[i]} placeholder={this.state.holdercontactArr[i]} onChange={(e)=>{this.changeValueFunc4(e, i);}}></input></td><td>{(this.state.contactInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
  });
  return table;
}
changeValueFunc = (e, i) => {
  if (this.state.autoInpArr[i] === "") this.bar = 6.25;
  if (e.target.value === "") this.bar = -6.25;
  var value = e.target.value;
    this.setState((state, props) => ({
      autoInpArr: update(state.autoInpArr, {[i]:  {$set: value}}),
      barKas: state.barKas + this.bar
    }))
}
changeValueFunc2 = (e, i) => {
  if (this.state.userInpArr[i] === "") this.bar = 6.25;
  if (e.target.value === "") this.bar = -6.25;
  var value = e.target.value;
    this.setState((state, props) => ({
      userInpArr: update(state.userInpArr, {[i]:  {$set: value}}),
      barKas: state.barKas + this.bar
    }))
}
changeValueFunc3 = (e, i) => {
  var value = e.target.checked;
    this.setState((state, props) => ({
      servsInpArr: update(state.servsInpArr, {[i]:  {$set: value}}),
      barKas: state.barKas + this.bar
    }))
}
changeValueFunc4 = (e, i) => {
  if (this.state.contactInpArr[i] === "") this.bar = 6.25;
  if (e.target.value === "") this.bar = -6.25;
  var value = e.target.value;
    this.setState((state, props) => ({
      contactInpArr: update(state.contactInpArr, {[i]:  {$set: value}}),
      barKas: state.barKas + this.bar
    }))
}
//ОСАГО
osagoCalc = (e)=> {
  if (this.state.osagoNum === 1) return(this.osagonum1Func())
  else if (this.state.osagoNum === 2) return(this.osagonum2Func())
  else if (this.state.osagoNum === 3) return(this.osagonum3Func())
  else return(this.osagonum4Func())
}
osagoNumFunc = (i)=> {
  this.setState({
    osagoNum: i,
    check: false
  })
}
progressBarosagoFunc = (e)=> {
  if (this.state.barOs === 30) return(true)
  else return(false)
}
progressBarosagoFunc2 = (e)=> {
  if (this.state.barOs === 55) return(true)
  else return(false)
}
progressBarosagoFunc3 = (e)=> {
  if (this.state.barOs === 75)  return(true)
  else return(false)
}
progressBarosagoFunc4 = (e)=> {
  if (this.state.barOs === 100) return(true)
  else return(false)
}
osagonum1Func = (e) => {
  this.bar =0;
  return(<div className="calcKasko2">
          <p id="center" style={{margin: "0"}}>Заявка на оформление полиса <b style={{color: "#3a7d87"}}>«ОСАГО»</b><span className="shag"> Шаг {this.num()} из 4</span></p>
          <p id="left2">Заполните данные транспортного средства:</p>
          <table><tbody>
            {this.createUsersDataTableosago()}
          </tbody></table>
          {(this.progressBarosagoFunc() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.osagoNumFunc(2);}}>Далее</button>)}
          {(this.state.check === true && this.state.barOs < 30)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
}
osagonum2Func = (e) => {
  this.bar =0;
  return(<div className="calcKasko2">
          <p id="center" style={{margin: "0"}}>Заявка на оформление полиса <b style={{color: "#3a7d87"}}>«ОСАГО»</b> <span className="shag"> Шаг {this.num()} из 4</span></p>
          <p id="left2">Заполните информацию об водителях:</p>
          <table><tbody>
            {this.createUsersDataTable2osago()}
          </tbody></table>
          {(this.progressBarosagoFunc2() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.osagoNumFunc(3);}}>Далее</button>)}
          {(this.state.check === true && this.state.barOs < 55)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
}
osagonum3Func = (e) => {
  this.bar=0;
  return(<div className="calcKasko2">
          <p id="center" style={{margin: "0"}}>Заявка на оформление полиса <b style={{color: "#3a7d87"}}>«ОСАГО»</b><span className="shag"> Шаг {this.num()} из 4</span></p>
          <p id="left2">Заполните информацию об использовании ТС:</p>
          <table><tbody>
            {this.createUsersDataTable3osago()}
          </tbody></table>
          {(this.progressBarosagoFunc3() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.osagoNumFunc(4);}}>Далее</button>)}
          {(this.state.check === true && this.state.barOs < 75)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
}
osagonum4Func = (e) => {
  this.bar =0;
  return(<div className="calcKasko2">
          <p id="center" style={{margin: "0"}}>Заявка на оформление полиса <b style={{color: "#3a7d87"}}>«ОСАГО»</b><span className="shag"> Шаг {this.num()} из 4</span></p>
          <p id="left2">Укажите документ о регистрации ТС и контактные данные:</p>
          <table><tbody>
            {this.createUsersDataTable4osago()}
          </tbody></table>
          <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
          {(this.progressBarosagoFunc4() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
          {(this.state.check === true && this.state.barOs < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
}
createUsersDataTableosago = (e) => {
  var table = [];
  table=this.state.autoArrosago.map((obj,i)=> {
    if (i === 2 || i === 3) return (<tr key={i}><td>{obj}</td><td><input type="date" name="calendar" value={this.state.autoInpArrosago[i]} onChange={(e)=>{this.changeValueosagoFunc(e, i);}}></input></td><td>{(this.state.autoInpArrosago[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else if (i === 2)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.autoInpArrosago[i]} placeholder={this.state.holderArrosago[i]} onChange={(e)=>{this.changeValueosagoFunc(e, i);}}></input></td><td>{(this.state.autoInpArrosago[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.autoInpArrosago[i]} placeholder={this.state.holderArrosago[i]} onChange={(e)=>{this.changeValueosagoFunc(e, i);}}></input></td><td>{(this.state.autoInpArrosago[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
});
return table;
}
createUsersDataTable2osago = (e) => {
  var table = [];
  table=this.state.userArrosago.map((obj,i)=> {
    if (i === 1 || i === 3) return (<tr key={i}><td>{obj}</td><td><input type="date" name="calendar" value={this.state.userInpArrosago[i]} onChange={(e)=>{this.changeValueosagoFunc2(e, i);}}></input></td><td>{(this.state.userInpArrosago[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else if (i === 4)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.userInpArrosago[i]} placeholder={this.state.holderuserArrosago[i]} onChange={(e)=>{this.changeValueosagoFunc2(e, i);}}></input></td><td>{(this.state.userInpArrosago[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.userInpArrosago[i]} placeholder={this.state.holderuserArrosago[i]} onChange={(e)=>{this.changeValueosagoFunc2(e, i);}}></input></td><td>{(this.state.userInpArrosago[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
});
return table;
}
createUsersDataTable3osago = (e) => {
  var table = [];
  table=this.state.arrOsago.map((obj,i)=> {
     if (i === 2 || i === 3) return (<tr key={i}><td>{obj}</td><td><input type="date" value={this.state.inpArrOsago[i]} onChange={(e)=>{this.changeValueosagoFunc3(e, i);}}></input></td><td>{(this.state.inpArrOsago[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
     else return (<tr key={i}><td>{obj}</td><td><input type="text" value={this.state.inpArrOsago[i]} placeholder={this.state.holderArrOsago[i]}></input></td><td>{(this.state.inpArrOsago[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
});
return table;
}
createUsersDataTable4osago = (e) => {
  var table = [];
  table=this.state.arrOsago2.map((obj,i)=> {
      if (i === 2) return (<tr key={i}><td>{obj}</td><td><input type="date" value={this.state.inpArrOsago2[i]} onChange={(e)=>{this.changeValueosagoFunc4(e, i);}}></input></td><td>{(this.state.inpArrOsago2[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
      else return (<tr key={i}><td>{obj}</td><td><input type="text" value={this.state.inpArrOsago2[i]} placeholder={this.state.holderArrOsago2[i]} onChange={(e)=>{this.changeValueosagoFunc4(e, i);}}></input></td><td>{(this.state.inpArrOsago2[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
  });
  return table;
}
changeValueosagoFunc = (e, i) => {
  if (this.state.autoInpArrosago[i] === "") this.bar = 5;
  if (e.target.value === "") this.bar = -5;
  var value = e.target.value;
    this.setState((state, props) => ({
      autoInpArrosago: update(state.autoInpArrosago, {[i]:  {$set: value}}),
      barOs: state.barOs + this.bar
    }))
}
changeValueosagoFunc2 = (e, i) => {
  if (this.state.userInpArrosago[i] === "") this.bar = 5;
  if (e.target.value === "") this.bar = -5;
  var value = e.target.value;
    this.setState((state, props) => ({
      userInpArrosago: update(state.userInpArrosago, {[i]:  {$set: value}}),
      barOs: state.barOs + this.bar
    }))
}
changeValueosagoFunc3 = (e, i) => {
  if (this.state.inpArrOsago[i] === "") this.bar = 10;
  if (e.target.value === "") this.bar = -10;
  var value = e.target.value;
    this.setState((state, props) => ({
      inpArrOsago: update(state.inpArrOsago, {[i]:  {$set: value}}),
      barOs: state.barOs + this.bar
    }))
}
changeValueosagoFunc4 = (e, i) => {
  if (this.state.inpArrOsago2[i] === "") this.bar = 5;
  if (e.target.value === "") this.bar = -5;
  var value = e.target.value;
    this.setState((state, props) => ({
      inpArrOsago2: update(state.inpArrOsago2, {[i]:  {$set: value}}),
      barOs: state.barOs + this.bar
    }))
}
//Зеленая карта
progressBarGreenFunc = (e)=> {
  if (parseInt(this.state.barGr, 10) === 100) return(true)
  else return(false)
}
createUsersDataTableGreen = (e) => {
  var table = [];
  table=this.state.greenArr.map((obj,i)=> {
     if (i === 0) return (<tr key={i}><td>{obj}</td><td><input type="date" value={this.state.greenInpArr[i]} onChange={(e)=>{this.changeValueGreenFunc(e, i);}}></input></td><td>{(this.state.greenInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
     else if (i === 3) return (<tr key={i}><td>{obj}</td><td><input type="tel" name="tel" value={this.state.greenInpArr[i]} placeholder={this.state.greenholderArr[i]} onChange={(e)=>{this.changeValueGreenFunc(e, i);}}></input></td><td>{(this.state.greenInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
     else return (<tr key={i}><td>{obj}</td><td><input type="text" value={this.state.greenInpArr[i]} placeholder={this.state.greenholderArr[i]} onChange={(e)=>{this.changeValueGreenFunc(e, i);}}></input></td><td>{(this.state.greenInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
});
return table;
}
changeValueGreenFunc = (e, i) => {
  if (this.state.greenInpArr[i] === "") this.bar = 16.6666667;
  if (e.target.value === "") this.bar = -16.6666667;
  var value = e.target.value;
    this.setState((state, props) => ({
      greenInpArr: update(state.greenInpArr, {[i]:  {$set: value}}),
      barGr: state.barGr + this.bar
    }))
}
greenCartCalc = (e) => {
  this.bar = 0;
  return(<div className="calcKasko">
          <p id="center" style={{margin: "0"}}>Заявка на оформление полиса <b style={{color: "#3a7d87"}}>«Зеленая карта»</b><span className="shag"> Шаг 1 из 1</span></p>
          <p id="left2">Выберите территорию действия полиса:</p>
          <p style={{margin: "0"}} className={this.state.colorP1}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedTer === true} onChange={(e)=>{this.radioButtonTerFunc(true);}} /><span className="label"></span>Все страны системы "Зеленая карта"</label></p>
          <p style={{margin: "0"}} className={this.state.colorP2}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedTer === false} onChange={(e)=>{this.radioButtonTerFunc(false);}} /><span className="label"></span>Украина, Азербайджан, Республика Беларусь и Республика Молдова</label></p>
          <p id="left2">Заполните данные страхователя:</p>
          <table><tbody>
            {this.createUsersDataTableGreen()}
          </tbody></table>
          <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
          {(this.progressBarGreenFunc() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
          {(this.state.check === true && this.state.barKas < 37.5)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
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
    kaskoNum: 1,
    osagoNum: 1,
    check: false,
    autoInpArr: ["","","","",""],
    contactInpArr: ["","",""],
    servsInpArr: [true, true, false,false, false, false],
    userInpArr: ["","","","","",""],
    zayvka: true,
    val: 200000,
    barKas: 0,
    barOs: 0,
    barGr: 0,
    inpArrOsago2: ["","","","",""],
    inpArrOsago: ["Обычный договор сроком действия 1 год","Личные","",""],
    userInpArrosago: ["","","","",""],
    autoInpArrosago: ["","","","","",""],
    greenInpArr: ["","","","","",""],
    selectedTer: true,
    colorP1: "colorGreen",
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
  if (this.state.carsStateArr[0] === true) return("КАСКО")
  else if (this.state.carsStateArr[1] === true) return("ОСАГО")
  else if (this.state.carsStateArr[2] === true) return("Зеленая карта")
}
num = (e)=> {
  if (this.state.carsStateArr[0] === true) return(this.state.kaskoNum)
  else if (this.state.carsStateArr[1] === true) return(this.state.osagoNum)
}
barFunc = (e)=> {
  if (this.state.carsStateArr[0] === true) return(this.state.barKas)
  else if (this.state.carsStateArr[1] === true) return(this.state.barOs)
  else if (this.state.carsStateArr[2] === true) return(this.state.barGr)
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

export default Cars;

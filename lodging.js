import React from 'react';
import update from 'immutability-helper';
import ProgressBar from "@ramonak/react-progress-bar";
import Nouislider from 'react-nouislider';
import "nouislider/distribute/nouislider.css";
import ok from './svg/ok.svg';
import notok from './svg/notok.svg';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

export class Lodging extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    houseArr: ["Квартира","Дом","Гражданская ответственность"],
    houseStateArr: [true, false, false],
    houseClassArr: ["houseClass","",""],
    infoArr: [["Особенности", "Преимущества и риски", "Необходимые документы"],["О страховании","Преимущества","Необходимые документы"],["О страховании","Виды рисков","Необходимые документы"]],
    infoStateArr: [true, false, false],
    infoClassArr: ["infoClass","",""],
    flat1: ["приобрел квартиру в новостройке;","снимает или сдает квартиру;","часто оставляет квартиру без присмотра – много работает, бывает в поездках/командировках;","не уверен в добросовестности/аккуратности соседей;", "и, конечно, тех, кто просто хотел бы иметь гарантию финансовой поддержки в случае повреждения квартиры и имущества в ней."],
    flat2: ["перечня объектов страхования;","суммы, на которую вы страхуете имущество;","перечня страховых рисков."],
    house1: ["каменные или деревянные жилые строения;","отделку (покрытие поверхностей стен, перекрытий, перегородок отделочными, изоляционными и декоративными материалами) и инженерное оборудование (системы отопления, электро-, газо- и водоснабжения, канализации, вентиляции и др.);","конструктивные элементы (стены, перегородки, конструкции балконов и лоджий и т.д.);","движимое имущество в доме (мебель, электроника, бытовая техника и др.);","строения хозяйственно-бытового назначения;","ландшафтные сооружения и инженерные системы земельного участка;","ценное имущество, картины (уникальные и антикварные предметы, изделия из драгоценных металлов, а также имущество, представляющее особую ценность для вас);","мототехнику;","гражданскую ответственность перед третьими лицами."],
    house2: ["перечня объектов страхования;","размера страховой суммы, на которую вы страхуете имущество;","перечня страховых рисков."],
    respons1: ["Квартиры / комнаты в многоквартирном жилом доме","Жилого дома/дачного (садового) дома","Квартиры в таунхаусе","Апартаментов"],
    respons2: ["Отметка о регистрации в Паспорте гражданина Российской Федерации","Свидетельство о государственной регистрации права собственности","Выписка из Единого реестра прав на недвижимое имущество","Инвестиционный договор и акт приема-передачи помещения от застройщика, в случаях, когда права на объект недвижимости не зарегистрированы в установленном законом порядке", "Договор коммерческого найма или аренды", "Выписка из финансового лицевого счета, в случае социального найма объект недвижимости"],
    flatNum: 1,
    houseNum: 1,
    respNum: 1,
    flatArr: ["Страхователь:","Дата рождения:","Контактный телефон:","Данные паспорта - серия:","Данные паспорта - номер:", "Дата выдачи: ", "Адрес Регистрации: "],
    holderFlatArr:["Фамилия Имя Отчество","Дата","Телефон","Серия","Номер","Дата","Адрес"],
    flatInpArr: ["","","","","","",""],
    val1: 350000,
    val2: 350000,
    val3: 350000,
    val4: 100000,
    val5: 350000,
    check: false,
    barFlat: 0,
    barHous: 0,
    barResp: 0,
    zayvka: false,
    selectedDat: true,
    selectedSex: true,
    selectedSex2: true,
    selectedResp: true,
    colorP1: "colorGreen",
    colorP2: "",
    selectedHouse: [false, false, false],
    selectedHouse2: [false, false, false, false, false, false, false],
    selectedHouse4: [false, false, false, false, false],
    houseChoiceArr: ["Конструктив с отделкой и оборудованием", "Конструктив без отделки и оборудования", "Отделка и оборудование без конструктива"],
    houseChoiceArr2: ["Жилой дом каменный","Часть жилого дома камень","Квартира в таунхаусе","Жилой дом смешанный","Часть жилого дома смешанного","Жилой дом деревянный", "Часть жилого дома дерево"],
    houseArr1: ["Срок страхования","Населенный пункт"],
    houseHolderArr1: ["Срок","Адрес"],
    houseInpArr1: ["",""],
    houseChoiceArr4: ["Пожар / Взрыв / Стихийные бедствия / Противоправные действия 3-х лиц / Залив / Падения твердых тел / Столкновение или наезд / Поджог","Пожар / Взрыв / Стихийные бедствия / Противоправные действия 3-х лиц / Падения твердых тел / Столкновение или наезд","Пожар / Взрыв / Стихийные бедствия / Противоправные действия 3-х лиц","Пожар / Взрыв / Залив / Противоправные действия 3-х лиц","Пожар / Взрыв"],
    houseArr2: ["Электронная почта: ","Телефон: ","Страхователь: "],
    houseHolderArr2: ["E-mail ","Ваш номер телефона ","Фамилия Имя Отчество "],
    houseInpArr2: ["","",""],
    sel1: false,
    sel2: false,
    sel3: false,
    respArr: ["Страхователь:","Дата рождения:","Контактный телефон:","Данные паспорта - серия:","Данные паспорта - номер:", "Дата выдачи: ", "Адрес Регистрации: "],
    holderRespArr:["Фамилия Имя Отчество","Дата","Телефон","Серия","Номер","Дата","Адрес"],
    respInpArr: ["","","","","","",""],
  };
}
clickButtonFunc = (i) => {
  this.state.houseArr.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        houseStateArr: update(state.houseStateArr,{[e]:  {$set: true}}),
        houseClassArr: update(state.houseClassArr,{[e]:  {$set: "carsClass"}}),
        infoStateArr: [true, false, false],
        infoClassArr: ["infoClass","",""],
        check: false,
      }))
    else
      this.setState((state, props) => ({
        houseStateArr: update(state.houseStateArr,{[e]:  {$set: false}}),
        houseClassArr: update(state.houseClassArr,{[e]:  {$set: ""}}),
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
  table=this.state.houseArr.map((obj,i)=> {
    return(<td key={i} id={this.state.houseClassArr[i]}><button onClick={(e)=>{this.clickButtonFunc(i);}}>{this.state.houseArr[i]}</button></td>)
});
return table;
}
createButtonsInfo = (e) => {
  var table = [];
  table=this.state.houseStateArr.map((obj,i)=> {
    return(<td key={i} id={this.state.infoClassArr[i]}><button onClick={(e)=>{this.clickButtonFunc1(i);}}>{this.state.infoArr[e][i]}</button></td>)
});
return table;
}
funcInfoHouse = (e)=> {
  if (this.state.houseStateArr[0] === true) return 0
  else if (this.state.houseStateArr[1] === true) return 1
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
  if (e === 0) return(this.flatFunc(i));
  else if (e === 1) return(this.houseFunc(i));
  else return(this.responsFunc(i));
}
flatFunc = (i)=> {
  if (i === 0) {
    return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Страхование квартиры</b> актуально для каждого, кто проживает в квартире, в особенности для тех, кто:</p>
    <ul className="ulHouse2">{this.liFunc(this.state.flat1)}</ul>
    <b style={{color: "#3a7d87"}}>Страховое покрытие</b>
    <p>Добровольное страхование квартиры – это возможность страхования:</p>
    <ul className="ulHouse2">
    <li><span><b style={{color: "#3a7d87"}}>конструктивных элементов</b> квартиры/комнаты;</span></li>
    <li><span><b style={{color: "#3a7d87"}}>внутренней отделки</b>(окна, межкомнатные двери, покрытие поверхностей стен, перекрытий, перегородок отделочными, изоляционными и декоративными материалами);</span></li>
    <li><span><b style={{color: "#3a7d87"}}>инженерного оборудования</b>(системы отопления, электро-, газо- и водоснабжения, канализации, вентиляции, кондиционирования и т. п.);</span></li>
    <li><span><b style={{color: "#3a7d87"}}>движимого имущества</b>(мебель; теле-, аудио-, видео-, радио-, фотоаппаратура; электроника и бытовая техника и др., для продукта «Моя Квартира» в т. ч. ценное имущество — картины, уникальные и антикварные предметы, изделия из драгоценных металлов, а также имущество, представляющее особую ценность для вас);</span></li>
    <li><span><b style={{color: "#3a7d87"}}>гражданской ответственности</b>за причинение вреда третьим лицам, например, затопление квартиры соседей.</span></li>
    </ul>
    </div>)
  }
  else if (i === 1) {
    return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Страхование квартиры</b> надежное решение, которое дает гарантию возмещения ущерба, нанесенного при наступлении страховых рисков, таких как:</p>
      <ul className="ulHouse2">
      <li><span><b style={{color: "#3a7d87"}}>пожар;</b></span></li>
      <li><span><b style={{color: "#3a7d87"}}>поджог;</b></span></li>
      <li><span><b style={{color: "#3a7d87"}}>взрыва;</b></span></li>
      <li><span><b style={{color: "#3a7d87"}}>залив;</b></span></li>
      <li><span><b style={{color: "#3a7d87"}}>противоправные действия третьих лиц</b>(кража со взломом, грабеж, разбой);</span></li>
      <li><span><b style={{color: "#3a7d87"}}>падение твердых тел, столкновение или наезд</b>(на застрахованное имущество, например, от падения ветки дерева до падения обломков самолетов и метеоритов);</span></li>
      <li><span><b style={{color: "#3a7d87"}}>стихийное бедствие</b>(удар молнии, ураган, землетрясение и пр.).</span></li>
      </ul>
      <p>Страховую выплату вы сможете потратить на покупку материалов и ремонт квартиры.</p>
      <p>Застраховав квартиру, не придется тратить собственные средства на восстановление своего жилья.</p>
      <p>Страховой полис может быть оформлен как собственником, так и арендатором квартиры или комнаты в многоквартирном доме.</p>
      <b style={{color: "#3a7d87"}}>Стоимость полиса страхования квартиры</b>
      <p>Стоимость полиса зависит от:</p>
      <ul className="ulHouse2">{this.liFunc(this.state.flat2)}</ul>
     </div>)
  }
  else {
    return(<div className="carsInfo">
    <p><b style={{color: "#3a7d87"}}>Необходимые документы</b></p>
      <ul className="ulHouse">
      <li><span><b style={{color: "#3a7d87"}}>Гражданский паспорт РФ</b></span></li>
      <li><span><b style={{color: "#3a7d87"}}>Заявление на страхование</b>, заполненное вместе со специалистом компании</span></li>
      </ul>
     </div>)
  }
}
houseFunc = (i)=> {
  if (i === 0) {
    return(<div className="carsInfo">
    <p><b style={{color: "#3a7d87"}}>Страхование дома</b></p>
    <p>Каждый владелец частного загородного дома заинтересован в обеспечении его сохранности. Вы в силах свести к минимуму некоторые риски, но обеспечить полную защиту имущества невозможно.</p>
    <p><b style={{color: "#3a7d87"}}>Страховка</b> – это доступный каждому способ получить гарантию возмещения ущерба, нанесенного имуществу при наступлении страховых рисков. Вы восстановите повреждения за счет страховой выплаты, а не собственных средств.</p>
    <p><b style={{color: "#3a7d87"}}>Вы можете застраховать:</b></p>
    <ul className="ulHouse2">{this.liFunc(this.state.house1)}</ul>
    </div>)
  }
  else if (i === 1) {
    return(<div className="carsInfo">
    <p><b style={{color: "#3a7d87"}}>Договор страхования</b> может быть заключен на случай следующих событий (рисков): пожара, взрыва, поджога, залива, стихийных бедствий, кражи со взломом, грабежа, разбоя, механических повреждений и т.д.</p>
    <p>Застраховать дом может как собственник, так и арендатор.</p>
    <p><b style={{color: "#3a7d87"}}>Цена полиса формируется индивидуально и зависит от:</b></p>
    <ul className="ulHouse2">{this.liFunc(this.state.house2)}</ul>
     </div>)
  }
  else {
    return(<div className="carsInfo">
    <p><b style={{color: "#3a7d87"}}>Необходимые документы</b></p>
      <ul className="ulHouse">
      <li><span><b style={{color: "#3a7d87"}}>Гражданский паспорт РФ</b></span></li>
      <li><span><b style={{color: "#3a7d87"}}>Заявление на страхование</b>, заполненное вместе со специалистом компании</span></li>
      </ul>
     </div>)
  }
}
responsFunc = (i)=> {
  if (i === 0) {
    return(<div className="carsInfo"><p><b style={{color: "#3a7d87"}}>Страхование гражданской ответственности</b> поможет сохранить хорошие отношения с вашими соседями при возникновении непредвиденных обстоятельств, особенно в период отпуска или при сдаче квартиры / дома в аренду.</p>
    <p><b style={{color: "#3a7d87"}}>Какого вида жилье можно застраховать?</b></p>
    <p>Полис страхования <b style={{color: "#3a7d87"}}>гражданской ответственности</b> защитит финансовую стабильность как собственника, так и арендатора (при страховании арендатором гражданской ответственности), в том числе не имеющего регистрацию по месту проживания, при эксплуатации:</p>
    <ul className="ulHouse2">{this.liFunc(this.state.respons1)}</ul>
    </div>)
  }
  else if (i === 1) {
    return(<div className="carsInfo">
    <p><b style={{color: "#3a7d87"}}>От каких рисков можно застраховать жилье?</b></p>
    <p>При страховании <b style={{color: "#3a7d87"}}>гражданской ответственности</b> страховая компания в соответствии с договором возмещает убытки, нанесенные имуществу, жизни и здоровью ваших соседей или третьего лица при эксплуатации застрахованного имущества в результате непреднамеренно возникших случаев, например:</p>
    <ul className="ulHouse2">
    <li><span><b style={{color: "#3a7d87"}}>пожара</b> - огонь в форме открытого пламени или тления, который непреднамеренно возник не в специально отведенном для этого месте, например, в результате сбоя электросети,</span></li>
    <li><span><b style={{color: "#3a7d87"}}>залива </b> - повреждение или уничтожение имущества в результате аварий систем водоснабжения, канализации и т.д., например, в результате аварии инженерных систем,</span></li>
    <li><span><b style={{color: "#3a7d87"}}>взрыва бытового газа</b> - повреждение или уничтожение имущества в результате освобождения большего количества энергии в ограниченном объеме с образованием и распространением ударной волны, например, при не повреждении газового котла</span></li>
    <li><span><b style={{color: "#3a7d87"}}>ущерба, при проведении ремонтных работ</b> – причинение вреда вследствие ремонтных работ, проводимых в застрахованном помещении</span></li>
    </ul>
     </div>)
  }
  else {
    return(<div className="carsInfo">
      <p><b style={{color: "#3a7d87"}}>Какие документы нужно иметь для оформления полиса гражданской ответственности?</b></p>
      <ul className="ulHouse2">
      <li><span>Документ, удостоверяющий личность Страхователя - <b style={{color: "#3a7d87"}}>Паспорт гражданина РФ</b></span></li>
      <li><span>Документы свидетельствующие о регистрации <b style={{color: "#3a7d87"}}>права собственности на объект недвижимости</b>. Необходим один из ниже указанных документов:</span></li>
      </ul>
      <ul className="ulHouse2">{this.liFunc2(this.state.respons2)}</ul>
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
liFunc2 = (arr) => {
  var table = [];
  table=arr.map((obj,i)=> {
    return(<li key={i} id="newLi"><span>{obj}</span></li>)
});
return table;
}
createForms = (e) => {
  if (e === 0) return(this.flatCalc());
  else if (e === 1) return(this.houseCalc());
  else return(this.respCalc());
}
//Квартира
flatCalc = (e)=> {
  if (this.state.flatNum === 1) return(this.flatNum1Func())
  else if (this.state.flatNum === 2) return(this.flatNum2Func())
}
flatNumFunc = (i)=> {
  this.setState({
    flatNum: i,
    check: false
  })
}
progressBarFunc = (e)=> {
  if (this.state.barFlat === 30) return(true)
  else return(false)
}
progressBarFunc2 = (e)=> {
  if (this.state.barFlat === 100) return(true)
  else return(false)
}
radioButtonDatFunc = (e) => {
  if (e === true) {
    this.setState ({
      selectedDat: true,
      colorP1: "colorGreen",
      colorP2: "",
    })
  }
  else {
    this.setState ({
      selectedDat: false,
      colorP2: "colorGreen",
      colorP1: "",
    })
  }
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
flatNum1Func = (e) => {
  this.bar =0;
  return(<div className="calcKasko">
          <p id="center">Заявка на оформление полиса страхования<b style={{color: "#3a7d87"}}> Квартиры</b><span className="shag"> Шаг {this.num()} из 2</span></p>
          <p id="center2">Укажите размер страховой защиты: <b style={{color: "#3a7d87"}}>конструктивные элементы</b> {(parseInt(this.state.val1,10) !== 350000)?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Укажите оценочную стоимость"/>)}</p>
          <div style={{height: "60px"}}><div className="sliderCar">
                <Nouislider
                  step ={1000}
                  range={{ min: 350000, max: 30000000 }}
                  start={[this.state.val1]}
                  connect ={[true, false]}
                  onSlide ={this.onSlide1}/>
                  <span id="left">350 000 &#8381;</span><span id="right">30 000 000 &#8381;</span>
              </div>
          <div className="sliderCar2"><span>{this.numberWithSpaces(parseInt(this.state.val1,10))} &#8381;</span></div>
          </div>
          <p id="center2">Укажите размер страховой защиты: <b style={{color: "#3a7d87"}}>внутренняя отделка</b> {(parseInt(this.state.val2,10) !== 350000)?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Укажите оценочную стоимость"/>)}</p>
          <div style={{height: "60px"}}><div className="sliderCar">
                <Nouislider
                  step ={1000}
                  range={{ min: 350000, max: 30000000 }}
                  start={[this.state.val2]}
                  connect ={[true, false]}
                  onSlide ={this.onSlide2}/>
                  <span id="left">350 000 &#8381;</span><span id="right">30 000 000 &#8381;</span>
              </div>
          <div className="sliderCar2"><span>{this.numberWithSpaces(parseInt(this.state.val2,10))} &#8381;</span></div>
          </div>
          <p id="center2">Укажите размер страховой защиты: <b style={{color: "#3a7d87"}}>движимое имущество</b> {(parseInt(this.state.val3,10) !== 350000)?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Укажите оценочную стоимость"/>)}</p>
          <div style={{height: "60px"}}><div className="sliderCar">
                <Nouislider
                  step ={1000}
                  range={{ min: 350000, max: 30000000 }}
                  start={[this.state.val3]}
                  connect ={[true, false]}
                  onSlide ={this.onSlide3}/>
                  <span id="left">350 000 &#8381;</span><span id="right">30 000 000 &#8381;</span>
              </div>
          <div className="sliderCar2"><span>{this.numberWithSpaces(parseInt(this.state.val3,10))} &#8381;</span></div>
          </div>
          <p id="left2">Выберите срок действия полиса:</p>
          <p style={{margin: "0"}} className={this.state.colorP1}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedDat === true} onChange={(e)=>{this.radioButtonDatFunc(true);}} /><span className="label"></span>6 месяцев</label></p>
          <p style={{margin: "0"}} className={this.state.colorP2}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedDat === false} onChange={(e)=>{this.radioButtonDatFunc(false);}} /><span className="label"></span>12 месяцев</label></p>
          {(this.progressBarFunc() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.flatNumFunc(2);}}>Далее</button>)}
          {(this.state.check === true && this.state.barFlat < 30)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
}
flatNum2Func = (e) => {
  this.bar =0;
  return(<div className="calcKasko2">
          <p id="center">Заявка на оформление полиса страхования<b style={{color: "#3a7d87"}}> Квартиры</b><span className="shag"> Шаг {this.num()} из 2</span></p>
          <p id="left2">Ввод персональных данных:</p>
          <table><tbody>
            {this.createUsersDataTableFlat()}
          </tbody></table>
          <p style={{margin: "0"}} className={this.state.colorP1}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex === true} onChange={(e)=>{this.radioButtonSexFunc(true);}} /><span className="label"></span>Мужчина</label></p>
          <p style={{margin: "0"}} className={this.state.colorP2}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex === false} onChange={(e)=>{this.radioButtonSexFunc(false);}} /><span className="label"></span>Женщина</label></p>
          <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
          {(this.progressBarFunc2() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
          {(this.state.check === true && this.state.barFlat < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
}
check = (e)=> {
  this.setState({
    check: true
  })
}
onSlide1 = (e) => {
  if (parseInt(this.state.val1, 10) === 350000) this.bar = 10;
  if (parseInt(e, 10) === 350000) this.bar = -10;
  this.setState({
    val1: e,
    barFlat: this.state.barFlat + this.bar
  })
}
onSlide2 = (e) => {
  if (parseInt(this.state.val2, 10) === 350000) this.bar = 10;
  if (parseInt(e, 10) === 350000) this.bar = -10;
  this.setState({
    val2: e,
    barFlat: this.state.barFlat + this.bar
  })
}
onSlide3 = (e) => {
  if (parseInt(this.state.val3, 10) === 350000) this.bar = 10;
  if (parseInt(e, 10) === 350000) this.bar = -10;
  this.setState({
    val3: e,
    barFlat: this.state.barFlat + this.bar
  })
}
numberWithSpaces  = (e) => {
  return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
createUsersDataTableFlat = (e) => {
  var table = [];
  table=this.state.flatArr.map((obj,i)=> {
    if (i === 1 || i === 5 || i === 7) return (<tr key={i}><td>{obj}</td><td><input type="date" name="calendar" value={this.state.flatInpArr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.flatInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else if (i === 2 || i === 3 || i === 4)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.flatInpArr[i]} placeholder={this.state.holderFlatArr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.flatInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.flatInpArr[i]} placeholder={this.state.holderFlatArr[i]} onChange={(e)=>{this.changeValueFunc(e, i);}}></input></td><td>{(this.state.flatInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
  });
  return table;
}
changeValueFunc = (e, i) => {
  if (this.state.flatInpArr[i] === "") this.bar = 10;
  if (e.target.value === "") this.bar = -10;
  var value = e.target.value;
    this.setState((state, props) => ({
      flatInpArr: update(state.flatInpArr, {[i]:  {$set: value}}),
      barFlat: state.barFlat + this.bar
    }))
}
//Дом
houseCalc = (e)=> {
  if (this.state.houseNum === 1) return(this.houseNum1Func())
  else if (this.state.houseNum === 2) return(this.houseNum2Func())
  else if (this.state.houseNum === 3) return(this.houseNum3Func())
}
houseNumFunc = (i)=> {
  this.setState({
    houseNum: i,
    check: false
  })
}
progressBarhouseFunc = (e)=> {
  if (this.state.barHous === 44) return(true)
  else return(false)
}
progressBarhouseFunc2 = (e)=> {
  console.log(this.state.barHous)
  if (this.state.barHous === 67) return(true)
  else return(false)
}
progressBarhouseFunc3 = (e)=> {
  if (parseInt(this.state.barHous,10) === 100) return(true)
  else return(false)
}
radioButtonHouseFunc = (i) => {
  if (this.state.sel1 === false)
    this.setState({
      barHous: this.state.barHous + 11,
      sel1: true
    })
  this.state.selectedHouse.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        selectedHouse: update(state.selectedHouse,{[e]:  {$set: true}}),
      }))
    else
      this.setState((state, props) => ({
        selectedHouse: update(state.selectedHouse,{[e]:  {$set: false}}),
      }))
  });
}
radioButtonHouseFunc2 = (i) => {
  if (this.state.sel2 === false)
    this.setState({
      barHous: this.state.barHous + 11,
      sel2: true
    })
  this.state.selectedHouse2.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        selectedHouse2: update(state.selectedHouse2,{[e]:  {$set: true}}),
      }))
    else
      this.setState((state, props) => ({
        selectedHouse2: update(state.selectedHouse2,{[e]:  {$set: false}}),
      }))
  });
}
radioButtonHouseFunc4 = (i) => {
  if (this.state.sel3 === false)
    this.setState({
      barHous: this.state.barHous + 11,
      sel3: true
    })
  this.state.selectedHouse4.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        selectedHouse4: update(state.selectedHouse4,{[e]:  {$set: true}}),
      }))
    else
      this.setState((state, props) => ({
        selectedHouse4: update(state.selectedHouse4,{[e]:  {$set: false}}),
      }))
  });
}
createHouseRadio = (e) => {
  var table = [];
  table=this.state.houseChoiceArr.map((obj,i)=> {
    if (this.state.selectedHouse[i] === true)
      return(<p style={{margin: "0"}} className="colorGreen"><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedHouse[i]} onChange={(e)=>{this.radioButtonHouseFunc(i);}}/><span className="label"></span>{obj}</label></p>)
    else return (<p style={{margin: "0"}}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedHouse[i]} onChange={(e)=>{this.radioButtonHouseFunc(i);}}/><span className="label"></span>{obj}</label></p>)
  });
  return table;
}
createHouseRadio2 = (e) => {
  var table = [];
  table=this.state.houseChoiceArr2.map((obj,i)=> {
    if (this.state.selectedHouse2[i] === true)
      return(<p style={{margin: "0"}} className="colorGreen"><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedHouse2[i]} onChange={(e)=>{this.radioButtonHouseFunc2(i);}}/><span className="label"></span>{obj}</label></p>)
    else return (<p style={{margin: "0"}}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedHouse2[i]} onChange={(e)=>{this.radioButtonHouseFunc2(i);}}/><span className="label"></span>{obj}</label></p>)
  });
  return table;
}
createHouseRadio4 = (e) => {
  var table = [];
  table=this.state.houseChoiceArr4.map((obj,i)=> {
    if (this.state.selectedHouse4[i] === true)
      return(<p style={{margin: "0"}} className="colorGreen"><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedHouse4[i]} onChange={(e)=>{this.radioButtonHouseFunc4(i);}}/><span className="label"></span>{obj}</label></p>)
    else return (<p style={{margin: "0"}}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedHouse4[i]} onChange={(e)=>{this.radioButtonHouseFunc4(i);}}/><span className="label"></span>{obj}</label></p>)
  });
  return table;
}
onSlide4 = (e) => {
  if (parseInt(this.state.val4, 10) === 100000) this.bar = 12;
  if (parseInt(e, 10) === 100000) this.bar = 12;
  this.setState({
    val4: e,
    barHous: this.state.barHous + this.bar
  })
}
houseNum1Func = (e) => {
  this.bar =0;
  return(<div className="calcKasko2">
          <p id="center" style={{margin: "0"}}>Заявка на оформление полиса страхования жилого<b style={{color: "#3a7d87"}}> Дома</b><span className="shag"> Шаг {this.num()} из 3</span></p>
          <p id="left2">Заполните данные жилого строения:</p>
          {this.createHouseRadio()}
          <p id="left2">Выберите категорию строения:</p>
          {this.createHouseRadio2()}
          <table><tbody>
            {this.createUsersDataTablehouse()}
          </tbody></table>
          {(this.progressBarhouseFunc() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.houseNumFunc(2);}}>Далее</button>)}
          {(this.state.check === true && this.state.barHous < 44)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
}
houseNum2Func = (e) => {
  this.bar =0;
  return(<div className="calcKasko2">
          <p id="center" style={{margin: "0"}}>Заявка на оформление полиса страхования жилого<b style={{color: "#3a7d87"}}> Дома</b><span className="shag"> Шаг {this.num()} из 3</span></p>
          <p id="center2">Укажите размер страховой суммы: {(parseInt(this.state.val4,10) !== 100000)?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Укажите оценочную стоимость"/>)}</p>
          <div style={{height: "60px"}}><div className="sliderCar">
                <Nouislider
                  step ={1000}
                  range={{ min: 100000, max: 50000000 }}
                  start={[this.state.val4]}
                  connect ={[true, false]}
                  onSlide ={this.onSlide4}/>
                  <span id="left">100 000 &#8381;</span><span id="right">50 000 000 &#8381;</span>
              </div>
          <div className="sliderCar2"><span>{this.numberWithSpaces(parseInt(this.state.val4,10))} &#8381;</span></div>
          </div>
          <p id="left2">Выберите категорию Страховых рисков:</p>
          {this.createHouseRadio4()}
          {(this.progressBarhouseFunc2() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.houseNumFunc(3);}}>Далее</button>)}
          {(this.state.check === true && this.state.barHous < 67)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
}
houseNum3Func = (e) => {
  this.bar =0;
  return(<div className="calcKasko2">
          <p id="center" style={{margin: "0"}}>Заявка на оформление полиса страхования жилого<b style={{color: "#3a7d87"}}> Дома</b><span className="shag"> Шаг {this.num()} из 3</span></p>
          <p id="left2">Укажите контактные данные:</p>
          <table><tbody>
            {this.createUsersDataTable2house()}
          </tbody></table>
          <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
          {(this.progressBarhouseFunc3() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
          {(this.state.check === true && this.state.barHous < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
}
createUsersDataTablehouse = (e) => {
  var table = [];
  table=this.state.houseArr1.map((obj,i)=> {
    return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.houseInpArr1[i]} placeholder={this.state.houseHolderArr1[i]} onChange={(e)=>{this.changeValuehouseFunc(e, i);}}></input></td><td>{(this.state.houseInpArr1[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
});
return table;
}
createUsersDataTable2house = (e) => {
  var table = [];
  table=this.state.houseArr2.map((obj,i)=> {
       return (<tr key={i}><td>{obj}</td><td><input type="text" value={this.state.houseInpArr2[i]} placeholder={this.state.houseHolderArr2[i]} onChange={(e)=>{this.changeValuehouseFunc2(e, i);}}></input></td><td>{(this.state.houseInpArr2[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
  });
  return table;
}
changeValuehouseFunc = (e, i) => {
  if (this.state.houseInpArr1[i] === "") this.bar = 11;
  if (e.target.value === "") this.bar = -11;
  var value = e.target.value;
    this.setState((state, props) => ({
      houseInpArr1: update(state.houseInpArr1, {[i]:  {$set: value}}),
      barHous: state.barHous + this.bar
    }))
}
changeValuehouseFunc2 = (e, i) => {
  if (this.state.houseInpArr2[i] === "") this.bar = 11;
  if (e.target.value === "") this.bar = -11;
  var value = e.target.value;
    this.setState((state, props) => ({
      houseInpArr2: update(state.houseInpArr2, {[i]:  {$set: value}}),
      barHous: state.barHous + this.bar
    }))
}
//Гражданская ответственность
respCalc = (e)=> {
  if (this.state.respNum === 1) return(this.respNum1Func())
  else if (this.state.respNum === 2) return(this.respNum2Func())
}
respNumFunc = (i)=> {
  this.setState({
    respNum: i,
    check: false
  })
}
progressbarRespFunc = (e)=> {
  if (this.state.barResp === 12.5) return(true)
  else return(false)
}
progressbarRespFunc2 = (e)=> {
  if (this.state.barResp  === 100) return(true)
  else return(false)
}
createUsersDataTableResp = (e) => {
  var table = [];
  table=this.state.respArr.map((obj,i)=> {
    if (i === 1 || i === 5 || i === 7) return (<tr key={i}><td>{obj}</td><td><input type="date" name="calendar" value={this.state.respInpArr[i]} onChange={(e)=>{this.changeValueFuncResp(e, i);}}></input></td><td>{(this.state.respInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else if (i === 2 || i === 3 || i === 4)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.respInpArr[i]} placeholder={this.state.holderRespArr[i]} onChange={(e)=>{this.changeValueFuncResp(e, i);}}></input></td><td>{(this.state.respInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.respInpArr[i]} placeholder={this.state.holderRespArr[i]} onChange={(e)=>{this.changeValueFuncResp(e, i);}}></input></td><td>{(this.state.respInpArr[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
  });
  return table;
}
changeValueFuncResp = (e, i) => {
  if (this.state.respInpArr[i] === "") this.bar = 12.5;
  if (e.target.value === "") this.bar = -12.5;
  var value = e.target.value;
    this.setState((state, props) => ({
      respInpArr: update(state.respInpArr, {[i]:  {$set: value}}),
      barResp: state.barResp + this.bar
    }))
}
respNum1Func = (e) => {
  this.bar =0;
  return(<div className="calcKasko">
          <p id="center">Заявка на оформление <b style={{color: "#3a7d87"}}> Гражданская ответственность</b><span className="shag"> Шаг {this.num()} из 2</span></p>
          <p id="center2">Укажите размер страховой защиты: {(parseInt(this.state.val5,10) !== 350000)?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Укажите оценочную стоимость"/>)}</p>
          <div style={{height: "60px"}}><div className="sliderCar">
                <Nouislider
                  step ={1000}
                  range={{ min: 350000, max: 3000000 }}
                  start={[this.state.val5]}
                  connect ={[true, false]}
                  onSlide ={this.onSlide5}/>
                  <span id="left">350 000 &#8381;</span><span id="right">3 000 000 &#8381;</span>
              </div>
          <div className="sliderCar2"><span>{this.numberWithSpaces(parseInt(this.state.val5,10))} &#8381;</span></div>
          </div>
          <p id="left2">Выберите срок действия полиса:</p>
          <p style={{margin: "0"}} className={this.state.colorP1}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedResp === true} onChange={(e)=>{this.radioButtonRespFunc(true);}} /><span className="label"></span>6 месяцев</label></p>
          <p style={{margin: "0"}} className={this.state.colorP2}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedResp === false} onChange={(e)=>{this.radioButtonRespFunc(false);}} /><span className="label"></span>12 месяцев</label></p>
          {(this.progressbarRespFunc() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Далее</button>):(<button className="insurButton2" onClick={(e)=>{this.respNumFunc(2);}}>Далее</button>)}
          {(this.state.check === true && this.state.barResp < 12.5)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
        </div>)
}
respNum2Func = (e) => {
  this.bar =0;
  return(<div className="calcKasko2">
          <p id="center">Заявка на оформление <b style={{color: "#3a7d87"}}> Гражданская ответственность</b><span className="shag"> Шаг {this.num()} из 2</span></p>
          <p id="left2">Ввод персональных данных:</p>
          <table><tbody>
            {this.createUsersDataTableResp()}
          </tbody></table>
          <p style={{margin: "0"}} className={this.state.colorP1}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex2 === true} onChange={(e)=>{this.radioButtonSex2Func(true);}} /><span className="label"></span>Мужчина</label></p>
          <p style={{margin: "0"}} className={this.state.colorP2}><label className="radio"><input type="radio" className="hidden" checked = {this.state.selectedSex2 === false} onChange={(e)=>{this.radioButtonSex2Func(false);}} /><span className="label"></span>Женщина</label></p>
          <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
          {(this.progressbarRespFunc2() === false)?(<button className="insurButton4No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Оформить заявку</button>):(<button className="insurButton4" onClick={(e)=>{this.createZayvka();}}>Оформить заявку</button>)}
          {(this.state.check === true && this.state.barResp < 100)?(<p className="check">Заполните все поля, чтобы продолжить оформление!</p>):(null)}
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
onSlide5 = (e) => {
  if (parseInt(this.state.val5, 10) === 350000) this.bar = 12.5;
  if (parseInt(e, 10) === 350000) this.bar = -12.5;
  this.setState({
    val5: e,
    barResp: this.state.barResp + this.bar
  })
}
radioButtonSex2Func = (e) => {
  if (e === true) {
    this.setState ({
      selectedSex2: true,
      colorP1: "colorGreen",
      colorP2: "",
    })
  }
  else {
    this.setState ({
      selectedSex2: false,
      colorP2: "colorGreen",
      colorP1: "",
    })
  }
}
radioButtonRespFunc = (e) => {
  if (e === true) {
    this.setState ({
      selectedResp: true,
      colorP1: "colorGreen",
      colorP2: "",
    })
  }
  else {
    this.setState ({
      selectedResp: false,
      colorP2: "colorGreen",
      colorP1: "",
    })
  }
}
//Заявка
createZayvka = (e)=> {
  this.setState({
    flatNum: 1,
    houseNum: 1,
    respNum: 1,
    check: false,
    flatInpArr: ["","","","","","",""],
    zayvka: true,
    val1: 350000,
    val2: 350000,
    val3: 350000,
    val4: 100000,
    val5: 350000,
    barFlat: 0,
    barHous: 0,
    barResp: 0,
    selectedDat: true,
    selectedSex: true,
    selectedResp: true,
    colorP1: "colorGreen",
    colorP2: "",
    sel1: false,
    sel2: false,
    sel3: false,
    houseInpArr1: ["",""],
    houseInpArr2: ["","",""],
    selectedHouse: [false, false, false],
    selectedHouse2: [false, false, false, false, false, false, false],
    selectedHouse4: [false, false, false, false, false],
    respInpArr: ["","","","","","",""]
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
  if (this.state.houseStateArr[0] === true) return("Страховка квартиры")
  else if (this.state.houseStateArr[1] === true) return("Страховка дома")
  else if (this.state.houseStateArr[2] === true) return("Гражданская ответственность")
}
num = (e)=> {
  if (this.state.houseStateArr[0] === true) return(this.state.flatNum)
  else if (this.state.houseStateArr[1] === true) return(this.state.houseNum)
  else if (this.state.houseStateArr[2] === true) return(this.state.respNum)

}
barFunc = (e)=> {
  if (this.state.houseStateArr[0] === true) return(this.state.barFlat)
  else if (this.state.houseStateArr[1] === true) return(this.state.barHous)
  else if (this.state.houseStateArr[2] === true) return(this.state.barResp)
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
              <div className="formCars">{this.createForms(this.funcInfoHouse())}</div>
              <div className="infoCars">
                <table><tbody>
                  <tr>{this.createButtonsInfo(this.funcInfoHouse())}</tr>
                </tbody></table>
                <div className="boxInfo">{this.createInfo(this.funcInfoHouse())}</div>
              </div>
            </div>
            {(this.state.zayvka === true)?(this.zayavkaTime()):(null)}
          </div>)
  }
}

export default Lodging;

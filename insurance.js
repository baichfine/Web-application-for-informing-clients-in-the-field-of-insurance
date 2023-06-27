import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import update from 'immutability-helper';
import sl1 from './svg/1.jpg';
import sl2 from './svg/2.jpg';
import sl3 from './svg/3.jpg';
import sl4 from './svg/4.jpg';
import sl5 from './svg/5.jpg';
import car1 from './svg/car1.svg';
import house1 from './svg/house1.svg';
import health1 from './svg/health1.svg';
import money1 from './svg/money1.svg';
import summer1 from './svg/summer1.svg';
import car2 from './svg/car2.svg';
import house2 from './svg/house2.svg';
import health2 from './svg/health2.svg';
import money2 from './svg/money2.svg';
import summer2 from './svg/summer2.svg';
import arrow from './svg/arrow.svg';


export class Insurance extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    infoArr: ["В списке услуг нашей страховой компании представлены программы, которые позволяют застраховать риски, связанные с использованием личного автомобиля. Мы предлагаем рассчитать страховку онлайн и приобрести наиболее востребованные продукты страхования транспортных средств: ОСАГО, КАСКО, «Зеленая карта». Приобрести полисы можно как по отдельности, так и в составе выгодных пакетных предложений. На продление договоров действуют специальные условия.", "Страховая компания предоставляет владельцам и наймодателям квартир, домов и жилья другого типа защитить свое имущество от порчи, утраты и других рисков. Нашим клиентам доступны услуги страхования ответственности и ипотеки, а также страхование временной невозможности выплачивать долг банку в связи с потерей работы.", "В список наших услуг входят различные корпоративные программы добровольного и обязательного медицинского страхования. У нас есть собственная сеть многопрофильных клиник, в которых мы оказываем медицинскую помощь.", "Наша страховая компания предоставляет возможность защитить личное имущество от разбойного нападения и грабежа. Также мы реализуем программу страхования культурных ценностей для продавцов и коллекционеров антиквариата, КАСКО для катеров, моторных и парусных яхт, гребных лодок, гидроциклов и другого некоммерческого водного транспорта. Нашим клиентам доступно заключение страховых договоров для защиты бытовой и электронной техники от кражи, действий злоумышленников, поломок и повреждений.", "Страховая компания позволяет минимизировать риски, с которыми связаны дальние поездки. У нас можно приобрести необходимый для получения визы полис выезжающих за рубеж, «Зеленую карту» для международного путешествия на личном автомобиле, полис страхования водного транспорта для отдыха на своей яхте или катере, страховку с защитой от невыезда, а также полис страхования личного имущества.", "Мы хотим чтобы любое путешествие прошло без забот, проблем и неожиданностей, рейс не задержали, а багаж и чемоданы остались целыми и невредимыми. Но в пути могут произойти любые неприятности. Можно бороться с проблемами в поездке на поезде или на автобусе и полете самолетом самостоятельно, а можно купить полис страхования пассажира и компенсировать все свои издержки денежными выплатами от страховой компании."],
    nameArr: ["Страхование автомобиля","Страхование жилья","Страхование жизни и здоровья","Страхование имущества","Страховка во время путешествий"],
    nameIcons: ["Автомобили","Жилье","Здоровье","Имущество","Путешествия"],
    infoIconsArr: ["КАСКО, ОСАГО, Продление, Зеленая карта", "Квартира, ГО, Дом", "ДМС, ОМС, Защита семьи", "Защита покупки, Банковские карты", "Страховка за рубежом, Путешествия по России"],
    icons: [car1,house1,health1,money1, summer1],
    icons1: [car1,house1,health1,money1, summer1],
    icons2: [car2,house2,health2,money2, summer2],
    idArr: ["iconId1","iconId1","iconId1","iconId1","iconId1"],
    nameIconArr: ["nameIcon","nameIcon","nameIcon","nameIcon","nameIcon"],
    servicesArr: [" Автострахование"," Страхование недвижимости"," Страхование здоровья"," Страхование движимого имущества"," Страхование путешественников"," Страхование пассажиров"],
    arrowId: ["idArrow","idArrow","idArrow","idArrow","idArrow","idArrow"],
    servicesId: ["idServices","idServices","idServices","idServices","idServices","idServices"],
  };
}
sliderContent = (sl, i) => {
 return(<div className="item" data-value={i}>
          <div className="slF">
          </div>
          <div className="slf2">
            <p id="sl">{this.state.nameArr[i-1]}</p>
            <ul>
              {this.listContent(i)}
            </ul>
            <button className="insurButton" onClick={(e)=>{this.props.more(i-1);}}>Подробнее</button>
          </div>
          <img id="borderSl" src={sl} alt={sl}/>
      </div>)
}
listContent = (i) => {
  var table = [];
  switch (i) {
  case 1:
    this.arr =["Страхование КАСКО", "Страхование ОСАГО", "Зеленая карта"];
    break;
  case 2:
    this.arr =["Квартира", "Загородная недвижимость", "Гражданская ответственность"];
    break;
  case 3:
    this.arr =["ДМС", "ОМС", "Жизнь и несчастный случай"];
    break;
  case 4:
    this.arr =["Защита покупки", "Страхование банковских карт", "Культурные ценности"];
    break;
  case 5:
    this.arr =["За рубеж", "По России", "Страхование от невыезда"];
    break;
  default:
    break;
  }
  table=this.arr.map((obj,i)=> {
    return(<li key={i} id="liSt">{obj}</li>)
});
return table;
}
createIconsFunc = (e)=> {
  var table = [];
  table=this.state.icons.map((obj,i)=> {
    return(<td key={i}><div className="iconsClass" id={this.state.idArr[i]} onClick={(e)=>{this.props.more(i);}} onMouseEnter={(e)=>{this.changeStyle(e, i, true);}} onMouseLeave={(e)=>{this.changeStyle(e, i, false);}}><img id="iconId" src={obj} alt={obj}/></div><div className="nameIcon"><span id={this.state.nameIconArr[i]}>{this.state.nameIcons[i]}</span></div></td>);
});
return table;
}
changeStyle = (e, i, bool) => {
  if (bool === true) {this.id ="iconId2"; this.icon = this.state.icons2[i]; this.nameId = "nameIconId";}
  else {this.id ="iconId1"; this.icon = this.state.icons1[i]; this.nameId = "nameIcon";}
  this.setState((state, props) => ({
    idArr: update(state.idArr,{[i]:  {$set: this.id}}),
    icons: update(state.icons,{[i]:  {$set: this.icon}}),
    nameIconArr: update(state.nameIconArr,{[i]:  {$set: this.nameId}}),
  }))
}
createMoreFunc = (j)=> {
  var table = [];
  table=this.state.icons.map((obj,i)=> {
    return(<td key={i} className="infoIcons">{this.state.infoIconsArr[i]}</td>);
});
return table;
}
createServicesFunc = (e)=> {
  var table = [];
  table=this.state.servicesArr.map((obj,i)=> {
    return(<div><div key={i} className="classServices" onClick={(e)=>{this.arrowChange(i);}}>
    <img id={this.state.arrowId[i]} src={arrow} alt={arrow}/>{obj}</div>
    {this.arrowContent(i)}
    </div>);
});
return table;
}
arrowChange = (i)=> {
  if (this.state.arrowId[i] === "idArrow") {this.idArrow = "idArrow2"; this.idServ = "idServices2";}
  else {this.idArrow = "idArrow"; this.idServ = "idServices";}
  this.state.arrowId.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        arrowId: update(state.arrowId,{[i]:  {$set: this.idArrow}}),
        servicesId: update(state.servicesId,{[i]:  {$set: this.idServ}}),
      }))
    else
      this.setState((state, props) => ({
        arrowId: update(state.arrowId,{[e]:  {$set: "idArrow"}}),
        servicesId: update(state.servicesId,{[e]:  {$set: "idServices"}}),
      }))
  });
}
arrowContent = (i) => {
  var table = [];
  table=this.state.infoArr.map((obj,e)=> {
    if (i === e) return(<div className="oppServ" id={this.state.servicesId[e]}>{obj}</div>)
    return(null)
  });
return table;
}
render(){
  const items = [
      this.sliderContent(sl1, 1),
      this.sliderContent(sl2, 2),
      this.sliderContent(sl3, 3),
      this.sliderContent(sl4, 4),
      this.sliderContent(sl5, 5),
  ];
    return(<div className="insurance">
    <div className="sliderInsurance"><AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={2000}
        animationType="fadeout"
        infinite
        items={items}
        mouseTracking/>
    </div>
    <div className="iconsInsur">
      <div className="iconsInsur2">
      <h4 className="h4">Рассчитать стоимость страховки и купить онлайн</h4>
        <table><tbody>
        <tr>{this.createIconsFunc()}</tr>
        <tr>{this.createMoreFunc()}</tr>
        </tbody></table>
      </div>
    </div>
    <div className="servicesInsur">
      <div className="servicesInsur2">
      <h6 className="h6">Наши услуги</h6>
      <div className="services">
          {this.createServicesFunc()}
      </div>
      </div>
    </div>
    </div>)
  }
}

export default Insurance;

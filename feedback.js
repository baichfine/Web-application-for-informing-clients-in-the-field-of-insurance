import React from 'react';
import update from 'immutability-helper';
import ok from './svg/ok.svg';
import notok from './svg/notok.svg';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import arrow from './svg/arrow.svg';

export class FeedBack extends React.Component{
constructor(props) {
  super(props);
  this.state = {
    backArr: ["Онлайн обращение","Консультация по телефону"],
    backStateArr: true,
    backClassArr: ["infoClass",""],
    backArr3: ["КАСКО","ОСАГО","Жилье","Путешествия","Здоровье"],
    backStateArr3: [true,false,false,false,false],
    backClassArr3: ["infoClass","","","",""],
    backArr1: ["Вид страхования: ","Фамилия Имя Отчетсво: ","Ваш Телефон: ","Электронная почта: "],
    backHolderArr1: ["Полис страхования","ФИО","Номер телефона","E-mail"],
    backInpArr1: ["","","",""],
    backArr2: ["Вид страхования: ","Фамилия Имя Отчетсво: ","Ваш Телефон: ","Электронная почта: "],
    backHolderArr2: ["Полис страхования","ФИО","Номер телефона","E-mail"],
    backInpArr2: ["","","",""],
    text: "",
    holderText: "Опишите интересующий Вас вопрос.",
    bar1: 0,
    bar2: 0,
    zayvka: false,
    servicesArr: [
      [" Какие выплаты осуществляются по автострахованию?"," На какую сумму можно застраховать автомобиль? От каких рисков?"," Можно ли оформить КАСКО в рассрочку?"," Можно ли застраховать автомобиль по минимальному пакету для получения кредита в банке?"," Можно ли купить КАСКО если я еще не поставил на учет автомобиль?", " У меня автомобиль с правым рулем – могу ли я оформить КАСКО?"],
      [" На какую сумму можно застраховать автомобиль? От каких рисков?"," Можно ли внести изменения в полис е-ОСАГО?"," Что делать, если меня остановит сотрудник ГИБДД?"," Электронный полис дешевле бумажного?"," Будет ли учтена скидка за безаварийное вождение?"," Можно ли внести изменения в полис е-ОСАГО?"],
      [" Можно ли застраховать социальное жилье?"," Снял квартиру у частного лица, могу ли я его застраховать в свою пользу?"," Сколько ждать получения выплаты?"," Принимаются ли на страхование апартаменты?"," Сдаю квартиру под офис, кто должен ее страховать?"," Принимаются ли на страхование незавершенные строительные объекты?"],
      [" Каковы исключения из страхового покрытия?"," Как работает многократный полис?"," Как оформить полис на несколько стран?"," Подходит ли полис для шенгенской визы?"," Что такое Сервисный Центр или Сервисная Компания?"," Могу ли я оформить полис на друга или родственника?"],
      [" Какие документы нужны для оформления ДМС?"," Можно ли застраховать семью?"," Можно ли обслуживаться в нескольких поликлиниках?"," Какие ситуации не покрывает страховка от несчастного случая?"," Кто считается профессиональным спортсменом?"," Я хочу заниматься травмоопасным видом спорта в качестве хобби. Могу ли я получить полис добровольного страхования от несчастного случая?"],],
    infoArr: [
        ["Страховщик в течение 30 рабочих дней со дня получения комплекта документов составляет акт о страховом случае, на основании которого осуществляет страховую выплату по КАСКО потерпевшему, либо направляет письменное извещение о полном или частичном отказе в выплате с указанием причин отказа. За каждый день просрочки рассмотрения заявления о выплате вводится неустойка (пеня) в размере 1/75 ставки ЦБ РФ рефинансирования от страховой суммы по виду вреда. Страховая выплата производится в течение 3 рабочих дней со дня принятия решения об осуществлении страховой выплаты.","Узнать приблизительную стоимость полиса КАСКО можно, воспользовавшись нашим онлайн-калькулятором. Цена будет зависеть от набора рисков: угон, полная гибель и ущерб.","Можно. За некоторым исключением большинство страховых продуктов по КАСКО можно купить в рассрочку при условии, что договор страхования заключается на срок не менее года, а размер страховой премии составляет не менее 25 тыс. рублей. Конкретные условия предоставления рассрочки определяются в зависимости от условий договора и региона.","Все зависит от требований банка к страхованию предмета залога. В Ингосстрахе можно заключить договор на условиях, предусматривающих страхования только Угона и полной гибели ТС (продукт «Прагматик»). Ряд банков предоставляет кредиты под обеспечение полисом по такому продукту.","Да, можно. В Ингосстрахе страхование действует независимо от регистрации автомобиля в ГИБДД.","Зависит от марки/модели автомобиля, его возраста и других факторов. О возможности заключить договор узнавайте у представителя Ингосстраха в своем регионе."],
        ["ОСАГО можно застраховать в любом субъекте Российской Федерации независимо от места регистрации автомобиля, при этом территориальный коэффициент, влияющий на стоимость при расчете цены полиса, определяется по прописке собственника автомобиля.","Да. Но все зависит от того, что необходимо изменить. Вы можете зайти в свой личный кабинет и посмотреть перечень доступных изменений. Если требуется внести изменения, а онлайн такой возможности нет, это значит, что данные изменения вносятся только в офисе.","Инспекторы ГИБДД проверяют легитимность электронного полиса ОСАГО через специальный сервис МВД России или с помощью официального сайта РСА (Российского Союза Автостраховщиков). Для упрощения процедуры проверки электронного полиса ОСАГО необходимо возить с собой распечатку электронной копии, полученной от страховой компании.","Цена полиса не зависит от способа оформления. Оба варианта имеют одинаковую стоимость, просто вы можете сэкономить время на посещении офиса Ингосстраха и оформить полис ОСАГО дома в режиме онлайн.","В процессе оформления и расчета мы автоматически проверяем ваши данные через единую информационную систему Российского Союза Автостраховщиков (РСА). Если вы отъездили предыдущий год без аварий, получите скидку за безаварийную езду. При этом обязательно проверяйте корректность введенной информации. Бывает, что пропущенная буква в фамилии или имени водителя приводит к тому, что скидка за безаварийную езду не будет применена, так как данные в системах РСА и переданные через наш сайт просто не совпадут.","Да. Но все зависит от того, что необходимо изменить. Вы можете зайти в свой личный кабинет и посмотреть перечень доступных изменений. Если требуется внести изменения, а онлайн такой возможности нет, это значит, что данные изменения вносятся только в офисе."],
        ["Да, помещения, используемые гражданами для проживания на основании договора социального найма, могут быть приняты на страхование на общих условиях. Выплата страхового возмещения при этом будет осуществляться любому из прописанных в застрахованном помещении совершеннолетних лиц (прописка устанавливается согласно данным паспорта).","Страхование квартиры возможно, если в договоре аренды закреплена ваша обязанность по восстановлению поврежденного по любым причинам имущества, проведению планового/внепланового ремонта и т.п. Также в пользу арендатора может быть застраховано движимое имущество арендатора в съемном помещении, как и арендованное имущество, за которое он несет материальную ответственность согласно договору аренды.","15 рабочих дней с момента получения последнего из документов по убытку.","Да, апартаменты принимаются на страхование аналогично квартирам.","Страхователем может выступать как арендатор, так и арендодатель, а выгодоприобретателем (получателем выплаты) устанавливается лицо, которое несет ответственность за сохранность застрахованного имущества (это также может быть или арендатор, или арендодатель, в зависимости от условий, предусмотренных договором аренды).","Да, страховка дома оформляется в индивидуальном порядке, при наличии у строения стен, кровли, закрытых оконных и дверных проемов."],
        ["По полису не покрываются случаи, произошедшие по причине нахождения Застрахованного в состоянии алкогольного или наркотического опьянения, связанные с ведением и протеканием беременности, психическими заболеваниями. Не покрывается пластическая и восстановительная хирургия, протезирование. Полный список исключений можно найти в Правилах страхования.","Полис действует в течениие выбранного срока страхования первые 90 дней каждой поездки, при этом количество поездок по полису не ограничено.","Просто выберите в момент оформления те страны и регионы, которые вы планируете посетить.","Да, нужно только распечатать полис для предъявления его в консульство.","Это специализированная организация (компания), контакты которой указаны в страховом полисе. Сервисный Центр по поручению Страховщика круглосуточно обеспечивает организацию услуг, предусмотренных Правилами страхования.","Да, страхование будет действовать в отношении Застрахованного лица. Лицо, которое оформляет полис в пользу Застрахованного, называется Страхователь."],
        ["Для оформления медицинской страховки потребуется только паспорт. Для оформления некоторых продуктов необходимо заполнение медицинской анкеты.","Да, можно. У нас есть программа «Близкие люди» на базе собственной семейной клиники Ингосстраха «Будь Здоров».","Да, в течение срока действия полиса вы можете обслуживаться в нескольких клиниках одновременно.","Страховка не покрывает ситуации, когда застрахованный совершает противоправные действия, находится под воздействием наркотиков или алкоголя, умышленно наносит себе физический вред. Обострение хронического заболевания застрахованного также не считается несчастным случаем. ","Человек, для которого занятия спортом являются основным видом заработка.","Да, мы покрываем травмоопасные виды спорта. Перечень и условия уточняйте при расчете, в Правилах страхования или у сотрудника компании."],],
    arrowId: [["idArrow","idArrow","idArrow","idArrow","idArrow","idArrow"],["idArrow","idArrow","idArrow","idArrow","idArrow","idArrow"],["idArrow","idArrow","idArrow","idArrow","idArrow","idArrow"],["idArrow","idArrow","idArrow","idArrow","idArrow","idArrow"],["idArrow","idArrow","idArrow","idArrow","idArrow","idArrow"],],
    servicesId: [["idServices","idServices","idServices","idServices","idServices","idServices"],["idServices","idServices","idServices","idServices","idServices","idServices"],["idServices","idServices","idServices","idServices","idServices","idServices"],["idServices","idServices","idServices","idServices","idServices","idServices"],["idServices","idServices","idServices","idServices","idServices","idServices"]],
  };
}
createButtonsInfo = (e) => {
  var table = [];
  table=this.state.backArr.map((obj,i)=> {
    return(<td key={i} id={this.state.backClassArr[i]}><button onClick={(e)=>{this.clickButtonFunc1(i);}}>{obj}</button></td>);
});
return table;
}
createButtonsInfo2 = (e) => {
  var table = [];
  table=this.state.backArr3.map((obj,i)=> {
    return(<td key={i} id={this.state.backClassArr3[i]}><button onClick={(e)=>{this.clickButtonFunc2(i);}}>{obj}</button></td>);
});
return table;
}
clickButtonFunc1 = (i) => {
  if (i === 0) {
    this.back = true;
    this.class1 = "infoClass";
    this.class2 = "";
  }
  else {
    this.back = false;
    this.class1 = "";
    this.class2 = "infoClass";
  }
  this.setState({
    backStateArr: this.back,
    backClassArr: [this.class1, this.class2],
  })
}
clickButtonFunc2 = (i) => {
  this.state.backStateArr3.forEach((obj,e)=> {
    if (i === e)
      this.setState((state, props) => ({
        backStateArr3: update(state.backStateArr3,{[e]:  {$set: true}}),
        backClassArr3: update(state.backClassArr3,{[e]:  {$set: "infoClass"}}),
        arrowId: [["idArrow","idArrow","idArrow","idArrow","idArrow","idArrow"],["idArrow","idArrow","idArrow","idArrow","idArrow","idArrow"],["idArrow","idArrow","idArrow","idArrow","idArrow","idArrow"],["idArrow","idArrow","idArrow","idArrow","idArrow","idArrow"],["idArrow","idArrow","idArrow","idArrow","idArrow","idArrow"],],
        servicesId: [["idServices","idServices","idServices","idServices","idServices","idServices"],["idServices","idServices","idServices","idServices","idServices","idServices"],["idServices","idServices","idServices","idServices","idServices","idServices"],["idServices","idServices","idServices","idServices","idServices","idServices"],["idServices","idServices","idServices","idServices","idServices","idServices"]],
      }))
    else
      this.setState((state, props) => ({
        backStateArr3: update(state.backStateArr3,{[e]:  {$set: false}}),
        backClassArr3: update(state.backClassArr3,{[e]:  {$set: ""}}),
      }))
  });
}
progressBarFunc1 = (e)=> {
  if (this.state.bar1 === 5) return(true)
  else return(false)
}
progressBarFunc2 = (e)=> {
  if (this.state.bar2 === 4) return(true)
  else return(false)
}
feedback = (e)=> {
  this.bar = 0;
  if (this.state.backStateArr === true) return(<div className="carsInfo2">
        <p id="left2">По какому виду страхования вопрос:</p>
        <table><tbody>
          {this.createUsersDataTable1()}
        </tbody></table>
        <p id="left2">Опишите Суть вопроса:</p>
        <textarea placeholder="Опишите интересующий Вас вопрос." value={this.state.text} onChange={(e)=>{this.changeValueTextFunc(e);}}></textarea>
        <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
        {(this.progressBarFunc1() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Отправить</button>):(<button className="insurButton2" onClick={(e)=>{this.createZayvka();}}>Отправить</button>)}
        {(this.state.check === true && this.state.bar1 < 5)?(<p className="check">Заполните все поля, чтобы отправить обращение!</p>):(null)}
  </div>)
  else  return(<div className="carsInfo2">
        <p id="left2">По какому виду страхования требуется консультация:</p>
        <table><tbody>
          {this.createUsersDataTable2()}
        </tbody></table>
        <p style={{margin: "0"}} id="checkboxPolit"><Checkbox defaultChecked /><span className="polit">Подтверждаю <span style={{color: "#3a7d87"}}> согласие на обработку моих персональных данных.</span> Я даю согласие на обработку указанных мной персональных данных в соответствии с <span style={{color: "#3a7d87"}}> Политикой в области обработки и защиты персональных данных.</span></span></p>
        {(this.progressBarFunc2() === false)?(<button className="insurButton2No" title="Заполните все поля" onClick={(e)=>{this.check(e);}}>Заказать консультацию</button>):(<button className="insurButton2" onClick={(e)=>{this.createZayvka();}}>Заказать консультацию</button>)}
        {(this.state.check === true && this.state.bar2 < 4)?(<p className="check">Заполните все поля, чтобы заказать консультацию!</p>):(null)}
  </div>)

}
changeValueTextFunc = (e, i) => {
  if (this.state.text === "") this.bar = 1;
  if (e.target.value === "") this.bar = -1;
  var value = e.target.value;
    this.setState((state, props) => ({
      text: value,
      bar1: state.bar1 + this.bar
    }))
}
changeValueFunc1 = (e, i) => {
  if (this.state.backInpArr1[i] === "") this.bar = 1;
  if (e.target.value === "") this.bar = -1;
  var value = e.target.value;
    this.setState((state, props) => ({
      backInpArr1: update(state.backInpArr1, {[i]:  {$set: value}}),
      bar1: state.bar1 + this.bar
    }))
}
changeValueFunc2 = (e, i) => {
  if (this.state.backInpArr2[i] === "") this.bar = 1;
  if (e.target.value === "") this.bar = -1;
  var value = e.target.value;
    this.setState((state, props) => ({
      backInpArr2: update(state.backInpArr2, {[i]:  {$set: value}}),
      bar2: state.bar2 + this.bar
    }))
}
createUsersDataTable1 = (e) => {
  var table = [];
  table=this.state.backArr1.map((obj,i)=> {
    if (i === 2)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.backInpArr1[i]} placeholder={this.state.backHolderArr1[i]} onChange={(e)=>{this.changeValueFunc1(e, i);}}></input></td><td>{(this.state.backInpArr1[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.backInpArr1[i]} placeholder={this.state.backHolderArr1[i]} onChange={(e)=>{this.changeValueFunc1(e, i);}}></input></td><td>{(this.state.backInpArr1[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
});
return table;
}
createUsersDataTable2 = (e) => {
  var table = [];
  table=this.state.backArr2.map((obj,i)=> {
    if (i === 2)return (<tr key={i}><td>{obj}</td><td><input type="number" value ={this.state.backInpArr2[i]} placeholder={this.state.backHolderArr2[i]} onChange={(e)=>{this.changeValueFunc2(e, i);}}></input></td><td>{(this.state.backInpArr2[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
    else return (<tr key={i}><td>{obj}</td><td><input type="text" value ={this.state.backInpArr2[i]} placeholder={this.state.backHolderArr2[i]} onChange={(e)=>{this.changeValueFunc2(e, i);}}></input></td><td>{(this.state.backInpArr2[i] !== "")?(<img src={ok} alt={ok} title="Поле заполнено"/>):(<img src={notok} alt={notok} title="Заполните поле"/>)}</td></tr>)
});
return table;
}
createZayvka = (e)=> {
  this.setState({
    backInpArr1: ["","","",""],
    backInpArr2: ["","","",""],
    text: "",
    bar1: 0,
    bar2: 0,
    zayvka: true
  })
}
check = (e)=> {
  this.setState({
    check: true
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
  if (this.state.backStateArr === true)
  return(<div className="zayvkaClass"><div><p id="idZa">Обращение отправлено!<span id="krest" onClick={(e)=>{this.closeZauvka(e);}}>&#215;</span></p>
  <p className="classZa">Скоро с Вами свяжется наш специалист, пожалуйста ожидайте.</p>
  <p className="classZa"><b style={{color: "#3a7d87"}}>Статус обращения</b> Вы можете отслеживать в личном кабинете.</p></div></div>)
  else return(<div className="zayvkaClass"><div><p id="idZa">Заказ консультации принят!<span id="krest" onClick={(e)=>{this.closeZauvka(e);}}>&#215;</span></p>
  <p className="classZa">В течение часа с Вами свяжется наш специалист, пожалуйста ожидайте.</p>
  <p className="classZa">Период ожидания звонка зависит от нагруженности операторов.</p>
  <p className="classZa">Спасибо за обращение!</p>
  </div></div>)
}
funcInfoCars = (e)=> {
  if (this.state.backStateArr3[0] === true) return 0;
  else if (this.state.backStateArr3[1] === true) return 1;
  else if (this.state.backStateArr3[2] === true) return 2;
  else if (this.state.backStateArr3[3] === true) return 3;
  else if (this.state.backStateArr3[4] === true) return 4;
}
createServicesFunc = (e)=> {
  var table = [];
  table=this.state.servicesArr[e].map((obj,i)=> {
    return(<div><div key={i} className="classServices" onClick={(z)=>{this.arrowChange(e, i);}}>
    <img id={this.state.arrowId[e][i]} src={arrow} alt={arrow}/>{obj}</div>
    {this.arrowContent(e, i)}
    </div>);
});
return table;
}
arrowChange = (e, i)=> {
  if (this.state.arrowId[e][i] === "idArrow") {this.idArrow = "idArrow2"; this.idServ = "idServices2";}
  else {this.idArrow = "idArrow"; this.idServ = "idServices";}
  this.state.arrowId[e].forEach((obj,k)=> {
    if (i === k)
      this.setState((state, props) => ({
        arrowId: update(state.arrowId, {[e]: {[i]: {$set: this.idArrow}}}),
        servicesId: update(state.servicesId, {[e]: {[i]: {$set: this.idServ}}}),
      }))
    else
      this.setState((state, props) => ({
        arrowId: update(state.arrowId, {[e]: {[k]: {$set: "idArrow"}}}),
        servicesId: update(state.servicesId, {[e]: {[k]: {$set: "idServices"}}}),
      }))
  });
}
arrowContent = (e, i) => {
  var table = [];
  table=this.state.infoArr[e].map((obj,k)=> {
    if (i === k) return(<div className="oppServ" id={this.state.servicesId[e][k]}>{obj}</div>)
    return(null)
  });
return table;
}

render(){

    return(<div className="PrivatePersons">
    <div className="dataTab">
    <div className="calcCars2">
      <div className="formCars2">
      <table><tbody>
        <tr>{this.createButtonsInfo()}</tr>
      </tbody></table>
        <div className="boxInfo1">{this.feedback()}</div>
      </div>
      <div className="infoCars2">
        <table><tbody>
          <tr>{this.createButtonsInfo2()}</tr>
          </tbody></table>
        <div className="boxInfo2">
        <h6 className="h6">Часто задаваемые вопросы</h6>
        <div className="services">{this.createServicesFunc(this.funcInfoCars())}</div>
        </div>
      </div>
    </div>
    </div>
    {(this.state.zayvka === true)?(this.zayavkaTime()):(null)}
    </div>)
  }
}

export default FeedBack;

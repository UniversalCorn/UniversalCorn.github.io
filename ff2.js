'use strict';

const pics = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg',
  '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg',
  '16.jpg', '17.jpg'];
const names = ['Лев', 'Гепард', 'Панда', 'Зебра', 'Слон', 'Обезьяна', 'Ёж',
  'Мышка', 'Лимур', 'Броненосец', 'Тукан', 'Рысь', 'Енот', 'Овечка', 'Пингвин',
  'Колибри' ];
  const back = ["url('background1.jpg')", "url('background2.jpg')", "url('background3.jpg')", "url('background4.jpg')", "url('background5.jpg')", "url('background6.jpg')", "url('background7.jpg')", "url('background8.jpg')", 
  "url('background9.jpg')", "url('background10.jpg')", "url('background11.jpg')", "url('background12.jpg')", "url('background13.jpg')", "url('background14.jpg')", "url('background15.jpg')", "url('background16.jpg')"];
let count = 0;

document.body.style.backgroundImage = 'background1.jpg'
document.body.style.backgroundSize = 'cover';

const figure = document.getElementsByTagName('figure')[0];
const x = (window.innerWidth / 2) - (figure.offsetWidth / 2) + 'px';
const y = (window.innerHeight / 3) - (figure.offsetHeight / 2) + 'px';
figure.style.position = 'absolute';
figure.style.left = x;
figure.style.top = y;

const figcap = document.getElementsByTagName('figcaption')[0];
const image = document.getElementsByTagName('img')[0];

const list = document.getElementsByTagName('ul')[0];
list.style.position = 'absolute';
list.style.left = '45%';//(window.innerWidth / 2) - (list.offsetWidth / 2) + 'px';
list.style.top = '10%';//window.innerHeight / 1.5 + 'px';
for (let i = 0; i < 3; i++) {
  document.getElementsByTagName('li')[i].style.display = 'block';
}

const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');

b1.innerText = 'Тигр';
b2.innerText = 'Лев';
b3.innerText = 'Медведь';

let i = 0;

const change = (str1, str2, str3, im, imstr, br, bw1, bw2) => {
  ++i;
  br.style.background = 'green';
  bw1.style.background = 'red';
  bw2.style.background = 'red';
  figcap.innerText = imstr;
  for (let i = 0; i < 3; i++) {
    document.getElementsByTagName('button')[i].setAttribute('disabled', '');
    document.getElementsByTagName('button')[i].style.color = 'black';
  }

  setTimeout(() => {
    document.body.style.backgroundImage = back[i];
    br.style.background = 'white';
    bw1.style.background = 'white';
    bw2.style.background = 'white';
    b1.innerText = str1;
    b2.innerText = str2;
    b3.innerText = str3;
    image.removeAttribute('src');
    image.setAttribute('src', im);
    figcap.innerText = '';
    for (let i = 0; i < 3; i++) {
      document.getElementsByTagName('button')[i].removeAttribute('disabled');
    }
  }, 1300);
};

const foo11 = () => {
  change('Гепард', 'Барс', 'Пантера', pics[1], names[0], b2, b1, b3);
};
const foo12 = () => {
  change('Гепард', 'Барс', 'Пантера', pics[1], names[0], b2, b1, b3);
  count++;
};

const foo21 = () => {
  change('Медведь', 'Коала', 'Панда', pics[2], names[1], b1, b2, b3);
};
const foo22 = () => {
  change('Медведь', 'Коала', 'Панда', pics[2], names[1], b1, b2, b3);
  count++;
};

const foo31 = () => {
  change('Лошадь', 'Жираф', 'Зебра', pics[3], names[2], b3, b1, b2);
};
const foo32 = () => {
  change('Лошадь', 'Жираф', 'Зебра', pics[3], names[2], b3, b1, b2);
  count++;
};

const foo41 = () => {
  change('Мамонт', 'Слон', 'Бегемот', pics[4], names[3], b3, b1, b2);
};
const foo42 = () => {
  change('Мамонт', 'Слон', 'Бегемот', pics[4], names[3], b3, b1, b2);
  count++;
};

const foo51 = () => {
  change('Обезьяна', 'Человек', 'Чупакабра', pics[5], names[4], b2, b1, b3);
};
const foo52 = () => {
  change('Обезьяна', 'Человек', 'Чупакабра', pics[5], names[4], b2, b1, b3);
  count++;
};

const foo61 = () => {
  change('Дикобраз', 'Крот', 'Ёж', pics[6], names[5], b1, b2, b3);
};
const foo62 = () => {
  change('Дикобраз', 'Крот', 'Ёж', pics[6], names[5], b1, b2, b3);
  count++;
};

const foo71 = () => {
  change('Мышь', 'Кот', 'Собака', pics[7], names[6], b3, b1, b2);
};
const foo72 = () => {
  change('Мышь', 'Кот', 'Собака', pics[7], names[6], b3, b1, b2);
  count++;
};

const foo81 = () => {
  change('Лимур', 'Тушканчик', 'Капибара', pics[8], names[7], b1, b2, b3);
};
const foo82 = () => {
  change('Лимур', 'Тушканчик', 'Капибара', pics[8], names[7], b1, b2, b3);
  count++;
};

const foo91 = () => {
  change('Крыса', 'Броненосец', 'Морская свинка', pics[9], names[8], b1, b2, b3);
};
const foo92 = () => {
  change('Крыса', 'Броненосец', 'Морская свинка', pics[9], names[8], b1, b2, b3);
  count++;
};

const foo101 = () => {
  change('Фламинго', 'Тукан', 'Дятел', pics[10], names[9], b2, b1, b3);
};
const foo102 = () => {
  change('Фламинго', 'Тукан', 'Дятел', pics[10], names[9], b2, b1, b3);
  count++;
};

const foo111 = () => {
  change('Рысь', 'Леопард', 'Гиена', pics[11], names[10], b2, b1, b3);
};
const foo112 = () => {
  change('Рысь', 'Леопард', 'Гиена', pics[11], names[10], b2, b1, b3);
  count++;
};

const foo121 = () => {
  change('Панда', 'Енот', 'Крот', pics[12], names[11], b1, b2, b3);
};
const foo122 = () => {
  change('Панда', 'Енот', 'Крот', pics[12], names[11], b1, b2, b3);
  count++;
};

const foo131 = () => {
  change('Козлёнок', 'Телёнок', 'Овечка', pics[13], names[12], b2, b1, b3);
};
const foo132 = () => {
  change('Козлёнок', 'Телёнок', 'Овечка', pics[13], names[12], b2, b1, b3);
  count++;
};

const foo141 = () => {
  change('Страус', 'Пингвин', 'Тюлень', pics[14], names[13], b3, b1, b2);
};
const foo142 = () => {
  change('Страус', 'Пингвин', 'Тюлень', pics[14], names[13], b3, b1, b2);
  count++;
};

const foo151 = () => {
  change('Воробей', 'Синичка', 'Колибри', pics[15], names[14], b2, b1, b3);
};
const foo152 = () => {
  change('Воробей', 'Синичка', 'Колибри', pics[15], names[14], b2, b1, b3);
  count++;
};

const foo161 = () => {
  change('Воробей', 'Синичка', 'Колибри', pics[16], names[14], b3, b1, b2);
  setTimeout(function () {
    let table = document.createElement('div');
    document.body.appendChild(table);
    table.style.width = '540px';
    table.style.height = '360px';
    table.style.background = 'lightyellow';
    table.style.position = 'relative';
    table.style.left = (window.innerWidth / 2) - (table.offsetWidth / 2) + 'px';
    table.style.top = (window.innerHeight / 3) - (table.offsetHeight / 2) + 'px';
    table.style.display = 'inline-block';
    table.style.padding = '10px';
    table.style.textAllign = 'center';
    table.style.fontSize = '30px';
    let span = document.createElement('span');
    table.appendChild(span);
    span.innerText = `Игра окончена. Ты набрала ${count} очков`;
    span.style.position = 'absolute';
    span.style.top = '20%';
    span.style.left = '5%';//(table.style.width/2) - (span.offsetWidth/2) + 'px'
    let finb = document.createElement('button');
    table.appendChild(finb);
    finb.innerText = 'OK';
    finb.style.position = 'absolute';
    finb.style.top = '60%';
    finb.style.left = (table.style.width/2) - (finb.offsetWidth)*2 + 'px';
    b1.parentNode.removeChild(b1);
    b2.parentNode.removeChild(b2);
    b3.parentNode.removeChild(b3);
    finb.addEventListener('click', function () {
      table.parentNode.removeChild(table);
    });
}, 1300);
};
const foo162 = () => {
  change('Воробей', 'Синичка', 'Колибри', pics[16], names[14], b3, b1, b2);
  count++;
  setTimeout(function () {
    let table = document.createElement('div');
    document.body.appendChild(table);
    table.style.width = '540px';
    table.style.height = '360px';
    table.style.background = 'lightyellow';
    table.style.position = 'relative';
    table.style.left = (window.innerWidth / 2) - (table.offsetWidth / 2) + 'px';
    table.style.top = (window.innerHeight / 3) - (table.offsetHeight / 2) + 'px';
    table.style.display = 'inline-block';
    table.style.padding = '10px';
    table.style.textAllign = 'center';
    table.style.fontSize = '30px';
    let span = document.createElement('span');
    table.appendChild(span);
    span.innerText = `Игра окончена. Ты набрала ${count} очков`;
    span.style.position = 'absolute';
    span.style.top = '20%';
    span.style.left = '5%';//(table.style.width/2) - (span.offsetWidth/2) + 'px'
    let finb = document.createElement('button');
    table.appendChild(finb);
    finb.innerText = 'OK';
    finb.style.position = 'absolute';
    finb.style.top = '60%';
    finb.style.left = (table.style.width/2) - (finb.offsetWidth)*2 + 'px';
    b1.parentNode.removeChild(b1);
    b2.parentNode.removeChild(b2);
    b3.parentNode.removeChild(b3);
    finb.addEventListener('click', function () {
      table.parentNode.removeChild(table);
    });
  }, 1300);
};



const otherPic = () => {
  //1
  if (i === 0) {
    b1.addEventListener('click', foo11);
    b2.addEventListener('click', foo12);
    b3.addEventListener('click', foo11);
  }

  //2
  if (i === 1) {
    b1.removeEventListener('click', foo11);
    b2.removeEventListener('click', foo12);
    b3.removeEventListener('click', foo11);
    b1.addEventListener('click', foo22);
    b2.addEventListener('click', foo21);
    b3.addEventListener('click', foo21);
  }

  if (i === 2) {
    b1.removeEventListener('click', foo22);
    b2.removeEventListener('click', foo21);
    b3.removeEventListener('click', foo21);
    b1.addEventListener('click', foo31);
    b2.addEventListener('click', foo31);
    b3.addEventListener('click', foo32);
  }

  if (i === 3) {
    b1.removeEventListener('click', foo31);
    b2.removeEventListener('click', foo31);
    b3.removeEventListener('click', foo32);
    b1.addEventListener('click', foo41);
    b2.addEventListener('click', foo41);
    b3.addEventListener('click', foo42);
  }

  if (i === 4) {
    b1.removeEventListener('click', foo41);
    b2.removeEventListener('click', foo41);
    b3.removeEventListener('click', foo42);
    b1.addEventListener('click', foo51);
    b2.addEventListener('click', foo52);
    b3.addEventListener('click', foo51);
  }

  if (i === 5) {
    b1.removeEventListener('click', foo51);
    b2.removeEventListener('click', foo52);
    b3.removeEventListener('click', foo51);
    b1.addEventListener('click', foo62);
    b2.addEventListener('click', foo61);
    b3.addEventListener('click', foo61);
  }

  if (i === 6) {
    b1.removeEventListener('click', foo62);
    b2.removeEventListener('click', foo61);
    b3.removeEventListener('click', foo61);
    b1.addEventListener('click', foo71);
    b2.addEventListener('click', foo71);
    b3.addEventListener('click', foo72);
  }

  if (i === 7) {
    b1.removeEventListener('click', foo71);
    b2.removeEventListener('click', foo71);
    b3.removeEventListener('click', foo72);
    b1.addEventListener('click', foo82);
    b2.addEventListener('click', foo81);
    b3.addEventListener('click', foo81);
  }

  if (i === 8) {
    b1.removeEventListener('click', foo82);
    b2.removeEventListener('click', foo81);
    b3.removeEventListener('click', foo81);
    b1.addEventListener('click', foo92);
    b2.addEventListener('click', foo91);
    b3.addEventListener('click', foo91);
  }

  if (i === 9) {
    b1.removeEventListener('click', foo92);
    b2.removeEventListener('click', foo91);
    b3.removeEventListener('click', foo91);
    b1.addEventListener('click', foo101);
    b2.addEventListener('click', foo102);
    b3.addEventListener('click', foo101);
  }

  if (i === 10) {
    b1.removeEventListener('click', foo101);
    b2.removeEventListener('click', foo102);
    b3.removeEventListener('click', foo101);
    b1.addEventListener('click', foo111);
    b2.addEventListener('click', foo112);
    b3.addEventListener('click', foo111);
  }

  if (i === 11) {
    b1.removeEventListener('click', foo111);
    b2.removeEventListener('click', foo112);
    b3.removeEventListener('click', foo111);
    b1.addEventListener('click', foo122);
    b2.addEventListener('click', foo121);
    b3.addEventListener('click', foo121);
  }

  if (i === 12) {
    b1.removeEventListener('click', foo122);
    b2.removeEventListener('click', foo121);
    b3.removeEventListener('click', foo121);
    b1.addEventListener('click', foo131);
    b2.addEventListener('click', foo132);
    b3.addEventListener('click', foo131);
  }

  if (i === 13) {
    b1.removeEventListener('click', foo131);
    b2.removeEventListener('click', foo132);
    b3.removeEventListener('click', foo131);
    b1.addEventListener('click', foo141);
    b2.addEventListener('click', foo141);
    b3.addEventListener('click', foo142);
  }

  if (i === 14) {
    b1.removeEventListener('click', foo141);
    b2.removeEventListener('click', foo141);
    b3.removeEventListener('click', foo142);
    b1.addEventListener('click', foo151);
    b2.addEventListener('click', foo152);
    b3.addEventListener('click', foo151);
  }

  if (i === 15) {
    b1.removeEventListener('click', foo151);
    b2.removeEventListener('click', foo152);
    b3.removeEventListener('click', foo151);
    b1.addEventListener('click', foo161);
    b2.addEventListener('click', foo161);
    b3.addEventListener('click', foo162);
  }
};

otherPic();

addEventListener('click', otherPic);

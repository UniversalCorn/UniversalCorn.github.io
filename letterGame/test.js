'use strict';
const sounds = [ 'a.mp3', 'b.mp3', 'v.mp3', 'g.mp3', 'd.mp3', 'ye.mp3',
  'yo.mp3', 'j.mp3', 'z.mp3', 'i.mp3', 'y.mp3', 'k.mp3', 'l.mp3', 'm.mp3',
  'n.mp3', 'o.mp3', 'p.mp3', 'r.mp3', 's.mp3', 't.mp3', 'u.mp3', 'f.mp3',
  'h.mp3', 'c.mp3', 'ch.mp3', 'sh.mp3', 'shch.mp3', 'tver.mp3', 'yy.mp3',
  'myag.mp3', 'e.mp3', 'yu.mp3', 'ya.mp3'];

const relation = [ ['Аа', 'a.mp3'], ['Бб', 'b.mp3'], ['Вв', 'v.mp3'],
  ['Гг', 'g.mp3'], ['Дд', 'd.mp3'], ['Ее', 'ye.mp3'], ['Ёё', 'yo.mp3'],
  ['Жж', 'j.mp3'], ['Зз', 'z.mp3'], ['Ии', 'i.mp3'], ['Йй', 'y.mp3'],
  ['Кк', 'k.mp3'], ['Лл', 'l.mp3'], ['Мм', 'm.mp3'], ['Нн', 'n.mp3'],
  ['Оо', 'o.mp3'], ['Пп', 'p.mp3'], ['Рр', 'r.mp3'], ['Сс', 's.mp3'],
  ['Тт', 't.mp3'], ['Уу', 'u.mp3'], ['Фф', 'f.mp3'], ['Хх', 'h.mp3'],
  ['Цц', 'c.mp3'], ['Чч', 'ch.mp3'], ['Шш', 'sh.mp3'], ['Щщ', 'shch.mp3'],
  ['Ъъ', 'tver.mp3'], ['Ыы', 'yy.mp3'], ['Ьь', 'myag.mp3'], ['Ээ', 'e.mp3'],
  ['Юю', 'yu.mp3'], ['Яя', 'ya.mp3'] ];

let right = 0;
let wrong = 0;
let picsAmount = 33;
const currentSound = new Audio();
currentSound.preload = 'auto';
currentSound.src = '';

import {back, backVert, rand, randBack, randVertBack} from './setBackAndRand.js';
import {menuColor, setMenuColor} from './setMenuColor.js';
setMenuColor();
import {setBackImage} from './setBackImage.js';
setBackImage(document.body);

let genderStr = 'F.mp3';
if (document.referrer.substr(document.referrer.length - 6) === 'r=Male') {
  genderStr = 'M.mp3';
  const url = window.location.protocol + '//' + window.location.host +
	window.location.pathname + '?gender=Male';
  window.history.replaceState({ path: url }, '', url);
} else if (document.referrer.substr(document.referrer.length - 6) ===
'Female') {
  genderStr = 'F.mp3';
  const url = window.location.protocol + '//' + window.location.host +
	window.location.pathname + '?gender=Female';
  window.history.replaceState({ path: url }, '', url);
}

setInterval(() => {
  if (window.innerWidth < window.innerHeight / 1.5) {
    for (let i = 0; i < 33; i++) {
      document.getElementsByClassName('letter')[i].style.transform =
      'scale(1.2)';
    }
  } else {
    for (let i = 0; i < 33; i++) {
      document.getElementsByClassName('letter')[i].style.transform =
      'scale(1)';
    }
  }

  if (window.innerWidth < window.innerHeight) {
    for (let i = 0; i < 33; i++) {
      document.getElementsByClassName('letter')[i].style.fontSize = '7vw';
    }
  } else {
    for (let i = 0; i < 33; i++) {
      document.getElementsByClassName('letter')[i].style.fontSize = '5vw';
    }
  }
}, 1);

import {createLetters} from './createLetters.js';
createLetters(picsAmount);

const menu = document.getElementById('menu');
menu.style.background = menuColor;
const playB = document.getElementsByTagName('img')[0];
playB.onmousedown = playButton();
const menuArrow = document.getElementById('menuArrow');
const settings = document.getElementById('settings');
menuArrow.addEventListener('click', () => {
  setTimeout(() => {
    settings.style.display = 'inline-block';
  }, window.innerWidth / 250);
  moveRight();
});
settings.addEventListener('click', () => {
  settings.style.display = 'none';
  menuArrow.style.pointerEvents = 'none';
  setTimeout(() => {
    menuArrow.style.pointerEvents = 'auto';
  }, window.innerWidth / 250);
  moveLeft();
});

const audioStart = new Audio();
audioStart.preload = 'auto';
audioStart.src = 'выбери' + genderStr;

function playButton() {
  return () => {
    menu.style.display = 'flex';
    playB.style.display = 'none';
    document.body.style.justifyContent = 'center';
    audioStart.play();
    setTimeout(() => {
      Question();
      for (let i = 0; i < 33; i++) {
        document.getElementsByClassName('letter')[i].style.display =
	'inline-block';
        document.getElementById('listen').style.display = 'inline-block';
        document.getElementById('settings').style.display = 'inline-block';
      }
    }, 2250);
  };
}

function moveLeft() {
  const start = Date.now();
  const timer = setInterval(() => {
    const timePassed = Date.now() - start;
    if (Number(menu.style.left.slice(0, -2)) <= 0) {
      menu.style.left = 0;
      clearInterval(timer);
      return;
    }
    drawLeft(timePassed);
  }, 0);
}

function moveRight() {
  const start = Date.now();
  const timer = setInterval(() => {
    const timePassed = Date.now() - start;
    if (Number(menu.style.left.slice(0, -2)) >= window.innerWidth) {
      menu.style.left = '100vw';
      clearInterval(timer);
      return;
    }
    drawRight(timePassed);
  }, 0);
}

function drawLeft(timePassed) {
  menu.style.left = -(timePassed * window.innerWidth / 250 -
  menu.offsetWidth) + 'px';
}

function drawRight(timePassed) {
  menu.style.left = timePassed * window.innerWidth / 250 + 'px';
}

const listen = document.getElementById('listen');
listen.addEventListener('click', () => {
  currentSound.play();
});

const pageClose = document.getElementById('pageClose');
pageClose.addEventListener('click', () => {
  window.history.go(-1);
});
const menuRepeat = document.getElementById('menuRepeat');
menuRepeat.addEventListener('click', () => {
  location.reload();
  //window.history.go(0);
  //window.history.replaceState({ path: 'https://universalcorn.github.io/letterGame/test.html' }, '', 'https://universalcorn.github.io/letterGame/test.html');
});

menu.style.left = '100vw';
menu.style.width = '100vw';
menu.style.height = '20vw';
for (let i = 0; i < 3; i++) {
  document.getElementsByClassName('menuImage')[i].style.height = '80%';
  document.getElementsByClassName('menuImage')[i].style.width =
	document.getElementsByClassName('menuImage')[i].style.height + 'px';
  document.getElementsByClassName('menuImage')[i].style.margin =  '0 8vw';
}

let staticWidth = '';
if (window.innerWidth < window.innerHeight / 2) {
  setInterval(() => {
    if (window.innerWidth < window.innerHeight / 2) {
      listen.style.width = '15.384615%';
      staticWidth = window.innerWidth * 0.15384615;
      listen.style.height = window.innerWidth / 6.5 + 'px';
      settings.style.width = '15.384615%';
      settings.style.height = window.innerWidth / 6.5 + 'px';
    } else if ((window.innerWidth >= window.innerHeight / 2) &&
		(window.innerWidth < window.innerHeight * 2)) {
      listen.style.width = staticWidth + 'px';
      listen.style.height = listen.style.width;
      settings.style.width = staticWidth + 'px';
      settings.style.height = listen.style.width;
    }  else {
      listen.style.width = staticWidth * 1.35 + 'px';
      listen.style.height = listen.style.width;
      settings.style.width = staticWidth * 1.35 + 'px';
      settings.style.height = listen.style.width;
    }
  }, 0);
} else if ((window.innerWidth >= window.innerHeight / 2) &&
(window.innerWidth < window.innerHeight)) {
  setInterval(() => {
    if (window.innerWidth < window.innerHeight / 2) {
      listen.style.width = '15.384615%';
      listen.style.height = window.innerWidth / 6.5 + 'px';
      settings.style.width = '15.384615%';
      settings.style.height = window.innerWidth / 6.5 + 'px';
    } else if ((window.innerWidth >= window.innerHeight / 2) &&
		(window.innerWidth < window.innerHeight)) {
      staticWidth = window.innerWidth / 2 * 0.15384615;
      listen.style.width = staticWidth + 'px';
      listen.style.height = listen.style.width;
      settings.style.width = staticWidth + 'px';
      settings.style.height = listen.style.width;
    } else if ((window.innerWidth >= window.innerHeight) &&
		(window.innerWidth < window.innerHeight * 2)) {
      listen.style.width = staticWidth / 1.2 + 'px';
      listen.style.height = listen.style.width;
      settings.style.width = staticWidth / 1.2 + 'px';
      settings.style.height = listen.style.width;
    } else {
      listen.style.width = staticWidth * 1.2 + 'px';
      listen.style.height = listen.style.width;
      settings.style.width = staticWidth * 1.2 + 'px';
      settings.style.height = listen.style.width;
    }
  }, 0);
} else if ((window.innerWidth >= window.innerHeight) &&
(window.innerWidth < window.innerHeight * 2)) {
  setInterval(() => {
    if (window.innerWidth < window.innerHeight / 2) {
      listen.style.width = '15.384615%';
      listen.style.height = window.innerWidth / 6.5 + 'px';
      settings.style.width = '15.384615%';
      settings.style.height = window.innerWidth / 6.5 + 'px';
    } else if ((window.innerWidth >= window.innerHeight / 2) &&
		(window.innerWidth < window.innerHeight)) {
      listen.style.width = staticWidth + 'px';
      listen.style.height = listen.style.width;
      settings.style.width = staticWidth + 'px';
      settings.style.height = listen.style.width;
    } else if ((window.innerWidth >= window.innerHeight) &&
		(window.innerWidth < window.innerHeight * 2)) {
      staticWidth = window.innerWidth / 2 * 0.15384615;
      listen.style.width = staticWidth / 1.2 + 'px';
      listen.style.height = listen.style.width;
      settings.style.width = staticWidth / 1.2 + 'px';
      settings.style.height = listen.style.width;
    } else {
      listen.style.width = staticWidth * 1.2 + 'px';
      listen.style.height = listen.style.width;
      settings.style.width = staticWidth * 1.2 + 'px';
      settings.style.height = listen.style.width;
    }
  }, 0);
} else {
  setInterval(() => {
    if (window.innerWidth < window.innerHeight / 2) {
      listen.style.width = '15.384615%';
      listen.style.height = window.innerWidth / 6.5 + 'px';
      settings.style.width = '15.384615%';
      settings.style.height = window.innerWidth / 6.5 + 'px';
    } else if ((window.innerWidth >= window.innerHeight / 2) &&
		(window.innerWidth < window.innerHeight * 2)) {
      listen.style.width = staticWidth + 'px';
      listen.style.height = listen.style.width;
      settings.style.width = staticWidth + 'px';
      settings.style.height = listen.style.width;
    } else {
      staticWidth = window.innerWidth / 4 * 0.15384615;
      listen.style.width = staticWidth * 1.5 + 'px';
      listen.style.height = listen.style.width;
      settings.style.width = staticWidth * 1.5 + 'px';
      settings.style.height = listen.style.width;
    }
  }, 0);
}

const letterSound = new Audio();
audioStart.preload = 'auto';
let rememberSound = '';

let rememberMas = [];
let rightSum = 0;
let wrongSum = 0;
function Question() {
  if (picsAmount === 0) {
    const audioFinish = new Audio();
    audioFinish.preload = 'auto';
    audioFinish.src = 'molodec' + genderStr;
    rememberMas = rememberMas.map((val, i) => (i!=0 && val == rememberMas[i-1]) ? 0 : 1 );
    wrongSum = rememberMas.reduce((acc, val) => acc + val, 0);
    rightSum = right;
    const points = rightSum - wrongSum + 1;
    setTimeout(() => {
      const panel = document.createElement('div');
      document.body.appendChild(panel);
      setInterval(() => {
        if (window.innerWidth < window.innerHeight) {
          panel.style.width = '70%';
          panel.style.height = window.innerWidth / 10 * 7 + 'px';
          panel.style.fontSize = window.innerWidth / 15 + 'px';
        } else {
          panel.style.height = '70%';
          panel.style.width = window.innerHeight / 10 * 7 + 'px';
          panel.style.fontSize = window.innerHeight / 15 + 'px';
        }
      }, 0);
      panel.style.textAlign = 'center';
      document.body.style.justifyContent = 'center';
      panel.innerText = `Ты набрал(а) ${points}`;
      if (points % 100 === 11) {
        panel.innerText += ' очков.';
      } else if ((points % 10 === 1) && (points % 100 !== 11)) {
        panel.innerText += ' очко.';
      } else if ((points % 10 === 2) || (points % 10 === 3) ||
			(points % 10 === 4)) {
        panel.innerText += ' очка.';
      } else if ((points % 10 === 5) || (points % 10 === 6) ||
			(points % 10 === 7) || (points % 10 === 8) ||
			(points % 10 === 9) || (points % 10 === 0)) {
        panel.innerText += ' очков.';
      }

      if (points <= 1) {
        panel.innerText += ' Тренируйся ещё.';
        panel.style.background = 'rgba(250, 50, 50, 0.5)';
      } else {
        panel.innerText += ' Молодец!'
        audioFinish.play();
        panel.style.background = 'rgba(50, 250, 50, 0.5)';
      }
      const br = document.createElement('br');
      panel.appendChild(br);
      const getBack = document.createElement('img');
      panel.appendChild(getBack);
      getBack.src = 'back.png';
      getBack.setAttribute('id', 'getBack');
      getBack.addEventListener('click', () => {
        window.history.go(-1);
      });
    }, 1000);
  } else {
    letterSound.src = sounds[Math.floor(Math.random() *
    (sounds.length - 1))].replace(/^.*[\\\/]/, '').slice(0, -4) +
    genderStr;
    const fileName = letterSound.src.replace(/^.*[\\\/]/, '');
    letterSound.play();
    for (let i = 0; i < sounds.length; i++) {
      if (fileName === sounds[i].slice(0, -4) + genderStr) {
        rememberSound = sounds[i];
        currentSound.src = sounds[i].slice(0, -4) + genderStr;
        if (relation[i][1] === rememberSound) {
          rememberSound = relation[i][0];
        }
        sounds.splice(i, 1);
        relation.splice(i, 1);
      }
    }
    for (let i = 0; i < 33; i++) {
      if (document.getElementsByClassName('letter')[i].innerText ===
      rememberSound) {
        document.getElementsByClassName('letter')[i].addEventListener('click', () => {
          document.getElementsByClassName('letter')[i].style.background = 'rgba(50, 250, 50, 0.5)';
          document.getElementsByClassName('letter')[i].style.outline = '2vw solid rgba(50, 250, 50, 0.5)';
          right+=1;
          wrong = wrong - (33 - picsAmount);
          picsAmount--;
          setTimeout(() => {
            document.getElementsByClassName('letter')[i].style.display = 'none';
          }, 500);
          setTimeout(() => {
            Question();
          }, 1000);
        });
      }
      else { document.getElementsByClassName('letter')[i].addEventListener('click', () => {
          document.getElementsByClassName('letter')[i].style.background = 'rgba(250, 50, 50, 0.5)';
          document.getElementsByClassName('letter')[i].style.outline = '2vw solid rgba(250, 50, 50, 0.5)';
          wrong = wrong + 1;
          setTimeout(() => {
            document.getElementsByClassName('letter')[i].style.background = 'transparent';
            document.getElementsByClassName('letter')[i].style.outline = '0 solid transparent';
          }, 500);
        });
      }
    }
    rememberMas.push(wrong);
  }
}

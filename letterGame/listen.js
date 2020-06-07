'use strict';
const sounds = ['a.mp3', 'b.mp3', 'v.mp3', 'g.mp3', 'd.mp3', 'ye.mp3', 'yo.mp3',
  'j.mp3', 'z.mp3', 'i.mp3', 'y.mp3', 'k.mp3', 'l.mp3', 'm.mp3', 'n.mp3',
  'o.mp3', 'p.mp3', 'r.mp3', 's.mp3', 't.mp3', 'u.mp3', 'f.mp3', 'h.mp3',
  'c.mp3', 'ch.mp3', 'sh.mp3', 'shch.mp3', 'tver.mp3', 'yy.mp3', 'myag.mp3',
  'e.mp3', 'yu.mp3', 'ya.mp3'];

let obj = {};
for (let i = 0; i <= picsAmount; i++) {
      obj = document.createElement('div');
      obj.innerText = String.fromCharCode(i + 1072);
      document.body.appendChild(obj);
      obj.setAttribute('class', 'letter');
}

const picsAmount = 33;

const back = ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg'];
const backVert = ['b1vert.jpg', 'b2vert.jpg', 'b3vert.jpg', 'b4vert.jpg'];

const rand = Math.floor(Math.random() * back.length);
const randBack = back[rand];
const randVertBack = backVert[rand];

if (rand === 0) {
  document.body.setAttribute('class', 'first');
} else if (rand === 1) {
  document.body.setAttribute('class', 'second');
} else if (rand === 2) {
  document.body.setAttribute('class', 'third');
} else {
  document.body.setAttribute('class', 'fourth');
}

let genderStr = 'F.mp3';
if (document.referrer ===
'https://universalcorn.github.io/letterGame/main.html?gender=Male') {
  genderStr = 'M.mp3';
} else if (document.referrer ===
'https://universalcorn.github.io/letterGame/main.html?gender=Female') {
  genderStr = 'F.mp3';
}

setInterval(() => {
  if (window.innerWidth < window.innerHeight) {
    document.body.style.backgroundImage = `url(${randVertBack})`;
  }
  else {
    document.body.style.backgroundImage = `url(${randBack})`;
  }

  if (window.innerWidth < window.innerHeight / 1.5) {
    for (let i = 0; i < picsAmount; i++) {
      document.getElementsByClassName('letter')[i].style.transform =
	'scale(1.2)';
    }
  } else {
    for (let i = 0; i < picsAmount; i++) {
      document.getElementsByClassName('letter')[i].style.transform =
	'scale(1)';
    }
  }
}, 1);

const audioStart = new Audio();
audioStart.preload = 'auto';
audioStart.src = 'нажми' + genderStr;

const playB = document.getElementById('play');
playB.onmousedown = playButton();

function playButton() {
  return function() {
    for (let i = 0; i <= picsAmount; i++) {
      document.getElementsByClassName('letter')[i].style.display =
	'inline-block';
      playB.style.display = 'none';
      setTimeout(() => {
        audioStart.play();
      }, 500);
    }
  };
}

function playAudio(strAudio) {
  return function() {
    const audio = new Audio();
    audio.preload = 'auto';
    audio.src = strAudio;
    audio.play();
  };
}

function goBack() {
  return function() {
    window.history.go(-1);
  };
}

const backButton = document.getElementById('back');
backButton.onmousedown = goBack();

for (let i = 0; i < picsAmount; i++) {
  document.querySelectorAll('.letter')[i].onmousedown =
  playAudio(sounds[i].replace(/^.*[\\\/]/, '').slice(0, -4) + genderStr);
}

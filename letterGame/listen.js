'use strict';
const sounds = ['a.mp3', 'b.mp3', 'v.mp3', 'g.mp3', 'd.mp3', 'ye.mp3', 'yo.mp3',
  'j.mp3', 'z.mp3', 'i.mp3', 'y.mp3', 'k.mp3', 'l.mp3', 'm.mp3', 'n.mp3',
  'o.mp3', 'p.mp3', 'r.mp3', 's.mp3', 't.mp3', 'u.mp3', 'f.mp3', 'h.mp3',
  'c.mp3', 'ch.mp3', 'sh.mp3', 'shch.mp3', 'tver.mp3', 'yy.mp3', 'myag.mp3',
  'e.mp3', 'yu.mp3', 'ya.mp3'];

const picsAmount = 33;

import {back, backVert, rand, randBack, randVertBack} from './setBackAndRand.js';
import {createLetters} from './createLetters.js';
createLetters(picsAmount);
import {genderStr, setGender} from './setGender.js';
setGender();

const theme = {
  0: 'first',
  1: 'second',
  2: 'third',
  3: 'fourth',
};
document.body.setAttribute('class', theme[rand]);

setInterval(() => {
  if (window.innerWidth < window.innerHeight) {
    document.body.style.backgroundImage = `url(${randVertBack})`;
  } else {
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

for (let i = 1; i <= picsAmount; i++) {
  document.querySelectorAll('.letter')[i].onmousedown =
  playAudio(sounds[i - 1].replace(/^.*[\\\/]/, '').slice(0, -4) + genderStr);
}

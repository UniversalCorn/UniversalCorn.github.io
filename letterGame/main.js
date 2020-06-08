'use strict'
const links = ['listen.html', 'test.html', 'guess.html'];

const container = document.getElementById('container');

import {back, backVert, rand, randBack, randVertBack} from './setBackAndRand.js';
import {menuColor, setMenuColor} from './setMenuColor.js';
setMenuColor();
import {setBackImage} from './setBackImage.js';
setBackImage(container);

window.scrollTo(0, document.body.scrollHeight);

const headliner = document.getElementById('headliner');
const divisor = 250;

headliner.style.background = 'rgba(256, 64, 64, 0.7)';
headliner.style.left = -headliner.offsetWidth + 'px';
setInterval(() => {
  headliner.style.top = window.innerHeight / 2 -
  headliner.offsetHeight / 2 + 'px';
}, 0);

function moveOuter() {
  const start = Date.now();
  const timer = setInterval(() => {
    const timePassed = Date.now() - start;
    if ((Number((headliner.style.left).slice(0, -2))) >
	((window.innerWidth / 2) - (headliner.offsetWidth / 2))) {
      setTimeout(() => {
        moveInner();
      }, 1500);
      clearInterval(timer);
      return;
    }
    draw(timePassed);
  }, 10);
}

moveOuter();

function moveInner() {
  const innerStart = Date.now();
  const innerTimer = setInterval(() => {
    const innerTimePassed = Date.now() - innerStart;
    if (Number((headliner.style.left).slice(0, -2)) > window.innerWidth) {
      clearInterval(innerTimer);
      headliner.parentNode.removeChild(headliner);
      return;
    }
    drawInner(innerTimePassed);
  }, 10);
}

function draw(timePassed) {
  headliner.style.left = (timePassed * 2)  - headliner.offsetWidth + 'px';
}

function drawInner(timePassed) {
  headliner.style.left = (timePassed * 2) +
  window.innerWidth / 2 - headliner.offsetWidth / 2 + 'px';
}

const settings = document.getElementById('settings');

setInterval(() => {
  if (window.innerWidth < window.innerHeight) {
    container.style.flexDirection = 'column';
    settings.style.width = '15vw';
    settings.style.height = settings.style.width;
  } else {
    container.style.flexDirection = 'row';
    settings.style.width = '8vw';
    settings.style.height = settings.style.width;
  }

  if (window.innerWidth < window.innerHeight / 1.5) {
    for (let i = 0; i < 3; i++) {
      document.getElementsByTagName('img')[i].style.transform = 'scale(2)';
    }
  } else {
    for (let i = 0; i < 3; i++) {
      document.getElementsByTagName('img')[i].style.transform = 'scale(1.2)';
    }
  }
}, 0);

function mouseDown(target, strLink) {
  return function() {
    window.location.href = strLink;
  };
}

const menu = document.getElementById('menu');
menu.style.left = '100vw';
menu.style.background = menuColor;

const aside = document.getElementsByClassName('aside')[0];

const menuArrow = document.getElementById('menuArrow');

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
  menu.style.left = -(timePassed * window.innerWidth / divisor -
  menu.offsetWidth) + 'px';
}

function drawRight(timePassed) {
  menu.style.left = timePassed * window.innerWidth / divisor + 'px';
}

settings.style.position = 'fixed';
settings.style.right = '0.5vw';
settings.style.bottom = '0.5vw';
settings.addEventListener('click', () => {
  menuArrow.style.pointerEvents = 'none';
  setTimeout(() => {
    menuArrow.style.pointerEvents = 'auto';
  }, window.innerWidth / divisor);
  moveLeft();
});

setInterval(() => {
  menuArrow.style.width = aside.offsetWidth * 0.8 + 'px';
  menuArrow.style.height = menuArrow.style.width;
  menuArrow.style.left = aside.offsetWidth / 2 -
	menuArrow.offsetWidth / 2 + 'px';
  menuArrow.style.top = aside.offsetHeight / 2 -
	menuArrow.offsetHeight / 2 + 'px';
 /* if (window.innerWidth < window.innerHeight) {
    document.getElementsByClassName('main')[0].style.fontSize = '8vw';
    document.getElementById('womanSpan').style.fontSize = '8vw';
    document.getElementById('manSpan').style.fontSize = '8vw';
    document.getElementsByClassName('innerTumbler')[0].style.flexDirection =
    'column';
    document.getElementsByClassName('innerTumbler')[0].style.alignItems =
    'center';
    document.getElementsByClassName('switch')[0].style.transform =
    'rotate(90deg)';
    document.getElementsByClassName('switch')[0].style.bottom = '0';
    document.getElementsByClassName('check')[0].style.height = '45%';
    document.getElementsByClassName('tumbler')[0].style.height = '45%';
    document.getElementById('womanSpan').style.marginBottom = '5vw';
    document.getElementById('manSpan').style.marginTop = '5vw';
  } else {
    document.getElementsByClassName('main')[0].style.fontSize = '5vw';
    document.getElementById('womanSpan').style.fontSize = '3vw';
    document.getElementById('manSpan').style.fontSize = '3vw';
    document.getElementsByClassName('innerTumbler')[0].style.flexDirection =
    'row';
    document.getElementsByClassName('innerTumbler')[0].style.alignItems =
    'center';
    document.getElementsByClassName('switch')[0].style.transform =
    'rotate(0deg)';
    document.getElementsByClassName('switch')[0].style.bottom = '3vw';
    document.getElementsByClassName('check')[0].style.height = '35%';
    document.getElementsByClassName('tumbler')[0].style.height = '55%';
    document.getElementById('womanSpan').style.marginTop = '0';
    document.getElementById('womanSpan').style.marginBottom = '5vw';
    document.getElementById('manSpan').style.marginTop = '0';
    document.getElementById('manSpan').style.marginBottom = '5vw';
  }*/
}, 0);
menuArrow.addEventListener('click', () => {
  menuArrow.style.pointerEvents = 'none';
  setTimeout(() => {
    menuArrow.style.pointerEvents = 'auto';
  }, window.innerWidth);
  moveRight();
});

const checkAudio = new Audio();
checkAudio.preload = 'auto';
checkAudio.src = 'check.mp3';

const listen = document.getElementById('listen');
listen.style.width = '8vw';
listen.style.height = listen.style.width;
listen.addEventListener('click', () => {
  checkAudio.play();
});

for (let i = 0; i < 3; i++) {
  document.getElementsByTagName('img')[i].onmousedown =
  mouseDown(document.getElementsByTagName('img')[i], links[i]);
}

let url = '';
$(document).ready(function() {
  $('input[type="checkbox"]').click(function() {
      if($(this).prop("checked") == true) {
          url = window.location.protocol + "//" + window.location.host +
	  window.location.pathname + '?gender=Male';    
      }
      else if($(this).prop("checked") == false) {
         url = window.location.protocol + "//" + window.location.host +
	 window.location.pathname + '?gender=Female';
      }
      window.history.pushState({ path: url }, '', url);
  });
});

function checkFirstVisit() {
  if (document.cookie.indexOf('mycookie') == -1) {
    document.cookie = 'mycookie=1';
    headliner.style.display = 'block';
  } else {
    headliner.style.display = 'none';
  }
}

checkFirstVisit();

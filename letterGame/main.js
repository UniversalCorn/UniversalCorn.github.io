const links = ['listen.html', 'test.html', 'guess.html'];

const back = ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg'];
const backVert = ['b1vert.jpg', 'b2vert.jpg', 'b3vert.jpg', 'b4vert.jpg'];

const rand = Math.floor(Math.random() * back.length);
const randBack = back[rand];
const randVertBack = backVert[rand];

const container = document.getElementById('container');

let menuColor = '';
if (rand === 0) {
  menuColor = 'rgba(18, 42, 128, 0.9)';
} else if (rand === 1) {
  menuColor = 'rgba(128, 122, 138, 0.9)';
} else if (rand === 2) {
  menuColor = 'rgba(34, 136, 256, 0.9)';
} else {
  menuColor = 'rgba(82, 96, 256, 0.9)';
}

window.scrollTo(0, document.body.scrollHeight);

const headliner = document.getElementById('headliner');

if ((document.referrer === 'https://universalcorn.github.io/letterGame/listen.html') ||
(document.referrer === 'https://universalcorn.github.io/letterGame/test.html') ||
(document.referrer === 'https://universalcorn.github.io/letterGame/guess.html')) {
  headliner.style.display = 'none';
} else {
  headliner.style.display = 'block';
}

headliner.style.background = 'rgba(256, 64, 64, 0.7)';
headliner.style.left = -headliner.offsetWidth + 'px';
setInterval(() => {
  headliner.style.top = window.innerHeight / 2 -
	headliner.offsetHeight / 2 + 'px';
  if (window.innerWidth < window.innerHeight) {
    headliner.style.width = '60%';
    container.style.backgroundImage = `url(${randVertBack})`;
  } else {
    headliner.style.width = '40%';
    container.style.backgroundImage = `url(${randBack})`;
  }
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

function MoveLeft() {
  const start = Date.now();
  const timer = setInterval(() => {
    const timePassed = Date.now() - start;
    if (Number(menu.style.left.slice(0, -2)) <= 0) {
      menu.style.left = 0;
      clearInterval(timer);
      return;
    }
    DrawLeft(timePassed);
  }, 0);
}

function MoveRight() {
  const start = Date.now();
  const timer = setInterval(() => {
    const timePassed = Date.now() - start;
    if (Number(menu.style.left.slice(0, -2)) >= window.innerWidth) {
      menu.style.left = '100vw';
      clearInterval(timer);
      return;
    }
    DrawRight(timePassed);
  }, 0);
}

function DrawLeft(timePassed) {
  menu.style.left = -(timePassed * window.innerWidth / 250 -
		menu.offsetWidth) + 'px';
}

function DrawRight(timePassed) {
  menu.style.left = timePassed * window.innerWidth / 250 + 'px';
}

settings.style.position = 'fixed';
settings.style.right = '0.5vw';
settings.style.bottom = '0.5vw';
settings.addEventListener('click', () => {
  menuArrow.style.pointerEvents = 'none';
  setTimeout(() => {
    menuArrow.style.pointerEvents = 'auto';
  }, window.innerWidth / 250);
  MoveLeft();
});

setInterval(() => {
  menuArrow.style.width = aside.offsetWidth * 0.8 + 'px';
  menuArrow.style.height = menuArrow.style.width;
  menuArrow.style.left = aside.offsetWidth / 2 -
	menuArrow.offsetWidth / 2 + 'px';
  menuArrow.style.top = aside.offsetHeight / 2 -
	menuArrow.offsetHeight / 2 + 'px';
  if (window.innerWidth < window.innerHeight) {
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
  }
}, 0);
menuArrow.addEventListener('click', () => {
  menuArrow.style.pointerEvents = 'none';
  setTimeout(() => {
    menuArrow.style.pointerEvents = 'auto';
  }, window.innerWidth);
  MoveRight();
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
$(document).ready(() => {
  $('input[type="checkbox"]').click(() => {
    if ($(this).prop('checked') === true) {
      url = window.location.protocol + '//' + window.location.host +
			window.location.pathname + '?gender=Male';
    } else if ($(this).prop('checked') === false) {
      url = window.location.protocol + '//' + window.location.host +
			window.location.pathname + '?gender=Female';
    }
    window.history.replaceState({ path: url }, '', url);
  });
});

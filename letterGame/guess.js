let ratio = {
	'apelsin':'апельсин',
	'dom':'дом',
	'giraffe':'жираф',
	'kot':'кот',
	'kurica': 'курица',
	'limon':'лимон',
	'derevo':'дерево ',
	'planshet':'планшет',
	'sobaka':'собака',
	'solnce':'солнце',
	'cwietok':'цветок',
	'chashka':'чашка',
	'shokolad': 'шоколад',
	'oduvanchik': 'одуванчик',
	'kukla': 'кукла',
	'roza': 'роза',
	'morozhenoe': 'мороженое',
	'mesyac': 'месяц',
}

let imageAmount = Object.keys(ratio).length;
let imageTopPosition = 0;

let back = ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg'];
let backVert = ['b1vert.jpg', 'b2vert.jpg', 'b3vert.jpg', 'b4vert.jpg'];

let rand = Math.floor(Math.random() * back.length);
let randBack = back[rand];
let randVertBack = backVert[rand];

if (rand === 0) {
	document.body.setAttribute('class', 'first');
}
else if (rand === 1) {
	document.body.setAttribute('class', 'second');
}
else if (rand === 2) {
	document.body.setAttribute('class', 'third');
}
else {
	document.body.setAttribute('class', 'fourth');
}

let genderStr = 'F.mp3';
if (document.referrer === 'https://universalcorn.github.io/letterGame/main.html?gender=Male') {
	genderStr = 'M.mp3';
}
else if (document.referrer === 'https://universalcorn.github.io/letterGame/main.html?gender=Female') {
	genderStr = 'F.mp3'; 
}


let container = document.getElementById('container');

setInterval(function() {
	if (window.innerWidth < window.innerHeight) {
		container.style.backgroundImage = `url(${randVertBack})`;
		document.body.style.backgroundImage = `url(${randVertBack})`;
		for (let i = 0; i < imageAmount; i++) {
			document.querySelectorAll('img')[i].style.width = '45vw';
			document.querySelectorAll('img')[i].style.height = '45vw';
		}
	}
	else {
		container.style.backgroundImage = `url(${randBack})`;
		document.body.style.backgroundImage = `url(${randBack})`;
		for (let i = 0; i < imageAmount; i++) {
			document.querySelectorAll('img')[i].style.width = '30vw';
			document.querySelectorAll('img')[i].style.height = '30vw';
		}
	}
}, 0);

let close = document.getElementById('close');
close.style.position = 'fixed';
close.style.right = '1vw';
close.style.top = '-2vw';
close.addEventListener('click', function() {
	window.location.href = document.referrer;
});


function mouseOver (target) {
	return function() {
		target.style.cursor = 'pointer';
	}
}


for (let i = 0; i < imageAmount; i++) {
	document.getElementsByTagName('img')[i].style.display = 'inline-block';
	document.getElementsByTagName('img')[i].style.border = '0.5vw solid #e75480';
	document.getElementsByTagName('img')[i].style.background = 'rgba(0, 0, 0, 0.3)';
}


setInterval( function() {
	if (window.innerWidth < window.innerHeight) {
			close.style.width = '16%';
			close.style.height = window.innerWidth/6.25 + 'px';
		}
	else {
		close.style.height = '16%';
		close.style.width = window.innerHeight/6.25 + 'px';
	}
}, 0);

function mouseClick(image) {
	imageTopPosition = image.getBoundingClientRect().top;
	for (let i = 0; i < imageAmount; i++) {
		document.getElementsByTagName('img')[i].style.display = 'none';
	}
	let big = document.createElement('div');
	container.appendChild(big);
	big.style.background = 'rgba(255, 255, 255, 0.5)';
	let innerImage = document.createElement('img');
	let closeImage = document.createElement('img');
	let listenImage = document.createElement('img');
	let text = document.createElement('p');
	big.appendChild(innerImage);
	big.appendChild(closeImage);
	big.appendChild(listenImage);
	container.appendChild(text);
	container.style.flexDirection = 'column';
	container.style.justifyContent = 'center';	
	big.style.display = 'inline-block'
	big.style.border = '1vw solid #e75480';
	big.style.position = 'relative';

	innerImage.src = image.src;
	innerImage.setAttribute('id', 'inner');
	innerImage.style.margin = '0';
	innerImage.style.width = '100%'
	innerImage.style.height = '100%';
	innerImage.position = 'absolute';

	closeImage.src = 'close.png';
	setInterval(function() {
		if (window.innerWidth < window.innerHeight) {
			big.style.width = '70%';
			big.style.height = window.innerWidth/10*7 + 'px';
			closeImage.style.width = '12.5%';
			closeImage.style.height = big.offsetWidth/8 + 'px';
			listenImage.style.width = '12.5%';
			listenImage.style.height = big.offsetWidth/8 + 'px';		
		}
		else {
			big.style.height = '70%';
			big.style.width = window.innerHeight/10*7 + 'px';
			closeImage.style.height = '12.5%';
			closeImage.style.width = big.offsetHeight/8 + 'px';
			listenImage.style.height = '12.5%';
			listenImage.style.width = big.offsetHeight/8 + 'px';
		}
		big.style.borderWidth = big.offsetWidth/30 + 'px';	
		text.style.fontSize = big.offsetHeight/5 + 'px';
	},0);
	
	closeImage.setAttribute('id', 'closeImage');
	closeImage.style.position = 'absolute';
	closeImage.style.margin = '0';
	closeImage.style.right = '2%';
	closeImage.style.top = '2%';
	closeImage.onmouseover = mouseOver(closeImage);
	closeImage.addEventListener('click', function(){
		container.style.flexDirection = 'row';
		container.style.justifyContent = 'center';
		big.style.display = 'none';
		big.parentNode.removeChild(big);
		text.parentNode.removeChild(text);
		container.style.justifyContent = 'space-around';	
		for (let i = 0; i < imageAmount; i++) {
			document.getElementsByTagName('img')[i].style.display = 'inline-block';
		}
	});
	$("#closeImage").click(function(){
		$([document.documentElement, document.body]).animate({scrollTop: $(`#${image.src.replace(/^.*[\\\/]/, '').slice(0,-4)}`).offset().top - imageTopPosition}, 0);
 	});

	listenImage.src = 'listen.png';
	listenImage.style.position = 'absolute';
	listenImage.style.left = '2%';
	listenImage.style.bottom = '-2.5vw';
	listenImage.onmouseover = mouseOver(listenImage);

	text.style.margin = '0';

	let wordAudio = new Audio();
	wordAudio.preload = 'auto';
	let fileName = image.src.replace(/^.*[\\\/]/, '');
	wordAudio.src = fileName.slice(0, -4) + genderStr;
	listenImage.addEventListener('click', function() {
		wordAudio.play();
	});
	for (let key in ratio) {
		if (key === fileName.slice(0, -4)) {
			text.innerText = ratio[key];
		}
	}
}

let apelsin = document.querySelectorAll('img')[0];

for (let i = 0; i < imageAmount; i++) {
	document.querySelectorAll('img')[i].onclick = function() {
		mouseClick(document.querySelectorAll('img')[i]);
	}
}

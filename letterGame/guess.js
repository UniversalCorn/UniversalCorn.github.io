/*let relations = [ ['apelsin', 'апельсин'], ['dom', 'дом'], ['giraffe', 'жираф'],
['kot', 'кот'], ['kurica', 'курица'], ['limon', 'лимон'], ['multiki', 'мультики'], ['planshet', 'планшет'],
['sobaka', 'собака'] , ['ukraine', 'Украина'] , ['cwietok', 'цветок'] , ['chashka', 'чашка'] ];*/

 /*let pics = ['апельсин.png', 'дом.png', 'жираф.png', 'кот.png', 'курица.png', 'лимон.png', 'мультики.jpg', 'планшет.png', 'собака.png',
  'украина.png', 'цветок.png', 'чашка.png'];*/

let ratio = {
	'apelsin':'апельсин',
	'dom':'дом',
	'giraffe':'жираф',
	'kot':'кот',
	'kurica': 'курица',
	'limon':'лимон',
	'multiki':'мультики',
	'planshet':'планшет',
	'sobaka':'собака',
	'ukraine':'Украина',
	'cwietok':'цветок',
	'chashka':'чашка',

}

  let container = document.getElementById('container');
  container.style.background = 'lightpink';

  function mouseOver (target) {
	return function() {
		target.style.cursor = 'pointer';
	}
}

function mouseOut (target) {
	return function() {
		target.style.cursor = 'default';
	}
}

setInterval(function() {
	if (window.innerWidth < window.innerHeight) {
		container.style.flexDirection = 'row';
	}
	else {
		container.style.flexDirection = 'column';
	}
}, 0);

for (let i = 0; i < 12; i++) {
		document.getElementsByTagName('img')[i].style.display = 'inline-block';
	}

function mouseClick(image) {
	for (let i = 0; i < 12; i++) {
		document.getElementsByTagName('img')[i].style.display = 'none';
	}
	let big = document.createElement('div');
	document.body.appendChild(big);
	big.style.width = '45vw';
	big.style.height = '45vw';
	big.style.position = 'absolute';
	big.style.left = window.innerWidth/2 - big.offsetWidth/2 + 'px';
	big.style.top = window.innerHeight/2 - big.offsetHeight/2 + 'px';
	let innerImage = document.createElement('img');
	let closeImage = document.createElement('img');
	let listenImage = document.createElement('img');
	let text = document.createElement('p');
	big.appendChild(innerImage);
	big.appendChild(closeImage);
	big.appendChild(listenImage);
	big.appendChild(text);
	big.style.display = 'inline-block'


	innerImage.src = image.src;
	setInterval(function() {
		innerImage.style.left = '5%';
		innerImage.style.top = '5%';
	},0)
	innerImage.style.width = '40vw'
	innerImage.style.height = '40vw';
	innerImage.position = 'absolute';


	closeImage.src = 'close.png';
	closeImage.style.width = '10%';
	closeImage.style.height = '10%';
	closeImage.style.position = 'absolute';
	closeImage.style.right = '0%';
	closeImage.style.top = '5%'
	closeImage.onmouseover = mouseOver(closeImage);
	closeImage.onmouseout = mouseOut(closeImage);
	closeImage.addEventListener('click', function(){
		big.style.display = 'none';
		for (let i = 0; i < 12; i++) {
			document.getElementsByTagName('img')[i].style.display = 'inline-block';
		}
	})

	listenImage.src = 'listen.png';
	listenImage.style.width = '10%';
	listenImage.style.height = '10%';
	listenImage.style.position = 'absolute';
	listenImage.style.left = '5%';
	listenImage.style.bottom = '5%';
	listenImage.onmouseover = mouseOver(listenImage);
	listenImage.onmouseout = mouseOut(listenImage);
	let wordAudio = new Audio();
	wordAudio.preload = 'auto';
	let fileName = image.src.replace(/^.*[\\\/]/, '');
	wordAudio.src = fileName.slice(0, -4) + '.mp3';
	listenImage.addEventListener('click', function() {
		wordAudio.play();
	})

	text.style.position = 'absolute';
	text.style.left = '30%';
	for (let key in ratio) {
		if (key === fileName.slice(0, -4)) {
			text.innerText = ratio[key];
		}
	}
}


let apelsin = document.getElementsByTagName('img')[0];
let dom = document.getElementsByTagName('img')[1];
let giraffe = document.getElementsByTagName('img')[2];
let kot = document.getElementsByTagName('img')[3];
let kurica = document.getElementsByTagName('img')[4];
let limon = document.getElementsByTagName('img')[5];
let multiki = document.getElementsByTagName('img')[6];
let planshet = document.getElementsByTagName('img')[7];
let sobaka = document.getElementsByTagName('img')[8];
let ukraine = document.getElementsByTagName('img')[9];
let cwietok = document.getElementsByTagName('img')[10];
let chashka = document.getElementsByTagName('img')[11];

apelsin.onmouseover = mouseOver(apelsin);
dom.onmouseover = mouseOver(dom);
giraffe.onmouseover = mouseOver(giraffe);
kot.onmouseover = mouseOver(kot);
kurica.onmouseover = mouseOver(kurica);
limon.onmouseover = mouseOver(limon);
multiki.onmouseover = mouseOver(multiki);
planshet.onmouseover = mouseOver(planshet);
sobaka.onmouseover = mouseOver(sobaka);
ukraine.onmouseover = mouseOver(ukraine);
cwietok.onmouseover = mouseOver(cwietok);
chashka.onmouseover = mouseOver(chashka);

apelsin.onclick = function() {
	mouseClick(apelsin);
}
dom.onclick = function() {
	mouseClick(dom);
}
giraffe.onclick = function() {
	mouseClick(giraffe);
}
kot.onclick = function() {
	mouseClick(kot);
}
kurica.onclick = function() {
	mouseClick(kurica);
}
limon.onclick = function() {
	mouseClick(limon);
}
multiki.onclick = function() {
	mouseClick(multiki);
}
planshet.onclick = function() {
	mouseClick(planshet);
}
sobaka.onclick = function() {
	mouseClick(sobaka);
}
ukraine.onclick = function() {
	mouseClick(ukraine);
}
cwietok.onclick = function() {
	mouseClick(cwietok);
}
chashka.onclick = function() {
	mouseClick(chashka);
}

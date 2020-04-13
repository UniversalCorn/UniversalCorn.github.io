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
	'derevo':'дерево ',
	'planshet':'планшет',
	'sobaka':'собака',
	'solnce':'солнце',
	'cwietok':'цветок',
	'chashka':'чашка',
}

let back = ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg'];
let backVert = ['b1vert.jpg', 'b2vert.jpg', 'b3vert.jpg', 'b4vert.jpg'];

let rand = Math.floor(Math.random() * back.length);
let randBack = back[rand];
let randVertBack = backVert[rand];

let container = document.getElementById('container');

setInterval(function() {
	if (window.innerWidth < window.innerHeight) {
		container.style.backgroundImage = `url(${randVertBack})`;
	}
	else {
		container.style.backgroundImage = `url(${randBack})`;
	}
}, 0);

let close = document.getElementById('close');
close.style.position = 'fixed';
close.style.right = '1vw';
close.style.top = '1vw';
close.style.width = '3vw';
close.style.height = '3vw';
close.onmouseover = mouseOver(close);
close.addEventListener('click', function() {
	window.location.href = 'main.html';
});


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


for (let i = 0; i < 12; i++) {
	document.getElementsByTagName('img')[i].style.display = 'inline-block';
	document.getElementsByTagName('img')[i].style.border = '0.5vw solid #e75480';
	document.getElementsByTagName('img')[i].style.background = 'rgba(0, 0, 0, 0.3)';
}



setInterval( function() {
	if (window.innerWidth < window.innerHeight*0.62) {
		for (let i = 0; i < 12; i++) {
			document.getElementsByTagName('img')[i].style.width = document.getElementsByTagName('img')[i].style.height = '26vw';
		}
	}
	else if (window.innerWidth < window.innerHeight*0.67) {
		for (let i = 0; i < 12; i++) {
			document.getElementsByTagName('img')[i].style.width = document.getElementsByTagName('img')[i].style.height = '24vw';
		}
	}
	else if (window.innerWidth < window.innerHeight*0.69) {
		for (let i = 0; i < 12; i++) {
			document.getElementsByTagName('img')[i].style.width = document.getElementsByTagName('img')[i].style.height = '32vw';
		}
	}
	else if (window.innerWidth < window.innerHeight*0.84) {
		for (let i = 0; i < 12; i++) {
			document.getElementsByTagName('img')[i].style.width = document.getElementsByTagName('img')[i].style.height = '25vw';
		}
	}
	else if (window.innerWidth < window.innerHeight*1.04) {
		for (let i = 0; i < 12; i++) {
			document.getElementsByTagName('img')[i].style.width = document.getElementsByTagName('img')[i].style.height = '23vw';
		}
	}
	else if (window.innerWidth < window.innerHeight*1.26) {
		for (let i = 0; i < 12; i++) {
			document.getElementsByTagName('img')[i].style.width = document.getElementsByTagName('img')[i].style.height = '20vw';
		}
	}
	else if (window.innerWidth < window.innerHeight*1.56) {
		for (let i = 0; i < 12; i++) {
			document.getElementsByTagName('img')[i].style.width = document.getElementsByTagName('img')[i].style.height = '18vw';
		}
	}
	else {
		for (let i = 0; i < 12; i++) {
			document.getElementsByTagName('img')[i].style.width = document.getElementsByTagName('img')[i].style.height = '14vw';
		}
	}


	if (window.innerWidth < window.innerHeight/2) {
		close.style.width = '12vw';
		close.style.height = '12vw';
		close.style.right = '1vw';
		close.style.top = '1vw';
	}
	else if (window.innerWidth < window.innerHeight) {
		close.style.width = '9vw';
		close.style.height = '9vw';
		close.style.right = '1vw';
		close.style.top = '1vw';
	}
	else {
		close.style.width = '6vw';
		close.style.height = '6vw';
		close.style.right = '0vw';
		close.style.top = '0vw';
	}
})

function mouseClick(image) {
	for (let i = 0; i < 12; i++) {
		document.getElementsByTagName('img')[i].style.display = 'none';
	}
	let big = document.createElement('div');
	container.appendChild(big);
	big.style.background = 'rgba(255, 255, 255, 0.5)';
	big.style.width = '45vw';
	big.style.height = '45vw';
	setInterval(function() { 
		if (window.innerWidth < window.innerHeight/1.5){
			big.style.width = '60vw';
			big.style.height = '60vw';
			}
		else if (window.innerWidth < window.innerHeight) {
			big.style.width = '45vw';
			big.style.height = '45vw';
		}

		else {
			big.style.width = '30vw';
			big.style.height = '30vw';
		}
	}, 0)
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
	innerImage.style.margin = '0';
	innerImage.style.width = '100%'
	innerImage.style.height = '100%';
	innerImage.position = 'absolute';


	closeImage.src = 'close.png';
	setInterval(function() {
		if (window.innerWidth < window.innerHeight/1.5){
			closeImage.style.width = '9vw';
			closeImage.style.height = '9vw';
		}
		else if (window.innerWidth < window.innerHeight/1.2) {
			closeImage.style.width = '6vw';
			closeImage.style.height = '6vw';
		}		
		else if (window.innerWidth < window.innerHeight){
			closeImage.style.width = '7vw';
			closeImage.style.height = '7vw';
		}
		else {
			closeImage.style.width = '4vw';
			closeImage.style.height = '4vw';
		}
	},0);
	

	closeImage.style.position = 'absolute';
	closeImage.style.right = '2%';
	closeImage.style.top = '2%';
	closeImage.onmouseover = mouseOver(closeImage);
	closeImage.onmouseout = mouseOut(closeImage);
	closeImage.addEventListener('click', function(){
		big.style.display = 'none';
		big.parentNode.removeChild(big);
		text.parentNode.removeChild(text);
		container.style.justifyContent = 'space-around';	
		for (let i = 0; i < 12; i++) {
			document.getElementsByTagName('img')[i].style.display = 'inline-block';
		}
	});

	listenImage.src = 'listen.png';
	listenImage.style.position = 'absolute';
	listenImage.style.left = '2%';
	listenImage.style.bottom = '2%';
	setInterval(function() {
		if (window.innerWidth < window.innerHeight/1.5){
			listenImage.style.width = '9vw';
			listenImage.style.height = '9vw';
		}
		else if (window.innerWidth < window.innerHeight/1.2) {
			listenImage.style.width = '6vw';
			listenImage.style.height = '6vw';
		}		
		else if (window.innerWidth < window.innerHeight){
			listenImage.style.width = '7vw';
			listenImage.style.height = '7vw';
		}
		else {
			listenImage.style.width = '4vw';
			listenImage.style.height = '4vw';
		}
	},0);
	listenImage.onmouseover = mouseOver(listenImage);
	listenImage.onmouseout = mouseOut(listenImage);
	let wordAudio = new Audio();
	wordAudio.preload = 'auto';
	let fileName = image.src.replace(/^.*[\\\/]/, '');
	wordAudio.src = fileName.slice(0, -4) + 'M.mp3';
	listenImage.addEventListener('click', function() {
		wordAudio.play();
	})

	setInterval(function() {
	text.style.margin = '0';
		if (window.innerfontSize < window.innerHeight*1.5){
			text.style.fontSize = '4vw';
		}
		else if (window.innerfontSize < window.innerHeight*1.2) {
			text.style.fontSize = '6vw';
		}		
		else if (window.innerfontSize < window.innerHeight){
			text.style.fontSize = '8vw';
		}
		else {
			text.style.fontSize = '10vw';
		}
	}, 0);
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
let derevo = document.getElementsByTagName('img')[6];
let planshet = document.getElementsByTagName('img')[7];
let sobaka = document.getElementsByTagName('img')[8];
let solnce = document.getElementsByTagName('img')[9];
let cwietok = document.getElementsByTagName('img')[10];
let chashka = document.getElementsByTagName('img')[11];

let startInterval = setInterval(function() {
	if (apelsin.style.display === 'inline-block') {
	if (window.innerWidth < window.innerHeight) {
		container.style.flexDirection = 'row';
	}
	else {
		container.style.flexDirection = 'column';
	}
}
else {
	container.style.flexDirection = 'column';
}
},0);

apelsin.onmouseover = mouseOver(apelsin);
dom.onmouseover = mouseOver(dom);
giraffe.onmouseover = mouseOver(giraffe);
kot.onmouseover = mouseOver(kot);
kurica.onmouseover = mouseOver(kurica);
limon.onmouseover = mouseOver(limon);
derevo.onmouseover = mouseOver(derevo);
planshet.onmouseover = mouseOver(planshet);
sobaka.onmouseover = mouseOver(sobaka);
solnce.onmouseover = mouseOver(solnce);
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
derevo.onclick = function() {
	mouseClick(derevo);
}
planshet.onclick = function() {
	mouseClick(planshet);
}
sobaka.onclick = function() {
	mouseClick(sobaka);
}
solnce.onclick = function() {
	mouseClick(solnce);
}
cwietok.onclick = function() {
	mouseClick(cwietok);
}
chashka.onclick = function() {
	mouseClick(chashka);
}

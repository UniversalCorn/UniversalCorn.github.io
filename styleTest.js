let alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let span1 = ['H','I','!',' ','M','Y']
let span2 = ['N','A','M','E',' ','I','S']
let span3 = ['N','I','K','ι','T','A']
let span4 = ['L','A','Z','A','R','E','N','K','O'];

document.getElementsByClassName('warning')[0].style.display = 'none';
let para = document.getElementsByTagName('p')[0];
let playB = document.getElementsByTagName('img')[0];
setInterval(function() {
	if (window.innerWidth < window.innerHeight) {
		document.getElementsByClassName('warning')[0].style.display = 'flex';
	}
	else {
		document.getElementsByClassName('warning')[0].style.display = 'none';
	}
},0);

function Transform(num, className, masName) {
	for (let i = 0; i < num; i++) {
		let timer = setInterval(function() {
			document.getElementsByClassName(className)[i].innerText = alpha[Math.floor(Math.random() * alpha.length)];
		},100);
		setTimeout(function() {
			document.getElementsByClassName(className)[i].innerText = masName[i];
			clearInterval(timer);
		},i*750);
	}
}

Transform(6, 'first', span1);
Transform(7, 'second', span2);
Transform(6, 'third', span3);
Transform(9, 'fourth', span4);

let play = document.getElementById('play');
setTimeout(function() {
	play.style.visibility = 'visible';
}, 5500);

function Generate() {
	let box = document.createElement('span');
	document.body.appendChild(box);
	box.setAttribute('class', 'drop');
	box.innerText = '$';
	box.style.left = Math.floor(Math.random() * para.offsetWidth) + para.offsetLeft - para.offsetWidth/2 + 'px';
	box.style.top = -box.offsetHeight + 'px';
	let rand = Math.floor(Math.random()*box.offsetHeight);

	function Move() {
		let start = Date.now();
		let timer = setInterval(function() {
			let timePassed = Date.now() - start;
			if ( Number(box.style.top.slice(0,-2)) > window.innerHeight ) {
				box.style.display = 'none';
				box.parentNode.removeChild(box);
				clearInterval(timer);
				return;
			}
			Draw(timePassed);
		},0);
	}

	function Draw(timePassed) {
		box.style.top = -rand  + timePassed/5 + 'px';
	}

	Move();
}

let window1 = document.createElement('div');
window1.setAttribute('class', 'window');
window1.setAttribute('id', 'window1');
let window2 = document.createElement('div');
window2.setAttribute('class', 'window');
window2.setAttribute('id', 'window2');
let container = document.getElementsByClassName('container')[0];
container.appendChild(window1);
container.appendChild(window2);
window1.style.display = window2.style.display = 'none';
window1.style.position = window2.style.position = 'absolute';
window1.style.left = '17.5vw';
window2.style.left = '52.5vw'; 
window1.style.width = window1.style.height = window2.style.width = window2.style.height = '30vw';
window1.style.opacity = window2.style.opacity = '0';
let img1 = document.createElement('img');
img1.setAttribute('id','img1');
window1.appendChild(img1);
img1.src = 'letterGame.png';
img1.style.width = '100%'; img1.style.height = '100%';
let img2 = document.createElement('img');
img2.setAttribute('id','img2');
window2.appendChild(img2);
img2.src = 'vova.png';
img2.style.width = '100%'; img2.style.height = '100%';

playB.addEventListener('click', function() {
	playB.style.pointerEvents = 'none';
	for (let i = 0; i < 20; i++) {
		let start = setTimeout(function() {
			Generate();
		},i*50);
	}

	for (let i = 0; i < 30; i++) {
		let start = setTimeout(function() {
			Generate();
		},i*5 + 500);
	}

	for (let i = 0; i < 50; i++) {
		let start = setTimeout(function() {
			Generate();
		},i*5 + 1000);
	}

	for (let i = 0; i < 150; i++) {
		let start = setTimeout(function() {
			Generate();
		},i*10 + 1500);
	}
	para.style.animation = 'vanish 1s ease 3s';
	playB.style.animation = 'vanish 1s ease 3s';
	window1.style.animation = 'appear 1s';
	window2.style.animation = 'appear 1s';

	setTimeout(function() {
		para.style.display = 'none';
		playB.style.display = 'none';
		window1.style.display = window2.style.display = 'inline-block';
		window1.style.opacity = window2.style.opacity = '1';
	},3000);
});

window1.addEventListener('click', function() {
	window.location.href = '/letterGame/main.html'
});

window2.addEventListener('click', function() {
	window.location.href = '/animalGame/animalGame.html'
});

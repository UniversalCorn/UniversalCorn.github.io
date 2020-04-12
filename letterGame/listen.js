const sounds = ['a.mp3', 'b.mp3', 'v.mp3', 'g.mp3', 'd.mp3', 'ye.mp3', 'yo.mp3', 'j.mp3', 'z.mp3', 'i.mp3', 'y.mp3', 'k.mp3', 'l.mp3',
 'm.mp3', 'n.mp3', 'o.mp3', 'p.mp3', 'r.mp3', 's.mp3', 't.mp3', 'u.mp3', 'f.mp3', 'h.mp3', 'c.mp3', 'ch.mp3', 'sh.mp3', 'shch.mp3', 'tver.mp3', 
 'yy.mp3', 'myag.mp3', 'e.mp3', 'yu.mp3', 'ya.mp3'];
 
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


setInterval( function() {
	if (window.innerWidth < window.innerHeight) {
		document.body.style.backgroundImage = `url(${randVertBack})`;
	}
	else {
		document.body.style.backgroundImage = `url(${randBack})`;
	}

	if (window.innerWidth < window.innerHeight/1.5) {
		for (let i = 0; i < 33; i++) {
			document.getElementsByTagName('img')[i].style.transform = 'scale(1.2)';
		}
	}

	else {
		for (let i = 0; i < 33; i++) {
			document.getElementsByTagName('img')[i].style.transform = 'scale(1)';
		}
	}

}, 0);

let audioStart = new Audio();
audioStart.preload = 'auto';
audioStart.src = 'нажми.mp3';

function playButton() {
	return function(){
		for (let i = 0; i < 34; i++) {
			document.getElementsByTagName('img')[i].style.display = 'inline-block';
			playB.style.display = 'none';
			setTimeout(function() {
				audioStart.play();
			}, 500);
		}
	}
}

function playAudio (strAudio) {
	return function() {
		let audio = new Audio();
		audio.preload = 'auto';
		audio.src = strAudio;
		audio.play();
	}
}

function goBack () {
	return function() {
		window.location.href = 'main.html';
	}
}


const backButton = document.getElementsByTagName('img')[30];
backButton.onmousedown = goBack();

const playB = document.getElementsByTagName('img')[34];
playB.onmousedown = playButton();


for (let i = 0; i < 30; i++) {
	document.querySelectorAll('img')[i].onmousedown = playAudio(sounds[i]);
}

for (let i = 31; i < 34; i++) {
document.querySelectorAll('img')[i].onmousedown = playAudio(sounds[i-1]);
}

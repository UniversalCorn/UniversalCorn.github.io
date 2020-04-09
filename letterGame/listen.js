const sounds = ['a.mp3', 'b.mp3', 'v.mp3', 'g.mp3', 'd.mp3', 'ye.mp3', 'yo.mp3', 'j.mp3', 'z.mp3', 'i.mp3', 'y.mp3', 'k.mp3', 'l.mp3',
 'm.mp3', 'n.mp3', 'o.mp3', 'p.mp3', 'r.mp3', 's.mp3', 't.mp3', 'u.mp3', 'f.mp3', 'h.mp3', 'c.mp3', 'ch.mp3', 'sh.mp3', 'shch.mp3', 'tver.mp3', 
 'yy.mp3', 'myag.mp3', 'e.mp3', 'yu.mp3', 'ya.mp3'];
 
 let back = ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg'];
 let backVert = ['b1vert.jpg', 'b2vert.jpg', 'b3vert.jpg', 'b4vert.jpg'];


let rand = back[Math.floor(Math.random() * (back.length - 1))]
let randVert = backVert[Math.floor(Math.random() * (backVert.length - 1))]

if (window.innerWidth < window.innerHeight) {
	document.body.style.backgroundImage = `url(${randVert})`;
}
else {
	document.body.style.backgroundImage = `url(${rand})`;
}

setInterval( function() {
	if (window.innerWidth < window.innerHeight) {
		document.body.style.backgroundImage = `url(${randVert})`;
	}
	else {
		document.body.style.backgroundImage = `url(${rand})`;
	}
}, 3000);

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

function goBack () {
	return function() {
		window.location.href = 'main.html';
	}
}

const а = document.getElementsByTagName('img')[0];
const б = document.getElementsByTagName('img')[1];
const в = document.getElementsByTagName('img')[2];
const г = document.getElementsByTagName('img')[3];
const д = document.getElementsByTagName('img')[4];
const е = document.getElementsByTagName('img')[5];
const ё = document.getElementsByTagName('img')[6];
const ж = document.getElementsByTagName('img')[7];
const з = document.getElementsByTagName('img')[8];
const и = document.getElementsByTagName('img')[9];
const й = document.getElementsByTagName('img')[10];
const к = document.getElementsByTagName('img')[11];
const л = document.getElementsByTagName('img')[12];
const м = document.getElementsByTagName('img')[13];
const н = document.getElementsByTagName('img')[14];
const о = document.getElementsByTagName('img')[15];
const п = document.getElementsByTagName('img')[16];
const р = document.getElementsByTagName('img')[17];
const с = document.getElementsByTagName('img')[18];
const т = document.getElementsByTagName('img')[19];
const у = document.getElementsByTagName('img')[20];
const ф = document.getElementsByTagName('img')[21];
const х = document.getElementsByTagName('img')[22];
const ц = document.getElementsByTagName('img')[23];
const ч = document.getElementsByTagName('img')[24];
const ш = document.getElementsByTagName('img')[25];
const щ = document.getElementsByTagName('img')[26];
const ъ = document.getElementsByTagName('img')[27];
const ы = document.getElementsByTagName('img')[28];
const ь = document.getElementsByTagName('img')[29];
const э = document.getElementsByTagName('img')[31];
const ю = document.getElementsByTagName('img')[32];
const я = document.getElementsByTagName('img')[33];

const backButton = document.getElementsByTagName('img')[30];
backButton.onmouseover = mouseOver(backButton);
backButton.onmouseout = mouseOut(backButton);
backButton.onmousedown = goBack();

const playB = document.getElementsByTagName('img')[34];
playB.onmouseover = mouseOver(playB);
playB.onmouseout = mouseOut(playB);
playB.onmousedown = playButton();


а.onmouseover = mouseOver(а);
б.onmouseover = mouseOver(б);
в.onmouseover = mouseOver(в);
г.onmouseover = mouseOver(г);
д.onmouseover = mouseOver(д);
е.onmouseover = mouseOver(е);
ё.onmouseover = mouseOver(ё);
ж.onmouseover = mouseOver(ж);
з.onmouseover = mouseOver(з);
и.onmouseover = mouseOver(и);
й.onmouseover = mouseOver(й);
к.onmouseover = mouseOver(к);
л.onmouseover = mouseOver(л);
м.onmouseover = mouseOver(м);
н.onmouseover = mouseOver(н);
о.onmouseover = mouseOver(о);
п.onmouseover = mouseOver(п);
р.onmouseover = mouseOver(р);
с.onmouseover = mouseOver(с);
т.onmouseover = mouseOver(т);
у.onmouseover = mouseOver(у);
ф.onmouseover = mouseOver(ф);
х.onmouseover = mouseOver(х);
ц.onmouseover = mouseOver(ц);
ч.onmouseover = mouseOver(ч);
ш.onmouseover = mouseOver(ш);
щ.onmouseover = mouseOver(щ);
ъ.onmouseover = mouseOver(ъ);
ы.onmouseover = mouseOver(ы);
ь.onmouseover = mouseOver(ь);
э.onmouseover = mouseOver(э);
ю.onmouseover = mouseOver(ю);
я.onmouseover = mouseOver(я);


а.onmouseout = mouseOut(а);
б.onmouseout = mouseOut(б);
в.onmouseout = mouseOut(в);
г.onmouseout = mouseOut(г);
д.onmouseout = mouseOut(д);
е.onmouseout = mouseOut(е);
ё.onmouseout = mouseOut(ё);
ж.onmouseout = mouseOut(ж);
з.onmouseout = mouseOut(з);
и.onmouseout = mouseOut(и);
й.onmouseout = mouseOut(й);
к.onmouseout = mouseOut(к);
л.onmouseout = mouseOut(л);
м.onmouseout = mouseOut(м);
н.onmouseout = mouseOut(н);
о.onmouseout = mouseOut(о);
п.onmouseout = mouseOut(п);
р.onmouseout = mouseOut(р);
с.onmouseout = mouseOut(с);
т.onmouseout = mouseOut(т);
у.onmouseout = mouseOut(у);
ф.onmouseout = mouseOut(ф);
х.onmouseout = mouseOut(х);
ц.onmouseout = mouseOut(ц);
ч.onmouseout = mouseOut(ч);
ш.onmouseout = mouseOut(ш);
щ.onmouseout = mouseOut(щ);
ъ.onmouseout = mouseOut(ъ);
ы.onmouseout = mouseOut(ы);
ь.onmouseout = mouseOut(ь);
э.onmouseout = mouseOut(э);
ю.onmouseout = mouseOut(ю);
я.onmouseout = mouseOut(я);


а.onmousedown = playAudio(sounds[0]);
б.onmousedown = playAudio(sounds[1]);
в.onmousedown = playAudio(sounds[2]);
г.onmousedown = playAudio(sounds[3]);
д.onmousedown = playAudio(sounds[4]);
е.onmousedown = playAudio(sounds[5]);
ё.onmousedown = playAudio(sounds[6]);
ж.onmousedown = playAudio(sounds[7]);
з.onmousedown = playAudio(sounds[8]);
и.onmousedown = playAudio(sounds[9]);
й.onmousedown = playAudio(sounds[10]);
к.onmousedown = playAudio(sounds[11]);
л.onmousedown = playAudio(sounds[12]);
м.onmousedown = playAudio(sounds[13]);
н.onmousedown = playAudio(sounds[14]);
о.onmousedown = playAudio(sounds[15]);
п.onmousedown = playAudio(sounds[16]);
р.onmousedown = playAudio(sounds[17]);
с.onmousedown = playAudio(sounds[18]);
т.onmousedown = playAudio(sounds[19]);
у.onmousedown = playAudio(sounds[20]);
ф.onmousedown = playAudio(sounds[21]);
х.onmousedown = playAudio(sounds[22]);
ц.onmousedown = playAudio(sounds[23]);
ч.onmousedown = playAudio(sounds[24]);
ш.onmousedown = playAudio(sounds[25]);
щ.onmousedown = playAudio(sounds[26]);
ъ.onmousedown = playAudio(sounds[27]);
ы.onmousedown = playAudio(sounds[28]);
ь.onmousedown = playAudio(sounds[29]);
э.onmousedown = playAudio(sounds[30]);
ю.onmousedown = playAudio(sounds[31]);
я.onmousedown = playAudio(sounds[32]);
const pics = [ 'а.png', 'б.png', 'в.png', 'г.png', 'д.png', 'е.png', 'ё.png', 'ж.png', 'з.png', 'и.png', 'й.png', 'к.png',
 'л.png', 'м.png', 'н.png', 'о.png', 'п.png', 'р.png', 'с.png', 'т.png', 'у.png', 'ф.png', 'х.png', 'ц.png', 'ч.png',
 'ш.png', 'щ.png', 'ъ.png', 'ы.png', 'ь.png', 'э.png', 'ю.png', 'я.png'];

let sounds = [ 'a.mp3', 'b.mp3', 'v.mp3', 'g.mp3', 'd.mp3', 'ye.mp3', 'yo.mp3', 'j.mp3', 'z.mp3', 'i.mp3', 'y.mp3', 'k.mp3',
 'l.mp3', 'm.mp3', 'n.mp3', 'o.mp3', 'p.mp3', 'r.mp3', 's.mp3', 't.mp3', 'u.mp3', 'f.mp3', 'h.mp3', 'c.mp3', 'ch.mp3',
 'sh.mp3', 'shch.mp3', 'tver.mp3', 'yy.mp3', 'myag.mp3', 'e.mp3', 'yu.mp3', 'ya.mp3',];


const relation = [ ['a.mp3', 'а.png'], ['b.mp3', 'б.png'], ['v.mp3', 'в.png'], ['g.mp3', 'г.png'],
 ['d.mp3', 'д.png'], ['ye.mp3', 'е.png'], ['yo.mp3', 'ё.png'], ['j.mp3', 'ж.png'], ['z.mp3', 'з.png'],
 ['i.mp3', 'и.png'], ['y.mp3', 'й.png'], ['k.mp3', 'к.png'], ['l.mp3', 'л.png'], ['m.mp3', 'м.png'],
 ['n.mp3', 'н.png'], ['o.mp3', 'о.png'], ['p.mp3', 'п.png'], ['r.mp3', 'р.png'], ['s.mp3', 'с.png'],
 ['t.mp3', 'т.png'], ['u.mp3', 'у.png'], ['f.mp3', 'ф.png'], ['h.mp3', 'х.png'], ['c.mp3', 'ц.png'],
 ['ch.mp3', 'ч.png'], ['sh.mp3', 'ш.png'], ['shch.mp3', 'щ.png'], ['tver.mp3', 'ъ.png'], ['yy.mp3', 'ы.png'],
 ['myag.mp3', 'ь.png'], ['e.mp3', 'э.png'], ['yu.mp3', 'ю.png'], ['ya.mp3', 'я.png'] ];

 let count = 0;
 let right = 0;
 let wrong = 0;
 let picsAmount = 33;

 let back = ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg'];
 let backVert = ['b1vert.jpg', 'b2vert.jpg', 'b3vert.jpg', 'b4vert.jpg'];


let rand = back[Math.floor(Math.random() * (back.length - 1))]
let randVert = backVert[Math.floor(Math.random() * (backVert.length - 1))]


setInterval(function() {
	for (let i = 0; i < 33; i++) {
		document.getElementsByClassName('letter')[i].style.transform = 'scale(1.3)';
	}
	if (window.innerWidth < window.innerHeight) {
		for (let i = 0; i < 33; i++) {
			if (document.getElementsByClassName('letter')[i].offsetTop + document.getElementsByClassName('letter')[i].offsetHeight*1.2 > window.innerHeight) {
				for (let j = 0; j < 33; j++) {
					document.body.style.justifyContent = 'space-around';
					document.getElementsByClassName('letter')[j].style.width = '15vw';
				}
			}
			else {
				for (let j = 0; j < 33; j++) {
					document.getElementsByClassName('letter')[j].style.width = '20vw';
					document.body.style.justifyContent = 'space-around';
				}
			}
		}
		document.body.style.backgroundImage = `url(${randVert})`;
	}
	else {
		for (let i = 0; i < 33; i++) {
			document.getElementsByClassName('letter')[i].style.width = '12vw';
			document.body.style.justifyContent = 'center';
		}
		document.body.style.backgroundImage = `url(${rand})`;
	}
}, 1)

let audioStart = new Audio();
audioStart.preload = 'auto';
audioStart.src = 'выбери.mp3';

function playButton() {
	return function(){
		playB.style.display = 'none';
		setTimeout(function() {
			audioStart.play();
			}, 500);
		setTimeout(function() {
			Question();
			for (let i = 0; i < 33; i++) {
				document.getElementsByTagName('img')[i].style.display = 'inline-block';
			}
		}, 3500);
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


let letterSound = new Audio();
audioStart.preload = 'auto';
let rememberSound = '';

let rememberMas = [];
let rightSum = 0;
let wrongSum = 0;
function Question() {
	if (picsAmount === 0) { 
		rememberMas = rememberMas.map((val, i) => (i!=0 && val==rememberMas[i-1]) ? 0 : 1 );
		wrongSum = rememberMas.reduce((acc, val) => acc + val, 0)
		rightSum = right;
		let points = rightSum - wrongSum + 1;
		setTimeout( function() {
			let panel = document.createElement('div');
			document.body.appendChild(panel);
			panel.style.width = '67vw';
			panel.style.height = '67vw';
			panel.style.textAlign = 'center';
			panel.style.fontSize = '7vw';
			document.body.style.justifyContent = 'center';
			panel.innerText = `Ты набрал(а) ${points}`;
			if (points % 100 === 11) {
				panel.innerText += ` очков.`;
			}
			else if ((points % 10 === 1) && (points % 100 !== 11)) {
				panel.innerText += ` очко.`;
			}
			else if ( (points % 10 === 2) || (points % 10 === 3) || (points % 10 === 4) ) {
				panel.innerText += ` очка.`;
			}
			else if ( (points % 10 === 5) || (points % 10 === 6) || (points % 10 === 7) || (points % 10 === 8) || (points % 10 === 9) || (points % 10 === 0)) {
				panel.innerText += ` очков.`;
			}
			
			if (points <= 0) {
				panel.innerText += ` Тренируйся ещё.`
				panel.style.background = 'rgba(250, 50, 50, 0.5)';
			}
			else {
				panel.innerText += ` Молодец!`
				panel.style.background = 'rgba(50, 250, 50, 0.5)';
			}
			let br = document.createElement('br');
			panel.appendChild(br);
			let getBack = document.createElement('img');
			panel.appendChild(getBack);
			getBack.onmouseover = mouseOver(getBack);
			getBack.src = 'back.png'
			getBack.style.position = 'relative';
			getBack.style.width = '40%';
			getBack.style.height = getBack.style.width + 'px';

			getBack.addEventListener('click', function() {
				window.location.href = 'main.html';
			})
		}, 1000);
	}
	else {
		letterSound.src = sounds[Math.floor(Math.random() * (sounds.length - 1))];
		let fileName = letterSound.src.replace(/^.*[\\\/]/, '');
		letterSound.play();
		for (let i = 0; i < sounds.length; i++) {
			if (fileName === sounds[i]) {
				rememberSound = sounds[i];
				sounds.splice(i,1);
			}
		}
		let j = 0;
		for (let i = 0; i < 33; i++) {
			j++;
			if (document.getElementsByTagName('img')[i].src.replace(/^.*[\\\/]/, '') === (rememberSound.substring(0, rememberSound.length - 3) + 'png')) {
				document.getElementsByTagName('img')[i].addEventListener('click', function() {
					document.getElementsByTagName('img')[i].style.background = 'rgba(50, 250, 50, 0.5)';
					right+=1;
					wrong = wrong - (33 - picsAmount);
					picsAmount--;
					setTimeout( function() {
						document.getElementsByTagName('img')[i].style.display = 'none';
					}, 500);
					setTimeout( function() {
						Question();
					}, 1000);
				});
			}
			else { document.getElementsByTagName('img')[i].addEventListener('click', function() {
					document.getElementsByTagName('img')[i].style.background = 'rgba(250, 50, 50, 0.5)';
					wrong = wrong + 1;
					setTimeout( function() {
						document.getElementsByTagName('img')[i].style.background = 'transparent';
					}, 500);
				});
			}
		}
		rememberMas.push(wrong);
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


const playB = document.getElementsByTagName('img')[33];
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

let sounds = [ 'a.mp3', 'b.mp3', 'v.mp3', 'g.mp3', 'd.mp3', 'ye.mp3', 'yo.mp3', 'j.mp3', 'z.mp3', 'i.mp3', 'y.mp3', 'k.mp3',
 'l.mp3', 'm.mp3', 'n.mp3', 'o.mp3', 'p.mp3', 'r.mp3', 's.mp3', 't.mp3', 'u.mp3', 'f.mp3', 'h.mp3', 'c.mp3', 'ch.mp3',
 'sh.mp3', 'shch.mp3', 'tver.mp3', 'yy.mp3', 'myag.mp3', 'e.mp3', 'yu.mp3', 'ya.mp3',];

const relation = [ ['Аа', 'a.mp3'], ['Бб', 'b.mp3'], ['Вв', 'v.mp3'], ['Гг', 'g.mp3'],
 ['Дд', 'd.mp3'], ['Ее', 'ye.mp3'], ['Ёё', 'yo.mp3'], ['Жж', 'j.mp3'], ['Зз', 'z.mp3'],
 ['Ии', 'i.mp3'], ['Йй', 'y.mp3'], ['Кк', 'k.mp3'], ['Лл', 'l.mp3'], ['Мм', 'm.mp3'],
 ['Нн', 'n.mp3'], ['Оо', 'o.mp3'], ['Пп', 'p.mp3'], ['Рр', 'r.mp3'], ['Сс', 's.mp3'],
 ['Тт', 't.mp3'], ['Уу', 'u.mp3'], ['Фф', 'f.mp3'], ['Хх', 'h.mp3'], ['Цц', 'c.mp3'],
 ['Чч', 'ch.mp3'], ['Шш', 'sh.mp3'], ['Щщ', 'shch.mp3'], ['Ъъ', 'tver.mp3'], ['Ыы', 'yy.mp3'],
 ['Ьь', 'myag.mp3'], ['Ээ', 'e.mp3'], ['Юю', 'yu.mp3'], ['Яя', 'ya.mp3'] ];

 let right = 0;
 let wrong = 0;
 let picsAmount = 33;

 let back = ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg'];
 let backVert = ['b1vert.jpg', 'b2vert.jpg', 'b3vert.jpg', 'b4vert.jpg'];


let rand = Math.floor(Math.random() * back.length);
let randBack = back[rand];
let randVertBack = backVert[rand];


setInterval(function() {
	if (window.innerWidth < window.innerHeight/1.5) {
		for (let i = 0; i < 33; i++) {
			document.getElementsByClassName('letter')[i].style.transform = 'scale(1.2)';
		}
	}

	else {
		for (let i = 0; i < 33; i++) {
			document.getElementsByClassName('letter')[i].style.transform = 'scale(1)';
		}
	}

	if (window.innerWidth < window.innerHeight) {	
		document.body.style.backgroundImage = `url(${randVertBack})`;
		for (let i = 0; i < 33; i++) {
		document.getElementsByClassName('letter')[i].style.fontSize = '7vw';
	}
	}
	else {
		document.body.style.backgroundImage = `url(${randBack})`;
		for (let i = 0; i < 33; i++) {
			document.getElementsByClassName('letter')[i].style.fontSize = '5vw';
		}
	}
}, 1)

let audioStart = new Audio();
audioStart.preload = 'auto';
audioStart.src = 'выбериM.mp3';

function playButton() {
	return function(){
		playB.style.display = 'none';
		setTimeout(function() {
			audioStart.play();
			}, 500);
		setTimeout(function() {
			Question();
			for (let i = 0; i < 33; i++) {
				document.getElementsByClassName('letter')[i].style.display = 'inline-block';
			}
		}, 3500);
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
			setInterval(function() {
				if (window.innerWidth < window.innerHeight) {
					panel.style.width = '70%';
					panel.style.height = window.innerWidth/10*7 + 'px';
					panel.style.fontSize = window.innerWidth/15 + 'px';
				}
				else {
					panel.style.height = '70%';
					panel.style.width = window.innerHeight/10*7 + 'px';
					panel.style.fontSize = window.innerHeight/15 + 'px';
				}
			},0);
			panel.style.textAlign = 'center';
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
			
			if (points <= 1) {
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
			getBack.src = 'back.png'
			getBack.style.position = 'relative';
			setInterval(function() {
				getBack.style.width = '40%';
				getBack.style.height = '40%';
				getBack.style.top = '15%';
			},0)
			getBack.addEventListener('click', function() {
				window.location.href = 'main.html';
			})
		}, 1000);
	}
	else {
		letterSound.src = sounds[Math.floor(Math.random() * (sounds.length - 1))].replace(/^.*[\\\/]/, '').slice(0,-4) + 'M.mp3';
		let fileName = letterSound.src.replace(/^.*[\\\/]/, '');
		letterSound.play();
		for (let i = 0; i < sounds.length; i++) {
			if (fileName === sounds[i].slice(0,-4) + 'M.mp3') {
				rememberSound = sounds[i];
				if (relation[i][1] === rememberSound) {
					rememberSound = relation[i][0];
				}
					sounds.splice(i,1);
					relation.splice(i,1);
			}
		}
		for (let i = 0; i < 33; i++) {
			if (document.getElementsByClassName('letter')[i].innerText === rememberSound) {
				document.getElementsByClassName('letter')[i].addEventListener('click', function() {
					document.getElementsByClassName('letter')[i].style.background = 'rgba(50, 250, 50, 0.5)';
					document.getElementsByClassName('letter')[i].style.outline = '2vw solid rgba(50, 250, 50, 0.5)';
					right+=1;
					wrong = wrong - (33 - picsAmount);
					picsAmount--;
					setTimeout( function() {
						document.getElementsByClassName('letter')[i].style.display = 'none';
					}, 500);
					setTimeout( function() {
						Question();
					}, 1000);
				});
			}
			else { document.getElementsByClassName('letter')[i].addEventListener('click', function() {
					document.getElementsByClassName('letter')[i].style.background = 'rgba(250, 50, 50, 0.5)';
					document.getElementsByClassName('letter')[i].style.outline = '2vw solid rgba(250, 50, 50, 0.5)';
					wrong = wrong + 1;
					setTimeout( function() {
						document.getElementsByClassName('letter')[i].style.background = 'transparent';
						document.getElementsByClassName('letter')[i].style.outline = '0 solid transparent';
					}, 500);
				});
			}
		}
		rememberMas.push(wrong);
	}
}


const playB = document.getElementsByTagName('img')[0];
playB.onmousedown = playButton();

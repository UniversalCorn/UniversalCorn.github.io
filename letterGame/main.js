const links = ['listen.html', 'test.html', 'guess.html'];

let back = ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg'];
let backVert = ['b1vert.jpg', 'b2vert.jpg', 'b3vert.jpg', 'b4vert.jpg'];

let scrollColor = '';
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
}, 0)

let pic1 = document.getElementsByTagName('img')[0];
let pic2 = document.getElementsByTagName('img')[1];
let pic3 = document.getElementsByTagName('img')[2];

let headliner = document.getElementById('headliner');
headliner.style.left = -headliner.offsetWidth + 'px';
headliner.style.top = window.innerHeight/2 - headliner.offsetHeight/2 + 'px';
headliner.style.height = '40%';


setTimeout( function() {
		moveInner();	
}, 2000 + (window.innerWidth/2 + headliner.offsetWidth/2) /2);

function moveOuter() {
	let start = Date.now()
	let timer = setInterval(function() {
		let timePassed = Date.now() - start;	
		if ( (Number((headliner.style.left).slice(0, -2))) > ( (window.innerWidth/2) - (headliner.offsetWidth/2))  ) {
			clearInterval(timer);
			return;
		}
		draw(timePassed);
	}, 10);
	setInterval(function() {
		if (window.innerWidth < window.innerHeight) {
			headliner.style.width = '60%';
			headliner.style.background = 'rgba(256, 64, 64, 0.7)';
			document.body.style.fontSize = '1 rem';
		}
	}, 0);
}

moveOuter();

function moveInner() {
	let innerStart = Date.now();
	let innerTimer = setInterval( function() {
		let innerTimePassed = Date.now() - innerStart;
		if ( Number((headliner.style.left).slice(0, -2)) > window.innerWidth  ) {
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
	headliner.style.left = (timePassed * 2)  + window.innerWidth - headliner.offsetWidth*1.75 + 'px';
}


setInterval(function() {
	if (window.innerWidth < window.innerHeight) {
		container.style.flexDirection = 'column';
	}
	else {
		container.style.flexDirection = 'row';
	}

	if (window.innerWidth < window.innerHeight/1.5) {
		for (let i = 0; i < 3; i++) {
			document.getElementsByTagName('img')[i].style.transform = 'scale(2)';
		}
	}

	else {
		for (let i = 0; i < 3; i++) {
			document.getElementsByTagName('img')[i].style.transform = 'scale(1)';
		}
	}
}, 0);

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

function mouseDown (target, strLink) {
	return function() {
		window.location.href = strLink;
	}
}

pic1.onmouseover = mouseOver(pic1);
pic1.onmouseout = mouseOut(pic1);
pic1.onmousedown = mouseDown(pic1, links[0]);

pic2.onmouseover = mouseOver(pic2);
pic2.onmouseout = mouseOut(pic2);
pic2.onmousedown = mouseDown(pic2, links[1]);

pic3.onmouseover = mouseOver(pic3);
pic3.onmouseout = mouseOut(pic3);
pic3.onmousedown = mouseDown(pic3, links[2]);


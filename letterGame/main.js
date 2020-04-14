const links = ['listen.html', 'test.html', 'guess.html'];

let back = ['b1.jpg', 'b2.jpg', 'b3.jpg', 'b4.jpg'];
let backVert = ['b1vert.jpg', 'b2vert.jpg', 'b3vert.jpg', 'b4vert.jpg'];

let rand = Math.floor(Math.random() * back.length);
let randBack = back[rand];
let randVertBack = backVert[rand];

let container = document.getElementById('container');

let headliner = document.getElementById('headliner');
headliner.style.background = 'rgba(256, 64, 64, 0.7)';
setTimeout(function() {
	headliner.style.display = 'inline-block';
}, 1);
headliner.style.left = -headliner.offsetWidth + 'px';
setInterval(function() {
	headliner.style.top = window.innerHeight/2 - headliner.offsetHeight/2 + 'px';
	if (window.innerWidth < window.innerHeight) {
		headliner.style.width = '60%';
		container.style.backgroundImage = `url(${randVertBack})`;
	}
	else {
		headliner.style.width = '40%';
		container.style.backgroundImage = `url(${randBack})`;
	}
}, 0);

function moveOuter() {
	let start = Date.now()
	let timer = setInterval(function() {
		let timePassed = Date.now() - start;	
		if ( (Number((headliner.style.left).slice(0, -2))) > ( (window.innerWidth/2) - (headliner.offsetWidth/2))  ) {
			setTimeout( function() {
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
	headliner.style.left = (timePassed * 2)  + window.innerWidth/2 - headliner.offsetWidth/2 + 'px';
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
			document.getElementsByTagName('img')[i].style.transform = 'scale(1.2)';
		}
	}
}, 0);

function mouseDown (target, strLink) {
	return function() {
		window.location.href = strLink;
	}
}

for (let i = 0; i < 3; i++){
document.getElementsByTagName('img')[i].onmousedown = mouseDown(document.getElementsByTagName('img')[i], links[i])
}

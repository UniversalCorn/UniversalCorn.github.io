let sym = ['体','力','圧','力','人','力','車','力','士','強','力','能','力','協','力','努','力'];
let alpha = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];

let x = window.innerWidth;
let y = window.innerHeight;

const COL_NUMBER = 25;

let random = function() {
  return Math.round(Math.random() * 13) + 9;
}


function addTextTo(obj) {

let rand = random();
		
	for (let i = 0; i < rand; i++) {
		obj.innerText += alpha[Math.round(Math.random()*(alpha.length-1))];  			
	}

	let randCut = 0;

	setInterval( function() {
		randCut = Math.round(Math.random() * rand);
		obj.innerText += alpha[Math.round(Math.random()*(alpha.length-1))];
		obj.innerText = obj.innerText.substr(0, randCut) + obj.innerText.substr(randCut + 1, obj.innerText.length);
		obj.innerText = alpha[Math.round(Math.random()*(alpha.length-1))] + obj.innerText;
		obj.innerText = obj.innerText.substr(0, randCut) + obj.innerText.substr(randCut + 1, obj.innerText.length);
	}, 100);

}


function genAndMove() {
	let obj = document.createElement('div');
	document.body.appendChild(obj);
	obj.style.display = 'inline-block';
	obj.style.position = 'absolute';
	obj.style.left = Math.round(Math.random()*(x-obj.offsetWidth))  + 'px';

	addTextTo(obj);
obj.style.top = -obj.offsetHeight + 'px';

	let start = Date.now()
	let timer = setInterval(function() {
		let timePassed = Date.now() - start;	

  		if ( Number((obj.style.top).slice(0, -2)) > window.innerHeight) {
    		clearInterval(timer);
    		obj.style.left = Math.round(Math.random()*(x-obj.offsetWidth))  + 'px';
    		obj.parentNode.removeChild(obj);
    		genAndMove();
    		return;
  		}
  		
  		draw(timePassed);
	}, 20);

	function draw(timePassed) {
  		obj.style.top = (timePassed / 4)  - obj.offsetHeight + 'px';
  	}
  }


for (let i = 0; i < COL_NUMBER; i++) {
genAndMove();
}

setTimeout (function() {
	for (let i = 0; i < COL_NUMBER; i++) {
		genAndMove();
	}
}, (window.innerHeight/3) * 4);

setTimeout (function() {
	for (let i = 0; i < COL_NUMBER; i++) {
		genAndMove();
	}
}, ((window.innerHeight/3)*2) * 4);


/*let a = document.getElementsByTagName('div');
let collisionNumber = 0;
function checkPos1() {
	for (let i = (a.length)-25; i < a.length; i++) {
		for (let j = (a.length)-25; j < a.length; j++) {
			if ( (( (Number(a[i].style.left.slice(0, -2))) - (Number(a[j].style.left.slice(0, -2))) ) < a[i].style.width) && 
				(( (Number(a[i].style.left.slice(0, -2))) - (Number(a[j].style.left.slice(0, -2))) ) !== 0 ) ) {
				a[i].style.left = Number(a[i].style.left.slice(0, -2)) + a[i].style.width + 'px';
				collisionNumber++;
			}
		}
	}
	if (collisionNumber !== 0) {
		collisionNumber = 0;
		checkPos1();
	}
}*/
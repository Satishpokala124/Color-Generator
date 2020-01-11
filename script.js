var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('body');
var random = document.getElementById('random');

css.textContent = "linear-gradient(to right, rgb(0,255,0), rgb(255,0,0));";

function setgradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background+";";
}

function setRandom() {
	var letters = '0123456789ABCDEF';
	var colora = '#',colorb = '#';
	for (var i = 0; i < 6; i++) {
		colora += letters[Math.floor(Math.random() * 15)];
		colorb += letters[Math.floor(Math.random() * 15)];
	}
	color1.value = colora;
	color2.value = colorb;
	setgradient();
}

color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);
random.addEventListener("click", setRandom);



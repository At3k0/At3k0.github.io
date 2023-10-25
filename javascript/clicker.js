let nume = 1;
var clickSFX = new Audio('audio/mcclick.mp3');
function bclick() {
	clickSFX.cloneNode().play();
	nume++;
	document.getElementById('num').innerText = nume;
}

document.getElementById('alec').onmousedown = function() { 
	document.getElementById('alec').src = 'images/alecfaceupmush.png';

}

document.getElementById('alec').onmouseup = function() {
	document.getElementById('alec').src = 'images/alecfaceup.png';
}
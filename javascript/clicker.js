let nume = 1;
let alectype = 0;
let skin = 0;

const clickSFX = new Audio('audio/mcclick.mp3');
const alec = document.getElementById('alec');

if (localStorage.getItem('nume')) nume = parseInt(localStorage.getItem('nume'));
if (localStorage.getItem('alectype')) alectype = parseInt(localStorage.getItem('alectype'));

const saveProgress = () => {
    localStorage.setItem('nume', nume);
    localStorage.setItem('alectype', alectype);
};

setInterval(saveProgress, 60000);

const updateDisplay = () => {
    document.getElementById('num').innerText = nume;
    if (skin === 1) {
		alec.src = alectype === 0 ? 'images/abby.png' : 'images/abby2.png';
	} else if (skin === 2) {
		alec.src = alectype === 0 ? 'images/nate.png' : 'images/nate2.png'
	} else {
		alec.src = alectype === 0 ? 'images/alec.png' : 'images/alec2.png';
	}
};

updateDisplay();

document.getElementById('reset').addEventListener('click', () => {
    const yn = prompt("Do you want to reset? THERE IS NO UNDOING THIS!", "").toLowerCase();
    if (["yes", "si", "yeah", "sure"].includes(yn)) {
        nume = 1;
        alectype = 0;
        updateDisplay();
        saveProgress();
    }
});

document.getElementById('skin').addEventListener('click', () => {
    const skinchange = prompt("Which skin do you want to use? (Alec, Abby, or Nate)", "").toLowerCase();
    if (skinchange === "alec") {
        skin = 0;
        alec.src = alectype === 0 ? 'images/alec.png' : 'images/alec2.png';
    } else if (skinchange === "abby") {
    	skin = 1;
        alec.src = alectype === 0 ? 'images/abby.png' : 'images/abby2.png';
    } else if (skinchange === "nate") {
    	skin = 2;
        alec.src = alectype === 0 ? 'images/nate.png' : 'images/nate2.png';
    }
});

const bclick = () => {
    clickSFX.cloneNode().play();
    nume += alectype === 0 ? 1 : 5;
    document.getElementById('num').innerText = nume;
    document.getElementById('newalec').style.display = nume >= 50 && alectype === 0 ? "block" : "none";
    saveProgress();
};

const nbclick = () => {
    alec.src = 'images/babyalec.png';
    alectype++;
    document.getElementById('newalec').style.display = "none";
    updateDisplay();
    saveProgress();
};

alec.addEventListener('mousedown', () => {
	if (skin === 1) {
		alec.src = alectype === 0 ? 'images/abbymush.png' : 'images/abby2mush.png';
	} else if (skin === 2) {
		alec.src = alectype === 0 ? 'images/natemush.png' : 'images/nate2mush.png';
	} else {
	    alec.src = alectype === 0 ? 'images/alecmush.png' : 'images/alec2mush.png';
	}
});

alec.addEventListener('mouseup', () => {
	if (skin === 1) {
		alec.src = alectype === 0 ? 'images/abby.png' : 'images/abby2.png';
	} else if (skin === 2) {
		alec.src = alectype === 0 ? 'images/nate.png' : 'images/nate2.png'
	} else {
		alec.src = alectype === 0 ? 'images/alec.png' : 'images/alec2.png';
	}
});
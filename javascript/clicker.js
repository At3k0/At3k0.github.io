//variables
let nume = 1;
let alectype = 0;
let skin = 0;
let cps = 0;
let autoclick1cost = document.getElementById('autoclick1cost').innerText;
const clickSFX = new Audio('audio/mcclick.mp3');
const alec = document.getElementById('alec');
const autoclick = () => {
	nume += cps;
	document.getElementById('num').innerText = nume;
}
 
//saving
if (localStorage.getItem('nume')) nume = parseInt(localStorage.getItem('nume'));
if (localStorage.getItem('alectype')) alectype = parseInt(localStorage.getItem('alectype'));
if (localStorage.getItem('cps')) cps = parseInt(localStorage.getItem('cps'));

const saveProgress = () => {
    localStorage.setItem('nume', nume);
    localStorage.setItem('alectype', alectype);
    localStorage.setItem('cps', cps);
};

setInterval(saveProgress, 60000);

//skins
const updateDisplay = () => {
    document.getElementById('num').innerText = nume;
    if (skin === 1) {
		alec.src = alectype === 0 ? 'images/abby.png' : 'images/abby2.png';
	} else if (skin === 2) {
		alec.src = alectype === 0 ? 'images/nate.png' : 'images/nate2.png';
	} else if (skin === 3) {
		alec.src = alectype === 0 ? 'images/dash.png' : 'images/dash2.png'
	} else {
		alec.src = alectype === 0 ? 'images/alec.png' : 'images/alec2.png';
	}
};

document.getElementById('skin').addEventListener('click', () => {
    const skinchange = prompt("Which skin do you want to use? (Alec, Abby, Nate, or Dash)", "").toLowerCase();
    if (skinchange === "alec") {
        skin = 0;
        alec.src = alectype === 0 ? 'images/alec.png' : 'images/alec2.png';
    } else if (skinchange === "abby") {
    	skin = 1;
        alec.src = alectype === 0 ? 'images/abby.png' : 'images/abby2.png';
    } else if (skinchange === "nate") {
    	skin = 2;
        alec.src = alectype === 0 ? 'images/nate.png' : 'images/nate2.png';
    } else if (skinchange === "dash") {
    	skin = 3;
        alec.src = alectype === 0 ? 'images/dash.png' : 'images/dash2.png';
    }
});

//upgrades
/*document.getElementById('upgrades').addEventListener('click', () => {
    document.getElementById('upgradesdiv').style.display = "block";
    document.getElementById('maindiv').style.display = "none";
    if (autoclick1cost <= nume) {
    	document.getElementById('autoclick1').style.backgroundColor = "white";
    	document.getElementById('autoclick1cost').style.backgroundColor = "white";
    	document.getElementById('autoclick1').addEventListener('click', () => {
    	    cps += 1;
    	    nume -= autoclick1cost;
    	    saveProgress();
    	});
    }
    document.getElementById('back').addEventListener('click', () => {
        document.getElementById('upgradesdiv').style.display = "none";
        document.getElementById('maindiv').style.display = "block";
    });
});*/

//reset
document.getElementById('reset').addEventListener('click', () => {
    const yn = prompt("Do you want to reset? THERE IS NO UNDOING THIS!", "").toLowerCase();
    if (["yes", "si", "yeah", "sure"].includes(yn)) {
        nume = 0;
        alectype = 0;
        cps = 0;
        updateDisplay();
        saveProgress();
        document.location.reload();
    }
});

//clicks
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
	} else if (skin === 3) {
		alec.src = alectype === 0 ? 'images/dashmush.png' : 'images/dash2mush.png'
	} else {
	    alec.src = alectype === 0 ? 'images/alecmush.png' : 'images/alec2mush.png';
	}
});

alec.addEventListener('mouseup', () => {
	if (skin === 1) {
		alec.src = alectype === 0 ? 'images/abby.png' : 'images/abby2.png';
	} else if (skin === 2) {
		alec.src = alectype === 0 ? 'images/nate.png' : 'images/nate2.png'
	} else if (skin === 3) {
		alec.src = alectype === 0 ? 'images/dash.png' : 'images/dash2.png'
	} else {
		alec.src = alectype === 0 ? 'images/alec.png' : 'images/alec2.png';
	}
});

//functions
setInterval(autoclick, 1000);
updateDisplay();

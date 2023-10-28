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
		alec.src = alectype === 0 ? 'images/abby.png' : (alectype === 1 ? 'images/abby2.png' : 'images/sadlycl.png');
	} else if (skin === 2) {
		alec.src = alectype === 0 ? 'images/nate.png' : (alectype === 1 ? 'images/nate2.png' : 'images/nate3.png');
	} else if (skin === 3) {
		alec.src = alectype === 0 ? 'images/dash.png' : (alectype === 1 ? 'images/dash2.png' : 'images/sadlycl.png');
	} else {
		alec.src = alectype === 0 ? 'images/alec.png' : (alectype === 1 ? 'images/alec2.png' : 'images/alec3.png');
	}
};

document.getElementById('skin').addEventListener('click', () => {
    const skinchange = prompt("Which skin do you want to use? (Alec, Abby, Nate, or Dash)", "").toLowerCase();
    if (skinchange === "alec") {
        skin = 0;
        alec.src = alectype === 0 ? 'images/alec.png' : (alectype === 1 ? 'images/alec2.png' : 'images/alec3.png');
    } else if (skinchange === "abby") {
    	skin = 1;
        alec.src = alectype === 0 ? 'images/abby.png' : (alectype === 1 ? 'images/abby2.png' : 'images/sadlycl.png');
    } else if (skinchange === "nate") {
    	skin = 2;
        alec.src = alectype === 0 ? 'images/nate.png' : (alectype === 1 ? 'images/nate2.png' : 'images/nate3.png');
    } else if (skinchange === "dash") {
    	skin = 3;
        alec.src = alectype === 0 ? 'images/dash.png' : (alectype === 1 ? 'images/dash2.png' : 'images/sadlycl.png');
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
    nume += alectype === 0 ? 1 : (alectype === 1 ? 5 : 10);
    document.getElementById('num').innerText = nume;
    document.getElementById('newalec').style.display = (nume >= 50 && alectype === 0) || (nume >= 500 && alectype === 1) ? "block" : "none";
    saveProgress();
};

const nbclick = () => {
    alectype++;
    alec.src = alectype === 0 ? 'images/alec.png' : (alectype === 1 ? 'images/alec2.png' : 'images/alec3.png');
    document.getElementById('newalec').style.display = "none";
    updateDisplay();
    saveProgress();
};

alec.addEventListener('mousedown', () => {
	if (skin === 1) {
		alec.src = alectype === 0 ? 'images/abbymush.png' : (alectype === 1 ? 'images/abby2mush.png' : 'images/sadlyclmush.png');
	} else if (skin === 2) {
		alec.src = alectype === 0 ? 'images/natemush.png' : (alectype === 1 ? 'images/nate2mush.png' : 'images/nate3mush.png');
	} else if (skin === 3) {
		alec.src = alectype === 0 ? 'images/dashmush.png' : (alectype === 1 ? 'images/dash2mush.png' : 'images/sadlyclmush.png');
	} else {
	    alec.src = alectype === 0 ? 'images/alecmush.png' : (alectype === 1 ? 'images/alec2mush.png' : 'images/alec3mush.png');
	}
});

alec.addEventListener('mouseup', () => {
	if (skin === 1) {
		alec.src = alectype === 0 ? 'images/abbt.png' : (alectype === 1 ? 'images/abby2.png' : 'images/sadlycl.png');
	} else if (skin === 2) {
		alec.src = alectype === 0 ? 'images/nate.png' : (alectype === 1 ? 'images/nate2.png' : 'images/nate3.png');
	} else if (skin === 3) {
		alec.src = alectype === 0 ? 'images/dash.png' : (alectype === 1 ? 'images/dash2.png' : 'images/sadlycl.png');
	} else {
		alec.src = alectype === 0 ? 'images/alec.png' : (alectype === 1 ? 'images/alec2.png' : 'images/alec3.png');
	}
});

//functions
setInterval(autoclick, 1000);
updateDisplay();

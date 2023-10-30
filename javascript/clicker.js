/*jshint esversion: 6 */
//variables
let nume = 1;
let alectype = 0;
let skin = 0;
let cps = 0;
let autoclick1cost = 10;
let autoclick2cost = 100;
let upgradeonscreen = 0;
let previousNewsIndex = -1;
const clickSFX = new Audio('audio/mcclick.mp3');
const errorSFX = new Audio('audio/error.mp3');
const alec = document.getElementById('alec');
const autoclick1 = document.getElementById('autoclick1');
const autoclick2 = document.getElementById('autoclick2');
const descbox = document.getElementById('descbox');
const skinbutton = document.getElementById('skin');
const resetbutton = document.getElementById('reset');
const upgradesbutton = document.getElementById('upgrades');
const newslist = [
	//local news
	'local teacher calls students her "bane", gets schoolwide attention',
	'local Alec gets five adults soaking wet, sings "Dancing Queen" afterwards',
	'local Alec gets called Yacklemore, becomes a rapper',
	'local Karaoke Kevin rickrolls Joe Biden, house gets destroyed',
	'local dog revived by being transported into WordWorld and rebuilt with letters',
	'local Mike gives community service, literally nobody is suprised',
	'local man loses snapchat steak of 4 days, steals the constituition',
	//legal news
	'Nintendo gets sued by R.J. Palacio claiming that their new game, "Super Mario Bros Wonder" infringes her book series, "Wonder"',
	'Kratt brothers sued by Chris Pratt, claims their names are too similar',
	"Myles O'M, Mealz M, Miles M, and Miles E are in a legal battle because their names are too similar",
	'Minions sued by monkeys claiming they were addicted to bananas first, both end up going to rehab',
	'Tom Nook arrested after waking up resident at 2AM and forcing them to move',
	//inside jokes
	'always dead',
	'Donkey Kong gets called a bathrobe, commits various crimes',
	'the Scottius Swickius of The Bridgium Acadimium has been notified about your Alec buisness',
	'oui oui french nathanial b',
	"I'M THE BETTER CHRIS!",
	"alec's address has been leaked! he lives at 123 Alec Avenue",
	'is it alessandro, allessandro, alesandro, allesandro, sandra, sanedra, or insanedra?',
	'is it rachel or rackel?',
	'is it rejab or rehab?',
	'My name is Joseph Venice-Lanis, a 13 year old walking, talking, underwater breathing cat, and I live in the year 2219',
	'Researchers provide evidence that the Tape God is more powerful than God, Jod, Thor, Zeus, Allah, and Buddha, all combined',
	'murica pants',
	'"nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah"',
	//other
	'🪿 quack',
	'you lost the game',
	'Phoenixling breaks vending machine again, gets banned',
	'Phoenix fire extinguisher public filming leaves many confused',
	'im running out of things to put here',
	'Alma goes down again, causes mass confusion',
	'roblox servers go down again, causes no confusion',
	'You see, when I was a boy...',
	'cats > dogs',
	'alec > alec',
	"Alec's astute strategies and unwavering determination have allowed him to dominate the stock market, consistently outperforming the competition.",
	'alik iz gud at the stok markit',
	'alec is now supported by alec',
	"it's pronounced 'Deer-uh-meer-ee-in'",
	'The names Alec. Diramerian Alec',
	"if I sold Bryce, would I recieve one pound sterling?",
	'What is the motto of Angel Motto?',
	' :ƨwɘИ',
	"Little Bo Peep becomes a rapper, calls herself Lil' Beep and makes an album called 'I bleep the sheep'",
	"Little Red Riding Hood becomes a rapper, calls herself Lil' Red and makes an album called 'Riding in the Hood'",
	'GUYS IM FROM 2084! APPLE HAS RELEASED THEIR IPHONE 41 PLUS SUPER MAX SLIM TITANIUM MINI AND NINTENDO RELEASED SUPER MARIO 65, A GIANT EGG WILL CRUSH THE EARTH IN 2085, PLEASE BELEIVE ME IM NOT CRAZY!',
	"Sun is shinin' in the sky, there ain't a cloud in sight, it's stopped rainin', everybody's in the play, and don't you know, It's a beautiful new day? Runnin' down the avenue, see how the sun shines brightly in the city, on the streets where once was pity, Mr. Blue Sky is living here today, Mr. Blue Sky, please tell us why you had to hide away for so long, so long, where did we go wrong? Mr. Blue Sky, please tell us why you had to hide away for so long, so long, where did we go wrong? Hey you with the pretty face, welcome to the human race! A celebration, Mr. Blue Sky's up there waitin' And today is the day we've waited for! Mr. Blue Sky, please tell us why you had to hide away for so long, so long, where did we go wrong? Hey there, Mr. Blue, we're so pleased to be with you, look around, see what you do, everybody smiles at you hey there, Mr. Blue we're so pleased to be with you, look around, see what you do, everybody smiles at you. Mr. Blue, you did it right, but soon comes Mr. Night, creepin' over, now his hand is on your shoulder, never mind, I'll remember you this, I'll remember you this way! Mr. Blue Sky, please tell us why, you had to hide away for so long, so long, where did we go wrong? Hey there Mr. Blue, sky, we're so pleased to be with you, sky, look around see what you do, skye, ,verybody smiles at you",
];
const buttons = [
	autoclick1,
	autoclick2,
	skinbutton,
	resetbutton,
	upgradesbutton
];
const autoclick = () => {
	nume += cps;
	document.getElementById('num').innerText = nume;
};
const news = () => {
	let randomIndex;
	do {
		randomIndex = Math.floor(Math.random() * newslist.length);
	} while (randomIndex === previousNewsIndex);

	previousNewsIndex = randomIndex;

	const randomNewsItem = newslist[randomIndex];
	return randomNewsItem;
};

const newsichooseyou = () => {
  const finalnews = news();
  document.getElementById('news').innerText = 'News: ' + finalnews;
};
 
//saving
if (localStorage.getItem('nume')) nume = parseInt(localStorage.getItem('nume'));
if (localStorage.getItem('alectype')) alectype = parseInt(localStorage.getItem('alectype'));
if (localStorage.getItem('cps')) cps = parseInt(localStorage.getItem('cps'));
if (localStorage.getItem('autoclick1cost')) autoclick1cost = parseInt(localStorage.getItem('autoclick1cost'));
if (localStorage.getItem('autoclick2cost')) autoclick2cost = parseInt(localStorage.getItem('autoclick2cost'));

const saveProgress = () => {
    localStorage.setItem('nume', nume);
    localStorage.setItem('alectype', alectype);
    localStorage.setItem('cps', cps);
    localStorage.setItem('autoclick1cost', autoclick1cost);
    localStorage.setItem('autoclick2cost', autoclick2cost);
};

setInterval(saveProgress, 60000);

//skins
const updateDisplay = () => {
    document.getElementById('num').innerText = nume;
    document.getElementById('autoclick1cost').innerText = '$' + autoclick1cost;
    document.getElementById('autoclick2cost').innerText = '$' + autoclick2cost;
    if (skin === 1) {
		alec.src = alectype === 0 ? 'images/abby.png' : (alectype === 1 ? 'images/abby2.png' : 'images/sadlycl.png');
	} else if (skin === 2) {
		alec.src = alectype === 0 ? 'images/nate.png' : (alectype === 1 ? 'images/nate2.png' : 'images/nate3.png');
	} else if (skin === 3) {
		alec.src = alectype === 0 ? 'images/dash.png' : (alectype === 1 ? 'images/dash2.png' : 'images/sadlycl.png');
	} else if (skin === 4) {
		alec.src = alectype === 0 ? 'images/chris.png' : (alectype === 1 ? 'images/chris2.png' : 'images/chris3.png');
	} else if (skin === 5) {
		alec.src = alectype === 0 ? 'images/ava.png' : (alectype === 1 ? 'images/ava2.png' : 'images/ava3.png');
	} else {
		alec.src = alectype === 0 ? 'images/alec.png' : (alectype === 1 ? 'images/alec2.png' : 'images/alec3.png');
	}
};

skinbutton.addEventListener('click', () => {
	clickSFX.cloneNode().play();
    const skinchange = prompt("Which skin do you want to use? (Alec, Abby, Nate, Dash, or Chris)", "").toLowerCase();
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
    } else if (skinchange === "chris") {
    	skin = 4;
        alec.src = alectype === 0 ? 'images/chris.png' : (alectype === 1 ? 'images/chris2.png' : 'images/chris3.png');
    } else if (skinchange === "ava") {
    	skin = 5;
        alec.src = alectype === 0 ? 'images/ava.png' : (alectype === 1 ? 'images/ava2.png' : 'images/ava3.png');
    }
});

//upgrades
upgradesbutton.addEventListener('click', () => {
	clickSFX.cloneNode().play();
	if (upgradeonscreen === 0) {
		upgradeonscreen = 1;
		document.getElementById('upgradesdiv').style.right = "0%";
		autoclick1.addEventListener('click', () => {
		    if (autoclick1cost <= nume) {
		    	clickSFX.cloneNode().play();
		        cps += 1;
		        nume -= autoclick1cost;
		        autoclick1cost = autoclick1cost + Math.ceil(autoclick1cost * 0.15);
		        document.getElementById('autoclick1cost').innerText = '$' + autoclick1cost;
		        document.getElementById('num').innerText = nume;
		        saveProgress();
		    } else {
		    	errorSFX.cloneNode().play();
		    	for (let i = 0; i < 5; i++) {
		    	    setTimeout(function () {
		    	        autoclick1.style.backgroundColor = "red";
		    	        document.getElementById('autoclick1cost').style.backgroundColor = "red";
		    	    }, i * 200);

		    	    setTimeout(function () {
		    	        autoclick1.style.backgroundColor = "white";
		    	        document.getElementById('autoclick1cost').style.backgroundColor = "white";
		    	    }, (i + 0.5) * 200);
		    	}
		    }
		});
		autoclick2.addEventListener('click', () => {
		    if (autoclick2cost <= nume) {
		    	clickSFX.cloneNode().play();
		        cps += 5;
		        nume -= autoclick2cost;
		        autoclick2cost = autoclick2cost + Math.ceil(autoclick2cost * 0.15);
		        document.getElementById('autoclick2cost').innerText = '$' + autoclick2cost;
		        document.getElementById('num').innerText = nume;
		        saveProgress();
		    } else {
		    	errorSFX.cloneNode().play();
		    	for (let i = 0; i < 5; i++) {
		    	    setTimeout(function () {
		    	        autoclick2.style.backgroundColor = "red";
		    	        document.getElementById('autoclick2cost').style.backgroundColor = "red";
		    	    }, i * 200);

		    	    setTimeout(function () {
		    	        autoclick2.style.backgroundColor = "white";
		    	        document.getElementById('autoclick2cost').style.backgroundColor = "white";
		    	    }, (i + 0.5) * 200);
		    	}
		    }
		});
	} else {
		upgradeonscreen = 0;
		document.getElementById('upgradesdiv').style.right = "-100%";
	}
});

//reset
resetbutton.addEventListener('click', () => {
	clickSFX.cloneNode().play();
    const yn = prompt("Do you want to reset? THERE IS NO UNDOING THIS!", "").toLowerCase();
    if (["yes", "si", "yeah", "sure"].includes(yn)) {
        nume = 0;
        alectype = 0;
        cps = 0;
        autoclick1cost = 10;
        autoclick2cost = 100;
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
	clickSFX.cloneNode().play();
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
	} else if (skin === 4) {
		alec.src = alectype === 0 ? 'images/chrismush.png' : (alectype === 1 ? 'images/chris2mush.png' : 'images/chris3mush.png');
	} else if (skin === 5) {
		alec.src = alectype === 0 ? 'images/avamush.png' : (alectype === 1 ? 'images/ava2mush.png' : 'images/ava3mush.png');
	} else {
	    alec.src = alectype === 0 ? 'images/alecmush.png' : (alectype === 1 ? 'images/alec2mush.png' : 'images/alec3mush.png');
	}
});

alec.addEventListener('mouseup', () => {
	if (skin === 1) {
		alec.src = alectype === 0 ? 'images/abby.png' : (alectype === 1 ? 'images/abby2.png' : 'images/sadlycl.png');
	} else if (skin === 2) {
		alec.src = alectype === 0 ? 'images/nate.png' : (alectype === 1 ? 'images/nate2.png' : 'images/nate3.png');
	} else if (skin === 3) {
		alec.src = alectype === 0 ? 'images/dash.png' : (alectype === 1 ? 'images/dash2.png' : 'images/sadlycl.png');
	} else if (skin === 4) {
		alec.src = alectype === 0 ? 'images/chris.png' : (alectype === 1 ? 'images/chris2.png' : 'images/chris3.png');
	} else if (skin === 5) {
		alec.src = alectype === 0 ? 'images/ava.png' : (alectype === 1 ? 'images/ava2.png' : 'images/ava3.png');
	} else {
		alec.src = alectype === 0 ? 'images/alec.png' : (alectype === 1 ? 'images/alec2.png' : 'images/alec3.png');
	}
});

//more

function handleMouseOver(event, text) {
    descbox.style.display = 'block';
    descbox.innerText = text;

    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        descbox.style.left = x + 'px';
        descbox.style.top = (y + 20) + 'px';
    });
}

function handleMouseOut() {
    descbox.style.display = 'none';
    document.removeEventListener('mousemove', () => {});
}

buttons.forEach((button) => {
    button.addEventListener('mouseover', (event) => {
        let text = '';

        switch (button) {
            case autoclick1:
                text = "#savethehands";
                break;
            case autoclick2:
                text = "Like a baby factory, but better";
                break;
            case skinbutton:
                text = "Make your Alecs look different!";
                break;
            case resetbutton:
            	text = "BE CAREFUL WITH THIS!";
            	break;
            case upgradesbutton:
                text = "Get others to make Alecs so you don't have to!";
                break;
        }

        handleMouseOver(event, text);
    });

    button.addEventListener('mouseout', handleMouseOut);
});


setInterval(newsichooseyou, 5000);
setInterval(autoclick, 1000);
updateDisplay();

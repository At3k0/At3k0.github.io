/*jshint esversion: 6 */
//variables
let alecAmount = 0;
let totalAlecAmount = 0;
let alectype = 0;
let skin = 0;
let cps = 0;
let wyattmode = 0;
let lastFrameTime = performance.now();
let boughtwyattmode = 0;
let autoclick1cost = 10;
let autoclick2cost = 100;
let autoclick3cost = 5000;
let autoclick4cost = 100000;
let autoclick5cost = 10000000;
let autoclick6cost = 3000000000;
let upgradeonscreen = 0;
let previousNewsIndex = -1;
const clickSFX = new Audio('audio/mcclick.mp3');
const errorSFX = new Audio('audio/error.mp3');
const autoclickSFX = new Audio('audio/autoclick.mp3');
const scotlandSFX = new Audio('audio/scotland.mp3');
const duoSFX = new Audio('audio/spanish.mp3');
const chairSFX = new Audio('audio/chair.mp3');
const alec = document.getElementById('alec');
const autoclick1 = document.getElementById('autoclick1');
const autoclick2 = document.getElementById('autoclick2');
const autoclick3 = document.getElementById('autoclick3');
const autoclick4 = document.getElementById('autoclick4');
const autoclick5 = document.getElementById('autoclick5');
const autoclick6 = document.getElementById('autoclick6');
const descbox = document.getElementById('descbox');
const skinbutton = document.getElementById('skin');
const resetbutton = document.getElementById('reset');
const upgradesbutton = document.getElementById('upgrades');
const wyattmodebutton = document.getElementById('wyattmode');
const changelogbutton = document.getElementById('changelogb');

const newslist = [
	//local news
	'local teacher calls students her "bane", gets schoolwide attention',
	'local Alec gets five adults soaking wet, sings "Dancing Queen" afterwards',
	'local Alec gets called Yacklemore, becomes a rapper',
	'local Karaoke Kevin rickrolls Joe Biden, house gets destroyed',
	'local dog revived by being transported into WordWorld and rebuilt with letters',
	'local Mike gives community service, literally nobody is suprised',
	'local man loses snapchat steak of 4 days, steals the constituition',
	'local Phoenixling says "Skibidi toilet in Ohio sussy baka among us rizz balls at 3AM", gets kicked out of four square game',
	"local Saverio almost 🤌🤌🤌ed a Phoenixling with A 🤌🤌🤌ING METAL WATER BOTTLE. WOW.",
	'local Charles steals the style of Alec, gets called a swine',
	'local Middle School Bridges Confessions called a cyberbully by Kerinius Borzellius, but none of the "victims" agree',
	'local shoe gets thrown at fundraiser guy, all students agree it was justified',
	//legal news
	'Nintendo gets sued by R.J. Palacio claiming that their new game, "Super Mario Bros Wonder" infringes her book series, "Wonder"',
	'Kratt brothers sued by Chris Pratt, claims their names are too similar',
	"Myles O'M, Mealz M, Miles M, and Miles E are in a legal battle because their names are too similar",
	'Minions sued by monkeys claiming they were addicted to bananas first, both end up going to rehab',
	'Tom Nook arrested after waking up resident at 2AM and forcing them to move',
	//inside jokes
	'I AM AN OPTIMUS PRIME EARTHER. THE EARTH IS SHAPED LIKE OPTIMUS PRIME, AND IT IS TRUE. YOU CANNOT DENY IT.',
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
	'You see, when I was a boy...',
	'YEAH!!! MEATBALLS!!!',
	"What's your question soldier?",
	'Man turns in to the entire solar system, continues to teach humanities',
	'"nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah"',
	//other
	"Rooms? I was rooms once. They crazied me in a lock, a rats lock. A rats locked with crazy, and crazy makes me rooms.",
	'NEVER LET JACK BAKER COOK, yeah its in his name, BUT IT NEVER WORKS OUT IN THE END!',
	"30 year old man recites Noah Nelken's most famous quote, awarded with standing ovation (yes this actually happened, his name is Mike, no it wasn't the teacher)",
	'🪿 quack',
	'🐸 ribbit',
	'oi',
	'OI',
	'OOOOOOOOOIIIIIIIIII',
	'you lost the game',
	'Phoenixling breaks vending machine again, gets banned',
	'Phoenix fire extinguisher public filming leaves many confused',
	'im running out of things to put here',
	'Alma goes down again, causes mass confusion',
	'Bridges Academy Online students become not online for a week, causes mass confusion',
	'roblox servers go down again, causes no confusion',
	'cats > dogs',
	'alec > alec',
	"Alec's astute strategies and unwavering determination have allowed him to dominate the stock market, consistently outperforming the competition.",
	'alik iz gud at the stok markit',
	'alec is now supported by alec',
	"it's pronounced 'Deer-uh-meer-ee-in'",
	"The name's Alec. Diramerian Alec",
	"if I sold Bryce, would I recieve one pound sterling?",
	'What is the motto of Angel Motto?',
	' :ƨwɘИ',
	"pls join newspaper club its on Mondays at lunch in Jocelyn's room",
	"Little Bo Peep becomes a rapper, calls herself Lil' Beep and makes an album called 'I bleep the sheep'",
	"Little Red Riding Hood becomes a rapper, calls herself Lil' Red and makes an album called 'Riding in the Hood'",
	'GUYS IM FROM 2084! APPLE HAS RELEASED THEIR IPHONE 41 PLUS SUPER MAX SLIM TITANIUM MINI AND NINTENDO RELEASED SUPER MARIO 65, A GIANT EGG WILL CRUSH THE EARTH IN 2085, PLEASE BELEIVE ME IM NOT CRAZY!',
	//song lyrics
	'You are the dancing queen, young and sweet, only seventeen! Dancing queen, feel the beat from the tambourine, oh yeah. You can dance, you can jive, having the time of your life, ooh, see that girl, watch that scene, digging the dancing queen!',
	"I was scared of dentists and the dark, I was scared of pretty girls and starting conversations, Oh, all my friends are turning green. You're the magician's assistant in their dream. Ah-ooh-ooh-ooh, ah-ahh-ah-ah, and they come unstuck. Lady, running down to the riptide, taken away to the dark side, I wanna be your left-hand man. I love you when you're singing that song, and I got a lump in my throat 'cause you're gonna sing the words wrong. There's this movie that I think you'll like. This guy decides to quit his job and heads to New York City, this cowboy's running from himself, and she's been living on the highest shelf. Ah-ooh-ooh-ooh, ah-ahh-oh, and they come unstuck. Lady, running down to the riptide, taken away to the dark side, I wanna be your left-hand man. I love you when you're singing that song, and I got a lump in my throat 'cause you're gonna sing the words wrong. I just wanna, I just wanna know if you're gonna, if you're gonna stay. I just gotta, I just gotta know, I can't have it, I can't have it any other way - I swear she's destined for the screen. Closest thing to Michelle Pfeiffer that you've ever seen, oh, lady, running down to the riptide, taken away to the dark side, I wanna be your left-hand man, I love you when you're singing that song, and I got a lump in my throat 'cause you're gonna sing the words wrong, oh lady, running down to the riptide, taken away to the dark side, I wanna be your left-hand man. I love you when you're singing that song, and I got a lump in my throat 'cause you're gonna sing the words wrong, oh lady, running down to the riptide, taken away to the dark side, I wanna be your left-hand man. I love you when you're singing that song, and I got a lump in my throat 'cause you're gonna sing the words wrong, yeah, I got a lump in my throat 'cause you're gonna sing the words wrong",
	"Sun is shinin' in the sky, there ain't a cloud in sight, it's stopped rainin', everybody's in the play, and don't you know, It's a beautiful new day? Runnin' down the avenue, see how the sun shines brightly in the city, on the streets where once was pity, Mr. Blue Sky is living here today, Mr. Blue Sky, please tell us why you had to hide away for so long, so long, where did we go wrong? Mr. Blue Sky, please tell us why you had to hide away for so long, so long, where did we go wrong? Hey you with the pretty face, welcome to the human race! A celebration, Mr. Blue Sky's up there waitin' And today is the day we've waited for! Mr. Blue Sky, please tell us why you had to hide away for so long, so long, where did we go wrong? Hey there, Mr. Blue, we're so pleased to be with you, look around, see what you do, everybody smiles at you hey there, Mr. Blue we're so pleased to be with you, look around, see what you do, everybody smiles at you. Mr. Blue, you did it right, but soon comes Mr. Night, creepin' over, now his hand is on your shoulder, never mind, I'll remember you this, I'll remember you this way! Mr. Blue Sky, please tell us why, you had to hide away for so long, so long, where did we go wrong? Hey there Mr. Blue, sky, we're so pleased to be with you, sky, look around see what you do, skye, ,verybody smiles at you",
];
const buttons = [
	autoclick1,
	autoclick2,
	autoclick3,
	autoclick4,
	autoclick5,
	autoclick6,
	skinbutton,
	resetbutton,
	upgradesbutton,
	changelogbutton,
	aps,
	totalnum
];

function formatNumberWithCommas(number) {
	return number.toLocaleString();
}

function abbreviateNumber(number) {
	const abbreviations = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "De", "Un", "Duodec", "Tredec", "if you got to this number, please stop playing and go outside, thank you :)"];
	
	const tier = Math.log10(Math.abs(number)) / 3 | 0;
	if (tier === 0) return number;

	const suffix = abbreviations[tier];
	const scale = Math.pow(10, tier * 3);

	const scaled = number / scale;
	return scaled.toFixed(1) + suffix;
}

//news
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
if (localStorage.getItem('alecAmount')) alecAmount = parseInt(localStorage.getItem('alecAmount'));
if (localStorage.getItem('totalAlecAmount')) totalAlecAmount = parseInt(localStorage.getItem('totalAlecAmount'));
if (localStorage.getItem('alectype')) alectype = parseInt(localStorage.getItem('alectype'));
if (localStorage.getItem('cps')) cps = parseInt(localStorage.getItem('cps'));
if (localStorage.getItem('skin')) skin = parseInt(localStorage.getItem('skin'));
if (localStorage.getItem('autoclick1cost')) autoclick1cost = parseInt(localStorage.getItem('autoclick1cost'));
if (localStorage.getItem('autoclick2cost')) autoclick2cost = parseInt(localStorage.getItem('autoclick2cost'));
if (localStorage.getItem('autoclick3cost')) autoclick3cost = parseInt(localStorage.getItem('autoclick3cost'));
if (localStorage.getItem('autoclick4cost')) autoclick4cost = parseInt(localStorage.getItem('autoclick4cost'));
if (localStorage.getItem('autoclick5cost')) autoclick5cost = parseInt(localStorage.getItem('autoclick5cost'));
if (localStorage.getItem('autoclick6cost')) autoclick6cost = parseInt(localStorage.getItem('autoclick6cost'));
if (localStorage.getItem('boughtwyattmode')) boughtwyattmode = parseInt(localStorage.getItem('boughtwyattmode'));

const saveProgress = () => {
	localStorage.setItem('alecAmount', alecAmount);
	localStorage.setItem('totalAlecAmount', totalAlecAmount);
	localStorage.setItem('alectype', alectype);
	localStorage.setItem('cps', cps);
	localStorage.setItem('skin', skin);
	localStorage.setItem('autoclick1cost', autoclick1cost);
	localStorage.setItem('autoclick2cost', autoclick2cost);
	localStorage.setItem('autoclick3cost', autoclick3cost);
	localStorage.setItem('autoclick4cost', autoclick4cost);
	localStorage.setItem('autoclick5cost', autoclick5cost);
	localStorage.setItem('autoclick6cost', autoclick6cost);
	localStorage.setItem('boughtwyattmode', boughtwyattmode);
};

setInterval(saveProgress, 60000);

//skins
const updateDisplay = () => {
	document.getElementById('num').innerText = 'Alecs: ' + abbreviateNumber(alecAmount);
	document.getElementById('aps').innerText = 'APS: ' + abbreviateNumber(cps);
	document.getElementById('totalnum').innerText = 'Total Alecs: ' + abbreviateNumber(totalAlecAmount);
	document.getElementById('autoclick1cost').innerText = '$' + abbreviateNumber(autoclick1cost);
	document.getElementById('autoclick2cost').innerText = '$' + abbreviateNumber(autoclick2cost);
	document.getElementById('autoclick3cost').innerText = '$' + abbreviateNumber(autoclick3cost);
	document.getElementById('autoclick4cost').innerText = '$' + abbreviateNumber(autoclick4cost);
	document.getElementById('autoclick5cost').innerText = '$' + abbreviateNumber(autoclick5cost);
	document.getElementById('autoclick6cost').innerText = '$' + abbreviateNumber(autoclick6cost);
	if (wyattmode === 1) {
		alec.src = 'images/why.jpeg';
	} else {
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
		} else if (skin === 6) {
			alec.src = alectype === 0 ? 'images/rence.png' : (alectype === 1 ? 'images/rence2.png' : 'images/rence3.png');
		} else {
			alec.src = alectype === 0 ? 'images/alec.png' : (alectype === 1 ? 'images/alec2.png' : 'images/alec3.png');
		}
	}
};

skinbutton.addEventListener('click', () => {
	clickSFX.cloneNode().play();

	const skinImages = {
	alec: ['alec.png', 'alec2.png', 'alec3.png'],
	abby: ['abby.png', 'abby2.png', 'sadlycl.png'],
	nate: ['nate.png', 'nate2.png', 'nate3.png'],
	dash: ['dash.png', 'dash2.png', 'sadlycl.png'],
	chris: ['chris.png', 'chris2.png', 'chris3.png'],
	ava: ['ava.png', 'ava2.png', 'ava3.png'],
	rence: ['rence.png', 'rence2.png', 'rence3.png'],
};

const skinchange = prompt("Which skin do you want to use? (Alec, Abby, Nate, Dash, Chris, Ava, or Rence)", "").toLowerCase();

if (skinImages.hasOwnProperty(skinchange)) {
	skin = Object.keys(skinImages).indexOf(skinchange);
	alec.src = `images/${skinImages[skinchange][alectype]}`;
}
});


//upgrades
upgradesbutton.addEventListener('click', () => {
	clickSFX.cloneNode().play();
	if (upgradeonscreen === 0) {
		upgradeonscreen = 1;
		document.getElementById("news").classList.toggle("active");
		document.getElementById('upgradesdiv').style.right = "0%";
		autoclick1.addEventListener('click', () => {
			if (autoclick1cost <= alecAmount) {
				autoclickSFX.cloneNode().play();
				cps += 1;
				alecAmount -= autoclick1cost;
				autoclick1cost = autoclick1cost + Math.ceil(autoclick1cost * 0.15);
				document.getElementById('autoclick1cost').innerText = '$' + abbreviateNumber(autoclick1cost);
				document.getElementById('num').innerText = 'Alecs: ' + abbreviateNumber(alecAmount);
				document.getElementById('aps').innerText = 'APS: ' + abbreviateNumber(cps);
				saveProgress();
			} else {
				errorSFX.cloneNode().play();
				for (let i = 0; i < 5; i++) {
					setTimeout(function() {
						autoclick1.style.backgroundColor = "red";
						document.getElementById('autoclick1cost').style.backgroundColor = "red";
					}, i * 200);

					setTimeout(function() {
						autoclick1.style.backgroundColor = "white";
						document.getElementById('autoclick1cost').style.backgroundColor = "white";
					}, (i + 0.5) * 200);
				}
			}
		});
		autoclick2.addEventListener('click', () => {
			if (autoclick2cost <= alecAmount) {
				clickSFX.cloneNode().play();
				cps += 30;
				alecAmount -= autoclick2cost;
				autoclick2cost = autoclick2cost + Math.ceil(autoclick2cost * 0.15);
				document.getElementById('autoclick2cost').innerText = '$' + abbreviateNumber(autoclick2cost);
				document.getElementById('num').innerText = 'Alecs: ' + abbreviateNumber(alecAmount);
				document.getElementById('aps').innerText = 'APS: ' + abbreviateNumber(cps);
				saveProgress();
			} else {
				errorSFX.cloneNode().play();
				for (let i = 0; i < 5; i++) {
					setTimeout(function() {
						autoclick2.style.backgroundColor = "red";
						document.getElementById('autoclick2cost').style.backgroundColor = "red";
					}, i * 200);

					setTimeout(function() {
						autoclick2.style.backgroundColor = "white";
						document.getElementById('autoclick2cost').style.backgroundColor = "white";
					}, (i + 0.5) * 200);
				}
			}
		});
		autoclick3.addEventListener('click', () => {
			if (autoclick3cost <= alecAmount) {
				scotlandSFX.cloneNode().play();
				cps += 300;
				alecAmount -= autoclick3cost;
				autoclick3cost = autoclick3cost + Math.ceil(autoclick3cost * 0.15);
				document.getElementById('autoclick3cost').innerText = '$' + abbreviateNumber(autoclick3cost);
				document.getElementById('num').innerText = 'Alecs: ' + abbreviateNumber(alecAmount);
				document.getElementById('aps').innerText = 'APS: ' + abbreviateNumber(cps);
				saveProgress();
			} else {
				errorSFX.cloneNode().play();
				for (let i = 0; i < 5; i++) {
					setTimeout(function() {
						autoclick3.style.backgroundColor = "red";
						document.getElementById('autoclick3cost').style.backgroundColor = "red";
					}, i * 200);

					setTimeout(function() {
						autoclick3.style.backgroundColor = "white";
						document.getElementById('autoclick3cost').style.backgroundColor = "white";
					}, (i + 0.5) * 200);
				}
			}
		});
		autoclick4.addEventListener('click', () => {
			if (autoclick4cost <= alecAmount) {
				clickSFX.cloneNode().play();
				cps += 10000;
				alecAmount -= autoclick4cost;
				autoclick4cost = autoclick4cost + Math.ceil(autoclick4cost * 0.15);
				document.getElementById('autoclick4cost').innerText = '$' + abbreviateNumber(autoclick4cost);
				document.getElementById('num').innerText = 'Alecs: ' + abbreviateNumber(alecAmount);
				document.getElementById('aps').innerText = 'APS: ' + abbreviateNumber(cps);
				saveProgress();
			} else {
				errorSFX.cloneNode().play();
				for (let i = 0; i < 5; i++) {
					setTimeout(function() {
						autoclick4.style.backgroundColor = "red";
						document.getElementById('autoclick4cost').style.backgroundColor = "red";
					}, i * 200);

					setTimeout(function() {
						autoclick4.style.backgroundColor = "white";
						document.getElementById('autoclick4cost').style.backgroundColor = "white";
					}, (i + 0.5) * 200);
				}
			}
		});
		autoclick5.addEventListener('click', () => {
			if (autoclick5cost <= alecAmount) {
				chairSFX.cloneNode().play();
				cps += 250000;
				alecAmount -= autoclick5cost;
				autoclick5cost = autoclick5cost + Math.ceil(autoclick5cost * 0.15);
				document.getElementById('autoclick5cost').innerText = '$' + abbreviateNumber(autoclick5cost);
				document.getElementById('num').innerText = 'Alecs: ' + abbreviateNumber(alecAmount);
				document.getElementById('aps').innerText = 'APS: ' + abbreviateNumber(cps);
				saveProgress();
			} else {
				errorSFX.cloneNode().play();
				for (let i = 0; i < 5; i++) {
					setTimeout(function() {
						autoclick5.style.backgroundColor = "red";
						document.getElementById('autoclick5cost').style.backgroundColor = "red";
					}, i * 200);

					setTimeout(function() {
						autoclick5.style.backgroundColor = "white";
						document.getElementById('autoclick5cost').style.backgroundColor = "white";
					}, (i + 0.5) * 200);
				}
			}
		});
		autoclick6.addEventListener('click', () => {
			if (autoclick6cost <= alecAmount) {
				duoSFX.cloneNode().play();
				cps += 10000000;
				alecAmount -= autoclick6cost;
				autoclick6cost += Math.ceil(autoclick6cost * 0.15);
				document.getElementById('autoclick6cost').innerText = '$' + abbreviateNumber(autoclick6cost);
				document.getElementById('num').innerText = 'Alecs: ' + abbreviateNumber(alecAmount);
				document.getElementById('aps').innerText = 'APS: ' + abbreviateNumber(cps);
				saveProgress();
			} else {
				errorSFX.cloneNode().play();
				for (let i = 0; i < 5; i++) {
					setTimeout(function() {
						autoclick6.style.backgroundColor = "red";
						document.getElementById('autoclick6cost').style.backgroundColor = "red";
					}, i * 200);

					setTimeout(function() {
						autoclick6.style.backgroundColor = "white";
						document.getElementById('autoclick6cost').style.backgroundColor = "white";
					}, (i + 0.5) * 200);
				}
			}
		});
	} else {
		upgradeonscreen = 0;
		document.getElementById('upgradesdiv').style.right = "-340px";
	}
});

//reset
resetbutton.addEventListener('click', () => {
	clickSFX.cloneNode().play();
	const yn = prompt("Do you want to reset? THERE IS NO UNDOING THIS!", "").toLowerCase();
	if (["yes", "si", "yeah", "sure"].includes(yn)) {
		alecAmount = 0;
		totalAlecAmount = 0;
		alectype = 0;
		cps = 0;
		boughtwyattmode = 0;
		autoclick1cost = 10;
		autoclick2cost = 100;
		autoclick3cost = 5000;
		autoclick4cost = 100000;
		autoclick5cost = 10000000;
		autoclick6cost = 3000000000;
		saveProgress();
		document.location.reload();
	}
});

//changelog
changelog.addEventListener('click', () => {
	if (changelog.style.bottom === "40%") {
		changelog.style.bottom = "-100%";
	}
});

changelogbutton.addEventListener('click', () => {
	if (changelog.style.bottom === "40%") {
		changelog.style.bottom = "-100%";
	} else {
		changelog.style.bottom = "40%";
	}
});


//clicks
const bclick = () => {
	clickSFX.cloneNode().play();
	alecAmount += alectype === 0 ? 1 : (alectype === 1 ? 5 : 10);
	totalAlecAmount += alectype === 0 ? 1 : (alectype === 1 ? 5 : 10);
	document.getElementById('totalnum').innerText = 'Total Alecs: ' + totalAlecAmount;
	document.getElementById('num').innerText = 'Alecs: ' + alecAmount;
	if (alecAmount >= 50 && alectype === 0 || alecAmount >= 500 && alectype === 1) {
		document.getElementById('newalec').style.top = "10%";
	}
	saveProgress();
};

const nbclick = () => {
	clickSFX.cloneNode().play();
	alectype++;
	alec.src = alectype === 0 ? 'images/alec.png' : (alectype === 1 ? 'images/alec2.png' : 'images/alec3.png');
	document.getElementById('newalec').style.top = "-100%";
	alecAmount -= (alectype === 1) ? 50 : (alectype === 2) ? 500 : 0;
	updateDisplay();
	saveProgress();
};


alec.addEventListener('mousedown', () => {
	if (wyattmode === 1) {
		alec.src = 'images/why.jpeg';
	} else {
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
		} else if (skin === 6) {
			alec.src = alectype === 0 ? 'images/rencemush.png' : (alectype === 1 ? 'images/rence2mush.png' : 'images/rence3mush.png');
		} else {
			alec.src = alectype === 0 ? 'images/alecmush.png' : (alectype === 1 ? 'images/alec2mush.png' : 'images/alec3mush.png');
		}
	}
});

alec.addEventListener('mouseup', () => {
	if (wyattmode === 1) {
		alec.src = 'images/why.jpeg';
	} else {
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
		} else if (skin === 6) {
			alec.src = alectype === 0 ? 'images/rence.png' : (alectype === 1 ? 'images/rence2.png' : 'images/rence3.png');
		} else {
			alec.src = alectype === 0 ? 'images/alec.png' : (alectype === 1 ? 'images/alec2.png' : 'images/alec3.png');
		}
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
				text = "10/10 free autoclicker download full hd no virus 2023";
				break;
			case autoclick2:
				text = "Like a baby factory, but better";
				break;
			case autoclick3:
				text = "The name 'Alec' is technically Scottish, even though I'm Armenian...";
				break;
			case autoclick4:
				text = "Used as a mating call, very effective";
				break;
			case autoclick5:
				text = "No, I definitally didn't run out of ideas, that would be crazy... ok yeah I ran out of ideas.";
				break;
			case autoclick6:
				text = "Get Duo to force Alecs to do thier Duolingo lessons!";
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
			case changelogbutton:
				text = "View the changelog";
				break;
			case aps:
				text = "Alecs per Second";
				break;
			case totalnum:
				text = "The amount of Alecs you've uh... 'created' during this playthrough (counts from v0.4.1 onwards)";
				break;
		}
		handleMouseOver(event, text);
	});
	button.addEventListener('mouseout', handleMouseOut);
});

window.addEventListener('load', function () {
	document.getElementById('loading').style.display = 'none';
	document.getElementById('content').style.display = 'block';
});

if (boughtwyattmode === 1) {
	wyattmodebutton.innerText = 'TOGGLE WYATT MODE';
}

wyattmodebutton.addEventListener('click', () => {
	clickSFX.cloneNode().play();
	if (boughtwyattmode === 0 && alecAmount >= 100000000) {
		boughtwyattmode = 1;
		wyattmodebutton.innerText = 'TOGGLE WYATT MODE';
	} else if (wyattmode === 0 && boughtwyattmode === 1) {
		document.body.style.backgroundImage = 'url("images/why.jpeg")';
		document.body.style.backgroundSize = 'cover';
		document.getElementById('news').innerText = 'WYATT MODE ACTIVATED';
		skinbutton.innerText = 'WYCHANGE WYSKIN';
		resetbutton.innerText = 'WYRESET';
		upgradesbutton.innerText = 'WYUPGRADES';
		wyattmode = 1;
		updateDisplay();
	} else if (wyattmode === 1 && boughtwyattmode === 1) {
		document.body.style.backgroundImage = 'none';
		document.getElementById('news').innerText = 'WYATT MODE deactivated';
		skinbutton.innerText = 'Change Skin';
		resetbutton.innerText = 'Reset';
		upgradesbutton.innerText = 'Upgrades';
		wyattmode = 0;
		updateDisplay();
	}

});

function updateAlecAmount(currentTime) {
	const frameTime = currentTime - lastFrameTime;
	const secondsElapsed = frameTime / 1000;
	alecAmount += cps * secondsElapsed;
	totalAlecAmount += cps * secondsElapsed;
	document.getElementById('num').innerText = 'Alecs: ' + '$' + abbreviateNumber(Math.floor(alecAmount));
	document.getElementById('totalnum').innerText = 'Total Alecs: ' + abbreviateNumber(Math.floor(totalAlecAmount));
	lastFrameTime = currentTime;
	requestAnimationFrame(updateAlecAmount);
}

requestAnimationFrame(updateAlecAmount);
setInterval(newsichooseyou, 5000);
updateDisplay();
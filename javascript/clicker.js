/*jshint esversion: 6 */
//variables
let alecAmount = 0;
let totalAlecAmount = 0;
let alectype = 0;
let skin = 0;
let cps = 0;
let timer;
let wyattmode = 0;
let lastFrameTime = performance.now();
let boughtwyattmode = 0;
let upgradeonscreen = 0;
let previousNewsIndex = -1;
let autoclick1cost = 15;
let autoclick2cost = 100;
let autoclick3cost = 1100;
let autoclick4cost = 12000;
let autoclick5cost = 130000;
let autoclick6cost = 1400000;
let autoclick7cost = 20000000;
let autoclick8cost = 330000000;
let autoclick9cost = 5100000000;
let autoclick10cost = 75000000000;
let autoclick11cost = 1000000000000;
let autoclick12cost = 14000000000000;
let autoclick13cost = 170000000000000;
const clickSFX = new Audio('audio/mcclick.mp3');
const errorSFX = new Audio('audio/error.mp3');
const autoclickSFX = new Audio('audio/autoclick.mp3');
const factorySFX = new Audio('audio/factory.mp3');
const scotlandSFX = new Audio('audio/scotland.mp3');
const flannelSFX = new Audio('audio/flannel.mp3');
const chairSFX = new Audio('audio/chair.mp3');
const duoSFX = new Audio('audio/spanish.mp3');
const trainSFX = new Audio('audio/train.mp3');
const milkSFX = new Audio('audio/milk.mp3');
const cloneSFX = new Audio('audio/clone.mp3');
const meowSFX = new Audio('audio/meow.mp3');
const chompSFX = new Audio('audio/chomp.mp3');
const summonSFX = new Audio('audio/summon.mp3');
const birdSFX = new Audio('audio/bird.mp3');
const alec = document.getElementById('alec');
const descbox = document.getElementById('descbox');
const skinbutton = document.getElementById('skin');
const resetbutton = document.getElementById('reset');
const upgradesbutton = document.getElementById('upgrades');
const wyattmodebutton = document.getElementById('wyattmode');
const changelogbutton = document.getElementById('changelogb');
console.log("reminder to add pet owner names");
const newslist = [
	//radio
	`You are the dancing queen, young and sweet, only seventeen! Dancing queen, feel the beat from the tambourine, oh yeah. You can dance, you can jive, having the time of your life, ooh, see that girl, watch that scene, digging the dancing queen!`,
	`I was scared of dentists and the dark, I was scared of pretty girls and starting conversations, Oh, all my friends are turning green. You're the magician's assistant in their dream. Ah-ooh-ooh-ooh, ah-ahh-ah-ah, and they come unstuck. Lady, running down to the riptide, taken away to the dark side, I wanna be your left-hand man. I love you when you're singing that song, and I got a lump in my throat 'cause you're gonna sing the words wrong. There's this movie that I think you'll like. This guy decides to quit his job and heads to New York City, this cowboy's running from himself, and she's been living on the highest shelf. Ah-ooh-ooh-ooh, ah-ahh-oh, and they come unstuck. Lady, running down to the riptide, taken away to the dark side, I wanna be your left-hand man. I love you when you're singing that song, and I got a lump in my throat 'cause you're gonna sing the words wrong. I just wanna, I just wanna know if you're gonna, if you're gonna stay. I just gotta, I just gotta know, I can't have it, I can't have it any other way - I swear she's destined for the screen. Closest thing to Michelle Pfeiffer that you've ever seen, oh, lady, running down to the riptide, taken away to the dark side, I wanna be your left-hand man, I love you when you're singing that song, and I got a lump in my throat 'cause you're gonna sing the words wrong, oh lady, running down to the riptide, taken away to the dark side, I wanna be your left-hand man. I love you when you're singing that song, and I got a lump in my throat 'cause you're gonna sing the words wrong, oh lady, running down to the riptide, taken away to the dark side, I wanna be your left-hand man. I love you when you're singing that song, and I got a lump in my throat 'cause you're gonna sing the words wrong, yeah, I got a lump in my throat 'cause you're gonna sing the words wrong`,
	`Sun is shinin' in the sky, there ain't a cloud in sight, it's stopped rainin', everybody's in the play, and don't you know, It's a beautiful new day? Runnin' down the avenue, see how the sun shines brightly in the city, on the streets where once was pity, Mr. Blue Sky is living here today, Mr. Blue Sky, please tell us why you had to hide away for so long, so long, where did we go wrong? Mr. Blue Sky, please tell us why you had to hide away for so long, so long, where did we go wrong? Hey you with the pretty face, welcome to the human race! A celebration, Mr. Blue Sky's up there waitin' And today is the day we've waited for! Mr. Blue Sky, please tell us why you had to hide away for so long, so long, where did we go wrong? Hey there, Mr. Blue, we're so pleased to be with you, look around, see what you do, everybody smiles at you hey there, Mr. Blue we're so pleased to be with you, look around, see what you do, everybody smiles at you. Mr. Blue, you did it right, but soon comes Mr. Night, creepin' over, now his hand is on your shoulder, never mind, I'll remember you this, I'll remember you this way! Mr. Blue Sky, please tell us why, you had to hide away for so long, so long, where did we go wrong? Hey there Mr. Blue, sky, we're so pleased to be with you, sky, look around see what you do, skye, ,verybody smiles at you`,
	`I would like to reach out my hand. I may see you, I may tell you to run. (on my way, on my way) You know what they say about the young. Well pick me up with golden hand. I may see you, I may tell you to run. (on my way, on my way) You know what they say about the young. Well, I would like to hold my little hand, and we will run, we will, we will crawl, we will, I would like to hold my little hand, and we will run, we will, we will crawl, send me on my way (on my way) Send me on my way (on my way) Send me on my way (on my way) Send me on my way (on my way) Send me on my way (on my way) Send me on my way (on my way) Send me on my way (on my way) Mm hmm (on my way) I would like to reach out my hand, I may see you, I may tell you to run (on my way, on my way) You know what they say about the young. Now pick me up with golden hand, I may see you, I may tell you to run (on my way, on my way) You know what they say about the young. Well, I would like to hold my little hand, and we will run, we will, we will crawl, we will, I would like to hold my little hand, and we will run, we will, we will crawl, send me on my way (on my way) Send me on my way (on my way) Send me on my way (on my way) Send me on my way (on my way) Send me on my way (on my way) Send me on my way (on my way) Send me on my way (on my way) Mm hmm (on my way) Well, I would like to hold my little hand, and we will run, we will, we will crawl, we will I would like to hold my little hand, and we will run, we will, we will crawl, send me on my way, send me on my way, send me on my way, on my way, send me on my way, send me on my way Oh oh oh (way) Send me on my way Oh oh oh (way) Send me on my way. I would like to reach out my hand, I may see you, I may tell you to run (on my way, on my way) You know what they say about the young`,
	`(Tweedle-lee-deedle-lee-dee) (Tweedle-lee-deedle-lee-dee) (Tweedle-lee-deedle-lee-dee) (Tweedle-lee-deedle-lee-dee) (Tweedle-lee-deedle-lee-dee) (Tweedle-lee-deedle-lee-dee) (Tweet tweet tweet tweet) He rocks in the treetop all the day long, Hoppin' and a-boppin' and a-singin' his song. All the little birds on Jay Bird Street love to hear the robin go tweet tweet tweet. Rockin' robin (tweet tweet tweet) Rock, rock, rockin' robin (Tweet, tweedle-lee-dee) Blow, rockin' robin 'Cause we're really gonna rock tonight, yeah (Tweet, tweedle-lee-dee) Every little swallow, every chickadee, every little bird in the tall oak tree. The wise old owl, the big black crow, flap-a their wings singin' "go bird go" Rockin' robin (tweet tweet tweet) Rock, rock, rockin' robin (Tweet, tweedle-lee-dee) Blow, rockin' robin 'Cause we're really gonna rock tonight, blow! (Tweet, tweedle-lee-dee) A pretty little raven at the bird bandstand, taught him how to do the bop and it was grand, they started goin' steady and bless my soul, he out-bopped the buzzard and the oriole. He rocks in the treetop all the day long, Hoppin' and a-boppin' and a-singin' his song. All the little birds on Jay Bird Street love to hear the robin go tweet tweet tweet. Rockin' robin (tweet tweet tweet) Rock, rock, rockin' robin (Tweet, tweedle-lee-dee) Blow, rockin' robin 'Cause we're really gonna rock tonight (Tweet, tweedle-lee-dee) Well, the pretty little raven at the bird bandstand, taught him how to do the bop and it was grand, they started goin' steady and bless my soul, he out-bopped the buzzard and the oriole. He rocks in the treetop all the day long, Hoppin' and a-boppin' and a-singin' his song. All the little birds on Jay Bird Street love to hear the robin go tweet tweet tweet Rockin' robin (tweet tweet tweet) Rock, rock, rockin' robin (Tweet, tweedle-lee-dee) Blow, rockin' robin 'Cause we're really gonna rock tonight (Tweet, tweedle-lee-dee) (Tweedle-lee-deedle-lee-dee) (Tweedle-lee-deedle-lee-dee) (Tweedle-lee-deedle-lee-dee) (Tweedle-lee-deedle-lee-dee) (Tweedle-lee-deedle-lee-dee) (Tweedle-lee-deedle-lee-dee) (Tweet tweet) (wolf whistle)`, //not based off the Michael Jackson version, this is based on the Bobby Day one from 1958
	`Pressure! Pushin' down on me, pressin' down on you, no man ask for. Under pressure, that brings a building down, splits a family in two, puts people on streets. That's okay. That's the terror of knowing what this world is about, watchin' some good friends screamin', "Let me out!" Pray tomorrow gets me higher, pressure on people, people on streets. Chippin' around, kick my brains 'round the floor, these are the days it never rains but it pours. People on streets. It's the terror of knowing what this world is about, watching some good friends screaming, "Let me out!" Pray tomorrow gets me higher, higher, high! Pressure on people, people on streets. Turned away from it all like a blind man, sat on the fence but it don't work, keep comin' up with love but it's so slashed and torn, why, why, whyyyyyyyyyyyyyyyyyyyyyyy? Love, love, love, love. Insanity laughs under pressure we're breaking, can't we give ourselves one more chance? Why can't we give love that one more chance? Why can't we give love, give love, give love, give love, give love, give love, give love, give love? 'Cause love's such an old-fashioned word, and love dares you to care for the people on the edge of the night, and love dares you to change our way of caring about ourselves, this is our last dance, this is our last dance, this is ourselves. Under pressure. Under pressure. Pressure.`,
	//local news
	`local teacher calls students her 'bane', gets schoolwide attention`,
	`local Alec gets five adults soaking wet, sings 'Dancing Queen' afterwards`,
	`local Alec gets called Yacklemore, becomes a rapper`,
	`local Karaoke Kevin rickrolls Joe Biden, house gets destroyed`,
	`local dog revived by being transported into WordWorld and rebuilt with letters`,
	`local Mike gives community service, literally nobody is suprised`,
	`local man loses snapchat steak of 4 days, steals the constituition`,
	`local Phoenixling says "Skibidi toilet in Ohio sussy baka among us rizz balls at 3AM", gets kicked out of four square game`,
	`local Saverio almost 🤌🤌🤌ed a Phoenixling with A 🤌🤌🤌ING METAL WATER BOTTLE. WOW.`,
	`local Charles steals the style of Alec, gets called a swine`,
	`local Middle School Bridges Confessions called a cyberbully by Kerinius Borzellius, but none of the "victims" agree`,
	`local shoe gets thrown at fundraiser guy, all students agree it was justified`,
	`local PSAT app turns man into a smurf`,
	//local pets
	`local Samson is a good dog`,
	`local Bentley is a good dog`,
	`local Junebug is a good dog`,
	`local Jack is a good dog`,
	`local Penny is a good dog`,
	`local Fish is a good dog`,
	`local Chips is a good dog`,
	`local Pinchy is good dog`,
	`local Monkey is a good dog`,
	`local Speck is a good dog`, //pet owned by Rachel J.
	`local Gilligan is a good dog`, //pet owned by Dafna K.
	`local Adonis is a good dog`,
	`local Remy is a good dog`,
	`local Owen is a good dog`,
	`local Torch is a good crested gecko`,
	`local Gecky is a good crested gecko`,
	`local Bean is a good cat`,
	`local Key is a good cat`, //pet owned by Kirk S.
	`local Baby Key is a good cat`, //pet owned by Kirk S.
	`local Tiny Key is a good cat`, //pet owned by Kirk S.
	`local Key is a good cat`, //pet owned by Kirk S.
	`local Rex is a good cat`, //pet owned by Rence A.
	`local Blu is a good cat`, //pet owned by Rence A.
	`local Vacuum Cleaner is a good Black Ghost Knifefish`, //yes this is a real pet
	`local bill is a good bill`, //pet owned by bill
	`local Zoe will rest in peace`,
	`local Archie will rest in peace`, //pet owned by Carmen S.
	//legal news
	`Nintendo gets sued by R.J. Palacio claiming that their new game, "Super Mario Bros Wonder" infringes her book series, "Wonder"`,
	`Kratt brothers sued by Chris Pratt, claims their names are too similar`,
	`Myles O'M, Mealz M, Miles M, and Miles E are in a legal battle because their names are too similar`,
	`Minions sued by monkeys claiming they were addicted to bananas first, both end up going to rehab`,
	`Tom Nook arrested after waking up resident at 2AM and forcing them to move`,
	//inside jokes
	`I AM AN OPTIMUS PRIME EARTHER. THE EARTH IS SHAPED LIKE OPTIMUS PRIME, AND IT IS TRUE. YOU CANNOT DENY IT.`,
	`always dead`,
	`Donkey Kong gets called a bathrobe, commits various crimes`,
	`the Scottius Swickius of The Bridgium Acadimium has been notified about your Alec buisness`,
	`oui oui french nathanial b`,
	`I'M THE BETTER CHRIS!`,
	`alec's address has been leaked! he lives at 123 Alec Avenue`,
	`is it alessandro, allessandro, alesandro, allesandro, sandra, sanedra, or insanedra?`,
	`is it rachel or rackel?`,
	`is it rejab or rehab?`,
	`My name is Joseph Venice-Lanis, a 13 year old walking, talking, underwater breathing cat, and I live in the year 2219`,
	`Researchers provide evidence that the Tape God is more powerful than God, Jod, Thor, Zeus, Allah, and Buddha, all combined`,
	`murica pants`,
	`You see, when I was a boy...`,
	`YEAH!!! MEATBALLS!!!`,
	`What's your question soldier?`,
	`Man turns in to the entire solar system, continues to teach humanities`,
	`"nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah" "nuh uh" "uh yeah"`,
	//other
	`PERRY THE SCHLOGGINATOR IS AT MY HOUSE! HE'S COMING FOR ME!!!`,
	`Rooms? I was rooms once. They crazied me in a lock, a rats lock. A rats locked with crazy, and crazy makes me rooms.`,
	`NEVER LET JACK BAKER COOK, yeah its in his name, BUT IT NEVER WORKS OUT IN THE END!`,
	`30 year old man recites Noah Nelken's most famous quote, awarded with standing ovation (yes this actually happened, his name is Mike, no it wasn't the teacher)`,
	`🪿 quack`,
	`🐸 ribbit`,
	`oi`,
	`OI`,
	`OOOOOOOOOIIIIIIIIII`,
	`you lost the game`,
	`Phoenixling breaks vending machine again, gets banned`,
	`Phoenix fire extinguisher public filming leaves many confused`,
	`im running out of things to put here`,
	`Alma goes down again, causes mass confusion`,
	`Bridges Academy Online students become not online for a week, causes mass confusion`,
	`roblox servers go down again, causes no confusion`,
	`cats > dogs`,
	`alec > alec`,
	`Alec's astute strategies and unwavering determination have allowed him to dominate the stock market, consistently outperforming the competition.`,
	`alik iz gud at the stok markit`,
	`alec is now supported by alec`,
	`it's pronounced 'Deer-uh-meer-ee-in'`,
	`The name's Alec. Diramerian Alec`,
	`if I sold Bryce, would I recieve one pound sterling?`,
	`What is the motto of Angel Motto?`,
	` :ƨwɘИ`,
	`pls join newspaper club its on Mondays at lunch in Jocelyn's room`,
	`Little Bo Peep becomes a rapper, calls herself Lil' Beep and makes an album called 'I bleep the sheep'`,
	`Little Red Riding Hood becomes a rapper, calls herself Lil' Red and makes an album called 'Riding in the Hood'`,
	`GUYS IM FROM 2084! APPLE HAS RELEASED THEIR IPHONE 41 PLUS SUPER MAX SLIM TITANIUM MINI AND NINTENDO RELEASED SUPER MARIO 65, A GIANT EGG WILL CRUSH THE EARTH IN 2085, PLEASE BELEIVE ME IM NOT CRAZY!`,
];

const buttons = [
	autoclick1,
	autoclick2,
	autoclick3,
	autoclick4,
	autoclick5,
	autoclick6,
	autoclick7,
	autoclick8,
	autoclick9,
	autoclick10,
	autoclick11,
	autoclick12,
	autoclick13,
	skinbutton,
	resetbutton,
	upgradesbutton,
	changelogbutton,
	aps,
	totalnum
];

function abbreviateNumber(number) {
	const abbreviations = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "De", "Un", "Dd", "Td", "Qad", "Qid", "Sxd", "Spd", "Ocd", "Nod", "Vg", "Uvg", "if you got to this number, please stop playing and go outside, thank you :)"];
	const tier = Math.log10(Math.abs(number)) / 3 | 0;
	if (tier === 0) return number;
	const suffix = abbreviations[tier];
	const scale = Math.pow(10, tier * 3);
	const scaled = number / scale;
	return scaled.toFixed(1) + suffix;
}

//news
const startTimer = () => timer = setInterval(newsichooseyou, 7500);

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
	if (newslist.indexOf(finalnews) >= 0 && newslist.indexOf(finalnews) <= 5) {
		document.getElementById('news').innerText = 'Radio: ' + finalnews;
	} else {
		document.getElementById('news').innerText = 'News: ' + finalnews;
	}
};

document.getElementById('news').addEventListener('click', () =>{
	newsichooseyou();
	clearInterval(timer);
	startTimer();
});

//saving
const loadProgress = () => {
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
	if (localStorage.getItem('autoclick7cost')) autoclick7cost = parseInt(localStorage.getItem('autoclick7cost'));
	if (localStorage.getItem('autoclick8cost')) autoclick8cost = parseInt(localStorage.getItem('autoclick8cost'));
	if (localStorage.getItem('autoclick9cost')) autoclick9cost = parseInt(localStorage.getItem('autoclick9cost'));
	if (localStorage.getItem('autoclick10cost')) autoclick10cost = parseInt(localStorage.getItem('autoclick10cost'));
	if (localStorage.getItem('autoclick11cost')) autoclick11cost = parseInt(localStorage.getItem('autoclick11cost'));
	if (localStorage.getItem('autoclick12cost')) autoclick12cost = parseInt(localStorage.getItem('autoclick12cost'));
	if (localStorage.getItem('autoclick13cost')) autoclick13cost = parseInt(localStorage.getItem('autoclick13cost'));
	if (localStorage.getItem('boughtwyattmode')) boughtwyattmode = parseInt(localStorage.getItem('boughtwyattmode'));
}

loadProgress();

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
	localStorage.setItem('autoclick7cost', autoclick7cost);
	localStorage.setItem('autoclick8cost', autoclick8cost);
	localStorage.setItem('autoclick9cost', autoclick9cost);
	localStorage.setItem('autoclick10cost', autoclick10cost);
	localStorage.setItem('autoclick11cost', autoclick11cost);
	localStorage.setItem('autoclick12cost', autoclick12cost);
	localStorage.setItem('autoclick13cost', autoclick13cost);
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
	document.getElementById('autoclick7cost').innerText = '$' + abbreviateNumber(autoclick7cost);
	document.getElementById('autoclick8cost').innerText = '$' + abbreviateNumber(autoclick8cost);
	document.getElementById('autoclick9cost').innerText = '$' + abbreviateNumber(autoclick9cost);
	document.getElementById('autoclick10cost').innerText = '$' + abbreviateNumber(autoclick10cost);
	document.getElementById('autoclick11cost').innerText = '$' + abbreviateNumber(autoclick11cost);
	document.getElementById('autoclick12cost').innerText = '$' + abbreviateNumber(autoclick12cost);
	document.getElementById('autoclick13cost').innerText = '$' + abbreviateNumber(autoclick13cost);
	if (wyattmode === 1) {
		alec.src = 'images/skins/why.jpeg';
	} else {
		if (skin === 1) {
			alec.src = alectype === 0 ? 'images/skins/abby.png' : (alectype === 1 ? 'images/skins/abby2.png' : 'images/skins/sadlycl.png');
		} else if (skin === 2) {
			alec.src = alectype === 0 ? 'images/skins/nate.png' : (alectype === 1 ? 'images/skins/nate2.png' : 'images/skins/nate3.png');
		} else if (skin === 3) {
			alec.src = alectype === 0 ? 'images/skins/dash.png' : (alectype === 1 ? 'images/skins/dash2.png' : 'images/skins/sadlycl.png');
		} else if (skin === 4) {
			alec.src = alectype === 0 ? 'images/skins/chris.png' : (alectype === 1 ? 'images/skins/chris2.png' : 'images/skins/chris3.png');
		} else if (skin === 5) {
			alec.src = alectype === 0 ? 'images/skins/ava.png' : (alectype === 1 ? 'images/skins/ava2.png' : 'images/skins/ava3.png');
		} else if (skin === 6) {
			alec.src = alectype === 0 ? 'images/skins/rence.png' : (alectype === 1 ? 'images/skins/rence2.png' : 'images/skins/rence3.png');
		} else if (skin === 7) {
			alec.src = alectype === 0 ? 'images/skins/riley.png' : (alectype === 1 ? 'images/skins/riley2.png' : 'images/skins/riley3.png');
		} else {
			alec.src = alectype === 0 ? 'images/skins/alec.png' : (alectype === 1 ? 'images/skins/alec2.png' : 'images/skins/alec3.png');
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
		riley: ['riley.png', 'riley2.png', 'riley3.png'],
	};

	const skinchange = prompt("Which skin do you want to use? (Alec, Abby, Nate, Dash, Chris, Ava, Rence, or Riley?)", "").toLowerCase();

	if (skinImages.hasOwnProperty(skinchange)) {
		skin = Object.keys(skinImages).indexOf(skinchange);
		alec.src = `images/skins/${skinImages[skinchange][alectype]}`;
	}
});

//upgrades menu
upgradesbutton.addEventListener('click', () => {
	clickSFX.cloneNode().play();
	if (upgradeonscreen === 0) {
		upgradeonscreen = 1;
		document.getElementById("news").classList.toggle("active");
		document.getElementById('upgradesdiv').style.right = "0%";
	} else {
		upgradeonscreen = 0;
		document.getElementById('upgradesdiv').style.right = "-340px";
	}
});

//buying upgrades
function addAutoclickListener(element, cost, cpsMultiplier, index) {
	element.addEventListener('click', () => {
		if (cost <= alecAmount) {
			const soundEffects = {
				0: autoclickSFX,
				1: factorySFX,
				2: scotlandSFX,
				3: flannelSFX,
				4: chairSFX,
				5: duoSFX,
				6: trainSFX,
				7: milkSFX,
				8: cloneSFX,
				9: meowSFX,
				10: chompSFX,
				11: summonSFX,
				12: birdSFX,
			};

			const excludedIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
			(index !== 0 && !excludedIndices.includes(index)) ? clickSFX.cloneNode().play(): (soundEffects[index] && soundEffects[index].cloneNode().play());

			const container = document.querySelector(".container");
			const newImage = document.createElement("img");
			newImage.className = "shape";
			newImage.src = index + 1 === 10 ? (Math.round(Math.random()) === 0 ? 'images/autoclickimgs/storm.png' : 'images/autoclickimgs/star.png') : `images/autoclickimgs/autoclick${index + 1}.png`;
			container.appendChild(newImage);

			newImage.addEventListener("animationend", () => {
				newImage.remove();
			});

			cps += cpsMultiplier;
			alecAmount -= cost;
			cost += Math.ceil(cost * 0.15);
			element.setAttribute("data-cost", cost);
			document.getElementById(`autoclick${index + 1}cost`).innerText = `$${abbreviateNumber(cost)}`;
			document.getElementById('num').innerText = `Alecs: ${abbreviateNumber(alecAmount)}`;
			document.getElementById('aps').innerText = `APS: ${abbreviateNumber(cps)}`;
			if (element === autoclick1) {
				autoclick1cost = cost;
			} else if (element === autoclick2) {
				autoclick2cost = cost;
			} else if (element === autoclick3) {
				autoclick3cost = cost;
			} else if (element === autoclick4) {
				autoclick4cost = cost;
			} else if (element === autoclick5) {
				autoclick5cost = cost;
			} else if (element === autoclick6) {
				autoclick6cost = cost;
			} else if (element === autoclick7) {
				autoclick7cost = cost;
			} else if (element === autoclick8) {
				autoclick8cost = cost;
			} else if (element === autoclick9) {
				autoclick9cost = cost;
			} else if (element === autoclick10) {
				autoclick10cost = cost;
			} else if (element === autoclick11) {
				autoclick11cost = cost;
			} else if (element === autoclick12) {
				autoclick12cost = cost;
			} else if (element === autoclick13) {
				autoclick13cost = cost;
			}
			saveProgress();
		} else {
			errorSFX.cloneNode().play();
			for (let i = 0; i < 5; i++) {
				setTimeout(() => {
					element.style.backgroundColor = "red";
					document.getElementById(`autoclick${index + 1}cost`).style.backgroundColor = "red";
				}, i * 200);
				setTimeout(() => {
					element.style.backgroundColor = "white";
					document.getElementById(`autoclick${index + 1}cost`).style.backgroundColor = "white";
				}, (i + 0.5) * 200);
			}
		}
	});
}

const autoclickUpgrades = [
	{
		element: autoclick1,
		cost: autoclick1cost,
		cpsMultiplier: 1
	},
	{
		element: autoclick2,
		cost: autoclick2cost,
		cpsMultiplier: 5
	},
	{
		element: autoclick3,
		cost: autoclick3cost,
		cpsMultiplier: 15
	},
	{
		element: autoclick4,
		cost: autoclick4cost,
		cpsMultiplier: 47
	},
	{
		element: autoclick5,
		cost: autoclick5cost,
		cpsMultiplier: 260
	},
	{
		element: autoclick6,
		cost: autoclick6cost,
		cpsMultiplier: 1400
	},
	{
		element: autoclick7,
		cost: autoclick7cost,
		cpsMultiplier: 7800
	},
	{
		element: autoclick8,
		cost: autoclick8cost,
		cpsMultiplier: 44000
	},
	{
		element: autoclick9,
		cost: autoclick9cost,
		cpsMultiplier: 260000
	},
	{
		element: autoclick10,
		cost: autoclick10cost,
		cpsMultiplier: 1600000
	},
	{
		element: autoclick11,
		cost: autoclick11cost,
		cpsMultiplier: 10000000
	},
	{
		element: autoclick12,
		cost: autoclick12cost,
		cpsMultiplier: 65000000
	},
	{
		element: autoclick13,
		cost: autoclick13cost,
		cpsMultiplier: 430000000
	},
];

autoclickUpgrades.forEach((upgrade, index) => {
	addAutoclickListener(upgrade.element, upgrade.cost, upgrade.cpsMultiplier, index);
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
		autoclick1cost = 15;
		autoclick2cost = 100;
		autoclick3cost = 1100;
		autoclick4cost = 12000;
		autoclick5cost = 130000;
		autoclick6cost = 1400000;
		autoclick7cost = 20000000;
		autoclick8cost = 330000000;
		autoclick9cost = 5100000000;
		autoclick10cost = 75000000000;
		autoclick11cost = 1000000000000;
		autoclick12cost = 14000000000000;
		autoclick13cost = 14000000000000;
		saveProgress();
		document.location.reload();
	}
});

//changelog
changelog.addEventListener('click', () => {
	changelog.style.bottom = (changelog.style.bottom === "40%") ? "-100%" : changelog.style.bottom;
});

changelogbutton.addEventListener('click', () => {
	changelog.style.bottom = (changelog.style.bottom === "40%") ? "-100%" : "40%";
});

//clicks
const bclick = () => {
	const a = Math.ceil(cps * 0.6 + totalAlecAmount * 0.0006);
	clickSFX.cloneNode().play();
	alecAmount += (a < 1) ? 1 : a;
	totalAlecAmount += (a < 1) ? 1 : a;
	document.getElementById('totalnum').innerText = 'Total Alecs: ' + totalAlecAmount;
	document.getElementById('num').innerText = 'Alecs: ' + alecAmount;
	if (totalAlecAmount >= 50 && alectype === 0) {
		alectype = 1;
		const evolve = document.createElement('div');
		evolve.textContent = "Your big Alec has evolved";
		evolve.classList.add('add');
		document.body.appendChild(evolve);
	} else if (totalAlecAmount >= 500 && alectype === 1) {
		alectype = 2;
	}

	const add = document.createElement('div');
	add.textContent = "+" + abbreviateNumber(a);
	add.classList.add('add');
	document.body.appendChild(add);

	const x = event.clientX;
	const y = event.clientY;
	add.style.left = x + 'px';
	add.style.top = (y - 20) + 'px';

	setTimeout(() => {
		add.remove();
	}, 500);
	saveProgress();
};

alec.addEventListener('mousedown', () => {
	if (wyattmode === 1) {
		alec.src = 'images/skins/why.jpeg';
	} else {
		if (skin === 1) {
			alec.src = alectype === 0 ? 'images/skins/abbymush.png' : (alectype === 1 ? 'images/skins/abby2mush.png' : 'images/skins/sadlyclmush.png');
		} else if (skin === 2) {
			alec.src = alectype === 0 ? 'images/skins/natemush.png' : (alectype === 1 ? 'images/skins/nate2mush.png' : 'images/skins/nate3mush.png');
		} else if (skin === 3) {
			alec.src = alectype === 0 ? 'images/skins/dashmush.png' : (alectype === 1 ? 'images/skins/dash2mush.png' : 'images/skins/sadlyclmush.png');
		} else if (skin === 4) {
			alec.src = alectype === 0 ? 'images/skins/chrismush.png' : (alectype === 1 ? 'images/skins/chris2mush.png' : 'images/skins/chris3mush.png');
		} else if (skin === 5) {
			alec.src = alectype === 0 ? 'images/skins/avamush.png' : (alectype === 1 ? 'images/skins/ava2mush.png' : 'images/skins/ava3mush.png');
		} else if (skin === 6) {
			alec.src = alectype === 0 ? 'images/skins/rencemush.png' : (alectype === 1 ? 'images/skins/rence2mush.png' : 'images/skins/rence3mush.png');
		} else if (skin === 7) {
			alec.src = alectype === 0 ? 'images/skins/rileymush.png' : (alectype === 1 ? 'images/skins/riley2mush.png' : 'images/skins/riley3mush.png');
		} else {
			alec.src = alectype === 0 ? 'images/skins/alecmush.png' : (alectype === 1 ? 'images/skins/alec2mush.png' : 'images/skins/alec3mush.png');
		}
	}
});

alec.addEventListener('mouseup', () => {
	if (wyattmode === 1) {
		alec.src = 'images/skins/why.jpeg';
	} else {
		if (skin === 1) {
			alec.src = alectype === 0 ? 'images/skins/abby.png' : (alectype === 1 ? 'images/skins/abby2.png' : 'images/skins/sadlycl.png');
		} else if (skin === 2) {
			alec.src = alectype === 0 ? 'images/skins/nate.png' : (alectype === 1 ? 'images/skins/nate2.png' : 'images/skins/nate3.png');
		} else if (skin === 3) {
			alec.src = alectype === 0 ? 'images/skins/dash.png' : (alectype === 1 ? 'images/skins/dash2.png' : 'images/skins/sadlycl.png');
		} else if (skin === 4) {
			alec.src = alectype === 0 ? 'images/skins/chris.png' : (alectype === 1 ? 'images/skins/chris2.png' : 'images/skins/chris3.png');
		} else if (skin === 5) {
			alec.src = alectype === 0 ? 'images/skins/ava.png' : (alectype === 1 ? 'images/skins/ava2.png' : 'images/skins/ava3.png');
		} else if (skin === 6) {
			alec.src = alectype === 0 ? 'images/skins/rence.png' : (alectype === 1 ? 'images/skins/rence2.png' : 'images/skins/rence3.png');
		} else if (skin === 7) {
			alec.src = alectype === 0 ? 'images/skins/riley.png' : (alectype === 1 ? 'images/skins/riley2.png' : 'images/skins/riley3.png');
		} else {
			alec.src = alectype === 0 ? 'images/skins/alec.png' : (alectype === 1 ? 'images/skins/alec2.png' : 'images/skins/alec3.png');
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
				text = "my dad is roblox ur getting banned";
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
			case autoclick7:
				text = "'hey soul sister aint that mister mister'";
				break;
			case autoclick8:
				text = "It brings the Alecs to the yard";
				break;
			case autoclick9:
				text = "Don't ask where I got this";
				break;
			case autoclick10:
				text = "Get a cat to lure unsuspecting Alecs!";
				break;
			case autoclick11:
				text = "i like filets";
				break;
			case autoclick12:
				text = "Get the ultimate diety to summon Alecs for you";
				break;
			case autoclick13:
				text = "Get some 2010's tunes or unknown smells to make the Alecs cry";
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

window.addEventListener('load', function() {
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
		document.body.style.backgroundImage = 'url("images/skins/why.jpeg")';
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

//(gasp) MATH?!?!?!??!? but the math is BAD, is very very BAD!
function updateAlecAmount(currentTime) {
	const frameTime = currentTime - lastFrameTime;
	const secondsElapsed = frameTime / 1000;
	alecAmount += cps * secondsElapsed;
	totalAlecAmount += cps * secondsElapsed;
	document.getElementById('num').innerText = 'Alecs: ' + '$' + abbreviateNumber(Math.floor(alecAmount));
	document.getElementById('totalnum').innerText = 'Total Alecs: ' + abbreviateNumber(Math.floor(totalAlecAmount));
	lastFrameTime = currentTime;
	requestAnimationFrame(updateAlecAmount);

	function slide(element, cost, cpsMultiplier, index) {
		if (Math.floor(Math.random() * 1000) === 1) {
			const container = document.querySelector(".container");
			const newImage = document.createElement("img");
			let b = 1 + Math.round(Math.random() * 12);
			newImage.className = "slider";
			newImage.src = b !== 10 ? `images/autoclickimgs/autoclick${b}.png` : (Math.round(Math.random()) === 0 ? `images/autoclickimgs/storm.png` : `images/autoclickimgs/star.png`);
			//storm.png and star.png are my cats. their names are Stormcloud and Stardust :)
			container.appendChild(newImage);
			newImage.addEventListener("animationend", () => newImage.remove());
		}
	}
	slide(autoclickUpgrades.element, autoclickUpgrades.cost, autoclickUpgrades.cpsMultiplier, autoclickUpgrades.index);
}

function openPetsForm() {
	window.open("https://forms.gle/SFhY9UY3p1LoqJbeA");
}

requestAnimationFrame(updateAlecAmount);
startTimer();
updateDisplay();
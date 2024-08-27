function updateDateMessage() {
	const date = new Date();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	let message = ``;

	if (month === 8 && day === 27) {
		message = `"She Bridges on my Hall till I Fame" -Someone, probably`;
	} else if (month === 8 && day === 28) {
		message = `make sure to SMASH that like button AND subscribe and hit that bell`;
	} else if (month === 8 && day === 29) {
		message = `what if instead of bridges academy its 𝓯𝓻𝓮𝓪𝓴𝔂 academy and instead of educating the exceptional they educate the 𝓯𝓻𝓮𝓪𝓴𝔂`;
	} else if (month === 8 && day === 30) {
		message = `SING US A SONG, YOU'RE THE FLANNELMAN🔥🔥🗣️🔥🔥🗣️🔥🗣️🗣️🔥🗣️`;
	} else if (month === 8 && day === 31) {
		message = `the birds watch. do not trust them.`;
	} else if (month === 9 && day === 1) {
		message = `500 beers 🥰`;
	} else if (month === 9 && day === 2) {
		message = `happy britdhay keuanu reeves`;
	} else if (month === 9 && day === 3) {
		message = `pancakes are pretty good`;
	} else if (month === 9 && day === 4) {
		message = `chair 🪑`;
	} else if (month === 9 && day === 5) {
		message = `bridgeshof.com does not pay taxes. nice try feds.`;
	} else {
		getElementById("motd").remove()
	}
	document.getElementById(`motdmessage`).textContent = message;
}
updateDateMessage();
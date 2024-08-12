const specialDates = [
	{ month: 6, date: 25, video: "birthday.mp4", text: "i am now 16. sorry if i hit you with a car"},
	{ month: 7, date: 11, video: "dogdays.mp4", text: "and the cat days are here"},
	{ month: 7, date: 22, video: "schoolsin.mp4", text: "and the chaos begins" },
	{ month: 8, date: 23, image: "sunwillnotrise.png", sun: "sun", text: "THE SUN WILL NOT RISE"},
	{ month: 9, date: 1, video: "spooky.mp4", text: "spooky begins"},
	{ month: 9, date: 19, video: "shake.mp4", text: "It's the Great SHAKEout, isn't it?"},
	{ month: 11, date: 1, image: "christmasplaylistimg.png", playlist: "https://www.youtube.com/playlist?list=PL0s0N2avSv5eU9BDBymqdismmjwIEZ69-", text: "alec 12 days of christmas playlist"},
];

function toggleContent() {
	const today = new Date();
	const v = document.getElementById("songvideo");
	const t = document.getElementById("songtext");

	for (const date of specialDates) {
		if (today.getMonth() === date.month && today.getDate() === date.date) {
			if (date.playlist) {
				v.style.display = "none";
				t.innerHTML = `<a href="${date.playlist}" target="_blank"><img src="videodates/${date.image}" alt="${date.text}" style="max-width: 200px;"><br>${date.text}</a>`;
			} else if (date.sun) {
				document.body.style.backgroundImage = `url('images/sunwontrise.png')`;
				document.body.style.backgroundRepeat = "repeat";
				document.body.style.backgroundSize = "500px";
				v.style.display = "none";
				t.innerHTML = `<img src="images/sunwontrise.png" alt="${date.text}" style="max-width: 500px;">`;
			} else {
				v.src = `videodates/${date.video}`;
				v.style.display = "block";
				t.style.display = "inline-flex";
				t.textContent = date.text;
			}
			return;
		}
	}

	if (today.getMonth() === 11 && today.getDate() <= 12) {
		v.style.display = "none";
		t.innerHTML = `<a href="${specialDates[5].playlist}" target="_blank"><img src="videodates/${specialDates[5].image}" alt="${specialDates[5].text}" style="max-width: 200px;"><br>${specialDates[5].text}</a>`;
	} else {
		v.style.display = "none";
		t.style.display = "none";
	}
}

//window.onload = toggleContent;
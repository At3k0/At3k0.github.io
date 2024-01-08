let currentPageSF = 1;
const pageDataSF = [
	
	{ title: "Teacher's Bane", url: "https://www.youtube-nocookie.com/embed/KvBMSc40ThM", description: "The one and only"},
	{ title: "Teacher's Bane, but everything goes wrong", url: "https://www.youtube-nocookie.com/embed/S_uhfeleOdc", description: "Teacher's Bane, but it's different!"},
	{ title: "sorry, this has been canceled", url: "images/when.png", description: "due to consent and editing issues"},
	{ title: "???", url: "images/when.png", description: "Coming with the 2024 HS film festival"},
	{ title: "Shakespeare Shorts (no cap) - goofy edition", url: "https://www.youtube-nocookie.com/embed/6lm-AGp-szU", description: "''A certy-fied hood classic!''"},
	{ title: "Flight AKD-69420", url: "https://www.youtube-nocookie.com/embed/ERArvgDBJZc", description: "My first (and worst) short film"},
	{ title: "Dixon Falls Off the Swing", url: "https://www.youtube-nocookie.com/embed/Xy6nl8dwcbs", description: "My second (and uhh wecond) short film"},
	{ title: "World War 3 Trailer - but in Terraria", url: "https://www.youtube-nocookie.com/embed/Mg_RJc6KiEU", description: "china"},
];

function showPageSF(pageNumberSF) {
	currentPageSF = pageNumberSF;
	const page = pageDataSF[currentPageSF - 1];
	document.getElementById("video").src = page.url;
	document.getElementById("divisionSF").innerText = page.title;
	document.getElementById("pagenumSF").innerText = currentPageSF;
	document.getElementById("desc").innerText = page.description;
	document.getElementById("img").style.display = (pageNumberSF === 3 || pageNumberSF === 4) ? "block" : "none";
	document.getElementById("video").style.display = (pageNumberSF !== 3 && pageNumberSF !== 4) ? "block" : "none";
}

function goForwardSF() {
	showPageSF(currentPageSF < 8 ? currentPageSF + 1 : 1);
}

function goBackSF() {
	showPageSF(currentPageSF > 1 ? currentPageSF - 1 : 8);
}

showPageSF(currentPageSF);
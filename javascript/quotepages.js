let currentPageQ = 1;
const pageTitlesQ = [
	"HS Quotes aka the Noah and Chris page",
	"HS Quotes",
	"HS Quotes",
	"HS Quotes",
	"HS Quotes",
	"HS Quotes",
	"HS Quotes",
	"HS Quotes",
	"MS Quotes",
	"MS Quotes",
	"MS Quotes"
];

function showPageQ(pageNumberQ) {
	for (let i = 1; i <= 12; i++) {
		document.querySelector(`.qpage.qpage-${i}`).classList.remove("active");
	}

	document.querySelector(`.qpage.qpage-${pageNumberQ}`).classList.add("active");
	currentPageQ = pageNumberQ;
	document.getElementById("divisionQ").innerText = pageTitlesQ[currentPageQ - 1];
	document.getElementById("pagenumQ").innerText = currentPageQ;
}

function goForwardQ() {
	showPageQ(currentPageQ < 12 ? currentPageQ + 1 : 1);
}

function goBackQ() {
	showPageQ(currentPageQ > 1 ? currentPageQ - 1 : 12);
}

showPageQ(currentPageQ);
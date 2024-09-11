let currentPageQ = 1;
const pageTitlesQ = [
	"Quotes aka the Noah and Chris page",
	"Quotes",
	"Quotes",
	"Quotes",
	"Quotes",
	"Quotes",
	"Quotes",
	"Quotes",
	"Quotes",
	"Quotes",
	"Quotes",
	"Quotes",
	"Quotes",
	"Quotes"
];

function showPageQ(pageNumberQ) {
	for (let i = 1; i <= 13; i++) {
		document.querySelector(`.qpage.qpage-${i}`).classList.remove("active");
	}

	document.querySelector(`.qpage.qpage-${pageNumberQ}`).classList.add("active");
	currentPageQ = pageNumberQ;
	document.getElementById("divisionQ").innerText = pageTitlesQ[currentPageQ - 1];
	document.getElementById("pagenumQ").innerText = currentPageQ;
}

function goForwardQ() {
	showPageQ(currentPageQ < 13 ? currentPageQ + 1 : 1);
}

function goBackQ() {
	showPageQ(currentPageQ > 1 ? currentPageQ - 1 : 13);
}

showPageQ(currentPageQ);
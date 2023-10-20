let currentPageQ = 1;
const pageTitlesQ = [
    "HS Quotes",
    "HS Quotes",
    "HS Quotes",
    "HS Quotes",
    "HS Quotes",
    "MS Quotes",
    "MS Quotes"
];

function showPageQ(pageNumberQ) {
    for (let i = 1; i <= 7; i++) {
        document.querySelector(`.qpage.qpage-${i}`).classList.remove("active");
    }

    document.querySelector(`.qpage.qpage-${pageNumberQ}`).classList.add("active");
    currentPageQ = pageNumberQ;
    document.getElementById("divisionQ").innerText = pageTitlesQ[currentPageQ - 1];
    document.getElementById("pagenumQ").innerText = currentPageQ;
}

function goForwardQ() {
    showPageQ(currentPageQ < 7 ? currentPageQ + 1 : 1);
}

function goBackQ() {
    showPageQ(currentPageQ > 1 ? currentPageQ - 1 : 7);
}

showPageQ(currentPageQ);
let currentPageSF = 1;
const pageTitlesSF = [
    "Teacher's Bane",
    "Teacher's Bane, but everything goes wrong",
    "Teacher's Bane, but everything goes wrong 2",
    "???",
    "Shakespeare Shorts (no cap) - goofy edition",
    "Flight AKD-69420",
    "Dixon Falls Off the Swing",
    "World War 3 Trailer - but in Terraria"
];

function showPageSF(pageNumberSF) {
    document.querySelector(".sfpage.active").classList.remove("active");
    document.querySelector(`.sfpage.sfpage-${pageNumberSF}`).classList.add("active");
    currentPageSF = pageNumberSF;
    document.getElementById("divisionSF").innerText = pageTitlesSF[currentPageSF - 1];
    document.getElementById("pagenumSF").innerText = currentPageSF;
}

function goForwardSF() {
    showPageSF(currentPageSF < 8 ? currentPageSF + 1 : 1);
}

function goBackSF() {
    showPageSF(currentPageSF > 1 ? currentPageSF - 1 : 8);
}

showPageSF(currentPageSF);
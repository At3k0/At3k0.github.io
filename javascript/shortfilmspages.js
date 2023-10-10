let currentPageSF = 1;

function showPageSF(pageNumberSF) {
    for (let i = 1; i <= 7; i++) {
        document.querySelector(".sfpage.sfpage-" + i).classList.remove("active");
    }

    document.querySelector(".sfpage.sfpage-" + pageNumberSF).classList.add("active");
    currentPageSF = pageNumberSF;

    if (pageNumberSF === 1) {
        document.getElementById("divisionSF").innerText = "Teacher's Bane";
    } else if (pageNumberSF === 2) {
        document.getElementById("divisionSF").innerText = "Teacher's Bane - goofy edition";
    } else if (pageNumberSF === 3) {
        document.getElementById("divisionSF").innerText = "???";
    } else if (pageNumberSF === 4) {
        document.getElementById("divisionSF").innerText = "Shakespeare Shorts (no cap) - goofy edition";
    } else if (pageNumberSF === 5) {
        document.getElementById("divisionSF").innerText = "Flight AKD-69420";
    } else if (pageNumberSF === 6) {
        document.getElementById("divisionSF").innerText = "Dixon Falls Off the Swing";
    } else if (pageNumberSF === 7) {
        document.getElementById("divisionSF").innerText = "World War 3 Trailer - but in Terraria";
    } else {
        document.getElementByID("divisionSF").innerText = "uhhhhh you're not supposed to be here"
    }
}

function goForwardSF() {
    if (currentPageSF < 7) {
        showPageSF(currentPageSF + 1);
    } else {
        showPageSF(1);
    }
    document.getElementById("pagenumSF").innerText = currentPageSF;
}

function goBackSF() {
    if (currentPageSF > 1) {
        showPageSF(currentPageSF - 1);
    } else {
        showPageSF(7);
    }
    document.getElementById("pagenumSF").innerText = currentPageSF;
}
showPageSF(currentPageSF);
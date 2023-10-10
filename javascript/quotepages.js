let currentPageQ = 1;

function showPageQ(pageNumberQ) {
    for (let i = 1; i <= 5; i++) {
        document.querySelector(".qpage.qpage-" + i).classList.remove("active");
    }

    document.querySelector(".qpage.qpage-" + pageNumberQ).classList.add("active");
    currentPageQ = pageNumberQ;

    if (pageNumberQ === 5) {
        document.getElementById("divisionQ").innerText = "MS Quotes";
    } else {
        document.getElementById("divisionQ").innerText = "HS Quotes";
    }
}

function goForwardQ() {
    if (currentPageQ < 5) {
        showPageQ(currentPageQ + 1);
    } else {
        showPageQ(1);
    }
    document.getElementById("pagenumQ").innerText = currentPageQ;
}

function goBackQ() {
    if (currentPageQ > 1) {
        showPageQ(currentPageQ - 1);
    } else {
        showPageQ(5);
    }
    document.getElementById("pagenumQ").innerText = currentPageQ;
}
showPageQ(currentPageQ);
let currentPageC = 1;

function showPageC(pageNumberC) {
	for (let i = 1; i <= 10; i++) {
		document.querySelector(`.cpage.cpage-${i}`).classList.remove("active");
	}

	document.querySelector(`.cpage.cpage-${pageNumberC}`).classList.add("active");
	currentPageC = pageNumberC;
	document.getElementById("pagenumC").innerText = currentPageC;
}

function goForwardC() {
	showPageC(currentPageC < 10 ? currentPageC + 1 : 1);
}

function goBackC() {
	showPageC(currentPageC > 1 ? currentPageC - 1 : 10);
}

showPageC(currentPageC);
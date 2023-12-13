const getElementById = id => document.getElementById(id);

const home = getElementById("home");
const shortfilms = getElementById("shortfilms");
const candids = getElementById("candids");
const quotes = getElementById("quotes");

const showElement = (element, href) => {
	home.style.display = "none";
	shortfilms.style.display = "none";
	candids.style.display = "none";
	quotes.style.display = "none";
	element.style.display = "block";
	updateCSSLink(href);
};

const showHome = () => showElement(home, 'style/index.css');
const showShortFilms = () => showElement(shortfilms, 'style/shortfilms.css');
const showCandids = () => showElement(candids, 'style/candids.css');
const showQuotes = () => showElement(quotes, 'style/quotes.css');

const redirectToPage = page => {
	const protocol = window.location.protocol;
	const redirectPage = protocol === 'file:' ? `${page}.html` : page;
	window.location.href = redirectPage;
};

const showClicker = () => redirectToPage("clicker");
const showSnake = () => redirectToPage("snake");

const openLink = url => window.open(url);

const openQuotesForm = () => openLink("https://forms.gle/1rS7JwsfzxzZ4B2V7");
const openCandidsForm = () => openLink("https://forms.gle/19PAqcWP1ZffHae8A");
const openRepo = () => openLink("https://github.com/AlecDiramerian/bhof.github.io");

const updateCSSLink = href => {
	const head = document.getElementsByTagName('head')[0];
	const existingLink = document.getElementById('dynamic-css');

	if (existingLink) {
		existingLink.href = href;
	} else {
		const newLink = document.createElement('link');
		newLink.id = 'dynamic-css';
		newLink.rel = 'stylesheet';
		newLink.type = 'text/css';
		newLink.href = href;
		head.appendChild(newLink);
	}
};

showHome();
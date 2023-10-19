const home = document.getElementById("home");
const shortfilms = document.getElementById("shortfilms");
const candids = document.getElementById("candids");
const quotes = document.getElementById("quotes");

function showHome() {
  home.style.display = "block";
  shortfilms.style.display = "none";
  candids.style.display = "none";
  quotes.style.display = "none";
  updateCSSLink('style/index.css');
}

function showShortFilms() {
  home.style.display = "none";
  shortfilms.style.display = "block";
  candids.style.display = "none";
  quotes.style.display = "none";
  updateCSSLink('style/shortfilms.css');
}

function showCandids() {
  home.style.display = "none";
  shortfilms.style.display = "none";
  candids.style.display = "block";
  quotes.style.display = "none";
  updateCSSLink('style/candids.css');
}

function showQuotes() {
  home.style.display = "none";
  shortfilms.style.display = "none";
  candids.style.display = "none";
  quotes.style.display = "block";
  updateCSSLink('style/quotes.css');
}

function openQuotesForm() {
  window.open("https://forms.gle/1rS7JwsfzxzZ4B2V7");
}

function openCandidsForm() {
  window.open("https://forms.gle/19PAqcWP1ZffHae8A");
}

showHome();

function updateCSSLink(href) {
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
}

showHome();
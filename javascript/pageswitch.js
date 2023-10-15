const defs = document.getElementById("default");
const p1s = document.getElementById("p1");
const p2s = document.getElementById("p2");
const p3s = document.getElementById("p3");

function showDefault() {
  defs.style.display = "block";
  p1s.style.display = "none";
  p2s.style.display = "none";
  p3s.style.display = "none";
  updateCSSLink('style/index.css');
}

function showPage1() {
  defs.style.display = "none";
  p1s.style.display = "block";
  p2s.style.display = "none";
  p3s.style.display = "none";
  updateCSSLink('style/shortfilms.css');
}

function showPage2() {
  defs.style.display = "none";
  p1s.style.display = "none";
  p2s.style.display = "block";
  p3s.style.display = "none";
  updateCSSLink('style/candids.css');
}

function showPage3() {
  defs.style.display = "none";
  p1s.style.display = "none";
  p2s.style.display = "none";
  p3s.style.display = "block";
  updateCSSLink('style/quotes.css');
}

function openQuotesForm() {
  window.open("https://forms.gle/1rS7JwsfzxzZ4B2V7");
}

function openCandidsForm() {
  window.open("https://forms.gle/19PAqcWP1ZffHae8A");
}

showDefault();

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

showDefault();
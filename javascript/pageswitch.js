document.addEventListener("DOMContentLoaded", function() {
    var contentContainer = document.getElementById("home");

    function loadContent(url) {
      fetch(url)
        .then(response => response.text())
        .then(data => {
          contentContainer.innerHTML = data;
        })
        .catch(error => console.error('oopsie poopsie something went wrong:', error));
    }
    var shortfilmsLink = document.querySelector("a[href='shortfilms.html']");
    var candidsLink = document.querySelector("a[href='candids.html']");
    var quotesLink = document.querySelector("a[href='quotes.html']");
    var indexLink = document.querySelector("a[href='index.html']");

    shortfilmsLink.addEventListener("click", function(event) {
      event.preventDefault();
      loadContent("shortfilms.html");
    });

    candidsLink.addEventListener("click", function(event) {
      event.preventDefault();
      loadContent("candids.html");
    });

    quotesLink.addEventListener("click", function(event) {
      event.preventDefault();
      loadContent("quotes.html");
    });
    /*indexLink.addEventListener("click", function(event) {
      event.preventDefault();
      loadContent("index.html");
    });*/
  });
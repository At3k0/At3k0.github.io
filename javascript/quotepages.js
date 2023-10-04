document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;

    function showPage(pageNumber) {
        // Hide all pages
        for (let i = 1; i <= 5; i++) {
            document.querySelector(".page.page-" + i).classList.remove("active");
        }

        // Show the selected page
        document.querySelector(".page.page-" + pageNumber).classList.add("active");
        currentPage = pageNumber;

        // Update the header on page 4
        if (pageNumber === 4) {
            document.getElementById("division").innerText = "MS Quotes";
        } else {
            document.getElementById("division").innerText = "HS Quotes";
        }
    }

    function goForward() {
        if (currentPage < 5) {
            showPage(currentPage + 1);
        }
    }

    function goBack() {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    }

    showPage(currentPage);
});

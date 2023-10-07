document.addEventListener("DOMContentLoaded", function () {
    let currentPage = 1;

    function showPage(pageNumber) {
        for (let i = 1; i <= 6; i++) {
            document.querySelector(".page.page-" + i).classList.remove("active");
        }

        document.querySelector(".page.page-" + pageNumber).classList.add("active");
        currentPage = pageNumber;

        if (pageNumber === 5) {
            document.getElementById("division").innerText = "MS Quotes";
        } else {
            document.getElementById("division").innerText = "HS Quotes";
        }
    }

    function goForward() {
        if (currentPage < 5) {
            showPage(currentPage + 1);
        }
        document.getElementById("pagenum").innerText = pageNumber;
    }

    function goBack() {
        if (currentPage > 1) {
            showPage(currentPage - 1);
        }
    }

    showPage(currentPage);
});

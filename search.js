document.getElementById("searchButton").addEventListener("click", function() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var rows = document.querySelectorAll("#planettable tbody tr");

    var highlightedRow = document.querySelector("#planettable tbody tr.highlighted");
    if (highlightedRow) {
        highlightedRow.classList.remove("highlighted");
    }

    for (var i = 0; i < rows.length; i++) {
        var rowText = rows[i].textContent.toLowerCase();
        if (rowText.includes(input)) {
            rows[i].classList.add("highlighted");
            rows[i].scrollIntoView();
            break;
        }
    }
});


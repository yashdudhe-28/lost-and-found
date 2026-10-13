function searchItem() {
    const searchInput = document.getElementById("searchInput");
    const item = searchInput.value.trim();

    if (item === "") {
        alert("Please enter an item to search.");
        searchInput.focus();
        return;
    }

    // TODO: connect this to your backend / data later
    alert("Searching for: " + item);
}

// Press Enter to search
document.getElementById("searchInput").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        searchItem();
    }
});
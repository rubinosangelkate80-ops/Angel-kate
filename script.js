
// SEARCH BOARDING HOUSES
function searchRooms() {

    const searchInput = document
        .getElementById("searchInput")
        .value.toLowerCase()
        .trim();

    const roomCards = document.querySelectorAll(".room-card");

    const noResults = document.getElementById("noResults");

    let found = 0;

    roomCards.forEach(function(card) {

        const roomName = card
            .getAttribute("data-search")
            .toLowerCase();

        if (roomName.includes(searchInput)) {

            card.style.display = "block";
            found++;

        } else {

            card.style.display = "none";

        }

    });

    if (found === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}

// SEARCH WHEN PRESSING ENTER
document.getElementById("searchInput")
    .addEventListener("keypress", function(event) {

        if (event.key === "Enter") {
            searchRooms();
        }

    });

// VIEW ROOM DETAILS
function showDetails(roomName) {

    if (roomName === "Room 1") {

        alert(
            "Room 1\n\n" +
            "Type: Single Room\n" +
            "Price: ₱2,000/month\n" +
            "Location: Near School\n\n" +
            "Contact us for more information."
        );

    } else if (roomName === "Room 2") {

        alert(
            "Room 2\n\n" +
            "Type: Shared Room\n" +
            "Price: ₱2,500/month\n" +
            "Location: Town Proper\n\n" +
            "Contact us for more information."
        );

    }

}

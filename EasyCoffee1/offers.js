// JavaScript source code

// FUNCTION TO OPEN OFFER TABS

function openOffer(event, offerName) {

    // Get all tab content sections
    const tabContents = document.querySelectorAll(".tab-content");

    // Hide all tab content
    tabContents.forEach(function (content) {
        content.style.display = "none";
    });

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll(".tab-button");

    tabButtons.forEach(function (button) {
        button.classList.remove("active");
    });

    // Display selected tab
    document.getElementById(offerName).style.display = "block";

    // Highlight selected button
    event.currentTarget.classList.add("active");

}

// Display Monday offers when the page loads
document.getElementById("monday").style.display = "block";

// PROMOTIONAL MODAL

const openModal = document.getElementById("openModal");
const offerModal = document.getElementById("offerModal");
const closeModal = document.getElementById("closeModal");

// Open modal
openModal.addEventListener("click", function () {

    offerModal.style.display = "flex";

});

// Close modal
closeModal.addEventListener("click", function () {

    offerModal.style.display = "none";

});

// Close modal when clicking outside
window.addEventListener("click", function (event) {

    if (event.target === offerModal) {

        offerModal.style.display = "none";

    }

});
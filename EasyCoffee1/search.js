// JavaScript source code
// Get search elements
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");



// Website search data
const searchData = [



    // Products
    {
        name: "Coffee",
        keywords: "coffee espresso americano latte cappuccino",
        description: "Explore our coffee selection.",
        link: "Menu.html"
    },

    {
        name: "Tea",
        keywords: "tea beverages drinks",
        description: "Explore our tea selection.",
        link: "Menu.html"
    },

    {
        name: "Pies",
        keywords: "pies pepper steak vegetable veg",
        description: "Discover our freshly baked pies.",
        link: "Menu.html"
    },

    {
        name: "Doughnuts",
        keywords: "doughnuts donuts sweet treats",
        description: "Enjoy our delicious doughnuts.",
        link: "Menu.html"
    },

    {
        name: "Koeksisters",
        keywords: "koeksisters traditional sweet pastry",
        description: "Try our delicious koeksisters.",
        link: "Menu.html"
    },

    {
        name: "Cake Slices",
        keywords: "cake carrot chocolate vanilla slices dessert",
        description: "Explore our cake selection.",
        link: "Menu.html"
    },


    // Website information
    {
        name: "About Easy Coffee",
        keywords: "about business company history who we are",
        description: "Learn more about Easy Coffee.",
        link: "about.html"
    },

    {
        name: "Contact Us",
        keywords: "contact telephone phone email enquiries",
        description: "Find our contact details.",
        link: "contact.html"
    },

    {
        name: "Store Location",
        keywords: "location address directions map pretoria madiba street",
        description: "Find us at 220 Madiba Street, Pretoria.",
        link: "contact.html"
    },

    {
        name: "Special Offers",
        keywords: "special offers discounts promotions deals",
        description: "Explore our latest special offers.",
        link: "specialoffers.html"
    },

    {
        name: "Membership",
        keywords: "membership member benefits account register join",
        description: "Discover our membership benefits.",
        link: "becomeamember.html"
    }

];
// Search function
function performSearch() {

    // Get keyword and convert to lowercase
    const keyword = searchInput.value.trim().toLowerCase();

    // Clear previous results
    searchResults.innerHTML = "";

    // Check for empty search
    if (keyword === "") {
        searchResults.textContent = "Please enter a search keyword.";
        return;
    }

    // Find matching results
    const results = searchData.filter(item => {

        return item.name.toLowerCase().includes(keyword) ||
               item.keywords.toLowerCase().includes(keyword) ||
               item.description.toLowerCase().includes(keyword);

    });

    // Display message if nothing matches
    if (results.length === 0) {
        searchResults.textContent = "Sorry, no matching results found.";
        return;
    }

    // Display matching results
    results.forEach(item => {

        const resultElement = document.createElement("div");

        resultElement.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <a href="${item.link}">View more</a>
        `;

        searchResults.appendChild(resultElement);

    });

}
// Search when button is clicked
searchButton.addEventListener("click", performSearch);

// Search when Enter is pressed
searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        performSearch();
    }

});
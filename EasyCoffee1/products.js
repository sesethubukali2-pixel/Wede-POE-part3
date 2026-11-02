

const products = [

    // COFFEE
    {
        name: "Espresso",
        category: "coffee",
        price: 25,
        image: "optimized_imgs/espresso.webp",
        description: "Refreshingly strong and rich"
    },

    {
        name: "Cappuccino",
        category: "coffee",
        price: 25,
        image: "optimized_imgs/cappuccino.webp",
        description: "Espresso with steamed milk and foam"
    },

    {
        name: "Americano",
        category: "coffee",
        price: 35,
        image: "optimized_imgs/espresso.webp",
        description: "Espresso with hot water"
    },

    {
        name: "Cafe-Latte",
        category: "coffee",
        price: 35,
        image: "optimized_imgs/cafe_latte.webp",
        description: "Smooth espresso with steamed milk"
    },

    {
        name: "Mocha",
        category: "coffee",
        price: 40,
        image: "optimized_imgs/mocha.webp",
        description: "Espresso, chocolate and steamed milk"
    },


    // TEA
    {
        name: "Rooibos-tea",
        category: "tea",
        price: 20,
        image: "optimized_imgs/rooibos_tea.webp",
        description: "Proudly South African herbal tea"
    },

    {
        name: "Green-tea",
        category: "tea",
        price: 30,
        image: "optimized_imgs/green_tea.webp",
        description: "Light and refreshing tea"
    },

    {
        name: "Chai-tea",
        category: "tea",
        price: 35,
        image: "optimized_imgs/chai_tea.webp",
        description: "Warm tea with delicious spices"
    },


    // PIES
    {
        name: "Pepper-steak",
        category: "pies",
        price: 35,
        image: "optimized_imgs/pepper_steak_pie.webp",
        description: "Meaty and tasty"
    },

    {
        name: "Chicken-pie",
        category: "pies",
        price: 30,
        image: "optimized_imgs/chicken_pie.webp",
        description: "Chicken flavour pie"
    },

    {
        name: "Veggie-pie",
        category: "pies",
        price: 25,
        image: "optimized_imgs/veggie_pie.webp",
        description: "Rich in flavour and healthy"
    },


    // DOUGHNUTS
    {
        name: "Chocolate-doughnut",
        category: "doughnuts",
        price: 15,
        image: "optimized_imgs/chocolate_doughnut.webp",
        description: "Covered with tasty chocolate"
    },

    {
        name: "Glaze-doughnut",
        category: "doughnuts",
        price: 18,
        image: "optimized_imgs/glazed_doughnut.webp",
        description: "Covered with yummy glaze"
    },

    {
        name: "Strawberry",
        category: "doughnuts",
        price: 14,
        image: "optimized_imgs/strawberry_doughnut.webp",
        description: "Strawberry toppings and icing"
    },


    // KOEKSISTERS
    {
        name: "Traditional-koeksister",
        category: "koeksisters",
        price: 15,
        image: "optimized_imgs/traditional_koeksisters.webp",
        description: "Traditional koeksister dipped in syrup"
    },

    {
        name: "Coconut-koeksister",
        category: "koeksisters",
        price: 18,
        image: "optimized_imgs/coconut_koeksisters.webp",
        description: "Covered with coconut"
    },


    // CAKE SLICES
    {
        name: "Chocolate-cake",
        category: "cakes",
        price: 30,
        image: "optimized_imgs/chocolate_cake.webp",
        description: "Creamy icing on top"
    },

    {
        name: "Carrot-cake",
        category: "cakes",
        price: 35,
        image: "optimized_imgs/carrot_cake.webp",
        description: "Moist carrot cake with cream cheese icing"
    },

    {
        name: "Vanilla-cake",
        category: "cakes",
        price: 30,
        image: "optimized_imgs/vanilla_cake.webp",
        description: "Soft vanilla sponge with icing"
    }

];



const categoryContainers = {

    coffee: document.getElementById("coffee-products"),
    tea: document.getElementById("tea-products"),
    pies: document.getElementById("pies-products"),
    doughnuts: document.getElementById("doughnuts-products"),
    koeksisters: document.getElementById("koeksisters-products"),
    cakes: document.getElementById("cakes-products")

};



const categoryFilter = document.getElementById("category-filter");

const sortProducts = document.getElementById("sort-products");



function createProductCard(product) {

    const productCard = document.createElement("div");

    productCard.classList.add("product-card");


    // Product image
    const image = document.createElement("img");

    image.src = product.image;

    image.alt = product.name.replaceAll("-", " ");

    image.loading = "lazy";

    image.decoding = "async";


    // Product heading
    const heading = document.createElement("h3");

    heading.textContent = product.name.replaceAll("-", " ").toUpperCase();


    // Product description
    const description = document.createElement("p");

    description.textContent = product.description;


    // Product price
    const price = document.createElement("p");

    price.classList.add("product-price");

    price.textContent = "R" + product.price;


    // Add to Cart button
    const button = document.createElement("button");

    button.classList.add("add-to-cart");

    button.dataset.name = product.name;

    button.dataset.price = product.price;

    button.textContent = "Add to Cart";


    // Add elements to product card
    productCard.appendChild(image);

    productCard.appendChild(heading);

    productCard.appendChild(description);

    productCard.appendChild(price);

    productCard.appendChild(button);


    return productCard;

}



function displayProducts() {

    // Get selected category
    const selectedCategory = categoryFilter.value;


    // Get selected sorting option
    const selectedSort = sortProducts.value;


    // Clear all product containers
    Object.values(categoryContainers).forEach(function(container) {

        if (container) {

            container.innerHTML = "";

        }

    });


    // Filter products by category
    let filteredProducts = products.filter(function(product) {

        return selectedCategory === "all" ||
               product.category === selectedCategory;

    });


    // Sort products by price or name
    if (selectedSort === "price-low") {

        filteredProducts.sort(function(a, b) {

            return a.price - b.price;

        });

    }

    else if (selectedSort === "price-high") {

        filteredProducts.sort(function(a, b) {

            return b.price - a.price;

        });

    }

    else if (selectedSort === "name-az") {

        filteredProducts.sort(function(a, b) {

            return a.name.localeCompare(b.name);

        });

    }


    // Show or hide category sections
    Object.keys(categoryContainers).forEach(function(category) {

        const container = categoryContainers[category];

        if (!container) {
            return;
        }

        const section = container.closest(".product-section");

        if (selectedCategory === "all" ||
            selectedCategory === category) {

            section.style.display = "";

        } else {

            section.style.display = "none";

        }

    });


    // Generate product cards
    filteredProducts.forEach(function(product) {

        const container = categoryContainers[product.category];

        if (container) {

            const productCard = createProductCard(product);

            container.appendChild(productCard);

        }

    });


    console.log("Products displayed:", filteredProducts.length);

}



// Listen for category selection
categoryFilter.addEventListener("change", displayProducts);


// Listen for sorting selection
sortProducts.addEventListener("change", displayProducts);


displayProducts();
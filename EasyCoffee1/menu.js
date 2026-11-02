// JavaScript source code

// Shopping cart array
let cart = [];


// Get cart display elements
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");


// Check that cart elements exist
if (!cartItems || !cartTotal) {
    console.error("Shopping cart elements were not found.");
}


// EVENT DELEGATION: Add to Cart buttons
// This works with dynamically generated product cards

document.addEventListener("click", function(event) {

    if (event.target.classList.contains("add-to-cart")) {

        // Get product information
        const name = event.target.dataset.name;
        const price = Number(event.target.dataset.price);

        // Check whether the product already exists
        const existingProduct = cart.find(
            item => item.name === name
        );

        if (existingProduct) {

            existingProduct.quantity++;

        } else {

            cart.push({
                name: name,
                price: price,
                quantity: 1
            });

        }

        // Update shopping cart
        updateCart();

    }

});


// FUNCTION TO UPDATE THE SHOPPING CART

function updateCart() {

    // Clear current cart display
    cartItems.innerHTML = "";

    // Check if cart is empty
    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        cartTotal.textContent = "0.00";

        return;
    }

    // Loop through products in the cart
    cart.forEach(item => {

        const itemSubtotal = item.price * item.quantity;

        const productElement = document.createElement("div");

        productElement.innerHTML = `
            <p>${item.name}</p>

            <p>
                <button class="quantity-decrease"
                    data-name="${item.name}">−</button>

                ${item.quantity}

                <button class="quantity-increase"
                    data-name="${item.name}">+</button>
            </p>

            <p>Subtotal: R${itemSubtotal.toFixed(2)}</p>

            <button class="remove-item"
                data-name="${item.name}">Remove</button>
        `;

        cartItems.appendChild(productElement);

    });


    // Calculate cart total
    const total = cart.reduce((sum, item) => {

        return sum + (item.price * item.quantity);

    }, 0);


    cartTotal.textContent = total.toFixed(2);

}


// EVENT DELEGATION: Cart quantity and remove buttons

cartItems.addEventListener("click", function(event) {

    const name = event.target.dataset.name;

    // Increase quantity
    if (event.target.classList.contains("quantity-increase")) {

        const product = cart.find(item => item.name === name);

        if (product) {
            product.quantity++;
        }

    }

    // Decrease quantity
    else if (event.target.classList.contains("quantity-decrease")) {

        const product = cart.find(item => item.name === name);

        if (product && product.quantity > 0) {

            product.quantity--;

            if (product.quantity === 0) {

                cart = cart.filter(item => item.name !== name);

            }

        }

    }

    // Remove product completely
    else if (event.target.classList.contains("remove-item")) {

        cart = cart.filter(item => item.name !== name);

    }

    // Refresh cart
    updateCart();

});


// GET CHECKOUT BUTTON

const checkoutButton = document.getElementById("checkout-button");


// SAVE CART DATA BEFORE OPENING CHECKOUT

if (checkoutButton) {

    checkoutButton.addEventListener("click", function(event) {

        if (cart.length === 0) {

            event.preventDefault();

            alert("Your shopping cart is empty!");

            return;
        }

        // Save cart to browser localStorage
        localStorage.setItem(
            "easyCoffeeCart",
            JSON.stringify(cart)
        );

        console.log(
            "Cart saved:",
            localStorage.getItem("easyCoffeeCart")
        );

    });

}
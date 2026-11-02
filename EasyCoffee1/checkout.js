// JavaScript source code
// Retrieve cart data from localStorage
const cart = JSON.parse(localStorage.getItem("easyCoffeeCart")) || [];
let orderSubmitted = false;
// Get checkout display elements
const checkoutItems = document.getElementById("checkout-items");
const checkoutTotal = document.getElementById("checkout-total");

// Display cart contents
function displayCheckout() {

    checkoutItems.innerHTML = "";

    if (cart.length === 0) {
        checkoutItems.innerHTML = "<p>Your cart is empty.</p>";
        checkoutTotal.textContent = "0.00";
        return;
    }

    cart.forEach(item => {

        const subtotal = item.price * item.quantity;

        const product = document.createElement("p");

        product.textContent =
            `${item.name} x ${item.quantity} = R${subtotal.toFixed(2)}`;

        checkoutItems.appendChild(product);

    });
  
    // Calculate total
    const total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    checkoutTotal.textContent = total.toFixed(2);

}
displayCheckout();

// Get checkout form
const checkoutForm = document.getElementById("checkout-form");

// Get confirmation elements
const confirmationSection = document.getElementById("order-confirmation");
const confirmedName = document.getElementById("confirmed-name");
const orderNumber = document.getElementById("order-number");
const confirmedTotal = document.getElementById("confirmed-total");

// Listen for form submission
checkoutForm.addEventListener("submit", function(event) {

    // Prevent automatic page refresh
    event.preventDefault();
    if (orderSubmitted) {
    alert("This order has already been submitted!");
    return;
}

    if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
}

    // Get customer name
    const customerName = document.getElementById("customer-name").value;

    // Calculate order total
    const total = cart.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    // Generate order number
    const orderID = "EC-" + Date.now();


    // Create an order object
const order = {
    orderNumber: orderID,
    customer: customerName,
    products: cart,
    total: total,
    date: new Date().toLocaleString()
};
// Retrieve previously saved orders
let orders = JSON.parse(localStorage.getItem("easyCoffeeOrders")) || [];

// Add the new order
orders.push(order);

// Save all orders
localStorage.setItem("easyCoffeeOrders", JSON.stringify(orders));

    // Display confirmation details
    confirmedName.textContent = customerName;
    orderNumber.textContent = orderID;
    confirmedTotal.textContent = total.toFixed(2);
    orderSubmitted = true;
    alert("Your order has been submitted successfully!");

    // Get receipt display area
const receiptItems = document.getElementById("receipt-items");
receiptItems.innerHTML = "";

// Display purchased products
cart.forEach(item => {

    const subtotal = item.price * item.quantity;

    const product = document.createElement("p");

    product.textContent =
        `${item.name} x ${item.quantity} = R${subtotal.toFixed(2)}`;

    receiptItems.appendChild(product);

});

    // Hide checkout form and order summary
    document.querySelector(".customer-details").style.display = "none";
    document.querySelector(".order-summary").style.display = "none";

    // Display confirmation section
    confirmationSection.hidden = false;

    // Clear saved cart after successful confirmation
    localStorage.removeItem("easyCoffeeCart");
    orderSubmitted = true;
});
// Return to menu
const returnMenuButton = document.getElementById("return-menu");

returnMenuButton.addEventListener("click", function() {
    window.location.href = "Menu.html";
});
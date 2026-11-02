// JavaScript source code
// Retrieve previously saved orders
const orders = JSON.parse(localStorage.getItem("easyCoffeeOrders")) || [];

// Get the order history container
const ordersContainer = document.getElementById("orders-container");

// Function to display saved orders
function displayOrders() {

    ordersContainer.innerHTML = "";

    // Check whether there are saved orders
    if (orders.length === 0) {
        ordersContainer.innerHTML = "<p>No previous orders found.</p>";
        return;
    }
    // Loop through saved orders
orders.forEach(order => {

    const orderElement = document.createElement("div");

    orderElement.innerHTML = `
        <h3>Order: ${order.orderNumber}</h3>
        <p>Customer: ${order.customer}</p>
        <p>Total: R${order.total.toFixed(2)}</p>
        <p>Date: ${order.date}</p>
        <p>Products:</p>
    `;
    // Loop through products in this order
order.products.forEach(item => {

    const productElement = document.createElement("p");

    const subtotal = item.price * item.quantity;

    productElement.textContent =
        `${item.name} x ${item.quantity} = R${subtotal.toFixed(2)}`;

    orderElement.appendChild(productElement);

});


    ordersContainer.appendChild(orderElement);

});
}
// Display saved orders
displayOrders();
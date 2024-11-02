// Sample data to simulate user orders and wishlist
const orders = [
    { id: 1, item: "Neon Tracksuit", date: "2024-08-15", price: 2999 },
    { id: 2, item: "Graffiti Sneakers", date: "2024-09-20", price: 3000 },
    { id: 3, item: "Oversized Hoodie", date: "2024-10-05", price: 1500 },
];

const wishlistItems = [
    { id: 1, item: "K-Pop Inspired Jacket", price: 2999 },
    { id: 2, item: "Retro Baseball Cap", price: 1000 },
];

// Display user orders
function displayOrders() {
    const ordersList = document.getElementById('ordersList');
    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.innerHTML = `
            <p>Order #${order.id}: ${order.item} -  ₹${order.price.toFixed(2)} (Date: ${order.date})</p>
        `;
        ordersList.appendChild(orderDiv);
    });
}

// Display user's wishlist
function displayWishlist() {
    const wishlistItemsContainer = document.getElementById('wishlistItems');
    wishlistItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <p>${item.item} -  ₹${item.price.toFixed(2)}</p>
        `;
        wishlistItemsContainer.appendChild(itemDiv);
    });
}

// Edit user information (placeholder function)
function editUserInfo() {
    alert("Edit functionality is not implemented in this demo.");
}

// Open settings modal (placeholder function)
function openSettingsModal() {
    alert("Settings modal functionality is not implemented in this demo.");
}

// Delete account (placeholder function)
function deleteAccount() {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
        alert("Your account has been deleted.");
        // Here you would typically make an API call to delete the account
    }
}

// Call functions to display orders and wishlist items
displayOrders();
displayWishlist();

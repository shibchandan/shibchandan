// Example products to display on the homepage
const products = [
    { id: 1, name: "Neon Tracksuit", price: 2999, image: "nTs.jpeg" },
    { id: 2, name: "Graffiti Sneakers", price: 3000, image: "graffitisk.jpeg" },
    { id: 3, name: "Oversized Hoodie", price: 1500, image: "hoodieover.jpeg" },
    { id: 4, name: "K-Pop Inspired Jacket", price: 2999, image: "kpop.jpeg" },
    { id: 5, name: "Retro Baseball Cap", price: 1000, image: "rbCap.jpeg" },
];

const trendingItems = [
    { id: 1, name: "Vintage Graphic Tee", price: 3000, image: "vGtee.jpeg" },
    { id: 2, name: "Streetwear Joggers", price: 5000, image: "joggers.jpeg" },
];

const newArrivals = [
    { id: 1, name: "Denim Jacket", price: 8500, image: "denimJk.jpeg" },
    { id: 2, name: "Fanny Pack", price: 3000, image: "fannypk.webp" },
];

function displayProducts() {
    const productList = document.getElementById('productList');
    products.forEach(product => {
        const productDiv = createProductDiv(product);
        productList.appendChild(productDiv);
    });
}

function displayTrendingItems() {
    const trendingItemsList = document.getElementById('trendingItems');
    trendingItems.forEach(item => {
        const itemDiv = createProductDiv(item);
        trendingItemsList.appendChild(itemDiv);
    });
}

function displayNewArrivals() {
    const newArrivalsList = document.getElementById('newArrivalsList');
    newArrivals.forEach(item => {
        const itemDiv = createProductDiv(item);
        newArrivalsList.appendChild(itemDiv);
    });
}

// function createProductDiv(product) {
//     const productDiv = document.createElement('div');
//     productDiv.className = 'product-item';
//     productDiv.innerHTML = `
//         <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius: 4px;">
//         <h3>${product.name}</h3>
//         <p>Price: ₹${product.price.toLocaleString('en-IN')} </p>
//         <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
//     `;
//     return productDiv;
// }

function createProductDiv(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'product-item';
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width:300px; height:200px; border-radius: 4px;">
        <h3>${product.name}</h3>
        <p>Price: ₹${product.price.toLocaleString('en-IN')} </p>
        <button onclick="addToWishlist(${product.id})">Add to Wishlist</button>
    `;
    return productDiv;
}


function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    alert(`${product.name} added to wishlist!`);
}

displayProducts();
displayTrendingItems();
displayNewArrivals();

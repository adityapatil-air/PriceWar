const amazonProducts = [
    { id: 1, name: 'Running Shoe', image: 'https://example.com/shoe.jpg', price: 59.99, rating: 4.5 },
    { id: 2, name: 'Wireless Headphones', image: 'https://example.com/headphones.jpg', price: 89.99, rating: 4.7 },
    { id: 3, name: 'Smart Watch', image: 'https://example.com/watch.jpg', price: 129.99, rating: 4.3 },
    { id: 4, name: 'Laptop', image: 'https://example.com/laptop.jpg', price: 999.99, rating: 4.8 },
    { id: 5, name: 'Bluetooth Speaker', image: 'https://example.com/speaker.jpg', price: 45.99, rating: 4.6 },
    { id: 6, name: 'Tablet', image: 'https://example.com/tablet.jpg', price: 299.99, rating: 4.4 },
    { id: 7, name: 'Gaming Console', image: 'https://example.com/console.jpg', price: 399.99, rating: 4.9 },
    { id: 8, name: 'Action Camera', image: 'https://example.com/camera.jpg', price: 199.99, rating: 4.2 },
    { id: 9, name: 'Electric Toothbrush', image: 'https://example.com/toothbrush.jpg', price: 29.99, rating: 4.5 },
    { id: 10, name: 'Fitness Tracker', image: 'https://example.com/tracker.jpg', price: 49.99, rating: 4.6 }
];

const flipkartProducts = [
    { id: 1, name: 'Running Shoe', image: 'https://example.com/shoe.jpg', price: 1999, rating: 4.5 },
    { id: 2, name: 'Bluetooth Earbuds', image: 'https://example.com/earbuds.jpg', price: 2999, rating: 4.3 },
    { id: 3, name: 'Smartphone', image: 'laptop.jpeg', price: 14999, rating: 4.6 },
    { id: 4, name: 'LED TV', image: 'https://example.com/tv.jpg', price: 24999, rating: 4.7 },
    { id: 5, name: 'Laptop', image: 'https://example.com/laptop.jpg', price: 55999, rating: 4.8 },
    { id: 6, name: 'Washing Machine', image: 'https://example.com/washing-machine.jpg', price: 18999, rating: 4.4 },
    { id: 7, name: 'Microwave Oven', image: 'https://example.com/microwave.jpg', price: 7999, rating: 4.2 },
    { id: 8, name: 'Refrigerator', image: 'https://example.com/refrigerator.jpg', price: 27999, rating: 4.6 },
    { id: 9, name: 'Air Conditioner', image: 'https://example.com/air-conditioner.jpg', price: 33999, rating: 4.5 },
    { id: 10, name: 'Fitness Band', image: 'https://example.com/fitness-band.jpg', price: 1999, rating: 4.3 }
];

function searchProduct() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    const amazonProduct = amazonProducts.find(product => product.name.toLowerCase().includes(searchTerm));
    const flipkartProduct = flipkartProducts.find(product => product.name.toLowerCase().includes(searchTerm));
    
    const amazonProductInfo = document.getElementById('amazonProductInfo');
    const flipkartProductInfo = document.getElementById('flipkartProductInfo');
    const notAvailable = document.getElementById('notAvailable');
    
    amazonProductInfo.innerHTML = '';
    flipkartProductInfo.innerHTML = '';
    notAvailable.style.display = 'none';
    
    if (amazonProduct) {
        amazonProductInfo.innerHTML = `
            <img src="${amazonProduct.image}" alt="${amazonProduct.name}">
            <h3>Price:</h3> <div class="price">$${amazonProduct.price.toFixed(2)}</div>
            <h3>Rating:</h3> <div class="rating">${amazonProduct.rating}⭐</div>
        `;
    }
    
    if (flipkartProduct) {
        flipkartProductInfo.innerHTML = `
            <img src="${flipkartProduct.image}" alt="${flipkartProduct.name}">
            <h3>Price:</h3> <div class="price">₹${flipkartProduct.price}</div>
            <h3>Rating:</h3> <div class="rating">${flipkartProduct.rating}⭐</div>  
        `;
    }
    
    if (!amazonProduct && !flipkartProduct) {
        notAvailable.style.display = 'block';
    }
}

document.getElementById('searchInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        searchProduct();
    }
});
document.querySelector(".btn").addEventListener("click",function(event){
    searchProduct();
})

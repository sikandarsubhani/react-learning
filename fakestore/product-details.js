const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser) {
    window.location.href = 'login.html';
}
document.getElementById('userInfo').textContent = `(${currentUser.userType})`;

function displayProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    
    // Convert both IDs to strings for comparison
    const product = products.find(p => String(p.id) === String(productId));

    if (!product) {
        document.getElementById('productDetails').innerHTML = '<h2 style="color:antiquewhite">Product not found</h2>';
        return;
    }

    const stars = "★".repeat(Math.round(product.rating?.rate || 0)) + 
                 "☆".repeat(5 - Math.round(product.rating?.rate || 0));

    document.getElementById('productDetails').innerHTML = `
        <div class="product-details">
            <img src="${product.image}" alt="${product.title}">
            <div class="details-content">
                <h1>${product.title}</h1>
                <p class="price"><strong>Price:</strong> Rs${product.price}</p>
                <div class="rating">
                    <span class="stars">${stars}</span>
                    <span class="count">(${product.rating?.count || 0})</span>
                </div>
                <p class="category"><strong>Category:</strong> ${product.category}</p>
                <p class="description">${product.description}</p>
                ${currentUser.userType === 'buyer' ? 
                    `<button onclick="addToCart('${product.id}')" class="add-to-cart-btn">Add to Cart</button>` : 
                    ''
                }
            </div>
        </div>
    `;
}

function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem(`cart_${currentUser.email}`) || '[]');
    if (cart.includes(productId)) {
        alert('Product already in cart!');
        return;
    }
    cart.push(productId);
    localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(cart));
    alert('Product added to cart!');
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

displayProductDetails();

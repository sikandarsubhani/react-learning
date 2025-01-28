const currentUser = JSON.parse(localStorage.getItem('currentUser'));
if (!currentUser) {
    window.location.href = 'login.html';
}

document.getElementById('userInfo').textContent = `Welcome, ${currentUser.name}`;

function displayCart() {
    const cartIds = JSON.parse(localStorage.getItem(`cart_${currentUser.email}`) || '[]');
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const tableBody = document.getElementById('cartTableBody');
    tableBody.innerHTML = '';
    
    let total = 0;

    cartIds.forEach(productId => {
        // Convert productId to string or number based on what's stored
        const product = products.find(p => String(p.id) === String(productId));
        if (product) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${product.image}" alt="${product.name || product.title}"></td>
                <td>${product.name || product.title}</td>
                <td>Rs${product.price}</td>
                <td><button class="remove-btn" onclick="removeFromCart(${product.id})">Remove</button></td>
            `;
            tableBody.appendChild(row);
            total += parseFloat(product.price);
        }
    });

    // For debugging
    console.log('Cart IDs:', cartIds);
    console.log('Products:', products);

    // Show message if cart is empty
    if (cartIds.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="4" style="text-align: center;">Your cart is empty</td>
            </tr>
        `;
    }

    document.getElementById('cartTotal').innerHTML = `
        <h3>Total: Rs${total.toFixed(2)}</h3>
    `;
}

function removeFromCart(productId) {
    const cart = JSON.parse(localStorage.getItem(`cart_${currentUser.email}`) || '[]');
    const updatedCart = cart.filter(id => String(id) !== String(productId));
    localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(updatedCart));
    displayCart();
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

displayCart();

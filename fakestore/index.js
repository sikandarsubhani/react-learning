        // Check authentication
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            window.location.href = 'login.html';
        }

        // Display user info
        document.getElementById('userInfo').textContent = `(${currentUser.userType})`;

        // Show seller controls if user is a seller
        if (currentUser.userType === 'seller') {
            document.querySelector('.nav-links').style.display = 'none';
            document.getElementById('sellerControls').style.display = 'block';
        }

        function handleAddProduct(event) {
            event.preventDefault();
            
            const product = {
                id: Date.now(),
                title: document.getElementById('productName').value,
                price: parseFloat(document.getElementById('productPrice').value),
                description: document.getElementById('productDescription').value,
                category: document.getElementById('category').value,
                image: document.getElementById('productImage').value,
                rating: {
                    rate: parseFloat(document.getElementById('productRate').value),
                    count: parseInt(document.getElementById('productCount').value)
                },
                sellerId: currentUser.email
            };

            // Get existing products or initialize empty array
            const products = JSON.parse(localStorage.getItem('products') || '[]');
            products.push(product);
            localStorage.setItem('products', JSON.stringify(products));

            displayProducts();
            event.target.reset();
            return false;
        }
        

       

        function deleteProduct(productId) {
            const products = JSON.parse(localStorage.getItem('products') || '[]');
            const updatedProducts = products.filter(p => p.id !== productId);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
            displayProducts();
        }

       

        function logout() {
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        }
        function displayProducts() {
          // Get current user
          const currentUser = JSON.parse(localStorage.getItem('currentUser'));
          if (!currentUser) {
              window.location.href = 'login.html';
              return;
          }

          const products = JSON.parse(localStorage.getItem('products') || '[]');
          const container = document.getElementById('productsContainer');
          container.innerHTML = '';

          // Filter products based on user type
          const filteredProducts = currentUser.userType === 'seller' ? products.filter(product => product.sellerId === currentUser.email): products;

          filteredProducts.forEach(product => {
              const stars = "★".repeat(Math.round(product.rating?.rate || 0)) + "☆".repeat(5 - Math.round(product.rating?.rate || 0));
              const productElement = document.createElement('div');
              productElement.className = 'product-card';
              
              // Add click handler for the entire card
              if (currentUser.userType === 'buyer') {
                  productElement.onclick = function(e) {
                      // Prevent click when clicking buttons
                      if (e.target.tagName !== 'BUTTON') {
                          window.location.href = `product-details.html?id=${String(product.id)}`;
                      }
                  };
              }

              productElement.innerHTML = `
                  <h2>${product.title}</h2>
                  <img src="${product.image}" alt="${product.title}">
                  <p><strong>Price:</strong> Rs${product.price}</p>
                  <div class="rating">
                      <span class="stars">${stars}</span>
                      <span class="count">(${product.rating?.count || 0})</span>
                  </div>
                  ${currentUser.userType === 'seller' 
                      ? `<div class="button-group">
                          <button onclick='openUpdateModal(${JSON.stringify(product).replace(/'/g, "&#39;")})'>Update</button>
                          <button onclick="deleteProduct('${product.id}')" class="delete-btn">Delete</button>
                         </div>`
                      : `<button onclick="addToCart('${product.id}')">Add to Cart</button>`
                  }
              `;
              container.appendChild(productElement);
          });
      }

      function addToCart(productId) {
          const currentUser = JSON.parse(localStorage.getItem('currentUser'));
          const cart = JSON.parse(localStorage.getItem(`cart_${currentUser.email}`) || '[]');
          // Check if product is already in cart
          if (cart.includes(productId)) {
              alert('Product already in cart!');
              return;
          }
          cart.push(productId);
          localStorage.setItem(`cart_${currentUser.email}`, JSON.stringify(cart));
          alert('Product added to cart!');
      }

      document.addEventListener('DOMContentLoaded', displayProducts);
      displayProducts();

      // Add these new functions
      function openUpdateModal(product) {
          const modal = document.getElementById('updateModal');
          // Convert product to proper object if it's a string
          const productObj = typeof product === 'string' ? JSON.parse(product) : product;
          
          document.getElementById('updateProductId').value = productObj.id;
          document.getElementById('updateName').value = productObj.title;
          document.getElementById('updatePrice').value = productObj.price;
          document.getElementById('updateDescription').value = productObj.description;
          document.getElementById('updateCategory').value = productObj.category;
          document.getElementById('updateImage').value = productObj.image;
          document.getElementById('updateRate').value = productObj.rating?.rate || 0;
          document.getElementById('updateCount').value = productObj.rating?.count || 0;
          modal.style.display = 'block';
      }

      function handleUpdateProduct(event) {
          event.preventDefault();
          const productId = document.getElementById('updateProductId').value;
          const products = JSON.parse(localStorage.getItem('products') || '[]');
          
          const updatedProduct = {
              id: productId, // Keep the ID as is, don't parse it
              title: document.getElementById('updateName').value,
              price: parseFloat(document.getElementById('updatePrice').value),
              description: document.getElementById('updateDescription').value,
              category: document.getElementById('updateCategory').value,
              image: document.getElementById('updateImage').value,
              rating: {
                  rate: parseFloat(document.getElementById('updateRate').value) || 0,
                  count: parseInt(document.getElementById('updateCount').value) || 0
              },
              sellerId: currentUser.email
          };

          const updatedProducts = products.map(p => 
              String(p.id) === String(productId) ? updatedProduct : p
          );
          
          localStorage.setItem('products', JSON.stringify(updatedProducts));
          document.getElementById('updateModal').style.display = 'none';
          displayProducts();
          return false;
      }

      // Add modal close functionality
      document.querySelector('.close').onclick = function() {
          document.getElementById('updateModal').style.display = 'none';
      }

      window.onclick = function(event) {
          const modal = document.getElementById('updateModal');
          if (event.target == modal) {
              modal.style.display = 'none';
          }
      }

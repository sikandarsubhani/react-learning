# FakeStore

This project is a simple e-commerce application built using HTML, CSS, and JavaScript. It includes the following features:

- **Authentication**: Users can sign up and log in. There are two types of users: buyers and sellers.
- **Product Management**: Sellers can add, update, and delete products. Buyers can view product details and add products to their cart.
- **Cart Management**: Buyers can view their cart, remove items, and see the total price.
- **Responsive Design**: The application is responsive and works well on both desktop and mobile devices.

## Files

- `index.html`: The main page displaying products.
- `product-details.html`: The page displaying detailed information about a product.
- `cart.html`: The page displaying the user's cart.
- `login.html`: The login and sign-up page.
- `styles.css`: The main stylesheet for the application.
- `auth.css`: The stylesheet for the authentication pages.
- `index.js`: The main JavaScript file handling product display and user interactions.
- `product-details.js`: The JavaScript file handling product details display.
- `cart.js`: The JavaScript file handling cart functionality.
- `auth.js`: The JavaScript file handling user authentication.

## How to Run

1. Open `login.html` in your browser to sign up or log in.
2. After logging in, you will be redirected to `index.html` where you can view products.
3. Sellers can add new products using the form on the main page.
4. Buyers can view product details and add products to their cart.
5. View the cart by navigating to `cart.html`.

## Local Storage

The application uses `localStorage` to store user data, product data, and cart data. This means that the data will persist even if you refresh the page or close the browser.

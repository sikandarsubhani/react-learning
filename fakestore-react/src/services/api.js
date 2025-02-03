const API_URL = "https://fakestoreapi.com/products";

// Function to fetch products
export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Function to add a new product
export const addProduct = async (newProduct) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error('Failed to add product');
    }

    const data = await response.json(); // Return the added product data
    return data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error; // Rethrow the error for handling in the calling function
  }
};
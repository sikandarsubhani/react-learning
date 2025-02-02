import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch products from API or local data
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      const uniqueCategories = [...new Set(data.map(product => product.category))];
      setCategories(uniqueCategories);
    };
    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div className="homepage">
      <div className="category-dropdown">
        <select onChange={(e) => handleCategoryChange(e.target.value)}>
          <option value="All">All</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;

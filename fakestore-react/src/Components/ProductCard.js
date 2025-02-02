import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h3><Link to={`/product/${product.id}`}>{product.title}</Link></h3>
      <p>${product.price}</p>
      <div className="star-rating">★★★★☆</div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductCard;

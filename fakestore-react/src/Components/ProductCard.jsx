import { useState } from "react";
import './../styles/ProductCard.css'
import { useCart } from "../Context/CartContext";
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const userType = localStorage.getItem('userType'); // Assuming 'userType' is the key used to store the type
  const isSeller = userType === 'seller'; // Check if the user type is 'seller'

  const handleAddToCart = () => {
    const isLoggedIn = localStorage.getItem('loggedInUser');

    if (!isLoggedIn) {
      alert("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }
    addToCart(product);
    setAdded(true);
  };
  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    setAdded(false);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="top" style={{ backgroundImage: `url(${product.image})` }}></div>
        <div className={`bottom ${added ? "clicked" : ""}`}>
          <div className="left">
            <div className="details">
              <h5>{product.title}</h5>
              <p>${product.price}</p>
            </div>
            <div className="buy" onClick={handleAddToCart}>
              <i class="material-symbols-outlined">add_shopping_cart</i>
            </div>
          </div>
          <div className="right">
            <div className="done">
              <i className="material-symbols-outlined">done</i>
            </div>
            <div className="details">
              <h5>{product.title}</h5>
              <p>Added to your cart</p>
            </div>
            <div className="remove" onClick={handleRemoveFromCart}>
              <i className="material-symbols-outlined">clear</i>
            </div>
          </div>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <i className="material-symbols-outlined">info</i>
        </div>
        <div className="contents">

          <p className="product-description">
            {product.title}
            <br /><br />
            {product.description}
            <br /><br /><br />
            <p> <strong>⭐{product.rating.rate}</strong>  <span>{product.rating.count} Ratings </span></p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

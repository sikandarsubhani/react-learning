import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { handleUpdateCart, handleRemoveFromCart } = useContext(CartContext);

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.title}</h3>
        <div className="quantity-controls">
          <button onClick={() => handleUpdateCart(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => handleUpdateCart(item.id, item.quantity + 1)}>+</button>
        </div>
        <p>${item.price * item.quantity}</p>
        <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;

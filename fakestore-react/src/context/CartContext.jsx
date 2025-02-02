import {  useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCart, addToCart, updateCart, removeFromCart } from '../utils/cart';
import { CartContext } from './CartContext';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setCart(getCart());
  };

  const handleUpdateCart = (productId, quantity) => {
    updateCart(productId, quantity);
    setCart(getCart());
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
    setCart(getCart());
  };

  return (
    <CartContext.Provider value={{ cart, handleAddToCart, handleUpdateCart, handleRemoveFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

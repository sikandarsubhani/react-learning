import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import CartItem from '../components/CartItem';
import AuthModal from '../components/AuthModal';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!currentUser) {
    return showLoginModal && <AuthModal onClose={() => setShowLoginModal(false)} />;
  }

  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      <button className="checkout" disabled={!currentUser || currentUser.role !== 'buyer'}>Checkout</button>
    </div>
  );
};

export default Cart;

import { useCart } from './../Context/CartContext';
import './../styles/Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  let quantity = 1;
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (!currentUser) {
    navigate("/login")
  }


  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * quantity, 0);

  return (
    <div className='cart-container'>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td><img src={item.image} alt={item.title} style={{ width: '50px' }} /></td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <button onClick={() => quantity > 1 && quantity--}>-</button>
                  {quantity}
                  <button onClick={() => quantity++}>+</button>
                </td>
                <td>${(item.price * quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {cartItems.length > 0 && (
        <div className="cart-total">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;

import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/AuthContext';

const AuthModal = ({ onClose }) => {
  const { handleLogin, handleSignup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('buyer');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required');
      return;
    }
    try {
      if (isSignup) {
        handleSignup(email, password, role);
      } else {
        handleLogin(email, password, role);
      }
      onClose();
    } catch {
      setError('Authentication failed');
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>{isSignup ? 'Signup' : 'Login'}</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <div>
          <label>
            <input
              type="radio"
              value="buyer"
              checked={role === 'buyer'}
              onChange={(e) => setRole(e.target.value)}
            />
            Buyer
          </label>
          <label>
            <input
              type="radio"
              value="seller"
              checked={role === 'seller'}
              onChange={(e) => setRole(e.target.value)}
            />
            Seller
          </label>
        </div>
        <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
        <p onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? 'Already have an account? Login' : 'New user? Signup'}
        </p>
      </form>
    </div>
  );
};

AuthModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AuthModal;

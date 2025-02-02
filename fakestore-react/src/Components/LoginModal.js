
import React, { useState } from 'react';
import { login, signup } from '../utils/auth';

const LoginModal = ({ setCurrentUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Buyer');
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = isSignup ? signup(email, password, role) : login(email, password, role);
    if (user) {
      setCurrentUser(user);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h2>{isSignup ? 'Signup' : 'Login'}</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <div>
          <label>
            <input type="radio" value="Buyer" checked={role === 'Buyer'} onChange={(e) => setRole(e.target.value)} />
            Buyer
          </label>
          <label>
            <input type="radio" value="Seller" checked={role === 'Seller'} onChange={(e) => setRole(e.target.value)} />
            Seller
          </label>
        </div>
        <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
        <p onClick={() => setIsSignup(!isSignup)}>{isSignup ? 'Already have an account? Login' : 'New user? Signup'}</p>
      </form>
    </div>
  );
};

export default LoginModal;
import {  useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCurrentUser, login, signup, logout } from '../utils/auth';
import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const handleLogin = (email, password, role) => {
    const user = login(email, password, role);
    setCurrentUser(user);
  };

  const handleSignup = (email, password, role) => {
    const user = signup(email, password, role);
    setCurrentUser(user);
  };

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, handleLogin, handleSignup, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

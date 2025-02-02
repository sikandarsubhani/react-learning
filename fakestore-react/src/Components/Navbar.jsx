import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { UIContext } from '../context/UIContext';

const Navbar = () => {
  const { currentUser, handleLogout } = useContext(AuthContext);
  const { isSidebarOpen, toggleSidebar } = useContext(UIContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from API or local data
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">FakeStore</Link>
      </div>
      <div className="navbar-center">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <div className="dropdown">
          <button className="dropbtn">Category</button>
          <div className="dropdown-content">
            {categories.map(category => (
              <Link key={category} to={`/category/${category}`}>{category}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="navbar-right">
        {currentUser ? (
          <div>
            <span className="user-role">{currentUser.role}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login/Signup</Link>
        )}
      </div>
      <div className="hamburger-menu" onClick={toggleSidebar}>
        &#9776;
      </div>
      {isSidebarOpen && (
        <div className="sidebar">
          <Link to="/" onClick={toggleSidebar}>Home</Link>
          <Link to="/cart" onClick={toggleSidebar}>Cart</Link>
          {categories.map(category => (
            <Link key={category} to={`/category/${category}`} onClick={toggleSidebar}>{category}</Link>
          ))}
          {currentUser ? (
            <div>
              <span className="user-role">{currentUser.role}</span>
              <button onClick={() => { handleLogout(); toggleSidebar(); }}>Logout</button>
            </div>
          ) : (
            <Link to="/login" onClick={toggleSidebar}>Login/Signup</Link>
          )}
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  setCurrentUser: PropTypes.func,
};

export default Navbar;

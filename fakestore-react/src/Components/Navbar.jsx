import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './../styles/Navbar.css'

const Navbar = ({ user }) => {
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // Remove login status
    navigate('/')
    // localStorage.removeItem('userType'); // Optionally remove user type if stored
    // Add any additional logout logic if needed
  };
  // const userType = localStorage.getItem(`${user.userType}`); // Retrieve user type from localStorage
  const isLoggedIn = localStorage.getItem('loggedInUser'); // Check if user is logged in

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };




  return (
    <nav>
      <div className="logo">
        <Link to="/"><img src="src\assets\fakestore.png" alt="Fakestore" /></Link>
      </div>
      <div className="center-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">Category</a>
          <div class="dropdown-content">
            <a href="#">Mens</a>
            <a href="#">Women</a>
            <a href="#">Child</a>
            <a href="#">jewelery</a>
          </div>
        </li>


      </div>
      <div className="right-links">
        {isLoggedIn ? (
          <>
            {/* <span>{userType}</span> */}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
      <span className="material-symbols-outlined" onClick={handleToggleSidebar}>
      {isSidebarOpen ? "close" : "menu"}
    </span>
    
    {isSidebarOpen && (
  <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
    <ul>
      <li>
      <span className="material-symbols-outlined">home</span>
        <Link to="/">Home</Link>
      </li>
      <li>
      <span className="material-symbols-outlined">shopping_cart</span>
        <Link to="/cart">Cart</Link>
      </li>
      <li>
      
        {isLoggedIn ? (
          <div>
          <span className="material-symbols-outlined">logout</span>
          <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
          <li>
          <span className="material-symbols-outlined">login</span>
            <Link to="/login">Login</Link>
          </li>
          <li>
          <span className="material-symbols-outlined">person</span>
            <Link to="/signup">Sign Up</Link>
          </li>
          </div>
        )}
      </li>
    </ul>
  </div>
)}
    </nav>
  );
};

export default Navbar;

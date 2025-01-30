import React from "react";
import { Link } from "react-router";
import "./../css/Navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
        <Link to="/trending" className="nav-link">
          Trending
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo"> Travel Explorer</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/tips">Tips</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

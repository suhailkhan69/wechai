import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsMobile(!isMobile);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <div className="logo-container">
          <img src="/images/logowc.png" alt="Logo" className="logo" />
        </div>

        {/* Navbar links */}
        <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li className="dropdown">
            <a href="/brands" className="dropbtn">Our Brands</a>
            <div className="dropdown-content">
              <a href="/brand1">Brand 1</a>
              <a href="/brand2">Brand 2</a>
              <a href="/brand3">Brand 3</a>
            </div>
          </li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Mobile menu icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={`fas ${isMobile ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

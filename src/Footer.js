import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <h1>DAV & MEL <span>HOSPITALITY</span></h1>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          {/* About Us */}
          <div className="footer-column">
            <h3>About Us</h3>
            <ul>
              <li><a href="/our-story">Our Story</a></li>
              <li><a href="/our-milestones">Our Milestones</a></li>
            </ul>
          </div>

          {/* Our Brands */}
          <div className="footer-column">
            <h3>Our Brands</h3>
            <ul>
              <li><a href="/wecrunch">Wecrunch</a></li>
              <li><a href="/rolexcoffee">Rolexcoffee</a></li>
              <li><a href="/madfries">Madfries</a></li>
              <li><a href="/milkyma">Milkyma</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-column">
            <h3>Social Media</h3>
            <ul className="social-icons">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

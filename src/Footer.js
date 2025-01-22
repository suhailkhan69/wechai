import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="/images/logowc.png" alt="DAV & MEL Logo" className="footer-logo-img" />
        </div>

        {/* Links Section */}
        <div className="footer-links">
          {/* About Us */}
          <div className="footer-column">
          <h2>Our Pages</h2>
            <ul>
              <li><a href="/about-us">About us</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>

            </ul>
          </div>

          {/* Our Brands */}
          <div className="footer-column">
            <h2>Our Brands</h2>
            <ul>
              <li><a href="https://wecrunchfranchise.in/">Wecrunch</a></li>
              <li><a href="https://rollexcoffeefranchise.com/">Rolexcoffee</a></li>
              <li><a href="/madfries">Madfries</a></li>
              <li><a href="https://www.milkymastore.in/">Milkyma</a></li>
            </ul>
          </div>

          {/* Social Media */}
          {/* <div className="footer-column">
            <h3>Social Media</h3>
            <ul className="social-icons">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

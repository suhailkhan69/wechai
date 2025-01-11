import React from 'react';
import './Gallery.css';
import Footer from './Footer';


const Gallery = () => {
  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <div className="hero-section1">
        <img src="/images/Group 47.png" alt="Hero Background" className="hero-image" />
      </div>
      <div className="hero-section">
        <h1>Our Gallery</h1>
        <p>
          Explore our Gallery page to discover a collection of images showcasing our work,
          events, and branches.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="gallery-section">
        <div className="gallery-grid">
          <img src="/images/image 16.png" alt="Gallery 1" />
          <img src="/images/image 17.png" alt="Gallery 2" />
          <img src="/images/image 21.png" alt="Gallery 3" />
          <img src="/images/image 18.png" alt="Gallery 4" />
          <img src="/images/image 19.png" alt="Gallery 5" />
          <img src="/images/image 20.png" alt="Gallery 6" />
        </div>
      </div>

<Footer/>
    </div>
  );
};

export default Gallery;

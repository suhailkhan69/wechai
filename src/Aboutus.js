import React from 'react';
import './Aboutus.css';
import Footer from './Footer';


const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <div className="hero-section2">
        <img src="/images/tea.png" alt="Hero Background" className="hero-image" />
      </div>

      {/* About Us Section */}
      <div className="about-section">
        <h2>About Us</h2>
        <div className="card">
          <div className="card-content">
            {/* Mission Section */}
            <div className="mission">
              <h3>Our Mission</h3>
              <p>
                Our goal is to empower individuals to become self-reliable entrepreneurs in the food
                industry on a global scale, providing them with the resources, knowledge, and
                support they need to build sustainable businesses at an affordable cost, making
                entrepreneurship accessible to all.
              </p>
            </div>

            {/* Image in Between */}
            <div className="divider-image">
              <img src="/images/Group 36.png" alt="Divider" />
            </div>

            {/* Vision Section */}
            <div className="vision">
              <h3>Our Vision</h3>
              <p>
                Our vision is to establish a network of high-quality Quick Service Restaurants
                (QSRs) that prioritize using only the finest, fresh ingredients. By focusing on
                exceptional taste and premium quality, we aim to offer products that consistently
                exceed customer expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Section */}
      <div className="milestones-section" style={{
    backgroundImage: 'url(/images/Frame15.png)', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '50px 20px',
    color: 'white',
    textAlign: 'center',
  }} >
        <h2>Significant Milestones Achieved</h2>
        <div className="milestones">
          <div className="milestone">
            <h3>4000+</h3>
            <p>Employee Family</p>
          </div>
          <div className="milestone">
            <h3>1100+</h3>
            <p>Entrepreneurs</p>
          </div>
          <div className="milestone">
            <h3>32cr+</h3>
            <p>Number of Cups Sold</p>
          </div>
        </div>
      </div>

      {/* Origin Story Section */}
      <div className="origin-story-section">
        <h2>Our Origin Story</h2>
        <p>
          David Manohar Lanka, founder of We Chai, is a hospitality entrepreneur with a Master's in
          Hotel Management from Greenwich University, London. His passion for food, which began at
          age 10, led him to work with top hotel chains like The Park, Choice Group, and Ramada
          across India, London, and Dubai.
        </p>
        <p>
          With over 17 years of industry experience, David launched several successful brands,
          including We Chai, Mad Fries, We Crunch, and Milkyna. Together, these brands operate
          1,100+ outlets in India and Sri Lanka, with plans for international expansion to Canada
          and the Philippines.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;

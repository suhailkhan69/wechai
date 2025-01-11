import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import AboutUs from './Aboutus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  return (
    <div className="App">


      <Navbar />

      {/* Section 1 - Video */}
      <section className="App-section-test">
        <video className="App-video" autoPlay muted loop>
          <source src="/video/IMG_6496.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Section 2 - Founder */}
      <section className="App-section founder-section">
        <div className="founder-content">
          <div className="founder-text">
            <h2 className="founder-title">
              Insight About <span className="highlight">Our Founder</span>
            </h2>
            <p className="founder-paragraph">
              David Manohar Lanka, founder of We Chai, is a hospitality entrepreneur with a 
              Master's in Hotel Management from Greenwich University, London. His passion 
              for food, which began at age 10, led him to work with top hotel chains like The 
              Park, Choice Group, and Ramada across India, London, and Dubai.
            </p>
            <p className="founder-paragraph">
              With over 17 years of industry experience, David launched several successful 
              brands, including We Chai, Mad Fries, We Crunch, Rollex Coffee, and Milkyma. 
              Together, these brands operate 1,100+ outlets in India and Sri Lanka, with plans 
              for international expansion to Canada and the Philippines.
            </p>
          </div>
          <div className="founder-image">
            <img src="/images/founder.png" alt="Founder" />
          </div>
        </div>
      </section>

      {/* Section 3 - About */}
      <section className="App-section about-section">
        <div className="about-content">
          <div className="about-image-text">
            <h2>Our Milestones Achieved</h2>
            <p>Below, you'll find our most beloved and best-selling items, cherished by all our customers for their exceptional taste and quality.</p>
          </div>
          <div className="about-image">
            <img src="/images/CUPS.png" alt="About Us" />
          </div>
        </div>
      </section>

            {/* Section 4 with background image */}
<section
  className="App-section testimonials-section"
  style={{
    backgroundImage: 'url(/images/bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '50px 20px',
      // Ensure the section height doesn't overflow
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align content to the top
  }}
>
  <div className="testimonials-text">
    <h2>Our Core Products</h2>
    <p>Each item on our menu is thoughtfully handpicked, crafted with care to delight and satisfy the unique tastes of our beloved customers</p>
  </div>
  
  <div className="testimonials-images">
    <div className="testimonial-image">
      <img src="/images/Group 3.png" alt="Testimonial 1" />
    </div>
    <div className="testimonial-image">
      <img src="/images/Group 4.png" alt="Testimonial 2" />
    </div>
    <div className="testimonial-image">
      <img src="/images/Group 5.png" alt="Testimonial 3" />
    </div>
    <div className="testimonial-image">
      <img src="/images/Group 6 (1).png" alt="Testimonial 4" />
    </div>
    <div className="testimonial-image">
      <img src="/images/Group 6.png" alt="Testimonial 5" />
    </div>
    <div className="testimonial-image">
      <img src="/images/Group 7 (1).png" alt="Testimonial 6" />
    </div>
    <div className="testimonial-image">
      <img src="/images/Group 7.png" alt="Testimonial 7" />
    </div>
    <div className="testimonial-image">
      <img src="/images/Group 8 (1).png" alt="Testimonial 8" />
    </div>
    <div className="testimonial-image">
      <img src="/images/Group 8.png" alt="Testimonial 9" />
    </div>
  </div>
</section>

      {/* Section 5 */}
      <section
  className="App-section"
  style={{
    backgroundImage: 'url(/images/bg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '50px 20px',
    height: '100vh',  // Ensure the section height doesn't overflow
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  }}
>
<div className="testimonials-text">
    <h2>Our Core Products</h2>
    <p>Each item on our menu is thoughtfully handpicked, crafted with care to delight and satisfy the unique tastes of our beloved customers</p>
  </div>
    <Carousel/>
</section>
 {/* Section 6 */}
 <section
  className="App-section"
  style={{
    
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '50px 20px',
    height: '100vh',  // Ensure the section height doesn't overflow
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  }}
>
<div className="testimonials-text">
    <h2>Join Our Franchise Network</h2>
    <p>Fill in your details and get in touch with us to learn more about our franchise opportunities.</p>
  </div>
  <div className="contact-container">
          <div className="contact-card">
            {/* Contact Form */}
            <div className="contact-form">
              <h2>We would love to hear from you</h2>
              <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email address" required />
                <input type="text" placeholder="Contact Number" required />
                <div className="input-row">
                  <input type="text" placeholder="City" required />
                  <input type="text" placeholder="State" required />
                </div>
                <input type="text" placeholder="Country" required />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
                <button type="submit">Send</button>
              </form>
            </div>

          
          </div>
        </div>

</section>


      <Footer/>
    </div>
  );
}


export default Home;
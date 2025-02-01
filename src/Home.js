import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Carousel from './Carousel';
import AboutUs from './Aboutus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import CountUp from 'react-countup';

function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    city: "",
    state: "",
    country: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", contact: "", city: "", state: "", country: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="App">
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

      {/* Milestones Section with Counting Effect */}
      <div className="milestones-section" style={{
          backgroundImage: 'url(/images/Frame15.png)',
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
            <h3>
              <CountUp start={0} end={4000} duration={3} separator="," />
              +
            </h3>
            <p>Employee Family</p>
          </div>
          <div className="milestone">
            <h3>
              <CountUp start={0} end={1100} duration={2} separator="," />
              +
            </h3>
            <p>Entrepreneurs</p>
          </div>
          <div className="milestone">
            <h3>
              <CountUp start={0} end={32} duration={6} decimals={0} />
              cr+
            </h3>
            <p>Number of Cups Sold</p>
          </div>
        </div>
      </div>

      {/* Section 4 with background image */}
      <section
        className="App-section testimonials-section"
        style={{
          backgroundImage: 'url(/images/bg1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <div className="testimonials-text">
          <h2>Our Core Products</h2>
          <p>Each item on our menu is thoughtfully handpicked, crafted with care to delight and satisfy the unique tastes of our beloved customers</p>
        </div>
        
        <div className="testimonials-images">
          <div className="testimonial-image">
            <img src="/images/bun.png" alt="Testimonial 1" />
          </div>
          <div className="testimonial-image">
            <img src="/images/brea.png" alt="Testimonial 2" />
          </div>
          <div className="testimonial-image">
            <img src="/images/burger.png" alt="Testimonial 3" />
          </div>
          <div className="testimonial-image">
            <img src="/images/falooda.png" alt="Testimonial 4" />
          </div>
          <div className="testimonial-image">
            <img src="/images/fires.png" alt="Testimonial 5" />
          </div>
          <div className="testimonial-image">
            <img src="/images/chicken.png" alt="Testimonial 6" />
          </div>
          <div className="testimonial-image">
            <img src="/images/rose.png" alt="Testimonial 7" />
          </div>
          <div className="testimonial-image">
            <img src="/images/coffee.png" alt="Testimonial 8" />
          </div>
          <div className="testimonial-image">
            <img src="/images/tandoori tea.png" alt="Testimonial 9" />
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
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className="testimonials-text">
          <h2>Our Locations</h2>
          <p>Here are the locations where our brand is successfully operating and serving millions of customers daily</p>
        </div>
        <Carousel />
      </section>

      {/* Section 6 - Franchise Contact Form */}
      <section
        className="App-section"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'black',
          padding: '50px 20px 150px',
          height: '100vh',
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
              <h2>We would love to hear from you !!</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
                <div className="input-row">
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit">Send</button>
              </form>
              <p>{status}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
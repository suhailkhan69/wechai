import React from "react";
import "./Contact.css";
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="hero-section-new">
        <img
          src="/images/contact.png"
          alt="Hero Background"
          className="hero-image"
        />
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h1>Get In Touch With Us</h1>
        <p>
          Drop us a text with the details provided below, and we'll get back to
          you as soon as possible.
        </p>

        {/* Contact Card */}
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

            {/* Contact Details */}
            <div className="contact-details">
              <h2>You can also reach out to us on these addresses</h2>
              <p>
                <strong>Address:</strong> 1st Floor, 36/37 Redhills High Road,
                Samdarriya Colony, Kolathur, Chennai-600099
              </p>
              <p>
                <strong>Email:</strong> gm@davnmel.com
              </p>
              <p>
                <strong>Phone:</strong> +91 95662 22275 / +91 72001 64964
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;

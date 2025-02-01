import React, { useState } from "react";
import "./Contact.css";
import Footer from "./Footer";

const Contact = () => {
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
      const response = await fetch(
        "https://wechai-backend-580szxc7j-suhails-projects-da69a869.vercel.app/send", // Updated to your Vercel backend URL
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "", email: "", contact: "", city: "", state: "", country: "", message: ""
        });
      } else {
        setStatus("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error); // Log the error for debugging
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="hero-section-new">
        <img src="/images/contact.png" alt="Hero Background" className="hero-image" />
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h1>Get In Touch With Us</h1>
        <p>Drop us a text with the details provided below, and we'll get back to you as soon as possible.</p>

        {/* Contact Card */}
        <div className="contact-container">
          <div className="contact-card">
            {/* Contact Form */}
            <div className="contact-form">
              <h2>We would love to hear from you !!</h2>
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleChange} required />
                <input type="text" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required />
                <div className="input-row">
                  <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
                  <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
                </div>
                <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required />
                <button type="submit">Send</button>
              </form>
              <p>{status}</p>
            </div>

            {/* Contact Details */}
            <div className="contact-details">
              <h2>You can also reach out to us on these addresses</h2>
              <p><strong>Address:</strong> 1st Floor, 36/37 Redhills High Road, Samdarriya Colony, Kolathur, Chennai-600099</p>
              <p><strong>Email:</strong> gm@davnmel.com</p>
              <p><strong>Numbers for South India:</strong> +91 95662 22275 / +91 72001 64964</p>
              <p><strong>Numbers for Rest of India:</strong> +91 98407 33822 / +91 87544 04544</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
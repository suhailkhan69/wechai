import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
 import AboutUs from './Aboutus';
  import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;

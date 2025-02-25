import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

const Carousel = () => {
  const images = [
    '/images/kerala.png',
    '/images/tamil.png',
    '/images/telangana.png',
    '/images/karnataka.png',
    '/images/srilanka.png',
    '/images/pondi.png',
    '/images/odisha.png',
    '/images/delhi.png',
  ];

  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop the slides
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto-scroll through images
    autoplaySpeed: 3000, // Auto-scroll speed in ms
    arrows: true, // Show next and previous arrows
  };

  return (
    
      
        <div className="carousel-container">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
              </div>
            ))}
          </Slider>
        </div>
      
   
  );
};

export default Carousel;

import React from 'react';
import './Hero.css';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
      <section className="hero">
          <div className="hero-content">
              <h1 className="hero-title">
                  <span className="highlight">Transform</span> your dreams into <span className="highlight">reality</span>
              </h1>
              <p className="hero-description">
                  Discover our unique collection of magical plush toys that brighten your days.
              </p>
              <button className="hero-button">Explore the Collection</button>
          </div>
          <div className="hero-image-container">
              <img 
                  src={hero_image} 
                  alt="Adorable plush toy" 
                  className="hero-image" 
              />
              <div className="speech-bubble">
                  <p>Hey there, adopt me!</p>
              </div>
          </div>
      </section>
  );
};

export default Hero;
import React from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className="exclusive-offer">
      <div className="offer-content">
        <h1 className="offer-title">Exclusive Offer</h1>
        <p className="offer-description">
          Don’t miss out on our special discounts! Get your hands on the cuddliest plush toys and make your day extra delightful. Limited time only!
        </p>
        <button className="offer-button">Grab Now</button>
      </div>
      <div className="offer-image-container">
        <img src={exclusive_image} alt="Exclusive Pikachu Offer" className="offer-image" />
      </div>
    </div>
  );
};

export default Offers;

import React, { useState } from 'react';
import PropTypes from 'prop-types';  // Import de PropTypes
import './ProductDisplay.css';

import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.image);

  return (
    <div className="product-display-container">
      <div className="product-display-left">
        <div className="product-main-image">
          <img
            src={selectedImage}
            alt="Main product"
            className="product-main-img"
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1 className="product-title">{product.name}</h1>

        <div className="rating">
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={index < 4 ? star_icon : star_dull_icon}
              alt="star"
              className="star-icon"
            />
          ))}
          <p className="rating-count">(122 reviews)</p>
        </div>

        <div className="product-price">
          <span className="old-price">${product.old_price}</span>
          <span className="new-price">${product.new_price}</span>
        </div>

        <p className="product-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</p>

        <button className="add-to-cart-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

// Validation des props avec PropTypes
ProductDisplay.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    old_price: PropTypes.number.isRequired,
    new_price: PropTypes.number.isRequired,
  }).isRequired
};

export default ProductDisplay;

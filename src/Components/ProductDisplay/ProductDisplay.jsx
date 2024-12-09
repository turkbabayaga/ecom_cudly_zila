import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    console.log(`Button clicked for product ID: ${product.id}, Name: ${product.name}`);
    addToCart(product.id);
    console.log(`addToCart function executed for product ID: ${product.id}`);
  };

  return (
    <div className="product-display-container">
      {/* Left Section - Main Image */}
      <div className="product-display-left">
        <div className="product-main-image">
          <img
            src={selectedImage}
            alt={product.name}
            className="product-main-img"
          />
        </div>
      </div>

      {/* Right Section - Product Details */}
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

        <p className="product-description">
          {product.description || "No description available for this product."}
        </p>

        <button
          className="add-to-cart-btn"
          onClick={handleAddToCart}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

ProductDisplay.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    old_price: PropTypes.number,
    new_price: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default ProductDisplay;

import React, { useState, useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Cudly Zilla Logo" />
        <p>Cudly Zilla</p>
      </div>
      <div className="nav-menu">
        <Link 
          to="/" 
          onClick={() => setMenu("shop")} 
          className={`nav-button ${menu === "shop" ? "active" : ""}`}
        >
          Shop
        </Link>
        <Link 
          to="/mens" 
          onClick={() => setMenu("mens")} 
          className={`nav-button ${menu === "mens" ? "active" : ""}`}
        >
          Wild Plush
        </Link>
        <Link 
          to="/women" 
          onClick={() => setMenu("womens")} 
          className={`nav-button ${menu === "womens" ? "active" : ""}`}
        >
          Collector
        </Link>
        <Link 
          to="/kid" 
          onClick={() => setMenu("kids")} 
          className={`nav-button ${menu === "kids" ? "active" : ""}`}
        >
          Fluffy Friends
        </Link>
      </div>
      <div className="nav-login-cart">
        <Link to="/login">
          <button className="nav-login-btn">Login</button>
        </Link>
        <Link to="/cart">
          <div className="cart-icon">
            <img src={cart_icon} alt="Cart" />
            <div className="nav-cart-count">{getTotalCartItems()}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

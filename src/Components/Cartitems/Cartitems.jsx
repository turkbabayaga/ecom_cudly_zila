import React, { useContext } from 'react';
import './Cartitems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const handleIncrement = (productId) => {
    console.log(`Incrementing quantity for product ID: ${productId}`);
    addToCart(productId);
  };

  const handleDecrement = (productId) => {
    console.log(`Decrementing quantity for product ID: ${productId}`);
    removeFromCart(productId);
  };

  const calculateSubtotal = () => {
    return all_product.reduce((total, product) => {
      return total + (cartItems[product.id] || 0) * product.new_price;
    }, 0).toFixed(2);
  };

  return (
    <div className='cartitems'>
      <h1>Your Cart</h1>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((product) => {
        if (cartItems[product.id] > 0) {
          console.log(`Displaying product in cart: ${product.name} with quantity ${cartItems[product.id]}`);
          return (
            <div key={product.id}>
              <div className="cartitems-format">
                <img src={product.image} alt={product.name} className="carticon-product-icon" />
                <p>{product.name}</p>
                <p>${product.new_price.toFixed(2)}</p>
                <div className="cartitems-quantity-controls">
                  <button onClick={() => handleDecrement(product.id)} className="cartitems-decrement">-</button>
                  <span className="cartitems-quantity">{cartItems[product.id]}</span>
                  <button onClick={() => handleIncrement(product.id)} className="cartitems-increment">+</button>
                </div>
                <p>${(product.new_price * cartItems[product.id]).toFixed(2)}</p>
                <button 
                  onClick={() => handleDecrement(product.id)} 
                  onKeyDown={(e) => { 
                    if (e.key === 'Enter' || e.key === ' ') handleDecrement(product.id); 
                  }} 
                  className="cart-remove-icon-button" 
                  aria-label="Remove item">
                  <img src={remove_icon} alt="Remove item" className="cart-remove-icon" />
                </button>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      {/* Cart Totals Section */}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${calculateSubtotal()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${calculateSubtotal()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        {/* Promo Code Section */}
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo Code" />
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

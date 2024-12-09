import React, { createContext, useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const defaultCart = all_product.reduce((acc, product) => {
    acc[product.id] = 0;
    return acc;
  }, {});

  const [cartItems, setCartItems] = useState(defaultCart);

  useEffect(() => {
    console.log('ShopContext initialized with defaultCart:', defaultCart);
  }, []);

  useEffect(() => {
    console.log('Current state of cartItems:', cartItems);
  }, [cartItems]);

  const addToCart = (itemId) => {
    console.log(`Adding product with ID: ${itemId} to the cart.`);
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      };
      console.log('Updated cartItems after addToCart:', updatedCart);
      return updatedCart;
    });
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        totalItems += cartItems[itemId];
      }
    }
    return totalItems;
  };

  const removeFromCart = (itemId) => {
    console.log(`Removing product with ID: ${itemId} from the cart.`);
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemId] > 1) {
        updatedCart[itemId] -= 1;
      } else {
        updatedCart[itemId] = 0;
      }
      console.log('Updated cartItems after removeFromCart:', updatedCart);
      return updatedCart;
    });
  };

  const contextValue = useMemo(() => {
    console.log('Context value memoized with all_product and cartItems.');
    return {
      all_product,
      cartItems,
      addToCart,
      removeFromCart,
      getTotalCartItems, // Expose getTotalCartItems in the context
    };
  }, [cartItems]);

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;

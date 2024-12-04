import React, { createContext, useState, useMemo } from "react";
import PropTypes from 'prop-types'; 
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
        }));
    };

    const contextValue = useMemo(() => ({
        all_product,
        cartItems,
        addToCart,
        removeFromCart
    }), [cartItems]);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired, 
};

export default ShopContextProvider;

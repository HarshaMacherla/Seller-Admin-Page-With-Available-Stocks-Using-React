import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartItemContext = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCartHandler = (product) => {
    setCartItems((prev) => [...prev, product]);
    localStorage.setItem(product.productID, JSON.stringify(product));
  };

  const removeFromCartHandler = (id) => {
    setCartItems((prev) => prev.filter((product) => product.productID !== id));
    localStorage.removeItem(id);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCartHandler,
        removeFromCartHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;

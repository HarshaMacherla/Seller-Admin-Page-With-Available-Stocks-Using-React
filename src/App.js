import React, { useEffect, useContext } from "react";
import ProductForm from "./components/ProductForm/ProductForm";
import Cart from "./components/Cart/Cart";
import CartContext from "./Store/cart-provider";

function App() {
  const { setCartItems } = useContext(CartContext);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const products = keys.map((key) => JSON.parse(localStorage.getItem(key)));
    setCartItems(() => [...products]);
  }, [setCartItems]);

  return (
    <>
      <ProductForm />
      <Cart />
    </>
  );
}

export default App;

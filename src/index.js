import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartItemContext } from "./Store/cart-provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartItemContext>
    <App />
  </CartItemContext>
);

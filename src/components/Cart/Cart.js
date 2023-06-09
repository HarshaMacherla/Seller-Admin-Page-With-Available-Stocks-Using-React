import React, { useContext } from "react";
import CartContext from "../../Store/cart-provider";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCxt = useContext(CartContext);

  let totalAmount = 0;

  const items = cartCxt.cartItems.map((item) => {
    totalAmount += parseInt(item.productPrice);
    return (
      <tr key={item.productID}>
        <td>{item.productID} </td>
        <td>{item.productName} </td>
        <td>{item.productPrice} </td>
        <td>
          <button onClick={() => cartCxt.removeFromCartHandler(item.productID)}>
            Delete Product
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className={styles.cart}>
      <div>
        <h1>Products</h1>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
      </div>
      <div>
        <h1>
          Total Value Worth Of Products:{" "}
          <span className={styles.total}>
            Rs. {totalAmount > 0 ? totalAmount : ""}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Cart;

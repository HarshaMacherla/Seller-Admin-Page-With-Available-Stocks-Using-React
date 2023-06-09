import React, { useContext, useRef } from "react";
import Input from "./Input";
import styles from "./ProductForm.module.css";
import CartContext from "../../Store/cart-provider";

const ProductForm = (props) => {
  const useCxt = useContext(CartContext);

  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const id = idRef.current.value;
    const name = nameRef.current.value;
    const price = parseInt(priceRef.current.value);

    useCxt.addToCartHandler({
      productID: id,
      productName: name,
      productPrice: price,
    });

    idRef.current.value = "";
    nameRef.current.value = "";
    priceRef.current.value = "";
  };
  return (
    <form onSubmit={submitHandler} className={styles["product-form"]}>
      <Input
        type="number"
        label="Product ID"
        id="productID"
        name="ProductID"
        ref={idRef}
      />
      <Input
        type="text"
        label="Product Name"
        id="productName"
        name="ProductName"
        ref={nameRef}
      />
      <Input
        type="number"
        label="Product Price"
        id="productPrice"
        name="ProductPrice"
        ref={priceRef}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;

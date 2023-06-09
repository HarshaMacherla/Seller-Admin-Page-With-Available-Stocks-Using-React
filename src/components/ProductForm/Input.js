import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.form}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} name={props.name} ref={ref} />
    </div>
  );
});

export default Input;

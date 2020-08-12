import React from "react";
import styles from "./Rafter.module.css";

const Rafter = ({ rafterPosition, length }) => {
  const position = {
    transform: `translate(${rafterPosition / 10}px, 0px)`,
  };
  return (
    <>
      <rect className={styles.rafter} height={length / 10} style={position} />
    </>
  );
};

export default Rafter;

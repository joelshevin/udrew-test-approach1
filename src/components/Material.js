import React from "react";
import styles from "./Material.module.css";

export const Material = ({ width, length }) => {
  return (
    <>
      <svg
        className={styles.img}
        x="0"
        y="0"
        height={length / 40}
        width={width / 20}
      >
        <image href="https://i.pinimg.com/600x315/54/40/99/544099fae290ce3e658a165d43151f9c.jpg" />
      </svg>
    </>
  );
};
export default Material;

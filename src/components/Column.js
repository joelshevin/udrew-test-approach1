import React from "react";
import styles from "./Column.module.css";

export const Column = ({ columnY, columnX }) => {
  const position = {
    transform: `translate(${columnX / 10}px, ${columnY / 10}px)`,
  };

  return (
    <>
      <rect className={styles.column} style={position} />
    </>
  );
};
export default Column;

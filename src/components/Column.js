import React from "react";
import styles from "./Column.module.css";

export const Column = ({ columnY, columnX }) => {
  return (
    <>
      <rect className={styles.column} x={columnX / 10} y={columnY / 10} />
    </>
  );
};
export default Column;

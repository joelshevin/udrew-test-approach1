import React from "react";
import styles from "./Purlin.module.css";

export const Purlin = ({ yPosition, width }) => {
  if (yPosition == 0) {
    return <></>;
  }
  return (
    <>
      <rect className={styles.purlin} y={yPosition / 10} width={width / 10} />
    </>
  );
};

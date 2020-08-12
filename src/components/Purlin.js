import React from "react";
import styles from "./Purlin.module.css";

export const Purlin = ({ yPosition, width }) => {
  if (yPosition === 0) {
    return <></>;
  }

  const position = {
    transform: `translate(0px, ${yPosition / 10}px)`,
  };

  return (
    <>
      <rect className={styles.purlin} style={position} width={width / 10} />
    </>
  );
};

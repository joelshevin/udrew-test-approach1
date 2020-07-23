import React, { useContext } from "react";
import styles from "./Rafter.module.css";
import { DimensionContext } from "../Carport";

const Rafter = (props) => {
  const dimensions = useContext(DimensionContext);
  const length = dimensions.length / 10;

  return (
    <>
      <rect
        className={styles.rafter}
        height={length}
        x={props.rafterPosition / 10}
      />
    </>
  );
};

export default Rafter;

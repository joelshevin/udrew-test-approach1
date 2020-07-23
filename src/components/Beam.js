import styles from "./Beam.module.css";

import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

const Beam = (props) => {
  const dimensions = useContext(DimensionContext);
  const width = dimensions.width / 10;

  return (
    <>
      <rect className={styles.beam} y={props.beamPosition / 10} width={width} />
    </>
  );
};

export default Beam;

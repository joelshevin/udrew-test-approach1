import styles from "./Beam.module.css";
import React from "react";

const Beam = ({ beamPosition, width }) => {
  const position = {
    transform: `translate(0px, ${beamPosition / 10}px)`,
  };

  return <rect className={styles.beam} width={width / 10} style={position} />;
};

export default Beam;

import styles from "./Beam.module.css";

import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

const BeamMeasurement = ({ measurement }) => {
  const dimensions = useContext(DimensionContext);
  const length = dimensions.length / 10;
  const width = dimensions.width / 10;

  return (
    <>
      <text x={width / 2 - 20} y={length + 40}>
        {measurement}
      </text>
    </>
  );
};

export default BeamMeasurement;

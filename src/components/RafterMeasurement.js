import styles from "./Beam.module.css";

import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

const RafterMeasurement = ({ measurement }) => {
  const dimensions = useContext(DimensionContext);
  const length = dimensions.length / 10;
  const width = dimensions.width / 10;

  return (
    <>
      <text x={width + 100} y={length / 2}>
        {measurement}
      </text>
    </>
  );
};

export default RafterMeasurement;

import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

const RafterMeasurement = ({ measurement }) => {
  const dimensions = useContext(DimensionContext);
  const length = dimensions.length / 10;
  const width = dimensions.width / 10;

  return (
    <>
      <text x={width + 120} y={length / 2}>
        {measurement}mm
      </text>
    </>
  );
};

export default RafterMeasurement;

import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

const PurlinMeasurement = ({ measurement, position }) => {
  const dimensions = useContext(DimensionContext);
  const length = dimensions.length / 10;
  const width = dimensions.width / 10;
  let measurementValue = parseInt(measurement);

  return (
    <>
      <text x={width + 40} y={position / 2}>
        {measurementValue}mm
      </text>
    </>
  );
};

export default PurlinMeasurement;

import React from "react";

const PurlinMeasurement = ({ measurement, position, width }) => {
  let measurementValue = parseInt(measurement);

  return (
    <>
      <text x={width / 10 + 30} y={position / 2}>
        {measurementValue * 10}mm
      </text>
    </>
  );
};

export default PurlinMeasurement;

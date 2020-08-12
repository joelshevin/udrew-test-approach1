import React from "react";
import PurlinMeasurement from "./PurlinMeasurement";

const PurlinScale = ({ position1, position2, width }) => {
  if (isNaN(position2)) {
    return <></>;
  }

  if (position2 - position1 <= 150) {
    return <></>;
  }

  return (
    <>
      <line
        x1={width / 10 + 20}
        y1={position1 / 10 + 15}
        x2={width / 10 + 20}
        y2={position2 / 10 - 5}
        stroke="#000"
        stroke-width="1"
        marker-end="url(#arrowEnd)"
        marker-start="url(#arrowStart)"
      ></line>
      <PurlinMeasurement
        measurement={position2 / 10 - position1 / 10}
        position={(position1 + position2) / 10}
        width={width}
      />
    </>
  );
};

export default PurlinScale;

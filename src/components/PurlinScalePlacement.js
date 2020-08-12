import PurlinScale from "./PurlinScale";
import React from "react";

const PurlinScalePlacement = ({
  noOfPurlins,
  initialLength,
  width,
  length,
}) => {
  let positions = [];
  let scaleCount = noOfPurlins + 1;
  positions[0] = 0;

  for (let i = 1; i <= scaleCount + 1; i++) {
    if (i === 1 && initialLength !== 0) {
      positions.push(initialLength);
    } else {
      if (i === scaleCount + 1) {
        positions.push(length);
      } else {
        positions.push(positions[i - 1] + 1200);
      }
    }
  }

  if (initialLength < 150) {
    positions[scaleCount] = positions[scaleCount] + initialLength * 2;
  }

  return (
    <>
      {positions.map((position, index) => (
        <>
          <PurlinScale
            key={index}
            position1={positions[index]}
            position2={positions[index + 1]}
            width={width}
          />
        </>
      ))}
    </>
  );
};

export default PurlinScalePlacement;

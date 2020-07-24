import styles from "./Beam.module.css";
import PurlinScale from "./PurlinScale";

import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

const PurlinScalePlacement = ({
  noOfPurlins,
  initialLength,
  width,
  length,
}) => {
  const dimensions = useContext(DimensionContext);
  //const width = dimensions.width;
  //const yPosition = dimensions.length;
  //const xPosition = dimensions.width;
  let positions = [];
  let scaleCount = noOfPurlins + 1;
  positions[0] = 0;
  console.log(scaleCount);
  console.log(positions[0] / 10);

  for (let i = 1; i <= scaleCount + 1; i++) {
    if (i == 1 && initialLength != 0) {
      positions.push(initialLength);
      console.log(positions[i] / 10);
    } else {
      if (i == scaleCount + 1) {
        positions.push(length);
        console.log(positions[i] / 10);
      } else {
        positions.push(positions[i - 1] + 1200);
        console.log(positions[i] / 10);
      }
    }
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

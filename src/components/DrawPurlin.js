import React from "react";
import PurlinCallout from "./PurlinCallout";
import { Purlin } from "./Purlin";

export const DrawPurlin = ({ noOfPurlins, initialLength, width }) => {
  let lengths = [];

  for (let i = 0; i <= noOfPurlins; i++) {
    if (i === 0) {
      if (initialLength !== 0 && initialLength > 150) {
        lengths.push(initialLength);
      } else {
        lengths.push(0);
      }
    } else {
      lengths.push(lengths[i - 1] + 1200);
    }
  }

  if (initialLength <= 150) {
    lengths[noOfPurlins] = lengths[noOfPurlins] + initialLength * 2;
    console.log(lengths[noOfPurlins]);
  }

  return (
    <>
      {lengths.map((length, index) => (
        <>
          <Purlin key={index} yPosition={length} width={width} />
        </>
      ))}
      <PurlinCallout yPosition={lengths[noOfPurlins - 1]} />
    </>
  );
};

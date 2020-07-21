import React, { useContext } from "react";
import { Purlin } from "../components/Purlin";

export const DrawPurlin = ({ noOfPurlins, initialLength, width }) => {
  let lengths = [];

  for (let i = 0; i <= noOfPurlins; i++) {
    if (i == 0) {
      lengths.push(initialLength);
    } else {
      lengths.push(lengths[i - 1] + 1200);
    }
  }
  return (
    <>
      {lengths.map((length, index) => (
        <Purlin key={index} yPosition={length} width={width} />
      ))}
    </>
  );
};

import React, { useContext } from "react";
import { Purlin } from "../components/Purlin";

export const DrawPurlin = ({ noOfPurlins, initialLength, width }) => {
  let lengthArray = [];

  for (let i = 0; i <= noOfPurlins; i++) {
    if (i == 0) {
      lengthArray.push(initialLength);
    } else {
      lengthArray.push(lengthArray[i - 1] + 1200);
    }
  }
  return (
    <>
      {lengthArray.map((length, index) => (
        <Purlin key={index} yPosition={length} width={width} />
      ))}
    </>
  );
};

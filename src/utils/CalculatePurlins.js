import React, { useContext } from "react";

export const CalculatePurlins = (length) => {
  let numberOfx2Purlins = length / 1200;
  let lengthOfx1Purlin = (length % 1200) / 2;
  let x2PurlinsToDraw = numberOfx2Purlins;

  if (lengthOfx1Purlin == 0) {
    lengthOfx1Purlin = 0;
    x2PurlinsToDraw = x2PurlinsToDraw - 1;
  }

  return {
    initialLength: lengthOfx1Purlin,
    noOfPurlins: parseInt(x2PurlinsToDraw),
  };
};

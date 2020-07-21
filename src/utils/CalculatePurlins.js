import React, { useContext } from "react";

export const CalculatePurlins = (length) => {
  let numberOfx2Purlins = length / 1200;
  let totalLengthOfx2Purlins = numberOfx2Purlins * 1200;
  let lengthOfx1Purlin = (length % 1200) / 2;
  let x2PurlinsToDraw = numberOfx2Purlins;

  //console.log(lengthOfx1Purlin);
  //console.log(parseInt(x2PurlinsToDraw));

  return {
    initialLength: lengthOfx1Purlin,
    noOfPurlins: parseInt(x2PurlinsToDraw),
  };
};

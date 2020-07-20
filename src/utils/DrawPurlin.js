import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

export const DrawPurlin = (length) => {
  let numberOfx2Purlins = length / 1200;
  let totalLengthOfx2Purlins = numberOfx2Purlins * 1200;
  let lengthOfx1Purlin = (length - totalLengthOfx2Purlins) / 2;
  let x2PurlinsToDraw = numberOfx2Purlins + 1;

  //create an an array with elements equal to x2Purlins to draw and then start drawing one by one adding 1200
};

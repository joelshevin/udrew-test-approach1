import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

export const Draw = (length, width) => {
  let numberOfx2Purlins = length / 1200;
  let totalLengthOfx2Purlins = numberOfx2Purlins * 1200;
  let lengthOfx1Purlin = (length - totalLengthOfx2Purlins) / 2;
  let newRafterLocation1 = width / 2;

  return {
    length: length,
    width: width,
    newRafterLocation1: newRafterLocation1,
  };
};

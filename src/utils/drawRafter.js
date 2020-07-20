import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

export const DrawRafter = (width) => {
  let newRafterLocation1 = width / 2;

  if (width > 3500) {
    return {
      newRafterLocation1: newRafterLocation1,
    };
  }
  return { newRafterLocation1: 0 };
};

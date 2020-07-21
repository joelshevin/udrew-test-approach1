import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

export const Draw = (length, width) => {
  return {
    length: length,
    width: width,
  };
};

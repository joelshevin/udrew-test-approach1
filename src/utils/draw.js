import React, { useContext } from "react";
import { DimensionContext } from "../Carport";
import { DrawRafter } from "./DrawRafter";

export const Draw = (length, width) => {
  const rafters = 2;

  if (width > 3500) {
    rafters = 3;
  }
  return {
    length: length,
    width: width,
    rafters: rafters,
  };
};

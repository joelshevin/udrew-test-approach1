import React, { useContext } from "react";

export const ColumnPlacement = (length, width) => {
  let column1Y = 0;
  let column1X = 0;

  let column2Y = 0;
  let column2X = width;

  let column3Y = length;
  let column3X = 0;

  let column4Y = length;
  let column4X = width;

  return {
    column1Y: column1Y,
    column1X: column1X,
    column2Y: column2Y,
    column2X: column2X,
    column3Y: column3Y,
    column3X: column3X,
    column4Y: column4Y,
    column4X: column4X,
  };
};

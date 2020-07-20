import React, { useContext } from "react";
import { DimensionContext } from "../Carport";

export const Ex = () => {
  const params = useContext(DimensionContext);
  console.log(params);
  return <p>Example</p>;
};

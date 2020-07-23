import Rafter from "./Rafter";
import Beam from "./Beam";
import Column from "./Column";

import React, { useContext } from "react";
import { DimensionContext } from "../Carport";
import { DrawPurlin } from "./DrawPurlin";
import { CalculatePurlins } from "../utils/CalculatePurlins";
import { ColumnPlacement } from "../utils/ColumnPlacement";
import Material from "./Material";

const Canvas = () => {
  const dimensions = useContext(DimensionContext);
  const { initialLength, noOfPurlins } = CalculatePurlins(dimensions.length);
  const {
    column1Y,
    column1X,
    column2Y,
    column2X,
    column3Y,
    column3X,
    column4Y,
    column4X,
  } = ColumnPlacement(dimensions.length, dimensions.width);

  console.log(column1Y);
  console.log(column1X);
  console.log(column2Y);
  console.log(column2X);
  console.log(column3Y);
  console.log(column3X);
  console.log(column4Y);
  console.log(column4X);

  return (
    <div class="container" id="svgcontainter">
      <svg width="650" height="810">
        <Beam beamPosition={0} />
        <Beam beamPosition={dimensions.length} />
        <Rafter rafterPosition={0} />
        {dimensions.width > 3500 && (
          <Rafter rafterPosition={dimensions.width / 2 - 50} />
        )}
        <Rafter rafterPosition={dimensions.width - 100} />
        <DrawPurlin
          noOfPurlins={noOfPurlins}
          initialLength={initialLength}
          width={dimensions.width}
        />
        <Column columnY={column1Y} columnX={column1X} />
        <Column columnY={column2Y} columnX={column2X - 100} />
        <Column columnY={column3Y} columnX={column3X} />
        <Column columnY={column4Y} columnX={column4X - 100} />
        <Material width={dimensions.width} length={dimensions.length} />
      </svg>
    </div>
  );
};

export default Canvas;

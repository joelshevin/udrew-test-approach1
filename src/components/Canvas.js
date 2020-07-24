import Rafter from "./Rafter";
import Beam from "./Beam";
import Column from "./Column";
import styles from "./Canvas.module.css";
import Material from "./Material";
import BeamScale from "./BeamScale";

import React, { useContext } from "react";
import { DimensionContext } from "../Carport";
import { DrawPurlin } from "./DrawPurlin";
import { CalculatePurlins } from "../utils/CalculatePurlins";
import { ColumnPlacement } from "../utils/ColumnPlacement";
import BeamMeasurement from "./BeamMeasurement";
import PurlinScalePlacement from "./PurlinScalePlacement";

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

  return (
    <div class="container" id="svgcontainter" className={styles.canvas}>
      <svg width="690" height="840">
        <BeamScale
          arrowWidth={dimensions.width}
          arrowY={dimensions.length}
        ></BeamScale>
        <BeamMeasurement measurement={dimensions.width} />
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
        <PurlinScalePlacement
          noOfPurlins={noOfPurlins}
          initialLength={initialLength}
          width={dimensions.width}
          length={dimensions.length}
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

import React, { useContext } from "react";
import "@rmwc/slider/styles";
import BeamGroup from "./BeamGroup";
import ColumnGroup from "./ColumnGroup";
import styles from "./Carport.module.css";
import RafterGroup from "./RafterGroup";
import PurlinGroup from "./PurlinGroup";
import MaterialGroup from "./MaterialGroup";
import CalloutGroup from "./CalloutGroup";
import MeasurementGroup from "./MeasurementGroup";
import ScalesGroup from "./ScalesGroup";
import { DimensionContext } from "./Slider";

import { CalculatePurlins } from "../utils/CalculatePurlins";
import { ColumnPlacement } from "../utils/ColumnPlacement";

export const Carport = () => {
  const dimensions = useContext(DimensionContext);
  const width = dimensions.carportWidth;
  const length = dimensions.carportLength;

  const { initialLength, noOfPurlins } = CalculatePurlins(length);

  const {
    column1Y,
    column1X,
    column2Y,
    column2X,
    column3Y,
    column3X,
    column4Y,
    column4X,
  } = ColumnPlacement(length, width);

  const columnPositions = [
    { columnY: column1Y, columnX: column1X },
    { columnY: column2Y, columnX: column2X - 100 },
    { columnY: column3Y, columnX: column3X },
    { columnY: column4Y, columnX: column4X - 100 },
  ];

  const beamPositions = [0, length];

  const rafterPositions = [0, width - 100];

  const sizes = [{ width, length }];

  return (
    <g id="carport" class="container" className={styles.canvasSvg}>
      <BeamGroup beamPositions={beamPositions} width={width} />
      <RafterGroup
        rafterPositions={rafterPositions}
        length={length}
        width={width}
      />
      <PurlinGroup
        noOfPurlins={noOfPurlins}
        initialLength={initialLength}
        width={width}
      />
      <ColumnGroup columnPositions={columnPositions} />
      <MaterialGroup sizes={sizes} />
      <CalloutGroup length={length} width={width} />
      <MeasurementGroup length={length} width={width} />
      <ScalesGroup
        noOfPurlins={noOfPurlins}
        initialLength={initialLength}
        length={length}
        width={width}
      />
    </g>
  );
};
export default Carport;

import React, { useState, useMemo } from "react";
import { Slider } from "@rmwc/slider";
import "@rmwc/slider/styles";
import styles from "./Carport.module.css";
import { Measurements } from "../utils/Measurements";

export const DimensionContext = React.createContext({
  carportWidth: 0,
  carportLength: 0,
});

const Sliders = ({ children }) => {
  /*const [length, setLength] = useState(5850);

  const [width, setWidth] = useState(3500);

  const lengthInput = (event) => {
    setLength(event.detail.value);
  };

  const widthInput = (event) => {
    setWidth(event.detail.value);
  };*/

  const [carportWidth, setCarportWidth] = useState(3500);
  const [carportLength, setCarportLength] = useState(5850);
  const [patioWidth, setPatioWidth] = useState(0);
  const [patioLength, setPatioLength] = useState(0);

  /*const changeWidth = (structure) => (event) => {
    if (structure === "Carport") {
      setCarportWidth(event.detail.value);
    }
  };

  const changeLength = (structure) => (event) => {
    if (structure === "Carport") {
      setCarportLength(event.detail.value);
    }
  };*/

  const changeWidth = (event) => {
    setCarportWidth(event.detail.value);
  };

  const changeLength = (event) => {
    setCarportLength(event.detail.value);
  };

  const memoizedParams = useMemo(
    () => Measurements(carportLength, carportWidth),
    [carportLength, carportWidth]
  );

  return (
    <DimensionContext.Provider value={memoizedParams}>
      <div id="slider">
        {children}
        <div class="row">
          <div class="column">
            <p className={styles.title1}>Length</p>
          </div>
          <div class="column" className={styles.sliders}>
            <Slider
              discrete="true"
              min={5850}
              max={8000}
              onInput={changeLength}
            />
            {carportLength}mm
          </div>
        </div>
        <div class="row">
          <div class="column">
            <p className={styles.title1}>Width</p>
          </div>
          <div class="column" className={styles.sliders}>
            <Slider
              discrete="true"
              min={3500}
              max={6500}
              onInput={changeWidth}
            />
            {carportWidth}mm
          </div>
          <div class="column" className={styles.sliders}></div>
        </div>
      </div>
    </DimensionContext.Provider>
  );
};

export default Sliders;

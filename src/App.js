import React from "react";
import "./App.css";
import Carport from "./components/Carport";
import Canvas from "./components/Canvas";
import Sliders from "./components/Slider";

const App = () => {
  return (
    <div id="App">
      <Sliders>
        <Canvas>
          <Carport />
        </Canvas>
      </Sliders>
      <Sliders>
        <Canvas>
          <Carport />
        </Canvas>
      </Sliders>
      <Sliders>
        <Canvas>
          <Carport />
        </Canvas>
      </Sliders>
    </div>
  );
};

export default App;

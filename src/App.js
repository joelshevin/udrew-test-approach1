import React from "react";
import "./App.css";
import Carport from "./components/Carport";

import Canvas from "./components/Canvas";
import Sliders from "./components/Slider";
import Markers from "./components/Markers";
import Definitions from "./components/Definitions";

/* import Canvas from "./components/Canvas";

 function App() {
   return <><Canvas>
     <Carpot />
   </Canvas>
     <Slider />
     <>
 }

const Slider = ({ children }) => {
return <div id="Slider">{children}</div>;
};
 this is less preffered
 const Carport = ({ children }) => {
   return <g id="Carport">{children}</g>;
 };

 nthis is preffered
const Carport = ({ children }) => {
return (
<g id="Carport">
<text x="10" y="20">
Hey I am Carport
</text>
</g>
);
};
 const Patio = ({ children }) => {
   return (
     <g id="Patio">
       <text x="10" y="20">
         Hey I am Patio
       </text>
     </g>
   );
 };
 const Canvas = ({ children }) => {
   return (
     <svg id="Canvas2">
       <g id="test"></g>
       {/* {children} 
     </svg>
   );
 };

</Slider>
      <Slider>
        <Canvas>
          <Patio width={} length={} />
        </Canvas>
  </Slider>
  <Definistions>
            <MarkerStart />
            <MarkerEnd />
          </Definistions>*/

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

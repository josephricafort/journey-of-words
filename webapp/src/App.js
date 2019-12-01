import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Map } from "react-leaflet";

function App() {
  return (
    <div className="App">
      <Map
        style={{ height: "480px", width: "100%" }}
        zoom={1}
        center={[-0.09, 51.505]}
      ></Map>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Map from "./container/Map/Map";
import dataWords from "./data/output_json/language_words_api_clean.json";
import dataLanguage from "./data/output_json/language_info_api_clean.json";

function App() {
  return (
    <div className="App">
      <Map data={dataLanguage}></Map>
    </div>
  );
}

export default App;

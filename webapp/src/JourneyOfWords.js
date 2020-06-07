import React from "react";
import logo from "./logo.svg";
import "./JourneyOfWords.scss";

import MapContainer from "./container/MapContainer/MapContainer";
import dataWords from "./data/output_json/language_words_api_clean.json";
import dataLanguage from "./data/output_json/language_info_api_clean.json";

const JourneyOfWords = () => {
  return (
    <div className="App">
      <MapContainer></MapContainer>
    </div>
  );
};

export default JourneyOfWords;

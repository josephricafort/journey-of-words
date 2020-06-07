import React from "react";
import logo from "./logo.svg";
import "./JourneyOfWords.scss";

import MapContainer from "./container/MapContainer/MapContainer";
import MenuContainer from "./container/MenuContainer/MenuContainer";
import wordsInfo from "./data/output_json/words_info.json";

const JourneyOfWords = () => {
  return (
    <div className="journey-of-words">
      <MapContainer></MapContainer>
      <MenuContainer></MenuContainer>
    </div>
  );
};

export default JourneyOfWords;

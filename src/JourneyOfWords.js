import React, { useEffect, useState, useRef } from "react";

import logo from "./logo.svg";
import "./JourneyOfWords.scss";

import MapContainer from "./container/MapContainer/MapContainer";

const JourneyOfWords = () => {
  return (
    <div className="journey-of-words">
      <MapContainer></MapContainer>
    </div>
  );
};

export default JourneyOfWords;

import React, { useState } from "react";

import LayerGroupCollision from "../LayerGroupCollision/LayerGroupCollision";
import { CircleMarker, Tooltip, Marker } from "react-leaflet";
import * as d3 from "d3";

import styles from "./MarkersLayer.module.scss";

const MarkersLayer = ({ data }) => {
  const [langTooltipVisibility, setLangTooltipVisibility] = useState(false);
  const cognacyColors = ["#66bb6a", "#ffa726", "#e91e63"];

  const cognacyLevel = (cognacy) => {
    if (cognacy) {
      const cognacyArr = data.map((word) => word.cognacy1);
      const maxCognacy = d3.max(cognacyArr);
      const minCognacy = d3.min(cognacyArr);
      const midCognacy = (maxCognacy + minCognacy) / 2;
      const colorScale = d3
        .scaleLinear()
        .domain([minCognacy, midCognacy, maxCognacy])
        .range(cognacyColors);

      return colorScale(cognacy);
    } else {
      return "rgba(0, 0, 0, 0)";
    }
  };

  const showLangTooltip = () => {
    setLangTooltipVisibility(true);
  };

  const hideLangTooltip = () => {
    setLangTooltipVisibility(false);
  };

  return [
    <LayerGroupCollision>
      {data.map((word) => [
        <Marker
          position={[word.latitude, word.longitude]}
          key={`langName_${word.language_id}`}
        >
          <Tooltip
            className={styles["tooltip-language"]}
            direction="top"
            permanent={langTooltipVisibility}
            opacity={1}
          >
            <h3>{word.language}</h3>
          </Tooltip>
        </Marker>,
        <CircleMarker
          center={[word.latitude, word.longitude]}
          radius={15}
          key={`word_${word.language_id}`}
          opacity={0}
          fillColor={cognacyLevel(word.cognacy1)}
          fillOpacity={0.8}
          onmouseover={() => showLangTooltip()}
          onmouseout={() => hideLangTooltip()}
        >
          {word.word ? (
            <Tooltip
              className={styles["tooltip"]}
              permanent={true}
              direction="top"
              opacity={0.75}
            >
              {word.word}
              {console.log(word.word)}
            </Tooltip>
          ) : null}
        </CircleMarker>,
      ])}
    </LayerGroupCollision>,
  ];
};

export default MarkersLayer;

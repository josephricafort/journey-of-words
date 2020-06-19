import React from "react";

import * as d3 from "d3";
import D3SvgOverlay from "../D3SvgOverlay/D3SvgOverlay";
import "./CognacyCircles.module.scss";

const CognacyCircles = ({ wordTranslationsData }) => {
  const cognacyColors = ["#66bb6a", "#ffa726", "#e91e63"];

  const cognacyLevel = (cognacy) => {
    if (cognacy) {
      const cognacyArr = wordTranslationsData.map((word) => word.cognacy1);
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

  function drawCallback(selection, projection, data) {
    const svg = selection.selectAll("circle");
    const latLngToLayer = (coords) => projection.latLngToLayerPoint(coords);

    svg
      .data(data)
      .join("circle")
      .attr("cx", (d) => latLngToLayer([d.latitude, d.longitude]).x)
      .attr("cy", (d) => latLngToLayer([d.latitude, d.longitude]).y)
      .attr("r", (d) => 2 / projection.scale)
      .attr("fill", (d) => cognacyLevel(d.cognacy1))
      .attr("opacity", 0.8);
  }

  return (
    <D3SvgOverlay
      data={wordTranslationsData}
      drawCallback={drawCallback}
    ></D3SvgOverlay>
  );
};

export default CognacyCircles;

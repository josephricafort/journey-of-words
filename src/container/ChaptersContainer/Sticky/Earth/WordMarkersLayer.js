import React, { useContext, useRef } from "react";
import styled, { ThemeContext } from "styled-components";
import * as d3 from "d3";

import D3SvgOverlay from "../../../../utils/D3SvgOverlay/D3SvgOverlay";
import { occlusion } from "../../../../utils/utils";

const WordMarkersLayer = ({ data }) => {
  const theme = useContext(ThemeContext);

  function drawCallback(selection, projection, data) {
    const longMeridian = (long) => (long > 0 ? long : parseFloat(long) + 360);
    const latLngToLayer = (lat, long) => {
      const coords = [parseFloat(lat), longMeridian(long)];
      return projection.latLngToLayerPoint(coords);
    };

    // For occlusion
    const svgText = selection.attr("class", "svg-word-markers-layer");

    svgText
      .selectAll("text")
      .data(data)
      .join("text")
      .text((d) => d.wordAn)
      .attr("class", "text-marker")
      .attr("id", (d, i) => `text-marker-${i}`)
      .attr("font-size", 12 / projection.scale + "px")
      .attr("font-family", theme.cursive)
      .attr("x", (d) => d.lat && d.long && latLngToLayer(d.lat, d.long).x)
      .attr("y", (d) => d.lat && d.long && latLngToLayer(d.lat, d.long).y)
      .attr("transform", `translate(0 -5)`)
      .attr("text-anchor", "end")
      .style("pointer-events", "all");

    svgText.node();

    occlusion(svgText);
    svgText.selectAll(".occluded").attr("opacity", 0);
  }

  return (
    <>
      <D3SvgOverlay data={data} drawCallback={drawCallback}></D3SvgOverlay>
    </>
  );
};

export default WordMarkersLayer;

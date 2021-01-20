import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import D3SvgOverlay from "../../../../utils/D3SvgOverlay/D3SvgOverlay";
import { occlusion } from "../../../../utils/utils";

const WordMarkersLayer = ({ data }) => {
  const theme = useContext(ThemeContext);

  function drawCallback(selection, projection, data) {
    const svg = selection;
    const longMeridian = (long) => (long > 0 ? long : parseFloat(long) + 360);
    const latLngToLayer = (lat, long) => {
      const coords = [parseFloat(lat), longMeridian(long)];
      return projection.latLngToLayerPoint(coords);
    };

    svg
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
      .attr("text-anchor", "end");

    svg.node();

    occlusion(svg);
    svg.selectAll(".occluded").attr("opacity", 0);
  }

  return (
    <D3SvgOverlay
      className="word-markers-layer"
      data={data}
      drawCallback={drawCallback}
    ></D3SvgOverlay>
  );
};

export default WordMarkersLayer;

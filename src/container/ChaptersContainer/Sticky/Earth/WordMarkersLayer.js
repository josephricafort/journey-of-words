import React from "react";
import D3SvgOverlay from "../../../../utils/D3SvgOverlay/D3SvgOverlay";

import { occlusion } from "../../../../utils/utils";

const WordMarkersLayer = ({ data }) => {
  function drawCallback(selection, projection, data) {
    const svg = selection;
    const latLngToLayer = (coords) => projection.latLngToLayerPoint(coords);
    const long360tweak = (long) => (long < 0 ? long + 360 : long);

    svg
      .selectAll("text")
      .data(data)
      .join("text")
      .text((d) => d.wordAn)
      .attr("font-size", 14 / projection.scale + "px")
      .attr(
        "x",
        (d) =>
          d.lat &&
          d.long &&
          latLngToLayer([d.lat, d.long < 0 ? d.long + 360 : d.long]).x
      )
      .attr(
        "y",
        (d) =>
          d.lat &&
          d.long &&
          latLngToLayer([d.lat, d.long < 0 ? d.long + 360 : d.long]).y
      )
      .attr("transform", `translate(0 -5)`)
      .attr("text-anchor", "end");

    svg.node();

    occlusion(svg);
    svg.selectAll(".occluded").attr("opacity", 0.05);
  }

  return (
    <D3SvgOverlay
      className="markers-layer"
      data={data}
      drawCallback={drawCallback}
    ></D3SvgOverlay>
  );
};

export default WordMarkersLayer;

import React from "react";
import D3SvgOverlay from "../../../../utils/D3SvgOverlay/D3SvgOverlay";

import { occlusion } from "../../../../utils/utils";

const IconsMarkersLayer = ({ data }) => {
  function drawCallback(selection, projection, data) {
    const svg = selection;
    const latLngToLayer = (coords) => projection.latLngToLayerPoint(coords);
    const longMeridian = (long) => (long > 0 ? long : parseFloat(long) + 360);

    svg
      .selectAll("text")
      .data(data)
      .join("text")
      .text((d) => d.wordAn)
      .attr("font-size", 14 / projection.scale + "px")
      .attr(
        "x",
        (d) => d.lat && d.long && latLngToLayer([d.lat, longMeridian(d.long)]).x
      )
      .attr(
        "y",
        (d) => d.lat && d.long && latLngToLayer([d.lat, longMeridian(d.long)]).y
      )
      .attr("transform", `translate(0 -5)`)
      .attr("text-anchor", "end");

    svg.node();

    occlusion(svg);
    svg.selectAll(".occluded").attr("opacity", 0);
  }

  return (
    <D3SvgOverlay
      className="markers-layer"
      data={data}
      drawCallback={drawCallback}
    ></D3SvgOverlay>
  );
};

export default IconsMarkersLayer;

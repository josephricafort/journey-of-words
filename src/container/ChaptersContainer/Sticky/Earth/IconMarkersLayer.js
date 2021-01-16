import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import D3SvgOverlay from "../../../../utils/D3SvgOverlay/D3SvgOverlay";
import { occlusion } from "../../../../utils/utils";

const IconMarkersLayer = ({ data }) => {
  const theme = useContext(ThemeContext);

  function switchValueFill(val) {
    switch (val) {
      case "?":
        return theme.fill0;
      case "0":
        return theme.fill0;
      case "1":
        return theme.fill1;
      case "2":
        return theme.fill2;
      case "3":
        return theme.fill3;
      case "4":
        return theme.fill4;
      case "5":
        return theme.fill5;
      default:
        return theme.fill0;
    }
  }

  function drawCallback(selection, projection, data) {
    const svg = selection;
    const longMeridian = (long) => (long > 0 ? long : parseFloat(long) + 360);
    const latLngToLayer = (lat, long) => {
      const coords = [parseFloat(lat), longMeridian(long)];
      return projection.latLngToLayerPoint(coords);
    };

    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      // .text((d) => d.culture)
      .attr("font-size", 10 / projection.scale + "px")
      .attr("cx", (d) => d.lat && d.long && latLngToLayer(d.lat, d.long).x)
      .attr("cy", (d) => d.lat && d.long && latLngToLayer(d.lat, d.long).y)
      .attr("r", 2)
      .attr("fill", (d) => theme.fill4);

    svg.node();

    occlusion(svg);
    svg.selectAll(".occluded").attr("opacity", 0);
  }

  return (
    <D3SvgOverlay
      className="icon-markers-layer"
      data={data[0]}
      drawCallback={drawCallback}
    ></D3SvgOverlay>
  );
};

export default IconMarkersLayer;

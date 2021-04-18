import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import * as d3 from "d3";

import D3SvgOverlay from "../../../../utils/D3SvgOverlay/D3SvgOverlay";
import { occlusion } from "../../../../utils/utils";
import colorScaleSel from "../../../sharedComponents/colorScaleSel";

const IconMarkersLayer = ({ data }) => {
  const theme = useContext(ThemeContext);
  const colorFillSet = {
    fill0: theme.fill0,
    fill1: theme.fill1,
    fill2: theme.fill2,
    fill3: theme.fill3,
    fill4: theme.fill4,
  };

  function drawCallback(selection, projection, data) {
    const svg = selection.attr("class", "icon-markers-layer");
    const longMeridian = (long) => (long > 0 ? long : parseFloat(long) + 360);
    const latLngToLayer = (lat, long) => {
      const coords = [parseFloat(lat), longMeridian(long)];
      return projection.latLngToLayerPoint(coords);
    };
    const valueLength = [...new Set(data.flat().map((d) => d.value))].length;

    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("class", "icon-marker")
      .attr("id", (d, i) => `icon-marker-${i}`)
      .attr("font-size", 10 / projection.scale + "px")
      .attr("cx", (d) => d.lat && d.long && latLngToLayer(d.lat, d.long).x)
      .attr("cy", (d) => d.lat && d.long && latLngToLayer(d.lat, d.long).y)
      .attr("r", 3)
      .attr("fill", (d) => colorScaleSel(valueLength, colorFillSet)[d.value])
      .style("opacity", 1)
      .style("pointer-events", "none");

    svg.node();

    occlusion(svg);
    svg.selectAll(".occluded").attr("opacity", 0);
  }

  return (
    <D3SvgOverlay data={data.flat()} drawCallback={drawCallback}></D3SvgOverlay>
  );
};

export default IconMarkersLayer;

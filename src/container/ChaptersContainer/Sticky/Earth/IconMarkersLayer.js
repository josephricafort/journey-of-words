import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import * as d3 from "d3";

import D3SvgOverlay from "../../../../utils/D3SvgOverlay/D3SvgOverlay";
import { occlusion } from "../../../../utils/utils";

const IconMarkersLayer = ({ data }) => {
  const theme = useContext(ThemeContext);

  function colorScaleSel(sel) {
    switch (sel) {
      case 2:
        return {
          "?": theme.fill0,
          0: theme.fill4,
        };
      case 3:
        return {
          "?": theme.fill0,
          0: theme.fill2,
          1: theme.fill4,
        };
      case 4:
        return {
          "?": theme.fill0,
          0: theme.fill1,
          1: theme.fill3,
          2: theme.fill4,
        };
      case 5:
        return {
          "?": theme.fill0,
          0: theme.fill1,
          1: theme.fill3,
          2: theme.fill4,
          3: theme.fill3,
        };
      case 6:
        return {
          "?": theme.fill0,
          0: theme.fill0,
          1: theme.fill1,
          2: theme.fill2,
          3: theme.fill3,
          4: theme.fill4,
        };
      case 7:
        return {
          "?": theme.fill0,
          0: theme.fill0,
          1: theme.fill0,
          2: theme.fill1,
          3: theme.fill2,
          4: theme.fill3,
          5: theme.fill4,
        };
      default:
        break;
    }
  }

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
      .attr("r", (d) => 3)
      .attr("fill", (d) => colorScaleSel(valueLength)[d.value])
      .style("opacity", 0.5)
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

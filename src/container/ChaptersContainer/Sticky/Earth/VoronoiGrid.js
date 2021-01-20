import React, { useContext } from "react";
import * as d3 from "d3";
import { Delaunay } from "d3-delaunay";
import styled, { ThemeContext } from "styled-components";

import D3SvgOverlay from "../../../../utils/D3SvgOverlay/D3SvgOverlay";

const VoronoiGrid = ({
  data,
  earthWrapDims,
  currentHovered,
  setCurrentHovered,
}) => {
  const { width, height } = earthWrapDims;
  const theme = useContext(ThemeContext);

  function drawCallback(selection, projection, data) {
    const svg = selection.attr("class", "voronoi-grid");
    const dataFlat = data.flat();

    const longMeridian = (long) => (long > 0 ? long : parseFloat(long) + 360);
    const latLngToLayer = (lat, long) => {
      const coords = [parseFloat(lat), longMeridian(long)];
      return projection.latLngToLayerPoint(coords);
    };

    const dataCultures = dataFlat.map((c) => ({
      ...c,
      x: c.lat && c.long && latLngToLayer(c.lat, c.long).x,
      y: c.lat && c.long && latLngToLayer(c.lat, c.long).y,
    }));
    const voronoi = Delaunay.from(
      dataCultures,
      (d) => d.x,
      (d) => d.y
    ).voronoi([-width / 2, -height / 2, width, height]);

    // Div for the tooltip
    const div = d3
      .select("div.leaflet-pane.leaflet-overlay-pane")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute");

    // Voronoi clipping paths
    svg
      .append("defs")
      .selectAll(".clip")
      .data(dataCultures.map((d, i) => voronoi.renderCell(i)))
      .join("clipPath")
      .attr("class", "clip")
      .attr("id", (d, i) => "clip-" + i)
      .append("path")
      .attr("d", (d) => d)
      .attr("class", "clip-path-voronoi")
      .style("opacity", 0.5)
      .style("stroke", (d) => theme.black)
      .style("stroke-width", 1);

    // Circle catchers
    svg
      .selectAll("circle")
      .data(dataCultures)
      .join("circle")
      .attr("class", (d) => `circle-hover`)
      .attr("id", (d, i) => `circle-hover-${i}`)
      .attr("clip-path", (d, i) => `url(#clip-${i})`)
      .style("clip-path", (d, i) => `url(#clip-${i})`) // For safari
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 50)
      .style("fill", "transparent")
      .style("opacity", 0.5)
      .style("pointer-events", "all")
      .on("mouseover", function (e, d) {
        div.style("opacity", 0.9);
        div
          .html(d.culture || d.lang + "<br />")
          .style("left", d.x + "px")
          .style("top", d.y - 28 + "px");
      })
      .on("mouseout", function (e, d) {
        div.style("opacity", 0).classed("hidden", true);
      });

    svg.node();
  }

  return <D3SvgOverlay data={data} drawCallback={drawCallback} />;
};

export default VoronoiGrid;

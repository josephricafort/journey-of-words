import React, { useContext } from "react";
import * as d3 from "d3";
import { Delaunay } from "d3-delaunay";
import styled, { ThemeContext } from "styled-components";

import D3SvgOverlay from "../../../../utils/D3SvgOverlay/D3SvgOverlay";
import "./Voronoi.module.scss";

const VoronoiGrid = ({ data, earthWrapDims }) => {
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

    const latExtent = d3.max(dataFlat.map((c) => (c.lat ? c.lat : null)));
    const longExtent = d3.max(dataFlat.map((c) => (c.long ? c.long : null)));

    const coordsArray = dataFlat.map((c) => ({
      x: c.lat && c.long && latLngToLayer(c.lat, c.long).x,
      y: c.lat && c.long && latLngToLayer(c.lat, c.long).y,
    }));
    const voronoi = Delaunay.from(
      coordsArray,
      (d) => d.x,
      (d) => d.y
    ).voronoi([-width / 2, -height / 2, width, height]);

    const changeOpacity = function (selection, opacity) {
      return selection.style("opacity", opacity);
    };

    const voronoiClipPaths = svg
      .append("defs")
      .selectAll(".clip")
      .data(coordsArray.map((d, i) => voronoi.renderCell(i)))
      .join("clipPath")
      .attr("class", "clip")
      .attr("id", (d, i) => "clip-" + i)
      .append("path")
      .attr("d", (d) => d)
      .attr("class", "clip-path-voronoi")
      .style("opacity", 0.5)
      .style("stroke", (d) => theme.black)
      .style("stroke-width", 1);

    const circles = svg
      .selectAll("circle")
      .data(coordsArray)
      .join("circle")
      .attr("class", (d) => `circle-hover`)
      .attr("id", (d, i) => `circle-hover-${i}`)
      .attr("clip-path", (d, i) => `url(#clip-${i})`)
      .style("clip-path", (d, i) => `url(#clip-${i})`) // For safari
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 50)
      .style("fill", (d) => theme.white)
      .style("opacity", 0.5)
      .style("pointer-events", "all")
      .on("mouseover", function (d) {
        d3.select(this).style("fill", "pink");
      })
      .on("mouseout", function (d) {
        d3.select(this).style("fill", "white");
      });

    svg.node();
  }

  return <D3SvgOverlay data={data} drawCallback={drawCallback} />;
};

export default VoronoiGrid;

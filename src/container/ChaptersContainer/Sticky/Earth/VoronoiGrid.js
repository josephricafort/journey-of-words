import React, { useContext } from "react";
import * as d3 from "d3";
import { Delaunay } from "d3-delaunay";
import { ThemeContext } from "styled-components";

import D3SvgOverlay from "../../../../utils/D3SvgOverlay/D3SvgOverlay";

const VoronoiGrid = ({ data, earthWrapDims }) => {
  const { width, height } = earthWrapDims;
  const theme = useContext(ThemeContext);

  function drawCallback(selection, projection, data) {
    const svg = selection;
    const dataFlat = data.flat();

    const longMeridian = (long) => (long > 0 ? long : parseFloat(long) + 360);
    const latLngToLayer = (lat, long) => {
      const coords = [parseFloat(lat), longMeridian(long)];
      return projection.latLngToLayerPoint(coords);
    };

    const latExtent = d3.max(dataFlat.map((c) => (c.lat ? c.lat : null)));
    const longExtent = d3.max(dataFlat.map((c) => (c.long ? c.long : null)));
    const extentLatLngToLayer =
      latExtent && longExtent && latLngToLayer(latExtent, longExtent);
    const minLatLngToLayer = latLngToLayer(90, 180);
    // const extentLatLngToLayer = latLngToLayer(-90, 540);
    const coordsArray = dataFlat.map((c) => ({
      x: c.lat && c.long && latLngToLayer(c.lat, c.long).x,
      y: c.lat && c.long && latLngToLayer(c.lat, c.long).y,
    }));
    const voronoi = Delaunay.from(
      coordsArray,
      (d) => d.x,
      (d) => d.y
    ).voronoi([-width, -height, width, height]);

    const circles = svg
      .selectAll("circle")
      .data(coordsArray)
      .join("circle")
      .attr("class", (d, i) => `circle-${i}`)
      .attr("clip-path", (d, i) => `url(#clip-${i})`)
      .style("clip-path", (d, i) => `url(#clip-${i})`) // For safari
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 50)
      .style("fill", (d) => theme.white)
      .style("opacity", 0.5);

    const voronoiClipPaths = svg
      .append("defs")
      .selectAll(".clip")
      .data(coordsArray.map((d, i) => voronoi.renderCell(i)))
      .join("clipPath")
      .attr("class", "clip")
      .attr("id", (d, i) => "clip-" + i)
      .append("path")
      .attr("d", (d) => d)
      .attr("class", "clip-path-circle")
      .style("fill", "orange")
      .style("opacity", 0.7)
      .style("stroke", "black")
      .style("stroke-opacity", 0.7);

    svg.node();
  }

  return (
    <D3SvgOverlay
      className="word-markers-layer"
      data={data}
      drawCallback={drawCallback}
    ></D3SvgOverlay>
  );
};

export default VoronoiGrid;

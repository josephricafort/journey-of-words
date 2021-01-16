import React from "react";
import * as d3 from "d3";
import { Delaunay } from "d3-delaunay";

import D3SvgOverlay from "../../../../utils/D3SvgOverlay/D3SvgOverlay";

const VoronoiGrid = ({ data, earthWrapDims }) => {
  const { width, height } = earthWrapDims;
  console.log(width + " x " + height);

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

    const grid = svg
      .selectAll("path")
      .data(coordsArray.map((d, i) => voronoi.renderCell(i)))
      .join("path")
      .attr("d", (d) => d)
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

import React, { useState, useEffect, useContext } from "react";
// import { ThemeContext } from "styled-components";
import * as d3 from "d3";

import D3SvgOverlay from "../../../../../utils/D3SvgOverlay/D3SvgOverlay";
// import { occlusion } from "../../../../utils/utils";
// import colorScaleSel from "../../../sharedComponents/colorScaleSel";
import austronesiaColonies from "./austronesia_colonies.geo.json";

const BoundariesLayer = () => {
  const [config, setConfig] = useState({
    center: [40, 10],
    zoom: 4,
  });

  console.log(austronesiaColonies);
  const longMeridian = (long) => (long > 0 ? long : parseFloat(long) + 360);
  // const latLngToLayer = (lat, long) => {
  //   const coords = [parseFloat(lat), longMeridian(long)];
  //   return projection.latLngToLayerPoint(coords);
  // };
  const ausColsReproj = {
    ...austronesiaColonies,
    features: austronesiaColonies.features.map((feat) => {
      const geometry = feat.geometry;
      const coordinates = geometry.coordinates[0];
      const coordsArray = coordinates.map((coord) => {
        const longNew = longMeridian(coord[0]);
        return [longNew, coord[1]];
      });
      return { ...feat, geometry: { ...geometry, coordinates: [coordsArray] } };
    }),
  };

  function drawCallback(selection, projection, data) {
    const svgBoundaries = selection
      .selectAll("path")
      .data(data.features)
      .attr("class", "boundaries");

    svgBoundaries
      .enter()
      .append("path")
      .attr("d", projection.pathFromGeojson)
      .attr("stroke", "black")
      .attr("fill", function () {
        return d3.hsl(Math.random() * 360, 0.9, 0.5);
      })
      .attr("fill-opacity", "0.5");

    svgBoundaries.attr("stroke-width", 1 / projection.scale);
  }

  return (
    <D3SvgOverlay
      data={{ ...austronesiaColonies, ...config }}
      drawCallback={drawCallback}
    ></D3SvgOverlay>
  );
};

export default BoundariesLayer;

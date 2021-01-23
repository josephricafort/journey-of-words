import React, { useEffect, useContext, useRef } from "react";
import * as d3 from "d3";
import { Delaunay } from "d3-delaunay";
import styled, { ThemeContext } from "styled-components";

import D3SvgOverlay from "../../../../utils/D3SvgOverlay/D3SvgOverlay";

const DivTooltip = styled.div`
  ${({ theme }) => `
    position: absolute;
    opacity: 0;
    min-width: 100px;
    background-color: ${theme.white};
    padding: 5px;
    text-align: left;
    pointer-events: none;
    z-index: ${
      // theme.zInteraction + 10 // place the tooltip above the d3 overlays
      500
    }; 
 `}
`;

const VoronoiGridTooltip = ({ data, earthWrapDims }) => {
  const { width, height } = earthWrapDims;
  const theme = useContext(ThemeContext);
  const divRef = useRef();

  // const renderDivTooltip = () => {
  //   d3.select(divRef.current).style("opacity", 0);
  // };
  // useEffect(renderDivTooltip, []);

  const divTooltip = d3.select(divRef.current);

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

    // Voronoi clipping paths
    const voronoiClipPaths = svg
      .append("defs")
      .selectAll(".clip")
      .data(dataCultures.map((d, i) => voronoi.renderCell(i)))
      .join("clipPath");

    voronoiClipPaths
      .attr("class", "clip")
      .attr("id", (d, i) => "clip-" + i)
      .append("path")
      .attr("d", (d) => d)
      .attr("class", "clip-path-voronoi")
      .style("opacity", 0.5)
      .style("stroke", (d) => theme.black)
      .style("stroke-width", 1);

    // Icon Markers from the IconMarkersLayer
    const iconMarker = (i) => d3.select(`#icon-marker-${i}`);

    // Circle catchers
    const circleCatchers = svg
      .selectAll("circle")
      .data(dataCultures)
      .join("circle");

    const circleNodes = circleCatchers.nodes();

    circleCatchers
      .attr("class", "circle-hover")
      .attr("id", (d, i) => `circle-hover-${i}`)
      .attr("clip-path", (d, i) => `url(#clip-${i})`)
      .style("clip-path", (d, i) => `url(#clip-${i})`) // For safari
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 50)
      .style("fill", (d) => theme.white)
      .style("opacity", 0.25)
      .style("pointer-events", "all")
      .on("mouseover", function (event, d) {
        const i = circleNodes.indexOf(this);

        divTooltip
          .style("opacity", 0.9)
          .html(d.culture || d.lang + "<br />")
          .style("left", d.x + 10 + "px")
          .style("top", d.y - 32 + "px");
        iconMarker(i).attr("r", 6);
      })
      .on("mouseout", function (event, d) {
        const i = circleNodes.indexOf(this);

        divTooltip.style("opacity", 0);
        iconMarker(i).attr("r", 2);
      });

    svg.node();
  }

  return (
    <>
      <D3SvgOverlay data={data} drawCallback={drawCallback} />
      <DivTooltip className="tooltip" ref={divRef} />
    </>
  );
};

export default VoronoiGridTooltip;

import React, { useContext, useRef } from "react";
import styled, { ThemeContext } from "styled-components";
import * as d3 from "d3";

import D3SvgOverlay from "../../../../utils/D3SvgOverlay/D3SvgOverlay";
import { occlusion } from "../../../../utils/utils";

// const DivTextContainer = styled.div`
//   opacity: 1;
//   pointer-events: auto;

//   ${({ theme }) => `
//     .text-marker {
//       position: absolute;
//       font-family: ${theme.cursive};
//       z-index: 1000;
//       transform: translate(-50%, -50%);
//       opacity: 0.5;

//       &:hover {
//         opacity: 1;
//         font-size: 3em;
//       }
//     }
//   `}
// `;

const WordMarkersLayer = ({ data }) => {
  const theme = useContext(ThemeContext);
  const divTextRef = useRef();

  function drawCallback(selection, projection, data) {
    const longMeridian = (long) => (long > 0 ? long : parseFloat(long) + 360);
    const latLngToLayer = (lat, long) => {
      const coords = [parseFloat(lat), longMeridian(long)];
      return projection.latLngToLayerPoint(coords);
    };

    // // For hovering
    // const divTextGroup = d3
    //   .select(divTextRef.current)
    //   .on("mouseover", function () {
    //     d3.select(this).style("opacity", 0.1);
    //   })
    //   .on("mouseout", function () {
    //     d3.select(this).style("opacity", 1);
    //   });
    // const divText = divTextGroup.selectAll("div").data(data).join("div");

    // divText
    //   .text((d) => d.wordAn)
    //   .attr("class", "text-marker")
    //   .attr("id", (d, i) => "text-marker-" + i)
    //   .style("font-size", 12 / projection.scale + "px")
    //   .style(
    //     "left",
    //     (d) => d.lat && d.long && latLngToLayer(d.lat, d.long).x + "px"
    //   )
    //   .style(
    //     "top",
    //     (d) => d.lat && d.long && latLngToLayer(d.lat, d.long).y + "px"
    //   );

    // For occlusion
    const svgText = selection.attr("class", "svg-word-markers-layer");
    // hide svg when hovered and use div selection
    // .on("mouseover", function () {
    //   d3.select(this).style("opacity", 0);
    //   divTextGroup.style("opacity", 1);
    // })
    // .on("mouseout", function () {
    //   d3.select(this).style("opacity", 1);
    //   divTextGroup.style("opacity", 0);
    // });

    svgText
      .selectAll("text")
      .data(data)
      .join("text")
      .text((d) => d.wordAn)
      .attr("class", "text-marker")
      .attr("id", (d, i) => `text-marker-${i}`)
      .attr("font-size", 12 / projection.scale + "px")
      .attr("font-family", theme.cursive)
      .attr("x", (d) => d.lat && d.long && latLngToLayer(d.lat, d.long).x)
      .attr("y", (d) => d.lat && d.long && latLngToLayer(d.lat, d.long).y)
      .attr("transform", `translate(0 -5)`)
      .attr("text-anchor", "end")
      .style("pointer-events", "all");
    // .on("mouseover", function (event, d) {
    //   d3.select(this).style("font-size", 18 / projection.scale + "px");
    // })
    // .on("mouseout", function (event, d) {
    //   d3.select(this).style("font-size", 12 / projection.scale + "px");
    // });

    svgText.node();

    occlusion(svgText);
    svgText.selectAll(".occluded").attr("opacity", 0);
  }

  return (
    <>
      {/* <DivTextContainer className="div-word-markers-layer" ref={divTextRef} /> */}
      <D3SvgOverlay data={data} drawCallback={drawCallback}></D3SvgOverlay>
    </>
  );
};

export default WordMarkersLayer;

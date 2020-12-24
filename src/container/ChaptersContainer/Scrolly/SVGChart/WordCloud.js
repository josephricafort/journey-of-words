import React, { useRef, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import * as d3 from "d3";

import { calcDistance, isValid } from "../../../../utils/utils";
import { COORDS_HOMELAND } from "../../../../utils/constants";

const GroupContainer = styled.g`
  height: 100%;
`;

const WordCloud = ({ data, dataPerWordTally, outerSvgDims, padding }) => {
  const N_WORDS_LIMIT = 300;
  const { height, width } = outerSvgDims;
  const gRef = useRef();
  const theme = useContext(ThemeContext);

  const dataPWTTopList = [...new Set(dataPerWordTally.map((e) => e.wordAn))];
  const dataTop = data
    .filter((e) => dataPWTTopList.some((li) => li === e.wordAn))
    .slice(0, N_WORDS_LIMIT);

  // The D3 code for this beautiful viz was forked from https://observablehq.com/@d3/force-layout-phyllotaxis
  const scale = 0.6;
  const center = [width * 0.75, height / 2];

  // SVG
  const group = d3.select(gRef.current);
  const nodes = dataTop
    .filter((e) => isValid(e.lat) || isValid(e.long))
    .map((e) => {
      const obj = Object.assign({}, e);
      obj.r = 2;
      return obj;
    });

  const distMainland = (d) =>
    calcDistance(COORDS_HOMELAND.LAT, COORDS_HOMELAND.LONG, d.lat, d.long);
  const domainExtent = d3.extent(nodes.map((d) => distMainland(d)));

  const y = d3
    .scaleLinear()
    .domain(domainExtent)
    .range([padding.top, height - padding.bottom]);

  const node = group
    .selectAll("circle")
    .attr("class", "circle")
    .data(nodes)
    .join("circle")
    .attr("cx", width * 0.75)
    .attr("cy", (d) => y(distMainland(d)))
    .attr("r", (d) => d.r)
    .attr("fill", theme.fill3);

  const tick = () => {
    node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
    node.attr("r", (d) => d.r);
  };

  const simulation = d3
    .forceSimulation(nodes)
    .on("tick", tick)
    .force("cy", d3.forceY((d) => y(distMainland(d))).strength(0.6))
    .force("cx", d3.forceX(width * 0.75).strength(0.6))
    .force(
      "collide",
      d3.forceCollide().radius((d) => 1 + d.r)
    )
    .stop();

  for (const node of nodes) {
    node.x = node.x * scale + center[0];
    node.y = node.y * scale + center[1];
  }

  simulation.tick(100);
  tick();
  group.node();

  return (
    <GroupContainer
      className="words-cloud-container"
      ref={gRef}
      {...outerSvgDims}
    />
  );
};

export default WordCloud;

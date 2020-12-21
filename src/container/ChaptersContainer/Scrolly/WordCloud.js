import React, { useRef, useEffect, useContext } from "react";
import { ThemeContext } from "styled-components";
import * as d3 from "d3";

import { calcDistance } from "../../../utils/utils";
import { COORDS_HOMELAND } from "../../../utils/constants";

const WordCloud = ({ data, height, padding, activeWord, wordList }) => {
  const svgRef = useRef();
  const theme = useContext(ThemeContext);

  const width = 400;

  const generateChart = () => {
    // The D3 code for this beautiful viz was forked from https://observablehq.com/@d3/force-layout-phyllotaxis
    const dataSelected = data.flat().filter((wd) => wd.wordEn === activeWord);
    const n = dataSelected.length;
    const scale = 0.6;
    const center = [width / 2, height / 2];

    // SVG
    const svg = d3.select(svgRef.current);
    const nodes = dataSelected
      .map((el) => {
        const obj = Object.assign({}, el);
        obj.r = 40;
        return obj;
      })
      .slice(0, n);

    const distMainland = (d) =>
      calcDistance(COORDS_HOMELAND.LAT, COORDS_HOMELAND.LONG, d.lat, d.long);
    const domainExtent = d3.extent(nodes.map((d) => distMainland(d)));

    const y = d3
      .scaleLinear()
      .domain(domainExtent)
      .range([padding.top, height - padding.bottom]);

    const node = svg
      .selectAll("text")
      .attr("class", "text")
      .data(nodes)
      .join("text")
      .attr("x", width / 2)
      .attr("y", (d) => y(distMainland(d)))
      .attr("font-family", theme.cursive)
      .attr("font-size", "14px")
      .attr("text-anchor", "middle")
      .text((d) => d.wordAn);

    const tick = () => {
      node.attr("x", (d) => d.x).attr("y", (d) => d.y);
      node.attr("r", (d) => d.r);
    };

    const simulation = d3
      .forceSimulation(nodes)
      .on("tick", tick)
      .force("y", d3.forceY((d) => y(distMainland(d))).strength(1))
      .force("x", d3.forceX(width / 2).strength(1))
      .force(
        "collide",
        d3.forceCollide().radius((d) => 1 + d.r)
      )
      .stop();

    for (const node of nodes) {
      node.x = node.x * scale + center[0];
      node.y = node.y * scale + center[1];
    }

    simulation.tick(200);
    tick();
    svg.node();
  };

  useEffect(generateChart, [activeWord]);

  return <g className="words-cloud-container" ref={svgRef} width="100%" />;
};

export default WordCloud;

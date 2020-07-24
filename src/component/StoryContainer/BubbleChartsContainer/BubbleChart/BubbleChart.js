import React, { useRef, useEffect } from "react";

import * as d3 from "d3";

const BubbleChart = ({ data, maxCognacy }) => {
  const ref = useRef();

  useEffect(() => {
    // The D3 code for this beautiful viz was forked from https://observablehq.com/@d3/force-layout-phyllotaxis
    const height = 300;
    const width = 300;
    const n = data.length;

    const svg = d3.select(ref.current).attr("viewBox", [0, 0, width, height]);
    const color = d3
      .scaleSequential(d3.interpolateTurbo)
      .domain([0, maxCognacy]);
    const nodes = data
      .map((el) => {
        const obj = Object.assign({}, el);
        obj.r = (10 * obj.count) ** 0.5;
        obj.color = color(obj.cognate_group);
        return obj;
      })
      .slice(0, n);
    const scale = 0.6;
    const center = [width / 2, height / 2];

    const node = svg
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 4)
      .attr("fill", (d) => d.color);

    const simulation = d3
      .forceSimulation(nodes)
      .on("tick", tick)
      .force(
        "collide",
        d3.forceCollide().radius((d) => 1 + d.r)
      )
      .force("x", d3.forceX(center[0]).strength(0.001))
      .force("y", d3.forceY(center[1]).strength(0.001))
      .stop();

    for (const node of nodes) {
      node.x = node.x * scale + center[0];
      node.y = node.y * scale + center[1];
    }

    function tick() {
      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      node.attr("r", (d) => d.r);
    }

    simulation.tick(30);
    tick();
    svg.node();
  }, []);

  return <svg ref={ref}></svg>;
};

export default BubbleChart;

import React, { useRef, useEffect } from "react";
// import styles from "./BubbleChart.module.scss";
import styled from "@emotion/styled";
import * as d3 from "d3";

const Tooltip = styled.div`
  position: absolute;
  text-align: center;
  height: 28px;
  padding: 2px;
  background: black;
  color: white;
  border: 0px;
  font-size: 12px;
  opacity: 0; // hide at first instance
`;

const BubbleChart = ({ data, maxCognacy }) => {
  const svgRef = useRef();
  const tooltipRef = useRef();

  useEffect(() => {
    // The D3 code for this beautiful viz was forked from https://observablehq.com/@d3/force-layout-phyllotaxis
    const height = 300;
    const width = height * 1.2;
    const n = data.length;

    // Prepare data
    const languages = () => {};

    // Tooltip
    const tooltip = d3.select(tooltipRef.current);

    // Svg
    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", [0, 0, width, height]);
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
      .attr("fill", (d) => d.color)
      .on("mouseover", function (d) {
        tooltip
          .html(`<strong>${d.item}</strong> (${d.count})`)
          .style("opacity", 0.9)
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY - 28 + "px");

        d3.select(this)
          .attr("id", "selected-circle")
          .attr("r", (d) => d.r * 1.25)
          .attr("stroke", "#333333")
          .attr("stroke-width", "3px")
          .raise();
      })
      .on("mouseout", (d) => {
        d3.select("#selected-circle").attr("id", null);
        node.attr("stroke-width", "0px").attr("r", (d) => d.r);
        tooltip.style("opacity", 0);
      });

    const tick = () => {
      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      node.attr("r", (d) => d.r);
    };

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

    simulation.tick(30);
    tick();
    svg.node();
  }, []);

  return (
    <div>
      <svg ref={svgRef}></svg>
      <Tooltip ref={tooltipRef} className="tooltip"></Tooltip>
    </div>
  );
};

export default BubbleChart;

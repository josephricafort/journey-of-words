import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import * as d3 from "d3";

const BubbleChartContainer = styled.div`
  margin-top: -20px;
`;

const SvgContainer = styled.svg``;

const BubbleChart = ({ data, maxCognacy }) => {
  const svgRef = useRef();
  const tooltipRef = useRef();

  const height = 200;
  const width = height * 3;
  const padding = { top: 10, right: 80, bottom: 10, left: 80 };

  useEffect(() => {
    // The D3 code for this beautiful viz was forked from https://observablehq.com/@d3/force-layout-phyllotaxis
    const n = data.length;
    const scale = 0.6;
    const center = [width / 2, height / 2];

    // SVG
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

    // X-scale
    const x = d3
      .scaleLinear()
      .domain(d3.extent(nodes.map((d) => d.branch_mean)))
      .range([padding.left, width - padding.right]);

    const node = svg
      .append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 4)
      .attr("fill", (d) => d.color)
      .on("mouseover", function (d) {
        // Tooltip on hover
        svg
          .append("g")
          .attr("class", "tooltip")
          .append("text")
          .text(`${d.item} (${d.count})`)
          .attr("class", "item")
          .attr("x", width / 2)
          .attr("y", "18px")
          .attr("text-anchor", "middle")
          .attr("font-size", "18px")
          .style("opacity", 1);

        d3.select(this)
          .attr("r", (d) => d.r)
          .attr("stroke", "#333333")
          .attr("stroke-width", "3px")
          .attr("fill", (d) => d.color)
          .raise();
      })
      .on("mouseout", function (d) {
        d3.selectAll("circle")
          .attr("stroke-width", "0px")
          .attr("r", (d) => d.r);
        // Remove tooltip on unhover
        svg.selectAll(".tooltip").style("opacity", 0);
      });

    const tick = () => {
      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
      node.attr("r", (d) => d.r);
    };

    const simulation = d3
      .forceSimulation(nodes)
      .on("tick", tick)
      .force("x", d3.forceX((d) => x(d.branch_mean)).strength(0.8))
      .force("y", d3.forceY(height / 2).strength(0.8))
      .force(
        "collide",
        d3.forceCollide().radius((d) => 1 + d.r)
      )
      .stop();

    for (const node of nodes) {
      node.x = node.x * scale + center[0] + padding.left;
      node.y = node.y * scale + center[1];
    }

    simulation.tick(200);
    tick();
    svg.node();
  }, []);

  return (
    <BubbleChartContainer>
      <SvgContainer ref={svgRef}></SvgContainer>
    </BubbleChartContainer>
  );
};

export default BubbleChart;

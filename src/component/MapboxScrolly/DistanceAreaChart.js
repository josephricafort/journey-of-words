import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import * as d3 from "d3";

import centroidAustronesiaClean from "../../data/centroidAustronesiaClean.json";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 0;
`;

const SVGChart = styled.svg``;

const DotCircle = styled.circle`
  transition: all 1s ease-in-out 0s;
`;

const AreaCircle = styled.circle`
  transition: all 1s ease-in-out 0s;
`;

const LabelText = styled.text`
  transition: transform 1s;
`;

const LabelsContainer = styled.div``;

const Title = styled.div`
  position: absolute;
  bottom: ${(props) => props.marginBottom + props.chartHeight / 3}px;
  left: ${(props) => props.marginLeft}px;
  font-size: 14px;
  opacity: 0.65;
`;

const UnitLegend = styled.div`
  position: absolute;
  bottom: ${(props) => props.marginBottom + props.chartHeight / 3}px;
  right: ${(props) => props.marginRight}px;
  font-size: 14px;
  opacity: 0.65;
`;

const locOrder = [
  "Taiwan",
  "Philippines",
  "Greater Sunda Islands",
  "Melanesia",
  "Polynesia",
  "Micronesia",
  "Rapa Nui",
  "Madagascar",
];

const DistanceAreaChart = ({ showLocations }) => {
  const width = 1000;
  const height = 250;
  const margin = { top: 100, right: 200, bottom: 10, left: 200 };
  const viewBox = `0, 0, ${width}, ${height}`;

  const svgRef = useRef(null);

  const data = centroidAustronesiaClean
    .filter((d) => showLocations.includes(d.name))
    .sort((a, b) => locOrder.indexOf(a.name) - locOrder.indexOf(b.name));

  const minXCentroid = d3.min(data, (d) => d.xCentroid);
  const maxXCentroid = d3.max(data, (d) => d.xCentroid);

  const coordScale = d3
    .scaleLinear()
    .domain([minXCentroid, maxXCentroid])
    .range([margin.left, width - margin.right]);

  const radiusScale = d3
    .scaleSqrt()
    .domain(d3.extent(data, (d) => d.area))
    .range([1, 75]);

  const svgElement = d3.select(svgRef.current);

  svgElement
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", `translate(0, ${(height - margin.bottom) / 2})`);

  const xAxis = d3.select(".x-axis");

  xAxis.call(d3.axisBottom(coordScale));

  useEffect(() => {
    coordScale.domain([
      d3.min(data, (d) => d.xCentroid),
      d3.max(data, (d) => d.xCentroid),
    ]);
    xAxis.call(d3.axisBottom(coordScale));
  });

  return (
    <Container>
      <SVGChart {...{ height, width, viewBox }} ref={svgRef}>
        {data.map((d) => (
          <g className="area-circle-markers">
            <AreaCircle
              id={`circle-marker-${d.name}`}
              cx={coordScale(d.xCentroid)}
              cy={(height - margin.bottom) / 2}
              r={radiusScale(d.area)}
              fill="orange"
              opacity={0.35}
            ></AreaCircle>
          </g>
        ))}
        {data.map((d) => (
          <>
            <g className="dot-markers">
              <DotCircle
                id={`dot-marker-${d.name}`}
                cx={coordScale(d.xCentroid)}
                cy={(height - margin.bottom) / 2}
                r={3}
                fill="#333333"
                stroke="#FFFFFF"
              ></DotCircle>
            </g>
            <g className="island-labels">
              <LabelText
                id={`island-label-${d.name}`}
                transform={`translate(${coordScale(d.xCentroid)}, ${
                  (height - margin.bottom) / 2 - radiusScale(d.area)
                })`}
                fontSize={14}
                dx={3}
                dy={-3}
              >
                {d.name}
              </LabelText>
            </g>
          </>
        ))}
      </SVGChart>
      <LabelsContainer className="labels-container">
        <Title
          marginLeft={margin.left}
          marginBottom={margin.bottom}
          chartHeight={height}
        >
          Eastward distance (in degrees)
        </Title>
        <UnitLegend
          marginRight={margin.right}
          marginBottom={margin.bottom}
          chartHeight={height}
        >
          {"degrees East →"}
        </UnitLegend>
      </LabelsContainer>
    </Container>
  );
};

export default DistanceAreaChart;

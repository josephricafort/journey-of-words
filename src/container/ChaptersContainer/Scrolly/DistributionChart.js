import React, { useEffect, useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import useWindowDimensions from "../../../utils/useWindowDimensions";
import useDimensions from "../../../utils/useDimensions";
import { dummyDistributionData } from "./dummyDistributionData";

const Container = styled.div`
  position: relative;
`;

const Group = styled.div`
  display: block;

  p {
    margin-bottom: 5px;
  }
`;

const DistributionChart = () => {
  const { width: windowWidth } = useWindowDimensions();

  return (
    <Container className="distrib-chart-container">
      {dummyDistributionData.map((gp) => (
        <Group className={["distrib-an-group", gp.group]} key={gp.group}>
          <p className="distrib-title-container">{gp.group}</p>
          <CircleArray obj={gp} windowWidth={windowWidth} />
        </Group>
      ))}
    </Container>
  );
};

const SVGWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: left;
`;

const SVGContainer = styled.div`
  display: inline-block;
  vertical-align: top;

  p {
    margin: 0;
    padding: 0;
    font-size: 12px;
  }
`;

const SVG = styled.svg`
  position: inline;
`;

const Circle = styled.circle`
  fill: ${(props) =>
    (props.keyObj === props.objKeys[0] && props.theme.fill0) ||
    (props.keyObj === props.objKeys[1] && props.theme.fill1) ||
    (props.keyObj === props.objKeys[2] && props.theme.fill2) ||
    (props.keyObj === props.objKeys[3] && props.theme.fill3) ||
    (props.keyObj === props.objKeys[4] && props.theme.fill4)};
  stroke: ${(props) =>
    props.keyObj === props.objKeys[0] ? props.theme.stroke0 : "none"};
  stroke-width: 0.5px;
`;

const CircleArray = ({ obj, windowWidth }) => {
  const theme = useContext(ThemeContext);
  const [svgRef, svgDims] = useDimensions();

  const rad =
    (windowWidth < theme.small && 2) || (windowWidth < theme.medium && 3) || 4;
  const GAP = 1;

  const maxElPerRow = Math.ceil(svgDims.width / (rad + GAP));

  const diam = rad * 2;
  const offset = rad;

  const objVals = Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => Number.isFinite(value))
  );
  const objKeys = Object.keys(objVals);
  const sumCircles = Object.entries(obj)
    .map(([, value]) => value)
    .filter((val) => Number.isFinite(val))
    .reduce((acc, currVal) => acc + currVal, 0);
  const maxElPerCol = Math.ceil(sumCircles / maxElPerRow);

  const cx = (i) => (diam + GAP) * Math.floor(i / maxElPerCol) + offset;
  const cy = (i) => (diam + GAP) * (i % maxElPerCol) + offset;

  const height = () => maxElPerCol * (diam + GAP) + offset;
  const width = (val) => Math.ceil(val / maxElPerCol) * (diam + GAP) + offset;

  const perc = (val) => Math.round((val / sumCircles) * 100);

  const svgProps = {
    className: "distrib-svg",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    //   viewBox: "0 0 200 200",
    // enableBackground: "new 0 0 100 200",
  };

  return (
    <SVGWrapper className="svg-wrapper">
      {Object.entries(objVals).map(([keyObj, value], index) => (
        <SVGContainer className="svg-container" key={`svg-container${index}`}>
          <svg
            {...svgProps}
            height={height()}
            width={width(value)}
            key={`svg-${index}`}
            ref={svgRef}
          >
            {Array.from(Array(value), (e, i) => (
              <Circle
                className={keyObj}
                cx={cx(i) || 5}
                cy={cy(i) || 5}
                r={rad}
                key={i}
                keyObj={keyObj}
                objKeys={objKeys}
              />
            ))}
          </svg>
          {width(value) >= 20 && <p>{perc(value)}%</p>}
        </SVGContainer>
      ))}
    </SVGWrapper>
  );
};

export default DistributionChart;

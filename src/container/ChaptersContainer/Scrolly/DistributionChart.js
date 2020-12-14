import React from "react";
import styled from "styled-components";

import { dummyData } from "./dummyData";

const Container = styled.div`
  position: relative;
`;

const Group = styled.div`
  display: block;

  p {
    margin-bottom: 5px;
  }
`;

const SVGWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: left;
`;

const SVG = styled.svg`
  position: relative;
  position: inline;
`;

const GroupLevel = styled.g``;

const Circle = styled.circle`
  fill: ${(props) =>
    (props.keyObj === props.objKeys[0] && props.theme.grey2) ||
    (props.keyObj === props.objKeys[1] && props.theme.fillGreen1) ||
    (props.keyObj === props.objKeys[2] && props.theme.fillGreen2) ||
    (props.keyObj === props.objKeys[3] && props.theme.fillGreen3) ||
    (props.keyObj === props.objKeys[4] && props.theme.fillGreen4)};
  stroke: ${(props) =>
    props.keyObj === "value0" ? props.theme.grey3 : "none"};
  stroke-width: 0.5px;
`;

const CircleArray = ({ obj }) => {
  const MAX_EL_PER_ROW = 40;
  const RAD = 3;
  const DIAM = RAD * 2;
  const OFFSET = RAD;
  const GAP = 1;

  const objKeys = Object.keys(obj);
  const objVals = Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => Number.isFinite(value))
  );
  const sumCircles = Object.entries(obj)
    .map(([key, value]) => value)
    .filter((val) => Number.isFinite(val))
    .reduce((acc, currVal) => acc + currVal, 0);
  const maxElPerCol = Math.round(sumCircles / MAX_EL_PER_ROW);

  const cx = (i) => (DIAM + GAP) * Math.floor(i / maxElPerCol) + OFFSET;
  const cy = (i) => (DIAM + GAP) * (i % maxElPerCol) + OFFSET;

  const height = () => maxElPerCol * (DIAM + GAP) + OFFSET;
  const width = (val) => Math.ceil(val / maxElPerCol) * (DIAM + GAP) + OFFSET;

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
        <SVG height={`${height()}px`} width={`${width(value)}px`} {...svgProps}>
          {Array.from(Array(value), (e, i) => (
            <Circle
              className={keyObj}
              cx={cx(i)}
              cy={cy(i)}
              r={RAD}
              key={i}
              keyObj={keyObj}
              objKeys={objKeys}
            />
          ))}
        </SVG>
      ))}
    </SVGWrapper>
  );
};

const DistributionChart = () => {
  return (
    <Container className="distrib-chart-container">
      {dummyData.map((gp) => (
        <Group className={["distrib-an-group", gp.group]} key={gp.group}>
          <p className="distrib-title-container">{gp.group}</p>
          <CircleArray obj={gp} />
        </Group>
      ))}
    </Container>
  );
};

export default DistributionChart;

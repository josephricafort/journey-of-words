import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import useWindowDimensions from "../../../utils/useWindowDimensions";
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
  const { width: innerWidth } = useWindowDimensions();

  return (
    <Container className="distrib-chart-container">
      {dummyDistributionData.map((gp) => (
        <Group className={["distrib-an-group", gp.group]} key={gp.group}>
          <p className="distrib-title-container">{gp.group}</p>
          <CircleArray obj={gp} innerWidth={innerWidth} />
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
  position: relative;
  position: inline;
`;

const Circle = styled.circle`
  fill: ${(props) =>
    (props.keyObj === props.objKeys[0] && props.theme.grey3) ||
    (props.keyObj === props.objKeys[1] && props.theme.fillGreen1) ||
    (props.keyObj === props.objKeys[2] && props.theme.fillGreen2) ||
    (props.keyObj === props.objKeys[3] && props.theme.fillGreen3) ||
    (props.keyObj === props.objKeys[4] && props.theme.fillGreen4)};
  stroke: ${(props) =>
    props.keyObj === props.objKeys[0] ? props.theme.grey2 : "none"};
  stroke-width: 0.5px;
`;

const CircleArray = ({ obj, innerWidth }) => {
  const theme = useContext(ThemeContext);

  const MAX_EL_PER_ROW = 40;
  const GAP = 1;

  const rad =
    (innerWidth < theme.small && 2) || (innerWidth < theme.medium && 3) || 4;
  const diam = rad * 2;
  const offset = rad;

  const objVals = Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => Number.isFinite(value))
  );
  const objKeys = Object.keys(objVals);
  const sumCircles = Object.entries(obj)
    .map(([key, value]) => value)
    .filter((val) => Number.isFinite(val))
    .reduce((acc, currVal) => acc + currVal, 0);
  const maxElPerCol = Math.round(sumCircles / MAX_EL_PER_ROW);

  const cx = (i) => (diam + GAP) * Math.floor(i / maxElPerCol) + offset;
  const cy = (i) => (diam + GAP) * (i % maxElPerCol) + offset;

  const height = maxElPerCol * (diam + GAP) + offset;
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
          <SVG
            height={height}
            width={width(value)}
            key={`svg-${index}`}
            {...svgProps}
          >
            {Array.from(Array(value), (e, i) => (
              <Circle
                className={keyObj}
                cx={cx(i)}
                cy={cy(i)}
                r={rad}
                key={i}
                keyObj={keyObj}
                objKeys={objKeys}
              />
            ))}
          </SVG>
          {width(value) >= 20 && <p>{perc(value)}%</p>}
        </SVGContainer>
      ))}
    </SVGWrapper>
  );
};

export default DistributionChart;

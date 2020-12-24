import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import useDimensions from "../../../../utils/useDimensions";
import useWindowDimensions from "../../../../utils/useWindowDimensions";

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

const CircleArray = ({ obj }) => {
  const theme = useContext(ThemeContext);
  const [svgRef, svgDims] = useDimensions();
  const { width: windowWidth } = useWindowDimensions();

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

  const height = (val) => {
    return maxElPerCol && maxElPerCol * (diam + GAP) + offset;
    // return !isNaN(h) ? h : 0;
  };
  const width = (val) => {
    const w = Math.ceil(val / maxElPerCol) * (diam + GAP) + offset;
    return !isNaN(w) ? w : 300;
  };

  const perc = (val) => Math.round((val / sumCircles) * 100);

  const svgProps = {
    className: "distrib-svg",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
  };

  return (
    <SVGWrapper className="svg-wrapper">
      {Object.entries(objVals).map(([keyObj, value], index) => (
        <SVGContainer className="svg-container" key={`svg-container${index}`}>
          <svg
            {...svgProps}
            height={height(value)}
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

export default CircleArray;

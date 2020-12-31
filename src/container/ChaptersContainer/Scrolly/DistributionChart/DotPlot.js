import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import useDimensions from "../../../../utils/useDimensions";
import useWindowDimensions from "../../../../utils/useWindowDimensions";

const SVGWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  text-align: left;
`;

const SVG = styled.svg`
  position: relative;
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

const DotPlot = ({ variableData, variable }) => {
  const theme = useContext(ThemeContext);
  const { width: windowWidth } = useWindowDimensions();
  const [svgWrapRef, { width: svgWrapWidth }] = useDimensions();
  const GAP = 2;

  let valuesList = [...new Set(variableData.map((e) => e.value))].sort();
  valuesList.splice(0, 1, valuesList.pop());

  const rad =
    (windowWidth < theme.small && 3) || (windowWidth < theme.medium && 4) || 5;

  // Computed values
  let tallyByVarsData = {
    group: variable,
  };
  valuesList.forEach((val) => {
    tallyByVarsData["value" + val] = variableData.filter(
      (e) => e.value === val
    ).length;
  });

  const maxElPerRow = 30 || Math.ceil(svgWrapWidth / (rad + GAP));
  const diam = rad * 2;
  const offset = rad;

  const objVals = Object.fromEntries(
    Object.entries(tallyByVarsData).filter(([key, value]) =>
      Number.isFinite(value)
    )
  );

  const objKeys = Object.keys(objVals);
  const sumCircles = Object.entries(tallyByVarsData)
    .map(([, value]) => value)
    .filter((val) => Number.isFinite(val))
    .reduce((acc, currVal) => acc + currVal, 0);
  const maxElPerCol = Math.ceil(sumCircles / maxElPerRow);

  const groupedValueData = (val) => variableData.filter((e) => e.value === val);

  const cx = (i) => (diam + GAP) * Math.floor(i / maxElPerCol) + offset;
  const cy = (i) => (diam + GAP) * (i % maxElPerCol) + offset;

  const svgProps = {
    className: "distrib-svg",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
  };

  const valueCount = (val) => tallyByVarsData["value" + val];
  const height = (val) => {
    const h = maxElPerCol * (diam + GAP) + offset;
    return !isNaN(h) ? h : 0;
  };
  const width = (val) => {
    const w = Math.ceil(val / maxElPerCol) * (diam + GAP) + offset;
    return !isNaN(w) ? w : 300;
  };

  const perc = (val) => Math.round((val / sumCircles) * 100);

  return (
    <SVGWrapper ref={svgWrapRef}>
      {valuesList.map((val, index) => (
        <SVG
          {...svgProps}
          className={`svg-group-${val}`}
          height={height() + 10}
          width={width(valueCount(val)) + 20}
          key={`svg-group-${index}`}
        >
          {groupedValueData(val).map((gvd, i) => (
            <Circle
              cx={cx(i) || 5}
              cy={cy(i) || 5}
              r={rad}
              key={i}
              keyObj={"value" + val}
              objKeys={objKeys}
            ></Circle>
          ))}
          <text x={0} y={height() + 10}>
            {perc(valueCount(val))}%
          </text>
        </SVG>
      ))}
    </SVGWrapper>
  );
};

export default DotPlot;

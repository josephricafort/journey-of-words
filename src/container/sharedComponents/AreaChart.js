import React, { useState, useEffect, useContext } from "react";
import * as d3 from "d3";
import axios from "axios";

import colorScaleSel from "./colorScaleSel";
import { ThemeContext } from "styled-components";
import { DB_GITHUB_API_PULOTUDIST } from "../../utils/constants";

const AreaChart = ({ topic, nValues }) => {
  const pulotuDistUrl = DB_GITHUB_API_PULOTUDIST + topic + ".json";
  const [pulotuData, setPulotuData] = useState([{}]);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    axios.get(pulotuDistUrl).then((response) => {
      const data = JSON.parse(response.data);
      setPulotuData(data);
    });
  }, []);

  const margin = { top: 30, right: 30, bottom: 30, left: 40 };
  const width = 500 - margin.left - margin.right;
  const height = 200 - margin.top - margin.bottom;

  const data = pulotuData;

  const dataNorm = data.map((d) => {
    const { asiaDistGroup, lvl0, lvl1, lvl2, lvl3, lvl4, lvlu } = d;
    const sum = lvl0 + lvl1 + lvl2 + lvl3 + lvl4 + lvlu;
    const perc = (val) => (val / sum) * 100;

    return {
      asiaDistGroup,
      lvlu: perc(lvlu),
      lvl0: perc(lvl0),
      lvl1: perc(lvl1),
      lvl2: perc(lvl2),
      lvl3: perc(lvl3),
      lvl4: perc(lvl4),
    };
  });

  const groups = [...new Set(data.map((d) => d.asiaDistGroup))];
  const subgroups = ["lvlu", "lvl0", "lvl1", "lvl2", "lvl3", "lvl4", "lvl5"];

  const x = d3.scaleBand().domain(groups).range([0, width]).padding([0.05]);
  const xAxis = d3.axisBottom(x).tickSizeOuter(0)(
    d3.select(`.x-axis.${topic}`)
  );

  const y = d3.scaleLinear().domain([0, 100]).range([0, height]);
  const yAxis = d3.axisLeft(y)(d3.select(`.y-axis.${topic}`));

  const color = d3
    .scaleOrdinal()
    .domain(subgroups)
    .range(Object.values(colorScaleSel(nValues, theme)));

  const svgProps = {
    width: width + margin.left + margin.right,
    height: height + margin.top + margin.bottom,
  };

  const chartProps = {
    className: "chart-position",
    transform: `translate( ${margin.left}, ${margin.top})`,
  };

  const xAxisProps = {
    className: "x-axis " + topic,
    transform: `translate(0, ${height})`,
  };

  const stackedData = d3.stack().keys(subgroups)(dataNorm);

  return (
    <svg {...svgProps}>
      <g {...chartProps}>
        <g {...xAxisProps}>{xAxis}</g>
        <g className={"y-axis " + topic}>{yAxis}</g>
        <g className="chart">
          {stackedData.map((d, dIndex) => (
            <g fill={color(d.key)} key={d.key}>
              {d.map((e, eIndex) => (
                <rect
                  className={"dIndex" + dIndex + "-rect" + eIndex}
                  x={x(groups[eIndex])}
                  y={y(e[0])}
                  height={(y(e[1]) - y(e[0])).toString()}
                  width={x.bandwidth()}
                  key={eIndex}
                />
              ))}
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
};

export default AreaChart;

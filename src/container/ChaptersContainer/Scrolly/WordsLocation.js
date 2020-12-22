import React, { useRef } from "react";
import styled from "styled-components";
import * as d3 from "d3";

import { occlusion, distFromHomeland } from "../../../utils/utils";
import { COORDS_RAPANUI } from "../../../utils/constants";

const GroupContainer = styled.g`
  text {
    font-size: 12px;
  }

  text.occluded {
    opacity: 0.1;
  }

  text[data-priority="2"] {
    fill: red;
  }
`;

const WordsLocation = ({ data, height, padding }) => {
  const gRef = useRef();
  const group = d3.select(gRef.current);

  const distRapaNui = distFromHomeland(COORDS_RAPANUI.LAT, COORDS_RAPANUI.LONG);
  const domainMax = distRapaNui;

  const y = d3
    .scaleLinear()
    .domain([0, domainMax])
    .range([padding.top, height - padding.bottom]);

  const yMidLocation = (loc) => y((loc.distRangeMax + loc.distRangeMin) / 2);

  group
    .selectAll("text")
    .data(data)
    .join("text")
    .attr("class", "text-location")
    .attr("x", padding.left)
    .attr("y", (d) => yMidLocation(d))
    .attr("text-anchor", "right")
    .text((d) => d.langLocation)
    .node();

  group.selectAll("text").attr("data-priority", Math.random() * 2);

  occlusion(group);

  return <GroupContainer className="location-names" ref={gRef} />;
};

export default WordsLocation;

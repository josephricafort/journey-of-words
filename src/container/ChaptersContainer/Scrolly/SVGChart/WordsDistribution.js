import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import * as d3 from "d3";

import { fullSubgroupName } from "../../../../utils/utils";

const Container = styled.div`
  text-align: left;
  max-height: 400px;
  overflow-y: auto;
`;

const Subgroup = styled.div`
  height: 25%;
  margin-bottom: 10px;
  :not(:first-child) {
    border-top: 2px solid ${(props) => props.theme.stroke0};
  }
`;

const SubgroupTitle = styled.p`
  font-size: 12px;
  opacity: 0.75;
  margin: 5px;
`;

const Word = styled.span`
  display: inline-block;
  margin: 2px 5px;
  background-color: ${(props) => props.count > 1 && props.color};
  font-family: ${(props) => props.theme.cursive};
  font-size: ${(props) => props.fontSize || "10px"};
  ${(props) =>
    props.count === 1 &&
    `text-decoration: underline solid ${props.theme.stroke1} 2px;`}
`;

const WordsDistribution = ({ data }) => {
  const subgroupList = ["Formosan", "WMP", "CMP", "SHWNG", "OC"];
  const theme = useContext(ThemeContext);

  const domainExtent = d3.extent(data.map((e) => e.langNamesCount));

  const colorFillScale = d3
    .scaleLinear()
    .domain(domainExtent)
    .range([theme.backgroundColor, theme.fill3])
    .interpolate(d3.interpolateHcl);

  const fontSizeScale = (count) => {
    const fontSize = d3.scaleLinear().domain(domainExtent).range([14, 36]);
    return Math.round(fontSize(count)) + "px";
  };

  return (
    <Container className="words-distribution-container">
      {subgroupList.map((sg, index) => (
        <Subgroup className="subgroup" key={"subgroup-" + sg + "-" + index}>
          <SubgroupTitle className="subgroup">
            {fullSubgroupName(sg)} ({sg})
          </SubgroupTitle>
          {data
            .filter((e) => e.langSubgroupsList === sg)
            .map(
              (w, index) =>
                w.langNamesCount !== 0 && (
                  <Word
                    className="word-langnames"
                    color={colorFillScale(w.langNamesCount)}
                    fontSize={fontSizeScale(w.langNamesCount)}
                    count={w.langNamesCount}
                    key={"langnames-" + index}
                  >
                    {w.wordAn} {w.langNamesCount > 1 && `(${w.langNamesCount})`}
                  </Word>
                )
            )}
        </Subgroup>
      ))}
    </Container>
  );
};

export default WordsDistribution;

import React, { useState, useEffect, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import * as d3 from "d3";

import { isUndefined, fullSubgroupName } from "../../../utils/utils";

const Container = styled.div`
  text-align: left;
`;

const Subgroup = styled.div`
  height: 25%;
  margin-bottom: 25px;
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
  font-size: ${(props) => props.fontSize || "12px"};
  ${(props) =>
    props.count === 1 &&
    `text-decoration: underline solid ${props.theme.stroke1} 2px;`}
`;

const WordsDistribution = ({ data, height, padding }) => {
  const [dataOfWord, setDataOfWord] = useState([]);
  const [dataPerWordTally, setDataPerWordTally] = useState([]);
  //   const [subgroupList, setSubgroupList] = useState([]);
  const subgroupList = ["Formosan", "WMP", "CMP", "SHWNG", "OC"];
  const theme = useContext(ThemeContext);

  const generateDataOfWord = () =>
    setDataOfWord(
      data.map((e) => {
        const {
          wordAn,
          wordEn,
          langName,
          langISOCode,
          langSubgroup,
          langLocation,
          lat,
          long,
        } = e;

        return {
          wordAn,
          wordEn,
          langName,
          langISOCode,
          langSubgroup,
          langLocation,
          lat,
          long,
        };
      })
    );
  useEffect(generateDataOfWord, [data]);

  const domainExtent = d3.extent(dataPerWordTally.map((e) => e.langNamesCount));

  const colorFillScale = d3
    .scaleLinear()
    .domain(domainExtent)
    .range([theme.backgroundColor, theme.fill3])
    .interpolate(d3.interpolateHcl);

  const fontSizeScale = (count) => {
    const fontSize = d3.scaleLinear().domain(domainExtent).range([14, 36]);
    return Math.round(fontSize(count)) + "px";
  };

  const generateDataPerWordTally = () => {
    const N_WORDS_LIMIT = 100;
    const wordAnList = [...new Set(dataOfWord.map((e) => e.wordAn))];

    // setSubgroupList([...new Set(dataOfWord.map((e) => e.langSubgroup))]);

    setDataPerWordTally(
      wordAnList
        .map((wd) => {
          const currentWordData = dataOfWord.filter((e) => e.wordAn === wd);

          const countReducer = (count, langName) =>
            langName ? count + 1 : count;
          const stringReducer = (strList, str) =>
            str || str !== "" ? strList.concat(", ").concat(str) : strList;

          const langSubgroupsList = [
            ...new Set(currentWordData.map((wd) => wd.langSubgroup)),
          ].reduce(stringReducer);
          const langNamesList = [
            ...new Set(currentWordData.map((wd) => wd.langName)),
          ].reduce(stringReducer);
          const langNamesCount = [
            ...new Set(currentWordData.map((wd) => wd.langName)),
          ].reduce(countReducer, 0);

          return {
            wordAn: wd,
            langSubgroupsList,
            langNamesList,
            langNamesCount,
          };
        })
        .sort((a, b) => (a.langNamesCount < b.langNamesCount ? 1 : -1))
        .slice(0, N_WORDS_LIMIT)
    );
  };
  useEffect(generateDataPerWordTally, [dataOfWord, data]);

  return (
    <Container className="words-distribution-container">
      {subgroupList.map((sg) => (
        <Subgroup>
          <SubgroupTitle className="subgroup">
            {fullSubgroupName(sg)} ({sg})
          </SubgroupTitle>
          {dataPerWordTally
            .filter((e) => e.langSubgroupsList === sg)
            .map(
              (w) =>
                w.langNamesCount !== 0 && (
                  <Word
                    color={colorFillScale(w.langNamesCount)}
                    fontSize={fontSizeScale(w.langNamesCount)}
                    count={w.langNamesCount}
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

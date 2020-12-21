import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { isUndefined } from "../../../utils/utils";

const Container = styled.div``;

const Subgroup = styled.div`
  height: 25%;
  margin-bottom: 20px;
  background-color: ${(props) => props.theme.fill1};
`;

const Word = styled.div`
  display: inline-block;
  padding: 1px;
  font-size: 12px;
`;

const WordsDistribution = ({ data, height, padding }) => {
  const [dataCategory, setDataCategory] = useState([]);
  const [subgroupList, setSubgroupList] = useState([]);

  const wordAnList = [...new Set(dataCategory.map((e) => e.wordAn))];

  const dataAvailable = () => {
    if (!isUndefined(data)) {
      setDataCategory(
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
      setSubgroupList([...new Set(dataCategory.map((e) => e.langSubgroup))]);
    }
  };
  useEffect(dataAvailable, [data]);

  const dataCategoryTally = wordAnList.map((wd) => {
    const countReducer = (count, langName) => (langName ? count + 1 : count);
    const langNameReducer = (langNames, langName) =>
      langName !== "" ? langNames.concat(", ").concat(langName) : langNames;

    const langCount = data.map((e) => e.langName).reduce(countReducer, 0);
    const langNamesList = data.map((e) => e.langName).reduce(langNameReducer);

    return {
      wordAn: wd,
      langCount,
      langNamesList,
    };
  });
  console.log(dataCategoryTally);

  const wordPerSubgroupList = (sg) => [
    ...new Set(
      dataCategory.filter((e) => e.langSubgroup === sg).map((e) => e.wordAn)
    ),
  ];

  return (
    <Container className="words-distribution-container">
      {subgroupList.map((sg) => (
        <Subgroup>
          {wordPerSubgroupList(sg).map((w) => (
            <Word>{w}</Word>
          ))}
        </Subgroup>
      ))}
    </Container>
  );
};

export default WordsDistribution;

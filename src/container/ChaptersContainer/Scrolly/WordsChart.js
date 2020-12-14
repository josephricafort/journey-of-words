import React from "react";
import styled from "styled-components";
import Tabs, { Tab } from "react-toolbox/lib/tabs/Tabs";

import { dummyWordsData, dummyLangData } from "./dummyWordsData";

const CategorySelection = styled.div`
  position: relative;
  display: block;
  text-align: left;
  margin-bottom: 10px;
`;

const CategoryButton = styled.div`
  display: inline-block;
  padding: 10px;
  background-color: ${(props) => props.theme.green2};
  margin-right: 10px;
`;

const WordSelection = styled.div`
  position: relative;
  display: block;
  text-align: left;
`;

const WordButton = styled.div`
  display: inline-block;
  padding: 10px;
  background-color: ${(props) => props.theme.green1};
  margin-right: 10px;
  margin-bottom: 10px;
`;

const WordsChart = () => {
  const categoryList = [...new Set(dummyWordsData.map((el) => el.wordCatEn))];
  const wordList = (cat) =>
    dummyWordsData.filter((wd) => wd.wordCatEn === cat).map((wd) => wd.wordEn);

  return (
    <div className="words-chart-container">
      <CategorySelection className="category-selection">
        {categoryList.map((cat) => (
          <CategoryButton>{cat}</CategoryButton>
        ))}
      </CategorySelection>
      <WordSelection className="words-selection">
        {categoryList.map((cat) =>
          wordList(cat).map((word) => <WordButton>{word}</WordButton>)
        )}
      </WordSelection>
    </div>
  );
};

export default WordsChart;

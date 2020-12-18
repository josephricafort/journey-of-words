import React, { useState, useRef } from "react";
import styled from "styled-components";
import * as d3 from "d3";

import {
  dummyWordsData,
  dummyLangData,
  dummyRegionData,
} from "./dummyWordsData";
import WordCloud from "./WordCloud";

const CategorySelection = styled.div`
  position: relative;
  display: block;
  text-align: left;
  margin-bottom: 10px;
`;

const CategoryButton = styled.div`
  display: inline-block;
  padding: 10px;
  background-color: ${(props) =>
    (props.activeCat === props.catName && props.theme.green1) || "none"};
  margin-right: 10px;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  font-size: 18px;
  font-weight: ${(props) => (props.activeCat === props.catName && 700) || 500};
`;

const WordSelection = styled.div`
  position: relative;
  display: block;
  text-align: left;
`;

const WordButton = styled.div`
  display: inline-block;
  padding: 10px;
  background-color: ${(props) =>
    (props.activeWord === props.wordName && props.theme.green2) || "none"};
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  font-size: 20px;
  font-weight: ${(props) =>
    (props.activeWord === props.wordName && 700) || 500};
`;

const CurrentWord = styled.div`
  display: block;
  text-align: left;
  font-family: ${(props) => props.theme.cursive};
  font-size: 36px;
  border: 2px dashed ${(props) => props.theme.strokeGreen1};
  padding: 10px;
  margin-bottom: 10px;
`;

const categoryList = [...new Set(dummyWordsData.map((el) => el.wordCatEn))];
const wordList = (cat) => [
  ...new Set(
    dummyWordsData.filter((wd) => wd.wordCatEn === cat).map((wd) => wd.wordEn)
  ),
];

const WordsChart = () => {
  const [activeCat, setActiveCat] = useState(categoryList[0]);
  const [activeWord, setActiveWord] = useState(wordList(activeCat)[0]);

  const handleClickCat = (cat) => {
    setActiveCat(cat);
    setActiveWord(wordList(cat)[0]);
  };
  const handleClickWord = (word) => setActiveWord(word);

  return (
    <div className="words-chart-container">
      <CategorySelection className="category-selection">
        {categoryList.map((cat) => (
          <CategoryButton
            className="category-button"
            onClick={(e) => handleClickCat(cat)}
            activeCat={activeCat}
            catName={cat}
            key={`category-${cat}`}
          >
            {cat}
          </CategoryButton>
        ))}
      </CategorySelection>
      <WordSelection className="words-selection">
        {wordList(activeCat).map((word) => (
          <WordButton
            className="word-button"
            key={`word-${word}`}
            activeWord={activeWord}
            wordName={word}
            onClick={(e) => handleClickWord(word)}
          >
            {word}
          </WordButton>
        ))}
      </WordSelection>
      <CurrentWord>{activeWord}</CurrentWord>
      <SVGChart activeWord={activeWord} />
    </div>
  );
};

const SVGWrapper = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  margin-bottom: 20px;
  height: ${(props) => props.height};
`;

const Group = styled.g`
  height: 100%;
`;

const LocNames = styled(Group)`
  width: 200px;
`;

const LocLines = styled(Group)`
  width: 50px;
  transform: translate(200px, 0);
`;

const LocWords = styled(Group)`
  width: 100%;
  transform: translate(250px, 0);
`;

const SVGChart = ({ activeWord }) => {
  const height = 600;
  const padding = { top: 40, right: 20, bottom: 40, left: 20 };

  const svgRef = useRef();

  const svgProps = {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "100%",
    // viewBox: "0 0 200 200",
    // enableBackground: "new 0 0 100 200",
    height: height,
  };

  const wordCloudProps = {
    data: dummyLangData,
    activeWord: activeWord,
    height: height,
    padding: padding,
  };

  const y = d3
    .scaleLinear()
    .domain(d3.extent(dummyRegionData.map((reg) => reg.distFromHomeland)))
    .range([padding.top, height - padding.bottom]);

  return (
    <SVGWrapper className="svg-wrapper" ref={svgRef}>
      <svg className="svg" {...svgProps}>
        <LocNames className="location-names">
          {dummyRegionData.map((reg, index) => (
            <text
              x={padding.left}
              y={y(reg.distFromHomeland)}
              textAnchor="right"
              key={index}
            >
              {reg.langRegion}
            </text>
          ))}
        </LocNames>
        <LocLines className="location-lines">
          {dummyRegionData.map((reg, index) => (
            <circle
              className="face-icon"
              cx={20}
              cy={y(reg.distFromHomeland)}
              r={15}
              fill="grey"
              key={index}
            ></circle>
          ))}
        </LocLines>
        <LocWords className="location-words">
          <WordCloud {...wordCloudProps} />
        </LocWords>
      </svg>
    </SVGWrapper>
  );
};

export default WordsChart;

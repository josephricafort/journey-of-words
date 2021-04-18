import React, { useState, useEffect, useContext, useMemo } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  distFromHomeland,
  removeStringSpaces,
  meanReducer,
  minReducer,
  maxReducer,
} from "../../../utils/utils";
import {
  DB_GITHUB_API_WORDS,
  DB_GITHUB_API_WORDS_LOAN,
  DB_GITHUB_API_LOCATIONS,
} from "../../../utils/constants";
import SVGChart from "./SVGChart/SVGChart";
import { Context } from "../../../storeContext/Store";

const Selection = styled.div`
  position: relative;
  display: block;
  text-align: left;
  max-width: 1400px;
  // overflow: auto; // doesn't work for mobile at the moment, creates a vertical scroll overflow
  // white-space: nowrap;
`;

const CategorySelection = styled(Selection)`
  margin-bottom: 10px;
  border-bottom: 1px solid ${(props) => props.theme.stroke1};
`;

const WordSelection = styled(Selection)``;

const Tab = styled.div`
  display: inline-block;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.fill1};
  }
`;

const CategoryTab = styled(Tab)`
  background-color: ${(props) =>
    (props.activeCat === props.catName && props.theme.fill1) || "none"};
  font-size: 14px;
  font-weight: ${(props) => (props.activeCat === props.catName && 700) || 500};
`;

const WordTab = styled(Tab)`
  background-color: ${(props) =>
    (props.activeWord === props.wordName && props.theme.fill2) || "none"};
  font-size: 20px;
  font-weight: ${(props) =>
    (props.activeWord === props.wordName && 700) || 500};
`;

const CurrentWord = styled.div`
  display: block;
  text-align: left;
  font-family: ${(props) => props.theme.cursive};
  font-size: 36px;
  border: 1px solid ${(props) => props.theme.stroke1};
  border-radius: 0 0 5px 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const WordsChart = ({ slideData, slideId }) => {
  const { wordsItems } = slideData;
  const { currentSlideIndex } = useContext(Context)[0];

  const [wordsInfoData, setWordsInfoData] = useState([[], [], []]);
  // const [locationsData, setLocationsData] = useState([]);

  const categoryList = wordsItems.map((cat) => cat.category);
  const wordsPerCatList = (cat) => {
    return wordsItems
      .find((c) => c.category === cat)
      ["words"].map((wd) => wd.wordsEn);
  };

  const [activeCat, setActiveCat] = useState(categoryList[0]);
  const [activeWord, setActiveWord] = useState(wordsPerCatList(activeCat)[0]);

  function wordsChartSource(id) {
    return Math.floor(id) <= 1 ? DB_GITHUB_API_WORDS : DB_GITHUB_API_WORDS_LOAN;
  }

  const fetchData = () => {
    axios
      .all(
        wordsPerCatList(activeCat).map((wd) =>
          axios.get(
            wordsChartSource(slideId) + "/" + removeStringSpaces(wd) + ".json"
          )
        )
      )
      .then((responseArray) => {
        setWordsInfoData(responseArray.map((res) => JSON.parse(res.data)));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(fetchData, [activeCat]);

  // Derive data for location names (LocNames group)
  const locationsList = [
    ...new Set(wordsInfoData.flat().map((e) => e.langLocation)),
  ].filter((loc) => loc);

  const generateLocationsData = (data) =>
    locationsList.map((loc) => {
      const dataPerLocation = data.flat().filter((w) => w.langLocation === loc);
      const dataPerLocLat = dataPerLocation.map((e) => e.lat);
      const dataPerLocLong = dataPerLocation.map((e) => e.long);

      const latMean = dataPerLocLat.reduce(meanReducer);
      const longMean = dataPerLocLong.reduce(meanReducer);
      const latMin = dataPerLocLat.reduce(minReducer);
      const longMin = dataPerLocLong.reduce(minReducer);
      const latMax = dataPerLocLat.reduce(maxReducer);
      const longMax = dataPerLocLong.reduce(maxReducer);

      const distRangeMin = distFromHomeland(latMin, longMin);
      const distRangeMax = distFromHomeland(latMax, longMax);

      return {
        langLocation: loc,
        latMean,
        longMean,
        latMin,
        longMin,
        latMax,
        longMax,
        distRangeMin,
        distRangeMax,
      };
    });
  const locationsData = useMemo(() => generateLocationsData(wordsInfoData), [
    wordsInfoData,
  ]);

  const wordProtoAn = (wordEn) => {
    const currCat = wordsItems.find((cat) => activeCat === cat.category);
    return currCat["words"].find((w) => w.wordsEn === wordEn)["wordAn"];
  };

  const handleClickCat = (cat) => {
    setActiveCat(cat);
    setActiveWord(wordsPerCatList(cat)[0]);
  };
  const handleClickWord = (word) => setActiveWord(word);

  const wordIndex = wordsPerCatList(activeCat).indexOf(activeWord);
  const svgChartProps = {
    activeWord,
    locationsData,
    data: wordsInfoData[wordIndex],
    wordsPerCatList: wordsPerCatList(activeCat),
  };

  return (
    <div className="words-chart-container">
      <CategorySelection className="category-selection">
        {categoryList.map((cat) => (
          <CategoryTab
            className="category-button"
            onClick={(e) => handleClickCat(cat)}
            activeCat={activeCat}
            catName={cat}
            key={`category-${cat}`}
          >
            {cat}
          </CategoryTab>
        ))}
      </CategorySelection>
      <WordSelection className="words-selection">
        {wordsPerCatList(activeCat).map((word) => (
          <WordTab
            className="word-button"
            key={`word-${word}`}
            activeWord={activeWord}
            wordName={word}
            onClick={(e) => handleClickWord(word)}
          >
            {word}
          </WordTab>
        ))}
      </WordSelection>
      <CurrentWord className="current-word">
        {wordProtoAn(activeWord)}
      </CurrentWord>
      <SVGChart {...svgChartProps} />
    </div>
  );
};

export default WordsChart;

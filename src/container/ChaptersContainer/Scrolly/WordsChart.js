import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import * as d3 from "d3";
import axios from "axios";

import useDimensions from "../../../utils/useDimensions";
import { calcDistance, isUndefined } from "../../../utils/utils";
import {
  DB_GITHUB_API_WORDS,
  COORDS_HOMELAND,
  COORDS_RAPANUI,
} from "../../../utils/constants";

import {
  dummyWordsData,
  dummyLangData,
  dummyRegionData,
} from "./dummyWordsData";
import WordCloud from "./WordCloud";
import WordsDistribution from "./WordsDistribution";

const Selection = styled.div`
  position: relative;
  display: block;
  text-align: left;
`;

const CategorySelection = styled(Selection)`
  margin-bottom: 10px;
`;

const WordSelection = styled(Selection)``;

const Button = styled.div`
  display: inline-block;
  padding: 10px;
  margin-right: 10px;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
`;

const CategoryButton = styled(Button)`
  background-color: ${(props) =>
    (props.activeCat === props.catName && props.theme.green1) || "none"};
  font-size: 18px;
  font-weight: ${(props) => (props.activeCat === props.catName && 700) || 500};
`;

const WordButton = styled(Button)`
  background-color: ${(props) =>
    (props.activeWord === props.wordName && props.theme.green2) || "none"};
  margin-bottom: 10px;
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

const WordsChart = ({ slideData }) => {
  const { wordsItems } = slideData;
  const [wordsInfoData, setWordsInfoData] = useState([]);
  const [locationsData, setLocationsData] = useState([]);
  const [locationsList, setLocationsList] = useState([]);

  const categoryList = wordsItems.map((cat) => cat.category);
  const wordsPerCatList = (cat) =>
    wordsItems.find((wd) => wd.category === cat).wordsEn;
  const wordsAllCatList = wordsItems.map((cat) => cat.wordsEn).flat();

  const [activeCat, setActiveCat] = useState(categoryList[0]);
  const [activeWord, setActiveWord] = useState(wordsPerCatList(activeCat)[0]);

  const fetchWordsChartData = () => {
    axios
      .all(
        wordsPerCatList(activeCat).map((wd) =>
          axios.get(DB_GITHUB_API_WORDS + "/" + wd + ".json")
        )
      )
      .then((responseArray) => {
        setWordsInfoData(responseArray.map((res) => JSON.parse(res.data)));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(fetchWordsChartData, [activeCat]);

  // Derive data for location names (LocNames group)
  const generateLocationsList = () => {
    if (typeof wordsInfoData.flat() !== "undefined") {
      setLocationsList(
        [...new Set(wordsInfoData.flat().map((e) => e.langLocation))].filter(
          (loc) => typeof loc !== "undefined"
        )
      );
    }
  };
  useEffect(generateLocationsList, [wordsInfoData]);

  const generateLocationsData = () =>
    setLocationsData(
      locationsList.map((loc) => {
        const meanReducer = (mean, val) =>
          !isNaN(val) ? (mean + val) / 2 : mean;
        const minReducer = (min, val) =>
          !isNaN(val) ? Math.min(min, val) : min;
        const maxReducer = (max, val) =>
          !isNaN(val) ? Math.max(max, val) : max;

        const dataPerLocation = wordsInfoData
          .flat()
          .filter((w) => w.langLocation === loc);
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
      })
    );
  useEffect(generateLocationsData, [locationsList]);

  const wordProtoAn = (wordEn) => {
    const currCat = wordsItems.find((cat) => activeCat === cat.category);
    const indexWord = currCat.wordsEn.indexOf(wordEn);
    return currCat.wordsAn[indexWord];
  };

  const handleClickCat = (cat) => {
    setActiveCat(cat);
    setActiveWord(wordsPerCatList(cat)[0]);
  };
  const handleClickWord = (word) => setActiveWord(word);

  const wordIndex = wordsPerCatList(activeCat).indexOf(activeWord);
  const svgChartProps = {
    activeWord,
    data: wordsInfoData[wordIndex],
    locationsData: locationsData,
    wordsPerCatList: wordsPerCatList(activeCat),
  };

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
        {wordsPerCatList(activeCat).map((word) => (
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
      <CurrentWord>{`${activeWord} (${wordProtoAn(activeWord)})`}</CurrentWord>
      <SVGChart {...svgChartProps} />
    </div>
  );
};

const SVGWrapper = styled.div`
  text-align: left;
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

const WordsDistWrapper = styled.div`
  display: inline-block;
  width: calc(100% - ${(props) => props.svgWidth}px - 10px);
  vertical-align: top;
  text-align: center;
`;

const TextLocation = styled.text`
  font-size: 12px;
`;

const SVGChart = ({ data, locationsData, activeWord, wordsPerCatList }) => {
  const height = 600;
  const padding = { top: 40, right: 20, bottom: 40, left: 20 };

  const svgWrapperRef = useRef();
  const [svgRef, svgDims] = useDimensions();

  const svgProps = {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "250px",
    // viewBox: "0 0 200 200",
    // enableBackground: "new 0 0 100 200",
    height: height,
  };

  // const wordCloudProps = {
  //   data: wordsInfoData,
  //   wordList: wordsPerCatList,
  //   activeWord,
  //   height: height,
  //   padding: padding,
  // };

  const wordDistProps = {
    data,
    height: height,
    padding: padding,
  };

  const distRapaNui = distFromHomeland(COORDS_RAPANUI.LAT, COORDS_RAPANUI.LONG);
  const distMadagascar = distFromHomeland(
    COORDS_RAPANUI.LAT,
    COORDS_RAPANUI.LONG
  );

  const domainMin = 0;
  const domainMax = distRapaNui;
  // const domainMax = d3.max(locationsData.map((loc) => loc.distRangeMax));

  const y = d3
    .scaleLinear()
    .domain([domainMin, domainMax])
    .range([padding.top, height - padding.bottom]);

  const yLocation = (loc) => y(distFromHomeland(loc.latMean, loc.longMean));

  // Hard code the range extent of the data
  const locationsExtent = [
    {
      langLocation: "Rapa Nui",
      latMean: COORDS_RAPANUI.LAT,
      longMean: COORDS_RAPANUI.LONG,
      distRangeMin: distFromHomeland(COORDS_RAPANUI.LAT, COORDS_RAPANUI.LONG),
      distRangeMax: distFromHomeland(COORDS_RAPANUI.LAT, COORDS_RAPANUI.LONG),
    },
  ];
  const haveDuplicatesLangLocs = locationsData.some(
    (e) => e.langLocation === "Taiwan" || e.langLocation === "Rapa Nui"
  );
  const locationsDataExtended = [].concat(
    locationsData,
    () => haveDuplicatesLangLocs && locationsExtent
  );

  return (
    <SVGWrapper className="svg-wrapper" ref={svgWrapperRef}>
      <svg className="svg" {...svgProps} ref={svgRef}>
        <LocNames className="location-names">
          {[...locationsData, ...locationsExtent].map(
            (loc, index) =>
              yLocation(loc) && (
                <TextLocation
                  x={padding.left}
                  y={yLocation(loc)}
                  textAnchor="right"
                  key={index}
                >
                  {loc.langLocation}
                </TextLocation>
              )
          )}
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
        {/* <LocWords className="location-words">
          <WordCloud {...wordCloudProps} />
        </LocWords> */}
      </svg>
      <WordsDistWrapper svgWidth={svgDims.width}>
        <WordsDistribution {...wordDistProps}></WordsDistribution>
      </WordsDistWrapper>
    </SVGWrapper>
  );
};

function distFromHomeland(latTo, longTo) {
  return calcDistance(COORDS_HOMELAND.LAT, COORDS_HOMELAND.LONG, latTo, longTo);
}

export default WordsChart;

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

import WordCloud from "./WordCloud";
import WordsDistribution from "./WordsDistribution";

const Selection = styled.div`
  position: relative;
  display: block;
  text-align: left;
  max-width: 1400px;
  -webkit-overflow-scrolling: touch;
  // overflow-x: auto;
  white-space: nowrap;
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
`;

const CategoryTab = styled(Tab)`
  background-color: ${(props) =>
    (props.activeCat === props.catName && props.theme.green1) || "none"};
  font-size: 14px;
  font-weight: ${(props) => (props.activeCat === props.catName && 700) || 500};
`;

const WordTab = styled(Tab)`
  background-color: ${(props) =>
    (props.activeWord === props.wordName && props.theme.green2) || "none"};
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

const WordsChart = ({ slideData }) => {
  const { wordsItems } = slideData;
  const [wordsInfoData, setWordsInfoData] = useState([[], [], []]);
  const [locationsData, setLocationsData] = useState([]);
  const [locationsList, setLocationsList] = useState([]);

  const categoryList = wordsItems.map((cat) => cat.category);
  const wordsPerCatList = (cat) =>
    wordsItems.find((wd) => wd.category === cat).wordsEn;
  const wordsAllCatList = wordsItems.map((cat) => cat.wordsEn).flat();

  const [activeCat, setActiveCat] = useState(categoryList[0]);
  const [activeWord, setActiveWord] = useState(wordsPerCatList(activeCat)[0]);

  const fetchWordsInfoData = () => {
    axios
      .all(
        wordsPerCatList(activeCat).map((wd) =>
          axios.get(
            DB_GITHUB_API_WORDS + "/" + wd.split(" ").join("") + ".json"
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
  useEffect(fetchWordsInfoData, [activeCat]);

  // Derive data for location names (LocNames group)
  const generateLocationsList = () => {
    setLocationsList(
      [...new Set(wordsInfoData.flat().map((e) => e.langLocation))].filter(
        (loc) => typeof loc !== "undefined"
      )
    );
  };
  useEffect(generateLocationsList, [wordsInfoData]);

  const generateLocationsData = () =>
    setLocationsData(
      locationsList.map((loc) => {
        const isValid = (val) => !isNaN(val) || !isUndefined(val);
        const meanReducer = (mean, val) =>
          isValid(val) ? (mean + val) / 2 : mean;
        const minReducer = (min, val) =>
          isValid(val) ? Math.min(min, val) : min;
        const maxReducer = (max, val) =>
          isValid(val) ? Math.max(max, val) : max;

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
      <CurrentWord>{wordProtoAn(activeWord)}</CurrentWord>
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

  // const [svgData, setSvgData] = useState([]);
  const [dataOfWord, setDataOfWord] = useState([]);
  const [dataPerWordTally, setDataPerWordTally] = useState([]);
  const svgWrapperRef = useRef();
  const [svgRef, svgDims] = useDimensions();

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

  const generateDataPerWordTally = () => {
    const N_WORDS_LIMIT = 75;
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
          const meanReducer = (mean, val) =>
            !isNaN(val) ? (mean + val) / 2 : mean;

          const langSubgroupsList = [
            ...new Set(currentWordData.map((wd) => wd.langSubgroup)),
          ].reduce(stringReducer);
          const langNamesList = [
            ...new Set(currentWordData.map((wd) => wd.langName)),
          ].reduce(stringReducer);
          const langNamesCount = currentWordData
            .map((wd) => wd.langName)
            .reduce(countReducer, 0);
          const latSubgroupMean = currentWordData
            .map((wd) => wd.lat)
            .reduce(meanReducer, 0);
          const longSubgroupMean = currentWordData
            .map((wd) => wd.long)
            .reduce(meanReducer, 0);

          return {
            wordAn: wd,
            langSubgroupsList,
            langNamesList,
            langNamesCount,
            latSubgroupMean,
            longSubgroupMean,
          };
        })
        .sort((a, b) => (a.langNamesCount < b.langNamesCount ? 1 : -1))
        .slice(0, N_WORDS_LIMIT)
    );
  };
  useEffect(generateDataPerWordTally, [dataOfWord]);

  const svgProps = {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "250px",
    height: height,
  };

  const wordCloudProps = {
    outerSvgRef: svgRef,
    outerSvgDims: svgDims,
    padding,
    locationsData,
  };

  const wordDistProps = {
    height: svgDims.height,
    padding,
  };

  const distRapaNui = distFromHomeland(COORDS_RAPANUI.LAT, COORDS_RAPANUI.LONG);
  const domainMax = distRapaNui;

  const y = d3
    .scaleLinear()
    .domain([0, domainMax])
    .range([padding.top, height - padding.bottom]);

  const yMidLocation = (loc) => y((loc.distRangeMax + loc.distRangeMin) / 2);

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
  const locationsDataExtended = [].concat(locationsData, locationsExtent);

  return (
    <SVGWrapper className="svg-wrapper" ref={svgWrapperRef}>
      <svg className="svg" {...svgProps} ref={svgRef}>
        <WordCloud
          data={dataOfWord}
          dataPerWordTally={dataPerWordTally}
          {...wordCloudProps}
        />
        <LocNames className="location-names">
          {locationsDataExtended.map(
            (loc, index) =>
              yMidLocation(loc) && (
                <TextLocation
                  x={padding.left}
                  y={yMidLocation(loc)}
                  textAnchor="right"
                  key={index}
                >
                  {loc.langLocation}
                </TextLocation>
              )
          )}
        </LocNames>
      </svg>
      <WordsDistWrapper svgWidth={svgDims.width}>
        <WordsDistribution
          data={dataPerWordTally}
          {...wordDistProps}
        ></WordsDistribution>
      </WordsDistWrapper>
    </SVGWrapper>
  );
};

function distFromHomeland(latTo, longTo) {
  return calcDistance(COORDS_HOMELAND.LAT, COORDS_HOMELAND.LONG, latTo, longTo);
}

export default WordsChart;

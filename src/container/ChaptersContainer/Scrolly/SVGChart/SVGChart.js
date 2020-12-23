import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import useDimensions from "../../../../utils/useDimensions";
import useStore from "../../../../store/dataStore";
import WordsLocation from "./WordsLocation";
import WordCloud from "./WordCloud";
import WordsDistribution from "./WordsDistribution";
import {
  distFromHomeland,
  countReducer,
  meanReducer,
  stringReducer,
} from "../../../../utils/utils";
import { COORDS_RAPANUI } from "../../../../utils/constants";

const SVGWrapper = styled.div`
  text-align: left;
  min-height: 500px;
  height: 100%;
`;

const WordsDistWrapper = styled.div`
  display: inline-block;
  width: calc(100% - ${(props) => props.svgWidth}px - 10px);
  vertical-align: top;
  text-align: center;
`;

const SVGChart = ({ data, locationsData }) => {
  const padding = { top: 40, right: 20, bottom: 40, left: 20 };

  const svgWrapperRef = useRef();
  const state = useState()[0];
  const [dataOfWord, setDataOfWord] = useState([]);
  const [dataPerWordTally, setDataPerWordTally] = useState([]);
  const [svgRef, svgDims] = useDimensions();
  const height = 500;

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

    setDataPerWordTally(
      wordAnList
        .map((wd) => {
          const currentWordData = dataOfWord.filter((e) => e.wordAn === wd);

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
        <WordsLocation
          data={locationsDataExtended}
          padding={padding}
          height={height}
        />
      </svg>
      <WordsDistWrapper svgWidth={svgDims.width}>
        <WordsDistribution data={dataPerWordTally} {...wordDistProps} />
      </WordsDistWrapper>
    </SVGWrapper>
  );
};

export default SVGChart;

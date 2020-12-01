import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import { configureDataStore } from "./store/dataStore";
import {
  DB_GITHUB_LANGUAGE_INFO,
  DB_GITHUB_WORDS_INFO,
  DB_GITHUB_LANG_HEIRARCHY_ARR,
  SET_WORDSINFO,
  SET_LANGUAGEINFO,
  SET_LANGHEIRARCHY,
} from "./utils/constants";
import { useStore } from "./store/store";
import MapboxScrolly from "./container/MapboxScrolly/MapboxScrolly";
import mapboxconfig from "./container/MapboxScrolly/config";
import chaptersconfig from "./container/ChaptersContainer/config";
import ChaptersContainer from "./container/ChaptersContainer/ChaptersContainer";

configureDataStore();

const AppContainer = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100vh;
  text-align: center;
  border: none;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

const ChaptersScreen = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  background-color: white;
`;

const JourneyOfWords = () => {
  const dispatch = useStore()[1];

  useEffect(() => {
    axios
      .all([
        axios.get(DB_GITHUB_LANGUAGE_INFO),
        axios.get(DB_GITHUB_WORDS_INFO),
        axios.get(DB_GITHUB_LANG_HEIRARCHY_ARR),
      ])
      .then((responseArray) => {
        dispatch(SET_LANGUAGEINFO, responseArray[0].data);
        dispatch(SET_WORDSINFO, responseArray[1].data);
        dispatch(SET_LANGHEIRARCHY, responseArray[2].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AppContainer className="journey-of-words">
      <ChaptersScreen className="section-intro">Section Intro</ChaptersScreen>
      <div className="chapter-world">
        <MapboxScrolly {...mapboxconfig} />
      </div>
      <div className="chapters-container">
        <ChaptersContainer {...chaptersconfig} />
      </div>
      {/* <ChapterScreen className="section-end-exploration">
        <MapContainer></MapContainer>
      </ChapterScreen> */}
    </AppContainer>
  );
};

export default JourneyOfWords;

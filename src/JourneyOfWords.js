import React, { useEffect } from "react";
import axios from "axios";
import styled, { ThemeProvider } from "styled-components";

import variables from "./styles/variables";
import GlobalStyle from "./styles/GlobalStyle";
import { lightTheme } from "./styles/theme";

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
  background-color: ${(props) => props.theme.white};
`;

const TitleContainer = styled.div`
  position: relative;
  display: block;
  height: 100vh;
  padding: 20px;
  background-color: ${(props) => props.theme.blue8};
  opacity: 0.75;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 700px;
  margin: 0 auto;
  width: 100%;
  opacity: 1;

  h1 {
    color: white;
    opacity: inherit;
  }

  p {
    color: white;
    opacity: inherit;
  }
`;

const JourneyOfWords = () => {
  const dispatch = useStore()[1];

  const fetchAllData = () => {
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
  };

  useEffect(fetchAllData, []);

  return (
    <ThemeProvider theme={{ ...variables, ...lightTheme }}>
      <GlobalStyle />
      <AppContainer className="journey-of-words">
        <ChaptersScreen className="section-intro">Section Intro</ChaptersScreen>
        <div className="chapter-world">
          <MapboxScrolly {...mapboxconfig} />
        </div>
        <TitleContainer className="title-container">
          <TitleWrapper className="title-wrapper">
            <h1>The Words That Sailed Across Half The World</h1>
            <p className="title-description">
              How the shared linguistic ancestry of Austronesians tells us the
              story of mankind’s greatest expansion and adversities across the
              vast Indo-Pacific.
            </p>
            <p className="title-byline">
              Based from the extensive research by Robert Blust, Russell Gray,
              Simon Greenhill, Steven Trussel and Joseph Watts.
            </p>
            <p>Written, designed and developed by Joseph Ricafort.</p>
          </TitleWrapper>
        </TitleContainer>
        <div className="chapters">
          <ChaptersContainer {...chaptersconfig} />
        </div>
      </AppContainer>
    </ThemeProvider>
  );
};

export default JourneyOfWords;

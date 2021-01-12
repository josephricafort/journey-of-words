import React, { useContext } from "react";
// import axios from "axios";
import styled, { ThemeProvider } from "styled-components";

import variables from "./styles/variables";
import GlobalStyle from "./styles/GlobalStyle";
import { lightTheme, chapterThemes } from "./styles/theme";

import { configureDataStore } from "./store/dataStore";
// import {
//   DB_GITHUB_LANGUAGE_INFO,
//   DB_GITHUB_WORDS_INFO,
//   DB_GITHUB_LANG_HEIRARCHY_ARR,
//   SET_WORDSINFO,
//   SET_LANGUAGEINFO,
//   SET_LANGHEIRARCHY,
// } from "./utils/constants";
import { Context } from "./storeContext/Store";
import IntroKicker from "./container/IntroKicker/IntroKicker";
import MapboxScrolly from "./container/MapboxScrolly";
// import MapExploration from "./container/MapExploration/MapExploration";
import Scrolly from "./container/ChaptersContainer/Scrolly/Scrolly";
import Sticky from "./container/ChaptersContainer/Sticky/Sticky";

import longform from "./longform";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  border: none;
  top: 0;
`;

const HeaderWrapper = styled.div`
  position: relative;
  display: block;
  height: 100vh;
  padding: 0 40px;
  background-color: ${(props) => props.theme.blue8};
  opacity: 0.75;
`;

const HeaderContainer = styled.div`
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
    padding: 0 20px;
  }

  p {
    color: white;
    opacity: inherit;
    padding: 0 20px;
  }
`;

const ScrollyContainer = styled.section`
  position: relative;
`;

configureDataStore();

const StoryApp = () => {
  const [state, dispatch] = useContext(Context);
  const { currentChapterTheme } = state;
  const { header, introKicker, mapboxScrolly, chaptersScrolly } = longform;
  const chapterThemeVars = chapterThemes[currentChapterTheme];

  // const fetchAllData = () => {
  //   axios
  //     .all([
  //       axios.get(DB_GITHUB_LANGUAGE_INFO),
  //       axios.get(DB_GITHUB_WORDS_INFO),
  //       axios.get(DB_GITHUB_LANG_HEIRARCHY_ARR),
  //     ])
  //     .then((responseArray) => {
  //       dispatch(SET_LANGUAGEINFO, responseArray[0].data);
  //       dispatch(SET_WORDSINFO, responseArray[1].data);
  //       dispatch(SET_LANGHEIRARCHY, responseArray[2].data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  // useEffect(fetchAllData, []);

  return (
    <ThemeProvider theme={{ ...variables, ...lightTheme, ...chapterThemeVars }}>
      <GlobalStyle />
      <AppContainer className="app-container">
        <IntroKicker {...introKicker.config}></IntroKicker>
        <MapboxScrolly {...mapboxScrolly.config} />
        <HeaderWrapper className="header-wrapper">
          <HeaderContainer className="header-container">
            <h1>{header.title}</h1>
            <p className="header-description">{header.description}</p>
            <p className="header-byline1">{header.byline1}</p>
            <p className="header-byline2">{header.byline2}</p>
          </HeaderContainer>
        </HeaderWrapper>
        <ScrollyContainer className="chapters">
          <Sticky className="chapters-sticky" />
          <Scrolly className="chapters-scrolly" {...chaptersScrolly}></Scrolly>
        </ScrollyContainer>
        {/* <MapExploration /> */}
      </AppContainer>
    </ThemeProvider>
  );
};

export default StoryApp;

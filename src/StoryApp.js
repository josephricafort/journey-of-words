import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";

import variables from "./styles/variables";
import GlobalStyle from "./styles/GlobalStyle";
import { lightTheme, chapterThemes } from "./styles/theme";

import { configureDataStore } from "./store/dataStore";

import { Context } from "./storeContext/Store";
import IntroKicker from "./container/IntroKicker/IntroKicker";
import MapboxScrolly from "./container/MapboxScrolly";

import longform from "./longform";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  border: none;
  top: 0;
`;

configureDataStore();

const StoryApp = () => {
  const [state] = useContext(Context);
  const { currentChapterTheme } = state;
  const { introKicker, mapboxScrolly } = longform;
  const chapterThemeVars = chapterThemes[currentChapterTheme];

  return (
    <ThemeProvider theme={{ ...variables, ...lightTheme, ...chapterThemeVars }}>
      <GlobalStyle />
      <AppContainer className="app-container">
        <IntroKicker {...introKicker.config}></IntroKicker>
        <MapboxScrolly {...mapboxScrolly.config} />
      </AppContainer>
    </ThemeProvider>
  );
};

export default StoryApp;

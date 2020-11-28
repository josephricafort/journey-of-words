import React from "react";
import styled from "styled-components";

import Earth from "./Earth.js";
import Scrolly from "./Scrolly/Scrolly";

const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 500vh;
  background-color: white;
  border: 1px solid brown;
  text-align: center;
  background-color: lightgreen;
`;

const ContentWrapper = styled.div`
  position: absolute;
  top: 25vh;
  display: block;
  z-index: 75;
  width: 100%;
`;

const IntroTitle = styled.div`
  position: relative;
  height: 100vh;
`;

/* Standardizing z-index
Cards contents: 75 - 100
Visual elements: 50 - 74
Earth: 25 - 49
Background: 0 -24
*/

const ChapterContainer = () => {
  return (
    <Container className="chapter-container">
      <ContentWrapper className="chapter-content-wrapper">
        <IntroTitle className="intro-title">
          <p>Chapter II</p>
          <h2>Nature</h2>
        </IntroTitle>
        <Scrolly className="chapter-scrolly"></Scrolly>
      </ContentWrapper>
      <ContentWrapper className="chapter-content-wrapper">
        <IntroTitle className="intro-title">
          <p>Chapter II</p>
          <h2>Nature</h2>
        </IntroTitle>
        <Scrolly className="chapter-scrolly"></Scrolly>
      </ContentWrapper>
      <Earth />
    </Container>
  );
};

export default ChapterContainer;

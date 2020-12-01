import React from "react";
import styled from "styled-components";

import Earth from "./Earth.js";
import Scrolly from "./Scrolly/Scrolly";

const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  background-color: white;
  border: 1px solid brown;
  text-align: center;
  background-color: lightgreen;
`;

const Sticky = styled.div``;

/* Standardizing z-index
Cards contents: 75 - 100
Visual elements: 50 - 74
Earth: 25 - 49
Background: 0 -24
*/

const ChaptersContainer = (chaptersconfig) => {
  return (
    <Container className="chapters-container">
      <Sticky></Sticky>
      <Earth />
      <Scrolly className="chapter-scrolly" {...chaptersconfig}></Scrolly>
    </Container>
  );
};

export default ChaptersContainer;

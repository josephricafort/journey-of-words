import React from "react";
import styled from "styled-components";

import Scrolly from "./Scrolly/Scrolly";
import Sticky from "./Sticky/Sticky";

const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  background-color: white;
  text-align: center;
  background-color: lightgreen;
`;

/* Standardizing z-index
Cards contents: 75 - 100
Visual elements: 50 - 74
Earth: 25 - 49
Background: 0 -24
*/

const ChaptersContainer = (chaptersconfig) => {
  return (
    <Container className="chapters-container">
      <Sticky className="chapters-sticky" />
      <Scrolly className="chapters-scrolly" {...chaptersconfig}></Scrolly>
    </Container>
  );
};

export default ChaptersContainer;

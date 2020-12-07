import React from "react";
import styled from "styled-components";

import Scrolly from "./Scrolly/Scrolly";
import Sticky from "./Sticky/Sticky";
import { useStore } from "../../store/store";

const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  background-color: white;
  background-color: lightgreen;
`;

const Debug = styled.div`
  position: fixed;
  // position: sticky;
  top: 10px;
  left: 10px;
  width: 100%;
  height: 100vh;
  text-align: left;
  font-size: 1.2em;
`;

/* Standardizing z-index
Cards contents: 75 - 100
Visual elements: 50 - 74
Earth: 25 - 49
Background: 0 -24
*/

const ChaptersContainer = (chaptersconfig) => {
  const { currentStepIndex } = useStore()[0];

  return (
    <Container className="chapters-container">
      <Sticky className="chapters-sticky" />
      <Scrolly className="chapters-scrolly" {...chaptersconfig}></Scrolly>
      <Debug>
        Current slide: <strong>{currentStepIndex}</strong>
      </Debug>
    </Container>
  );
};

export default ChaptersContainer;

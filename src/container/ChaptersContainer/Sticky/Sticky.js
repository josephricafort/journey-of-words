import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import Earth from "./Earth/Earth";
import FaceTattoo from "./Graphic/FaceTattoo/FaceTattoo";
import GroupSilhouette from "./Graphic/FaceTattoo/GroupSilhouette";
import { Context } from "../../../storeContext/Store";

const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  display: block;
  width: 100%;
  height: 100vh;
  text-align: center;
  border: none;
  top: 0;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const GraphicWrapper = styled.div`
  position: absolute;
  top: 20px;
  width: calc(100% - 40px);
  min-height: 50vh;
  left: 50%;
  transform: translate(-50%, 0%);
  // border: 1px solid ${(props) => props.theme.yellow};
  margin: 0 auto;
  max-width: 700px;
  opacity: 1;
  z-index: ${(props) => props.theme.zVisuals + props.zGraphic};
`;

const EarthWrapper = styled.div`
  position: relative;
  height: 100vh;
  text-align: center;
  border: none;
  z-index: ${(props) => props.theme.zVisuals + props.zEarth};
`;

const FocusOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.black};
  opacity: 0.75;
  z-index: ${(props) => props.theme.zVisuals + 5};
`;

const Sticky = () => {
  const state = useContext(Context)[0];
  const { currentSlideData } = state;
  const { type } = currentSlideData;

  const [graphicToHighlight, setGraphicToHighlight] = useState({
    isDarkOverlay: false,
    zGraphic: 10,
    zEarth: 0,
  });

  useEffect(() => {
    if (type === "face-tattoo") {
      setGraphicToHighlight({
        isDarkOverlay: true,
        zGraphic: 10, // highlight the graphic
        zEarth: 0,
      });
    } else if (type === "word-story" || type === "distribution-chart") {
      setGraphicToHighlight({
        isDarkOverlay: true,
        zGraphic: 0,
        zEarth: 10, // highlight the earth
      });
    } else if (type === "words-chart") {
      setGraphicToHighlight({
        isDarkOverlay: true,
        zGraphic: -5, // unhighlight both
        zEarth: -5,
      });
    } else {
      setGraphicToHighlight({
        isDarkOverlay: false,
        zGraphic: 10, // graphic at the top by default
        zEarth: 0,
      });
    }
  }, [type]);

  const { isDarkOverlay, zGraphic, zEarth } = graphicToHighlight;

  return (
    <Container className="sticky-container">
      <GraphicWrapper className="graphic-wrapper" zGraphic={zGraphic}>
        <div className="face-tattoo">
          <GroupSilhouette />
          <FaceTattoo />
        </div>
      </GraphicWrapper>
      <EarthWrapper className="earth-wrapper" zEarth={zEarth}>
        <Earth className="earth" />
      </EarthWrapper>
      {isDarkOverlay && <FocusOverlay className="focus-overlay-earth" />}
    </Container>
  );
};

export default Sticky;

import React from "react";
import styled from "styled-components";

import Earth from "./Earth";
// import FaceTattoo from "./Graphic/FaceTattoo/FaceTattoo";
import FaceWoman from "./Graphic/FaceTattoo/FaceWoman";
import GroupSilhouette from "./Graphic/FaceTattoo/GroupSilhouette";
import DistributionChart from "./Graphic/DistributionChart";

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
`;

const Sticky = () => {
  return (
    <Container className="sticky-container">
      <GraphicWrapper className="graphic-wrapper">
        <div className="face-tattoo">
          <GroupSilhouette />
          <FaceWoman />
        </div>
        <DistributionChart />
      </GraphicWrapper>
      <Earth className="earth" />
    </Container>
  );
};

export default Sticky;

import React from "react";
import styled from "styled-components";

import Earth from "./Earth";
// import FaceTattoo from "./Graphic/FaceTattoo/FaceTattoo";
import FaceTattoo from "./Graphic/FaceTattoo/FaceTattoo";
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
  opacity: 0.9;
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
`;

const Sticky = () => {
  return (
    <Container className="sticky-container">
      <GraphicWrapper className="graphic-wrapper">
        <div className="face-tattoo">
          <GroupSilhouette />
          <FaceTattoo />
        </div>
        <DistributionChart className="distribution-chart" />
      </GraphicWrapper>
      <Earth className="earth" />
    </Container>
  );
};

export default Sticky;

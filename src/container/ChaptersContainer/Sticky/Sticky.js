import React from "react";
import styled from "styled-components";

import Earth from "./Earth";
import FaceTattoo from "./Graphic/FaceTattoo";
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
`;

const GraphicWrapper = styled.div`
  position: absolute;
  top: 20px;
  width: calc(100% - 40px);
  min-height: 50vh;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: orange;
  margin: 0 auto;
  max-width: 700px;
`;

const Sticky = () => {
  return (
    <Container className="sticky-container">
      <GraphicWrapper className="graphic">
        <FaceTattoo />
        <DistributionChart />
      </GraphicWrapper>
      <Earth className="earth" />
    </Container>
  );
};

export default Sticky;

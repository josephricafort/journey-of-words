import React from "react";
import styled from "styled-components";

import Earth from "./Earth";
import Graphic from "./Graphic";

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

const Sticky = () => {
  return (
    <Container className="sticky-container">
      <Graphic className="graphic" />
      <Earth className="earth" />
    </Container>
  );
};

export default Sticky;

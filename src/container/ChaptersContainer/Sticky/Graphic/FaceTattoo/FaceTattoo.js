import React from "react";
import styled from "styled-components";

import FaceWoman from "./FaceWoman";
import { useStore } from "../../../../../store/store";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: ${(props) => props.theme.zVisuals + 10};
  transform: translate(-50%, 0);
  width: 150px;
  max-width: 400px;
  opacity: 1;

  @media (${(props) => props.theme.breakpointMedium}) {
    top: 5vw;
    width: 200px;
    max-width: 800px;
  }
`;

const FaceTattoo = () => {
  const {
    currentFaceTattoo,
    statesFaceTattoo,
    isSlideTattooType,
  } = useStore()[0];

  const faceProps = {
    data: statesFaceTattoo,
    currData: currentFaceTattoo,
    isSlideTattooType,
  };

  return (
    <Container>
      <FaceWoman {...faceProps}></FaceWoman>
    </Container>
  );
};

export default FaceTattoo;

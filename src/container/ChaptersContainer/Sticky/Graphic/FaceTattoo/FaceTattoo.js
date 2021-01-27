import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import FaceWoman from "./FaceWoman";
import { Context } from "../../../../../storeContext/Store";
import iniFaceTattoo from "./initFaceTattoo";

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
    top: 50px;
    width: 200px;
    max-width: 800px;
  }
`;

const FaceTattoo = () => {
  const { currentSlideData } = useContext(Context)[0];
  const { type, tattoo } = currentSlideData || {};

  const [statesFaceTattoo, setStatesFaceTattoo] = useState(iniFaceTattoo);
  const [currentFaceTattoo, setCurrentFaceTattoo] = useState({});
  const [currentTattooIndex, setCurrentTattooIndex] = useState(0);

  const updateFaceTattooData = () => {
    if (type === "face-tattoo") {
      const tattooIndex = statesFaceTattoo.find(
        (obj) => tattoo.area === obj.area
      );
      let newTattooIndex = statesFaceTattoo.indexOf(tattooIndex);
      newTattooIndex =
        newTattooIndex >= 0 ? newTattooIndex : currentTattooIndex;
      const setIsShown = (tIndex) => {
        return tIndex <= newTattooIndex ? true : false;
      };
      setStatesFaceTattoo(
        statesFaceTattoo.map((obj, index) => {
          obj.isShown = setIsShown(index);
          return tattoo.area === obj.area ? tattoo : obj;
        })
      );
      setCurrentFaceTattoo(tattoo ? tattoo : currentFaceTattoo);
      setCurrentTattooIndex(newTattooIndex);
    }
  };
  useEffect(updateFaceTattooData, [tattoo]);

  const faceProps = {
    data: statesFaceTattoo,
    currData: currentFaceTattoo,
    currSlideType: type,
  };

  return (
    <Container className="face-woman-container">
      <FaceWoman {...faceProps} className="face-woman"></FaceWoman>
    </Container>
  );
};

export default FaceTattoo;

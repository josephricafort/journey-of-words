import React, { useState, useEffect, useContext } from "react";
import { Scrollama, Step } from "react-scrollama";
import styled from "styled-components";

import slideSwitch from "../sharedComponents/slideSwitch";
import { Context } from "../../storeContext/Store";
import { SET_CURRENTSLIDEDATA } from "../../utils/constants";

const Container = styled.div`
  position: relative;
  display: block;
  z-index: ${({ theme }) => theme.zContent + 5};
  background-color: ${({ theme }) => theme.blue8};

  img {
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    object-position: center;
  }

  .scrollama-container {
    margin-top: -125vh;
  }
`;

const IntroKicker = ({ slides }) => {
  const dispatch = useContext(Context)[1];
  const [currentSlideData, setCurrentSlideData] = useState(slides[0]);

  const onStepEnter = ({ data: slideData }) => {
    setCurrentSlideData(slideData);
  };

  useEffect(
    () => dispatch({ type: SET_CURRENTSLIDEDATA, payload: currentSlideData }),
    [currentSlideData]
  );

  return (
    <Container className="intro-kicker">
      <img
        src={require("../../assets/images/mantou_rock_sunset_latombe.jpg")}
        alt="Mantou rock sunset Latombe"
      />
      <div className="scrollama-container">
        <Scrollama
          className="scrolly-scrollama"
          onStepEnter={onStepEnter}
          offset={0.5}
        >
          {slides.map((slide, index) => (
            <Step
              className="scrolly-step"
              key={slide.id + "-" + slide.chapter}
              data={slide}
            >
              {slideSwitch(slide)}
            </Step>
          ))}
        </Scrollama>
      </div>
    </Container>
  );
};

export default IntroKicker;

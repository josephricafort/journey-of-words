import React, { useState, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";
import styled from "styled-components";

import slideSwitch from "../sharedComponents/slideSwitch";
import { useStore } from "../../store/store";
import { SET_CURRENTSLIDEDATA } from "../../utils/constants";

const Container = styled.div`
  position: relative;
  display: block;
  z-index: ${({ theme }) => theme.zContent + 5};
  background-color: ${({ theme }) => theme.blue8};
`;

const IntroKicker = ({ slides }) => {
  const dispatch = useStore()[1];
  const [currentSlideData, setCurrentSlideData] = useState(slides[0]);

  const onStepEnter = ({ data: slideData }) => {
    setCurrentSlideData(slideData);
  };

  useEffect(() => dispatch(SET_CURRENTSLIDEDATA, currentSlideData), [
    currentSlideData,
  ]);

  return (
    <Container className="intro-kicker">
      <Scrollama
        className="scrolly-scrollama"
        onStepEnter={onStepEnter}
        offset={0.75}
        debug
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
    </Container>
  );
};

export default IntroKicker;

import React, { useState, useEffect, useContext } from "react";
import { Scrollama, Step } from "react-scrollama";
import styled from "styled-components";

import { Context } from "../../../storeContext/Store";

import { SET_CURRENTSLIDEDATA } from "../../../utils/constants";
import slideSwitch from "../../sharedComponents/slideSwitch";

const Wrapper = styled.div`
  transform: translateY(-100vh);
  pointer-events: none;
`;

const Scrolly = (chaptersconfig) => {
  const { slides } = chaptersconfig;
  const dispatch = useContext(Context)[1];

  const [currentSlideData, setCurrentSlideData] = useState(slides[0]);

  const onStepEnter = ({ data: slideData }) => {
    setCurrentSlideData(slideData);
  };

  useEffect(() => {
    dispatch({ type: SET_CURRENTSLIDEDATA, payload: currentSlideData });
  }, [currentSlideData]);

  return (
    <Wrapper className="scrolly-wrapper">
      <Scrollama
        className="intro-kicker-scrollama"
        onStepEnter={onStepEnter}
        offset={0.5}
      >
        {slides.map((slide) => (
          <Step
            className="intro-kicker-step"
            key={slide.id + "-" + slide.chapter}
            data={slide}
          >
            {slideSwitch(slide)}
          </Step>
        ))}
      </Scrollama>
    </Wrapper>
  );
};

export default Scrolly;

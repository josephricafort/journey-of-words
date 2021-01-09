import React, { useState, useEffect, useContext } from "react";
import { Scrollama, Step } from "react-scrollama";

import { Context } from "../../../storeContext/Store";

import { SET_CURRENTSLIDEDATA } from "../../../utils/constants";
import slideSwitch from "../../sharedComponents/slideSwitch";

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
    <Scrollama
      className="intro-kicker-scrollama"
      onStepEnter={onStepEnter}
      offset={0.75}
      debug
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
  );
};

export default Scrolly;

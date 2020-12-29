import React from "react";
import { Scrollama, Step } from "react-scrollama";

import { useStore } from "../../../store/store";
import { SET_CURRENTSLIDEDATA } from "../../../utils/constants";
import slideSwitch from "../../sharedComponents/slideSwitch";

const Scrolly = (chaptersconfig) => {
  const { slides } = chaptersconfig;
  const dispatch = useStore()[1];

  const onStepEnter = ({ data: slideData }) => {
    dispatch(SET_CURRENTSLIDEDATA, slideData);
  };

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

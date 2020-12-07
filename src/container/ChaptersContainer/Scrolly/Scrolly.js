import React, { useState } from "react";
import styled from "styled-components";
import { Scrollama, Step } from "react-scrollama";

import { useStore } from "../../../store/store";
import { SET_CURRENTSTEPINDEX } from "../../../utils/constants";

const CardWrapper = styled.div``;

const CardContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Card = styled.div`
  position: relative;
  display: block;
  background-color: pink;
  max-width: 700px;
  margin: auto;
  text-align: center;
  margin: 20px auto;
  min-height: 200px;
  padding: 10px 20px;

  @media (max-width: 800px) {
    margin: 20px 20px;
  }
`;

const IntroWrapper = styled.div`
  position: relative;
  height: 100vh;
  z-index: 75;
`;

const Scrolly = (chaptersconfig) => {
  const { slides } = chaptersconfig;
  const [state, dispatch] = useStore();
  const { currentStepIndex } = state;

  function slideSwitch(slide) {
    return (
      <CardWrapper className="scrolly-card-wrapper">
        {slide.type === "intro" && (
          <CardContainer className="scrolly-card-container">
            <Card className="scrolly-card intro">
              <p>{slide.contents.chapterLabel}</p>
              <h2>{slide.contents.title}</h2>
            </Card>
          </CardContainer>
        )}
        {slide.type === "quote" && (
          <CardContainer className="scrolly-card-container">
            <Card className="scrolly-card quote">
              <h2>"{slide.contents.quote.an}"</h2>
              <p>"{slide.contents.quote.en}"</p>
              <p>- {slide.contents.author}</p>
            </Card>
          </CardContainer>
        )}
        {slide.type === "face-tattoo" && (
          <CardContainer className="scrolly-card-container">
            <Card className="scrolly-card face-tattoo">
              <h2>{slide.contents.title}</h2>
              {slide.contents.p.map((p) => (
                <p>{p}</p>
              ))}
            </Card>
          </CardContainer>
        )}
        {slide.type === null ? null : null}
      </CardWrapper>
    );
  }

  const onStepEnter = ({ data }) => {
    dispatch(SET_CURRENTSTEPINDEX, data);
  };

  return (
    <Scrollama
      className="scrolly-scrollama"
      onStepEnter={onStepEnter}
      offset={0.5}
      debug
    >
      {slides.map((slide) => (
        <Step className="scrolly-step" key={slide.id} data={slide.id}>
          {slideSwitch(slide)}
        </Step>
      ))}
    </Scrollama>
  );
};

export default Scrolly;

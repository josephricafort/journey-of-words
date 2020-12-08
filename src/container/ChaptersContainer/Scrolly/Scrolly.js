import React from "react";
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
  background-color: ${(props) =>
    (props.type === "intro" && "none") || props.theme.white};
  opacity: 0.85;
  max-width: 700px;
  margin: auto;
  text-align: center;
  margin: 20px auto;
  min-height: 200px;
  padding: 10px 20px;

  p {
    color: ${(props) => props.theme.black}
    opacity: 1;
    &.chapter-roman-numeral {
      text-transform: uppercase;
    }
  }

  h2 {
    color: ${(props) => props.theme.black}
  }

  @media (max-width: 800px) {
    margin: 20px 20px;
  }
`;

const Scrolly = (chaptersconfig) => {
  const { slides } = chaptersconfig;
  const dispatch = useStore()[1];

  function slideSwitch(slide) {
    return (
      <CardWrapper className="scrolly-card-wrapper">
        <CardContainer className="scrolly-card-container">
          {slide.type === "intro" && (
            <Card className="scrolly-card intro" {...slide}>
              <p className="chapter-roman-numeral">
                {slide.contents.chapterLabel}
              </p>
              <h2 className="chapter-title">{slide.contents.title}</h2>
            </Card>
          )}
          {slide.type === "quote" && (
            <Card className="scrolly-card quote">
              <h2>"{slide.contents.quote.an}"</h2>
              <p>"{slide.contents.quote.en}"</p>
              <p>- {slide.contents.author}</p>
            </Card>
          )}
          {slide.type === "face-tattoo" && (
            <Card className="scrolly-card face-tattoo">
              <h2>{slide.contents.title}</h2>
              {slide.contents.p.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Card>
          )}
          {slide.type === null ? null : null}
        </CardContainer>
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
    >
      {slides.map((slide) => (
        <Step
          className="scrolly-step"
          key={slide.id + "-" + slide.chapter}
          data={slide.id}
        >
          {slideSwitch(slide)}
        </Step>
      ))}
    </Scrollama>
  );
};

export default Scrolly;

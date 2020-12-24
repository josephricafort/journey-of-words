import React from "react";
import styled from "styled-components";
import { Scrollama, Step } from "react-scrollama";

import { useStore } from "../../../store/store";
import {
  SET_CURRENTSLIDEDATA,
  SET_CURRENTSTEPINDEX,
} from "../../../utils/constants";
import DistributionChart from "./DistributionChart/DistributionChart";
import WordsChart from "./WordsChart";

const CardWrapper = styled.div`
  display: block;
  padding: 0 20px;
  height: 100vh;
  margin: 30vh 0;
`;

const Card = styled.div`
  position: relative;
  top: 50%;
  display: block;
  background-color: ${({ theme, type }) =>
    (type === "intro" && theme.backgroundColor) ||
    (type === "quote" && theme.fill1) ||
    theme.white};
  border: 1px solid ${({ theme, type }) =>
    (type === "intro" && "none") ||
    (type === "quote" && theme.stroke1) ||
    theme.white};
  opacity: 0.95;
  max-width: 500px;
  margin: 20px auto;
  min-height: 200px;
  padding: 20px 40px;

  p {
    color: ${(props) => props.theme.black}
    opacity: 1;
    text-align: left;
    &.chapter-roman-numeral {
      text-align: center;
      text-transform: uppercase;
    }
  }

  h2 {
    color: ${(props) => props.theme.black}
    text-align: center;
  }

  @media (${(props) => props.theme.breakpointSmall}) {
    margin: 20px auto;
    padding: 30px;
    padding-top: 5px;
  }
`;

const CardChart = styled(Card)`
  position: relative;
  max-width: 800px;
  top: 0%;
`;

const Scrolly = (chaptersconfig) => {
  const { slides } = chaptersconfig;
  const dispatch = useStore()[1];

  function slideSwitch(slide) {
    return (
      <CardWrapper className="scrolly-card-wrapper">
        {slide.type === "intro" && (
          <Card className="scrolly-card intro" {...slide}>
            <p className="chapter-roman-numeral">
              {slide.contents.chapterLabel}
            </p>
            <h1 className="chapter-title">{slide.contents.title}</h1>
          </Card>
        )}
        {slide.type === "quote" && (
          <Card className="scrolly-card quote" {...slide}>
            <h3>"{slide.contents.quote.an}"</h3>
            <p>"{slide.contents.quote.en}"</p>
            <p>{slide.contents.author}</p>
          </Card>
        )}
        {slide.type === "face-tattoo" && (
          <Card className="scrolly-card face-tattoo">
            <h3>{slide.contents.title}</h3>
            {slide.contents.p.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Card>
        )}
        {slide.type === "distribution-chart" && (
          <CardChart className="scrolly-card distribution-chart">
            {slide.contents.title && <h3>{slide.contents.title}</h3>}
            {slide.contents.p.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <DistributionChart slideData={slide.data} slideId={slide.id} />
          </CardChart>
        )}
        {slide.type === "words-chart" && (
          <CardChart className="scrolly-card words-chart">
            {slide.contents.title && <h3>{slide.contents.title}</h3>}
            {slide.contents.p.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <WordsChart slideData={slide.data} slideId={slide.id} />
          </CardChart>
        )}
      </CardWrapper>
    );
  }

  const onStepEnter = ({ data: slideData }) => {
    dispatch(SET_CURRENTSLIDEDATA, slideData);
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
          data={slide}
        >
          {slideSwitch(slide)}
        </Step>
      ))}
    </Scrollama>
  );
};

export default Scrolly;

import React from "react";
import styled from "styled-components";
import { Scrollama, Step } from "react-scrollama";

import { useStore } from "../../../store/store";
import {
  SET_CURRENTSTEPINDEX,
  SET_CURRENTCHAPTERTHEME,
  CHAPTER_NAMES,
} from "../../../utils/constants";
import DistributionChart from "./DistributionChart";
import WordsChart from "./WordsChart";

const CardWrapper = styled.div`
  padding: 0 20px;
  height: 100vh;
`;

const Card = styled.div`
  position: relative;
  display: block;
  background-color: ${(props) =>
    (props.type === "intro" && "none") ||
    (props.type === "quote" && props.theme.fill2) ||
    props.theme.white};
  border: 1px solid ${(props) =>
    (props.type === "intro" && "none") ||
    (props.type === "quote" && props.theme.fill5) ||
    props.theme.white};
  opacity: 0.85;
  max-width: 800px;
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
    padding: 5px 20px;
  }
`;

const CardChart = styled(Card)`
  max-width: ${(props) => props.theme.medium};
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
            <h2 className="chapter-title">{slide.contents.title}</h2>
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
          <Card className="scrolly-card distribution-chart">
            {slide.contents.title && <h3>{slide.contents.title}</h3>}
            {slide.contents.p.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <DistributionChart {...slide.data} />
          </Card>
        )}
        {slide.type === "words-chart" && (
          <Card className="scrolly-card words-chart">
            {slide.contents.title && <h3>{slide.contents.title}</h3>}
            {slide.contents.p.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <WordsChart slideData={slide.data} />
          </Card>
        )}
        {slide.type === null ? null : null}
      </CardWrapper>
    );
  }

  const onStepEnter = ({ data }) => {
    const currentChapterTheme = (data) => {
      const chapterIndex = data.toString().split(".")[0];
      return (
        (chapterIndex === "0" && CHAPTER_NAMES[0]) ||
        (chapterIndex === "1" && CHAPTER_NAMES[1]) ||
        (chapterIndex === "2" && CHAPTER_NAMES[2]) ||
        (chapterIndex === "3" && CHAPTER_NAMES[3]) ||
        (chapterIndex === "4" && CHAPTER_NAMES[4])
      );
    };
    dispatch(SET_CURRENTSTEPINDEX, data);
    dispatch(SET_CURRENTCHAPTERTHEME, currentChapterTheme(data));
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

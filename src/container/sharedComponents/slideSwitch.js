import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import MarkdownHTML from "react-markdown/with-html";

import DistributionChart from "../ChaptersContainer/Scrolly/DistributionChart/DistributionChart";
// import WordsChart from "../ChaptersContainer/Scrolly/WordsChart";
import { Word } from "./styledElements";
import { CHAPTER_NAMES } from "../../utils/constants";

const WordsChart = lazy(() =>
  import("../ChaptersContainer/Scrolly/WordsChart")
);

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 0 20px;
  min-height: 150vh;
  text-align: center;
  border: 3px solid ${({ theme }) => theme.stroke2}; // to remove before pub
  pointer-events: none;

  @media (${({ theme }) => theme.breakpointSmall}) {
    padding: 0;
  }
`;

const Card = styled.div`
  position: relative;
  margin: auto;
  background-color: ${({ theme, type }) =>
    (type === "quote" && theme.fill1) || theme.white};
  border: 1px solid ${({ theme, type }) =>
    (type === "intro" && "none") ||
    (type === "quote" && theme.stroke1) ||
    theme.white};
  opacity: 0.95;
  max-width: 500px;
  padding: 10px;
  pointer-events: auto;

  p {
    color: ${({ theme }) => theme.black}
    opacity: 1;
    text-align: left;
    &.chapter-roman-numeral {
      text-align: center;
      text-transform: uppercase;
    }
  }

  h2 {
    color: ${({ theme }) => theme.black}
    text-align: center;
  }

  h3.card-title.with-icon {
    margin-top: 0;
  }

  @media (${({ theme }) => theme.breakpointSmall}) {
    padding: 20px;
    padding-top: 5px;
  }

  @media (${({ theme }) => theme.breakpointMedium}) {
    margin-left: 20px;
  }
`;

const CardIntro = styled(Card)`
  width: 100vw;
  height: 150vh;
  margin: 0;
  padding: 0;
  max-width: 100%;
  background-color: ${({ theme, chapter }) =>
    (chapter === CHAPTER_NAMES.WORLD && theme.blue2) ||
    (chapter === CHAPTER_NAMES.NATURE && theme.green2) ||
    (chapter === CHAPTER_NAMES.CONVERSION && theme.yellow2) ||
    (chapter === CHAPTER_NAMES.EXTRACTION && theme.red2) ||
    (chapter === CHAPTER_NAMES.FATE && theme.purple2)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
  }

  @media (${({ theme }) => theme.breakpointSmall}) {
    padding: 0;
    padding-top: 5px;
  }
`;

const ContentsWrapper = styled.div``;

const CardChart = styled(Card)`
  max-width: 1000px;
  min-height: 150px;

  @media (${({ theme }) => theme.breakpointMedium}) {
    &.words-chart {
      margin: auto;
    }
  }
`;

const CardKicker = styled(Card)`
  max-width: 500px;
  text-align: left;
`;

// const Word = styled.p`
//   display: inline-block;
//   text-align: left;
//   font-family: ${(props) => props.theme.cursive};
//   font-size: 28px;
//   background-color: ${(props) => props.theme.fill1};
// `;

const LegendContainer = styled.div`
  display: block;
  text-align: left;
  margin-top: 10px;
  padding: 10px 10px 10px 0;
`;

const Legend = styled.div`
  display: inline-block;
  margin-right: 20px;
`;

const Icon = styled.img`
  ${({ iconSize }) =>
    (iconSize === "small" && `height: 50px; width: 50px;`) ||
    (iconSize === " medium" && `height: 70px; width: 70px;`) ||
    (iconSize === "large" && `height: 90px; width: 90px;`) ||
    `height: 70px; width: 70px;`}
`;

const Bullet = ({ value }) => (
  <svg height={10} width={10}>
    <Circle cx={5} cy={5} r={5} value={value}></Circle>
  </svg>
);

const Circle = styled.circle`
  fill: ${({ theme, value }) =>
    (value && value === "?" && theme.fill0) ||
    (value === 1 && theme.fill1) ||
    (value === 2 && theme.fill2) ||
    (value === 3 && theme.fill3) ||
    (value === 4 && theme.fill4)};
`;

function slideSwitch(slide) {
  const markDownProps = (desc) => {
    return {
      source: desc,
      skipHtml: false,
      allowDangerousHtml: true,
      unwrapDisallowed: true,
      renderer: { Paragraph: "span" },
    };
  };

  return (
    <CardWrapper className="scrolly-card-wrapper" type={slide.type}>
      {slide.type === "intro" && (
        <CardIntro className="scrolly-card intro" chapter={slide.chapter}>
          <ContentsWrapper className="contents-wrapper">
            <p className="chapter-roman-numeral">
              {slide.contents.chapterLabel}
            </p>
            <h1 className="chapter-title with-icon">{slide.contents.title}</h1>
            {slide.contents.byline && (
              <p className="chapter-byline">{slide.contents.byline}</p>
            )}
          </ContentsWrapper>
        </CardIntro>
      )}
      {slide.type === "quote" && (
        <Card className="scrolly-card quote" {...slide}>
          <h3>"{slide.contents.quote.an}"</h3>
          <p>"{slide.contents.quote.en}"</p>
          <p>{slide.contents.author}</p>
        </Card>
      )}
      {slide.type === "kicker" && (
        <CardKicker className="scrolly-card kicker">
          <h3 className="card-title">{slide.contents.title}</h3>
        </CardKicker>
      )}
      {slide.type === "face-tattoo" && (
        <Card className="scrolly-card face-tattoo">
          {slide.contents.icon && (
            <Icon
              className="topic-icon face-tattoo"
              src={require("../../assets/icons/topics/" + slide.contents.icon)}
              iconSize="medium"
            />
          )}
          {slide.contents.title && (
            <h3 className="card-title with-icon">{slide.contents.title}</h3>
          )}
          {slide.contents.p.map(
            (p, i) => p && <MarkdownHTML {...markDownProps(p)} key={i} />
          )}
        </Card>
      )}
      {slide.type === "word-story" && (
        <Card className="scrolly-card word-story">
          <Word>
            {slide.contents.wordAn} ({slide.contents.wordEn})
          </Word>
          {slide.contents.story && <p>{slide.contents.story}</p>}
        </Card>
      )}
      {slide.type === "distribution-chart" && (
        <CardChart className="scrolly-card distribution-chart">
          {slide.contents.icon && (
            <Icon
              className="topic-icon distribution-chart"
              src={require("../../assets/icons/topics/" + slide.contents.icon)}
              iconSize="small"
            />
          )}
          {slide.contents.title && (
            <h3 className="card-title with-icon">{slide.contents.title}</h3>
          )}
          {slide.contents.p.map(
            (p, i) => p && <MarkdownHTML {...markDownProps(p)} key={i} />
          )}
          <DistributionChart slideData={slide.data} slideId={slide.id} />
          <LegendContainer className="variable-legends">
            <p>Legend: </p>
            {slide.data.varLegend.map((v) => (
              <Legend key={v.value}>
                <Bullet value={v.value} /> {v.description}
              </Legend>
            ))}
          </LegendContainer>
        </CardChart>
      )}
      {slide.type === "words-chart" && (
        <CardChart className="scrolly-card words-chart">
          {slide.contents.title && (
            <h3 className="card-title">{slide.contents.title}</h3>
          )}
          {slide.contents.p.map(
            (p, i) => p && <MarkdownHTML {...markDownProps(p)} key={i} />
          )}
          <Suspense fallback={<div>Loading words chart...</div>}>
            <WordsChart slideData={slide.data} slideId={slide.id} />
          </Suspense>
        </CardChart>
      )}
    </CardWrapper>
  );
}

export default slideSwitch;

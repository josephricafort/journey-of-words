import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import MarkdownHTML from "react-markdown/with-html";

// import DistributionChart from "../ChaptersContainer/Scrolly/DistributionChart/DistributionChart";
// import WordsChart from "../ChaptersContainer/Scrolly/WordsChart";
import { Word } from "./styledElements";
import { CHAPTER_NAMES } from "../../utils/constants";
import colorScaleSel from "./colorScaleSel";

const WordsChart = lazy(() =>
  import("../ChaptersContainer/Scrolly/WordsChart")
);

const DistributionChart = lazy(() =>
  import("../ChaptersContainer/Scrolly/DistributionChart/DistributionChart")
);

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 0 20px;
  min-height: 150vh;
  text-align: center;
  // border: 3px solid ${({ theme }) => theme.stroke2}; // to remove before pub
  pointer-events: none;
  max-width: ${(theme) => theme.wide}px;

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

  @media (${({ theme }) => theme.breakpointSmall}) {
    padding: 20px;
    padding-top: 5px;
  }

  @media (${({ theme }) => theme.breakpointLarge}) {
    margin-left: 20px;
  }
`;

const CardIntro = styled(Card)`
  width: 100vw;
  height: 150vh;
  margin: 0;
  padding: 20px;
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
  opacity: 1;

  p {
    text-align: center;
  }

  @media (${({ theme }) => theme.breakpointMedium}) {
    padding: 0;
    padding-top: 5px;
  }

  @media (${({ theme }) => theme.breakpointLarge}) {
    margin-left: auto;
  }
`;

const CardQuote = styled(CardIntro)`
  h3,
  p {
    max-width: 500px;
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
  margin-bottom: -30px;
`;

const IconGroup = styled.div``;

const Bullet = ({ value, nValues }) => (
  <svg height={10} width={10}>
    <Circle cx={5} cy={5} r={5} value={value} nValues={nValues}></Circle>
  </svg>
);

const Circle = styled.circle`
  fill: ${({ theme, value, nValues }) => colorScaleSel(nValues, theme)[value]};
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
      {slide.type === "cover" && (
        <CardIntro className="scrolly-card cover" chapter={slide.chapter}>
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
        <CardQuote className="scrolly-card quote" {...slide}>
          <ContentsWrapper className="contents-wrapper">
            <h3>"{slide.contents.quote.an}"</h3>
            <p>"{slide.contents.quote.en}"</p>
            <p>{slide.contents.author}</p>
          </ContentsWrapper>
        </CardQuote>
      )}
      {slide.type === "intro" && (
        <Card className="scrolly-card intro">
          {slide.contents.title && (
            <h3 className="card-title">{slide.contents.title}</h3>
          )}
          {slide.contents.p.map(
            (p, i) => p && <MarkdownHTML {...markDownProps(p)} key={i} />
          )}
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
          {slide.contents.iconItems && (
            <IconGroup>
              {slide.contents.iconItems.map((icon, i) => (
                <Icon
                  className="topic-icon face-tattoo"
                  src={require("../../assets/icons/topics/" + icon)}
                  iconSize="small"
                  key={"icon-" + i}
                />
              ))}
            </IconGroup>
          )}
          {slide.contents.title && (
            <h3 className="card-title">{slide.contents.title}</h3>
          )}
          {slide.contents.p.map(
            (p, i) => p && <MarkdownHTML {...markDownProps(p)} key={i} />
          )}
        </Card>
      )}
      {slide.type === "word-story" && (
        <Card className="scrolly-card word-story">
          <Word>
            {slide.contents.wordAn} ({slide.contents.wordToDisplay})
          </Word>
          {/* {slide.contents.story && <p>{slide.contents.story}</p>} */}
          {slide.contents.p.map(
            (p, i) => p && <MarkdownHTML {...markDownProps(p)} key={i} />
          )}
        </Card>
      )}
      {slide.type === "distribution-chart" && (
        <Card className="scrolly-card distribution-chart">
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
          <Suspense fallback={<div>Fetching distribution chart...</div>}>
            <DistributionChart slideData={slide.data} slideId={slide.id} />
          </Suspense>
          <LegendContainer className="variable-legends">
            <p>{slide.data.title}</p>
            {slide.data.varLegend.map((v) => (
              <Legend key={v.value}>
                <Bullet value={v.value} nValues={slide.data.varLegend.length} />
                {v.description}
              </Legend>
            ))}
          </LegendContainer>
        </Card>
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
      {slide.type === "outro" && (
        <Card className="scrolly-card extro">
          {slide.contents.title && (
            <h3 className="card-title">{slide.contents.title}</h3>
          )}
          {slide.contents.p.map(
            (p, i) => p && <MarkdownHTML {...markDownProps(p)} key={i} />
          )}
        </Card>
      )}
    </CardWrapper>
  );
}

export default slideSwitch;

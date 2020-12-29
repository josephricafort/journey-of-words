import React from "react";
import styled from "styled-components";

import DistributionChart from "../../ChaptersContainer/Scrolly/DistributionChart/DistributionChart";
import WordsChart from "../../ChaptersContainer/Scrolly/WordsChart";

const CardWrapper = styled.div`
  display: block;
  padding: 0 20px;
  min-height: 100vh;
  text-align: center;
  border: 3px solid ${({ theme }) => theme.stroke2}; // to remove before pub
`;

const Card = styled.div`
position: relative;
margin: 0 auto;
margin-top: 50vh;
transform: translateY(-50%);
background-color: ${({ theme, type }) =>
  (type === "quote" && theme.fill1) || theme.white};
border: 1px solid ${({ theme, type }) =>
  (type === "intro" && "none") ||
  (type === "quote" && theme.stroke1) ||
  theme.white};
opacity: 0.95;
max-width: 500px;
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
  padding: 30px;
  padding-top: 5px;
}
`;

const CardIntro = styled(Card)`
  max-width: 500px;
  vertical-align: middle;
  background-color: ${({ theme }) => theme.backgroundColor};

  p {
    text-align: center;
  }
`;

const CardChart = styled(Card)`
  max-width: 800px;
`;

const CardKicker = styled(Card)`
  max-width: 500px;
  margin-left: 20px;
  text-align: left;
`;

const Word = styled.p`
  display: inline-block;
  text-align: left;
  font-family: ${(props) => props.theme.cursive};
  font-size: 28px;
  background-color: ${(props) => props.theme.fill1};
`;

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

const Bullet = ({ value }) => (
  <svg height={10} width={10}>
    <Circle cx={5} cy={5} r={5} value={value}></Circle>
  </svg>
);

const Circle = styled.circle`
  fill: ${({ theme, value }) =>
    (value && value === 0 && theme.fill0) ||
    (value === 1 && theme.fill1) ||
    (value === 2 && theme.fill2) ||
    (value === 3 && theme.fill3) ||
    (value === 4 && theme.fill4)};
`;

function slideSwitch(slide) {
  return (
    <CardWrapper className="scrolly-card-wrapper" type={slide.type}>
      {slide.type === "intro" && (
        <CardIntro className="scrolly-card intro" {...slide}>
          <p className="chapter-roman-numeral">{slide.contents.chapterLabel}</p>
          <h1 className="chapter-title">{slide.contents.title}</h1>
          {slide.contents.byline && (
            <p className="chapter-byline">{slide.contents.byline}</p>
          )}
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
          <h3>{slide.contents.title}</h3>
        </CardKicker>
      )}
      {slide.type === "face-tattoo" && (
        <Card className="scrolly-card face-tattoo">
          <h3>{slide.contents.title}</h3>
          {slide.contents.p.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
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
          {slide.contents.title && <h3>{slide.contents.title}</h3>}
          {slide.contents.p.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
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

export default slideSwitch;

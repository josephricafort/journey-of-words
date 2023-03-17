import React from "react";
import styled from "styled-components";
import MarkdownHTML from "react-markdown/with-html";

import { Word } from "./styledElements";
import { CHAPTER_NAMES } from "../../utils/constants";

import colorScaleSel from "./colorScaleSel";

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 0 20px;
  min-height: 150vh;
  text-align: center;
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
    margin-left: 20px;

    ${({ alignment = "center" }) => `
      ${
        alignment === "center"
          ? "margin: 0 auto;"
          : alignment === "left"
          ? "margin: 0 auto 0 50px;"
          : alignment === "right"
          ? "margin: 0 50px 0 auto;"
          : "auto;"
      }
    `}
  }
`;

const CardMainIntro = styled(Card)`
  background-color: transparent;
  color: #fff;
  border: none;
  max-width: 800px;
  text-shadow: 1px 1px 5px #000;

  h2 {
    font-size: 36px;
  }

  p {
    text-align: center;
    line-height: 1.3em;
  }

  @media (${({ theme }) => theme.breakpointMedium}) {
    h2 {
      font-size: 64px;
    }

    p {
      text-align: center;
      font-size: 22px;
    }
  }
`;

const CardKicker = styled(Card)`
  max-width: 500px;
  text-align: left;
  background-color: transparent;
  border: none;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 5px #000;

  h3 {
    font-size: 24px;
    line-height: 1.35em;
  }

  @media (${({ theme }) => theme.breakpointMedium}) {
    h3 {
      font-size: 36px;
    }
  }

  figure {
    img {
      &.face-tattoo-img {
        height: 300px;
      }
    }
  }

  figure {
    img {
      &.face-tattoo-img {
        height: 300px;
      }
    }
  }
`;

const CardIntro = styled(Card)`
  width: 100vw;
  height: 150vh;
  margin: 0;
  padding: 20px;
  max-width: 100%;
  background-color: ${({ theme, chapter }) =>
    (chapter === CHAPTER_NAMES.WORLD && "transparent") ||
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
            {slide.contents.p.map(
              (p, i) => p && <MarkdownHTML {...markDownProps(p)} key={i} />
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
      {slide.type === "main-intro" && (
        <CardMainIntro className="scrolly-card intro">
          {slide.contents.title && (
            <h2 className="card-title">{slide.contents.title}</h2>
          )}
          {slide.contents.p.map(
            (p, i) => p && <MarkdownHTML {...markDownProps(p)} key={i} />
          )}
        </CardMainIntro>
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
          {slide.contents.img && (
            <figure>
              <img
                className="face-tattoo-img"
                src={require("../../assets/images/" + slide.contents.img.src)}
              />
              <figcaption>
                <MarkdownHTML {...markDownProps(slide.contents.img.caption)} />
              </figcaption>
            </figure>
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
      {slide.type === "boundaries-chart" && (
        <Card className="scrolly-card boundaries-chart">
          {slide.contents.title && (
            <h3 className="card-title">{slide.contents.title}</h3>
          )}
          {slide.contents.p.map(
            (p, i) => p && <MarkdownHTML {...markDownProps(p)} key={i} />
          )}
        </Card>
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

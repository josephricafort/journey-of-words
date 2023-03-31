import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 50px;
`;

const DistInfoContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 50%;
  transform: translate(50%, 0);
  display: flex;
`;

const InfoMadagascar = styled.div`
  margin-right: 50px;
  text-align: right;
`;

const InfoRapaNui = styled.div`
  margin-left: 50px;
  text-align: left;
`;

const DistCount = styled.h4`
  font-size: 36px;
  margin: 0;
  margin-top: 20px;
  font-weight: 500;
`;

const TimeInfoContainer = styled.div`
  position: absolute;
  top: 0;
  right: 50px;

  p {
    font-size: 28px;
  }
`;

const InfoBar = (props) => {
  const { year, distToMadagascar, distToRapanui } =
    props.currentChapter.customData;

  return (
    <Container className="info-bar">
      <TitleContainer>
        <p>
          Across Half The World:
          <br />
          Austronesian Migration
        </p>
      </TitleContainer>
      <DistInfoContainer>
        <InfoMadagascar>
          <DistCount>
            <CountUp
              start={distToMadagascar.start}
              end={distToMadagascar.end}
              delay={0}
              duration={3}
              suffix="km"
            >
              {({ countUpRef }) => {
                return <span ref={countUpRef} />;
              }}
            </CountUp>
          </DistCount>
          <p>from Taiwan to Madagascar</p>
        </InfoMadagascar>
        <InfoRapaNui>
          <DistCount>
            <CountUp
              start={distToRapanui.start}
              end={distToRapanui.end}
              delay={0}
              duration={3}
              suffix="km"
            >
              {({ countUpRef }) => {
                return <span ref={countUpRef} />;
              }}
            </CountUp>
          </DistCount>
          <p>from Taiwan to Rapa Nui (Easter Islands)</p>
        </InfoRapaNui>
      </DistInfoContainer>
      <TimeInfoContainer>
        <p>{year}</p>
      </TimeInfoContainer>
    </Container>
  );
};

export default InfoBar;

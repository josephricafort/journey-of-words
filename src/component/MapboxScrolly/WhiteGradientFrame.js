import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;

const TopGradient = styled.div`
  width: 100%;
  height: 300px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const LeftGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const RightGradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    -90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const BottomGradient = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const WhiteGradientFrame = () => {
  return (
    <Container className="white-gradient-frame">
      <TopGradient />
      <LeftGradient />
      <RightGradient />
      <BottomGradient />
    </Container>
  );
};

export default WhiteGradientFrame;

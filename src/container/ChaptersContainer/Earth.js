import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  height: 100vh;
  border: 1px solid brown;
  text-align: center;
  border: none;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const r = 400;

const Earth = () => {
  return (
    <Container className="earth-container">
      <Wrapper className="earth-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width={`${r * 2}px`}
          height={`${r * 2}px`}
          viewBox={`0 0 ${r * 2} ${r * 2}`}
          enable-background={`new 0 0 ${r * 2} ${r * 2}`}
          preserveAspectRatio="xMinYMin meet"
        >
          <circle cx={r} cy={r} r={r} fill="blue" />
        </svg>
      </Wrapper>
    </Container>
  );
};

export default Earth;

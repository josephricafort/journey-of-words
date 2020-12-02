import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  text-align: center;
  border: none;
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0%);
  max-width: 700px;
`;

const Earth = () => {
  const r = 100;

  return (
    <Container className="earth-container">
      <Wrapper className="earth-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox={`0 0 ${r * 2} ${r * 2}`}
          enableBackground={`new 0 0 ${r * 2} ${r * 2}`}
          preserveAspectRatio="xMidYMin meet"
        >
          <circle cx={r} cy={r} r={r} fill="blue" />
        </svg>
      </Wrapper>
    </Container>
  );
};

export default Earth;

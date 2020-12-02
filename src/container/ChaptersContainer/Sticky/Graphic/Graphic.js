import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  width: calc(100% - 40px);
  min-height: 50vh;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: orange;
  margin: 0 auto;
  max-width: 700px;
`;

const Graphic = () => {
  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  const dim = {
    width: 75 - margin.left - margin.right,
    height: 75 - margin.top - margin.bottom,
  };

  return (
    <Container className="graphic-container">
      <Wrapper className="graphic-wrapper"></Wrapper>
    </Container>
  );
};

export default Graphic;

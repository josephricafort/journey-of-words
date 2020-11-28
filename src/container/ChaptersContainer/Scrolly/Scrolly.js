import React from "react";
import styled from "styled-components";
import { Scrollama, Step } from "react-scrollama";

const CardContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Card = styled.div`
  position: relative;
  display: block;
  background-color: pink;
  max-width: 700px;
  margin: auto;
  text-align: center;
  margin: 20px auto;
  min-height: 200px;
  padding: 10px 20px;

  @media (max-width: 800px) {
    margin: 20px 20px;
  }
`;

const Scrolly = () => {
  return (
    <Scrollama className="scrolly-scrollama">
      <Step className="scrolly-step">
        <CardContainer className="scrolly-card-container">
          <Card className="scrolly-card">
            <h3>Card title here</h3>
            <p>
              Card descriptions here which talks what the title is all about
              will be placed later here.
            </p>
          </Card>
        </CardContainer>
      </Step>
      <Step>
        <CardContainer>
          <Card>
            <h3>Card title here</h3>
            <p>
              Card descriptions here which talks what the title is all about
              will be placed later here.
            </p>
          </Card>
        </CardContainer>
      </Step>
      <Step>
        <CardContainer>
          <Card>
            <h3>Card title here</h3>
            <p>
              Card descriptions here which talks what the title is all about
              will be placed later here.
            </p>
          </Card>
        </CardContainer>
      </Step>
    </Scrollama>
  );
};

export default Scrolly;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import CircleArray from "./CircleArray";
import DotPlot from "./DotPlot";
import { dummyDistributionData } from "../dummyDistributionData";
import { DB_GITHUB_API_PULOTU } from "../../../../utils/constants";
import { removeStringSpaces } from "../../../../utils/utils";

const Container = styled.div`
  position: relative;
  text-align: left;

  div {
    h5 {
      margin-bottom: 8px;
    }
  }
`;

const DistributionChart = ({ slideData, slideId }) => {
  const { varItems } = slideData;

  const [distributionData, setDistributionData] = useState([[], [], []]);

  const fetchDistributionData = () => {
    axios
      .all(
        varItems.map((v) =>
          axios.get(
            DB_GITHUB_API_PULOTU +
              "/" +
              removeStringSpaces(v.variable) +
              ".json"
          )
        )
      )
      .then((responseArray) =>
        setDistributionData(responseArray.map((res) => JSON.parse(res.data)))
      )
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(fetchDistributionData, []);

  const variableData = (vIndex) => distributionData[vIndex];

  return (
    <Container className="distrib-chart-container">
      {varItems.map((v, vIndex) => (
        <div className="dotplot-wrapper" key={vIndex}>
          <h5>{v.varDefinition}</h5>
          <DotPlot
            variableData={variableData(vIndex)}
            variable={v.variable}
          ></DotPlot>
        </div>
      ))}
    </Container>
  );
};

export default DistributionChart;

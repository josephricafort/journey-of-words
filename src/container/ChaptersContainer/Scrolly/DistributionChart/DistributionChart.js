import React, { useState, useEffect, useContext, lazy, Suspense } from "react";
import styled from "styled-components";
import axios from "axios";

// import DotPlot from "./DotPlot";
import {
  DB_GITHUB_API_PULOTU,
  SET_DISTRIBUTIONDATA,
} from "../../../../utils/constants";
import { removeStringSpaces } from "../../../../utils/utils";
import { Context } from "../../../../storeContext/Store";

const Container = styled.div`
  position: relative;
  text-align: left;

  div {
    h5 {
      margin-bottom: 8px;
    }
  }
`;

// const DotPlot = lazy(() => import("./DotPlot"));

const DistributionChart = ({ slideData, slideId }) => {
  const { varItems } = slideData;

  const [distributionData, setDistributionData] = useState([[], [], []]);
  const [state, dispatch] = useContext(Context);
  const { currentStepIndex } = state;

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
      .then((responseArray) => {
        setDistributionData(responseArray.map((res) => JSON.parse(res.data)));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(fetchDistributionData, [currentStepIndex]);

  const dispatchDistributionData = () => {
    currentStepIndex === slideId &&
      dispatch({
        type: SET_DISTRIBUTIONDATA,
        payload: distributionData,
      });
  };
  useEffect(dispatchDistributionData, [distributionData]);

  // const variableData = (vIndex) => distributionData[vIndex];

  return (
    <Container className="distrib-chart-container">
      {/* {varItems.map((v, vIndex) => (
        <div className="dotplot-wrapper" key={vIndex}>
          <h5>{v.varDefinition}</h5>
          <Suspense fallback={<div>Generating data...</div>}>
            {
              <DotPlot
                variableData={variableData(vIndex)}
                variable={v.variable}
              ></DotPlot>
            }
          </Suspense>
        </div>
      ))} */}
    </Container>
  );
};

export default DistributionChart;

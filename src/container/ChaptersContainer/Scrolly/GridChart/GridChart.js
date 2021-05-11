import React from "react";
import styled from "styled-components";

// import { gridData } from "./dummydata/gridData.js";
import PickaxeIcon from "./icons/pickaxe.png";

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
`;

const IconContainer = styled.div`
  position: relative;
`;

const ImgPickaxe = styled.img`
  display: ${({ isShown }) => (isShown ? `relative` : `none`)};
  position: absolute;
  height: ${({ radius }) => radius}px;
  width: ${({ radius }) => radius}px;
`;

const ImgColIcons = styled.img`
  height: 30px;
  width: auto;
`;

const GridChart = ({ slideData }) => {
  const { gridData } = slideData;
  const maxRadius = 25;

  const colNames = Object.keys(gridData[0]);
  const colShort = ["", "uk", "nl", "fr", "es_us", "au", "jp", "uk_fr"];

  const Icon = ({ value }) => {
    return (
      <IconContainer>
        <ImgPickaxe
          src={PickaxeIcon}
          alt="pickaxe icon"
          isShown={value >= 2}
          radius={maxRadius}
        />
        <svg
          width={maxRadius}
          height={maxRadius}
          viewBox={`0 0 ${2 * maxRadius} ${2 * maxRadius}`}
        >
          <circle
            cx={maxRadius}
            cy={maxRadius}
            r={(value * maxRadius) / 2}
            fill="#F55D5D"
          />
        </svg>
      </IconContainer>
    );
  };

  return (
    <Container className="container">
      <Table className="grid-table">
        <tr>
          {colShort.map((d, dIndex) => {
            return (
              (dIndex === 0 && <th></th>) || (
                <th>
                  <ImgColIcons src={require(`./icons/${d}.png`)} alt={d} />
                </th>
              )
            );
          })}
        </tr>
        <tr>
          {colNames.map((d, dIndex) => {
            return (
              <th className="grid-header" key={"colnames-" + dIndex}>
                {d}
              </th>
            );
          })}
        </tr>
        {gridData.map((d, dIndex) => {
          return (
            <tr>
              {Object.values(d).map((e, eIndex) => {
                return (
                  <th className="grid-data" key={dIndex + "-" + eIndex}>
                    {typeof e !== "string" ? <Icon value={e} /> : e}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </Table>
    </Container>
  );
};

export default GridChart;

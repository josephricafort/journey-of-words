import React from "react";

const VoronoiHover = (attr) => {
  const { height, width } = attr;

  return (
    <g
      style={{
        border: "2px solid gold",
        height: height,
        width: width,
      }}
    ></g>
  );
};

export default VoronoiHover;

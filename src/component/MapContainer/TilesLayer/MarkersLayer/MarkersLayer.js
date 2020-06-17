import React from "react";

const MarkersLayer = ({ data }) => {
  return (
    <g>
      {data.map((word) => (
        <circle cx={word.latitude} cy={word.longitude} r="5" />
      ))}
    </g>
  );
};

export default MarkersLayer;

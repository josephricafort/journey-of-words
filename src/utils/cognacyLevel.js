import * as d3 from "d3";
// color palette

export const cognacyLevel = (data, cognacy) => {
  if (cognacy) {
    const cognacyColors = ["#66bb6a", "#ffa726", "#e91e63"];
    const cognacyArr = data.map((word) => word.cognacy1);
    const maxCognacy = d3.max(cognacyArr);
    const minCognacy = d3.min(cognacyArr);
    const midCognacy = (maxCognacy + minCognacy) / 2;
    const colorScale = d3
      .scaleLinear()
      .domain([minCognacy, midCognacy, maxCognacy])
      .range(cognacyColors);

    return colorScale(cognacy);
  } else {
    return "#aaaaaa";
  }
};

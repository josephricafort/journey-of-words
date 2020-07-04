import * as d3 from "d3";

// replace spaces with percentage sign
export const urlFriendly = function (word) {
  return word.toLowerCase().replace(",", "").replace(/ /g, "_");
};

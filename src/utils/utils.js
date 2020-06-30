// replace spaces with percentage sign
export const urlFriendly = function (word) {
  return word.toLowerCase().replace(",", "").replace(/ /g, "_");
};

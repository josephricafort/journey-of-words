// replace spaces with percentage sign
const urlFriendly = function (word) {
  return word.toLowerCase().replace(",", "").replace(/ /g, "_");
};

export { urlFriendly };

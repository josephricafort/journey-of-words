// replace spaces with percentage sign
export const urlFriendly = function (word) {
  return word.toLowerCase().replace(",", "").replace(/ /g, "_");
};

// calculate distance between 2 coordinates
export function calcDistance(lat1, lon1, lat2, lon2) {
  function toRad(Value) {
    return (Value * Math.PI) / 180;
  }

  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const latitude1 = toRad(lat1);
  const latitude2 = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) *
      Math.sin(dLon / 2) *
      Math.cos(latitude1) *
      Math.cos(latitude2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
}

// check if undefined
export function isUndefined(v) {
  return typeof v === "undefined";
}

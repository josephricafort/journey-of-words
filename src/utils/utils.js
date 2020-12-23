import * as d3 from "d3";
import { COORDS_HOMELAND } from "./constants";

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

// unabreviated subgroup name
export function fullSubgroupName(subgroupName) {
  return (
    (subgroupName === "CMP" && "Central Malayo-Polynesian") ||
    (subgroupName === "Formosan" && "Formosan") ||
    (subgroupName === "OC" && "Oceanic") ||
    (subgroupName === "SHWNG" && "South Halmahera and West New Guinea") ||
    (subgroupName === "WMP" && "Western Malayo Polynesia") ||
    null
  );
}

// Occlusion and intersect function used to avoid overlapping svg elements
export function occlusion(svg) {
  const texts = [];
  svg.selectAll("text").each((d, i, e) => {
    const bbox = e[i].getBoundingClientRect();
    texts.push({
      priority: +e[i].getAttribute("data-priority"),
      node: e[i],
      text: d,
      bbox,
      x: bbox.x,
      y: bbox.y,
      width: bbox.width,
      height: bbox.height,
    });
  });
  texts.sort((a, b) => d3.descending(a.priority, b.priority));

  const filled = [];
  texts.forEach((d) => {
    const isOccluded = filled.some((e) => intersect(d, e));
    d3.select(d.node).classed("occluded", isOccluded);
    if (!isOccluded) filled.push(d);
  });

  return filled;
}

export function intersect(a, b) {
  return !(
    a.x + a.width < b.x ||
    b.x + b.width < a.x ||
    a.y + a.height < b.y ||
    b.y + b.height < a.y
  );
}

// Calculating the distance from homeland in Taiwan
export function distFromHomeland(latTo, longTo) {
  return calcDistance(COORDS_HOMELAND.LAT, COORDS_HOMELAND.LONG, latTo, longTo);
}

export function removeStringSpaces(str) {
  return str.split(" ").join("");
}

// Check if valid
export function isValid(val) {
  return !isNaN(val) || !isUndefined(val);
}

export function isUndefined(v) {
  return typeof v === "undefined";
}

// Reducers
export function meanReducer(mean, val) {
  return isValid(val) ? (mean + val) / 2 : mean;
}

export function minReducer(min, val) {
  return isValid(val) ? Math.min(min, val) : min;
}

export function maxReducer(max, val) {
  return isValid(val) ? Math.max(max, val) : max;
}

export function countReducer(count, item) {
  return item ? count + 1 : count;
}

export function stringReducer(strList, str) {
  return str || str !== "" ? strList.concat(", ").concat(str) : strList;
}

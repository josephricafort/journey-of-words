export const SET_CURRENTSLIDEDATA = "SET_CURRENTSLIDEDATA";

// mapbox
export const MAPBOX_USERNAME = "josephricafort";
export const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1Ijoiam9zZXBocmljYWZvcnQiLCJhIjoiY2pueTd4d3lzMDB1ZzNxbGhxZnpyOHZ4eSJ9.SVeNEBhsMbzpUUt9tgbNSg";
export const MAPBOX_STYLE_URL = "mapbox://styles/" + MAPBOX_USERNAME;

export const mapboxStyles = {
  world: "ckhxlghrg09zp1bqu5s7pt7jl",
  nature: "ckh67moqu0yvl19p3a47tvsqx",
  conversion: "ckhxlnfls0u0k19o002omoe6t",
  extraction: "ckhxlvl2j0yhc19qu9w4yd07p",
  fate: "ckhxm5tkq0yrn19o54k84vf2f",
  exploration: "ckihdysh06grw19k06mn5v8p9",
};

function generateStylePath(id, isDraft) {
  return `https://api.mapbox.com/styles/v1/${MAPBOX_USERNAME}/${id}/${
    isDraft ? `draft` : ``
  }/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}&fresh=true`;
}

export const MAPBOX_STYLE_WORLD = generateStylePath(mapboxStyles.world, true);

export const MAPBOX_ATTRIBUTION =
  "Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>";

export const CHAPTER_NAMES = {
  WORLD: "world",
};

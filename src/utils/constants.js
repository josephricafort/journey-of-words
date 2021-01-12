export const SET_WORDMAIN = "SET_WORDMAIN";
export const SET_WORDSINFO = "SET_WORDSINFO";
export const SET_WORDTRANSLATIONS = "SET_WORDTRANSLATIONS";

export const SET_LANGUAGEINFO = "SET_LANGUAGEINFO";
export const SET_LANGHEIRARCHY = "SET_LANGHEIRARCHY";
export const SET_LANGHEIRWORDS = "SET_LANGHEIRWORDS";

export const SET_TOGGLEZOOM = "SET_TOGGLEZOOM";
export const SET_CURRENTSLIDEDATA = "SET_CURRENTSLIDEDATA";
export const SET_CURRENTSTEPINDEX = "SET_CURRENTSTEPINDEX";
export const SET_CURRENTCHAPTERTHEME = "SET_CURRENTCHAPTERTHEME";

// DATA
export const COORDS_HOMELAND = { LAT: 23.817981, LONG: 120.954427 };
export const COORDS_RAPANUI = { LAT: -27.104055, LONG: -109.228984 };
export const COORDS_MADAGASCAR = { LAT: -22.065304, LONG: 43.185292 };

// exploration - words
export const DB_GITHUB =
  "https://raw.githubusercontent.com/josephricafort/journey-of-words-r-data/master/data/output/json/";
export const DB_GITHUB_WORDS_INFO = DB_GITHUB + "words_info.json";
export const DB_GITHUB_WORDS = DB_GITHUB + "language_words/";
export const DB_GITHUB_WORDS_COUNT_TOP20 = DB_GITHUB + "words_count_top20.json";
export const DB_GITHUB_WORDS_COUNT_TOP20PC =
  DB_GITHUB + "words_count_top20pc.json";
export const DB_GITHUB_COGNATE_SETS_PLUS25 =
  DB_GITHUB + "cognate_sets_plus25.json";

// exploration - languages
export const DB_GITHUB_LANGUAGE_INFO = DB_GITHUB + "language_info.json";
export const DB_GITHUB_LANG_HEIRARCHY_ARR =
  DB_GITHUB + "language_heirarchy_array.json";

// scrolly - words
export const DB_GITHUB_API =
  "https://raw.githubusercontent.com/josephricafort/journey-of-words-r-data/master/api/";
export const DB_GITHUB_API_WORDS = DB_GITHUB_API + "wordsinfodata/";
export const DB_GITHUB_API_LOCATIONS = DB_GITHUB_API + "locationsdata/";
export const DB_GITHUB_API_PERWORDTALLY = DB_GITHUB_API + "dataperwordtally/";
export const DB_GITHUB_API_PULOTU = DB_GITHUB_API + "pulotudata/";

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

const IS_DRAFT = false;
function generateStylePath(id, isDraft) {
  return `https://api.mapbox.com/styles/v1/${MAPBOX_USERNAME}/${id}/${
    isDraft ? `draft` : ``
  }/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}&fresh=true`;
}

export const MAPBOX_STYLE_WORLD = generateStylePath(mapboxStyles.world, true);
export const MAPBOX_STYLE_NATURE = generateStylePath(mapboxStyles.nature, true);
export const MAPBOX_STYLE_CONVERSION = generateStylePath(
  mapboxStyles.conversion,
  true
);
export const MAPBOX_STYLE_EXTRACTION = generateStylePath(
  mapboxStyles.extraction,
  true
);
export const MAPBOX_STYLE_FATE = generateStylePath(mapboxStyles.fate, IS_DRAFT);
export const MAPBOX_STYLE_EXPLORATION = generateStylePath(
  mapboxStyles.exploration,
  true
);
export const MAPBOX_ATTRIBUTION =
  "Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>";

export const CHAPTER_NAMES = {
  WORLD: "world",
  NATURE: "nature",
  CONVERSION: "conversion",
  EXTRACTION: "extraction",
  FATE: "fate",
};

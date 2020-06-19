import React from "react";
import styles from "./TilesLayer.module.scss";

import { TileLayer } from "react-leaflet";
import WordMarkersLayer from "./WordMarkersLayer/WordMarkersLayer";
import CognacyCircles from "./CognacyCircles/CognacyCircles";

const TilesLayer = ({ wordTranslationsData }) => {
  // const CARTODB_ATTRIBUTION =
  //   '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
  // const CARTODB_VOYAGER_NOLABELS =
  //   "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png";
  const CARTODB_DARKMATTER =
    "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png";
  const CARTODB_DM_ATTRIBUTION =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
  // const SAMPLE_GEOJSON =
  //   "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";

  return (
    <div className={styles["tiles-layer"]}>
      <TileLayer
        url={CARTODB_DARKMATTER}
        ext="jpg"
        attribution={CARTODB_DM_ATTRIBUTION}
        zIndex={-100}
      ></TileLayer>
      <CognacyCircles
        wordTranslationsData={wordTranslationsData}
      ></CognacyCircles>
      <WordMarkersLayer
        wordTranslationsData={wordTranslationsData}
      ></WordMarkersLayer>
    </div>
  );
};

export default TilesLayer;

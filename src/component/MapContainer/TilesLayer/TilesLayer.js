import React, { useEffect, useState } from "react";
import styles from "./TilesLayer.module.scss";

import { TileLayer } from "react-leaflet";
import MarkersLayer from "./MarkersLayer/MarkersLayer";
import CognacyCircles from "./CognacyCircles/CognacyCircles";

const TilesLayer = ({ wordTranslationsData }) => {
  const [geojsonData, setGeojsonData] = useState({});
  const CARTODB_ATTRIBUTION =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
  const CARTODB_VOYAGER_NOLABELS =
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png";
  const SAMPLE_GEOJSON =
    "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";

  return (
    <div className={styles["tiles-layer"]}>
      <TileLayer
        url={CARTODB_VOYAGER_NOLABELS}
        ext="jpg"
        attribution={CARTODB_ATTRIBUTION}
        zIndex={-100}
      ></TileLayer>
      <CognacyCircles
        wordTranslationsData={wordTranslationsData}
      ></CognacyCircles>
      <MarkersLayer wordTranslationsData={wordTranslationsData}></MarkersLayer>
    </div>
  );
};

export default TilesLayer;

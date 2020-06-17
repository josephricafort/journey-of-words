import React from "react";
import styles from "./TilesLayer.module.scss";

import { TileLayer } from "react-leaflet";

const TilesLayer = () => {
  const CARTODB_ATTRIBUTION =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
  const CARTODB_VOYAGER_NOLABELS =
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png";

  return (
    <div className={styles["tiles-layer"]}>
      <TileLayer
        url={CARTODB_VOYAGER_NOLABELS}
        ext="jpg"
        attribution={CARTODB_ATTRIBUTION}
        zIndex={-100}
      ></TileLayer>
    </div>
  );
};

export default TilesLayer;

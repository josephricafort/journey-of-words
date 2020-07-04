import React from "react";
import styles from "./TilesLayer.module.scss";

import { TileLayer } from "react-leaflet";
import WordMarkersLayer from "./WordMarkersLayer/WordMarkersLayer";
import CognacyCircles from "./CognacyCircles/CognacyCircles";
import { useStore } from "../../../store/store";
import {
  CARTODB_DARKMATTER,
  CARTODB_DM_ATTRIBUTION,
} from "../../../utils/constants";

const TilesLayer = () => {
  const state = useStore()[0];
  const { wordTranslations } = state;

  return (
    <div className={styles["tiles-layer"]}>
      <TileLayer
        url={CARTODB_DARKMATTER}
        ext="jpg"
        attribution={CARTODB_DM_ATTRIBUTION}
        zIndex={-100}
      ></TileLayer>
      <CognacyCircles wordTranslations={wordTranslations}></CognacyCircles>
      <WordMarkersLayer wordTranslations={wordTranslations}></WordMarkersLayer>
    </div>
  );
};

export default TilesLayer;

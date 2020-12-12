import React from "react";
import styled from "styled-components";

import { TileLayer } from "react-leaflet";
import WordMarkersLayer from "./WordMarkersLayer/WordMarkersLayer";
import CognacyCircles from "./CognacyCircles/CognacyCircles";
import { useStore } from "../../../store/store";
import {
  CARTODB_DARKMATTER,
  CARTODB_DM_ATTRIBUTION,
  MAPBOX_STYLE_DARK_MONOCHROME,
  MAPBOX_ATTRIBUTION,
} from "../../../utils/constants";

const TilesLayerWrapper = styled.div`
  .leaflet-tile-container img {
    width: 256.5px !important;
    height: 256.5px !important;
  }
`;

const TilesLayer = () => {
  const state = useStore()[0];
  const { wordTranslations } = state;

  return (
    <TilesLayerWrapper className="tiles-layer">
      <TileLayer
        url={MAPBOX_STYLE_DARK_MONOCHROME}
        attribution={MAPBOX_ATTRIBUTION}
        ext="jpg"
        zIndex={-100}
      ></TileLayer>
      <CognacyCircles wordTranslations={wordTranslations}></CognacyCircles>
      <WordMarkersLayer wordTranslations={wordTranslations}></WordMarkersLayer>
    </TilesLayerWrapper>
  );
};

export default TilesLayer;

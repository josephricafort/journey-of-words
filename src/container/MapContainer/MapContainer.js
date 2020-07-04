import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

import { Map as LeafletMap, ZoomControl } from "react-leaflet";
import styles from "./MapContainer.module.scss";
import MenuContainer from "./MenuContainer/MenuContainer";
import TilesLayer from "../../component/MapContainer/TilesLayer/TilesLayer";
import { useStore } from "../../store/store";
import {
  DB_GITHUB_WORDS,
  SET_WORDTRANSLATIONS,
  SET_TOGGLEZOOM,
} from "../../utils/constants";
import { urlFriendly } from "../../utils/utils";

require("leaflet/dist/leaflet.css");
require("react-leaflet-markercluster/dist/styles.min.css");

const MapContainer = () => {
  const [state, dispatch] = useStore();
  const [wordMain, setWordMain] = useState("five");
  const [toggleZoom, setToggleZoom] = useState(false);

  const { languageInfo } = state;
  const mapRef = useRef(Map);

  useEffect(() => {
    axios
      .get(DB_GITHUB_WORDS + urlFriendly(wordMain) + ".json")
      .then((response) => {
        const wordsData = response.data;
        dispatch(SET_WORDTRANSLATIONS, { wordsData, languageInfo });
      });
  }, [languageInfo, wordMain, toggleZoom]);

  const handleZoomLevelChanged = () => {
    setToggleZoom(!toggleZoom);
  };

  return (
    <div className={styles["map-container"]}>
      <LeafletMap
        className={styles["leaflet-map"]}
        center={[2.218, 115.6628]}
        zoom={5}
        maxZoom={10}
        minZoom={1}
        maxBounds={[
          [60, 0],
          [-60, 300],
        ]}
        attributionControl={true}
        zoomControl={false}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        preferCanvas={true}
        onzoomend={() => handleZoomLevelChanged()}
        ref={mapRef}
      >
        <TilesLayer></TilesLayer>
        <ZoomControl position="topright"></ZoomControl>
      </LeafletMap>
      <MenuContainer attributes={{ wordMain, setWordMain }}></MenuContainer>
    </div>
  );
};

export default MapContainer;

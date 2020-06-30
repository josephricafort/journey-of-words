import React, { useRef } from "react";

import { Map as LeafletMap, ZoomControl } from "react-leaflet";
import styles from "./MapContainer.module.scss";
import MenuContainer from "./MenuContainer/MenuContainer";
import TilesLayer from "../../component/MapContainer/TilesLayer/TilesLayer";

require("leaflet/dist/leaflet.css");
require("react-leaflet-markercluster/dist/styles.min.css");

const MapContainer = ({ attributes }) => {
  const {
    wordMain,
    setWordMain,
    wordsInfo,
    wordTranslationsData,
    toggleZoom,
    setToggleZoom,
  } = attributes;
  const mapRef = useRef(Map);

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
        <TilesLayer wordTranslationsData={wordTranslationsData}></TilesLayer>
        <ZoomControl position={"topright"}></ZoomControl>
      </LeafletMap>
      <MenuContainer
        attributes={{ wordsInfo, wordMain, setWordMain }}
      ></MenuContainer>
    </div>
  );
};

export default MapContainer;

import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Map as LeafletMap, ZoomControl } from "react-leaflet";
import { Projection } from "leaflet";

import MenuContainer from "./MenuContainer/MenuContainer";
import TilesLayer from "../../component/MapContainer/TilesLayer/TilesLayer";
import { useStore } from "../../store/store";
import { DB_GITHUB_WORDS, SET_WORDTRANSLATIONS } from "../../utils/constants";
import { urlFriendly } from "../../utils/utils";

const Container = styled.div`
  &.map-container {
    position: relative;
    display: block;

    .leaflet-map {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100vh;

      .tooltip {
        padding: 2px;
      }
    }
  }
`;

const MapExploration = () => {
  const [state, dispatch] = useStore();
  const [wordMain, setWordMain] = useState("five");
  const [toggleZoom, setToggleZoom] = useState(false);

  const { languageInfo } = state;
  const mapRef = useRef(Map);

  const fetchData = () => {
    axios
      .get(DB_GITHUB_WORDS + urlFriendly(wordMain) + ".json")
      .then((response) => {
        const wordsData = response.data;
        dispatch(SET_WORDTRANSLATIONS, { wordsData, languageInfo });
      });
  };

  useEffect(fetchData, [languageInfo, wordMain]);

  const handleZoomLevelChanged = () => {
    setToggleZoom(!toggleZoom);
  };

  return (
    <Container className="map-container">
      <LeafletMap
        className="leaflet-map"
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
        projection={Projection.SphericalMercator}
      >
        <TilesLayer></TilesLayer>
        <ZoomControl position="topright"></ZoomControl>
      </LeafletMap>
      <MenuContainer attributes={{ wordMain, setWordMain }}></MenuContainer>
    </Container>
  );
};

export default MapExploration;

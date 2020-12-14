import React, { useRef } from "react";
import styled from "styled-components";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { Projection } from "leaflet";

import {
  // CARTODB_DARKMATTER,
  // CARTODB_DM_ATTRIBUTION,
  // MAPBOX_STYLE_WORLD,
  MAPBOX_STYLE_NATURE,
  // MAPBOX_STYLE_CONVERSION,
  // MAPBOX_STYLE_EXTRACTION,
  // MAPBOX_STYLE_FATE,
  // MAPBOX_STYLE_EXPLORATION,
  MAPBOX_ATTRIBUTION,
} from "../../../utils/constants";

const Container = styled.div`
  position: relative;
  height: 100vh;
  text-align: center;
  border: none;
`;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: ${(props) => props.theme.medium}px;
  max-height: 50vh;
  margin: auto;

  .leaflet-map {
    position: absolute;
    top: 0;
    bottom: 20px;
    width: 100%;
    border: 0px;
    border-radius: 50vh;
    // height: 100vh;

    .tooltip {
      padding: 2px;
    }
  }
`;

const Earth = () => {
  const mapRef = useRef(Map);

  const leafletConfig = {
    center: [-45, 150],
    zoom: 2,
    maxZoom: 10,
    minZoom: 1,
    maxBounds: [
      [60, 0],
      [-60, 360],
    ],
    attributionControl: false,
    zoomControl: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    dragging: false,
    animate: false,
    easeLinearity: 0.35,
    preferCanvas: true,
    ref: mapRef,
    projection: Projection.SphericalMercator,
  };

  const tileLayerConfig = {
    url: MAPBOX_STYLE_NATURE,
    attribution: MAPBOX_ATTRIBUTION,
    ext: "jpg",
    zIndex: -100,
  };

  return (
    <Container className="earth-container">
      <Wrapper className="earth-wrapper">
        <LeafletMap className="leaflet-map" {...leafletConfig}>
          <TileLayer {...tileLayerConfig}></TileLayer>
        </LeafletMap>
      </Wrapper>
    </Container>
  );
};

export default Earth;

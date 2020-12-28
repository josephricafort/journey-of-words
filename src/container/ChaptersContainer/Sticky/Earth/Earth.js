import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import styled from "styled-components";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { Projection } from "leaflet";
import axios from "axios";

import { useStore } from "../../../../store/store";
import { removeStringSpaces } from "../../../../utils/utils";
import {
  CHAPTER_NAMES,
  DB_GITHUB_API_WORDS,
} from "../../../../utils/constants";

import {
  // CARTODB_DARKMATTER,
  // CARTODB_DM_ATTRIBUTION,
  MAPBOX_STYLE_WORLD,
  MAPBOX_STYLE_NATURE,
  MAPBOX_STYLE_CONVERSION,
  MAPBOX_STYLE_EXTRACTION,
  MAPBOX_STYLE_FATE,
  // MAPBOX_STYLE_EXPLORATION,
  MAPBOX_ATTRIBUTION,
} from "../../../../utils/constants";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 0);
  max-width: 1000px;
  max-height: 65vh;
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

  const [scatterPlotData, setScatterPlotData] = useState([{}, {}, {}]);
  const { currentSlideData, currentChapterTheme } = useStore()[0];
  const { type } = currentSlideData;

  const fetchScatterPlotData = () => {
    if (type === "word-story") {
      const { contents } = currentSlideData;
      const { wordEn } = contents;
      axios
        .get(DB_GITHUB_API_WORDS + "/" + removeStringSpaces(wordEn) + ".json")
        .then((response) => {
          setScatterPlotData(JSON.parse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(fetchScatterPlotData, [currentSlideData]);

  const currentMapboxStyle = (theme) =>
    (theme === CHAPTER_NAMES[0] && MAPBOX_STYLE_WORLD) ||
    (theme === CHAPTER_NAMES[1] && MAPBOX_STYLE_NATURE) ||
    (theme === CHAPTER_NAMES[2] && MAPBOX_STYLE_CONVERSION) ||
    (theme === CHAPTER_NAMES[3] && MAPBOX_STYLE_EXTRACTION) ||
    (theme === CHAPTER_NAMES[4] && MAPBOX_STYLE_FATE);

  const leafletConfig = {
    center: [0, 180],
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
    url: currentMapboxStyle(currentChapterTheme),
    attribution: MAPBOX_ATTRIBUTION,
    ext: "jpg",
    zIndex: -100,
  };

  const WordMarkersLayer = lazy(() => import("./WordMarkersLayer"));

  return (
    <Wrapper className="earth-wrapper">
      <LeafletMap className="leaflet-map" {...leafletConfig}>
        <TileLayer {...tileLayerConfig} />
        {type === "word-story" && (
          <Suspense fallback={<div>Generating scatterPlot map...</div>}>
            <WordMarkersLayer data={scatterPlotData} />
          </Suspense>
        )}
      </LeafletMap>
    </Wrapper>
  );
};

export default Earth;

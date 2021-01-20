import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  lazy,
  Suspense,
} from "react";
import styled, { ThemeContext } from "styled-components";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { Projection } from "leaflet";
import axios from "axios";

import { Context } from "../../../../storeContext/Store";
import useWindowDimensions from "../../../../utils/useWindowDimensions";
import useDimensions from "../../../../utils/useDimensions";
import { removeStringSpaces } from "../../../../utils/utils";
import {
  CHAPTER_NAMES,
  DB_GITHUB_API_WORDS,
} from "../../../../utils/constants";
import VoronoiGrid from "./VoronoiGrid";

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
  ${({ theme }) => `
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, 0);
    max-width: 1000px;
    max-height: 100vw;
    overflow: hidden;

    .leaflet-map {
      position: absolute;
      top: 0;
      bottom: 20px;
      width: 100%;
      border: 0px;
      border-radius: 50vh;

      .tooltip {
        padding: 2px;
      }

      .leaflet-pane.leaflet-map-pane {
        .leaflet-pane.leaflet-overlay-pane {
          .tooltip {
            position: absolute;
            min-width: 100px;
            width: 100%;
            background-color: ${theme.white};
            padding: 5px;
            text-align: left;
            pointer-events: none;
            z-index: ${
              theme.zInteraction + 10 // place the tooltip above the d3 overlays
            }; 
          }

          svg.leaflet-zoom-animated {
            z-index: ${
              theme.zInteraction - 10 // place svg d3 overlays below the tooltip
            }; 
          }
        }
      }
    }

    @media (${theme.breakpointLarge}) {
      max-height: calc(100vh - 50px);
      max-width: 1400px;
      margin: 25px auto;
    }
  `}
`;

const Earth = () => {
  const mapRef = useRef(Map);
  const { width: windowWidth } = useWindowDimensions();
  const [earthWrapRef, earthWrapDims] = useDimensions();
  const theme = useContext(ThemeContext);

  const [scatterPlotData, setScatterPlotData] = useState([{}, {}, {}]);
  const [iconsPlotData, setIconsPlotData] = useState([{}, {}, {}]);
  const {
    currentSlideData,
    currentChapterTheme,
    currentDistributionData,
  } = useContext(Context)[0];
  const { type } = currentSlideData;

  const [currentHovered, setCurrentHovered] = useState({
    id: "",
    index: "",
  });
  const hovered = { currentHovered, setCurrentHovered };
  useEffect(() => {
    setCurrentHovered();
  }, [currentHovered]);

  const fetchData = () => {
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
  useEffect(fetchData, [currentSlideData]);

  const currentMapboxStyle = (theme) =>
    (theme === CHAPTER_NAMES.WORLD && MAPBOX_STYLE_WORLD) ||
    (theme === CHAPTER_NAMES.NATURE && MAPBOX_STYLE_NATURE) ||
    (theme === CHAPTER_NAMES.CONVERSION && MAPBOX_STYLE_CONVERSION) ||
    (theme === CHAPTER_NAMES.EXTRACTION && MAPBOX_STYLE_EXTRACTION) ||
    (theme === CHAPTER_NAMES.FATE && MAPBOX_STYLE_FATE);

  const leafletConfig = {
    center: [0, 160],
    zoomSnap: 0.25,
    zoom:
      (windowWidth > theme.large && 2.5) ||
      (windowWidth > theme.medium && 2) ||
      1.25,
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
  const IconMarkersLayer = lazy(() => import("./IconMarkersLayer"));

  return (
    <Wrapper
      className="earth-wrapper"
      windowWidth={windowWidth}
      ref={earthWrapRef}
    >
      <LeafletMap className="leaflet-map" {...leafletConfig}>
        <TileLayer {...tileLayerConfig} />
        {type === "word-story" && (
          <Suspense fallback={<div>Generating scatterPlot map...</div>}>
            <VoronoiGrid
              data={scatterPlotData}
              earthWrapDims={earthWrapDims}
              {...hovered}
            />
            <WordMarkersLayer data={scatterPlotData} />
          </Suspense>
        )}
        {type === "distribution-chart" && (
          <Suspense fallback={<div>Generating iconPlot map...</div>}>
            <VoronoiGrid
              data={currentDistributionData}
              earthWrapDims={earthWrapDims}
              {...hovered}
            />
            <IconMarkersLayer data={currentDistributionData} />
          </Suspense>
        )}
      </LeafletMap>
    </Wrapper>
  );
};

export default Earth;

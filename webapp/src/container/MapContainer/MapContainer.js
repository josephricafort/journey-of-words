import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";

import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Tooltip,
  ZoomControl,
  CircleMarker,
  LayerGroup,
} from "react-leaflet";
import LayerGroupCollision from "../../component/LayerGroupCollision/LayerGroupCollision";
import styles from "./MapContainer.module.scss";
import MenuContainer from "../MenuContainer/MenuContainer";
import wordsInfo from "../../data/output_json/words_info.json";
import { interpolateRgbBasis } from "d3";

require("leaflet/dist/leaflet.css");
require("react-leaflet-markercluster/dist/styles.min.css");

const MapContainer = () => {
  const [wordMain, setWordMain] = useState("Five");
  const mapRef = useRef(Map);
  const [wordList, setWordList] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);
  const [wordTranslationsData, setWordTranslationsData] = useState([]);
  // const cognacyColors = ["#00429d", "#ffffe0", "#93003a"];
  const cognacyColors = ["#66bb6a", "#ffa726", "#e91e63"];

  const DB_LOCAL = "http://localhost:3000";
  const STAMEN_STYLE_LAYER =
    "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}";
  const STAMEN_ATTRIBUTION =
    'attribution: \'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  const CARTODB_POSITRON_STYLE_LAYER =
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
  const CARTODB_ATTRIBUTION =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

  useEffect(() => {
    fetch(`${DB_LOCAL}/language_info`)
      .then((response) => response.json())
      .then((data) => {
        setDataInfo(data.filter((lang) => !!lang.latitude && !!lang.longitude));
      });
  }, []);

  useEffect(() => {
    fetch(`${DB_LOCAL}/language_words?word=${wordMain}`)
      .then((response) => response.json())
      .then((data) => {
        setWordTranslationsData(wordTranslation(data));
      });
  }, [dataInfo, wordMain]);

  const wordTranslation = (dataWords) => {
    return dataInfo.map((langInfo) => {
      const langWordElement = dataWords.find(
        (langWord) => langWord.id_lang === langInfo.id_lang
      );

      return {
        language: langInfo.language,
        language_id: langInfo.id_lang,
        word: langWordElement ? langWordElement.item : "",
        latitude: langInfo.latitude,
        longitude: langInfo.longitude,
        cognacy1: langWordElement ? langWordElement.cognacy1 : "",
        cognacy2: langWordElement ? langWordElement.cognacy2 : "",
      };
    });
  };

  const cognacyLevel = (cognacy) => {
    if (cognacy) {
      const maxCognacy = d3.max(
        wordTranslationsData.map((word) => word.cognacy1)
      );
      const minCognacy = d3.min(
        wordTranslationsData.map((word) => word.cognacy1)
      );
      const midCognacy = (maxCognacy + minCognacy) / 2;
      const colorScale = d3
        .scaleLinear()
        .domain([minCognacy, midCognacy, maxCognacy])
        .range(cognacyColors);

      return colorScale(cognacy);
    } else {
      return "rgba(0, 0, 0, 0)";
    }
  };

  return (
    <div>
      <LeafletMap
        className={styles["leaflet-map"]}
        center={[2.218, 115.6628]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={false}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        preferCanvas={true}
        ref={mapRef}
      >
        <TileLayer
          // url={STAMEN_STYLE_LAYER}
          url={CARTODB_POSITRON_STYLE_LAYER}
          ext="jpg"
          // attribution={STAMEN_ATTRIBUTION}
          attribution={CARTODB_ATTRIBUTION}
          zIndex={-100}
        ></TileLayer>
        <LayerGroup>
          {wordTranslationsData.map((word) => (
            <CircleMarker
              center={[word.latitude, word.longitude]}
              radius={15}
              key={word.language_id}
              opacity={0}
              fillColor={cognacyLevel(word.cognacy1)}
              fillOpacity={0.8}
            >
              <Tooltip
                className={styles["tooltip"]}
                permanent={true}
                direction="top"
                opacity={0.75}
              >
                {word.word}
              </Tooltip>
            </CircleMarker>
          ))}
        </LayerGroup>
        <ZoomControl position="topright"></ZoomControl>
      </LeafletMap>
      <MenuContainer
        attributes={{ wordsInfo, wordMain, setWordMain }}
      ></MenuContainer>
    </div>
  );
};

export default MapContainer;

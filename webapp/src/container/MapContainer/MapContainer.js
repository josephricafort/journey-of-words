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
import MarkersLayer from "../../component/MarkersLayer/MarkersLayer";
import wordsInfo from "../../data/output_json/words_info.json";
import { interpolateRgbBasis } from "d3";

require("leaflet/dist/leaflet.css");
require("react-leaflet-markercluster/dist/styles.min.css");

const MapContainer = () => {
  const [wordMain, setWordMain] = useState("Five");
  const mapRef = useRef(Map);
  const [dataInfo, setDataInfo] = useState([]);
  const [wordTranslationsData, setWordTranslationsData] = useState([]);

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
          url={CARTODB_POSITRON_STYLE_LAYER}
          ext="jpg"
          attribution={CARTODB_ATTRIBUTION}
          zIndex={-100}
        ></TileLayer>
        <MarkersLayer data={wordTranslationsData}></MarkersLayer>
        <ZoomControl position="topright"></ZoomControl>
      </LeafletMap>
      <MenuContainer
        attributes={{ wordsInfo, wordMain, setWordMain }}
      ></MenuContainer>
    </div>
  );
};

export default MapContainer;

import React, { useEffect, useState, useRef } from "react";

import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Tooltip,
  ZoomControl,
} from "react-leaflet";
import LayerGroupCollision from "../../component/LayerGroupCollision/LayerGroupCollision";
import styles from "./MapContainer.module.scss";
import MenuContainer from "../MenuContainer/MenuContainer";
import wordsInfo from "../../data/output_json/words_info.json";

require("leaflet/dist/leaflet.css");
require("react-leaflet-markercluster/dist/styles.min.css");

const MapContainer = () => {
  const [wordMain, setWordMain] = useState("Five");
  const mapRef = useRef(Map);
  const [wordList, setWordList] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);
  const [wordTranslationsData, setWordTranslationsData] = useState([]);

  const DB_LOCAL = "http://localhost:3000";
  const STAMEN_STYLE_LAYER =
    "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}";
  const ATTRIBUTION =
    'attribution: \'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

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
      };
    });
  };

  return (
    <div>
      <LeafletMap
        className={styles.style}
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
          url={STAMEN_STYLE_LAYER}
          ext="jpg"
          attribution={ATTRIBUTION}
          zIndex={-100}
        ></TileLayer>
        {wordTranslationsData.map((lang) => (
          <Marker
            position={[lang.latitude, lang.longitude]}
            key={lang.language_id}
            opacity={0}
          >
            <Tooltip permanent={true} direction="top">
              {lang.word}
            </Tooltip>
          </Marker>
        ))}
        <ZoomControl position="topright"></ZoomControl>
      </LeafletMap>
      <MenuContainer
        attributes={{ wordsInfo, wordMain, setWordMain }}
      ></MenuContainer>
    </div>
  );
};

export default MapContainer;

import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";
import { urlFriendly } from "../../utils/utils";

import { Map as LeafletMap, ZoomControl } from "react-leaflet";
import LayerGroupCollision from "../../component/MapContainer/LayerGroupCollision/LayerGroupCollision";
import styles from "./MapContainer.module.scss";
import MenuContainer from "./MenuContainer/MenuContainer";
import MarkersLayer from "../../component/MapContainer/MarkersLayer/MarkersLayer";
import TilesLayer from "../../component/MapContainer/TilesLayer/TilesLayer";

require("leaflet/dist/leaflet.css");
require("react-leaflet-markercluster/dist/styles.min.css");

const MapContainer = () => {
  const mapRef = useRef(Map);
  const [wordMain, setWordMain] = useState("five");
  const [dataInfo, setDataInfo] = useState([]);
  const [wordTranslationsData, setWordTranslationsData] = useState([]);
  const [wordsInfo, setWordsInfo] = useState([]);

  const DB_GITHUB =
    "https://raw.githubusercontent.com/josephricafort/journey-of-words-r-data/master/data/output/json/";
  const RAW = "?raw=true";
  const DB_GITHUB_LANGUAGE_INFO = DB_GITHUB + "language_info.json";
  const DB_GITHUB_WORDS = DB_GITHUB + "language_words/";
  const DB_GITHUB_WORDS_INFO = DB_GITHUB + "words_info.json";

  useEffect(() => {
    fetch(DB_GITHUB_LANGUAGE_INFO + RAW)
      .then((response) => response.json())
      .then((data) => {
        setDataInfo(data.filter((lang) => !!lang.latitude && !!lang.longitude));
      });

    fetch(DB_GITHUB_WORDS_INFO)
      .then((response) => response.json())
      .then((data) => setWordsInfo(data));
  }, []);

  useEffect(() => {
    fetch(DB_GITHUB_WORDS + urlFriendly(wordMain) + ".json")
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
    <div className={styles["map-container"]}>
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
        <TilesLayer></TilesLayer>
        <MarkersLayer data={wordTranslationsData}></MarkersLayer>
        <ZoomControl position={"topright"}></ZoomControl>
      </LeafletMap>
      <MenuContainer
        attributes={{ wordsInfo, wordMain, setWordMain }}
      ></MenuContainer>
    </div>
  );
};

export default MapContainer;

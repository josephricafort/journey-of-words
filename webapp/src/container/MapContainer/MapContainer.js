import React, { useEffect, useState, useRef } from "react";

import { Map as LeafletMap, TileLayer, Marker, Tooltip } from "react-leaflet";
import LayerGroupCollision from "../../component/LayerGroupCollision/LayerGroupCollision";
import styles from "./MapContainer.module.scss";

require("leaflet/dist/leaflet.css");
require("react-leaflet-markercluster/dist/styles.min.css");

const MapContainer = () => {
  const mapRef = useRef(Map);
  // const [mapBounds, setMapBounds] = useState({});
  const [wordMain, setWord] = useState("eye");
  const [dataInfo, setDataInfo] = useState([]);
  const [wordTranslationsData, setWordTranslationsData] = useState([]);
  // const [mapMove, setMapMove] = useState(false);

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
        console.log(dataInfo);
      });
  }, []);

  useEffect(() => {
    fetch(`${DB_LOCAL}/language_words?word=${wordMain}`)
      .then((response) => response.json())
      .then((data) => {
        setWordTranslationsData(wordTranslation(data));
      });
  }, [dataInfo]);

  const checkVal = (val) => {
    return val !== undefined ? val : 0;
  };

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
    <LeafletMap
      className={styles.style}
      center={[2.218, 115.6628]}
      zoom={6}
      maxZoom={10}
      attributionControl={true}
      zoomControl={true}
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
      ></TileLayer>
      {/* <LayerGroupCollision> */}
      {wordTranslationsData.map((lang) => (
        <Marker
          position={[checkVal(lang.latitude), checkVal(lang.longitude)]}
          key={lang.language_id}
          opacity={0}
        >
          <Tooltip permanent={true} direction="top">
            {lang.word}
          </Tooltip>
        </Marker>
      ))}
      {/* </LayerGroupCollision> */}
    </LeafletMap>
  );
};

export default MapContainer;

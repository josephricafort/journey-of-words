import React, { useEffect, useState } from "react";

import { Map as LeafletMap, TileLayer, Marker, Tooltip } from "react-leaflet";
import styles from "./Map.module.scss";

const MapContainer = ({ data }) => {
  // const [showData, setShowData] = useState(data);

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
    >
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></TileLayer>
      {data.map((lang) => (
        <Marker
          position={[checkVal(lang.latitude), checkVal(lang.longitude)]}
          key={lang.id_lang}
        >
          <Tooltip permanent={true}>{lang.language}</Tooltip>
        </Marker>
      ))}
    </LeafletMap>
  );
};

const checkVal = (val) => {
  return val !== undefined ? val : 0;
};

export default MapContainer;

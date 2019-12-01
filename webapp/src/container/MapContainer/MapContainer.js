import React from "react";

import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import styles from "./MapContainer.module.css";

const MapContainer = () => {
  return (
    <LeafletMap
      className={styles.style}
      center={[50, 100]}
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
      <Marker position={[50, 10]}>
        <Popup>Popup for any custom information</Popup>
      </Marker>
    </LeafletMap>
    // return <Map className={styles.style} zoom={1} center={[-0.09, 51.505]}></Map>;
  );
};

export default MapContainer;

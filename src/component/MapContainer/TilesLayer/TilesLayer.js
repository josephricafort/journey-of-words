import React, { useEffect, useState } from "react";
import styles from "./TilesLayer.module.scss";

import { TileLayer, SVGOverlay } from "react-leaflet";
import * as d3 from "d3";
import MarkersLayer from "./MarkersLayer/MarkersLayer";
import D3SvgOverlay from "./D3SvgOverlay/D3SvgOverlay";

const TilesLayer = ({ wordTranslationsData }) => {
  const [geojsonData, setGeojsonData] = useState({});
  const CARTODB_ATTRIBUTION =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
  const CARTODB_VOYAGER_NOLABELS =
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png";
  const SAMPLE_GEOJSON =
    "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json";

  function drawCallback(sel, proj, data) {
    var upd = sel.selectAll("path").data(data);
    upd
      .enter()
      .append("path")
      .attr("d", proj.pathFromGeojson)
      .attr("stroke", "black")
      .attr("fill", function () {
        return d3.hsl(Math.random() * 360, 0.9, 0.5);
      })
      .attr("fill-opacity", "0.5");
    upd.attr("stroke-width", 1 / proj.scale);
  }

  useEffect(() => {
    fetch(SAMPLE_GEOJSON)
      .then((result) => result.json())
      .then((data) => {
        setGeojsonData(data.features);
      });
  }, []);

  return (
    <div className={styles["tiles-layer"]}>
      <TileLayer
        url={CARTODB_VOYAGER_NOLABELS}
        ext="jpg"
        attribution={CARTODB_ATTRIBUTION}
        zIndex={-100}
      ></TileLayer>
      <D3SvgOverlay
        data={geojsonData}
        drawCallback={drawCallback}
      ></D3SvgOverlay>
    </div>
  );
};

export default TilesLayer;

// import React, { PropTypes } from "react";
import PropTypes from "prop-types";
import { MapLayer } from "react-leaflet";
import { LayerGroup } from "leaflet";
import "./Leaflet.LayerGroup.Collision";

export default class LayerGroupCollision extends MapLayer {
  static childContextTypes = {
    layerContainer: PropTypes.shape({
      addLayer: PropTypes.func.isRequired,
      removeLayer: PropTypes.func.isRequired,
    }),
  };

  getChildContext() {
    return {
      layerContainer: this.leafletElement,
    };
  }

  createLeafletElement() {
    return LayerGroup(this.getOptions()).collision({ margin: 5 });
  }
}

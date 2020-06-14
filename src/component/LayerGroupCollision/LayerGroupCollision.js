// import React, { PropTypes } from "react";
import { func, shape } from "prop-types";
import { MapLayer, withLeaflet } from "react-leaflet";
import L from "leaflet";
import "./Leaflet.LayerGroup.Collision";

class LayerGroupCollision extends MapLayer {
  static childContextTypes = {
    layerContainer: shape({
      addLayer: func.isRequired,
      removeLayer: func.isRequired,
    }),
  };

  getChildContext() {
    return {
      layerContainer: this.leafletElement,
    };
  }

  createLeafletElement() {
    const layerGroup = L.LayerGroup.collision({ margin: 5 });
    this.layerContainer.addLayer(layerGroup);
    return layerGroup;
  }
}

export default withLeaflet(LayerGroupCollision);

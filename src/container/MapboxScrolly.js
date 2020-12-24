import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import scrollama from "scrollama";
import styled from "styled-components";

import { MAPBOX_STYLE_URL } from "../utils/constants";

const MapContainer = styled.div`
  &.mapboxgl-map {
    top: 0;
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: -5;
  }
`;

const Header = styled.div`
  margin: 3vh auto;
  width: 90vw;
  padding: 2vh;
  text-align: center;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Footer = styled.div`
  width: 100%;
  min-height: 5vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
  text-align: center;
  line-height: 25px;
  font-size: 13px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Features = styled.div`
  padding-top: 10vh;
  padding-bottom: 10vh;
  z-index: 100;
  width: 100%;

  @media (${(props) => props.theme.breakpointSmall}) {
    margin: 0 auto;
  }
`;

const layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
};

const transformRequest = (url) => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery
    ? "&pluginName=journalismScrollytelling"
    : "?pluginName=journalismScrollytelling";
  return {
    url: url + suffix,
  };
};

class MapboxScrolly extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentChapter: props.chapters[0],
    };
    // this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    const config = this.props;
    const mapStart = config.chapters[0].location;

    mapboxgl.accessToken = config.accessToken;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: config.style,
      center: mapStart.center,
      zoom: mapStart.zoom,
      pitch: mapStart.pitch,
      bearing: mapStart.bearing,
      transformRequest: transformRequest,
    });

    const marker = new mapboxgl.Marker();
    if (config.showMarkers) {
      marker.setLngLat(mapStart.center).addTo(map);
    }

    function getLayerPaintType(layer) {
      var layerType = map.getLayer(layer).type;
      return layerTypes[layerType];
    }

    function setLayerOpacity(layer) {
      var paintProps = getLayerPaintType(layer.layer);
      paintProps.forEach(function (prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
      });
    }

    function switchLayer(chap) {
      return map.setStyle(chap.style);
    }

    const setState = this.setState.bind(this);

    // instantiate the scrollama
    const scroller = scrollama();

    map.on("load", function () {
      // setup the instance, pass callback functions

      scroller
        .setup({
          step: ".step",
          offset: 0.5,
          progress: true,
        })
        .onStepEnter((response) => {
          const chapter = config.chapters.find(
            (chap) => chap.id === response.element.id
          );
          setState({ currentChapter: chapter });
          map.flyTo(chapter.location);
          if (config.showMarkers) {
            marker.setLngLat(chapter.location.center);
          }
          if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
          }
          if (chapter.style) {
            switchLayer(chapter);
          }
        })
        .onStepExit((response) => {
          var chapter = config.chapters.find(
            (chap) => chap.id === response.element.id
          );
          if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
          }
        });
    });

    window.addEventListener("resize", scroller.resize);
  }

  render() {
    const config = this.props;
    const { alignment } = config;
    const currentChapterID = this.state.currentChapter.id;

    return (
      <div>
        <MapContainer
          ref={(el) => (this.mapContainer = el)}
          className="absolute top right left bottom"
        />
        <div id="story">
          {config.title && (
            <Header id="header">
              <h1>{config.title}</h1>
              {config.subtitle && <h2>{config.subtitle}</h2>}
              {config.byline && <p>{config.byline}</p>}
            </Header>
          )}
          <Features id="features">
            {config.chapters.map((chapter) => (
              <Chapter
                key={chapter.id}
                {...chapter}
                currentChapterID={currentChapterID}
                {...alignment}
              />
            ))}
          </Features>
          {config.footer && (
            <Footer id="footer">
              <p>{config.footer}</p>
            </Footer>
          )}
        </div>
      </div>
    );
  }
}

const CardWrapper = styled.div`
  max-width: 500px;
  margin: 0 20px;

  &.step {
    padding: 50vh 0;
    opacity: 0.25;
  }
  &.step.active {
    opacity: 0.9;
  }

  @media (${(props) => props.theme.breakpointSmall}) {
    ${(props) => props.alignment === "center" && `margin: 0 auto;`}
    ${(props) => props.alignment === "left" && `margin: 0 20px 0 auto`}
    ${(props) => props.alignment === "right" && `margin: 0 auto 0 20px`}
  }
`;

const Card = styled.div`
  padding: 5px 20px;
  line-height: 25px;
  font-size: 13px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
  text-align: left;

  @media (${(props) => props.theme.breakpointMedium}) {
    padding: 20px 40px;
  }
`;

const CardImage = styled.img`
  width: 100%;
`;

const Chapter = ({
  id,
  title,
  image,
  description,
  currentChapterID,
  alignment,
}) => {
  const classList = id === currentChapterID ? "step active" : "step";
  return (
    <CardWrapper id={id} className={[classList, "card-wrapper"]} {...alignment}>
      <Card className="card">
        {title && <h3 className="title">{title}</h3>}
        {image && <CardImage src={image} alt={title}></CardImage>}
        {description && <p>{description}</p>}
      </Card>
    </CardWrapper>
  );
};

export default MapboxScrolly;

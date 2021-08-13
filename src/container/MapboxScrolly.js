import React, { useState, useEffect, useRef, useContext } from "react";
import mapboxgl from "mapbox-gl";
import scrollama from "scrollama";
import styled from "styled-components";

import { Context } from "../storeContext/Store";
import { SET_CURRENTSLIDEDATA } from "../utils/constants";

import MarkdownHTML from "react-markdown/with-html";

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

const MapboxScrolly = (props) => {
  const config = props;
  const mapContainer = useRef(null);
  const [currentChapter, setCurrentChapter] = useState(props.chapters[0]);

  const configureMapboxScrolly = () => {
    const mapStart = config.chapters[0].location;
    mapboxgl.accessToken = config.accessToken;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
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
          setCurrentChapter({ ...chapter });
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
          // dispatch(SET_CURRENTSLIDEDATA, {
          //   id: 0.3,
          // });
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
  };
  useEffect(configureMapboxScrolly, []);

  const dispatch = useContext(Context)[1];
  useEffect(
    () => dispatch({ type: SET_CURRENTSLIDEDATA, payload: { id: 0 } }),
    [currentChapter]
  );

  const { alignment } = props.config || {};
  const currentChapterID = currentChapter.id;

  return (
    <div>
      <MapContainer
        ref={(el) => (mapContainer.current = el)}
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
              id={chapter.id}
              key={chapter.id}
              currentChapterID={currentChapterID}
              {...chapter}
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
};

const CardWrapper = styled.div`
  max-width: 500px;
  margin: 0 30px;

  &.step {
    padding: 50vh 0;
    opacity: 0.25;
  }
  &.step.active {
    opacity: 0.9;
  }
`;

const Card = styled.div`
  padding: 5px 20px;
  line-height: 25px;
  font-size: 13px;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
  text-align: left;

  @media (${(props) => props.theme.breakpointSmall}) {
    ${(props) => props.alignment === "center" && `margin: 0 auto;`}
    ${(props) => props.alignment === "left" && `margin: 0 auto 0 50px;`}
    ${(props) => props.alignment === "right" && `margin: 0 50px 0 auto;`}
  }

  @media (${(props) => props.theme.breakpointMedium}) {
    padding: 20px 40px;
  }
`;

const CardImage = styled.img`
  width: 100%;
`;

const Icon = styled.img`
  ${({ iconSize }) =>
    (iconSize === "small" && `height: 50px; width: 50px;`) ||
    (iconSize === " medium" && `height: 70px; width: 70px;`) ||
    (iconSize === "large" && `height: 90px; width: 90px;`) ||
    `height: 70px; width: 70px;`}
  margin-bottom: -30px;
`;

const ImgCaption = styled.div`
  margin-top: 50px;
  margin-bottom: -20px;
  color: #777;
  font-style: italic;
`;

const Chapter = ({
  id,
  icon,
  title,
  image,
  imgcaption,
  description,
  currentChapterID,
  alignment,
}) => {
  const markDownProps = (desc) => {
    return {
      source: desc,
      skipHtml: false,
      allowDangerousHtml: true,
      unwrapDisallowed: true,
      renderer: { Paragraph: "span" },
    };
  };

  const classList = id === currentChapterID ? "step active" : "step";
  return (
    <CardWrapper id={id} className={[classList, "card-wrapper"]}>
      <Card className="card" {...alignment}>
        {icon && (
          <Icon
            className="topic-icon world"
            src={require("../assets/icons/topics/" + icon)}
            iconSize="medium"
          />
        )}
        {title && <h3 className="title">{title}</h3>}
        {(Array.isArray(description) && (
          <div className="description">
            {description.map((d, i) => (
              <MarkdownHTML {...markDownProps(d)} key={i} />
            ))}
          </div>
        )) ||
          (description && <MarkdownHTML {...markDownProps(description)} />)}
        {imgcaption && (
          <ImgCaption>
            <MarkdownHTML {...markDownProps(imgcaption)} />
          </ImgCaption>
        )}
      </Card>
      {image && (
        <CardImage
          src={require("../assets/images/" + image)}
          alt={title}
        ></CardImage>
      )}
    </CardWrapper>
  );
};

export default MapboxScrolly;

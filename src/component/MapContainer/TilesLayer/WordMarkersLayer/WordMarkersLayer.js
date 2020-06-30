import React from "react";

import * as d3 from "d3";
import D3SvgOverlay from "../D3SvgOverlay/D3SvgOverlay";
import styles from "./WordMarkersLayer.module.scss";

const WordMarkersLayer = ({ wordTranslations }) => {
  function drawCallback(selection, projection, data) {
    const svg = selection;
    const latLngToLayer = (coords) => projection.latLngToLayerPoint(coords);
    const cognacyColors = ["#66bb6a", "#ffa726", "#e91e63"];

    const cognacyLevel = (cognacy) => {
      if (cognacy) {
        const cognacyArr = wordTranslations.map((word) => word.cognacy1);
        const maxCognacy = d3.max(cognacyArr);
        const minCognacy = d3.min(cognacyArr);
        const midCognacy = (maxCognacy + minCognacy) / 2;
        const colorScale = d3
          .scaleLinear()
          .domain([minCognacy, midCognacy, maxCognacy])
          .range(cognacyColors);

        return colorScale(cognacy);
      } else {
        return "#aaaaaa";
      }
    };

    svg
      .selectAll("text")
      .data(data)
      .join("text")
      .text((d) => d.word)
      .attr("font-size", 14 / projection.scale + "px")
      .attr("fill", (d) => cognacyLevel(d.cognacy1))
      .attr(
        "x",
        (d) =>
          latLngToLayer([
            d.latitude,
            d.longitude < 0 ? d.longitude + 360 : d.longitude,
          ]).x
      )
      .attr(
        "y",
        (d) =>
          latLngToLayer([
            d.latitude,
            d.longitude < 0 ? d.longitude + 360 : d.longitude,
          ]).y
      )
      .attr("transform", `translate(0 -5)`)
      .attr("text-anchor", "end");

    svg.node();

    svg
      .selectAll("text")
      .on("mouseover", (d, i, e) => {
        e[i].setAttribute("data-priority", 2);
        occlusion(svg);
      })
      .on("mouseout", (d, i, e) => {
        e[i].setAttribute("data-priority", 0);
        occlusion(svg);
      })
      .attr("data-priority", Math.random() * 2);

    occlusion(svg);
    svg.selectAll(".occluded").attr("opacity", 0);
  }

  function occlusion(svg) {
    const texts = [];
    svg.selectAll("text").each((d, i, e) => {
      const bbox = e[i].getBoundingClientRect();
      texts.push({
        priority: +e[i].getAttribute("data-priority"),
        node: e[i],
        text: d,
        bbox,
        x: bbox.x,
        y: bbox.y,
        width: bbox.width,
        height: bbox.height,
      });
    });
    texts.sort((a, b) => d3.descending(a.priority, b.priority));

    const filled = [];
    texts.forEach((d) => {
      const isOccluded = filled.some((e) => intersect(d, e));
      d3.select(d.node).classed("occluded", isOccluded);
      if (!isOccluded) filled.push(d);
    });

    return filled;
  }

  function intersect(a, b) {
    return !(
      a.x + a.width < b.x ||
      b.x + b.width < a.x ||
      a.y + a.height < b.y ||
      b.y + b.height < a.y
    );
  }

  return (
    <D3SvgOverlay
      className={styles["markers-layer"]}
      data={wordTranslations}
      drawCallback={drawCallback}
    ></D3SvgOverlay>
  );
};

export default WordMarkersLayer;

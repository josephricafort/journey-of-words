import React from "react";

import * as d3 from "d3";
import D3SvgOverlay from "../D3SvgOverlay/D3SvgOverlay";
import styles from "./MarkersLayer.module.scss";

const MarkersLayer = ({ wordTranslationsData }) => {
  function drawCallback(selection, projection, data) {
    const svg = selection;
    const svgCircle = selection.selectAll("circle");
    const latLngToLayer = (coords) => projection.latLngToLayerPoint(coords);

    svg
      .selectAll("text")
      .data(data)
      .join("text")
      .text((d) => d.word)
      .attr("font-size", 18 / projection.scale + "px")
      .attr("x", (d) => latLngToLayer([d.latitude, d.longitude]).x)
      .attr("y", (d) => latLngToLayer([d.latitude, d.longitude]).y)
      .attr("text-anchor", "middle");

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
      data={wordTranslationsData}
      drawCallback={drawCallback}
    ></D3SvgOverlay>
  );
};

export default MarkersLayer;

import React from "react";

import styles from "./WordMap.module.scss";
import * as d3 from "d3";

const WordMap = ({ title, wordsData }) => {
  const itemList = [...new Set(wordsData.map((item) => item.item))];
  const countMax = d3.max(wordsData.map((item) => item.count));
  const countMin = d3.min(wordsData.map((item) => item.count));

  const growScale = d3.scaleLinear().domain([countMax, countMin]).range([0, 1]);

  return (
    <div className={styles["word-map"]}>
      <h4>{title}</h4>
      <ul className={styles["word-map-blocks"]}>
        {itemList.map((item) => (
          <li
            key={item}
            style={{
              flexGrow: growScale(
                1 - wordsData.find((wdItem) => wdItem.item === item).count
              ),
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordMap;

import React from "react";

import styles from "./WordMap.module.scss";

const WordMap = ({ title, wordsData }) => {
  const cognateGroupList = [
    ...new Set(wordsData.map((item) => item.cognate_group)),
  ].filter((cognate) => !!cognate);

  return (
    <div className={styles["word-map"]}>
      <h4>{title}</h4>
      <div className={styles["blocks"]}>
        {cognateGroupList.map((cognate) => (
          <span className={styles["item"]} key={cognate}>
            {wordsData
              .filter((item) => item.cognate_group === cognate)
              .map((item) => (
                <span key={item.item} className={styles["item-word"]}>
                  {item.item}
                </span>
              ))}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordMap;

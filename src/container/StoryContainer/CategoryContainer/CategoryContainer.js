import React from "react";

import styles from "./CategoryContainer.module.scss";
import WordMap from "../../../component/StoryContainer/CategoryContainer/WordMap/WordMap";

const CategoryContainer = ({ title, categoryData }) => {
  const wordsList = [...new Set(categoryData.map((item) => item.word))].sort();

  return (
    <div className={styles["category-container"]}>
      <h3>{title}</h3>
      <div className={styles["word-map-container"]}>
        {wordsList.map((word) => (
          <WordMap
            key={word}
            title={word}
            wordsData={categoryData.filter((item) => item.word === word)}
          ></WordMap>
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;

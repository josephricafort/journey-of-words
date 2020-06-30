import React, { useEffect, useState } from "react";

import styles from "./StoryContainer.module.scss";
import CategoryContainer from "./CategoryContainer/CategoryContainer";
import BigPictureContainer from "./BigPictureContainer/BigPictureContainer";

const StoryContainer = ({ attributes }) => {
  const { wordTranslationsData, wordMain, langHeirarchy } = attributes;
  const [wordsCount, setWordsCount] = useState({});
  const [categories, setCategories] = useState([]);

  const GITHUB_URL_WORDS_COUNT_TOP20 =
    "https://raw.githubusercontent.com/josephricafort/journey-of-words-r-data/master/data/output/json/words_count_top20.json";

  useEffect(() => {
    fetch(GITHUB_URL_WORDS_COUNT_TOP20)
      .then((response) => response.json())
      .then((data) => {
        setWordsCount(data);
        setCategories([...new Set(data.map((item) => item.group))].sort());
      });
  }, []);

  return (
    <div className={styles["story-container"]}>
      <div className={styles["title"]}>
        <h2>Story</h2>
      </div>
      <BigPictureContainer
        langHeirarchy={langHeirarchy}
        wordTranslationsData={wordTranslationsData}
        wordMain={wordMain}
      ></BigPictureContainer>
      <div className={styles["small-picture"]}>
        {categories.map((category) => (
          <CategoryContainer
            title={category}
            categoryData={wordsCount.filter((item) => category === item.group)}
            key={category}
          ></CategoryContainer>
        ))}
      </div>
    </div>
  );
};

export default StoryContainer;

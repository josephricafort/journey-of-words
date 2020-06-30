import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./StoryContainer.module.scss";
import CategoryContainer from "./CategoryContainer/CategoryContainer";
import BigPictureContainer from "./BigPictureContainer/BigPictureContainer";
import { DB_GITHUB_WORDS_COUNT_TOP20 } from "../../store/constants";

const StoryContainer = () => {
  const [wordsCount, setWordsCount] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(DB_GITHUB_WORDS_COUNT_TOP20).then((response) => {
      setWordsCount(response.data);
      setCategories(
        [...new Set(response.data.map((item) => item.group))].sort()
      );
    });
  }, []);

  return (
    <div className={styles["story-container"]}>
      <div className={styles["title"]}>
        <h2>Story</h2>
      </div>
      <BigPictureContainer></BigPictureContainer>
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

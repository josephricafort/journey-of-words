import React, { useEffect } from "react";

import styles from "./BigPictureContainer.module.scss";

const BigPictureContainer = (attributes) => {
  const { wordTranslationsData, wordMain, langHeirarchy } = attributes;
  const branchList = [...new Set(langHeirarchy.map((lang) => lang.branch))];

  useEffect(() => {
    langHeirarchy.map((lang) => {
      const word = wordTranslationsData.find(
        (item) => item.language_id === lang.id_lang
      );
    });
  }, []);

  return (
    <div className={styles["big-picture"]}>
      <h3>Big Picture</h3>
      <div className={styles["viz"]}>
        {branchList.map((branch) => (
          <div className={styles["branch"]} key={branch}>
            <div>{branch}</div>
            {langHeirarchy
              .filter((lang) => lang.branch === branch)
              .map((lang) => (
                <div className={styles["word"]} key={lang.id_lang}>
                  {lang.language}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigPictureContainer;

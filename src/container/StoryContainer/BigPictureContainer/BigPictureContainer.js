import React from "react";

import styles from "./BigPictureContainer.module.scss";
import { useStore } from "../../../store/store";

const BigPictureContainer = () => {
  const state = useStore()[0];
  const { langHeirarchy } = state;
  const branchList = [...new Set(langHeirarchy.map((lang) => lang.branch))];

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

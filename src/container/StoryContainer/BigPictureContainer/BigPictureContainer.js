import React, { useState, useEffect } from "react";
import axios from "axios";

import MenuContainer from "./MenuContainer/MenuContainer";
import styles from "./BigPictureContainer.module.scss";
import { useStore } from "../../../store/store";
import { cognacyLevel } from "../../../utils/cognacyLevel";
import { DB_GITHUB_WORDS, SET_LANGHEIRWORDS } from "../../../utils/constants";
import { urlFriendly } from "../../../utils/utils";

const BigPictureContainer = () => {
  const [state, dispatch] = useStore();
  const [wordMain, setWordMain] = useState("five");

  const { langHeirarchy, wordTranslations, langHeirWords } = state;
  const branchList = [...new Set(langHeirarchy.map((lang) => lang.branch))];

  useEffect(() => {
    axios
      .get(DB_GITHUB_WORDS + urlFriendly(wordMain) + ".json")
      .then((response) => {
        const wordsData = response.data;
        dispatch(SET_LANGHEIRWORDS, { wordsData, langHeirarchy });
      });
  }, [langHeirarchy, wordMain]);

  return (
    <div className={styles["big-picture"]}>
      <MenuContainer attributes={{ wordMain, setWordMain }}></MenuContainer>
      <div className={styles["viz"]}>
        {branchList.map((branch) => (
          <div className={styles["branch"]} key={branch}>
            <div>{branch}</div>
            {langHeirWords
              .filter((langHeir) => langHeir.branch === branch)
              .sort((a, b) => {
                const cognacyA = a.cognacy1;
                const cognacyB = b.cognacy1;
                return cognacyA > cognacyB ? 1 : -1;
              })
              .map((langHeir) => (
                <span
                  className={styles["word"]}
                  key={langHeir.id_lang}
                  style={{
                    backgroundColor: cognacyLevel(
                      wordTranslations,
                      langHeir.cognacy1
                    ),
                  }}
                >
                  {langHeir.word}
                </span>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigPictureContainer;

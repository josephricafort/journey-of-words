import React from "react";
import styles from "./MenuContainer.module.scss";

import { MenuList, MenuItem, Box, Card } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { useStore } from "../../../store/store";
import { SET_WORDMAIN } from "../../../store/constants";

const MenuContainer = () => {
  const [state, dispatch] = useStore();
  const { wordMain, wordsInfo } = state;
  const categoryList = [...new Set(wordsInfo.map((word) => word.group))];

  const handleSelectWord = (selectedWord, event) => {
    dispatch(SET_WORDMAIN, selectedWord);
  };

  return (
    <Box className={styles["menu-container"]}>
      <Card className={styles["word-details"]}>
        <h2>{wordMain}</h2>
      </Card>
      {categoryList.map((category) => (
        <ExpansionPanel key={category}>
          <ExpansionPanelSummary>{category}</ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MenuList className={styles["menu-list"]}>
              {wordsInfo
                .filter((word) => word.group === category)
                .map((word, wordIndex) => (
                  <MenuItem
                    className={
                      styles[
                        `word-item${wordMain === word.word ? "-selected" : ""}`
                      ]
                    }
                    onClick={(event) => handleSelectWord(word.word, event)}
                    key={wordIndex}
                  >
                    {word.word}
                  </MenuItem>
                ))}
            </MenuList>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Box>
  );
};

export default MenuContainer;

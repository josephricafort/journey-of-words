import React, { useEffect, useState, useRef } from "react";
import styles from "./MenuContainer.module.scss";

import { Menu, MenuList, MenuItem, Button, Box, Card } from "@material-ui/core";
import FullWidthTabs from "../../component/FullWidthTabs/FullWidthTabs";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

const MenuContainer = ({ attributes }) => {
  const { wordsInfo, wordMain, setWordMain } = attributes;
  const categoryList = [...new Set(wordsInfo.map((word) => word.group))];

  const handleSelectWord = (selectedWord, event) => {
    setWordMain(selectedWord);
  };

  return (
    <Box className={styles["menu-container"]}>
      <Card className={styles["word-details"]}>
        <h2>{wordMain}</h2>
      </Card>
      {categoryList.map((category) => (
        <ExpansionPanel>
          <ExpansionPanelSummary>{category}</ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <MenuList className={styles["menu-list"]}>
              {wordsInfo
                .filter((word) => word.group === category)
                .map((word) => (
                  <MenuItem
                    onClick={(event) => handleSelectWord(word.Word, event)}
                  >
                    {word.Word}
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

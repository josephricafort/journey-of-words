import React, { useEffect, useState } from "react";
import axios from "axios";
import { initStore } from "./store";

export const configureDataStore = () => {
  const actions = {
    SET_WORDMAIN: (state, word) => ({ wordMain: word }),
    SET_WORDSINFO: (state, wordsInfo) => ({ wordsInfo: wordsInfo }),
    SET_LANGUAGEINFO: (state, languageInfo) => ({
      languageInfo: languageInfo,
    }),
    SET_LANGUAGEHEIRARCHY: (state, langHeirarchy) => ({
      langHeirarchy: langHeirarchy,
    }),
  };

  const initState = {
    wordMain: "five",
    languageInfo: [],
    wordsInfo: [],
    wordTranslations: [],
    langHeirarchy: [],
    toggleZoom: false,
  };

  initStore(actions, initState);
};

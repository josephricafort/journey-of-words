import { initStore } from "./store";

export const configureDataStore = () => {
  const actions = {
    SET_WORDMAIN: (state, word) => ({ wordMain: word }),
    SET_WORDSINFO: (state, wordsInfo) => ({ wordsInfo: [...wordsInfo] }),
    SET_LANGUAGEINFO: (state, languageInfo) => ({
      languageInfo: languageInfo.filter(
        (lang) => !!lang.latitude && !!lang.longitude
      ),
    }),
    SET_LANGHEIRARCHY: (state, langHeirarchy) => ({
      langHeirarchy: [...langHeirarchy],
    }),
    SET_WORDTRANSLATIONS: (state, payload) => ({
      wordTranslations: [...payload],
    }),
    SET_TOGGLEZOOM: (state, toggleState) => ({ toggleZoom: toggleState }),
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

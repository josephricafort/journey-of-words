import { initStore } from "./store";
import { CHAPTER_NAMES } from "../utils/constants";

export const configureDataStore = () => {
  const actions = {
    // scrolly
    SET_CURRENTSLIDEDATA: (state, slideData) => {
      const { id, type, tattoo } = slideData;
      // Update the theme here when the stepIndex is updated
      const chapterIndex = id.toString().split(".")[0];
      const currentChapterTheme =
        (chapterIndex === "0" && CHAPTER_NAMES.WORLD) ||
        (chapterIndex === "1" && CHAPTER_NAMES.NATURE) ||
        (chapterIndex === "2" && CHAPTER_NAMES.CONVERSION) ||
        (chapterIndex === "3" && CHAPTER_NAMES.EXTRACTION) ||
        (chapterIndex === "4" && CHAPTER_NAMES.FATE);

      return {
        currentSlideData: slideData,
        currentStepIndex: id,
        currentChapterTheme,
        currentChapterIndex: chapterIndex,
      };
    },

    // // data words
    // SET_WORDMAIN: (state, word) => ({ wordMain: word }),
    // SET_WORDSINFO: (state, wordsInfo) => ({ wordsInfo: [...wordsInfo] }),
    // SET_WORDGROUPS: (state, wordGroups) => ({ wordGroups: wordGroups }),
    // SET_WORDTRANSLATIONS: (state, payload) => {
    //   const { wordsData, languageInfo } = payload;
    //   const translate = (wordsData) => {
    //     return languageInfo.map((langInfo) => {
    //       const langWordElement = wordsData.find(
    //         (langWord) => langWord.id_lang === langInfo.id_lang
    //       );
    //       return {
    //         language: langInfo.language,
    //         language_id: langInfo.id_lang,
    //         word: langWordElement ? langWordElement.item : "",
    //         latitude: langInfo.latitude,
    //         longitude: langInfo.longitude,
    //         cognacy1: langWordElement ? langWordElement.cognacy1 : "",
    //         cognacy2: langWordElement ? langWordElement.cognacy2 : "",
    //       };
    //     });
    //   };
    //   return { wordTranslations: translate(wordsData) };
    // },

    // // data languages
    // SET_LANGUAGEINFO: (state, languageInfo) => ({
    //   languageInfo: languageInfo.filter(
    //     (lang) => !!lang.latitude && !!lang.longitude
    //   ),
    // }),
    // SET_LANGHEIRARCHY: (state, langHeirarchy) => ({
    //   langHeirarchy: [...langHeirarchy],
    // }),

    // SET_LANGHEIRWORDS: (state, payload) => {
    //   const { wordsData, langHeirarchy } = payload;
    //   const translate = (wordsData) => {
    //     return langHeirarchy.map((langHeir) => {
    //       const langWordElement = wordsData.find(
    //         (langWord) => langWord.id_lang === langHeir.id_lang
    //       );
    //       return {
    //         language: langHeir.language,
    //         language_id: langHeir.id_lang,
    //         branch: langHeir.branch,
    //         word: langWordElement ? langWordElement.item : "",
    //         // latitude: langHeir.latitude,
    //         // longitude: langHeir.longitude,
    //         cognacy1: langWordElement ? langWordElement.cognacy1 : "",
    //         cognacy2: langWordElement ? langWordElement.cognacy2 : "",
    //       };
    //     });
    //   };
    //   return { langHeirWords: translate(wordsData) };
    // },

    // // leaflet map
    // SET_TOGGLEZOOM: (state, toggleState) => ({ toggleZoom: toggleState }),
  };

  const initState = {
    // scrolly
    currentSlideData: {},
    currentStepIndex: 1,
    currentChapterTheme: "world",
    currentChapterIndex: 0,

    // data related
    //- words
    wordMain: "five",
    wordsInfo: [],
    wordTranslations: [],
    wordGroups: [],

    //- languages
    languageInfo: [],
    langHeirarchy: [],
    langHeirWords: [],

    // leaflet
    toggleZoom: false,
  };

  initStore(actions, initState);
};

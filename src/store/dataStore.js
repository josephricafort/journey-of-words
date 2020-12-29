import { initStore } from "./store";
import { CHAPTER_NAMES } from "../utils/constants";

export const configureDataStore = () => {
  const actions = {
    // scrolly
    SET_CURRENTSLIDEDATA: (state, slideData) => {
      const { statesFaceTattoo, currentFaceTattoo, currentTattooIndex } = state;
      const { id, type, tattoo } = slideData;
      // Update the theme here when the stepIndex is updated
      const chapterIndex = id.toString().split(".")[0];
      const currentChapterTheme =
        (chapterIndex === "0" && CHAPTER_NAMES[0]) ||
        (chapterIndex === "1" && CHAPTER_NAMES[1]) ||
        (chapterIndex === "2" && CHAPTER_NAMES[2]) ||
        (chapterIndex === "3" && CHAPTER_NAMES[3]) ||
        (chapterIndex === "4" && CHAPTER_NAMES[4]);

      // Update face tattoo status and icons accordingly
      let tattooIndex = 0;
      let newTattooIndex = 0;
      let newStatesFaceTattoo = [];

      if (type === "face-tattoo") {
        tattooIndex = statesFaceTattoo.find((obj) => tattoo.area === obj.area);
        newTattooIndex = statesFaceTattoo.indexOf(tattooIndex);
        newTattooIndex =
          newTattooIndex >= 0 ? newTattooIndex : currentTattooIndex;
        const setIsShown = (tIndex) => {
          return tIndex <= newTattooIndex ? true : false;
        };
        newStatesFaceTattoo = statesFaceTattoo.map((obj, index) => {
          obj.isShown = setIsShown(index);
          return tattoo.area === obj.area ? tattoo : obj;
        });
      }

      return {
        currentSlideData: slideData,
        currentStepIndex: id,
        currentChapterTheme,
        currentChapterIndex: chapterIndex,
        currentFaceTattoo: tattoo ? { ...tattoo } : { ...currentFaceTattoo },
        currentTattooIndex: newTattooIndex,
        isSlideTattooType: type === "face-tattoo",
        statesFaceTattoo:
          type === "face-tattoo"
            ? [...newStatesFaceTattoo]
            : [...statesFaceTattoo],
      };
    },

    // data words
    SET_WORDMAIN: (state, word) => ({ wordMain: word }),
    SET_WORDSINFO: (state, wordsInfo) => ({ wordsInfo: [...wordsInfo] }),
    SET_WORDGROUPS: (state, wordGroups) => ({ wordGroups: wordGroups }),
    SET_WORDTRANSLATIONS: (state, payload) => {
      const { wordsData, languageInfo } = payload;
      const translate = (wordsData) => {
        return languageInfo.map((langInfo) => {
          const langWordElement = wordsData.find(
            (langWord) => langWord.id_lang === langInfo.id_lang
          );
          return {
            language: langInfo.language,
            language_id: langInfo.id_lang,
            word: langWordElement ? langWordElement.item : "",
            latitude: langInfo.latitude,
            longitude: langInfo.longitude,
            cognacy1: langWordElement ? langWordElement.cognacy1 : "",
            cognacy2: langWordElement ? langWordElement.cognacy2 : "",
          };
        });
      };
      return { wordTranslations: translate(wordsData) };
    },

    // data languages
    SET_LANGUAGEINFO: (state, languageInfo) => ({
      languageInfo: languageInfo.filter(
        (lang) => !!lang.latitude && !!lang.longitude
      ),
    }),
    SET_LANGHEIRARCHY: (state, langHeirarchy) => ({
      langHeirarchy: [...langHeirarchy],
    }),

    SET_LANGHEIRWORDS: (state, payload) => {
      const { wordsData, langHeirarchy } = payload;
      const translate = (wordsData) => {
        return langHeirarchy.map((langHeir) => {
          const langWordElement = wordsData.find(
            (langWord) => langWord.id_lang === langHeir.id_lang
          );
          return {
            language: langHeir.language,
            language_id: langHeir.id_lang,
            branch: langHeir.branch,
            word: langWordElement ? langWordElement.item : "",
            // latitude: langHeir.latitude,
            // longitude: langHeir.longitude,
            cognacy1: langWordElement ? langWordElement.cognacy1 : "",
            cognacy2: langWordElement ? langWordElement.cognacy2 : "",
          };
        });
      };
      return { langHeirWords: translate(wordsData) };
    },

    // leaflet map
    SET_TOGGLEZOOM: (state, toggleState) => ({ toggleZoom: toggleState }),
  };

  const initState = {
    // scrolly
    currentSlideData: {},
    currentStepIndex: 1,
    currentChapterTheme: "world",
    currentChapterIndex: 0,

    // woman face tattoo
    currentFaceTattoo: {},
    currentTattooIndex: 0,
    isSlideTattooType: false,
    statesFaceTattoo: [
      {
        area: "tattooSea",
        isShown: false,
        icon: "waves",
      },
      {
        area: "tattooBoat",
        isShown: false,
        icon: "boat",
      },
      {
        area: "tattooLand",
        isShown: false,
        icon: "islands",
      },
      {
        area: "tattooNature",
        isShown: false,
        icon: "flower",
      },
      {
        area: "tattooResource",
        isShown: false,
        icon: "fishes",
      },
      {
        area: "tattooSociety",
        isShown: false,
        icon: "humans",
      },
      {
        area: "tattooReligion",
        isShown: false,
        icon: "islam", // christianism, buddhism, hinduism
      },
      {
        area: "tattooColonizer",
        isShown: false,
        icon: "british", // french, spanish, american, japanese, portuguese, chinese
      },
      {
        area: "tattooColonyStatus",
        isShown: false,
        icon: "stillColony", // independent,
      },
      {
        area: "tattooExtraction",
        isShown: false,
        icon: "pickaxe",
      },
      {
        area: "tattooGovernment",
        isShown: false,
        icon: "building",
      },
      {
        area: "tattooIndependence",
        isShown: false,
        icon: "flag",
      },
      {
        area: "tattooCountry",
        isShown: false,
        icon: "id",
      },
    ],

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

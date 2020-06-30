import React, { useEffect, useState } from "react";
import axios from "axios";
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
    SET_WORDTRANSLATIONS: (state, payload) => {
      const [dataWords, languageInfo] = payload;
      const translate = (data) => {
        return languageInfo.map((langInfo) => {
          const langWordElement = data.find(
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
      return { wordTranslations: translate(dataWords) };
      // const wordTranslations = languageInfo.map((langInfo) => {
      //   const langWordElement = dataWords.find(
      //     (langWord) => langWord.id_lang === languageInfo.id_lang
      //   );
      //   return {
      //     language: langInfo.language,
      //     language_id: langInfo.id_lang,
      //     word: langWordElement ? langWordElement.item : "",
      //     latitude: langInfo.latitude,
      //     longitude: langInfo.longitude,
      //     cognacy1: langWordElement ? langWordElement.cognacy1 : "",
      //     cognacy2: langWordElement ? langWordElement.cognacy2 : "",
      //   };
      // });
      // return { wordTranslations: [...wordTranslations] };
    },
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

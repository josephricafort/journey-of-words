import React, { useEffect } from "react";
import axios from "axios";

import MapContainer from "./container/MapContainer/MapContainer";
import StoryContainer from "./container/StoryContainer/StoryContainer";
import { configureDataStore } from "./store/dataStore";
import { urlFriendly } from "./utils/utils";
import {
  DB_GITHUB_WORDS,
  DB_GITHUB_LANGUAGE_INFO,
  DB_GITHUB_WORDS_INFO,
  DB_GITHUB_LANG_HEIRARCHY_ARR,
  SET_WORDSINFO,
  SET_LANGUAGEINFO,
  SET_LANGHEIRARCHY,
  SET_WORDTRANSLATIONS,
} from "./store/constants";
import { useStore } from "./store/store";

configureDataStore();

const JourneyOfWords = () => {
  const [state, dispatch] = useStore();
  const { wordMain, languageInfo, toggleZoom } = state;

  useEffect(() => {
    axios
      .all([
        axios.get(DB_GITHUB_LANGUAGE_INFO),
        axios.get(DB_GITHUB_WORDS_INFO),
        axios.get(DB_GITHUB_LANG_HEIRARCHY_ARR),
      ])
      .then((responseArray) => {
        dispatch(SET_LANGUAGEINFO, responseArray[0].data);
        dispatch(SET_WORDSINFO, responseArray[1].data);
        dispatch(SET_LANGHEIRARCHY, responseArray[2].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  useEffect(() => {
    const translate = (dataWords) => {
      return languageInfo.map((langInfo) => {
        const langWordElement = dataWords.find(
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
    axios
      .get(DB_GITHUB_WORDS + urlFriendly(wordMain) + ".json")
      .then((response) => {
        const data = translate(response.data);
        dispatch(SET_WORDTRANSLATIONS, data);
      });
  }, [dispatch, languageInfo, wordMain, toggleZoom]);

  return (
    <div className="journey-of-words">
      <StoryContainer></StoryContainer>
      <MapContainer></MapContainer>
    </div>
  );
};

export default JourneyOfWords;

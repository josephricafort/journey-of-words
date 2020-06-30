import React, { useState, useEffect } from "react";
import axios from "axios";

import MapContainer from "./container/MapContainer/MapContainer";
import StoryContainer from "./container/StoryContainer/StoryContainer";
import { configureDataStore } from "./store/dataStore";
import { urlFriendly } from "./utils/utils";
import {
  RAW,
  DB_GITHUB_WORDS,
  DB_GITHUB_LANGUAGE_INFO,
  DB_GITHUB_WORDS_INFO,
  DB_GITHUB_LANG_HEIRARCHY_ARR,
  SET_WORDSINFO,
  SET_LANGUAGEINFO,
  SET_LANGHEIRARCHY,
  SET_WORDMAIN,
} from "./store/constants";
import { useStore } from "./store/store";

configureDataStore();

const JourneyOfWords = () => {
  const [wordMain, setWordMain] = useState("five");
  // const [languageInfo, setLanguageInfo] = useState([]);
  const [wordTranslationsData, setWordTranslations] = useState([]);
  // const [wordsInfo, setWordsInfo] = useState([]);
  const [langHeirarchy, setLangHeirarchy] = useState([]);
  const [toggleZoom, setToggleZoom] = useState(false);

  const [state, dispatch] = useStore();
  const { languageInfo, wordsInfo } = state;

  useEffect(() => {
    axios
      .all([
        axios.get(DB_GITHUB_LANGUAGE_INFO),
        axios.get(DB_GITHUB_WORDS_INFO),
        axios.get(DB_GITHUB_LANG_HEIRARCHY_ARR),
      ])
      .then((responseArray) => {
        dispatch(
          SET_LANGUAGEINFO,
          responseArray[0].data.filter(
            (lang) => !!lang.latitude && !!lang.longitude
          )
        );
        dispatch(SET_WORDSINFO, responseArray[1].data);
        dispatch(SET_LANGHEIRARCHY, responseArray[2].data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const wordTranslation = (dataWords) => {
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
    fetch(DB_GITHUB_WORDS + urlFriendly(wordMain) + ".json")
      .then((response) => response.json())
      .then((data) => {
        setWordTranslations(wordTranslation(data));
      });
  }, [languageInfo, wordMain, toggleZoom]);

  useEffect(() => {
    fetch(DB_GITHUB_LANG_HEIRARCHY_ARR)
      .then((response) => response.json())
      .then((data) => {
        data.map((lang) => {
          const word = wordTranslationsData.find(
            (item) => item.language_id === lang.id_lang
          );
        });
        // setLangHeirarchy(data);
      });
  }, [languageInfo]);

  return (
    <div className="journey-of-words">
      <StoryContainer
        attributes={{ wordTranslationsData, wordMain, langHeirarchy }}
      ></StoryContainer>
      <MapContainer
        attributes={{
          wordMain,
          setWordMain,
          wordTranslationsData,
          wordsInfo,
          toggleZoom,
          setToggleZoom,
        }}
      ></MapContainer>
    </div>
  );
};

export default JourneyOfWords;

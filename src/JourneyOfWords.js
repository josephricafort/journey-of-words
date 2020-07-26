import React, { useEffect } from "react";
import axios from "axios";

import MapContainer from "./container/MapContainer/MapContainer";
import StoryContainer from "./container/StoryContainer/StoryContainer";
import { configureDataStore } from "./store/dataStore";
import {
  DB_GITHUB_LANGUAGE_INFO,
  DB_GITHUB_WORDS_INFO,
  DB_GITHUB_LANG_HEIRARCHY_ARR,
  SET_WORDSINFO,
  SET_LANGUAGEINFO,
  SET_LANGHEIRARCHY,
} from "./utils/constants";
import { useStore } from "./store/store";

configureDataStore();

const JourneyOfWords = () => {
  const dispatch = useStore()[1];

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
  }, []);

  return (
    <div className="journey-of-words">
      <StoryContainer></StoryContainer>
      <MapContainer></MapContainer>
    </div>
  );
};

export default JourneyOfWords;

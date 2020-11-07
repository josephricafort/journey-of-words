import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

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
import MapboxScrolly from "./container/MapboxScrolly/MapboxScrolly";
import mapboxconfig from "./container/MapboxScrolly/config";

configureDataStore();

const ChapterScreen = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100vh;
  background-color: white;
  border: 1px solid brown;
`;

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
      <div className="chapter-world">
        <MapboxScrolly {...mapboxconfig} />
      </div>
      <ChapterScreen className="chapter-nature">Chapter Nature</ChapterScreen>
      <ChapterScreen className="chapter-conversion">
        Chapter Conversion
      </ChapterScreen>
      <ChapterScreen className="chapter-extraction">
        Chapter Extraction
      </ChapterScreen>
      <ChapterScreen className="chapter-fate">Chapter Fate</ChapterScreen>
      {/* <ChapterScreen className="section-end-exploration">
        <MapContainer></MapContainer>
      </ChapterScreen> */}
    </div>
  );
};

export default JourneyOfWords;

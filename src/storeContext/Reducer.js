import {
  SET_CURRENTSLIDEDATA,
  SET_DISTRIBUTIONDATA,
  CHAPTER_NAMES,
} from "../utils/constants";

const Reducer = (state, action) => {
  // Slide data variables

  switch (action.type) {
    case SET_CURRENTSLIDEDATA:
      const chapterIndex = action.payload.id.toString().split(".")[0];
      return {
        ...state,
        currentSlideData: action.payload,
        currentStepIndex: action.payload.id,
        currentChapterTheme:
          (chapterIndex === "0" && CHAPTER_NAMES.WORLD) ||
          (chapterIndex === "1" && CHAPTER_NAMES.NATURE) ||
          (chapterIndex === "2" && CHAPTER_NAMES.CONVERSION) ||
          (chapterIndex === "3" && CHAPTER_NAMES.EXTRACTION) ||
          (chapterIndex === "4" && CHAPTER_NAMES.FATE),
        currentChapterIndex: chapterIndex,
      };
    case SET_DISTRIBUTIONDATA:
      return {
        ...state,
        currentDistributionData: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;

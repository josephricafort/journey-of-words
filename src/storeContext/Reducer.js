import { SET_CURRENTSLIDEDATA, CHAPTER_NAMES } from "../utils/constants";

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
          (chapterIndex === "0" && CHAPTER_NAMES[0]) ||
          (chapterIndex === "1" && CHAPTER_NAMES[1]) ||
          (chapterIndex === "2" && CHAPTER_NAMES[2]) ||
          (chapterIndex === "3" && CHAPTER_NAMES[3]) ||
          (chapterIndex === "4" && CHAPTER_NAMES[4]),
        currentChapterIndex: chapterIndex,
      };
    default:
      return state;
  }
};

export default Reducer;

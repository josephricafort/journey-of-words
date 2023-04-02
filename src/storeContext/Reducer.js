import { SET_CURRENTSLIDEDATA } from "../utils/constants";

const Reducer = (state, action) => {
  // Slide data variables

  switch (action.type) {
    case SET_CURRENTSLIDEDATA:
      return {
        ...state,
        currentSlideData: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;

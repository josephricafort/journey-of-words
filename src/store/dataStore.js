import { initStore } from "./store";

export const configureDataStore = () => {
  const actions = {
    // scrolly
    SET_CURRENTSLIDEDATA: (state, slideData) => {
      return {
        currentSlideData: slideData,
      };
    },
  };

  const initState = {
    // scrolly
    currentSlideData: {},

    // leaflet
    toggleZoom: false,
  };

  initStore(actions, initState);
};

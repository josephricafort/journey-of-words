import variables from "./variables";
import { mapboxStyles } from "../utils/constants";

const lightTheme = {
  color: variables.black,
  backgroundColor: variables.white,
};

const darkTheme = {
  color: variables.white,
  backgroundColor: variables.black,
};

const chapterThemes = {
  world: {
    fill0: variables.fill0,
    fill1: variables.fillBlue1,
    fill2: variables.fillBlue2,
    fill3: variables.fillBlue3,
    fill4: variables.fillBlue4,
    stroke0: variables.stroke0,
    stroke1: variables.strokeBlue1,
    stroke2: variables.strokeBlue2,
    stroke3: variables.strokeBlue3,
    stroke4: variables.strokeBlue4,
    backgroundColor: variables.white,
    stageColor: variables.blue1,
    mapboxStyle: mapboxStyles.world,
  },
};

export { lightTheme, darkTheme, chapterThemes };

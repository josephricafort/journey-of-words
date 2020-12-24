import variables from "./variables";

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
    backgroundColor: variables.blue1,
    mapboxStyle: "ckhxlghrg09zp1bqu5s7pt7jl",
  },
  nature: {
    fill0: variables.fill0,
    fill1: variables.fillGreen1,
    fill2: variables.fillGreen2,
    fill3: variables.fillGreen3,
    fill4: variables.fillGreen4,
    stroke0: variables.stroke0,
    stroke1: variables.strokeGreen1,
    stroke2: variables.strokeGreen2,
    stroke3: variables.strokeGreen3,
    stroke4: variables.strokeGreen4,
    backgroundColor: variables.green1,
    mapboxStyle: "ckh67moqu0yvl19p3a47tvsqx",
  },
  conversion: {
    fill0: variables.fill0,
    fill1: variables.fillYellow1,
    fill2: variables.fillYellow2,
    fill3: variables.fillYellow3,
    fill4: variables.fillYellow4,
    stroke0: variables.stroke0,
    stroke1: variables.strokeYellow1,
    stroke2: variables.strokeYellow2,
    stroke3: variables.strokeYellow3,
    stroke4: variables.strokeYellow4,
    backgroundColor: variables.yellow1,
    mapboxStyle: "ckhxlnfls0u0k19o002omoe6t",
  },
  extraction: {
    fill0: variables.fill0,
    fill1: variables.fillRed1,
    fill2: variables.fillRed2,
    fill3: variables.fillRed3,
    fill4: variables.fillRed4,
    stroke0: variables.stroke0,
    stroke1: variables.strokeRed1,
    stroke2: variables.strokeRed2,
    stroke3: variables.strokeRed3,
    stroke4: variables.strokeRed4,
    backgroundColor: variables.grey2,
    mapboxStyle: "ckhxlvl2j0yhc19qu9w4yd07p",
  },
  fate: {
    fill0: variables.fill0,
    fill1: variables.fillPurple1,
    fill2: variables.fillPurple2,
    fill3: variables.fillPurple3,
    fill4: variables.fillPurple4,
    stroke0: variables.stroke0,
    stroke1: variables.strokePurple1,
    stroke2: variables.strokePurple2,
    stroke3: variables.strokePurple3,
    stroke4: variables.strokePurple4,
    backgroundColor: variables.purple1,
    mapboxStyle: "ckhxm5tkq0yrn19o54k84vf2f",
  },
};

export { lightTheme, darkTheme, chapterThemes };

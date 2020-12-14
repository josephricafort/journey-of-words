const baseVars = {
  // SCREEN
  small: 375,
  medium: 768,
  large: 1366,
  wide: 1920,

  // COLOR
  // Base
  white: "#ffffff",
  black: "#1a1a1a",
  grey1: "#fafafa",
  grey2: "#eeeeee",
  grey3: "#bdbdbd",
  grey4: "#9e9e9e",
  grey5: "#616161",
  grey6: "#424242",
  grey7: "#212121",
  blueGrey1: "#eceff1",
  blueGrey2: "#b0bec5",
  blueGrey3: "#78909c",
  blueGrey4: "#607d8b",
  blueGrey5: "#455a64",
  blueGrey6: "#37474f",
  blueGrey7: "#263238",
  blue1: "#dbf2fd",
  blue2: "#b6e6fb",
  blue3: "#92d9f9",
  blue4: "#6dcdf7",
  blue5: "#49c0f5",
  blue6: "#3790b8",
  blue7: "#25607b",
  blue8: "#12303d",
  green1: "#dafde1",
  green2: "#b6fbc2",
  green3: "#91f9a4",
  green4: "#6df785",
  green5: "#48f567",
  green6: "#36b84d",
  green7: "#247b34",
  green8: "#123d1a",
  yellow1: "#fdf5d2",
  yellow2: "#fbeaa6",
  yellow3: "#f9e079",
  yellow4: "#f7d54d",
  yellow5: "#f5cb20",
  yellow6: "#b89818",
  yellow7: "#7b6610",
  yellow8: "#3d3308",
  purple1: "#f2e5fd",
  purple2: "#e5cbfb",
  purple3: "#d8b0f9",
  purple4: "#cb96f7",
  purple5: "#be7cf5",
  purple6: "#8f5db8",
  purple7: "#5f3e7b",
  purple8: "#301f3d",
  red1: "#fddfdf",
  red2: "#fbbebe",
  red3: "#f99e9e",
  red4: "#f77d7d",
  red5: "#f55d5d",
  red6: "#b84646",
  red7: "#7b2f2f",
  red8: "#3d1717",

  // Human
  skin: "#c69c6d",
  hair: "#8c6239",
  skinNight: "#4d4d4d",
  hairNight: "#333333",

  // FONTS
  serif: "'Crimson Text', serif",
  sansserif: "'Work Sans', sans-serif",

  // LAYERS (z-Index)
  zContents: 100,
  zVisuals: 50,
  zContent: 0,
  zMap: -50,
  zBackground: -100,
};

const derivedVars = {
  // SCREEN
  breakpointSmall: `min-width: ${baseVars.small}px`,
  breakpointMedium: `min-width: ${baseVars.medium}px`,
  breakpointLarge: `min-width: ${baseVars.large}px`,
  breakpointWide: `min-width: ${baseVars.wide}px`,

  // COLORS
  // primary
  blue: baseVars.blue5,
  green: baseVars.green5,
  yellow: baseVars.yellow5,
  purple: baseVars.purple5,
  red: baseVars.red5,

  // icons
  fill0: baseVars.white,
  stroke0: baseVars.grey5,

  fillBlue0: baseVars.white,
  fillBlue1: baseVars.blue2,
  fillBlue2: baseVars.blue4,
  fillBlue3: baseVars.blue6,
  fillBlue4: baseVars.blue8,

  strokeBlue0: baseVars.grey5,
  strokeBlue1: baseVars.blue4,
  strokeBlue2: baseVars.blue6,
  strokeBlue3: baseVars.blue8,
  strokeBlue4: baseVars.blue8,

  fillGreen0: baseVars.white,
  fillGreen1: baseVars.green2,
  fillGreen2: baseVars.green4,
  fillGreen3: baseVars.green6,
  fillGreen4: baseVars.green8,

  strokeGreen0: baseVars.grey5,
  strokeGreen1: baseVars.green4,
  strokeGreen2: baseVars.green6,
  strokeGreen3: baseVars.green8,
  strokeGreen4: baseVars.green8,

  fillYellow0: baseVars.white,
  fillYellow1: baseVars.yellow2,
  fillYellow2: baseVars.yellow4,
  fillYellow3: baseVars.yellow6,
  fillYellow4: baseVars.yellow8,

  strokeYellow0: baseVars.grey5,
  strokeYellow1: baseVars.yellow4,
  strokeYellow2: baseVars.yellow6,
  strokeYellow3: baseVars.yellow8,
  strokeYellow4: baseVars.yellow8,

  fillPurple0: baseVars.white,
  fillPurple1: baseVars.purple2,
  fillPurple2: baseVars.purple4,
  fillPurple3: baseVars.purple6,
  fillPurple4: baseVars.purple8,

  strokePurple0: baseVars.grey5,
  strokePurple1: baseVars.purple4,
  strokePurple2: baseVars.purple6,
  strokePurple3: baseVars.purple8,
  strokePurple4: baseVars.purple8,

  fillRed0: baseVars.white,
  fillRed1: baseVars.red2,
  fillRed2: baseVars.red4,
  fillRed3: baseVars.red6,
  fillRed4: baseVars.red8,

  strokeRed0: baseVars.grey5,
  strokeRed1: baseVars.red4,
  strokeRed2: baseVars.red6,
  strokeRed3: baseVars.red8,
  strokeRed4: baseVars.red8,
};

const variables = { ...baseVars, ...derivedVars };

export default variables;

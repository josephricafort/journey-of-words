const tattooAreas = [
  {
    id: "#seas, #words, #lands",
    area: "tattooWorld",
    icon: ["boat", "islands", "waves"],
  },
  // { id: "#seas", area: "tattooSea", icon: ["waves"] },
  // { id: "#words", area: "tattooBoat", icon: ["boat"] },
  // { id: "#lands", area: "tattooLand", icon: ["islands"] },
  { id: "#nature", area: "tattooNature", icon: ["flower"] },
  { id: "#resources", area: "tattooResource", icon: ["fishes"] },
  { id: "#society", area: "tattooSociety", icon: ["humans"] },
  {
    id: "#religion",
    area: "tattooReligion",
    icon: ["animism", "christianism", "buddhism", "hinduism"],
  },
  {
    id: "#colonist",
    area: "tattooColonizer",
    icon: [
      "british",
      "french",
      "spanish",
      "american",
      "japanese",
      "portuguese",
      "chinese",
    ],
  },
  { id: "#locked", area: "tattooColonyStatus", icon: ["stillColony"] },
  { id: "#extraction", area: "tattooExtraction", icon: ["pickaxe"] },
  { id: "#government", area: "tattooGovernment", icon: ["building"] },
  {
    id: "#independence",
    area: "tattooIndependence",
    icon: ["flag", "padlock"],
  },
  {
    id: "#country",
    area: "tattooCountry",
    icon: ["ID", "TW", "PH", "MY", "SG", "TH", "VI", "TL"],
  },
];

const areaIconsSelections = [
  { area: "#icon_words", icons: [] },
  { area: "#icon_society", icons: [] },
  { area: "#icon_resources", icons: [] },
  { area: "#icon_nature", icons: [] },
  { area: "#icon_lands", icons: [] },
  {
    area: "#icon_religion",
    icons: ["buddhism_hiduism", "christianism", "islam"],
  },
  {
    area: "#icon_colonist",
    icons: ["british", "french", "spanish", "dutch", "portuguese", "american"],
  },
  { area: "#icon_extraction", icons: ["pickaxe", "fish", "nature", "islands"] },
  { area: "#icon_locked", icons: [] },
  { area: "#icon_government", icons: [] },
  { area: "#icon_independence", icons: ["still_colony", "independent"] },
  { area: "#icon_country", icons: [] },
];

const blinkAnim = `animation: blink 1.25s linear infinite;`;

export { tattooAreas, blinkAnim };

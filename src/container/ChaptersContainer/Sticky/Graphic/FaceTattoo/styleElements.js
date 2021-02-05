const tattooAreas = [
  {
    id: "#seas, #words, #lands",
    chapter: "world",
    area: "tattooWorld",
    icon: ["boat", "islands", "waves"],
  },
  { id: "#nature", chapter: "nature", area: "tattooNature", icon: ["flower"] },
  {
    id: "#resources",
    chapter: "nature",
    area: "tattooResource",
    icon: ["fishes"],
  },
  {
    id: "#society",
    chapter: "nature",
    area: "tattooSociety",
    icon: ["humans"],
  },
  {
    id: "#religion",
    chapter: "conversion",
    area: "tattooReligion",
    icon: ["animism", "christianism", "buddhism", "hinduism"],
  },
  {
    id: "#colonist",
    chapter: "extraction",
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
  {
    id: "#locked",
    chapter: "extraction",
    area: "tattooColonyStatus",
    icon: ["stillColony"],
  },
  {
    id: "#extraction",
    chapter: "extraction",
    area: "tattooExtraction",
    icon: ["pickaxe"],
  },
  {
    id: "#government",
    chapter: "extraction",
    area: "tattooGovernment",
    icon: ["building"],
  },
  {
    id: "#independence",
    chapter: "fate",
    area: "tattooIndependence",
    icon: ["flag", "padlock"],
  },
  {
    id: "#country",
    chapter: "fate",
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

const tattooAreas = [
  { id: "#seas", area: "tattooSea", icon: ["waves"] },
  { id: "#words", area: "tattooBoat", icon: ["boat"] },
  { id: "#lands", area: "tattooLand", icon: ["islands"] },
  { id: "#nature", area: "tattooResource", icon: ["flower"] },
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
    icon: ["TW", "PH", "ID", "MY", "SG", "TH", "VI", "TL"],
  },
];

const blinkKeyframes = `@keyframes blink {
    0% {
      opacity: 1;
    }
  
    50% {
      opacity: 0;
    }
  
    100% {
      opacity: 1;
    }
  }`;

const blinkAnim = `animation: blink 1.25s linear infinite;`;

export { tattooAreas, blinkKeyframes, blinkAnim };

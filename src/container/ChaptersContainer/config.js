export default {
  slides: [
    {
      type: "intro",
      chapter: "nature",
      id: 1,
      contents: {
        chapterLabel: "Chapter II",
        title: "Nature",
      },
    },
    {
      type: "quote",
      id: 1.1,
      contents: {
        quote: {
          an: "Local translation of quote",
          en: "English translation of quote",
        },
        author: "Firstname Lastname",
      },
    },
    {
      type: "face-tattoo",
      id: 1.2,
      icon: "fish",
      contents: {
        title: "Cool title texts here",
        p: [
          "Some very long texts here will be placed that describe something nice and informative about what the writer wants to talk about",
          "Also similar stuffs with the first one blah blah blah.",
          "I don't want to talk about it. :(",
        ],
      },
    },
    {
      type: "intro",
      chapter: "conversion",
      id: 2,
      contents: {
        chapterLabel: "Chapter III",
        title: "Conversion",
      },
    },
    {
      type: "intro",
      chapter: "extraction",
      id: 3,
      contents: {
        chapterLabel: "Chapter IV",
        title: "Extraction",
      },
    },
    {
      type: "intro",
      chapter: "fate",
      id: 4,
      contents: {
        chapterLabel: "Chapter IV",
        title: "Fate",
      },
    },
    // {
    //   type: "face-tattoo",
    //   contents: {
    //     faceTattoo: "fish",
    //     title: "Face tattoo title",
    //     description:
    //       "Some descriptions about what the tattoo is all about.",
    //   },
    // },
    // {
    //   type: "an-distribution",
    //   contents: {
    //     chart: {
    //       title: "Title text about the chart",
    //       data: [1, 2, 3, 4, 5],
    //       labels: {
    //         level0: "Absent",
    //         level1: "Present, but not major",
    //         level2: "Present, and major",
    //         level3: "Present, and principal",
    //       },
    //     },
    //     card: {
    //       title: "Title text about the card",
    //       description: "More detailed descriptions written here.",
    //     },
    //   },
    // },
    // {
    //   type: "words-distribution",
    //   contents: {
    //     title: "Title texts if needed",
    //     description: "Description texts if needed",
    //     data: [1, 2, 3, 4, 5],
    //   },
    // },
  ],
};

const longform = {
  header: {
    title: "The Words That Sailed Across Half The World",
    description:
      "How the shared linguistic ancestry of Austronesians tells us the story of mankind’s greatest expansion and adversities across the vast Indo-Pacific.",
    byline1:
      "Based from the reasearch works of Robert Blust, Russell Gray, Simon Greenhill, Steven Trussel and Joseph Watts.",
    byline2: "Written, designed and developed by Joseph Ricafort.",
  },
  mapboxScrolly: {
    config: {
      style: "mapbox://styles/josephricafort/ckhxlghrg09zp1bqu5s7pt7jl/draft/",
      accessToken:
        "pk.eyJ1Ijoiam9zZXBocmljYWZvcnQiLCJhIjoiY2pueTd4d3lzMDB1ZzNxbGhxZnpyOHZ4eSJ9.SVeNEBhsMbzpUUt9tgbNSg",
      showMarkers: false,
      theme: "light",
      alignment: "left",

      chapters: [
        {
          id: "world-taiwan",
          title:
            "Along these coasts 4000 years ago, there once lived a group of people who ventured on the journey that later became the world’s most widespread migration in human history.",
          description:
            "4,000 years ago, a group of people called the Austronesians were living along the coasts of the island of Taiwan and lived there for thousands of years.",
          location: {
            center: { lon: 120.36092, lat: 23.67234 },
            zoom: 7.38,
            pitch: 15.0,
            bearing: -0.05,
          },
          onChapterEnter: [
            // {
            //   layer: "formosa",
            //   opacity: 1,
            // },
          ],
          onChapterExit: [
            // {
            //   layer: "formosa",
            //   opacity: 0,
            // },
          ],
        },
        {
          id: "world-boat",
          title: "The Austronesians",
          image: "./path/to/image/source.png",
          description:
            "Suddenly, one of the Austronesians unknown to history had a ‘dream’ of how to cross the waters that no one had dared to cross before (Blust 1977, 1984/1985). Through this dream, they innovated a boat by combining a sailing raft used at sea and a dugout canoe, a centuries old boat used on the interior rivers. The outrigger canoe was born! They called it, *qabaŋ₁ PAN boat, canoe. The new outrigger canoe made crossing wide water gaps far easier than had been possible when only bamboo rafts were used at sea!",
          location: {
            center: { lon: 121.126, lat: 22.55054 },
            zoom: 9.77,
            pitch: 52.0,
            bearing: -170.4,
          },
          onChapterEnter: [
            {
              layer: "formosa",
              opacity: 1,
            },
          ],
          onChapterExit: [
            {
              layer: "formosa",
              opacity: 0,
            },
          ],
        },
        {
          id: "world-cagayan",
          title: "Crossing the seas to Northern Philippines",
          image: "./path/to/image/source.png",
          description:
            "Austronesians began moving south to the mouth of the Cagayan river in the northern Philippines.",
          location: {
            center: { lon: 121.11063, lat: 20.84321 },
            zoom: 7.97,
            pitch: 48.0,
            bearing: -178.33,
          },
          onChapterEnter: [
            {
              layer: "northern-philippines",
              opacity: 1,
            },
          ],
          onChapterExit: [
            {
              layer: "northern-philippines",
              opacity: 0,
            },
          ],
        },
        {
          id: "world-expansion-philippines",
          title: "Expansion throughout the Philippine islands",
          image: "./path/to/image/source.png",
          description:
            "They explored, settled and populated the new lands (Philippines). The inter-island settling and expansion continued rapidly across the Philippine islands.",
          location: {
            center: { lon: 122.85694, lat: 17.68924 },
            zoom: 6.13,
            pitch: 45.0,
            bearing: -174.4,
          },
          onChapterEnter: [
            {
              layer: "philippines",
              opacity: 1,
            },
          ],
          onChapterExit: [
            {
              layer: "philippines",
              opacity: 0,
            },
          ],
        },
        {
          id: "world-greater-sunda-isalnds",
          title: "The Greater Sunda Islands",
          image: "./path/to/image/source.png",
          description:
            "Despite their size and proximity to the Asian mainland, islands such as Borneo, Sumatra, Java and Sulawesi had few inhabitants before the arrival of Austronesian speakers some 4,000 years ago. Rice-growing Austronesian cultures then rapidly spread through these Greater Sunda Islands.",
          location: {
            center: { lon: 110.16905, lat: 4.94542 },
            zoom: 5.15,
            pitch: 43.0,
            bearing: -164.05,
          },
          onChapterEnter: [
            {
              layer: "sunda-islands",
              opacity: 1,
            },
          ],
          onChapterExit: [
            {
              layer: "sunda-islands",
              opacity: 0,
            },
          ],
        },
        {
          id: "world-newguinea-papua",
          title: "Island of New Guinea and Papua",
          image: "./path/to/image/source.png",
          description:
            "In eastern Indonesia there was greater contact with a previously-established Papuan population. Other cultural changes no doubt occurred as the Austronesian expansion reached the large island of New Guinea, where Papuan speakers had been established for perhaps 50,000 years.",
          location: {
            center: { lon: 139.35764, lat: -3.97409 },
            zoom: 5.15,
            pitch: 60.0,
            bearing: 132.8,
          },
          onChapterEnter: [
            {
              layer: "papua",
              opacity: 1,
            },
            {
              layer: "fiji",
              opacity: 0,
            },
          ],
          onChapterExit: [
            {
              layer: "papua",
              opacity: 0,
            },
          ],
        },
        {
          id: "world-new-britain-bismarck",
          title: "New Britain and Bismarck",
          image: "./path/to/image/source.png",
          description:
            "By about 3,400 years ago an eastern branch of the Austronesian expansion had reached the island of New Britain in the Bismarck archipelago, and was producing a type of pottery with highly distinctive decorations known from the name of its type site in New Caledonia as ‘Lapita’ ware in the archeological literature (Kirch 1997). Austronesian speakers using single outrigger canoes and producing Lapita pottery had settled virtually all habitable islands in the Bismarck archipelago, the Solomons chain, the Santa Cruz islands, Vanuatu, New Caledonia and the Loyalty islands, and the Fiji-Tonga-Samoa triangle.",
          location: {
            center: { lon: 155.1758, lat: -7.33014 },
            zoom: 5.62,
            pitch: 59.5,
            bearing: 118.44,
          },
          onChapterEnter: [
            {
              layer: "fiji",
              opacity: 1,
            },
          ],
          onChapterExit: [
            // {
            //   layer: "fiji",
            //   opacity: 0,
            // },
          ],
        },
        {
          id: "world-long-pause",
          title: "The Long Pause",
          image: "./path/to/image/source.png",
          description:
            "By about 3,100 years ago, and then evidently faced navigational challenges they could not immediately overcome, bringing the Austronesian expansion to a temporary halt at about 170 degrees west longitude. The vast seas ahead deemed to become even more daunting and extremely difficult to navigate as islands became far more distant.",
          location: {
            center: { lon: 155.1758, lat: -7.33014 },
            zoom: 5.62,
            pitch: 59.5,
            bearing: 118.44,
          },
          onChapterEnter: [
            // {
            //   layer: "fiji",
            //   opacity: 1,
            // },
          ],
          onChapterExit: [
            // {
            //   layer: "fiji",
            //   opacity: 0,
            // },
          ],
        },
        {
          id: "world-at-this-stage",
          title: "China, Greece and Rome were still in land",
          image: "./path/to/image/source.png",
          description: [
            "Around 1,100 BC still at a very early stage, the Austronesian expansion was impressive, as it covered some 95 degrees of longitude from northern Sumatra in the west to Samoa in the east, and 47 degrees of latitude from Taiwan in the north to New Caledonia in the south.",
            "Chinese civilization, in the form of the Western Zhou dynasty, was still very early its long history, the civilization of Greece had not yet blossomed into fullness, and it was hundreds of years before the rise of Rome, but through skill in deep sea navigation, Austronesian speakers had already settled lands that had never previously been touched by humans! All of this was possible because these people, uniquely at the time, had learned how to find their way across the largest ocean on Earth by following the winds, currents, and the flights of birds during the daylight hours, and the stars at night.  To them the sea was no more a barrier --- rather, it was a highway into the unknown (Doran 1981, Kirch 2000).",
          ],
          location: {
            center: { lon: 155.1758, lat: -7.33014 },
            zoom: 5.62,
            pitch: 59.5,
            bearing: 118.44,
          },
          onChapterEnter: [
            // {
            //     layer: 'fiji',
            //     opacity: 1
            // }
          ],
          onChapterExit: [
            // {
            //     layer: 'fiji',
            //     opacity: 0
            // }
          ],
        },
        {
          id: "world-rising-sun",
          title: "Another Dream Towards The Rising Sun",
          image: "./path/to/image/source.png",
          description:
            "A full two millennia after the settlement of western Polynesia, voyagers set out again toward the rising sun. Another person dreamed of innovating the boat once again, putting two canoe hulls side-by-side and a platform across the top. This innovation made less drag, more space to carry more crew, women and children, food and crops for the long journey ahead. Now, once again, the ocean was a highway waiting to be travelled by capable sailors, not an obstacle stopping their progress.",
          location: {
            center: { lon: 155.1758, lat: -7.33014 },
            zoom: 5.62,
            pitch: 59.5,
            bearing: 118.44,
          },
          onChapterEnter: [
            {
              layer: "fiji",
              opacity: 1,
            },
          ],
          onChapterExit: [
            // {
            //     layer: 'fiji',
            //     opacity: 0
            // }
          ],
        },
        {
          id: "world-tahiti-society-islands",
          title: "Tahiti and the Society Islands",
          image: "./path/to/image/source.png",
          description:
            "Tahiti and the other Society Islands appear to have been settled first, at around 1000 AD.",
          location: {
            center: { lon: -151.39495, lat: -16.95464 },
            zoom: 5.15,
            pitch: 51.0,
            bearing: 111.94,
          },
          onChapterEnter: [
            {
              layer: "tahiti",
              opacity: 1,
            },
            {
              layer: "fiji",
              opacity: 0,
            },
            {
              layer: "polynesia",
              opacity: 0,
            },
          ],
          onChapterExit: [
            {
              layer: "tahiti",
              opacity: 0,
            },
          ],
        },
        {
          id: "world-polynesian-triangle",
          title: "The Polynesian Triangle",
          image: "./path/to/image/source.png",
          description:
            "Then, within a century or two, all other habitable islands within the Polynesian triangle were settled by Polynesian speakers, who evidently maintained bidirectional voyaging until the need to maintain contact with people still recognized as relatives was lost through generational distancing (Wilmhurst, Hunt, Lipo and Anderson 2011).",
          location: {
            center: { lon: -147.6826, lat: -27.11249 },
            zoom: 2.91,
            pitch: 43.0,
            bearing: 116.04,
          },
          onChapterEnter: [
            {
              layer: "polynesia",
              opacity: 1,
            },
          ],
          onChapterExit: [
            // {
            //   layer: "polynesia",
            //   opacity: 0,
            // },
          ],
        },
        {
          id: "world-barito",
          title: "Some Austronesian from Barito river basin",
          image: "./path/to/image/source.png",
          description:
            "During this same time period another group of Austronesian speakers from the Barito river basin in southeast Borneo, ventured out from their home territory.",
          location: {
            center: { lon: 112.89527, lat: -0.7183 },
            zoom: 6.65,
            pitch: 48.5,
            bearing: -178.4,
          },
          onChapterEnter: [
            // {
            //     layer: 'layer-name',
            //     opacity: 1
            // }
          ],
          onChapterExit: [
            // {
            //     layer: 'layer-name',
            //     opacity: 0
            // }
          ],
        },
        {
          id: "world-barito-voyage",
          title: "Following the Coast of India, then Rested in Mozambique",
          image: "./path/to/image/source.png",
          description:
            "With the help of Malays from the Indianized state of Sriwijaya in southern Sumatra, and following the coast of the Malay peninsula, Burma and India, past Saudi Arabia, they reached the Mozambique coast of the African continent.",
          location: {
            center: { lon: 89.62579, lat: 7.36388 },
            zoom: 4.22,
            pitch: 60.0,
            bearing: -87.02,
          },
          onChapterEnter: [
            {
              layer: "polynesia",
              opacity: 1,
            },
            {
              layer: "madagascar",
              opacity: 0,
            },
          ],
          onChapterExit: [
            // {
            //     layer: 'layer-name',
            //     opacity: 0
            // }
          ],
        },
        {
          id: "world-madagascar",
          title: "The New Home In Madagascar",
          image: "./path/to/image/source.png",
          description:
            "There they paused for a short time, leaving traces of their outrigger canoe technology among Bantu speakers with whom they came in contact before crossing the Mozambique channel to settle the large island of Madagascar (Dahl 1951, 1991, Adelaar 1989).",
          location: {
            center: { lon: 47.87037, lat: -18.20538 },
            zoom: 5.89,
            pitch: 49.0,
            bearing: -117.42,
          },
          onChapterEnter: [
            {
              layer: "madagascar",
              opacity: 1,
            },
            {
              layer: "polynesia",
              opacity: 0,
            },
          ],
          onChapterExit: [
            // {
            //   layer: "madagascar",
            //   opacity: 0,
            // },
          ],
        },
        {
          id: "world-austronesian-complete",
          title: "Stretching across half the world",
          image: "./path/to/image/source.png",
          description:
            "The ‘Austronesian world’ was now complete, spanning some 206 degrees of longitude, from Madagascar, just off the east coast of Africa, to Easter Island, about 2,200 miles west of Chile in South America, and 72 degrees of latitude from northern Taiwan to the south island of New Zealand. Stretching more than halfway around the planet, this was the most widespread language family on Earth before the European colonial expansions of the past five centuries.  And it all began in Taiwan over 4,000 years ago, when someone unknown to history had a ‘dream’ of how to cross the waters that no one had dared to cross before (Blust 1977, 1984/1985).",
          location: {
            center: { lon: 140.95198, lat: -1.68177 },
            zoom: 1.53,
            pitch: 0.0,
            bearing: 0.0,
          },
          onChapterEnter: [
            // {
            //     layer: 'layer-name',
            //     opacity: 1
            // }
          ],
          onChapterExit: [
            // {
            //     layer: 'layer-name',
            //     opacity: 0
            // }
          ],
        },
      ],
    },
  },
  chaptersScrolly: {
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
            an:
              "Te tiro atu to kanohi ki tairawhiti ana tera whiti te ra kite ataata ka hinga ki muri kia koe.",
            en: "Turn your face to the sun and the shadows fall behind you.",
          },
          author: "- Maori proverb",
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
          chapterLabel: "Chapter V",
          title: "Fate",
        },
      },
    ],
  },
  footer: {},
};

export default longform;

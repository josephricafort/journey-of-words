const longform = {
  header: {
    title: "The Words That Sailed Across Half The World",
    description:
      "How the shared linguistic ancestry of Austronesians tells us the story of mankind’s greatest expansion and adversities across the vast Indo-Pacific.",
    byline1:
      "Based from the research works of Robert Blust, Russell Gray, Simon Greenhill, Steven Trussel and Joseph Watts.",
    byline2:
      "Written, designed and developed by Joseph Ricafort. Illustrations by Colleen Joyce Ricafort",
  },
  introKicker: {
    config: {
      slides: [
        {
          type: "kicker",
          id: 0,
          contents: {
            title:
              "Along these coasts 4000 years ago, there once lived a group of people who ventured on the journey that later became the world’s most widespread migration in human history.",
          },
        },
        {
          type: "intro",
          id: 0.1,
          chapter: "world",
          contents: {
            chapterLabel: "Chapter I",
            title: "World",
            byline:
              'An adaptation of Robert Blust’s "Out Of Taiwan: The Austronesian Expansion As A Chapter In Human History"',
          },
        },
      ],
    },
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
          description:
            "4,000 years ago, a group of people called **the Austronesians**, living off the coasts of the island of present-day Taiwan, lived there for thousands of years.",
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
          id: "world-boat-1",
          icon: "tpc_world_boatsail.svg",
          description: [
            `Suddenly, one of the Austronesians unknown to history had a **‘dream’** of how to cross the waters that no one had dared to cross before *(Blust 1977, 1984/1985)*.`,
            `Through this dream, they innovated a boat by combining a **sailing raft** used at sea and a **dugout canoe**, a centuries old boat used on the interior rivers. The **outrigger canoe** was born!`,
          ],
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
          id: "world-boat-2",
          description: [
            `They called it:`,
            `<span class="word-an">**\*qabaŋ₁**</span><span class="word-en"> (boat, canoe) </span> <span class="graphic-desc">*Proto-Austronesian (PAN, said to be the first reconstructed language of the Austronesians.</span>`,
            `The new outrigger canoe made crossing wide water gaps far easier than had been possible when only bamboo rafts were used at sea!`,
          ],
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
          title: "Rapid expansion throughout the Philippine islands",
          description:
            "Austronesians began moving south to the mouth of the **Cagayan river** in the **northern Philippines**.",
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
          description: `They explored, settled and populated the new lands (present-day Philippines). The inter-island settling and expansion continued rapidly across the Philippine islands.`,
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
          title: "Populating the Greater Sunda Islands",
          description: [
            "Despite their size and proximity to the Asian mainland, islands such as **Borneo**, **Sumatra**, **Java** and **Sulawesi** had few inhabitants before the arrival of Austronesian speakers some 4,000 years ago.",
            "Rice-growing Austronesian cultures then rapidly spread through these islands.",
          ],
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
          title: "Contact with locals in New Guinea and Papua",
          description:
            "In eastern Indonesia there was greater contact with a previously-established **Papuan population**. Other cultural changes no doubt occurred as the Austronesian expansion reached the large island of New Guinea, where Papuan speakers had been established for perhaps **50,000 years**!",
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
          description: [
            "By about 3,400 years ago an eastern branch of the Austronesian expansion had reached **the island of New Britain** in the **Bismarck archipelago**, and was producing a type of pottery with highly distinctive decorations known from the name of its type site in New Caledonia as **‘Lapita’ ware** in the archeological literature *(Kirch 1997)*.",
          ],
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
          id: "world-new-britain-bismarck-2",
          description: [
            "Austronesian speakers using single outrigger canoes and producing Lapita pottery had settled virtually all habitable islands in the **Bismarck archipelago**, **the Solomons chain**, **the Santa Cruz islands**, **Vanuatu**, **New Caledonia and the Loyalty islands**, and **the Fiji-Tonga-Samoa triangle.**",
          ],
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
          icon: "tpc_world_land.svg",
          title: "The Long Pause",
          description: [
            "By about **3,100 years ago**, and then evidently faced navigational challenges they could not immediately overcome, bringing the Austronesian expansion to a temporary halt.",
            "The vast seas ahead deemed to become even more daunting and extremely difficult to navigate as islands became far more distant!",
          ],
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
          id: "world-at-this-stage-1",
          description: [
            "Around 1,100 BC still at a very early stage, the Austronesian expansion was impressive, as it covered some **95 degrees of longitude** from northern Sumatra in the west to Samoa in the east, and **47 degrees of latitude** from Taiwan in the north to New Caledonia in the south.",
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
          id: "world-at-this-stage-2",
          title: "China, Greece and Rome were still in land",
          description: [
            "**Chinese civilization**, in the form of the Western Zhou dynasty, was still very early its long history, the **civilization of Greece** had not yet blossomed into fullness, and it was hundreds of years before the **rise of Rome**.",
            "Through skill in deep sea navigation, Austronesian speakers had already settled lands that had never previously been touched by humans! All of this was possible because they had learned how to find their way across the largest ocean on Earth by following the winds, currents, and the flights of birds during the daylight hours, and the stars at night.",
            "To them the sea was no more a barrier, rather it was a highway into the unknown! *(Doran 1981, Kirch 2000)*.",
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
          icon: "tpc_world_sea.svg",
          title: "Another Dream Towards The Rising Sun",
          description: [
            "A full two millennia after the settlement of western Polynesia, voyagers set out again toward the rising sun.",
            "Another person dreamed of innovating the boat once again, putting **two canoe hulls side-by-side** and **a platform across the top**. This innovation made less drag, more space to carry more crew, women and children, food and crops for the long journey ahead.",
            "Now, once again, the ocean was a highway waiting to be travelled by capable sailors, not an obstacle stopping their progress.",
          ],
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
          description:
            "**Tahiti and the other Society Islands** appear to have been settled first, at around **1000 AD**.",
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
          description: [
            "Then, within a century or two, all other habitable islands within **the Polynesian triangle** were settled by Polynesian speakers, a collective subgroup of the Austronesians.",
            "They evidently maintained bidirectional voyaging until the need to maintain contact with people still recognized as relatives was lost through generational distancing *(Wilmhurst, Hunt, Lipo and Anderson 2011)*.",
          ],
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
          title: "Some Austronesians from the Barito river basin",
          description:
            "During this same time period another group of Austronesian speakers from the **Barito river basin in southeast Borneo**, ventured out from their home territory.",
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
          title: "Following the coasts of India, then rested in Mozambique",
          description: [
            "With the help of Malays from the Indianized state of Sriwijaya in southern Sumatra, and following the coast of the Malay peninsula, Burma and India, past Saudi Arabia, they reached the **Mozambique coast of the African continent**.",
            "They paused for a short time, leaving traces of their outrigger canoe technology among Bantu speakers with whom they came in contact.",
          ],
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
          title: "Madagascar: The New Home",
          description:
            "Crossing the Mozambique channel, they settled the large island of **Madagascar**. *(Dahl 1951, 1991, Adelaar 1989)*.",
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
          description: [
            "The **‘Austronesian world’** was now complete, spanning some 206 degrees of longitude, from Madagascar, just off the east coast of Africa, to Easter Island, about 2,200 miles west of Chile in South America, and 72 degrees of latitude from northern Taiwan to the south island of New Zealand.",
            "Stretching more than halfway around the planet, this was the most widespread language family on Earth before the European colonial expansions of the past five centuries",
            "The expansion all began in Taiwan over 4,000 years ago, when someone unknown to history had a ‘dream’ of how to cross the waters that no one had dared to cross before *(Blust 1977, 1984/1985)*.",
          ],
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
        type: "cover",
        chapter: "nature",
        id: 1.0,
        contents: {
          chapterLabel: "Chapter II",
          title: "Nature",
          byline: "The Austronesian Way of Life and Kinship with Nature",
        },
      },
      {
        type: "quote",
        id: 1.01,
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
        type: "intro",
        chapter: "nature",
        id: 1.02,
        contents: {
          p: [
            "From 4000 BC to 1500BC, the daily lives of the Austronesians were often associated with deities and nature, close ties with family and high respect with the ancestors. The connections between the Austronesian words and their respective cultures have a striking pattern and similarities.",
          ],
        },
      },
      {
        type: "face-tattoo",
        id: 1.02,
        tattoo: {
          area: "tattooWorld",
          isShown: true,
        },
        contents: {
          title: "Tattoo As A Form Of Expression",
          iconItems: [
            "tpc_world_land.svg",
            "tpc_world_boatwords.svg",
            "tpc_world_sea.svg",
          ],
          p: [
            "In most Austronesian cultures, **Tattoos** showcase one's life experiences, especially in Philippine and Polynesian cultures",
            "**Boat** as a vessel of *oral traditions*, **islands** as a symbol of *adventure and exploration* and **waves** representing the *mastery of seafaring*. These are some of the important things common among most Austronesian cultures",
          ],
        },
      },
      {
        type: "face-tattoo",
        id: 1.03,
        tattoo: {
          area: "tattooNature",
          isShown: true,
          icon: "flower",
        },
        contents: {
          title: "Kinship with Nature",
          icon: "tpc_nature_agri.svg",
          p: [
            "Aside from being master seafarers, the Austronesians have a deep connection with nature, the seas. They maintained their close relationship with them through worship and rituals.",
          ],
        },
      },
      {
        type: "distribution-chart",
        id: 1.04,
        contents: {
          icon: "tpc_nature_agri.svg",
          title: "A Deeper Connection with Nature",
          p: [
            "The Austronesians believe strongly believe that the forces of nature are controlled by or imbued with the supernatural. It is a belief that is common among most Austronesians.",
            "Explore the map by hovering the dots. Each dot represent an Austronesian culture or subgroup.",
          ],
        },
        data: {
          title:
            "Forces of nature are controlled or embued by the supernatural.",
          varItems: [
            {
              variable: "forcenature",
              varDefinition:
                "Forces of nature are controlled or embued by the supernatural.",
            },
          ],
          varLegend: [
            { value: 1, description: "Present" },
            { value: 0, description: "Absent" },
            { value: "?", description: "Missing data" },
          ],
        },
      },
      {
        type: "word-story",
        id: 1.05,
        contents: {
          wordAn: "*maCa",
          wordEn: "eye",
          p: [
            "The daily life of the Austronesians are being reflects the words and languages they use.",
            "The word for eye in Austronesian languages is very stable where the sets of words are similar in sound and meaning.",
          ],
        },
      },
      {
        type: "face-tattoo",
        id: 1.06,
        tattoo: {
          area: "tattooResource",
          isShown: true,
        },
        contents: {
          icon: "tpc_nature_aqua.svg",
          title: "Nature Provider Tattoo",
          p: [
            "Being knowledgeable about nature, they were also experts in agriculture and domestication of animals which has become their major food source. The surrounding seas and forests have also provided them with abundant food resources through fishing and hunting.",
          ],
        },
      },
      {
        type: "distribution-chart",
        id: 1.07,
        contents: {
          icon: "tpc_nature_aqua.svg",
          title: "Nature as a Provider",
          p: [
            "Being knowledgeable about nature, they were also experts in agriculture and domestication of animals which has become their major food source. The surrounding seas and forests have also provided them with abundant food resources through fishing and hunting.",
          ],
        },
        data: {
          title: "Belief in the forces of nature",
          varItems: [
            // {
            //   variable: "landhuntind",
            //   varDefinition:
            //     "Forces of nature are controlled or embued by the supernatural.",
            // },
            {
              variable: "watergathergroup",
              varDefinition:
                "Forces of nature are controlled or embued by the supernatural.",
            },
          ],
          varLegend: [
            {
              value: 4,
              description:
                "Principal (more important than any other source of food)",
            },
            {
              value: 3,
              description: "Major (one of the most important sources of food)",
            },
            {
              value: 2,
              description:
                "Medium (a significant food source, but not one of the most important sources of food)",
            },
            {
              value: 1,
              description:
                "Minor (forms a relatively insignificant part of diet)",
            },
            {
              value: 0,
              description:
                "Absent (not practiced in the culture, or practiced but not a food source)",
            },
            { value: "?", description: "Missing data" },
          ],
        },
      },
      {
        type: "face-tattoo",
        id: 1.08,
        tattoo: {
          area: "tattooSociety",
          isShown: true,
        },
        contents: {
          icon: "tpc_nature_people.svg",
          title: "Society Tattoo",
          p: [
            "Austronesians value their family and community. They are also sociable and like to be with others. They also have a unique way of expressing their emotions using their body parts.",
          ],
        },
      },
      {
        type: "distribution-chart",
        id: 1.09,
        contents: {
          icon: "tpc_nature_people.svg",
          title: "Family and Community",
          p: [
            "Austronesians value their family and community. They are also sociable and like to be with others. They also have a unique way of expressing their emotions using their body parts.",
          ],
        },
        data: {
          title: "Belief in the forces of nature",
          varItems: [
            // {
            //   variable: "landhuntind",
            //   varDefinition:
            //     "Forces of nature are controlled or embued by the supernatural.",
            // },
            {
              variable: "ancestralspirits",
              varDefinition:
                "Forces of nature are controlled or embued by the supernatural.",
            },
          ],
          varLegend: [
            {
              value: 3,
              description:
                "Present, and the principal focus of supernatural practice",
            },
            {
              value: 2,
              description:
                "Present, and a major focus of supernatural practice",
            },
            {
              value: 1,
              description:
                "Present, but not a major focus of supernatural practice",
            },
            {
              value: 0,
              description:
                "Absent (do not feature in the belief system of the culture)",
            },
            { value: "?", description: "Missing data" },
          ],
        },
      },
      {
        type: "words-chart",
        id: 1.1,
        icon: "boat",
        contents: {
          title: "Words Chart",
          p: [
            "Some very long texts here will be placed that describe something nice and informative about what the writer wants to talk about",
          ],
        },
        data: {
          wordsItems: [
            {
              category: "nature",
              words: [
                { wordsAn: "*taneq", wordsEn: "earth" },
                { wordsAn: "*buŋa", wordsEn: "flower" },
                { wordsAn: "*likaC", wordsEn: "lightning" },
              ],
            },
            {
              category: "seas",
              words: [
                { wordsAn: "*bali₃", wordsEn: "sand" },
                { wordsAn: "*laŋiC", wordsEn: "sky" },
                { wordsAn: "*Nabek", wordsEn: "outrigger float" },
              ],
            },
            {
              category: "agriculture",
              words: [
                { wordsAn: "*punti1", wordsEn: "banana" },
                { wordsAn: "*niuR", wordsEn: "coconut" },
                { wordsAn: "*buaq", wordsEn: "fruit" },
              ],
            },
          ],
        },
      },
      {
        type: "outro",
        chapter: "nature",
        id: 1.11,
        contents: {
          p: [
            "The Austronesian way of life has been generally characterized as simple island life, spiritually connected with nature and have a greater value for family and community. Nature has become the Austronesians’ resource provider. It provided them with all their needs from food, shelter, clothing and other needs.",
          ],
        },
      },
      {
        type: "outro",
        chapter: "nature",
        id: 1.12,
        contents: {
          p: [
            "Meanwhile, a group of people sailing from far away lands made contact with the Austronesians of maritime Southeast Asia. Along with trade, they brought their different views of the world, their beliefs of a more powerful God, much larger than nature and spirits.",
            "Will they be repulsive to the incoming foreign traders that may contradict their faith? Or will they embrace the faiths along with the riches the traders brought along?",
          ],
        },
      },
      {
        type: "cover",
        chapter: "conversion",
        id: 2,
        contents: {
          chapterLabel: "Chapter III",
          title: "Conversion",
        },
      },
      {
        type: "face-tattoo",
        id: 2.1,
        tattoo: {
          area: "tattooReligion",
          isShown: true,
          icon: "islam",
        },
        contents: {
          title: "Sea tattoo chart here",
          p: [
            "Some very long texts here will be placed that describe something nice and informative about what the writer wants to talk about",
            "Also similar stuffs with the first one blah blah blah.",
            "I don't want to talk about it. :(",
          ],
        },
      },
      {
        type: "word-story",
        id: 2.2,
        contents: {
          wordAn: "*untuŋ",
          wordEn: "eye",
          p: [
            "The daily life of the Austronesians are being reflects the words and languages they use.",
            "The word for eye in Austronesian languages is very stable where the sets of words are similar in sound and meaning.",
          ],
        },
      },
      {
        type: "words-chart",
        id: 2.21,
        icon: "boat",
        contents: {
          title: "Words Chart",
          p: [
            "Some very long texts here will be placed that describe something nice and informative about what the writer wants to talk about",
          ],
        },
        data: {
          wordsItems: [
            // {
            //   category: "animal domestication",
            //   words: [{ wordsEn: "chicken", wordsAn: "*manuk" }],
            // },
            // {
            //   category: "family & social",
            //   words: [
            //     { wordsAn: "*amax", wordsEn: "father" },
            //     { wordsAn: "*ina", wordsEn: "mother" },
            //     { wordsAn: "*kuCux", wordsEn: "head louse" },
            //   ],
            // },
            {
              category: "trade",
              words: [
                { wordsAn: "*untuŋ", wordsEn: "fortuneluckfortune" },
                { wordsAn: "*akal", wordsEn: "trickruseschemewits" },
                { wordsAn: "*dáyaʔ", wordsEn: "deceittrickeryfraud" },
                { wordsAn: "*baraŋ", wordsEn: "putarrangeputinorder" },
                {
                  wordsAn: "*dáyaʔ",
                  wordsEn: "goodsbelongingsthingspossessions",
                },
              ],
            },
          ],
        },
      },
      {
        type: "cover",
        chapter: "extraction",
        id: 3,
        contents: {
          chapterLabel: "Chapter IV",
          title: "Extraction",
        },
      },
      {
        type: "distribution-chart",
        id: 3.2,
        icon: "pickaxe",
        contents: {
          title: "Austronesians and nature",
          p: [
            "Being knowledgeable about nature, they were also experts in agriculture and domestication of animals which has become their major food source. The surrounding seas and forests have also provided them with abundant food resources through fishing and hunting.",
          ],
          data: "./some-github-data-url-here",
        },
        data: {
          varItems: [
            {
              variable: "seaport",
              varDefinition: "Seaport",
            },
            {
              variable: "airtravel",
              varDefinition: "Air travel",
            },
            {
              variable: "vehiclesroads",
              varDefinition: "Vehicles roads",
            },
          ],
          varLegend: [
            { value: 0, description: "Absent" },
            { value: 1, description: "Present" },
            { value: 2, description: "Minor" },
            { value: 3, description: "Major" },
            { value: 4, description: "Primary" },
          ],
        },
      },
      {
        type: "words-chart",
        id: 3.1,
        icon: "boat",
        contents: {
          title: "Words Chart",
          p: [
            "Some very long texts here will be placed that describe something nice and informative about what the writer wants to talk about",
          ],
        },
        data: {
          wordsItems: [
            {
              category: "emotion & expression",
              words: [
                { wordsAn: "*maCa", wordsEn: "eye" },
                { wordsAn: "*susu1", wordsEn: "female breast" },
                { wordsAn: "*NiSawa", wordsEn: "breath" },
                { wordsAn: "*qaCay", wordsEn: "liver" },
                { wordsAn: "*takut", wordsEn: "fear" },
                { wordsAn: "*batux", wordsEn: "stone" },
              ],
            },
          ],
        },
      },
      {
        type: "cover",
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

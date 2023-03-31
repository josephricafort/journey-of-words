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
          alignment: "center",
          contents: {
            title:
              "Along these coasts 4,000 years ago, there once lived a group of people who ventured on a journey...",
          },
        },
        {
          type: "kicker",
          id: 0.1,
          alignment: "center",
          contents: {
            title:
              "...a journey that later became the world’s most widespread migration in human history.",
          },
        },
        {
          type: "main-intro",
          id: 0.2,
          alignment: "center",
          chapter: "world",
          contents: {
            chapterLabel: "Chapter I",
            title: "The Words That Sailed Across Half The World",
            p: [
              "Understanding the evolution of boat technology and linguistic evidence and tracing the migration of Austronesian peoples",
              'An adaptation of Dr. Robert Blust’s "Out Of Taiwan: The Austronesian Expansion As A Chapter In Human History"',
            ],
          },
        },
      ],
    },
  },
  mapboxScrolly: {
    config: {
      style: "mapbox://styles/josephricafort/ckhxlghrg09zp1bqu5s7pt7jl",
      accessToken:
        "pk.eyJ1Ijoiam9zZXBocmljYWZvcnQiLCJhIjoiY2pueTd4d3lzMDB1ZzNxbGhxZnpyOHZ4eSJ9.SVeNEBhsMbzpUUt9tgbNSg",
      showMarkers: false,
      theme: "light",
      alignment: "left",
      chapters: [
        {
          id: "world-taiwan",
          description:
            "5,000 years ago, a group of people called **the Austronesians**, living off the coasts of the island of present-day Taiwan, lived there for thousands of years.",
          // image: "tao_fishermen_1940_lanyu_airport.jpg",
          // imgcaption:
          //   "Tao fishermen (circa late 1940s). Photo taken at Lanyu's airport.",
          location: {
            center: { lon: 120.36092, lat: 23.67234 },
            zoom: 7.38,
            pitch: 15.0,
            bearing: -0.05,
          },
          onChapterEnter: [
            {
              layer: "formosa",
              opacity: 0,
            },
          ],
          onChapterExit: [
            {
              layer: "formosa",
              opacity: 0,
            },
          ],
          customData: {
            year: "5,000 years ago",
            distToRapanui: { start: 0, end: 0 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: [],
          },
        },
        {
          id: "world-boat-1",
          icon: "tpc_world_boatsail.svg",
          description: [
            `Suddenly, one of the Austronesians unknown to history had a **‘dream’** of how to cross the waters that no one had dared to cross before *(Blust 1977, 1984/1985)*.`,
            `Through this dream, they innovated a boat by combining a **sailing raft** used at sea and a **dugout canoe**, a centuries old boat used on the interior rivers. The **outrigger canoe** was born!`,
          ],
          image: "austronesia_lanyu_community_boat_celebrate.jpg",
          imgcaption:
            "Mural paintings of Tao people celebrating about fishing taken at Lanyu Island, Taiwan. Photo by Jean-Claude Latombe (April 2017)",
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
          customData: {
            year: "5,000 years ago",
            distToRapanui: { start: 0, end: 0 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: ["Taiwan"],
          },
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
          customData: {
            year: "5,000 years ago",
            distToRapanui: { start: 0, end: 0 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: ["Taiwan"],
          },
        },
        {
          id: "world-cagayan",
          title: "Rapid expansion throughout the Philippine islands",
          description:
            "Austronesians began moving south to the mouth of the **Cagayan river** in the **northern Philippines**.",
          image: "barangayan_cagayan_river.jpg",
          imgcaption:
            "A barangayan boat in Cagayan River, Philippines. Photo by Henry Townsend (1917)",
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
          customData: {
            year: "4,200 years ago",
            distToRapanui: { start: 0, end: 493 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: ["Taiwan", "Philippines"],
          },
        },
        {
          id: "world-expansion-philippines",
          description: `They explored, settled and populated the new lands (present-day Philippines). The inter-island settling and expansion continued rapidly across the Philippine islands.`,
          image: "karakoa.jpg",
          imgcaption:
            'A karakoa "caracoa" from *The Discovery and Conquest of the Molucco and Philippine Islands (1711) by Bartolomé Leonardo de Argensola.',
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
          customData: {
            year: "4,200 years ago",
            distToRapanui: { start: 493, end: 1264 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: ["Taiwan", "Philippines"],
          },
        },
        {
          id: "world-greater-sunda-isalnds",
          title: "Populating the Greater Sunda Islands",
          description: [
            "Despite their size and proximity to the Asian mainland, islands such as **Borneo**, **Sumatra**, **Java** and **Sulawesi** had few inhabitants before the arrival of Austronesian speakers some 4,000 years ago.",
            "Rice-growing Austronesian cultures then rapidly spread through these islands.",
          ],
          image: "halmahera_pakata_tobelo.jpg",
          imgcaption:
            "Halmahera Pakata Tobelo (circa 1920). Smaller types of boats suitable for fishing, coastal trade, trade between closely spaced islands or transporting smaller groups of people. Source: [Collectie Stichting National Museum van Wereldculturen](https://collectie.wereldculturen.nl/?query=search=*=TM-10010571)",
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
          customData: {
            year: "4,000 years ago",
            distToRapanui: { start: 1264, end: 2901 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: ["Taiwan", "Philippines", "Greater Sunda Islands"],
          },
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
          customData: {
            year: "4,000 years ago",
            distToRapanui: { start: 2901, end: 6172 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: [
              "Taiwan",
              "Philippines",
              "Greater Sunda Islands",
              "Melanesia",
            ],
          },
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
          customData: {
            year: "3,400 years ago",
            distToRapanui: { start: 6172, end: 8620 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: [
              "Taiwan",
              "Philippines",
              "Greater Sunda Islands",
              "Melanesia",
            ],
          },
        },
        {
          id: "world-new-britain-bismarck-2",
          description: [
            "Austronesian speakers using single outrigger canoes and producing Lapita pottery had settled virtually all habitable islands in the **Bismarck archipelago**, **the Solomons chain**, **the Santa Cruz islands**, **Vanuatu**, **New Caledonia and the Loyalty islands**, and **the Fiji-Tonga-Samoa triangle.**",
          ],
          image: "melanesia_boat_landscape.jpg",
          imgcaption:
            "Tepukei or Folafolau (Bluewater outrigger boat with a crab-claw sail). Photo by Bin im Garten (April 2014)",
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
          customData: {
            year: "3,100 years ago",
            distToRapanui: { start: 8620, end: 8620 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: [
              "Taiwan",
              "Philippines",
              "Greater Sunda Islands",
              "Melanesia",
            ],
          },
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
          customData: {
            year: "3,100 years ago",
            distToRapanui: { start: 8620, end: 8620 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: [
              "Taiwan",
              "Philippines",
              "Greater Sunda Islands",
              "Melanesia",
            ],
          },
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
          customData: {
            year: "1,100 BC",
            distToRapanui: { start: 8620, end: 8620 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: [
              "Taiwan",
              "Philippines",
              "Greater Sunda Islands",
              "Melanesia",
            ],
          },
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
          customData: {
            year: "1,100 BC",
            distToRapanui: { start: 8620, end: 8620 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: [
              "Taiwan",
              "Philippines",
              "Greater Sunda Islands",
              "Melanesia",
            ],
          },
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
          image: "polynesian_canoe_herb_cane.jpg",
          imgcaption:
            "Polynesian canoe. Portrait by [Herb Cane](https://www.herbkanehawaii.com/)",
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
          customData: {
            year: "1,000 AD",
            distToRapanui: { start: 8620, end: 8620 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: [
              "Taiwan",
              "Philippines",
              "Greater Sunda Islands",
              "Melanesia",
            ],
          },
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
          customData: {
            year: "1,000 AD",
            distToRapanui: { start: 8620, end: 10815 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: [
              "Taiwan",
              "Philippines",
              "Greater Sunda Islands",
              "Melanesia",
            ],
          },
        },
        {
          id: "world-polynesian-triangle",
          title: "The Polynesian Triangle",
          description: [
            "Then, within a century or two, all other habitable islands within **the Polynesian triangle** were settled by Polynesian speakers, a collective subgroup of the Austronesians.",
            "They evidently maintained bidirectional voyaging until the need to maintain contact with people still recognized as relatives was lost through generational distancing *(Wilmhurst, Hunt, Lipo and Anderson 2011)*.",
          ],
          image: "hokulea_sailing.jpg",
          imgcaption:
            "Hokule'a, a modern Hawaiian wa'a kaulua or voyaging canoe. Photo by [HongKongHuey](https://flickr.com/people/46437992@N05) (January 22, 2009) taken onboard the Chinese junk *Princess Taiping*.",
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
          customData: {
            year: "1,000 AD",
            distToRapanui: { start: 8620, end: 17421 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: [
              "Taiwan",
              "Philippines",
              "Greater Sunda Islands",
              "Melanesia",
              "Polynesia",
              "Micronesia",
              "Rapa Nui",
            ],
          },
        },
        {
          id: "world-barito",
          title: "Some Austronesians from the Barito river basin",
          description:
            "During this same time period another group of Austronesian speakers from the **Barito river basin in southeast Borneo**, ventured out from their home territory.",
          // image: "bakumpai_barito.jpg",
          // imgcaption:
          //   "Dayak Bakumpai society in Barito River (circa 1920). Photo from [Collectie Stichting Nationaal Museum van Wereldculturen](http://collectie.wereldculturen.nl/?query=search=*=TM-10005854)",
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
          customData: {
            year: "1,000 AD",
            distToRapanui: { start: 17421, end: 17421 },
            distToMadagascar: { start: 0, end: 0 },
            showLocations: [
              "Taiwan",
              "Philippines",
              "Greater Sunda Islands",
              "Melanesia",
              "Polynesia",
              "Micronesia",
              "Rapa Nui",
            ],
          },
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
          customData: {
            year: "1,000 AD",
            distToRapanui: { start: 17421, end: 17421 },
            distToMadagascar: { start: 0, end: 2901 },
            showLocations: [
              "Taiwan",
              "Philippines",
              "Greater Sunda Islands",
              "Melanesia",
              "Polynesia",
              "Micronesia",
              "Rapa Nui",
            ],
          },
        },
        {
          id: "world-madagascar",
          title: "Madagascar: The New Home",
          description:
            "Crossing the Mozambique channel, they settled the large island of **Madagascar**. *(Dahl 1951, 1991, Adelaar 1989)*.",
          image: "madagascar_traditional_fishing_pirogue.jpg",
          imgcaption:
            "A Madagascar traditional fishing pirogue. Photo by [Jonathan Talbot](https://commons.wikimedia.org/wiki/File:Madagascar_-_Traditional_fishing_pirogue.jpg) (2007), World Resources Institute",
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
          customData: {
            year: "1,000 AD",
            distToRapanui: { start: 17421, end: 17421 },
            distToMadagascar: { start: 2901, end: 11082 },
            showLocations: [
              "Taiwan",
              "Philippines",
              "Greater Sunda Islands",
              "Melanesia",
              "Polynesia",
              "Micronesia",
              "Rapa Nui",
              "Madagascar",
            ],
          },
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
          customData: {
            year: "Today",
            distToRapanui: { start: 17421, end: 17421 },
            distToMadagascar: { start: 11082, end: 11082 },
            showLocations: [
              "Taiwan",
              "Philippines",
              "Greater Sunda Islands",
              "Melanesia",
              "Polynesia",
              "Micronesia",
              "Rapa Nui",
              "Madagascar",
            ],
          },
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
            an: "Te tiro atu to kanohi ki tairawhiti ana tera whiti te ra kite ataata ka hinga ki muri kia koe.",
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
          img: {
            src: "old_man_tattoo_larskrutak.jpg",
            caption:
              "Postcard of Maori moko, 1905 [larskrutak.com](https://www.larskrutak.com/embodied-symbols-of-the-south-seas-tattoo-in-polynesia/#prettyPhoto/5/)",
          },
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
            { value: "lvl1", description: "Present" },
            { value: "lvl0", description: "Absent" },
            { value: "lvlu", description: "Missing data" },
          ],
          areachart: "forcenature",
        },
      },
      {
        type: "word-story",
        id: 1.05,
        contents: {
          wordAn: "*maCa",
          wordEn: "eye",
          wordToDisplay: "eye",
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
            {
              variable: "watergathergroup",
              varDefinition:
                "Forces of nature are controlled or embued by the supernatural.",
            },
          ],
          varLegend: [
            {
              value: "lvl4",
              description:
                "Principal (more important than any other source of food)",
            },
            {
              value: "lvl3",
              description: "Major (one of the most important sources of food)",
            },
            {
              value: "lvl2",
              description:
                "Medium (a significant food source, but not one of the most important sources of food)",
            },
            {
              value: "lvl1",
              description:
                "Minor (forms a relatively insignificant part of diet)",
            },
            {
              value: "lvl0",
              description:
                "Absent (not practiced in the culture, or practiced but not a food source)",
            },
            { value: "lvlu", description: "Missing data" },
          ],
          areachart: "watergathergroup",
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
              value: "lvl3",
              description:
                "Present, and the principal focus of supernatural practice",
            },
            {
              value: "lvl2",
              description:
                "Present, and a major focus of supernatural practice",
            },
            {
              value: "lvl1",
              description:
                "Present, but not a major focus of supernatural practice",
            },
            {
              value: "lvl0",
              description:
                "Absent (do not feature in the belief system of the culture)",
            },
            { value: "lvlu", description: "Missing data" },
          ],
          areachart: "ancestralspirits",
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
                { wordsAn: "*taneq", wordsEn: "earth", wordToDisplay: "earth" },
                {
                  wordsAn: "*buŋa",
                  wordsEn: "flower",
                  wordToDisplay: "flower",
                },
                {
                  wordsAn: "*likaC",
                  wordsEn: "lightning",
                  wordToDisplay: "lightning",
                },
              ],
            },
            {
              category: "seas",
              words: [
                { wordsAn: "*bali₃", wordsEn: "sand", wordToDisplay: "sand" },
                { wordsAn: "*laŋiC", wordsEn: "sky", wordToDisplay: "sky" },
                {
                  wordsAn: "*Nabek",
                  wordsEn: "outriggerfloat",
                  wordToDisplay: "outrigger float",
                },
              ],
            },
            {
              category: "agriculture",
              words: [
                {
                  wordsEn: "chicken",
                  wordsAn: "*manuk",
                  wordToDisplay: "chicken",
                },
                {
                  wordsAn: "*punti1",
                  wordsEn: "banana",
                  wordToDisplay: "banana",
                },
                {
                  wordsAn: "*niuR",
                  wordsEn: "coconut",
                  wordToDisplay: "coconut",
                },
                { wordsAn: "*buaq", wordsEn: "fruit", wordToDisplay: "fruit" },
              ],
            },
            {
              category: "family & social",
              words: [
                {
                  wordsAn: "*amax",
                  wordsEn: "father",
                  wordToDisplay: "father",
                },
                { wordsAn: "*ina", wordsEn: "mother", wordToDisplay: "mother" },
                {
                  wordsAn: "*kuCux",
                  wordsEn: "headlouse",
                  wordToDisplay: "head louse",
                },
              ],
            },
            {
              category: "emotion & expression",
              words: [
                { wordsAn: "*maCa", wordsEn: "eye", wordToDisplay: "eye" },
                {
                  wordsAn: "*susu1",
                  wordsEn: "femalebreast",
                  wordToDisplay: "female breast",
                },
                {
                  wordsAn: "*NiSawa",
                  wordsEn: "breath",
                  wordToDisplay: "breath",
                },
                { wordsAn: "*qaCay", wordsEn: "liver", wordToDisplay: "liver" },
                { wordsAn: "*takut", wordsEn: "fear", wordToDisplay: "fear" },
                { wordsAn: "*batux", wordsEn: "stone", wordToDisplay: "stone" },
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
          wordAn: "*guntiŋ",
          wordEn: "scissors",
          wordToDisplay: "scissors",
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
            {
              category: "sharp tools",
              words: [
                {
                  wordsAn: "*guntiŋ",
                  wordsEn: "scissors",
                  wordToDisplay: "scissors",
                },
                {
                  wordsAn: "*paraŋ",
                  wordsEn: "machetebushknife",
                  wordToDisplay: "machete, bush knife",
                },
                {
                  wordsAn: "*sundáŋ",
                  wordsEn: "bolomachete",
                  wordToDisplay: "bolo",
                },
              ],
            },
            {
              category: "trade activities",
              words: [
                {
                  wordsAn: "*akal",
                  wordsEn: "trickruseschemewits",
                  wordToDisplay: "trick",
                },
                {
                  wordsAn: "*dáyaʔ",
                  wordsEn: "deceittrickeryfraud",
                  wordToDisplay: "deceit",
                },
                // { wordsAn: "*baraŋ", wordsEn: "putarrangeputinorder" },
                {
                  wordsAn: "*baraŋ",
                  wordsEn: "goodsbelongingsthingspossessions",
                  wordToDisplay: "goods, belongings",
                },
                // {
                //   wordsAn: "*untuŋ",
                //   wordsEn: "fortuneluckfortune",
                //   wordToDisplay: "fortune, luck",
                // },
              ],
            },
            {
              category: "food related",
              words: [
                {
                  wordsAn: "*santol",
                  wordsEn:
                    "sandoricumindicumtreewithediblefruitsandoricumindicumorsandoricumkoetjape",
                  wordToDisplay: "santol fruit",
                },
                {
                  wordsAn: "*sambal",
                  wordsEn: "spicycondimentsidedishwithrice",
                  wordToDisplay: "spicy condiment",
                },
              ],
            },
          ],
        },
      },
      {
        type: "word-story",
        id: 2.3,
        contents: {
          wordAn: "*bisa",
          wordEn: "powervenom",
          wordToDisplay: "power, venom",
          p: [
            "The daily life of the Austronesians are being reflects the words and languages they use.",
            "The word for eye in Austronesian languages is very stable where the sets of words are similar in sound and meaning.",
          ],
        },
      },
      {
        type: "words-chart",
        id: 2.4,
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
              category: "religion",
              words: [
                {
                  wordsAn: "*paŋgil",
                  wordsEn: "callvsummonspirits",
                  wordToDisplay: "call, summon",
                },
                {
                  wordsAn: "*cemer",
                  wordsEn: "defiledrituallypollutedceremoniallyunclean",
                  wordToDisplay: "defiled",
                },
                {
                  wordsAn: "*bisa",
                  wordsEn: "powervenom",
                  wordToDisplay: "power, venom",
                },
                // {
                //   wordsAn: "*asal",
                //   wordsEn: "originsourceorigin",
                //   wordToDisplay: "origin, cause",
                // },
                {
                  wordsAn: "*budi",
                  wordsEn: "consciencemindinsight",
                  wordToDisplay: "conscience",
                },
                {
                  wordsAn: "*jimat",
                  wordsEn: "charmtalismanprotectivecharm",
                  wordToDisplay: "charm, talisman",
                },
              ],
            },
            {
              category: "social norms",
              words: [
                {
                  wordsAn: "*paŋkat",
                  wordsEn: "rankposition",
                  wordToDisplay: "rank, position",
                },
                {
                  wordsAn: "*babu",
                  wordsEn: "maidfemaleservant",
                  wordToDisplay: "maid",
                },
                {
                  wordsAn: "*kampuŋ",
                  wordsEn: "assemblymeetingassemblygathering",
                  wordToDisplay: "assembly",
                },
                {
                  wordsAn: "*bujaŋ",
                  wordsEn: "marriageable",
                  wordToDisplay: "marriageable",
                },
                {
                  wordsAn: "*susah",
                  wordsEn: "difficultytroubleworrydifficulty",
                  wordToDisplay: "difficulty",
                },
                {
                  wordsAn: "*waris",
                  wordsEn: "heirinheritance",
                  wordToDisplay: "heir",
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
        type: "face-tattoo",
        id: 3.1,
        tattoo: {
          area: "tattooColonizer",
          isShown: true,
          icon: "spanish",
        },
        contents: {
          title: "Colonization",
          p: [
            "Some very long texts here will be placed that describe something nice and informative about what the writer wants to talk about",
            "Also similar stuffs with the first one blah blah blah.",
            "I don't want to talk about it. :(",
          ],
        },
      },
      {
        type: "boundaries-chart",
        id: 3.11,
        contents: {
          title: "Colony Boundaries Chart",
          p: [
            "Some very long texts here will be placed that describe something nice and informative about what the writer wants to talk about",
            "Also similar stuffs with the first one blah blah blah.",
            "I don't want to talk about it. :(",
          ],
        },
      },
      {
        type: "face-tattoo",
        id: 3.2,
        tattoo: {
          area: "tattooColonyStatus",
          isShown: true,
          icon: "stillColony",
        },
        contents: {
          title: "Colonization Status",
          p: [
            "Some very long texts here will be placed that describe something nice and informative about what the writer wants to talk about",
            "Also similar stuffs with the first one blah blah blah.",
            "I don't want to talk about it. :(",
          ],
        },
      },
      {
        type: "distribution-chart",
        id: 3.23,
        icon: "pickaxe",
        contents: {
          title: "Establishments of Seaports",
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
            // {
            //   variable: "airtravel",
            //   varDefinition: "Air travel",
            // },
            // {
            //   variable: "vehiclesroads",
            //   varDefinition: "Vehicles roads",
            // },
          ],
          varLegend: [
            { value: "lvl0", description: "Absent" },
            { value: "lvl1", description: "Present" },
            { value: "lvl2", description: "Minor" },
            { value: "lvl3", description: "Major" },
            { value: "lvl4", description: "Primary" },
            { value: "lvlu", description: "Missing data" },
          ],
          areachart: "seaport",
        },
      },
      {
        type: "face-tattoo",
        id: 3.31,
        tattoo: {
          area: "tattooExtraction",
          isShown: true,
          icon: "pickaxe",
        },
        contents: {
          title: "Extracted trade goods",
          p: [
            "Some very long texts here will be placed that describe something nice and informative about what the writer wants to talk about",
            "Also similar stuffs with the first one blah blah blah.",
            "I don't want to talk about it. :(",
          ],
        },
      },
      {
        type: "words-chart",
        id: 3.32,
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
              category: "plantation",
              words: [
                {
                  wordsAn: "*tabako",
                  wordsEn: "tobacco",
                  wordToDisplay: "tobacco",
                },
                {
                  wordsAn: "*kamátis",
                  wordsEn: "tomato",
                  wordToDisplay: "tomato",
                },
                {
                  wordsAn: "*acar",
                  wordsEn: "picklestopickle",
                  wordToDisplay: "pickles",
                },
                {
                  wordsAn: "*kapas",
                  wordsEn: "cotton",
                  wordToDisplay: "cotton",
                },
                {
                  wordsAn: "*mani",
                  wordsEn: "peanut",
                  wordToDisplay: "peanut",
                },
                {
                  wordsAn: "*átis",
                  wordsEn: "sugarappleanonasquamosa",
                  wordToDisplay: "sugar apple",
                },
                {
                  wordsAn: "*kahíl",
                  wordsEn: "orangebitterorangesevilleorangecitrusaurantium",
                  wordToDisplay: "Seville orange",
                },
                {
                  wordsAn: "*pala",
                  wordsEn: "nutmeg",
                  wordToDisplay: "nutmeg",
                },
                {
                  wordsAn: "*nanas",
                  wordsEn: "pineapple",
                  wordToDisplay: "pineapple",
                },
                {
                  wordsAn: "*mabúlo",
                  wordsEn:
                    "hairytreewithediblehairybrownfruitdiospyrosdiscolor",
                  wordToDisplay: "mabolo fruit",
                },
              ],
            },
            {
              category: "mining",
              words: [
                {
                  wordsAn: "*emas",
                  wordsEn: "gold",
                  wordToDisplay: "gold",
                },
                {
                  wordsAn: "*alámbre",
                  wordsEn: "wire",
                  wordToDisplay: "wire",
                },
                {
                  wordsAn: "*piko",
                  wordsEn: "pickaxemattockhoe",
                  wordToDisplay: "pickaxe",
                },
                {
                  wordsAn: "*tambaga",
                  wordsEn: "alloycoppergoldalloy",
                  wordToDisplay: "alloy",
                },
                {
                  wordsAn: "*láta",
                  wordsEn: "tincan",
                  wordToDisplay: "tin can",
                },
              ],
            },
            {
              category: "production",
              words: [
                {
                  wordsAn: "*kabán",
                  wordsEn: "drymeasureforgrainetc",
                  wordToDisplay: "measure for grain",
                },
                {
                  wordsAn: "*hasil",
                  wordsEn: "yieldtitleyieldresults",
                  wordToDisplay: "yield",
                },
                {
                  wordsAn: "*laba",
                  wordsEn: "gainprofitgain",
                  wordToDisplay: "gain",
                },
              ],
            },
          ],
        },
      },
      {
        type: "words-chart",
        id: 3.4,
        icon: "boat",
        contents: {
          title: "Adopted Words about Dominance, War and Violence",
          p: [
            "Some very long texts here will be placed that describe something nice and informative about what the writer wants to talk about",
          ],
        },
        data: {
          wordsItems: [
            {
              category: "dominance",
              words: [
                {
                  wordsAn: "*ámo",
                  wordsEn: "masterboss",
                  wordToDisplay: "master, boss",
                },
                {
                  wordsAn: "*bída",
                  wordsEn: "story",
                  wordToDisplay: "story",
                },
                {
                  wordsAn: "*tabla",
                  wordsEn: "drawntiedeveninscore",
                  wordToDisplay: "tie, even",
                },
                {
                  wordsAn: "*aniaya",
                  wordsEn: "injusticeoppression",
                  wordToDisplay: "injustice",
                },
                {
                  wordsAn: "*pila",
                  wordsEn: "filelinerow",
                  wordToDisplay: "file, line",
                },
              ],
            },
            {
              category: "war & violence",
              words: [
                {
                  wordsAn: "*bedil",
                  wordsEn: "weapon",
                  wordToDisplay: "weapon",
                },
                {
                  wordsAn: "*binasa",
                  wordsEn: "destroy",
                  wordToDisplay: "destroy",
                },
                {
                  wordsAn: "*gása",
                  wordsEn: "gauzewickofalamp",
                  wordToDisplay: "gauze",
                },
                {
                  wordsAn: "*bomba",
                  wordsEn: "bomb",
                  wordToDisplay: "bomb",
                },
                {
                  wordsAn: "*kuláta",
                  wordsEn: "riflebuttofarifle",
                  wordToDisplay: "butt of rifle",
                },
                // {
                //   wordsAn: "*rifle",
                //   wordsEn: "riflegunrifle",
                //   wordToDisplay: "rifle, gun",
                // },
              ],
            },
          ],
        },
      },
      {
        type: "grid-chart",
        id: 3.35,
        icon: "boat",
        contents: {
          title: "Grid Chart",
          p: ["Grid chart supporting texts here"],
        },
        data: {
          gridData: [
            {
              category: "plantations",
              uk: 2,
              nl: 2,
              fr: 1,
              es_us: 2,
              au: 1.2,
              jp: 1,
              uk_fr: 0.25,
            },
            {
              category: "mining",
              uk: 1,
              nl: 2,
              fr: 0,
              es_us: 1,
              au: 2,
              jp: 1,
              uk_fr: 1,
            },
            {
              category: "goldSilver",
              uk: 1,
              nl: 2,
              fr: 1,
              es_us: 1,
              au: 0,
              jp: 1,
              uk_fr: 2,
            },
          ],
        },
      },
      {
        type: "face-tattoo",
        id: 3.5,
        tattoo: {
          area: "tattooGovernment",
          isShown: true,
          icon: "building",
        },
        contents: {
          title: "Colonial Government",
          p: [
            "Some very long texts here will be placed that describe something nice and informative about what the writer wants to talk about",
            "Also similar stuffs with the first one blah blah blah.",
            "I don't want to talk about it. :(",
          ],
        },
      },
      {
        type: "cover",
        chapter: "fate",
        id: 4.0,
        contents: {
          chapterLabel: "Chapter V",
          title: "Fate",
        },
      },
      {
        type: "intro",
        chapter: "fate",
        id: 4.01,
        contents: {
          title: "Loss of Political Autonomy",
          p: [
            "The once isolated Austronesian peoples became under the political dominance of a foreign power for nearly 500 years.",
          ],
        },
      },
      {
        type: "grid-chart",
        id: 4.02,
        icon: "boat",
        contents: {
          title: "Grid Chart",
          p: [
            "This resulted in considerable loss of autonomy for most of them. Foreign presence and violent resistance were present and rampant for some of the colonized Austronesian lands.",
          ],
        },
        data: {
          gridData: [
            {
              category: "plantations",
              uk: 2,
              nl: 2,
              fr: 1,
              es_us: 2,
              au: 1.2,
              jp: 1,
              uk_fr: 0.25,
            },
            {
              category: "mining",
              uk: 1,
              nl: 2,
              fr: 0,
              es_us: 1,
              au: 2,
              jp: 1,
              uk_fr: 1,
            },
            {
              category: "goldSilver",
              uk: 1,
              nl: 2,
              fr: 1,
              es_us: 1,
              au: 0,
              jp: 1,
              uk_fr: 2,
            },
          ],
        },
      },
      {
        type: "words-chart",
        id: 4.03,
        icon: "",
        contents: {
          title: "Foreign Control",
          p: [
            "Some very long texts here will be placed that describe something nice and informative about what the writer wants to talk about",
          ],
        },
        data: {
          wordsItems: [
            {
              category: "foreign government",
              words: [
                {
                  wordsAn: "*ukum",
                  wordsEn: "judgepunish",
                  wordToDisplay: "judge, punish",
                },
                {
                  wordsAn: "*biaya",
                  wordsEn: "monetarysupport",
                  wordToDisplay: "monetary support",
                },
                {
                  wordsAn: "*béa",
                  wordsEn: "taxtoll",
                  wordToDisplay: "tax, toll",
                },
                {
                  wordsAn: "*bui",
                  wordsEn: "jail",
                  wordToDisplay: "jail",
                },
                {
                  wordsAn: "*bukti",
                  wordsEn: "proof",
                  wordToDisplay: "proof",
                },
              ],
            },
            {
              category: "foreign education",
              words: [
                {
                  wordsAn: "*bisara",
                  wordsEn: "speakdiscussion",
                  wordToDisplay: "speak, discussion",
                },
                {
                  wordsAn: "*akal",
                  wordsEn: "intelligencecraftscheme",
                  wordToDisplay: "intelligence",
                },
                {
                  wordsAn: "*lápis",
                  wordsEn: "pencil",
                  wordToDisplay: "pencil",
                },
                {
                  wordsAn: "*awam",
                  wordsEn: "ignorantuneducatedpoor",
                  wordToDisplay: "uneducated",
                },
              ],
            },
          ],
        },
      },
      {
        type: "distribution-chart",
        id: 4.04,
        icon: "pickaxe",
        contents: {
          title: "Imposition of Foreign Languages",
          p: [
            "The imposition of the foreign languages as the primary means of  communication for most of the indigenous population has caused language shifting and competition with the local Austronesian languages.",
          ],
          data: "./some-github-data-url-here",
        },
        data: {
          varItems: [
            {
              variable: "langshift",
              varDefinition: "Language Shift",
            },
            // {
            //   variable: "airtravel",
            //   varDefinition: "Air travel",
            // },
            // {
            //   variable: "vehiclesroads",
            //   varDefinition: "Vehicles roads",
            // },
          ],
          varLegend: [
            { value: "lvl0", description: "Absent" },
            { value: "lvl1", description: "Present" },
            { value: "lvl2", description: "Minor" },
            { value: "lvl3", description: "Major" },
            { value: "lvl4", description: "Primary" },
            { value: "lvlu", description: "Missing data" },
          ],
          areachart: "seaport",
        },
      },
      {
        type: "face-tattoo",
        id: 4.05,
        tattoo: {
          area: "tattooColonizer",
          isShown: true,
          icon: "spanish",
        },
        contents: {
          title: "Hope and recovery from the losses",
          p: [
            "The incursion of modern technology and introduction of foreign religious and political ideologies have also resulted in the loss of seafaring cultures of the Austronesians, particularly the Polynesians.",
            "In 1973, the Polynesian Voyaging Society was formed to build a large voyaging canoe. Their goal is to attempt the Hawai'i - Tahiti round-trip guided solely by traditional navigation.",
          ],
        },
      },
      {
        type: "face-tattoo",
        id: 4.06,
        tattoo: {
          area: "tattooColonizer",
          isShown: true,
          icon: "spanish",
        },
        contents: {
          p: [
            "Because no Polynesians knew how to navigate in the ancient ways, they engaged Mau Piailug, a traditional navigator from the Caroline Islands of Micronesia to guide the canoe. His method of navigating by the stars and swells was closely similar to extinct Polynesian methods.",
            "Mau had been able to navigate Tahiti using only the observations of the sun, moon, and ocean swells, as a natural compass without modern instruments to guide the canoe. This demonstrated how Polynesian canoes and traditional navigational methods for long-distance voyaging.",
          ],
        },
      },
      {
        type: "face-tattoo",
        id: 4.07,
        tattoo: {
          area: "tattooColonizer",
          isShown: true,
          icon: "spanish",
        },
        contents: {
          title: "A Story of Mankind’s Resilience and Adversities",
          p: [
            "Today, the Austronesians represent more than 400 million people around the world spanning from Madagascar in Africa up to Rapa Nui (Easter Islands) in Chile.",
            "One of the most diverse and complex cultures in the world, a combination of indigenous and foreign languages, religions, and political views.",
          ],
        },
      },
      {
        type: "face-tattoo",
        id: 4.08,
        tattoo: {
          area: "tattooColonizer",
          isShown: true,
          icon: "spanish",
        },
        contents: {
          p: [
            "Situated in the ring of fire with frequent earthquakes, tsunamis, typhoons, their kinship with nature has given them courage in dire times of needs and one of those untold stories of mankind’s disengagement from nature.",
          ],
        },
      },
      {
        type: "face-tattoo",
        id: 4.09,
        tattoo: {
          area: "tattooColonizer",
          isShown: true,
          icon: "spanish",
        },
        contents: {
          p: [
            "The best seafarers the world has ever known and the revival of their seafaring tradition has led them to rediscover their maritime heritage and roots.",
          ],
        },
      },
      {
        type: "face-tattoo",
        id: 4.1,
        tattoo: {
          area: "tattooColonizer",
          isShown: true,
          icon: "spanish",
        },
        contents: {
          title:
            "The Austronesians’ story, told through generations of shared linguistic identity, is truly a remarkable story of courage, harmony, loss and resilience.",
          p: [""],
        },
      },
    ],
  },
  footer: {},
};

export default longform;

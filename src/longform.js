const longform = {
  header: {
    title: "The Sails That Sailed Across Half The World",
    description:
      "How the shared linguistic ancestry of Austronesians tells us the story of mankind’s greatest expansion and adversities across the vast Indo-Pacific.",
    byline1:
      "Based from the research works of Robert Blust, Russell Gray, Simon Greenhill, Steven Trussel and Joseph Watts. Designed and developed by Joseph Ricafort for MVTEC 2022 Cartography final project.",
    byline2: "",
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
              "Along these coasts 5,000 years ago, there once lived a group of people who ventured on a journey...",
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
            title: "The Sails That Sailed Across Half The World",
            p: [
              "Understanding the evolution of boat technology and tracing the migration of Austronesian peoples.",
              'An adaptation of Dr. Robert Blust’s "Out Of Taiwan: The Austronesian Expansion As A Chapter In Human History. Designed and developed by Joseph Ricafort for MVTEC 2022 Cartography final project.',
            ],
          },
        },
      ],
      photo: {
        source: "../../assets/images/mantou_rock_sunset_latombe.jpg",
        credit: "Photo by Jean-Claude Latombe",
      },
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
            distToRapanui: { start: 0, end: 0, opacity: 0.35 },
            distToMadagascar: { start: 0, end: 0, opacity: 0.35 },
            showLocations: ["Taiwan"],
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
            distToRapanui: { start: 0, end: 0, opacity: 1 },
            distToMadagascar: { start: 0, end: 0, opacity: 0.35 },
            showLocations: ["Taiwan"],
          },
        },
        {
          id: "world-boat-2",
          description: [
            `They called it:`,
            `<span class="word-an">**qabaŋ₁**</span><span class="word-en"> (boat, canoe) </span> <span class="graphic-desc">*Proto-Austronesian (PAN, said to be the first reconstructed language of the Austronesians.</span>`,
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
            distToRapanui: { start: 0, end: 0, opacity: 1 },
            distToMadagascar: { start: 0, end: 0, opacity: 0.35 },
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
            distToRapanui: { start: 0, end: 493, opacity: 1 },
            distToMadagascar: { start: 0, end: 0, opacity: 0.35 },
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
            distToRapanui: { start: 493, end: 1264, opacity: 1 },
            distToMadagascar: { start: 0, end: 0, opacity: 0.35 },
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
            distToRapanui: { start: 1264, end: 2901, opacity: 1 },
            distToMadagascar: { start: 0, end: 0, opacity: 0.35 },
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
            distToRapanui: { start: 2901, end: 6172, opacity: 1 },
            distToMadagascar: { start: 0, end: 0, opacity: 0.35 },
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
            distToRapanui: { start: 6172, end: 8620, opacity: 1 },
            distToMadagascar: { start: 0, end: 0, opacity: 0.35 },
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
            distToRapanui: { start: 8620, end: 8620, opacity: 1 },
            distToMadagascar: { start: 0, end: 0, opacity: 0.35 },
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
            distToRapanui: { start: 8620, end: 8620, opacity: 1 },
            distToMadagascar: { start: 0, end: 0, opacity: 0.35 },
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
            distToRapanui: { start: 8620, end: 8620, opacity: 1 },
            distToMadagascar: { start: 0, end: 0, opacity: 0.35 },
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
            distToRapanui: { start: 8620, end: 8620, opacity: 1 },
            distToMadagascar: { start: 0, end: 0, opacity: 0.35 },
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
            distToRapanui: { start: 8620, end: 8620, opacity: 1 },
            distToMadagascar: { start: 0, end: 0, opacity: 0.35 },
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
            distToRapanui: { start: 8620, end: 10815, opacity: 1 },
            distToMadagascar: { start: 0, end: 0, opacity: 0.35 },
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
            distToRapanui: { start: 8620, end: 17421, opacity: 1 },
            distToMadagascar: { start: 0, end: 0, opacity: 0.35 },
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
            distToRapanui: { start: 17421, end: 17421, opacity: 0.35 },
            distToMadagascar: { start: 0, end: 2901, opacity: 1 },
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
            distToRapanui: { start: 17421, end: 17421, opacity: 0.35 },
            distToMadagascar: { start: 2901, end: 2901, opacity: 1 },
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
            distToRapanui: { start: 17421, end: 17421, opacity: 0.35 },
            distToMadagascar: { start: 2901, end: 11082, opacity: 1 },
            distMadaRapa: { dist: "22,701", opacity: 0 },
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
            distToRapanui: { start: 17421, end: 17421, opacity: 0 },
            distToMadagascar: { start: 11082, end: 11082, opacity: 0 },
            distMadaRapa: { dist: "22,701", opacity: 1 },
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
          id: "world-credits",
          title: "Data Sources and Tools",
          description: [
            "- [The Austronesian Homeland and Dispersal](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3335700) - Robert Blust, University of Hawaii",
            "- [Natural Earth](https://www.naturalearthdata.com/) - Large scale cultural and physical data",
            "- [A general overview of Austronesian population movements. (researchgate.net)](https://www.researchgate.net/figure/A-general-overview-of-Austronesian-population-movements-This-global-map-was-developed_fig1_357875412) - Main source for the Austronesian population movements map",
            "- Crafted using React, Mapbox, QGIS and Observable",
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
            distToRapanui: { start: 17421, end: 17421, opacity: 0 },
            distToMadagascar: { start: 11082, end: 11082, opacity: 0 },
            distMadaRapa: { dist: "22,701", opacity: 1 },
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
};

export default longform;

import { CreateTripDto } from "../dtos/create-trip.dto";

// Sort trips by date (most recent first)
export const SAMPLE_TRIPS: CreateTripDto[] = [
  {
    title: "Chilean Lakes Adventure 2024",
    description: "Exploring the pristine lakes and mountains of Chile's Lake District.",
    start_date: "2024-01-05T00:00:00.000Z",
    end_date: "2024-01-26T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1583343733868-718f5d4a9531?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Puerto Varas",
        country: "Chile",
        lat: -41.3195,
        lng: -72.9854,
        trip_places: [
          { name: "Lake Llanquihue" },
          { name: "Osorno Volcano" },
          { name: "German Colonial Museum" }
        ]
      },
      {
        name: "Cochamó",
        country: "Chile",
        lat: -41.5000,
        lng: -72.3167,
        trip_places: [
          { name: "Cochamó Valley" },
          { name: "La Junta" },
          { name: "Arco Iris Trail" }
        ]
      },
      {
        name: "Puelo",
        country: "Chile",
        lat: -41.6500,
        lng: -72.2333,
        trip_places: [
          { name: "Lake Puelo" },
          { name: "Puelo River" },
          { name: "Tagua Tagua Lake" }
        ]
      },
      {
        name: "Hornopirén",
        country: "Chile",
        lat: -41.9500,
        lng: -72.4333,
        trip_places: [
          { name: "Hornopirén National Park" },
          { name: "Yate Volcano" },
          { name: "Hot Springs" }
        ]
      }
    ],
    trip_tags: [
      { name: "Nature" },
      { name: "Hiking" },
      { name: "Lakes" },
      { name: "Mountains" },
      { name: "Adventure" }
    ]
  },
  {
    title: "Mediterranean Adventure 2024",
    description: "Exploring the beautiful coastal cities of Italy and the stunning islands of Greece.",
    start_date: "2024-09-05T00:00:00.000Z",
    end_date: "2024-09-25T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    trip_cities: [
      {
        name: "Genova",
        country: "Italy",
        lat: 44.4056,
        lng: 8.9463,
        trip_places: [
          { name: "Acquario di Genova" },
          { name: "Palazzo Ducale" },
          { name: "Via Garibaldi" }
        ]
      },
      {
        name: "Pisa",
        country: "Italy",
        lat: 43.7228,
        lng: 10.4017,
        trip_places: [
          { name: "Leaning Tower" },
          { name: "Piazza dei Miracoli" },
          { name: "Battistero" }
        ]
      },
      {
        name: "Cinque Terre",
        country: "Italy",
        lat: 44.1461,
        lng: 9.6439,
        trip_places: [
          { name: "Monterosso al Mare" },
          { name: "Vernazza" },
          { name: "Manarola" }
        ]
      },
      {
        name: "Rome",
        country: "Italy",
        lat: 41.9028,
        lng: 12.4964,
        trip_places: [
          { name: "Colosseum" },
          { name: "Vatican City" },
          { name: "Trevi Fountain" }
        ]
      },
      {
        name: "Athens",
        country: "Greece",
        lat: 37.9838,
        lng: 23.7275,
        trip_places: [
          { name: "Acropolis" },
          { name: "Parthenon" },
          { name: "Plaka" }
        ]
      },
      {
        name: "Santorini",
        country: "Greece",
        lat: 36.3932,
        lng: 25.4615,
        trip_places: [
          { name: "Oia" },
          { name: "Fira" },
          { name: "Red Beach" }
        ]
      }
    ],
    trip_tags: [
      { name: "Cultural" },
      { name: "Beach" },
      { name: "History" },
      { name: "Food" }
    ]
  },
  {
    title: "Punta Cana Getaway 2025",
    description: "A relaxing beach vacation in the Caribbean paradise.",
    start_date: "2025-02-10T00:00:00.000Z",
    end_date: "2025-02-20T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1569700876451-bc36dfa8e77c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Punta Cana",
        country: "Dominican Republic",
        lat: 18.5601,
        lng: -68.3725,
        trip_places: [
          { name: "Bávaro Beach" },
          { name: "Cap Cana Marina" },
          { name: "Indigenous Eyes Ecological Park" }
        ]
      }
    ],
    trip_tags: [
      { name: "Beach" },
      { name: "Resort" },
      { name: "Relaxation" }
    ]
  },
  {
    title: "Punta Cana Return 2023",
    description: "Another relaxing getaway to the beautiful beaches of Punta Cana.",
    start_date: "2023-09-01T00:00:00.000Z",
    end_date: "2023-09-10T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2849&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Punta Cana",
        country: "Dominican Republic",
        lat: 18.5601,
        lng: -68.3725,
        trip_places: [
          { name: "Cap Cana Marina" },
          { name: "Macao Beach" },
          { name: "Scape Park" },
          { name: "Indigenous Eyes Ecological Reserve" }
        ]
      }
    ],
    trip_tags: [
      { name: "Beach" },
      { name: "Resort" },
      { name: "Relaxation" },
      { name: "Caribbean" }
    ]
  },
  {
    title: "Buenos Aires & Colonia Getaway 2023",
    description: "Exploring the vibrant culture of Buenos Aires and the charming history of Colonia del Sacramento.",
    start_date: "2023-04-05T00:00:00.000Z",
    end_date: "2023-04-12T00:00:00.000Z",
    cover_image: "https://plus.unsplash.com/premium_photo-1697729901052-fe8900e24993?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Buenos Aires",
        country: "Argentina",
        lat: -34.6037,
        lng: -58.3816,
        trip_places: [
          { name: "La Boca" },
          { name: "Recoleta Cemetery" },
          { name: "Palermo Soho" },
          { name: "Plaza de Mayo" },
          { name: "Tango Show" }
        ]
      },
      {
        name: "Colonia del Sacramento",
        country: "Uruguay",
        lat: -34.4704,
        lng: -57.8438,
        trip_places: [
          { name: "Barrio Histórico" },
          { name: "Lighthouse" },
          { name: "Calle de los Suspiros" },
          { name: "Plaza Mayor" }
        ]
      }
    ],
    trip_tags: [
      { name: "Cultural" },
      { name: "History" },
      { name: "Food" },
      { name: "Urban" },
      { name: "Colonial" }
    ]
  },
  {
    title: "Costa Rica Adventure 2023",
    description: "Exploring the rich biodiversity and beautiful beaches of Costa Rica's Caribbean and Pacific coasts.",
    start_date: "2023-04-01T00:00:00.000Z",
    end_date: "2023-04-15T00:00:00.000Z",
    cover_image: "https://plus.unsplash.com/premium_photo-1661877112841-0efa68b18527?q=80&w=3188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Puerto Viejo",
        country: "Costa Rica",
        lat: 9.6558,
        lng: -82.7548,
        trip_places: [
          { name: "Playa Cocles" },
          { name: "Jaguar Rescue Center" },
          { name: "Bri Bri Waterfalls" }
        ]
      },
      {
        name: "Manuel Antonio",
        country: "Costa Rica",
        lat: 9.3925,
        lng: -84.1416,
        trip_places: [
          { name: "Manuel Antonio National Park" },
          { name: "Espadilla Beach" },
          { name: "Quepos Marina" }
        ]
      },
      {
        name: "Bocas del Toro",
        country: "Panama",
        lat: 9.3404,
        lng: -82.2412,
        trip_places: [
          { name: "Starfish Beach" },
          { name: "Red Frog Beach" },
          { name: "Isla Bastimentos National Marine Park" }
        ]
      }
    ],
    trip_tags: [
      { name: "Nature" },
      { name: "Beach" },
      { name: "Wildlife" },
      { name: "Adventure" }
    ]
  },
  {
    title: "Patagonia Adventure 2021",
    description: "Trekking through the stunning landscapes of Chilean Patagonia, completing the challenging O Circuit.",
    start_date: "2021-01-05T00:00:00.000Z",
    end_date: "2021-01-15T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1478827387698-1527781a4887?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Puerto Natales",
        country: "Chile",
        lat: -51.7308,
        lng: -72.4977,
        trip_places: [
          { name: "Mylodon Cave" },
          { name: "Balmaceda Glacier" },
          { name: "Serrano Glacier" }
        ]
      },
      {
        name: "Torres del Paine",
        country: "Chile",
        lat: -50.9423,
        lng: -73.4068,
        trip_places: [
          { name: "O Circuit Trek" },
          { name: "Grey Glacier" },
          { name: "French Valley" }
        ]
      }
    ],
    trip_tags: [
      { name: "Hiking" },
      { name: "Nature" },
      { name: "Mountains" },
      { name: "Adventure" }
    ]
  },
  {
    title: "China & Hong Kong Adventure 2019",
    description: "Exploring the vibrant cities of China and Hong Kong.",
    start_date: "2019-04-01T00:00:00.000Z",
    end_date: "2019-04-21T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3",
    trip_cities: [
      {
        name: "Beijing",
        country: "China",
        lat: 39.9042,
        lng: 116.4074,
        trip_places: [
          { name: "Great Wall" },
          { name: "Forbidden City" },
          { name: "Temple of Heaven" }
        ]
      },
      {
        name: "Shenzhen",
        country: "China",
        lat: 22.5431,
        lng: 114.0579,
        trip_places: [
          { name: "Window of the World" },
          { name: "OCT Loft" },
          { name: "Dafen Oil Painting Village" }
        ]
      },
      {
        name: "Hong Kong",
        country: "Hong Kong",
        lat: 22.3193,
        lng: 114.1694,
        trip_places: [
          { name: "Victoria Peak" },
          { name: "Tsim Sha Tsui" },
          { name: "Lantau Island" }
        ]
      }
    ],
    trip_tags: [
      { name: "Urban" },
      { name: "Culture" },
      { name: "History" },
      { name: "Food" },
      { name: "Asia" }
    ]
  },
  {
    title: "US East Coast Winter 2019",
    description: "Winter exploration of America's historic East Coast cities.",
    start_date: "2019-02-01T00:00:00.000Z",
    end_date: "2019-02-21T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3",
    trip_cities: [
      {
        name: "Philadelphia",
        country: "USA",
        lat: 39.9526,
        lng: -75.1652,
        trip_places: [
          { name: "Liberty Bell" },
          { name: "Independence Hall" },
          { name: "Philadelphia Museum of Art" }
        ]
      },
      {
        name: "Washington DC",
        country: "USA",
        lat: 38.9072,
        lng: -77.0369,
        trip_places: [
          { name: "National Mall" },
          { name: "Smithsonian Museums" },
          { name: "Capitol Building" }
        ]
      },
      {
        name: "New York",
        country: "USA",
        lat: 40.7128,
        lng: -74.0060,
        trip_places: [
          { name: "Central Park" },
          { name: "Times Square" },
          { name: "Empire State Building" }
        ]
      }
    ],
    trip_tags: [
      { name: "Urban" },
      { name: "History" },
      { name: "Culture" },
      { name: "Winter" },
      { name: "Museums" }
    ]
  },
  {
    title: "Morocco Exploration 2019",
    description: "Exploring the vibrant markets of Marrakech and the coastal charm of Essaouira.",
    start_date: "2019-05-01T00:00:00.000Z",
    end_date: "2019-05-10T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1517573847294-84690dbc5df8?q=80&w=3188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Marrakech",
        country: "Morocco",
        lat: 31.6295,
        lng: -7.9811,
        trip_places: [
          { name: "Jemaa el-Fnaa" },
          { name: "Jardin Majorelle" },
          { name: "Bahia Palace" },
          { name: "Medina" },
          { name: "Koutoubia Mosque" }
        ]
      },
      {
        name: "Essaouira",
        country: "Morocco",
        lat: 31.5085,
        lng: -9.7595,
        trip_places: [
          { name: "Medina of Essaouira" },
          { name: "Skala du Port" },
          { name: "Beach" },
          { name: "Essaouira Ramparts" },
          { name: "Moulay Hassan Square" }
        ]
      }
    ],
    trip_tags: [
      { name: "Cultural" },
      { name: "History" },
      { name: "Markets" },
      { name: "Beach" },
      { name: "Architecture" }
    ]
  },
  {
    title: "European Study Tour 2019",
    description: "A study tour exploring major cities across Western Europe.",
    start_date: "2019-06-01T00:00:00.000Z",
    end_date: "2019-06-21T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1610651219730-6b580d616e72?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Turin",
        country: "Italy",
        lat: 45.0703,
        lng: 7.6869,
        trip_places: [
          { name: "Mole Antonelliana" },
          { name: "Egyptian Museum" },
          { name: "Piazza Castello" }
        ]
      },
      {
        name: "Paris",
        country: "France",
        lat: 48.8566,
        lng: 2.3522,
        trip_places: [
          { name: "Eiffel Tower" },
          { name: "Louvre" },
          { name: "Montmartre" }
        ]
      },
      {
        name: "Brussels",
        country: "Belgium",
        lat: 50.8503,
        lng: 4.3517,
        trip_places: [
          { name: "Grand Place" },
          { name: "Atomium" },
          { name: "Manneken Pis" }
        ]
      },
      {
        name: "Ghent",
        country: "Belgium",
        lat: 51.0543,
        lng: 3.7174,
        trip_places: [
          { name: "Gravensteen" },
          { name: "Saint Bavo's Cathedral" },
          { name: "Graslei and Korenlei" }
        ]
      },
      {
        name: "Bruges",
        country: "Belgium",
        lat: 51.2093,
        lng: 3.2247,
        trip_places: [
          { name: "Belfry of Bruges" },
          { name: "Minnewater Lake" },
          { name: "Canals" }
        ]
      },
      {
        name: "Amsterdam",
        country: "Netherlands",
        lat: 52.3676,
        lng: 4.9041,
        trip_places: [
          { name: "Anne Frank House" },
          { name: "Rijksmuseum" },
          { name: "Canal Cruise" }
        ]
      },
      {
        name: "Madrid",
        country: "Spain",
        lat: 40.4168,
        lng: -3.7038,
        trip_places: [
          { name: "Prado Museum" },
          { name: "Royal Palace" },
          { name: "Puerta del Sol" }
        ]
      },
      {
        name: "Barcelona",
        country: "Spain",
        lat: 41.3851,
        lng: 2.1734,
        trip_places: [
          { name: "Sagrada Familia" },
          { name: "Park Güell" },
          { name: "Gothic Quarter" }
        ]
      }
    ],
    trip_tags: [
      { name: "Cultural" },
      { name: "History" },
      { name: "Urban" },
      { name: "Study" },
      { name: "Europe" },
      { name: "Architecture" }
    ]
  },
  {
    title: "Torres del Paine O Circuit 2019",
    description: "Completing the challenging and rewarding O Circuit trek around the Paine Massif in Patagonia.",
    start_date: "2019-02-01T00:00:00.000Z",
    end_date: "2019-02-14T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1478827387698-1527781a4887?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Punta Arenas",
        country: "Chile",
        lat: -53.1638,
        lng: -70.9171,
        trip_places: [
          { name: "Plaza de Armas" },
          { name: "Nao Victoria Museum" },
          { name: "Magallanes Regional Museum" },
          { name: "Strait of Magellan" }
        ]
      },
      {
        name: "Torres del Paine",
        country: "Chile",
        lat: -50.9423,
        lng: -73.4068,
        trip_places: [
          { name: "O Circuit Trek" },
          { name: "Dickson Glacier" },
          { name: "Los Perros Pass" },
          { name: "Grey Glacier" },
          { name: "French Valley" },
          { name: "Las Torres Base" }
        ]
      }
    ],
    trip_tags: [
      { name: "Hiking" },
      { name: "Trekking" },
      { name: "Nature" },
      { name: "Mountains" },
      { name: "Patagonia" },
      { name: "Adventure" },
      { name: "Glaciers" }
    ]
  },
  {
    title: "Easter Island Exploration 2018",
    description: "Exploring the mysterious Moai statues and unique culture of Rapa Nui (Easter Island).",
    start_date: "2018-02-10T00:00:00.000Z",
    end_date: "2018-02-24T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1600754047212-0cf91397fbc6?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Hanga Roa",
        country: "Chile",
        lat: -27.1498,
        lng: -109.4228,
        trip_places: [
          { name: "Rano Raraku (Moai Quarry)" },
          { name: "Ahu Tongariki" },
          { name: "Anakena Beach" },
          { name: "Rano Kau Volcano" },
          { name: "Orongo Ceremonial Village" }
        ]
      }
    ],
    trip_tags: [
      { name: "Cultural" },
      { name: "History" },
      { name: "Nature" },
      { name: "Island" },
      { name: "Archaeology" },
      { name: "Mystery" }
    ]
  },
  {
    title: "Brazil Winter Escape 2018",
    description: "Exploring the vibrant city of Rio de Janeiro and relaxing on the beaches of Pipa.",
    start_date: "2018-07-10T00:00:00.000Z",
    end_date: "2018-07-24T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Rio de Janeiro",
        country: "Brazil",
        lat: -22.9068,
        lng: -43.1729,
        trip_places: [
          { name: "Christ the Redeemer" },
          { name: "Sugarloaf Mountain" },
          { name: "Copacabana Beach" },
          { name: "Ipanema Beach" },
          { name: "Selarón Steps" }
        ]
      },
      {
        name: "Praia da Pipa",
        country: "Brazil",
        lat: -6.2278,
        lng: -35.0486,
        trip_places: [
          { name: "Praia do Amor" },
          { name: "Baía dos Golfinhos" },
          { name: "Santuário Ecológico de Pipa" },
          { name: "Madeiro Beach" }
        ]
      }
    ],
    trip_tags: [
      { name: "Beach" },
      { name: "Urban" },
      { name: "Nature" },
      { name: "Relaxation" },
      { name: "Winter Getaway" }
    ]
  },
  {
    title: "Southern Chile Summer 2018",
    description: "Exploring the stunning lakes, volcanoes, fjords, and unique culture of Chile's Lakes District.",
    start_date: "2018-01-10T00:00:00.000Z",
    end_date: "2018-01-31T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1688151027303-ff4e8f5e24fc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Puerto Varas",
        country: "Chile",
        lat: -41.3195,
        lng: -72.9854,
        trip_places: [
          { name: "Lake Llanquihue" },
          { name: "Osorno Volcano" },
          { name: "Petrohué Waterfalls" }
        ]
      },
      {
        name: "Cochamó",
        country: "Chile",
        lat: -41.5000,
        lng: -72.3167,
        trip_places: [
          { name: "Cochamó Valley" },
          { name: "La Junta" },
          { name: "Hiking & Climbing" }
        ]
      },
      {
        name: "Chaitén",
        country: "Chile",
        lat: -42.9167,
        lng: -72.7167,
        trip_places: [
          { name: "Pumalín Park" },
          { name: "Chaitén Volcano" },
          { name: "Santa Bárbara Beach" }
        ]
      },
      {
        name: "Quellón",
        country: "Chile",
        lat: -43.1167,
        lng: -73.6167,
        trip_places: [
          { name: "End of the Pan-American Highway (Hito Cero)" },
          { name: "Yaldad Beach" },
          { name: "Quellón Viejo" }
        ]
      },
      {
        name: "Castro",
        country: "Chile",
        lat: -42.4825,
        lng: -73.7650,
        trip_places: [
          { name: "Palafitos (Stilt Houses)" },
          { name: "San Francisco Church" },
          { name: "Chiloé National Park (nearby)" }
        ]
      },
      {
        name: "Ancud",
        country: "Chile",
        lat: -41.8667,
        lng: -73.8333,
        trip_places: [
          { name: "Fuerte San Antonio" },
          { name: "Penguin Colony Puñihuil" },
          { name: "Regional Museum of Ancud" }
        ]
      },
      {
        name: "Futrono",
        country: "Chile",
        lat: -40.1333,
        lng: -72.4000,
        trip_places: [
          { name: "Lake Ranco" },
          { name: "Hot Springs (Termas)" },
          { name: "Huilo Huilo Biological Reserve (nearby)" }
        ]
      }
    ],
    trip_tags: [
      { name: "Nature" },
      { name: "Hiking" },
      { name: "Lakes" },
      { name: "Mountains" },
      { name: "Islands" },
      { name: "Culture" },
      { name: "Road Trip" }
    ]
  },
  {
    title: "Rio Summer Getaway 2017",
    description: "Two weeks exploring the vibrant culture and famous landmarks of Rio de Janeiro.",
    start_date: "2017-07-10T00:00:00.000Z",
    end_date: "2017-07-24T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Rio de Janeiro",
        country: "Brazil",
        lat: -22.9068,
        lng: -43.1729,
        trip_places: [
          { name: "Ipanema Beach" },
          { name: "Lapa Arches" },
          { name: "Tijuca National Park" },
          { name: "Maracanã Stadium" },
          { name: "Santa Teresa Neighborhood" }
        ]
      }
    ],
    trip_tags: [
      { name: "Beach" },
      { name: "Urban" },
      { name: "Culture" },
      { name: "Summer" }
    ]
  },
  {
    title: "Andean Highlights 2017",
    description: "An unforgettable journey through the deserts, salt flats, lakes, and ancient ruins of the Andes.",
    start_date: "2017-01-05T00:00:00.000Z",
    end_date: "2017-01-26T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "San Pedro de Atacama",
        country: "Chile",
        lat: -22.9087,
        lng: -68.1997,
        trip_places: [
          { name: "Valle de la Luna" },
          { name: "Geysers del Tatio" },
          { name: "Salar de Atacama" }
        ]
      },
      {
        name: "Uyuni",
        country: "Bolivia",
        lat: -20.4631,
        lng: -66.8255,
        trip_places: [
          { name: "Salar de Uyuni" },
          { name: "Incahuasi Island" },
          { name: "Train Cemetery" }
        ]
      },
      {
        name: "Machu Picchu",
        country: "Peru",
        lat: -13.1631,
        lng: -72.5450,
        trip_places: [
          { name: "Machu Picchu Citadel" },
          { name: "Huayna Picchu" },
          { name: "Sun Gate (Inti Punku)" }
        ]
      }
    ],
    trip_tags: [
      { name: "Cultural" },
      { name: "History" },
      { name: "Nature" },
      { name: "Mountains" }
    ]
  },
  {
    title: "East Coast Winter Trip 2016",
    description: "A winter road trip up the East Coast, ending with theme parks in Orlando.",
    start_date: "2016-01-05T00:00:00.000Z",
    end_date: "2016-01-26T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1661231134432-bebf986499a8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Miami",
        country: "USA",
        lat: 25.7617,
        lng: -80.1918,
        trip_places: [
          { name: "South Beach" },
          { name: "Wynwood Walls" },
          { name: "Little Havana" }
        ]
      },
      {
        name: "Jacksonville",
        country: "USA",
        lat: 30.3322,
        lng: -81.6557,
        trip_places: [
          { name: "Jacksonville Beach" },
          { name: "St. Johns Town Center" },
          { name: "Catty Shack Ranch Wildlife Sanctuary" }
        ]
      },
      {
        name: "Savannah",
        country: "USA",
        lat: 32.0809,
        lng: -81.0912,
        trip_places: [
          { name: "Forsyth Park" },
          { name: "River Street" },
          { name: "Historic District" }
        ]
      },
      {
        name: "Virginia Beach",
        country: "USA",
        lat: 36.8529,
        lng: -75.9780,
        trip_places: [
          { name: "Virginia Beach Boardwalk" },
          { name: "First Landing State Park" },
          { name: "Virginia Aquarium" }
        ]
      },
      {
        name: "Washington DC",
        country: "USA",
        lat: 38.9072,
        lng: -77.0369,
        trip_places: [
          { name: "White House" },
          { name: "Lincoln Memorial" },
          { name: "Smithsonian Museums" },
          { name: "National Mall" }
        ]
      },
      {
        name: "New York",
        country: "USA",
        lat: 40.7128,
        lng: -74.0060,
        trip_places: [
          { name: "Times Square" },
          { name: "Central Park" },
          { name: "Statue of Liberty" },
          { name: "Empire State Building" }
        ]
      },
      {
        name: "Miami Beach",
        country: "USA",
        lat: 25.7907,
        lng: -80.1300,
        trip_places: [
          { name: "Ocean Drive" },
          { name: "Art Deco Historic District" },
          { name: "Lummus Park" }
        ]
      },
      {
        name: "Orlando",
        country: "USA",
        lat: 28.5383,
        lng: -81.3792,
        trip_places: [
          { name: "Walt Disney World" },
          { name: "Universal Studios" },
          { name: "SeaWorld" }
        ]
      }
    ],
    trip_tags: [
      { name: "Road Trip" },
      { name: "Urban" },
      { name: "History" },
      { name: "Beach" },
      { name: "Theme Park" }
    ]
  },
  {
    title: "Cuba Summer Trip 2015",
    description: "Exploring the historic streets of Havana and relaxing on the beaches of Varadero.",
    start_date: "2015-07-01T00:00:00.000Z",
    end_date: "2015-07-14T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1602515677088-2643f5eabaa6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Havana",
        country: "Cuba",
        lat: 23.1136,
        lng: -82.3666,
        trip_places: [
          { name: "Old Havana (Habana Vieja)" },
          { name: "Malecón" },
          { name: "El Capitolio" },
          { name: "Fábrica de Arte Cubano" },
          { name: "Classic Car Tour" }
        ]
      },
      {
        name: "Varadero",
        country: "Cuba",
        lat: 23.1569,
        lng: -81.2447,
        trip_places: [
          { name: "Varadero Beach" },
          { name: "Ambrosio Cave" },
          { name: "Josone Park" },
          { name: "Saturno Cave" }
        ]
      }
    ],
    trip_tags: [
      { name: "Beach" },
      { name: "Culture" },
      { name: "History" },
      { name: "Cars" },
      { name: "Summer" },
      { name: "Caribbean" }
    ]
  },
  {
    title: "Punta Cana Winter 2015",
    description: "A winter escape to the sunny beaches of Punta Cana.",
    start_date: "2015-02-01T00:00:00.000Z",
    end_date: "2015-02-10T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1569700876451-bc36dfa8e77c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Punta Cana",
        country: "Dominican Republic",
        lat: 18.5601,
        lng: -68.3725,
        trip_places: [
          { name: "Bavaro Adventure Park" },
          { name: "Saona Island" },
          { name: "Hoyo Azul Lagoon" },
          { name: "Hard Rock Casino" }
        ]
      }
    ],
    trip_tags: [
      { name: "Beach" },
      { name: "Resort" },
      { name: "Relaxation" },
      { name: "Caribbean" },
      { name: "Winter Getaway" }
    ]
  },
  {
    title: "Chile & Argentina Lake District 2014",
    description: "Exploring the stunning lakes and natural beauty of the Chilean and Argentinian Lake Districts.",
    start_date: "2014-01-10T00:00:00.000Z",
    end_date: "2014-01-31T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1584151629593-04ae300b8d90?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Salto del Laja",
        country: "Chile",
        lat: -37.2200,
        lng: -72.3900,
        trip_places: [
          { name: "Laja Falls" },
          { name: "Hiking Trails" },
          { name: "Local Crafts" }
        ]
      },
      {
        name: "San Carlos de Bariloche",
        country: "Argentina",
        lat: -41.1333,
        lng: -71.3000,
        trip_places: [
          { name: "Nahuel Huapi Lake" },
          { name: "Cerro Catedral" },
          { name: "Circuito Chico" },
          { name: "Chocolate Shops" }
        ]
      },
      {
        name: "Puerto Varas",
        country: "Chile",
        lat: -41.3195,
        lng: -72.9854,
        trip_places: [
          { name: "Lake Llanquihue" },
          { name: "Osorno Volcano" },
          { name: "Petrohué Falls" }
        ]
      },
      {
        name: "Valdivia",
        country: "Chile",
        lat: -39.8142,
        lng: -73.2459,
        trip_places: [
          { name: "Mercado Fluvial (River Market)" },
          { name: "Kunstmann Brewery" },
          { name: "Niebla Fort" },
          { name: "Valdivian Coastal Reserve" }
        ]
      }
    ],
    trip_tags: [
      { name: "Lakes" },
      { name: "Mountains" },
      { name: "Nature" },
      { name: "Road Trip" },
      { name: "Summer" }
    ]
  },
  {
    title: "Northeast Brazil Beaches 2014",
    description: "Exploring the stunning beaches and natural pools of Northeast Brazil.",
    start_date: "2014-07-01T00:00:00.000Z",
    end_date: "2014-07-15T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1710860595849-595ee99c8e72?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Maceió",
        country: "Brazil",
        lat: -9.6658,
        lng: -35.7353,
        trip_places: [
          { name: "Pajuçara Beach" },
          { name: "Ponta Verde Beach" },
          { name: "Natural Pools of Pajuçara" }
        ]
      },
      {
        name: "Recife",
        country: "Brazil",
        lat: -8.0476,
        lng: -34.8770,
        trip_places: [
          { name: "Recife Antigo" },
          { name: "Boa Viagem Beach" },
          { name: "Instituto Ricardo Brennand" }
        ]
      },
      {
        name: "Porto de Galinhas",
        country: "Brazil",
        lat: -8.5063,
        lng: -35.0056,
        trip_places: [
          { name: "Natural Pools" },
          { name: "Maracaípe Beach (Surf)" },
          { name: "Muro Alto Beach" }
        ]
      }
    ],
    trip_tags: [
      { name: "Beach" },
      { name: "Northeast" },
      { name: "Summer" },
      { name: "Nature" }
    ]
  },
  {
    title: "Riviera Maya Adventure 2012",
    description: "A week exploring the beaches, Mayan ruins, and natural parks of Mexico's Riviera Maya.",
    start_date: "2012-07-01T00:00:00.000Z",
    end_date: "2012-07-08T00:00:00.000Z",
    cover_image: "https://images.unsplash.com/photo-1676381517063-dc644ff4406b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    trip_cities: [
      {
        name: "Cancún",
        country: "Mexico",
        lat: 21.1619,
        lng: -86.8515,
        trip_places: [
          { name: "Hotel Zone Beaches" },
          { name: "Mercado 28" },
          { name: "Coco Bongo" }
        ]
      },
      {
        name: "Chichen Itza",
        country: "Mexico",
        lat: 20.6843,
        lng: -88.5678,
        trip_places: [
          { name: "El Castillo (Pyramid)" },
          { name: "Great Ball Court" },
          { name: "Temple of the Warriors" }
        ]
      },
      {
        name: "Xcaret Park",
        country: "Mexico",
        lat: 20.5814,
        lng: -87.1185,
        trip_places: [
          { name: "Underground Rivers" },
          { name: "Aviary" },
          { name: "Cultural Shows" }
        ]
      },
      {
        name: "Isla Mujeres",
        country: "Mexico",
        lat: 21.2324,
        lng: -86.7331,
        trip_places: [
          { name: "Playa Norte" },
          { name: "Punta Sur" },
          { name: "Garrafon Natural Reef Park" }
        ]
      }
    ],
    trip_tags: [
      { name: "Beach" },
      { name: "Ruins" },
      { name: "Culture" },
      { name: "Adventure" },
      { name: "Summer" },
      { name: "Park" }
    ]
  }
]; 
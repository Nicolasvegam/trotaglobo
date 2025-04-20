import { Holiday } from "@/types/holiday";

// Sort holidays by date (most recent first)
export const SAMPLE_HOLIDAYS: Holiday[] = [
  {
    id: "1",
    title: "Punta Cana Getaway 2025",
    startDate: new Date("2025-02-10"),
    endDate: new Date("2025-02-20"),
    isPast: true,
    cities: [
      {
        id: "punta-cana",
        name: "Punta Cana",
        position: { lat: 18.5601, lng: -68.3725 },
        places: ["Bávaro Beach", "Cap Cana Marina", "Indigenous Eyes Ecological Park"]
      }
    ],
    color: "#FF385C",
    description: "A relaxing beach vacation in the Caribbean paradise.",
    tags: ["Beach", "Resort", "Relaxation"],
    countries: ["Dominican Republic"],
    coverImage: "https://images.unsplash.com/photo-1569700876451-bc36dfa8e77c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "2", // Mediterranean Adventure 2024 (Future)
    title: "Mediterranean Adventure 2024",
    startDate: new Date("2024-09-05"),
    endDate: new Date("2024-09-25"),
    isPast: true,
    color: "#00A699",
    cities: [
      {
        id: "2-1",
        name: "Genova, Italy",
        position: { lat: 44.4056, lng: 8.9463 },
        places: ["Acquario di Genova", "Palazzo Ducale", "Via Garibaldi"]
      },
      {
        id: "2-2",
        name: "Pisa, Italy",
        position: { lat: 43.7228, lng: 10.4017 },
        places: ["Leaning Tower", "Piazza dei Miracoli", "Battistero"]
      },
      {
        id: "2-3",
        name: "Cinque Terre, Italy",
        position: { lat: 44.1461, lng: 9.6439 },
        places: ["Monterosso al Mare", "Vernazza", "Manarola", "Riomaggiore", "Corniglia"]
      },
      {
        id: "2-4",
        name: "Rome, Italy",
        position: { lat: 41.9028, lng: 12.4964 },
        places: ["Colosseum", "Vatican City", "Trevi Fountain", "Roman Forum", "Pantheon"]
      },
      {
        id: "2-5",
        name: "Sorrento, Italy",
        position: { lat: 40.6263, lng: 14.3772 },
        places: ["Amalfi Coast", "Marina Grande", "Piazza Tasso"]
      },
      {
        id: "2-6",
        name: "Athens, Greece",
        position: { lat: 37.9838, lng: 23.7275 },
        places: ["Acropolis", "Parthenon", "Plaka", "National Archaeological Museum"]
      },
      {
        id: "2-7",
        name: "Milos Island, Greece",
        position: { lat: 36.7225, lng: 24.4130 },
        places: ["Sarakiniko Beach", "Kleftiko", "Catacombs of Milos"]
      },
      {
        id: "2-8",
        name: "Santorini, Greece",
        position: { lat: 36.3932, lng: 25.4615 },
        places: ["Oia", "Fira", "Red Beach", "Akrotiri Archaeological Site"]
      }
    ],
    description: "Exploring the beautiful coastal cities of Italy and the stunning islands of Greece.",
    tags: ["Cultural", "Beach", "History", "Food"],
    countries: ["Italy", "Greece"],
    coverImage: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
  },
  {
    id: "9", // Punta Cana Return 2023
    title: "Punta Cana Return 2023",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-09-10"),
    isPast: true,
    color: "#FFC107", // Amber
    cities: [
      {
        id: "9-1",
        name: "Punta Cana, Dominican Republic",
        position: { lat: 18.5601, lng: -68.3725 },
        places: ["Cap Cana Marina", "Macao Beach", "Scape Park", "Indigenous Eyes Ecological Reserve"]
      }
    ],
    description: "Another relaxing getaway to the beautiful beaches of Punta Cana.",
    tags: ["Beach", "Resort", "Relaxation", "Caribbean"],
    countries: ["Dominican Republic"],
    coverImage: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2849&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "15", // Buenos Aires & Colonia Getaway 2023
    title: "Buenos Aires & Colonia Getaway 2023",
    startDate: new Date("2023-04-05"),
    endDate: new Date("2023-04-12"),
    isPast: true,
    color: "#9E9E9E", // Grey
    cities: [
      {
        id: "15-1",
        name: "Buenos Aires, Argentina",
        position: { lat: -34.6037, lng: -58.3816 },
        places: ["La Boca", "Recoleta Cemetery", "Palermo Soho", "Plaza de Mayo", "Tango Show"]
      },
      {
        id: "15-2",
        name: "Colonia del Sacramento, Uruguay",
        position: { lat: -34.4704, lng: -57.8438 },
        places: ["Barrio Histórico", "Lighthouse", "Calle de los Suspiros", "Plaza Mayor"]
      }
    ],
    description: "Exploring the vibrant culture of Buenos Aires and the charming history of Colonia del Sacramento.",
    tags: ["Argentina", "Uruguay", "Cultural", "History", "Food", "Urban", "Colonial"],
    countries: ["Argentina", "Uruguay"],
    coverImage: "https://plus.unsplash.com/premium_photo-1697729901052-fe8900e24993?q=80&w=3133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "3", // Costa Rica Adventure 2023
    title: "Costa Rica Adventure 2023",
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-04-15"),
    isPast: true,
    color: "#4CAF50", // Green
    cities: [
      {
        id: "3-1",
        name: "Puerto Viejo de Talamanca, Costa Rica",
        position: { lat: 9.6558, lng: -82.7548 },
        places: ["Playa Cocles", "Jaguar Rescue Center", "Bri Bri Waterfalls"]
      },
      {
        id: "3-2",
        name: "Punta Uva, Costa Rica",
        position: { lat: 9.6420, lng: -82.6980 },
        places: ["Punta Uva Beach", "Kayaking", "Sloth Sanctuary"]
      },
      {
        id: "3-3",
        name: "Manzanillo, Costa Rica",
        position: { lat: 9.6350, lng: -82.6540 },
        places: ["Gandoca-Manzanillo Wildlife Refuge", "Snorkeling", "Hiking Trails"]
      },
      {
        id: "3-4",
        name: "Cahuita, Costa Rica",
        position: { lat: 9.7375, lng: -82.8430 },
        places: ["Cahuita National Park", "Playa Negra", "Tree of Life Wildlife Rescue Center"]
      },
      {
        id: "3-5",
        name: "Manuel Antonio, Costa Rica",
        position: { lat: 9.3925, lng: -84.1416 },
        places: ["Manuel Antonio National Park", "Espadilla Beach", "Quepos Marina"]
      },
      {
        id: "3-6",
        name: "Uvita, Costa Rica",
        position: { lat: 9.1617, lng: -83.7375 },
        places: ["Marino Ballena National Park", "Uvita Waterfall", "Whale Watching"]
      },
      {
        id: "3-7",
        name: "Bahía Drake (Drake Bay), Costa Rica",
        position: { lat: 8.6895, lng: -83.6681 },
        places: ["Corcovado National Park", "Caño Island Biological Reserve", "Diving/Snorkeling"]
      },
      {
        id: "3-8",
        name: "Bocas del Toro, Panama",
        position: { lat: 9.3404, lng: -82.2412 },
        places: ["Starfish Beach", "Red Frog Beach", "Isla Bastimentos National Marine Park"]
      }
    ],
    description: "Exploring the rich biodiversity and beautiful beaches of Costa Rica's Caribbean and Pacific coasts, plus a hop over to Panama.",
    tags: ["Nature", "Beach", "Wildlife", "Jungle", "Adventure"],
    countries: ["Costa Rica", "Panama"],
    coverImage: "https://plus.unsplash.com/premium_photo-1661877112841-0efa68b18527?q=80&w=3188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "18", // Patagonia Adventure 2021
    title: "Patagonia Adventure 2021",
    startDate: new Date("2021-01-05"),
    endDate: new Date("2021-01-15"),
    isPast: true,
    color: "#8CE071", // Green
    cities: [
      {
        id: "18-1",
        name: "Puerto Natales, Chile",
        position: { lat: -51.7308, lng: -72.4977 },
        places: ["Mylodon Cave", "Balmaceda Glacier", "Serrano Glacier", "Plaza de Armas"]
      },
      {
        id: "18-2",
        name: "Torres del Paine, Chile",
        position: { lat: -50.9423, lng: -73.4068 },
        places: ["O Circuit Trek", "Grey Glacier", "French Valley", "Las Torres Base", "Paine Grande"]
      }
    ],
    description: "Trekking through the stunning landscapes of Chilean Patagonia, completing the challenging O Circuit.",
    tags: ["Hiking", "Nature", "Mountains", "Wildlife", "Trekking", "Patagonia"],
    countries: ["Chile"],
    coverImage: "https://images.unsplash.com/photo-1558517286-6b7b81953cb5?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "17", // Morocco Exploration 2019
    title: "Morocco Exploration 2019",
    startDate: new Date("2019-05-01"),
    endDate: new Date("2019-05-10"),
    isPast: true,
    color: "#8D6E63", // Brown
    cities: [
      {
        id: "17-1",
        name: "Marrakech, Morocco",
        position: { lat: 31.6295, lng: -7.9811 },
        places: ["Jemaa el-Fnaa", "Jardin Majorelle", "Bahia Palace", "Medina", "Koutoubia Mosque"]
      },
      {
        id: "17-2",
        name: "Essaouira, Morocco",
        position: { lat: 31.5085, lng: -9.7595 },
        places: ["Medina of Essaouira", "Skala du Port", "Beach", "Essaouira Ramparts", "Moulay Hassan Square"]
      }
    ],
    description: "Exploring the vibrant markets of Marrakech and the coastal charm of Essaouira.",
    tags: ["Morocco", "Cultural", "History", "Markets", "Beach", "Architecture"],
    countries: ["Morocco"],
    coverImage: "https://images.unsplash.com/photo-1517573847294-84690dbc5df8?q=80&w=3188&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "25", // European Study Tour 2019
    title: "European Study Tour 2019",
    startDate: new Date("2019-06-01"),
    endDate: new Date("2019-06-21"),
    isPast: true,
    color: "#3F51B5", 
    cities: [
      {
        id: "25-1",
        name: "Turin, Italy",
        position: { lat: 45.0703, lng: 7.6869 },
        places: ["Mole Antonelliana", "Egyptian Museum", "Piazza Castello"]
      },
      {
        id: "25-2",
        name: "Paris, France",
        position: { lat: 48.8566, lng: 2.3522 },
        places: ["Eiffel Tower", "Louvre", "Montmartre"]
      },
      {
        id: "25-3",
        name: "Brussels, Belgium",
        position: { lat: 50.8503, lng: 4.3517 },
        places: ["Grand Place", "Atomium", "Manneken Pis"]
      },
      {
        id: "25-4",
        name: "Ghent, Belgium",
        position: { lat: 51.0543, lng: 3.7174 },
        places: ["Gravensteen", "Saint Bavo's Cathedral", "Graslei and Korenlei"]
      },
      {
        id: "25-5",
        name: "Bruges, Belgium",
        position: { lat: 51.2093, lng: 3.2247 },
        places: ["Belfry of Bruges", "Minnewater Lake", "Canals"]
      },
      {
        id: "25-6",
        name: "Amsterdam, Netherlands",
        position: { lat: 52.3676, lng: 4.9041 },
        places: ["Anne Frank House", "Rijksmuseum", "Canal Cruise"]
      },
      {
        id: "25-7",
        name: "Madrid, Spain",
        position: { lat: 40.4168, lng: -3.7038 },
        places: ["Prado Museum", "Royal Palace", "Puerta del Sol"]
      },
      {
        id: "25-8",
        name: "Barcelona, Spain",
        position: { lat: 41.3851, lng: 2.1734 },
        places: ["Sagrada Familia", "Park Güell", "Gothic Quarter"]
      }
    ],
    description: "A study tour exploring major cities across Western Europe.",
    tags: ["Cultural", "History", "Urban", "Study", "Europe", "Architecture"],
    countries: ["Italy", "France", "Belgium", "Netherlands", "Spain"],
    coverImage: "https://images.unsplash.com/photo-1610651219730-6b580d616e72?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "16", // Torres del Paine O Circuit 2019
    title: "Torres del Paine O Circuit 2019",
    startDate: new Date("2019-02-01"),
    endDate: new Date("2019-02-14"),
    isPast: true,
    color: "#FF9800", // Orange
    cities: [
      {
        id: "16-1",
        name: "Punta Arenas, Chile",
        position: { lat: -53.1638, lng: -70.9171 },
        places: ["Plaza de Armas", "Nao Victoria Museum", "Magallanes Regional Museum", "Strait of Magellan"]
      },
      {
        id: "16-2",
        name: "Torres del Paine National Park, Chile",
        position: { lat: -50.9423, lng: -73.4068 },
        places: ["O Circuit Trek", "Dickson Glacier", "Los Perros Pass", "Grey Glacier", "French Valley", "Las Torres Base"]
      }
    ],
    description: "Completing the challenging and rewarding O Circuit trek around the Paine Massif in Patagonia, starting from Punta Arenas.",
    tags: ["Hiking", "Trekking", "Nature", "Mountains", "Patagonia", "Adventure", "Glaciers"],
    countries: ["Chile"],
    coverImage: "https://images.unsplash.com/photo-1478827387698-1527781a4887?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "7", // Easter Island Exploration 2018
    title: "Easter Island Exploration 2018",
    startDate: new Date("2018-02-10"),
    endDate: new Date("2018-02-24"),
    isPast: true,
    color: "#795548", // Brown
    cities: [
      {
        id: "7-1",
        name: "Hanga Roa, Easter Island, Chile",
        position: { lat: -27.1498, lng: -109.4228 },
        places: ["Rano Raraku (Moai Quarry)", "Ahu Tongariki", "Anakena Beach", "Rano Kau Volcano", "Orongo Ceremonial Village"]
      }
    ],
    description: "Exploring the mysterious Moai statues and unique culture of Rapa Nui (Easter Island).",
    tags: ["Cultural", "History", "Nature", "Island", "Archaeology", "Mystery"],
    countries: ["Chile"],
    coverImage: "https://images.unsplash.com/photo-1600754047212-0cf91397fbc6?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "11", // Brazil Winter Escape 2018
    title: "Brazil Winter Escape 2018",
    startDate: new Date("2018-07-10"),
    endDate: new Date("2018-07-24"),
    isPast: true,
    color: "#009688", // Teal
    cities: [
      {
        id: "11-1",
        name: "Rio de Janeiro, Brazil",
        position: { lat: -22.9068, lng: -43.1729 },
        places: ["Christ the Redeemer", "Sugarloaf Mountain", "Copacabana Beach", "Ipanema Beach", "Selarón Steps"]
      },
      {
        id: "11-2",
        name: "Praia da Pipa, Brazil",
        position: { lat: -6.2278, lng: -35.0486 },
        places: ["Praia do Amor", "Baía dos Golfinhos", "Santuário Ecológico de Pipa", "Madeiro Beach"]
      }
    ],
    description: "Exploring the vibrant city of Rio de Janeiro and relaxing on the beaches of Pipa.",
    tags: ["Brazil", "Beach", "Urban", "Nature", "Relaxation", "Winter Getaway"],
    countries: ["Brazil"],
    coverImage: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "6", // Southern Chile Summer 2018
    title: "Southern Chile Summer 2018",
    startDate: new Date("2018-01-10"),
    endDate: new Date("2018-01-31"),
    isPast: true,
    color: "#03A9F4", // Light Blue
    cities: [
      {
        id: "6-1",
        name: "Puerto Varas, Chile",
        position: { lat: -41.3195, lng: -72.9854 },
        places: ["Lake Llanquihue", "Osorno Volcano", "Petrohué Waterfalls"]
      },
      {
        id: "6-2",
        name: "Cochamó, Chile",
        position: { lat: -41.5000, lng: -72.3167 },
        places: ["Cochamó Valley", "La Junta", "Hiking & Climbing"]
      },
      {
        id: "6-3",
        name: "Chaitén, Chile",
        position: { lat: -42.9167, lng: -72.7167 },
        places: ["Pumalín Park", "Chaitén Volcano", "Santa Bárbara Beach"]
      },
      {
        id: "6-4",
        name: "Quellón, Chile",
        position: { lat: -43.1167, lng: -73.6167 },
        places: ["End of the Pan-American Highway (Hito Cero)", "Yaldad Beach", "Quellón Viejo"]
      },
      {
        id: "6-5",
        name: "Castro, Chile",
        position: { lat: -42.4825, lng: -73.7650 },
        places: ["Palafitos (Stilt Houses)", "San Francisco Church", "Chiloé National Park (nearby)"]
      },
      {
        id: "6-6",
        name: "Ancud, Chile",
        position: { lat: -41.8667, lng: -73.8333 },
        places: ["Fuerte San Antonio", "Penguin Colony Puñihuil", "Regional Museum of Ancud"]
      },
      {
        id: "6-7",
        name: "Futrono, Chile",
        position: { lat: -40.1333, lng: -72.4000 },
        places: ["Lake Ranco", "Hot Springs (Termas)", "Huilo Huilo Biological Reserve (nearby)"]
      }
    ],
    description: "Exploring the stunning lakes, volcanoes, fjords, and unique culture of Chile's Lakes District and Chiloé Island.",
    tags: ["Nature", "Hiking", "Lakes", "Mountains", "Islands", "Culture", "Road Trip"],
    countries: ["Chile"],
    coverImage: "https://images.unsplash.com/photo-1688151027303-ff4e8f5e24fc?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "13", // Rio Summer Getaway 2017
    title: "Rio Summer Getaway 2017",
    startDate: new Date("2017-07-10"),
    endDate: new Date("2017-07-24"),
    isPast: true,
    color: "#FFEB3B", // Yellow
    cities: [
      {
        id: "13-1",
        name: "Rio de Janeiro, Brazil",
        position: { lat: -22.9068, lng: -43.1729 },
        places: ["Ipanema Beach", "Lapa Arches", "Tijuca National Park", "Maracanã Stadium", "Santa Teresa Neighborhood"]
      }
    ],
    description: "Two weeks exploring the vibrant culture and famous landmarks of Rio de Janeiro.",
    tags: ["Brazil", "Beach", "Urban", "Culture", "Summer"],
    countries: ["Brazil"],
    coverImage: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "5", // Andean Highlights 2017
    title: "Andean Highlights 2017",
    startDate: new Date("2017-01-05"),
    endDate: new Date("2017-01-26"),
    isPast: true,
    color: "#9C27B0", // Purple
    cities: [
      {
        id: "5-1",
        name: "San Pedro de Atacama, Chile",
        position: { lat: -22.9087, lng: -68.1997 },
        places: ["Valle de la Luna", "Geysers del Tatio", "Salar de Atacama"]
      },
      {
        id: "5-2",
        name: "Uyuni, Bolivia",
        position: { lat: -20.4631, lng: -66.8255 },
        places: ["Salar de Uyuni", "Incahuasi Island", "Train Cemetery"]
      },
      {
        id: "5-3",
        name: "La Paz, Bolivia",
        position: { lat: -16.4897, lng: -68.1193 },
        places: ["Valle de la Luna (La Paz)", "Mi Teleférico", "Witches' Market"]
      },
      {
        id: "5-4",
        name: "Copacabana, Bolivia",
        position: { lat: -16.1667, lng: -69.0833 },
        places: ["Lake Titicaca", "Isla del Sol", "Basilica of Our Lady of Copacabana"]
      },
      {
        id: "5-5",
        name: "Puno, Peru",
        position: { lat: -15.8402, lng: -70.0219 },
        places: ["Uros Floating Islands", "Taquile Island", "Sillustani"]
      },
      {
        id: "5-6",
        name: "Cusco, Peru",
        position: { lat: -13.5320, lng: -71.9675 },
        places: ["Plaza de Armas", "Sacsayhuamán", "Qorikancha", "San Pedro Market"]
      },
      {
        id: "5-7",
        name: "Machu Picchu, Peru", 
        position: { lat: -13.1631, lng: -72.5450 },
        places: ["Machu Picchu Citadel", "Huayna Picchu", "Sun Gate (Inti Punku)"]
      },
      {
        id: "5-8",
        name: "Lima, Peru",
        position: { lat: -12.0464, lng: -77.0428 },
        places: ["Miraflores", "Historic Centre of Lima", "Larco Museum", "Barranco"]
      }
    ],
    description: "An unforgettable journey through the deserts, salt flats, lakes, and ancient ruins of the Andes.",
    tags: ["Cultural", "History", "Nature", "Mountains", "Desert", "Adventure"],
    countries: ["Chile", "Bolivia", "Peru"],
    coverImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "14", // Cuba Summer Trip 2015
    title: "Cuba Summer Trip 2015",
    startDate: new Date("2015-07-01"),
    endDate: new Date("2015-07-14"),
    isPast: true,
    color: "#00BCD4", // Cyan
    cities: [
      {
        id: "14-1",
        name: "Havana, Cuba",
        position: { lat: 23.1136, lng: -82.3666 },
        places: ["Old Havana (Habana Vieja)", "Malecón", "El Capitolio", "Fábrica de Arte Cubano", "Classic Car Tour"]
      },
      {
        id: "14-2",
        name: "Varadero, Cuba",
        position: { lat: 23.1569, lng: -81.2447 },
        places: ["Varadero Beach", "Ambrosio Cave", "Josone Park", "Saturno Cave"]
      }
    ],
    description: "Exploring the historic streets of Havana and relaxing on the beaches of Varadero.",
    tags: ["Cuba", "Beach", "Culture", "History", "Cars", "Summer", "Caribbean"],
    countries: ["Cuba"],
    coverImage: "https://images.unsplash.com/photo-1602515677088-2643f5eabaa6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "10", // Punta Cana Winter 2015
    title: "Punta Cana Winter 2015",
    startDate: new Date("2015-02-01"),
    endDate: new Date("2015-02-10"),
    isPast: true,
    color: "#E91E63", // Pink
    cities: [
      {
        id: "10-1",
        name: "Punta Cana, Dominican Republic",
        position: { lat: 18.5601, lng: -68.3725 },
        places: ["Bavaro Adventure Park", "Saona Island", "Hoyo Azul Lagoon", "Hard Rock Casino"]
      }
    ],
    description: "A winter escape to the sunny beaches of Punta Cana.",
    tags: ["Beach", "Resort", "Relaxation", "Caribbean", "Winter Getaway"],
    countries: ["Dominican Republic"],
    coverImage: "https://images.unsplash.com/photo-1569700876451-bc36dfa8e77c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "19", // Chile & Argentina Lake District 2014
    title: "Chile & Argentina Lake District 2014",
    startDate: new Date("2014-01-10"),
    endDate: new Date("2014-01-31"),
    isPast: true,
    color: "#673AB7", // Deep Purple
    cities: [
      {
        id: "19-1",
        name: "Salto del Laja, Chile",
        position: { lat: -37.2200, lng: -72.3900 },
        places: ["Laja Falls", "Hiking Trails", "Local Crafts"]
      },
      {
        id: "19-2",
        name: "San Carlos de Bariloche, Argentina",
        position: { lat: -41.1333, lng: -71.3000 },
        places: ["Nahuel Huapi Lake", "Cerro Catedral", "Circuito Chico", "Chocolate Shops"]
      },
      {
        id: "19-3",
        name: "Puerto Varas, Chile",
        position: { lat: -41.3195, lng: -72.9854 },
        places: ["Lake Llanquihue", "Osorno Volcano", "Petrohué Falls"]
      },
      {
        id: "19-4",
        name: "Valdivia, Chile",
        position: { lat: -39.8142, lng: -73.2459 },
        places: ["Mercado Fluvial (River Market)", "Kunstmann Brewery", "Niebla Fort", "Valdivian Coastal Reserve"]
      }
    ],
    description: "Exploring the stunning lakes and natural beauty of the Chilean and Argentinian Lake Districts.",
    tags: ["Lakes", "Mountains", "Nature", "Road Trip", "Chile", "Argentina", "Summer"],
    countries: ["Chile", "Argentina"],
    coverImage: "https://images.unsplash.com/photo-1584151629593-04ae300b8d90?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "20", // Northeast Brazil Beaches 2014
    title: "Northeast Brazil Beaches 2014",
    startDate: new Date("2014-07-01"),
    endDate: new Date("2014-07-15"),
    isPast: true,
    color: "#FF5722", // Deep Orange
    cities: [
      {
        id: "20-1",
        name: "Maceió, Brazil",
        position: { lat: -9.6658, lng: -35.7353 },
        places: ["Pajuçara Beach", "Ponta Verde Beach", "Natural Pools of Pajuçara"]
      },
      {
        id: "20-2",
        name: "Recife, Brazil",
        position: { lat: -8.0476, lng: -34.8770 },
        places: ["Recife Antigo", "Boa Viagem Beach", "Instituto Ricardo Brennand"]
      },
      {
        id: "20-3",
        name: "Porto de Galinhas, Brazil",
        position: { lat: -8.5063, lng: -35.0056 },
        places: ["Natural Pools", "Maracaípe Beach (Surf)", "Muro Alto Beach"]
      }
    ],
    description: "Exploring the stunning beaches and natural pools of Northeast Brazil.",
    tags: ["Brazil", "Beach", "Northeast", "Summer", "Nature"],
    countries: ["Brazil"],
    coverImage: "https://images.unsplash.com/photo-1710860595849-595ee99c8e72?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "12", // Riviera Maya Adventure 2012
    title: "Riviera Maya Adventure 2012",
    startDate: new Date("2012-07-01"),
    endDate: new Date("2012-07-08"),
    isPast: true,
    color: "#CDDC39", // Lime
    cities: [
      {
        id: "12-1",
        name: "Cancún, Mexico",
        position: { lat: 21.1619, lng: -86.8515 },
        places: ["Hotel Zone Beaches", "Mercado 28", "Coco Bongo"]
      },
      {
        id: "12-2",
        name: "Chichen Itza, Mexico",
        position: { lat: 20.6843, lng: -88.5678 },
        places: ["El Castillo (Pyramid)", "Great Ball Court", "Temple of the Warriors"]
      },
      {
        id: "12-3",
        name: "Xcaret Park, Mexico",
        position: { lat: 20.5814, lng: -87.1185 }, // Approx location near Playa del Carmen
        places: ["Underground Rivers", "Aviary", "Cultural Shows"]
      },
      {
        id: "12-4",
        name: "Isla Mujeres, Mexico",
        position: { lat: 21.2324, lng: -86.7331 },
        places: ["Playa Norte", "Punta Sur", "Garrafon Natural Reef Park"]
      }
    ],
    description: "A week exploring the beaches, Mayan ruins, and natural parks of Mexico's Riviera Maya.",
    tags: ["Mexico", "Beach", "Ruins", "Culture", "Adventure", "Summer", "Park"],
    countries: ["Mexico"],
    coverImage: "https://images.unsplash.com/photo-1676381517063-dc644ff4406b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "4", // East Coast Winter Trip 2016
    title: "East Coast Winter Trip 2016",
    startDate: new Date("2016-01-05"),
    endDate: new Date("2016-01-26"),
    isPast: true,
    color: "#607D8B", // Blue Grey
    cities: [
      {
        id: "4-1",
        name: "Miami, USA",
        position: { lat: 25.7617, lng: -80.1918 },
        places: ["South Beach", "Wynwood Walls", "Little Havana"]
      },
      {
        id: "4-2",
        name: "Jacksonville, USA",
        position: { lat: 30.3322, lng: -81.6557 },
        places: ["Jacksonville Beach", "St. Johns Town Center", "Catty Shack Ranch Wildlife Sanctuary"]
      },
      {
        id: "4-3",
        name: "Savannah, USA",
        position: { lat: 32.0809, lng: -81.0912 },
        places: ["Forsyth Park", "River Street", "Historic District"]
      },
      {
        id: "4-4",
        name: "Virginia Beach, USA",
        position: { lat: 36.8529, lng: -75.9780 },
        places: ["Virginia Beach Boardwalk", "First Landing State Park", "Virginia Aquarium"]
      },
      {
        id: "4-5",
        name: "Washington DC, USA",
        position: { lat: 38.9072, lng: -77.0369 },
        places: ["White House", "Lincoln Memorial", "Smithsonian Museums", "National Mall"]
      },
      {
        id: "4-6",
        name: "New York, USA",
        position: { lat: 40.7128, lng: -74.0060 },
        places: ["Times Square", "Central Park", "Statue of Liberty", "Empire State Building"]
      },
      {
        id: "4-7",
        name: "Miami Beach, USA",
        position: { lat: 25.7907, lng: -80.1300 }, // Slightly different from Miami city center
        places: ["Ocean Drive", "Art Deco Historic District", "Lummus Park"]
      },
      {
        id: "4-8",
        name: "Orlando, USA",
        position: { lat: 28.5383, lng: -81.3792 },
        places: ["Walt Disney World", "Universal Studios", "SeaWorld"]
      }
    ],
    description: "A winter road trip up the East Coast, ending with theme parks in Orlando.",
    tags: ["Road Trip", "Urban", "History", "Beach", "Theme Park"],
    countries: ["United States"],
    coverImage: "https://images.unsplash.com/photo-1661231134432-bebf986499a8?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "30",
    title: "Chilean Lakes Adventure 2024",
    startDate: new Date("2024-01-05"),
    endDate: new Date("2024-01-26"),
    isPast: true,
    cities: [
      {
        id: "puerto-varas",
        name: "Puerto Varas",
        position: { lat: -41.3195, lng: -72.9854 },
        places: ["Lake Llanquihue", "Osorno Volcano", "German Colonial Museum"]
      },
      {
        id: "cochamo",
        name: "Cochamó",
        position: { lat: -41.5000, lng: -72.3167 },
        places: ["Cochamó Valley", "La Junta", "Arco Iris Trail"]
      },
      {
        id: "puelo",
        name: "Puelo",
        position: { lat: -41.6500, lng: -72.2333 },
        places: ["Lake Puelo", "Puelo River", "Tagua Tagua Lake"]
      },
      {
        id: "hornopiren",
        name: "Hornopirén",
        position: { lat: -41.9500, lng: -72.4333 },
        places: ["Hornopirén National Park", "Yate Volcano", "Hot Springs"]
      }
    ],
    color: "#00A699",
    description: "Exploring the pristine lakes and mountains of Chile's Lake District.",
    tags: ["Nature", "Hiking", "Lakes", "Mountains", "Adventure"],
    countries: ["Chile"],
    coverImage: "https://images.unsplash.com/photo-1583343733868-718f5d4a9531?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "31",
    title: "China & Hong Kong Adventure 2019",
    startDate: new Date("2019-04-01"),
    endDate: new Date("2019-04-21"),
    isPast: true,
    cities: [
      {
        id: "beijing",
        name: "Beijing",
        position: { lat: 39.9042, lng: 116.4074 },
        places: ["Great Wall", "Forbidden City", "Temple of Heaven"]
      },
      {
        id: "shenzhen",
        name: "Shenzhen",
        position: { lat: 22.5431, lng: 114.0579 },
        places: ["Window of the World", "OCT Loft", "Dafen Oil Painting Village"]
      },
      {
        id: "hong-kong",
        name: "Hong Kong",
        position: { lat: 22.3193, lng: 114.1694 },
        places: ["Victoria Peak", "Tsim Sha Tsui", "Lantau Island"]
      }
    ],
    color: "#E31C5F",
    description: "Exploring the vibrant cities of China and Hong Kong.",
    tags: ["Urban", "Culture", "History", "Food", "Asia"],
    countries: ["China", "Hong Kong"],
    coverImage: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "32",
    title: "US East Coast Winter 2019",
    startDate: new Date("2019-02-01"),
    endDate: new Date("2019-02-21"),
    isPast: true,
    cities: [
      {
        id: "philadelphia",
        name: "Philadelphia",
        position: { lat: 39.9526, lng: -75.1652 },
        places: ["Liberty Bell", "Independence Hall", "Philadelphia Museum of Art"]
      },
      {
        id: "washington",
        name: "Washington DC",
        position: { lat: 38.9072, lng: -77.0369 },
        places: ["National Mall", "Smithsonian Museums", "Capitol Building"]
      },
      {
        id: "new-york",
        name: "New York",
        position: { lat: 40.7128, lng: -74.0060 },
        places: ["Central Park", "Times Square", "Empire State Building"]
      }
    ],
    color: "#008489",
    description: "Winter exploration of America's historic East Coast cities.",
    tags: ["Urban", "History", "Culture", "Winter", "Museums"],
    countries: ["United States"],
    coverImage: "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "33",
    title: "European Capitals Tour 2022",
    startDate: new Date("2022-03-01"),
    endDate: new Date("2022-03-21"),
    isPast: true,
    cities: [
      {
        id: "paris",
        name: "Paris",
        position: { lat: 48.8566, lng: 2.3522 },
        places: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"]
      },
      {
        id: "zurich",
        name: "Zurich",
        position: { lat: 47.3769, lng: 8.5417 },
        places: ["Old Town", "Lake Zurich", "Grossmünster"]
      },
      {
        id: "venice",
        name: "Venice",
        position: { lat: 45.4408, lng: 12.3155 },
        places: ["St. Mark's Square", "Rialto Bridge", "Grand Canal"]
      },
      {
        id: "rome",
        name: "Rome",
        position: { lat: 41.9028, lng: 12.4964 },
        places: ["Colosseum", "Vatican Museums", "Trevi Fountain"]
      },
      {
        id: "turin",
        name: "Turin",
        position: { lat: 45.0703, lng: 7.6869 },
        places: ["Royal Palace", "Egyptian Museum", "Mole Antonelliana"]
      }
    ],
    color: "#D70466",
    description: "A grand tour of Europe's most beautiful cities.",
    tags: ["Cultural", "History", "Urban", "Architecture", "Museums", "Food"],
    countries: ["France", "Switzerland", "Italy"],
    coverImage: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "33",
    title: "Mediterranean Adventure 2024",
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-06-21"),
    isPast: false,
    cities: [
      {
        id: "istanbul",
        name: "Istanbul, Turkey",
        position: { lat: 41.0082, lng: 28.9784 },
        places: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar", "Topkapi Palace"]
      },
      {
        id: "cairo",
        name: "Cairo, Egypt",
        position: { lat: 30.0444, lng: 31.2357 },
        places: ["Pyramids of Giza", "Egyptian Museum", "Khan el-Khalili", "Nile River Cruise"]
      },
      {
        id: "athens",
        name: "Athens, Greece",
        position: { lat: 37.9838, lng: 23.7275 },
        places: ["Acropolis", "Parthenon", "Plaka District", "Ancient Agora"]
      }
    ],
    color: "#FF6B6B",
    description: "Exploring the rich history and culture of three Mediterranean countries.",
    tags: ["History", "Culture", "Mediterranean", "Ancient Sites"],
    countries: ["Turkey", "Egypt", "Greece"],
    coverImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "34",
    title: "East Asia Explorer 2024",
    startDate: new Date("2024-09-15"),
    endDate: new Date("2024-10-05"),
    isPast: false,
    cities: [
      {
        id: "tokyo",
        name: "Tokyo, Japan",
        position: { lat: 35.6762, lng: 139.6503 },
        places: ["Shibuya Crossing", "Senso-ji Temple", "Tsukiji Market", "Meiji Shrine"]
      },
      {
        id: "seoul",
        name: "Seoul, South Korea",
        position: { lat: 37.5665, lng: 126.9780 },
        places: ["Gyeongbokgung Palace", "Myeongdong", "Bukchon Hanok Village", "Namsan Tower"]
      }
    ],
    color: "#4ECDC4",
    description: "Immersing in the unique cultures of Japan and South Korea.",
    tags: ["Asia", "Culture", "Food", "Modern Cities"],
    countries: ["Japan", "South Korea"],
    coverImage: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "35",
    title: "Southeast Asia Adventure 2024",
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-12-15"),
    isPast: false,
    cities: [
      {
        id: "bangkok",
        name: "Bangkok, Thailand",
        position: { lat: 13.7563, lng: 100.5018 },
        places: ["Grand Palace", "Wat Arun", "Chatuchak Market", "Khao San Road"]
      },
      {
        id: "hanoi",
        name: "Hanoi, Vietnam",
        position: { lat: 21.0278, lng: 105.8342 },
        places: ["Hoan Kiem Lake", "Old Quarter", "Ho Chi Minh Mausoleum", "Temple of Literature"]
      }
    ],
    color: "#45B7D1",
    description: "Exploring the vibrant cultures and landscapes of Southeast Asia.",
    tags: ["Asia", "Culture", "Food", "Beaches", "Temples"],
    countries: ["Thailand", "Vietnam"],
    coverImage: "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "36",
    title: "Iberian Peninsula Tour 2024",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-05-21"),
    isPast: false,
    cities: [
      {
        id: "madrid",
        name: "Madrid, Spain",
        position: { lat: 40.4168, lng: -3.7038 },
        places: ["Prado Museum", "Royal Palace", "Retiro Park", "Plaza Mayor"]
      },
      {
        id: "lisbon",
        name: "Lisbon, Portugal",
        position: { lat: 38.7223, lng: -9.1393 },
        places: ["Belém Tower", "Jerónimos Monastery", "Alfama District", "Tram 28"]
      }
    ],
    color: "#96CEB4",
    description: "Discovering the rich history and culture of Spain and Portugal.",
    tags: ["Europe", "History", "Culture", "Food", "Architecture"],
    countries: ["Spain", "Portugal"],
    coverImage: "https://images.unsplash.com/photo-1578859651203-c7126a106b59?q=80&w=3272&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: "37",
    title: "US West Coast Road Trip 2024",
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-07-21"),
    isPast: false,
    cities: [
      {
        id: "san-francisco",
        name: "San Francisco, USA",
        position: { lat: 37.7749, lng: -122.4194 },
        places: ["Golden Gate Bridge", "Alcatraz", "Fisherman's Wharf", "Lombard Street"]
      },
      {
        id: "los-angeles",
        name: "Los Angeles, USA",
        position: { lat: 34.0522, lng: -118.2437 },
        places: ["Hollywood", "Santa Monica Pier", "Griffith Observatory", "Venice Beach"]
      }
    ],
    color: "#FF9F1C",
    description: "Exploring the iconic cities and landscapes of the US West Coast.",
    tags: ["Road Trip", "Beaches", "Cities", "Nature"],
    countries: ["United States"],
    coverImage: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "38",
    title: "Hawaiian Paradise 2024",
    startDate: new Date("2024-08-01"),
    endDate: new Date("2024-08-14"),
    isPast: false,
    cities: [
      {
        id: "honolulu",
        name: "Honolulu, Hawaii",
        position: { lat: 21.3069, lng: -157.8583 },
        places: ["Waikiki Beach", "Diamond Head", "Pearl Harbor", "Hanauma Bay"]
      }
    ],
    color: "#FF6B6B",
    description: "Two weeks of relaxation and adventure in the Hawaiian paradise.",
    tags: ["Beach", "Relaxation", "Nature", "Adventure"],
    countries: ["United States"],
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "39",
    title: "West Coast & Vegas Adventure 2024",
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-09-14"),
    isPast: false,
    cities: [
      {
        id: "las-vegas",
        name: "Las Vegas, USA",
        position: { lat: 36.1699, lng: -115.1398 },
        places: ["The Strip", "Fremont Street", "Red Rock Canyon", "Hoover Dam"]
      }
    ],
    color: "#FF9F1C",
    description: "Combining the excitement of Las Vegas with West Coast exploration.",
    tags: ["Entertainment", "Nightlife", "Desert", "Adventure"],
    countries: ["United States"],
    coverImage: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "40",
    title: "Canadian Rockies & Alaska 2024",
    startDate: new Date("2024-06-15"),
    endDate: new Date("2024-07-15"),
    isPast: false,
    cities: [
      {
        id: "vancouver",
        name: "Vancouver, Canada",
        position: { lat: 49.2827, lng: -123.1207 },
        places: ["Stanley Park", "Capilano Suspension Bridge", "Granville Island", "Gastown"]
      },
      {
        id: "anchorage",
        name: "Anchorage, Alaska",
        position: { lat: 61.2181, lng: -149.9003 },
        places: ["Denali National Park", "Glacier Bay", "Kenai Fjords", "Northern Lights"]
      }
    ],
    color: "#4ECDC4",
    description: "Exploring the stunning landscapes of Western Canada and Alaska.",
    tags: ["Nature", "Wildlife", "Mountains", "Glaciers"],
    countries: ["Canada", "United States"],
    coverImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "41",
    title: "Balkan Explorer 2024",
    startDate: new Date("2024-07-15"),
    endDate: new Date("2024-08-15"),
    isPast: false,
    cities: [
      {
        id: "dubrovnik",
        name: "Dubrovnik, Croatia",
        position: { lat: 42.6507, lng: 18.0944 },
        places: ["Old Town", "City Walls", "Lokrum Island", "Cable Car"]
      },
      {
        id: "kotor",
        name: "Kotor, Montenegro",
        position: { lat: 42.4247, lng: 18.7712 },
        places: ["Kotor Bay", "Old Town", "Lovćen National Park", "Perast"]
      },
      {
        id: "tirana",
        name: "Tirana, Albania",
        position: { lat: 41.3275, lng: 19.8187 },
        places: ["Skanderbeg Square", "Bunk'Art", "Mount Dajti", "Blloku District"]
      }
    ],
    color: "#96CEB4",
    description: "Discovering the hidden gems of the Balkan countries.",
    tags: ["History", "Culture", "Coast", "Mountains"],
    countries: ["Croatia", "Montenegro", "Albania"],
    coverImage: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "42",
    title: "Florianópolis Getaway 2024",
    startDate: new Date("2024-01-15"),
    endDate: new Date("2024-01-30"),
    isPast: false,
    cities: [
      {
        id: "florianopolis",
        name: "Florianópolis, Brazil",
        position: { lat: -27.5949, lng: -48.5482 },
        places: ["Praia Mole", "Lagoa da Conceição", "Centro Histórico", "Ilha do Campeche"]
      }
    ],
    color: "#FF6B6B",
    description: "Enjoying the beautiful beaches and vibrant culture of Florianópolis.",
    tags: ["Beach", "Nature", "Culture", "Relaxation"],
    countries: ["Brazil"],
    coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "43",
    title: "Colombian Adventure 2024",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-03-21"),
    isPast: false,
    cities: [
      {
        id: "bogota",
        name: "Bogotá, Colombia",
        position: { lat: 4.7110, lng: -74.0721 },
        places: ["Monserrate", "Gold Museum", "La Candelaria", "Botero Museum"]
      },
      {
        id: "medellin",
        name: "Medellín, Colombia",
        position: { lat: 6.2442, lng: -75.5812 },
        places: ["Comuna 13", "Botero Plaza", "Metrocable", "Parque Arví"]
      }
    ],
    color: "#FF9F1C",
    description: "Exploring the diverse landscapes and culture of Colombia.",
    tags: ["Culture", "Nature", "Cities", "Adventure"],
    countries: ["Colombia"],
    coverImage: "https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "44",
    title: "Australian Adventure 2024",
    startDate: new Date("2024-11-01"),
    endDate: new Date("2024-12-15"),
    isPast: false,
    cities: [
      {
        id: "sydney",
        name: "Sydney, Australia",
        position: { lat: -33.8688, lng: 151.2093 },
        places: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge", "Royal Botanic Garden"]
      },
      {
        id: "melbourne",
        name: "Melbourne, Australia",
        position: { lat: -37.8136, lng: 144.9631 },
        places: ["Federation Square", "Great Ocean Road", "Queen Victoria Market", "Yarra Valley"]
      }
    ],
    color: "#4ECDC4",
    description: "Exploring the diverse landscapes and cities of Australia.",
    tags: ["Nature", "Cities", "Beaches", "Wildlife"],
    countries: ["Australia"],
    coverImage: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "45",
    title: "China Explorer 2024",
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-04-21"),
    isPast: false,
    cities: [
      {
        id: "beijing",
        name: "Beijing, China",
        position: { lat: 39.9042, lng: 116.4074 },
        places: ["Great Wall", "Forbidden City", "Temple of Heaven", "Summer Palace"]
      },
      {
        id: "shanghai",
        name: "Shanghai, China",
        position: { lat: 31.2304, lng: 121.4737 },
        places: ["The Bund", "Yu Garden", "Shanghai Tower", "French Concession"]
      }
    ],
    color: "#FF6B6B",
    description: "Discovering the rich history and modern wonders of China.",
    tags: ["History", "Culture", "Modern Cities", "Ancient Sites"],
    countries: ["China"],
    coverImage: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    id: "46",
    title: "Nordic Adventure 2024",
    startDate: new Date("2024-12-01"),
    endDate: new Date("2024-12-21"),
    isPast: false,
    cities: [
      {
        id: "reykjavik",
        name: "Reykjavik, Iceland",
        position: { lat: 64.1265, lng: -21.8174 },
        places: ["Blue Lagoon", "Golden Circle", "Northern Lights", "Geysir"]
      },
      {
        id: "oslo",
        name: "Oslo, Norway",
        position: { lat: 59.9139, lng: 10.7522 },
        places: ["Vigeland Park", "Opera House", "Viking Ship Museum", "Holmenkollen"]
      },
      {
        id: "stockholm",
        name: "Stockholm, Sweden",
        position: { lat: 59.3293, lng: 18.0686 },
        places: ["Gamla Stan", "Vasa Museum", "ABBA Museum", "Djurgården"]
      }
    ],
    color: "#96CEB4",
    description: "Exploring the winter wonders of the Nordic countries.",
    tags: ["Winter", "Northern Lights", "Nature", "Culture"],
    countries: ["Iceland", "Norway", "Sweden"],
    coverImage: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=3059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]; 
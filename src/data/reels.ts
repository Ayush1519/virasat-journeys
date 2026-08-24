export type Reel = {
  id: string;
  title: string;
  destinationId?: string; // link to destinations by id
  siteId?: string; // link to heritage site id
  state: string;
  city?: string;
  category: string;
  description: string;
  youtubeId: string; // short id for embedding
  likes?: number;
  comments?: number;
  saved?: boolean;
};

export const reels: Reel[] = [
  {
    id: "r1",
    title: "Sunrise at the Taj Mahal",
    destinationId: "taj-mahal-agra",
    siteId: "taj-mahal",
    state: "Uttar Pradesh",
    city: "Agra",
    category: "Heritage & Monuments",
    description: "Sunrise reflections and marble closeups.",
    youtubeId: "mYt2Z1XbQp0",
    likes: 1245,
    comments: 78,
  },
  {
    id: "r2",
    title: "Hampi Stones & Sunsets",
    destinationId: "hampi",
    state: "Karnataka",
    city: "Hospet",
    category: "Historical Places",
    description: "Boulders and ruins in golden light.",
    youtubeId: "xYz9AbCdEf0",
    likes: 932,
    comments: 41,
  },
  {
    id: "r3",
    title: "Kerala Tea Trails — Munnar",
    destinationId: "munnar",
    state: "Kerala",
    city: "Munnar",
    category: "Mountains",
    description: "Rolling tea gardens and cloudscape.",
    youtubeId: "aBcDeFg1234",
    likes: 560,
    comments: 22,
  },
  {
    id: "r4",
    title: "Palolem Beach Vibes",
    destinationId: "goa-palolem",
    state: "Goa",
    city: "Canacona",
    category: "Beaches",
    description: "Kayaks at dawn and shacks at dusk.",
    youtubeId: "sh0rtId12345",
    likes: 430,
    comments: 18,
  },
  {
    id: "r5",
    title: "Varanasi Aarti — Evening Ritual",
    destinationId: "varanasi-ghats",
    state: "Uttar Pradesh",
    city: "Varanasi",
    category: "Culture & Festivals",
    description: "River prayers and lamps at dusk.",
    youtubeId: "gHiJkL67890",
    likes: 2100,
    comments: 199,
  },
  {
    id: "r6",
    title: "Living Root Bridges — Meghalaya",
    destinationId: "shillong-cherrapunji",
    state: "Meghalaya",
    city: "Cherrapunji",
    category: "Hidden Gems",
    description: "Bridges grown over decades by communities.",
    youtubeId: "lrBridge001",
    likes: 315,
    comments: 12,
  },
  {
    id: "r7",
    title: "Kaziranga Safari — One-horned Rhino",
    destinationId: "kaziranga",
    state: "Assam",
    city: "Golaghat",
    category: "Nature & Wildlife",
    description: "Jeep safaris and grasslands.",
    youtubeId: "rhinoSaf001",
    likes: 820,
    comments: 65,
  },
  {
    id: "r8",
    title: "Thiksey Monastery Dawn Prayers",
    destinationId: "leh-thiksey",
    state: "Ladakh",
    city: "Leh",
    category: "Temples & Monasteries",
    description: "Monks, horns and mountain vistas.",
    youtubeId: "thiksey001",
    likes: 480,
    comments: 31,
  },
  {
    id: "r9",
    title: "Konark — Wheels of Stone",
    destinationId: "konark",
    state: "Odisha",
    city: "Konark",
    category: "Heritage & Monuments",
    description: "Carvings and coastal wind.",
    youtubeId: "konark001",
    likes: 270,
    comments: 9,
  },
  {
    id: "r10",
    title: "Rann Utsav Nights",
    destinationId: "rann-of-kutch",
    state: "Gujarat",
    city: "Bhuj",
    category: "Culture & Festivals",
    description: "Tent cities, folk music and crafts.",
    youtubeId: "rann001",
    likes: 999,
    comments: 120,
  },
];

export const reelCategories = [
  "Heritage & Monuments",
  "Temples & Monasteries",
  "Culture & Festivals",
  "Nature & Wildlife",
  "Food",
  "Beaches",
  "Mountains",
  "Historical Places",
  "Hidden Gems",
  "Local Experiences",
] as const;

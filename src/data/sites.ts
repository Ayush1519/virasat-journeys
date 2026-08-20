import waterfallImg from "@/assets/jh-hero-waterfall.jpg";
import netarhatImg from "@/assets/jh-netarhat.jpg";
import wildlifeImg from "@/assets/jh-wildlife.jpg";
import templeImg from "@/assets/jh-temple.jpg";
import cultureImg from "@/assets/jh-culture.jpg";
import artImg from "@/assets/jh-art.jpg";
import stayImg from "@/assets/jh-stay.jpg";

export type DestinationCategory =
  | "Waterfall"
  | "Wildlife"
  | "Temple"
  | "Hill Station"
  | "Heritage"
  | "City";

export type Destination = {
  id: string;
  name: string;
  nameHi: string;
  location: string;
  district: string;
  /** kept for backwards compatibility with older components */
  state: string;
  coords: { lat: number; lng: number };
  image: string;
  era: string;
  tagline: string;
  category: DestinationCategory;
  bestTime: string;
  idealDuration: string;
  entryFee: string;
  howToReach: string;
  activities: string[];
  historyKids: string;
  historyDetailed: string;
  culturalImportance: string;
  food: { name: string; desc: string }[];
  clothing: { name: string; desc: string };
  music: { title: string; desc: string }[];
  funFacts: string[];
  timeline: { year: string; event: string }[];
  unesco: boolean;
};

/** legacy alias */
export type HeritageSite = Destination;

export const sites: Destination[] = [
  {
    id: "hundru-falls",
    name: "Hundru Falls",
    nameHi: "हुंडरू जलप्रपात",
    location: "Ranchi, Jharkhand",
    district: "Ranchi",
    state: "Jharkhand",
    coords: { lat: 23.4497, lng: 85.6636 },
    image: waterfallImg,
    era: "Formed on the Subarnarekha",
    tagline: "A 98-metre plunge of white thunder into black rock",
    category: "Waterfall",
    bestTime: "July – February",
    idealDuration: "Half day",
    entryFee: "₹20 per person · ₹50 parking",
    howToReach: "45 km east of Ranchi via Sikidiri Ghati — 1.5 hrs by cab or bus.",
    activities: ["Waterfall viewpoint trek", "Monsoon photography", "Rock pool picnic", "Sunset at Sikidiri Ghat"],
    historyKids:
      "The Subarnarekha river runs fast across the plateau and then simply falls off a giant rock step — as tall as a 30-storey building! In the rains you can hear it roaring long before you see it.",
    historyDetailed:
      "Hundru Falls is created where the Subarnarekha river drops 98 metres off the Ranchi plateau escarpment, carving a series of plunge pools through Chota Nagpur's ancient basalt and granite. It is the highest waterfall in Jharkhand and among the tallest in eastern India, with roughly 750 steps descending to the base.",
    culturalImportance:
      "The Subarnarekha ('streak of gold') is named for the flecks of gold historically panned near Piska. Villages around Hundru still hold small river rituals at the start of the monsoon.",
    food: [
      { name: "Dhuska", desc: "Deep-fried rice-and-lentil discs, sold hot at the falls car park with ghugni." },
      { name: "Roasted Bhutta", desc: "Charcoal-grilled corn rubbed with lemon and local chilli salt." },
    ],
    clothing: {
      name: "Panchi–Parhan",
      desc: "The classic Oraon two-piece white cotton drape with a coloured border, worn across the Ranchi plateau.",
    },
    music: [
      { title: "Mandar & Nagara", desc: "Twin drums that set the pulse of every plateau village celebration." },
      { title: "Jhumar", desc: "Call-and-response harvest song sung in circles after the rains." },
    ],
    funFacts: [
      "Around 750 stone steps take you from the road to the base of the falls.",
      "The plunge is highest in August, when spray can be felt 200 metres away.",
      "A small hydel project downstream uses the same river drop.",
    ],
    timeline: [
      { year: "Ancient", event: "The Subarnarekha carves the plateau escarpment." },
      { year: "1900s", event: "Panning for gold flecks recorded along the river." },
      { year: "2000", event: "Jharkhand is formed; Hundru becomes a flagship attraction." },
      { year: "Today", event: "Jharkhand Tourism operates viewpoints, steps and a café." },
    ],
    unesco: false,
  },
  {
    id: "netarhat",
    name: "Netarhat",
    nameHi: "नेतरहाट",
    location: "Latehar, Jharkhand",
    district: "Latehar",
    state: "Jharkhand",
    coords: { lat: 23.47, lng: 84.26 },
    image: netarhatImg,
    era: "Plateau hill retreat",
    tagline: "The Queen of Chotanagpur, where the sun rises twice",
    category: "Hill Station",
    bestTime: "October – March",
    idealDuration: "2 days",
    entryFee: "Free",
    howToReach: "156 km west of Ranchi via Kuru–Mahuadanr road — about 4 hrs by car.",
    activities: ["Magnolia Sunset Point", "Sunrise Point at Netarhat Ghat", "Lower & Upper Ghaghri Falls", "Pine forest walks"],
    historyKids:
      "Netarhat sits on top of a green hill where the clouds float below you. People wake up early to watch the sun climb out of a sea of mist — it is the most famous sunrise in Jharkhand.",
    historyDetailed:
      "At 1,128 metres, Netarhat is the highest point of the Chotanagpur plateau in Latehar district. Developed as a summer retreat in the colonial era and home to the famous Netarhat Residential School since 1954, it is ringed by sal and pine forest, Ghaghri waterfalls, and the Magnolia Point escarpment.",
    culturalImportance:
      "Magnolia Point carries the local legend of an English girl and an Oraon shepherd boy — a story still sung in the surrounding villages. The plateau is also the heartland of Kharwar and Oraon communities.",
    food: [
      { name: "Rugra", desc: "Wild monsoon mushrooms that sprout after the first rains — cooked simply with onion and mustard oil." },
      { name: "Handia", desc: "Traditional fermented rice drink offered at village gatherings." },
    ],
    clothing: {
      name: "Kharwar Handloom Shawl",
      desc: "Thick coarse-cotton wraps woven for the cold plateau winters, striped in madder and indigo.",
    },
    music: [
      { title: "Nagpuri Folk", desc: "Lilting hill songs in the Nagpuri tongue, sung on long walks between villages." },
      { title: "Paika", desc: "Martial drum-and-sword performance of the Chotanagpur uplands." },
    ],
    funFacts: [
      "Nicknamed the 'Queen of Chotanagpur' for its year-round cool air.",
      "Netarhat Residential School is modelled on India's oldest gurukul ideals.",
      "On clear winter mornings, the mist below the ridge looks like a white ocean.",
    ],
    timeline: [
      { year: "1800s", event: "Used as a hot-weather retreat by plateau administrators." },
      { year: "1954", event: "Netarhat Residential School founded." },
      { year: "2000", event: "Becomes Jharkhand's premier hill destination." },
      { year: "Today", event: "Sunrise and sunset points draw visitors from across eastern India." },
    ],
    unesco: false,
  },
  {
    id: "betla-national-park",
    name: "Betla National Park",
    nameHi: "बेतला राष्ट्रीय उद्यान",
    location: "Latehar, Jharkhand",
    district: "Latehar",
    state: "Jharkhand",
    coords: { lat: 23.88, lng: 84.19 },
    image: wildlifeImg,
    era: "Notified 1986",
    tagline: "Sal forest, wild elephants and a fort swallowed by the jungle",
    category: "Wildlife",
    bestTime: "November – March",
    idealDuration: "2 days",
    entryFee: "₹100 per person · safari ₹1,000 per jeep",
    howToReach: "170 km from Ranchi via Chandwa & Barwadih; nearest railhead Barwadih (25 km).",
    activities: ["Morning jeep safari", "Elephant herd spotting", "Palamu Forts trek", "Kamaldah lake birding"],
    historyKids:
      "Betla is a big forest where elephants walk in herds, deer graze in the grass and a tiger sometimes leaves its pawprints on the road. Deep inside, there are two old forts that the jungle has almost eaten.",
    historyDetailed:
      "Part of the Palamu Tiger Reserve — one of India's original nine Project Tiger reserves declared in 1974 — Betla was notified as a national park in 1986. Its 226 sq km of sal, bamboo and grassland shelter elephants, gaur, sloth bear, leopard, chital and over 170 bird species, alongside the 16th-century Palamu Forts of the Chero kings.",
    culturalImportance:
      "Palamu hosted the world's first scientific tiger census in 1932. The forest is also the ancestral land of Kharwar, Oraon and Birjia communities whose sacred groves survive inside the reserve.",
    food: [
      { name: "Chilka Roti", desc: "Thin rice-batter pancake eaten with mutton curry at forest rest houses." },
      { name: "Bamboo Shoot Curry", desc: "Seasonal tender bamboo cooked with mustard and local herbs." },
    ],
    clothing: {
      name: "Kharwar Kachcha Dhoti",
      desc: "Short handwoven dhoti with a red border, practical for forest and field work.",
    },
    music: [
      { title: "Karma Songs", desc: "Sung around the karam tree during the monsoon Karma festival." },
      { title: "Bansuri of the Sal", desc: "Simple bamboo flute melodies played by cattle herders at dusk." },
    ],
    funFacts: [
      "The world's first tiger census by pugmark counting happened here in 1932.",
      "Palamu Fort's outer walls run for nearly a kilometre through dense forest.",
      "Hot springs at Tatha, inside the reserve, stay warm year-round.",
    ],
    timeline: [
      { year: "1500s", event: "Chero kings build the Palamu Forts." },
      { year: "1932", event: "First scientific tiger census conducted." },
      { year: "1974", event: "Included in Project Tiger as Palamu Tiger Reserve." },
      { year: "1986", event: "Betla declared a national park." },
    ],
    unesco: false,
  },
  {
    id: "baidyanath-dham",
    name: "Baidyanath Dham",
    nameHi: "बैद्यनाथ धाम",
    location: "Deoghar, Jharkhand",
    district: "Deoghar",
    state: "Jharkhand",
    coords: { lat: 24.492, lng: 86.7 },
    image: templeImg,
    era: "Jyotirlinga · temple complex of 22 shrines",
    tagline: "Where a million saffron pilgrims walk 105 km with river water",
    category: "Temple",
    bestTime: "October – March · Shravan for the mela",
    idealDuration: "1–2 days",
    entryFee: "Free · ₹500 for shighra darshan",
    howToReach: "250 km from Ranchi; Jasidih railway station is 7 km away with direct trains from Kolkata and Patna.",
    activities: ["Jyotirlinga darshan", "Shravani Mela kanwar walk", "Naulakha Mandir", "Tapovan caves & Trikut ropeway"],
    historyKids:
      "In the month of Shravan, lakhs of people dressed in saffron carry water from the Ganga and walk over 100 kilometres to pour it on the Shiva lingam here. It becomes the longest walking fair in the world.",
    historyDetailed:
      "Baidyanath Dham in Deoghar is revered as one of the twelve Jyotirlingas of Shiva. The main shrine, topped by a distinctive lotus-shaped pinnacle and panchsula trident, anchors a walled complex of 22 temples. During Shravan (July–August), the Shravani Mela sees millions of kanwariyas carry Ganga water from Sultanganj along a 105-km route to the shrine.",
    culturalImportance:
      "One of India's largest annual religious gatherings, the mela sustains a month-long economy of song, food and craft across Deoghar, and binds Jharkhand into the pan-Indian Shaiva pilgrimage map.",
    food: [
      { name: "Peda", desc: "Deoghar's signature milk sweet, sold by the kilo along the temple lane." },
      { name: "Thekua", desc: "Crisp wheat-and-jaggery cookie offered as prasad and carried by pilgrims." },
      { name: "Litti Chokha", desc: "Roasted sattu-filled dough balls with smoky mashed brinjal." },
    ],
    clothing: {
      name: "Kanwariya Saffron",
      desc: "Unstitched saffron cotton worn barefoot for the pilgrimage, tied with the kanwar sling.",
    },
    music: [
      { title: "Bol Bam Chants", desc: "The rhythmic pilgrim call that carries the walk for 105 kilometres." },
      { title: "Shiv Bhajan", desc: "Devotional songs sung through the night in the temple courtyard." },
    ],
    funFacts: [
      "The Shravani Mela is often called the world's longest religious fair.",
      "Naulakha Mandir nearby was built for nine lakh rupees — hence its name.",
      "The temple's panchsula trident is found on almost no other Shiva shrine.",
    ],
    timeline: [
      { year: "Puranic", event: "Named among the twelve Jyotirlingas of Shiva." },
      { year: "1596", event: "Present temple structure widely dated to this period." },
      { year: "1800s", event: "Kanwar route from Sultanganj becomes formalised." },
      { year: "Today", event: "Hosts millions of pilgrims each Shravan." },
    ],
    unesco: false,
  },
  {
    id: "patratu-valley",
    name: "Patratu Valley",
    nameHi: "पतरातू घाटी",
    location: "Ramgarh, Jharkhand",
    district: "Ramgarh",
    state: "Jharkhand",
    coords: { lat: 23.67, lng: 85.29 },
    image: netarhatImg,
    era: "Dam built 1960s",
    tagline: "Thirty-two hairpin bends unspooling towards a blue lake",
    category: "Hill Station",
    bestTime: "August – February",
    idealDuration: "Half day",
    entryFee: "Free · boating from ₹200",
    howToReach: "40 km from Ranchi on the Ranchi–Patratu ghati road — one of India's most scenic drives.",
    activities: ["Ghati road drive", "Lake boating & kayaking", "Sunset viewpoints", "Lakeside camping"],
    historyKids:
      "The road to Patratu twists down a hillside in more than thirty curves. At the bottom is a huge blue lake where you can ride a boat and watch the sun melt into the water.",
    historyDetailed:
      "The Patratu dam was built in the 1960s on the Nalkari river to supply the Patratu Thermal Power Station. The winding ghati road that descends into the valley has since become Jharkhand's most photographed drive, and the reservoir now anchors a state-backed lakeside tourism and water-sports project.",
    culturalImportance:
      "Patratu shows Jharkhand's other face — an industrial state that turned an engineering reservoir into a place of leisure for Ranchi's weekend crowds.",
    food: [
      { name: "Lakeside Fish Fry", desc: "Freshwater catch from the reservoir, fried with turmeric and mustard." },
      { name: "Litti Chokha", desc: "Served hot at the roadside dhabas along the ghati bends." },
    ],
    clothing: {
      name: "Tussar Silk Stole",
      desc: "Jharkhand's honey-toned wild silk, woven in nearby Bhagaiya and Kuchai clusters.",
    },
    music: [
      { title: "Nagpuri Pop", desc: "Modern Nagpuri tracks that play from every car winding down the ghati." },
      { title: "Domkach", desc: "Women's wedding-night song circle of the Ramgarh belt." },
    ],
    funFacts: [
      "The ghati road has roughly 32 hairpin bends.",
      "The reservoir was built purely for a thermal power plant.",
      "Sunset here is the single most Instagrammed frame in Jharkhand.",
    ],
    timeline: [
      { year: "1962", event: "Patratu dam and thermal station commissioned." },
      { year: "1990s", event: "Ghati road becomes a popular Ranchi weekend drive." },
      { year: "2018", event: "Lakeside tourism complex announced." },
      { year: "Today", event: "Boating, camping and water sports operate at the reservoir." },
    ],
    unesco: false,
  },
  {
    id: "dassam-falls",
    name: "Dassam Falls",
    nameHi: "दशम जलप्रपात",
    location: "Taimara, Ranchi, Jharkhand",
    district: "Ranchi",
    state: "Jharkhand",
    coords: { lat: 23.1445, lng: 85.468 },
    image: waterfallImg,
    era: "On the Kanchi river",
    tagline: "Ten streams of the Kanchi falling as one white curtain",
    category: "Waterfall",
    bestTime: "August – January",
    idealDuration: "Half day",
    entryFee: "₹20 per person",
    howToReach: "40 km from Ranchi on the Ranchi–Jamshedpur highway, near Taimara village.",
    activities: ["Viewing gallery", "Monsoon photography", "Local craft stalls", "Picnic lawns"],
    historyKids:
      "The Kanchi river breaks into ten streams and jumps off a 44-metre cliff all at once. That is where the name Dassam comes from — 'das' means ten.",
    historyDetailed:
      "Dassam Falls, also called Dassam Ghagh, is formed where the Kanchi river drops about 44 metres in a broad multi-stream cascade near Taimara. The name derives from 'das' (ten) for the ten distinct streams visible in full flow. The plunge pool is deep and swift, and swimming is prohibited.",
    culturalImportance:
      "The falls sit in Munda heartland; nearby villages hold the Sarhul spring festival honouring the sal tree and the earth spirit.",
    food: [
      { name: "Ghugni & Dhuska", desc: "Spiced black-gram curry with fried rice discs at the falls stalls." },
      { name: "Malpua", desc: "Jaggery pancake fried fresh at weekend food carts." },
    ],
    clothing: {
      name: "Munda Parhan",
      desc: "White handloom drape with a bold red-and-green border worn during Sarhul.",
    },
    music: [
      { title: "Sarhul Songs", desc: "Spring songs sung as sal blossoms are offered to the earth." },
      { title: "Mandar Beat", desc: "The barrel drum that anchors every Munda dance circle." },
    ],
    funFacts: [
      "'Dassam' comes from the ten separate streams of the cascade.",
      "The plunge pool is deep enough that swimming is banned year-round.",
      "The falls are floodlit on some winter weekends.",
    ],
    timeline: [
      { year: "Ancient", event: "The Kanchi cuts its gorge through the plateau." },
      { year: "1990s", event: "Viewing galleries and steps built." },
      { year: "2015", event: "Safety barriers added after monsoon incidents." },
      { year: "Today", event: "One of Ranchi's most visited day trips." },
    ],
    unesco: false,
  },
  {
    id: "rajrappa",
    name: "Rajrappa Temple",
    nameHi: "रजरप्पा मंदिर",
    location: "Ramgarh, Jharkhand",
    district: "Ramgarh",
    state: "Jharkhand",
    coords: { lat: 23.6333, lng: 85.7167 },
    image: templeImg,
    era: "Shakti Peeth",
    tagline: "Chhinnamasta's shrine where two rivers collide",
    category: "Temple",
    bestTime: "October – March",
    idealDuration: "Half day",
    entryFee: "Free",
    howToReach: "80 km from Ranchi via Ramgarh; regular buses and shared cabs from Ramgarh town.",
    activities: ["Chhinnamasta darshan", "River confluence walk", "Rajrappa falls", "Evening aarti"],
    historyKids:
      "At Rajrappa, the dark Bhairavi river crashes into the wide Damodar. Right at the meeting point stands a very old temple of the goddess Chhinnamasta.",
    historyDetailed:
      "Rajrappa marks the confluence of the Bhairavi (Bhera) and Damodar rivers, where the Bhairavi drops into the Damodar as a small waterfall. The temple to Chhinnamasta — a fierce Tantric form of the Devi — is regarded as one of eastern India's most important Shakti shrines, with a distinctive squat pyramidal roof.",
    culturalImportance:
      "Rajrappa is a major Tantric pilgrimage centre, drawing devotees from Jharkhand, Bihar, Bengal and Odisha, especially during Navratri and Kali Puja.",
    food: [
      { name: "Khaja", desc: "Layered flaky sweet sold in stacks along the temple approach." },
      { name: "Prasad Khichdi", desc: "Simple rice-and-lentil offering served to pilgrims." },
    ],
    clothing: {
      name: "Red Devi Chunari",
      desc: "Crimson veils offered to the goddess and worn by devotees during Navratri.",
    },
    music: [
      { title: "Devi Jagran", desc: "All-night devotional singing during Navratri." },
      { title: "Dhak Drums", desc: "Deep barrel-drum rhythms carried over from Bengal's Shakta tradition." },
    ],
    funFacts: [
      "The Bhairavi meets the Damodar as a waterfall, not a stream.",
      "Chhinnamasta is one of the ten Mahavidya goddesses.",
      "The temple roof shape is unlike any other in Jharkhand.",
    ],
    timeline: [
      { year: "Ancient", event: "Site revered as a Shakti Peeth." },
      { year: "1700s", event: "Present temple structure consolidated." },
      { year: "1980s", event: "Pilgrim facilities expanded at the confluence." },
      { year: "Today", event: "Lakhs attend during Navratri and Kali Puja." },
    ],
    unesco: false,
  },
  {
    id: "dalma-hills",
    name: "Dalma Wildlife Sanctuary",
    nameHi: "दलमा वन्यजीव अभयारण्य",
    location: "Jamshedpur, Jharkhand",
    district: "East Singhbhum",
    state: "Jharkhand",
    coords: { lat: 22.87, lng: 86.17 },
    image: wildlifeImg,
    era: "Notified 1976",
    tagline: "The elephant hill watching over Jamshedpur",
    category: "Wildlife",
    bestTime: "November – February",
    idealDuration: "1 day",
    entryFee: "₹50 per person · ₹250 per vehicle",
    howToReach: "10 km from Jamshedpur; a motorable forest road climbs to the top viewpoint and Shiva temple.",
    activities: ["Hill drive to the summit", "Elephant corridor viewing", "Dalma Shiva temple", "Sunrise trek"],
    historyKids:
      "Dalma is a green hill right next to a big steel city. Wild elephants travel across it every year, and from the top you can see the whole of Jamshedpur spread out below.",
    historyDetailed:
      "Notified in 1976, Dalma Wildlife Sanctuary covers about 193 sq km of hilly sal forest along a historic elephant migration corridor between Jharkhand, Bengal and Odisha. Besides elephants, it holds barking deer, sloth bear, porcupine and a rich butterfly population, with a Shiva temple at the 3,000-ft summit.",
    culturalImportance:
      "Dalma is sacred to the Santhal and Ho communities; the annual Dalma Sendra hunting festival has in recent years been reframed by forest-community dialogues into a conservation conversation.",
    food: [
      { name: "Handia Rice Beer", desc: "Fermented rice brew central to Santhal hospitality." },
      { name: "Pittha", desc: "Steamed rice dumplings with sweet or savoury fillings." },
    ],
    clothing: {
      name: "Santhal Panchi",
      desc: "White cotton drape with a green and red border, worn with silver hair ornaments.",
    },
    music: [
      { title: "Santhali Dong", desc: "Community dance songs performed in long linked rows." },
      { title: "Tamak & Tumdak", desc: "The paired Santhal drums that lead every festival procession." },
    ],
    funFacts: [
      "Elephants cross Dalma along a corridor used for centuries.",
      "The summit temple sees a huge Shivratri crowd from Jamshedpur.",
      "Dalma is one of the few sanctuaries you can reach from a city centre in 30 minutes.",
    ],
    timeline: [
      { year: "1976", event: "Dalma notified as a wildlife sanctuary." },
      { year: "1990s", event: "Elephant corridor studies begin." },
      { year: "2010s", event: "Community conservation programmes launched." },
      { year: "Today", event: "A daily escape for Jamshedpur residents." },
    ],
    unesco: false,
  },
  {
    id: "maluti-temples",
    name: "Maluti Terracotta Temples",
    nameHi: "मलूटी मंदिर",
    location: "Shikaripara, Dumka, Jharkhand",
    district: "Dumka",
    state: "Jharkhand",
    coords: { lat: 24.11, lng: 87.47 },
    image: artImg,
    era: "17th–19th century CE",
    tagline: "Seventy-two terracotta temples in a village of five hundred",
    category: "Heritage",
    bestTime: "October – March",
    idealDuration: "Half day",
    entryFee: "Free",
    howToReach: "55 km from Dumka near the Bengal border; best reached by car from Rampurhat (16 km).",
    activities: ["Terracotta panel walk", "Mowlakshi temple darshan", "Village craft visit", "Heritage photography"],
    historyKids:
      "In a tiny village called Maluti, kings once built temples instead of palaces — more than one hundred of them. Their brick walls are covered with little clay pictures telling stories from the Ramayana.",
    historyDetailed:
      "Maluti was the seat of the Baj Basanta dynasty, whose rulers built temples rather than monuments from the 17th to 19th centuries. Of an estimated 108 shrines, 72 survive, their brick façades covered in terracotta panels depicting the Ramayana, Mahabharata, court life and hunting scenes. The village's Mowlakshi temple is linked to the saint Bamakhepa.",
    culturalImportance:
      "Maluti is India's densest surviving cluster of terracotta temples and has been listed among the country's most endangered heritage sites, prompting an ongoing conservation programme.",
    food: [
      { name: "Pitha", desc: "Rice-flour cakes made for Makar Sankranti across the Dumka belt." },
      { name: "Gur Sandesh", desc: "Date-palm jaggery sweets shared with the Bengal borderland." },
    ],
    clothing: {
      name: "Tussar Silk of Dumka",
      desc: "Wild silk reared on arjun trees and handwoven in Santhal Pargana villages.",
    },
    music: [
      { title: "Baul-influenced Kirtan", desc: "Border-region devotional singing shaped by Bengal's Baul tradition." },
      { title: "Santhali Baha Songs", desc: "Flower-festival songs of Santhal Pargana." },
    ],
    funFacts: [
      "72 of an original 108 temples still stand.",
      "No two terracotta panels in the village repeat exactly.",
      "The saint Bamakhepa is said to have meditated at the Mowlakshi shrine.",
    ],
    timeline: [
      { year: "1600s", event: "Baj Basanta rulers begin temple building." },
      { year: "1800s", event: "Temple construction ends; village population declines." },
      { year: "2014", event: "Listed among India's most endangered heritage sites." },
      { year: "Today", event: "Conservation and restoration work under way." },
    ],
    unesco: false,
  },
  {
    id: "jamshedpur",
    name: "Jamshedpur",
    nameHi: "जमशेदपुर",
    location: "East Singhbhum, Jharkhand",
    district: "East Singhbhum",
    state: "Jharkhand",
    coords: { lat: 22.8046, lng: 86.2029 },
    image: cultureImg,
    era: "Founded 1907",
    tagline: "India's first planned industrial city, greener than you expect",
    category: "City",
    bestTime: "October – March",
    idealDuration: "2 days",
    entryFee: "Free · Tata Steel Zoological Park ₹50",
    howToReach: "130 km from Ranchi by NH-33 (3 hrs); Tatanagar Junction connects to Kolkata, Mumbai and Delhi.",
    activities: ["Jubilee Park & musical fountain", "Tata Steel Zoological Park", "Dimna Lake watersports", "Bhuvaneshwari temple"],
    historyKids:
      "Jamshedpur was built around a steel factory more than a hundred years ago — with parks, lakes and wide roads planned before the houses. People call it the Steel City.",
    historyDetailed:
      "Founded in 1907 by Jamsetji Tata at the confluence of the Subarnarekha and Kharkai rivers, Jamshedpur is India's first planned industrial city. Its 225-acre Jubilee Park, opened in 1958, Dimna Lake at the foot of Dalma, and one of the country's best-run city zoos make it an unusually green counterpoint to Jharkhand's wilderness circuits.",
    culturalImportance:
      "The city is a meeting point of Ho, Santhal, Odia, Bengali and Bihari cultures, and its Founder's Day illumination on 3 March is a civic festival in its own right.",
    food: [
      { name: "Ghugni Chaat", desc: "Bisti Bazaar's white-pea chaat with tamarind and raw onion." },
      { name: "Bengali–Bihari Thali", desc: "Steel City's fusion plate — posto, litti and mutton curry on one tray." },
      { name: "Mithai from Sakchi", desc: "Rasgulla and chhena sweets from the old market lanes." },
    ],
    clothing: {
      name: "Ho Handloom",
      desc: "Simple striped cotton weaves of the Ho community of Singhbhum.",
    },
    music: [
      { title: "Ho Folk Songs", desc: "Harvest and courtship songs of the Kolhan region." },
      { title: "Chhau of Seraikela", desc: "Masked martial dance-drama from nearby Seraikela, a UNESCO-listed tradition." },
    ],
    funFacts: [
      "Jubilee Park was gifted to the city on Tata Steel's golden jubilee in 1958.",
      "Seraikela Chhau, an hour away, is on UNESCO's Intangible Heritage list.",
      "Dimna Lake supplies the city's water and doubles as a watersports hub.",
    ],
    timeline: [
      { year: "1907", event: "Tata Iron and Steel Company founded at Sakchi." },
      { year: "1919", event: "Sakchi renamed Jamshedpur after Jamsetji Tata." },
      { year: "1958", event: "Jubilee Park opens on the company's golden jubilee." },
      { year: "Today", event: "Jharkhand's largest and greenest city." },
    ],
    unesco: false,
  },
  {
    id: "jonha-falls",
    name: "Jonha Falls",
    nameHi: "जोन्हा जलप्रपात",
    location: "Ranchi, Jharkhand",
    district: "Ranchi",
    state: "Jharkhand",
    coords: { lat: 23.34, lng: 85.61 },
    image: waterfallImg,
    era: "Also called Gautamdhara",
    tagline: "A hanging valley fall beside a Buddhist hermitage",
    category: "Waterfall",
    bestTime: "July – February",
    idealDuration: "Half day",
    entryFee: "₹20 per person",
    howToReach: "40 km east of Ranchi; Jonha railway halt is 1.5 km from the falls.",
    activities: ["722-step descent", "Gautam Buddha temple", "Monsoon photography", "Forest picnic"],
    historyKids:
      "Jonha is also called Gautamdhara because a temple to the Buddha sits beside it. You walk down more than seven hundred steps to reach the pool at the bottom.",
    historyDetailed:
      "Jonha Falls is a rare hanging-valley waterfall where the Gunga stream drops about 43 metres into the Raru river valley. A rest house and a Gautam Buddha temple stand at the top, giving the falls its alternative name, Gautamdhara. Roughly 722 steps lead down to the base.",
    culturalImportance:
      "The Buddhist shrine here marks Jharkhand's quieter Buddhist layer, alongside its dominant tribal and Shaiva traditions.",
    food: [
      { name: "Dhuska with Aloo Chokha", desc: "The plateau's most reliable roadside breakfast." },
      { name: "Tilkut", desc: "Sesame-and-jaggery brittle sold in winter." },
    ],
    clothing: {
      name: "Oraon Karia Kachcha",
      desc: "Dark-bordered handloom cotton worn during Karma festival dances.",
    },
    music: [
      { title: "Karma Geet", desc: "Songs of the karam branch, sung by young women through the night." },
      { title: "Jhumar", desc: "The plateau's swaying circle-dance rhythm." },
    ],
    funFacts: [
      "One of India's few true hanging-valley waterfalls.",
      "722 steps take you from the temple to the plunge pool.",
      "A railway halt named Jonha sits within walking distance.",
    ],
    timeline: [
      { year: "Ancient", event: "Gunga stream carves the hanging valley." },
      { year: "Early 1900s", event: "Buddhist shrine and rest house established." },
      { year: "2000s", event: "Steps and railings built by Jharkhand Tourism." },
      { year: "Today", event: "A favourite Ranchi monsoon escape." },
    ],
    unesco: false,
  },
  {
    id: "parasnath-shikharji",
    name: "Parasnath — Shikharji",
    nameHi: "पारसनाथ · शिखरजी",
    location: "Giridih, Jharkhand",
    district: "Giridih",
    state: "Jharkhand",
    coords: { lat: 23.963, lng: 86.13 },
    image: stayImg,
    era: "Jainism's holiest hill",
    tagline: "Twenty of twenty-four Tirthankaras attained moksha on this ridge",
    category: "Heritage",
    bestTime: "October – March",
    idealDuration: "1–2 days",
    entryFee: "Free",
    howToReach: "160 km from Ranchi; Parasnath railway station on the Delhi–Howrah main line is 20 km from Madhuban.",
    activities: ["27 km barefoot parikrama", "Sunrise from Parasnath peak", "Madhuban temple cluster", "Jain museum"],
    historyKids:
      "Parasnath is the tallest hill in Jharkhand. Jain pilgrims climb it barefoot before sunrise, walking a circle of 27 kilometres past dozens of small white shrines.",
    historyDetailed:
      "At 1,350 metres, Parasnath is Jharkhand's highest peak and the holiest site in Jainism, where twenty of the twenty-four Tirthankaras are believed to have attained moksha. The 27-km hill circuit links 31 tonks (shrines), starting from the temple town of Madhuban at the base. The hill is also home to Santhal villages and rich sal forest.",
    culturalImportance:
      "Shikharji draws Jain pilgrims from across the world, and the hill is simultaneously sacred to local Santhal communities — a coexistence that has shaped recent conservation debates.",
    food: [
      { name: "Jain Satvik Thali", desc: "Onion- and garlic-free meals served at Madhuban dharamshalas." },
      { name: "Dry Fruit Ladoo", desc: "Energy sweets carried for the long barefoot climb." },
    ],
    clothing: {
      name: "White Pilgrim Cotton",
      desc: "Unstitched white cotton worn for the barefoot ascent, free of leather.",
    },
    music: [
      { title: "Jain Stavan", desc: "Devotional hymns sung at the tonks before dawn." },
      { title: "Santhal Hill Songs", desc: "Village songs of the communities living on the hill's slopes." },
    ],
    funFacts: [
      "The full parikrama is about 27 km and is walked barefoot.",
      "Most pilgrims begin the climb at 2 am to reach the peak by sunrise.",
      "It is the highest mountain in Jharkhand at roughly 1,350 m.",
    ],
    timeline: [
      { year: "Ancient", event: "Twenty Tirthankaras said to attain moksha here." },
      { year: "1700s", event: "Madhuban develops as the pilgrim base town." },
      { year: "1900s", event: "Tonks rebuilt and the circuit path formalised." },
      { year: "Today", event: "Jainism's most visited pilgrimage hill." },
    ],
    unesco: false,
  },
];

export const getSite = (id: string) => sites.find((s) => s.id === id);
export const destinations = sites;
export const getDestination = getSite;

export const categories: DestinationCategory[] = [
  "Waterfall",
  "Wildlife",
  "Temple",
  "Hill Station",
  "Heritage",
  "City",
];

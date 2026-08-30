export type ConservationStatus = "Least Concern" | "Vulnerable" | "Endangered" | "Managed";

export type Bear = {
  slug: string;
  name: string;
  scientific: string;
  family: string;
  color: string;
  accent: string;
  heroSubtitle: string;
  shortBlurb: string;
  story: string;
  continents: string[];
  where: string[];
  coreRangeSummary: string;
  habitat: string[];
  diet: string[];
  dietMix: { label: string; pct: number }[];
  size: {
    heightShoulder: string;
    standingUpright: string;
    weightMaleLb: number;
    weightFemaleLb: number;
    weightNote: string;
    lifespanWild: string;
  };
  conservation: { status: ConservationStatus; iucn: string; notes: string[] };
  threats: string[];
  funFacts: string[];
  image: { src: string; credit: string; page: string };
  view: { center: [number, number]; zoom: number; pitch?: number; bearing?: number };
  regions: { id: string; label: string; center: [number, number]; zoom: number }[];
};

export const BEARS: Bear[] = [
  {
    slug: "black-bear",
    name: "American Black Bear",
    scientific: "Ursus americanus",
    family: "Ursidae · Ursinae",
    color: "#2b2118",
    accent: "#c9842a",
    heroSubtitle: "North America’s most widespread and adaptable bear.",
    shortBlurb: "Forest omnivore of the Lower 48, Canada, and Alaska — including Minnesota’s north woods.",
    story: "Black bears are the bear most people in the United States actually live near. Color is a poor ID: cinnamon, blond, and even white spirit bears occur. Flexible diet, strong climbers, still widespread in forested North America.",
    continents: ["North America"],
    where: ["Alaska", "Pacific Northwest", "Rockies", "Upper Midwest / Minnesota", "Appalachians", "Southeast", "Northeast", "Canada"],
    coreRangeSummary: "Forested landscapes from Alaska to Florida and Newfoundland. In Minnesota they concentrate in the north-central and northeastern forests.",
    habitat: ["Mixed forest", "Bogs and swamps", "Mountain woodland", "Wildland–urban edge"],
    diet: ["Berries and mast", "Insects and larvae", "Green vegetation", "Carrion", "Human food if unsecured"],
    dietMix: [{ label: "Plants & fruit", pct: 70 }, { label: "Insects", pct: 15 }, { label: "Carrion / meat", pct: 10 }, { label: "Other", pct: 5 }],
    size: { heightShoulder: "2.5–3.5 ft", standingUpright: "5–6.5 ft", weightMaleLb: 400, weightFemaleLb: 200, weightNote: "Large males can exceed 600 lb.", lifespanWild: "About 20 years." },
    conservation: { status: "Least Concern", iucn: "Least Concern — managed by states and provinces", notes: ["Most abundant living bear species.", "Conflict is usually about attractants."] },
    threats: ["Vehicle collisions", "Food-conditioned conflict", "Habitat fragmentation"],
    funFacts: ["Not always black — color morphs are common.", "Excellent climbers.", "Minnesota’s population is among the more studied in the Midwest."],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/01_Schwarzb%C3%A4r.jpg/1280px-01_Schwarzb%C3%A4r.jpg", credit: "Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:01_Schwarzbär.jpg" },
    view: { center: [-95, 48], zoom: 3.4, pitch: 45, bearing: -10 },
    regions: [
      { id: "mn", label: "Minnesota north woods", center: [-93.3, 47.5], zoom: 6.2 },
      { id: "bwcaw", label: "Boundary Waters / Superior NF", center: [-91.5, 48.05], zoom: 7.1 },
      { id: "app", label: "Appalachians", center: [-82, 36.5], zoom: 5.4 }
    ]
  },
  {
    slug: "grizzly-bear",
    name: "Grizzly / Brown Bear",
    scientific: "Ursus arctos",
    family: "Ursidae · Ursinae",
    color: "#5a3a22",
    accent: "#d4a017",
    heroSubtitle: "The most geographically widespread bear on Earth.",
    shortBlurb: "From Alaskan salmon rivers to Eurasian mountains — one species, many ecologies.",
    story: "Brown bears occupy more of the planet than any other bear. Interior North American form is called grizzly; coastal and island populations grow larger on salmon.",
    continents: ["North America", "Europe", "Asia"],
    where: ["Alaska", "Northern Rockies", "Western Canada", "Russia", "Scandinavia", "Carpathians"],
    coreRangeSummary: "Holarctic. In the Lower 48, remnant populations persist in the Northern Rockies and Greater Yellowstone.",
    habitat: ["Tundra and taiga", "Mountain meadows", "Coastal rivers", "Alpine"],
    diet: ["Roots and grasses", "Berries", "Salmon", "Ungulates", "Insects"],
    dietMix: [{ label: "Vegetation", pct: 55 }, { label: "Fish", pct: 20 }, { label: "Mammals", pct: 20 }, { label: "Insects", pct: 5 }],
    size: { heightShoulder: "3–4.5 ft", standingUpright: "6–9 ft", weightMaleLb: 800, weightFemaleLb: 400, weightNote: "Coastal and Kodiak males can exceed 1,200–1,500 lb.", lifespanWild: "20–25 years typical." },
    conservation: { status: "Least Concern", iucn: "Least Concern globally; some southern populations are highly threatened", notes: ["Secure in Alaska, Canada, and Russia.", "Isolated southern populations remain at risk."] },
    threats: ["Habitat loss at range edges", "Human conflict", "Isolation of remnant populations"],
    funFacts: ["Shoulder hump is digging muscle — a field mark versus black bears.", "Kodiak bears are an island brown-bear subspecies."],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/GrizzlyBearJeanBeaufort.jpg/1280px-GrizzlyBearJeanBeaufort.jpg", credit: "Jean Beaufort / Wikimedia", page: "https://commons.wikimedia.org/wiki/File:GrizzlyBearJeanBeaufort.jpg" },
    view: { center: [-150, 61], zoom: 3.6, pitch: 50, bearing: 8 },
    regions: [{ id: "yellowstone", label: "Greater Yellowstone", center: [-110.6, 44.6], zoom: 6.2 }, { id: "katmai", label: "Katmai", center: [-155.9, 58.6], zoom: 7 }]
  },
  {
    slug: "polar-bear",
    name: "Polar Bear",
    scientific: "Ursus maritimus",
    family: "Ursidae · Ursinae",
    color: "#dfe7ef",
    accent: "#7eb6d6",
    heroSubtitle: "A marine mammal that hunts from sea ice.",
    shortBlurb: "Largest living bear. Built for fat, cold, and the edge of pack ice.",
    story: "Polar bears split from brown bears and specialized on seals. They are classed as marine mammals because their hunting grounds are the sea-ice platform.",
    continents: ["North America", "Europe", "Asia"],
    where: ["Alaska North Slope", "Canadian Arctic", "Greenland", "Svalbard", "Russian Arctic"],
    coreRangeSummary: "Circumpolar Arctic. In the U.S., only Alaska — Chukchi Sea and Southern Beaufort subpopulations.",
    habitat: ["Pack ice", "Fast ice", "Coastal denning habitat", "Arctic islands"],
    diet: ["Ringed seals", "Bearded seals", "Whale carcasses"],
    dietMix: [{ label: "Seals", pct: 85 }, { label: "Carrion", pct: 12 }, { label: "Other", pct: 3 }],
    size: { heightShoulder: "4–5 ft", standingUpright: "8–10 ft", weightMaleLb: 1200, weightFemaleLb: 500, weightNote: "Males commonly 770–1,500 lb.", lifespanWild: "About 25 years." },
    conservation: { status: "Vulnerable", iucn: "Vulnerable — sea-ice loss is the primary long-term threat", notes: ["Chukchi Sea ~3,000 and Southern Beaufort ~900.", "Black skin under white fur helps absorb heat."] },
    threats: ["Loss of sea ice", "Industrial disturbance", "Pollution"],
    funFacts: ["Paws are partially webbed.", "Cubs are born in winter dens weighing a little more than a pound."],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/1280px-Polar_Bear_-_Alaska_%28cropped%29.jpg", credit: "Alan Wilson / Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Polar_Bear_-_Alaska_(cropped).jpg" },
    view: { center: [-156, 71], zoom: 3.8, pitch: 50, bearing: 12 },
    regions: [{ id: "beaufort", label: "Southern Beaufort", center: [-148, 70.5], zoom: 5.4 }, { id: "chukchi", label: "Chukchi Sea", center: [-170, 69], zoom: 4.8 }]
  },
  {
    slug: "panda",
    name: "Giant Panda",
    scientific: "Ailuropoda melanoleuca",
    family: "Ursidae · Ailuropodinae",
    color: "#1a1a1a",
    accent: "#e8e8e8",
    heroSubtitle: "A bamboo specialist that is still a true bear.",
    shortBlurb: "Icon of conservation. Almost entirely bamboo, almost entirely China.",
    story: "Pandas sit on their own subfamily. A false thumb lets them grip bamboo. IUCN moved them from Endangered to Vulnerable after reserve expansion — still a narrow range.",
    continents: ["Asia"],
    where: ["Sichuan", "Shaanxi", "Gansu"],
    coreRangeSummary: "Temperate montane forests of south-central China, fragmented among reserves.",
    habitat: ["Montane bamboo forest", "Temperate broadleaf forest"],
    diet: ["Bamboo stems and leaves", "Rare small animals or carrion"],
    dietMix: [{ label: "Bamboo", pct: 99 }, { label: "Other", pct: 1 }],
    size: { heightShoulder: "2–3 ft", standingUpright: "4–6 ft", weightMaleLb: 250, weightFemaleLb: 200, weightNote: "Adults typically 150–300 lb.", lifespanWild: "About 20 years." },
    conservation: { status: "Vulnerable", iucn: "Vulnerable — downlisted from Endangered", notes: ["Wild population is still small and fragmented.", "Corridors between reserves matter as much as headcount."] },
    threats: ["Habitat fragmentation", "Bamboo die-off cycles", "Narrow range"],
    funFacts: ["The ‘thumb’ is an enlarged radial sesamoid.", "Cubs are tiny relative to the mother."],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/1280px-Grosser_Panda.JPG", credit: "Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Grosser_Panda.JPG" },
    view: { center: [104.1, 31.0], zoom: 5.6, pitch: 45, bearing: 0 },
    regions: [{ id: "sichuan", label: "Sichuan basins", center: [103.4, 30.7], zoom: 6.4 }]
  },
  {
    slug: "spectacled-bear",
    name: "Andean Spectacled Bear",
    scientific: "Tremarctos ornatus",
    family: "Ursidae · Tremarctinae",
    color: "#3d2a1c",
    accent: "#e6c07b",
    heroSubtitle: "South America’s only living bear.",
    shortBlurb: "Face markings like spectacles. Cloud forests and high Andes.",
    story: "The last short-faced bear lineage. Mostly vegetarian for a carnivore, and the only ursid south of Panama.",
    continents: ["South America"],
    where: ["Colombia", "Ecuador", "Peru", "Bolivia", "Venezuela"],
    coreRangeSummary: "Andean cloud forest to páramo, from Venezuela to Bolivia.",
    habitat: ["Cloud forest", "Páramo", "Dry forest pockets", "High valleys"],
    diet: ["Bromeliads", "Fruit", "Palm hearts", "Occasional livestock or carrion"],
    dietMix: [{ label: "Plants & fruit", pct: 90 }, { label: "Animal matter", pct: 10 }],
    size: { heightShoulder: "2–3 ft", standingUpright: "5–6 ft", weightMaleLb: 300, weightFemaleLb: 150, weightNote: "Males substantially larger than females.", lifespanWild: "About 20 years." },
    conservation: { status: "Vulnerable", iucn: "Vulnerable", notes: ["Only living member of Tremarctinae.", "Face patterns can ID individuals."] },
    threats: ["Deforestation", "Agricultural conversion", "Retaliatory killing"],
    funFacts: ["No two spectacle patterns match.", "They build tree platforms to feed and rest."],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Spectacled_Bear_-_Houston_Zoo.jpg/1280px-Spectacled_Bear_-_Houston_Zoo.jpg", credit: "Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Spectacled_Bear_-_Houston_Zoo.jpg" },
    view: { center: [-76, -8], zoom: 3.6, pitch: 40, bearing: -8 },
    regions: [{ id: "peru", label: "Peruvian Andes", center: [-76.5, -10], zoom: 5.2 }]
  },
  {
    slug: "sloth-bear",
    name: "Sloth Bear",
    scientific: "Melursus ursinus",
    family: "Ursidae · Ursinae",
    color: "#24180f",
    accent: "#c45c26",
    heroSubtitle: "The insect vacuum of the Indian subcontinent.",
    shortBlurb: "Long snout, missing incisors, and a talent for termites.",
    story: "Sloth bears close their nostrils and suck larvae from mounds — loud enough to hear from a distance. White chest chevron is a field mark.",
    continents: ["Asia"],
    where: ["India", "Sri Lanka", "Nepal", "Bhutan"],
    coreRangeSummary: "Dry forest, scrub, and grassland mosaics of the Indian subcontinent.",
    habitat: ["Dry deciduous forest", "Scrub", "Grassland edge", "Rocky outcrops"],
    diet: ["Termites", "Ants", "Fruit", "Honey", "Flowers"],
    dietMix: [{ label: "Insects", pct: 60 }, { label: "Fruit", pct: 30 }, { label: "Other", pct: 10 }],
    size: { heightShoulder: "2.5–3 ft", standingUpright: "5–6 ft", weightMaleLb: 300, weightFemaleLb: 200, weightNote: "Shaggy coat makes them look larger.", lifespanWild: "About 20 years." },
    conservation: { status: "Vulnerable", iucn: "Vulnerable", notes: ["Range has contracted with forest loss.", "Human conflict remains serious."] },
    threats: ["Habitat loss", "Conflict killings", "Poaching"],
    funFacts: ["Cubs often ride on the mother’s back.", "Insect-sucking can be heard yards away."],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Sloth_Bear_Washington_DC.JPG/1280px-Sloth_Bear_Washington_DC.JPG", credit: "Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Sloth_Bear_Washington_DC.JPG" },
    view: { center: [78.9, 21.1], zoom: 4.2, pitch: 35, bearing: 0 },
    regions: [{ id: "central-india", label: "Central India", center: [79, 22], zoom: 5.4 }]
  },
  {
    slug: "sun-bear",
    name: "Sun Bear",
    scientific: "Helarctos malayanus",
    family: "Ursidae · Ursinae",
    color: "#1c120c",
    accent: "#e2b84a",
    heroSubtitle: "Smallest living bear, with the loudest chest blaze.",
    shortBlurb: "Southeast Asian forest bear. Long tongue, short coat, big claws.",
    story: "Sun bears can weigh as little as a large dog. The gold chest patch is unique to each animal.",
    continents: ["Asia"],
    where: ["Malaysia", "Indonesia", "Thailand", "Myanmar", "Borneo", "Sumatra"],
    coreRangeSummary: "Lowland and hill tropical forest of mainland and island Southeast Asia.",
    habitat: ["Tropical rainforest", "Secondary forest", "Plantation edge"],
    diet: ["Insects", "Honey", "Fruit", "Small vertebrates"],
    dietMix: [{ label: "Insects & honey", pct: 50 }, { label: "Fruit", pct: 40 }, { label: "Other", pct: 10 }],
    size: { heightShoulder: "2–2.5 ft", standingUpright: "4–4.5 ft", weightMaleLb: 140, weightFemaleLb: 70, weightNote: "Smallest ursid — often 60–150 lb.", lifespanWild: "About 15–25 years." },
    conservation: { status: "Vulnerable", iucn: "Vulnerable", notes: ["Oil-palm conversion is a major pressure.", "Poaching and the pet trade continue."] },
    threats: ["Deforestation", "Poaching", "Pet trade"],
    funFacts: ["Tongue can reach 8–10 inches.", "Chest sun marks are individually unique."],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Helarctos_malayanus_at_the_Cincinnati_Zoo.jpg/1280px-Helarctos_malayanus_at_the_Cincinnati_Zoo.jpg", credit: "Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Helarctos_malayanus_at_the_Cincinnati_Zoo.jpg" },
    view: { center: [108, 4], zoom: 3.8, pitch: 35, bearing: 10 },
    regions: [{ id: "borneo", label: "Borneo", center: [114, 1.5], zoom: 5.2 }]
  },
  {
    slug: "asiatic-black-bear",
    name: "Asiatic Black Bear",
    scientific: "Ursus thibetanus",
    family: "Ursidae · Ursinae",
    color: "#141414",
    accent: "#f2efe6",
    heroSubtitle: "The moon-chested cousin of the American black bear.",
    shortBlurb: "Forest bear of East and South Asia. White crescent on a black coat.",
    story: "Moon bears occupy a fragmented belt from the Himalaya through China to Japan. Close relatives of American black bears, with many declining populations.",
    continents: ["Asia"],
    where: ["Himalaya", "China", "Japan", "Korea", "Russian Far East"],
    coreRangeSummary: "Temperate and subtropical forests of Asia, often in mountains.",
    habitat: ["Broadleaf forest", "Mixed mountain forest", "Hills above farmland"],
    diet: ["Acorns and mast", "Fruit", "Insects", "Small mammals"],
    dietMix: [{ label: "Mast & fruit", pct: 65 }, { label: "Insects", pct: 20 }, { label: "Meat", pct: 15 }],
    size: { heightShoulder: "2.5–3.3 ft", standingUpright: "5–6.5 ft", weightMaleLb: 350, weightFemaleLb: 200, weightNote: "Similar in build to a large American black bear.", lifespanWild: "About 20–25 years." },
    conservation: { status: "Vulnerable", iucn: "Vulnerable", notes: ["Still widespread, but many subpopulations are declining.", "Chest crescent is the easiest field mark."] },
    threats: ["Bile farming / poaching", "Deforestation", "Conflict"],
    funFacts: ["Called moon bears for the white chest crescent.", "Strong climbers, like American black bears."],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ursus_thibetanus_3_%28Piotr_Kuczynski%29.jpg/1280px-Ursus_thibetanus_3_%28Piotr_Kuczynski%29.jpg", credit: "Piotr Kuczynski / Wikimedia Commons", page: "https://commons.wikimedia.org/wiki/File:Ursus_thibetanus_3_(Piotr_Kuczynski).jpg" },
    view: { center: [100, 32], zoom: 3.4, pitch: 35, bearing: 0 },
    regions: [{ id: "japan", label: "Honshu", center: [138.2, 36.2], zoom: 5.6 }, { id: "himalaya", label: "Himalaya", center: [85, 28], zoom: 5.2 }]
  }
];

export function getBear(slug: string) {
  return BEARS.find((b) => b.slug === slug);
}

export const FAMILY_STATS = {
  livingSpecies: 8,
  threatened: 6,
  continents: 4,
  largestLb: 1500,
  smallestLb: 60,
};

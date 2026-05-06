import type { SpellingItem } from '../../types/ingested';

export const SPELLING_TOPICS: string[] = [
  "bathroom",
  "body-parts",
  "clothes",
  "color",
  "daily-routines",
  "drinks",
  "education",
  "electronics",
  "entertainment-media",
  "family",
  "feelings",
  "food",
  "fruit",
  "games",
  "hobbies-interests",
  "home",
  "kitchen",
  "number",
  "ordinal-number",
  "personal-information",
  "physical-appearance",
  "places",
  "school",
  "shapes",
  "shopping",
  "size",
  "social-media",
  "sports",
  "taste",
  "time-date",
  "transport",
  "vegetables",
  "weather"
];

export const SPELLING_BANK_BY_TOPIC: Record<string, SpellingItem[]> = {
  "bathroom": [
    {
      "id": "bathroom-w01",
      "word": "bathroom",
      "meaning": "kamar mandi",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w02",
      "word": "toilet",
      "meaning": "toilet",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w03",
      "word": "restroom",
      "meaning": "toilet umum",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w04",
      "word": "washroom",
      "meaning": "ruang cuci",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w05",
      "word": "sink",
      "meaning": "wastafel",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w06",
      "word": "faucet",
      "meaning": "keran",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w07",
      "word": "tap",
      "meaning": "keran",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w08",
      "word": "shower",
      "meaning": "shower",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w09",
      "word": "bathtub",
      "meaning": "bak mandi",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w10",
      "word": "bucket",
      "meaning": "ember",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w11",
      "word": "dipper",
      "meaning": "gayung",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w12",
      "word": "drain",
      "meaning": "saluran air",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w13",
      "word": "mirror",
      "meaning": "cermin",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w14",
      "word": "toothbrush",
      "meaning": "sikat gigi",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w15",
      "word": "toothpaste",
      "meaning": "pasta gigi",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w17",
      "word": "mouthwash",
      "meaning": "obat kumur",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w18",
      "word": "soap",
      "meaning": "sabun",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w19",
      "word": "shampoo",
      "meaning": "sampo",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w20",
      "word": "conditioner",
      "meaning": "kondisioner",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w23",
      "word": "lotion",
      "meaning": "losion",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w24",
      "word": "deodorant",
      "meaning": "deodoran",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w25",
      "word": "perfume",
      "meaning": "parfum",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w26",
      "word": "towel",
      "meaning": "handuk",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w30",
      "word": "tissue",
      "meaning": "tisu",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w32",
      "word": "shelf",
      "meaning": "rak",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w33",
      "word": "cabinet",
      "meaning": "lemari",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w34",
      "word": "cleaner",
      "meaning": "pembersih",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w35",
      "word": "disinfectant",
      "meaning": "disinfektan",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w36",
      "word": "brush",
      "meaning": "sikat",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w37",
      "word": "sponge",
      "meaning": "spons",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w38",
      "word": "mop",
      "meaning": "pel",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w39",
      "word": "wipe",
      "meaning": "lap",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w40",
      "word": "flush",
      "meaning": "menyiram toilet",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w41",
      "word": "wash",
      "meaning": "mencuci",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w42",
      "word": "rinse",
      "meaning": "membilas",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w43",
      "word": "dry",
      "meaning": "mengeringkan",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w45",
      "word": "shave",
      "meaning": "mencukur",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w46",
      "word": "comb",
      "meaning": "menyisir",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w50",
      "word": "slippery",
      "meaning": "licin",
      "topicId": "bathroom"
    }
  ],
  "body-parts": [
    {
      "id": "body-parts-w01",
      "word": "head",
      "meaning": "kepala",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w02",
      "word": "hair",
      "meaning": "rambut",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w03",
      "word": "forehead",
      "meaning": "dahi",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w04",
      "word": "face",
      "meaning": "wajah",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w05",
      "word": "eyebrow",
      "meaning": "alis",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w06",
      "word": "eyelid",
      "meaning": "kelopak mata",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w07",
      "word": "eyelash",
      "meaning": "bulu mata",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w08",
      "word": "eye",
      "meaning": "mata",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w09",
      "word": "ear",
      "meaning": "telinga",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w10",
      "word": "cheek",
      "meaning": "pipi",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w11",
      "word": "nose",
      "meaning": "hidung",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w12",
      "word": "nostril",
      "meaning": "lubang hidung",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w13",
      "word": "mouth",
      "meaning": "mulut",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w14",
      "word": "lip",
      "meaning": "bibir",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w15",
      "word": "tooth",
      "meaning": "gigi",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w16",
      "word": "teeth",
      "meaning": "gigi",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w17",
      "word": "gum",
      "meaning": "gusi",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w18",
      "word": "tongue",
      "meaning": "lidah",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w19",
      "word": "chin",
      "meaning": "dagu",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w20",
      "word": "jaw",
      "meaning": "rahang",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w21",
      "word": "beard",
      "meaning": "jenggot",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w22",
      "word": "mustache",
      "meaning": "kumis",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w23",
      "word": "neck",
      "meaning": "leher",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w24",
      "word": "throat",
      "meaning": "tenggorokan",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w25",
      "word": "shoulder",
      "meaning": "bahu",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w26",
      "word": "collarbone",
      "meaning": "tulang selangka",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w27",
      "word": "chest",
      "meaning": "dada",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w28",
      "word": "breast",
      "meaning": "payudara",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w29",
      "word": "rib",
      "meaning": "tulang rusuk",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w30",
      "word": "back",
      "meaning": "punggung",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w31",
      "word": "waist",
      "meaning": "pinggang",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w32",
      "word": "hip",
      "meaning": "pinggul",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w33",
      "word": "stomach",
      "meaning": "perut",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w34",
      "word": "belly",
      "meaning": "perut",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w35",
      "word": "navel",
      "meaning": "pusar",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w36",
      "word": "armpit",
      "meaning": "ketiak",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w37",
      "word": "skin",
      "meaning": "kulit",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w38",
      "word": "butt",
      "meaning": "bokong",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w39",
      "word": "arm",
      "meaning": "lengan",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w41",
      "word": "forearm",
      "meaning": "lengan bawah",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w42",
      "word": "elbow",
      "meaning": "siku",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w43",
      "word": "wrist",
      "meaning": "pergelangan tangan",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w44",
      "word": "hand",
      "meaning": "tangan",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w45",
      "word": "palm",
      "meaning": "telapak tangan",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w46",
      "word": "finger",
      "meaning": "jari tangan",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w47",
      "word": "thumb",
      "meaning": "ibu jari",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w52",
      "word": "fingernail",
      "meaning": "kuku tangan",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w53",
      "word": "knuckle",
      "meaning": "buku jari",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w54",
      "word": "leg",
      "meaning": "kaki",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w55",
      "word": "thigh",
      "meaning": "paha",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w56",
      "word": "knee",
      "meaning": "lutut",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w57",
      "word": "kneecap",
      "meaning": "tempurung lutut",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w58",
      "word": "shin",
      "meaning": "tulang kering",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w59",
      "word": "calf",
      "meaning": "betis",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w60",
      "word": "ankle",
      "meaning": "pergelangan kaki",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w61",
      "word": "heel",
      "meaning": "tumit",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w62",
      "word": "foot",
      "meaning": "telapak kaki",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w63",
      "word": "sole",
      "meaning": "telapak bawah kaki",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w64",
      "word": "toe",
      "meaning": "jari kaki",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w67",
      "word": "toenail",
      "meaning": "kuku kaki",
      "topicId": "body-parts"
    }
  ],
  "clothes": [
    {
      "id": "clothes-w01",
      "word": "clothes",
      "meaning": "pakaian",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w02",
      "word": "shirt",
      "meaning": "kemeja",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w04",
      "word": "blouse",
      "meaning": "blus",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w05",
      "word": "jacket",
      "meaning": "jaket",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w06",
      "word": "coat",
      "meaning": "mantel",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w07",
      "word": "sweater",
      "meaning": "sweter",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w08",
      "word": "hoodie",
      "meaning": "hoodie",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w09",
      "word": "dress",
      "meaning": "gaun",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w10",
      "word": "skirt",
      "meaning": "rok",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w11",
      "word": "jeans",
      "meaning": "jeans",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w12",
      "word": "pants",
      "meaning": "celana panjang",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w13",
      "word": "shorts",
      "meaning": "celana pendek",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w14",
      "word": "socks",
      "meaning": "kaus kaki",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w15",
      "word": "shoes",
      "meaning": "sepatu",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w16",
      "word": "sneakers",
      "meaning": "sepatu sneakers",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w17",
      "word": "boots",
      "meaning": "sepatu bot",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w18",
      "word": "sandals",
      "meaning": "sandal",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w19",
      "word": "slippers",
      "meaning": "sandal rumah",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w20",
      "word": "hat",
      "meaning": "topi",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w21",
      "word": "cap",
      "meaning": "topi cap",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w22",
      "word": "scarf",
      "meaning": "syal",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w23",
      "word": "gloves",
      "meaning": "sarung tangan",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w24",
      "word": "belt",
      "meaning": "ikat pinggang",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w25",
      "word": "tie",
      "meaning": "dasi",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w26",
      "word": "suit",
      "meaning": "jas setelan",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w27",
      "word": "uniform",
      "meaning": "seragam",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w28",
      "word": "pajamas",
      "meaning": "piyama",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w29",
      "word": "underwear",
      "meaning": "pakaian dalam",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w30",
      "word": "bra",
      "meaning": "bra",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w31",
      "word": "pocket",
      "meaning": "saku",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w32",
      "word": "zipper",
      "meaning": "ritsleting",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w33",
      "word": "button",
      "meaning": "kancing",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w34",
      "word": "sleeve",
      "meaning": "lengan baju",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w35",
      "word": "collar",
      "meaning": "kerah",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w36",
      "word": "size",
      "meaning": "ukuran",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w37",
      "word": "small",
      "meaning": "kecil",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w38",
      "word": "medium",
      "meaning": "sedang",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w39",
      "word": "large",
      "meaning": "besar",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w40",
      "word": "fit",
      "meaning": "pas",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w41",
      "word": "loose",
      "meaning": "longgar",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w42",
      "word": "tight",
      "meaning": "ketat",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w43",
      "word": "clean",
      "meaning": "bersih",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w44",
      "word": "dirty",
      "meaning": "kotor",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w45",
      "word": "new",
      "meaning": "baru",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w46",
      "word": "old",
      "meaning": "lama",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w47",
      "word": "fashionable",
      "meaning": "modis",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w48",
      "word": "casual",
      "meaning": "kasual",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w49",
      "word": "formal",
      "meaning": "formal",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w50",
      "word": "wear",
      "meaning": "memakai",
      "topicId": "clothes"
    }
  ],
  "color": [
    {
      "id": "color-w01",
      "word": "red",
      "meaning": "merah",
      "topicId": "color"
    },
    {
      "id": "color-w02",
      "word": "blue",
      "meaning": "biru",
      "topicId": "color"
    },
    {
      "id": "color-w03",
      "word": "green",
      "meaning": "hijau",
      "topicId": "color"
    },
    {
      "id": "color-w04",
      "word": "yellow",
      "meaning": "kuning",
      "topicId": "color"
    },
    {
      "id": "color-w05",
      "word": "black",
      "meaning": "hitam",
      "topicId": "color"
    },
    {
      "id": "color-w06",
      "word": "white",
      "meaning": "putih",
      "topicId": "color"
    },
    {
      "id": "color-w07",
      "word": "brown",
      "meaning": "cokelat",
      "topicId": "color"
    },
    {
      "id": "color-w08",
      "word": "gray",
      "meaning": "abu-abu",
      "topicId": "color"
    },
    {
      "id": "color-w09",
      "word": "orange",
      "meaning": "oranye",
      "topicId": "color"
    },
    {
      "id": "color-w10",
      "word": "pink",
      "meaning": "merah muda",
      "topicId": "color"
    },
    {
      "id": "color-w11",
      "word": "purple",
      "meaning": "ungu",
      "topicId": "color"
    },
    {
      "id": "color-w12",
      "word": "gold",
      "meaning": "emas",
      "topicId": "color"
    },
    {
      "id": "color-w13",
      "word": "silver",
      "meaning": "perak",
      "topicId": "color"
    },
    {
      "id": "color-w14",
      "word": "navy",
      "meaning": "biru tua",
      "topicId": "color"
    },
    {
      "id": "color-w15",
      "word": "beige",
      "meaning": "krem muda",
      "topicId": "color"
    },
    {
      "id": "color-w16",
      "word": "maroon",
      "meaning": "merah marun",
      "topicId": "color"
    },
    {
      "id": "color-w17",
      "word": "turquoise",
      "meaning": "toska",
      "topicId": "color"
    },
    {
      "id": "color-w18",
      "word": "violet",
      "meaning": "ungu violet",
      "topicId": "color"
    },
    {
      "id": "color-w19",
      "word": "cream",
      "meaning": "krem",
      "topicId": "color"
    },
    {
      "id": "color-w20",
      "word": "olive",
      "meaning": "hijau zaitun",
      "topicId": "color"
    }
  ],
  "daily-routines": [
    {
      "id": "daily-routines-w18",
      "word": "study",
      "meaning": "belajar",
      "topicId": "daily-routines"
    },
    {
      "id": "daily-routines-w25",
      "word": "exercise",
      "meaning": "berolahraga",
      "topicId": "daily-routines"
    },
    {
      "id": "daily-routines-w32",
      "word": "relax",
      "meaning": "bersantai",
      "topicId": "daily-routines"
    },
    {
      "id": "daily-routines-w33",
      "word": "pray",
      "meaning": "berdoa",
      "topicId": "daily-routines"
    },
    {
      "id": "daily-routines-w48",
      "word": "sleep",
      "meaning": "tidur",
      "topicId": "daily-routines"
    }
  ],
  "drinks": [
    {
      "id": "drinks-w01",
      "word": "drink",
      "meaning": "minuman",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w02",
      "word": "water",
      "meaning": "air",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w05",
      "word": "tea",
      "meaning": "teh",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w09",
      "word": "coffee",
      "meaning": "kopi",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w11",
      "word": "latte",
      "meaning": "latte",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w12",
      "word": "cappuccino",
      "meaning": "cappuccino",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w13",
      "word": "milk",
      "meaning": "susu",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w17",
      "word": "juice",
      "meaning": "jus",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w21",
      "word": "smoothie",
      "meaning": "smoothie",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w22",
      "word": "shake",
      "meaning": "milkshake",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w23",
      "word": "soda",
      "meaning": "minuman soda",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w24",
      "word": "cola",
      "meaning": "cola",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w31",
      "word": "ice",
      "meaning": "es",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w35",
      "word": "matcha",
      "meaning": "matcha",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w36",
      "word": "espresso",
      "meaning": "espresso",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w37",
      "word": "americano",
      "meaning": "americano",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w39",
      "word": "syrup",
      "meaning": "sirup",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w40",
      "word": "sweet",
      "meaning": "manis",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w41",
      "word": "bitter",
      "meaning": "pahit",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w42",
      "word": "fresh",
      "meaning": "segar",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w43",
      "word": "thirsty",
      "meaning": "haus",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w44",
      "word": "bottle",
      "meaning": "botol",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w45",
      "word": "cup",
      "meaning": "cangkir",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w46",
      "word": "glass",
      "meaning": "gelas",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w47",
      "word": "can",
      "meaning": "kaleng",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w48",
      "word": "straw",
      "meaning": "sedotan",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w49",
      "word": "sip",
      "meaning": "menyeruput",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w50",
      "word": "refill",
      "meaning": "isi ulang",
      "topicId": "drinks"
    }
  ],
  "education": [
    {
      "id": "education-w01",
      "word": "education",
      "meaning": "pendidikan",
      "topicId": "education"
    },
    {
      "id": "education-w02",
      "word": "learn",
      "meaning": "belajar",
      "topicId": "education"
    },
    {
      "id": "education-w03",
      "word": "study",
      "meaning": "belajar",
      "topicId": "education"
    },
    {
      "id": "education-w04",
      "word": "teach",
      "meaning": "mengajar",
      "topicId": "education"
    },
    {
      "id": "education-w05",
      "word": "teacher",
      "meaning": "guru",
      "topicId": "education"
    },
    {
      "id": "education-w06",
      "word": "student",
      "meaning": "siswa",
      "topicId": "education"
    },
    {
      "id": "education-w07",
      "word": "school",
      "meaning": "sekolah",
      "topicId": "education"
    },
    {
      "id": "education-w08",
      "word": "class",
      "meaning": "kelas",
      "topicId": "education"
    },
    {
      "id": "education-w09",
      "word": "classroom",
      "meaning": "ruang kelas",
      "topicId": "education"
    },
    {
      "id": "education-w10",
      "word": "lesson",
      "meaning": "pelajaran",
      "topicId": "education"
    },
    {
      "id": "education-w11",
      "word": "subject",
      "meaning": "mata pelajaran",
      "topicId": "education"
    },
    {
      "id": "education-w12",
      "word": "curriculum",
      "meaning": "kurikulum",
      "topicId": "education"
    },
    {
      "id": "education-w13",
      "word": "syllabus",
      "meaning": "silabus",
      "topicId": "education"
    },
    {
      "id": "education-w14",
      "word": "homework",
      "meaning": "pekerjaan rumah",
      "topicId": "education"
    },
    {
      "id": "education-w15",
      "word": "assignment",
      "meaning": "tugas",
      "topicId": "education"
    },
    {
      "id": "education-w16",
      "word": "project",
      "meaning": "proyek",
      "topicId": "education"
    },
    {
      "id": "education-w17",
      "word": "presentation",
      "meaning": "presentasi",
      "topicId": "education"
    },
    {
      "id": "education-w18",
      "word": "discussion",
      "meaning": "diskusi",
      "topicId": "education"
    },
    {
      "id": "education-w19",
      "word": "question",
      "meaning": "pertanyaan",
      "topicId": "education"
    },
    {
      "id": "education-w20",
      "word": "answer",
      "meaning": "jawaban",
      "topicId": "education"
    },
    {
      "id": "education-w21",
      "word": "test",
      "meaning": "tes",
      "topicId": "education"
    },
    {
      "id": "education-w22",
      "word": "quiz",
      "meaning": "kuis",
      "topicId": "education"
    },
    {
      "id": "education-w23",
      "word": "exam",
      "meaning": "ujian",
      "topicId": "education"
    },
    {
      "id": "education-w24",
      "word": "grade",
      "meaning": "nilai",
      "topicId": "education"
    },
    {
      "id": "education-w25",
      "word": "score",
      "meaning": "skor",
      "topicId": "education"
    },
    {
      "id": "education-w26",
      "word": "pass",
      "meaning": "lulus",
      "topicId": "education"
    },
    {
      "id": "education-w27",
      "word": "fail",
      "meaning": "gagal",
      "topicId": "education"
    },
    {
      "id": "education-w28",
      "word": "certificate",
      "meaning": "sertifikat",
      "topicId": "education"
    },
    {
      "id": "education-w29",
      "word": "diploma",
      "meaning": "ijazah",
      "topicId": "education"
    },
    {
      "id": "education-w30",
      "word": "degree",
      "meaning": "gelar",
      "topicId": "education"
    },
    {
      "id": "education-w31",
      "word": "college",
      "meaning": "perguruan tinggi",
      "topicId": "education"
    },
    {
      "id": "education-w32",
      "word": "university",
      "meaning": "universitas",
      "topicId": "education"
    },
    {
      "id": "education-w33",
      "word": "campus",
      "meaning": "kampus",
      "topicId": "education"
    },
    {
      "id": "education-w34",
      "word": "major",
      "meaning": "jurusan",
      "topicId": "education"
    },
    {
      "id": "education-w35",
      "word": "minor",
      "meaning": "jurusan tambahan",
      "topicId": "education"
    },
    {
      "id": "education-w36",
      "word": "semester",
      "meaning": "semester",
      "topicId": "education"
    },
    {
      "id": "education-w38",
      "word": "schedule",
      "meaning": "jadwal",
      "topicId": "education"
    },
    {
      "id": "education-w39",
      "word": "attendance",
      "meaning": "kehadiran",
      "topicId": "education"
    },
    {
      "id": "education-w40",
      "word": "absent",
      "meaning": "tidak hadir",
      "topicId": "education"
    },
    {
      "id": "education-w41",
      "word": "library",
      "meaning": "perpustakaan",
      "topicId": "education"
    },
    {
      "id": "education-w42",
      "word": "laboratory",
      "meaning": "laboratorium",
      "topicId": "education"
    },
    {
      "id": "education-w43",
      "word": "notebook",
      "meaning": "buku catatan",
      "topicId": "education"
    },
    {
      "id": "education-w44",
      "word": "textbook",
      "meaning": "buku pelajaran",
      "topicId": "education"
    },
    {
      "id": "education-w45",
      "word": "dictionary",
      "meaning": "kamus",
      "topicId": "education"
    },
    {
      "id": "education-w46",
      "word": "research",
      "meaning": "riset",
      "topicId": "education"
    },
    {
      "id": "education-w47",
      "word": "scholarship",
      "meaning": "beasiswa",
      "topicId": "education"
    },
    {
      "id": "education-w49",
      "word": "graduation",
      "meaning": "kelulusan",
      "topicId": "education"
    },
    {
      "id": "education-w50",
      "word": "graduate",
      "meaning": "lulusan",
      "topicId": "education"
    }
  ],
  "electronics": [
    {
      "id": "electronics-w01",
      "word": "electronics",
      "meaning": "elektronik",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w02",
      "word": "device",
      "meaning": "perangkat",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w03",
      "word": "gadget",
      "meaning": "gadget",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w04",
      "word": "machine",
      "meaning": "mesin",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w05",
      "word": "appliance",
      "meaning": "alat rumah tangga listrik",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w06",
      "word": "phone",
      "meaning": "telepon",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w07",
      "word": "smartphone",
      "meaning": "ponsel pintar",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w09",
      "word": "tablet",
      "meaning": "tablet",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w10",
      "word": "laptop",
      "meaning": "laptop",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w11",
      "word": "computer",
      "meaning": "komputer",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w12",
      "word": "desktop",
      "meaning": "komputer desktop",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w13",
      "word": "monitor",
      "meaning": "monitor",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w14",
      "word": "screen",
      "meaning": "layar",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w15",
      "word": "keyboard",
      "meaning": "keyboard",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w16",
      "word": "mouse",
      "meaning": "mouse",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w17",
      "word": "printer",
      "meaning": "printer",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w18",
      "word": "scanner",
      "meaning": "scanner",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w19",
      "word": "camera",
      "meaning": "kamera",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w20",
      "word": "webcam",
      "meaning": "kamera web",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w21",
      "word": "microphone",
      "meaning": "mikrofon",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w22",
      "word": "speaker",
      "meaning": "speaker",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w23",
      "word": "headphones",
      "meaning": "headphone",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w24",
      "word": "earphones",
      "meaning": "earphone",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w25",
      "word": "charger",
      "meaning": "pengisi daya",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w27",
      "word": "battery",
      "meaning": "baterai",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w29",
      "word": "socket",
      "meaning": "stopkontak",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w30",
      "word": "plug",
      "meaning": "colokan",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w31",
      "word": "switch",
      "meaning": "saklar",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w33",
      "word": "television",
      "meaning": "televisi",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w35",
      "word": "radio",
      "meaning": "radio",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w36",
      "word": "router",
      "meaning": "router",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w38",
      "word": "Bluetooth",
      "meaning": "Bluetooth",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w42",
      "word": "software",
      "meaning": "perangkat lunak",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w43",
      "word": "app",
      "meaning": "aplikasi",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w44",
      "word": "update",
      "meaning": "memperbarui",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w45",
      "word": "download",
      "meaning": "unduh",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w46",
      "word": "upload",
      "meaning": "unggah",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w47",
      "word": "connect",
      "meaning": "menghubungkan",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w48",
      "word": "disconnect",
      "meaning": "memutuskan sambungan",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w49",
      "word": "repair",
      "meaning": "memperbaiki",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w50",
      "word": "broken",
      "meaning": "rusak",
      "topicId": "electronics"
    }
  ],
  "entertainment-media": [
    {
      "id": "entertainment-media-w01",
      "word": "entertainment",
      "meaning": "hiburan",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w02",
      "word": "media",
      "meaning": "media",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w03",
      "word": "movie",
      "meaning": "film",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w04",
      "word": "film",
      "meaning": "film",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w05",
      "word": "actor",
      "meaning": "aktor",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w06",
      "word": "actress",
      "meaning": "aktris",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w07",
      "word": "director",
      "meaning": "sutradara",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w08",
      "word": "scene",
      "meaning": "adegan",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w09",
      "word": "episode",
      "meaning": "episode",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w10",
      "word": "season",
      "meaning": "musim serial",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w11",
      "word": "series",
      "meaning": "serial",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w12",
      "word": "documentary",
      "meaning": "dokumenter",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w13",
      "word": "cartoon",
      "meaning": "kartun",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w14",
      "word": "animation",
      "meaning": "animasi",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w15",
      "word": "trailer",
      "meaning": "cuplikan",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w16",
      "word": "cinema",
      "meaning": "bioskop",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w17",
      "word": "theater",
      "meaning": "teater",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w18",
      "word": "ticket",
      "meaning": "tiket",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w19",
      "word": "screen",
      "meaning": "layar",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w20",
      "word": "subtitles",
      "meaning": "subtitle",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w21",
      "word": "music",
      "meaning": "musik",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w22",
      "word": "song",
      "meaning": "lagu",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w23",
      "word": "singer",
      "meaning": "penyanyi",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w24",
      "word": "band",
      "meaning": "band",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w25",
      "word": "album",
      "meaning": "album",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w26",
      "word": "playlist",
      "meaning": "daftar putar",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w27",
      "word": "concert",
      "meaning": "konser",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w28",
      "word": "podcast",
      "meaning": "podcast",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w29",
      "word": "radio",
      "meaning": "radio",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w30",
      "word": "channel",
      "meaning": "kanal",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w31",
      "word": "television",
      "meaning": "televisi",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w32",
      "word": "show",
      "meaning": "acara",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w33",
      "word": "host",
      "meaning": "pembawa acara",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w34",
      "word": "audience",
      "meaning": "penonton",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w35",
      "word": "fan",
      "meaning": "penggemar",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w36",
      "word": "review",
      "meaning": "ulasan",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w37",
      "word": "rating",
      "meaning": "rating",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w38",
      "word": "stream",
      "meaning": "stream",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w40",
      "word": "video",
      "meaning": "video",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w41",
      "word": "clip",
      "meaning": "klip",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w42",
      "word": "vlog",
      "meaning": "vlog",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w43",
      "word": "blogger",
      "meaning": "blogger",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w46",
      "word": "post",
      "meaning": "unggahan",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w47",
      "word": "comment",
      "meaning": "komentar",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w48",
      "word": "like",
      "meaning": "suka",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w49",
      "word": "share",
      "meaning": "membagikan",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w50",
      "word": "trending",
      "meaning": "sedang tren",
      "topicId": "entertainment-media"
    }
  ],
  "family": [
    {
      "id": "family-w01",
      "word": "family",
      "meaning": "keluarga",
      "topicId": "family"
    },
    {
      "id": "family-w02",
      "word": "parents",
      "meaning": "orang tua",
      "topicId": "family"
    },
    {
      "id": "family-w03",
      "word": "mother",
      "meaning": "ibu",
      "topicId": "family"
    },
    {
      "id": "family-w04",
      "word": "father",
      "meaning": "ayah",
      "topicId": "family"
    },
    {
      "id": "family-w05",
      "word": "mom",
      "meaning": "mama",
      "topicId": "family"
    },
    {
      "id": "family-w06",
      "word": "dad",
      "meaning": "papa",
      "topicId": "family"
    },
    {
      "id": "family-w07",
      "word": "husband",
      "meaning": "suami",
      "topicId": "family"
    },
    {
      "id": "family-w08",
      "word": "wife",
      "meaning": "istri",
      "topicId": "family"
    },
    {
      "id": "family-w09",
      "word": "son",
      "meaning": "anak laki-laki",
      "topicId": "family"
    },
    {
      "id": "family-w10",
      "word": "daughter",
      "meaning": "anak perempuan",
      "topicId": "family"
    },
    {
      "id": "family-w11",
      "word": "child",
      "meaning": "anak",
      "topicId": "family"
    },
    {
      "id": "family-w12",
      "word": "children",
      "meaning": "anak-anak",
      "topicId": "family"
    },
    {
      "id": "family-w13",
      "word": "brother",
      "meaning": "saudara laki-laki",
      "topicId": "family"
    },
    {
      "id": "family-w14",
      "word": "sister",
      "meaning": "saudara perempuan",
      "topicId": "family"
    },
    {
      "id": "family-w15",
      "word": "sibling",
      "meaning": "saudara kandung",
      "topicId": "family"
    },
    {
      "id": "family-w16",
      "word": "grandfather",
      "meaning": "kakek",
      "topicId": "family"
    },
    {
      "id": "family-w17",
      "word": "grandmother",
      "meaning": "nenek",
      "topicId": "family"
    },
    {
      "id": "family-w18",
      "word": "grandpa",
      "meaning": "kakek",
      "topicId": "family"
    },
    {
      "id": "family-w19",
      "word": "grandma",
      "meaning": "nenek",
      "topicId": "family"
    },
    {
      "id": "family-w20",
      "word": "grandson",
      "meaning": "cucu laki-laki",
      "topicId": "family"
    },
    {
      "id": "family-w21",
      "word": "granddaughter",
      "meaning": "cucu perempuan",
      "topicId": "family"
    },
    {
      "id": "family-w22",
      "word": "uncle",
      "meaning": "paman",
      "topicId": "family"
    },
    {
      "id": "family-w23",
      "word": "aunt",
      "meaning": "bibi",
      "topicId": "family"
    },
    {
      "id": "family-w24",
      "word": "cousin",
      "meaning": "sepupu",
      "topicId": "family"
    },
    {
      "id": "family-w25",
      "word": "nephew",
      "meaning": "keponakan laki-laki",
      "topicId": "family"
    },
    {
      "id": "family-w26",
      "word": "niece",
      "meaning": "keponakan perempuan",
      "topicId": "family"
    },
    {
      "id": "family-w27",
      "word": "twins",
      "meaning": "anak kembar",
      "topicId": "family"
    },
    {
      "id": "family-w28",
      "word": "baby",
      "meaning": "bayi",
      "topicId": "family"
    },
    {
      "id": "family-w29",
      "word": "relative",
      "meaning": "kerabat",
      "topicId": "family"
    },
    {
      "id": "family-w31",
      "word": "stepfather",
      "meaning": "ayah tiri",
      "topicId": "family"
    },
    {
      "id": "family-w32",
      "word": "stepmother",
      "meaning": "ibu tiri",
      "topicId": "family"
    },
    {
      "id": "family-w33",
      "word": "stepson",
      "meaning": "anak tiri laki-laki",
      "topicId": "family"
    },
    {
      "id": "family-w34",
      "word": "stepdaughter",
      "meaning": "anak tiri perempuan",
      "topicId": "family"
    },
    {
      "id": "family-w35",
      "word": "spouse",
      "meaning": "pasangan (suami/istri)",
      "topicId": "family"
    },
    {
      "id": "family-w40",
      "word": "stepbrother",
      "meaning": "saudara tiri laki-laki",
      "topicId": "family"
    },
    {
      "id": "family-w41",
      "word": "stepsister",
      "meaning": "saudara tiri perempuan",
      "topicId": "family"
    },
    {
      "id": "family-w43",
      "word": "firstborn",
      "meaning": "anak pertama",
      "topicId": "family"
    },
    {
      "id": "family-w44",
      "word": "newborn",
      "meaning": "bayi baru lahir",
      "topicId": "family"
    },
    {
      "id": "family-w50",
      "word": "guardian",
      "meaning": "wali",
      "topicId": "family"
    },
    {
      "id": "family-w51",
      "word": "parent",
      "meaning": "orang tua",
      "topicId": "family"
    },
    {
      "id": "family-w52",
      "word": "grandparent",
      "meaning": "kakek/nenek",
      "topicId": "family"
    },
    {
      "id": "family-w62",
      "word": "newlyweds",
      "meaning": "pengantin baru",
      "topicId": "family"
    },
    {
      "id": "family-w63",
      "word": "fiance",
      "meaning": "tunangan laki-laki",
      "topicId": "family"
    },
    {
      "id": "family-w64",
      "word": "fiancee",
      "meaning": "tunangan perempuan",
      "topicId": "family"
    },
    {
      "id": "family-w67",
      "word": "widow",
      "meaning": "janda",
      "topicId": "family"
    },
    {
      "id": "family-w68",
      "word": "widower",
      "meaning": "duda",
      "topicId": "family"
    },
    {
      "id": "family-w69",
      "word": "orphan",
      "meaning": "yatim piatu",
      "topicId": "family"
    },
    {
      "id": "family-w71",
      "word": "ancestor",
      "meaning": "leluhur",
      "topicId": "family"
    },
    {
      "id": "family-w72",
      "word": "descendant",
      "meaning": "keturunan",
      "topicId": "family"
    },
    {
      "id": "family-w73",
      "word": "lineage",
      "meaning": "garis keturunan",
      "topicId": "family"
    },
    {
      "id": "family-w74",
      "word": "household",
      "meaning": "rumah tangga",
      "topicId": "family"
    },
    {
      "id": "family-w81",
      "word": "pregnant",
      "meaning": "hamil",
      "topicId": "family"
    },
    {
      "id": "family-w82",
      "word": "born",
      "meaning": "lahir",
      "topicId": "family"
    },
    {
      "id": "family-w83",
      "word": "adoption",
      "meaning": "adopsi",
      "topicId": "family"
    },
    {
      "id": "family-w84",
      "word": "adopt",
      "meaning": "mengadopsi",
      "topicId": "family"
    },
    {
      "id": "family-w87",
      "word": "caregiver",
      "meaning": "pengasuh",
      "topicId": "family"
    },
    {
      "id": "family-w88",
      "word": "breadwinner",
      "meaning": "pencari nafkah utama",
      "topicId": "family"
    },
    {
      "id": "family-w89",
      "word": "homemaker",
      "meaning": "ibu rumah tangga",
      "topicId": "family"
    },
    {
      "id": "family-w90",
      "word": "custody",
      "meaning": "hak asuh",
      "topicId": "family"
    },
    {
      "id": "family-w91",
      "word": "surname",
      "meaning": "nama keluarga",
      "topicId": "family"
    },
    {
      "id": "family-w94",
      "word": "nickname",
      "meaning": "nama panggilan",
      "topicId": "family"
    },
    {
      "id": "family-w95",
      "word": "generation",
      "meaning": "generasi",
      "topicId": "family"
    },
    {
      "id": "family-w96",
      "word": "teenager",
      "meaning": "remaja",
      "topicId": "family"
    },
    {
      "id": "family-w97",
      "word": "adult",
      "meaning": "dewasa",
      "topicId": "family"
    },
    {
      "id": "family-w98",
      "word": "elderly",
      "meaning": "lansia",
      "topicId": "family"
    }
  ],
  "feelings": [
    {
      "id": "feelings-w01",
      "word": "happy",
      "meaning": "senang",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w02",
      "word": "sad",
      "meaning": "sedih",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w03",
      "word": "angry",
      "meaning": "marah",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w04",
      "word": "tired",
      "meaning": "lelah",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w05",
      "word": "sleepy",
      "meaning": "mengantuk",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w06",
      "word": "hungry",
      "meaning": "lapar",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w07",
      "word": "thirsty",
      "meaning": "haus",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w08",
      "word": "scared",
      "meaning": "takut",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w09",
      "word": "afraid",
      "meaning": "takut",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w10",
      "word": "nervous",
      "meaning": "gugup",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w11",
      "word": "calm",
      "meaning": "tenang",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w12",
      "word": "excited",
      "meaning": "bersemangat",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w13",
      "word": "bored",
      "meaning": "bosan",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w14",
      "word": "worried",
      "meaning": "khawatir",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w15",
      "word": "stressed",
      "meaning": "stres",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w16",
      "word": "relaxed",
      "meaning": "rileks",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w17",
      "word": "surprised",
      "meaning": "terkejut",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w18",
      "word": "confused",
      "meaning": "bingung",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w19",
      "word": "shy",
      "meaning": "pemalu",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w20",
      "word": "proud",
      "meaning": "bangga",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w21",
      "word": "embarrassed",
      "meaning": "malu",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w22",
      "word": "disappointed",
      "meaning": "kecewa",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w23",
      "word": "lonely",
      "meaning": "kesepian",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w24",
      "word": "grateful",
      "meaning": "bersyukur",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w25",
      "word": "thankful",
      "meaning": "berterima kasih",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w26",
      "word": "hopeful",
      "meaning": "penuh harapan",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w27",
      "word": "upset",
      "meaning": "kesal",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w28",
      "word": "annoyed",
      "meaning": "terganggu",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w29",
      "word": "jealous",
      "meaning": "cemburu",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w30",
      "word": "guilty",
      "meaning": "merasa bersalah",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w31",
      "word": "relieved",
      "meaning": "lega",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w32",
      "word": "shocked",
      "meaning": "kaget",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w33",
      "word": "confident",
      "meaning": "percaya diri",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w34",
      "word": "comfortable",
      "meaning": "nyaman",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w35",
      "word": "uncomfortable",
      "meaning": "tidak nyaman",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w36",
      "word": "hurt",
      "meaning": "sakit",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w37",
      "word": "pain",
      "meaning": "rasa sakit",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w38",
      "word": "love",
      "meaning": "cinta",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w39",
      "word": "hate",
      "meaning": "benci",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w40",
      "word": "miss",
      "meaning": "merindukan",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w41",
      "word": "interested",
      "meaning": "tertarik",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w42",
      "word": "curious",
      "meaning": "penasaran",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w43",
      "word": "fine",
      "meaning": "baik-baik saja",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w44",
      "word": "okay",
      "meaning": "oke",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w45",
      "word": "sick",
      "meaning": "sakit",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w46",
      "word": "better",
      "meaning": "lebih baik",
      "topicId": "feelings"
    }
  ],
  "food": [
    {
      "id": "food-w01",
      "word": "food",
      "meaning": "makanan",
      "topicId": "food"
    },
    {
      "id": "food-w02",
      "word": "meal",
      "meaning": "hidangan",
      "topicId": "food"
    },
    {
      "id": "food-w03",
      "word": "breakfast",
      "meaning": "sarapan",
      "topicId": "food"
    },
    {
      "id": "food-w04",
      "word": "lunch",
      "meaning": "makan siang",
      "topicId": "food"
    },
    {
      "id": "food-w05",
      "word": "dinner",
      "meaning": "makan malam",
      "topicId": "food"
    },
    {
      "id": "food-w06",
      "word": "snack",
      "meaning": "camilan",
      "topicId": "food"
    },
    {
      "id": "food-w07",
      "word": "rice",
      "meaning": "nasi",
      "topicId": "food"
    },
    {
      "id": "food-w08",
      "word": "bread",
      "meaning": "roti",
      "topicId": "food"
    },
    {
      "id": "food-w09",
      "word": "noodle",
      "meaning": "mi",
      "topicId": "food"
    },
    {
      "id": "food-w10",
      "word": "pasta",
      "meaning": "pasta",
      "topicId": "food"
    },
    {
      "id": "food-w11",
      "word": "soup",
      "meaning": "sup",
      "topicId": "food"
    },
    {
      "id": "food-w12",
      "word": "salad",
      "meaning": "salad",
      "topicId": "food"
    },
    {
      "id": "food-w13",
      "word": "egg",
      "meaning": "telur",
      "topicId": "food"
    },
    {
      "id": "food-w14",
      "word": "chicken",
      "meaning": "ayam",
      "topicId": "food"
    },
    {
      "id": "food-w15",
      "word": "beef",
      "meaning": "daging sapi",
      "topicId": "food"
    },
    {
      "id": "food-w16",
      "word": "fish",
      "meaning": "ikan",
      "topicId": "food"
    },
    {
      "id": "food-w17",
      "word": "shrimp",
      "meaning": "udang",
      "topicId": "food"
    },
    {
      "id": "food-w18",
      "word": "sausage",
      "meaning": "sosis",
      "topicId": "food"
    },
    {
      "id": "food-w19",
      "word": "cheese",
      "meaning": "keju",
      "topicId": "food"
    },
    {
      "id": "food-w20",
      "word": "butter",
      "meaning": "mentega",
      "topicId": "food"
    },
    {
      "id": "food-w21",
      "word": "milk",
      "meaning": "susu",
      "topicId": "food"
    },
    {
      "id": "food-w22",
      "word": "yogurt",
      "meaning": "yogurt",
      "topicId": "food"
    },
    {
      "id": "food-w23",
      "word": "fruit",
      "meaning": "buah",
      "topicId": "food"
    },
    {
      "id": "food-w24",
      "word": "vegetable",
      "meaning": "sayuran",
      "topicId": "food"
    },
    {
      "id": "food-w25",
      "word": "apple",
      "meaning": "apel",
      "topicId": "food"
    },
    {
      "id": "food-w26",
      "word": "banana",
      "meaning": "pisang",
      "topicId": "food"
    },
    {
      "id": "food-w27",
      "word": "orange",
      "meaning": "jeruk",
      "topicId": "food"
    },
    {
      "id": "food-w28",
      "word": "grape",
      "meaning": "anggur",
      "topicId": "food"
    },
    {
      "id": "food-w29",
      "word": "watermelon",
      "meaning": "semangka",
      "topicId": "food"
    },
    {
      "id": "food-w30",
      "word": "mango",
      "meaning": "mangga",
      "topicId": "food"
    },
    {
      "id": "food-w31",
      "word": "carrot",
      "meaning": "wortel",
      "topicId": "food"
    },
    {
      "id": "food-w32",
      "word": "potato",
      "meaning": "kentang",
      "topicId": "food"
    },
    {
      "id": "food-w33",
      "word": "tomato",
      "meaning": "tomat",
      "topicId": "food"
    },
    {
      "id": "food-w34",
      "word": "onion",
      "meaning": "bawang",
      "topicId": "food"
    },
    {
      "id": "food-w35",
      "word": "garlic",
      "meaning": "bawang putih",
      "topicId": "food"
    },
    {
      "id": "food-w36",
      "word": "pepper",
      "meaning": "lada",
      "topicId": "food"
    },
    {
      "id": "food-w37",
      "word": "salt",
      "meaning": "garam",
      "topicId": "food"
    },
    {
      "id": "food-w38",
      "word": "sugar",
      "meaning": "gula",
      "topicId": "food"
    },
    {
      "id": "food-w39",
      "word": "honey",
      "meaning": "madu",
      "topicId": "food"
    },
    {
      "id": "food-w40",
      "word": "oil",
      "meaning": "minyak",
      "topicId": "food"
    },
    {
      "id": "food-w42",
      "word": "sandwich",
      "meaning": "roti isi",
      "topicId": "food"
    },
    {
      "id": "food-w43",
      "word": "pizza",
      "meaning": "pizza",
      "topicId": "food"
    },
    {
      "id": "food-w44",
      "word": "burger",
      "meaning": "burger",
      "topicId": "food"
    },
    {
      "id": "food-w45",
      "word": "cake",
      "meaning": "kue",
      "topicId": "food"
    },
    {
      "id": "food-w46",
      "word": "cookie",
      "meaning": "kue kering",
      "topicId": "food"
    },
    {
      "id": "food-w48",
      "word": "spicy",
      "meaning": "pedas",
      "topicId": "food"
    },
    {
      "id": "food-w49",
      "word": "sweet",
      "meaning": "manis",
      "topicId": "food"
    },
    {
      "id": "food-w50",
      "word": "delicious",
      "meaning": "lezat",
      "topicId": "food"
    }
  ],
  "fruit": [
    {
      "id": "fruit-w01",
      "word": "fruit",
      "meaning": "buah",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w02",
      "word": "apple",
      "meaning": "apel",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w03",
      "word": "banana",
      "meaning": "pisang",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w04",
      "word": "orange",
      "meaning": "jeruk",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w05",
      "word": "grape",
      "meaning": "anggur",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w06",
      "word": "watermelon",
      "meaning": "semangka",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w07",
      "word": "melon",
      "meaning": "melon",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w08",
      "word": "pineapple",
      "meaning": "nanas",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w09",
      "word": "mango",
      "meaning": "mangga",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w10",
      "word": "papaya",
      "meaning": "pepaya",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w11",
      "word": "guava",
      "meaning": "jambu biji",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w13",
      "word": "pear",
      "meaning": "pir",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w14",
      "word": "peach",
      "meaning": "persik",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w15",
      "word": "plum",
      "meaning": "plum",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w16",
      "word": "cherry",
      "meaning": "ceri",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w17",
      "word": "strawberry",
      "meaning": "stroberi",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w18",
      "word": "blueberry",
      "meaning": "blueberry",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w19",
      "word": "raspberry",
      "meaning": "raspberry",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w20",
      "word": "blackberry",
      "meaning": "blackberry",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w21",
      "word": "kiwi",
      "meaning": "kiwi",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w22",
      "word": "avocado",
      "meaning": "alpukat",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w23",
      "word": "coconut",
      "meaning": "kelapa",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w24",
      "word": "lemon",
      "meaning": "lemon",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w25",
      "word": "lime",
      "meaning": "jeruk nipis",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w26",
      "word": "mandarin",
      "meaning": "jeruk mandarin",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w27",
      "word": "pomelo",
      "meaning": "jeruk bali",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w28",
      "word": "durian",
      "meaning": "durian",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w29",
      "word": "jackfruit",
      "meaning": "nangka",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w30",
      "word": "rambutan",
      "meaning": "rambutan",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w31",
      "word": "mangosteen",
      "meaning": "manggis",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w32",
      "word": "salak",
      "meaning": "salak",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w33",
      "word": "starfruit",
      "meaning": "belimbing",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w34",
      "word": "longan",
      "meaning": "kelengkeng",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w35",
      "word": "lychee",
      "meaning": "leci",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w36",
      "word": "date",
      "meaning": "kurma",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w37",
      "word": "fig",
      "meaning": "buah ara",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w38",
      "word": "apricot",
      "meaning": "aprikot",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w39",
      "word": "pomegranate",
      "meaning": "delima",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w41",
      "word": "ripe",
      "meaning": "matang",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w42",
      "word": "unripe",
      "meaning": "belum matang",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w43",
      "word": "fresh",
      "meaning": "segar",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w44",
      "word": "sweet",
      "meaning": "manis",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w45",
      "word": "sour",
      "meaning": "asam",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w46",
      "word": "juicy",
      "meaning": "berair",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w47",
      "word": "seed",
      "meaning": "biji",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w48",
      "word": "peel",
      "meaning": "kulit buah",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w49",
      "word": "slice",
      "meaning": "irisan",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w50",
      "word": "wash",
      "meaning": "mencuci",
      "topicId": "fruit"
    }
  ],
  "games": [
    {
      "id": "games-w01",
      "word": "game",
      "meaning": "permainan",
      "topicId": "games"
    },
    {
      "id": "games-w02",
      "word": "player",
      "meaning": "pemain",
      "topicId": "games"
    },
    {
      "id": "games-w03",
      "word": "team",
      "meaning": "tim",
      "topicId": "games"
    },
    {
      "id": "games-w04",
      "word": "opponent",
      "meaning": "lawan",
      "topicId": "games"
    },
    {
      "id": "games-w05",
      "word": "match",
      "meaning": "pertandingan",
      "topicId": "games"
    },
    {
      "id": "games-w06",
      "word": "round",
      "meaning": "ronde",
      "topicId": "games"
    },
    {
      "id": "games-w07",
      "word": "turn",
      "meaning": "giliran",
      "topicId": "games"
    },
    {
      "id": "games-w08",
      "word": "rule",
      "meaning": "aturan",
      "topicId": "games"
    },
    {
      "id": "games-w09",
      "word": "goal",
      "meaning": "tujuan",
      "topicId": "games"
    },
    {
      "id": "games-w10",
      "word": "mission",
      "meaning": "misi",
      "topicId": "games"
    },
    {
      "id": "games-w11",
      "word": "quest",
      "meaning": "tugas petualangan",
      "topicId": "games"
    },
    {
      "id": "games-w12",
      "word": "level",
      "meaning": "level",
      "topicId": "games"
    },
    {
      "id": "games-w13",
      "word": "stage",
      "meaning": "tahap",
      "topicId": "games"
    },
    {
      "id": "games-w14",
      "word": "score",
      "meaning": "skor",
      "topicId": "games"
    },
    {
      "id": "games-w15",
      "word": "point",
      "meaning": "poin",
      "topicId": "games"
    },
    {
      "id": "games-w16",
      "word": "rank",
      "meaning": "peringkat",
      "topicId": "games"
    },
    {
      "id": "games-w17",
      "word": "win",
      "meaning": "menang",
      "topicId": "games"
    },
    {
      "id": "games-w18",
      "word": "lose",
      "meaning": "kalah",
      "topicId": "games"
    },
    {
      "id": "games-w19",
      "word": "draw",
      "meaning": "seri",
      "topicId": "games"
    },
    {
      "id": "games-w20",
      "word": "victory",
      "meaning": "kemenangan",
      "topicId": "games"
    },
    {
      "id": "games-w21",
      "word": "defeat",
      "meaning": "kekalahan",
      "topicId": "games"
    },
    {
      "id": "games-w22",
      "word": "challenge",
      "meaning": "tantangan",
      "topicId": "games"
    },
    {
      "id": "games-w23",
      "word": "strategy",
      "meaning": "strategi",
      "topicId": "games"
    },
    {
      "id": "games-w24",
      "word": "plan",
      "meaning": "rencana",
      "topicId": "games"
    },
    {
      "id": "games-w25",
      "word": "skill",
      "meaning": "kemampuan",
      "topicId": "games"
    },
    {
      "id": "games-w26",
      "word": "practice",
      "meaning": "latihan",
      "topicId": "games"
    },
    {
      "id": "games-w27",
      "word": "controller",
      "meaning": "kontroler",
      "topicId": "games"
    },
    {
      "id": "games-w28",
      "word": "keyboard",
      "meaning": "keyboard",
      "topicId": "games"
    },
    {
      "id": "games-w29",
      "word": "mouse",
      "meaning": "mouse",
      "topicId": "games"
    },
    {
      "id": "games-w30",
      "word": "screen",
      "meaning": "layar",
      "topicId": "games"
    },
    {
      "id": "games-w31",
      "word": "avatar",
      "meaning": "avatar",
      "topicId": "games"
    },
    {
      "id": "games-w32",
      "word": "character",
      "meaning": "karakter",
      "topicId": "games"
    },
    {
      "id": "games-w33",
      "word": "hero",
      "meaning": "pahlawan",
      "topicId": "games"
    },
    {
      "id": "games-w34",
      "word": "enemy",
      "meaning": "musuh",
      "topicId": "games"
    },
    {
      "id": "games-w35",
      "word": "item",
      "meaning": "item",
      "topicId": "games"
    },
    {
      "id": "games-w36",
      "word": "weapon",
      "meaning": "senjata",
      "topicId": "games"
    },
    {
      "id": "games-w37",
      "word": "armor",
      "meaning": "pelindung",
      "topicId": "games"
    },
    {
      "id": "games-w38",
      "word": "health",
      "meaning": "darah/nyawa",
      "topicId": "games"
    },
    {
      "id": "games-w39",
      "word": "energy",
      "meaning": "energi",
      "topicId": "games"
    },
    {
      "id": "games-w41",
      "word": "map",
      "meaning": "peta",
      "topicId": "games"
    },
    {
      "id": "games-w42",
      "word": "zone",
      "meaning": "zona",
      "topicId": "games"
    },
    {
      "id": "games-w44",
      "word": "server",
      "meaning": "server",
      "topicId": "games"
    },
    {
      "id": "games-w45",
      "word": "ping",
      "meaning": "ping",
      "topicId": "games"
    },
    {
      "id": "games-w46",
      "word": "lag",
      "meaning": "lag",
      "topicId": "games"
    },
    {
      "id": "games-w47",
      "word": "online",
      "meaning": "online",
      "topicId": "games"
    },
    {
      "id": "games-w48",
      "word": "offline",
      "meaning": "offline",
      "topicId": "games"
    },
    {
      "id": "games-w49",
      "word": "teammate",
      "meaning": "rekan satu tim",
      "topicId": "games"
    },
    {
      "id": "games-w50",
      "word": "rematch",
      "meaning": "tanding ulang",
      "topicId": "games"
    }
  ],
  "hobbies-interests": [
    {
      "id": "hobbies-interests-w01",
      "word": "hobby",
      "meaning": "hobi",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w02",
      "word": "interest",
      "meaning": "minat",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w05",
      "word": "activity",
      "meaning": "aktivitas",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w06",
      "word": "relax",
      "meaning": "bersantai",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w07",
      "word": "enjoy",
      "meaning": "menikmati",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w08",
      "word": "practice",
      "meaning": "berlatih",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w09",
      "word": "collect",
      "meaning": "mengoleksi",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w10",
      "word": "collection",
      "meaning": "koleksi",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w11",
      "word": "read",
      "meaning": "membaca",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w12",
      "word": "book",
      "meaning": "buku",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w13",
      "word": "novel",
      "meaning": "novel",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w14",
      "word": "write",
      "meaning": "menulis",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w15",
      "word": "draw",
      "meaning": "menggambar",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w16",
      "word": "paint",
      "meaning": "melukis",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w17",
      "word": "sketch",
      "meaning": "sketsa",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w18",
      "word": "coloring",
      "meaning": "mewarnai",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w19",
      "word": "music",
      "meaning": "musik",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w20",
      "word": "song",
      "meaning": "lagu",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w21",
      "word": "sing",
      "meaning": "bernyanyi",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w22",
      "word": "dance",
      "meaning": "menari",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w23",
      "word": "guitar",
      "meaning": "gitar",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w24",
      "word": "piano",
      "meaning": "piano",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w25",
      "word": "drum",
      "meaning": "drum",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w26",
      "word": "watch",
      "meaning": "menonton",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w27",
      "word": "movie",
      "meaning": "film",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w28",
      "word": "series",
      "meaning": "serial",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w29",
      "word": "photo",
      "meaning": "foto",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w30",
      "word": "photography",
      "meaning": "fotografi",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w31",
      "word": "travel",
      "meaning": "bepergian",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w32",
      "word": "trip",
      "meaning": "perjalanan",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w33",
      "word": "hiking",
      "meaning": "mendaki",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w34",
      "word": "camping",
      "meaning": "berkemah",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w35",
      "word": "swim",
      "meaning": "berenang",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w36",
      "word": "run",
      "meaning": "berlari",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w37",
      "word": "jog",
      "meaning": "joging",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w38",
      "word": "cycle",
      "meaning": "bersepeda",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w39",
      "word": "football",
      "meaning": "sepak bola",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w40",
      "word": "badminton",
      "meaning": "bulu tangkis",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w41",
      "word": "basketball",
      "meaning": "bola basket",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w42",
      "word": "chess",
      "meaning": "catur",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w43",
      "word": "game",
      "meaning": "permainan",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w45",
      "word": "cook",
      "meaning": "memasak",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w46",
      "word": "bake",
      "meaning": "membuat kue",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w47",
      "word": "garden",
      "meaning": "berkebun",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w48",
      "word": "fishing",
      "meaning": "memancing",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w49",
      "word": "craft",
      "meaning": "kerajinan tangan",
      "topicId": "hobbies-interests"
    }
  ],
  "home": [
    {
      "id": "home-w01",
      "word": "home",
      "meaning": "rumah",
      "topicId": "home"
    },
    {
      "id": "home-w02",
      "word": "house",
      "meaning": "rumah",
      "topicId": "home"
    },
    {
      "id": "home-w03",
      "word": "apartment",
      "meaning": "apartemen",
      "topicId": "home"
    },
    {
      "id": "home-w04",
      "word": "room",
      "meaning": "ruangan",
      "topicId": "home"
    },
    {
      "id": "home-w05",
      "word": "bedroom",
      "meaning": "kamar tidur",
      "topicId": "home"
    },
    {
      "id": "home-w06",
      "word": "bathroom",
      "meaning": "kamar mandi",
      "topicId": "home"
    },
    {
      "id": "home-w07",
      "word": "kitchen",
      "meaning": "dapur",
      "topicId": "home"
    },
    {
      "id": "home-w10",
      "word": "garage",
      "meaning": "garasi",
      "topicId": "home"
    },
    {
      "id": "home-w11",
      "word": "balcony",
      "meaning": "balkon",
      "topicId": "home"
    },
    {
      "id": "home-w12",
      "word": "yard",
      "meaning": "halaman",
      "topicId": "home"
    },
    {
      "id": "home-w13",
      "word": "garden",
      "meaning": "taman",
      "topicId": "home"
    },
    {
      "id": "home-w14",
      "word": "fence",
      "meaning": "pagar",
      "topicId": "home"
    },
    {
      "id": "home-w15",
      "word": "roof",
      "meaning": "atap",
      "topicId": "home"
    },
    {
      "id": "home-w16",
      "word": "ceiling",
      "meaning": "langit-langit",
      "topicId": "home"
    },
    {
      "id": "home-w17",
      "word": "floor",
      "meaning": "lantai",
      "topicId": "home"
    },
    {
      "id": "home-w18",
      "word": "wall",
      "meaning": "dinding",
      "topicId": "home"
    },
    {
      "id": "home-w19",
      "word": "door",
      "meaning": "pintu",
      "topicId": "home"
    },
    {
      "id": "home-w20",
      "word": "window",
      "meaning": "jendela",
      "topicId": "home"
    },
    {
      "id": "home-w21",
      "word": "stairs",
      "meaning": "tangga",
      "topicId": "home"
    },
    {
      "id": "home-w22",
      "word": "hallway",
      "meaning": "lorong",
      "topicId": "home"
    },
    {
      "id": "home-w23",
      "word": "gate",
      "meaning": "gerbang",
      "topicId": "home"
    },
    {
      "id": "home-w24",
      "word": "key",
      "meaning": "kunci",
      "topicId": "home"
    },
    {
      "id": "home-w25",
      "word": "lock",
      "meaning": "kunci pengaman",
      "topicId": "home"
    },
    {
      "id": "home-w26",
      "word": "lamp",
      "meaning": "lampu meja",
      "topicId": "home"
    },
    {
      "id": "home-w28",
      "word": "sofa",
      "meaning": "sofa",
      "topicId": "home"
    },
    {
      "id": "home-w29",
      "word": "chair",
      "meaning": "kursi",
      "topicId": "home"
    },
    {
      "id": "home-w30",
      "word": "table",
      "meaning": "meja",
      "topicId": "home"
    },
    {
      "id": "home-w31",
      "word": "bed",
      "meaning": "tempat tidur",
      "topicId": "home"
    },
    {
      "id": "home-w32",
      "word": "pillow",
      "meaning": "bantal",
      "topicId": "home"
    },
    {
      "id": "home-w33",
      "word": "blanket",
      "meaning": "selimut",
      "topicId": "home"
    },
    {
      "id": "home-w34",
      "word": "wardrobe",
      "meaning": "lemari pakaian",
      "topicId": "home"
    },
    {
      "id": "home-w35",
      "word": "closet",
      "meaning": "lemari",
      "topicId": "home"
    },
    {
      "id": "home-w36",
      "word": "shelf",
      "meaning": "rak",
      "topicId": "home"
    },
    {
      "id": "home-w37",
      "word": "drawer",
      "meaning": "laci",
      "topicId": "home"
    },
    {
      "id": "home-w38",
      "word": "mirror",
      "meaning": "cermin",
      "topicId": "home"
    },
    {
      "id": "home-w39",
      "word": "sink",
      "meaning": "bak cuci",
      "topicId": "home"
    },
    {
      "id": "home-w40",
      "word": "shower",
      "meaning": "pancuran",
      "topicId": "home"
    },
    {
      "id": "home-w41",
      "word": "toilet",
      "meaning": "toilet",
      "topicId": "home"
    },
    {
      "id": "home-w42",
      "word": "bathtub",
      "meaning": "bak mandi",
      "topicId": "home"
    },
    {
      "id": "home-w43",
      "word": "stove",
      "meaning": "kompor",
      "topicId": "home"
    },
    {
      "id": "home-w44",
      "word": "oven",
      "meaning": "oven",
      "topicId": "home"
    },
    {
      "id": "home-w45",
      "word": "fridge",
      "meaning": "kulkas",
      "topicId": "home"
    },
    {
      "id": "home-w46",
      "word": "freezer",
      "meaning": "freezer",
      "topicId": "home"
    },
    {
      "id": "home-w47",
      "word": "microwave",
      "meaning": "microwave",
      "topicId": "home"
    },
    {
      "id": "home-w49",
      "word": "fan",
      "meaning": "kipas",
      "topicId": "home"
    },
    {
      "id": "home-w51",
      "word": "curtain",
      "meaning": "tirai",
      "topicId": "home"
    },
    {
      "id": "home-w52",
      "word": "carpet",
      "meaning": "karpet",
      "topicId": "home"
    },
    {
      "id": "home-w53",
      "word": "doormat",
      "meaning": "keset",
      "topicId": "home"
    },
    {
      "id": "home-w55",
      "word": "broom",
      "meaning": "sapu",
      "topicId": "home"
    },
    {
      "id": "home-w56",
      "word": "mop",
      "meaning": "pel",
      "topicId": "home"
    },
    {
      "id": "home-w57",
      "word": "bucket",
      "meaning": "ember",
      "topicId": "home"
    },
    {
      "id": "home-w59",
      "word": "kettle",
      "meaning": "ketel",
      "topicId": "home"
    },
    {
      "id": "home-w61",
      "word": "dishwasher",
      "meaning": "mesin pencuci piring",
      "topicId": "home"
    },
    {
      "id": "home-w63",
      "word": "bookshelf",
      "meaning": "rak buku",
      "topicId": "home"
    },
    {
      "id": "home-w64",
      "word": "desk",
      "meaning": "meja kerja",
      "topicId": "home"
    },
    {
      "id": "home-w66",
      "word": "clock",
      "meaning": "jam dinding",
      "topicId": "home"
    },
    {
      "id": "home-w69",
      "word": "television",
      "meaning": "televisi",
      "topicId": "home"
    },
    {
      "id": "home-w73",
      "word": "charger",
      "meaning": "pengisi daya",
      "topicId": "home"
    },
    {
      "id": "home-w75",
      "word": "faucet",
      "meaning": "keran",
      "topicId": "home"
    },
    {
      "id": "home-w76",
      "word": "soap",
      "meaning": "sabun",
      "topicId": "home"
    },
    {
      "id": "home-w77",
      "word": "toothbrush",
      "meaning": "sikat gigi",
      "topicId": "home"
    },
    {
      "id": "home-w78",
      "word": "toothpaste",
      "meaning": "pasta gigi",
      "topicId": "home"
    },
    {
      "id": "home-w79",
      "word": "shampoo",
      "meaning": "sampo",
      "topicId": "home"
    },
    {
      "id": "home-w81",
      "word": "detergent",
      "meaning": "deterjen",
      "topicId": "home"
    },
    {
      "id": "home-w82",
      "word": "sponge",
      "meaning": "spons",
      "topicId": "home"
    },
    {
      "id": "home-w85",
      "word": "knife",
      "meaning": "pisau",
      "topicId": "home"
    },
    {
      "id": "home-w86",
      "word": "fork",
      "meaning": "garpu",
      "topicId": "home"
    },
    {
      "id": "home-w87",
      "word": "spoon",
      "meaning": "sendok",
      "topicId": "home"
    },
    {
      "id": "home-w88",
      "word": "plate",
      "meaning": "piring",
      "topicId": "home"
    },
    {
      "id": "home-w89",
      "word": "bowl",
      "meaning": "mangkuk",
      "topicId": "home"
    },
    {
      "id": "home-w90",
      "word": "cup",
      "meaning": "cangkir",
      "topicId": "home"
    },
    {
      "id": "home-w91",
      "word": "mug",
      "meaning": "gelas mug",
      "topicId": "home"
    },
    {
      "id": "home-w92",
      "word": "glass",
      "meaning": "gelas",
      "topicId": "home"
    },
    {
      "id": "home-w94",
      "word": "pan",
      "meaning": "wajan",
      "topicId": "home"
    },
    {
      "id": "home-w95",
      "word": "pot",
      "meaning": "panci",
      "topicId": "home"
    },
    {
      "id": "home-w96",
      "word": "lid",
      "meaning": "tutup",
      "topicId": "home"
    },
    {
      "id": "home-w97",
      "word": "counter",
      "meaning": "meja dapur",
      "topicId": "home"
    }
  ],
  "kitchen": [
    {
      "id": "kitchen-w01",
      "word": "kitchen",
      "meaning": "dapur",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w02",
      "word": "stove",
      "meaning": "kompor",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w05",
      "word": "oven",
      "meaning": "oven",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w06",
      "word": "microwave",
      "meaning": "microwave",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w07",
      "word": "refrigerator",
      "meaning": "kulkas",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w08",
      "word": "freezer",
      "meaning": "freezer",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w09",
      "word": "sink",
      "meaning": "bak cuci",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w10",
      "word": "faucet",
      "meaning": "keran",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w11",
      "word": "counter",
      "meaning": "meja dapur",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w12",
      "word": "cabinet",
      "meaning": "lemari dapur",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w13",
      "word": "shelf",
      "meaning": "rak",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w14",
      "word": "drawer",
      "meaning": "laci",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w15",
      "word": "dish",
      "meaning": "hidangan",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w16",
      "word": "plate",
      "meaning": "piring",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w17",
      "word": "bowl",
      "meaning": "mangkuk",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w18",
      "word": "cup",
      "meaning": "cangkir",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w19",
      "word": "glass",
      "meaning": "gelas",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w20",
      "word": "mug",
      "meaning": "mug",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w21",
      "word": "spoon",
      "meaning": "sendok",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w22",
      "word": "fork",
      "meaning": "garpu",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w23",
      "word": "knife",
      "meaning": "pisau",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w24",
      "word": "chopsticks",
      "meaning": "sumpit",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w25",
      "word": "pan",
      "meaning": "wajan",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w26",
      "word": "pot",
      "meaning": "panci",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w27",
      "word": "lid",
      "meaning": "tutup",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w29",
      "word": "spatula",
      "meaning": "spatula",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w30",
      "word": "ladle",
      "meaning": "sendok sayur",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w31",
      "word": "tongs",
      "meaning": "penjepit",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w32",
      "word": "peeler",
      "meaning": "pengupas",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w33",
      "word": "grater",
      "meaning": "parutan",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w34",
      "word": "strainer",
      "meaning": "saringan",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w35",
      "word": "blender",
      "meaning": "blender",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w37",
      "word": "kettle",
      "meaning": "teko listrik",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w38",
      "word": "toaster",
      "meaning": "pemanggang roti",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w39",
      "word": "ingredient",
      "meaning": "bahan",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w40",
      "word": "recipe",
      "meaning": "resep",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w41",
      "word": "cook",
      "meaning": "memasak",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w42",
      "word": "fry",
      "meaning": "menggoreng",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w43",
      "word": "boil",
      "meaning": "merebus",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w44",
      "word": "steam",
      "meaning": "mengukus",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w45",
      "word": "bake",
      "meaning": "memanggang",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w46",
      "word": "chop",
      "meaning": "mencincang",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w47",
      "word": "slice",
      "meaning": "mengiris",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w48",
      "word": "mix",
      "meaning": "mencampur",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w49",
      "word": "serve",
      "meaning": "menyajikan",
      "topicId": "kitchen"
    }
  ],
  "number": [
    {
      "id": "number-w01",
      "word": "one",
      "meaning": "satu",
      "topicId": "number"
    },
    {
      "id": "number-w02",
      "word": "two",
      "meaning": "dua",
      "topicId": "number"
    },
    {
      "id": "number-w03",
      "word": "three",
      "meaning": "tiga",
      "topicId": "number"
    },
    {
      "id": "number-w04",
      "word": "four",
      "meaning": "empat",
      "topicId": "number"
    },
    {
      "id": "number-w05",
      "word": "five",
      "meaning": "lima",
      "topicId": "number"
    },
    {
      "id": "number-w06",
      "word": "six",
      "meaning": "enam",
      "topicId": "number"
    },
    {
      "id": "number-w07",
      "word": "seven",
      "meaning": "tujuh",
      "topicId": "number"
    },
    {
      "id": "number-w08",
      "word": "eight",
      "meaning": "delapan",
      "topicId": "number"
    },
    {
      "id": "number-w09",
      "word": "nine",
      "meaning": "sembilan",
      "topicId": "number"
    },
    {
      "id": "number-w10",
      "word": "ten",
      "meaning": "sepuluh",
      "topicId": "number"
    },
    {
      "id": "number-w11",
      "word": "eleven",
      "meaning": "sebelas",
      "topicId": "number"
    },
    {
      "id": "number-w12",
      "word": "twelve",
      "meaning": "dua belas",
      "topicId": "number"
    },
    {
      "id": "number-w13",
      "word": "thirteen",
      "meaning": "tiga belas",
      "topicId": "number"
    },
    {
      "id": "number-w14",
      "word": "fourteen",
      "meaning": "empat belas",
      "topicId": "number"
    },
    {
      "id": "number-w15",
      "word": "fifteen",
      "meaning": "lima belas",
      "topicId": "number"
    },
    {
      "id": "number-w16",
      "word": "sixteen",
      "meaning": "enam belas",
      "topicId": "number"
    },
    {
      "id": "number-w17",
      "word": "seventeen",
      "meaning": "tujuh belas",
      "topicId": "number"
    },
    {
      "id": "number-w18",
      "word": "eighteen",
      "meaning": "delapan belas",
      "topicId": "number"
    },
    {
      "id": "number-w19",
      "word": "nineteen",
      "meaning": "sembilan belas",
      "topicId": "number"
    },
    {
      "id": "number-w20",
      "word": "twenty",
      "meaning": "dua puluh",
      "topicId": "number"
    },
    {
      "id": "number-w30",
      "word": "thirty",
      "meaning": "tiga puluh",
      "topicId": "number"
    },
    {
      "id": "number-w31",
      "word": "forty",
      "meaning": "empat puluh",
      "topicId": "number"
    },
    {
      "id": "number-w32",
      "word": "fifty",
      "meaning": "lima puluh",
      "topicId": "number"
    },
    {
      "id": "number-w33",
      "word": "sixty",
      "meaning": "enam puluh",
      "topicId": "number"
    },
    {
      "id": "number-w34",
      "word": "seventy",
      "meaning": "tujuh puluh",
      "topicId": "number"
    },
    {
      "id": "number-w35",
      "word": "eighty",
      "meaning": "delapan puluh",
      "topicId": "number"
    },
    {
      "id": "number-w36",
      "word": "ninety",
      "meaning": "sembilan puluh",
      "topicId": "number"
    },
    {
      "id": "number-w91",
      "word": "plus",
      "meaning": "tambah",
      "topicId": "number"
    },
    {
      "id": "number-w92",
      "word": "minus",
      "meaning": "kurang",
      "topicId": "number"
    },
    {
      "id": "number-w93",
      "word": "times",
      "meaning": "kali",
      "topicId": "number"
    },
    {
      "id": "number-w95",
      "word": "equals",
      "meaning": "sama dengan",
      "topicId": "number"
    }
  ],
  "ordinal-number": [
    {
      "id": "ordinal-number-w01",
      "word": "first",
      "meaning": "pertama",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w02",
      "word": "second",
      "meaning": "kedua",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w03",
      "word": "third",
      "meaning": "ketiga",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w04",
      "word": "fourth",
      "meaning": "keempat",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w05",
      "word": "fifth",
      "meaning": "kelima",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w06",
      "word": "sixth",
      "meaning": "keenam",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w07",
      "word": "seventh",
      "meaning": "ketujuh",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w08",
      "word": "eighth",
      "meaning": "kedelapan",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w09",
      "word": "ninth",
      "meaning": "kesembilan",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w10",
      "word": "tenth",
      "meaning": "kesepuluh",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w11",
      "word": "eleventh",
      "meaning": "kesebelas",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w12",
      "word": "twelfth",
      "meaning": "kedua belas",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w13",
      "word": "thirteenth",
      "meaning": "ketiga belas",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w14",
      "word": "fourteenth",
      "meaning": "keempat belas",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w15",
      "word": "fifteenth",
      "meaning": "kelima belas",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w16",
      "word": "sixteenth",
      "meaning": "keenam belas",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w17",
      "word": "seventeenth",
      "meaning": "ketujuh belas",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w18",
      "word": "eighteenth",
      "meaning": "kedelapan belas",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w19",
      "word": "nineteenth",
      "meaning": "kesembilan belas",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w20",
      "word": "twentieth",
      "meaning": "kedua puluh",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w30",
      "word": "thirtieth",
      "meaning": "ketiga puluh",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w32",
      "word": "fortieth",
      "meaning": "keempat puluh",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w33",
      "word": "fiftieth",
      "meaning": "kelima puluh",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w34",
      "word": "hundredth",
      "meaning": "keseratus",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w35",
      "word": "thousandth",
      "meaning": "keseribu",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w36",
      "word": "millionth",
      "meaning": "kesejuta",
      "topicId": "ordinal-number"
    }
  ],
  "personal-information": [
    {
      "id": "personal-information-w01",
      "word": "name",
      "meaning": "nama",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w05",
      "word": "surname",
      "meaning": "nama keluarga",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w06",
      "word": "nickname",
      "meaning": "nama panggilan",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w07",
      "word": "identity",
      "meaning": "identitas",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w09",
      "word": "profile",
      "meaning": "profil",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w10",
      "word": "information",
      "meaning": "informasi",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w11",
      "word": "age",
      "meaning": "usia",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w12",
      "word": "birthday",
      "meaning": "ulang tahun",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w15",
      "word": "gender",
      "meaning": "jenis kelamin",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w16",
      "word": "male",
      "meaning": "laki-laki",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w17",
      "word": "female",
      "meaning": "perempuan",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w18",
      "word": "nationality",
      "meaning": "kewarganegaraan",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w19",
      "word": "citizen",
      "meaning": "warga negara",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w21",
      "word": "single",
      "meaning": "lajang",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w22",
      "word": "married",
      "meaning": "menikah",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w23",
      "word": "address",
      "meaning": "alamat",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w24",
      "word": "street",
      "meaning": "jalan",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w25",
      "word": "city",
      "meaning": "kota",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w26",
      "word": "province",
      "meaning": "provinsi",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w27",
      "word": "country",
      "meaning": "negara",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w31",
      "word": "email",
      "meaning": "email",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w32",
      "word": "contact",
      "meaning": "kontak",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w34",
      "word": "occupation",
      "meaning": "pekerjaan",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w35",
      "word": "job",
      "meaning": "pekerjaan",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w36",
      "word": "company",
      "meaning": "perusahaan",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w37",
      "word": "department",
      "meaning": "departemen",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w38",
      "word": "position",
      "meaning": "jabatan",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w41",
      "word": "passport",
      "meaning": "paspor",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w42",
      "word": "signature",
      "meaning": "tanda tangan",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w43",
      "word": "form",
      "meaning": "formulir",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w44",
      "word": "field",
      "meaning": "kolom",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w46",
      "word": "submit",
      "meaning": "mengirim",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w47",
      "word": "confirm",
      "meaning": "mengonfirmasi",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w48",
      "word": "correct",
      "meaning": "benar",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w49",
      "word": "update",
      "meaning": "memperbarui",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w50",
      "word": "details",
      "meaning": "rincian",
      "topicId": "personal-information"
    }
  ],
  "physical-appearance": [
    {
      "id": "physical-appearance-w01",
      "word": "appearance",
      "meaning": "penampilan",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w02",
      "word": "look",
      "meaning": "tampilan",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w03",
      "word": "tall",
      "meaning": "tinggi",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w04",
      "word": "short",
      "meaning": "pendek",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w06",
      "word": "slim",
      "meaning": "langsing",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w07",
      "word": "thin",
      "meaning": "kurus",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w08",
      "word": "overweight",
      "meaning": "kelebihan berat badan",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w09",
      "word": "fit",
      "meaning": "bugar",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w10",
      "word": "strong",
      "meaning": "kuat",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w11",
      "word": "young",
      "meaning": "muda",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w12",
      "word": "old",
      "meaning": "tua",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w13",
      "word": "handsome",
      "meaning": "tampan",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w14",
      "word": "beautiful",
      "meaning": "cantik",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w15",
      "word": "pretty",
      "meaning": "cantik",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w16",
      "word": "cute",
      "meaning": "imut",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w17",
      "word": "attractive",
      "meaning": "menarik",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w18",
      "word": "hair",
      "meaning": "rambut",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w27",
      "word": "bald",
      "meaning": "botak",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w28",
      "word": "beard",
      "meaning": "jenggot",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w29",
      "word": "mustache",
      "meaning": "kumis",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w30",
      "word": "face",
      "meaning": "wajah",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w33",
      "word": "eyes",
      "meaning": "mata",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w37",
      "word": "skin",
      "meaning": "kulit",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w40",
      "word": "smile",
      "meaning": "senyum",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w41",
      "word": "glasses",
      "meaning": "kacamata",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w42",
      "word": "freckles",
      "meaning": "bintik-bintik wajah",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w43",
      "word": "dimples",
      "meaning": "lesung pipi",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w44",
      "word": "height",
      "meaning": "tinggi badan",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w45",
      "word": "weight",
      "meaning": "berat badan",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w46",
      "word": "body",
      "meaning": "tubuh",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w47",
      "word": "chin",
      "meaning": "dagu",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w48",
      "word": "cheek",
      "meaning": "pipi",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w49",
      "word": "forehead",
      "meaning": "dahi",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w50",
      "word": "lips",
      "meaning": "bibir",
      "topicId": "physical-appearance"
    }
  ],
  "places": [
    {
      "id": "places-w01",
      "word": "place",
      "meaning": "tempat",
      "topicId": "places"
    },
    {
      "id": "places-w02",
      "word": "city",
      "meaning": "kota",
      "topicId": "places"
    },
    {
      "id": "places-w03",
      "word": "town",
      "meaning": "kota kecil",
      "topicId": "places"
    },
    {
      "id": "places-w04",
      "word": "village",
      "meaning": "desa",
      "topicId": "places"
    },
    {
      "id": "places-w05",
      "word": "country",
      "meaning": "negara",
      "topicId": "places"
    },
    {
      "id": "places-w06",
      "word": "capital",
      "meaning": "ibu kota",
      "topicId": "places"
    },
    {
      "id": "places-w07",
      "word": "area",
      "meaning": "area",
      "topicId": "places"
    },
    {
      "id": "places-w08",
      "word": "neighborhood",
      "meaning": "lingkungan",
      "topicId": "places"
    },
    {
      "id": "places-w09",
      "word": "street",
      "meaning": "jalan",
      "topicId": "places"
    },
    {
      "id": "places-w10",
      "word": "road",
      "meaning": "jalan raya",
      "topicId": "places"
    },
    {
      "id": "places-w11",
      "word": "park",
      "meaning": "taman",
      "topicId": "places"
    },
    {
      "id": "places-w12",
      "word": "garden",
      "meaning": "kebun",
      "topicId": "places"
    },
    {
      "id": "places-w13",
      "word": "square",
      "meaning": "alun-alun",
      "topicId": "places"
    },
    {
      "id": "places-w14",
      "word": "market",
      "meaning": "pasar",
      "topicId": "places"
    },
    {
      "id": "places-w15",
      "word": "mall",
      "meaning": "mal",
      "topicId": "places"
    },
    {
      "id": "places-w16",
      "word": "shop",
      "meaning": "toko",
      "topicId": "places"
    },
    {
      "id": "places-w17",
      "word": "store",
      "meaning": "toko",
      "topicId": "places"
    },
    {
      "id": "places-w18",
      "word": "restaurant",
      "meaning": "restoran",
      "topicId": "places"
    },
    {
      "id": "places-w19",
      "word": "cafe",
      "meaning": "kafe",
      "topicId": "places"
    },
    {
      "id": "places-w20",
      "word": "hotel",
      "meaning": "hotel",
      "topicId": "places"
    },
    {
      "id": "places-w21",
      "word": "apartment",
      "meaning": "apartemen",
      "topicId": "places"
    },
    {
      "id": "places-w22",
      "word": "house",
      "meaning": "rumah",
      "topicId": "places"
    },
    {
      "id": "places-w23",
      "word": "office",
      "meaning": "kantor",
      "topicId": "places"
    },
    {
      "id": "places-w24",
      "word": "school",
      "meaning": "sekolah",
      "topicId": "places"
    },
    {
      "id": "places-w25",
      "word": "campus",
      "meaning": "kampus",
      "topicId": "places"
    },
    {
      "id": "places-w26",
      "word": "library",
      "meaning": "perpustakaan",
      "topicId": "places"
    },
    {
      "id": "places-w27",
      "word": "hospital",
      "meaning": "rumah sakit",
      "topicId": "places"
    },
    {
      "id": "places-w28",
      "word": "clinic",
      "meaning": "klinik",
      "topicId": "places"
    },
    {
      "id": "places-w29",
      "word": "pharmacy",
      "meaning": "apotek",
      "topicId": "places"
    },
    {
      "id": "places-w30",
      "word": "bank",
      "meaning": "bank",
      "topicId": "places"
    },
    {
      "id": "places-w33",
      "word": "airport",
      "meaning": "bandara",
      "topicId": "places"
    },
    {
      "id": "places-w34",
      "word": "station",
      "meaning": "stasiun",
      "topicId": "places"
    },
    {
      "id": "places-w35",
      "word": "terminal",
      "meaning": "terminal",
      "topicId": "places"
    },
    {
      "id": "places-w36",
      "word": "harbor",
      "meaning": "pelabuhan",
      "topicId": "places"
    },
    {
      "id": "places-w37",
      "word": "beach",
      "meaning": "pantai",
      "topicId": "places"
    },
    {
      "id": "places-w38",
      "word": "mountain",
      "meaning": "gunung",
      "topicId": "places"
    },
    {
      "id": "places-w39",
      "word": "river",
      "meaning": "sungai",
      "topicId": "places"
    },
    {
      "id": "places-w40",
      "word": "lake",
      "meaning": "danau",
      "topicId": "places"
    },
    {
      "id": "places-w41",
      "word": "island",
      "meaning": "pulau",
      "topicId": "places"
    },
    {
      "id": "places-w42",
      "word": "forest",
      "meaning": "hutan",
      "topicId": "places"
    },
    {
      "id": "places-w43",
      "word": "bridge",
      "meaning": "jembatan",
      "topicId": "places"
    },
    {
      "id": "places-w44",
      "word": "corner",
      "meaning": "sudut",
      "topicId": "places"
    },
    {
      "id": "places-w45",
      "word": "intersection",
      "meaning": "persimpangan",
      "topicId": "places"
    },
    {
      "id": "places-w46",
      "word": "downtown",
      "meaning": "pusat kota",
      "topicId": "places"
    },
    {
      "id": "places-w47",
      "word": "suburb",
      "meaning": "pinggiran kota",
      "topicId": "places"
    },
    {
      "id": "places-w48",
      "word": "north",
      "meaning": "utara",
      "topicId": "places"
    },
    {
      "id": "places-w49",
      "word": "south",
      "meaning": "selatan",
      "topicId": "places"
    },
    {
      "id": "places-w50",
      "word": "center",
      "meaning": "pusat",
      "topicId": "places"
    }
  ],
  "school": [
    {
      "id": "school-w01",
      "word": "school",
      "meaning": "sekolah",
      "topicId": "school"
    },
    {
      "id": "school-w02",
      "word": "classroom",
      "meaning": "ruang kelas",
      "topicId": "school"
    },
    {
      "id": "school-w03",
      "word": "teacher",
      "meaning": "guru",
      "topicId": "school"
    },
    {
      "id": "school-w04",
      "word": "student",
      "meaning": "murid",
      "topicId": "school"
    },
    {
      "id": "school-w05",
      "word": "principal",
      "meaning": "kepala sekolah",
      "topicId": "school"
    },
    {
      "id": "school-w06",
      "word": "classmate",
      "meaning": "teman sekelas",
      "topicId": "school"
    },
    {
      "id": "school-w07",
      "word": "lesson",
      "meaning": "pelajaran",
      "topicId": "school"
    },
    {
      "id": "school-w08",
      "word": "subject",
      "meaning": "mata pelajaran",
      "topicId": "school"
    },
    {
      "id": "school-w09",
      "word": "homework",
      "meaning": "pekerjaan rumah",
      "topicId": "school"
    },
    {
      "id": "school-w10",
      "word": "assignment",
      "meaning": "tugas",
      "topicId": "school"
    },
    {
      "id": "school-w11",
      "word": "project",
      "meaning": "proyek",
      "topicId": "school"
    },
    {
      "id": "school-w12",
      "word": "presentation",
      "meaning": "presentasi",
      "topicId": "school"
    },
    {
      "id": "school-w13",
      "word": "test",
      "meaning": "tes",
      "topicId": "school"
    },
    {
      "id": "school-w14",
      "word": "quiz",
      "meaning": "kuis",
      "topicId": "school"
    },
    {
      "id": "school-w15",
      "word": "exam",
      "meaning": "ujian",
      "topicId": "school"
    },
    {
      "id": "school-w16",
      "word": "grade",
      "meaning": "nilai",
      "topicId": "school"
    },
    {
      "id": "school-w17",
      "word": "score",
      "meaning": "skor",
      "topicId": "school"
    },
    {
      "id": "school-w18",
      "word": "notebook",
      "meaning": "buku catatan",
      "topicId": "school"
    },
    {
      "id": "school-w19",
      "word": "book",
      "meaning": "buku",
      "topicId": "school"
    },
    {
      "id": "school-w20",
      "word": "textbook",
      "meaning": "buku pelajaran",
      "topicId": "school"
    },
    {
      "id": "school-w21",
      "word": "workbook",
      "meaning": "buku latihan",
      "topicId": "school"
    },
    {
      "id": "school-w22",
      "word": "dictionary",
      "meaning": "kamus",
      "topicId": "school"
    },
    {
      "id": "school-w23",
      "word": "pencil",
      "meaning": "pensil",
      "topicId": "school"
    },
    {
      "id": "school-w24",
      "word": "pen",
      "meaning": "pulpen",
      "topicId": "school"
    },
    {
      "id": "school-w25",
      "word": "eraser",
      "meaning": "penghapus",
      "topicId": "school"
    },
    {
      "id": "school-w26",
      "word": "ruler",
      "meaning": "penggaris",
      "topicId": "school"
    },
    {
      "id": "school-w28",
      "word": "desk",
      "meaning": "meja",
      "topicId": "school"
    },
    {
      "id": "school-w29",
      "word": "chair",
      "meaning": "kursi",
      "topicId": "school"
    },
    {
      "id": "school-w30",
      "word": "board",
      "meaning": "papan tulis",
      "topicId": "school"
    },
    {
      "id": "school-w31",
      "word": "whiteboard",
      "meaning": "papan tulis putih",
      "topicId": "school"
    },
    {
      "id": "school-w32",
      "word": "marker",
      "meaning": "spidol",
      "topicId": "school"
    },
    {
      "id": "school-w33",
      "word": "chalk",
      "meaning": "kapur tulis",
      "topicId": "school"
    },
    {
      "id": "school-w34",
      "word": "schedule",
      "meaning": "jadwal",
      "topicId": "school"
    },
    {
      "id": "school-w35",
      "word": "timetable",
      "meaning": "jadwal pelajaran",
      "topicId": "school"
    },
    {
      "id": "school-w36",
      "word": "break",
      "meaning": "istirahat",
      "topicId": "school"
    },
    {
      "id": "school-w37",
      "word": "recess",
      "meaning": "jam istirahat",
      "topicId": "school"
    },
    {
      "id": "school-w38",
      "word": "bell",
      "meaning": "bel",
      "topicId": "school"
    },
    {
      "id": "school-w39",
      "word": "library",
      "meaning": "perpustakaan",
      "topicId": "school"
    },
    {
      "id": "school-w40",
      "word": "laboratory",
      "meaning": "laboratorium",
      "topicId": "school"
    },
    {
      "id": "school-w41",
      "word": "canteen",
      "meaning": "kantin",
      "topicId": "school"
    },
    {
      "id": "school-w42",
      "word": "uniform",
      "meaning": "seragam",
      "topicId": "school"
    },
    {
      "id": "school-w43",
      "word": "question",
      "meaning": "pertanyaan",
      "topicId": "school"
    },
    {
      "id": "school-w44",
      "word": "answer",
      "meaning": "jawaban",
      "topicId": "school"
    },
    {
      "id": "school-w45",
      "word": "read",
      "meaning": "membaca",
      "topicId": "school"
    },
    {
      "id": "school-w46",
      "word": "write",
      "meaning": "menulis",
      "topicId": "school"
    },
    {
      "id": "school-w47",
      "word": "listen",
      "meaning": "mendengarkan",
      "topicId": "school"
    },
    {
      "id": "school-w48",
      "word": "speak",
      "meaning": "berbicara",
      "topicId": "school"
    },
    {
      "id": "school-w49",
      "word": "study",
      "meaning": "belajar",
      "topicId": "school"
    },
    {
      "id": "school-w50",
      "word": "learn",
      "meaning": "mempelajari",
      "topicId": "school"
    }
  ],
  "shapes": [
    {
      "id": "shapes-w01",
      "word": "shape",
      "meaning": "bentuk",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w02",
      "word": "line",
      "meaning": "garis",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w05",
      "word": "point",
      "meaning": "titik sudut",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w06",
      "word": "dot",
      "meaning": "titik",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w07",
      "word": "angle",
      "meaning": "sudut",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w11",
      "word": "circle",
      "meaning": "lingkaran",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w12",
      "word": "semicircle",
      "meaning": "setengah lingkaran",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w13",
      "word": "oval",
      "meaning": "oval",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w14",
      "word": "ellipse",
      "meaning": "elips",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w15",
      "word": "triangle",
      "meaning": "segitiga",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w19",
      "word": "square",
      "meaning": "persegi",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w20",
      "word": "rectangle",
      "meaning": "persegi panjang",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w21",
      "word": "parallelogram",
      "meaning": "jajar genjang",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w22",
      "word": "trapezoid",
      "meaning": "trapesium",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w23",
      "word": "rhombus",
      "meaning": "belah ketupat",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w25",
      "word": "pentagon",
      "meaning": "segi lima",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w26",
      "word": "hexagon",
      "meaning": "segi enam",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w27",
      "word": "heptagon",
      "meaning": "segi tujuh",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w28",
      "word": "octagon",
      "meaning": "segi delapan",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w29",
      "word": "nonagon",
      "meaning": "segi sembilan",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w30",
      "word": "decagon",
      "meaning": "segi sepuluh",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w31",
      "word": "star",
      "meaning": "bintang",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w33",
      "word": "crescent",
      "meaning": "bulan sabit",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w34",
      "word": "cross",
      "meaning": "tanda silang",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w36",
      "word": "spiral",
      "meaning": "spiral",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w37",
      "word": "wave",
      "meaning": "gelombang",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w38",
      "word": "zigzag",
      "meaning": "zigzag",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w39",
      "word": "cone",
      "meaning": "kerucut",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w40",
      "word": "cube",
      "meaning": "kubus",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w41",
      "word": "sphere",
      "meaning": "bola",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w42",
      "word": "cylinder",
      "meaning": "silinder",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w43",
      "word": "pyramid",
      "meaning": "piramida",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w44",
      "word": "prism",
      "meaning": "prisma",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w45",
      "word": "ring",
      "meaning": "cincin/lingkaran kosong",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w46",
      "word": "arc",
      "meaning": "busur",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w47",
      "word": "edge",
      "meaning": "tepi",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w48",
      "word": "corner",
      "meaning": "sudut pojok",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w49",
      "word": "side",
      "meaning": "sisi",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w50",
      "word": "symmetry",
      "meaning": "simetri",
      "topicId": "shapes"
    }
  ],
  "shopping": [
    {
      "id": "shopping-w01",
      "word": "shopping",
      "meaning": "belanja",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w02",
      "word": "shop",
      "meaning": "toko",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w03",
      "word": "store",
      "meaning": "toko",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w04",
      "word": "market",
      "meaning": "pasar",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w05",
      "word": "mall",
      "meaning": "mal",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w06",
      "word": "supermarket",
      "meaning": "supermarket",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w07",
      "word": "minimarket",
      "meaning": "minimarket",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w10",
      "word": "seller",
      "meaning": "penjual",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w11",
      "word": "buyer",
      "meaning": "pembeli",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w12",
      "word": "cashier",
      "meaning": "kasir",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w13",
      "word": "customer",
      "meaning": "pelanggan",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w14",
      "word": "product",
      "meaning": "produk",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w15",
      "word": "item",
      "meaning": "barang",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w16",
      "word": "brand",
      "meaning": "merek",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w17",
      "word": "quality",
      "meaning": "kualitas",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w18",
      "word": "price",
      "meaning": "harga",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w19",
      "word": "expensive",
      "meaning": "mahal",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w20",
      "word": "cheap",
      "meaning": "murah",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w21",
      "word": "discount",
      "meaning": "diskon",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w22",
      "word": "sale",
      "meaning": "obral",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w23",
      "word": "promo",
      "meaning": "promosi",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w24",
      "word": "voucher",
      "meaning": "voucher",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w25",
      "word": "coupon",
      "meaning": "kupon",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w26",
      "word": "pay",
      "meaning": "membayar",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w27",
      "word": "payment",
      "meaning": "pembayaran",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w28",
      "word": "cash",
      "meaning": "tunai",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w32",
      "word": "receipt",
      "meaning": "struk",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w33",
      "word": "invoice",
      "meaning": "faktur",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w34",
      "word": "checkout",
      "meaning": "proses bayar",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w35",
      "word": "cart",
      "meaning": "keranjang belanja",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w36",
      "word": "basket",
      "meaning": "keranjang",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w37",
      "word": "bag",
      "meaning": "tas belanja",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w38",
      "word": "stock",
      "meaning": "stok",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w39",
      "word": "available",
      "meaning": "tersedia",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w41",
      "word": "size",
      "meaning": "ukuran",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w42",
      "word": "fit",
      "meaning": "pas",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w44",
      "word": "refund",
      "meaning": "pengembalian dana",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w45",
      "word": "return",
      "meaning": "mengembalikan barang",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w46",
      "word": "exchange",
      "meaning": "tukar barang",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w47",
      "word": "delivery",
      "meaning": "pengiriman",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w49",
      "word": "order",
      "meaning": "pesanan",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w50",
      "word": "track",
      "meaning": "melacak",
      "topicId": "shopping"
    }
  ],
  "size": [
    {
      "id": "size-w01",
      "word": "big",
      "meaning": "besar",
      "topicId": "size"
    },
    {
      "id": "size-w02",
      "word": "small",
      "meaning": "kecil",
      "topicId": "size"
    },
    {
      "id": "size-w03",
      "word": "large",
      "meaning": "besar",
      "topicId": "size"
    },
    {
      "id": "size-w04",
      "word": "tiny",
      "meaning": "sangat kecil",
      "topicId": "size"
    },
    {
      "id": "size-w05",
      "word": "huge",
      "meaning": "sangat besar",
      "topicId": "size"
    },
    {
      "id": "size-w06",
      "word": "little",
      "meaning": "kecil",
      "topicId": "size"
    },
    {
      "id": "size-w07",
      "word": "tall",
      "meaning": "tinggi",
      "topicId": "size"
    },
    {
      "id": "size-w08",
      "word": "short",
      "meaning": "pendek",
      "topicId": "size"
    },
    {
      "id": "size-w09",
      "word": "long",
      "meaning": "panjang",
      "topicId": "size"
    },
    {
      "id": "size-w10",
      "word": "wide",
      "meaning": "lebar",
      "topicId": "size"
    },
    {
      "id": "size-w11",
      "word": "narrow",
      "meaning": "sempit",
      "topicId": "size"
    },
    {
      "id": "size-w12",
      "word": "thick",
      "meaning": "tebal",
      "topicId": "size"
    },
    {
      "id": "size-w13",
      "word": "thin",
      "meaning": "tipis",
      "topicId": "size"
    },
    {
      "id": "size-w14",
      "word": "heavy",
      "meaning": "berat",
      "topicId": "size"
    },
    {
      "id": "size-w15",
      "word": "light",
      "meaning": "ringan",
      "topicId": "size"
    },
    {
      "id": "size-w16",
      "word": "deep",
      "meaning": "dalam",
      "topicId": "size"
    },
    {
      "id": "size-w17",
      "word": "shallow",
      "meaning": "dangkal",
      "topicId": "size"
    },
    {
      "id": "size-w18",
      "word": "high",
      "meaning": "tinggi",
      "topicId": "size"
    },
    {
      "id": "size-w19",
      "word": "low",
      "meaning": "rendah",
      "topicId": "size"
    },
    {
      "id": "size-w20",
      "word": "medium",
      "meaning": "sedang",
      "topicId": "size"
    },
    {
      "id": "size-w21",
      "word": "giant",
      "meaning": "raksasa",
      "topicId": "size"
    },
    {
      "id": "size-w22",
      "word": "mini",
      "meaning": "mini",
      "topicId": "size"
    },
    {
      "id": "size-w27",
      "word": "bigger",
      "meaning": "lebih besar",
      "topicId": "size"
    },
    {
      "id": "size-w28",
      "word": "smaller",
      "meaning": "lebih kecil",
      "topicId": "size"
    },
    {
      "id": "size-w29",
      "word": "longer",
      "meaning": "lebih panjang",
      "topicId": "size"
    },
    {
      "id": "size-w30",
      "word": "shorter",
      "meaning": "lebih pendek",
      "topicId": "size"
    },
    {
      "id": "size-w31",
      "word": "wider",
      "meaning": "lebih lebar",
      "topicId": "size"
    },
    {
      "id": "size-w32",
      "word": "narrower",
      "meaning": "lebih sempit",
      "topicId": "size"
    },
    {
      "id": "size-w33",
      "word": "taller",
      "meaning": "lebih tinggi",
      "topicId": "size"
    },
    {
      "id": "size-w34",
      "word": "lower",
      "meaning": "lebih rendah",
      "topicId": "size"
    },
    {
      "id": "size-w35",
      "word": "average",
      "meaning": "rata-rata",
      "topicId": "size"
    }
  ],
  "social-media": [
    {
      "id": "social-media-w02",
      "word": "platform",
      "meaning": "platform",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w03",
      "word": "account",
      "meaning": "akun",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w04",
      "word": "profile",
      "meaning": "profil",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w05",
      "word": "username",
      "meaning": "nama pengguna",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w06",
      "word": "password",
      "meaning": "kata sandi",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w07",
      "word": "login",
      "meaning": "masuk akun",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w08",
      "word": "logout",
      "meaning": "keluar akun",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w09",
      "word": "post",
      "meaning": "unggahan",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w10",
      "word": "upload",
      "meaning": "mengunggah",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w11",
      "word": "download",
      "meaning": "mengunduh",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w12",
      "word": "content",
      "meaning": "konten",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w13",
      "word": "creator",
      "meaning": "kreator",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w14",
      "word": "follower",
      "meaning": "pengikut",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w15",
      "word": "following",
      "meaning": "mengikuti",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w16",
      "word": "subscriber",
      "meaning": "subscriber",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w18",
      "word": "like",
      "meaning": "suka",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w19",
      "word": "comment",
      "meaning": "komentar",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w20",
      "word": "reply",
      "meaning": "balas",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w21",
      "word": "share",
      "meaning": "membagikan",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w22",
      "word": "repost",
      "meaning": "unggah ulang",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w23",
      "word": "story",
      "meaning": "story",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w25",
      "word": "video",
      "meaning": "video",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w26",
      "word": "photo",
      "meaning": "foto",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w27",
      "word": "caption",
      "meaning": "keterangan",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w28",
      "word": "hashtag",
      "meaning": "tagar",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w29",
      "word": "tag",
      "meaning": "menandai",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w30",
      "word": "mention",
      "meaning": "menyebut akun",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w31",
      "word": "notification",
      "meaning": "notifikasi",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w32",
      "word": "message",
      "meaning": "pesan",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w34",
      "word": "chat",
      "meaning": "obrolan",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w35",
      "word": "group",
      "meaning": "grup",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w36",
      "word": "community",
      "meaning": "komunitas",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w37",
      "word": "viral",
      "meaning": "viral",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w38",
      "word": "trending",
      "meaning": "tren",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w39",
      "word": "algorithm",
      "meaning": "algoritma",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w40",
      "word": "engagement",
      "meaning": "interaksi",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w41",
      "word": "reach",
      "meaning": "jangkauan",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w42",
      "word": "privacy",
      "meaning": "privasi",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w43",
      "word": "settings",
      "meaning": "pengaturan",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w46",
      "word": "block",
      "meaning": "memblokir",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w47",
      "word": "report",
      "meaning": "melaporkan",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w48",
      "word": "spam",
      "meaning": "spam",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w49",
      "word": "verified",
      "meaning": "terverifikasi",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w50",
      "word": "influencer",
      "meaning": "influencer",
      "topicId": "social-media"
    }
  ],
  "sports": [
    {
      "id": "sports-w01",
      "word": "sport",
      "meaning": "olahraga",
      "topicId": "sports"
    },
    {
      "id": "sports-w02",
      "word": "exercise",
      "meaning": "olahraga",
      "topicId": "sports"
    },
    {
      "id": "sports-w03",
      "word": "workout",
      "meaning": "latihan fisik",
      "topicId": "sports"
    },
    {
      "id": "sports-w04",
      "word": "training",
      "meaning": "latihan",
      "topicId": "sports"
    },
    {
      "id": "sports-w05",
      "word": "coach",
      "meaning": "pelatih",
      "topicId": "sports"
    },
    {
      "id": "sports-w06",
      "word": "player",
      "meaning": "pemain",
      "topicId": "sports"
    },
    {
      "id": "sports-w07",
      "word": "team",
      "meaning": "tim",
      "topicId": "sports"
    },
    {
      "id": "sports-w08",
      "word": "captain",
      "meaning": "kapten",
      "topicId": "sports"
    },
    {
      "id": "sports-w09",
      "word": "opponent",
      "meaning": "lawan",
      "topicId": "sports"
    },
    {
      "id": "sports-w10",
      "word": "referee",
      "meaning": "wasit",
      "topicId": "sports"
    },
    {
      "id": "sports-w11",
      "word": "match",
      "meaning": "pertandingan",
      "topicId": "sports"
    },
    {
      "id": "sports-w12",
      "word": "game",
      "meaning": "permainan",
      "topicId": "sports"
    },
    {
      "id": "sports-w13",
      "word": "competition",
      "meaning": "kompetisi",
      "topicId": "sports"
    },
    {
      "id": "sports-w14",
      "word": "tournament",
      "meaning": "turnamen",
      "topicId": "sports"
    },
    {
      "id": "sports-w15",
      "word": "score",
      "meaning": "skor",
      "topicId": "sports"
    },
    {
      "id": "sports-w16",
      "word": "goal",
      "meaning": "gol",
      "topicId": "sports"
    },
    {
      "id": "sports-w17",
      "word": "point",
      "meaning": "poin",
      "topicId": "sports"
    },
    {
      "id": "sports-w18",
      "word": "win",
      "meaning": "menang",
      "topicId": "sports"
    },
    {
      "id": "sports-w19",
      "word": "lose",
      "meaning": "kalah",
      "topicId": "sports"
    },
    {
      "id": "sports-w20",
      "word": "draw",
      "meaning": "seri",
      "topicId": "sports"
    },
    {
      "id": "sports-w21",
      "word": "football",
      "meaning": "sepak bola",
      "topicId": "sports"
    },
    {
      "id": "sports-w22",
      "word": "futsal",
      "meaning": "futsal",
      "topicId": "sports"
    },
    {
      "id": "sports-w23",
      "word": "basketball",
      "meaning": "bola basket",
      "topicId": "sports"
    },
    {
      "id": "sports-w24",
      "word": "volleyball",
      "meaning": "bola voli",
      "topicId": "sports"
    },
    {
      "id": "sports-w25",
      "word": "badminton",
      "meaning": "bulu tangkis",
      "topicId": "sports"
    },
    {
      "id": "sports-w26",
      "word": "tennis",
      "meaning": "tenis",
      "topicId": "sports"
    },
    {
      "id": "sports-w28",
      "word": "swimming",
      "meaning": "renang",
      "topicId": "sports"
    },
    {
      "id": "sports-w29",
      "word": "running",
      "meaning": "lari",
      "topicId": "sports"
    },
    {
      "id": "sports-w30",
      "word": "jogging",
      "meaning": "joging",
      "topicId": "sports"
    },
    {
      "id": "sports-w31",
      "word": "cycling",
      "meaning": "bersepeda",
      "topicId": "sports"
    },
    {
      "id": "sports-w32",
      "word": "gymnastics",
      "meaning": "senam",
      "topicId": "sports"
    },
    {
      "id": "sports-w33",
      "word": "yoga",
      "meaning": "yoga",
      "topicId": "sports"
    },
    {
      "id": "sports-w35",
      "word": "boxing",
      "meaning": "tinju",
      "topicId": "sports"
    },
    {
      "id": "sports-w36",
      "word": "baseball",
      "meaning": "bisbol",
      "topicId": "sports"
    },
    {
      "id": "sports-w37",
      "word": "softball",
      "meaning": "sofbol",
      "topicId": "sports"
    },
    {
      "id": "sports-w38",
      "word": "athletics",
      "meaning": "atletik",
      "topicId": "sports"
    },
    {
      "id": "sports-w39",
      "word": "field",
      "meaning": "lapangan",
      "topicId": "sports"
    },
    {
      "id": "sports-w40",
      "word": "court",
      "meaning": "lapangan",
      "topicId": "sports"
    },
    {
      "id": "sports-w41",
      "word": "stadium",
      "meaning": "stadion",
      "topicId": "sports"
    },
    {
      "id": "sports-w42",
      "word": "gym",
      "meaning": "gym",
      "topicId": "sports"
    },
    {
      "id": "sports-w43",
      "word": "uniform",
      "meaning": "seragam",
      "topicId": "sports"
    },
    {
      "id": "sports-w44",
      "word": "jersey",
      "meaning": "jersey",
      "topicId": "sports"
    },
    {
      "id": "sports-w45",
      "word": "shoes",
      "meaning": "sepatu olahraga",
      "topicId": "sports"
    },
    {
      "id": "sports-w46",
      "word": "ball",
      "meaning": "bola",
      "topicId": "sports"
    },
    {
      "id": "sports-w47",
      "word": "racket",
      "meaning": "raket",
      "topicId": "sports"
    },
    {
      "id": "sports-w48",
      "word": "whistle",
      "meaning": "peluit",
      "topicId": "sports"
    }
  ],
  "taste": [
    {
      "id": "taste-w01",
      "word": "taste",
      "meaning": "rasa",
      "topicId": "taste"
    },
    {
      "id": "taste-w02",
      "word": "flavor",
      "meaning": "cita rasa",
      "topicId": "taste"
    },
    {
      "id": "taste-w03",
      "word": "sweet",
      "meaning": "manis",
      "topicId": "taste"
    },
    {
      "id": "taste-w04",
      "word": "salty",
      "meaning": "asin",
      "topicId": "taste"
    },
    {
      "id": "taste-w05",
      "word": "sour",
      "meaning": "asam",
      "topicId": "taste"
    },
    {
      "id": "taste-w06",
      "word": "bitter",
      "meaning": "pahit",
      "topicId": "taste"
    },
    {
      "id": "taste-w07",
      "word": "spicy",
      "meaning": "pedas",
      "topicId": "taste"
    },
    {
      "id": "taste-w08",
      "word": "savory",
      "meaning": "gurih",
      "topicId": "taste"
    },
    {
      "id": "taste-w09",
      "word": "bland",
      "meaning": "hambar",
      "topicId": "taste"
    },
    {
      "id": "taste-w10",
      "word": "rich",
      "meaning": "kaya rasa",
      "topicId": "taste"
    },
    {
      "id": "taste-w11",
      "word": "light",
      "meaning": "ringan",
      "topicId": "taste"
    },
    {
      "id": "taste-w12",
      "word": "strong",
      "meaning": "kuat",
      "topicId": "taste"
    },
    {
      "id": "taste-w13",
      "word": "mild",
      "meaning": "tidak terlalu kuat",
      "topicId": "taste"
    },
    {
      "id": "taste-w14",
      "word": "fresh",
      "meaning": "segar",
      "topicId": "taste"
    },
    {
      "id": "taste-w15",
      "word": "smoky",
      "meaning": "berasap",
      "topicId": "taste"
    },
    {
      "id": "taste-w16",
      "word": "creamy",
      "meaning": "lembut dan creamy",
      "topicId": "taste"
    },
    {
      "id": "taste-w17",
      "word": "crispy",
      "meaning": "renyah",
      "topicId": "taste"
    },
    {
      "id": "taste-w18",
      "word": "crunchy",
      "meaning": "garing",
      "topicId": "taste"
    },
    {
      "id": "taste-w19",
      "word": "soft",
      "meaning": "lembut",
      "topicId": "taste"
    },
    {
      "id": "taste-w20",
      "word": "juicy",
      "meaning": "berair",
      "topicId": "taste"
    },
    {
      "id": "taste-w21",
      "word": "dry",
      "meaning": "kering",
      "topicId": "taste"
    },
    {
      "id": "taste-w22",
      "word": "oily",
      "meaning": "berminyak",
      "topicId": "taste"
    },
    {
      "id": "taste-w23",
      "word": "burnt",
      "meaning": "gosong",
      "topicId": "taste"
    },
    {
      "id": "taste-w24",
      "word": "raw",
      "meaning": "mentah",
      "topicId": "taste"
    },
    {
      "id": "taste-w25",
      "word": "ripe",
      "meaning": "matang",
      "topicId": "taste"
    },
    {
      "id": "taste-w26",
      "word": "overripe",
      "meaning": "terlalu matang",
      "topicId": "taste"
    },
    {
      "id": "taste-w27",
      "word": "delicious",
      "meaning": "lezat",
      "topicId": "taste"
    },
    {
      "id": "taste-w28",
      "word": "tasty",
      "meaning": "enak",
      "topicId": "taste"
    },
    {
      "id": "taste-w29",
      "word": "yummy",
      "meaning": "enak sekali",
      "topicId": "taste"
    },
    {
      "id": "taste-w30",
      "word": "appetizing",
      "meaning": "menggugah selera",
      "topicId": "taste"
    },
    {
      "id": "taste-w31",
      "word": "awful",
      "meaning": "tidak enak",
      "topicId": "taste"
    },
    {
      "id": "taste-w44",
      "word": "aftertaste",
      "meaning": "rasa setelah ditelan",
      "topicId": "taste"
    }
  ],
  "time-date": [
    {
      "id": "time-date-w01",
      "word": "time",
      "meaning": "waktu",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w02",
      "word": "date",
      "meaning": "tanggal",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w03",
      "word": "day",
      "meaning": "hari",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w04",
      "word": "week",
      "meaning": "minggu",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w05",
      "word": "month",
      "meaning": "bulan",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w06",
      "word": "year",
      "meaning": "tahun",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w07",
      "word": "hour",
      "meaning": "jam",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w08",
      "word": "minute",
      "meaning": "menit",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w09",
      "word": "second",
      "meaning": "detik",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w10",
      "word": "calendar",
      "meaning": "kalender",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w11",
      "word": "clock",
      "meaning": "jam dinding",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w12",
      "word": "watch",
      "meaning": "jam tangan",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w13",
      "word": "morning",
      "meaning": "pagi",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w14",
      "word": "afternoon",
      "meaning": "siang",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w15",
      "word": "evening",
      "meaning": "sore",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w16",
      "word": "night",
      "meaning": "malam",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w17",
      "word": "midnight",
      "meaning": "tengah malam",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w18",
      "word": "noon",
      "meaning": "tengah hari",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w19",
      "word": "dawn",
      "meaning": "fajar",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w20",
      "word": "sunrise",
      "meaning": "matahari terbit",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w21",
      "word": "sunset",
      "meaning": "matahari terbenam",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w22",
      "word": "weekday",
      "meaning": "hari kerja",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w23",
      "word": "weekend",
      "meaning": "akhir pekan",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w24",
      "word": "today",
      "meaning": "hari ini",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w25",
      "word": "tomorrow",
      "meaning": "besok",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w26",
      "word": "yesterday",
      "meaning": "kemarin",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w27",
      "word": "now",
      "meaning": "sekarang",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w28",
      "word": "later",
      "meaning": "nanti",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w29",
      "word": "soon",
      "meaning": "segera",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w30",
      "word": "early",
      "meaning": "lebih awal",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w31",
      "word": "late",
      "meaning": "terlambat",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w33",
      "word": "first",
      "meaning": "pertama",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w34",
      "word": "last",
      "meaning": "terakhir",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w35",
      "word": "next",
      "meaning": "berikutnya",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w36",
      "word": "previous",
      "meaning": "sebelumnya",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w37",
      "word": "Monday",
      "meaning": "Senin",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w38",
      "word": "Tuesday",
      "meaning": "Selasa",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w39",
      "word": "Wednesday",
      "meaning": "Rabu",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w40",
      "word": "Thursday",
      "meaning": "Kamis",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w41",
      "word": "Friday",
      "meaning": "Jumat",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w42",
      "word": "Saturday",
      "meaning": "Sabtu",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w43",
      "word": "Sunday",
      "meaning": "Minggu",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w44",
      "word": "January",
      "meaning": "Januari",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w45",
      "word": "February",
      "meaning": "Februari",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w46",
      "word": "March",
      "meaning": "Maret",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w47",
      "word": "April",
      "meaning": "April",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w48",
      "word": "May",
      "meaning": "Mei",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w49",
      "word": "June",
      "meaning": "Juni",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w50",
      "word": "July",
      "meaning": "Juli",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w51",
      "word": "August",
      "meaning": "Agustus",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w52",
      "word": "September",
      "meaning": "September",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w53",
      "word": "October",
      "meaning": "Oktober",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w54",
      "word": "November",
      "meaning": "November",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w55",
      "word": "December",
      "meaning": "Desember",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w56",
      "word": "spring",
      "meaning": "musim semi",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w57",
      "word": "summer",
      "meaning": "musim panas",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w58",
      "word": "autumn",
      "meaning": "musim gugur",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w59",
      "word": "winter",
      "meaning": "musim dingin",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w60",
      "word": "century",
      "meaning": "abad",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w61",
      "word": "decade",
      "meaning": "dekade",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w62",
      "word": "birthday",
      "meaning": "ulang tahun",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w63",
      "word": "holiday",
      "meaning": "hari libur",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w64",
      "word": "vacation",
      "meaning": "liburan",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w65",
      "word": "schedule",
      "meaning": "jadwal",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w66",
      "word": "appointment",
      "meaning": "janji",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w67",
      "word": "meeting",
      "meaning": "rapat",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w68",
      "word": "deadline",
      "meaning": "batas waktu",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w70",
      "word": "lunchtime",
      "meaning": "waktu makan siang",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w71",
      "word": "bedtime",
      "meaning": "waktu tidur",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w79",
      "word": "daily",
      "meaning": "setiap hari",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w80",
      "word": "weekly",
      "meaning": "setiap minggu",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w81",
      "word": "monthly",
      "meaning": "setiap bulan",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w82",
      "word": "yearly",
      "meaning": "setiap tahun",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w87",
      "word": "once",
      "meaning": "sekali",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w88",
      "word": "twice",
      "meaning": "dua kali",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w90",
      "word": "always",
      "meaning": "selalu",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w91",
      "word": "usually",
      "meaning": "biasanya",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w92",
      "word": "often",
      "meaning": "sering",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w93",
      "word": "sometimes",
      "meaning": "kadang-kadang",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w94",
      "word": "rarely",
      "meaning": "jarang",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w95",
      "word": "never",
      "meaning": "tidak pernah",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w96",
      "word": "before",
      "meaning": "sebelum",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w97",
      "word": "after",
      "meaning": "setelah",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w98",
      "word": "between",
      "meaning": "di antara",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w100",
      "word": "until",
      "meaning": "sampai",
      "topicId": "time-date"
    }
  ],
  "transport": [
    {
      "id": "transport-w01",
      "word": "transport",
      "meaning": "transportasi",
      "topicId": "transport"
    },
    {
      "id": "transport-w02",
      "word": "vehicle",
      "meaning": "kendaraan",
      "topicId": "transport"
    },
    {
      "id": "transport-w03",
      "word": "car",
      "meaning": "mobil",
      "topicId": "transport"
    },
    {
      "id": "transport-w04",
      "word": "taxi",
      "meaning": "taksi",
      "topicId": "transport"
    },
    {
      "id": "transport-w05",
      "word": "bus",
      "meaning": "bus",
      "topicId": "transport"
    },
    {
      "id": "transport-w06",
      "word": "minibus",
      "meaning": "minibus",
      "topicId": "transport"
    },
    {
      "id": "transport-w07",
      "word": "train",
      "meaning": "kereta",
      "topicId": "transport"
    },
    {
      "id": "transport-w08",
      "word": "subway",
      "meaning": "kereta bawah tanah",
      "topicId": "transport"
    },
    {
      "id": "transport-w09",
      "word": "tram",
      "meaning": "trem",
      "topicId": "transport"
    },
    {
      "id": "transport-w10",
      "word": "motorcycle",
      "meaning": "sepeda motor",
      "topicId": "transport"
    },
    {
      "id": "transport-w11",
      "word": "bike",
      "meaning": "sepeda",
      "topicId": "transport"
    },
    {
      "id": "transport-w12",
      "word": "scooter",
      "meaning": "skuter",
      "topicId": "transport"
    },
    {
      "id": "transport-w13",
      "word": "van",
      "meaning": "van",
      "topicId": "transport"
    },
    {
      "id": "transport-w14",
      "word": "truck",
      "meaning": "truk",
      "topicId": "transport"
    },
    {
      "id": "transport-w15",
      "word": "ship",
      "meaning": "kapal",
      "topicId": "transport"
    },
    {
      "id": "transport-w16",
      "word": "boat",
      "meaning": "perahu",
      "topicId": "transport"
    },
    {
      "id": "transport-w17",
      "word": "ferry",
      "meaning": "feri",
      "topicId": "transport"
    },
    {
      "id": "transport-w18",
      "word": "plane",
      "meaning": "pesawat",
      "topicId": "transport"
    },
    {
      "id": "transport-w19",
      "word": "airport",
      "meaning": "bandara",
      "topicId": "transport"
    },
    {
      "id": "transport-w20",
      "word": "station",
      "meaning": "stasiun",
      "topicId": "transport"
    },
    {
      "id": "transport-w21",
      "word": "terminal",
      "meaning": "terminal",
      "topicId": "transport"
    },
    {
      "id": "transport-w22",
      "word": "port",
      "meaning": "pelabuhan",
      "topicId": "transport"
    },
    {
      "id": "transport-w23",
      "word": "platform",
      "meaning": "peron",
      "topicId": "transport"
    },
    {
      "id": "transport-w25",
      "word": "ticket",
      "meaning": "tiket",
      "topicId": "transport"
    },
    {
      "id": "transport-w26",
      "word": "fare",
      "meaning": "tarif",
      "topicId": "transport"
    },
    {
      "id": "transport-w27",
      "word": "schedule",
      "meaning": "jadwal",
      "topicId": "transport"
    },
    {
      "id": "transport-w28",
      "word": "route",
      "meaning": "rute",
      "topicId": "transport"
    },
    {
      "id": "transport-w29",
      "word": "map",
      "meaning": "peta",
      "topicId": "transport"
    },
    {
      "id": "transport-w30",
      "word": "transfer",
      "meaning": "pindah jalur",
      "topicId": "transport"
    },
    {
      "id": "transport-w31",
      "word": "driver",
      "meaning": "pengemudi",
      "topicId": "transport"
    },
    {
      "id": "transport-w32",
      "word": "passenger",
      "meaning": "penumpang",
      "topicId": "transport"
    },
    {
      "id": "transport-w33",
      "word": "seat",
      "meaning": "kursi",
      "topicId": "transport"
    },
    {
      "id": "transport-w34",
      "word": "traffic",
      "meaning": "lalu lintas",
      "topicId": "transport"
    },
    {
      "id": "transport-w35",
      "word": "jam",
      "meaning": "kemacetan",
      "topicId": "transport"
    },
    {
      "id": "transport-w36",
      "word": "road",
      "meaning": "jalan",
      "topicId": "transport"
    },
    {
      "id": "transport-w37",
      "word": "street",
      "meaning": "jalan raya",
      "topicId": "transport"
    },
    {
      "id": "transport-w38",
      "word": "bridge",
      "meaning": "jembatan",
      "topicId": "transport"
    },
    {
      "id": "transport-w39",
      "word": "crosswalk",
      "meaning": "zebra cross",
      "topicId": "transport"
    },
    {
      "id": "transport-w40",
      "word": "signal",
      "meaning": "lampu lalu lintas",
      "topicId": "transport"
    },
    {
      "id": "transport-w41",
      "word": "parking",
      "meaning": "parkir",
      "topicId": "transport"
    },
    {
      "id": "transport-w42",
      "word": "garage",
      "meaning": "garasi",
      "topicId": "transport"
    },
    {
      "id": "transport-w44",
      "word": "license",
      "meaning": "surat izin mengemudi",
      "topicId": "transport"
    },
    {
      "id": "transport-w45",
      "word": "helmet",
      "meaning": "helm",
      "topicId": "transport"
    },
    {
      "id": "transport-w46",
      "word": "arrive",
      "meaning": "tiba",
      "topicId": "transport"
    },
    {
      "id": "transport-w47",
      "word": "depart",
      "meaning": "berangkat",
      "topicId": "transport"
    },
    {
      "id": "transport-w48",
      "word": "delay",
      "meaning": "tertunda",
      "topicId": "transport"
    },
    {
      "id": "transport-w49",
      "word": "early",
      "meaning": "lebih awal",
      "topicId": "transport"
    },
    {
      "id": "transport-w50",
      "word": "late",
      "meaning": "terlambat",
      "topicId": "transport"
    }
  ],
  "vegetables": [
    {
      "id": "vegetables-w01",
      "word": "vegetable",
      "meaning": "sayuran",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w02",
      "word": "carrot",
      "meaning": "wortel",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w03",
      "word": "potato",
      "meaning": "kentang",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w04",
      "word": "tomato",
      "meaning": "tomat",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w05",
      "word": "onion",
      "meaning": "bawang bombai",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w06",
      "word": "garlic",
      "meaning": "bawang putih",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w07",
      "word": "chili",
      "meaning": "cabai",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w08",
      "word": "spinach",
      "meaning": "bayam",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w09",
      "word": "cabbage",
      "meaning": "kol",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w10",
      "word": "lettuce",
      "meaning": "selada",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w11",
      "word": "broccoli",
      "meaning": "brokoli",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w12",
      "word": "cauliflower",
      "meaning": "kembang kol",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w13",
      "word": "cucumber",
      "meaning": "mentimun",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w14",
      "word": "eggplant",
      "meaning": "terong",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w15",
      "word": "zucchini",
      "meaning": "zucchini",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w16",
      "word": "pumpkin",
      "meaning": "labu",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w17",
      "word": "corn",
      "meaning": "jagung",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w18",
      "word": "pea",
      "meaning": "kacang polong",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w19",
      "word": "bean",
      "meaning": "kacang",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w22",
      "word": "soybean",
      "meaning": "kedelai",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w23",
      "word": "mushroom",
      "meaning": "jamur",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w24",
      "word": "celery",
      "meaning": "seledri",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w25",
      "word": "parsley",
      "meaning": "peterseli",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w26",
      "word": "leek",
      "meaning": "daun bawang prei",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w28",
      "word": "shallot",
      "meaning": "bawang merah",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w29",
      "word": "ginger",
      "meaning": "jahe",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w30",
      "word": "turmeric",
      "meaning": "kunyit",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w32",
      "word": "cassava",
      "meaning": "singkong",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w33",
      "word": "yam",
      "meaning": "ubi",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w34",
      "word": "radish",
      "meaning": "lobak",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w35",
      "word": "beetroot",
      "meaning": "bit",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w36",
      "word": "okra",
      "meaning": "okra",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w39",
      "word": "kale",
      "meaning": "kale",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w40",
      "word": "asparagus",
      "meaning": "asparagus",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w44",
      "word": "chayote",
      "meaning": "labu siam",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w46",
      "word": "fresh",
      "meaning": "segar",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w47",
      "word": "organic",
      "meaning": "organik",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w48",
      "word": "chop",
      "meaning": "memotong",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w49",
      "word": "boil",
      "meaning": "merebus",
      "topicId": "vegetables"
    }
  ],
  "weather": [
    {
      "id": "weather-w01",
      "word": "weather",
      "meaning": "cuaca",
      "topicId": "weather"
    },
    {
      "id": "weather-w02",
      "word": "temperature",
      "meaning": "suhu",
      "topicId": "weather"
    },
    {
      "id": "weather-w03",
      "word": "forecast",
      "meaning": "prakiraan cuaca",
      "topicId": "weather"
    },
    {
      "id": "weather-w04",
      "word": "climate",
      "meaning": "iklim",
      "topicId": "weather"
    },
    {
      "id": "weather-w05",
      "word": "season",
      "meaning": "musim",
      "topicId": "weather"
    },
    {
      "id": "weather-w06",
      "word": "sunny",
      "meaning": "cerah",
      "topicId": "weather"
    },
    {
      "id": "weather-w07",
      "word": "cloudy",
      "meaning": "berawan",
      "topicId": "weather"
    },
    {
      "id": "weather-w08",
      "word": "windy",
      "meaning": "berangin",
      "topicId": "weather"
    },
    {
      "id": "weather-w09",
      "word": "rainy",
      "meaning": "hujan",
      "topicId": "weather"
    },
    {
      "id": "weather-w10",
      "word": "stormy",
      "meaning": "badai",
      "topicId": "weather"
    },
    {
      "id": "weather-w11",
      "word": "foggy",
      "meaning": "berkabut",
      "topicId": "weather"
    },
    {
      "id": "weather-w12",
      "word": "humid",
      "meaning": "lembap",
      "topicId": "weather"
    },
    {
      "id": "weather-w13",
      "word": "dry",
      "meaning": "kering",
      "topicId": "weather"
    },
    {
      "id": "weather-w14",
      "word": "hot",
      "meaning": "panas",
      "topicId": "weather"
    },
    {
      "id": "weather-w15",
      "word": "warm",
      "meaning": "hangat",
      "topicId": "weather"
    },
    {
      "id": "weather-w16",
      "word": "cool",
      "meaning": "sejuk",
      "topicId": "weather"
    },
    {
      "id": "weather-w17",
      "word": "cold",
      "meaning": "dingin",
      "topicId": "weather"
    },
    {
      "id": "weather-w18",
      "word": "freezing",
      "meaning": "sangat dingin",
      "topicId": "weather"
    },
    {
      "id": "weather-w19",
      "word": "snow",
      "meaning": "salju",
      "topicId": "weather"
    },
    {
      "id": "weather-w20",
      "word": "rain",
      "meaning": "hujan",
      "topicId": "weather"
    },
    {
      "id": "weather-w21",
      "word": "drizzle",
      "meaning": "gerimis",
      "topicId": "weather"
    },
    {
      "id": "weather-w22",
      "word": "shower",
      "meaning": "hujan singkat",
      "topicId": "weather"
    },
    {
      "id": "weather-w23",
      "word": "thunder",
      "meaning": "guntur",
      "topicId": "weather"
    },
    {
      "id": "weather-w24",
      "word": "lightning",
      "meaning": "petir",
      "topicId": "weather"
    },
    {
      "id": "weather-w25",
      "word": "storm",
      "meaning": "badai",
      "topicId": "weather"
    },
    {
      "id": "weather-w26",
      "word": "wind",
      "meaning": "angin",
      "topicId": "weather"
    },
    {
      "id": "weather-w27",
      "word": "breeze",
      "meaning": "angin sepoi-sepoi",
      "topicId": "weather"
    },
    {
      "id": "weather-w28",
      "word": "gust",
      "meaning": "hembusan angin kencang",
      "topicId": "weather"
    },
    {
      "id": "weather-w29",
      "word": "hurricane",
      "meaning": "badai topan",
      "topicId": "weather"
    },
    {
      "id": "weather-w30",
      "word": "flood",
      "meaning": "banjir",
      "topicId": "weather"
    },
    {
      "id": "weather-w31",
      "word": "drought",
      "meaning": "kekeringan",
      "topicId": "weather"
    },
    {
      "id": "weather-w32",
      "word": "sun",
      "meaning": "matahari",
      "topicId": "weather"
    },
    {
      "id": "weather-w33",
      "word": "sunlight",
      "meaning": "sinar matahari",
      "topicId": "weather"
    },
    {
      "id": "weather-w34",
      "word": "sunrise",
      "meaning": "matahari terbit",
      "topicId": "weather"
    },
    {
      "id": "weather-w35",
      "word": "sunset",
      "meaning": "matahari terbenam",
      "topicId": "weather"
    },
    {
      "id": "weather-w36",
      "word": "cloud",
      "meaning": "awan",
      "topicId": "weather"
    },
    {
      "id": "weather-w37",
      "word": "sky",
      "meaning": "langit",
      "topicId": "weather"
    },
    {
      "id": "weather-w38",
      "word": "mist",
      "meaning": "kabut tipis",
      "topicId": "weather"
    },
    {
      "id": "weather-w39",
      "word": "ice",
      "meaning": "es",
      "topicId": "weather"
    },
    {
      "id": "weather-w40",
      "word": "frost",
      "meaning": "embun beku",
      "topicId": "weather"
    },
    {
      "id": "weather-w42",
      "word": "degree",
      "meaning": "derajat",
      "topicId": "weather"
    },
    {
      "id": "weather-w43",
      "word": "Celsius",
      "meaning": "Celsius",
      "topicId": "weather"
    },
    {
      "id": "weather-w44",
      "word": "umbrella",
      "meaning": "payung",
      "topicId": "weather"
    },
    {
      "id": "weather-w45",
      "word": "raincoat",
      "meaning": "jas hujan",
      "topicId": "weather"
    },
    {
      "id": "weather-w46",
      "word": "clear",
      "meaning": "cerah",
      "topicId": "weather"
    },
    {
      "id": "weather-w47",
      "word": "change",
      "meaning": "berubah",
      "topicId": "weather"
    },
    {
      "id": "weather-w48",
      "word": "sudden",
      "meaning": "tiba-tiba",
      "topicId": "weather"
    },
    {
      "id": "weather-w49",
      "word": "outside",
      "meaning": "di luar",
      "topicId": "weather"
    },
    {
      "id": "weather-w50",
      "word": "inside",
      "meaning": "di dalam",
      "topicId": "weather"
    }
  ]
};

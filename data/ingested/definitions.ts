import type { WordDefinition } from '../../types/ingested';

export const DEFINITION_TOPICS: string[] = [
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

export const DEFINITIONS_BY_TOPIC: Record<string, WordDefinition[]> = {
  "bathroom": [
    {
      "id": "bathroom-w01",
      "word": "bathroom",
      "definitionEn": "A room with a bathtub or shower, and usually a sink and toilet.",
      "definitionId": "Sebuah ruangan dengan bathtub atau shower, dan biasanya ada wastafel serta toilet.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w02",
      "word": "toilet",
      "definitionEn": "A fixture for urination and defecation, usually with a water-flushed bowl.",
      "definitionId": "Perlengkapan untuk buang air kecil dan besar, biasanya berupa mangkuk dengan siraman air.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w03",
      "word": "restroom",
      "definitionEn": "A public room with toilets and lavatories.",
      "definitionId": "Ruangan umum yang berisi toilet dan wastafel.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w04",
      "word": "washroom",
      "definitionEn": "A room with washing and toilet facilities.",
      "definitionId": "Ruangan dengan fasilitas cuci dan toilet.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w05",
      "word": "sink",
      "definitionEn": "A fixed basin with a drain and water supply for washing.",
      "definitionId": "Wastafel permanen dengan saluran pembuangan dan suplai air untuk mencuci.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w06",
      "word": "faucet",
      "definitionEn": "A fixture for drawing or regulating the flow of liquid from a pipe.",
      "definitionId": "Perlengkapan untuk menarik atau mengatur aliran cairan dari pipa.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w07",
      "word": "tap",
      "definitionEn": "A device with a spout and valve for controlling the flow of liquid.",
      "definitionId": "Perangkat dengan cerat dan katup untuk mengontrol aliran cairan.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w08",
      "word": "shower",
      "definitionEn": "A bath in which water is sprayed on the body.",
      "definitionId": "Mandi dengan air yang disemprotkan ke tubuh.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w09",
      "word": "bathtub",
      "definitionEn": "A fixed tub for bathing.",
      "definitionId": "Bak permanen untuk mandi berendam.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w10",
      "word": "bucket",
      "definitionEn": "A typically cylindrical container for carrying or holding liquids or solids.",
      "definitionId": "Wadah silinder untuk membawa atau menampung cairan atau benda.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w11",
      "word": "dipper",
      "definitionEn": "A long-handled cup used for dipping or ladling.",
      "definitionId": "Gayung bertangkai panjang untuk mengambil atau menimba air.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w12",
      "word": "drain",
      "definitionEn": "A pipe or channel by which liquid is carried away.",
      "definitionId": "Pipa atau saluran tempat cairan dialirkan keluar.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w13",
      "word": "mirror",
      "definitionEn": "A smooth surface (often glass) that forms images by reflection.",
      "definitionId": "Permukaan halus (sering kaca) yang memantulkan bayangan.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w14",
      "word": "toothbrush",
      "definitionEn": "A brush for cleaning the teeth.",
      "definitionId": "Sikat untuk membersihkan gigi.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w15",
      "word": "toothpaste",
      "definitionEn": "A paste used for cleaning the teeth.",
      "definitionId": "Pasta untuk membersihkan gigi.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w17",
      "word": "mouthwash",
      "definitionEn": "A liquid (often antiseptic) for cleaning the mouth and freshening breath.",
      "definitionId": "Cairan (sering antiseptik) untuk membersihkan mulut dan menyegarkan napas.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w18",
      "word": "soap",
      "definitionEn": "A cleansing agent made by the reaction of fats with an alkali.",
      "definitionId": "Bahan pembersih yang dibuat dari reaksi lemak dengan alkali.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w19",
      "word": "shampoo",
      "definitionEn": "A preparation for washing the hair.",
      "definitionId": "Sediaan untuk mencuci rambut.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w20",
      "word": "conditioner",
      "definitionEn": "A preparation used after shampooing to improve the condition of hair.",
      "definitionId": "Sediaan yang dipakai setelah sampo untuk memperbaiki kondisi rambut.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w23",
      "word": "lotion",
      "definitionEn": "A liquid preparation for cosmetic or medicinal use on the skin.",
      "definitionId": "Sediaan cair untuk penggunaan kosmetik atau medis pada kulit.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w24",
      "word": "deodorant",
      "definitionEn": "A preparation that removes or masks unpleasant odors, especially underarms.",
      "definitionId": "Sediaan yang menghilangkan atau menutupi bau tidak sedap, terutama di ketiak.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w25",
      "word": "perfume",
      "definitionEn": "A substance that emits a pleasant odor, especially a liquid preparation used for scenting.",
      "definitionId": "Zat beraroma harum, khususnya sediaan cair untuk memberi wangi.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w26",
      "word": "towel",
      "definitionEn": "An absorbent cloth or paper for wiping or drying.",
      "definitionId": "Kain atau kertas penyerap untuk mengelap atau mengeringkan.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w30",
      "word": "tissue",
      "definitionEn": "A piece of soft absorbent tissue paper used especially as a handkerchief or for removing cosmetics.",
      "definitionId": "Lembar tisu lembut penyerap, biasanya untuk sapu tangan atau menghapus kosmetik.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w32",
      "word": "shelf",
      "definitionEn": "A thin flat piece fastened horizontally to hold objects.",
      "definitionId": "Papan tipis datar yang dipasang horizontal untuk menaruh benda.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w33",
      "word": "cabinet",
      "definitionEn": "A case or cupboard usually having doors and shelves.",
      "definitionId": "Lemari atau kabinet yang biasanya berpintu dan bersusun rak.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w34",
      "word": "cleaner",
      "definitionEn": "A preparation for cleaning.",
      "definitionId": "Sediaan untuk membersihkan.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w35",
      "word": "disinfectant",
      "definitionEn": "An agent used to disinfect, especially a chemical agent used on hard surfaces or in water to destroy pathogens.",
      "definitionId": "Zat untuk mendisinfeksi, terutama bahan kimia pada permukaan keras atau air untuk membunuh patogen.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w36",
      "word": "brush",
      "definitionEn": "A device of bristles set into a handle used for sweeping, smoothing, scrubbing, or painting.",
      "definitionId": "Alat dengan bulu pada gagang untuk menyapu, menggosok, menghaluskan, atau mengecat.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w37",
      "word": "sponge",
      "definitionEn": "A porous piece used for cleaning and absorbing water.",
      "definitionId": "Bahan berpori untuk membersihkan dan menyerap air.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w38",
      "word": "mop",
      "definitionEn": "An implement of absorbent material fastened to a handle and used especially for cleaning floors.",
      "definitionId": "Alat dari bahan penyerap pada gagang, digunakan terutama untuk membersihkan lantai.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w39",
      "word": "wipe",
      "definitionEn": "To clean or dry by rubbing with something soft.",
      "definitionId": "Membersihkan atau mengeringkan dengan menggosok menggunakan sesuatu yang lembut.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w40",
      "word": "flush",
      "definitionEn": "To cleanse or wash out with a rush of liquid.",
      "definitionId": "Menyiram atau membersihkan dengan aliran cairan yang deras.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w41",
      "word": "wash",
      "definitionEn": "To clean by rubbing or dipping in water.",
      "definitionId": "Membersihkan dengan menggosok atau merendam dalam air.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w42",
      "word": "rinse",
      "definitionEn": "To cleanse by flushing with liquid (such as water).",
      "definitionId": "Membersihkan dengan membilas menggunakan cairan (seperti air).",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w43",
      "word": "dry",
      "definitionEn": "To make or become dry.",
      "definitionId": "Membuat atau menjadi kering.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w45",
      "word": "shave",
      "definitionEn": "To cut off hair or beard close to the skin.",
      "definitionId": "Memotong rambut atau janggut hingga dekat ke kulit.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w46",
      "word": "comb",
      "definitionEn": "A toothed instrument used especially for arranging or cleaning hair.",
      "definitionId": "Alat bergigi untuk menata atau membersihkan rambut.",
      "topicId": "bathroom"
    },
    {
      "id": "bathroom-w50",
      "word": "slippery",
      "definitionEn": "Causing or tending to cause something to slide or fall.",
      "definitionId": "Menyebabkan atau cenderung membuat sesuatu meluncur atau jatuh.",
      "topicId": "bathroom"
    }
  ],
  "body-parts": [
    {
      "id": "body-parts-w01",
      "word": "head",
      "definitionEn": "The upper part of the body that contains the brain, eyes, nose, mouth, and ears.",
      "definitionId": "Bagian atas tubuh yang berisi otak, mata, hidung, mulut, dan telinga.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w02",
      "word": "hair",
      "definitionEn": "Threadlike strands growing from the skin, especially on the head.",
      "definitionId": "Helai-helai seperti benang yang tumbuh dari kulit, terutama di kepala.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w03",
      "word": "forehead",
      "definitionEn": "The part of the face above the eyebrows.",
      "definitionId": "Bagian wajah di atas alis.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w04",
      "word": "face",
      "definitionEn": "The front part of the head from the forehead to the chin.",
      "definitionId": "Bagian depan kepala dari dahi sampai dagu.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w05",
      "word": "eyebrow",
      "definitionEn": "The arch of hair above the eye.",
      "definitionId": "Lengkung rambut di atas mata.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w06",
      "word": "eyelid",
      "definitionEn": "A movable fold of skin that covers and protects the eye.",
      "definitionId": "Lipatan kulit yang dapat bergerak untuk menutup dan melindungi mata.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w07",
      "word": "eyelash",
      "definitionEn": "One of the hairs growing along the edge of the eyelid.",
      "definitionId": "Salah satu rambut yang tumbuh di tepi kelopak mata.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w08",
      "word": "eye",
      "definitionEn": "The organ of sight.",
      "definitionId": "Organ untuk melihat.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w09",
      "word": "ear",
      "definitionEn": "The organ of hearing and balance.",
      "definitionId": "Organ untuk mendengar dan menjaga keseimbangan.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w10",
      "word": "cheek",
      "definitionEn": "The side of the face below the eye.",
      "definitionId": "Sisi wajah di bawah mata.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w11",
      "word": "nose",
      "definitionEn": "The part of the face used for smelling and breathing.",
      "definitionId": "Bagian wajah untuk mencium bau dan bernapas.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w12",
      "word": "nostril",
      "definitionEn": "An external opening of the nose.",
      "definitionId": "Lubang luar pada hidung.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w13",
      "word": "mouth",
      "definitionEn": "The natural opening for eating, bounded by the lips and enclosing the tongue, gums, and teeth.",
      "definitionId": "Bukaan alami untuk makan, dibatasi bibir dan berisi lidah, gusi, dan gigi.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w14",
      "word": "lip",
      "definitionEn": "Either of the two fleshy folds that surround the mouth and help with speech.",
      "definitionId": "Salah satu dari dua lipatan berdaging yang mengelilingi mulut dan membantu berbicara.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w15",
      "word": "tooth",
      "definitionEn": "One of the hard bony structures on the jaws used for biting and chewing.",
      "definitionId": "Salah satu struktur keras pada rahang untuk menggigit dan mengunyah.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w16",
      "word": "teeth",
      "definitionEn": "The plural of tooth; the hard structures in the jaws used for biting and chewing.",
      "definitionId": "Bentuk jamak dari tooth; struktur keras pada rahang untuk menggigit dan mengunyah.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w17",
      "word": "gum",
      "definitionEn": "The tissue that surrounds the necks of the teeth and covers the jawbone.",
      "definitionId": "Jaringan yang mengelilingi leher gigi dan menutupi tulang rahang.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w18",
      "word": "tongue",
      "definitionEn": "A movable muscular organ in the mouth used for taste, swallowing, and speech.",
      "definitionId": "Organ berotot yang dapat bergerak di mulut untuk mengecap, menelan, dan berbicara.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w19",
      "word": "chin",
      "definitionEn": "The lower part of the face below the lower lip, including the front of the jaw.",
      "definitionId": "Bagian bawah wajah di bawah bibir bawah, termasuk bagian depan rahang.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w20",
      "word": "jaw",
      "definitionEn": "Either of the two bony structures that form the mouth and usually bear the teeth.",
      "definitionId": "Salah satu dari dua tulang yang membentuk mulut dan biasanya menjadi tempat gigi.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w21",
      "word": "beard",
      "definitionEn": "The hair that grows on a man's face, often excluding the mustache.",
      "definitionId": "Rambut yang tumbuh di wajah pria, biasanya tidak termasuk kumis.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w22",
      "word": "mustache",
      "definitionEn": "The hair growing on the upper lip.",
      "definitionId": "Rambut yang tumbuh di atas bibir atas.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w23",
      "word": "neck",
      "definitionEn": "The part of the body that connects the head with the body.",
      "definitionId": "Bagian tubuh yang menghubungkan kepala dengan badan.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w24",
      "word": "throat",
      "definitionEn": "The passage through the neck to the stomach and lungs.",
      "definitionId": "Saluran di leher menuju lambung dan paru-paru.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w25",
      "word": "shoulder",
      "definitionEn": "The part of the body where the arm is connected to the trunk.",
      "definitionId": "Bagian tubuh tempat lengan terhubung ke badan.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w26",
      "word": "collarbone",
      "definitionEn": "The clavicle.",
      "definitionId": "Tulang selangka (klavikula).",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w27",
      "word": "chest",
      "definitionEn": "The part of the human body enclosed by the ribs and sternum.",
      "definitionId": "Bagian tubuh yang dikelilingi tulang rusuk dan tulang dada.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w28",
      "word": "breast",
      "definitionEn": "Either of the pair of mammary glands on the front of the chest.",
      "definitionId": "Salah satu dari sepasang kelenjar payudara di bagian depan dada.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w29",
      "word": "rib",
      "definitionEn": "Any of the paired curved bones that form the rib cage and protect the organs.",
      "definitionId": "Salah satu tulang melengkung berpasangan yang membentuk rongga dada dan melindungi organ.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w30",
      "word": "back",
      "definitionEn": "The rear part of the human body, especially from the neck to the end of the spine.",
      "definitionId": "Bagian belakang tubuh, terutama dari leher sampai ujung tulang belakang.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w31",
      "word": "waist",
      "definitionEn": "The narrowed part of the body between the hips and the chest.",
      "definitionId": "Bagian tubuh yang mengecil di antara pinggul dan dada.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w32",
      "word": "hip",
      "definitionEn": "The part of the body that curves outward below the waist, formed by the pelvis and upper thigh.",
      "definitionId": "Bagian tubuh yang menonjol di bawah pinggang, dibentuk oleh panggul dan paha atas.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w33",
      "word": "stomach",
      "definitionEn": "A pouch of the digestive system where food goes for mixing and digestion.",
      "definitionId": "Kantung pencernaan tempat makanan dicampur dan dicerna.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w34",
      "word": "belly",
      "definitionEn": "The abdomen; the front part of the body between the chest and pelvis.",
      "definitionId": "Perut; bagian depan tubuh di antara dada dan panggul.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w35",
      "word": "navel",
      "definitionEn": "A depression in the middle of the abdomen marking former attachment of the umbilical cord.",
      "definitionId": "Lekukan di tengah perut yang menandai bekas tali pusat.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w36",
      "word": "armpit",
      "definitionEn": "The hollow beneath the junction of the arm and shoulder.",
      "definitionId": "Lekukan di bawah pertemuan lengan dan bahu.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w37",
      "word": "skin",
      "definitionEn": "The outer covering of the body; the external tissue layer.",
      "definitionId": "Lapisan luar tubuh; jaringan luar yang menutupi tubuh.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w38",
      "word": "butt",
      "definitionEn": "The buttocks; the rear part of the body you sit on.",
      "definitionId": "Bokong; bagian belakang tubuh tempat duduk.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w39",
      "word": "arm",
      "definitionEn": "The part of the upper limb between the shoulder and the wrist.",
      "definitionId": "Bagian anggota tubuh atas antara bahu dan pergelangan tangan.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w41",
      "word": "forearm",
      "definitionEn": "The part of the arm between the elbow and the wrist.",
      "definitionId": "Bagian lengan antara siku dan pergelangan tangan.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w42",
      "word": "elbow",
      "definitionEn": "The joint between the upper and lower arm.",
      "definitionId": "Sendi antara lengan atas dan lengan bawah.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w43",
      "word": "wrist",
      "definitionEn": "The joint between the hand and the arm.",
      "definitionId": "Sendi antara tangan dan lengan.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w44",
      "word": "hand",
      "definitionEn": "The terminal part of the human arm used for grasping, including the palm and fingers.",
      "definitionId": "Bagian ujung lengan untuk menggenggam, termasuk telapak dan jari.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w45",
      "word": "palm",
      "definitionEn": "The somewhat concave inner surface of the hand between the fingers and the wrist.",
      "definitionId": "Permukaan dalam tangan yang agak cekung di antara jari dan pergelangan.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w46",
      "word": "finger",
      "definitionEn": "Any of the five digits of the hand other than the thumb.",
      "definitionId": "Salah satu dari lima jari tangan selain ibu jari.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w47",
      "word": "thumb",
      "definitionEn": "The short, thick first digit of the hand, opposite the other fingers.",
      "definitionId": "Jari pertama yang pendek dan tebal, berlawanan dengan jari lain.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w52",
      "word": "fingernail",
      "definitionEn": "The nail of a finger.",
      "definitionId": "Kuku pada jari tangan.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w53",
      "word": "knuckle",
      "definitionEn": "The rounded joint where the finger bones meet.",
      "definitionId": "Sendi bulat tempat tulang jari bertemu.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w54",
      "word": "leg",
      "definitionEn": "One of the paired limbs of a human, extending from the hip to the foot.",
      "definitionId": "Salah satu anggota gerak berpasangan dari pinggul hingga kaki.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w55",
      "word": "thigh",
      "definitionEn": "The part of the leg between the hip and the knee.",
      "definitionId": "Bagian kaki antara pinggul dan lutut.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w56",
      "word": "knee",
      "definitionEn": "The joint between the thigh and the lower leg.",
      "definitionId": "Sendi antara paha dan tungkai bawah.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w57",
      "word": "kneecap",
      "definitionEn": "A thick flat movable bone at the front of the knee (the patella).",
      "definitionId": "Tulang pipih tebal yang dapat bergerak di depan lutut (patela).",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w58",
      "word": "shin",
      "definitionEn": "The front part of the leg below the knee.",
      "definitionId": "Bagian depan kaki di bawah lutut.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w59",
      "word": "calf",
      "definitionEn": "The fleshy back part of the leg below the knee.",
      "definitionId": "Bagian belakang kaki yang berdaging di bawah lutut.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w60",
      "word": "ankle",
      "definitionEn": "The joint between the leg and the foot.",
      "definitionId": "Sendi antara kaki dan telapak kaki.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w61",
      "word": "heel",
      "definitionEn": "The back part of the foot below the ankle.",
      "definitionId": "Bagian belakang telapak kaki di bawah pergelangan.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w62",
      "word": "foot",
      "definitionEn": "The terminal part of the leg on which a person stands.",
      "definitionId": "Bagian ujung kaki tempat seseorang berdiri.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w63",
      "word": "sole",
      "definitionEn": "The undersurface of the foot.",
      "definitionId": "Bagian bawah telapak kaki.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w64",
      "word": "toe",
      "definitionEn": "One of the terminal digits of the foot.",
      "definitionId": "Salah satu jari pada kaki.",
      "topicId": "body-parts"
    },
    {
      "id": "body-parts-w67",
      "word": "toenail",
      "definitionEn": "The nail of a toe.",
      "definitionId": "Kuku pada jari kaki.",
      "topicId": "body-parts"
    }
  ],
  "clothes": [
    {
      "id": "clothes-w01",
      "word": "clothes",
      "definitionEn": "Garments worn to cover the body.",
      "definitionId": "Pakaian yang dipakai untuk menutupi tubuh.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w02",
      "word": "shirt",
      "definitionEn": "A garment for the upper body, usually with sleeves and a collar.",
      "definitionId": "Pakaian bagian atas, biasanya berlengan dan berkerah.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w04",
      "word": "blouse",
      "definitionEn": "A loose-fitting upper garment, especially for women.",
      "definitionId": "Pakaian atas yang longgar, terutama untuk perempuan.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w05",
      "word": "jacket",
      "definitionEn": "A garment for the upper body, usually with sleeves and open in front.",
      "definitionId": "Pakaian atas berlengan, biasanya terbuka di depan.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w06",
      "word": "coat",
      "definitionEn": "An outer garment with sleeves worn outdoors.",
      "definitionId": "Pakaian luar berlengan untuk dipakai di luar ruangan.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w07",
      "word": "sweater",
      "definitionEn": "A knitted garment for the upper body.",
      "definitionId": "Pakaian rajut untuk bagian atas tubuh.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w08",
      "word": "hoodie",
      "definitionEn": "A sweatshirt or jacket with a hood.",
      "definitionId": "Sweatshirt atau jaket dengan tudung.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w09",
      "word": "dress",
      "definitionEn": "A one-piece outer garment for women or girls with a bodice and skirt.",
      "definitionId": "Pakaian terusan untuk wanita atau anak perempuan dengan bagian atas dan rok.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w10",
      "word": "skirt",
      "definitionEn": "A garment hanging from the waist and covering the lower part of the body.",
      "definitionId": "Pakaian yang menggantung dari pinggang dan menutupi bagian bawah tubuh.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w11",
      "word": "jeans",
      "definitionEn": "Pants made of denim.",
      "definitionId": "Celana dari bahan denim.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w12",
      "word": "pants",
      "definitionEn": "A garment for the lower body with separate coverings for each leg.",
      "definitionId": "Pakaian bagian bawah dengan dua bagian untuk tiap kaki.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w13",
      "word": "shorts",
      "definitionEn": "Short pants.",
      "definitionId": "Celana pendek.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w14",
      "word": "socks",
      "definitionEn": "A knitted covering for the foot and lower part of the leg.",
      "definitionId": "Penutup rajut untuk kaki dan bagian bawah tungkai.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w15",
      "word": "shoes",
      "definitionEn": "An outer covering for the foot, usually with a sturdy sole.",
      "definitionId": "Penutup luar untuk kaki, biasanya dengan sol yang kuat.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w16",
      "word": "sneakers",
      "definitionEn": "Lightweight soft-soled shoes, often used for sports.",
      "definitionId": "Sepatu ringan bersol lunak, sering dipakai untuk olahraga.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w17",
      "word": "boots",
      "definitionEn": "Footwear that covers the foot and part of the leg, usually above the ankle.",
      "definitionId": "Alas kaki yang menutupi kaki dan sebagian tungkai, biasanya di atas pergelangan.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w18",
      "word": "sandals",
      "definitionEn": "Light shoes with a sole held to the foot by straps.",
      "definitionId": "Sepatu ringan dengan sol yang diikat ke kaki dengan tali.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w19",
      "word": "slippers",
      "definitionEn": "Light indoor footwear that slips on easily.",
      "definitionId": "Alas kaki ringan untuk dalam rumah yang mudah dipakai.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w20",
      "word": "hat",
      "definitionEn": "A covering for the head.",
      "definitionId": "Penutup kepala.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w21",
      "word": "cap",
      "definitionEn": "A head covering with a visor.",
      "definitionId": "Penutup kepala dengan visor.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w22",
      "word": "scarf",
      "definitionEn": "A long, narrow piece of cloth worn around the neck or head.",
      "definitionId": "Kain panjang dan sempit yang dipakai di leher atau kepala.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w23",
      "word": "gloves",
      "definitionEn": "Coverings for the hand with separate sections for each finger.",
      "definitionId": "Penutup tangan dengan bagian terpisah untuk tiap jari.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w24",
      "word": "belt",
      "definitionEn": "A strip of material worn around the waist to hold clothing.",
      "definitionId": "Pita atau band yang dipakai di pinggang untuk menahan pakaian.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w25",
      "word": "tie",
      "definitionEn": "A band of fabric worn around the neck, usually knotted at the front.",
      "definitionId": "Pita kain yang dipakai di leher dan biasanya diikat di depan.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w26",
      "word": "suit",
      "definitionEn": "A set of outer clothes, typically a jacket and trousers or skirt, made from the same material.",
      "definitionId": "Satu set pakaian luar, biasanya jaket dan celana atau rok, dari bahan yang sama.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w27",
      "word": "uniform",
      "definitionEn": "Clothing of a distinctive design worn by members of a group.",
      "definitionId": "Pakaian berdesain khas yang dipakai anggota suatu kelompok.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w28",
      "word": "pajamas",
      "definitionEn": "Loose clothing worn for sleeping.",
      "definitionId": "Pakaian longgar untuk tidur.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w29",
      "word": "underwear",
      "definitionEn": "Clothing worn next to the skin under outer clothes.",
      "definitionId": "Pakaian yang dipakai langsung di kulit di bawah pakaian luar.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w30",
      "word": "bra",
      "definitionEn": "A woman's undergarment that supports the breasts.",
      "definitionId": "Pakaian dalam wanita untuk menyangga payudara.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w31",
      "word": "pocket",
      "definitionEn": "A small pouch or bag, especially one sewn into a garment.",
      "definitionId": "Kantong kecil, terutama yang dijahit pada pakaian.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w32",
      "word": "zipper",
      "definitionEn": "A fastener made of two rows of interlocking teeth joined by a sliding piece.",
      "definitionId": "Pengancing dengan dua baris gigi yang saling mengunci dan disatukan oleh penggeser.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w33",
      "word": "button",
      "definitionEn": "A small disk or knob used as a fastener by passing through a buttonhole.",
      "definitionId": "Keping kecil yang digunakan sebagai pengancing dengan dimasukkan ke lubang kancing.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w34",
      "word": "sleeve",
      "definitionEn": "The part of a garment that covers all or part of the arm.",
      "definitionId": "Bagian pakaian yang menutupi sebagian atau seluruh lengan.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w35",
      "word": "collar",
      "definitionEn": "The band or fold of a garment around the neck.",
      "definitionId": "Pita atau lipatan pakaian di sekitar leher.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w36",
      "word": "size",
      "definitionEn": "The physical dimensions, magnitude, or extent of something.",
      "definitionId": "Ukuran atau dimensi fisik sesuatu.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w37",
      "word": "small",
      "definitionEn": "Having relatively little size or slight dimensions.",
      "definitionId": "Berukuran relatif kecil.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w38",
      "word": "medium",
      "definitionEn": "Being of intermediate size or degree.",
      "definitionId": "Berukuran sedang.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w39",
      "word": "large",
      "definitionEn": "Of great or considerable size.",
      "definitionId": "Berukuran besar.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w40",
      "word": "fit",
      "definitionEn": "To be of the right size or shape; suitable.",
      "definitionId": "Pas ukurannya; sesuai.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w41",
      "word": "loose",
      "definitionEn": "Not tight or snug.",
      "definitionId": "Tidak ketat; longgar.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w42",
      "word": "tight",
      "definitionEn": "Fastened or held firmly; not loose.",
      "definitionId": "Ketat; tidak longgar.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w43",
      "word": "clean",
      "definitionEn": "Free from dirt or impurities.",
      "definitionId": "Bebas dari kotoran atau najis.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w44",
      "word": "dirty",
      "definitionEn": "Not clean; covered with dirt or impurities.",
      "definitionId": "Tidak bersih; tertutup kotoran.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w45",
      "word": "new",
      "definitionEn": "Having recently come into existence; not old.",
      "definitionId": "Baru; belum lama ada.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w46",
      "word": "old",
      "definitionEn": "Having lived or existed for a long time; not new.",
      "definitionId": "Tua; sudah ada lama.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w47",
      "word": "fashionable",
      "definitionEn": "In the latest style; popular.",
      "definitionId": "Sedang mengikuti gaya terbaru; populer.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w48",
      "word": "casual",
      "definitionEn": "Not formal; relaxed.",
      "definitionId": "Tidak formal; santai.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w49",
      "word": "formal",
      "definitionEn": "Following established rules or suitable for official occasions.",
      "definitionId": "Sesuai aturan resmi atau untuk acara resmi.",
      "topicId": "clothes"
    },
    {
      "id": "clothes-w50",
      "word": "wear",
      "definitionEn": "To have on the body as clothing.",
      "definitionId": "Memakai di tubuh sebagai pakaian.",
      "topicId": "clothes"
    }
  ],
  "color": [
    {
      "id": "color-w01",
      "word": "red",
      "definitionEn": "A color like the color of blood or a ripe tomato.",
      "definitionId": "Warna seperti darah atau tomat yang matang.",
      "topicId": "color"
    },
    {
      "id": "color-w02",
      "word": "blue",
      "definitionEn": "A color like the clear sky or deep water.",
      "definitionId": "Warna seperti langit cerah atau air yang dalam.",
      "topicId": "color"
    },
    {
      "id": "color-w03",
      "word": "green",
      "definitionEn": "A color like grass or leaves.",
      "definitionId": "Warna seperti rumput atau daun.",
      "topicId": "color"
    },
    {
      "id": "color-w04",
      "word": "yellow",
      "definitionEn": "A bright color like the sun or a ripe banana.",
      "definitionId": "Warna cerah seperti matahari atau pisang matang.",
      "topicId": "color"
    },
    {
      "id": "color-w05",
      "word": "black",
      "definitionEn": "The darkest color, like the color of coal.",
      "definitionId": "Warna paling gelap, seperti warna batu bara.",
      "topicId": "color"
    },
    {
      "id": "color-w06",
      "word": "white",
      "definitionEn": "The lightest color, like fresh snow.",
      "definitionId": "Warna paling terang, seperti salju segar.",
      "topicId": "color"
    },
    {
      "id": "color-w07",
      "word": "brown",
      "definitionEn": "A dark color like wood or soil.",
      "definitionId": "Warna gelap seperti kayu atau tanah.",
      "topicId": "color"
    },
    {
      "id": "color-w08",
      "word": "gray",
      "definitionEn": "A color between black and white.",
      "definitionId": "Warna di antara hitam dan putih.",
      "topicId": "color"
    },
    {
      "id": "color-w09",
      "word": "orange",
      "definitionEn": "A color between red and yellow, like an orange fruit.",
      "definitionId": "Warna di antara merah dan kuning, seperti buah jeruk.",
      "topicId": "color"
    },
    {
      "id": "color-w10",
      "word": "pink",
      "definitionEn": "A light red color.",
      "definitionId": "Warna merah yang lebih muda.",
      "topicId": "color"
    },
    {
      "id": "color-w11",
      "word": "purple",
      "definitionEn": "A color between red and blue.",
      "definitionId": "Warna di antara merah dan biru.",
      "topicId": "color"
    },
    {
      "id": "color-w12",
      "word": "gold",
      "definitionEn": "A metallic yellow color like the metal gold.",
      "definitionId": "Warna kuning metalik seperti logam emas.",
      "topicId": "color"
    },
    {
      "id": "color-w13",
      "word": "silver",
      "definitionEn": "A metallic gray color like the metal silver.",
      "definitionId": "Warna abu-abu metalik seperti logam perak.",
      "topicId": "color"
    },
    {
      "id": "color-w14",
      "word": "navy",
      "definitionEn": "A very dark blue color.",
      "definitionId": "Warna biru yang sangat tua.",
      "topicId": "color"
    },
    {
      "id": "color-w15",
      "word": "beige",
      "definitionEn": "A light yellowish-brown color.",
      "definitionId": "Warna cokelat kekuningan yang muda.",
      "topicId": "color"
    },
    {
      "id": "color-w16",
      "word": "maroon",
      "definitionEn": "A dark reddish-brown color.",
      "definitionId": "Warna merah-cokelat yang gelap.",
      "topicId": "color"
    },
    {
      "id": "color-w17",
      "word": "turquoise",
      "definitionEn": "A blue-green color.",
      "definitionId": "Warna biru-hijau.",
      "topicId": "color"
    },
    {
      "id": "color-w18",
      "word": "violet",
      "definitionEn": "A bluish-purple color.",
      "definitionId": "Warna ungu kebiruan.",
      "topicId": "color"
    },
    {
      "id": "color-w19",
      "word": "cream",
      "definitionEn": "A pale yellowish-white color.",
      "definitionId": "Warna putih kekuningan yang pucat.",
      "topicId": "color"
    },
    {
      "id": "color-w20",
      "word": "olive",
      "definitionEn": "A dull yellowish-green color.",
      "definitionId": "Warna hijau kekuningan yang kusam.",
      "topicId": "color"
    }
  ],
  "daily-routines": [
    {
      "id": "daily-routines-w18",
      "word": "study",
      "definitionEn": "To apply the mind to learning or understanding.",
      "definitionId": "Menggunakan pikiran untuk belajar atau memahami sesuatu.",
      "topicId": "daily-routines"
    },
    {
      "id": "daily-routines-w25",
      "word": "exercise",
      "definitionEn": "Physical activity done to keep the body healthy or become stronger.",
      "definitionId": "Aktivitas fisik untuk menjaga tubuh tetap sehat atau menjadi lebih kuat.",
      "topicId": "daily-routines"
    },
    {
      "id": "daily-routines-w32",
      "word": "relax",
      "definitionEn": "To become less tense or anxious; to rest.",
      "definitionId": "Menjadi lebih rileks atau tidak tegang; beristirahat.",
      "topicId": "daily-routines"
    },
    {
      "id": "daily-routines-w33",
      "word": "pray",
      "definitionEn": "To speak to God, especially to give thanks or ask for help.",
      "definitionId": "Berbicara kepada Tuhan, terutama untuk bersyukur atau meminta bantuan.",
      "topicId": "daily-routines"
    },
    {
      "id": "daily-routines-w48",
      "word": "sleep",
      "definitionEn": "To be in a state of natural rest with eyes closed.",
      "definitionId": "Berada dalam keadaan istirahat alami dengan mata tertutup.",
      "topicId": "daily-routines"
    }
  ],
  "drinks": [
    {
      "id": "drinks-w01",
      "word": "drink",
      "definitionEn": "A liquid for drinking.",
      "definitionId": "Cairan untuk diminum.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w02",
      "word": "water",
      "definitionEn": "A clear liquid with no color, smell, or taste that is essential for life.",
      "definitionId": "Cairan bening tanpa warna, bau, atau rasa yang penting untuk kehidupan.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w05",
      "word": "tea",
      "definitionEn": "A drink made by soaking dried tea leaves in hot water.",
      "definitionId": "Minuman yang dibuat dengan menyeduh daun teh kering dalam air panas.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w09",
      "word": "coffee",
      "definitionEn": "A drink made from roasted coffee beans.",
      "definitionId": "Minuman yang dibuat dari biji kopi sangrai.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w11",
      "word": "latte",
      "definitionEn": "A coffee drink made with espresso and steamed milk.",
      "definitionId": "Minuman kopi dari espresso dan susu yang dikukus.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w12",
      "word": "cappuccino",
      "definitionEn": "A coffee drink with espresso, steamed milk, and foam.",
      "definitionId": "Minuman kopi dengan espresso, susu kukus, dan busa.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w13",
      "word": "milk",
      "definitionEn": "A white liquid produced by mammals, used as a drink.",
      "definitionId": "Cairan putih yang dihasilkan mamalia, digunakan sebagai minuman.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w17",
      "word": "juice",
      "definitionEn": "Liquid from fruits or vegetables.",
      "definitionId": "Cairan dari buah-buahan atau sayuran.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w21",
      "word": "smoothie",
      "definitionEn": "A thick drink made by blending fruit with liquid.",
      "definitionId": "Minuman kental dari buah yang diblender dengan cairan.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w22",
      "word": "shake",
      "definitionEn": "A thick drink made from milk, ice cream, and flavoring.",
      "definitionId": "Minuman kental dari susu, es krim, dan perasa.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w23",
      "word": "soda",
      "definitionEn": "A sweet carbonated drink.",
      "definitionId": "Minuman manis berkarbonasi.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w24",
      "word": "cola",
      "definitionEn": "A sweet carbonated drink with cola flavor.",
      "definitionId": "Minuman manis berkarbonasi dengan rasa cola.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w31",
      "word": "ice",
      "definitionEn": "Frozen water.",
      "definitionId": "Air yang membeku.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w35",
      "word": "matcha",
      "definitionEn": "Powdered green tea used to make a drink.",
      "definitionId": "Teh hijau bubuk yang digunakan untuk membuat minuman.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w36",
      "word": "espresso",
      "definitionEn": "Strong coffee made by forcing hot water through finely ground coffee.",
      "definitionId": "Kopi kental yang dibuat dengan menekan air panas melalui kopi bubuk halus.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w37",
      "word": "americano",
      "definitionEn": "Coffee made by adding hot water to espresso.",
      "definitionId": "Kopi yang dibuat dengan menambahkan air panas ke espresso.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w39",
      "word": "syrup",
      "definitionEn": "A thick sweet liquid, often flavored.",
      "definitionId": "Cairan manis kental, sering diberi rasa.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w40",
      "word": "sweet",
      "definitionEn": "Having the taste of sugar.",
      "definitionId": "Memiliki rasa gula.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w41",
      "word": "bitter",
      "definitionEn": "Having a sharp, often unpleasant taste; not sweet.",
      "definitionId": "Memiliki rasa tajam, sering tidak enak; tidak manis.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w42",
      "word": "fresh",
      "definitionEn": "Newly made; not stale.",
      "definitionId": "Baru dibuat; tidak basi.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w43",
      "word": "thirsty",
      "definitionEn": "Needing or wanting to drink.",
      "definitionId": "Membutuhkan atau ingin minum.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w44",
      "word": "bottle",
      "definitionEn": "A container with a narrow neck for liquids.",
      "definitionId": "Wadah berleher sempit untuk cairan.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w45",
      "word": "cup",
      "definitionEn": "A small open container used for drinking.",
      "definitionId": "Wadah kecil terbuka untuk minum.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w46",
      "word": "glass",
      "definitionEn": "A drinking container made of glass.",
      "definitionId": "Wadah minum yang terbuat dari kaca.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w47",
      "word": "can",
      "definitionEn": "A metal container used for drinks.",
      "definitionId": "Wadah logam untuk minuman.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w48",
      "word": "straw",
      "definitionEn": "A tube used for sipping drinks.",
      "definitionId": "Pipa kecil untuk menyeruput minuman.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w49",
      "word": "sip",
      "definitionEn": "To drink in small amounts.",
      "definitionId": "Minum dalam jumlah kecil.",
      "topicId": "drinks"
    },
    {
      "id": "drinks-w50",
      "word": "refill",
      "definitionEn": "To fill again.",
      "definitionId": "Mengisi lagi.",
      "topicId": "drinks"
    }
  ],
  "education": [
    {
      "id": "education-w01",
      "word": "education",
      "definitionEn": "The process of teaching or learning, especially in schools.",
      "definitionId": "Proses mengajar atau belajar, terutama di sekolah.",
      "topicId": "education"
    },
    {
      "id": "education-w02",
      "word": "learn",
      "definitionEn": "To gain knowledge or skill.",
      "definitionId": "Mendapatkan pengetahuan atau keterampilan.",
      "topicId": "education"
    },
    {
      "id": "education-w03",
      "word": "study",
      "definitionEn": "To apply the mind to learn or understand.",
      "definitionId": "Menggunakan pikiran untuk belajar atau memahami.",
      "topicId": "education"
    },
    {
      "id": "education-w04",
      "word": "teach",
      "definitionEn": "To cause someone to learn by giving instruction.",
      "definitionId": "Membuat seseorang belajar dengan memberikan instruksi.",
      "topicId": "education"
    },
    {
      "id": "education-w05",
      "word": "teacher",
      "definitionEn": "A person who teaches.",
      "definitionId": "Orang yang mengajar.",
      "topicId": "education"
    },
    {
      "id": "education-w06",
      "word": "student",
      "definitionEn": "A person who studies at a school or college.",
      "definitionId": "Orang yang belajar di sekolah atau perguruan tinggi.",
      "topicId": "education"
    },
    {
      "id": "education-w07",
      "word": "school",
      "definitionEn": "A place where students are taught.",
      "definitionId": "Tempat siswa diajar.",
      "topicId": "education"
    },
    {
      "id": "education-w08",
      "word": "class",
      "definitionEn": "A group of students who are taught together.",
      "definitionId": "Sekelompok siswa yang diajar bersama.",
      "topicId": "education"
    },
    {
      "id": "education-w09",
      "word": "classroom",
      "definitionEn": "A room where a class is taught.",
      "definitionId": "Ruangan tempat kelas diajar.",
      "topicId": "education"
    },
    {
      "id": "education-w10",
      "word": "lesson",
      "definitionEn": "A unit of teaching.",
      "definitionId": "Satu unit pengajaran.",
      "topicId": "education"
    },
    {
      "id": "education-w11",
      "word": "subject",
      "definitionEn": "A branch of knowledge taught in school.",
      "definitionId": "Cabang pengetahuan yang diajarkan di sekolah.",
      "topicId": "education"
    },
    {
      "id": "education-w12",
      "word": "curriculum",
      "definitionEn": "The subjects and content taught in a school or course.",
      "definitionId": "Mata pelajaran dan materi yang diajarkan di sekolah atau kursus.",
      "topicId": "education"
    },
    {
      "id": "education-w13",
      "word": "syllabus",
      "definitionEn": "An outline of topics in a course.",
      "definitionId": "Garis besar topik-topik dalam suatu kursus.",
      "topicId": "education"
    },
    {
      "id": "education-w14",
      "word": "homework",
      "definitionEn": "School work assigned to be done at home.",
      "definitionId": "Pekerjaan sekolah yang diberikan untuk dikerjakan di rumah.",
      "topicId": "education"
    },
    {
      "id": "education-w15",
      "word": "assignment",
      "definitionEn": "A task given to students.",
      "definitionId": "Tugas yang diberikan kepada siswa.",
      "topicId": "education"
    },
    {
      "id": "education-w16",
      "word": "project",
      "definitionEn": "A planned piece of work, often for study.",
      "definitionId": "Kegiatan kerja yang direncanakan, sering untuk belajar.",
      "topicId": "education"
    },
    {
      "id": "education-w17",
      "word": "presentation",
      "definitionEn": "A talk or demonstration given to an audience.",
      "definitionId": "Pemaparan atau presentasi yang diberikan kepada audiens.",
      "topicId": "education"
    },
    {
      "id": "education-w18",
      "word": "discussion",
      "definitionEn": "A conversation about a topic.",
      "definitionId": "Percakapan atau pembahasan tentang suatu topik.",
      "topicId": "education"
    },
    {
      "id": "education-w19",
      "word": "question",
      "definitionEn": "A sentence asking for information.",
      "definitionId": "Kalimat yang meminta informasi.",
      "topicId": "education"
    },
    {
      "id": "education-w20",
      "word": "answer",
      "definitionEn": "A response to a question.",
      "definitionId": "Tanggapan atas sebuah pertanyaan.",
      "topicId": "education"
    },
    {
      "id": "education-w21",
      "word": "test",
      "definitionEn": "A set of questions to measure knowledge.",
      "definitionId": "Sekumpulan pertanyaan untuk mengukur pengetahuan.",
      "topicId": "education"
    },
    {
      "id": "education-w22",
      "word": "quiz",
      "definitionEn": "A short test.",
      "definitionId": "Tes singkat.",
      "topicId": "education"
    },
    {
      "id": "education-w23",
      "word": "exam",
      "definitionEn": "A formal test of knowledge.",
      "definitionId": "Tes resmi untuk mengukur pengetahuan.",
      "topicId": "education"
    },
    {
      "id": "education-w24",
      "word": "grade",
      "definitionEn": "A mark or level given for school work.",
      "definitionId": "Nilai atau tingkat yang diberikan untuk pekerjaan sekolah.",
      "topicId": "education"
    },
    {
      "id": "education-w25",
      "word": "score",
      "definitionEn": "A number of points earned in a test or game.",
      "definitionId": "Jumlah poin yang diperoleh dalam tes atau permainan.",
      "topicId": "education"
    },
    {
      "id": "education-w26",
      "word": "pass",
      "definitionEn": "To succeed in a test or course.",
      "definitionId": "Berhasil dalam tes atau mata pelajaran.",
      "topicId": "education"
    },
    {
      "id": "education-w27",
      "word": "fail",
      "definitionEn": "To be unsuccessful in a test or course.",
      "definitionId": "Tidak berhasil dalam tes atau mata pelajaran.",
      "topicId": "education"
    },
    {
      "id": "education-w28",
      "word": "certificate",
      "definitionEn": "An official document showing a qualification.",
      "definitionId": "Dokumen resmi yang menunjukkan kualifikasi.",
      "topicId": "education"
    },
    {
      "id": "education-w29",
      "word": "diploma",
      "definitionEn": "A document showing completion of a course of study.",
      "definitionId": "Dokumen yang menunjukkan penyelesaian suatu program studi.",
      "topicId": "education"
    },
    {
      "id": "education-w30",
      "word": "degree",
      "definitionEn": "An academic title given by a college or university.",
      "definitionId": "Gelar akademik yang diberikan oleh perguruan tinggi atau universitas.",
      "topicId": "education"
    },
    {
      "id": "education-w31",
      "word": "college",
      "definitionEn": "A school for higher education.",
      "definitionId": "Sekolah untuk pendidikan tinggi.",
      "topicId": "education"
    },
    {
      "id": "education-w32",
      "word": "university",
      "definitionEn": "An institution of higher education with multiple fields of study.",
      "definitionId": "Lembaga pendidikan tinggi dengan banyak bidang studi.",
      "topicId": "education"
    },
    {
      "id": "education-w33",
      "word": "campus",
      "definitionEn": "The grounds of a university or college.",
      "definitionId": "Area atau lingkungan kampus perguruan tinggi.",
      "topicId": "education"
    },
    {
      "id": "education-w34",
      "word": "major",
      "definitionEn": "A main subject of study in college.",
      "definitionId": "Bidang studi utama di perguruan tinggi.",
      "topicId": "education"
    },
    {
      "id": "education-w35",
      "word": "minor",
      "definitionEn": "A secondary subject of study in college.",
      "definitionId": "Bidang studi tambahan di perguruan tinggi.",
      "topicId": "education"
    },
    {
      "id": "education-w36",
      "word": "semester",
      "definitionEn": "One of two main parts of an academic year.",
      "definitionId": "Salah satu dari dua bagian utama dalam satu tahun akademik.",
      "topicId": "education"
    },
    {
      "id": "education-w38",
      "word": "schedule",
      "definitionEn": "A plan listing times of events or classes.",
      "definitionId": "Rencana yang mencantumkan waktu kegiatan atau kelas.",
      "topicId": "education"
    },
    {
      "id": "education-w39",
      "word": "attendance",
      "definitionEn": "The act of being present at school or class.",
      "definitionId": "Tindakan hadir di sekolah atau kelas.",
      "topicId": "education"
    },
    {
      "id": "education-w40",
      "word": "absent",
      "definitionEn": "Not present.",
      "definitionId": "Tidak hadir.",
      "topicId": "education"
    },
    {
      "id": "education-w41",
      "word": "library",
      "definitionEn": "A place where books are kept for reading or borrowing.",
      "definitionId": "Tempat buku-buku disimpan untuk dibaca atau dipinjam.",
      "topicId": "education"
    },
    {
      "id": "education-w42",
      "word": "laboratory",
      "definitionEn": "A room used for scientific work or experiments.",
      "definitionId": "Ruangan untuk pekerjaan atau percobaan ilmiah.",
      "topicId": "education"
    },
    {
      "id": "education-w43",
      "word": "notebook",
      "definitionEn": "A book of blank pages for notes.",
      "definitionId": "Buku berisi halaman kosong untuk catatan.",
      "topicId": "education"
    },
    {
      "id": "education-w44",
      "word": "textbook",
      "definitionEn": "A book used for teaching a subject.",
      "definitionId": "Buku yang digunakan untuk mengajar suatu mata pelajaran.",
      "topicId": "education"
    },
    {
      "id": "education-w45",
      "word": "dictionary",
      "definitionEn": "A book listing words and their meanings.",
      "definitionId": "Buku yang berisi daftar kata dan artinya.",
      "topicId": "education"
    },
    {
      "id": "education-w46",
      "word": "research",
      "definitionEn": "Careful study to discover facts or knowledge.",
      "definitionId": "Kajian yang cermat untuk menemukan fakta atau pengetahuan.",
      "topicId": "education"
    },
    {
      "id": "education-w47",
      "word": "scholarship",
      "definitionEn": "Money given to support a student's education.",
      "definitionId": "Uang bantuan untuk mendukung pendidikan siswa.",
      "topicId": "education"
    },
    {
      "id": "education-w49",
      "word": "graduation",
      "definitionEn": "The completion of a course of study; a ceremony.",
      "definitionId": "Penyelesaian program studi; juga upacara wisuda.",
      "topicId": "education"
    },
    {
      "id": "education-w50",
      "word": "graduate",
      "definitionEn": "To complete a course of study; also a person who has completed it.",
      "definitionId": "Menyelesaikan program studi; juga orang yang telah menyelesaikannya.",
      "topicId": "education"
    }
  ],
  "electronics": [
    {
      "id": "electronics-w01",
      "word": "electronics",
      "definitionEn": "Devices or systems that use electricity and electronic circuits.",
      "definitionId": "Perangkat atau sistem yang menggunakan listrik dan rangkaian elektronik.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w02",
      "word": "device",
      "definitionEn": "A tool or piece of equipment made for a particular purpose.",
      "definitionId": "Alat atau perlengkapan yang dibuat untuk tujuan tertentu.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w03",
      "word": "gadget",
      "definitionEn": "A small device or tool, often electronic.",
      "definitionId": "Perangkat kecil atau alat, sering bersifat elektronik.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w04",
      "word": "machine",
      "definitionEn": "A device with moving parts that does work.",
      "definitionId": "Perangkat dengan bagian bergerak yang melakukan pekerjaan.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w05",
      "word": "appliance",
      "definitionEn": "A device for a particular task, especially in the home.",
      "definitionId": "Perangkat untuk tugas tertentu, terutama di rumah.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w06",
      "word": "phone",
      "definitionEn": "A device for making and receiving calls.",
      "definitionId": "Perangkat untuk membuat dan menerima panggilan.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w07",
      "word": "smartphone",
      "definitionEn": "A phone with advanced computing functions.",
      "definitionId": "Telepon dengan fungsi komputasi yang canggih.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w09",
      "word": "tablet",
      "definitionEn": "A portable computer with a touchscreen.",
      "definitionId": "Komputer portabel dengan layar sentuh.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w10",
      "word": "laptop",
      "definitionEn": "A portable computer that folds.",
      "definitionId": "Komputer portabel yang bisa dilipat.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w11",
      "word": "computer",
      "definitionEn": "An electronic device that processes data.",
      "definitionId": "Perangkat elektronik yang memproses data.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w12",
      "word": "desktop",
      "definitionEn": "A computer designed to be used on a desk.",
      "definitionId": "Komputer yang dirancang untuk digunakan di meja.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w13",
      "word": "monitor",
      "definitionEn": "A screen used to display computer output.",
      "definitionId": "Layar yang digunakan untuk menampilkan keluaran komputer.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w14",
      "word": "screen",
      "definitionEn": "The surface on which images are displayed.",
      "definitionId": "Permukaan tempat gambar ditampilkan.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w15",
      "word": "keyboard",
      "definitionEn": "A set of keys used to type.",
      "definitionId": "Sekumpulan tombol untuk mengetik.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w16",
      "word": "mouse",
      "definitionEn": "A hand-held device used to control a pointer on a screen.",
      "definitionId": "Perangkat genggam untuk menggerakkan penunjuk di layar.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w17",
      "word": "printer",
      "definitionEn": "A device that produces text or images on paper.",
      "definitionId": "Perangkat yang menghasilkan teks atau gambar di kertas.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w18",
      "word": "scanner",
      "definitionEn": "A device that copies images or text into a computer.",
      "definitionId": "Perangkat yang menyalin gambar atau teks ke komputer.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w19",
      "word": "camera",
      "definitionEn": "A device for taking photographs.",
      "definitionId": "Perangkat untuk mengambil foto.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w20",
      "word": "webcam",
      "definitionEn": "A camera that records or streams video on a computer.",
      "definitionId": "Kamera yang merekam atau menayangkan video di komputer.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w21",
      "word": "microphone",
      "definitionEn": "A device that converts sound into electrical signals.",
      "definitionId": "Perangkat yang mengubah suara menjadi sinyal listrik.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w22",
      "word": "speaker",
      "definitionEn": "A device that converts electrical signals into sound.",
      "definitionId": "Perangkat yang mengubah sinyal listrik menjadi suara.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w23",
      "word": "headphones",
      "definitionEn": "A pair of small speakers worn over the ears.",
      "definitionId": "Sepasang pengeras suara kecil yang dipakai di telinga.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w24",
      "word": "earphones",
      "definitionEn": "Small speakers worn inside the ears.",
      "definitionId": "Pengeras suara kecil yang dipakai di dalam telinga.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w25",
      "word": "charger",
      "definitionEn": "A device for charging a battery.",
      "definitionId": "Perangkat untuk mengisi daya baterai.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w27",
      "word": "battery",
      "definitionEn": "A device that stores electrical energy.",
      "definitionId": "Perangkat yang menyimpan energi listrik.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w29",
      "word": "socket",
      "definitionEn": "A receptacle for a plug; an electrical outlet.",
      "definitionId": "Tempat memasukkan colokan; stopkontak listrik.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w30",
      "word": "plug",
      "definitionEn": "A device with prongs that connects to a socket.",
      "definitionId": "Perangkat berkaki logam yang terhubung ke stopkontak.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w31",
      "word": "switch",
      "definitionEn": "A device that turns electricity on or off.",
      "definitionId": "Perangkat untuk menyalakan atau mematikan listrik.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w33",
      "word": "television",
      "definitionEn": "A device for receiving and displaying broadcasts.",
      "definitionId": "Perangkat untuk menerima dan menampilkan siaran.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w35",
      "word": "radio",
      "definitionEn": "A device that receives broadcast audio.",
      "definitionId": "Perangkat yang menerima siaran audio.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w36",
      "word": "router",
      "definitionEn": "A device that directs data between networks.",
      "definitionId": "Perangkat yang mengarahkan data antar jaringan.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w38",
      "word": "Bluetooth",
      "definitionEn": "A short-range wireless technology.",
      "definitionId": "Teknologi nirkabel jarak dekat.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w42",
      "word": "software",
      "definitionEn": "Programs used by a computer.",
      "definitionId": "Program yang digunakan oleh komputer.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w43",
      "word": "app",
      "definitionEn": "A software program, especially for a phone.",
      "definitionId": "Program perangkat lunak, terutama untuk ponsel.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w44",
      "word": "update",
      "definitionEn": "A new version or improvement of software.",
      "definitionId": "Versi baru atau peningkatan perangkat lunak.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w45",
      "word": "download",
      "definitionEn": "To transfer data from the internet to a device.",
      "definitionId": "Memindahkan data dari internet ke perangkat.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w46",
      "word": "upload",
      "definitionEn": "To transfer data from a device to the internet.",
      "definitionId": "Memindahkan data dari perangkat ke internet.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w47",
      "word": "connect",
      "definitionEn": "To join or link.",
      "definitionId": "Menghubungkan atau menyatukan.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w48",
      "word": "disconnect",
      "definitionEn": "To break a connection.",
      "definitionId": "Memutuskan sebuah koneksi.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w49",
      "word": "repair",
      "definitionEn": "To fix something broken.",
      "definitionId": "Memperbaiki sesuatu yang rusak.",
      "topicId": "electronics"
    },
    {
      "id": "electronics-w50",
      "word": "broken",
      "definitionEn": "Not working or damaged.",
      "definitionId": "Tidak berfungsi atau rusak.",
      "topicId": "electronics"
    }
  ],
  "entertainment-media": [
    {
      "id": "entertainment-media-w01",
      "word": "entertainment",
      "definitionEn": "Activities that provide enjoyment or amusement.",
      "definitionId": "Aktivitas yang memberikan kesenangan atau hiburan.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w02",
      "word": "media",
      "definitionEn": "Channels of communication such as TV, radio, or the internet.",
      "definitionId": "Saluran komunikasi seperti TV, radio, atau internet.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w03",
      "word": "movie",
      "definitionEn": "A motion picture.",
      "definitionId": "Gambar bergerak; film.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w04",
      "word": "film",
      "definitionEn": "A motion picture; a movie.",
      "definitionId": "Gambar bergerak; film.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w05",
      "word": "actor",
      "definitionEn": "A person who performs in plays or movies.",
      "definitionId": "Orang yang tampil dalam pertunjukan atau film.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w06",
      "word": "actress",
      "definitionEn": "A female actor.",
      "definitionId": "Aktor perempuan.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w07",
      "word": "director",
      "definitionEn": "A person who directs a film or play.",
      "definitionId": "Orang yang mengarahkan film atau pertunjukan.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w08",
      "word": "scene",
      "definitionEn": "A part of a play or movie.",
      "definitionId": "Bagian dari sebuah pertunjukan atau film.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w09",
      "word": "episode",
      "definitionEn": "A part of a series.",
      "definitionId": "Bagian dari sebuah serial.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w10",
      "word": "season",
      "definitionEn": "A set of episodes released together.",
      "definitionId": "Sekumpulan episode yang dirilis bersama.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w11",
      "word": "series",
      "definitionEn": "A set of related programs.",
      "definitionId": "Serangkaian program yang saling terkait.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w12",
      "word": "documentary",
      "definitionEn": "A factual film or program.",
      "definitionId": "Film atau program yang berdasarkan fakta.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w13",
      "word": "cartoon",
      "definitionEn": "A drawn or animated film, often humorous.",
      "definitionId": "Film bergambar atau animasi, sering lucu.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w14",
      "word": "animation",
      "definitionEn": "The technique of making images appear to move.",
      "definitionId": "Teknik membuat gambar tampak bergerak.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w15",
      "word": "trailer",
      "definitionEn": "A short preview of a film or show.",
      "definitionId": "Cuplikan singkat dari film atau acara.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w16",
      "word": "cinema",
      "definitionEn": "A theater where movies are shown.",
      "definitionId": "Tempat menonton film.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w17",
      "word": "theater",
      "definitionEn": "A place for performances or movies.",
      "definitionId": "Tempat untuk pertunjukan atau film.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w18",
      "word": "ticket",
      "definitionEn": "A printed or digital pass for entry.",
      "definitionId": "Tiket masuk dalam bentuk cetak atau digital.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w19",
      "word": "screen",
      "definitionEn": "The surface on which images are displayed.",
      "definitionId": "Permukaan tempat gambar ditampilkan.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w20",
      "word": "subtitles",
      "definitionEn": "Text showing the dialogue of a video.",
      "definitionId": "Teks yang menampilkan dialog dalam sebuah video.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w21",
      "word": "music",
      "definitionEn": "Organized sound, such as songs or instrumental pieces.",
      "definitionId": "Suara yang diatur, seperti lagu atau musik instrumental.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w22",
      "word": "song",
      "definitionEn": "A piece of music with words.",
      "definitionId": "Karya musik yang memiliki lirik.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w23",
      "word": "singer",
      "definitionEn": "A person who sings.",
      "definitionId": "Orang yang bernyanyi.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w24",
      "word": "band",
      "definitionEn": "A group of musicians.",
      "definitionId": "Kelompok musisi.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w25",
      "word": "album",
      "definitionEn": "A collection of music tracks.",
      "definitionId": "Kumpulan lagu dalam satu paket.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w26",
      "word": "playlist",
      "definitionEn": "A list of songs to play.",
      "definitionId": "Daftar lagu yang akan diputar.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w27",
      "word": "concert",
      "definitionEn": "A live music performance.",
      "definitionId": "Pertunjukan musik secara langsung.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w28",
      "word": "podcast",
      "definitionEn": "A digital audio program released in episodes.",
      "definitionId": "Program audio digital yang dirilis per episode.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w29",
      "word": "radio",
      "definitionEn": "Audio broadcast medium; also a device that receives it.",
      "definitionId": "Media siaran audio; juga perangkat penerimanya.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w30",
      "word": "channel",
      "definitionEn": "A TV or online station that broadcasts programs.",
      "definitionId": "Stasiun TV atau kanal online yang menyiarkan program.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w31",
      "word": "television",
      "definitionEn": "A device or service for broadcasted programs.",
      "definitionId": "Perangkat atau layanan untuk menayangkan siaran.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w32",
      "word": "show",
      "definitionEn": "A program or performance.",
      "definitionId": "Program atau pertunjukan.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w33",
      "word": "host",
      "definitionEn": "A person who presents a show.",
      "definitionId": "Orang yang membawakan acara.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w34",
      "word": "audience",
      "definitionEn": "People who watch or listen to a performance.",
      "definitionId": "Orang-orang yang menonton atau mendengarkan pertunjukan.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w35",
      "word": "fan",
      "definitionEn": "Someone who admires a performer or team.",
      "definitionId": "Orang yang mengagumi performer atau tim.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w36",
      "word": "review",
      "definitionEn": "An evaluation or critique.",
      "definitionId": "Penilaian atau kritik.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w37",
      "word": "rating",
      "definitionEn": "A score or assessment.",
      "definitionId": "Skor atau penilaian.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w38",
      "word": "stream",
      "definitionEn": "To transmit or receive audio/video over the internet.",
      "definitionId": "Mengirim atau menerima audio/video melalui internet.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w40",
      "word": "video",
      "definitionEn": "Moving images with or without sound.",
      "definitionId": "Gambar bergerak dengan atau tanpa suara.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w41",
      "word": "clip",
      "definitionEn": "A short segment of video or audio.",
      "definitionId": "Bagian pendek dari video atau audio.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w42",
      "word": "vlog",
      "definitionEn": "A video blog.",
      "definitionId": "Blog berbentuk video.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w43",
      "word": "blogger",
      "definitionEn": "A person who writes a blog.",
      "definitionId": "Orang yang menulis blog.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w46",
      "word": "post",
      "definitionEn": "A message or article published online.",
      "definitionId": "Pesan atau artikel yang dipublikasikan online.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w47",
      "word": "comment",
      "definitionEn": "A written response or remark.",
      "definitionId": "Tanggapan atau komentar tertulis.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w48",
      "word": "like",
      "definitionEn": "An online expression of approval or enjoyment.",
      "definitionId": "Ekspresi online untuk menyatakan suka atau setuju.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w49",
      "word": "share",
      "definitionEn": "To repost or distribute to others.",
      "definitionId": "Memublikasikan ulang atau membagikan ke orang lain.",
      "topicId": "entertainment-media"
    },
    {
      "id": "entertainment-media-w50",
      "word": "trending",
      "definitionEn": "Currently popular.",
      "definitionId": "Sedang populer.",
      "topicId": "entertainment-media"
    }
  ],
  "family": [
    {
      "id": "family-w01",
      "word": "family",
      "definitionEn": "A group of people related by blood or marriage.",
      "definitionId": "Sekelompok orang yang berhubungan darah atau pernikahan.",
      "topicId": "family"
    },
    {
      "id": "family-w02",
      "word": "parents",
      "definitionEn": "A mother and father; also, people who raise a child.",
      "definitionId": "Ayah dan ibu; juga orang yang membesarkan anak.",
      "topicId": "family"
    },
    {
      "id": "family-w03",
      "word": "mother",
      "definitionEn": "A female parent.",
      "definitionId": "Orang tua perempuan.",
      "topicId": "family"
    },
    {
      "id": "family-w04",
      "word": "father",
      "definitionEn": "A male parent.",
      "definitionId": "Orang tua laki-laki.",
      "topicId": "family"
    },
    {
      "id": "family-w05",
      "word": "mom",
      "definitionEn": "Informal word for mother.",
      "definitionId": "Kata informal untuk ibu.",
      "topicId": "family"
    },
    {
      "id": "family-w06",
      "word": "dad",
      "definitionEn": "Informal word for father.",
      "definitionId": "Kata informal untuk ayah.",
      "topicId": "family"
    },
    {
      "id": "family-w07",
      "word": "husband",
      "definitionEn": "A married man; a woman's spouse.",
      "definitionId": "Pria yang sudah menikah; pasangan suami.",
      "topicId": "family"
    },
    {
      "id": "family-w08",
      "word": "wife",
      "definitionEn": "A married woman; a man's spouse.",
      "definitionId": "Perempuan yang sudah menikah; pasangan istri.",
      "topicId": "family"
    },
    {
      "id": "family-w09",
      "word": "son",
      "definitionEn": "A male child.",
      "definitionId": "Anak laki-laki.",
      "topicId": "family"
    },
    {
      "id": "family-w10",
      "word": "daughter",
      "definitionEn": "A female child.",
      "definitionId": "Anak perempuan.",
      "topicId": "family"
    },
    {
      "id": "family-w11",
      "word": "child",
      "definitionEn": "A young person; a son or daughter.",
      "definitionId": "Orang muda; anak laki-laki atau perempuan.",
      "topicId": "family"
    },
    {
      "id": "family-w12",
      "word": "children",
      "definitionEn": "More than one child.",
      "definitionId": "Lebih dari satu anak.",
      "topicId": "family"
    },
    {
      "id": "family-w13",
      "word": "brother",
      "definitionEn": "A male sibling.",
      "definitionId": "Saudara laki-laki.",
      "topicId": "family"
    },
    {
      "id": "family-w14",
      "word": "sister",
      "definitionEn": "A female sibling.",
      "definitionId": "Saudara perempuan.",
      "topicId": "family"
    },
    {
      "id": "family-w15",
      "word": "sibling",
      "definitionEn": "A brother or sister.",
      "definitionId": "Saudara kandung; saudara laki-laki atau perempuan.",
      "topicId": "family"
    },
    {
      "id": "family-w16",
      "word": "grandfather",
      "definitionEn": "The father of one's parent.",
      "definitionId": "Ayah dari orang tua seseorang.",
      "topicId": "family"
    },
    {
      "id": "family-w17",
      "word": "grandmother",
      "definitionEn": "The mother of one's parent.",
      "definitionId": "Ibu dari orang tua seseorang.",
      "topicId": "family"
    },
    {
      "id": "family-w18",
      "word": "grandpa",
      "definitionEn": "Informal word for grandfather.",
      "definitionId": "Kata informal untuk kakek.",
      "topicId": "family"
    },
    {
      "id": "family-w19",
      "word": "grandma",
      "definitionEn": "Informal word for grandmother.",
      "definitionId": "Kata informal untuk nenek.",
      "topicId": "family"
    },
    {
      "id": "family-w20",
      "word": "grandson",
      "definitionEn": "The son of one's child.",
      "definitionId": "Anak laki-laki dari anak seseorang.",
      "topicId": "family"
    },
    {
      "id": "family-w21",
      "word": "granddaughter",
      "definitionEn": "The daughter of one's child.",
      "definitionId": "Anak perempuan dari anak seseorang.",
      "topicId": "family"
    },
    {
      "id": "family-w22",
      "word": "uncle",
      "definitionEn": "The brother of one's parent.",
      "definitionId": "Saudara laki-laki dari orang tua seseorang.",
      "topicId": "family"
    },
    {
      "id": "family-w23",
      "word": "aunt",
      "definitionEn": "The sister of one's parent.",
      "definitionId": "Saudara perempuan dari orang tua seseorang.",
      "topicId": "family"
    },
    {
      "id": "family-w24",
      "word": "cousin",
      "definitionEn": "A child of an aunt or uncle.",
      "definitionId": "Anak dari paman atau bibi.",
      "topicId": "family"
    },
    {
      "id": "family-w25",
      "word": "nephew",
      "definitionEn": "The son of one's brother or sister.",
      "definitionId": "Anak laki-laki dari saudara laki-laki atau perempuan.",
      "topicId": "family"
    },
    {
      "id": "family-w26",
      "word": "niece",
      "definitionEn": "The daughter of one's brother or sister.",
      "definitionId": "Anak perempuan dari saudara laki-laki atau perempuan.",
      "topicId": "family"
    },
    {
      "id": "family-w27",
      "word": "twins",
      "definitionEn": "Two children born at the same time.",
      "definitionId": "Dua anak yang lahir pada waktu yang sama.",
      "topicId": "family"
    },
    {
      "id": "family-w28",
      "word": "baby",
      "definitionEn": "A very young child; an infant.",
      "definitionId": "Anak yang sangat kecil; bayi.",
      "topicId": "family"
    },
    {
      "id": "family-w29",
      "word": "relative",
      "definitionEn": "A person connected by blood or marriage.",
      "definitionId": "Orang yang terhubung karena darah atau pernikahan.",
      "topicId": "family"
    },
    {
      "id": "family-w31",
      "word": "stepfather",
      "definitionEn": "A man who is married to one's mother after a previous marriage.",
      "definitionId": "Pria yang menikah dengan ibu seseorang setelah pernikahan sebelumnya.",
      "topicId": "family"
    },
    {
      "id": "family-w32",
      "word": "stepmother",
      "definitionEn": "A woman who is married to one's father after a previous marriage.",
      "definitionId": "Perempuan yang menikah dengan ayah seseorang setelah pernikahan sebelumnya.",
      "topicId": "family"
    },
    {
      "id": "family-w33",
      "word": "stepson",
      "definitionEn": "A son of a step-parent from a previous relationship.",
      "definitionId": "Anak laki-laki dari orang tua tiri dari hubungan sebelumnya.",
      "topicId": "family"
    },
    {
      "id": "family-w34",
      "word": "stepdaughter",
      "definitionEn": "A daughter of a step-parent from a previous relationship.",
      "definitionId": "Anak perempuan dari orang tua tiri dari hubungan sebelumnya.",
      "topicId": "family"
    },
    {
      "id": "family-w35",
      "word": "spouse",
      "definitionEn": "A husband or wife.",
      "definitionId": "Suami atau istri.",
      "topicId": "family"
    },
    {
      "id": "family-w40",
      "word": "stepbrother",
      "definitionEn": "A son of one's step-parent from a previous relationship.",
      "definitionId": "Anak laki-laki dari orang tua tiri dari hubungan sebelumnya.",
      "topicId": "family"
    },
    {
      "id": "family-w41",
      "word": "stepsister",
      "definitionEn": "A daughter of one's step-parent from a previous relationship.",
      "definitionId": "Anak perempuan dari orang tua tiri dari hubungan sebelumnya.",
      "topicId": "family"
    },
    {
      "id": "family-w43",
      "word": "firstborn",
      "definitionEn": "The child born first in a family.",
      "definitionId": "Anak yang lahir pertama dalam keluarga.",
      "topicId": "family"
    },
    {
      "id": "family-w44",
      "word": "newborn",
      "definitionEn": "A baby that has just been born.",
      "definitionId": "Bayi yang baru lahir.",
      "topicId": "family"
    },
    {
      "id": "family-w50",
      "word": "guardian",
      "definitionEn": "A person who takes care of someone who cannot care for themselves.",
      "definitionId": "Orang yang merawat seseorang yang tidak bisa merawat dirinya sendiri.",
      "topicId": "family"
    },
    {
      "id": "family-w51",
      "word": "parent",
      "definitionEn": "A person who is a mother or father.",
      "definitionId": "Orang yang merupakan ayah atau ibu.",
      "topicId": "family"
    },
    {
      "id": "family-w52",
      "word": "grandparent",
      "definitionEn": "A person who is a grandparent.",
      "definitionId": "Orang yang merupakan kakek atau nenek.",
      "topicId": "family"
    },
    {
      "id": "family-w62",
      "word": "newlyweds",
      "definitionEn": "A recently married couple.",
      "definitionId": "Pasangan yang baru menikah.",
      "topicId": "family"
    },
    {
      "id": "family-w63",
      "word": "fiance",
      "definitionEn": "A man who is engaged to be married.",
      "definitionId": "Pria yang sedang bertunangan dan akan menikah.",
      "topicId": "family"
    },
    {
      "id": "family-w64",
      "word": "fiancee",
      "definitionEn": "A woman who is engaged to be married.",
      "definitionId": "Perempuan yang sedang bertunangan dan akan menikah.",
      "topicId": "family"
    },
    {
      "id": "family-w67",
      "word": "widow",
      "definitionEn": "A woman whose spouse has died.",
      "definitionId": "Perempuan yang suaminya telah meninggal.",
      "topicId": "family"
    },
    {
      "id": "family-w68",
      "word": "widower",
      "definitionEn": "A man whose spouse has died.",
      "definitionId": "Pria yang istrinya telah meninggal.",
      "topicId": "family"
    },
    {
      "id": "family-w69",
      "word": "orphan",
      "definitionEn": "A child whose parents have died.",
      "definitionId": "Anak yang orang tuanya telah meninggal.",
      "topicId": "family"
    },
    {
      "id": "family-w71",
      "word": "ancestor",
      "definitionEn": "A person from whom one is descended.",
      "definitionId": "Orang yang menjadi asal keturunan seseorang.",
      "topicId": "family"
    },
    {
      "id": "family-w72",
      "word": "descendant",
      "definitionEn": "A person descended from another.",
      "definitionId": "Orang yang merupakan keturunan dari orang lain.",
      "topicId": "family"
    },
    {
      "id": "family-w73",
      "word": "lineage",
      "definitionEn": "The line of descendants or ancestors.",
      "definitionId": "Garis keturunan dari leluhur atau keturunan.",
      "topicId": "family"
    },
    {
      "id": "family-w74",
      "word": "household",
      "definitionEn": "The people living together in a home.",
      "definitionId": "Orang-orang yang tinggal bersama dalam satu rumah.",
      "topicId": "family"
    },
    {
      "id": "family-w81",
      "word": "pregnant",
      "definitionEn": "Expecting a baby.",
      "definitionId": "Sedang mengandung bayi.",
      "topicId": "family"
    },
    {
      "id": "family-w82",
      "word": "born",
      "definitionEn": "Brought into life; not yet mature.",
      "definitionId": "Dibawa ke kehidupan; baru lahir.",
      "topicId": "family"
    },
    {
      "id": "family-w83",
      "word": "adoption",
      "definitionEn": "The act of taking a child into a family legally.",
      "definitionId": "Tindakan mengambil anak secara sah ke dalam keluarga.",
      "topicId": "family"
    },
    {
      "id": "family-w84",
      "word": "adopt",
      "definitionEn": "To take someone into a family legally as a child.",
      "definitionId": "Mengambil seseorang ke dalam keluarga secara sah sebagai anak.",
      "topicId": "family"
    },
    {
      "id": "family-w87",
      "word": "caregiver",
      "definitionEn": "A person who provides care for someone else.",
      "definitionId": "Orang yang memberikan perawatan kepada orang lain.",
      "topicId": "family"
    },
    {
      "id": "family-w88",
      "word": "breadwinner",
      "definitionEn": "A person who earns the main income for a family.",
      "definitionId": "Orang yang menghasilkan penghasilan utama bagi keluarga.",
      "topicId": "family"
    },
    {
      "id": "family-w89",
      "word": "homemaker",
      "definitionEn": "A person who manages a home and family, often without paid work.",
      "definitionId": "Orang yang mengelola rumah tangga dan keluarga, sering tanpa pekerjaan berbayar.",
      "topicId": "family"
    },
    {
      "id": "family-w90",
      "word": "custody",
      "definitionEn": "The legal right to care for a child.",
      "definitionId": "Hak hukum untuk merawat seorang anak.",
      "topicId": "family"
    },
    {
      "id": "family-w91",
      "word": "surname",
      "definitionEn": "A family name shared by relatives.",
      "definitionId": "Nama keluarga yang dipakai bersama oleh kerabat.",
      "topicId": "family"
    },
    {
      "id": "family-w94",
      "word": "nickname",
      "definitionEn": "A familiar or humorous name given instead of a formal name.",
      "definitionId": "Nama akrab atau lucu yang diberikan sebagai pengganti nama resmi.",
      "topicId": "family"
    },
    {
      "id": "family-w95",
      "word": "generation",
      "definitionEn": "A group of people born and living around the same time.",
      "definitionId": "Sekelompok orang yang lahir dan hidup pada waktu yang berdekatan.",
      "topicId": "family"
    },
    {
      "id": "family-w96",
      "word": "teenager",
      "definitionEn": "A person between childhood and adulthood.",
      "definitionId": "Orang yang berada antara masa anak-anak dan dewasa.",
      "topicId": "family"
    },
    {
      "id": "family-w97",
      "word": "adult",
      "definitionEn": "A fully grown person.",
      "definitionId": "Orang yang sudah dewasa.",
      "topicId": "family"
    },
    {
      "id": "family-w98",
      "word": "elderly",
      "definitionEn": "An old person.",
      "definitionId": "Orang yang sudah tua.",
      "topicId": "family"
    }
  ],
  "feelings": [
    {
      "id": "feelings-w01",
      "word": "happy",
      "definitionEn": "Feeling pleasure or contentment.",
      "definitionId": "Merasa senang atau puas.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w02",
      "word": "sad",
      "definitionEn": "Feeling unhappy or sorrowful.",
      "definitionId": "Merasa tidak bahagia atau sedih.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w03",
      "word": "angry",
      "definitionEn": "Feeling strong displeasure or rage.",
      "definitionId": "Merasa sangat kesal atau marah.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w04",
      "word": "tired",
      "definitionEn": "Feeling in need of rest.",
      "definitionId": "Merasa butuh istirahat.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w05",
      "word": "sleepy",
      "definitionEn": "Feeling ready to sleep.",
      "definitionId": "Merasa ingin tidur.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w06",
      "word": "hungry",
      "definitionEn": "Feeling the need to eat.",
      "definitionId": "Merasa perlu makan.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w07",
      "word": "thirsty",
      "definitionEn": "Feeling the need to drink.",
      "definitionId": "Merasa perlu minum.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w08",
      "word": "scared",
      "definitionEn": "Feeling fear.",
      "definitionId": "Merasa takut.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w09",
      "word": "afraid",
      "definitionEn": "Feeling fear or anxiety.",
      "definitionId": "Merasa takut atau cemas.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w10",
      "word": "nervous",
      "definitionEn": "Feeling worried or uneasy.",
      "definitionId": "Merasa khawatir atau gelisah.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w11",
      "word": "calm",
      "definitionEn": "Not excited or upset; peaceful.",
      "definitionId": "Tidak gelisah atau marah; tenang.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w12",
      "word": "excited",
      "definitionEn": "Feeling very enthusiastic or eager.",
      "definitionId": "Merasa sangat antusias atau bersemangat.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w13",
      "word": "bored",
      "definitionEn": "Not interested; lacking excitement.",
      "definitionId": "Tidak tertarik; kurang bersemangat.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w14",
      "word": "worried",
      "definitionEn": "Feeling anxious or uneasy about something.",
      "definitionId": "Merasa cemas atau tidak tenang tentang sesuatu.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w15",
      "word": "stressed",
      "definitionEn": "Feeling tense or under pressure.",
      "definitionId": "Merasa tegang atau tertekan.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w16",
      "word": "relaxed",
      "definitionEn": "Free from tension or anxiety.",
      "definitionId": "Bebas dari ketegangan atau kecemasan.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w17",
      "word": "surprised",
      "definitionEn": "Feeling or showing surprise.",
      "definitionId": "Merasa atau menunjukkan rasa terkejut.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w18",
      "word": "confused",
      "definitionEn": "Not clear in mind; uncertain.",
      "definitionId": "Tidak jelas dalam pikiran; tidak yakin.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w19",
      "word": "shy",
      "definitionEn": "Feeling nervous or timid around others.",
      "definitionId": "Merasa gugup atau malu di sekitar orang lain.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w20",
      "word": "proud",
      "definitionEn": "Feeling pleased about an achievement.",
      "definitionId": "Merasa senang atas sebuah pencapaian.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w21",
      "word": "embarrassed",
      "definitionEn": "Feeling self-conscious or ashamed.",
      "definitionId": "Merasa tidak enak atau malu.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w22",
      "word": "disappointed",
      "definitionEn": "Feeling let down or dissatisfied.",
      "definitionId": "Merasa kecewa atau tidak puas.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w23",
      "word": "lonely",
      "definitionEn": "Feeling sad because you are alone.",
      "definitionId": "Merasa sedih karena sendirian.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w24",
      "word": "grateful",
      "definitionEn": "Feeling thankful for kindness.",
      "definitionId": "Merasa bersyukur atas kebaikan.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w25",
      "word": "thankful",
      "definitionEn": "Feeling or expressing thanks.",
      "definitionId": "Merasa atau menyatakan terima kasih.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w26",
      "word": "hopeful",
      "definitionEn": "Feeling that something good may happen.",
      "definitionId": "Merasa bahwa sesuatu yang baik mungkin terjadi.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w27",
      "word": "upset",
      "definitionEn": "Feeling unhappy or worried.",
      "definitionId": "Merasa tidak senang atau khawatir.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w28",
      "word": "annoyed",
      "definitionEn": "Slightly angry or irritated.",
      "definitionId": "Sedikit marah atau terganggu.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w29",
      "word": "jealous",
      "definitionEn": "Feeling envy of someone or something.",
      "definitionId": "Merasa iri terhadap seseorang atau sesuatu.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w30",
      "word": "guilty",
      "definitionEn": "Feeling responsible or sorry for wrongdoing.",
      "definitionId": "Merasa bertanggung jawab atau menyesal atas kesalahan.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w31",
      "word": "relieved",
      "definitionEn": "Feeling comfort after worry or stress.",
      "definitionId": "Merasa lega setelah khawatir atau stres.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w32",
      "word": "shocked",
      "definitionEn": "Feeling sudden surprise or upset.",
      "definitionId": "Merasa terkejut atau terganggu secara tiba-tiba.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w33",
      "word": "confident",
      "definitionEn": "Feeling sure of yourself.",
      "definitionId": "Merasa yakin pada diri sendiri.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w34",
      "word": "comfortable",
      "definitionEn": "Feeling at ease; not in pain or stress.",
      "definitionId": "Merasa tenang; tidak sakit atau tertekan.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w35",
      "word": "uncomfortable",
      "definitionEn": "Feeling uneasy, awkward, or not at ease.",
      "definitionId": "Merasa gelisah, canggung, atau tidak nyaman.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w36",
      "word": "hurt",
      "definitionEn": "Feeling emotional or physical pain.",
      "definitionId": "Merasa sakit secara emosional atau fisik.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w37",
      "word": "pain",
      "definitionEn": "A physical or emotional hurt.",
      "definitionId": "Rasa sakit secara fisik atau emosional.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w38",
      "word": "love",
      "definitionEn": "A strong feeling of affection.",
      "definitionId": "Perasaan kasih sayang yang kuat.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w39",
      "word": "hate",
      "definitionEn": "A strong feeling of dislike.",
      "definitionId": "Perasaan tidak suka yang kuat.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w40",
      "word": "miss",
      "definitionEn": "To feel sad because someone is gone.",
      "definitionId": "Merasa sedih karena seseorang tidak ada.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w41",
      "word": "interested",
      "definitionEn": "Wanting to know more; not bored.",
      "definitionId": "Ingin tahu lebih banyak; tidak bosan.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w42",
      "word": "curious",
      "definitionEn": "Eager to know or learn.",
      "definitionId": "Ingin tahu atau belajar.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w43",
      "word": "fine",
      "definitionEn": "Well or good; without problem.",
      "definitionId": "Dalam keadaan baik; tanpa masalah.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w44",
      "word": "okay",
      "definitionEn": "All right; acceptable.",
      "definitionId": "Baik-baik saja; dapat diterima.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w45",
      "word": "sick",
      "definitionEn": "Not well; ill.",
      "definitionId": "Tidak enak badan; sakit.",
      "topicId": "feelings"
    },
    {
      "id": "feelings-w46",
      "word": "better",
      "definitionEn": "Improved in health or condition.",
      "definitionId": "Membaik dalam kesehatan atau kondisi.",
      "topicId": "feelings"
    }
  ],
  "food": [
    {
      "id": "food-w01",
      "word": "food",
      "definitionEn": "Things people or animals eat to stay alive.",
      "definitionId": "Hal yang dimakan orang atau hewan untuk tetap hidup.",
      "topicId": "food"
    },
    {
      "id": "food-w02",
      "word": "meal",
      "definitionEn": "Food eaten at one time; a meal.",
      "definitionId": "Makanan yang dimakan pada satu waktu; hidangan.",
      "topicId": "food"
    },
    {
      "id": "food-w03",
      "word": "breakfast",
      "definitionEn": "The first meal of the day.",
      "definitionId": "Makan pertama dalam sehari.",
      "topicId": "food"
    },
    {
      "id": "food-w04",
      "word": "lunch",
      "definitionEn": "A midday meal.",
      "definitionId": "Makan di tengah hari.",
      "topicId": "food"
    },
    {
      "id": "food-w05",
      "word": "dinner",
      "definitionEn": "The main meal of the day, often in the evening.",
      "definitionId": "Makan utama dalam sehari, sering pada malam hari.",
      "topicId": "food"
    },
    {
      "id": "food-w06",
      "word": "snack",
      "definitionEn": "A small amount of food eaten between meals.",
      "definitionId": "Makanan kecil yang dimakan di antara waktu makan.",
      "topicId": "food"
    },
    {
      "id": "food-w07",
      "word": "rice",
      "definitionEn": "The grain used as a staple food in many countries.",
      "definitionId": "Biji-bijian yang menjadi makanan pokok di banyak negara.",
      "topicId": "food"
    },
    {
      "id": "food-w08",
      "word": "bread",
      "definitionEn": "A baked food made from flour and water.",
      "definitionId": "Makanan panggang yang dibuat dari tepung dan air.",
      "topicId": "food"
    },
    {
      "id": "food-w09",
      "word": "noodle",
      "definitionEn": "Long, thin strands of pasta or similar food.",
      "definitionId": "Untaian panjang dan tipis dari pasta atau makanan sejenis.",
      "topicId": "food"
    },
    {
      "id": "food-w10",
      "word": "pasta",
      "definitionEn": "Food made from dough of flour and water, often in long shapes.",
      "definitionId": "Makanan dari adonan tepung dan air, sering berbentuk panjang.",
      "topicId": "food"
    },
    {
      "id": "food-w11",
      "word": "soup",
      "definitionEn": "A liquid dish, often made by boiling meat or vegetables.",
      "definitionId": "Hidangan berkuah, sering dibuat dengan merebus daging atau sayuran.",
      "topicId": "food"
    },
    {
      "id": "food-w12",
      "word": "salad",
      "definitionEn": "A dish of mixed vegetables, often with dressing.",
      "definitionId": "Hidangan campuran sayuran, sering dengan saus.",
      "topicId": "food"
    },
    {
      "id": "food-w13",
      "word": "egg",
      "definitionEn": "A round food from a chicken or other bird, with a shell.",
      "definitionId": "Makanan bulat dari ayam atau burung lain dengan cangkang.",
      "topicId": "food"
    },
    {
      "id": "food-w14",
      "word": "chicken",
      "definitionEn": "The meat of a chicken.",
      "definitionId": "Daging ayam.",
      "topicId": "food"
    },
    {
      "id": "food-w15",
      "word": "beef",
      "definitionEn": "The meat of a cow.",
      "definitionId": "Daging sapi.",
      "topicId": "food"
    },
    {
      "id": "food-w16",
      "word": "fish",
      "definitionEn": "The meat of a fish.",
      "definitionId": "Daging ikan.",
      "topicId": "food"
    },
    {
      "id": "food-w17",
      "word": "shrimp",
      "definitionEn": "A small shellfish eaten as food.",
      "definitionId": "Hewan laut kecil bercangkang yang dimakan sebagai makanan.",
      "topicId": "food"
    },
    {
      "id": "food-w18",
      "word": "sausage",
      "definitionEn": "A seasoned ground-meat food in a casing.",
      "definitionId": "Makanan daging giling berbumbu dalam selongsong.",
      "topicId": "food"
    },
    {
      "id": "food-w19",
      "word": "cheese",
      "definitionEn": "A food made from milk, usually solid.",
      "definitionId": "Makanan dari susu yang biasanya padat.",
      "topicId": "food"
    },
    {
      "id": "food-w20",
      "word": "butter",
      "definitionEn": "A solid dairy food made by churning cream.",
      "definitionId": "Makanan susu padat yang dibuat dengan mengocok krim.",
      "topicId": "food"
    },
    {
      "id": "food-w21",
      "word": "milk",
      "definitionEn": "A white liquid produced by mammals, used as a drink.",
      "definitionId": "Cairan putih yang dihasilkan mamalia, digunakan sebagai minuman.",
      "topicId": "food"
    },
    {
      "id": "food-w22",
      "word": "yogurt",
      "definitionEn": "A thick food made from fermented milk.",
      "definitionId": "Makanan kental dari susu yang difermentasi.",
      "topicId": "food"
    },
    {
      "id": "food-w23",
      "word": "fruit",
      "definitionEn": "The sweet edible part of a plant, often containing seeds.",
      "definitionId": "Bagian tanaman yang manis dan bisa dimakan, sering berbiji.",
      "topicId": "food"
    },
    {
      "id": "food-w24",
      "word": "vegetable",
      "definitionEn": "An edible plant or part of a plant.",
      "definitionId": "Tanaman atau bagian tanaman yang bisa dimakan.",
      "topicId": "food"
    },
    {
      "id": "food-w25",
      "word": "apple",
      "definitionEn": "A round fruit with red, green, or yellow skin.",
      "definitionId": "Buah bulat dengan kulit merah, hijau, atau kuning.",
      "topicId": "food"
    },
    {
      "id": "food-w26",
      "word": "banana",
      "definitionEn": "A long curved yellow fruit.",
      "definitionId": "Buah kuning panjang yang melengkung.",
      "topicId": "food"
    },
    {
      "id": "food-w27",
      "word": "orange",
      "definitionEn": "A round orange-colored citrus fruit.",
      "definitionId": "Buah jeruk bulat berwarna oranye.",
      "topicId": "food"
    },
    {
      "id": "food-w28",
      "word": "grape",
      "definitionEn": "A small round fruit that grows in bunches.",
      "definitionId": "Buah kecil bulat yang tumbuh dalam gerombol.",
      "topicId": "food"
    },
    {
      "id": "food-w29",
      "word": "watermelon",
      "definitionEn": "A large fruit with green skin and red flesh.",
      "definitionId": "Buah besar berkulit hijau dengan daging merah.",
      "topicId": "food"
    },
    {
      "id": "food-w30",
      "word": "mango",
      "definitionEn": "A tropical fruit with orange-yellow flesh.",
      "definitionId": "Buah tropis dengan daging oranye-kuning.",
      "topicId": "food"
    },
    {
      "id": "food-w31",
      "word": "carrot",
      "definitionEn": "A long orange root vegetable.",
      "definitionId": "Sayuran akar panjang berwarna oranye.",
      "topicId": "food"
    },
    {
      "id": "food-w32",
      "word": "potato",
      "definitionEn": "A starchy tuber used as food.",
      "definitionId": "Umbi bertepung yang digunakan sebagai makanan.",
      "topicId": "food"
    },
    {
      "id": "food-w33",
      "word": "tomato",
      "definitionEn": "A round red fruit used as a vegetable.",
      "definitionId": "Buah bulat berwarna merah yang dipakai sebagai sayur.",
      "topicId": "food"
    },
    {
      "id": "food-w34",
      "word": "onion",
      "definitionEn": "A round vegetable with layers, used in cooking.",
      "definitionId": "Sayuran bulat berlapis yang dipakai dalam memasak.",
      "topicId": "food"
    },
    {
      "id": "food-w35",
      "word": "garlic",
      "definitionEn": "A small bulb with a strong smell used in cooking.",
      "definitionId": "Umbi kecil berbau kuat yang dipakai dalam memasak.",
      "topicId": "food"
    },
    {
      "id": "food-w36",
      "word": "pepper",
      "definitionEn": "A vegetable or spice that adds heat or flavor.",
      "definitionId": "Sayuran atau rempah yang memberi rasa pedas atau kuat.",
      "topicId": "food"
    },
    {
      "id": "food-w37",
      "word": "salt",
      "definitionEn": "A white crystal used to season food.",
      "definitionId": "Kristal putih untuk membumbui makanan.",
      "topicId": "food"
    },
    {
      "id": "food-w38",
      "word": "sugar",
      "definitionEn": "A sweet crystal used to flavor food and drink.",
      "definitionId": "Kristal manis untuk memberi rasa pada makanan dan minuman.",
      "topicId": "food"
    },
    {
      "id": "food-w39",
      "word": "honey",
      "definitionEn": "A sweet, thick liquid made by bees.",
      "definitionId": "Cairan manis kental yang dibuat oleh lebah.",
      "topicId": "food"
    },
    {
      "id": "food-w40",
      "word": "oil",
      "definitionEn": "A liquid fat used in cooking.",
      "definitionId": "Lemak cair yang digunakan untuk memasak.",
      "topicId": "food"
    },
    {
      "id": "food-w42",
      "word": "sandwich",
      "definitionEn": "Food made of two pieces of bread with filling.",
      "definitionId": "Makanan dari dua potong roti dengan isi di tengah.",
      "topicId": "food"
    },
    {
      "id": "food-w43",
      "word": "pizza",
      "definitionEn": "A flat round food with toppings, baked.",
      "definitionId": "Makanan bulat pipih dengan topping, dipanggang.",
      "topicId": "food"
    },
    {
      "id": "food-w44",
      "word": "burger",
      "definitionEn": "A sandwich with a ground meat patty.",
      "definitionId": "Sandwich dengan patty daging giling.",
      "topicId": "food"
    },
    {
      "id": "food-w45",
      "word": "cake",
      "definitionEn": "A sweet baked food, often for celebrations.",
      "definitionId": "Makanan manis yang dipanggang, sering untuk perayaan.",
      "topicId": "food"
    },
    {
      "id": "food-w46",
      "word": "cookie",
      "definitionEn": "A small sweet baked food.",
      "definitionId": "Makanan panggang kecil yang manis.",
      "topicId": "food"
    },
    {
      "id": "food-w48",
      "word": "spicy",
      "definitionEn": "Having a hot or strong flavor.",
      "definitionId": "Memiliki rasa pedas atau kuat.",
      "topicId": "food"
    },
    {
      "id": "food-w49",
      "word": "sweet",
      "definitionEn": "Having the taste of sugar.",
      "definitionId": "Memiliki rasa gula.",
      "topicId": "food"
    },
    {
      "id": "food-w50",
      "word": "delicious",
      "definitionEn": "Very pleasant to taste.",
      "definitionId": "Sangat enak rasanya.",
      "topicId": "food"
    }
  ],
  "fruit": [
    {
      "id": "fruit-w01",
      "word": "fruit",
      "definitionEn": "The sweet edible part of a plant, often containing seeds.",
      "definitionId": "Bagian tanaman yang manis dan bisa dimakan, sering berbiji.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w02",
      "word": "apple",
      "definitionEn": "A round fruit with red, green, or yellow skin.",
      "definitionId": "Buah bulat dengan kulit merah, hijau, atau kuning.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w03",
      "word": "banana",
      "definitionEn": "A long curved yellow fruit.",
      "definitionId": "Buah kuning panjang yang melengkung.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w04",
      "word": "orange",
      "definitionEn": "A round orange-colored citrus fruit.",
      "definitionId": "Buah jeruk bulat berwarna oranye.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w05",
      "word": "grape",
      "definitionEn": "A small round fruit that grows in bunches.",
      "definitionId": "Buah kecil bulat yang tumbuh dalam gerombol.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w06",
      "word": "watermelon",
      "definitionEn": "A large fruit with green skin and red flesh.",
      "definitionId": "Buah besar berkulit hijau dengan daging merah.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w07",
      "word": "melon",
      "definitionEn": "A large sweet fruit with soft flesh.",
      "definitionId": "Buah besar yang manis dengan daging yang lembut.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w08",
      "word": "pineapple",
      "definitionEn": "A tropical fruit with spiky skin and sweet yellow flesh.",
      "definitionId": "Buah tropis dengan kulit berduri dan daging kuning manis.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w09",
      "word": "mango",
      "definitionEn": "A tropical fruit with orange-yellow flesh.",
      "definitionId": "Buah tropis dengan daging oranye-kuning.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w10",
      "word": "papaya",
      "definitionEn": "A tropical fruit with orange flesh.",
      "definitionId": "Buah tropis dengan daging berwarna oranye.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w11",
      "word": "guava",
      "definitionEn": "A tropical fruit with green skin and pink or white flesh.",
      "definitionId": "Buah tropis berkulit hijau dengan daging merah muda atau putih.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w13",
      "word": "pear",
      "definitionEn": "A sweet fruit with a rounded shape that narrows at the stem.",
      "definitionId": "Buah manis berbentuk bulat yang mengecil di dekat tangkai.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w14",
      "word": "peach",
      "definitionEn": "A soft, round fruit with fuzzy skin and a pit.",
      "definitionId": "Buah lembut bulat dengan kulit berbulu dan biji besar.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w15",
      "word": "plum",
      "definitionEn": "A small round fruit with smooth skin and a pit.",
      "definitionId": "Buah kecil bulat dengan kulit halus dan biji besar.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w16",
      "word": "cherry",
      "definitionEn": "A small round fruit with a pit and usually a stem.",
      "definitionId": "Buah kecil bulat dengan biji dan biasanya bertangkai.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w17",
      "word": "strawberry",
      "definitionEn": "A small red fruit with seeds on the outside.",
      "definitionId": "Buah kecil berwarna merah dengan biji di bagian luar.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w18",
      "word": "blueberry",
      "definitionEn": "A small blue fruit that grows in clusters.",
      "definitionId": "Buah kecil berwarna biru yang tumbuh berkelompok.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w19",
      "word": "raspberry",
      "definitionEn": "A small red fruit that grows on a bush.",
      "definitionId": "Buah kecil berwarna merah yang tumbuh pada semak.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w20",
      "word": "blackberry",
      "definitionEn": "A small dark fruit that grows on a bush.",
      "definitionId": "Buah kecil berwarna gelap yang tumbuh pada semak.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w21",
      "word": "kiwi",
      "definitionEn": "A small brown fruit with green flesh and black seeds.",
      "definitionId": "Buah kecil berkulit cokelat dengan daging hijau dan biji hitam.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w22",
      "word": "avocado",
      "definitionEn": "A pear-shaped fruit with green skin and creamy flesh.",
      "definitionId": "Buah berbentuk pir dengan kulit hijau dan daging yang lembut.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w23",
      "word": "coconut",
      "definitionEn": "A large brown fruit with hard shell and white flesh inside.",
      "definitionId": "Buah besar berkulit cokelat keras dengan daging putih di dalamnya.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w24",
      "word": "lemon",
      "definitionEn": "A yellow citrus fruit with sour juice.",
      "definitionId": "Buah jeruk berwarna kuning dengan air yang asam.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w25",
      "word": "lime",
      "definitionEn": "A green citrus fruit with sour juice.",
      "definitionId": "Buah jeruk berwarna hijau dengan air yang asam.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w26",
      "word": "mandarin",
      "definitionEn": "A small orange-colored citrus fruit.",
      "definitionId": "Buah jeruk kecil berwarna oranye.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w27",
      "word": "pomelo",
      "definitionEn": "A large citrus fruit with thick skin.",
      "definitionId": "Buah jeruk besar dengan kulit tebal.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w28",
      "word": "durian",
      "definitionEn": "A large fruit with a spiky shell and strong smell.",
      "definitionId": "Buah besar berkulit berduri dengan bau kuat.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w29",
      "word": "jackfruit",
      "definitionEn": "A large tropical fruit with many yellow pods inside.",
      "definitionId": "Buah tropis besar dengan banyak daging kuning di dalamnya.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w30",
      "word": "rambutan",
      "definitionEn": "A small red fruit with hairy skin and a single seed.",
      "definitionId": "Buah kecil berwarna merah dengan kulit berbulu dan satu biji.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w31",
      "word": "mangosteen",
      "definitionEn": "A small purple fruit with white flesh.",
      "definitionId": "Buah kecil berwarna ungu dengan daging putih.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w32",
      "word": "salak",
      "definitionEn": "A brown tropical fruit with scaly skin and white flesh.",
      "definitionId": "Buah tropis berkulit cokelat bersisik dan daging putih.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w33",
      "word": "starfruit",
      "definitionEn": "A star-shaped fruit with yellow skin.",
      "definitionId": "Buah berbentuk bintang dengan kulit kuning.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w34",
      "word": "longan",
      "definitionEn": "A small round fruit with translucent flesh.",
      "definitionId": "Buah kecil bulat dengan daging bening.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w35",
      "word": "lychee",
      "definitionEn": "A small round fruit with rough skin and white flesh.",
      "definitionId": "Buah kecil bulat berkulit kasar dengan daging putih.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w36",
      "word": "date",
      "definitionEn": "A sweet fruit from a palm, often dried.",
      "definitionId": "Buah manis dari pohon palem, sering dikeringkan.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w37",
      "word": "fig",
      "definitionEn": "A soft pear-shaped fruit with many small seeds.",
      "definitionId": "Buah lembut berbentuk pir dengan banyak biji kecil.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w38",
      "word": "apricot",
      "definitionEn": "A small orange fruit with a pit.",
      "definitionId": "Buah kecil berwarna oranye dengan biji besar.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w39",
      "word": "pomegranate",
      "definitionEn": "A round fruit with a thick skin and many red seeds inside.",
      "definitionId": "Buah bulat berkulit tebal dengan banyak biji merah di dalamnya.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w41",
      "word": "ripe",
      "definitionEn": "Fully grown and ready to eat.",
      "definitionId": "Sudah matang sepenuhnya dan siap dimakan.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w42",
      "word": "unripe",
      "definitionEn": "Not fully grown or ready to eat.",
      "definitionId": "Belum matang sepenuhnya atau belum siap dimakan.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w43",
      "word": "fresh",
      "definitionEn": "Newly picked; not old or spoiled.",
      "definitionId": "Baru dipetik; tidak tua atau busuk.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w44",
      "word": "sweet",
      "definitionEn": "Having the taste of sugar.",
      "definitionId": "Memiliki rasa gula.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w45",
      "word": "sour",
      "definitionEn": "Having a sharp acidic taste.",
      "definitionId": "Memiliki rasa asam yang tajam.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w46",
      "word": "juicy",
      "definitionEn": "Full of juice.",
      "definitionId": "Banyak mengandung sari atau cairan.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w47",
      "word": "seed",
      "definitionEn": "A small part of a plant that can grow into a new one.",
      "definitionId": "Bagian kecil dari tanaman yang dapat tumbuh menjadi tanaman baru.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w48",
      "word": "peel",
      "definitionEn": "The outer skin of a fruit.",
      "definitionId": "Kulit luar dari buah.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w49",
      "word": "slice",
      "definitionEn": "A thin piece cut from something.",
      "definitionId": "Potongan tipis dari sesuatu.",
      "topicId": "fruit"
    },
    {
      "id": "fruit-w50",
      "word": "wash",
      "definitionEn": "To clean with water.",
      "definitionId": "Membersihkan dengan air.",
      "topicId": "fruit"
    }
  ],
  "games": [
    {
      "id": "games-w01",
      "word": "game",
      "definitionEn": "An activity played for fun or competition.",
      "definitionId": "Kegiatan yang dimainkan untuk hiburan atau kompetisi.",
      "topicId": "games"
    },
    {
      "id": "games-w02",
      "word": "player",
      "definitionEn": "A person who plays a game.",
      "definitionId": "Orang yang bermain game.",
      "topicId": "games"
    },
    {
      "id": "games-w03",
      "word": "team",
      "definitionEn": "A group of players working together.",
      "definitionId": "Sekelompok pemain yang bekerja sama.",
      "topicId": "games"
    },
    {
      "id": "games-w04",
      "word": "opponent",
      "definitionEn": "A person or team you compete against.",
      "definitionId": "Orang atau tim yang kamu lawan.",
      "topicId": "games"
    },
    {
      "id": "games-w05",
      "word": "match",
      "definitionEn": "A contest between players or teams.",
      "definitionId": "Pertandingan antara pemain atau tim.",
      "topicId": "games"
    },
    {
      "id": "games-w06",
      "word": "round",
      "definitionEn": "One part of a game or competition.",
      "definitionId": "Satu bagian dari permainan atau kompetisi.",
      "topicId": "games"
    },
    {
      "id": "games-w07",
      "word": "turn",
      "definitionEn": "The time when it is your move.",
      "definitionId": "Waktu ketika giliranmu bergerak.",
      "topicId": "games"
    },
    {
      "id": "games-w08",
      "word": "rule",
      "definitionEn": "An instruction that tells how a game is played.",
      "definitionId": "Instruksi yang menjelaskan cara permainan dimainkan.",
      "topicId": "games"
    },
    {
      "id": "games-w09",
      "word": "goal",
      "definitionEn": "An objective you try to achieve.",
      "definitionId": "Tujuan yang ingin dicapai.",
      "topicId": "games"
    },
    {
      "id": "games-w10",
      "word": "mission",
      "definitionEn": "A specific task to complete.",
      "definitionId": "Tugas khusus yang harus diselesaikan.",
      "topicId": "games"
    },
    {
      "id": "games-w11",
      "word": "quest",
      "definitionEn": "A long or difficult mission in a game.",
      "definitionId": "Misi panjang atau sulit dalam game.",
      "topicId": "games"
    },
    {
      "id": "games-w12",
      "word": "level",
      "definitionEn": "A stage of progress in a game.",
      "definitionId": "Tahap kemajuan dalam game.",
      "topicId": "games"
    },
    {
      "id": "games-w13",
      "word": "stage",
      "definitionEn": "A level or part of a game.",
      "definitionId": "Level atau bagian dari game.",
      "topicId": "games"
    },
    {
      "id": "games-w14",
      "word": "score",
      "definitionEn": "The number of points earned.",
      "definitionId": "Jumlah poin yang diperoleh.",
      "topicId": "games"
    },
    {
      "id": "games-w15",
      "word": "point",
      "definitionEn": "A unit of score.",
      "definitionId": "Satuan skor.",
      "topicId": "games"
    },
    {
      "id": "games-w16",
      "word": "rank",
      "definitionEn": "A position in a list of players or teams.",
      "definitionId": "Posisi dalam daftar pemain atau tim.",
      "topicId": "games"
    },
    {
      "id": "games-w17",
      "word": "win",
      "definitionEn": "To be successful in a game.",
      "definitionId": "Berhasil dalam permainan.",
      "topicId": "games"
    },
    {
      "id": "games-w18",
      "word": "lose",
      "definitionEn": "To be unsuccessful in a game.",
      "definitionId": "Tidak berhasil dalam permainan.",
      "topicId": "games"
    },
    {
      "id": "games-w19",
      "word": "draw",
      "definitionEn": "A result where neither side wins.",
      "definitionId": "Hasil ketika tidak ada pihak yang menang.",
      "topicId": "games"
    },
    {
      "id": "games-w20",
      "word": "victory",
      "definitionEn": "A win in a game or battle.",
      "definitionId": "Kemenangan dalam permainan atau pertempuran.",
      "topicId": "games"
    },
    {
      "id": "games-w21",
      "word": "defeat",
      "definitionEn": "A loss in a game or battle.",
      "definitionId": "Kekalahan dalam permainan atau pertempuran.",
      "topicId": "games"
    },
    {
      "id": "games-w22",
      "word": "challenge",
      "definitionEn": "A difficult task that tests skill.",
      "definitionId": "Tugas sulit yang menguji kemampuan.",
      "topicId": "games"
    },
    {
      "id": "games-w23",
      "word": "strategy",
      "definitionEn": "A plan for achieving success.",
      "definitionId": "Rencana untuk meraih keberhasilan.",
      "topicId": "games"
    },
    {
      "id": "games-w24",
      "word": "plan",
      "definitionEn": "A way of doing something; a plan.",
      "definitionId": "Cara untuk melakukan sesuatu; rencana.",
      "topicId": "games"
    },
    {
      "id": "games-w25",
      "word": "skill",
      "definitionEn": "Ability to do something well.",
      "definitionId": "Kemampuan melakukan sesuatu dengan baik.",
      "topicId": "games"
    },
    {
      "id": "games-w26",
      "word": "practice",
      "definitionEn": "Repeated activity to improve skill.",
      "definitionId": "Aktivitas yang diulang untuk meningkatkan kemampuan.",
      "topicId": "games"
    },
    {
      "id": "games-w27",
      "word": "controller",
      "definitionEn": "A device used to control a game.",
      "definitionId": "Perangkat untuk mengendalikan permainan.",
      "topicId": "games"
    },
    {
      "id": "games-w28",
      "word": "keyboard",
      "definitionEn": "A set of keys used to type.",
      "definitionId": "Sekumpulan tombol untuk mengetik.",
      "topicId": "games"
    },
    {
      "id": "games-w29",
      "word": "mouse",
      "definitionEn": "A hand-held device used to control a pointer on a screen.",
      "definitionId": "Perangkat genggam untuk menggerakkan penunjuk di layar.",
      "topicId": "games"
    },
    {
      "id": "games-w30",
      "word": "screen",
      "definitionEn": "The surface on which images are displayed.",
      "definitionId": "Permukaan tempat gambar ditampilkan.",
      "topicId": "games"
    },
    {
      "id": "games-w31",
      "word": "avatar",
      "definitionEn": "A character that represents a player in a game.",
      "definitionId": "Karakter yang mewakili pemain dalam permainan.",
      "topicId": "games"
    },
    {
      "id": "games-w32",
      "word": "character",
      "definitionEn": "A person or figure in a story or game.",
      "definitionId": "Tokoh atau figur dalam cerita atau game.",
      "topicId": "games"
    },
    {
      "id": "games-w33",
      "word": "hero",
      "definitionEn": "The main good character in a story or game.",
      "definitionId": "Tokoh utama yang baik dalam cerita atau game.",
      "topicId": "games"
    },
    {
      "id": "games-w34",
      "word": "enemy",
      "definitionEn": "A person or force that fights against the hero.",
      "definitionId": "Tokoh atau kekuatan yang melawan pahlawan.",
      "topicId": "games"
    },
    {
      "id": "games-w35",
      "word": "item",
      "definitionEn": "An object used in a game.",
      "definitionId": "Benda yang digunakan dalam permainan.",
      "topicId": "games"
    },
    {
      "id": "games-w36",
      "word": "weapon",
      "definitionEn": "An object used for fighting.",
      "definitionId": "Benda yang digunakan untuk bertarung.",
      "topicId": "games"
    },
    {
      "id": "games-w37",
      "word": "armor",
      "definitionEn": "Protective covering worn in battle.",
      "definitionId": "Pelindung yang dipakai dalam pertempuran.",
      "topicId": "games"
    },
    {
      "id": "games-w38",
      "word": "health",
      "definitionEn": "The amount of life or hit points a player has.",
      "definitionId": "Jumlah nyawa atau hit point yang dimiliki pemain.",
      "topicId": "games"
    },
    {
      "id": "games-w39",
      "word": "energy",
      "definitionEn": "The power or strength needed to act.",
      "definitionId": "Kekuatan yang dibutuhkan untuk bertindak.",
      "topicId": "games"
    },
    {
      "id": "games-w41",
      "word": "map",
      "definitionEn": "A diagram or layout of an area.",
      "definitionId": "Diagram atau tata letak suatu area.",
      "topicId": "games"
    },
    {
      "id": "games-w42",
      "word": "zone",
      "definitionEn": "An area or region in a game.",
      "definitionId": "Wilayah atau area dalam game.",
      "topicId": "games"
    },
    {
      "id": "games-w44",
      "word": "server",
      "definitionEn": "A computer that provides data or services to other computers.",
      "definitionId": "Komputer yang menyediakan data atau layanan untuk komputer lain.",
      "topicId": "games"
    },
    {
      "id": "games-w45",
      "word": "ping",
      "definitionEn": "The delay between your action and the game response.",
      "definitionId": "Jeda antara aksi kamu dan respons game.",
      "topicId": "games"
    },
    {
      "id": "games-w46",
      "word": "lag",
      "definitionEn": "A delay or slow response in online games.",
      "definitionId": "Keterlambatan atau respons lambat dalam game online.",
      "topicId": "games"
    },
    {
      "id": "games-w47",
      "word": "online",
      "definitionEn": "Connected to the internet.",
      "definitionId": "Terhubung ke internet.",
      "topicId": "games"
    },
    {
      "id": "games-w48",
      "word": "offline",
      "definitionEn": "Not connected to the internet.",
      "definitionId": "Tidak terhubung ke internet.",
      "topicId": "games"
    },
    {
      "id": "games-w49",
      "word": "teammate",
      "definitionEn": "A member of your team.",
      "definitionId": "Anggota dalam tim kamu.",
      "topicId": "games"
    },
    {
      "id": "games-w50",
      "word": "rematch",
      "definitionEn": "A second match or game after the first.",
      "definitionId": "Pertandingan ulang setelah yang pertama.",
      "topicId": "games"
    }
  ],
  "hobbies-interests": [
    {
      "id": "hobbies-interests-w01",
      "word": "hobby",
      "definitionEn": "An activity done for pleasure in free time.",
      "definitionId": "Kegiatan yang dilakukan untuk kesenangan di waktu luang.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w02",
      "word": "interest",
      "definitionEn": "A feeling of wanting to know or do something.",
      "definitionId": "Rasa ingin tahu atau keinginan melakukan sesuatu.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w05",
      "word": "activity",
      "definitionEn": "Something you do, often regularly.",
      "definitionId": "Hal yang kamu lakukan, sering secara rutin.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w06",
      "word": "relax",
      "definitionEn": "To become less tense or anxious; to rest.",
      "definitionId": "Menjadi lebih rileks atau tidak tegang; beristirahat.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w07",
      "word": "enjoy",
      "definitionEn": "To take pleasure in something.",
      "definitionId": "Menikmati sesuatu.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w08",
      "word": "practice",
      "definitionEn": "Repeated activity to improve skill.",
      "definitionId": "Aktivitas yang diulang untuk meningkatkan kemampuan.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w09",
      "word": "collect",
      "definitionEn": "To gather items as a hobby.",
      "definitionId": "Mengumpulkan barang sebagai hobi.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w10",
      "word": "collection",
      "definitionEn": "A group of things gathered together.",
      "definitionId": "Sekelompok benda yang dikumpulkan.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w11",
      "word": "read",
      "definitionEn": "To look at and understand written words.",
      "definitionId": "Melihat dan memahami kata-kata tertulis.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w12",
      "word": "book",
      "definitionEn": "A set of printed or written pages bound together.",
      "definitionId": "Sekumpulan halaman yang dicetak atau ditulis dan dijilid.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w13",
      "word": "novel",
      "definitionEn": "A long story in book form.",
      "definitionId": "Cerita panjang dalam bentuk buku.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w14",
      "word": "write",
      "definitionEn": "To form letters or words on paper.",
      "definitionId": "Membentuk huruf atau kata di kertas.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w15",
      "word": "draw",
      "definitionEn": "To make a picture with a pencil or pen.",
      "definitionId": "Membuat gambar dengan pensil atau pena.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w16",
      "word": "paint",
      "definitionEn": "To make a picture using paint.",
      "definitionId": "Membuat gambar menggunakan cat.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w17",
      "word": "sketch",
      "definitionEn": "A rough or unfinished drawing.",
      "definitionId": "Gambar kasar atau belum selesai.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w18",
      "word": "coloring",
      "definitionEn": "The act of adding color to drawings.",
      "definitionId": "Kegiatan memberi warna pada gambar.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w19",
      "word": "music",
      "definitionEn": "Organized sound such as songs or instrumental pieces.",
      "definitionId": "Suara yang diatur seperti lagu atau musik instrumental.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w20",
      "word": "song",
      "definitionEn": "A piece of music with words.",
      "definitionId": "Karya musik yang memiliki lirik.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w21",
      "word": "sing",
      "definitionEn": "To produce musical sounds with the voice.",
      "definitionId": "Menghasilkan suara musik dengan suara.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w22",
      "word": "dance",
      "definitionEn": "To move the body to music or rhythm.",
      "definitionId": "Menggerakkan tubuh mengikuti musik atau irama.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w23",
      "word": "guitar",
      "definitionEn": "A stringed musical instrument played by plucking or strumming.",
      "definitionId": "Alat musik berdawai yang dimainkan dengan dipetik atau digesek.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w24",
      "word": "piano",
      "definitionEn": "A large keyboard musical instrument.",
      "definitionId": "Alat musik keyboard besar.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w25",
      "word": "drum",
      "definitionEn": "A percussion instrument played by striking a membrane.",
      "definitionId": "Alat musik perkusi yang dimainkan dengan dipukul.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w26",
      "word": "watch",
      "definitionEn": "To look at something for a period of time.",
      "definitionId": "Melihat sesuatu untuk jangka waktu tertentu.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w27",
      "word": "movie",
      "definitionEn": "A motion picture.",
      "definitionId": "Gambar bergerak; film.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w28",
      "word": "series",
      "definitionEn": "A set of related programs.",
      "definitionId": "Sekumpulan program yang saling terkait.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w29",
      "word": "photo",
      "definitionEn": "A picture made with a camera.",
      "definitionId": "Gambar yang diambil dengan kamera.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w30",
      "word": "photography",
      "definitionEn": "The art or practice of taking photographs.",
      "definitionId": "Seni atau praktik mengambil foto.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w31",
      "word": "travel",
      "definitionEn": "To go from one place to another, often for pleasure.",
      "definitionId": "Pergi dari satu tempat ke tempat lain, sering untuk bersenang-senang.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w32",
      "word": "trip",
      "definitionEn": "A journey or short travel.",
      "definitionId": "Perjalanan atau perjalanan singkat.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w33",
      "word": "hiking",
      "definitionEn": "Walking in nature for pleasure or exercise.",
      "definitionId": "Berjalan di alam untuk bersenang-senang atau berolahraga.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w34",
      "word": "camping",
      "definitionEn": "Living outdoors in a tent or temporary shelter.",
      "definitionId": "Tinggal di luar ruangan dengan tenda atau tempat sementara.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w35",
      "word": "swim",
      "definitionEn": "To move through water by using arms and legs.",
      "definitionId": "Bergerak di air dengan menggunakan lengan dan kaki.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w36",
      "word": "run",
      "definitionEn": "To move quickly on foot.",
      "definitionId": "Bergerak cepat dengan berjalan kaki.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w37",
      "word": "jog",
      "definitionEn": "To run slowly and steadily for exercise.",
      "definitionId": "Berlari pelan dan stabil untuk olahraga.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w38",
      "word": "cycle",
      "definitionEn": "To ride a bicycle.",
      "definitionId": "Mengendarai sepeda.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w39",
      "word": "football",
      "definitionEn": "A game played by kicking a ball (soccer).",
      "definitionId": "Permainan yang dimainkan dengan menendang bola (soccer).",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w40",
      "word": "badminton",
      "definitionEn": "A game played with rackets and a shuttlecock.",
      "definitionId": "Permainan dengan raket dan kok.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w41",
      "word": "basketball",
      "definitionEn": "A game played by shooting a ball through a hoop.",
      "definitionId": "Permainan dengan melempar bola ke ring.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w42",
      "word": "chess",
      "definitionEn": "A board game of strategy played on a checkered board.",
      "definitionId": "Permainan strategi di papan kotak-kotak.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w43",
      "word": "game",
      "definitionEn": "An activity played for fun or competition.",
      "definitionId": "Kegiatan yang dimainkan untuk hiburan atau kompetisi.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w45",
      "word": "cook",
      "definitionEn": "To prepare food by heating it.",
      "definitionId": "Menyiapkan makanan dengan cara memanaskannya.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w46",
      "word": "bake",
      "definitionEn": "To cook in an oven.",
      "definitionId": "Memasak di dalam oven.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w47",
      "word": "garden",
      "definitionEn": "To grow plants or care for a garden.",
      "definitionId": "Menanam atau merawat tanaman di kebun.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w48",
      "word": "fishing",
      "definitionEn": "The activity of catching fish.",
      "definitionId": "Kegiatan menangkap ikan.",
      "topicId": "hobbies-interests"
    },
    {
      "id": "hobbies-interests-w49",
      "word": "craft",
      "definitionEn": "To make things by hand; also a handmade object.",
      "definitionId": "Membuat sesuatu dengan tangan; juga benda buatan tangan.",
      "topicId": "hobbies-interests"
    }
  ],
  "home": [
    {
      "id": "home-w01",
      "word": "home",
      "definitionEn": "A place where someone lives.",
      "definitionId": "Tempat seseorang tinggal.",
      "topicId": "home"
    },
    {
      "id": "home-w02",
      "word": "house",
      "definitionEn": "A building for people to live in.",
      "definitionId": "Bangunan tempat orang tinggal.",
      "topicId": "home"
    },
    {
      "id": "home-w03",
      "word": "apartment",
      "definitionEn": "A set of rooms in a building where people live.",
      "definitionId": "Sekumpulan ruangan dalam sebuah bangunan tempat orang tinggal.",
      "topicId": "home"
    },
    {
      "id": "home-w04",
      "word": "room",
      "definitionEn": "A part of a building enclosed by walls, floor, and ceiling.",
      "definitionId": "Bagian bangunan yang dibatasi dinding, lantai, dan langit-langit.",
      "topicId": "home"
    },
    {
      "id": "home-w05",
      "word": "bedroom",
      "definitionEn": "A room for sleeping.",
      "definitionId": "Ruangan untuk tidur.",
      "topicId": "home"
    },
    {
      "id": "home-w06",
      "word": "bathroom",
      "definitionEn": "A room with a bathtub or shower, and usually a sink and toilet.",
      "definitionId": "Ruangan dengan bathtub atau shower, dan biasanya ada wastafel serta toilet.",
      "topicId": "home"
    },
    {
      "id": "home-w07",
      "word": "kitchen",
      "definitionEn": "A room where food is prepared and cooked.",
      "definitionId": "Ruangan tempat makanan disiapkan dan dimasak.",
      "topicId": "home"
    },
    {
      "id": "home-w10",
      "word": "garage",
      "definitionEn": "A building or space for keeping vehicles.",
      "definitionId": "Bangunan atau tempat untuk menyimpan kendaraan.",
      "topicId": "home"
    },
    {
      "id": "home-w11",
      "word": "balcony",
      "definitionEn": "A platform projecting from a building, usually with a railing.",
      "definitionId": "Platform menjorok dari bangunan, biasanya dengan pagar.",
      "topicId": "home"
    },
    {
      "id": "home-w12",
      "word": "yard",
      "definitionEn": "An area of land around a house.",
      "definitionId": "Area tanah di sekitar rumah.",
      "topicId": "home"
    },
    {
      "id": "home-w13",
      "word": "garden",
      "definitionEn": "An area where plants are grown.",
      "definitionId": "Area tempat tanaman ditanam.",
      "topicId": "home"
    },
    {
      "id": "home-w14",
      "word": "fence",
      "definitionEn": "A structure that encloses an area, often made of wood or metal.",
      "definitionId": "Struktur yang membatasi area, sering dari kayu atau logam.",
      "topicId": "home"
    },
    {
      "id": "home-w15",
      "word": "roof",
      "definitionEn": "The top covering of a building.",
      "definitionId": "Penutup bagian atas bangunan.",
      "topicId": "home"
    },
    {
      "id": "home-w16",
      "word": "ceiling",
      "definitionEn": "The inside top surface of a room.",
      "definitionId": "Permukaan bagian atas di dalam ruangan.",
      "topicId": "home"
    },
    {
      "id": "home-w17",
      "word": "floor",
      "definitionEn": "The surface you walk on in a room.",
      "definitionId": "Permukaan tempat kamu berjalan di dalam ruangan.",
      "topicId": "home"
    },
    {
      "id": "home-w18",
      "word": "wall",
      "definitionEn": "The vertical surface of a room or building.",
      "definitionId": "Permukaan vertikal ruangan atau bangunan.",
      "topicId": "home"
    },
    {
      "id": "home-w19",
      "word": "door",
      "definitionEn": "A movable barrier used to close an entrance.",
      "definitionId": "Penghalang yang dapat bergerak untuk menutup pintu masuk.",
      "topicId": "home"
    },
    {
      "id": "home-w20",
      "word": "window",
      "definitionEn": "An opening in a wall that lets in light and air, often with glass.",
      "definitionId": "Bukaan di dinding yang memberi cahaya dan udara, biasanya berkaca.",
      "topicId": "home"
    },
    {
      "id": "home-w21",
      "word": "stairs",
      "definitionEn": "Steps that lead from one level to another.",
      "definitionId": "Anak tangga yang menghubungkan satu tingkat ke tingkat lain.",
      "topicId": "home"
    },
    {
      "id": "home-w22",
      "word": "hallway",
      "definitionEn": "A passage inside a building with rooms on either side.",
      "definitionId": "Lorong di dalam bangunan dengan ruangan di kedua sisi.",
      "topicId": "home"
    },
    {
      "id": "home-w23",
      "word": "gate",
      "definitionEn": "A movable barrier at an entrance, especially to a yard.",
      "definitionId": "Penghalang yang dapat bergerak di pintu masuk, terutama ke halaman.",
      "topicId": "home"
    },
    {
      "id": "home-w24",
      "word": "key",
      "definitionEn": "A small piece of metal used to open a lock.",
      "definitionId": "Benda logam kecil untuk membuka kunci.",
      "topicId": "home"
    },
    {
      "id": "home-w25",
      "word": "lock",
      "definitionEn": "A device for securing a door or container.",
      "definitionId": "Perangkat untuk mengamankan pintu atau wadah.",
      "topicId": "home"
    },
    {
      "id": "home-w26",
      "word": "lamp",
      "definitionEn": "A device that gives light.",
      "definitionId": "Perangkat yang memberikan cahaya.",
      "topicId": "home"
    },
    {
      "id": "home-w28",
      "word": "sofa",
      "definitionEn": "A large comfortable seat for more than one person.",
      "definitionId": "Kursi besar yang nyaman untuk lebih dari satu orang.",
      "topicId": "home"
    },
    {
      "id": "home-w29",
      "word": "chair",
      "definitionEn": "A seat for one person, usually with a back.",
      "definitionId": "Tempat duduk untuk satu orang, biasanya ada sandaran.",
      "topicId": "home"
    },
    {
      "id": "home-w30",
      "word": "table",
      "definitionEn": "A piece of furniture with a flat top and legs.",
      "definitionId": "Perabot dengan permukaan datar dan kaki.",
      "topicId": "home"
    },
    {
      "id": "home-w31",
      "word": "bed",
      "definitionEn": "A piece of furniture used for sleeping.",
      "definitionId": "Perabot untuk tidur.",
      "topicId": "home"
    },
    {
      "id": "home-w32",
      "word": "pillow",
      "definitionEn": "A soft object used to support the head in bed.",
      "definitionId": "Benda empuk untuk menyangga kepala di tempat tidur.",
      "topicId": "home"
    },
    {
      "id": "home-w33",
      "word": "blanket",
      "definitionEn": "A covering used on a bed for warmth.",
      "definitionId": "Penutup yang digunakan di tempat tidur untuk memberi kehangatan.",
      "topicId": "home"
    },
    {
      "id": "home-w34",
      "word": "wardrobe",
      "definitionEn": "A large piece of furniture for storing clothes.",
      "definitionId": "Perabot besar untuk menyimpan pakaian.",
      "topicId": "home"
    },
    {
      "id": "home-w35",
      "word": "closet",
      "definitionEn": "A space or cabinet used for storing clothes.",
      "definitionId": "Ruang atau lemari untuk menyimpan pakaian.",
      "topicId": "home"
    },
    {
      "id": "home-w36",
      "word": "shelf",
      "definitionEn": "A flat surface fixed to a wall for holding objects.",
      "definitionId": "Permukaan datar yang dipasang di dinding untuk menaruh benda.",
      "topicId": "home"
    },
    {
      "id": "home-w37",
      "word": "drawer",
      "definitionEn": "A sliding box in a piece of furniture.",
      "definitionId": "Kotak geser di dalam perabot.",
      "topicId": "home"
    },
    {
      "id": "home-w38",
      "word": "mirror",
      "definitionEn": "A smooth surface (often glass) that forms images by reflection.",
      "definitionId": "Permukaan halus (sering kaca) yang memantulkan bayangan.",
      "topicId": "home"
    },
    {
      "id": "home-w39",
      "word": "sink",
      "definitionEn": "A fixed basin with a drain and water supply for washing.",
      "definitionId": "Bak cuci permanen dengan saluran pembuangan dan suplai air.",
      "topicId": "home"
    },
    {
      "id": "home-w40",
      "word": "shower",
      "definitionEn": "A bath in which water is sprayed on the body.",
      "definitionId": "Mandi dengan air yang disemprotkan ke tubuh.",
      "topicId": "home"
    },
    {
      "id": "home-w41",
      "word": "toilet",
      "definitionEn": "A fixture for urination and defecation, usually with a water-flushed bowl.",
      "definitionId": "Perlengkapan untuk buang air kecil dan besar, biasanya berupa mangkuk dengan siraman air.",
      "topicId": "home"
    },
    {
      "id": "home-w42",
      "word": "bathtub",
      "definitionEn": "A fixed tub for bathing.",
      "definitionId": "Bak permanen untuk mandi berendam.",
      "topicId": "home"
    },
    {
      "id": "home-w43",
      "word": "stove",
      "definitionEn": "An appliance used for cooking, with burners or heating elements.",
      "definitionId": "Perangkat memasak dengan tungku atau elemen pemanas.",
      "topicId": "home"
    },
    {
      "id": "home-w44",
      "word": "oven",
      "definitionEn": "An enclosed appliance for baking or roasting.",
      "definitionId": "Perangkat tertutup untuk memanggang atau membakar.",
      "topicId": "home"
    },
    {
      "id": "home-w45",
      "word": "fridge",
      "definitionEn": "An appliance that keeps food cold.",
      "definitionId": "Perangkat yang menjaga makanan tetap dingin.",
      "topicId": "home"
    },
    {
      "id": "home-w46",
      "word": "freezer",
      "definitionEn": "An appliance that keeps food frozen.",
      "definitionId": "Perangkat yang menjaga makanan tetap beku.",
      "topicId": "home"
    },
    {
      "id": "home-w47",
      "word": "microwave",
      "definitionEn": "An appliance that heats food using microwaves.",
      "definitionId": "Perangkat yang memanaskan makanan dengan gelombang mikro.",
      "topicId": "home"
    },
    {
      "id": "home-w49",
      "word": "fan",
      "definitionEn": "A device that moves air to cool a room.",
      "definitionId": "Perangkat yang menggerakkan udara untuk mendinginkan ruangan.",
      "topicId": "home"
    },
    {
      "id": "home-w51",
      "word": "curtain",
      "definitionEn": "A piece of cloth used to cover a window.",
      "definitionId": "Kain yang digunakan untuk menutupi jendela.",
      "topicId": "home"
    },
    {
      "id": "home-w52",
      "word": "carpet",
      "definitionEn": "A thick covering for the floor.",
      "definitionId": "Penutup lantai yang tebal.",
      "topicId": "home"
    },
    {
      "id": "home-w53",
      "word": "doormat",
      "definitionEn": "A mat placed at a door to wipe shoes.",
      "definitionId": "Alas di depan pintu untuk membersihkan sepatu.",
      "topicId": "home"
    },
    {
      "id": "home-w55",
      "word": "broom",
      "definitionEn": "A tool with bristles on a handle used for sweeping.",
      "definitionId": "Alat dengan bulu pada gagang untuk menyapu.",
      "topicId": "home"
    },
    {
      "id": "home-w56",
      "word": "mop",
      "definitionEn": "A tool used for cleaning floors with a wet head on a handle.",
      "definitionId": "Alat untuk mengepel lantai dengan kepala basah pada gagang.",
      "topicId": "home"
    },
    {
      "id": "home-w57",
      "word": "bucket",
      "definitionEn": "A container for carrying or holding liquids or solids.",
      "definitionId": "Wadah untuk membawa atau menampung cairan atau benda.",
      "topicId": "home"
    },
    {
      "id": "home-w59",
      "word": "kettle",
      "definitionEn": "A container with a spout used for boiling water.",
      "definitionId": "Wadah bercerat untuk merebus air.",
      "topicId": "home"
    },
    {
      "id": "home-w61",
      "word": "dishwasher",
      "definitionEn": "An appliance that washes dishes automatically.",
      "definitionId": "Perangkat yang mencuci piring secara otomatis.",
      "topicId": "home"
    },
    {
      "id": "home-w63",
      "word": "bookshelf",
      "definitionEn": "A piece of furniture with shelves for books.",
      "definitionId": "Perabot dengan rak untuk menyimpan buku.",
      "topicId": "home"
    },
    {
      "id": "home-w64",
      "word": "desk",
      "definitionEn": "A table used for writing or working.",
      "definitionId": "Meja untuk menulis atau bekerja.",
      "topicId": "home"
    },
    {
      "id": "home-w66",
      "word": "clock",
      "definitionEn": "A device that shows the time.",
      "definitionId": "Perangkat yang menunjukkan waktu.",
      "topicId": "home"
    },
    {
      "id": "home-w69",
      "word": "television",
      "definitionEn": "A device for receiving and displaying broadcasts.",
      "definitionId": "Perangkat untuk menerima dan menampilkan siaran.",
      "topicId": "home"
    },
    {
      "id": "home-w73",
      "word": "charger",
      "definitionEn": "A device for charging a battery.",
      "definitionId": "Perangkat untuk mengisi daya baterai.",
      "topicId": "home"
    },
    {
      "id": "home-w75",
      "word": "faucet",
      "definitionEn": "A fixture for drawing or regulating the flow of liquid from a pipe.",
      "definitionId": "Perlengkapan untuk menarik atau mengatur aliran cairan dari pipa.",
      "topicId": "home"
    },
    {
      "id": "home-w76",
      "word": "soap",
      "definitionEn": "A cleansing agent made by the reaction of fats with an alkali.",
      "definitionId": "Bahan pembersih yang dibuat dari reaksi lemak dengan alkali.",
      "topicId": "home"
    },
    {
      "id": "home-w77",
      "word": "toothbrush",
      "definitionEn": "A brush for cleaning the teeth.",
      "definitionId": "Sikat untuk membersihkan gigi.",
      "topicId": "home"
    },
    {
      "id": "home-w78",
      "word": "toothpaste",
      "definitionEn": "A paste used for cleaning the teeth.",
      "definitionId": "Pasta untuk membersihkan gigi.",
      "topicId": "home"
    },
    {
      "id": "home-w79",
      "word": "shampoo",
      "definitionEn": "A preparation for washing the hair.",
      "definitionId": "Sediaan untuk mencuci rambut.",
      "topicId": "home"
    },
    {
      "id": "home-w81",
      "word": "detergent",
      "definitionEn": "A substance used for cleaning.",
      "definitionId": "Zat yang digunakan untuk membersihkan.",
      "topicId": "home"
    },
    {
      "id": "home-w82",
      "word": "sponge",
      "definitionEn": "A porous piece used for cleaning and absorbing water.",
      "definitionId": "Bahan berpori untuk membersihkan dan menyerap air.",
      "topicId": "home"
    },
    {
      "id": "home-w85",
      "word": "knife",
      "definitionEn": "A tool with a handle and a sharp blade for cutting.",
      "definitionId": "Alat bergagang dengan bilah tajam untuk memotong.",
      "topicId": "home"
    },
    {
      "id": "home-w86",
      "word": "fork",
      "definitionEn": "An eating utensil with prongs.",
      "definitionId": "Alat makan dengan ujung bercabang.",
      "topicId": "home"
    },
    {
      "id": "home-w87",
      "word": "spoon",
      "definitionEn": "An eating utensil with a small bowl at the end.",
      "definitionId": "Alat makan dengan ujung berbentuk sendok kecil.",
      "topicId": "home"
    },
    {
      "id": "home-w88",
      "word": "plate",
      "definitionEn": "A flat dish used for serving food.",
      "definitionId": "Piring datar untuk menyajikan makanan.",
      "topicId": "home"
    },
    {
      "id": "home-w89",
      "word": "bowl",
      "definitionEn": "A round open dish used for food.",
      "definitionId": "Wadah bulat terbuka untuk makanan.",
      "topicId": "home"
    },
    {
      "id": "home-w90",
      "word": "cup",
      "definitionEn": "A small open container used for drinking.",
      "definitionId": "Wadah kecil terbuka untuk minum.",
      "topicId": "home"
    },
    {
      "id": "home-w91",
      "word": "mug",
      "definitionEn": "A large cup, often with a handle.",
      "definitionId": "Cangkir besar, sering dengan pegangan.",
      "topicId": "home"
    },
    {
      "id": "home-w92",
      "word": "glass",
      "definitionEn": "A drinking container made of glass.",
      "definitionId": "Wadah minum yang terbuat dari kaca.",
      "topicId": "home"
    },
    {
      "id": "home-w94",
      "word": "pan",
      "definitionEn": "A shallow container used for cooking.",
      "definitionId": "Wadah dangkal untuk memasak.",
      "topicId": "home"
    },
    {
      "id": "home-w95",
      "word": "pot",
      "definitionEn": "A deep container used for cooking.",
      "definitionId": "Wadah dalam untuk memasak.",
      "topicId": "home"
    },
    {
      "id": "home-w96",
      "word": "lid",
      "definitionEn": "A cover for a pot or pan.",
      "definitionId": "Penutup untuk panci atau wajan.",
      "topicId": "home"
    },
    {
      "id": "home-w97",
      "word": "counter",
      "definitionEn": "A long flat surface used for preparing food or for work.",
      "definitionId": "Permukaan datar panjang untuk menyiapkan makanan atau bekerja.",
      "topicId": "home"
    }
  ],
  "kitchen": [
    {
      "id": "kitchen-w01",
      "word": "kitchen",
      "definitionEn": "A room where food is prepared and cooked.",
      "definitionId": "Ruangan tempat makanan disiapkan dan dimasak.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w02",
      "word": "stove",
      "definitionEn": "An appliance used for cooking, with burners or heating elements.",
      "definitionId": "Perangkat memasak dengan tungku atau elemen pemanas.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w05",
      "word": "oven",
      "definitionEn": "An enclosed appliance for baking or roasting.",
      "definitionId": "Perangkat tertutup untuk memanggang atau membakar.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w06",
      "word": "microwave",
      "definitionEn": "An appliance that heats food using microwaves.",
      "definitionId": "Perangkat yang memanaskan makanan dengan gelombang mikro.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w07",
      "word": "refrigerator",
      "definitionEn": "An appliance that keeps food cold.",
      "definitionId": "Perangkat yang menjaga makanan tetap dingin.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w08",
      "word": "freezer",
      "definitionEn": "An appliance that keeps food frozen.",
      "definitionId": "Perangkat yang menjaga makanan tetap beku.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w09",
      "word": "sink",
      "definitionEn": "A fixed basin with a drain and water supply for washing.",
      "definitionId": "Bak cuci permanen dengan saluran pembuangan dan suplai air.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w10",
      "word": "faucet",
      "definitionEn": "A fixture for drawing or regulating the flow of liquid from a pipe.",
      "definitionId": "Perlengkapan untuk menarik atau mengatur aliran cairan dari pipa.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w11",
      "word": "counter",
      "definitionEn": "A long flat surface used for preparing food or work.",
      "definitionId": "Permukaan datar panjang untuk menyiapkan makanan atau bekerja.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w12",
      "word": "cabinet",
      "definitionEn": "A case or cupboard usually having doors and shelves.",
      "definitionId": "Lemari atau kabinet yang biasanya berpintu dan bersusun rak.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w13",
      "word": "shelf",
      "definitionEn": "A flat surface fixed to a wall for holding objects.",
      "definitionId": "Permukaan datar yang dipasang di dinding untuk menaruh benda.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w14",
      "word": "drawer",
      "definitionEn": "A sliding box in a piece of furniture.",
      "definitionId": "Kotak geser di dalam perabot.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w15",
      "word": "dish",
      "definitionEn": "A piece of tableware used for food.",
      "definitionId": "Peralatan makan yang digunakan untuk menyajikan makanan.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w16",
      "word": "plate",
      "definitionEn": "A flat dish used for serving food.",
      "definitionId": "Piring datar untuk menyajikan makanan.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w17",
      "word": "bowl",
      "definitionEn": "A round open dish used for food.",
      "definitionId": "Wadah bulat terbuka untuk makanan.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w18",
      "word": "cup",
      "definitionEn": "A small open container used for drinking.",
      "definitionId": "Wadah kecil terbuka untuk minum.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w19",
      "word": "glass",
      "definitionEn": "A drinking container made of glass.",
      "definitionId": "Wadah minum yang terbuat dari kaca.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w20",
      "word": "mug",
      "definitionEn": "A large cup, often with a handle.",
      "definitionId": "Cangkir besar, sering dengan pegangan.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w21",
      "word": "spoon",
      "definitionEn": "An eating utensil with a small bowl at the end.",
      "definitionId": "Alat makan dengan ujung berbentuk sendok kecil.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w22",
      "word": "fork",
      "definitionEn": "An eating utensil with prongs.",
      "definitionId": "Alat makan dengan ujung bercabang.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w23",
      "word": "knife",
      "definitionEn": "A tool with a handle and a sharp blade for cutting.",
      "definitionId": "Alat bergagang dengan bilah tajam untuk memotong.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w24",
      "word": "chopsticks",
      "definitionEn": "A pair of slender sticks used for eating.",
      "definitionId": "Sepasang batang tipis untuk makan.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w25",
      "word": "pan",
      "definitionEn": "A shallow container used for cooking.",
      "definitionId": "Wadah dangkal untuk memasak.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w26",
      "word": "pot",
      "definitionEn": "A deep container used for cooking.",
      "definitionId": "Wadah dalam untuk memasak.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w27",
      "word": "lid",
      "definitionEn": "A cover for a pot or pan.",
      "definitionId": "Penutup untuk panci atau wajan.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w29",
      "word": "spatula",
      "definitionEn": "A flat kitchen tool used for lifting or spreading.",
      "definitionId": "Alat dapur pipih untuk mengangkat atau mengoles.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w30",
      "word": "ladle",
      "definitionEn": "A long-handled spoon used for serving liquids.",
      "definitionId": "Sendok bertangkai panjang untuk menyajikan cairan.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w31",
      "word": "tongs",
      "definitionEn": "A tool with two arms used to grip food.",
      "definitionId": "Alat dengan dua lengan untuk menjepit makanan.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w32",
      "word": "peeler",
      "definitionEn": "A tool used to remove the skin of fruits or vegetables.",
      "definitionId": "Alat untuk mengupas kulit buah atau sayur.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w33",
      "word": "grater",
      "definitionEn": "A tool used to shred food into small pieces.",
      "definitionId": "Alat untuk memarut makanan menjadi bagian kecil.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w34",
      "word": "strainer",
      "definitionEn": "A tool used to separate solids from liquids.",
      "definitionId": "Alat untuk memisahkan padatan dari cairan.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w35",
      "word": "blender",
      "definitionEn": "An appliance that mixes or chops food.",
      "definitionId": "Perangkat yang mencampur atau memotong makanan.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w37",
      "word": "kettle",
      "definitionEn": "A container with a spout used for boiling water.",
      "definitionId": "Wadah bercerat untuk merebus air.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w38",
      "word": "toaster",
      "definitionEn": "An appliance for browning bread.",
      "definitionId": "Perangkat untuk memanggang roti.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w39",
      "word": "ingredient",
      "definitionEn": "A food item used to make a dish.",
      "definitionId": "Bahan makanan yang digunakan untuk membuat hidangan.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w40",
      "word": "recipe",
      "definitionEn": "Instructions for preparing a dish.",
      "definitionId": "Instruksi untuk menyiapkan sebuah hidangan.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w41",
      "word": "cook",
      "definitionEn": "To prepare food by heating it.",
      "definitionId": "Menyiapkan makanan dengan cara memanaskannya.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w42",
      "word": "fry",
      "definitionEn": "To cook food in hot oil.",
      "definitionId": "Memasak makanan dengan minyak panas.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w43",
      "word": "boil",
      "definitionEn": "To cook in boiling water.",
      "definitionId": "Memasak dalam air mendidih.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w44",
      "word": "steam",
      "definitionEn": "To cook with steam.",
      "definitionId": "Memasak dengan uap.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w45",
      "word": "bake",
      "definitionEn": "To cook by dry heat in an oven.",
      "definitionId": "Memasak dengan panas kering di oven.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w46",
      "word": "chop",
      "definitionEn": "To cut into pieces.",
      "definitionId": "Memotong menjadi bagian-bagian.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w47",
      "word": "slice",
      "definitionEn": "To cut into thin pieces.",
      "definitionId": "Memotong menjadi bagian tipis.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w48",
      "word": "mix",
      "definitionEn": "To combine ingredients.",
      "definitionId": "Menggabungkan bahan-bahan.",
      "topicId": "kitchen"
    },
    {
      "id": "kitchen-w49",
      "word": "serve",
      "definitionEn": "To present food for eating.",
      "definitionId": "Menyajikan makanan untuk dimakan.",
      "topicId": "kitchen"
    }
  ],
  "number": [
    {
      "id": "number-w01",
      "word": "one",
      "definitionEn": "The number 1.",
      "definitionId": "Angka 1.",
      "topicId": "number"
    },
    {
      "id": "number-w02",
      "word": "two",
      "definitionEn": "The number 2.",
      "definitionId": "Angka 2.",
      "topicId": "number"
    },
    {
      "id": "number-w03",
      "word": "three",
      "definitionEn": "The number 3.",
      "definitionId": "Angka 3.",
      "topicId": "number"
    },
    {
      "id": "number-w04",
      "word": "four",
      "definitionEn": "The number 4.",
      "definitionId": "Angka 4.",
      "topicId": "number"
    },
    {
      "id": "number-w05",
      "word": "five",
      "definitionEn": "The number 5.",
      "definitionId": "Angka 5.",
      "topicId": "number"
    },
    {
      "id": "number-w06",
      "word": "six",
      "definitionEn": "The number 6.",
      "definitionId": "Angka 6.",
      "topicId": "number"
    },
    {
      "id": "number-w07",
      "word": "seven",
      "definitionEn": "The number 7.",
      "definitionId": "Angka 7.",
      "topicId": "number"
    },
    {
      "id": "number-w08",
      "word": "eight",
      "definitionEn": "The number 8.",
      "definitionId": "Angka 8.",
      "topicId": "number"
    },
    {
      "id": "number-w09",
      "word": "nine",
      "definitionEn": "The number 9.",
      "definitionId": "Angka 9.",
      "topicId": "number"
    },
    {
      "id": "number-w10",
      "word": "ten",
      "definitionEn": "The number 10.",
      "definitionId": "Angka 10.",
      "topicId": "number"
    },
    {
      "id": "number-w11",
      "word": "eleven",
      "definitionEn": "The number 11.",
      "definitionId": "Angka 11.",
      "topicId": "number"
    },
    {
      "id": "number-w12",
      "word": "twelve",
      "definitionEn": "The number 12.",
      "definitionId": "Angka 12.",
      "topicId": "number"
    },
    {
      "id": "number-w13",
      "word": "thirteen",
      "definitionEn": "The number 13.",
      "definitionId": "Angka 13.",
      "topicId": "number"
    },
    {
      "id": "number-w14",
      "word": "fourteen",
      "definitionEn": "The number 14.",
      "definitionId": "Angka 14.",
      "topicId": "number"
    },
    {
      "id": "number-w15",
      "word": "fifteen",
      "definitionEn": "The number 15.",
      "definitionId": "Angka 15.",
      "topicId": "number"
    },
    {
      "id": "number-w16",
      "word": "sixteen",
      "definitionEn": "The number 16.",
      "definitionId": "Angka 16.",
      "topicId": "number"
    },
    {
      "id": "number-w17",
      "word": "seventeen",
      "definitionEn": "The number 17.",
      "definitionId": "Angka 17.",
      "topicId": "number"
    },
    {
      "id": "number-w18",
      "word": "eighteen",
      "definitionEn": "The number 18.",
      "definitionId": "Angka 18.",
      "topicId": "number"
    },
    {
      "id": "number-w19",
      "word": "nineteen",
      "definitionEn": "The number 19.",
      "definitionId": "Angka 19.",
      "topicId": "number"
    },
    {
      "id": "number-w20",
      "word": "twenty",
      "definitionEn": "The number 20.",
      "definitionId": "Angka 20.",
      "topicId": "number"
    },
    {
      "id": "number-w30",
      "word": "thirty",
      "definitionEn": "The number 30.",
      "definitionId": "Angka 30.",
      "topicId": "number"
    },
    {
      "id": "number-w31",
      "word": "forty",
      "definitionEn": "The number 40.",
      "definitionId": "Angka 40.",
      "topicId": "number"
    },
    {
      "id": "number-w32",
      "word": "fifty",
      "definitionEn": "The number 50.",
      "definitionId": "Angka 50.",
      "topicId": "number"
    },
    {
      "id": "number-w33",
      "word": "sixty",
      "definitionEn": "The number 60.",
      "definitionId": "Angka 60.",
      "topicId": "number"
    },
    {
      "id": "number-w34",
      "word": "seventy",
      "definitionEn": "The number 70.",
      "definitionId": "Angka 70.",
      "topicId": "number"
    },
    {
      "id": "number-w35",
      "word": "eighty",
      "definitionEn": "The number 80.",
      "definitionId": "Angka 80.",
      "topicId": "number"
    },
    {
      "id": "number-w36",
      "word": "ninety",
      "definitionEn": "The number 90.",
      "definitionId": "Angka 90.",
      "topicId": "number"
    },
    {
      "id": "number-w91",
      "word": "plus",
      "definitionEn": "The addition symbol.",
      "definitionId": "Simbol penjumlahan.",
      "topicId": "number"
    },
    {
      "id": "number-w92",
      "word": "minus",
      "definitionEn": "The subtraction symbol.",
      "definitionId": "Simbol pengurangan.",
      "topicId": "number"
    },
    {
      "id": "number-w93",
      "word": "times",
      "definitionEn": "The multiplication symbol.",
      "definitionId": "Simbol perkalian.",
      "topicId": "number"
    },
    {
      "id": "number-w95",
      "word": "equals",
      "definitionEn": "The equality symbol.",
      "definitionId": "Simbol kesetaraan.",
      "topicId": "number"
    }
  ],
  "ordinal-number": [
    {
      "id": "ordinal-number-w01",
      "word": "first",
      "definitionEn": "The 1st in order.",
      "definitionId": "Urutan ke-1.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w02",
      "word": "second",
      "definitionEn": "The 2nd in order.",
      "definitionId": "Urutan ke-2.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w03",
      "word": "third",
      "definitionEn": "The 3rd in order.",
      "definitionId": "Urutan ke-3.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w04",
      "word": "fourth",
      "definitionEn": "The 4th in order.",
      "definitionId": "Urutan ke-4.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w05",
      "word": "fifth",
      "definitionEn": "The 5th in order.",
      "definitionId": "Urutan ke-5.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w06",
      "word": "sixth",
      "definitionEn": "The 6th in order.",
      "definitionId": "Urutan ke-6.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w07",
      "word": "seventh",
      "definitionEn": "The 7th in order.",
      "definitionId": "Urutan ke-7.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w08",
      "word": "eighth",
      "definitionEn": "The 8th in order.",
      "definitionId": "Urutan ke-8.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w09",
      "word": "ninth",
      "definitionEn": "The 9th in order.",
      "definitionId": "Urutan ke-9.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w10",
      "word": "tenth",
      "definitionEn": "The 10th in order.",
      "definitionId": "Urutan ke-10.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w11",
      "word": "eleventh",
      "definitionEn": "The 11th in order.",
      "definitionId": "Urutan ke-11.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w12",
      "word": "twelfth",
      "definitionEn": "The 12th in order.",
      "definitionId": "Urutan ke-12.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w13",
      "word": "thirteenth",
      "definitionEn": "The 13th in order.",
      "definitionId": "Urutan ke-13.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w14",
      "word": "fourteenth",
      "definitionEn": "The 14th in order.",
      "definitionId": "Urutan ke-14.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w15",
      "word": "fifteenth",
      "definitionEn": "The 15th in order.",
      "definitionId": "Urutan ke-15.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w16",
      "word": "sixteenth",
      "definitionEn": "The 16th in order.",
      "definitionId": "Urutan ke-16.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w17",
      "word": "seventeenth",
      "definitionEn": "The 17th in order.",
      "definitionId": "Urutan ke-17.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w18",
      "word": "eighteenth",
      "definitionEn": "The 18th in order.",
      "definitionId": "Urutan ke-18.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w19",
      "word": "nineteenth",
      "definitionEn": "The 19th in order.",
      "definitionId": "Urutan ke-19.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w20",
      "word": "twentieth",
      "definitionEn": "The 20th in order.",
      "definitionId": "Urutan ke-20.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w30",
      "word": "thirtieth",
      "definitionEn": "The 30th in order.",
      "definitionId": "Urutan ke-30.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w32",
      "word": "fortieth",
      "definitionEn": "The 40th in order.",
      "definitionId": "Urutan ke-40.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w33",
      "word": "fiftieth",
      "definitionEn": "The 50th in order.",
      "definitionId": "Urutan ke-50.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w34",
      "word": "hundredth",
      "definitionEn": "The 100th in order.",
      "definitionId": "Urutan ke-100.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w35",
      "word": "thousandth",
      "definitionEn": "The 1000th in order.",
      "definitionId": "Urutan ke-1000.",
      "topicId": "ordinal-number"
    },
    {
      "id": "ordinal-number-w36",
      "word": "millionth",
      "definitionEn": "The 1000000th in order.",
      "definitionId": "Urutan ke-1000000.",
      "topicId": "ordinal-number"
    }
  ],
  "personal-information": [
    {
      "id": "personal-information-w01",
      "word": "name",
      "definitionEn": "A word used to identify a person.",
      "definitionId": "Kata yang digunakan untuk mengenali seseorang.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w05",
      "word": "surname",
      "definitionEn": "A family name.",
      "definitionId": "Nama keluarga.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w06",
      "word": "nickname",
      "definitionEn": "An informal name used by friends or family.",
      "definitionId": "Nama tidak resmi yang dipakai oleh teman atau keluarga.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w07",
      "word": "identity",
      "definitionEn": "Who a person is; their identity.",
      "definitionId": "Siapa seseorang; jati diri.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w09",
      "word": "profile",
      "definitionEn": "A set of information about a person.",
      "definitionId": "Sekumpulan informasi tentang seseorang.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w10",
      "word": "information",
      "definitionEn": "Facts or details about something.",
      "definitionId": "Fakta atau rincian tentang sesuatu.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w11",
      "word": "age",
      "definitionEn": "How old a person is.",
      "definitionId": "Seberapa tua seseorang.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w12",
      "word": "birthday",
      "definitionEn": "The day a person was born.",
      "definitionId": "Hari ketika seseorang lahir.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w15",
      "word": "gender",
      "definitionEn": "A category such as male or female.",
      "definitionId": "Kategori seperti laki-laki atau perempuan.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w16",
      "word": "male",
      "definitionEn": "Of the male gender.",
      "definitionId": "Berkaitan dengan laki-laki.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w17",
      "word": "female",
      "definitionEn": "Of the female gender.",
      "definitionId": "Berkaitan dengan perempuan.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w18",
      "word": "nationality",
      "definitionEn": "The status of belonging to a nation.",
      "definitionId": "Status sebagai bagian dari suatu bangsa.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w19",
      "word": "citizen",
      "definitionEn": "A legal member of a country.",
      "definitionId": "Anggota sah dari suatu negara.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w21",
      "word": "single",
      "definitionEn": "Not married.",
      "definitionId": "Tidak menikah.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w22",
      "word": "married",
      "definitionEn": "Having a spouse.",
      "definitionId": "Memiliki pasangan suami atau istri.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w23",
      "word": "address",
      "definitionEn": "Details of where someone lives.",
      "definitionId": "Rincian tempat seseorang tinggal.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w24",
      "word": "street",
      "definitionEn": "A public road in a city or town.",
      "definitionId": "Jalan umum di kota atau desa.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w25",
      "word": "city",
      "definitionEn": "A large town.",
      "definitionId": "Kota besar.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w26",
      "word": "province",
      "definitionEn": "A region in a country.",
      "definitionId": "Wilayah dalam suatu negara.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w27",
      "word": "country",
      "definitionEn": "A nation.",
      "definitionId": "Bangsa; negara.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w31",
      "word": "email",
      "definitionEn": "An email address.",
      "definitionId": "Alamat surat elektronik.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w32",
      "word": "contact",
      "definitionEn": "A person or way to reach someone.",
      "definitionId": "Orang atau cara untuk menghubungi seseorang.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w34",
      "word": "occupation",
      "definitionEn": "A job or profession.",
      "definitionId": "Pekerjaan atau profesi.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w35",
      "word": "job",
      "definitionEn": "A paid position of regular employment.",
      "definitionId": "Pekerjaan dengan upah tetap.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w36",
      "word": "company",
      "definitionEn": "A business organization.",
      "definitionId": "Organisasi bisnis.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w37",
      "word": "department",
      "definitionEn": "A division of a company or organization.",
      "definitionId": "Bagian dari perusahaan atau organisasi.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w38",
      "word": "position",
      "definitionEn": "A job or role.",
      "definitionId": "Peran atau jabatan.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w41",
      "word": "passport",
      "definitionEn": "An official document for international travel.",
      "definitionId": "Dokumen resmi untuk perjalanan internasional.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w42",
      "word": "signature",
      "definitionEn": "A written name used to sign documents.",
      "definitionId": "Nama tertulis untuk menandatangani dokumen.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w43",
      "word": "form",
      "definitionEn": "A document with blanks to fill in.",
      "definitionId": "Dokumen dengan bagian kosong untuk diisi.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w44",
      "word": "field",
      "definitionEn": "A space in a form for information.",
      "definitionId": "Ruang pada formulir untuk informasi.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w46",
      "word": "submit",
      "definitionEn": "To send in for approval or review.",
      "definitionId": "Mengirimkan untuk persetujuan atau ditinjau.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w47",
      "word": "confirm",
      "definitionEn": "To verify or state as true.",
      "definitionId": "Memverifikasi atau menyatakan sebagai benar.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w48",
      "word": "correct",
      "definitionEn": "Free from error.",
      "definitionId": "Bebas dari kesalahan.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w49",
      "word": "update",
      "definitionEn": "To make more current; a new version.",
      "definitionId": "Membuat lebih terkini; versi baru.",
      "topicId": "personal-information"
    },
    {
      "id": "personal-information-w50",
      "word": "details",
      "definitionEn": "Specific pieces of information.",
      "definitionId": "Potongan informasi yang spesifik.",
      "topicId": "personal-information"
    }
  ],
  "physical-appearance": [
    {
      "id": "physical-appearance-w01",
      "word": "appearance",
      "definitionEn": "The way someone looks.",
      "definitionId": "Cara seseorang terlihat.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w02",
      "word": "look",
      "definitionEn": "The way someone appears.",
      "definitionId": "Cara seseorang tampak.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w03",
      "word": "tall",
      "definitionEn": "Having more than average height.",
      "definitionId": "Memiliki tinggi di atas rata-rata.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w04",
      "word": "short",
      "definitionEn": "Having little height; not tall.",
      "definitionId": "Tingginya pendek; tidak tinggi.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w06",
      "word": "slim",
      "definitionEn": "Thin in a way that looks attractive.",
      "definitionId": "Kurus dengan bentuk yang terlihat menarik.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w07",
      "word": "thin",
      "definitionEn": "Having little fat; not thick.",
      "definitionId": "Kurus; tidak gemuk.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w08",
      "word": "overweight",
      "definitionEn": "Heavier than is considered healthy.",
      "definitionId": "Berat badan lebih dari yang dianggap sehat.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w09",
      "word": "fit",
      "definitionEn": "In good physical condition.",
      "definitionId": "Dalam kondisi fisik yang baik.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w10",
      "word": "strong",
      "definitionEn": "Having great physical power.",
      "definitionId": "Memiliki kekuatan fisik besar.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w11",
      "word": "young",
      "definitionEn": "Having lived for a short time; not old.",
      "definitionId": "Berusia muda; belum tua.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w12",
      "word": "old",
      "definitionEn": "Having lived for a long time; not young.",
      "definitionId": "Berusia tua; tidak muda.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w13",
      "word": "handsome",
      "definitionEn": "Attractive in appearance, especially for a man.",
      "definitionId": "Menarik secara penampilan, terutama untuk pria.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w14",
      "word": "beautiful",
      "definitionEn": "Very attractive; pleasing to the senses.",
      "definitionId": "Sangat menarik; menyenangkan bagi indera.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w15",
      "word": "pretty",
      "definitionEn": "Attractive in a delicate way.",
      "definitionId": "Menarik dengan cara yang lembut.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w16",
      "word": "cute",
      "definitionEn": "Attractive in a charming or youthful way.",
      "definitionId": "Menarik dengan cara yang imut atau muda.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w17",
      "word": "attractive",
      "definitionEn": "Pleasing in appearance.",
      "definitionId": "Menyenangkan secara penampilan.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w18",
      "word": "hair",
      "definitionEn": "Threadlike strands growing from the skin, especially the head.",
      "definitionId": "Helai-helai seperti benang yang tumbuh dari kulit, terutama di kepala.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w27",
      "word": "bald",
      "definitionEn": "Having little or no hair on the head.",
      "definitionId": "Memiliki sedikit atau tidak ada rambut di kepala.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w28",
      "word": "beard",
      "definitionEn": "The hair that grows on the face of a man.",
      "definitionId": "Rambut yang tumbuh di wajah pria.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w29",
      "word": "mustache",
      "definitionEn": "Hair growing on the upper lip.",
      "definitionId": "Rambut yang tumbuh di atas bibir atas.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w30",
      "word": "face",
      "definitionEn": "The front part of the head from the forehead to the chin.",
      "definitionId": "Bagian depan kepala dari dahi sampai dagu.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w33",
      "word": "eyes",
      "definitionEn": "The organs of sight.",
      "definitionId": "Organ untuk melihat.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w37",
      "word": "skin",
      "definitionEn": "The outer covering of the body.",
      "definitionId": "Lapisan luar tubuh.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w40",
      "word": "smile",
      "definitionEn": "An expression where the corners of the mouth turn up.",
      "definitionId": "Ekspresi ketika sudut mulut terangkat.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w41",
      "word": "glasses",
      "definitionEn": "Lenses set in a frame worn to improve vision.",
      "definitionId": "Lensa dalam bingkai yang dipakai untuk memperbaiki penglihatan.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w42",
      "word": "freckles",
      "definitionEn": "Small brown spots on the skin.",
      "definitionId": "Bintik-bintik kecil berwarna cokelat pada kulit.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w43",
      "word": "dimples",
      "definitionEn": "Small natural hollows in the cheeks.",
      "definitionId": "Cekungan kecil alami di pipi.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w44",
      "word": "height",
      "definitionEn": "How tall someone is.",
      "definitionId": "Seberapa tinggi seseorang.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w45",
      "word": "weight",
      "definitionEn": "How heavy someone is.",
      "definitionId": "Seberapa berat seseorang.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w46",
      "word": "body",
      "definitionEn": "The whole physical structure of a person.",
      "definitionId": "Seluruh struktur fisik seseorang.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w47",
      "word": "chin",
      "definitionEn": "The lower part of the face below the lower lip.",
      "definitionId": "Bagian bawah wajah di bawah bibir bawah.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w48",
      "word": "cheek",
      "definitionEn": "The side of the face below the eye.",
      "definitionId": "Sisi wajah di bawah mata.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w49",
      "word": "forehead",
      "definitionEn": "The part of the face above the eyebrows.",
      "definitionId": "Bagian wajah di atas alis.",
      "topicId": "physical-appearance"
    },
    {
      "id": "physical-appearance-w50",
      "word": "lips",
      "definitionEn": "Either of the two soft folds around the mouth.",
      "definitionId": "Salah satu dari dua lipatan lembut di sekitar mulut.",
      "topicId": "physical-appearance"
    }
  ],
  "places": [
    {
      "id": "places-w01",
      "word": "place",
      "definitionEn": "A specific location.",
      "definitionId": "Lokasi tertentu.",
      "topicId": "places"
    },
    {
      "id": "places-w02",
      "word": "city",
      "definitionEn": "A large town with many people.",
      "definitionId": "Kota besar dengan banyak orang.",
      "topicId": "places"
    },
    {
      "id": "places-w03",
      "word": "town",
      "definitionEn": "A settlement smaller than a city.",
      "definitionId": "Permukiman lebih kecil dari kota.",
      "topicId": "places"
    },
    {
      "id": "places-w04",
      "word": "village",
      "definitionEn": "A small settlement in the countryside.",
      "definitionId": "Permukiman kecil di pedesaan.",
      "topicId": "places"
    },
    {
      "id": "places-w05",
      "word": "country",
      "definitionEn": "A nation.",
      "definitionId": "Bangsa; negara.",
      "topicId": "places"
    },
    {
      "id": "places-w06",
      "word": "capital",
      "definitionEn": "The city where a government is located.",
      "definitionId": "Kota tempat pemerintahan berada.",
      "topicId": "places"
    },
    {
      "id": "places-w07",
      "word": "area",
      "definitionEn": "A region or part of a place.",
      "definitionId": "Wilayah atau bagian dari suatu tempat.",
      "topicId": "places"
    },
    {
      "id": "places-w08",
      "word": "neighborhood",
      "definitionEn": "An area in a city where people live.",
      "definitionId": "Area di kota tempat orang tinggal.",
      "topicId": "places"
    },
    {
      "id": "places-w09",
      "word": "street",
      "definitionEn": "A road in a city with buildings on the sides.",
      "definitionId": "Jalan di kota dengan bangunan di sisi-sisinya.",
      "topicId": "places"
    },
    {
      "id": "places-w10",
      "word": "road",
      "definitionEn": "A way for vehicles or people to travel.",
      "definitionId": "Jalur untuk kendaraan atau orang bergerak.",
      "topicId": "places"
    },
    {
      "id": "places-w11",
      "word": "park",
      "definitionEn": "A public green area for recreation.",
      "definitionId": "Area hijau publik untuk rekreasi.",
      "topicId": "places"
    },
    {
      "id": "places-w12",
      "word": "garden",
      "definitionEn": "An area where plants are grown.",
      "definitionId": "Area tempat tanaman ditanam.",
      "topicId": "places"
    },
    {
      "id": "places-w13",
      "word": "square",
      "definitionEn": "An open area in a town or city.",
      "definitionId": "Area terbuka di kota atau desa.",
      "topicId": "places"
    },
    {
      "id": "places-w14",
      "word": "market",
      "definitionEn": "A place where goods are bought and sold.",
      "definitionId": "Tempat jual beli barang.",
      "topicId": "places"
    },
    {
      "id": "places-w15",
      "word": "mall",
      "definitionEn": "A large shopping center.",
      "definitionId": "Pusat perbelanjaan besar.",
      "topicId": "places"
    },
    {
      "id": "places-w16",
      "word": "shop",
      "definitionEn": "A place where goods are sold.",
      "definitionId": "Tempat barang dijual.",
      "topicId": "places"
    },
    {
      "id": "places-w17",
      "word": "store",
      "definitionEn": "A retail place where goods are sold.",
      "definitionId": "Tempat ritel tempat barang dijual.",
      "topicId": "places"
    },
    {
      "id": "places-w18",
      "word": "restaurant",
      "definitionEn": "A place where meals are prepared and served.",
      "definitionId": "Tempat makanan disiapkan dan disajikan.",
      "topicId": "places"
    },
    {
      "id": "places-w19",
      "word": "cafe",
      "definitionEn": "A small restaurant serving coffee and light meals.",
      "definitionId": "Restoran kecil yang menyajikan kopi dan makanan ringan.",
      "topicId": "places"
    },
    {
      "id": "places-w20",
      "word": "hotel",
      "definitionEn": "A place where travelers stay.",
      "definitionId": "Tempat menginap bagi pelancong.",
      "topicId": "places"
    },
    {
      "id": "places-w21",
      "word": "apartment",
      "definitionEn": "A set of rooms in a building where people live.",
      "definitionId": "Sekumpulan ruangan dalam bangunan tempat orang tinggal.",
      "topicId": "places"
    },
    {
      "id": "places-w22",
      "word": "house",
      "definitionEn": "A building for people to live in.",
      "definitionId": "Bangunan tempat orang tinggal.",
      "topicId": "places"
    },
    {
      "id": "places-w23",
      "word": "office",
      "definitionEn": "A place where people work.",
      "definitionId": "Tempat orang bekerja.",
      "topicId": "places"
    },
    {
      "id": "places-w24",
      "word": "school",
      "definitionEn": "A place where students are taught.",
      "definitionId": "Tempat siswa diajar.",
      "topicId": "places"
    },
    {
      "id": "places-w25",
      "word": "campus",
      "definitionEn": "The grounds of a university or college.",
      "definitionId": "Area atau lingkungan kampus perguruan tinggi.",
      "topicId": "places"
    },
    {
      "id": "places-w26",
      "word": "library",
      "definitionEn": "A place where books are kept for reading or borrowing.",
      "definitionId": "Tempat buku-buku disimpan untuk dibaca atau dipinjam.",
      "topicId": "places"
    },
    {
      "id": "places-w27",
      "word": "hospital",
      "definitionEn": "A place where sick or injured people are treated.",
      "definitionId": "Tempat orang sakit atau terluka dirawat.",
      "topicId": "places"
    },
    {
      "id": "places-w28",
      "word": "clinic",
      "definitionEn": "A medical facility for outpatient care.",
      "definitionId": "Fasilitas medis untuk perawatan rawat jalan.",
      "topicId": "places"
    },
    {
      "id": "places-w29",
      "word": "pharmacy",
      "definitionEn": "A place where medicines are dispensed.",
      "definitionId": "Tempat obat diberikan atau dijual.",
      "topicId": "places"
    },
    {
      "id": "places-w30",
      "word": "bank",
      "definitionEn": "A financial institution that holds money.",
      "definitionId": "Lembaga keuangan yang menyimpan uang.",
      "topicId": "places"
    },
    {
      "id": "places-w33",
      "word": "airport",
      "definitionEn": "A place where airplanes take off and land.",
      "definitionId": "Tempat pesawat lepas landas dan mendarat.",
      "topicId": "places"
    },
    {
      "id": "places-w34",
      "word": "station",
      "definitionEn": "A place where trains or buses stop for passengers.",
      "definitionId": "Tempat kereta atau bus berhenti untuk penumpang.",
      "topicId": "places"
    },
    {
      "id": "places-w35",
      "word": "terminal",
      "definitionEn": "A station or building for passengers to board or leave.",
      "definitionId": "Stasiun atau gedung untuk naik atau turun penumpang.",
      "topicId": "places"
    },
    {
      "id": "places-w36",
      "word": "harbor",
      "definitionEn": "A sheltered place where ships dock.",
      "definitionId": "Tempat terlindung untuk kapal bersandar.",
      "topicId": "places"
    },
    {
      "id": "places-w37",
      "word": "beach",
      "definitionEn": "A sandy or pebbly shore by the sea or a lake.",
      "definitionId": "Pantai berpasir atau berbatu di tepi laut atau danau.",
      "topicId": "places"
    },
    {
      "id": "places-w38",
      "word": "mountain",
      "definitionEn": "A large natural elevation of land.",
      "definitionId": "Ketinggian alam yang besar.",
      "topicId": "places"
    },
    {
      "id": "places-w39",
      "word": "river",
      "definitionEn": "A natural flowing stream of water.",
      "definitionId": "Aliran air alami yang mengalir.",
      "topicId": "places"
    },
    {
      "id": "places-w40",
      "word": "lake",
      "definitionEn": "A large body of water surrounded by land.",
      "definitionId": "Badan air besar yang dikelilingi daratan.",
      "topicId": "places"
    },
    {
      "id": "places-w41",
      "word": "island",
      "definitionEn": "Land surrounded by water.",
      "definitionId": "Daratan yang dikelilingi air.",
      "topicId": "places"
    },
    {
      "id": "places-w42",
      "word": "forest",
      "definitionEn": "A large area covered with trees.",
      "definitionId": "Area luas yang dipenuhi pepohonan.",
      "topicId": "places"
    },
    {
      "id": "places-w43",
      "word": "bridge",
      "definitionEn": "A structure built to cross over water or roads.",
      "definitionId": "Struktur yang dibangun untuk menyeberangi air atau jalan.",
      "topicId": "places"
    },
    {
      "id": "places-w44",
      "word": "corner",
      "definitionEn": "A point where two lines or streets meet.",
      "definitionId": "Titik tempat dua garis atau jalan bertemu.",
      "topicId": "places"
    },
    {
      "id": "places-w45",
      "word": "intersection",
      "definitionEn": "A point where roads cross each other.",
      "definitionId": "Titik tempat jalan saling berpotongan.",
      "topicId": "places"
    },
    {
      "id": "places-w46",
      "word": "downtown",
      "definitionEn": "The central business area of a city.",
      "definitionId": "Area pusat bisnis di kota.",
      "topicId": "places"
    },
    {
      "id": "places-w47",
      "word": "suburb",
      "definitionEn": "An area outside the city center.",
      "definitionId": "Area di luar pusat kota.",
      "topicId": "places"
    },
    {
      "id": "places-w48",
      "word": "north",
      "definitionEn": "The direction toward the top of a map.",
      "definitionId": "Arah ke bagian atas peta.",
      "topicId": "places"
    },
    {
      "id": "places-w49",
      "word": "south",
      "definitionEn": "The direction toward the bottom of a map.",
      "definitionId": "Arah ke bagian bawah peta.",
      "topicId": "places"
    },
    {
      "id": "places-w50",
      "word": "center",
      "definitionEn": "The middle point of something.",
      "definitionId": "Titik tengah dari sesuatu.",
      "topicId": "places"
    }
  ],
  "school": [
    {
      "id": "school-w01",
      "word": "school",
      "definitionEn": "A place where students are taught.",
      "definitionId": "Tempat siswa diajar.",
      "topicId": "school"
    },
    {
      "id": "school-w02",
      "word": "classroom",
      "definitionEn": "A room where a class is taught.",
      "definitionId": "Ruangan tempat kelas diajar.",
      "topicId": "school"
    },
    {
      "id": "school-w03",
      "word": "teacher",
      "definitionEn": "A person who teaches.",
      "definitionId": "Orang yang mengajar.",
      "topicId": "school"
    },
    {
      "id": "school-w04",
      "word": "student",
      "definitionEn": "A person who studies at a school.",
      "definitionId": "Orang yang belajar di sekolah.",
      "topicId": "school"
    },
    {
      "id": "school-w05",
      "word": "principal",
      "definitionEn": "The head of a school.",
      "definitionId": "Pemimpin atau kepala sekolah.",
      "topicId": "school"
    },
    {
      "id": "school-w06",
      "word": "classmate",
      "definitionEn": "A student in the same class.",
      "definitionId": "Siswa yang berada di kelas yang sama.",
      "topicId": "school"
    },
    {
      "id": "school-w07",
      "word": "lesson",
      "definitionEn": "A unit of teaching.",
      "definitionId": "Satu unit pengajaran.",
      "topicId": "school"
    },
    {
      "id": "school-w08",
      "word": "subject",
      "definitionEn": "A branch of knowledge taught in school.",
      "definitionId": "Cabang pengetahuan yang diajarkan di sekolah.",
      "topicId": "school"
    },
    {
      "id": "school-w09",
      "word": "homework",
      "definitionEn": "School work assigned to be done at home.",
      "definitionId": "Pekerjaan sekolah yang diberikan untuk dikerjakan di rumah.",
      "topicId": "school"
    },
    {
      "id": "school-w10",
      "word": "assignment",
      "definitionEn": "A task given to students.",
      "definitionId": "Tugas yang diberikan kepada siswa.",
      "topicId": "school"
    },
    {
      "id": "school-w11",
      "word": "project",
      "definitionEn": "A planned piece of work, often for study.",
      "definitionId": "Kegiatan kerja yang direncanakan, sering untuk belajar.",
      "topicId": "school"
    },
    {
      "id": "school-w12",
      "word": "presentation",
      "definitionEn": "A talk or demonstration given to an audience.",
      "definitionId": "Pemaparan atau presentasi yang diberikan kepada audiens.",
      "topicId": "school"
    },
    {
      "id": "school-w13",
      "word": "test",
      "definitionEn": "A set of questions to measure knowledge.",
      "definitionId": "Sekumpulan pertanyaan untuk mengukur pengetahuan.",
      "topicId": "school"
    },
    {
      "id": "school-w14",
      "word": "quiz",
      "definitionEn": "A short test.",
      "definitionId": "Tes singkat.",
      "topicId": "school"
    },
    {
      "id": "school-w15",
      "word": "exam",
      "definitionEn": "A formal test of knowledge.",
      "definitionId": "Tes resmi untuk mengukur pengetahuan.",
      "topicId": "school"
    },
    {
      "id": "school-w16",
      "word": "grade",
      "definitionEn": "A mark or level given for school work.",
      "definitionId": "Nilai atau tingkat yang diberikan untuk pekerjaan sekolah.",
      "topicId": "school"
    },
    {
      "id": "school-w17",
      "word": "score",
      "definitionEn": "A number of points earned in a test.",
      "definitionId": "Jumlah poin yang diperoleh dalam tes.",
      "topicId": "school"
    },
    {
      "id": "school-w18",
      "word": "notebook",
      "definitionEn": "A book of blank pages for notes.",
      "definitionId": "Buku berisi halaman kosong untuk catatan.",
      "topicId": "school"
    },
    {
      "id": "school-w19",
      "word": "book",
      "definitionEn": "A set of printed or written pages bound together.",
      "definitionId": "Sekumpulan halaman yang dicetak atau ditulis dan dijilid.",
      "topicId": "school"
    },
    {
      "id": "school-w20",
      "word": "textbook",
      "definitionEn": "A book used for teaching a subject.",
      "definitionId": "Buku yang digunakan untuk mengajar suatu mata pelajaran.",
      "topicId": "school"
    },
    {
      "id": "school-w21",
      "word": "workbook",
      "definitionEn": "A book with exercises for practice.",
      "definitionId": "Buku berisi latihan untuk praktik.",
      "topicId": "school"
    },
    {
      "id": "school-w22",
      "word": "dictionary",
      "definitionEn": "A book listing words and their meanings.",
      "definitionId": "Buku yang berisi daftar kata dan artinya.",
      "topicId": "school"
    },
    {
      "id": "school-w23",
      "word": "pencil",
      "definitionEn": "A tool for writing or drawing with graphite.",
      "definitionId": "Alat untuk menulis atau menggambar dengan grafit.",
      "topicId": "school"
    },
    {
      "id": "school-w24",
      "word": "pen",
      "definitionEn": "A tool for writing with ink.",
      "definitionId": "Alat untuk menulis dengan tinta.",
      "topicId": "school"
    },
    {
      "id": "school-w25",
      "word": "eraser",
      "definitionEn": "An item used to remove pencil marks.",
      "definitionId": "Benda untuk menghapus tulisan pensil.",
      "topicId": "school"
    },
    {
      "id": "school-w26",
      "word": "ruler",
      "definitionEn": "A tool for measuring or drawing straight lines.",
      "definitionId": "Alat untuk mengukur atau menggambar garis lurus.",
      "topicId": "school"
    },
    {
      "id": "school-w28",
      "word": "desk",
      "definitionEn": "A table used for writing or studying.",
      "definitionId": "Meja untuk menulis atau belajar.",
      "topicId": "school"
    },
    {
      "id": "school-w29",
      "word": "chair",
      "definitionEn": "A seat for one person, usually with a back.",
      "definitionId": "Tempat duduk untuk satu orang, biasanya ada sandaran.",
      "topicId": "school"
    },
    {
      "id": "school-w30",
      "word": "board",
      "definitionEn": "A flat surface for writing in class.",
      "definitionId": "Permukaan datar untuk menulis di kelas.",
      "topicId": "school"
    },
    {
      "id": "school-w31",
      "word": "whiteboard",
      "definitionEn": "A board with a white surface for markers.",
      "definitionId": "Papan berwarna putih untuk spidol.",
      "topicId": "school"
    },
    {
      "id": "school-w32",
      "word": "marker",
      "definitionEn": "A pen with a felt tip for writing.",
      "definitionId": "Pena bertinta dengan ujung felt untuk menulis.",
      "topicId": "school"
    },
    {
      "id": "school-w33",
      "word": "chalk",
      "definitionEn": "A soft limestone stick used to write on a board.",
      "definitionId": "Batang kapur lunak untuk menulis di papan.",
      "topicId": "school"
    },
    {
      "id": "school-w34",
      "word": "schedule",
      "definitionEn": "A plan listing times of classes or events.",
      "definitionId": "Rencana yang mencantumkan waktu kelas atau kegiatan.",
      "topicId": "school"
    },
    {
      "id": "school-w35",
      "word": "timetable",
      "definitionEn": "A schedule of class times.",
      "definitionId": "Jadwal waktu pelajaran.",
      "topicId": "school"
    },
    {
      "id": "school-w36",
      "word": "break",
      "definitionEn": "A short rest period.",
      "definitionId": "Waktu istirahat singkat.",
      "topicId": "school"
    },
    {
      "id": "school-w37",
      "word": "recess",
      "definitionEn": "A break time at school.",
      "definitionId": "Waktu istirahat di sekolah.",
      "topicId": "school"
    },
    {
      "id": "school-w38",
      "word": "bell",
      "definitionEn": "A device that rings to signal times.",
      "definitionId": "Perangkat yang berbunyi untuk menandai waktu.",
      "topicId": "school"
    },
    {
      "id": "school-w39",
      "word": "library",
      "definitionEn": "A place where books are kept for reading or borrowing.",
      "definitionId": "Tempat buku-buku disimpan untuk dibaca atau dipinjam.",
      "topicId": "school"
    },
    {
      "id": "school-w40",
      "word": "laboratory",
      "definitionEn": "A room used for scientific work or experiments.",
      "definitionId": "Ruangan untuk pekerjaan atau percobaan ilmiah.",
      "topicId": "school"
    },
    {
      "id": "school-w41",
      "word": "canteen",
      "definitionEn": "A place in a school where food is sold.",
      "definitionId": "Tempat di sekolah untuk membeli makanan.",
      "topicId": "school"
    },
    {
      "id": "school-w42",
      "word": "uniform",
      "definitionEn": "Clothing of a distinctive design worn by students.",
      "definitionId": "Pakaian berdesain khas yang dipakai siswa.",
      "topicId": "school"
    },
    {
      "id": "school-w43",
      "word": "question",
      "definitionEn": "A sentence asking for information.",
      "definitionId": "Kalimat yang meminta informasi.",
      "topicId": "school"
    },
    {
      "id": "school-w44",
      "word": "answer",
      "definitionEn": "A response to a question.",
      "definitionId": "Tanggapan atas sebuah pertanyaan.",
      "topicId": "school"
    },
    {
      "id": "school-w45",
      "word": "read",
      "definitionEn": "To look at and understand written words.",
      "definitionId": "Melihat dan memahami kata-kata tertulis.",
      "topicId": "school"
    },
    {
      "id": "school-w46",
      "word": "write",
      "definitionEn": "To form letters or words on paper.",
      "definitionId": "Membentuk huruf atau kata di kertas.",
      "topicId": "school"
    },
    {
      "id": "school-w47",
      "word": "listen",
      "definitionEn": "To pay attention to sound.",
      "definitionId": "Memberi perhatian pada suara.",
      "topicId": "school"
    },
    {
      "id": "school-w48",
      "word": "speak",
      "definitionEn": "To say words; talk.",
      "definitionId": "Mengucapkan kata-kata; berbicara.",
      "topicId": "school"
    },
    {
      "id": "school-w49",
      "word": "study",
      "definitionEn": "To apply the mind to learn or understand.",
      "definitionId": "Menggunakan pikiran untuk belajar atau memahami.",
      "topicId": "school"
    },
    {
      "id": "school-w50",
      "word": "learn",
      "definitionEn": "To gain knowledge or skill.",
      "definitionId": "Mendapatkan pengetahuan atau keterampilan.",
      "topicId": "school"
    }
  ],
  "shapes": [
    {
      "id": "shapes-w01",
      "word": "shape",
      "definitionEn": "The form or outline of something.",
      "definitionId": "Bentuk atau garis luar dari sesuatu.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w02",
      "word": "line",
      "definitionEn": "A long narrow mark.",
      "definitionId": "Garis panjang dan sempit.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w05",
      "word": "point",
      "definitionEn": "A single position in space; a dot.",
      "definitionId": "Satu posisi di ruang; titik.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w06",
      "word": "dot",
      "definitionEn": "A small round mark.",
      "definitionId": "Tanda kecil berbentuk bulat.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w07",
      "word": "angle",
      "definitionEn": "The space between two lines that meet.",
      "definitionId": "Ruang di antara dua garis yang bertemu.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w11",
      "word": "circle",
      "definitionEn": "A round shape where all points are the same distance from the center.",
      "definitionId": "Bentuk bulat di mana semua titik berjarak sama dari pusat.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w12",
      "word": "semicircle",
      "definitionEn": "Half of a circle.",
      "definitionId": "Setengah lingkaran.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w13",
      "word": "oval",
      "definitionEn": "An egg-shaped curve.",
      "definitionId": "Bentuk oval seperti telur.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w14",
      "word": "ellipse",
      "definitionEn": "An oval curve defined by two focal points.",
      "definitionId": "Kurva oval yang ditentukan oleh dua titik fokus.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w15",
      "word": "triangle",
      "definitionEn": "A three-sided polygon.",
      "definitionId": "Poligon dengan tiga sisi.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w19",
      "word": "square",
      "definitionEn": "A four-sided shape with equal sides and right angles.",
      "definitionId": "Bentuk empat sisi dengan sisi sama panjang dan sudut siku-siku.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w20",
      "word": "rectangle",
      "definitionEn": "A four-sided shape with right angles.",
      "definitionId": "Bentuk empat sisi dengan sudut siku-siku.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w21",
      "word": "parallelogram",
      "definitionEn": "A four-sided shape with opposite sides parallel.",
      "definitionId": "Bentuk empat sisi dengan sisi berhadapan sejajar.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w22",
      "word": "trapezoid",
      "definitionEn": "A four-sided shape with one pair of parallel sides.",
      "definitionId": "Bentuk empat sisi dengan satu pasang sisi sejajar.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w23",
      "word": "rhombus",
      "definitionEn": "A four-sided shape with all sides equal.",
      "definitionId": "Bentuk empat sisi dengan semua sisi sama panjang.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w25",
      "word": "pentagon",
      "definitionEn": "A five-sided polygon.",
      "definitionId": "Poligon dengan lima sisi.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w26",
      "word": "hexagon",
      "definitionEn": "A six-sided polygon.",
      "definitionId": "Poligon dengan enam sisi.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w27",
      "word": "heptagon",
      "definitionEn": "A seven-sided polygon.",
      "definitionId": "Poligon dengan tujuh sisi.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w28",
      "word": "octagon",
      "definitionEn": "An eight-sided polygon.",
      "definitionId": "Poligon dengan delapan sisi.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w29",
      "word": "nonagon",
      "definitionEn": "A nine-sided polygon.",
      "definitionId": "Poligon dengan sembilan sisi.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w30",
      "word": "decagon",
      "definitionEn": "A ten-sided polygon.",
      "definitionId": "Poligon dengan sepuluh sisi.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w31",
      "word": "star",
      "definitionEn": "A shape with points like a star.",
      "definitionId": "Bentuk dengan titik-titik seperti bintang.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w33",
      "word": "crescent",
      "definitionEn": "A curved shape like part of a circle or moon.",
      "definitionId": "Bentuk lengkung seperti bagian dari lingkaran atau bulan.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w34",
      "word": "cross",
      "definitionEn": "Two lines that cross each other at right angles.",
      "definitionId": "Dua garis yang berpotongan membentuk sudut siku-siku.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w36",
      "word": "spiral",
      "definitionEn": "A curve that winds around a center.",
      "definitionId": "Kurva yang melilit mengelilingi pusat.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w37",
      "word": "wave",
      "definitionEn": "A curved line like a wave.",
      "definitionId": "Garis lengkung seperti gelombang.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w38",
      "word": "zigzag",
      "definitionEn": "A line that goes back and forth in sharp angles.",
      "definitionId": "Garis yang bergerak zigzag dengan sudut tajam.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w39",
      "word": "cone",
      "definitionEn": "A solid shape with a circular base and a pointed top.",
      "definitionId": "Bentuk padat dengan alas lingkaran dan puncak runcing.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w40",
      "word": "cube",
      "definitionEn": "A solid shape with six equal square faces.",
      "definitionId": "Bentuk padat dengan enam sisi persegi sama besar.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w41",
      "word": "sphere",
      "definitionEn": "A perfectly round 3D shape like a ball.",
      "definitionId": "Bentuk 3D bulat sempurna seperti bola.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w42",
      "word": "cylinder",
      "definitionEn": "A 3D shape with two parallel circular bases.",
      "definitionId": "Bentuk 3D dengan dua alas lingkaran sejajar.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w43",
      "word": "pyramid",
      "definitionEn": "A solid shape with a polygon base and triangular sides.",
      "definitionId": "Bentuk padat dengan alas poligon dan sisi segitiga.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w44",
      "word": "prism",
      "definitionEn": "A solid shape with two parallel, congruent ends.",
      "definitionId": "Bentuk padat dengan dua ujung sejajar dan sebangun.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w45",
      "word": "ring",
      "definitionEn": "A circular band; a ring shape.",
      "definitionId": "Pita melingkar; bentuk cincin.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w46",
      "word": "arc",
      "definitionEn": "A curved part of a circle.",
      "definitionId": "Bagian lengkung dari sebuah lingkaran.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w47",
      "word": "edge",
      "definitionEn": "The line where two surfaces meet.",
      "definitionId": "Garis tempat dua permukaan bertemu.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w48",
      "word": "corner",
      "definitionEn": "The point where two lines or edges meet.",
      "definitionId": "Titik tempat dua garis atau sisi bertemu.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w49",
      "word": "side",
      "definitionEn": "A straight line forming the boundary of a shape.",
      "definitionId": "Garis lurus yang membentuk batas suatu bentuk.",
      "topicId": "shapes"
    },
    {
      "id": "shapes-w50",
      "word": "symmetry",
      "definitionEn": "Balanced sameness in shape or size on both sides.",
      "definitionId": "Kesamaan yang seimbang dalam bentuk atau ukuran di kedua sisi.",
      "topicId": "shapes"
    }
  ],
  "shopping": [
    {
      "id": "shopping-w01",
      "word": "shopping",
      "definitionEn": "The activity of buying goods.",
      "definitionId": "Kegiatan membeli barang.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w02",
      "word": "shop",
      "definitionEn": "A place where goods are sold.",
      "definitionId": "Tempat barang dijual.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w03",
      "word": "store",
      "definitionEn": "A retail place where goods are sold.",
      "definitionId": "Tempat ritel tempat barang dijual.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w04",
      "word": "market",
      "definitionEn": "A place where goods are bought and sold.",
      "definitionId": "Tempat jual beli barang.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w05",
      "word": "mall",
      "definitionEn": "A large shopping center.",
      "definitionId": "Pusat perbelanjaan besar.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w06",
      "word": "supermarket",
      "definitionEn": "A large store selling food and household items.",
      "definitionId": "Toko besar yang menjual bahan makanan dan kebutuhan rumah.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w07",
      "word": "minimarket",
      "definitionEn": "A small store selling daily needs.",
      "definitionId": "Toko kecil yang menjual kebutuhan sehari-hari.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w10",
      "word": "seller",
      "definitionEn": "A person who sells goods.",
      "definitionId": "Orang yang menjual barang.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w11",
      "word": "buyer",
      "definitionEn": "A person who buys goods.",
      "definitionId": "Orang yang membeli barang.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w12",
      "word": "cashier",
      "definitionEn": "A person who handles payments at a store.",
      "definitionId": "Orang yang menangani pembayaran di toko.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w13",
      "word": "customer",
      "definitionEn": "A person who buys goods or services.",
      "definitionId": "Orang yang membeli barang atau jasa.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w14",
      "word": "product",
      "definitionEn": "Something made to be sold.",
      "definitionId": "Sesuatu yang dibuat untuk dijual.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w15",
      "word": "item",
      "definitionEn": "An individual object for sale.",
      "definitionId": "Benda satuan yang dijual.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w16",
      "word": "brand",
      "definitionEn": "A name or mark of a product.",
      "definitionId": "Nama atau tanda suatu produk.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w17",
      "word": "quality",
      "definitionEn": "How good something is.",
      "definitionId": "Seberapa baik sesuatu.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w18",
      "word": "price",
      "definitionEn": "The amount of money needed to buy something.",
      "definitionId": "Jumlah uang yang dibutuhkan untuk membeli sesuatu.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w19",
      "word": "expensive",
      "definitionEn": "Costing a lot of money.",
      "definitionId": "Harganya mahal.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w20",
      "word": "cheap",
      "definitionEn": "Costing little money.",
      "definitionId": "Harganya murah.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w21",
      "word": "discount",
      "definitionEn": "A reduction in price.",
      "definitionId": "Pengurangan harga.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w22",
      "word": "sale",
      "definitionEn": "A time when goods are sold at lower prices.",
      "definitionId": "Waktu ketika barang dijual lebih murah.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w23",
      "word": "promo",
      "definitionEn": "A special offer or promotion.",
      "definitionId": "Penawaran khusus atau promosi.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w24",
      "word": "voucher",
      "definitionEn": "A document or code for a discount.",
      "definitionId": "Dokumen atau kode untuk diskon.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w25",
      "word": "coupon",
      "definitionEn": "A ticket or code for a discount.",
      "definitionId": "Tiket atau kode untuk diskon.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w26",
      "word": "pay",
      "definitionEn": "To give money for something.",
      "definitionId": "Memberikan uang untuk sesuatu.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w27",
      "word": "payment",
      "definitionEn": "The act of paying.",
      "definitionId": "Tindakan membayar.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w28",
      "word": "cash",
      "definitionEn": "Money in the form of coins or bills.",
      "definitionId": "Uang dalam bentuk koin atau uang kertas.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w32",
      "word": "receipt",
      "definitionEn": "A printed record of a purchase.",
      "definitionId": "Catatan pembelian yang dicetak.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w33",
      "word": "invoice",
      "definitionEn": "A bill for goods or services.",
      "definitionId": "Tagihan untuk barang atau jasa.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w34",
      "word": "checkout",
      "definitionEn": "The place or process of paying for items.",
      "definitionId": "Tempat atau proses membayar barang.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w35",
      "word": "cart",
      "definitionEn": "A wheeled container used for shopping.",
      "definitionId": "Wadah beroda untuk belanja.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w36",
      "word": "basket",
      "definitionEn": "A container used to carry shopping items.",
      "definitionId": "Wadah untuk membawa barang belanja.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w37",
      "word": "bag",
      "definitionEn": "A container for carrying purchases.",
      "definitionId": "Wadah untuk membawa belanjaan.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w38",
      "word": "stock",
      "definitionEn": "The supply of goods available.",
      "definitionId": "Persediaan barang yang tersedia.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w39",
      "word": "available",
      "definitionEn": "Able to be obtained; in stock.",
      "definitionId": "Bisa didapatkan; tersedia.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w41",
      "word": "size",
      "definitionEn": "The physical dimensions of something.",
      "definitionId": "Ukuran fisik sesuatu.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w42",
      "word": "fit",
      "definitionEn": "To be of the right size or shape; suitable.",
      "definitionId": "Pas ukurannya; sesuai.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w44",
      "word": "refund",
      "definitionEn": "A return of money paid.",
      "definitionId": "Pengembalian uang yang sudah dibayar.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w45",
      "word": "return",
      "definitionEn": "To bring something back to the seller.",
      "definitionId": "Mengembalikan sesuatu kepada penjual.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w46",
      "word": "exchange",
      "definitionEn": "To give something in return for another.",
      "definitionId": "Menukar sesuatu dengan yang lain.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w47",
      "word": "delivery",
      "definitionEn": "The act of sending goods to a buyer.",
      "definitionId": "Tindakan mengirim barang ke pembeli.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w49",
      "word": "order",
      "definitionEn": "A request to buy something.",
      "definitionId": "Permintaan untuk membeli sesuatu.",
      "topicId": "shopping"
    },
    {
      "id": "shopping-w50",
      "word": "track",
      "definitionEn": "To follow the progress of a shipment.",
      "definitionId": "Mengikuti perkembangan pengiriman.",
      "topicId": "shopping"
    }
  ],
  "size": [
    {
      "id": "size-w01",
      "word": "big",
      "definitionEn": "Of great size.",
      "definitionId": "Berukuran besar.",
      "topicId": "size"
    },
    {
      "id": "size-w02",
      "word": "small",
      "definitionEn": "Of little size.",
      "definitionId": "Berukuran kecil.",
      "topicId": "size"
    },
    {
      "id": "size-w03",
      "word": "large",
      "definitionEn": "Of considerable size.",
      "definitionId": "Berukuran cukup besar.",
      "topicId": "size"
    },
    {
      "id": "size-w04",
      "word": "tiny",
      "definitionEn": "Very small.",
      "definitionId": "Sangat kecil.",
      "topicId": "size"
    },
    {
      "id": "size-w05",
      "word": "huge",
      "definitionEn": "Extremely large.",
      "definitionId": "Sangat besar.",
      "topicId": "size"
    },
    {
      "id": "size-w06",
      "word": "little",
      "definitionEn": "Small in amount or size.",
      "definitionId": "Kecil dalam jumlah atau ukuran.",
      "topicId": "size"
    },
    {
      "id": "size-w07",
      "word": "tall",
      "definitionEn": "Having more than average height.",
      "definitionId": "Memiliki tinggi di atas rata-rata.",
      "topicId": "size"
    },
    {
      "id": "size-w08",
      "word": "short",
      "definitionEn": "Having little height; not tall.",
      "definitionId": "Tingginya pendek; tidak tinggi.",
      "topicId": "size"
    },
    {
      "id": "size-w09",
      "word": "long",
      "definitionEn": "Having great length.",
      "definitionId": "Memiliki panjang yang besar.",
      "topicId": "size"
    },
    {
      "id": "size-w10",
      "word": "wide",
      "definitionEn": "Wide from side to side.",
      "definitionId": "Lebar dari sisi ke sisi.",
      "topicId": "size"
    },
    {
      "id": "size-w11",
      "word": "narrow",
      "definitionEn": "Not wide; having little width.",
      "definitionId": "Tidak lebar; sempit.",
      "topicId": "size"
    },
    {
      "id": "size-w12",
      "word": "thick",
      "definitionEn": "Having a large distance between surfaces; not thin.",
      "definitionId": "Memiliki jarak yang besar antar permukaan; tidak tipis.",
      "topicId": "size"
    },
    {
      "id": "size-w13",
      "word": "thin",
      "definitionEn": "Having little thickness.",
      "definitionId": "Memiliki ketebalan yang kecil.",
      "topicId": "size"
    },
    {
      "id": "size-w14",
      "word": "heavy",
      "definitionEn": "Having great weight.",
      "definitionId": "Memiliki berat yang besar.",
      "topicId": "size"
    },
    {
      "id": "size-w15",
      "word": "light",
      "definitionEn": "Not heavy.",
      "definitionId": "Tidak berat; ringan.",
      "topicId": "size"
    },
    {
      "id": "size-w16",
      "word": "deep",
      "definitionEn": "Extending far down from the surface.",
      "definitionId": "Menjulang jauh ke bawah dari permukaan.",
      "topicId": "size"
    },
    {
      "id": "size-w17",
      "word": "shallow",
      "definitionEn": "Not deep.",
      "definitionId": "Tidak dalam.",
      "topicId": "size"
    },
    {
      "id": "size-w18",
      "word": "high",
      "definitionEn": "Great in height or level.",
      "definitionId": "Tinggi dalam ketinggian atau tingkat.",
      "topicId": "size"
    },
    {
      "id": "size-w19",
      "word": "low",
      "definitionEn": "Not high; near the bottom.",
      "definitionId": "Tidak tinggi; dekat bagian bawah.",
      "topicId": "size"
    },
    {
      "id": "size-w20",
      "word": "medium",
      "definitionEn": "Of middle size.",
      "definitionId": "Berukuran sedang.",
      "topicId": "size"
    },
    {
      "id": "size-w21",
      "word": "giant",
      "definitionEn": "Very large.",
      "definitionId": "Sangat besar.",
      "topicId": "size"
    },
    {
      "id": "size-w22",
      "word": "mini",
      "definitionEn": "Very small.",
      "definitionId": "Sangat kecil.",
      "topicId": "size"
    },
    {
      "id": "size-w27",
      "word": "bigger",
      "definitionEn": "Comparative of big; larger.",
      "definitionId": "Bentuk perbandingan dari big; lebih besar.",
      "topicId": "size"
    },
    {
      "id": "size-w28",
      "word": "smaller",
      "definitionEn": "Comparative of small; less large.",
      "definitionId": "Bentuk perbandingan dari small; kurang besar.",
      "topicId": "size"
    },
    {
      "id": "size-w29",
      "word": "longer",
      "definitionEn": "Comparative of long; more lengthy.",
      "definitionId": "Bentuk perbandingan dari long; lebih panjang.",
      "topicId": "size"
    },
    {
      "id": "size-w30",
      "word": "shorter",
      "definitionEn": "Comparative of short; less long.",
      "definitionId": "Bentuk perbandingan dari short; kurang panjang.",
      "topicId": "size"
    },
    {
      "id": "size-w31",
      "word": "wider",
      "definitionEn": "Comparative of wide; more wide.",
      "definitionId": "Bentuk perbandingan dari wide; lebih lebar.",
      "topicId": "size"
    },
    {
      "id": "size-w32",
      "word": "narrower",
      "definitionEn": "Comparative of narrow; less wide.",
      "definitionId": "Bentuk perbandingan dari narrow; lebih sempit.",
      "topicId": "size"
    },
    {
      "id": "size-w33",
      "word": "taller",
      "definitionEn": "Comparative of tall; higher.",
      "definitionId": "Bentuk perbandingan dari tall; lebih tinggi.",
      "topicId": "size"
    },
    {
      "id": "size-w34",
      "word": "lower",
      "definitionEn": "Comparative of low; not as high.",
      "definitionId": "Bentuk perbandingan dari low; lebih rendah.",
      "topicId": "size"
    },
    {
      "id": "size-w35",
      "word": "average",
      "definitionEn": "Typical or normal for a group.",
      "definitionId": "Tipikal atau normal untuk suatu kelompok.",
      "topicId": "size"
    }
  ],
  "social-media": [
    {
      "id": "social-media-w02",
      "word": "platform",
      "definitionEn": "A service or system for sharing content online.",
      "definitionId": "Layanan atau sistem untuk berbagi konten secara online.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w03",
      "word": "account",
      "definitionEn": "A personal record used to access a service.",
      "definitionId": "Catatan pribadi untuk mengakses sebuah layanan.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w04",
      "word": "profile",
      "definitionEn": "A page with information about a person or account.",
      "definitionId": "Halaman berisi informasi tentang seseorang atau akun.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w05",
      "word": "username",
      "definitionEn": "The name you use to identify your account.",
      "definitionId": "Nama yang dipakai untuk mengenali akun.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w06",
      "word": "password",
      "definitionEn": "A secret word used to access an account.",
      "definitionId": "Kata rahasia untuk mengakses akun.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w07",
      "word": "login",
      "definitionEn": "To sign in to an account.",
      "definitionId": "Masuk ke sebuah akun.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w08",
      "word": "logout",
      "definitionEn": "To sign out of an account.",
      "definitionId": "Keluar dari sebuah akun.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w09",
      "word": "post",
      "definitionEn": "A message or piece of content shared online.",
      "definitionId": "Pesan atau konten yang dibagikan online.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w10",
      "word": "upload",
      "definitionEn": "To send a file to a site or service.",
      "definitionId": "Mengirim file ke situs atau layanan.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w11",
      "word": "download",
      "definitionEn": "To transfer a file from a site to your device.",
      "definitionId": "Memindahkan file dari situs ke perangkatmu.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w12",
      "word": "content",
      "definitionEn": "Information or media shared online.",
      "definitionId": "Informasi atau media yang dibagikan online.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w13",
      "word": "creator",
      "definitionEn": "A person who makes content.",
      "definitionId": "Orang yang membuat konten.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w14",
      "word": "follower",
      "definitionEn": "A person who follows an account.",
      "definitionId": "Orang yang mengikuti sebuah akun.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w15",
      "word": "following",
      "definitionEn": "The people an account follows.",
      "definitionId": "Orang-orang yang diikuti sebuah akun.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w16",
      "word": "subscriber",
      "definitionEn": "A person who pays for or follows a channel.",
      "definitionId": "Orang yang membayar atau mengikuti sebuah kanal.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w18",
      "word": "like",
      "definitionEn": "An online expression of approval.",
      "definitionId": "Ekspresi online untuk menyatakan suka.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w19",
      "word": "comment",
      "definitionEn": "A written response to a post.",
      "definitionId": "Tanggapan tertulis terhadap sebuah unggahan.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w20",
      "word": "reply",
      "definitionEn": "A reply to a comment or message.",
      "definitionId": "Balasan untuk komentar atau pesan.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w21",
      "word": "share",
      "definitionEn": "To send content to others.",
      "definitionId": "Mengirim konten ke orang lain.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w22",
      "word": "repost",
      "definitionEn": "To post again from another account.",
      "definitionId": "Mengunggah ulang dari akun lain.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w23",
      "word": "story",
      "definitionEn": "A short post that disappears after a time.",
      "definitionId": "Unggahan singkat yang hilang setelah beberapa waktu.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w25",
      "word": "video",
      "definitionEn": "Moving images with or without sound.",
      "definitionId": "Gambar bergerak dengan atau tanpa suara.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w26",
      "word": "photo",
      "definitionEn": "A picture made with a camera.",
      "definitionId": "Gambar yang diambil dengan kamera.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w27",
      "word": "caption",
      "definitionEn": "Text that explains a post.",
      "definitionId": "Teks yang menjelaskan sebuah unggahan.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w28",
      "word": "hashtag",
      "definitionEn": "A keyword with # used to label content.",
      "definitionId": "Kata kunci dengan # untuk memberi label konten.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w29",
      "word": "tag",
      "definitionEn": "A label added to a post or person.",
      "definitionId": "Label yang ditambahkan pada unggahan atau orang.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w30",
      "word": "mention",
      "definitionEn": "To refer to someone in a post.",
      "definitionId": "Menyebut seseorang dalam unggahan.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w31",
      "word": "notification",
      "definitionEn": "An alert about activity in an account.",
      "definitionId": "Pemberitahuan tentang aktivitas pada akun.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w32",
      "word": "message",
      "definitionEn": "A text sent to someone.",
      "definitionId": "Teks yang dikirim kepada seseorang.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w34",
      "word": "chat",
      "definitionEn": "A live or written conversation online.",
      "definitionId": "Percakapan langsung atau tertulis secara online.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w35",
      "word": "group",
      "definitionEn": "A set of people connected together.",
      "definitionId": "Sekumpulan orang yang terhubung.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w36",
      "word": "community",
      "definitionEn": "A group of people with shared interests.",
      "definitionId": "Sekelompok orang dengan minat yang sama.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w37",
      "word": "viral",
      "definitionEn": "Spreading very quickly online.",
      "definitionId": "Menyebar sangat cepat secara online.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w38",
      "word": "trending",
      "definitionEn": "Currently popular online.",
      "definitionId": "Sedang populer secara online.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w39",
      "word": "algorithm",
      "definitionEn": "A set of rules used to decide what people see.",
      "definitionId": "Sekumpulan aturan untuk menentukan apa yang orang lihat.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w40",
      "word": "engagement",
      "definitionEn": "The amount of interaction with content.",
      "definitionId": "Jumlah interaksi terhadap konten.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w41",
      "word": "reach",
      "definitionEn": "The number of people who see content.",
      "definitionId": "Jumlah orang yang melihat konten.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w42",
      "word": "privacy",
      "definitionEn": "Control over who can see your information.",
      "definitionId": "Kontrol atas siapa yang dapat melihat informasi kamu.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w43",
      "word": "settings",
      "definitionEn": "Options used to control an account.",
      "definitionId": "Pilihan untuk mengatur sebuah akun.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w46",
      "word": "block",
      "definitionEn": "To stop someone from contacting or viewing you.",
      "definitionId": "Menghentikan seseorang untuk menghubungi atau melihatmu.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w47",
      "word": "report",
      "definitionEn": "To tell a platform about bad content.",
      "definitionId": "Melaporkan konten buruk ke platform.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w48",
      "word": "spam",
      "definitionEn": "Unwanted or harmful messages.",
      "definitionId": "Pesan yang tidak diinginkan atau berbahaya.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w49",
      "word": "verified",
      "definitionEn": "Confirmed as authentic by a platform.",
      "definitionId": "Dikonfirmasi sebagai akun asli oleh platform.",
      "topicId": "social-media"
    },
    {
      "id": "social-media-w50",
      "word": "influencer",
      "definitionEn": "A person who affects other people's choices online.",
      "definitionId": "Orang yang memengaruhi pilihan orang lain secara online.",
      "topicId": "social-media"
    }
  ],
  "sports": [
    {
      "id": "sports-w01",
      "word": "sport",
      "definitionEn": "A physical activity done for competition or fun.",
      "definitionId": "Aktivitas fisik yang dilakukan untuk kompetisi atau hiburan.",
      "topicId": "sports"
    },
    {
      "id": "sports-w02",
      "word": "exercise",
      "definitionEn": "Physical activity done to keep the body healthy.",
      "definitionId": "Aktivitas fisik untuk menjaga tubuh tetap sehat.",
      "topicId": "sports"
    },
    {
      "id": "sports-w03",
      "word": "workout",
      "definitionEn": "A session of exercise or training.",
      "definitionId": "Sesi latihan fisik atau olahraga.",
      "topicId": "sports"
    },
    {
      "id": "sports-w04",
      "word": "training",
      "definitionEn": "Practice to improve skill or strength.",
      "definitionId": "Latihan untuk meningkatkan kemampuan atau kekuatan.",
      "topicId": "sports"
    },
    {
      "id": "sports-w05",
      "word": "coach",
      "definitionEn": "A person who trains or teaches athletes.",
      "definitionId": "Orang yang melatih atau mengajar atlet.",
      "topicId": "sports"
    },
    {
      "id": "sports-w06",
      "word": "player",
      "definitionEn": "A person who plays a sport.",
      "definitionId": "Orang yang bermain olahraga.",
      "topicId": "sports"
    },
    {
      "id": "sports-w07",
      "word": "team",
      "definitionEn": "A group of players working together.",
      "definitionId": "Sekelompok pemain yang bekerja sama.",
      "topicId": "sports"
    },
    {
      "id": "sports-w08",
      "word": "captain",
      "definitionEn": "A team leader.",
      "definitionId": "Pemimpin tim.",
      "topicId": "sports"
    },
    {
      "id": "sports-w09",
      "word": "opponent",
      "definitionEn": "A person or team you compete against.",
      "definitionId": "Orang atau tim yang kamu lawan.",
      "topicId": "sports"
    },
    {
      "id": "sports-w10",
      "word": "referee",
      "definitionEn": "An official who enforces rules in a game.",
      "definitionId": "Petugas yang menegakkan aturan dalam pertandingan.",
      "topicId": "sports"
    },
    {
      "id": "sports-w11",
      "word": "match",
      "definitionEn": "A contest between players or teams.",
      "definitionId": "Pertandingan antara pemain atau tim.",
      "topicId": "sports"
    },
    {
      "id": "sports-w12",
      "word": "game",
      "definitionEn": "A sport or competitive activity.",
      "definitionId": "Olahraga atau aktivitas kompetitif.",
      "topicId": "sports"
    },
    {
      "id": "sports-w13",
      "word": "competition",
      "definitionEn": "An event where people compete.",
      "definitionId": "Kegiatan atau ajang di mana orang bersaing.",
      "topicId": "sports"
    },
    {
      "id": "sports-w14",
      "word": "tournament",
      "definitionEn": "A series of contests to decide a winner.",
      "definitionId": "Serangkaian pertandingan untuk menentukan pemenang.",
      "topicId": "sports"
    },
    {
      "id": "sports-w15",
      "word": "score",
      "definitionEn": "The number of points earned.",
      "definitionId": "Jumlah poin yang diperoleh.",
      "topicId": "sports"
    },
    {
      "id": "sports-w16",
      "word": "goal",
      "definitionEn": "An objective scored in a game.",
      "definitionId": "Tujuan atau poin yang dicetak dalam permainan.",
      "topicId": "sports"
    },
    {
      "id": "sports-w17",
      "word": "point",
      "definitionEn": "A unit of score.",
      "definitionId": "Satuan skor.",
      "topicId": "sports"
    },
    {
      "id": "sports-w18",
      "word": "win",
      "definitionEn": "To be successful in a game.",
      "definitionId": "Berhasil dalam permainan.",
      "topicId": "sports"
    },
    {
      "id": "sports-w19",
      "word": "lose",
      "definitionEn": "To be unsuccessful in a game.",
      "definitionId": "Tidak berhasil dalam permainan.",
      "topicId": "sports"
    },
    {
      "id": "sports-w20",
      "word": "draw",
      "definitionEn": "A result where neither side wins.",
      "definitionId": "Hasil ketika tidak ada pihak yang menang.",
      "topicId": "sports"
    },
    {
      "id": "sports-w21",
      "word": "football",
      "definitionEn": "A sport played by kicking a ball (soccer).",
      "definitionId": "Olahraga yang dimainkan dengan menendang bola (soccer).",
      "topicId": "sports"
    },
    {
      "id": "sports-w22",
      "word": "futsal",
      "definitionEn": "Indoor soccer played with a smaller ball.",
      "definitionId": "Sepak bola dalam ruangan dengan bola yang lebih kecil.",
      "topicId": "sports"
    },
    {
      "id": "sports-w23",
      "word": "basketball",
      "definitionEn": "A sport played by shooting a ball through a hoop.",
      "definitionId": "Olahraga dengan memasukkan bola ke ring.",
      "topicId": "sports"
    },
    {
      "id": "sports-w24",
      "word": "volleyball",
      "definitionEn": "A sport played by hitting a ball over a net with hands.",
      "definitionId": "Olahraga dengan memukul bola melewati net menggunakan tangan.",
      "topicId": "sports"
    },
    {
      "id": "sports-w25",
      "word": "badminton",
      "definitionEn": "A sport played with rackets and a shuttlecock.",
      "definitionId": "Olahraga dengan raket dan kok.",
      "topicId": "sports"
    },
    {
      "id": "sports-w26",
      "word": "tennis",
      "definitionEn": "A sport played with rackets and a ball over a net.",
      "definitionId": "Olahraga dengan raket dan bola melewati net.",
      "topicId": "sports"
    },
    {
      "id": "sports-w28",
      "word": "swimming",
      "definitionEn": "The sport or activity of moving through water.",
      "definitionId": "Olahraga atau aktivitas bergerak di air.",
      "topicId": "sports"
    },
    {
      "id": "sports-w29",
      "word": "running",
      "definitionEn": "The sport or activity of running.",
      "definitionId": "Olahraga atau aktivitas berlari.",
      "topicId": "sports"
    },
    {
      "id": "sports-w30",
      "word": "jogging",
      "definitionEn": "Running at a slow steady pace.",
      "definitionId": "Berlari dengan kecepatan pelan dan stabil.",
      "topicId": "sports"
    },
    {
      "id": "sports-w31",
      "word": "cycling",
      "definitionEn": "The activity of riding a bicycle.",
      "definitionId": "Aktivitas mengendarai sepeda.",
      "topicId": "sports"
    },
    {
      "id": "sports-w32",
      "word": "gymnastics",
      "definitionEn": "The sport of exercises requiring strength and balance.",
      "definitionId": "Olahraga dengan gerakan yang membutuhkan kekuatan dan keseimbangan.",
      "topicId": "sports"
    },
    {
      "id": "sports-w33",
      "word": "yoga",
      "definitionEn": "A practice of physical postures and breathing.",
      "definitionId": "Latihan postur tubuh dan pernapasan.",
      "topicId": "sports"
    },
    {
      "id": "sports-w35",
      "word": "boxing",
      "definitionEn": "A combat sport using punches.",
      "definitionId": "Olahraga bela diri menggunakan pukulan.",
      "topicId": "sports"
    },
    {
      "id": "sports-w36",
      "word": "baseball",
      "definitionEn": "A bat-and-ball sport.",
      "definitionId": "Olahraga dengan pemukul dan bola.",
      "topicId": "sports"
    },
    {
      "id": "sports-w37",
      "word": "softball",
      "definitionEn": "A bat-and-ball sport similar to baseball.",
      "definitionId": "Olahraga dengan pemukul dan bola yang mirip bisbol.",
      "topicId": "sports"
    },
    {
      "id": "sports-w38",
      "word": "athletics",
      "definitionEn": "Track and field sports.",
      "definitionId": "Olahraga atletik lintasan dan lapangan.",
      "topicId": "sports"
    },
    {
      "id": "sports-w39",
      "word": "field",
      "definitionEn": "An open area where sports are played.",
      "definitionId": "Area terbuka tempat olahraga dimainkan.",
      "topicId": "sports"
    },
    {
      "id": "sports-w40",
      "word": "court",
      "definitionEn": "A marked area for games like tennis or basketball.",
      "definitionId": "Area bertanda untuk permainan seperti tenis atau basket.",
      "topicId": "sports"
    },
    {
      "id": "sports-w41",
      "word": "stadium",
      "definitionEn": "A large sports arena with seats.",
      "definitionId": "Arena olahraga besar dengan tempat duduk.",
      "topicId": "sports"
    },
    {
      "id": "sports-w42",
      "word": "gym",
      "definitionEn": "A place for exercise and training.",
      "definitionId": "Tempat untuk olahraga dan latihan.",
      "topicId": "sports"
    },
    {
      "id": "sports-w43",
      "word": "uniform",
      "definitionEn": "Clothing of a distinctive design worn by a team.",
      "definitionId": "Pakaian berdesain khas yang dipakai oleh tim.",
      "topicId": "sports"
    },
    {
      "id": "sports-w44",
      "word": "jersey",
      "definitionEn": "A sports shirt with a team name or number.",
      "definitionId": "Kaos olahraga dengan nama atau nomor tim.",
      "topicId": "sports"
    },
    {
      "id": "sports-w45",
      "word": "shoes",
      "definitionEn": "Footwear for sports.",
      "definitionId": "Alas kaki untuk olahraga.",
      "topicId": "sports"
    },
    {
      "id": "sports-w46",
      "word": "ball",
      "definitionEn": "A round object used in many games.",
      "definitionId": "Benda bulat yang digunakan dalam banyak permainan.",
      "topicId": "sports"
    },
    {
      "id": "sports-w47",
      "word": "racket",
      "definitionEn": "A bat with a handle and strings for hitting a ball.",
      "definitionId": "Pemukul bertangkai dengan senar untuk memukul bola.",
      "topicId": "sports"
    },
    {
      "id": "sports-w48",
      "word": "whistle",
      "definitionEn": "A small instrument used to make a sharp sound.",
      "definitionId": "Alat kecil untuk menghasilkan bunyi nyaring.",
      "topicId": "sports"
    }
  ],
  "taste": [
    {
      "id": "taste-w01",
      "word": "taste",
      "definitionEn": "The flavor of food or drink.",
      "definitionId": "Rasa dari makanan atau minuman.",
      "topicId": "taste"
    },
    {
      "id": "taste-w02",
      "word": "flavor",
      "definitionEn": "The particular taste or smell of something.",
      "definitionId": "Rasa atau aroma khas dari sesuatu.",
      "topicId": "taste"
    },
    {
      "id": "taste-w03",
      "word": "sweet",
      "definitionEn": "Having the taste of sugar.",
      "definitionId": "Memiliki rasa gula.",
      "topicId": "taste"
    },
    {
      "id": "taste-w04",
      "word": "salty",
      "definitionEn": "Having the taste of salt.",
      "definitionId": "Memiliki rasa garam.",
      "topicId": "taste"
    },
    {
      "id": "taste-w05",
      "word": "sour",
      "definitionEn": "Having a sharp acidic taste.",
      "definitionId": "Memiliki rasa asam yang tajam.",
      "topicId": "taste"
    },
    {
      "id": "taste-w06",
      "word": "bitter",
      "definitionEn": "Having a sharp, often unpleasant taste; not sweet.",
      "definitionId": "Memiliki rasa tajam, sering tidak enak; tidak manis.",
      "topicId": "taste"
    },
    {
      "id": "taste-w07",
      "word": "spicy",
      "definitionEn": "Having a hot or strong flavor.",
      "definitionId": "Memiliki rasa pedas atau kuat.",
      "topicId": "taste"
    },
    {
      "id": "taste-w08",
      "word": "savory",
      "definitionEn": "Having a pleasant salty or meaty taste.",
      "definitionId": "Memiliki rasa asin atau daging yang enak.",
      "topicId": "taste"
    },
    {
      "id": "taste-w09",
      "word": "bland",
      "definitionEn": "Lacking strong taste.",
      "definitionId": "Kurang rasa; hambar.",
      "topicId": "taste"
    },
    {
      "id": "taste-w10",
      "word": "rich",
      "definitionEn": "Full-bodied and strong in taste.",
      "definitionId": "Kuat dan penuh dalam rasa.",
      "topicId": "taste"
    },
    {
      "id": "taste-w11",
      "word": "light",
      "definitionEn": "Not heavy; gentle in taste.",
      "definitionId": "Tidak berat; ringan rasanya.",
      "topicId": "taste"
    },
    {
      "id": "taste-w12",
      "word": "strong",
      "definitionEn": "Powerful in taste or smell.",
      "definitionId": "Kuat dalam rasa atau aroma.",
      "topicId": "taste"
    },
    {
      "id": "taste-w13",
      "word": "mild",
      "definitionEn": "Not strong; gentle in flavor.",
      "definitionId": "Tidak kuat; rasa lembut.",
      "topicId": "taste"
    },
    {
      "id": "taste-w14",
      "word": "fresh",
      "definitionEn": "Newly made; not stale.",
      "definitionId": "Baru dibuat; tidak basi.",
      "topicId": "taste"
    },
    {
      "id": "taste-w15",
      "word": "smoky",
      "definitionEn": "Having the taste of smoke.",
      "definitionId": "Memiliki rasa asap.",
      "topicId": "taste"
    },
    {
      "id": "taste-w16",
      "word": "creamy",
      "definitionEn": "Smooth and soft like cream.",
      "definitionId": "Halus dan lembut seperti krim.",
      "topicId": "taste"
    },
    {
      "id": "taste-w17",
      "word": "crispy",
      "definitionEn": "Firm and making a sharp sound when eaten.",
      "definitionId": "Kencang dan berbunyi renyah saat dimakan.",
      "topicId": "taste"
    },
    {
      "id": "taste-w18",
      "word": "crunchy",
      "definitionEn": "Hard and making a crunching sound when eaten.",
      "definitionId": "Keras dan berbunyi kriuk saat dimakan.",
      "topicId": "taste"
    },
    {
      "id": "taste-w19",
      "word": "soft",
      "definitionEn": "Not hard; easy to chew.",
      "definitionId": "Tidak keras; mudah dikunyah.",
      "topicId": "taste"
    },
    {
      "id": "taste-w20",
      "word": "juicy",
      "definitionEn": "Full of juice.",
      "definitionId": "Banyak mengandung sari atau cairan.",
      "topicId": "taste"
    },
    {
      "id": "taste-w21",
      "word": "dry",
      "definitionEn": "Not wet; without moisture.",
      "definitionId": "Tidak basah; tanpa kelembapan.",
      "topicId": "taste"
    },
    {
      "id": "taste-w22",
      "word": "oily",
      "definitionEn": "Containing or tasting like oil.",
      "definitionId": "Mengandung atau terasa seperti minyak.",
      "topicId": "taste"
    },
    {
      "id": "taste-w23",
      "word": "burnt",
      "definitionEn": "Overcooked or charred.",
      "definitionId": "Terlalu matang atau gosong.",
      "topicId": "taste"
    },
    {
      "id": "taste-w24",
      "word": "raw",
      "definitionEn": "Not cooked.",
      "definitionId": "Belum dimasak.",
      "topicId": "taste"
    },
    {
      "id": "taste-w25",
      "word": "ripe",
      "definitionEn": "Fully grown and ready to eat.",
      "definitionId": "Sudah matang sepenuhnya dan siap dimakan.",
      "topicId": "taste"
    },
    {
      "id": "taste-w26",
      "word": "overripe",
      "definitionEn": "Too ripe; past its best condition.",
      "definitionId": "Terlalu matang; melewati kondisi terbaiknya.",
      "topicId": "taste"
    },
    {
      "id": "taste-w27",
      "word": "delicious",
      "definitionEn": "Very pleasant to taste.",
      "definitionId": "Sangat enak rasanya.",
      "topicId": "taste"
    },
    {
      "id": "taste-w28",
      "word": "tasty",
      "definitionEn": "Good and pleasant to taste.",
      "definitionId": "Enak dan menyenangkan rasanya.",
      "topicId": "taste"
    },
    {
      "id": "taste-w29",
      "word": "yummy",
      "definitionEn": "Very tasty; delicious.",
      "definitionId": "Sangat enak; lezat.",
      "topicId": "taste"
    },
    {
      "id": "taste-w30",
      "word": "appetizing",
      "definitionEn": "Making you want to eat.",
      "definitionId": "Membuat ingin makan.",
      "topicId": "taste"
    },
    {
      "id": "taste-w31",
      "word": "awful",
      "definitionEn": "Very bad or unpleasant.",
      "definitionId": "Sangat buruk atau tidak menyenangkan.",
      "topicId": "taste"
    },
    {
      "id": "taste-w44",
      "word": "aftertaste",
      "definitionEn": "The taste left in the mouth after eating or drinking.",
      "definitionId": "Rasa yang tersisa di mulut setelah makan atau minum.",
      "topicId": "taste"
    }
  ],
  "time-date": [
    {
      "id": "time-date-w01",
      "word": "time",
      "definitionEn": "The measured period during which things happen.",
      "definitionId": "Periode terukur ketika sesuatu terjadi.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w02",
      "word": "date",
      "definitionEn": "A particular day of the month or year.",
      "definitionId": "Hari tertentu dalam bulan atau tahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w03",
      "word": "day",
      "definitionEn": "A 24-hour period.",
      "definitionId": "Periode 24 jam.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w04",
      "word": "week",
      "definitionEn": "A period of seven days.",
      "definitionId": "Periode tujuh hari.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w05",
      "word": "month",
      "definitionEn": "One of the 12 divisions of the year.",
      "definitionId": "Salah satu dari 12 bagian dalam setahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w06",
      "word": "year",
      "definitionEn": "A period of 12 months.",
      "definitionId": "Periode 12 bulan.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w07",
      "word": "hour",
      "definitionEn": "A period of 60 minutes.",
      "definitionId": "Periode 60 menit.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w08",
      "word": "minute",
      "definitionEn": "A period of 60 seconds.",
      "definitionId": "Periode 60 detik.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w09",
      "word": "second",
      "definitionEn": "A period of one second.",
      "definitionId": "Periode satu detik.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w10",
      "word": "calendar",
      "definitionEn": "A system that shows days, weeks, and months.",
      "definitionId": "Sistem yang menampilkan hari, minggu, dan bulan.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w11",
      "word": "clock",
      "definitionEn": "A device that shows the time.",
      "definitionId": "Perangkat yang menunjukkan waktu.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w12",
      "word": "watch",
      "definitionEn": "A small timepiece worn on the wrist.",
      "definitionId": "Jam kecil yang dipakai di pergelangan tangan.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w13",
      "word": "morning",
      "definitionEn": "The early part of the day.",
      "definitionId": "Bagian awal dari hari.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w14",
      "word": "afternoon",
      "definitionEn": "The time between noon and evening.",
      "definitionId": "Waktu antara tengah hari dan sore.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w15",
      "word": "evening",
      "definitionEn": "The later part of the day.",
      "definitionId": "Bagian akhir dari hari.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w16",
      "word": "night",
      "definitionEn": "The time when it is dark.",
      "definitionId": "Waktu ketika gelap.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w17",
      "word": "midnight",
      "definitionEn": "The middle of the night.",
      "definitionId": "Tengah malam.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w18",
      "word": "noon",
      "definitionEn": "The middle of the day; 12:00.",
      "definitionId": "Tengah hari; pukul 12.00.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w19",
      "word": "dawn",
      "definitionEn": "The first light of day.",
      "definitionId": "Cahaya pertama di pagi hari.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w20",
      "word": "sunrise",
      "definitionEn": "The time when the sun appears in the morning.",
      "definitionId": "Waktu ketika matahari muncul di pagi hari.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w21",
      "word": "sunset",
      "definitionEn": "The time when the sun goes down in the evening.",
      "definitionId": "Waktu ketika matahari terbenam di sore hari.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w22",
      "word": "weekday",
      "definitionEn": "Any day from Monday to Friday.",
      "definitionId": "Hari kerja dari Senin sampai Jumat.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w23",
      "word": "weekend",
      "definitionEn": "Saturday and Sunday; days off.",
      "definitionId": "Sabtu dan Minggu; hari libur.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w24",
      "word": "today",
      "definitionEn": "The current day.",
      "definitionId": "Hari ini.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w25",
      "word": "tomorrow",
      "definitionEn": "The day after today.",
      "definitionId": "Hari setelah hari ini.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w26",
      "word": "yesterday",
      "definitionEn": "The day before today.",
      "definitionId": "Hari sebelum hari ini.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w27",
      "word": "now",
      "definitionEn": "At the present time.",
      "definitionId": "Saat ini.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w28",
      "word": "later",
      "definitionEn": "At a later time.",
      "definitionId": "Di waktu yang lebih kemudian.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w29",
      "word": "soon",
      "definitionEn": "In a short time.",
      "definitionId": "Dalam waktu singkat.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w30",
      "word": "early",
      "definitionEn": "Before the usual time.",
      "definitionId": "Lebih awal dari waktu biasa.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w31",
      "word": "late",
      "definitionEn": "After the usual time.",
      "definitionId": "Lebih lambat dari waktu biasa.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w33",
      "word": "first",
      "definitionEn": "Coming before all others.",
      "definitionId": "Datang sebelum yang lain.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w34",
      "word": "last",
      "definitionEn": "Coming after all others.",
      "definitionId": "Datang setelah yang lain.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w35",
      "word": "next",
      "definitionEn": "Coming immediately after the present one.",
      "definitionId": "Datang segera setelah yang sekarang.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w36",
      "word": "previous",
      "definitionEn": "Coming before the present one.",
      "definitionId": "Datang sebelum yang sekarang.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w37",
      "word": "Monday",
      "definitionEn": "The day after Sunday.",
      "definitionId": "Hari setelah Minggu.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w38",
      "word": "Tuesday",
      "definitionEn": "The day after Monday.",
      "definitionId": "Hari setelah Senin.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w39",
      "word": "Wednesday",
      "definitionEn": "The day after Tuesday.",
      "definitionId": "Hari setelah Selasa.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w40",
      "word": "Thursday",
      "definitionEn": "The day after Wednesday.",
      "definitionId": "Hari setelah Rabu.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w41",
      "word": "Friday",
      "definitionEn": "The day after Thursday.",
      "definitionId": "Hari setelah Kamis.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w42",
      "word": "Saturday",
      "definitionEn": "The day after Friday.",
      "definitionId": "Hari setelah Jumat.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w43",
      "word": "Sunday",
      "definitionEn": "The day after Saturday.",
      "definitionId": "Hari setelah Sabtu.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w44",
      "word": "January",
      "definitionEn": "The first month of the year.",
      "definitionId": "Bulan pertama dalam setahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w45",
      "word": "February",
      "definitionEn": "The second month of the year.",
      "definitionId": "Bulan kedua dalam setahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w46",
      "word": "March",
      "definitionEn": "The third month of the year.",
      "definitionId": "Bulan ketiga dalam setahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w47",
      "word": "April",
      "definitionEn": "The fourth month of the year.",
      "definitionId": "Bulan keempat dalam setahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w48",
      "word": "May",
      "definitionEn": "The fifth month of the year.",
      "definitionId": "Bulan kelima dalam setahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w49",
      "word": "June",
      "definitionEn": "The sixth month of the year.",
      "definitionId": "Bulan keenam dalam setahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w50",
      "word": "July",
      "definitionEn": "The seventh month of the year.",
      "definitionId": "Bulan ketujuh dalam setahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w51",
      "word": "August",
      "definitionEn": "The eighth month of the year.",
      "definitionId": "Bulan kedelapan dalam setahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w52",
      "word": "September",
      "definitionEn": "The ninth month of the year.",
      "definitionId": "Bulan kesembilan dalam setahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w53",
      "word": "October",
      "definitionEn": "The tenth month of the year.",
      "definitionId": "Bulan kesepuluh dalam setahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w54",
      "word": "November",
      "definitionEn": "The eleventh month of the year.",
      "definitionId": "Bulan kesebelas dalam setahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w55",
      "word": "December",
      "definitionEn": "The twelfth month of the year.",
      "definitionId": "Bulan kedua belas dalam setahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w56",
      "word": "spring",
      "definitionEn": "The season after winter.",
      "definitionId": "Musim setelah musim dingin.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w57",
      "word": "summer",
      "definitionEn": "The warmest season of the year.",
      "definitionId": "Musim paling hangat dalam setahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w58",
      "word": "autumn",
      "definitionEn": "The season between summer and winter.",
      "definitionId": "Musim di antara musim panas dan musim dingin.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w59",
      "word": "winter",
      "definitionEn": "The coldest season of the year.",
      "definitionId": "Musim paling dingin dalam setahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w60",
      "word": "century",
      "definitionEn": "A period of 100 years.",
      "definitionId": "Periode 100 tahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w61",
      "word": "decade",
      "definitionEn": "A period of 10 years.",
      "definitionId": "Periode 10 tahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w62",
      "word": "birthday",
      "definitionEn": "The anniversary of a person's birth.",
      "definitionId": "Peringatan hari kelahiran seseorang.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w63",
      "word": "holiday",
      "definitionEn": "A day of celebration when people do not work.",
      "definitionId": "Hari perayaan ketika orang tidak bekerja.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w64",
      "word": "vacation",
      "definitionEn": "A time away from work or school.",
      "definitionId": "Waktu libur dari pekerjaan atau sekolah.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w65",
      "word": "schedule",
      "definitionEn": "A plan listing times of events.",
      "definitionId": "Rencana yang mencantumkan waktu kegiatan.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w66",
      "word": "appointment",
      "definitionEn": "A meeting or time arranged to do something.",
      "definitionId": "Pertemuan atau waktu yang diatur untuk melakukan sesuatu.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w67",
      "word": "meeting",
      "definitionEn": "A planned gathering of people.",
      "definitionId": "Pertemuan yang direncanakan.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w68",
      "word": "deadline",
      "definitionEn": "The latest time by which something must be done.",
      "definitionId": "Waktu paling akhir ketika sesuatu harus selesai.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w70",
      "word": "lunchtime",
      "definitionEn": "The time when people eat lunch.",
      "definitionId": "Waktu ketika orang makan siang.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w71",
      "word": "bedtime",
      "definitionEn": "The time when you go to sleep.",
      "definitionId": "Waktu ketika kamu pergi tidur.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w79",
      "word": "daily",
      "definitionEn": "Happening every day.",
      "definitionId": "Terjadi setiap hari.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w80",
      "word": "weekly",
      "definitionEn": "Happening every week.",
      "definitionId": "Terjadi setiap minggu.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w81",
      "word": "monthly",
      "definitionEn": "Happening every month.",
      "definitionId": "Terjadi setiap bulan.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w82",
      "word": "yearly",
      "definitionEn": "Happening every year.",
      "definitionId": "Terjadi setiap tahun.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w87",
      "word": "once",
      "definitionEn": "One time only.",
      "definitionId": "Hanya satu kali.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w88",
      "word": "twice",
      "definitionEn": "Two times.",
      "definitionId": "Dua kali.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w90",
      "word": "always",
      "definitionEn": "At all times.",
      "definitionId": "Setiap waktu.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w91",
      "word": "usually",
      "definitionEn": "In most cases.",
      "definitionId": "Dalam kebanyakan kasus.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w92",
      "word": "often",
      "definitionEn": "Many times; frequently.",
      "definitionId": "Sering; berkali-kali.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w93",
      "word": "sometimes",
      "definitionEn": "At certain times; not always.",
      "definitionId": "Pada waktu tertentu; tidak selalu.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w94",
      "word": "rarely",
      "definitionEn": "Not often.",
      "definitionId": "Tidak sering.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w95",
      "word": "never",
      "definitionEn": "Not ever.",
      "definitionId": "Tidak pernah.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w96",
      "word": "before",
      "definitionEn": "Earlier than something else.",
      "definitionId": "Lebih awal daripada yang lain.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w97",
      "word": "after",
      "definitionEn": "Later than something else.",
      "definitionId": "Lebih lambat daripada yang lain.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w98",
      "word": "between",
      "definitionEn": "In the middle of two things.",
      "definitionId": "Di tengah-tengah dua hal.",
      "topicId": "time-date"
    },
    {
      "id": "time-date-w100",
      "word": "until",
      "definitionEn": "Up to the time of.",
      "definitionId": "Sampai pada waktu tertentu.",
      "topicId": "time-date"
    }
  ],
  "transport": [
    {
      "id": "transport-w01",
      "word": "transport",
      "definitionEn": "The movement of people or goods from one place to another.",
      "definitionId": "Pergerakan orang atau barang dari satu tempat ke tempat lain.",
      "topicId": "transport"
    },
    {
      "id": "transport-w02",
      "word": "vehicle",
      "definitionEn": "A means of transportation, such as a car or bus.",
      "definitionId": "Sarana transportasi, seperti mobil atau bus.",
      "topicId": "transport"
    },
    {
      "id": "transport-w03",
      "word": "car",
      "definitionEn": "A road vehicle with four wheels powered by an engine.",
      "definitionId": "Kendaraan jalan dengan empat roda yang digerakkan mesin.",
      "topicId": "transport"
    },
    {
      "id": "transport-w04",
      "word": "taxi",
      "definitionEn": "A car for hire with a driver.",
      "definitionId": "Mobil sewaan dengan sopir.",
      "topicId": "transport"
    },
    {
      "id": "transport-w05",
      "word": "bus",
      "definitionEn": "A large vehicle that carries many passengers.",
      "definitionId": "Kendaraan besar yang membawa banyak penumpang.",
      "topicId": "transport"
    },
    {
      "id": "transport-w06",
      "word": "minibus",
      "definitionEn": "A smaller bus used for short routes.",
      "definitionId": "Bus kecil untuk rute pendek.",
      "topicId": "transport"
    },
    {
      "id": "transport-w07",
      "word": "train",
      "definitionEn": "A railway vehicle that carries passengers or goods.",
      "definitionId": "Kendaraan rel yang membawa penumpang atau barang.",
      "topicId": "transport"
    },
    {
      "id": "transport-w08",
      "word": "subway",
      "definitionEn": "An underground railway system.",
      "definitionId": "Sistem kereta bawah tanah.",
      "topicId": "transport"
    },
    {
      "id": "transport-w09",
      "word": "tram",
      "definitionEn": "A streetcar that runs on tracks.",
      "definitionId": "Kereta jalanan yang berjalan di rel.",
      "topicId": "transport"
    },
    {
      "id": "transport-w10",
      "word": "motorcycle",
      "definitionEn": "A two-wheeled motor vehicle.",
      "definitionId": "Kendaraan bermotor roda dua.",
      "topicId": "transport"
    },
    {
      "id": "transport-w11",
      "word": "bike",
      "definitionEn": "A bicycle.",
      "definitionId": "Sepeda.",
      "topicId": "transport"
    },
    {
      "id": "transport-w12",
      "word": "scooter",
      "definitionEn": "A small two-wheeled vehicle, sometimes electric.",
      "definitionId": "Kendaraan kecil roda dua, kadang bertenaga listrik.",
      "topicId": "transport"
    },
    {
      "id": "transport-w13",
      "word": "van",
      "definitionEn": "A medium-sized vehicle for carrying people or goods.",
      "definitionId": "Kendaraan ukuran sedang untuk membawa orang atau barang.",
      "topicId": "transport"
    },
    {
      "id": "transport-w14",
      "word": "truck",
      "definitionEn": "A large vehicle used to carry goods.",
      "definitionId": "Kendaraan besar untuk mengangkut barang.",
      "topicId": "transport"
    },
    {
      "id": "transport-w15",
      "word": "ship",
      "definitionEn": "A large vehicle that travels on water.",
      "definitionId": "Kendaraan besar yang berlayar di air.",
      "topicId": "transport"
    },
    {
      "id": "transport-w16",
      "word": "boat",
      "definitionEn": "A small vehicle for traveling on water.",
      "definitionId": "Kendaraan kecil untuk bergerak di air.",
      "topicId": "transport"
    },
    {
      "id": "transport-w17",
      "word": "ferry",
      "definitionEn": "A boat used to carry people or vehicles across water.",
      "definitionId": "Perahu untuk mengangkut orang atau kendaraan menyeberang air.",
      "topicId": "transport"
    },
    {
      "id": "transport-w18",
      "word": "plane",
      "definitionEn": "A vehicle that flies in the air.",
      "definitionId": "Kendaraan yang terbang di udara.",
      "topicId": "transport"
    },
    {
      "id": "transport-w19",
      "word": "airport",
      "definitionEn": "A place where airplanes take off and land.",
      "definitionId": "Tempat pesawat lepas landas dan mendarat.",
      "topicId": "transport"
    },
    {
      "id": "transport-w20",
      "word": "station",
      "definitionEn": "A place where trains or buses stop for passengers.",
      "definitionId": "Tempat kereta atau bus berhenti untuk penumpang.",
      "topicId": "transport"
    },
    {
      "id": "transport-w21",
      "word": "terminal",
      "definitionEn": "A station or building for passengers to board or leave.",
      "definitionId": "Stasiun atau gedung untuk naik atau turun penumpang.",
      "topicId": "transport"
    },
    {
      "id": "transport-w22",
      "word": "port",
      "definitionEn": "A sheltered place where ships dock.",
      "definitionId": "Tempat terlindung untuk kapal bersandar.",
      "topicId": "transport"
    },
    {
      "id": "transport-w23",
      "word": "platform",
      "definitionEn": "A raised area where passengers board transport.",
      "definitionId": "Area yang lebih tinggi tempat penumpang naik transportasi.",
      "topicId": "transport"
    },
    {
      "id": "transport-w25",
      "word": "ticket",
      "definitionEn": "A printed or digital pass for travel.",
      "definitionId": "Tiket cetak atau digital untuk perjalanan.",
      "topicId": "transport"
    },
    {
      "id": "transport-w26",
      "word": "fare",
      "definitionEn": "The cost to travel.",
      "definitionId": "Biaya untuk bepergian.",
      "topicId": "transport"
    },
    {
      "id": "transport-w27",
      "word": "schedule",
      "definitionEn": "A plan listing times of trips.",
      "definitionId": "Rencana yang mencantumkan waktu perjalanan.",
      "topicId": "transport"
    },
    {
      "id": "transport-w28",
      "word": "route",
      "definitionEn": "A path taken to get from one place to another.",
      "definitionId": "Jalur yang ditempuh untuk berpindah tempat.",
      "topicId": "transport"
    },
    {
      "id": "transport-w29",
      "word": "map",
      "definitionEn": "A diagram that shows places or routes.",
      "definitionId": "Diagram yang menunjukkan tempat atau rute.",
      "topicId": "transport"
    },
    {
      "id": "transport-w30",
      "word": "transfer",
      "definitionEn": "The act of changing from one vehicle to another.",
      "definitionId": "Tindakan berpindah dari satu kendaraan ke kendaraan lain.",
      "topicId": "transport"
    },
    {
      "id": "transport-w31",
      "word": "driver",
      "definitionEn": "A person who operates a vehicle.",
      "definitionId": "Orang yang mengemudikan kendaraan.",
      "topicId": "transport"
    },
    {
      "id": "transport-w32",
      "word": "passenger",
      "definitionEn": "A person who rides in a vehicle.",
      "definitionId": "Orang yang menumpang di kendaraan.",
      "topicId": "transport"
    },
    {
      "id": "transport-w33",
      "word": "seat",
      "definitionEn": "A place to sit in a vehicle.",
      "definitionId": "Tempat duduk di kendaraan.",
      "topicId": "transport"
    },
    {
      "id": "transport-w34",
      "word": "traffic",
      "definitionEn": "Vehicles moving on roads.",
      "definitionId": "Kendaraan yang bergerak di jalan.",
      "topicId": "transport"
    },
    {
      "id": "transport-w35",
      "word": "jam",
      "definitionEn": "Heavy traffic that causes delay.",
      "definitionId": "Lalu lintas padat yang menyebabkan keterlambatan.",
      "topicId": "transport"
    },
    {
      "id": "transport-w36",
      "word": "road",
      "definitionEn": "A way for vehicles to travel.",
      "definitionId": "Jalur untuk kendaraan bergerak.",
      "topicId": "transport"
    },
    {
      "id": "transport-w37",
      "word": "street",
      "definitionEn": "A road in a city with buildings on the sides.",
      "definitionId": "Jalan di kota dengan bangunan di sisi-sisinya.",
      "topicId": "transport"
    },
    {
      "id": "transport-w38",
      "word": "bridge",
      "definitionEn": "A structure built to cross over water or roads.",
      "definitionId": "Struktur yang dibangun untuk menyeberangi air atau jalan.",
      "topicId": "transport"
    },
    {
      "id": "transport-w39",
      "word": "crosswalk",
      "definitionEn": "A place for pedestrians to cross a road.",
      "definitionId": "Tempat pejalan kaki menyeberang jalan.",
      "topicId": "transport"
    },
    {
      "id": "transport-w40",
      "word": "signal",
      "definitionEn": "A light or sign that controls traffic.",
      "definitionId": "Lampu atau tanda yang mengatur lalu lintas.",
      "topicId": "transport"
    },
    {
      "id": "transport-w41",
      "word": "parking",
      "definitionEn": "A place to leave vehicles.",
      "definitionId": "Tempat untuk meninggalkan kendaraan.",
      "topicId": "transport"
    },
    {
      "id": "transport-w42",
      "word": "garage",
      "definitionEn": "A building or space for keeping vehicles.",
      "definitionId": "Bangunan atau tempat untuk menyimpan kendaraan.",
      "topicId": "transport"
    },
    {
      "id": "transport-w44",
      "word": "license",
      "definitionEn": "An official permission to drive.",
      "definitionId": "Izin resmi untuk mengemudi.",
      "topicId": "transport"
    },
    {
      "id": "transport-w45",
      "word": "helmet",
      "definitionEn": "A protective head covering.",
      "definitionId": "Pelindung kepala.",
      "topicId": "transport"
    },
    {
      "id": "transport-w46",
      "word": "arrive",
      "definitionEn": "To reach a destination.",
      "definitionId": "Tiba di tujuan.",
      "topicId": "transport"
    },
    {
      "id": "transport-w47",
      "word": "depart",
      "definitionEn": "To leave a place.",
      "definitionId": "Berangkat atau meninggalkan tempat.",
      "topicId": "transport"
    },
    {
      "id": "transport-w48",
      "word": "delay",
      "definitionEn": "A wait or slowdown in travel.",
      "definitionId": "Tertunda atau melambat dalam perjalanan.",
      "topicId": "transport"
    },
    {
      "id": "transport-w49",
      "word": "early",
      "definitionEn": "Before the usual time.",
      "definitionId": "Lebih awal dari waktu biasa.",
      "topicId": "transport"
    },
    {
      "id": "transport-w50",
      "word": "late",
      "definitionEn": "After the usual time.",
      "definitionId": "Lebih lambat dari waktu biasa.",
      "topicId": "transport"
    }
  ],
  "vegetables": [
    {
      "id": "vegetables-w01",
      "word": "vegetable",
      "definitionEn": "An edible plant or part of a plant.",
      "definitionId": "Tanaman atau bagian tanaman yang dapat dimakan.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w02",
      "word": "carrot",
      "definitionEn": "A long orange root vegetable.",
      "definitionId": "Sayuran akar panjang berwarna oranye.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w03",
      "word": "potato",
      "definitionEn": "A starchy tuber used as food.",
      "definitionId": "Umbi bertepung yang dimakan sebagai makanan.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w04",
      "word": "tomato",
      "definitionEn": "A round red fruit used as a vegetable.",
      "definitionId": "Buah bulat merah yang sering dipakai sebagai sayuran.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w05",
      "word": "onion",
      "definitionEn": "A round vegetable with layers, used in cooking.",
      "definitionId": "Sayuran bulat berlapis yang dipakai dalam masakan.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w06",
      "word": "garlic",
      "definitionEn": "A small bulb with a strong smell used in cooking.",
      "definitionId": "Umbi kecil beraroma tajam untuk bumbu masak.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w07",
      "word": "chili",
      "definitionEn": "A hot pepper used in cooking.",
      "definitionId": "Cabai pedas yang dipakai dalam masakan.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w08",
      "word": "spinach",
      "definitionEn": "A leafy green vegetable.",
      "definitionId": "Sayuran daun hijau.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w09",
      "word": "cabbage",
      "definitionEn": "A leafy vegetable with a round head.",
      "definitionId": "Sayuran berdaun dengan kepala bulat.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w10",
      "word": "lettuce",
      "definitionEn": "A leafy vegetable often used in salads.",
      "definitionId": "Sayuran daun yang sering dipakai untuk salad.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w11",
      "word": "broccoli",
      "definitionEn": "A green vegetable with a thick stem and flower heads.",
      "definitionId": "Sayuran hijau bertangkai tebal dengan kepala bunga.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w12",
      "word": "cauliflower",
      "definitionEn": "A white vegetable similar to broccoli.",
      "definitionId": "Sayuran putih mirip brokoli.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w13",
      "word": "cucumber",
      "definitionEn": "A long green vegetable often used in salads.",
      "definitionId": "Sayuran hijau panjang yang sering dipakai untuk salad.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w14",
      "word": "eggplant",
      "definitionEn": "A purple vegetable with shiny skin.",
      "definitionId": "Sayuran ungu berkulit mengilap.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w15",
      "word": "zucchini",
      "definitionEn": "A long green squash.",
      "definitionId": "Labu hijau panjang.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w16",
      "word": "pumpkin",
      "definitionEn": "A large orange squash.",
      "definitionId": "Labu besar berwarna oranye.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w17",
      "word": "corn",
      "definitionEn": "The yellow seeds of a tall plant, eaten as food.",
      "definitionId": "Biji-biji kuning dari tanaman tinggi yang dimakan.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w18",
      "word": "pea",
      "definitionEn": "A small round green seed eaten as a vegetable.",
      "definitionId": "Biji kecil bulat hijau yang dimakan sebagai sayuran.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w19",
      "word": "bean",
      "definitionEn": "A seed or pod eaten as a vegetable.",
      "definitionId": "Biji atau polong yang dimakan sebagai sayuran.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w22",
      "word": "soybean",
      "definitionEn": "A bean used to make tofu and soy products.",
      "definitionId": "Kacang yang dipakai untuk membuat tahu dan produk kedelai.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w23",
      "word": "mushroom",
      "definitionEn": "A fungus used as food.",
      "definitionId": "Jamur yang digunakan sebagai makanan.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w24",
      "word": "celery",
      "definitionEn": "A long green stalk used in cooking.",
      "definitionId": "Batang hijau panjang yang dipakai dalam masakan.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w25",
      "word": "parsley",
      "definitionEn": "A green herb used for flavor.",
      "definitionId": "Herba hijau untuk memberi rasa.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w26",
      "word": "leek",
      "definitionEn": "A long white-and-green vegetable like a large onion.",
      "definitionId": "Sayuran putih-hijau panjang mirip bawang besar.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w28",
      "word": "shallot",
      "definitionEn": "A small onion with a mild flavor.",
      "definitionId": "Bawang kecil dengan rasa lebih ringan.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w29",
      "word": "ginger",
      "definitionEn": "A spicy root used in cooking.",
      "definitionId": "Rimpang pedas untuk bumbu masak.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w30",
      "word": "turmeric",
      "definitionEn": "A yellow spice root.",
      "definitionId": "Rimpang berwarna kuning yang dipakai sebagai bumbu.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w32",
      "word": "cassava",
      "definitionEn": "A starchy root used as food (cassava).",
      "definitionId": "Ubi berpati yang dimakan sebagai makanan.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w33",
      "word": "yam",
      "definitionEn": "A starchy root vegetable (yam).",
      "definitionId": "Umbi berpati yang dimakan sebagai makanan.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w34",
      "word": "radish",
      "definitionEn": "A small root vegetable, often red or white.",
      "definitionId": "Sayuran akar kecil, sering berwarna merah atau putih.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w35",
      "word": "beetroot",
      "definitionEn": "A red root vegetable.",
      "definitionId": "Sayuran akar berwarna merah.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w36",
      "word": "okra",
      "definitionEn": "A long green pod vegetable.",
      "definitionId": "Sayuran polong hijau panjang.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w39",
      "word": "kale",
      "definitionEn": "A leafy green vegetable.",
      "definitionId": "Sayuran daun hijau.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w40",
      "word": "asparagus",
      "definitionEn": "A long green spear-like vegetable.",
      "definitionId": "Sayuran hijau berbentuk batang ramping.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w44",
      "word": "chayote",
      "definitionEn": "A green vegetable also called chayote.",
      "definitionId": "Sayuran hijau yang juga dikenal sebagai labu siam.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w46",
      "word": "fresh",
      "definitionEn": "Newly picked; not old or spoiled.",
      "definitionId": "Baru dipetik; tidak tua atau busuk.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w47",
      "word": "organic",
      "definitionEn": "Grown without synthetic chemicals.",
      "definitionId": "Ditanam tanpa bahan kimia sintetis.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w48",
      "word": "chop",
      "definitionEn": "To cut into pieces.",
      "definitionId": "Memotong menjadi bagian-bagian.",
      "topicId": "vegetables"
    },
    {
      "id": "vegetables-w49",
      "word": "boil",
      "definitionEn": "To cook in boiling water.",
      "definitionId": "Memasak dengan air mendidih.",
      "topicId": "vegetables"
    }
  ],
  "weather": [
    {
      "id": "weather-w01",
      "word": "weather",
      "definitionEn": "The state of the atmosphere at a time and place.",
      "definitionId": "Keadaan atmosfer di suatu tempat pada waktu tertentu.",
      "topicId": "weather"
    },
    {
      "id": "weather-w02",
      "word": "temperature",
      "definitionEn": "How hot or cold something is.",
      "definitionId": "Seberapa panas atau dingin sesuatu.",
      "topicId": "weather"
    },
    {
      "id": "weather-w03",
      "word": "forecast",
      "definitionEn": "A prediction of future weather.",
      "definitionId": "Perkiraan cuaca di masa depan.",
      "topicId": "weather"
    },
    {
      "id": "weather-w04",
      "word": "climate",
      "definitionEn": "The usual weather of a region over time.",
      "definitionId": "Pola cuaca yang biasa terjadi di suatu wilayah dalam jangka panjang.",
      "topicId": "weather"
    },
    {
      "id": "weather-w05",
      "word": "season",
      "definitionEn": "One of the four divisions of the year.",
      "definitionId": "Salah satu dari empat musim dalam setahun.",
      "topicId": "weather"
    },
    {
      "id": "weather-w06",
      "word": "sunny",
      "definitionEn": "Bright with sunlight.",
      "definitionId": "Terang dengan sinar matahari.",
      "topicId": "weather"
    },
    {
      "id": "weather-w07",
      "word": "cloudy",
      "definitionEn": "Covered with clouds.",
      "definitionId": "Tertutup awan.",
      "topicId": "weather"
    },
    {
      "id": "weather-w08",
      "word": "windy",
      "definitionEn": "With a lot of wind.",
      "definitionId": "Banyak angin.",
      "topicId": "weather"
    },
    {
      "id": "weather-w09",
      "word": "rainy",
      "definitionEn": "With rain.",
      "definitionId": "Bercurah hujan.",
      "topicId": "weather"
    },
    {
      "id": "weather-w10",
      "word": "stormy",
      "definitionEn": "With storms.",
      "definitionId": "Dengan badai.",
      "topicId": "weather"
    },
    {
      "id": "weather-w11",
      "word": "foggy",
      "definitionEn": "With fog.",
      "definitionId": "Berkabut.",
      "topicId": "weather"
    },
    {
      "id": "weather-w12",
      "word": "humid",
      "definitionEn": "With a lot of moisture in the air.",
      "definitionId": "Udara banyak mengandung uap air.",
      "topicId": "weather"
    },
    {
      "id": "weather-w13",
      "word": "dry",
      "definitionEn": "Without moisture; not wet.",
      "definitionId": "Tidak berair; tidak lembap.",
      "topicId": "weather"
    },
    {
      "id": "weather-w14",
      "word": "hot",
      "definitionEn": "Having a high temperature.",
      "definitionId": "Memiliki suhu tinggi.",
      "topicId": "weather"
    },
    {
      "id": "weather-w15",
      "word": "warm",
      "definitionEn": "Mildly hot.",
      "definitionId": "Agak panas.",
      "topicId": "weather"
    },
    {
      "id": "weather-w16",
      "word": "cool",
      "definitionEn": "Mildly cold.",
      "definitionId": "Agak dingin.",
      "topicId": "weather"
    },
    {
      "id": "weather-w17",
      "word": "cold",
      "definitionEn": "Having a low temperature.",
      "definitionId": "Memiliki suhu rendah.",
      "topicId": "weather"
    },
    {
      "id": "weather-w18",
      "word": "freezing",
      "definitionEn": "Extremely cold; below freezing.",
      "definitionId": "Sangat dingin; di bawah titik beku.",
      "topicId": "weather"
    },
    {
      "id": "weather-w19",
      "word": "snow",
      "definitionEn": "Frozen water falling from the sky.",
      "definitionId": "Air beku yang turun dari langit.",
      "topicId": "weather"
    },
    {
      "id": "weather-w20",
      "word": "rain",
      "definitionEn": "Water falling from the sky as drops.",
      "definitionId": "Air yang turun dari langit berupa tetes.",
      "topicId": "weather"
    },
    {
      "id": "weather-w21",
      "word": "drizzle",
      "definitionEn": "Light rain.",
      "definitionId": "Hujan rintik-rintik.",
      "topicId": "weather"
    },
    {
      "id": "weather-w22",
      "word": "shower",
      "definitionEn": "A short period of rain.",
      "definitionId": "Hujan singkat.",
      "topicId": "weather"
    },
    {
      "id": "weather-w23",
      "word": "thunder",
      "definitionEn": "The sound made by lightning.",
      "definitionId": "Suara yang terjadi saat ada petir.",
      "topicId": "weather"
    },
    {
      "id": "weather-w24",
      "word": "lightning",
      "definitionEn": "A flash of light in the sky during a storm.",
      "definitionId": "Kilat cahaya di langit saat badai.",
      "topicId": "weather"
    },
    {
      "id": "weather-w25",
      "word": "storm",
      "definitionEn": "A period of very strong wind and rain.",
      "definitionId": "Periode angin kencang dan hujan lebat.",
      "topicId": "weather"
    },
    {
      "id": "weather-w26",
      "word": "wind",
      "definitionEn": "Air moving naturally.",
      "definitionId": "Udara yang bergerak secara alami.",
      "topicId": "weather"
    },
    {
      "id": "weather-w27",
      "word": "breeze",
      "definitionEn": "A light wind.",
      "definitionId": "Angin sepoi-sepoi.",
      "topicId": "weather"
    },
    {
      "id": "weather-w28",
      "word": "gust",
      "definitionEn": "A sudden strong wind.",
      "definitionId": "Hembusan angin kencang yang tiba-tiba.",
      "topicId": "weather"
    },
    {
      "id": "weather-w29",
      "word": "hurricane",
      "definitionEn": "A violent tropical storm.",
      "definitionId": "Badai tropis yang sangat kuat.",
      "topicId": "weather"
    },
    {
      "id": "weather-w30",
      "word": "flood",
      "definitionEn": "An overflow of water covering land.",
      "definitionId": "Luapan air yang menutupi daratan.",
      "topicId": "weather"
    },
    {
      "id": "weather-w31",
      "word": "drought",
      "definitionEn": "A long period with little or no rain.",
      "definitionId": "Periode panjang tanpa hujan.",
      "topicId": "weather"
    },
    {
      "id": "weather-w32",
      "word": "sun",
      "definitionEn": "The star that provides daylight.",
      "definitionId": "Bintang yang memberi cahaya di siang hari.",
      "topicId": "weather"
    },
    {
      "id": "weather-w33",
      "word": "sunlight",
      "definitionEn": "The light from the sun.",
      "definitionId": "Cahaya dari matahari.",
      "topicId": "weather"
    },
    {
      "id": "weather-w34",
      "word": "sunrise",
      "definitionEn": "The time when the sun appears in the morning.",
      "definitionId": "Waktu matahari muncul di pagi hari.",
      "topicId": "weather"
    },
    {
      "id": "weather-w35",
      "word": "sunset",
      "definitionEn": "The time when the sun goes down in the evening.",
      "definitionId": "Waktu matahari terbenam di sore hari.",
      "topicId": "weather"
    },
    {
      "id": "weather-w36",
      "word": "cloud",
      "definitionEn": "A mass of water droplets in the sky.",
      "definitionId": "Kumpulan tetes air di langit.",
      "topicId": "weather"
    },
    {
      "id": "weather-w37",
      "word": "sky",
      "definitionEn": "The area above the earth.",
      "definitionId": "Ruang di atas permukaan bumi.",
      "topicId": "weather"
    },
    {
      "id": "weather-w38",
      "word": "mist",
      "definitionEn": "A light fog.",
      "definitionId": "Kabut tipis.",
      "topicId": "weather"
    },
    {
      "id": "weather-w39",
      "word": "ice",
      "definitionEn": "Frozen water.",
      "definitionId": "Air beku.",
      "topicId": "weather"
    },
    {
      "id": "weather-w40",
      "word": "frost",
      "definitionEn": "A thin layer of ice on a surface.",
      "definitionId": "Lapisan tipis es pada permukaan.",
      "topicId": "weather"
    },
    {
      "id": "weather-w42",
      "word": "degree",
      "definitionEn": "A unit for measuring temperature.",
      "definitionId": "Satuan untuk mengukur suhu.",
      "topicId": "weather"
    },
    {
      "id": "weather-w43",
      "word": "Celsius",
      "definitionEn": "A temperature scale used in most countries.",
      "definitionId": "Skala suhu yang dipakai di banyak negara.",
      "topicId": "weather"
    },
    {
      "id": "weather-w44",
      "word": "umbrella",
      "definitionEn": "A device used to keep off rain.",
      "definitionId": "Alat untuk melindungi dari hujan.",
      "topicId": "weather"
    },
    {
      "id": "weather-w45",
      "word": "raincoat",
      "definitionEn": "A waterproof coat.",
      "definitionId": "Jas yang kedap air.",
      "topicId": "weather"
    },
    {
      "id": "weather-w46",
      "word": "clear",
      "definitionEn": "Free from clouds or rain; bright.",
      "definitionId": "Bebas dari awan atau hujan; terang.",
      "topicId": "weather"
    },
    {
      "id": "weather-w47",
      "word": "change",
      "definitionEn": "To become different.",
      "definitionId": "Menjadi berbeda.",
      "topicId": "weather"
    },
    {
      "id": "weather-w48",
      "word": "sudden",
      "definitionEn": "Happening quickly and unexpectedly.",
      "definitionId": "Terjadi cepat dan tidak terduga.",
      "topicId": "weather"
    },
    {
      "id": "weather-w49",
      "word": "outside",
      "definitionEn": "In the open air.",
      "definitionId": "Di ruang terbuka.",
      "topicId": "weather"
    },
    {
      "id": "weather-w50",
      "word": "inside",
      "definitionEn": "Inside a building.",
      "definitionId": "Di dalam bangunan.",
      "topicId": "weather"
    }
  ]
};

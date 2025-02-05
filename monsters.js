const monsterData = [
  {
    name: "Commoner",
    cr: 0,
    xp: 10,
    environments: ["city", "village", "town", "plains"],
    loot: ["1-2 copper coins", "Simple clothing", "A small handkerchief"]
  },
  {
    name: "Rat",
    cr: 0,
    xp: 10,
    environments: ["dungeon", "city-sewers", "underground", "ruins"],
    loot: ["Matted fur tufts", "Diseased fleas"]
  },
  {
    name: "Kobold",
    cr: 0.125,
    xp: 25,
    environments: ["cave", "underground", "dungeon", "mountain"],
    loot: ["Tiny worthless gems", "Worn pickaxe", "Bag of small bones"]
  },
  {
    name: "Goblin",
    cr: 0.25,
    xp: 50,
    environments: ["forest", "dungeon", "cave", "mountain", "ruins", "jungle"],
    loot: ["Pouch of copper", "Crude dagger", "Moldy bread"]
  },
  {
    name: "Skeleton",
    cr: 0.25,
    xp: 50,
    environments: ["dungeon", "underground", "crypt", "swamp", "ruins"],
    loot: [
      "Tarnished short sword",
      "Broken shield",
      "Minor necromantic trinket"
    ]
  },
  {
    name: "Zombie",
    cr: 0.25,
    xp: 50,
    environments: ["dungeon", "underground", "cemetery", "swamp", "ruins"],
    loot: [
      "Rotten clothing scraps",
      "Gold tooth",
      "Foul-smelling pouch of unknown goo"
    ]
  },
  {
    name: "Giant Rat",
    cr: 0.125,
    xp: 25,
    environments: ["dungeon", "underground", "city", "city-sewers"],
    loot: ["Tuft of dirty fur", "Half-eaten food scraps"]
  },
  {
    name: "Diseased Giant Rat",
    cr: 0.5,
    xp: 100,
    environments: ["city", "city-sewers", "dungeon", "underground"],
    loot: ["Tattered fur", "Vial of infected saliva"]
  },
  {
    name: "Bandit",
    cr: 0.125,
    xp: 25,
    environments: [
      "forest",
      "plains",
      "city",
      "coastal",
      "desert",
      "ruins",
      "mountain",
      "jungle"
    ],
    loot: ["A handful of copper coins", "A small dagger", "Stolen trinket"]
  },
  {
    name: "Cultist",
    cr: 0.125,
    xp: 25,
    environments: ["city", "dungeon", "underground", "ruins", "swamp"],
    loot: ["Dark robes", "Strange ritual dagger", "Obscure religious symbol"]
  },
  {
    name: "Deep Gnome (Svirfneblin)",
    cr: 0.25,
    xp: 50,
    environments: ["underground", "cave", "dungeon"],
    loot: ["Raw gemstone pieces", "Stone-carving tools", "Chunk of metal ore"]
  },
  {
    name: "Flying Sword",
    cr: 0.25,
    xp: 50,
    environments: ["dungeon", "underground", "castle", "ruins"],
    loot: ["Broken hilt piece", "Ancient crest engraved on the blade"]
  },
  {
    name: "Acolyte",
    cr: 0.25,
    xp: 50,
    environments: ["city", "dungeon", "temple", "ruins", "village"],
    loot: ["Holy symbol", "Prayer book", "1-2 silver pieces"]
  },
  {
    name: "Panther",
    cr: 0.25,
    xp: 50,
    environments: ["forest", "jungle", "ruins"],
    loot: ["Panther pelt", "Sharp claws"]
  },
  {
    name: "Wolf",
    cr: 0.25,
    xp: 50,
    environments: ["forest", "mountain", "plains", "arctic"],
    loot: ["Wolf pelt", "Wolf fang"]
  },
  {
    name: "Giant Wolf Spider",
    cr: 0.25,
    xp: 50,
    environments: ["forest", "swamp", "cave", "jungle"],
    loot: ["Venom glands", "Pieces of carapace", "Sticky web remnants"]
  },
  {
    name: "Ice Mephit",
    cr: 0.5,
    xp: 100,
    environments: ["arctic", "underground", "ruins"],
    loot: ["Shards of ice crystal", "Frosty essence"]
  },
  {
    name: "Dust Mephit",
    cr: 0.5,
    xp: 100,
    environments: ["desert", "ruins", "underground"],
    loot: ["Grey dust pouch", "Tiny whirlwind in a bottle"]
  },
  {
    name: "Gnoll",
    cr: 0.5,
    xp: 100,
    environments: ["plains", "savanna", "forest", "desert", "ruins", "jungle"],
    loot: ["Hyena pelt", "Jagged spear", "Tribal necklace"]
  },
  {
    name: "Hobgoblin",
    cr: 0.5,
    xp: 100,
    environments: ["forest", "mountain", "dungeon", "underground", "ruins"],
    loot: ["Chain mail scraps", "Warlord's insignia", "Several arrowheads"]
  },
  {
    name: "Orc",
    cr: 0.5,
    xp: 100,
    environments: [
      "mountain",
      "plains",
      "dungeon",
      "forest",
      "ruins",
      "city-sewers",
      "cave"
    ],
    loot: ["Rusty greataxe", "Animal pelts", "Necklace of teeth"]
  },
  {
    name: "Worg",
    cr: 0.5,
    xp: 100,
    environments: ["forest", "mountain", "plains", "arctic", "ruins"],
    loot: ["Worg fang", "Scrap of fur", "Remains of a half-eaten animal"]
  },
  {
    name: "Ape",
    cr: 0.5,
    xp: 100,
    environments: ["jungle", "forest", "ruins"],
    loot: ["Clumps of thick fur", "Half-chewed fruit"]
  },
  {
    name: "Brown Bear",
    cr: 1,
    xp: 200,
    environments: ["forest", "mountain", "ruins", "plains"],
    loot: ["Bear pelt", "Bear claws", "Honeycombs stuck in fur"]
  },
  {
    name: "Giant Hyena",
    cr: 1,
    xp: 200,
    environments: ["plains", "desert", "savanna"],
    loot: ["Hyena pelt", "Half-eaten carcass"]
  },
  {
    name: "Panther (Black Leopard)",
    cr: 0.25,
    xp: 50,
    environments: ["jungle", "forest"],
    loot: ["Sleek black pelt", "Vicious claws"]
  },
  {
    name: "Ghoul",
    cr: 1,
    xp: 200,
    environments: ["crypt", "dungeon", "ruins", "cemetery", "underground"],
    loot: ["Cracked tomb amulet", "Scrap of rotting cloth"]
  },
  {
    name: "Giant Vulture",
    cr: 1,
    xp: 200,
    environments: ["desert", "coastal", "plains"],
    loot: ["Large vulture feathers", "Rotting carrion bits"]
  },
  {
    name: "Giant Goat",
    cr: 0.5,
    xp: 100,
    environments: ["mountain", "plains"],
    loot: ["Thick goat hide", "Sturdy horns"]
  },
  {
    name: "Yeti Tyke",
    cr: 1,
    xp: 200,
    environments: ["arctic", "mountain"],
    loot: ["Tufts of white fur", "Icy breath residue"]
  },
  {
    name: "Pseudodragon",
    cr: 1,
    xp: 200,
    environments: ["forest", "ruins", "city", "mountain"],
    loot: [
      "Tiny scales",
      "Whip-like tail stinger",
      "Arcane-sensing whiskers"
    ]
  },
  {
    name: "Bugbear",
    cr: 1,
    xp: 200,
    environments: ["dungeon", "forest", "underground", "ruins", "mountain"],
    loot: ["Spiked club", "Bloodstained javelins", "Trophy ear or finger"]
  },
  {
    name: "Giant Spider",
    cr: 1,
    xp: 200,
    environments: ["forest", "swamp", "cave", "underground", "ruins", "jungle"],
    loot: ["Sticky webbing", "Venom sac", "Spider silk"]
  },
  {
    name: "Mimic",
    cr: 2,
    xp: 450,
    environments: ["dungeon", "underground", "cave", "ruins"],
    loot: [
      "Sticky pseudopod residue",
      "A single gold coin fused to its surface"
    ]
  },
  {
    name: "Giant Hyena (Rabid)",
    cr: 2,
    xp: 450,
    environments: ["plains", "desert", "savanna"],
    loot: ["Foaming saliva sample", "Ragged hyena pelt"]
  },
  {
    name: "Bandit Captain",
    cr: 2,
    xp: 450,
    environments: ["forest", "city", "coastal", "desert", "ruins"],
    loot: ["Pouch of silver coins", "Inscribed scimitar", "An old letter detailing blackmail"]
  },
  {
    name: "Cult Fanatic",
    cr: 2,
    xp: 450,
    environments: ["dungeon", "underground", "city", "ruins"],
    loot: ["Black candles", "Sacrificial knife", "Book of forbidden rites"]
  },
  {
    name: "Ogre",
    cr: 2,
    xp: 450,
    environments: ["mountain", "forest", "swamp", "plains", "ruins"],
    loot: ["Large club", "Giant-sized boots", "A handful of coins"]
  },
  {
    name: "Giant Scorpion",
    cr: 3,
    xp: 700,
    environments: ["desert", "underground", "cave", "ruins"],
    loot: ["Scorpion venom sac", "Piece of chitinous plating"]
  },
  {
    name: "Minotaur",
    cr: 3,
    xp: 700,
    environments: ["dungeon", "underground", "maze", "ruins"],
    loot: ["Large greataxe", "Cracked horn", "Labyrinthine etchings"]
  },
  {
    name: "Owlbear",
    cr: 3,
    xp: 700,
    environments: ["forest", "mountain", "ruins", "jungle"],
    loot: ["Owlbear feather", "Animal carcass", "Sharp beak fragment"]
  },
  {
    name: "Werewolf",
    cr: 3,
    xp: 700,
    environments: ["forest", "plains", "city", "ruins"],
    loot: ["Torn clothing", "Lycanthropic amulet (symbolic)"]
  },
  {
    name: "Phase Spider",
    cr: 3,
    xp: 700,
    environments: ["dungeon", "underground", "forest", "ruins", "jungle"],
    loot: ["Ethereal spider silk", "Pulsating venom sac"]
  },
  {
    name: "Wight",
    cr: 3,
    xp: 700,
    environments: ["dungeon", "crypt", "underground", "ruins"],
    loot: ["Dark iron sword", "Eerie necromantic amulet", "Ancient signet ring"]
  },
  {
    name: "Succubus/Incubus",
    cr: 4,
    xp: 1100,
    environments: ["city", "dungeon", "underground", "ruins"],
    loot: ["Perfumed cloth", "Silver mirror", "A letter with seductive promises"]
  },
  {
    name: "Troll",
    cr: 5,
    xp: 1800,
    environments: ["swamp", "forest", "mountain", "cave", "ruins"],
    loot: ["Troll fat", "Large bone club", "Gnawed skulls"]
  },
  {
    name: "Bulette",
    cr: 5,
    xp: 1800,
    environments: ["underground", "plains", "ruins"],
    loot: ["Bulette plating", "Chunk of earthy minerals"]
  },
  {
    name: "Giant Crocodile",
    cr: 5,
    xp: 1800,
    environments: ["swamp", "coastal", "river"],
    loot: ["Massive tooth", "Swampy skin hide"]
  },
  {
    name: "Hill Giant",
    cr: 5,
    xp: 1800,
    environments: ["hill", "mountain", "plains", "ruins"],
    loot: ["Giant's sack of random junk", "Crude club"]
  },
  {
    name: "Winter Wolf",
    cr: 3,
    xp: 700,
    environments: ["arctic", "mountain"],
    loot: ["Frost-covered fur", "Icy breath residue", "Wolf fang"]
  },
  {
    name: "Wyvern",
    cr: 6,
    xp: 2300,
    environments: ["mountain", "forest", "coastal", "ruins", "desert"],
    loot: ["Wyvern poison sac", "Tattered wings", "Hidden cache of gold"]
  },
  {
    name: "Cyclops",
    cr: 6,
    xp: 2300,
    environments: ["coastal", "island", "mountain", "ruins"],
    loot: ["Huge club", "Massive seashell (if coastal)", "Giant fish bones"]
  },
  {
    name: "Stone Giant",
    cr: 7,
    xp: 2900,
    environments: ["mountain", "underground", "ruins", "cave"],
    loot: ["Stone-carved totems", "Giant rock", "Smooth carved stone orb"]
  },
  {
    name: "Young Green Dragon",
    cr: 8,
    xp: 3900,
    environments: ["forest", "swamp", "ruins"],
    loot: [
      "Dragon scales (green)",
      "Dragon claw",
      "Small hoard of coins and trinkets"
    ]
  },
  {
    name: "Young Red Dragon",
    cr: 10,
    xp: 5900,
    environments: ["mountain", "cave", "ruins", "desert"],
    loot: [
      "Dragon scales (red)",
      "Small stash of treasure",
      "A singed dwarven helm"
    ]
  },
  {
    name: "Young White Dragon",
    cr: 6,
    xp: 2300,
    environments: ["arctic", "mountain", "cave"],
    loot: [
      "Frosty dragon scales (white)",
      "Hoarfrost-laden horns",
      "Frozen treasure bits"
    ]
  },
  {
    name: "Young Black Dragon",
    cr: 7,
    xp: 2900,
    environments: ["swamp", "ruins", "underground"],
    loot: ["Acid-scorched items", "Black scales", "Corroded coins"]
  },
  {
    name: "Young Blue Dragon",
    cr: 9,
    xp: 5000,
    environments: ["desert", "ruins", "mountain", "cave"],
    loot: [
      "Blue scales",
      "Crackling horns (lightning-charged)",
      "Sandy coins"
    ]
  },
  {
    name: "Fire Elemental",
    cr: 5,
    xp: 1800,
    environments: ["desert", "underground", "ruins"],
    loot: ["Scorching ember shards", "Flickering cinder core"]
  },
  {
    name: "Adult White Dragon",
    cr: 13,
    xp: 10000,
    environments: ["arctic", "mountain", "cave"],
    loot: [
      "Large hoard of coins",
      "Ice-encrusted trinkets",
      "Frost dragon scales"
    ]
  },
  {
    name: "Adult Black Dragon",
    cr: 14,
    xp: 11500,
    environments: ["swamp", "ruins", "underground", "swamp"],
    loot: ["Corroded treasure hoard", "Blackened scales", "Acid-etched gems"]
  },
  {
    name: "Adult Green Dragon",
    cr: 15,
    xp: 13000,
    environments: ["forest", "swamp", "ruins"],
    loot: ["Jade-tinted scales", "Hoard with tarnished silver", "Poison-laced regalia"]
  },
  {
    name: "Adult Blue Dragon",
    cr: 16,
    xp: 15000,
    environments: ["desert", "ruins", "mountain", "cave"],
    loot: [
      "Lightning-charged scales",
      "Gems fused by electricity",
      "Sandy coins"
    ]
  },
  {
    name: "Adult Red Dragon",
    cr: 17,
    xp: 18000,
    environments: ["mountain", "cave", "ruins", "desert"],
    loot: [
      "Glittering hoard of gold",
      "Red dragon scales",
      "Charred remains of armor"
    ]
  },
  {
    name: "Lich",
    cr: 21,
    xp: 33000,
    environments: ["dungeon", "underground", "ruins", "crypt", "city"],
    loot: [
      "Phylactery fragment (worthless alone)",
      "Ancient spellbook pages",
      "Dark crystal focus"
    ]
  },
  {
    name: "Ancient Brass Dragon",
    cr: 20,
    xp: 25000,
    environments: ["desert", "mountain", "cave", "ruins"],
    loot: [
      "Brass scales",
      "Heap of ancient coins",
      "Grand relic from an old empire"
    ]
  },
  {
    name: "Adult Silver Dragon",
    cr: 16,
    xp: 15000,
    environments: ["arctic", "mountain", "clouds"],
    loot: [
      "Polished silver scales",
      "Silver-chased relics",
      "Collection of heroic tales turned to silver plates"
    ]
  },
  {
    name: "Ancient White Dragon",
    cr: 20,
    xp: 25000,
    environments: ["arctic", "mountain", "cave"],
    loot: [
      "Massive hoard of frost-rimed coins",
      "Icicle-laden crown",
      "Glacier-forged blade"
    ]
  },
  {
    name: "Ancient Black Dragon",
    cr: 21,
    xp: 33000,
    environments: ["swamp", "ruins", "underground"],
    loot: [
      "Huge corroded hoard",
      "Pitted black scales",
      "Unholy relic coated in acid"
    ]
  },
  {
    name: "Ancient Green Dragon",
    cr: 22,
    xp: 41000,
    environments: ["forest", "swamp", "ruins"],
    loot: [
      "Enormous trove of tarnished silver",
      "Massive jade-laced horns",
      "Collection of cursed tomes"
    ]
  },
  {
    name: "Ancient Blue Dragon",
    cr: 23,
    xp: 50000,
    environments: ["desert", "ruins", "mountain", "cave"],
    loot: [
      "Vast trove of lightning-scorched gold",
      "Crackling horns the size of small trees",
      "Crystal chest fused by lightning"
    ]
  },
  {
    name: "Ancient Red Dragon",
    cr: 24,
    xp: 62000,
    environments: ["mountain", "cave", "ruins", "desert"],
    loot: [
      "Towering heaps of gold coins",
      "Massive red scales",
      "An ancient scepter partially molten"
    ]
  },
  {
    name: "Behir",
    cr: 11,
    xp: 7200,
    environments: ["mountain", "ruins", "cave", "desert"],
    loot: ["Crackling lightning sacs", "Scales used for storm-based magic"]
  },
  {
    name: "Roc",
    cr: 11,
    xp: 7200,
    environments: ["mountain", "coastal", "island"],
    loot: ["Gargantuan feathers", "Eggshell fragments the size of shields"]
  },
  {
    name: "Kraken",
    cr: 23,
    xp: 50000,
    environments: ["coastal", "ocean", "underwater"],
    loot: [
      "Electrically charged tentacle piece",
      "Waterlogged chests of treasure"
    ]
  },
  {
    name: "Purple Worm",
    cr: 15,
    xp: 13000,
    environments: ["underground", "cave", "desert", "ruins"],
    loot: [
      "Segment of chitinous plating",
      "Pouch of purple worm poison (extremely dangerous)"
    ]
  },
  {
    name: "Aboleth",
    cr: 10,
    xp: 5900,
    environments: ["underground", "underwater", "ruins"],
    loot: ["Slime-covered idol", "Fragments of telepathic mucus"]
  },
  {
    name: "Drow",
    cr: 0.25,
    xp: 50,
    environments: ["underground", "cave", "ruins"],
    loot: ["Dark spider-silk cloak", "Vial of drow poison", "Ebon-bladed dagger"]
  },
  {
    name: "Drow Elite Warrior",
    cr: 5,
    xp: 1800,
    environments: ["underground", "cave", "ruins"],
    loot: [
      "Exquisitely crafted drow shortsword",
      "Vial of potent drow poison",
      "Spider-shaped emblem"
    ]
  },
  {
    name: "Drow Priestess of Lolth",
    cr: 8,
    xp: 3900,
    environments: ["underground", "cave", "ruins"],
    loot: [
      "Spider idol",
      "Black sacrificial dagger",
      "Poisoned ritual chalice"
    ]
  },
  {
    name: "Drider",
    cr: 6,
    xp: 2300,
    environments: ["underground", "cave", "ruins"],
    loot: [
      "Chittering spider appendages (twitching)",
      "Poisoned arrow quiver",
      "Dark elven runic amulet"
    ]
  },
  {
    name: "Chuul",
    cr: 4,
    xp: 1100,
    environments: ["swamp", "underground", "coastal"],
    loot: ["Chitinous claw fragment", "Slimy algae-covered pearls"]
  },
  {
    name: "Gibbering Mouther",
    cr: 2,
    xp: 450,
    environments: ["underground", "ruins", "dungeon", "swamp"],
    loot: [
      "Sticky, protoplasmic residue",
      "Odd lumps of calcified teeth"
    ]
  },
  {
    name: "Carrion Crawler",
    cr: 2,
    xp: 450,
    environments: ["underground", "sewer", "ruins", "dungeon"],
    loot: ["Paralyzing tentacle slime", "Chitinous plates"]
  },
  {
    name: "Basilisk",
    cr: 3,
    xp: 700,
    environments: ["underground", "cave", "ruins", "desert"],
    loot: ["Basilisk gullet stone", "Petrifying saliva residue"]
  },
  {
    name: "Drake (Guard Drake)",
    cr: 2,
    xp: 450,
    environments: ["dungeon", "mountain", "ruins", "city"],
    loot: [
      "Scales infused with minor dragonblood",
      "Collar bearing a faction emblem"
    ]
  },
  {
    name: "Shadow",
    cr: 0.5,
    xp: 100,
    environments: ["dungeon", "underground", "ruins", "crypt"],
    loot: [
      "Eerie black ectoplasm",
      "Whispering fragment of undeath"
    ]
  },
  {
    name: "Specter",
    cr: 1,
    xp: 200,
    environments: ["ruins", "dungeon", "underground", "crypt"],
    loot: ["Flickering spectral essence", "Lingering aura of terror"]
  },
  {
    name: "Wraith",
    cr: 5,
    xp: 1800,
    environments: ["ruins", "underground", "crypt", "swamp"],
    loot: ["Faintly glowing essence of undeath", "Shadow-laced ring"]
  },
  {
    name: "Will-o'-Wisp",
    cr: 2,
    xp: 450,
    environments: ["swamp", "ruins", "arctic", "underground"],
    loot: [
      "A tiny orb of captured flickering light",
      "Static charge in a glass vial"
    ]
  },
  {
    name: "Cloaker",
    cr: 8,
    xp: 3900,
    environments: ["underground", "dungeon", "ruins"],
    loot: ["Shadowy leathery hide", "Residual sonic echo in a crystal"]
  },
  {
    name: "Roper",
    cr: 5,
    xp: 1800,
    environments: ["underground", "cave"],
    loot: ["Fibrous rope-like tentacles", "Stony shell fragments"]
  },
  {
    name: "Myconid Sovereign",
    cr: 2,
    xp: 450,
    environments: ["underground", "cave", "swamp"],
    loot: ["Pouch of spores", "Fungal spore-laden staff"]
  },
  {
    name: "Hook Horror",
    cr: 3,
    xp: 700,
    environments: ["underground", "cave"],
    loot: ["Massive hooked claws", "Bony exoskeleton shards"]
  },
  {
    name: "Kuo-toa",
    cr: 0.125,
    xp: 25,
    environments: ["underground", "underwater", "coastal"],
    loot: ["Fish-scale scraps", "Strange fish idol"]
  },
  {
    name: "Kuo-toa Archpriest",
    cr: 6,
    xp: 2300,
    environments: ["underground", "underwater", "coastal"],
    loot: ["Glowing fish totem", "Cup of brackish holy water"]
  },
  {
    name: "Sea Hag",
    cr: 2,
    xp: 450,
    environments: ["coastal", "swamp", "underwater"],
    loot: [
      "Tangle of seaweed hair",
      "Shell necklace with cursed pearls"
    ]
  },
  {
    name: "Green Hag",
    cr: 3,
    xp: 700,
    environments: ["forest", "swamp"],
    loot: [
      "Wickedly curved claws",
      "Cauldron-stained stirring stick"
    ]
  },
  {
    name: "Night Hag",
    cr: 5,
    xp: 1800,
    environments: ["ruins", "underground", "nightmare realm"],
    loot: ["Soul bag stitched with flesh", "Black-lacquered claw"]
  },
  {
    name: "Barghest",
    cr: 4,
    xp: 1100,
    environments: ["underground", "ruins", "plains"],
    loot: [
      "Infernal wolf-like fur",
      "Malicious grin eternally carved into hide"
    ]
  },
  {
    name: "Hell Hound",
    cr: 3,
    xp: 700,
    environments: ["ruins", "fiery planes", "dungeon"],
    loot: ["Smoldering collar", "Hot ash from the hound's throat"]
  },
  {
    name: "Elemental Myrmidon (Air)",
    cr: 7,
    xp: 2900,
    environments: ["air plane", "stormy mountain", "ruins"],
    loot: ["Bound air elemental core", "Cyclonic gauntlet"]
  },
  {
    name: "Elemental Myrmidon (Earth)",
    cr: 7,
    xp: 2900,
    environments: ["underground", "mountain", "earth plane"],
    loot: ["Bound earth elemental core", "Geomantic chisel"]
  },
  {
    name: "Elemental Myrmidon (Fire)",
    cr: 7,
    xp: 2900,
    environments: ["desert", "fire plane", "underground"],
    loot: ["Bound fire elemental core", "Flaming hammer"]
  },
  {
    name: "Elemental Myrmidon (Water)",
    cr: 7,
    xp: 2900,
    environments: ["coastal", "swamp", "water plane"],
    loot: ["Bound water elemental core", "Conch of fluid resonance"]
  },
  {
    name: "Marid",
    cr: 11,
    xp: 7200,
    environments: ["water plane", "coastal", "underwater"],
    loot: ["Jeweled coral tiara", "Vial of pristine elemental water"]
  },
  {
    name: "Efreeti",
    cr: 11,
    xp: 7200,
    environments: ["fire plane", "desert", "volcanic mountain"],
    loot: ["Flask of ever-burning oil", "Jeweled scimitar with fiery script"]
  },
  {
    name: "Dao",
    cr: 11,
    xp: 7200,
    environments: ["earth plane", "underground", "desert"],
    loot: ["Box of crushed gems", "Scroll of stone-shaping secrets"]
  },
  {
    name: "Djinni",
    cr: 11,
    xp: 7200,
    environments: ["air plane", "cloud fortress", "mountain peak"],
    loot: ["Crystal decanter of scented air", "Silk bag of winds"]
  },
  {
    name: "Hydra",
    cr: 8,
    xp: 3900,
    environments: ["swamp", "marsh", "river", "coastal"],
    loot: ["Multiple severed heads (still writhing)", "Thick hydra scales"]
  },
  {
    name: "Chimera",
    cr: 6,
    xp: 2300,
    environments: ["mountain", "ruins", "desert"],
    loot: ["Three-headed trophy skull", "Singed goat horns"]
  },
  {
    name: "Gorgon",
    cr: 5,
    xp: 1800,
    environments: ["plains", "ruins", "underground"],
    loot: ["Steel-like horns", "Petrifying breath residue"]
  },
  {
    name: "Remorhaz",
    cr: 11,
    xp: 7200,
    environments: ["arctic", "mountain", "underground"],
    loot: ["Thermal plate segments", "Burning-hot saliva sample"]
  },
  {
    name: "Nothic",
    cr: 2,
    xp: 450,
    environments: ["dungeon", "underground", "ruins"],
    loot: ["Cursed eye shard", "Tattered wizard notes"]
  },
  {
    name: "Otyugh",
    cr: 5,
    xp: 1800,
    environments: ["sewer", "underground", "swamp"],
    loot: ["Filthy tentacle scrap", "Decaying refuse stash"]
  },
  {
    name: "Umber Hulk",
    cr: 5,
    xp: 1800,
    environments: ["underground", "cave"],
    loot: ["Chitinous plating", "Hypnotic compound eyes"]
  },
  {
    name: "Xorn",
    cr: 5,
    xp: 1800,
    environments: ["underground", "earth plane"],
    loot: ["Mouthful of gemstones", "Crystal-laced carapace"]
  },
  {
    name: "Beholder Zombie",
    cr: 5,
    xp: 1800,
    environments: ["underground", "dungeon"],
    loot: [
      "Rotting eyestalks (useless but horrific)",
      "Decaying central eye lens"
    ]
  },
  {
    name: "Death Tyrant",
    cr: 14,
    xp: 11500,
    environments: ["underground", "dungeon", "ruins"],
    loot: ["Floating necrotic eye core", "Tomb-laden jawbone"]
  },
  {
    name: "Beholder",
    cr: 13,
    xp: 10000,
    environments: ["underground", "dungeon", "ruins"],
    loot: [
      "Iridescent eyestalks",
      "Central antimagic lens fragment"
    ]
  },
  {
    name: "Githyanki Warrior",
    cr: 3,
    xp: 700,
    environments: ["astral plane", "mountain", "ruins", "underground"],
    loot: [
      "Silver greatsword inscribed with astral runes",
      "Torn astral standard"
    ]
  },
  {
    name: "Githyanki Knight",
    cr: 6,
    xp: 2300,
    environments: ["astral plane", "ruins", "underground"],
    loot: [
      "Ornate silver longsword with telekinetic aura",
      "Badge of githyanki honor"
    ]
  },
  {
    name: "Githzerai Monk",
    cr: 2,
    xp: 450,
    environments: ["limbo", "monastery", "ruins"],
    loot: ["Bands of mental focus", "Scroll of meditative mantras"]
  },
  {
    name: "Mind Flayer (Illithid)",
    cr: 7,
    xp: 2900,
    environments: ["underground", "dungeon", "ruins"],
    loot: [
      "Psionic amplifier helm",
      "Jar containing a live tadpole",
      "Book of alien mind studies"
    ]
  },
  {
    name: "Elder Brain",
    cr: 14,
    xp: 11500,
    environments: ["underground", "illithid lair", "ruins"],
    loot: [
      "Vial of elder brain fluid (highly dangerous)",
      "Fragments of telepathic network"
    ]
  },
  {
    name: "Morkoth",
    cr: 11,
    xp: 7200,
    environments: ["underwater", "coastal", "island caves"],
    loot: ["Small trove of stolen curiosities", "Hypnotic swirling gem"]
  },
  {
    name: "Neothelid",
    cr: 13,
    xp: 10000,
    environments: ["underground", "dungeon"],
    loot: ["Massive acidic saliva sample", "Fleshy purple hide scraps"]
  },
  {
    name: "Slithering Tracker",
    cr: 3,
    xp: 700,
    environments: ["swamp", "underground", "ruins"],
    loot: [
      "Gelatinous residue",
      "A faintly glowing core of animosity"
    ]
  },
  {
    name: "Cadaver Collector",
    cr: 14,
    xp: 11500,
    environments: ["battlefields", "ruins", "underground"],
    loot: [
      "Rusty spikes encrusted with bones",
      "Arcane furnace shard powering the golem"
    ]
  },
  {
    name: "Bone Devil",
    cr: 9,
    xp: 5000,
    environments: ["fiendish plane", "hellish fortress", "ruins"],
    loot: ["Long segmented bone tail tip", "Infernal contract scrawled in blood"]
  },
  {
    name: "Horned Devil",
    cr: 11,
    xp: 7200,
    environments: ["fiendish plane", "volcanic region", "ruins"],
    loot: ["Barbed spear tip", "Large infernal horn"]
  },
  {
    name: "Pit Fiend",
    cr: 20,
    xp: 25000,
    environments: ["fiendish plane", "hellish fortress"],
    loot: ["Massive infernal mace head", "Chains of bound souls"]
  },
  {
    name: "Balor",
    cr: 19,
    xp: 22000,
    environments: ["fiendish plane", "volcanic region"],
    loot: ["Fire lash segment", "Charred demonic plating"]
  },
  {
    name: "Marilith",
    cr: 16,
    xp: 15000,
    environments: ["fiendish plane", "dungeon", "ruins"],
    loot: ["Six-bladed demon sword set", "Serpentine demonic scales"]
  },
  {
    name: "Vrock",
    cr: 6,
    xp: 2300,
    environments: ["fiendish plane", "ruins", "desolate wasteland"],
    loot: ["Beak encrusted with acidic drool", "Vulture-like demonic feathers"]
  },
  {
    name: "Hezrou",
    cr: 8,
    xp: 3900,
    environments: ["fiendish plane", "swamp", "ruins"],
    loot: ["Chunk of demonic hide", "Foul-scented slime"]
  },
  {
    name: "Glabrezu",
    cr: 9,
    xp: 5000,
    environments: ["fiendish plane", "ruins", "underground"],
    loot: ["Massive pincer claw", "Dark contract seal"]
  },
  {
    name: "Baphomet",
    cr: 23,
    xp: 50000,
    environments: ["fiendish plane", "labyrinthine dungeon", "ruins"],
    loot: [
      "Enormous black glaive",
      "Minotaur-lord crown drenched in infernal energy"
    ]
  },
  {
    name: "Yeenoghu",
    cr: 24,
    xp: 62000,
    environments: ["fiendish plane", "savanna of bones", "ruins"],
    loot: [
      "Triple-headed flail stained with blood",
      "Gnollish runic totems"
    ]
  },
  {
    name: "Demogorgon",
    cr: 26,
    xp: 90000,
    environments: ["fiendish plane", "deep abyssal seas", "ruins"],
    loot: [
      "Twin baboon-like heads carved from stone",
      "Tentacle segments dripping with madness"
    ]
  },
  {
    name: "Zuggtmoy",
    cr: 23,
    xp: 50000,
    environments: ["fiendish plane", "fungal forests", "underground"],
    loot: [
      "Explosive fungal spores",
      "Mushroom-laden scepter of rot"
    ]
  },
  {
    name: "Orcus",
    cr: 26,
    xp: 90000,
    environments: ["fiendish plane", "undead realms", "ruins"],
    loot: ["Wand of Orcus (shard or piece)", "Necrotic goat skull fragment"]
  }
];

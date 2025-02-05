const npcNames = [
  "Adriel", "Branlor", "Celindra", "Dorian", "Elira", "Fendril", "Gromar",
  "Hella", "Isabeth", "Jorven", "Kaylin", "Ludwig", "Merida", "Norgrim",
  "Orthea", "Perrin", "Quinlan", "Rhogar", "Sarena", "Tressa", "Ulric",
  "Valanthe", "Winlan", "Xandar", "Yllia", "Zarina", "Arimond", "Beatha",
  "Caldor", "Delphine", "Ezrom", "Frina", "Garreth", "Haldor", "Ishir",
  "Jessa", "Kelmar", "Lenora", "Mirabel", "Nelson", "Olevia", "Parthis",
  "Ranlor", "Sephira", "Tildra", "Ursin", "Vandris", "Wellia", "Xavis",
  "Yorvon", "Zanara", "Agnar", "Brynn", "Cindel", "Darrion", "Evanna",
  "Fioren", "Genan", "Hermia", "Ithran", "Jolena", "Kathan", "Lilindra",
  "Maltis", "Norina", "Olliver", "Priscill", "Quynna", "Raethan",
  "Samdriel", "Tovin", "Umbrith", "Valdir", "Wrennis", "Ximira", "Yaltha",
  "Zorvin", "Adalyn", "Berris", "Cassian", "Dionna", "Elrich", "Fendil",
  "Gavram", "Hadara", "Irvath", "Joneth", "Kailen", "Landris", "Maribel",
  "Narthis", "Olanna", "Pinter", "Relana", "Savros", "Torinna", "Undril",
  "Verona", "Wilmar", "Xenaya", "Yordrin", "Zellira", "Andiron", "Bramora",
  "Chalric", "Dulath", "Elysia", "Fionna", "Gillian", "Hamdor", "Illessa",
  "Jarren", "Kyretta", "Lasaro", "Mariny", "Norrath", "Orys", "Pandira",
  "Ryloth", "Sedina", "Tarin", "Udora", "Veskan", "Whitney", "Xindra",
  "Yalara", "Zandor"
];

const npcRaces = [
  "Human", "Elf", "Dwarf", "Halfling", "Tiefling", "Dragonborn", 
  "Gnome", "Half-Orc", "Half-Elf", "Aasimar",
  "Genasi (Air)", "Genasi (Earth)", "Genasi (Fire)", "Genasi (Water)",
  "Tabaxi", "Triton", "Goliath", "Firbolg", "Kenku", "Tortle",
  "Aarakocra", "Satyr", "Leonin", "Minotaur", "Loxodon", "Vedalken",
  "Harengon", "Fairy", "Owlin", "Centaur"
];

const npcAlignments = [
  "Lawful Good", "Neutral Good", "Chaotic Good",
  "Lawful Neutral", "True Neutral", "Chaotic Neutral",
  "Lawful Evil", "Neutral Evil", "Chaotic Evil"
];

const npcProfessions = [
  "Farmer", "Blacksmith", "Guard", "Merchant", "Bard", "Scholar", 
  "Librarian", "Alchemist", "Ranger", "Barbarian", "Sorcerer", 
  "Wizard", "Cleric", "Warlock", "Rogue", "Thief", "Assassin", 
  "Noble", "Knight", "Sailor", "Fisherman", "Smuggler", "Monk", 
  "Druid", "Artificer", "Paladin", "Inquisitor", "Diplomat",
  "Jester", "Cook", "Miner", "Herbalist", "Innkeeper", 
  "Bounty Hunter", "Gladiator", "Fletcher", "Tanner", "Weaver",
  "Mason", "Carpenter", "Scribe", "Cartographer", "Gravekeeper",
  "Stablemaster", "Archaeologist", "Merchant Captain", "Beast Tamer",
  "Fortune Teller", "Interpreter", "Jeweler", "Locksmith", "Baker",
  "Brewer", "Caravan Guard", "Envoy", "Woodcutter", "Shepherd",
  "Dockworker", "Healer", "Reeve", "Tax Collector", "Executioner"
];

const npcPersonalities = [
  "Cheerful and optimistic",
  "Brooding and secretive",
  "Eager and curious",
  "Stoic and blunt",
  "Prideful and somewhat arrogant",
  "Kind-hearted but naive",
  "Cautious and calculating",
  "Quirky with peculiar habits",
  "Hot-tempered and confrontational",
  "Jovial and loves a good story",
  "Mysterious and aloof",
  "Deeply religious and thoughtful",
  "Honor-bound and unwavering",
  "Somber and guilt-ridden",
  "Enthusiastic about magic",
  "Overly trusting of strangers",
  "Suspicious of everyone",
  "Driven by wealth and status",
  "Sees the world as an elaborate puzzle",
  "Passionate about nature's balance",
  "Devoutly loyal to a cause or deity",
  "Always seeking a thrilling adventure",
  "Obsessed with collecting rare artifacts",
  "Haunted by nightmares of the past",
  "Charming but manipulative",
  "Uplifting, with a hearty laugh",
  "Incredibly shy and soft-spoken",
  "Strict and no-nonsense",
  "Mischievous and playful",
  "Self-doubting but tries to appear brave",
  "Righteous and quick to judge",
  "Inventive and tinkers with odd contraptions",
  "Philosophical about life and death",
  "Fiercely protective of friends",
  "Sarcastic with a sharp wit",
  "Melancholic, often lost in thought",
  "Obsessed with genealogies and histories",
  "Never satisfied, always seeking improvement",
  "Reckless in pursuit of glory",
  "Diplomatic and careful with words",
  "Extroverted and thrives on parties",
  "Introverted, avoids large crowds",
  "Boldly confronts any challenge",
  "Detached, rarely shows emotion",
  "Friendly but easily distracted",
  "Seeks to mediate all conflicts",
  "Idealistic to a fault",
  "Realistic, borderline pessimistic",
  "Tends to see the best in everyone",
  "Tends to see the worst in everyone",
  "Honest to a fault, never lies",
  "Speaks in half-truths and riddles"
];

const npcQuirks = [
  "constantly hums a tune",
  "wears a hood indoors",
  "collects strange trinkets from everywhere",
  "refers to themselves in the third person",
  "has a soft spot for stray animals",
  "terrified of insects",
  "speaks in rhymes unintentionally",
  "carries a lucky charm that they guard fiercely",
  "has a habit of clicking their tongue while thinking",
  "punctuates every sentence with a dramatic gesture",
  "fidgets with a ring on their finger when nervous",
  "always tries to read omens in the weather",
  "wears mismatched shoes for good luck",
  "obsessively cleans their hands",
  "maintains a journal of dreams to interpret them",
  "secretly sketches everyone they meet",
  "taps their foot constantly when idle",
  "never makes eye contact while speaking",
  "collects feathers from different birds",
  "claims they can taste magic in the air",
  "speaks to inanimate objects as if alive",
  "folds origami animals to pass the time",
  "recites proverbs at inappropriate moments",
  "brews unusual teas for every mood",
  "wears earplugs in crowded areas",
  "has a pet rock they treat like a companion",
  "always checks corners before entering a room",
  "has a strict daily ritual they never break",
  "writes down every unusual word they hear",
  "carves small runes into random objects for 'protection'",
  "refers to a personal philosophy to justify every action",
  "apologizes to furniture after bumping into it",
  "treats certain days as sacred and won't work on them",
  "convinced they have a twin somewhere in the world",
  "refuses to eat anything green",
  "asks for the name of every animal they encounter",
  "claims they've visited another plane in their dreams",
  "tries to teach strangers a secret handshake",
  "collects bottle caps, each has 'special significance'",
  "cracks their knuckles before speaking",
  "pets every stray cat they pass, calling each by a unique name",
  "wears multiple layers of socks regardless of weather",
  "utters a weird laugh at the end of each sentence",
  "hides small pebbles in their pockets for good luck",
  "sniffs the air regularly and comments on imaginary scents",
  "always compliments random passersby on minor details",
  "invented a personal slang that no one else understands",
  "claims they can see invisible creatures on the ceiling",
  "kicks a rock three times when nervous",
  "randomly bursts into a short dance when happy",
  "carries a small mirror to check expressions mid-conversation",
  "believes whistling summons tiny faeries only they can see",
  "keeps a tally of everyone they’ve ever met in a tiny notebook"
];

const npcBackstoryHooks = [
  "escaped from a burning village in childhood",
  "is on a mission to avenge their slain mentor",
  "is secretly descended from minor royalty",
  "was cursed by a witch and seeks a cure",
  "studied forbidden magic and regrets it",
  "ran away from an arranged marriage",
  "searches for a legendary artifact tied to their family",
  "owes a life-debt to a powerful sorcerer",
  "is the last member of an ancient order",
  "once served as a spy but left that life behind",
  "wants to unite warring tribes under one banner",
  "lost memory and is piecing together their past",
  "believes they're the reincarnation of a famous hero",
  "witnessed a dark prophecy they can't forget",
  "accidentally unleashed a demon in youth",
  "stole a cursed gem that whispers at night",
  "bears a birthmark prophesied to bring great change",
  "inherited a magical sword that resists commands",
  "disguises true race to avoid persecution",
  "once died and was resurrected, returning with strange visions",
  "found an ancient map revealing hidden doorways",
  "fled a distant kingdom after being framed",
  "trained by a reclusive master in the wild",
  "has a twin who was taken by fey creatures",
  "suffers uncontrollable prophetic dreams",
  "became indebted to a vampire who spared their life",
  "infiltrated a cult to save a friend, haunted by nightmares",
  "made a pact with a minor deity to protect their homeland",
  "hails from a tribe that hunts monsters for sport",
  "once fought alongside a famous knight, parted ways bitterly",
  "bears a family heirloom that curses each generation",
  "was a scholar who discovered a forbidden library of knowledge",
  "lost a loved one to a powerful necromancer, thirsts for revenge",
  "carries the ghost of a sibling who offers cryptic advice",
  "was a pirate who found an artifact that won't let them rest",
  "is child of two feuding noble families, exiled from both",
  "killed a dragon at a young age, no one believes the tale",
  "wants to break a prophecy that dooms them at a certain age",
  "once served a tyrant but turned traitor to save innocents",
  "sworn never to take a life, haunted by a past mistake",
  "was part of a druidic circle that vanished under strange circumstances"
];

const npcFears = [
  "Heights",
  "Enclosed spaces",
  "The sea",
  "Unseen creatures in the dark",
  "Undead rising",
  "Public speaking",
  "Betrayal by allies",
  "Fire, due to a childhood trauma",
  "Being forgotten or ignored",
  "Losing loved ones",
  "Spiders and insects",
  "Magical experimentation",
  "Turning into a monster",
  "Being controlled or possessed",
  "Failing to live up to expectations",
  "Ensnaring curses",
  "Never finding a true purpose",
  "Getting lost in a labyrinth",
  "Ghostly apparitions",
  "Being buried alive",
  "Revealing their darkest secret",
  "Becoming like a hated parent",
  "Drowning, after a near-death experience",
  "Silence, as it conjures old nightmares",
  "Large crowds or festivals"
];

const npcMotivations = [
  "Desire for fame and recognition",
  "Need for wealth to save a loved one",
  "Restoring honor to their disgraced family",
  "Vengeance against a tyrannical ruler",
  "Uncovering forbidden knowledge at any cost",
  "Protecting the innocent from monsters",
  "Seeking a rumored cure for an incurable illness",
  "Longing for acceptance among peers",
  "Hunting legendary beasts to prove worth",
  "Discovering the truth behind an ancient prophecy",
  "Proving a personal theory about magic or the gods",
  "Finding an ancient treasure that could change the world",
  "Uniting scattered tribes under one banner",
  "Bringing peace to a war-torn region",
  "Tracking down a lost mentor or parent",
  "Recovering a stolen heirloom vital to their identity",
  "Escaping a life-debt by performing heroic deeds",
  "Infiltrating enemy territory to gather intel",
  "Building a reputation to overshadow past shame",
  "Fulfilling a promise made on a deathbed",
  "Collecting rare artifacts for a private collection",
  "Establishing a new order or guild",
  "Becoming a legendary hero told of in prophecy",
  "Breaking a generational curse on their family",
  "Seeking redemption after a grievous mistake"
];

const npcSecrets = [
  "They sold vital information to an enemy kingdom",
  "They have monstrous blood in their heritage",
  "They accidentally caused a loved one’s death",
  "They hoard stolen relics in a secret cellar",
  "They can see or hear a spirit that no one else can",
  "They forged a noble lineage to gain status",
  "They made a dark pact in exchange for power",
  "They framed someone else for their own crime",
  "They love someone on the enemy’s side",
  "They once belonged to a notorious criminal gang",
  "They possess a forbidden spell scroll locked away",
  "They secretly revere a heretical deity",
  "They are an exiled royalty living under a false name",
  "They witnessed a friend commit a terrible act but stayed silent",
  "They’re haunted by dreams of another life they once lived",
  "They are responsible for a tragic event blamed on monsters",
  "They faked their death to escape a blood feud",
  "They impersonated a deceased heir to inherit a fortune",
  "They once served as a ruthless inquisitor under a fallen regime",
  "They are blackmailed by a powerful figure who knows their past",
  "They secretly practice necromancy in pursuit of lost knowledge",
  "They keep a hidden child or family far away from current dangers",
  "They stole a holy artifact from a temple, never returned it",
  "They bear a demonic mark that occasionally influences their actions",
  "They once ate the heart of a mythical beast to gain power"
];

  We have fully fleshed out all arrays with no placeholders.
*/

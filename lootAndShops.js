const commonLootTable = [
  "Potion of Healing (common)",
  "Basic Torch",
  "Gold Coins (small pouch)",
  "Silver Coins (handful)",
  "Strange Key (non-magical)",
  "Worn Leather Journal (half-filled)",
  "Minor Magical Trinket (faint glow)",
  "A Torn Treasure Map (likely incomplete)",
  "Family Heirloom Pendant (mundane)",
  "A Rare Gemstone (low-value but pretty)",
  "Tattered Spellbook (missing pages)",
  "Simple Wooden Holy Symbol (generic deity)",
  "Polished Seashell (worth a few copper)",
  "Tiny Mechanical Bird (wings rusted)",
  "Carved Bone Dice (unbalanced)",
  "Small Music Box (slightly out of tune)",
  "Stone Figurine of a Local Hero",
  "Simple Copper Ring (engraved initials)",
  "Bundle of Strange Herbs (unknown effect)",
  "Glass Eye (uncanny resemblance to someone)",
  "Potion of Climbing",
  "Empty Scroll Case (ornate design)",
  "Animal Talisman (carved from driftwood)",
  "Decorative Dagger Hilt (blade missing)",
  "Weathered Map to a Local Landmark",
  "Bronze Candleholder (dented)",
  "Minor Charm Against Evil (folk magic)",
  "Small Bag of Colored Sand",
  "A Painted Mask (festival attire)",
  "Broken Wand (faint magical residue)",
  "Empty Vial Labeled “Serum #12”",
  "Fragment of a Golem’s Core (inert)",
  "A Faded Painting in a Wooden Frame",
  "Bronze Pocketwatch (mechanism jammed)",
  "Suspicious-Looking Pouch of Glitter",
  "Polished Animal Skull (cat-sized)",
  "Old Compass That Points to ???",
  "Tiny Glass Sphere Filled with Liquid Light",
  "Leatherbound Notebook (blank)",
  "Bronze Belt Buckle with Strange Insignia",
  "Framed Butterfly Collection (intact)",
  "Embroidered Handkerchief with Family Crest",
  "Small Crystal Shard That Vibrates Quietly",
  "Necklace of Owlbear Claws (non-magical)",
  "A Soggy Book Titled 'Legends of the East'",
  "Corked Bottle of Strange-Smelling Oil",
  "Half-Burned Candle That Never Melts",
  "Locket Containing a Lock of White Hair",
  "Bundle of Strange Incense Sticks (pungent)"
];

const rareLootTable = [
  "Potion of Greater Healing",
  "Potion of Fire Resistance",
  "Spell Scroll (3rd-level)",
  "Bag of Holding",
  "Ring of Swimming",
  "Elixir of Health",
  "Potion of Invisibility",
  "Pearl of Power",
  "Wand of Magic Detection",
  "Boots of Elvenkind",
  "Bag of Tricks (Gray)",
  "Potion of Water Breathing",
  "Cloak of Protection",
  "Dust of Disappearance",
  "Goggles of Night",
  "Ring of Feather Falling",
  "Winged Boots (minor version, short flight)",
  "Wand of Secrets",
  "Driftglobe",
  "Slippers of Spider Climbing",
  "Gloves of Thievery",
  "Potion of Heroism",
  "Ioun Stone (Sustenance)",
  "Mystic Rope (50 ft) That Moves at Command",
  "Broom of Flying (limited speed)",
  "Quaal’s Feather Token (Swan Boat)",
  "Necklace of Adaptation",
  "Eyes of the Eagle",
  "Chime of Opening (3 charges left)",
  "Keoghtom’s Ointment",
  "Lantern of Revealing",
  "Stone of Good Luck (Luckstone)",
  "Elemental Gem (Water)",
  "Ring of Jumping",
  "Robe of Useful Items (some patches used)",
  "Gloves of Missile Snaring",
  "Periapt of Wound Closure",
  "Potion of Mind Reading",
  "Potion of Speed",
  "Potion of Flying (short duration)",
  "Potion of Resistance (various types)",
  "Scroll of Protection (Undead)",
  "Wand of Magic Missiles",
  "Wand of Web",
  "Adamantine Weapon (basic type, minor enchant)",
  "Spell Scroll (4th-level, random)",
  "Shield +1 (minor battered look)",
  "Sword +1 (ornate hilt)",
  "Wand of the War Mage +1",
  "Rod of the Pact Keeper +1"
];

/* ==================== SHOP ITEMS WITH PRICES ===================== 
   Format: 
   {
     name: string,
     price: string (like "2 gp", "50 cp", etc.),
     description: short string
   }
*/

const shopItems = {
  general: {
    poor: [
      {
        name: "Stale Rations (1 day)",
        price: "2 cp",
        description: "Bland dried bread and jerky, still edible for a day."
      },
      {
        name: "Torch (cheap, smokes heavily)",
        price: "1 cp",
        description: "Roughly made; smokes a lot when lit."
      },
      {
        name: "Rope (frayed, 25 ft)",
        price: "5 cp",
        description: "Short and fraying hemp rope, weaker than standard."
      },
      {
        name: "Cracked Clay Jug",
        price: "1 cp",
        description: "Holds liquid, but might leak if jostled."
      },
      {
        name: "Threadbare Blanket",
        price: "1 cp",
        description: "Barely enough to keep warm, many holes."
      },
      {
        name: "Crude Sack",
        price: "1 cp",
        description: "Very rough cloth, can hold up to 15 lb."
      },
      {
        name: "Tin Fork and Spoon",
        price: "5 cp",
        description: "Easy to bend, poorly made, but functional."
      },
      {
        name: "Wooden Holy Symbol (chipped paint)",
        price: "5 cp",
        description: "Rudimentary depiction of a deity, paint flaking."
      },
      {
        name: "Simple Tallow Candle",
        price: "1 cp",
        description: "Burns for about 4 hours, smoky flame."
      },
      {
        name: "Ragged Cloth Cloak",
        price: "8 cp",
        description: "Thin fabric, offers minor protection from the cold."
      },
      {
        name: "Small Wooden Box (splintered)",
        price: "5 cp",
        description: "Fits in a backpack, fragile construction."
      }
    ],
    average: [
      {
        name: "Rations (1 day)",
        price: "5 sp",
        description: "Standard dried food, good for wilderness travel."
      },
      {
        name: "Torch",
        price: "1 cp",
        description: "Normal wooden torch, burns 1 hour."
      },
      {
        name: "Rope (50 ft)",
        price: "1 gp",
        description: "Durable hemp rope, standard adventuring gear."
      },
      {
        name: "Backpack",
        price: "2 gp",
        description: "Canvas pack with straps, can carry up to 30 lb."
      },
      {
        name: "Flask of Oil",
        price: "1 sp",
        description: "Useful for lanterns or as a makeshift weapon."
      },
      {
        name: "Waterskin",
        price: "2 sp",
        description: "Holds up to 4 pints of liquid, leather container."
      },
      {
        name: "Bedroll",
        price: "1 gp",
        description: "Simple roll of blankets and padding."
      },
      {
        name: "Lantern",
        price: "5 gp",
        description: "Hooded lantern, burns oil for 6 hours per pint."
      },
      {
        name: "Tinderbox",
        price: "5 sp",
        description: "Flint and steel kit for lighting fires."
      },
      {
        name: "Candles (5)",
        price: "5 cp",
        description: "Each burns for about 1 hour, minimal light."
      },
      {
        name: "Chalk (1 piece)",
        price: "1 cp",
        description: "Draw on surfaces or leave marks."
      },
      {
        name: "Crowbar",
        price: "2 gp",
        description: "Iron bar for leverage, +2 bonus to pry checks."
      },
      {
        name: "Fishing Tackle",
        price: "1 gp",
        description: "Basic line, hooks, sinkers for fishing."
      },
      {
        name: "Grappling Hook",
        price: "2 gp",
        description: "Steel hook, can anchor rope to climb."
      },
      {
        name: "Hammer",
        price: "1 gp",
        description: "Small mallet for driving nails or pitons."
      },
      {
        name: "Pitons (pack of 10)",
        price: "5 sp",
        description: "Metal spikes for climbing or securing rope."
      },
      {
        name: "Sack (sturdy)",
        price: "1 cp",
        description: "Canvas bag, can hold 30 lb."
      },
      {
        name: "Soap",
        price: "2 cp",
        description: "Chunk of scented soap, standard for cleaning."
      },
      {
        name: "Tent (2-person)",
        price: "2 gp",
        description: "Light, collapsible canvas shelter."
      },
      {
        name: "Traveler's Clothes",
        price: "2 gp",
        description: "Durable clothing for journeys."
      },
      {
        name: "Hooded Lantern",
        price: "5 gp",
        description: "Focuses light in a cone, protects flame."
      },
      {
        name: "Vial of Ink & Quill",
        price: "1 gp",
        description: "Basic writing set, black ink, simple feather quill."
      },
      {
        name: "Empty Pouch (leather)",
        price: "5 sp",
        description: "Small belt pouch for coins or trinkets."
      },
      {
        name: "Simple Lock (with key)",
        price: "2 gp",
        description: "Basic lock mechanism, DC 15 to pick."
      }
    ],
    wealthy: [
      {
        name: "High-quality Rations (1 day)",
        price: "1 gp",
        description: "Tasty, well-preserved foods including dried fruits."
      },
      {
        name: "Silk Rope (50 ft)",
        price: "10 gp",
        description: "Lighter and sturdier than hemp rope."
      },
      {
        name: "Embroidered Backpack",
        price: "5 gp",
        description: "Stylish bag with reinforced straps."
      },
      {
        name: "Lantern (hooded, polished brass)",
        price: "10 gp",
        description: "Decorative yet functional, bright reflection."
      },
      {
        name: "Fine Waterskin",
        price: "5 gp",
        description: "Leather with metal caps, high-quality craftsmanship."
      },
      {
        name: "Deluxe Bedroll (padded)",
        price: "5 gp",
        description: "Extra comfort for restful sleep outdoors."
      },
      {
        name: "Gilded Tinderbox",
        price: "3 gp",
        description: "Ornate box for flint and steel, stylish design."
      },
      {
        name: "Compass (basic functionality)",
        price: "5 gp",
        description: "Points north reliably, brass casing."
      },
      {
        name: "Spyglass (cheap version, but functional)",
        price: "50 gp",
        description: "Limited clarity, but workable for distance viewing."
      },
      {
        name: "Perfumed Candles (5)",
        price: "1 gp",
        description: "Light floral scent, each burns ~1 hour."
      },
      {
        name: "Fancy Chalk Pack (5 colors)",
        price: "5 sp",
        description: "Vibrant colors, does not crumble easily."
      },
      {
        name: "Masterwork Crowbar (lightweight steel)",
        price: "5 gp",
        description: "Superior metal, easier to use for prying."
      },
      {
        name: "Fishing Tackle (engraved box)",
        price: "5 gp",
        description: "Quality gear with decorative container."
      },
      {
        name: "Climbing Harness with Hook",
        price: "8 gp",
        description: "Provides extra safety, integrated metal hook."
      },
      {
        name: "Quality Hammer (decorative handle)",
        price: "3 gp",
        description: "Balanced with nice grip, can be used for nails or as a light weapon."
      },
      {
        name: "Engraved Pitons (10)",
        price: "2 gp",
        description: "Steel pitons with etched patterns for style."
      },
      {
        name: "Velvet Sack",
        price: "2 gp",
        description: "Soft velvet, holds delicate items."
      },
      {
        name: "Luxurious Soap (floral scent)",
        price: "1 gp",
        description: "Imported fragrance, leaves skin feeling smooth."
      },
      {
        name: "Large Pavilion Tent (4-person)",
        price: "20 gp",
        description: "Roomy, durable, with optional partition."
      },
      {
        name: "Noble’s Traveling Clothes",
        price: "10 gp",
        description: "Finely stitched garments befitting high society."
      },
      {
        name: "Bullseye Lantern (silver trim)",
        price: "12 gp",
        description: "Focused beam, intricate metalwork."
      },
      {
        name: "Fine Lock (with ornate key)",
        price: "8 gp",
        description: "Sturdy lock, DC 20 to pick, decorative design."
      },
      {
        name: "Leather-bound Journal (blank)",
        price: "5 gp",
        description: "High-quality paper, durable cover."
      },
      {
        name: "Sealing Wax & Stamp",
        price: "2 gp",
        description: "Used for official letters, includes a simple crest."
      }
    ]
  },

  weapons: {
    poor: [
      {
        name: "Rusty Shortsword",
        price: "5 sp",
        description: "Edges chipped, easy to break."
      },
      {
        name: "Chipped Dagger",
        price: "2 sp",
        description: "Blade chipped, handle loose."
      },
      {
        name: "Old Spear with a Crooked Tip",
        price: "5 sp",
        description: "Difficult to aim properly."
      },
      {
        name: "Warped Handaxe",
        price: "5 sp",
        description: "Handle is splintered, unbalanced swing."
      },
      {
        name: "Bent Light Hammer",
        price: "4 sp",
        description: "Slightly off-center, prone to bounce."
      },
      {
        name: "Dull Mace",
        price: "5 sp",
        description: "Minimal impact, heavy head but poor shape."
      },
      {
        name: "Broken Crossbow (missing string)",
        price: "1 sp",
        description: "Needs repairs to function."
      },
      {
        name: "Cracked Quarterstaff",
        price: "2 sp",
        description: "Wood is split, might snap under stress."
      },
      {
        name: "Worn Sling (no bullets)",
        price: "1 sp",
        description: "Faded leather, still works if you have ammo."
      }
    ],
    average: [
      {
        name: "Shortsword",
        price: "10 gp",
        description: "Standard iron blade, decent craftsmanship."
      },
      {
        name: "Longsword",
        price: "15 gp",
        description: "Versatile blade for one- or two-handed use."
      },
      {
        name: "Dagger",
        price: "2 gp",
        description: "Simple steel dagger, balanced for throwing or melee."
      },
      {
        name: "Greatsword",
        price: "50 gp",
        description: "Heavy two-handed blade, requires strength."
      },
      {
        name: "Maul",
        price: "10 gp",
        description: "Two-handed hammer, deals crushing blows."
      },
      {
        name: "Warhammer",
        price: "15 gp",
        description: "One-handed or versatile, sturdy metal head."
      },
      {
        name: "Shortbow",
        price: "25 gp",
        description: "Light bow, good for quick shots."
      },
      {
        name: "Longbow",
        price: "50 gp",
        description: "Tall bow with strong pull, long-range."
      },
      {
        name: "Arrows (20)",
        price: "1 gp",
        description: "Fletched shafts for bows, standard tips."
      },
      {
        name: "Crossbow, Light",
        price: "25 gp",
        description: "Mechanically simpler, needs bolts."
      },
      {
        name: "Crossbow Bolts (20)",
        price: "1 gp",
        description: "Metal-tipped bolts, standard size."
      },
      {
        name: "Spear",
        price: "1 gp",
        description: "Wooden shaft, steel head, can be thrown."
      },
      {
        name: "Trident",
        price: "5 gp",
        description: "Three-pronged spear, can be thrown too."
      },
      {
        name: "Glaive",
        price: "20 gp",
        description: "Polearm with a curved blade on the end."
      },
      {
        name: "Halberd",
        price: "20 gp",
        description: "Polearm with an axe-like blade and spike."
      },
      {
        name: "Handaxe",
        price: "5 gp",
        description: "Light throwing axe or melee, wooden handle."
      },
      {
        name: "Rapier",
        price: "25 gp",
        description: "Thin, elegant blade for piercing attacks."
      },
      {
        name: "Scimitar",
        price: "25 gp",
        description: "Curved blade, favored by certain mercenaries."
      },
      {
        name: "Whip",
        price: "2 gp",
        description: "Leather whip, reach and finesse in combat."
      },
      {
        name: "Morningstar",
        price: "15 gp",
        description: "Spiked head on a metal shaft, heavy impact."
      }
    ],
    wealthy: [
      {
        name: "Masterwork Longsword (finely balanced)",
        price: "50 gp",
        description: "Expertly forged, improved handling."
      },
      {
        name: "Enchanted Dagger (+0, slight glow)",
        price: "75 gp",
        description: "No bonus to attack/damage, but emits faint light."
      },
      {
        name: "Finely Crafted Spear (silver filigree)",
        price: "30 gp",
        description: "Decorative inlays but still combat-ready."
      },
      {
        name: "Steel-tipped Arrows (20, excellent fletching)",
        price: "5 gp",
        description: "Slightly more accurate, half normal scatter."
      },
      {
        name: "Crossbow of Subtle Carvings (Light)",
        price: "40 gp",
        description: "Etched designs, better grip, same damage."
      },
      {
        name: "Polished Warhammer with Engraved Head",
        price: "35 gp",
        description: "Sturdy, well-balanced, decorative runes."
      },
      {
        name: "Engraved Scimitar (draconic motifs)",
        price: "35 gp",
        description: "Curved blade with swirling dragon engravings."
      },
      {
        name: "Gilded Rapier (fancy guard)",
        price: "45 gp",
        description: "Elaborate hilt, gold plating, perfect balance."
      },
      {
        name: "Weightless Quarterstaff (alchemical steel)",
        price: "50 gp",
        description: "Extremely light, easy to wield, same damage."
      },
      {
        name: "Double-bladed Handaxe (patterned steel)",
        price: "40 gp",
        description: "Two cutting edges, ornate patterns in the metal."
      },
      {
        name: "Ornate Glaive (etched blade design)",
        price: "45 gp",
        description: "Polearm with fancy patterns, sturdy craftsmanship."
      },
      {
        name: "Arrows of Minor Traceless Flight (20)",
        price: "10 gp",
        description: "Leave almost no trajectory signature, harder to dodge."
      }
    ]
  },

  armors: {
    poor: [
      {
        name: "Tattered Padded Armor",
        price: "3 sp",
        description: "Provides minimal protection, worn in places."
      },
      {
        name: "Worn Leather Armor (missing straps)",
        price: "5 sp",
        description: "Incomplete set, vulnerable gaps."
      },
      {
        name: "Rusted Chain Shirt",
        price: "8 sp",
        description: "Chain links rusted together, chafes a lot."
      },
      {
        name: "Dented Shield (wooden rim broken)",
        price: "5 sp",
        description: "Unreliable defense, might break on a critical blow."
      },
      {
        name: "Helmet with a Cracked Visor",
        price: "2 sp",
        description: "Limited visibility, questionable safety."
      },
      {
        name: "Moth-Eaten Gambeson",
        price: "5 sp",
        description: "Heavily worn padded under-armor."
      }
    ],
    average: [
      {
        name: "Padded Armor",
        price: "5 gp",
        description: "Layers of cloth or leather, light protection."
      },
      {
        name: "Leather Armor",
        price: "10 gp",
        description: "Cured and toughened leather for stealth."
      },
      {
        name: "Studded Leather",
        price: "45 gp",
        description: "Leather armor with metal rivets, better protection."
      },
      {
        name: "Hide Armor",
        price: "10 gp",
        description: "Thick furs and pelts, decent for barbarians/druids."
      },
      {
        name: "Chain Shirt",
        price: "50 gp",
        description: "Metal rings cover the torso; can be worn under clothes."
      },
      {
        name: "Scale Mail",
        price: "50 gp",
        description: "Overlapping metal scales, flexible but noisy."
      },
      {
        name: "Breastplate",
        price: "400 gp",
        description: "Solid metal plate for vital areas, no disadvantage on Stealth."
      },
      {
        name: "Half Plate",
        price: "750 gp",
        description: "Plate on shoulders and torso, somewhat bulky."
      },
      {
        name: "Ring Mail",
        price: "30 gp",
        description: "Leather with metal rings sewn on, cheaper but heavy."
      },
      {
        name: "Chain Mail",
        price: "75 gp",
        description: "Full-body chain links, good protection, heavy."
      },
      {
        name: "Splint",
        price: "200 gp",
        description: "Vertical metal strips over cloth backing."
      },
      {
        name: "Plate (basic)",
        price: "1500 gp",
        description: "Heavy steel plates, maximum coverage."
      },
      {
        name: "Shield (steel-rimmed)",
        price: "10 gp",
        description: "Metal-rimmed wooden shield, standard size."
      },
      {
        name: "Helmet (various styles)",
        price: "5 gp",
        description: "Protects the head; styles vary from open to visored."
      }
    ],
    wealthy: [
      {
        name: "Finely Etched Leather Armor",
        price: "50 gp",
        description: "Intricate designs on hardened leather, stylish."
      },
      {
        name: "Studded Leather (polished rivets)",
        price: "65 gp",
        description: "Metal studs carefully polished, higher quality."
      },
      {
        name: "Ornate Hide Armor (tribal patterns)",
        price: "25 gp",
        description: "Decorative furs with etched tribal motifs."
      },
      {
        name: "Masterwork Chain Shirt (lightweight)",
        price: "150 gp",
        description: "Quality steel links, slightly lighter than normal."
      },
      {
        name: "Scale Mail with Inlaid Bronze",
        price: "100 gp",
        description: "Scales polished and trimmed with bronze edges."
      },
      {
        name: "Artisan Breastplate with Family Crest",
        price: "500 gp",
        description: "Commissioned piece, crest hammered onto the plate."
      },
      {
        name: "Half Plate (steel with silver filigree)",
        price: "900 gp",
        description: "Decorative silver inlays, same protective value."
      },
      {
        name: "Ornate Plate Armor (inlaid gold accents)",
        price: "2000 gp",
        description: "A knight’s pride, gold filigree, top-notch forging."
      },
      {
        name: "Shield +0 (decorative crest front)",
        price: "50 gp",
        description: "No magical bonus, but a regal design for intimidation."
      },
      {
        name: "Visored Helmet with Griffin Motif",
        price: "25 gp",
        description: "Steel helmet featuring a carved griffin crest."
      },
      {
        name: "Dragonhide Studded Leather (rare look)",
        price: "200 gp",
        description: "Crafted from draconic scales, rumored to be tougher."
      },
      {
        name: "Blackened Chain Mail (stealthy finish)",
        price: "125 gp",
        description: "Dark metal coating reduces shine, good for ambushes."
      }
    ]
  },

  magic: {
    poor: [
      {
        name: "Potion of Healing (common)",
        price: "50 gp",
        description: "Restores minor HP, standard brew."
      },
      {
        name: "Spell Scroll (Cantrip)",
        price: "15 gp",
        description: "One-use cantrip spell for novices."
      },
      {
        name: "Alchemy Jug (cracked, minor leak)",
        price: "40 gp",
        description: "Can produce liquids daily, but slight fluid loss."
      },
      {
        name: "Bottle of Bound Minor Sprite (can’t talk)",
        price: "30 gp",
        description: "Trapped sprite glows faintly, cannot communicate."
      },
      {
        name: "Wand of Minor Illusion (limited charges)",
        price: "60 gp",
        description: "Cast Minor Illusion a few times/day."
      },
      {
        name: "Scroll of Lesser Restoration",
        price: "40 gp",
        description: "Removes certain conditions if cast properly."
      },
      {
        name: "Enchanted Candle (dim glow, short range)",
        price: "10 gp",
        description: "Produces faint magical light, no fuel needed."
      }
    ],
    average: [
      {
        name: "Potion of Greater Healing",
        price: "150 gp",
        description: "Heals a moderate amount of HP."
      },
      {
        name: "Scroll of Firebolt",
        price: "25 gp",
        description: "1st-level scroll casting the Firebolt cantrip."
      },
      {
        name: "Spellbook (empty)",
        price: "50 gp",
        description: "Blank arcane tome for wizards to record spells."
      },
      {
        name: "Wand of Minor Illusions",
        price: "100 gp",
        description: "Similar to cantrip wand, more charges than poor version."
      },
      {
        name: "Bag of Holding (standard)",
        price: "500 gp",
        description: "Extra-dimensional storage, up to 500 lb capacity."
      },
      {
        name: "Driftglobe",
        price: "50 gp",
        description: "Floating light orb, follows its owner slowly."
      },
      {
        name: "Ring of Feather Falling",
        price: "200 gp",
        description: "Prevents fall damage to the wearer."
      },
      {
        name: "Wand of Secrets",
        price: "125 gp",
        description: "Detects secret doors or compartments within 30 ft."
      },
      {
        name: "Amulet of Proof Against Detection (weakened form)",
        price: "200 gp",
        description: "Helps mask presence from certain divination magic."
      },
      {
        name: "Cloak of Protection (light enchantment)",
        price: "300 gp",
        description: "Grants +1 AC and saving throws if attuned."
      }
    ],
    wealthy: [
      {
        name: "Ring of Swimming",
        price: "250 gp",
        description: "Wearer swims at normal walking speed."
      },
      {
        name: "Elixir of Health",
        price: "120 gp",
        description: "Cures diseases/conditions upon drinking."
      },
      {
        name: "Potion of Invisibility",
        price: "300 gp",
        description: "Grants invisibility for up to 1 hour or until attack/spell cast."
      },
      {
        name: "Pearl of Power",
        price: "300 gp",
        description: "Restores 1 expended spell slot (up to 3rd level)."
      },
      {
        name: "Boots of Elvenkind",
        price: "250 gp",
        description: "Wearer moves silently, advantage on Stealth checks."
      },
      {
        name: "Bag of Tricks (Gray)",
        price: "300 gp",
        description: "Summons random fuzzy creatures 3/day."
      },
      {
        name: "Goggles of Night",
        price: "200 gp",
        description: "Grants darkvision out to 60 ft (if you don’t already have it)."
      },
      {
        name: "Dust of Disappearance",
        price: "350 gp",
        description: "Renders creatures invisible for 2d4 minutes."
      },
      {
        name: "Wand of Magic Missiles (extra charges)",
        price: "250 gp",
        description: "Casts Magic Missile at various levels, recharges daily."
      },
      {
        name: "Chime of Opening (5 charges)",
        price: "300 gp",
        description: "Opens locked doors or chests with a resonant tone."
      },
      {
        name: "Rod of the Pact Keeper +1",
        price: "400 gp",
        description: "Warlock focus, +1 to spell attack rolls and spell save DC."
      },
      {
        name: "Wand of Web",
        price: "200 gp",
        description: "Casts Web spell, recharges daily."
      },
      {
        name: "Ring of Evasion (minor version, fewer charges)",
        price: "600 gp",
        description: "Allows Dex save success to become no damage a limited number of times."
      },
      {
        name: "Metamagic Rod (Lesser, 1-2 uses/day)",
        price: "500 gp",
        description: "Sorcerer-like metamgic effect for limited spells."
      }
    ]
  },

  alchemy: {
    poor: [
      {
        name: "Basic Healing Potion (weak)",
        price: "20 gp",
        description: "Heals a little less than a standard healing potion."
      },
      {
        name: "Antidote (generic, questionable quality)",
        price: "15 gp",
        description: "Helps resist mild poisons, uncertain reliability."
      },
      {
        name: "Poison Vial (weak dose)",
        price: "25 gp",
        description: "Deals low-grade poison damage if ingested or applied."
      },
      {
        name: "Alchemy Supplies (missing components)",
        price: "25 gp",
        description: "Starter kit for alchemical experiments, incomplete."
      },
      {
        name: "Herbalism Kit (half-used)",
        price: "25 gp",
        description: "Tools for gathering & brewing simple remedies, partially depleted."
      },
      {
        name: "Small Bag of Dried Herbs (unknown effects)",
        price: "5 gp",
        description: "Herbs that might have weak medicinal or mild hallucinogenic property."
      },
      {
        name: "Phial of Animal Musk (pungent)",
        price: "5 gp",
        description: "Overpowering scent, could lure or repel certain beasts."
      },
      {
        name: "Diluted Acid Flask",
        price: "10 gp",
        description: "Weakened acid, half damage of normal acid flask."
      }
    ],
    average: [
      {
        name: "Basic Healing Potion",
        price: "50 gp",
        description: "Heals 2d4+2 HP, standard potion."
      },
      {
        name: "Antidote (standard)",
        price: "25 gp",
        description: "Helps cure or resist common poisons."
      },
      {
        name: "Poison Vial (standard dose)",
        price: "50 gp",
        description: "Deals typical poison damage if ingested or applied to weapons."
      },
      {
        name: "Alchemy Supplies",
        price: "50 gp",
        description: "Complete kit for crafting potions and reagents."
      },
      {
        name: "Herbalism Kit",
        price: "50 gp",
        description: "Gather and craft healing potions, includes mortar/pestle."
      },
      {
        name: "Potion of Lesser Restoration",
        price: "75 gp",
        description: "Cures 1 condition (blinded, deafened, paralyzed, or poisoned)."
      },
      {
        name: "Flask of Acid",
        price: "25 gp",
        description: "Deals 2d6 acid damage if thrown and hits."
      },
      {
        name: "Flask of Alchemist's Fire",
        price: "50 gp",
        description: "Ignites target for 1d4 fire damage each round."
      },
      {
        name: "Potion of Animal Friendship",
        price: "50 gp",
        description: "Charm beasts with a single dose, short duration."
      },
      {
        name: "Incense (bundle)",
        price: "1 gp",
        description: "Sufficient for a few hours of ritual or meditation."
      },
      {
        name: "Potion of Resistance (one type)",
        price: "300 gp",
        description: "Pick one damage type (fire, cold, etc.), half damage for 1 hour."
      },
      {
        name: "Perfume (vial)",
        price: "5 gp",
        description: "Pleasant fragrance, popular among nobility."
      },
      {
        name: "Ink of Minor Illusion (fades after a day)",
        price: "10 gp",
        description: "Writes illusions that last 24 hrs before disappearing."
      }
    ],
    wealthy: [
      {
        name: "Potion of Superior Healing",
        price: "500 gp",
        description: "Heals 8d4+8 HP."
      },
      {
        name: "Antitoxin (advanced blend)",
        price: "75 gp",
        description: "Grants advantage on saving throws vs. poison for 1 hour."
      },
      {
        name: "Poison Vial (strong dose)",
        price: "150 gp",
        description: "Highly potent, deals increased poison damage."
      },
      {
        name: "Well-Stocked Alchemy Supplies (high quality)",
        price: "150 gp",
        description: "Deluxe kit with rare glassware and mortar/pestle."
      },
      {
        name: "Masterwork Herbalism Kit",
        price: "150 gp",
        description: "Contains high-grade tools, better success rates for potions."
      },
      {
        name: "Potion of Greater Restoration (short shelf life)",
        price: "1000 gp",
        description: "Removes exhaustion, curses, charmed or petrified conditions."
      },
      {
        name: "Flask of Elemental Acid (strong)",
        price: "75 gp",
        description: "Deals 4d6 acid damage on hit."
      },
      {
        name: "Alchemist's Fire (extended burn)",
        price: "100 gp",
        description: "Burns 2 rounds before self-extinguishing, 1d4 each round."
      },
      {
        name: "Rare Incense (exotic scents)",
        price: "10 gp",
        description: "Ideal for summoning or high-level rituals."
      },
      {
        name: "Potion of Animal Speaking (temporary effect)",
        price: "200 gp",
        description: "Gain ability to speak with animals for 1 hour."
      },
      {
        name: "Potion of Etherealness (short duration)",
        price: "1500 gp",
        description: "Step briefly into the Ethereal Plane."
      },
      {
        name: "Arcane Salve (speeds recovery of minor injuries)",
        price: "100 gp",
        description: "Reduces downtime for healing small wounds."
      }
    ]
  },

  exotic: {
    poor: [
      {
        name: "Dragon Turtle Shell Fragment (tiny)",
        price: "15 gp",
        description: "Small chipped piece from a large shell."
      },
      {
        name: "Oddly Colored Feathers from Unknown Beast",
        price: "5 gp",
        description: "Vibrant plumage, might be magical if studied."
      },
      {
        name: "Mystic Bones (slight glow in the dark)",
        price: "8 gp",
        description: "Animal bones with faint arcane residue."
      },
      {
        name: "Jar of Grung Slime",
        price: "10 gp",
        description: "Sticky goo from poisonous frog-folk."
      },
      {
        name: "Partial Basilisk Scale",
        price: "10 gp",
        description: "Piece of a petrifying lizard; used in alchemy."
      },
      {
        name: "Bag of Unidentifiable Seeds",
        price: "5 gp",
        description: "Could grow strange plants if cultivated."
      },
      {
        name: "Preserved Grick Tentacle (smells awful)",
        price: "5 gp",
        description: "Slimy limb from an underdark wormlike creature."
      }
    ],
    average: [
      {
        name: "Potion of Gaseous Form (volatile)",
        price: "300 gp",
        description: "Transform into mist for short periods."
      },
      {
        name: "Exotic Animal Feed (mixed reagents)",
        price: "15 gp",
        description: "Suitable for magical beasts or rare pets."
      },
      {
        name: "Manticore Quills (small bundle)",
        price: "25 gp",
        description: "Spiky tail quills, used as exotic arrow tips or ingredients."
      },
      {
        name: "Phoenix Feather (ash remains)",
        price: "75 gp",
        description: "Smolders faintly; rumored to have rejuvenating properties."
      },
      {
        name: "Bottle of Elemental Air (tiny swirl visible)",
        price: "50 gp",
        description: "A captured breeze from the elemental plane."
      },
      {
        name: "Vial of Basilisk Blood",
        price: "40 gp",
        description: "Useful in potions or anti-petrification research."
      },
      {
        name: "Mermaid Scales (sparkling)",
        price: "30 gp",
        description: "Iridescent, rumored to be lucky if carried."
      },
      {
        name: "Arcane Ink (glows softly)",
        price: "20 gp",
        description: "Magically conductive writing fluid, useful in scroll creation."
      },
      {
        name: "Gem of Brightness",
        price: "250 gp",
        description: "Emits beams of light; limited daily charges."
      },
      {
        name: "Keoghtom's Ointment",
        price: "120 gp",
        description: "Heals wounds, cures poison/disease once per jar."
      },
      {
        name: "Quaal's Feather Token (various types)",
        price: "300 gp",
        description: "Single-use magical effect, like a bird or boat."
      },
      {
        name: "Strange Meteor Shard (warm to the touch)",
        price: "100 gp",
        description: "A chunk of celestial rock, faint magical aura."
      }
    ],
    wealthy: [
      {
        name: "Dragon Turtle Shell (large piece, decorative)",
        price: "200 gp",
        description: "Could be crafted into a shield or trophy."
      },
      {
        name: "Phoenix Down (rumored revival property, unreliable)",
        price: "500 gp",
        description: "Feather from a phoenix, said to restore the fallen in legends."
      },
      {
        name: "Basilisk Egg (requires careful handling)",
        price: "250 gp",
        description: "Potentially hatch a pet or lab specimen; highly regulated."
      },
      {
        name: "Elemental Core Shard (Fire or Water)",
        price: "400 gp",
        description: "Raw elemental energy; dangerous if mishandled."
      },
      {
        name: "Unicorn Hair (ethically sourced, claims the seller)",
        price: "300 gp",
        description: "Rare reagent for powerful healing or illusions."
      },
      {
        name: "Bag of Holding (Exotic Stitching, rare design)",
        price: "600 gp",
        description: "Similar function to standard, but uniquely embroidered."
      },
      {
        name: "Bottle of Efreet Essence (extremely hot)",
        price: "350 gp",
        description: "Careful handling needed, can spontaneously ignite flammables."
      },
      {
        name: "Potion of Giant Strength (Hill, short duration)",
        price: "450 gp",
        description: "Boosts Strength to 21 for 1 hour."
      },
      {
        name: "Golden Quaal’s Feather Token (Bird Summon)",
        price: "500 gp",
        description: "Summons a giant bird mount briefly."
      },
      {
        name: "Fragment of a Legendary Meteoric Ore (for master forging)",
        price: "600 gp",
        description: "Extremely rare metal, rumored to craft +1 or better items."
      },
      {
        name: "Rare Sphinx Feather (carries cryptic power)",
        price: "800 gp",
        description: "Used in high-level divination or puzzle wards."
      },
      {
        name: "Genie Lamp (cosmetic, but rumored to attract djinni interest)",
        price: "1000 gp",
        description: "Ornate lamp said to occasionally ripple with elemental power."
      }
    ]
  },

  fletcher: {
    poor: [
      {
        name: "Rough Arrows (20, poor fletching)",
        price: "5 sp",
        description: "May cause slight penalty to ranged attacks if DM rules."
      },
      {
        name: "Worn Shortbow (frayed string)",
        price: "5 gp",
        description: "Needs restrung soon, but still workable."
      },
      {
        name: "Split Crossbow Bolts (20, some cracked)",
        price: "3 sp",
        description: "High chance of misfire or break."
      },
      {
        name: "Damaged Quiver (moldy interior)",
        price: "1 sp",
        description: "Arrows may degrade if stored long-term."
      },
      {
        name: "Basic Sling (no bullets)",
        price: "5 cp",
        description: "Leather strap, must find or buy bullets."
      },
      {
        name: "Crude Arrow Shafts (10, no heads)",
        price: "1 sp",
        description: "Unfinished, you need arrowheads and fletching."
      },
      {
        name: "Discarded Feathers for Fletching (mixed quality)",
        price: "5 cp",
        description: "Random feathers, might yield mismatched arrows."
      }
    ],
    average: [
      {
        name: "Arrows (20)",
        price: "1 gp",
        description: "Standard wooden arrows, iron tips."
      },
      {
        name: "Crossbow Bolts (20)",
        price: "1 gp",
        description: "Metal-tipped bolts, standard size."
      },
      {
        name: "Shortbow",
        price: "25 gp",
        description: "Light bow suitable for quick shots, limited range."
      },
      {
        name: "Longbow",
        price: "50 gp",
        description: "Tall bow with strong pull, more range."
      },
      {
        name: "Quiver (sturdy)",
        price: "1 gp",
        description: "Holds up to 20 arrows or bolts comfortably."
      },
      {
        name: "Arrowheads (pack of 20)",
        price: "2 gp",
        description: "Steel tips, attach to shafts for DIY arrow-making."
      },
      {
        name: "Fletching Kit (basic tools)",
        price: "5 gp",
        description: "Feathers, glue, small knives for arrow crafting."
      },
      {
        name: "Hunting Trap (simple jaw trap)",
        price: "5 gp",
        description: "Metal jaws clamp onto prey, mechanical trigger."
      },
      {
        name: "Sling Bullets (20)",
        price: "4 cp",
        description: "Smooth stones or lead bullets for a sling."
      },
      {
        name: "Light Crossbow",
        price: "25 gp",
        description: "Simple lever-based firing, reloads slowly."
      },
      {
        name: "Hand Crossbow (basic)",
        price: "75 gp",
        description: "Compact crossbow, one-handed, short range."
      }
    ],
    wealthy: [
      {
        name: "Finely Crafted Elven Arrows (20)",
        price: "5 gp",
        description: "Slight range/accuracy improvement, graceful design."
      },
      {
        name: "Enchanted Quiver (extra capacity, minor enchant)",
        price: "50 gp",
        description: "Holds up to triple normal ammo, lighter feel."
      },
      {
        name: "Composite Longbow (reinforced for strength)",
        price: "100 gp",
        description: "Higher draw weight, slightly better damage if STR is good."
      },
      {
        name: "Crossbow +0 with Intricate Inlays",
        price: "75 gp",
        description: "Beautifully carved stock, standard function."
      },
      {
        name: "Arrows of Minor Traceless Flight (20)",
        price: "10 gp",
        description: "Leave almost no arrow trail, hush on release."
      },
      {
        name: "Bolts of Dazing (5)",
        price: "20 gp",
        description: "One-time effect: target must succeed a DC 10 Con save or be dazed for a round."
      },
      {
        name: "Masterwork Shortbow (light draw)",
        price: "50 gp",
        description: "Perfectly balanced, improved durability."
      },
      {
        name: "Exotic Recurve Bow (ornate decorations)",
        price: "70 gp",
        description: "Curved limbs, good power-to-length ratio."
      },
      {
        name: "Bolts of Minor Light (5)",
        price: "15 gp",
        description: "Glow on impact for 1 minute, useful for marking targets."
      },
      {
        name: "Hand Crossbow with Ebony Grip",
        price: "100 gp",
        description: "Sleek black handle, same stats but stylish design."
      }
    ]
  },

  shipwright: {
    poor: [
      {
        name: "Crude Fishing Net (holes patched)",
        price: "1 gp",
        description: "Likely to tear if snared on rocks."
      },
      {
        name: "Rotted Wooden Oar",
        price: "2 sp",
        description: "Might break under strong rowing pressure."
      },
      {
        name: "Leaky Rowboat (incomplete build)",
        price: "25 gp",
        description: "Requires repair to float properly."
      },
      {
        name: "Soggy Sailcloth Scrap",
        price: "5 sp",
        description: "Too small for a sail, maybe patch material."
      },
      {
        name: "Rusty Anchor (small)",
        price: "2 gp",
        description: "Enough for a rowboat, corroded metal."
      },
      {
        name: "Worm-Eaten Driftwood Planks",
        price: "1 gp",
        description: "Barely usable for patchwork, must be replaced soon."
      }
    ],
    average: [
      {
        name: "Sturdy Fishing Net",
        price: "4 gp",
        description: "Standard net for small fish or crabs."
      },
      {
        name: "Wooden Oar",
        price: "2 gp",
        description: "Smooth handle, strong enough for rowing."
      },
      {
        name: "Basic Rowboat",
        price: "50 gp",
        description: "Seats 2-3 people, standard lake/ferry boat."
      },
      {
        name: "Canvas Sailcloth",
        price: "5 gp",
        description: "Durable sail fabric, enough for a small craft."
      },
      {
        name: "Small Anchor",
        price: "5 gp",
        description: "Suitable for small to medium boats."
      },
      {
        name: "Tar and Pitch for Sealing",
        price: "1 gp",
        description: "Prevents leaks, covers ~10 sq ft of hull."
      },
      {
        name: "Rigging Rope (100 ft)",
        price: "2 gp",
        description: "Basic rope for mast rigging, moderate durability."
      },
      {
        name: "Simple Compass",
        price: "5 gp",
        description: "Basic directional pointer in wooden housing."
      },
      {
        name: "Wooden Rudder (unattached)",
        price: "8 gp",
        description: "Spare rudder for small to mid-sized boat."
      },
      {
        name: "Buoy Marker",
        price: "3 gp",
        description: "Floats on water to mark a location or hazard."
      }
    ],
    wealthy: [
      {
        name: "Fine Silk Sail (resists tearing)",
        price: "50 gp",
        description: "Lightweight, catches wind easily, decorative."
      },
      {
        name: "Exquisite Anchor (engraved crest)",
        price: "20 gp",
        description: "Polished steel with an ornate family seal."
      },
      {
        name: "Navigation Tools (compass, sextant, charts)",
        price: "50 gp",
        description: "Essential for long sea voyages, professional grade."
      },
      {
        name: "Gilded Figurehead (small, for personal skiff)",
        price: "75 gp",
        description: "Carved wooden figure, gold leaf details."
      },
      {
        name: "High-Quality Rigging Rope (treated for storms)",
        price: "10 gp",
        description: "Resistant to fraying under strong winds."
      },
      {
        name: "Seawater-Resistant Wood Planks (magically sealed)",
        price: "15 gp each",
        description: "Stops rotting or barnacles, ideal for hull patches."
      },
      {
        name: "Ornate Oar with Inlaid Pearl",
        price: "10 gp",
        description: "Fancy sculling oar, functional but mostly decorative."
      },
      {
        name: "Miniature Rowboat (folding magical contraption)",
        price: "250 gp",
        description: "Transforms into a full-size rowboat on command."
      },
      {
        name: "Carved Helm Wheel (rare hardwood)",
        price: "75 gp",
        description: "Durable, with decorative carvings on spokes."
      },
      {
        name: "Reinforced Hull Sections (adamantine rivets)",
        price: "100 gp each",
        description: "Increased durability, advanced forging techniques."
      }
    ]
  },

  library: {
    poor: [
      {
        name: "Tattered Scroll of Old Folk Tales",
        price: "5 cp",
        description: "Legends nearly illegible, pages torn."
      },
      {
        name: "Water-Damaged Spellbook (unusable spells)",
        price: "1 sp",
        description: "Ruined arcane text, only a few words remain."
      },
      {
        name: "Worm-Eaten Herbal Guide (missing pages)",
        price: "1 sp",
        description: "Some text about local plants, half are gone."
      },
      {
        name: "Charcoal Sticks for Writing",
        price: "5 cp",
        description: "Basic writing medium, smudges easily."
      },
      {
        name: "Cracked Reading Glasses (low prescription)",
        price: "1 sp",
        description: "Barely helps with fine print, lens chipped."
      },
      {
        name: "Pile of Unsorted Parchments (rumor scraps)",
        price: "2 sp",
        description: "Could contain interesting rumors or gossip."
      },
      {
        name: "Book on Local Tax Laws (outdated)",
        price: "5 cp",
        description: "Irrelevant, might be used for kindling."
      }
    ],
    average: [
      {
        name: "Basic Spell Scroll (1st-level, random)",
        price: "50 gp",
        description: "One-use 1st-level spell, typically utility or damage."
      },
      {
        name: "History of a Nearby Kingdom (complete volume)",
        price: "5 gp",
        description: "Well-preserved chronicle of local region’s past."
      },
      {
        name: "Dictionary of Draconic (beginner level)",
        price: "10 gp",
        description: "Teach yourself basic draconic phrases."
      },
      {
        name: "Atlas of Local Regions",
        price: "5 gp",
        description: "Maps of various towns, roads, and landmarks."
      },
      {
        name: "Book on Herbal Remedies (detailed sketches)",
        price: "8 gp",
        description: "Describes medicinal plants, occasionally references potions."
      },
      {
        name: "Quill & Ink Set (standard)",
        price: "2 gp",
        description: "Feather quill and small vial of black ink."
      },
      {
        name: "Genealogy Records of Noble Families",
        price: "3 gp",
        description: "Pedigrees and lines of succession for local nobility."
      },
      {
        name: "Ritual Candles for Reading at Night",
        price: "1 gp",
        description: "Slow-burning, smokeless candles."
      },
      {
        name: "Scroll of Arcane Lore (vague references)",
        price: "20 gp",
        description: "Hints at deeper magic, requires research to decode."
      },
      {
        name: "General Bestiary (common creatures)",
        price: "5 gp",
        description: "Lists stats & habits of basic beasts/monsters."
      }
    ],
    wealthy: [
      {
        name: "Rare Illuminated Manuscript (religious text)",
        price: "100 gp",
        description: "Gilded edges, hand-painted scenes of saintly tales."
      },
      {
        name: "Spell Scroll (2nd or 3rd-level, random)",
        price: "100–200 gp",
        description: "One-use advanced spell, price depends on level."
      },
      {
        name: "Treatise on Planar Travel (highly sought-after)",
        price: "150 gp",
        description: "Discusses portals, demiplanes, planar beings."
      },
      {
        name: "Lexicon of Ancient Runes (comprehensive)",
        price: "200 gp",
        description: "Deep research into runic scripts, invaluable to wizards."
      },
      {
        name: "Book of Extraplanar Flora (hand-painted diagrams)",
        price: "75 gp",
        description: "Exotic plant references from Feywild, Shadowfell, etc."
      },
      {
        name: "Quill of Endless Ink (fine calligraphy tip)",
        price: "50 gp",
        description: "Never runs dry, excellent for scribes."
      },
      {
        name: "Bound Encyclopedia of Mythic Creatures",
        price: "80 gp",
        description: "Describes rarer monsters, rumored to be partially accurate."
      },
      {
        name: "Historical Tome Signed by a Legendary Hero",
        price: "150 gp",
        description: "Autographed volume from a revered knight or champion."
      },
      {
        name: "Private Journal of a Famous Archmage (encrypted)",
        price: "200 gp",
        description: "Arcane cipher; cracking it might reveal powerful secrets."
      },
      {
        name: "Scroll of Rare Ritual (partial translation needed)",
        price: "250 gp",
        description: "Requires significant arcana checks to complete."
      }
    ]
  },

  pets: {
    poor: [
      {
        name: "Mangy Cat (flea-ridden)",
        price: "3 sp",
        description: "Scraggly fur, needs care; can catch rats in a pinch."
      },
      {
        name: "Scrawny Dog (friendly but underfed)",
        price: "5 sp",
        description: "Eager to bond, but lacks training."
      },
      {
        name: "One-Eyed Rat (pet-friendly, slightly timid)",
        price: "2 sp",
        description: "Used to being handled, missing an eye."
      },
      {
        name: "Old Rooster (barely crows)",
        price: "1 sp",
        description: "Past prime, occasionally crows at odd hours."
      },
      {
        name: "Tiny Lizard (missing tail)",
        price: "1 sp",
        description: "Tail may regrow eventually, easy to keep in a small cage."
      },
      {
        name: "Cracked Birdcage (for small birds)",
        price: "2 sp",
        description: "Functional but flimsy, might need repairs."
      }
    ],
    average: [
      {
        name: "Healthy Cat (good mouser)",
        price: "5 gp",
        description: "Active cat, adept at hunting small vermin."
      },
      {
        name: "Faithful Hound (common breed)",
        price: "25 gp",
        description: "Trainable dog, loyal companion."
      },
      {
        name: "Tame Rat (intelligent, used to humans)",
        price: "2 gp",
        description: "Knows simple commands, good pocket pet."
      },
      {
        name: "Colorful Parakeet (chirpy)",
        price: "5 gp",
        description: "Bright feathers, can mimic some sounds."
      },
      {
        name: "Basic Falconry Glove (no falcon)",
        price: "3 gp",
        description: "Protective glove for handling birds of prey."
      },
      {
        name: "Songbird in a Simple Cage",
        price: "10 gp",
        description: "Pleasant chirps, basic wire cage included."
      },
      {
        name: "Rabbit (fluffy, docile)",
        price: "1 gp",
        description: "Cute pet, easily cared for, breed for fur or food."
      },
      {
        name: "Goat (provides milk)",
        price: "2 gp",
        description: "Stubborn but yields fresh milk daily."
      },
      {
        name: "Piglet (eats scraps)",
        price: "1 gp",
        description: "Grows quickly, can be used for truffle hunting if trained."
      }
    ],
    wealthy: [
      {
        name: "Exotic Singing Bird (rare plumage)",
        price: "50 gp",
        description: "Melodic calls, vibrant feathers sought by collectors."
      },
      {
        name: "Trained Hunting Falcon (obedient to commands)",
        price: "100 gp",
        description: "Well-trained raptor, hunts small game, responds to signals."
      },
      {
        name: "Miniature Pony (show breed)",
        price: "60 gp",
        description: "Too small to ride by adults, but prized for cuteness."
      },
      {
        name: "Elven-Bred Cat (remarkably graceful)",
        price: "25 gp",
        description: "Slender build, rumored to sense minor magic."
      },
      {
        name: "Mage-Bred Lapdog (unnaturally smart)",
        price: "40 gp",
        description: "Understands basic instructions, borderline magical intelligence."
      },
      {
        name: "Peacock with Glittering Feathers",
        price: "30 gp",
        description: "Displays a dazzling tail, symbol of status."
      },
      {
        name: "Fox with Oddly Colored Fur (blueish tint)",
        price: "35 gp",
        description: "Unique pelt, mild cunning, trainable to an extent."
      },
      {
        name: "Trained Monkey (can fetch small items)",
        price: "20 gp",
        description: "Clever, entertaining, can perform minor tasks."
      },
      {
        name: "Exotic Snake with Gleaming Scales (docile to caretaker)",
        price: "25 gp",
        description: "Non-venomous or defanged, mesmerizing patterns."
      },
      {
        name: "Mystical Fish in Enchanted Bowl (glows faintly at night)",
        price: "40 gp",
        description: "A curious pet, water shimmers with minor magic."
      }
    ]
  }
};

window.shopItems = shopItems;
window.commonLootTable = commonLootTable;
window.rareLootTable = rareLootTable;




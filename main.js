
/* ================ TAB HANDLING ================ */
function openTab(tabId) {
  const tabs = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  document.getElementById(tabId).classList.add("active");
}

/* ================ DUNGEON GENERATION ================ */

window.onload = function() {
    document.getElementById("generateDungeonBtn").addEventListener("click", generateDungeon);
};

const dungeonPuzzles = [
  "A riddle inscribed on the wall, requiring the correct answer to proceed",
  "A set of levers, but only one opens the way while the rest trigger traps",
  "A giant chessboard that must be navigated in a specific pattern",
  "A door with four slots, requiring colored gems found in previous rooms",
  "A statue missing a piece, which must be retrieved from another part of the dungeon",
  "A musical puzzle that plays a tune which must be replicated to unlock a door",
  "A rotating floor with a hidden sequence that aligns doors correctly",
  "A painting with missing parts; the correct objects must be placed in the gaps",
  "A series of magical orbs that must be lit in the correct order",
  "A weight-based puzzle, requiring balancing objects of different sizes",
  "A talking gargoyle that demands a truthful answer to a moral dilemma",
  "A floating bridge that only appears when the correct rune is pressed",
  "A clock puzzle where time must be set to a specific hour",
  "A set of statues that must be placed in a historical order",
  "A puzzle that requires a player to mimic an ancient battle strategy",
  "A memory-based challenge involving flipping magical runes in sequence",
  "A wall with a strange indentation, requiring a handprint of a fallen hero",
  "A water puzzle that involves filling containers to reach the correct weight",
  "A door that only opens if no one is looking at it",
  "A magical mirror that reveals a hidden pattern when light is shone on it",
  "A phrase must be spoken backward to unlock the passage",
  "A sliding tile puzzle depicting an ancient war scene",
  "A set of musical chimes that must be played in a specific order",
  "A room where the floor tiles change color, and only a safe path exists",
  "A large spinning wheel that reveals different symbols—matching them is key",
  "A cursed bookshelf—removing the wrong book summons an enemy",
  "A shifting labyrinth—doors appear and disappear based on movement",
  "A frozen door that only melts when held by a fire elemental",
  "A puzzle requiring a sacrifice—blood, an item, or a memory",
  "A ghostly spirit that offers a clue in exchange for a secret",
  "A golden door that opens when a lie is told",
  "A statue that must be turned to face the correct direction",
  "A room where shadows indicate the correct lever to pull",
  "A magical echo that repeats words, but hides the correct answer in distortion",
  "A cursed compass that only points toward danger, requiring deception to solve",
  "A puzzle where players must step in the footprints of an invisible entity",
  "A bridge that extends only when a secret is whispered to the walls",
  "A battle of wits against an ancient spirit who challenges the party",
  "A doorway that leads nowhere until an ancient poem is recited",
  "A pattern in the cracks of the floor that forms a hidden phrase",
  "A collection of ancient sigils that must be matched to their meaning",
  "A staircase that only appears when players move backward",
  "A riddle that, if answered incorrectly, teleports the party to another room",
  "A set of bells—only one plays a pure tone, and it must be found",
  "A book of riddles that demands the correct response to turn its pages",
  "A statue missing an eye—placing a gemstone in its socket opens a path",
  "A shadow that moves independently, pointing toward the correct solution",
  "A word puzzle where letters must be rearranged to spell a hidden phrase",
  "A wall of moving bricks—only certain sequences form a door",
  "A room where stepping on certain tiles changes gravity",
  "A magical illusion that makes the correct path appear false",
  "A guardian spirit that demands an oath before allowing passage",
  "A table set for a feast—only by sitting in the correct chair does the way open",
  "A sequence of torches that must be lit in a particular pattern",
  "A secret code hidden in ancient poetry carved into the walls",
  "A puzzle where a statue mimics the party’s actions, and only specific gestures work",
  "A trap disguised as a puzzle—solving it incorrectly floods the room",
  "A maze of mirrors—finding the correct reflection is the key",
  "A shifting stairwell that moves when a correct phrase is spoken",
  "A riddle inscribed on a weapon that must be used in a specific way",
  "A crystal that glows when near the correct solution",
  "A test of trust—one player must blindfold themselves and be guided through",
  "A chasm that can only be crossed if faith is shown (illusory floor)",
  "A time-based puzzle requiring all players to act simultaneously",
  "A sleeping guardian that awakens if the wrong item is touched",
  "A massive sundial that must be manipulated to unlock a secret",
  "A giant hourglass—flipping it resets the dungeon unless solved quickly",
  "A song must be played on an ancient flute to reveal the exit",
  "A painting that, if touched, turns into a living entity that must be questioned",
  "A floor puzzle where different players must stand on different symbols",
  "A hidden panel in the floor that reveals a crucial key",
  "A pair of identical doors—one leads forward, one leads to danger",
  "A puzzle involving weighing enchanted objects on a scale",
  "A magical inscription that changes when read from different angles",
  "A test of sacrifice—leaving behind an important item is required to proceed",
  "A stone that emits whispers in an ancient tongue, hinting at the solution",
  "A mural depicting a prophecy—the adventurers must place themselves correctly",
  "A puzzle requiring the completion of an ancient poem",
  "A chamber where only truth can be spoken, or the way is blocked",
  "A glowing rune that must be traced in the air to activate a passage",
  "A magical storm cloud that crackles when the correct path is near",
  "A puzzle where players must swap roles—only by pretending to be each other can they proceed",
  "A dark room where sound is the only guide—no vision allowed",
  "A floating key that moves away when approached incorrectly",
  "A river that only flows backward, and must be crossed in reverse",
  "A locked door with ancient locks—each requiring a different type of key",
  "A cursed door—only by walking through it backwards can it be safely passed",
  "A puzzle where emotions influence the surroundings",
  "A mysterious code that, when deciphered, reveals the dungeon’s true nature"
];


const dungeonThemes = [
  "Ancient Ruins of a Forgotten Civilization",
  "Cursed Caverns Infested with Undead",
  "Twisted Eldritch Labyrinth Beyond Time",
  "Underground Fortress of a Lost Kingdom",
  "Collapsed Temple of a Long-Forgotten God",
  "An Abandoned Mine Overrun by Shadow Creatures",
  "A Floating Dungeon Suspended in a Stormy Void",
  "A Prison for Fallen Gods, Their Chains Still Rattle",
  "A Dungeon Carved Into the Skeleton of a Titanic Beast",
  "A Library That Holds Forbidden Knowledge, Guarded by Arcane Sentinels",
  "A Citadel of Crystal That Absorbs the Souls of the Fallen",
  "A Battlefield Frozen in Time, the Combatants Locked in Eternal Struggle",
  "An Ever-Burning Pyre Where the Dead Walk Among the Flames",
  "A Forgotten Burial Ground of an Ancient Empire, Now a Haven for the Restless",
  "A Realm That Exists in Both Dreams and Reality",
  "A Temple That Was Swallowed by the Earth, Its Deities Now Twisted and Malevolent",
  "An Undersea Labyrinth, Home to Eldritch Terrors",
  "A City That Once Stood Proud, Now Sunk Beneath an Unholy Swamp",
  "A Mirror World Dungeon, Where Reflections Are Deadly",
  "A Nesting Ground for Beasts That Defy All Logic",
  "A Dungeon That Exists Outside of Time, Constantly Changing Its Layout",
  "A Sunken Cathedral, Its Bells Still Tolling Despite No One Ringing Them",
  "A Tower That Descends Into the Core of the Planet",
  "A Cursed Arena, Where Fallen Champions Are Forced to Battle for Eternity",
  "A Floating Island Fortress That Moves Across the Skies",
  "A Warped Feyrealm, Where Every Step Warps Reality",
  "An Ancient Observatory Where the Stars Whisper Secrets",
  "A Volcanic Dungeon Where Magma Spirits Guard Its Forbidden Knowledge",
  "An Unfinished Temple, Its Carvings Depicting a Future Yet to Happen",
  "A Cursed Battlefield, Where the Fallen Can Still Be Heard Screaming",
  "An Endless Staircase, Leading Deeper Than It Should",
  "A City Beneath the Ice, Its Inhabitants Long Frozen but Still Watching",
  "A Dungeon That Expands With Each Death That Occurs Inside It",
  "A Hidden Laboratory of a Long-Dead Alchemist",
  "A Jungle Temple Overgrown by Sentient Vines",
  "A Gigantic Beehive, Home to Swarms of Aggressive, Intelligent Insects",
  "A Graveyard That Exists in Two Dimensions at Once",
  "A Mountain Fortress Where the Wind Carries the Voices of the Lost",
  "A Desert Ruin That Appears Only Under a Blood Moon",
  "A Collapsed Cathedral, Its Stained Glass Windows Floating in the Air",
  "A Dungeon Inside the Skeleton of a Giant Dragon",
  "A Haunted Clock Tower, Each Bell Chime Summoning a Ghostly Entity",
  "An Endless Sea of Black Sand, With Obelisks Marking the Way",
  "A Dungeon That Only Appears to Those Who Are Cursed",
  "A City Built on a Colossal Floating Rock, Slowly Crumbling",
  "A Prison Made of Glass, Holding Beings from Beyond Reality",
  "A Dungeon Created by a Mad Wizard’s Nightmares",
  "A Battlefield Where the War Never Ended, Undead Soldiers Marching Forever",
  "A Palace Where Time Flows Backward",
  "A Kingdom of Ice, Ruled by a Queen Who Can Never Die",
  "A Great Forge Where Weapons Are Tempered in the Blood of the Slain",
  "An Unstable Rift Between the Mortal and Spirit Worlds",
  "A Tomb That Changes Layout Whenever Someone Dies Inside It",
  "A Ship That Has Been Sailing in a Storm for 1,000 Years",
  "A Deserted War Camp, Its Soldiers Turned to Stone",
  "A Blood-Red Lake, Hiding Something Monstrous Beneath Its Surface",
  "A Forgotten Observatory, Now Used for Dark Rituals",
  "A Monastery Where the Monks Have Been Possessed by Something Foul",
  "A Doomed Kingdom's Vault, Sealed to Prevent Something From Escaping",
  "A Floating Fortress of Elementals, Ever-Shifting with the Winds",
  "A Dungeon Where Magic Ceases to Work",
  "A Hollowed-Out Mountain Where Giants Once Resided",
  "A City That Exists Only at Dusk",
  "A Maze That Reacts to the Thoughts of Those Inside",
  "A Tower That Collapses and Rebuilds Itself Every Full Moon",
  "A Dungeon Where Reality Warps, Creating Impossible Spaces",
  "A Castle in the Clouds, Accessible Only Through Lightning Strikes",
  "A Prison Where the Inmates Were Once Gods",
  "A Gigantic Clockwork Dungeon, Gears and Levers Always Moving",
  "A Dungeon Where No Sound Can Be Heard",
  "A Frozen Battlefield, Where the Dead Wait for the War to Resume",
  "A Collapsed Dwarven City, Its Founders Now Turned to Stone",
  "A Dungeon Carved Into a Colossal Tree, Its Roots Twisting Through Reality",
  "A Monastery That Exists in Both the Mortal and Spirit Worlds",
  "A Library of Cursed Knowledge, Every Book a Door to Another Realm",
  "A Ruined Outpost, Guarded by Statues That Move When Unseen",
  "A Lost City That Exists Between Waking and Dreaming",
  "A Dungeon That Has Been Growing, Feeding on the Nightmares of the Nearby Villagers",
  "A Castle That Rebuilds Itself Each Night and Crumbles at Dawn",
  "A Black Pyramid That Moves Through the Desert on Its Own",
  "A Village That Sank Into the Earth, Its Homes Now Twisted Corridors",
  "A Prison That Exists Across Multiple Timelines",
  "A Fortress Built Around an Unkillable Beast, Keeping It Sealed Away",
  "A Chasm That Leads Straight Into the Underworld",
  "A Colossal Worm's Burrow, Its Tunnels Unstable and Collapsing",
  "A Dungeon That Consumes Those Who Linger Too Long",
  "A Floating Black Obelisk, Rumored to Be a Gateway to Another Universe",
  "A Ruined Kingdom Encased in Eternal Ice",
  "A Sprawling Necropolis, Home to Thousands of Sentient Undead",
  "A Vault Filled with Infinite Mirrors, Each Reflecting a Different Reality",
  "A Dungeon That Exists Between Heartbeats, Accessible Only to the Dying",
  "A Labyrinth That Rearranges Its Walls Every Hour",
  "A Tower That Can Be Climbed From Either Direction",
  "A Dungeon Where Every Room Is Inhabited by a Ghost from a Different Era",
  "A Place Where Reality Has Been Torn Apart, Leaving Only Fragments",
  "A Fortress Built on the Corpse of a Fallen God",
  "A Hidden Realm Where the Laws of Physics No Longer Apply",
  "A Dungeon That Appears Differently to Each Who Enter It",
  "A Living Dungeon, Its Walls Pulsing Like Flesh",
  "A Graveyard for Forgotten Deities, Their Tombs Sealed With Ancient Runes",
  "A Labyrinth That Feeds on the Sanity of Those Who Enter",
  "A Gigantic Mushroom Forest, Its Growth Uncontrollable",
  "A Lost Ship Graveyard, Haunted by the Souls of Those Who Drowned",
  "A Tower of Endless Stairs, No One Knows What Lies at the Top"
];


const dungeonFactions = [
  "Cult of the Eternal Flame",
  "The Lost Legion of the Damned",
  "Demonic Inhabitants from Another Realm",
  "Ancient Mechanical Guardians",
  "The Ghostly Remnants of a Betrayed King",
  "The Cult of the Sunken One",
  "A Hive Mind of Shadow Creatures",
  "The Necromancer's Disciples",
  "The Crimson Fang Bandits",
  "An Underground Society of Assassins",
  "The Wardens of the Forgotten Vault",
  "A Legion of Cursed Knights",
  "The Ashen Order, Worshippers of Fire",
  "An Intelligent Swarm of Mutant Insects",
  "The Mind Slaves of an Ancient Lich",
  "The Rotten Fangs, a Tribe of Cannibalistic Orcs",
  "A Forgotten Sect of the Celestial Order",
  "The Bone Collectors, Worshippers of Death",
  "The Blood Moon Cult, Preparing for a Dark Ritual",
  "An Army of Possessed Suits of Armor",
  "A Forgotten Elven House Turned to Madness",
  "The Lost Architects of the Endless Labyrinth",
  "A Court of Vampires Seeking a Lost Relic",
  "A Cabal of Warlocks Trying to Unleash a Demon",
  "The Faceless Brotherhood, Worshippers of an Unknown God",
  "A Prison for Celestial Beings Who Fell from Grace",
  "The Whispering Shadows, Assassins That Hunt for Sport",
  "The Rusted Guard, Golems Gone Rogue",
  "The Jade Serpent Clan, A Mafia Hidden Below the City",
  "A Tribe of Lizardfolk Who Worship a Forgotten Titan",
  "A Cult of Sorcerers Trapped in Their Own Magical Ward",
  "The Venom Fang Assassins, Poison Masters of the Abyss",
  "The Starborn Prophets, Seeking to Merge Reality with the Cosmos",
  "A Brotherhood of Undead Pirates, Bound to Their Cursed Ship",
  "The Weavers of Fate, Spiders Who Speak in Tongues",
  "The Crimson Heralds, Foretellers of Doom",
  "A Faction of Fallen Paladins, Still Believing They Are Just",
  "The Stoneborn, Creatures of Rock Who Guard the Dungeon’s Core",
  "The Keepers of the Moon Seal, Guardians of an Ancient Gate",
  "A Tribe of Shapechangers Living in the Dungeon’s Walls",
  "The Blood Pact, Demonic Binders and Summoners",
  "A Secret Wizard Conclave Conducting Forbidden Experiments",
  "The Masked Syndicate, Criminal Lords Ruling the Dungeon’s Depths",
  "A Band of Failed Heroes, Turned to Madness by the Dungeon",
  "A Circle of Druids Who Have Become One With the Dungeon",
  "A Family of Sentient Golems Searching for Their Creator",
  "The Forgotten Kings, Undead Rulers from an Ancient War",
  "The Silver Fangs, A Werewolf Pack Claiming the Dungeon as Their Den",
  "The Cult of the Drowned God, Those Who Have Given Themselves to the Deep",
  "The Black Hand, A Mercenary Group That Never Leaves Survivors",
  "A Ghostly Army Bound to Relive the Same Battle for Eternity",
  "The Unbound Spirits, Once Slaves, Now Seeking Revenge",
  "The Frozen Terrors, Creatures of Ice That Hunger for Warmth",
  "A Lost Tribe of Fey, Trapped in the Mortal World",
  "The Fleshcraft Masters, Experimenting on Themselves to Achieve Perfection",
  "A Silent Army of Statues That Move When Not Observed",
  "The Forbidden Choir, Singing Songs That Warp the Mind",
  "The Shadowborn, Children of a Forgotten God of Nightmares",
  "A Group of Exiled Sorcerers, Each More Mad Than the Last",
  "The Blind Seers, Prophets Who See Only the Future",
  "A Clan of Minotaurs, Lost in Their Own Maze",
  "The Hollow Ones, Beings Without Faces or Names",
  "The Crimson Lotus, A Sect of Monks Who Crave Death in Battle",
  "The Cult of the Shattered Mirror, Seeking to Escape Reality Itself",
  "The Blackstone Engineers, Constructing Machines of War Beneath the Earth",
  "The Order of the Broken Chain, Slaves Who Overthrew Their Masters",
  "The Dustborn, Beings That Emerge from the Ash of the Dead",
  "A Forgotten Sect of the Arcane College, Lost in Their Studies",
  "The Bloodied Feathers, A Tribe of Harpies That Drink the Blood of Their Prey",
  "The Lords of the Hollow Crown, Wearing Masks of Bone and Gold",
  "A Faction of Tieflings Who Seek to Open a Portal to Their Ancestral Realm",
  "The Black Fang Pack, Dire Wolves That Speak in Riddles",
  "The Keepers of the Cursed Flame, Carrying Torches That Never Burn Out",
  "A Coalition of Adventurers Who Entered the Dungeon and Never Left",
  "The Ghostlight Scholars, Those Who Study the Dead by Becoming Them",
  "A Hive of Undead Wasps, Nesting in the Bones of the Fallen",
  "The Architects of the Eternal Spiral, A Cult That Worships the Infinite",
  "The Abyss Watchers, Warriors Bound to an Oath to Hunt the Undying",
  "A Hidden Colony of Vampires Living Among the Mortal Prisoners",
  "The Nameless Priests, Who Worship a God That No Longer Exists",
  "A Pack of Gnolls Who Have Eaten Their Own Gods",
  "The Skybound Cult, Worshippers of the Leviathan Above",
  "The Ashen Lords, Born from the Fires of a Forgotten War",
  "The Unshackled Titans, Giants Who Lost Their Kingdoms but Not Their Pride",
  "A Village of Humans Who Have Been Living in the Dungeon for Centuries",
  "The Immortal Scholars, Studying the Dungeon’s Secrets for Eons",
  "The Forsaken, Creatures Who Were Abandoned by Their Creators",
  "A Rogue AI Construct, Controlling a Mechanical Dungeon",
  "The Serpentine Cult, Seeking to Awaken a Sleeping Dragon Below",
  "The Frostbitten, Survivors of a War That Ended in Eternal Winter",
  "The Sunless Lords, Nobles Who Banished the Light to Claim Power",
  "A Guild of Thieves Who Use the Dungeon as Their Base of Operations",
  "The Devourers, Beasts That Absorb the Memories of Those They Eat",
  "The Clockwork Legion, Golems With a Mission They No Longer Remember",
  "The Eternal Eclipse, A Cult That Worships Darkness Incarnate",
  "A Celestial Prison Guarded by Angelic Wardens"
];


const dungeonRooms = [
  "A grand hall filled with decayed tapestries and skeletal remains",
  "A flooded chamber where glowing runes pulse beneath the water",
  "A crumbling corridor with collapsed pillars blocking some paths",
  "A prison cell with the bones of a long-forgotten prisoner",
  "A vast library filled with ancient tomes, many trapped with arcane energy",
  "A pit filled with writhing shadows that whisper in unknown tongues",
  "A vault containing a legendary weapon sealed behind magical barriers",
  "A circular room with an ominous altar dedicated to an unknown entity",
  "A massive stone bridge stretching across an abyss with no visible bottom",
  "A throne room, the ruler’s corpse still seated upon their gilded chair",
  "A chamber where statues of warriors stand at attention, as if waiting for orders",
  "A marketplace frozen in time, its merchants turned to stone mid-transaction",
  "A coliseum filled with skeletal spectators and a spectral announcer",
  "A tunnel covered in bioluminescent moss that pulses with life",
  "A dining hall where an eternal feast rots atop golden plates",
  "A sleeping chamber with beds still neatly made, dust covering everything",
  "A war room with maps detailing battles that never happened",
  "A ruined cathedral where the stained-glass windows whisper forgotten prayers",
  "A frozen cave where something massive sleeps beneath the ice",
  "A hall of mirrors where reflections move independently",
  "A chamber with a single chair facing an empty painting",
  "A cavern filled with countless broken weapons and shattered armor",
  "A temple devoted to a long-dead god, whose name has been scratched out",
  "A forge where an unfinished sword glows faintly with magical energy",
  "A burial ground, the corpses having dug their way out",
  "A bubbling tar pit that erupts with foul-smelling fumes",
  "A chamber covered in murals depicting a battle that never ended",
  "A room that appears to stretch infinitely, but walking forward reveals it as an illusion",
  "A tomb with a single, unopened sarcophagus standing in the center",
  "A mushroom-filled cavern, some fungi glowing, others whispering softly",
  "A treasure hoard surrounded by long-dead adventurers, their weapons still drawn",
  "A sunken hall where furniture floats eerily in midair",
  "A pit of bones that shifts as if something massive is underneath",
  "A collapsed hallway, ancient carvings barely visible under the rubble",
  "A chamber where the walls appear to breathe slowly",
  "A clockwork lab where gears continue to turn with no power source",
  "A vault of enchanted books, some floating in the air as if mid-read",
  "A waterfall that flows upward, disappearing into the ceiling",
  "A battlefield where spirits of fallen warriors reenact their last moments",
  "A vast chasm where chains hang, leading to unseen platforms below",
  "A chamber covered in melted wax and extinguished candles",
  "A forge where weapons repair themselves when placed on an anvil",
  "A graveyard where gravestones change their inscriptions each time they're read",
  "A throne room where a ghostly king still commands an invisible army",
  "A room where gravity shifts every few minutes",
  "A chamber of mirrors, where reflections whisper warnings",
  "A library where books scream when opened",
  "A hall filled with countless empty suits of armor",
  "A garden of petrified plants, frozen mid-bloom",
  "A clock tower whose bells toll randomly, causing strange occurrences",
  "A spiral staircase leading downward, but never seeming to reach an end",
  "A flooded corridor where something moves beneath the water",
  "A hall where paintings shift and change based on the viewer",
  "A prison filled with the bones of creatures that don’t belong in this world",
  "A colossal forge, its fires long extinguished",
  "A temple where shadows move even when no one does",
  "A dining room where the food is fresh, but untouched for centuries",
  "A maze of twisting corridors that lead back to the start unexpectedly",
  "A room with an old wooden door that opens to a different location each time",
  "A graveyard of mechanical beings, rusted and broken",
  "A crypt where the names on the tombstones match the adventurers’ names",
  "A cave where glowing fish swim through the air instead of water",
  "A library where books rewrite themselves as they’re being read",
  "A chamber with a stone pedestal holding a glowing, humming orb",
  "A floating walkway suspended in a void of stars",
  "A chamber where the walls shift slightly each time it’s left unattended",
  "A hidden vault where treasure turns to dust if touched",
  "A spiral hallway that bends in impossible angles",
  "A vast hall of statues, each one holding something real in their hands",
  "A garden where trees whisper secrets when the wind blows",
  "A clockwork dungeon, where doors open and close on a timed cycle",
  "A temple where golden statues watch with hollow eyes",
  "A chamber of endless doors, only one of which leads to freedom",
  "A throne room filled with skeletal nobles still locked in conversation",
  "A temple of floating candles that flicker as if whispering to each other",
  "A room where adventurers appear as different versions of themselves in reflections",
  "A catacomb of coffins, each rattling as if something wants out",
  "A frozen lake, with something massive frozen just beneath the surface",
  "A torture chamber where ghostly cries still echo",
  "A hall where wind howls, even though there is no source for it",
  "A ruin where the air smells of sulfur and distant screams",
  "A massive crystal cavern, humming softly with magic",
  "A courtroom where phantom voices argue an endless trial",
  "A colosseum where statues watch expectantly",
  "A nursery with rotted cribs, music faintly playing from nowhere",
  "A vast bridge where half of it is missing, leading into darkness",
  "A sunken temple where glowing jellyfish float through the water",
  "A battlefield where weapons stand upright, planted into the ground",
  "A collapsing hallway where time seems to slow down",
  "A floating island, barely held together by twisted roots",
  "A tower where each floor contains a different part of a story being told",
  "A vault where paintings come to life if stared at too long",
  "A room with a single candle that never goes out, no matter what"
];

const dungeonTraps = [
  "A pressure plate triggers a volley of poison darts",
  "A collapsing floor reveals a hidden spike pit",
  "A series of shifting walls force adventurers into different corridors",
  "A magical sigil, when disturbed, summons a spectral guardian",
  "A false treasure chest explodes, revealing a horde of cursed gold",
  "A ceiling-mounted flamethrower activates when weight is detected",
  "A hallway fills with toxic gas when a door is opened",
  "An invisible barrier seals the room until a riddle is answered correctly",
  "A giant rolling boulder drops from the ceiling",
  "A floating orb emits waves of force that push intruders back",
  "A cursed mirror reflects attacks back at the attacker",
  "A book on a pedestal releases a swarm of flesh-eating insects when opened",
  "A pit of quicksand disguised as solid stone",
  "A pressure plate releases a hidden blade from the wall",
  "A floor tile electrocutes anyone who steps on it",
  "A statue animates and swings its massive stone sword",
  "A rope bridge snaps if more than one person crosses at a time",
  "A hidden magical rune locks all doors until an ancient song is played",
  "A corridor narrows into a crushing vice if not passed quickly",
  "A giant bell rings when the door is opened, alerting all nearby enemies",
  "A hallway lined with suits of armor that animate when disturbed",
  "A door handle coated with contact poison",
  "A spike trap that shoots upward when weight is applied",
  "A room that slowly fills with sand when entered",
  "A spectral voice whispers false directions, leading travelers astray",
  "A teleportation trap sends adventurers back to the start of the dungeon",
  "A magical illusion hides a deep pit in the floor",
  "A cursed gemstone glows with warmth but drains the lifeforce of those who hold it",
  "A hidden rune causes gravity to reverse when stepped on",
  "A hallway of mirrors, one of which contains a trapped entity",
  "A tripwire releases a net covered in paralyzing venom",
  "A door locked by a puzzle that summons enemies with every wrong attempt",
  "A fountain of healing water that turns to acid when touched",
  "A spectral figure that mimics an ally but subtly leads adventurers into danger",
  "A room of floating platforms that crumble after being stepped on",
  "A cursed scroll that, when read, summons a wrathful spirit",
  "A golden idol that compels greed in those who look upon it",
  "A mimic disguised as an ordinary object in the room",
  "A stairwell that seems to go down infinitely unless a secret phrase is spoken",
  "A magical darkness that cannot be dispelled by normal light",
  "A glowing orb that drains magic from anyone who touches it",
  "A harp that plays on its own, putting intruders to sleep",
  "A corridor filled with floating weapons that attack randomly",
  "A giant serpent made of chains that animates when provoked",
  "A doorway that ages those who pass through it by decades",
  "A shifting maze that rearranges itself when no one is looking",
  "A room where walls start closing in after a timer begins counting down",
  "A poison mist that lingers in the air and numbs the senses",
  "A puzzle that requires placing bones in the correct order to open a passage",
  "A magical force that compels one adventurer to betray the group",
  "A cursed throne that entraps anyone who sits upon it",
  "A crystal that shatters when approached, releasing deadly ice shards",
  "A hallway filled with illusions of traps, but one is real",
  "A gravity trap that pulls everything toward the ceiling spikes",
  "A door that can only be opened by a key hidden inside a monster",
  "A mirror maze where reflections slowly take on lives of their own",
  "A teleporting arrow trap that fires from impossible angles",
  "A book that erases the memories of those who read it",
  "A sentient torch that screams when moved, alerting enemies",
  "A cursed amulet that attaches itself to whoever touches it",
  "A pit trap that leads to another plane of existence",
  "A floating lantern that, if extinguished, releases an ancient evil",
  "A corridor where time moves faster, causing aging",
  "A bridge that appears solid but vanishes halfway across",
  "A door that whispers false promises to those who approach",
  "A handprint scanner that seals a door shut forever if the wrong hand is placed",
  "A small treasure chest that explodes into a swarm of undead hands",
  "A brazier that emits an alluring, mind-controlling smoke",
  "A trap that swaps the bodies of two adventurers for a short time",
  "A cursed relic that temporarily strips away all magic",
  "A room where sound is completely silenced, preventing spellcasting",
  "A pillar that, when touched, triggers an earthquake in the room",
  "A pair of gauntlets that, when worn, force the wearer to attack their allies",
  "A floating, burning sword that fights on its own until defeated",
  "A doorway that vanishes as soon as someone walks through it",
  "A whispering skull that must be answered correctly or triggers a fireball",
  "A book of names that, when spoken aloud, summons its owner",
  "A bottomless pit that whispers in an unknown language",
  "A glowing rune that teleports someone into a monster's lair",
  "A sentient chain that attempts to bind and choke anyone nearby",
  "A treasure chest full of gold that turns into snakes when disturbed",
  "A well of water that, if drunk, causes temporary blindness",
  "A coffin that rattles violently but cannot be opened",
  "A bridge that tilts dangerously as more weight is applied",
  "A magical echo chamber that distorts sound and confuses adventurers",
  "A stone face embedded in the wall that asks riddles—answering wrong summons an enemy",
  "A massive hourglass that, when flipped, either helps or harms the party",
  "A statue that weeps golden tears—touching them causes instant petrification",
  "A hallway of floating orbs that fire lightning at random intervals",
  "A hidden pressure plate that summons shadow creatures",
  "A false ceiling that collapses, dropping heavy debris",
  "A doorway that leads to a clone of the adventurer who walks through first",
  "A shifting puzzle where incorrect moves summon ghosts",
  "A cursed bell that, when rung, attracts a dungeon boss",
  "A black ooze disguised as a pool of clean drinking water",
  "A spectral hand that grabs an adventurer and drags them into darkness",
  "A scroll that, when read, binds the reader to a demonic contract",
  "A golden goblet that compels whoever drinks from it to crave more"
];


const dungeonTreasures = [
  "A rusted key with ancient runes carved into its surface",
  "A small obsidian statue, unnaturally cold to the touch",
  "A golden chalice filled with eternally fresh blood",
  "A jeweled dagger, humming with dark energy",
  "An ancient map leading to a deeper level of the dungeon",
  "A cursed amulet that whispers the name of its previous owner",
  "A book that reveals a different story each time it is opened",
  "A silvered mirror that reflects creatures unseen by the naked eye",
  "A bag of holding filled with sand from another realm",
  "A candle that burns with a ghostly blue flame",
  "A set of dice that roll only sevens",
  "A golden egg that never hatches but occasionally moves",
  "A music box that plays melodies no one remembers",
  "A black pearl that pulses with faint energy",
  "A coin purse that refills with a single gold piece each day",
  "A cloak that changes color depending on the wearer's mood",
  "A bottle of ink that never runs out but writes in an unknown language",
  "A wooden staff carved with symbols of an unknown origin",
  "A pendant containing a frozen teardrop",
  "A cursed ring that makes the wearer invisible to friends but visible to enemies",
  "A necklace of enchanted wolf teeth, giving the wearer keen senses",
  "A sword with an edge so fine it can cut through shadows",
  "A broken pocket watch that occasionally ticks forward by one second",
  "A gemstone that glows when someone tells a lie",
  "A quill that writes on its own when placed on parchment",
  "A rusty gauntlet that grants immense strength at the cost of pain",
  "A bronze key that unlocks no known doors",
  "A potion bottle that refills with fresh water each sunrise",
  "A skull with glowing eyes that follow those who hold it",
  "A statue of a cat that always lands upright when dropped",
  "A shard of ice that never melts, even in fire",
  "A cursed deck of cards that changes the fate of those who draw from it",
  "A crown that grants visions of past rulers when worn",
  "A black ring that makes the wearer’s shadow act independently",
  "A bone flute that plays eerie, sorrowful tunes",
  "A pouch of silver dust that repels undead when thrown",
  "A mechanical bird that occasionally chirps secrets in an unknown tongue",
  "A dagger that drips with fresh blood but is never wet",
  "A stone that, when skipped across water, vanishes and reappears in the pouch",
  "A book of riddles that changes its answers depending on who reads it",
  "A lantern that glows brighter when danger is near",
  "A goblet that refills itself with the last liquid poured into it",
  "A belt that makes the wearer unnaturally nimble but weak",
  "A hammer that sparks with electricity when swung",
  "A string of beads, each one corresponding to a different emotion",
  "A feather quill that can write without ink but drains the writer’s energy",
  "A small hourglass that reverses time by one minute when flipped",
  "A pair of boots that leave no footprints",
  "A necklace with a single pearl, said to bring luck in dire situations",
  "A cursed monocle that reveals people's true intentions but blinds the user",
  "A silver spoon that makes any food taste like the eater’s favorite meal",
  "A hand mirror that shows a reflection one second in the future",
  "A wooden staff that sprouts flowers when placed in soil",
  "A coin that always lands on heads but causes mild bad luck",
  "A bag of tiny clockwork spiders that repair broken objects overnight",
  "A bracelet that grants a brief vision of the wearer’s future",
  "A candle that, when blown out, teleports the person to another location",
  "A key that unlocks any lock, but only once",
  "A bottle of enchanted perfume that attracts spirits",
  "A wand made from the branch of a long-dead tree, still warm to the touch",
  "A locket with a painting that changes every midnight",
  "A silvered bell that, when rung, summons an unseen force to assist the ringer",
  "A ring of unknown metal that always feels ice-cold",
  "A golden apple that never decays but cannot be eaten",
  "A piece of parchment that, when written on, sends messages into dreams",
  "A cloak that grants invisibility but makes footsteps impossibly loud",
  "A ruby with a swirling storm trapped inside",
  "A pair of gloves that allow the wearer to touch ghosts",
  "A small vial of liquid starlight",
  "A whistle that calls an unknown entity when blown",
  "A stone tablet with an unknown prophecy carved into it",
  "A playing card that shows a different suit every time it’s flipped",
  "A mask that allows the wearer to mimic another person’s voice",
  "A chain that cannot be broken by mortal hands",
  "A harp that plays haunting melodies when no one is looking",
  "A wooden spoon that always stirs in the correct direction",
  "A broken sword that whispers battle strategies in a forgotten tongue",
  "A crown of thorns that grants insight into others’ minds",
  "A violin that plays itself when placed in moonlight",
  "A drinking horn that can hold an infinite amount of liquid",
  "A seed that grows into a tree within seconds when planted",
  "A pearl that grants underwater breathing but steals the voice of the user",
  "A torn page from a book, glowing faintly with residual magic",
  "A bronze compass that always points to something the user needs",
  "A cursed dagger that hums a battle song before striking",
  "A tiny glass dragon that occasionally moves on its own",
  "A golden key that, when turned, opens a door to another world",
  "A mirror that shows the reflection of the person’s soul instead of their body",
  "A hammer that returns to the wielder’s hand when thrown",
  "A small vial containing a single drop of the ocean",
  "A book with blank pages that only reveal their contents under starlight",
  "A necklace of bone charms that whisper advice to the wearer",
  "A gemstone that glows whenever someone nearby is lying",
  "A skeletal hand that moves slightly when moonlight touches it",
  "A cloak woven from pure shadows",
  "A lantern filled with ghostly fire that never goes out",
  "A keyring holding several keys, but none seem to fit any known lock",
  "A silver coin that, when flipped, answers questions truthfully",
  "A statue of an owl with eyes that glow faintly when danger is near",
  "A bell made from dragon bone that rings in complete silence"
];


const dungeonMutations = [
  "The dungeon layout changes every few hours",
  "A creeping fog fills the corridors, distorting sound",
  "A sinister whispering can be heard, growing louder near certain rooms",
  "The walls pulse as if the dungeon itself is alive",
  "Every torch and lantern flickers with unnatural green flames",
  "A force compels adventurers to relive their worst memories",
  "Gravity is inconsistent, causing moments of floating and sudden falls",
  "The temperature fluctuates wildly between freezing and burning",
  "Shadows stretch and move on their own, even when no one is present",
  "Reflections in water and mirrors show different versions of reality",
  "Footsteps echo unnaturally, repeating long after people stop moving",
  "Every door leads to a different place each time it’s opened",
  "Time passes differently—minutes feel like hours, or vice versa",
  "Some rooms appear to be in perfect condition while others are ancient ruins",
  "The dungeon itself seems to be whispering secrets in an unknown language",
  "A faint heartbeat can be felt in the stone beneath your feet",
  "Doors sometimes vanish after being closed, leaving no way back",
  "The scent of flowers lingers in the air, despite no visible source",
  "A constant drizzle of blood falls from the ceiling in some rooms",
  "Illusions create false passageways and bridges over deadly pits",
  "Whenever someone speaks, their words appear as glowing text in the air",
  "The dungeon attracts storms, with thunder echoing through the halls",
  "Objects left on the ground move slightly when not being watched",
  "The walls are covered in ancient carvings that rearrange themselves daily",
  "Occasionally, ghostly figures can be seen reenacting past events",
  "Spells sometimes behave unpredictably, causing unintended effects",
  "The dungeon is filled with the sound of a ticking clock, but no clock is visible",
  "Occasionally, a loud knocking sound comes from nowhere",
  "Metal rusts and decays at an accelerated rate in this dungeon",
  "Water flows unnaturally, sometimes upward or in spirals",
  "Some objects exist in two places at once, appearing and disappearing randomly",
  "Glowing runes on the walls pulse in time with heartbeats",
  "Flickering lights cause brief glimpses of people who aren’t there",
  "A perpetual wind blows through the corridors, carrying distant voices",
  "Any attempt to map the dungeon results in shifting layouts",
  "Living creatures find their dreams invaded by the dungeon’s past inhabitants",
  "Torches burn brighter but cast no heat",
  "A thick mist clings to the floor, revealing shapes that disappear when approached",
  "Mushrooms and vines grow unnaturally fast, reclaiming rooms overnight",
  "Weapons occasionally slip from their wielders' hands as if repelled",
  "Every now and then, a random room reverts to its state from centuries ago",
  "The deeper one goes, the heavier and slower movement becomes",
  "Some doors open into vast, starry voids instead of other rooms",
  "Laughter echoes through the halls at random intervals, but there is no source",
  "The sound of bells ringing grows louder the closer one gets to the dungeon’s heart",
  "The walls occasionally shift, sealing off some areas and opening new ones",
  "Anything written down disappears after a few minutes",
  "Magical darkness clings to certain areas, swallowing all light",
  "Random objects phase in and out of existence, appearing in different spots",
  "The smell of sulfur and rotting meat lingers throughout the dungeon",
  "Books and scrolls float in midair, flipping their pages randomly",
  "Occasionally, a bright light flashes, and for a moment, everything looks different",
  "Corpses do not decay, but instead turn to stone over time",
  "The sound of breathing can be heard behind the walls",
  "Creatures slain in the dungeon dissolve into black mist instead of leaving bodies",
  "Time moves at different speeds in different sections of the dungeon",
  "Paintings on the walls change to depict the adventurers' worst fears",
  "Some rooms replay echoes of past conversations between long-dead people",
  "Random rooms are filled with floating candles that extinguish when touched",
  "Weapons become unusually light or heavy, making combat unpredictable",
  "Statues turn to face adventurers when no one is looking",
  "Bloodstains appear on the walls after combat, even when no blood was spilled",
  "Screams can be heard from behind walls, but investigating reveals nothing",
  "Metal objects sometimes heat up suddenly, burning those who carry them",
  "Shadows detach from their owners for brief moments before returning",
  "Dead bodies vanish overnight, leaving no trace",
  "Flowers grow from cracks in the stone, blooming only in darkness",
  "A strange music can sometimes be heard, though no instruments are present",
  "Glass shatters spontaneously, regardless of whether it's being touched",
  "Occasionally, party members see glimpses of themselves in different timelines",
  "The dungeon seems to call out the adventurers' names in the wind",
  "Water ripples in response to spoken words, mimicking the speaker’s voice",
  "Weapons drawn in the dungeon hum softly when raised in battle",
  "Magic items flicker with unstable energy when used here",
  "A mysterious blue glow occasionally emanates from the stone walls",
  "Rats and other creatures whisper in a strange, unknown tongue",
  "Injuries heal at an accelerated rate, but leave behind unsettling scars",
  "Sometimes, an adventurer’s reflection lags behind their actual movements",
  "The dungeon appears to grow deeper every time someone enters",
  "Doors are always unlocked, but something unseen holds them closed",
  "Random walls are covered in handprints of varying sizes and species",
  "Objects taken from the dungeon slowly vanish when removed from the premises",
  "Some rooms cause unnerving déjà vu, as if adventurers have been here before",
  "Dead adventurers appear alive and well in old paintings found in the halls",
  "The walls are inscribed with messages from the future",
  "Certain statues bleed when touched, but no source of the blood is found",
  "When alone, adventurers feel unseen hands brush against them",
  "The deeper one goes, the colder the air becomes, until breath turns to mist",
  "A distant heartbeat thuds louder as one approaches the dungeon’s core",
  "Weapons that strike the walls cause them to momentarily ripple like water",
  "Some rooms have gravity reversed, forcing adventurers to walk on the ceiling",
  "Footsteps follow adventurers, even when no one else is present",
  "Some torches emit shadow instead of light, darkening everything around them",
  "Random objects turn into glass for a brief moment before returning to normal",
  "Reflections in metal surfaces sometimes show glimpses of another world",
  "At certain points, gravity shifts slightly, making movement disorienting",
  "A deep humming noise resonates through the dungeon, felt more than heard",
  "Sometimes, when stepping into a room, adventurers find themselves back at the entrance",
  "The dungeon itself dreams, shifting its layout in response to those inside"
];


function distributeMonstersRandomly(monsterCount, monstersPerRoom, totalRooms, availableMonsters) {
 
  let roomAssignments = new Array(totalRooms).fill(null).map(() => []);

  let placedMonsters = 0;

  
  while (placedMonsters < monsterCount) {
    
    let randomRoomIndex = Math.floor(Math.random() * totalRooms);

    
    if (roomAssignments[randomRoomIndex].length < monstersPerRoom) {
      
      let chosenMonster = randomFromArray(availableMonsters);
      roomAssignments[randomRoomIndex].push(chosenMonster);
      placedMonsters++;
    } else {
      
      const allFull = roomAssignments.every(
        roomArr => roomArr.length >= monstersPerRoom
      );
      if (allFull) {
        
        break;
      }
      
    }
  }
  return roomAssignments;
}


function generateDungeon() {
  const size = document.getElementById("dungeonSize").value;
  const numLevels = parseInt(document.getElementById("numLevels").value, 10);
  const roomsPerLevel = parseInt(document.getElementById("roomsPerLevel").value, 10);
  const totalRooms = numLevels * roomsPerLevel;

  let monsterCount = parseInt(document.getElementById("dungeonMonsterTotal").value, 10);
  const monstersPerRoom = parseInt(document.getElementById("monstersPerRoom").value, 10);
  const maxCR = parseInt(document.getElementById("challengeRating").value, 10);

 
  const environment = document.getElementById("dungeonEnvironment").value;

  
  let availableMonsters;
  if (environment === "any") {
    
    availableMonsters = monsterData.filter(m => m.cr <= maxCR);
  } else {
    
    availableMonsters = monsterData.filter(
      m => m.cr <= maxCR && m.environments.includes(environment)
    );
  }

 
  if (availableMonsters.length === 0) {
    availableMonsters = monsterData.filter(m => m.cr <= maxCR);
  }

  
  const roomAssignments = distributeMonstersRandomly(
    monsterCount,
    monstersPerRoom,
    totalRooms,
    availableMonsters
  );

  
  const includePuzzles = document.getElementById("includePuzzles").checked;
  const includeTraps = document.getElementById("includeTraps").checked;
  const includeHiddenPassages = document.getElementById("includeHiddenPassages").checked;

  
  let dungeonDescription = `<h2>Generated Dungeon</h2>`;
  dungeonDescription += `<p><strong>Size:</strong> ${size.toUpperCase()}</p>`;
  dungeonDescription += `<p><strong>Levels:</strong> ${numLevels}</p>`;
  dungeonDescription += `<p><strong>Total Rooms:</strong> ${totalRooms} (About ${roomsPerLevel} per level)</p>`;
  dungeonDescription += `<p><strong>Monsters:</strong> ${monsterCount} total (Up to ${monstersPerRoom} per room)</p>`;

  
  let theme = randomFromArray(dungeonThemes);
  dungeonDescription += `<h3>Dungeon Theme:</h3><p>${theme}</p>`;

  let faction = randomFromArray(dungeonFactions);
  dungeonDescription += `<h3>Dominant Faction:</h3><p>${faction}</p>`;

  let mutation = randomFromArray(dungeonMutations);
  dungeonDescription += `<h3>Strange Dungeon Effect:</h3><p>${mutation}</p>`;

  dungeonDescription += `<h3>Rooms & Encounters</h3>`;

 
  let roomIndex = 0; 
  for (let level = 1; level <= numLevels; level++) {
    dungeonDescription += `<h2>Level ${level}</h2>`;

    for (let i = 1; i <= roomsPerLevel; i++) {

      const roomDescription = randomFromArray(dungeonRooms);

      
      dungeonDescription += `<div style="margin-bottom: 20px; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">`;
      dungeonDescription += `<p><strong>Room ${i}:</strong> ${roomDescription}</p>`;

      
      if (includePuzzles && Math.random() < 0.2) {
        let puzzle = randomFromArray(dungeonPuzzles);
        dungeonDescription += `<p><strong>Puzzle:</strong> ${puzzle}</p>`;
      }

      
      const monstersHere = roomAssignments[roomIndex];
      if (monstersHere && monstersHere.length > 0) {
        
        const monsterStrings = monstersHere.map(m => `${m.name} (CR ${m.cr})`);
        dungeonDescription += `<p><strong>Monsters:</strong> ${monsterStrings.join(", ")}</p>`;
      }

 
	 let roomXp = 0;
	 for (let j = 0; j < monstersHere.length; j++) {
	  roomXp += (monstersHere[j].xp || 0);
	 }	

	 
	 dungeonDescription += `<p><strong>XP if cleared:</strong> ${roomXp}</p>`;

      
      if (includeTraps && Math.random() < 0.3) {
        let trap = randomFromArray(dungeonTraps);
        dungeonDescription += `<p><strong>Trap:</strong> ${trap}</p>`;
      }

      
      if (includeHiddenPassages && Math.random() < 0.3) {
        let hiddenDoor = randomFromArray(dungeonRooms);
        let triggers = [
          "Revealed by solving a nearby puzzle",
          "Found with a successful Perception check",
          "Unlocked by pressing a hidden switch",
          "Only visible under certain magical light",
          "Triggered by speaking an ancient phrase"
        ];
        dungeonDescription += `<p><strong>Hidden Passage:</strong> Leads to ${hiddenDoor} (${randomFromArray(triggers)})</p>`;
      }

      dungeonDescription += `</div>`; 

      roomIndex++; 
    }
  }

  
  document.getElementById("dungeonResult").innerHTML = dungeonDescription;
}




/* ================ ENCOUNTER GENERATION ================ */


document.getElementById("generationMethod").addEventListener("change", function() {
  const method = this.value;
  const crDiv = document.getElementById("crInputDiv");
  const partyDiv = document.getElementById("partyInputDiv");
  if (method === "cr") {
    crDiv.style.display = "block";
    partyDiv.style.display = "none";
  } else {
    crDiv.style.display = "none";
    partyDiv.style.display = "block";
  }
});


function calcCRFromParty(partySize, partyLevel, difficulty) {
  let baseCR = (partyLevel * partySize) / 4;
  let multiplier = 1;
  if (difficulty === "easy") multiplier = 0.75;
  if (difficulty === "hard") multiplier = 1.25;
  if (difficulty === "deadly") multiplier = 1.5;
  return baseCR * multiplier;
}

function randInt(max) {
  return Math.floor(Math.random() * max);
}

function randomFromArray(arr) {
  if (!arr || arr.length === 0) return null;
  return arr[randInt(arr.length)];
}


function generateCityName() {
  const starts = [
    "Ald", "Ber", "Cen", "Dor", "El", "Fal", "Gar", "Hild", "Ir",
    "Jor", "Kel", "Lan", "Mar", "Nor", "Or", "Pel", "Quar", "Riv",
    "Sar", "Tan", "Ul", "Val", "Win", "Xan", "Yor", "Zal"
  ];
  const ends = [
    "haven", "bridge", "vale", "stone", "field", "port", "ford",
    "peak", "crest", "ton", "chester", "helm", "burg", "stead",
    "borough", "ward", "moor", "dell", "pass", "cove"
  ];
  return randomFromArray(starts) + randomFromArray(ends);
}


function findMonstersByEnvironmentAndCR(environment, desiredCR, allowMixed) {
  let lower = Math.max(0, desiredCR * 0.5);
  let upper = desiredCR * 1.5;
  if (allowMixed === "yes") {
    lower = Math.max(0, desiredCR * 0.25);
    upper = desiredCR * 2;
  }

  let possible = [];
  if (environment === "any") {
   
    possible = monsterData.filter(m => m.cr >= lower && m.cr <= upper);
  } else {
    possible = monsterData.filter(m => m.environments.includes(environment) && m.cr >= lower && m.cr <= upper);
  }

  return possible.length > 0 ? possible : monsterData.filter(m => m.cr >= lower && m.cr <= upper);
}


function generateMonsterEncounter(environment, desiredCR, allowMixed, monsterCount) {
  const possibleMonsters = findMonstersByEnvironmentAndCR(environment, desiredCR, allowMixed);
  if (possibleMonsters.length === 0) {
    return {
      monsters: [],
      encounterDescription: "No suitable monsters found for that CR/environment.",
      totalXp: 0 
    };
  }

  let chosen = [];
  let totalXp = 0; 
  for (let i = 0; i < monsterCount; i++) {
    const monster = randomFromArray(possibleMonsters);
    chosen.push(monster);
    totalXp += (monster.xp || 0); 
  }

    const descriptions = [
    "lurking behind thick foliage",
    "making camp in a clearing",
    "guarding a narrow corridor",
    "prowling near an old ruin",
    "ambushing from the shadows",
    "standing watch at a choke point",
    "bickering over loot in the open",
    "hiding among rocky outcrops",
    "crouched near a flickering campfire",
    "searching for something in the rubble",
    "resting by a hidden spring",
    "performing a strange ritual",
    "engaged in a heated argument"
  ];
  return {
    monsters: chosen,
    encounterDescription: randomFromArray(descriptions),
    totalXp: totalXp 
  };
}

function generateLoot(monsters, lootRarity, includeCursed) {
  let combinedLoot = [];
  monsters.forEach(m => {
    if (m.loot && m.loot.length) {
      const picks = randInt(2) + 1;
      for (let i = 0; i < picks; i++) {
        combinedLoot.push(randomFromArray(m.loot));
      }
    }
  });

  const extraCount = randInt(3);
  for (let i = 0; i < extraCount; i++) {
    combinedLoot.push(randomFromArray(commonLootTable));
  }

  if (lootRarity === "includeRare") {
    if (Math.random() < 0.5) {
      const rareCount = randInt(2) + 1;
      for (let r = 0; r < rareCount; r++) {
        combinedLoot.push(randomFromArray(rareLootTable));
      }
    }
  }

  if (includeCursed && Math.random() < 0.1) {
    combinedLoot.push({
      name: "Cursed Relic",
      description: "A strange artifact with an ominous aura..."
    });
  }

  return combinedLoot;
}

function generateEncounter() {
  
  const method       = document.getElementById("generationMethod").value;
  const environment  = document.getElementById("environmentSelect").value;
  let cityName       = document.getElementById("cityNameInput").value.trim();
  const partyClasses = document.getElementById("partyClasses").value.trim();
  const lootRarity   = document.getElementById("lootRarity").value;
  const allowMixed   = document.getElementById("allowMixedCR").value;
  const monsterCount = parseInt(document.getElementById("monsterCount").value, 10);

  
  let desiredCR = 1;
  if (method === "cr") {
    desiredCR = parseFloat(document.getElementById("crValue").value);
  } else {
    const size = parseInt(document.getElementById("partySize").value, 10);
    const lvl  = parseInt(document.getElementById("partyLevel").value, 10);
    const diff = document.getElementById("desiredDifficulty").value;
    desiredCR  = calcCRFromParty(size, lvl, diff);
  }

 
  if (!cityName) {
    cityName = generateCityName();
  }

  
  const possibleMonsters = findMonstersByEnvironmentAndCR(environment, desiredCR, allowMixed);
  if (possibleMonsters.length === 0) {
   
    document.getElementById("encounterResult").innerHTML = 
      `<p>No suitable monsters found for CR ${desiredCR.toFixed(2)} in ${environment}.</p>`;
    return;
  }

  
  let chosen    = [];
  let totalXp   = 0;
  for (let i = 0; i < monsterCount; i++) {
    const monster = randomFromArray(possibleMonsters);
    chosen.push(monster);
    totalXp += (monster.xp || 0);
  }

  
  const monsterNames = chosen.map(m => m.name).join(", ") || "None";
  

const encounterDescriptions = [
  "You find them lurking around a broken altar, whispering in an unknown language.",
  "The creatures are feasting on the remains of a fallen adventurer.",
  "They lie in wait, camouflaged among the rubble, their eyes watching your every move.",
  "A foul stench fills the air as you notice them emerging from the shadows.",
  "The monsters are arguing among themselves over a pile of stolen treasures.",
  "They are sleeping in a corner, their bodies rising and falling with slow, heavy breaths.",
  "A sudden chittering noise alerts you to their presence behind a crumbling pillar.",
  "They are performing some kind of ritual, unaware of your arrival.",
  "The creatures are drinking from a dark, shimmering pool.",
  "You stumble upon them as they tear through an old wooden chest, searching for valuables.",
  "They are sharpening their weapons, preparing for something.",
  "You hear them before you see them—low growls echoing off the dungeon walls.",
  "They are playing with the bones of their last victim, tossing them back and forth.",
  "The monsters are standing guard in front of a large iron door.",
  "They are dragging a fresh kill back to their lair.",
  "The creatures are perched atop broken statues, surveying their surroundings.",
  "A strange humming sound leads you to their den.",
  "They are hiding among a pile of broken armor and weapons.",
  "You see them hunched over an ancient map, discussing something in hushed tones.",
  "The monsters are bathing in a pool of glowing liquid.",
  "A sudden rustling in the nearby vines reveals their presence.",
  "They are gnawing on large bones, their sharp teeth glistening with saliva.",
  "You catch them mid-hunt, stalking an unfortunate rodent.",
  "They are lined up in a row, waiting for their leader to give the next command.",
  "The monsters are polishing their weapons, preparing for an attack.",
  "You see them perched along the walls like insects, clinging to the stone.",
  "They are tending to an injured member of their group.",
  "A pile of fresh corpses reveals their feeding grounds.",
  "They are performing a strange dance around a glowing sigil on the ground.",
  "You hear the sound of flapping wings before you see them.",
  "They are frozen in place, as if waiting for something to happen.",
  "The creatures are basking in the warmth of a magical flame.",
  "You hear their guttural laughter before you spot them.",
  "They are silently watching you, completely still.",
  "A soft glow illuminates their forms as they gather around a mysterious artifact.",
  "They are playing a crude game of dice, gambling away stolen loot.",
  "You find them arguing over a torn piece of parchment.",
  "They are crawling out of a hidden tunnel beneath the floor.",
  "The monsters are methodically searching the area for intruders.",
  "They are tangled in webbing, struggling to break free.",
  "You find them bathing in a thick pool of dark ooze.",
  "A rattling noise reveals them hiding behind a stack of crates.",
  "They are standing in a circle, their heads turned upward in silent prayer.",
  "You see them stacking bones into intricate patterns.",
  "The creatures are pacing anxiously, as if expecting an attack.",
  "They are meticulously carving symbols into the stone floor.",
  "A strange chanting sound reveals their position in the next room.",
  "You find them examining a wounded prisoner, deciding what to do next.",
  "They are rubbing their hands together greedily, counting their spoils.",
  "The monsters are testing a newly made trap on a captured creature.",
  "You spot them setting up camp, resting after a recent battle.",
  "They are playing with magical trinkets, unaware of your presence.",
  "A deep growl from behind alerts you to their presence.",
  "You see them frozen mid-action, reacting to your sudden arrival.",
  "They are tending to eggs nestled in the corner of the room.",
  "The creatures are inspecting a recently triggered trap, confused.",
  "A flickering torchlight reveals their shifting silhouettes.",
  "You hear them breathing heavily in the darkness.",
  "They are stacking broken pieces of armor as if creating an effigy.",
  "The monsters are attempting to break open a sealed stone door.",
  "A bubbling cauldron in the center of the room gives away their position.",
  "They are feeding scraps to a chained beast in the corner.",
  "A glint of steel catches your eye as they prepare an ambush.",
  "They are clustered together, sharpening claws and fangs.",
  "You hear the telltale sound of rattling chains as they move about.",
  "The creatures are watching something on the floor, fascinated.",
  "They are rubbing a strange, glowing crystal between their hands.",
  "A distant, eerie laughter echoes from where they lurk.",
  "You find them huddled around a dying fire.",
  "They are carving crude symbols into the walls with jagged claws.",
  "A foul stench leads you directly to their location.",
  "They are training, striking at imaginary foes with practiced precision.",
  "You spot them carefully pouring a bubbling potion into a vial.",
  "They are watching the entrance warily, expecting company.",
  "A dark mist surrounds them, pulsating with unnatural energy.",
  "They are arguing over the remains of a shattered relic.",
  "You hear them whispering, their voices layered with unnatural echoes.",
  "The monsters are gathered around a stone tablet, chanting softly.",
  "You see them arranging bones into a crude throne.",
  "They are performing some kind of crude surgery on a fallen comrade.",
  "A pile of discarded weapons suggests they have been here for a while.",
  "They are creeping along the ceiling, ready to pounce.",
  "You find them dissecting a strange creature they recently killed.",
  "They are balancing on thin ledges, moving like hunters.",
  "You hear their footsteps before you see them.",
  "They are drinking from a skull, savoring the moment.",
  "The monsters are staring into a pool of liquid, mesmerized.",
  "A sudden gust of wind carries the scent of blood—then you see them.",
  "They are setting up a perimeter, unaware of your presence.",
  "A slow, rhythmic drumming sound accompanies their movements.",
  "You find them at a shrine, leaving offerings.",
  "They are standing eerily still, sensing something in the air.",
  "A glimmer of movement in the darkness reveals their hiding spot.",
  "The creatures are watching from the shadows, testing your patience.",
  "They are stretching their limbs, preparing for battle.",
  "You notice strange glowing eyes peering from the dark corners of the room.",
  "The monsters are already waiting for you—ready to strike.",
  "You see them blending into their surroundings, barely visible.",
  "A shifting mass of bodies indicates where they are hiding.",
  "They are walking in a slow, synchronized pattern, performing a ritual.",
  "You hear the sound of cracking bones as they finish their last meal."
];

let desc = randomFromArray(encounterDescriptions);
 
  const loot = generateLoot(chosen, lootRarity, false); 
 
  let classFlavor = partyClasses
    ? `Party includes: ${partyClasses}. `
    : "No specific classes given. ";

  
  let output = `<p><strong>Environment:</strong> ${environment}</p>`;
  output += `<p><strong>City (flavor):</strong> ${cityName}</p>`;
  output += `<p><strong>Party Class Info:</strong> ${classFlavor}</p>`;
  output += `<p><strong>Approx. CR:</strong> ${desiredCR.toFixed(2)}</p>`;
  output += `<p><strong>Encountered Monsters (${monsterCount}):</strong> ${monsterNames}</p>`;
  output += `<p><strong>Description:</strong> ${desc}</p>`;
  output += `<p><strong>Total XP (if defeated):</strong> ${totalXp}</p>`;
  output += `<p><strong>Loot Found:</strong></p><ul>`;

  loot.forEach(item => {
   
    if (typeof item === "string") {
      output += `<li>${item}</li>`;
    } else {
     
      output += `<li><strong>${item.name}</strong>: ${item.description}</li>`;
    }
  });
  output += `</ul>`;

  
  document.getElementById("encounterResult").innerHTML = output;
}
/* ================ RUMOR GENERATION ================ */
function generateRumor() {
  const location = document.getElementById("rumorLocation").value.trim() || "somewhere in town";
  const category = document.getElementById("rumorCategory").value;

  let rumorPool = [];
  if (category === "any") {
    // Combine all categories
    rumorPool = getAllRumors();
  } else {
    rumorPool = rumorData[category] || [];
  }

  if (rumorPool.length === 0) {
    rumorPool = getAllRumors();
  }
  const fragment = randomFromArray(rumorPool);
  const rumor = `In the ${location}, there's talk that ${fragment}.`;

  document.getElementById("rumorResult").innerHTML = rumor;
}


function getAllRumors() {
  let all = [];
  for (let cat in rumorData) {
    all = all.concat(rumorData[cat]);
  }
  return all;
}

/* ================ SHOP INVENTORY ================ */
function generateShopInventory() {
  const shopType = document.getElementById("shopType").value;
  const shopQuality = document.getElementById("shopQuality").value;
  const shopRegion = document.getElementById("shopRegion").value.trim();

  let items = [];
  
  if (shopType === "any") {
    
    for (let key in shopItems) {
      if (shopItems[key][shopQuality]) {
        items = items.concat(shopItems[key][shopQuality]);
      }
    }
  } else if (shopItems[shopType] && shopItems[shopType][shopQuality]) {
    items = shopItems[shopType][shopQuality];
  } else {
    items = shopItems["general"]["average"]; 
  }

  const inventoryCount = Math.max(3, randInt(items.length) + 1);
  let result = [];
  for (let i = 0; i < inventoryCount; i++) {
    const pick = randomFromArray(items);
    if (!result.includes(pick)) {
      result.push(pick);
    }
  }

  if (Math.random() < 0.3) {
    result.push({
      name: "A rare or special item unique to this store!",
      price: "???",
      description: "A mysterious item that might require further identification."
    });
  }

  let regionNote = shopRegion ? `(Region: ${shopRegion})` : "";

  let output = `<p><strong>Shop Type:</strong> ${shopType} ${regionNote}</p>`;
  output += `<p><strong>Quality:</strong> ${shopQuality}</p><ul>`;

  result.forEach(item => {
    output += `<li><strong>${item.name}</strong> - <em>${item.price}</em><br/>`;
    output += `<small>${item.description}</small></li><br/>`;
  });

  output += `</ul>`;
  document.getElementById("shopResult").innerHTML = output;
}
/* ================ NPC GENERATION ================ */
function generateNPC() {
  const count = parseInt(document.getElementById("npcCount").value, 10);
  const preferredRace = document.getElementById("npcRace").value;
  const preferredAlignment = document.getElementById("npcAlignment").value;
  const preferredProfession = document.getElementById("npcProfession").value.trim();
  const detailToggle = document.getElementById("npcDetailToggle").value;
const relationships = ["None", "Ally of a party member", "Rival of a party member", "Owes the party a favor", "Holds a grudge against the party"];

const relationship = randomFromArray(relationships);

  let outputHTML = "";

  for (let i = 0; i < count; i++) {
    const name = randomFromArray(npcNames);
    let race = randomFromArray(npcRaces);
    if (preferredRace !== "any") {
      race = preferredRace;
    }
    let alignment = randomFromArray(npcAlignments);
    if (preferredAlignment !== "any") {
     
      alignment = npcAlignments.find(a => a.toLowerCase().includes(preferredAlignment)) || alignment;
    }
    let profession = preferredProfession || randomFromArray(npcProfessions);

    const personality = randomFromArray(npcPersonalities);
    const quirk = randomFromArray(npcQuirks);
    const backstory = randomFromArray(npcBackstoryHooks);

    let extendedDetails = "";
    if (detailToggle === "yes") {
      const fear = randomFromArray(npcFears);
      const motivation = randomFromArray(npcMotivations);
      const secret = randomFromArray(npcSecrets);
      extendedDetails = `
        <p><strong>Fear:</strong> ${fear}</p>
        <p><strong>Motivation:</strong> ${motivation}</p>
        <p><strong>Secret:</strong> ${secret}</p>
      `;
    }

    outputHTML += `<div class="npc-block" style="margin-bottom:1.5em;">`;
    outputHTML += `<p><strong>Name:</strong> ${name}</p>`;
    outputHTML += `<p><strong>Race:</strong> ${race}</p>`;
    outputHTML += `<p><strong>Alignment:</strong> ${alignment}</p>`;
    outputHTML += `<p><strong>Profession:</strong> ${profession}</p>`;
    outputHTML += `<p><strong>Personality:</strong> ${personality}</p>`;
    outputHTML += `<p><strong>Quirk:</strong> ${quirk}</p>`;
    outputHTML += `<p><strong>Backstory Hook:</strong> ${backstory}</p>`;
outputHTML += `<p><strong>Relationship to Party:</strong> ${relationship}</p>`;
    if (extendedDetails) {
      outputHTML += extendedDetails;
    }
    outputHTML += `</div>`;
  }

  document.getElementById("npcResult").innerHTML = outputHTML;
}

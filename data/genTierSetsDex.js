/*
    Custom dictionary for the website that is used in several features of the app to find all the Pokemon with sets in all tiers in generations
    6-8 and generate advanced details of each set.
    This dictionary was generated using APIs from Smogon that contain sets for all Pokemon in a generation + tier. The names were used.
    The numbers and letter abbreviations were manually edited over the course of a few days as shorthand for additional information that my website
    generates

    The top-level key is the generation, followed by the tier. The tier dictionary key is the bane if the Pokemon, and the value is an array
    of set names and details. Each set and its details is 4 indexes long, with the first being the set name.

    The second index is a number 1-5 indicating how defensive the specific set is (1 being fully offensive, 5 being fully defensive)
    1 = fully offensive with minimum utility
    2 = mostly offensive with some utility / offensive support Pokemon
    3 = bulky offense / support Pokemon
    4 = most walls and tanky supports (have at least 1 damaging move)
    5 = walls and supports that do not have a damaging move

    The third index is a letter indicating how the set deals damage
    "P" = all physical damage
    "S" = all special damage
    "M" = mix of physical and special damage

    The fourth index is an abbreviation that represents the general role/job of the set
    "W" = Wallbreaker / general attacker
    "OS" = Offensive Sweeper
    "BS" = Bulky Sweeper
    "PW" = Physical Wall
    "SW" = Special Wall
    "MW" = Mixed Wall
    "S" = Support
    "OL" = Offensive Lead
    "RK" = Revenge Killer
    "SB" = Stallbreaker

    This dictionary is used in the Member object to fill the set and sets fields, the Teambuilder Helper feature for displaying the set names 
    and for toggling between sets, and the Team Summary page for generating most of the info shown there
    
*/

module.exports = {
    "6": {
     "Ubers": {
      "Aegislash": [
       "Defensive",
       4,
       "P",
       "SW"
      ],
      "Aerodactyl": [
       "Prehistoric Beast (Offensive)",
       2,
       "P",
       "W"
      ],
      "Aerodactyl-Mega": [
       "Prehistoric Beast (Offensive)",
       2,
       "P",
       "W"
      ],
      "Alomomola": [
       "Kindhearted Fish",
       4,
       "S",
       "MW"
      ],
      "Arceus": [
       "Extreme Killer",
       1,
       "P",
       "OS",
       "Bulky Extreme Killer",
       3,
       "P",
       "PW"
      ],
      "Arceus-Bug": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Arceus-Dark": [
       "Calm Mind",
       3,
       "S",
       "BS",
       "Perish Trap",
       4,
       "S",
       "SB"
      ],
      "Arceus-Dragon": [
       "Support",
       4,
       "S",
       "PW",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Arceus-Electric": [
       "Dual Status",
       4,
       "S",
       "S"
      ],
      "Arceus-Fairy": [
       "Offensive Utility",
       3,
       "S",
       "S",
       "Stealth Rock",
       4,
       "S",
       "PW"
      ],
      "Arceus-Fighting": [
       "Support",
       3,
       "M",
       "S"
      ],
      "Arceus-Fire": [
       "Offensive Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Arceus-Flying": [
       "Stallbreaker",
       3,
       "S",
       "SB"
      ],
      "Arceus-Ghost": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Calm Mind",
       2,
       "S",
       "OS"
      ],
      "Arceus-Grass": [
       "Offensive Utility",
       2,
       "S",
       "W"
      ],
      "Arceus-Ground": [
       "Swords Dance",
       2,
       "P",
       "OS",
       "Special Attacker",
       4,
       "S",
       "PW"
      ],
      "Arceus-Ice": [
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Arceus-Poison": [
       "Swords Dance",
       2,
       "P",
       "OS"
      ],
      "Arceus-Psychic": [
       "General Wall",
       4,
       "S",
       "PW"
      ],
      "Arceus-Rock": [
       "Bird Antidote",
       4,
       "S",
       "S",
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Arceus-Steel": [
       "Calm Mind",
       3,
       "S",
       "BS",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Arceus-Water": [
       "Support",
       4,
       "S",
       "PW"
      ],
      "Blaziken": [
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Blissey": [
       "Support",
       5,
       "S",
       "SW"
      ],
      "Bronzong": [
       "Special Tank",
       4,
       "P",
       "SW"
      ],
      "Chansey": [
       "Support",
       5,
       "S",
       "SW"
      ],
      "Clefable": [
       "Specially Defensive",
       4,
       "S",
       "SW",
       "Physically Defensive",
       4,
       "S",
       "PW"
      ],
      "Cloyster": [
       "Hazard Control",
       2,
       "P",
       "OL"
      ],
      "Cresselia": [
       "Trick Room",
       5,
       "S",
       "PW"
      ],
      "Darkrai": [
       "Special Attacker",
       1,
       "S",
       "W"
      ],
      "Deoxys": [
       "ExtremeKiller Check?",
       3,
       "M",
       "S"
      ],
      "Deoxys-Attack": [
       "All-Out Attacker",
       1,
       "M",
       "W",
       "Suicide Lead",
       2,
       "M",
       "OL"
      ],
      "Deoxys-Defense": [
       "Spikes",
       5,
       "S",
       "PW"
      ],
      "Deoxys-Speed": [
       "Entry Hazard Lead",
       5,
       "M",
       "W"
      ],
      "Dialga": [
       "Offensive Utility",
       2,
       "S",
       "W",
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Diancie": [
       "Offensive",
       2,
       "M",
       "W",
       "Mega Utility",
       3,
       "M",
       "S",
       "Trick Room",
       3,
       "M",
       "OL"
      ],
      "Diancie-Mega": [
       "Offensive",
       2,
       "M",
       "W",
       "Mega Utility",
       3,
       "M",
       "S"
      ],
      "Ditto": [
       "Revenge Killer",
       1,
       "M",
       "RK"
      ],
      "Excadrill": [
       "Lead",
       2,
       "P",
       "OL",
       "Sand Rush Sweeper",
       1,
       "P",
       "OS"
      ],
      "Ferrothorn": [
       "Support",
       4,
       "P",
       "MW"
      ],
      "Flygon": [
       "Defog",
       4,
       "P",
       "PW"
      ],
      "Genesect": [
       "Choice Scarf",
       1,
       "M",
       "RK"
      ],
      "Gengar": [
       "Hex Trapper",
       2,
       "S",
       "SB",
       "Offensive Trapper",
       2,
       "S",
       "W",
       "Perish Trapper (Rick Gastly)",
       2,
       "S",
       "SB"
      ],
      "Gengar-Mega": [
       "Hex Trapper",
       2,
       "S",
       "SB",
       "Offensive Trapper",
       2,
       "S",
       "W",
       "Perish Trapper (Rick Gastly)",
       2,
       "S",
       "SB"
      ],
      "Giratina": [
       "The Great Wall (Physically Defensive)",
       5,
       "P",
       "PW"
      ],
      "Giratina-Origin": [
       "ParaHex",
       3,
       "S",
       "S",
       "Physical Defog",
       4,
       "P",
       "S"
      ],
      "Gothitelle": [
       "Literally Satan... Again (Calm Mind)",
       4,
       "S",
       "SB"
      ],
      "Greninja": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Groudon": [
       "Defensive Stealth Rock",
       4,
       "M",
       "SW",
       "Offensive Stealth Rock",
       2,
       "P",
       "W",
       "Rock Polish",
       1,
       "P",
       "OS",
       "Stealth Rock + Swords Dance",
       2,
       "P",
       "W",
       "Paradancer",
       2,
       "P",
       "OS",
       "Mixed Rock Polish",
       1,
       "M",
       "OS",
       "Rest",
       4,
       "M",
       "SW"
      ],
      "Groudon-Primal": [
       "Defensive Stealth Rock",
       4,
       "M",
       "SW",
       "Offensive Stealth Rock",
       2,
       "P",
       "W",
       "Rock Polish",
       1,
       "P",
       "OS",
       "Stealth Rock + Swords Dance",
       2,
       "P",
       "W",
       "Paradancer",
       2,
       "P",
       "OS",
       "Mixed Rock Polish",
       1,
       "M",
       "OS",
       "Rest",
       4,
       "M",
       "SW"
      ],
      "Gyarados": [
       "Offensive Dragon Dance",
       2,
       "P",
       "OS"
      ],
      "Gyarados-Mega": [
       "Offensive Dragon Dance",
       2,
       "P",
       "OS"
      ],
      "Ho-Oh": [
       "Choice Band",
       1,
       "P",
       "W",
       "Tank",
       3,
       "P",
       "W"
      ],
      "Hoopa-Unbound": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Jirachi": [
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Support",
       4,
       "P",
       "SW"
      ],
      "Kangaskhan": [
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Kangaskhan-Mega": [
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Klefki": [
       "Support",
       4,
       "P",
       "S"
      ],
      "Kyogre": [
       "Defensive",
       4,
       "S",
       "PW",
       "Calm Mind + 3 Attacks",
       1,
       "S",
       "OS",
       "Physical Attacker",
       1,
       "M",
       "W"
      ],
      "Kyogre-Primal": [
       "Defensive",
       4,
       "S",
       "PW",
       "Calm Mind + 3 Attacks",
       1,
       "S",
       "OS",
       "Physical Attacker",
       1,
       "M",
       "W"
      ],
      "Kyurem-White": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Life Orb Attacker",
       1,
       "S",
       "W",
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Landorus": [
       "All-out Attacker",
       1,
       "M",
       "W"
      ],
      "Landorus-Therian": [
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Latias": [
       "Support",
       4,
       "S",
       "S"
      ],
      "Latios": [
       "Offensive Defog",
       2,
       "S",
       "S",
       "All-Out Attacker",
       1,
       "S",
       "W",
       "Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Lopunny": [
       "Offensive",
       2,
       "P",
       "W"
      ],
      "Lopunny-Mega": [
       "Offensive",
       2,
       "P",
       "W"
      ],
      "Lucario": [
       "Mega Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Lucario-Mega": [
       "Mega Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Lugia": [
       "Physically Defensive",
       5,
       "S",
       "PW"
      ],
      "Mawile": [
       "Special Tank",
       3,
       "P",
       "SW"
      ],
      "Mawile-Mega": [
       "Special Tank",
       3,
       "P",
       "SW"
      ],
      "Mewtwo": [
       "Special Attacker",
       1,
       "S",
       "W",
       "Physical Attacker",
       2,
       "P",
       "W"
      ],
      "Mewtwo-Mega-X": [
       "Physical Attacker",
       2,
       "P",
       "W"
      ],
      "Palkia": [
       "All-Out Attacker",
       1,
       "S",
       "W"
      ],
      "Rayquaza": [
       "MixQuaza (Mixed Attacker)",
       1,
       "M",
       "W",
       "Choice Band",
       1,
       "P",
       "W",
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Reshiram": [
       "Roost + 3 attacks",
       2,
       "M",
       "W"
      ],
      "Sableye": [
       "Utility",
       4,
       "P",
       "PW"
      ],
      "Sableye-Mega": [
       "Utility",
       4,
       "P",
       "PW"
      ],
      "Salamence": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Salamence-Mega": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Scizor": [
       "Red Menace",
       3,
       "P",
       "SW"
      ],
      "Scizor-Mega": [
       "Red Menace",
       3,
       "P",
       "SW"
      ],
      "Scolipede": [
       "Spikes Anti-Lead",
       2,
       "P",
       "OL"
      ],
      "Shaymin-Sky": [
       "Life Orb",
       2,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK",
       "SubSeed",
       2,
       "S",
       "W"
      ],
      "Skarmory": [
       "Physically Defensive",
       5,
       "P",
       "PW",
       "Specially Defensive",
       5,
       "P",
       "SW"
      ],
      "Slowbro": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Slowbro-Mega": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Smeargle": [
       "Smash Pass",
       4,
       "S",
       "S"
      ],
      "Tentacruel": [
       "Spin Spikes",
       4,
       "S",
       "SW"
      ],
      "Tyranitar": [
       "Support",
       4,
       "P",
       "SW",
       "Choice Band",
       2,
       "P",
       "W",
       "Indominus Rex",
       1,
       "P",
       "OS"
      ],
      "Tyranitar-Mega": [
       "Indominus Rex",
       1,
       "P",
       "OS"
      ],
      "Wobbuffet": [
       "Utility Trapper",
       5,
       "M",
       "SB"
      ],
      "Xerneas": [
       "Geomancy",
       1,
       "S",
       "OS",
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Choice Specs",
       1,
       "S",
       "W",
       "All-out Attacker",
       1,
       "S",
       "W",
       "Defensive",
       4,
       "S",
       "PW",
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Yveltal": [
       "Choice Band",
       2,
       "P",
       "W",
       "Strong Bird",
       1,
       "M",
       "W",
       "Tough Bird (Flying Tank)",
       4,
       "P",
       "PW",
       "Fashionable Bird (Choice Scarf)",
       1,
       "M",
       "RK"
      ],
      "Zekrom": [
       "Hone Claws",
       1,
       "P",
       "OS",
       "Choice Scarf",
       2,
       "M",
       "RK",
       "Life Orb",
       1,
       "M",
       "W",
       "Choice Band",
       1,
       "M",
       "W"
      ]
     },
     "OU": {
      "Aerodactyl": [
       "Offensive",
       1,
       "P",
       "W",
       "Pursuit Trapper",
       2,
       "P",
       "W"
      ],
      "Aerodactyl-Mega": [
       "Offensive",
       1,
       "P",
       "W",
       "Pursuit Trapper",
       2,
       "P",
       "W"
      ],
      "Aggron": [
       "Tank",
       3,
       "P",
       "MW"
      ],
      "Aggron-Mega": [
       "Tank",
       3,
       "P",
       "MW"
      ],
      "Alakazam": [
       "Mega Alakazam",
       1,
       "S",
       "W"
      ],
      "Alakazam-Mega": [
       "Mega Alakazam",
       1,
       "S",
       "W"
      ],
      "Alomomola": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Altaria": [
       "Offensive Dragon Dance",
       1,
       "P",
       "OS",
       "King DDD (Defensive Dragon Dance)",
       3,
       "P",
       "BS",
       "Support",
       4,
       "M",
       "MW",
       "Special Attacker",
       "3",
       "S",
       "W"
      ],
      "Altaria-Mega": [
       "Offensive Dragon Dance",
       1,
       "P",
       "OS",
       "King DDD (Defensive Dragon Dance)",
       3,
       "P",
       "BS",
       "Support",
       4,
       "M",
       "MW",
       "Special Attacker",
       "3",
       "S",
       "W"
      ],
      "Amoonguss": [
       "Pivot",
       4,
       "S",
       "MW"
      ],
      "Azelf": [
       "Lead",
       2,
       "P",
       "OL"
      ],
      "Azumarill": [
       "Choice Band",
       1,
       "P",
       "W",
       "Belly Drum",
       1,
       "P",
       "OS",
       "Assault Vest",
       3,
       "P",
       "W"
      ],
      "Beedrill": [
       "U-turn",
       2,
       "P",
       "W"
      ],
      "Beedrill-Mega": [
       "U-turn",
       2,
       "P",
       "W"
      ],
      "Bisharp": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Blissey": [
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Breloom": [
       "Technician Attacker",
       2,
       "P",
       "OS",
       "Poison Heal Attacker",
       1,
       "P",
       "OS"
      ],
      "Celebi": [
       "Support",
       4,
       "S",
       "MW",
       "Nasty Plot + 2 Attacks",
       3,
       "S",
       "BS"
      ],
      "Chansey": [
       "De Blob",
       4,
       "S",
       "MW"
      ],
      "Charizard": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Wallbreaker",
       1,
       "S",
       "W",
       "Bulky Will-O-Wisp",
       3,
       "P",
       "PW",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Charizard-Mega-X": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Bulky Will-O-Wisp",
       3,
       "P",
       "PW",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Charizard-Mega-Y": [
       "Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Chesnaught": [
       "Physical Tank",
       4,
       "P",
       "PW"
      ],
      "Clefable": [
       "Calm Mind",
       3,
       "S",
       "BS",
       "Stealth Rock",
       4,
       "S",
       "PW",
       "Life Orb",
       3,
       "S",
       "BS"
      ],
      "Cobalion": [
       "Offensive Pivot",
       2,
       "M",
       "W"
      ],
      "Cofagrigus": [
       "Physical Wall",
       4,
       "S",
       "PW",
       "Offensive",
       3,
       "S",
       "BS"
      ],
      "Crawdaunt": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Cresselia": [
       "Defensive",
       4,
       "S",
       "SW",
       "Trick Room",
       4,
       "S",
       "SW"
      ],
      "Diancie": [
       "Offensive",
       2,
       "M",
       "OL"
      ],
      "Diancie-Mega": [
       "Offensive",
       2,
       "M",
       "OL"
      ],
      "Diggersby": [
       "Physical Attacker",
       1,
       "P",
       "OS",
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Ditto": [
       "Imposter",
       "1",
       "M",
       "RK"
      ],
      "Doublade": [
       "Mixed Wall",
       "4",
       "P",
       "MW"
      ],
      "Dragalge": [
       "Offensive Toxic Spikes",
       2,
       "S",
       "S",
       "Specially Defensive",
       2,
       "S",
       "SW",
       "Choice Specs",
       2,
       "S",
       "W"
      ],
      "Dragonite": [
       "Fly Nite",
       3,
       "P",
       "BS",
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Dugtrio": [
       "Mole Man",
       2,
       "P",
       "OL"
      ],
      "Empoleon": [
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Excadrill": [
       "Sand Rush Sweeper",
       1,
       "P",
       "OS",
       "Bulky Spinner",
       4,
       "P",
       "SW",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Ferrothorn": [
       "Utility",
       4,
       "P",
       "MW"
      ],
      "Garchomp": [
       "Swords Dance + Life Orb",
       1,
       "P",
       "OS",
       "Offensive Stealth Rock",
       1,
       "P",
       "OL",
       "Tank Chomp",
       3,
       "P",
       "PW",
       "Substitute + Swords Dance",
       1,
       "P",
       "OS",
       "Mega Swords Dance",
       1,
       "P",
       "OS",
       "Mixed Attacker",
       1,
       "M",
       "W",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Garchomp-Mega": [
       "Mega Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Gardevoir": [
       "Wallbreaker",
       2,
       "S",
       "W"
      ],
      "Gardevoir-Mega": [
       "Wallbreaker",
       2,
       "S",
       "W"
      ],
      "Gastrodon": [
       "Curse",
       4,
       "M",
       "MW",
       "Physically Defensive",
       4,
       "M",
       "PW"
      ],
      "Gengar": [
       "Life Orb Attacker",
       1,
       "S",
       "W",
       "Hex",
       2,
       "S",
       "SB",
       "SubSplit",
       2,
       "S",
       "W"
      ],
      "Gliscor": [
       "Swords Dance Wallbreaker",
       3,
       "P",
       "W"
      ],
      "Gyarados": [
       "Offensive Dragon Dance",
       1,
       "P",
       "OS",
       "Bulky Dragon Dance",
       3,
       "P",
       "BS"
      ],
      "Gyarados-Mega": [
       "Offensive Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Hawlucha": [
       "Substitute + Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Haxorus": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Stallbreaker",
       2,
       "P",
       "SB"
      ],
      "Heatran": [
       "Utility",
       4,
       "S",
       "S",
       "Offensive Stallbreaker",
       2,
       "S",
       "SB",
       "Offensive",
       1,
       "S",
       "W",
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Heracross": [
       "Bulky Wallbreaker",
       3,
       "P",
       "W"
      ],
      "Heracross-Mega": [
       "Bulky Wallbreaker",
       3,
       "P",
       "W"
      ],
      "Hippowdon": [
       "Mixed Wall",
       4,
       "P",
       "MW"
      ],
      "Houndoom": [
       "Utility Attacker",
       1,
       "S",
       "OS"
      ],
      "Houndoom-Mega": [
       "Utility Attacker",
       1,
       "S",
       "OS"
      ],
      "Hydreigon": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Expert Belt",
       1,
       "S",
       "W"
      ],
      "Infernape": [
       "All-Out Attacker",
       1,
       "M",
       "W",
       "Physically Defensive",
       4,
       "P",
       "MW"
      ],
      "Jellicent": [
       "Utility",
       4,
       "S",
       "PW"
      ],
      "Jirachi": [
       "Stealth Rock",
       4,
       "P",
       "S",
       "Choice Scarf",
       2,
       "P",
       "RK",
       "SubToxic",
       3,
       "P",
       "SB",
       "Mixed Attacker",
       1,
       "M",
       "W",
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Kabutops": [
       "Physical Attacker",
       1,
       "P",
       "OS"
      ],
      "Keldeo": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Choice Scarf",
       1,
       "S",
       "RK",
       "Substitute + Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Kingdra": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Life Orb Attacker",
       1,
       "S",
       "W"
      ],
      "Klefki": [
       "Spikes",
       4,
       "P",
       "S",
       "Dual Screens",
       4,
       "P",
       "S"
      ],
      "Kyurem": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Kyurem-Black": [
       "Mixed Wallbreaker",
       1,
       "M",
       "W",
       "Choice Band",
       1,
       "P",
       "W",
       "Substitute Attacker",
       1,
       "M",
       "W",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Landorus-Therian": [
       "Defensive",
       4,
       "P",
       "PW",
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Double Dance",
       1,
       "P",
       "OS",
       "Offensive",
       1,
       "P",
       "W"
      ],
      "Latias": [
       "Calm Mind",
       3,
       "S",
       "BS",
       "Defensive",
       4,
       "S",
       "MW",
       "Offensive Defog",
       2,
       "S",
       "S"
      ],
      "Latias-Mega": [
       "Calm Mind",
       3,
       "S",
       "BS",
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Latios": [
       "Life Orb Attacker",
       2,
       "S",
       "W",
       "Choice Specs",
       2,
       "S",
       "W",
       "Calm Mind",
       1,
       "S",
       "OS",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Lopunny": [
       "All-Out Attacker",
       1,
       "P",
       "W",
       "Substitute",
       2,
       "P",
       "W"
      ],
      "Lopunny-Mega": [
       "All-Out Attacker",
       1,
       "P",
       "W",
       "Substitute",
       2,
       "P",
       "W"
      ],
      "Magneton": [
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Magnezone": [
       "Choice Scarf",
       1,
       "S",
       "RK",
       "Choice Specs",
       1,
       "S",
       "W",
       "Magnet Rise",
       2,
       "S",
       "S"
      ],
      "Mamoswine": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Manaphy": [
       "Tail Glow + 3 Attacks",
       1,
       "S",
       "S",
       "Tail Glow + Rain Dance",
       3,
       "S",
       "BS"
      ],
      "Manectric": [
       "Special Attacker",
       1,
       "S",
       "W"
      ],
      "Manectric-Mega": [
       "Special Attacker",
       1,
       "S",
       "W"
      ],
      "Medicham": [
       "All-Out Attacker",
       1,
       "P",
       "W"
      ],
      "Medicham-Mega": [
       "All-Out Attacker",
       1,
       "P",
       "W"
      ],
      "Metagross": [
       "All-Out Attacker",
       1,
       "P",
       "W",
       "Rock Polish",
       1,
       "P",
       "OS",
       "Assault Vest",
       3,
       "P",
       "W"
      ],
      "Metagross-Mega": [
       "All-Out Attacker",
       1,
       "P",
       "W",
       "Rock Polish",
       1,
       "P",
       "OS"
      ],
      "Mew": [
       "Stallbreaker",
       4,
       "P",
       "SB",
       "Defog",
       4,
       "S",
       "SW"
      ],
      "Nidoking": [
       "Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Omastar": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Pinsir": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Pinsir-Mega": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Politoed": [
       "Support",
       4,
       "S",
       "S"
      ],
      "Porygon2": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Quagsire": [
       "Unaware Wall",
       4,
       "M",
       "PW"
      ],
      "Raikou": [
       "Calm Mind",
       1,
       "S",
       "OS",
       "Choice Specs",
       1,
       "S",
       "W",
       "Assault Vest",
       1,
       "S",
       "W"
      ],
      "Reuniclus": [
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Rotom-Heat": [
       "Pivot",
       4,
       "S",
       "S"
      ],
      "Rotom-Wash": [
       "Physically Defensive Pivot",
       4,
       "S",
       "PW",
       "Choice Scarf",
       3,
       "S",
       "RK"
      ],
      "Sceptile": [
       "All-Out Attacker",
       1,
       "M",
       "W",
       "Substitute",
       1,
       "S",
       "W"
      ],
      "Sceptile-Mega": [
       "All-Out Attacker",
       1,
       "M",
       "W",
       "Substitute",
       1,
       "S",
       "W"
      ],
      "Scizor": [
       "Bulky Swords Dance",
       3,
       "P",
       "BS",
       "Offensive Swords Dance",
       1,
       "P",
       "OS",
       "Utility",
       4,
       "P",
       "S"
      ],
      "Scizor-Mega": [
       "Bulky Swords Dance",
       3,
       "P",
       "BS",
       "Offensive Swords Dance",
       1,
       "P",
       "OS",
       "Utility",
       4,
       "P",
       "S"
      ],
      "Seismitoad": [
       "Defensive",
       4,
       "M",
       "PW",
       "Rain Sweeper",
       1,
       "S",
       "W"
      ],
      "Serperior": [
       "Utility Attacker",
       2,
       "S",
       "W",
       "Dual Screens",
       4,
       "S",
       "S"
      ],
      "Sharpedo": [
       "Cleaner",
       1,
       "M",
       "W"
      ],
      "Sharpedo-Mega": [
       "Cleaner",
       1,
       "M",
       "W"
      ],
      "Shuckle": [
       "Sticky Web",
       4,
       "S",
       "OL"
      ],
      "Skarmory": [
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Slowbro": [
       "Defensive",
       4,
       "S",
       "PW",
       "Calm Mind",
       3,
       "S",
       "BS",
       "Offensive Tank",
       3,
       "S",
       "W"
      ],
      "Slowbro-Mega": [
       "Calm Mind",
       3,
       "S",
       "BS",
       "Offensive Tank",
       3,
       "S",
       "W"
      ],
      "Slowking": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Starmie": [
       "Utility",
       4,
       "M",
       "S",
       "Offensive",
       1,
       "S",
       "W"
      ],
      "Suicune": [
       "Substitute + Protect",
       4,
       "S",
       "S",
       "Defensive Calm Mind",
       4,
       "S",
       "BS"
      ],
      "Swampert": [
       "Rain Sweeper",
       1,
       "P",
       "OS"
      ],
      "Swampert-Mega": [
       "Rain Sweeper",
       1,
       "P",
       "OS"
      ],
      "Talonflame": [
       "Bulky Swords Dance",
       3,
       "P",
       "BS",
       "Specially Defensive",
       4,
       "P",
       "PW",
       "Offensive Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Tangrowth": [
       "Defensive",
       4,
       "M",
       "PW",
       "Assault Vest",
       3,
       "M",
       "SW"
      ],
      "Tentacruel": [
       "Support",
       4,
       "M",
       "S"
      ],
      "Terrakion": [
       "Choice Band",
       1,
       "P",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Thundurus": [
       "Thunder Wave + 3 Attacks",
       1,
       "S",
       "W",
       "Nasty Plot",
       1,
       "S",
       "OS",
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Thundurus-Therian": [
       "Agility",
       1,
       "S",
       "OS",
       "Double Dance",
       1,
       "S",
       "OS"
      ],
      "Togekiss": [
       "Stallbreaker",
       4,
       "S",
       "SB",
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Tornadus-Therian": [
       "Assault Vest Pivot",
       3,
       "M",
       "RK",
       "Offensive Wallbreaker",
       2,
       "M",
       "W"
      ],
      "Tyranitar": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Choice Band",
       1,
       "P",
       "W",
       "Support",
       4,
       "M",
       "S",
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Tyranitar-Mega": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Venusaur": [
       "Offensive",
       3,
       "S",
       "W",
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Venusaur-Mega": [
       "Offensive",
       3,
       "S",
       "W",
       "Defensive",
       4,
       "S",
       "W"
      ],
      "Victini": [
       "MixTini",
       2,
       "M",
       "W",
       "Choice Band",
       2,
       "P",
       "W"
      ],
      "Volcanion": [
       "All-Out Attacker",
       1,
       "S",
       "W"
      ],
      "Volcarona": [
       "Offensive Quiver Dance",
       1,
       "S",
       "OS",
       "Sub Swarm",
       "",
       "",
       ""
      ],
      "Weavile": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Zapdos": [
       "Physically Defensive",
       4,
       "S",
       "PW",
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Zygarde": [
       "SubCoil",
       3,
       "P",
       "BS",
       "Dragon Dance",
       1,
       "P",
       "OS",
       "DDRest",
       2,
       "P",
       "OS",
       "Parashuffler",
       4,
       "P",
       "S"
      ]
     },
     "UU": {
      "Abomasnow": [
       "Barack Aboma (Swords Dance)",
       1,
       "M",
       "OS",
       "President Snow (Mixed Attacker)",
       1,
       "M",
       "W"
      ],
      "Abomasnow-Mega": [
       "Barack Aboma (Swords Dance)",
       1,
       "M",
       "OS",
       "President Snow (Mixed Attacker)",
       1,
       "M",
       "W"
      ],
      "Absol": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "All-Out Attacker",
       1,
       "P",
       "W"
      ],
      "Absol-Mega": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "All-Out Attacker",
       1,
       "P",
       "W"
      ],
      "Accelgor": [
       "Spikes Lead",
       2,
       "S",
       "OL"
      ],
      "Aerodactyl": [
       "All-Out Attacker",
       1,
       "P",
       "W",
       "Hone Claws",
       1,
       "P",
       "OS",
       "Suicide Lead",
       2,
       "M",
       "OL"
      ],
      "Aerodactyl-Mega": [
       "All-Out Attacker",
       1,
       "P",
       "W",
       "Hone Claws",
       1,
       "P",
       "OS"
      ],
      "Aggron": [
       "Tank",
       4,
       "P",
       "SW",
       "Curse",
       3,
       "P",
       "BS"
      ],
      "Aggron-Mega": [
       "Tank",
       4,
       "P",
       "SW",
       "Curse",
       3,
       "P",
       "BS"
      ],
      "Alomomola": [
       "Sunfish Wish",
       4,
       "S",
       "MW"
      ],
      "Ampharos": [
       "Physically Defensive",
       4,
       "S",
       "PW",
       "All-out Attacker",
       1,
       "S",
       "W",
       "Agility",
       1,
       "S",
       "OS"
      ],
      "Ampharos-Mega": [
       "Physically Defensive",
       4,
       "S",
       "PW",
       "All-out Attacker",
       1,
       "S",
       "W",
       "Agility",
       1,
       "S",
       "OS"
      ],
      "Arcanine": [
       "Defensive",
       4,
       "P",
       "PW",
       "Offensive",
       1,
       "P",
       "W"
      ],
      "Aromatisse": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Banette": [
       "Prankster",
       2,
       "P",
       "SB"
      ],
      "Banette-Mega": [
       "Prankster",
       2,
       "P",
       "SB"
      ],
      "Beedrill": [
       "Don't Stand So Close to Me",
       2,
       "P",
       "W"
      ],
      "Beedrill-Mega": [
       "Don't Stand So Close to Me",
       2,
       "P",
       "W"
      ],
      "Blastoise": [
       "Offensive Spinner",
       2,
       "M",
       "W",
       "All-Out Attacker",
       1,
       "S",
       "W",
       "Defensive Spinner",
       4,
       "M",
       "PW"
      ],
      "Blastoise-Mega": [
       "Offensive Spinner",
       2,
       "M",
       "W",
       "All-Out Attacker",
       1,
       "S",
       "W"
      ],
      "Blissey": [
       "De Blob (Cleric)",
       4,
       "P",
       "SW"
      ],
      "Bronzong": [
       "Tank",
       4,
       "P",
       "SW",
       "Trick Room Support",
       2,
       "P",
       "S"
      ],
      "Camerupt": [
       "Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Camerupt-Mega": [
       "Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Celebi": [
       "Nasty Plot",
       1,
       "S",
       "OS",
       "Utility",
       4,
       "S",
       "PW",
       "Offensive Stealth Rock",
       2,
       "S",
       "W"
      ],
      "Chandelure": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Choice Specs",
       1,
       "S",
       "W",
       "Substitute + Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Chesnaught": [
       "Physically Defensive",
       4,
       "P",
       "PW",
       "Specially Defensive",
       4,
       "P",
       "SW",
       "Fast Taunt",
       2,
       "P",
       "S"
      ],
      "Clefairy": [
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Cloyster": [
       "The Janitor (Shell Smash)",
       1,
       "M",
       "OS"
      ],
      "Cobalion": [
       "Offensive Pivot",
       2,
       "M",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS",
       "Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Cofagrigus": [
       "Trick Room",
       2,
       "S",
       "OS"
      ],
      "Crawdaunt": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Cresselia": [
       "Calm Mind",
       3,
       "S",
       "BS",
       "Defensive",
       4,
       "S",
       "PW",
       "Support",
       4,
       "S",
       "S"
      ],
      "Crobat": [
       "Support",
       4,
       "P",
       "S",
       "BRAVE BAT (Choice Band)",
       1,
       "P",
       "W"
      ],
      "Darmanitan": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Darmanitan-Zen": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Diancie": [
       "Offensive Trick Room",
       2,
       "M",
       "W",
       "Defensive",
       4,
       "M",
       "PW",
       "Bulky Attacker",
       3,
       "M",
       "W"
      ],
      "Donphan": [
       "Defensive Spinner",
       4,
       "P",
       "PW",
       "Choice Band",
       1,
       "P",
       "W",
       "Offensive Spinner",
       2,
       "P",
       "W"
      ],
      "Doublade": [
       "Swords Dance",
       3,
       "P",
       "BS"
      ],
      "Dragalge": [
       "Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Druddigon": [
       "Stealth Rock Setter",
       2,
       "P",
       "W"
      ],
      "Durant": [
       "All-Out Attacker",
       1,
       "P",
       "W",
       "Hone Claws",
       1,
       "P",
       "OS"
      ],
      "Emboar": [
       "Footloose",
       1,
       "M",
       "W",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Empoleon": [
       "Specially Defensive Support",
       4,
       "S",
       "SW",
       "Offensive Defog",
       2,
       "S",
       "W",
       "Agility",
       1,
       "S",
       "OS"
      ],
      "Entei": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Escavalier": [
       "Choice Band",
       1,
       "P",
       "W",
       "Tank",
       3,
       "P",
       "W",
       "Swords Dance",
       3,
       "P",
       "BS"
      ],
      "Espeon": [
       "Choice Specs",
       2,
       "S",
       "W",
       "Calm Mind Sweeper",
       1,
       "S",
       "OS"
      ],
      "Exploud": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Feraligatr": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Fletchinder": [
       "Linda",
       2,
       "P",
       "OS"
      ],
      "Florges": [
       "Defensive Support",
       4,
       "S",
       "S",
       "Defensive Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Flygon": [
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Forretress": [
       "Defensive Rapid Spin",
       4,
       "M",
       "PW",
       "Custap",
       2,
       "P",
       "OL"
      ],
      "Froslass": [
       "Spikes Lead",
       2,
       "S",
       "OL"
      ],
      "Galvantula": [
       "Life Orb Attacker",
       2,
       "S",
       "W"
      ],
      "Gardevoir": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Calm Mind",
       1,
       "S",
       "OS",
       "Choice Specs",
       2,
       "S",
       "W"
      ],
      "Gastrodon": [
       "Curse",
       4,
       "M",
       "MW"
      ],
      "Glalie": [
       "Wrecking Ball",
       1,
       "M",
       "W"
      ],
      "Glalie-Mega": [
       "Wrecking Ball",
       1,
       "M",
       "W"
      ],
      "Gligar": [
       "Pivot",
       4,
       "P",
       "SW"
      ],
      "Goodra": [
       "Choice Band",
       3,
       "P",
       "W",
       "Choice Specs",
       3,
       "S",
       "W",
       "Assault Vest",
       3,
       "M",
       "W"
      ],
      "Granbull": [
       "Defensive",
       4,
       "P",
       "PW",
       "Bulky Attacker",
       3,
       "P",
       "W"
      ],
      "Gyarados": [
       "Substitute + Dragon Dance",
       1,
       "P",
       "OS",
       "Dragon Dance + Three Attacks",
       1,
       "P",
       "OS",
       "Defensive",
       4,
       "P",
       "MW"
      ],
      "Haxorus": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS",
       "Double Dance",
       1,
       "P",
       "OS"
      ],
      "Heliolisk": [
       "Special Attacker",
       1,
       "S",
       "W"
      ],
      "Heracross": [
       "Choice Band",
       1,
       "P",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Hitmonlee": [
       "Wallbreaker",
       1,
       "P",
       "W",
       "Endure + Reversal",
       2,
       "P",
       "W"
      ],
      "Honchkrow": [
       "Murderkrow",
       1,
       "P",
       "W"
      ],
      "Hoopa": [
       "Offensive Trick Room",
       2,
       "S",
       "W",
       "Substitute Attacker",
       2,
       "S",
       "W"
      ],
      "Houndoom": [
       "Nasty Plot",
       2,
       "S",
       "OS",
       "SunnyDoom",
       2,
       "S",
       "W"
      ],
      "Houndoom-Mega": [
       "Nasty Plot",
       2,
       "S",
       "OS",
       "SunnyDoom",
       2,
       "S",
       "W"
      ],
      "Hydreigon": [
       "Wallbreaker",
       1,
       "M",
       "W",
       "Choice Scarf",
       1,
       "M",
       "RK",
       "Stallbreaker",
       2,
       "S",
       "SB",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Infernape": [
       "Nasty Plot",
       1,
       "M",
       "OS",
       "All-Out Attacker",
       1,
       "M",
       "W",
       "Choice Band",
       1,
       "P",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Lead",
       2,
       "M",
       "OL"
      ],
      "Jellicent": [
       "Physically Defensive",
       4,
       "S",
       "PW"
      ],
      "Jolteon": [
       "All-Out Attacking",
       1,
       "S",
       "W"
      ],
      "Kingdra": [
       "Critdra",
       1,
       "S",
       "OS",
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Rain Sweeper",
       2,
       "S",
       "OS"
      ],
      "Klefki": [
       "Support",
       4,
       "S",
       "S",
       "Screens",
       5,
       "P",
       "S"
      ],
      "Krookodile": [
       "Choice Band",
       1,
       "P",
       "W",
       "Non-Choice Attacker",
       2,
       "P",
       "W",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Kyurem": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Choice Scarf",
       1,
       "S",
       "RK",
       "SubRoost",
       2,
       "S",
       "W",
       "Life Orb Attacker",
       1,
       "M",
       "W"
      ],
      "Lucario": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Ludicolo": [
       "Rain Dance Sweeper",
       2,
       "S",
       "OS",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Machamp": [
       "Assault Vest",
       3,
       "P",
       "W",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Magneton": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Mamoswine": [
       "Life Orb Attacker",
       1,
       "P",
       "W",
       "Sash Lead",
       2,
       "P",
       "OL"
      ],
      "Mandibuzz": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Meloetta": [
       "Substitute + Calm Mind",
       2,
       "S",
       "OS",
       "Choice Specs",
       2,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Cleric Support",
       2,
       "M",
       "W",
       "En Pointe",
       4,
       "M",
       "S"
      ],
      "Meloetta-Pirouette": [
       "En Pointe",
       4,
       "M",
       "S"
      ],
      "Metagross": [
       "Offensive Stealth Rock",
       2,
       "P",
       "W",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Mienshao": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Milotic": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Moltres": [
       "Life Orb Attacker",
       2,
       "S",
       "W"
      ],
      "Nidoking": [
       "Wallbreaker",
       1,
       "M",
       "W"
      ],
      "Nidoqueen": [
       "Offensive Entry Hazard Setter",
       2,
       "S",
       "W",
       "Defensive Entry Hazard Setter",
       4,
       "S",
       "PW"
      ],
      "Noivern": [
       "Choice Specs",
       2,
       "S",
       "W",
       "Taunt + Roost",
       2,
       "S",
       "W"
      ],
      "Omastar": [
       "Shell Smash",
       1,
       "S",
       "OS"
      ],
      "Pangoro": [
       "All-Out Attacker",
       2,
       "P",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Poliwrath": [
       "RestTalk",
       4,
       "M",
       "PW"
      ],
      "Porygon-Z": [
       "Double Dance",
       1,
       "S",
       "OS",
       "Choice Specs",
       2,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Porygon2": [
       "Defensive",
       4,
       "S",
       "MW",
       "Offensive",
       3,
       "S",
       "W"
      ],
      "Quagsire": [
       "Unaware Wall",
       4,
       "M",
       "PW"
      ],
      "Qwilfish": [
       "Defensive",
       4,
       "P",
       "PW",
       "Swift Swim",
       1,
       "P",
       "OS"
      ],
      "Registeel": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Reuniclus": [
       "Calm Mind",
       3,
       "S",
       "BS",
       "Trick Room",
       2,
       "S",
       "W"
      ],
      "Rhyperior": [
       "Defensive",
       4,
       "P",
       "SW",
       "Offensive",
       1,
       "P",
       "W"
      ],
      "Roserade": [
       "Offensive Hazards",
       2,
       "S",
       "W",
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Rotom-Heat": [
       "Defensive",
       4,
       "S",
       "S",
       "Choice Specs",
       2,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Rotom-Mow": [
       "Choice Specs",
       2,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Sableye": [
       "Prankster",
       4,
       "P",
       "S"
      ],
      "Sceptile": [
       "All-Out Offensive",
       1,
       "S",
       "W",
       "Substitute Attacker",
       2,
       "S",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Sceptile-Mega": [
       "All-Out Offensive",
       1,
       "S",
       "W",
       "Substitute Attacker",
       2,
       "S",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Seismitoad": [
       "Support",
       4,
       "M",
       "PW"
      ],
      "Sharpedo": [
       "Mega Chomp",
       1,
       "P",
       "OS",
       "Life Orb",
       1,
       "M",
       "OS"
      ],
      "Sharpedo-Mega": [
       "Mega Chomp",
       1,
       "P",
       "OS"
      ],
      "Shaymin": [
       "Life Orb",
       2,
       "S",
       "W",
       "Choice Specs",
       2,
       "S",
       "W",
       "Leech Seed",
       2,
       "S",
       "W"
      ],
      "Shedinja": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Shuckle": [
       "Holy Shuck!",
       5,
       "P",
       "OL"
      ],
      "Slowking": [
       "Defensive",
       4,
       "S",
       "PW",
       "Offensive Trick Room",
       3,
       "S",
       "W",
       "Defensive Sweeper",
       4,
       "S",
       "BS",
       "Assault Vest",
       3,
       "M",
       "W",
       "Choice Specs",
       2,
       "S",
       "W"
      ],
      "Smeargle": [
       "Suicide Lead",
       5,
       "P",
       "OL"
      ],
      "Snorlax": [
       "CurseLax",
       4,
       "P",
       "BS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Spiritomb": [
       "Offensive Support",
       3,
       "P",
       "S",
       "Calm Mind",
       4,
       "S",
       "BS"
      ],
      "Steelix": [
       "Tank",
       4,
       "P",
       "MW"
      ],
      "Steelix-Mega": [
       "Tank",
       4,
       "P",
       "MW"
      ],
      "Suicune": [
       "RoarCune",
       4,
       "S",
       "PW",
       "CroCune",
       4,
       "S",
       "BS",
       "Offensive",
       2,
       "S",
       "OS",
       "SubCM",
       3,
       "S",
       "BS"
      ],
      "Swampert": [
       "Defensive",
       4,
       "M",
       "PW",
       "Rain Sweeper",
       1,
       "P",
       "OS",
       "Offensive Stealth Rock",
       3,
       "P",
       "W",
       "Physically Defensive",
       4,
       "M",
       "PW",
       "Curse",
       4,
       "P",
       "BS"
      ],
      "Swampert-Mega": [
       "Rain Sweeper",
       1,
       "P",
       "OS",
       "Offensive Stealth Rock",
       3,
       "P",
       "W",
       "Physically Defensive",
       4,
       "M",
       "PW",
       "Curse",
       4,
       "P",
       "BS"
      ],
      "Sylveon": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Cleric",
       4,
       "S",
       "S"
      ],
      "Tangela": [
       "Defensive",
       4,
       "M",
       "PW"
      ],
      "Tentacruel": [
       "Utility",
       4,
       "M",
       "PW",
       "Offensive",
       2,
       "M",
       "W"
      ],
      "Togetic": [
       "Support",
       4,
       "P",
       "S"
      ],
      "Tornadus": [
       "Special Attacker",
       2,
       "S",
       "W",
       "Bulk Up",
       2,
       "P",
       "OS",
       "Defiant Attacker",
       2,
       "P",
       "W",
       "Rain Support",
       2,
       "S",
       "S"
      ],
      "Toxicroak": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Nasty Plot",
       1,
       "S",
       "OS",
       "Bulky Croak",
       3,
       "P",
       "BS"
      ],
      "Tyrantrum": [
       "Choice Band",
       1,
       "P",
       "W",
       "Rock Polish",
       1,
       "P",
       "OS"
      ],
      "Umbreon": [
       "Cleric / Wish Pass",
       4,
       "P",
       "S"
      ],
      "Uxie": [
       "Support",
       4,
       "M",
       "PW"
      ],
      "Vaporeon": [
       "Wish",
       4,
       "S",
       "S"
      ],
      "Venomoth": [
       "Mono-Attacker",
       2,
       "S",
       "OS",
       "Offensive",
       2,
       "S",
       "OS"
      ],
      "Venusaur": [
       "Sun Sweeper",
       1,
       "S",
       "OS"
      ],
      "Virizion": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Weezing": [
       "Physically Defensive",
       4,
       "S",
       "PW"
      ],
      "Whimsicott": [
       "Applaud & Attack (Offensive)",
       2,
       "M",
       "W",
       "Support",
       4,
       "M",
       "S",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Yanmega": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Speed Boost",
       1,
       "S",
       "OS"
      ],
      "Zoroark": [
       "Choice Specs",
       2,
       "S",
       "W",
       "Swords Dance",
       2,
       "P",
       "OS",
       "Nasty Plot",
       2,
       "S",
       "OS",
       "Mixed Attacker",
       2,
       "M",
       "W"
      ]
     },
     "RU": {
      "Abomasnow": [
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Absol": [
       "All-Out Attacker",
       1,
       "P",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Accelgor": [
       "Spikes Lead",
       2,
       "S",
       "OL",
       "Offensive",
       1,
       "S",
       "W"
      ],
      "Aerodactyl": [
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Aggron": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Alomomola": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Ambipom": [
       "DON'T USE AMBIPOM",
       1,
       "P",
       "W"
      ],
      "Archeops": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Aromatisse": [
       "Mono-Attacker",
       3,
       "P",
       "BS"
      ],
      "Articuno": [
       "Life Orb",
       1,
       "S",
       "W",
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Audino": [
       "Defensive",
       5,
       "P",
       "SW",
       "Mega Tank",
       3,
       "S",
       "W",
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Audino-Mega": [
       "Mega Tank",
       3,
       "S",
       "W",
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Aurorus": [
       "Stealth Rock",
       2,
       "S",
       "W",
       "Rock Polish",
       1,
       "S",
       "OS"
      ],
      "Banette": [
       "Offensive",
       2,
       "P",
       "W"
      ],
      "Banette-Mega": [
       "Offensive",
       2,
       "P",
       "W"
      ],
      "Barbaracle": [
       "Shell Smash",
       1,
       "P",
       "OS"
      ],
      "Blastoise": [
       "Bulky Spinner",
       4,
       "S",
       "PW"
      ],
      "Braviary": [
       "Bulk Up",
       3,
       "P",
       "BS",
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Bronzong": [
       "Defensive",
       4,
       "P",
       "MW",
       "Offensive Trick Room",
       3,
       "P",
       "S"
      ],
      "Camerupt": [
       "Tank",
       3,
       "P",
       "W"
      ],
      "Camerupt-Mega": [
       "Tank",
       3,
       "P",
       "W"
      ],
      "Cinccino": [
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Clawitzer": [
       "Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Cofagrigus": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Delphox": [
       "Offensive Calm Mind",
       1,
       "S",
       "OS",
       "Speedy Roaster (Choice Scarf)",
       2,
       "S",
       "RK"
      ],
      "Diancie": [
       "Specially Defensive",
       4,
       "M",
       "SW",
       "Offensive Trick Room",
       2,
       "S",
       "W",
       "Offensive Stealth Rock",
       3,
       "M",
       "S"
      ],
      "Ditto": [
       "Imposter",
       2,
       "M",
       "RK"
      ],
      "Drapion": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Druddigon": [
       "Support",
       4,
       "P",
       "PW",
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Eelektross": [
       "Assault Vest",
       3,
       "M",
       "W"
      ],
      "Emboar": [
       "All-Out Attacker",
       1,
       "P",
       "W",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Escavalier": [
       "Assault Vest",
       3,
       "P",
       "W",
       "Choice Band",
       1,
       "P",
       "W",
       "SD RestTalk",
       3,
       "P",
       "BS"
      ],
      "Exploud": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Ferroseed": [
       "Defensive Support",
       4,
       "P",
       "MW"
      ],
      "Fletchinder": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Flygon": [
       "Choice Band",
       2,
       "P",
       "W",
       "Defog Support",
       3,
       "P",
       "S",
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Gallade": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Bulk Up",
       3,
       "P",
       "BS"
      ],
      "Garbodor": [
       "Defensive Hazard Stack",
       4,
       "P",
       "S"
      ],
      "Gastrodon": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Glalie": [
       "Wallbreaker",
       2,
       "M",
       "W"
      ],
      "Glalie-Mega": [
       "Wallbreaker",
       2,
       "M",
       "W"
      ],
      "Golbat": [
       "Physically Defensive",
       4,
       "P",
       "PW",
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Gourgeist-Small": [
       "SubSeed",
       5,
       "P",
       "S"
      ],
      "Gourgeist-Super": [
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Granbull": [
       "Defensive",
       4,
       "P",
       "PW",
       "Offensive",
       1,
       "P",
       "W"
      ],
      "Gurdurr": [
       "Bulk Up",
       3,
       "P",
       "BS"
      ],
      "Hariyama": [
       "Bulky Attacker",
       3,
       "P",
       "W"
      ],
      "Hitmonlee": [
       "Reckless",
       2,
       "P",
       "W",
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Hitmontop": [
       "Defensive Rapid Spin",
       4,
       "P",
       "PW"
      ],
      "Hoopa": [
       "All-Out Attacker",
       1,
       "M",
       "W",
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Houndoom": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Jellicent": [
       "Utility",
       4,
       "S",
       "PW"
      ],
      "Jolteon": [
       "Offensive Wish",
       2,
       "S",
       "W",
       "All-Out Attacker",
       2,
       "S",
       "W"
      ],
      "Kabutops": [
       "Offensive Rapid Spin",
       2,
       "P",
       "W"
      ],
      "Klinklang": [
       "Physical Sweeper",
       1,
       "P",
       "OS"
      ],
      "Lanturn": [
       "Pivot",
       4,
       "S",
       "MW"
      ],
      "Liepard": [
       "Offensive Support",
       2,
       "P",
       "S"
      ],
      "Ludicolo": [
       "Swift Swim Sweeper",
       1,
       "S",
       "W"
      ],
      "Magneton": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Malamar": [
       "Contrary Attacker",
       3,
       "P",
       "BS"
      ],
      "Manectric": [
       "Special Attacker",
       2,
       "S",
       "W"
      ],
      "Medicham": [
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Meloetta": [
       "Substitute + Calm Mind",
       3,
       "S",
       "BS",
       "Choice Specs",
       1,
       "S",
       "W",
       "Offensive Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Meowstic": [
       "Dual Screens",
       4,
       "S",
       "S"
      ],
      "Mesprit": [
       "Offensive Stealth Rock",
       2,
       "S",
       "S"
      ],
      "Omastar": [
       "Shell Smash",
       1,
       "S",
       "OS",
       "Lead",
       2,
       "S",
       "OL"
      ],
      "Pelipper": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Piloswine": [
       "Tank",
       3,
       "P",
       "W"
      ],
      "Poliwrath": [
       "Defensive",
       4,
       "M",
       "PW"
      ],
      "Qwilfish": [
       "Defensive Spiker",
       4,
       "S",
       "PW"
      ],
      "Registeel": [
       "Specially Defensive",
       4,
       "P",
       "SW",
       "Curse",
       4,
       "P",
       "BS"
      ],
      "Rhyperior": [
       "Tank",
       4,
       "P",
       "SW",
       "Choice Band",
       3,
       "P",
       "W"
      ],
      "Roselia": [
       "Bulky Spiker",
       3,
       "S",
       "S"
      ],
      "Rotom": [
       "Status Spreader",
       3,
       "S",
       "S"
      ],
      "Rotom-Frost": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "SubSplit",
       2,
       "S",
       "W"
      ],
      "Rotom-Mow": [
       "IN THE CUT (Choice Scarf)",
       2,
       "S",
       "RK",
       "IN THE CUT (Choice Specs)",
       2,
       "S",
       "W"
      ],
      "Samurott": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Special Attacker",
       1,
       "S",
       "W"
      ],
      "Sawk": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Sceptile": [
       "Life Orb",
       1,
       "S",
       "W"
      ],
      "Scrafty": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Scyther": [
       "Choice Band Pivot",
       2,
       "P",
       "W"
      ],
      "Seismitoad": [
       "Defensive",
       4,
       "M",
       "PW",
       "Offensive Substitute",
       2,
       "S",
       "W"
      ],
      "Shiftry": [
       "Offensive Defogger",
       2,
       "M",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Sigilyph": [
       "Life Orb Attacker",
       1,
       "S",
       "W",
       "Flame Orb",
       3,
       "S",
       "BS"
      ],
      "Slowking": [
       "Calm Mind",
       3,
       "S",
       "BS",
       "Assault Vest",
       3,
       "S",
       "W",
       "Offensive Trick Room",
       2,
       "S",
       "W"
      ],
      "Smeargle": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Sneasel": [
       "All-Out Attacker",
       1,
       "P",
       "W"
      ],
      "Spiritomb": [
       "Physical Attacker",
       2,
       "P",
       "SB",
       "Mono-attacker",
       4,
       "S",
       "BS"
      ],
      "Steelix": [
       "Defensive Tank",
       4,
       "P",
       "MW"
      ],
      "Togetic": [
       "Support",
       4,
       "S",
       "SW"
      ],
      "Torterra": [
       "Bulky Swords Dance",
       3,
       "P",
       "BS"
      ],
      "Typhlosion": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Uxie": [
       "Defensive Pivot",
       4,
       "S",
       "S"
      ],
      "Venusaur": [
       "Wallbreaker",
       1,
       "S",
       "W",
       "Defensive",
       4,
       "M",
       "PW",
       "Chlorophyll Sweeper",
       1,
       "S",
       "OS"
      ],
      "Virizion": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Vivillon": [
       "Quiver Dance",
       2,
       "S",
       "OS"
      ],
      "Weezing": [
       "Mixed Tank",
       4,
       "S",
       "MW"
      ],
      "Xatu": [
       "Defensive Pivot",
       4,
       "S",
       "PW"
      ]
     },
     "NU": {
      "Abomasnow": [
       "Mixed Attacker",
       1,
       "M",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Aggron": [
       "Choice Band",
       3,
       "P",
       "W"
      ],
      "Altaria": [
       "Defensive",
       4,
       "S",
       "PW",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Arbok": [
       "Offensive Coil",
       1,
       "P",
       "OS"
      ],
      "Archeops": [
       "Offensive",
       1,
       "M",
       "W",
       "BulkyCheops",
       3,
       "P",
       "W",
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Articuno": [
       "Burd (Offensive)",
       1,
       "S",
       "W"
      ],
      "Audino": [
       "Defensive Calm Mind",
       4,
       "S",
       "BS",
       "Offensive Pivot",
       1,
       "S",
       "OS",
       "Mixed Defensive Pivot",
       4,
       "S",
       "MW"
      ],
      "Audino-Mega": [
       "Defensive Calm Mind",
       4,
       "S",
       "BS",
       "Offensive Pivot",
       1,
       "S",
       "OS",
       "Mixed Defensive Pivot",
       4,
       "S",
       "MW"
      ],
      "Aurorus": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Stealth Rock",
       2,
       "M",
       "OL"
      ],
      "Barbaracle": [
       "Shell Smash",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Beheeyem": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Bouffalant": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Bronzor": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Cacturne": [
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Camerupt": [
       "Defensive",
       3,
       "M",
       "W",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Carracosta": [
       "Defensive",
       4,
       "M",
       "PW",
       "Mixed Shell Smash",
       1,
       "M",
       "OS"
      ],
      "Charizard": [
       "Life Orb",
       1,
       "S",
       "W",
       "Swords Dance",
       3,
       "P",
       "BS"
      ],
      "Chatot": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Substitute + Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Claydol": [
       "Offensive Spinner",
       2,
       "M",
       "W"
      ],
      "Clefairy": [
       "Support",
       4,
       "S",
       "SW",
       "Calm Mind",
       4,
       "S",
       "BS"
      ],
      "Combusken": [
       "Life Orb",
       1,
       "S",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Cradily": [
       "Specially Defensive",
       4,
       "M",
       "SW"
      ],
      "Crustle": [
       "Hazard Setter",
       2,
       "P",
       "OL"
      ],
      "Cryogonal": [
       "Offensive Spinner",
       2,
       "S",
       "W"
      ],
      "Ditto": [
       "Imposter",
       2,
       "M",
       "RK"
      ],
      "Dodrio": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Drifblim": [
       "Mixed Offensive",
       2,
       "M",
       "W"
      ],
      "Duosion": [
       "Acid Armor + Calm Mind",
       4,
       "S",
       "BS"
      ],
      "Dusknoir": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Electivire": [
       "All-Out Attacker",
       1,
       "M",
       "W"
      ],
      "Electrode": [
       "All-Out Attacker",
       1,
       "S",
       "W"
      ],
      "Exeggutor": [
       "Chlorophyll Sweeper",
       1,
       "S",
       "OS"
      ],
      "Ferroseed": [
       "Defensive",
       4,
       "P",
       "MW"
      ],
      "Flareon": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Floatzel": [
       "Life Orb Attacker",
       1,
       "S",
       "W"
      ],
      "Fraxure": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Frillish": [
       "Physically Defensive",
       4,
       "S",
       "PW"
      ],
      "Frogadier": [
       "All-Out Attacker",
       2,
       "M",
       "W"
      ],
      "Garbodor": [
       "Defensive Spikes",
       4,
       "P",
       "PW",
       "Offensive",
       2,
       "P",
       "W"
      ],
      "Gastrodon": [
       "Physically Defensive",
       4,
       "S",
       "PW"
      ],
      "Gogoat": [
       "Bulk Up",
       3,
       "P",
       "BS"
      ],
      "Golem": [
       "All-Out Attacker",
       1,
       "P",
       "W",
       "Custap Berry",
       2,
       "P",
       "OL"
      ],
      "Golurk": [
       "Stealth Rock",
       2,
       "P",
       "W",
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Gorebyss": [
       "Shell Smash",
       1,
       "S",
       "OS"
      ],
      "Gourgeist-Small": [
       "SubSeed",
       3,
       "P",
       "S"
      ],
      "Gourgeist-Super": [
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Grumpig": [
       "Calm Mind",
       1,
       "S",
       "OS",
       "Offensive Stallbreaker",
       3,
       "S",
       "SB",
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Gurdurr": [
       "Bulky Attacker",
       3,
       "P",
       "BS"
      ],
      "Hariyama": [
       "Assault Vest",
       3,
       "P",
       "W",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Haunter": [
       "Life Orb Attacker",
       2,
       "S",
       "W",
       "SubSplit",
       2,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Hippopotas": [
       "Sand Support",
       5,
       "P",
       "PW"
      ],
      "Hitmonchan": [
       "Physical Attacker",
       2,
       "P",
       "W",
       "Bulk Up",
       1,
       "P",
       "OS",
       "Assault Vest",
       3,
       "P",
       "W"
      ],
      "Jumpluff": [
       "Support Puff",
       2,
       "P",
       "S"
      ],
      "Jynx": [
       "Focus Sash",
       1,
       "S",
       "W",
       "Substitute + Nasty Plot",
       2,
       "S",
       "OS",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Kabutops": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Kadabra": [
       "Revenge Killer",
       2,
       "S",
       "RK"
      ],
      "Kangaskhan": [
       "Offensive",
       1,
       "P",
       "W"
      ],
      "Kecleon": [
       "Mixed Wallbreaker",
       1,
       "M",
       "W"
      ],
      "Klinklang": [
       "Shift Gear",
       1,
       "P",
       "OS"
      ],
      "Lanturn": [
       "Assault Vest",
       3,
       "S",
       "W",
       "Supportive Pivot",
       3,
       "S",
       "S",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Lapras": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Leafeon": [
       "Offensive Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Leavanny": [
       "Sticky Web",
       2,
       "S",
       "OL"
      ],
      "Liepard": [
       "Offensive Pivot",
       2,
       "P",
       "S",
       "Choice Band",
       1,
       "P",
       "W",
       "Weather Support",
       2,
       "P",
       "S",
       "Nasty Plot",
       2,
       "S",
       "OS"
      ],
      "Lilligant": [
       "Quiver Dance",
       2,
       "S",
       "OS",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Linoone": [
       "Belly Drum",
       1,
       "P",
       "OS"
      ],
      "Ludicolo": [
       "Rain Dance",
       2,
       "S",
       "W"
      ],
      "Machoke": [
       "Bulky Attacker",
       3,
       "P",
       "W"
      ],
      "Magmortar": [
       "Assault Vest Tank",
       3,
       "M",
       "W",
       "Wallbreaker",
       1,
       "M",
       "W"
      ],
      "Malamar": [
       "RestTalk",
       3,
       "P",
       "BS"
      ],
      "Manectric": [
       "Special Attacker",
       2,
       "S",
       "W"
      ],
      "Mantine": [
       "SubToxic",
       2,
       "S",
       "W",
       "Mixed Defensive Defog",
       4,
       "S",
       "MW",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Marowak": [
       "Bone Crusher (Wallbreaker)",
       1,
       "P",
       "W"
      ],
      "Mawile": [
       "Mixed Wallbreaker",
       1,
       "M",
       "W",
       "Defensive",
       3,
       "P",
       "PW"
      ],
      "Mesprit": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Offensive + 3 Attacks",
       2,
       "S",
       "W",
       "Physically Defensive",
       4,
       "M",
       "PW",
       "Substitute + Calm Mind",
       1,
       "S",
       "OS",
       "Offensive Stealth Rock",
       2,
       "S",
       "OL",
       "Choice Scarf",
       2,
       "M",
       "RK",
       "Weather Support",
       4,
       "M",
       "S"
      ],
      "Miltank": [
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Misdreavus": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Mismagius": [
       "Bulky Support",
       2,
       "S",
       "S"
      ],
      "Mr. Mime": [
       "Special Attacker",
       2,
       "S",
       "W"
      ],
      "Muk": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Musharna": [
       "Calm Mind",
       3,
       "S",
       "BS",
       "Stored Power",
       4,
       "S",
       "BS"
      ],
      "Ninetales": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Ninjask": [
       "Revenge Killer + Pivot",
       1,
       "P",
       "RK"
      ],
      "Omastar": [
       "Defensive Entry Hazards",
       4,
       "S",
       "PW",
       "Shell Smash",
       1,
       "S",
       "OS",
       "Offensive Entry Hazards",
       2,
       "S",
       "OL"
      ],
      "Pawniard": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Pelipper": [
       "Physically Defensive",
       4,
       "S",
       "PW"
      ],
      "Piloswine": [
       "Tank",
       3,
       "P",
       "W"
      ],
      "Pinsir": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Stealth Rock",
       2,
       "P",
       "OL",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Poliwrath": [
       "Special Attacker",
       1,
       "S",
       "W"
      ],
      "Primeape": [
       "Choice Band",
       1,
       "P",
       "W",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Prinplup": [
       "Support",
       4,
       "S",
       "S"
      ],
      "Probopass": [
       "Steel Trapper",
       2,
       "S",
       "S"
      ],
      "Purugly": [
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Pyroar": [
       "Special Attacker",
       1,
       "S",
       "W"
      ],
      "Quagsire": [
       "Unaware Wall",
       4,
       "M",
       "PW"
      ],
      "Raichu": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Rampardos": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Regice": [
       "Tank",
       3,
       "S",
       "W"
      ],
      "Regirock": [
       "Mixed Defensive Tank",
       4,
       "P",
       "MW",
       "Sunny Day Setter",
       3,
       "P",
       "OL"
      ],
      "Relicanth": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Rhydon": [
       "Dancing Dino",
       1,
       "P",
       "OS",
       "Tank",
       3,
       "P",
       "MW"
      ],
      "Roselia": [
       "Defensive Spikes",
       4,
       "S",
       "S",
       "Focus Sash Lead",
       2,
       "S",
       "OL",
       "Offensive Spikes",
       2,
       "S",
       "W"
      ],
      "Rotom": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Spell Tag Hex",
       2,
       "S",
       "W",
       "Choice Specs",
       2,
       "S",
       "W",
       "Substitute + Hex",
       3,
       "S",
       "W",
       "Defensive",
       3,
       "S",
       "S"
      ],
      "Rotom-Fan": [
       "Expert Belt",
       2,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Rotom-Frost": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "SubSplit",
       2,
       "S",
       "W"
      ],
      "Samurott": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Mixed Wallbreaker",
       1,
       "M",
       "W"
      ],
      "Sandslash": [
       "Sand Rush",
       1,
       "P",
       "OS"
      ],
      "Sawsbuck": [
       "Swords Dance Sweeper",
       1,
       "P",
       "OS"
      ],
      "Scyther": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Shedinja": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Shiftry": [
       "Physically Mixed",
       1,
       "M",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Simisage": [
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Skuntank": [
       "Utility Attacker",
       2,
       "P",
       "W",
       "Special Attacking Defog",
       2,
       "S",
       "W"
      ],
      "Sliggoo": [
       "Curse",
       "4",
       "P",
       "BS",
       "Offensive",
       1,
       "S",
       "W"
      ],
      "Smeargle": [
       "Lead",
       5,
       "P",
       "OL"
      ],
      "Solrock": [
       "Special Wall",
       1,
       "P",
       "SW"
      ],
      "Steelix": [
       "Tank",
       4,
       "P",
       "MW"
      ],
      "Stoutland": [
       "Sand Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Swellow": [
       "Choice Specs",
       1,
       "M",
       "W",
       "Guts Attacker",
       1,
       "P",
       "W"
      ],
      "Tangela": [
       "Offensive",
       3,
       "S",
       "W",
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Tauros": [
       "All-Out Attacker",
       1,
       "P",
       "W"
      ],
      "Throh": [
       "Phazer",
       4,
       "P",
       "BS"
      ],
      "Torterra": [
       "Rock Polish",
       1,
       "P",
       "OS",
       "Tank",
       3,
       "P",
       "W",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Trevenant": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Vanilluxe": [
       "All-Out Attacker",
       1,
       "S",
       "W"
      ],
      "Victreebel": [
       "Chlorophyll Sweeper",
       1,
       "S",
       "OS"
      ],
      "Vigoroth": [
       "Bulk Up",
       3,
       "P",
       "BS"
      ],
      "Vileplume": [
       "Defensive",
       4,
       "S",
       "PW",
       "Offensive",
       1,
       "S",
       "W"
      ],
      "Vivillon": [
       "Quiver Dance",
       2,
       "S",
       "OS",
       "Substitute + Quiver Dance",
       2,
       "S",
       "OS"
      ],
      "Weezing": [
       "Physically Defensive",
       4,
       "S",
       "PW"
      ],
      "Xatu": [
       "Pivot",
       4,
       "S",
       "PW",
       "Calm Mind",
       3,
       "S",
       "BS",
       "Offensive",
       1,
       "S",
       "W"
      ],
      "Zangoose": [
       "Toxic Orb Attacker",
       1,
       "P",
       "W"
      ]
     },
     "PU": {
      "Altaria": [
       "Physically Defensive",
       4,
       "S",
       "PW",
       "Special Attacker",
       2,
       "S",
       "W",
       "Offensive Dragon Dance",
       1,
       "P",
       "OS",
       "Bulky Dragon Dance",
       3,
       "P",
       "BS"
      ],
      "Ampharos": [
       "Cleric",
       2,
       "S",
       "S"
      ],
      "Arbok": [
       "Offensive Coil",
       1,
       "P",
       "OS"
      ],
      "Ariados": [
       "Lead",
       2,
       "P",
       "OS"
      ],
      "Armaldo": [
       "Rapid Spin",
       2,
       "P",
       "W",
       "Swift Swim",
       1,
       "P",
       "OS"
      ],
      "Articuno": [
       "SubRoost",
       2,
       "S",
       "W",
       "Agility",
       1,
       "S",
       "OS"
      ],
      "Audino": [
       "Wish Passer",
       4,
       "P",
       "SW"
      ],
      "Avalugg": [
       "Rapid Spin",
       4,
       "P",
       "MW"
      ],
      "Banette": [
       "Offensive Utility",
       2,
       "P",
       "W"
      ],
      "Basculin": [
       "All-Out Attacker",
       1,
       "P",
       "W"
      ],
      "Bastiodon": [
       "Utility",
       5,
       "S",
       "MW"
      ],
      "Beartic": [
       "Swift Swim Sweeper",
       1,
       "P",
       "OS"
      ],
      "Beedrill": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Beheeyem": [
       "Defensive Nasty Plot",
       3,
       "S",
       "BS",
       "Choice Specs",
       1,
       "S",
       "W",
       "Trick Room",
       2,
       "S",
       "W"
      ],
      "Bellossom": [
       "Sun 'Sweeper'",
       1,
       "S",
       "OS"
      ],
      "Bibarel": [
       "Curse",
       3,
       "P",
       "BS"
      ],
      "Bouffalant": [
       "Substitute",
       2,
       "P",
       "OS",
       "Tank",
       3,
       "P",
       "W",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Bronzor": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Butterfree": [
       "Quiver Dance",
       2,
       "S",
       "OS"
      ],
      "Cacturne": [
       "Mixed Wallbreaker",
       1,
       "M",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Camerupt": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Carbink": [
       "ROCK WITH EYES",
       4,
       "S",
       "BS",
       "Sun Support",
       4,
       "P",
       "S"
      ],
      "Carnivine": [
       "Offensive",
       2,
       "P",
       "W"
      ],
      "Castform": [
       "Chasing Rainbows",
       2,
       "S",
       "W"
      ],
      "Chatot": [
       "Choice Scarf",
       1,
       "M",
       "RK",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Cherrim": [
       "Offensive Healing Wish",
       2,
       "S",
       "W"
      ],
      "Chimecho": [
       "Defensive Healing Wish",
       4,
       "S",
       "SW"
      ],
      "Chinchou": [
       "Specially Defensive Pivot",
       4,
       "S",
       "SW"
      ],
      "Clefairy": [
       "Specially Defensive",
       4,
       "M",
       "SW",
       "Calm Mind",
       4,
       "S",
       "BS"
      ],
      "Combusken": [
       "Life Orb Attacker",
       1,
       "S",
       "W"
      ],
      "Corsola": [
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Crustle": [
       "Crustap",
       2,
       "P",
       "OL",
       "Shell Smash",
       1,
       "P",
       "OS"
      ],
      "Cryogonal": [
       "Offensive Rapid Spinner",
       2,
       "S",
       "W"
      ],
      "Dedenne": [
       "SubRecycle",
       2,
       "S",
       "OS"
      ],
      "Delcatty": [
       "Delcatty Got Your Tongue?",
       1,
       "S",
       "OS"
      ],
      "Delibird": [
       "Spikes Lead",
       2,
       "S",
       "OL"
      ],
      "Dewgong": [
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Ditto": [
       "Revenge Killer",
       2,
       "M",
       "RK"
      ],
      "Dodrio": [
       "Wallbreaker",
       1,
       "P",
       "W",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Drifblim": [
       "AcroBlim",
       2,
       "P",
       "W",
       "Special Attacker",
       2,
       "S",
       "OS"
      ],
      "Dunsparce": [
       "Stealth Rock",
       4,
       "P",
       "S"
      ],
      "Duosion": [
       "Calm Mind",
       4,
       "S",
       "BS",
       "Trick Room Attacker",
       3,
       "S",
       "W"
      ],
      "Dusclops": [
       "Calm Mind",
       4,
       "S",
       "BS"
      ],
      "Dusknoir": [
       "Life Orb Attacker",
       1,
       "P",
       "W",
       "Offensive",
       2,
       "P",
       "W"
      ],
      "Dustox": [
       "Quiver Dance",
       1,
       "S",
       "OS"
      ],
      "Electabuzz": [
       "Eviolite",
       1,
       "S",
       "W"
      ],
      "Electrode": [
       "Special Attacker",
       1,
       "S",
       "W",
       "Rain Lead",
       2,
       "M",
       "OL"
      ],
      "Emolga": [
       "Support",
       2,
       "P",
       "S"
      ],
      "Farfetch’d": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Fearow": [
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Flareon": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Floatzel": [
       "Special Attacker",
       1,
       "S",
       "W",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Fraxure": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Furfrou": [
       "Offensive Pivot",
       2,
       "P",
       "S"
      ],
      "Furret": [
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Gabite": [
       "Offensive Stealth Rock",
       2,
       "P",
       "S",
       "Defensive Stealth Rock",
       4,
       "P",
       "PW"
      ],
      "Gigalith": [
       "Tank",
       3,
       "P",
       "W"
      ],
      "Girafarig": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Glaceon": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Glalie": [
       "Spikes Lead",
       2,
       "P",
       "OL"
      ],
      "Gogoat": [
       "Bulk Up",
       3,
       "P",
       "BS"
      ],
      "Golduck": [
       "Rain Dance",
       2,
       "S",
       "W"
      ],
      "Golem": [
       "Specially Defensive",
       4,
       "P",
       "SW",
       "Choice Band",
       1,
       "P",
       "W",
       "Lead",
       2,
       "P",
       "OL",
       "Sun Lead",
       2,
       "P",
       "OL"
      ],
      "Gorebyss": [
       "Shell Smash",
       1,
       "S",
       "OS"
      ],
      "Gothitelle": [
       "Trapper",
       4,
       "S",
       "SB"
      ],
      "Gourgeist": [
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Gourgeist-Large": [
       "Defensive",
       4,
       "P",
       "MW"
      ],
      "Gourgeist-Small": [
       "SubSeed",
       3,
       "P",
       "S"
      ],
      "Gourgeist-Super": [
       "Defensive",
       4,
       "P",
       "MW"
      ],
      "Grumpig": [
       "Substitute + Calm Mind",
       1,
       "S",
       "OS",
       "Offensive Utility",
       2,
       "S",
       "W",
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Heatmor": [
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Hippopotas": [
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Huntail": [
       "Shell Smash",
       1,
       "P",
       "OS"
      ],
      "Hypno": [
       "Wish Passer",
       4,
       "S",
       "SW"
      ],
      "Illumise": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Jumpluff": [
       "Offensive Utility",
       2,
       "P",
       "S",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Kadabra": [
       "Revenge Killer",
       2,
       "S",
       "RK",
       "Life Orb",
       2,
       "S",
       "W"
      ],
      "Kingler": [
       "Agility Sweeper",
       1,
       "P",
       "OS"
      ],
      "Klang": [
       "RestTalk",
       4,
       "P",
       "BS"
      ],
      "Kricketune": [
       "Sticky Web",
       2,
       "P",
       "OL"
      ],
      "Krokorok": [
       "Choice Band",
       2,
       "P",
       "W"
      ],
      "Lapras": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Leafeon": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Leavanny": [
       "Sticky Web",
       2,
       "M",
       "OL"
      ],
      "Ledian": [
       "Dual Screens",
       2,
       "P",
       "S"
      ],
      "Lickilicky": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Lopunny": [
       "Offensive Utility",
       2,
       "P",
       "W"
      ],
      "Lumineon": [
       "Defog",
       4,
       "M",
       "PW"
      ],
      "Lunatone": [
       "Rock Polish",
       1,
       "S",
       "OS"
      ],
      "Luvdisc": [
       "#LuvdiscWins",
       5,
       "P",
       "S"
      ],
      "Luxray": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Magcargo": [
       "Support",
       4,
       "S",
       "SW"
      ],
      "Maractus": [
       "Spikes Lead",
       2,
       "P",
       "OL"
      ],
      "Marowak": [
       "Offensive",
       1,
       "P",
       "W"
      ],
      "Masquerain": [
       "Quiver Dance",
       1,
       "S",
       "OS"
      ],
      "Mawile": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "All-out Attacker",
       1,
       "P",
       "W",
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Meganium": [
       "Specially Defensive Support",
       1,
       "M",
       "SW"
      ],
      "Meowstic": [
       "Dual Screens",
       4,
       "S",
       "S"
      ],
      "Meowstic-F": [
       "Competitive(ly Terrible) Sweeper",
       1,
       "S",
       "OS"
      ],
      "Metang": [
       "Offensive Stealth Rock",
       2,
       "P",
       "W"
      ],
      "Mightyena": [
       "Life Orb Cleaner",
       1,
       "P",
       "W"
      ],
      "Minun": [
       "Cheerleader",
       5,
       "S",
       "S"
      ],
      "Misdreavus": [
       "Defensive",
       4,
       "P",
       "PW",
       "Nasty Plot",
       2,
       "S",
       "OS"
      ],
      "Monferno": [
       "All-Out Attacker",
       1,
       "P",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Mothim": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Mr. Mime": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Nasty Plot",
       1,
       "S",
       "OS",
       "Choice Specs",
       2,
       "S",
       "W"
      ],
      "Muk": [
       "CroMuk",
       4,
       "P",
       "BS",
       "Choice Band",
       1,
       "P",
       "W",
       "Assault Vest",
       3,
       "P",
       "W"
      ],
      "Munchlax": [
       "CurseLax",
       4,
       "P",
       "BS"
      ],
      "Murkrow": [
       "Life Orb",
       1,
       "M",
       "W"
      ],
      "Natu": [
       "Entry Hazards; Natu-day",
       4,
       "M",
       "S"
      ],
      "Ninetales": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Ninjask": [
       "Offensive",
       1,
       "P",
       "W"
      ],
      "Noctowl": [
       "Defensive Defog",
       4,
       "S",
       "SW"
      ],
      "Octillery": [
       "Bulky Special Attacker",
       3,
       "S",
       "W"
      ],
      "Pachirisu": [
       "Pachiraichu",
       4,
       "P",
       "S"
      ],
      "Parasect": [
       "Spore",
       4,
       "P",
       "S"
      ],
      "Pawniard": [
       "Physical Attacker",
       1,
       "P",
       "OS"
      ],
      "Pelipper": [
       "Physically Defensive",
       4,
       "S",
       "PW"
      ],
      "Persian": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Phione": [
       "Rain Support",
       4,
       "M",
       "S"
      ],
      "Pidgeot": [
       "Offensive Defog",
       2,
       "P",
       "W"
      ],
      "Plusle": [
       "'Offensive'",
       1,
       "S",
       "OS"
      ],
      "Politoed": [
       "Tank",
       3,
       "S",
       "W"
      ],
      "Prinplup": [
       "Utility",
       4,
       "S",
       "S"
      ],
      "Probopass": [
       "Offensive Pivot",
       2,
       "S",
       "S",
       "Defensive Stealth Rock",
       4,
       "S",
       "SW"
      ],
      "Purugly": [
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Quilladin": [
       "Offensive Spikes",
       2,
       "P",
       "S",
       "Defensive Spikes",
       4,
       "P",
       "PW"
      ],
      "Raichu": [
       "Nasty Plot",
       1,
       "S",
       "OS",
       "All-Out Attacker",
       1,
       "S",
       "W"
      ],
      "Rampardos": [
       "Wallbreaker",
       1,
       "P",
       "W",
       "Stealth Rock Lead",
       2,
       "P",
       "OL"
      ],
      "Rapidash": [
       "Physical Attacker",
       2,
       "P",
       "W"
      ],
      "Raticate": [
       "Guts",
       2,
       "P",
       "W"
      ],
      "Regice": [
       "Rock Polish",
       1,
       "S",
       "OS",
       "Tank",
       3,
       "S",
       "W"
      ],
      "Regigigas": [
       "Tank",
       3,
       "P",
       "W"
      ],
      "Relicanth": [
       "Physically Defensive",
       4,
       "P",
       "PW",
       "Rock Polish",
       1,
       "P",
       "OS",
       "Rain Lead",
       2,
       "P",
       "OL"
      ],
      "Roselia": [
       "Defensive",
       4,
       "S",
       "S",
       "Offensive",
       2,
       "S",
       "W"
      ],
      "Rotom-Fan": [
       "Offensive Utility",
       2,
       "S",
       "W"
      ],
      "Rotom-Frost": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "SubWisp",
       2,
       "S",
       "W",
       "SubSplit",
       2,
       "S",
       "W"
      ],
      "Sawsbuck": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Seaking": [
       "Utility",
       2,
       "P",
       "W"
      ],
      "Servine": [
       "Substitute + Synthesis",
       3,
       "S",
       "BS"
      ],
      "Seviper": [
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Shedinja": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Simipour": [
       "Mixed Attacker",
       1,
       "M",
       "W",
       "Choice Scarf",
       1,
       "S",
       "RK",
       "Substitute + Nasty Plot",
       2,
       "S",
       "OS"
      ],
      "Simisage": [
       "All-Out Attacker",
       1,
       "M",
       "W",
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Nasty Plot Sweeper",
       1,
       "S",
       "OS"
      ],
      "Simisear": [
       "Nasty Plot",
       1,
       "S",
       "OS",
       "All-Out Attacker",
       1,
       "M",
       "W"
      ],
      "Slaking": [
       "Wallbreaker",
       2,
       "P",
       "W"
      ],
      "Smeargle": [
       "Suicide Lead",
       4,
       "P",
       "OL"
      ],
      "Solrock": [
       "Wall",
       4,
       "P",
       "PW",
       "Sun Screen",
       4,
       "P",
       "S"
      ],
      "Spinda": [
       "Drowning in Sorrow... and Berry Juice",
       2,
       "P",
       "S"
      ],
      "Stantler": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Stoutland": [
       "Wallbreaker",
       1,
       "P",
       "W",
       "Sand Rush",
       1,
       "P",
       "W"
      ],
      "Stunfisk": [
       "Support",
       4,
       "S",
       "PW"
      ],
      "Sudowoodo": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Sunflora": [
       "Synthesis + 3 Attacks",
       2,
       "S",
       "W"
      ],
      "Swalot": [
       "Tank",
       1,
       "P",
       "W"
      ],
      "Swanna": [
       "Offensive Defog",
       3,
       "M",
       "W"
      ],
      "Swoobat": [
       "Calm Mind",
       2,
       "S",
       "OS"
      ],
      "Tangela": [
       "Offensive",
       3,
       "S",
       "W",
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Tentacool": [
       "Support",
       4,
       "M",
       "S"
      ],
      "Torkoal": [
       "Offensive Rapid Spin",
       2,
       "M",
       "OS",
       "Defensive",
       4,
       "M",
       "PW"
      ],
      "Trevenant": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Tropius": [
       "SubSeed",
       4,
       "S",
       "PW"
      ],
      "Unfezant": [
       "Tailwind Support",
       2,
       "P",
       "S"
      ],
      "Unown": [
       "For Reasons Unown",
       1,
       "S",
       "W"
      ],
      "Ursaring": [
       "Quick Feet",
       1,
       "P",
       "OS",
       "Bulk Up",
       3,
       "P",
       "BS"
      ],
      "Vanilluxe": [
       "Autotomize",
       1,
       "S",
       "OS"
      ],
      "Venipede": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Vespiquen": [
       "Offensive Utility",
       2,
       "S",
       "S"
      ],
      "Vibrava": [
       "Defog",
       4,
       "P",
       "PW"
      ],
      "Volbeat": [
       "Weather Supporter",
       4,
       "P",
       "S"
      ],
      "Vullaby": [
       "Defensive",
       4,
       "P",
       "PW"
      ],
      "Wailord": [
       "StallLord",
       4,
       "S",
       "SW"
      ],
      "Walrein": [
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Wartortle": [
       "Rapid Spin",
       4,
       "M",
       "S"
      ],
      "Watchog": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Weepinbell": [
       "Sun Sweeper",
       2,
       "S",
       "OS"
      ],
      "Whirlipede": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Whiscash": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Wigglytuff": [
       "Offensive Stealth Rock",
       2,
       "S",
       "W"
      ],
      "Wobbuffet": [
       "Bulky Death Fodder",
       5,
       "M",
       "SB"
      ],
      "Wormadam": [
       "Drag Worm",
       1,
       "S",
       "W"
      ],
      "Wormadam-Sandy": [
       "Margherita",
       2,
       "P",
       "W"
      ],
      "Wormadam-Trash": [
       "Utility",
       4,
       "P",
       "PW"
      ],
      "Zebstrika": [
       "All-Out Attacker",
       1,
       "S",
       "W"
      ],
      "Zweilous": [
       "Choice Band",
       1,
       "P",
       "W",
       "Specially Defensive",
       4,
       "P",
       "SW"
      ]
     },
     "LC": {
      "Abra": [
       "Focus Sash",
       1,
       "S",
       "RK",
       "Life Orb",
       1,
       "S",
       "W"
      ],
      "Aipom": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Amaura": [
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Anorith": [
       "Support",
       2,
       "P",
       "S",
       "Life Orb Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Archen": [
       "Wallbreaker",
       "",
       "",
       "",
       "Fast Support",
       2,
       "P",
       "S"
      ],
      "Aron": [
       "Sturdy Lead",
       2,
       "P",
       "OL",
       "Rock Head",
       3,
       "P",
       "W",
       "Sticky Web Attacker",
       1,
       "P",
       "W"
      ],
      "Axew": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Choice",
       1,
       "P",
       "W"
      ],
      "Azurill": [
       "Trick Room Sweeper",
       1,
       "P",
       "W"
      ],
      "Bagon": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Baltoy": [
       "Rapid Spin",
       4,
       "M",
       "MW"
      ],
      "Bellsprout": [
       "Sun Sweeper",
       1,
       "S",
       "OS"
      ],
      "Bergmite": [
       "Rapid Spin Support",
       4,
       "P",
       "MW"
      ],
      "Bidoof": [
       "Curse",
       3,
       "P",
       "BS"
      ],
      "Binacle": [
       "Shell Smash",
       1,
       "P",
       "OS",
       "Switcheroo",
       2,
       "P",
       "W"
      ],
      "Blitzle": [
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Bronzor": [
       "Berry Juice + Recycle",
       4,
       "M",
       "MW"
      ],
      "Budew": [
       "Spikes",
       "",
       "",
       ""
      ],
      "Buizel": [
       "Life Orb Attacker",
       1,
       "P",
       "W"
      ],
      "Bulbasaur": [
       "Life Orb Sun Sweeper",
       1,
       "S",
       "OS",
       "Eviolite Growth",
       1,
       "S",
       "OS"
      ],
      "Buneary": [
       "Choice Band",
       1,
       "P",
       "W",
       "Switcheroo Support",
       4,
       "P",
       "S"
      ],
      "Bunnelby": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Cacnea": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Carvanha": [
       "Physical Life Orb",
       "",
       "",
       "",
       "Special Life Orb",
       "",
       "",
       ""
      ],
      "Charmander": [
       "Sun Wallbreaker",
       "",
       "",
       ""
      ],
      "Cherubi": [
       "Chlorophyll Sweeper",
       1,
       "S",
       "OS"
      ],
      "Chespin": [
       "Spikes",
       "",
       "",
       ""
      ],
      "Chikorita": [
       "Aromatherapy",
       4,
       "S",
       "S"
      ],
      "Chimchar": [
       "Lead",
       2,
       "P",
       "OL"
      ],
      "Chinchou": [
       "Defensive",
       "",
       "",
       "",
       "Fast Berry Juice",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Clamperl": [
       "Shell Smash",
       1,
       "S",
       "OS"
      ],
      "Clauncher": [
       "Pivot",
       3,
       "M",
       "W"
      ],
      "Cleffa": [
       "Counter",
       2,
       "P",
       "OL"
      ],
      "Corphish": [
       "Wallbreaker",
       1,
       "P",
       "W",
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Cottonee": [
       "Utility",
       4,
       "M",
       "S"
      ],
      "Cranidos": [
       "Sticky Web Wallbreaker",
       "",
       "",
       ""
      ],
      "Croagunk": [
       "Mixed Utility",
       2,
       "M",
       "W",
       "Physical Attacker",
       1,
       "P",
       "W",
       "Nasty Plot Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Cubchoo": [
       "Offensive",
       1,
       "P",
       "W"
      ],
      "Cubone": [
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Cyndaquil": [
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Darumaka": [
       "Choice",
       1,
       "P",
       "W"
      ],
      "Deerling": [
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Deino": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Diglett": [
       "Eviolite",
       "",
       "",
       "",
       "Air Balloon",
       "",
       "",
       "",
       "Life Orb",
       "",
       "",
       "",
       "Focus Sash",
       "",
       "",
       ""
      ],
      "Doduo": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Dratini": [
       "Mixed Attacker",
       1,
       "M",
       "W",
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Drilbur": [
       "Spinner",
       "",
       "",
       ""
      ],
      "Drowzee": [
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Duskull": [
       "Utility",
       4,
       "P",
       "MW"
      ],
      "Dwebble": [
       "Entry Hazard Lead",
       "",
       "",
       ""
      ],
      "Ekans": [
       "Coil Sweeper",
       1,
       "P",
       "OS"
      ],
      "Electrike": [
       "Choice",
       1,
       "P",
       "W"
      ],
      "Elekid": [
       "Special Attacker",
       1,
       "S",
       "W",
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Elgyem": [
       "Bulky Attacker",
       3,
       "S",
       "W"
      ],
      "Exeggcute": [
       "Harvest Abuser",
       3,
       "S",
       "W"
      ],
      "Fennekin": [
       "Magician",
       2,
       "S",
       "W"
      ],
      "Ferroseed": [
       "Berry Juice",
       "",
       "",
       "",
       "Eviolite",
       "",
       "",
       ""
      ],
      "Finneon": [
       "Defog",
       2,
       "M",
       "S"
      ],
      "Flabébé": [
       "Calm Mind Attacker",
       1,
       "S",
       "OS"
      ],
      "Fletchling": [
       "Fast Physical",
       "",
       "",
       "",
       "Fast Mixed",
       "",
       "",
       "",
       "Bulky Physical",
       "",
       "",
       ""
      ],
      "Foongus": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Frillish": [
       "Choice Scarf",
       1,
       "S",
       "RK",
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Froakie": [
       "Life Orb",
       1,
       "M",
       "W",
       "Choice Scarf",
       1,
       "M",
       "RK",
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Gastly": [
       "Life Orb",
       1,
       "S",
       "W"
      ],
      "Geodude": [
       "Stealth Rock Lead",
       2,
       "P",
       "OL"
      ],
      "Gible": [
       "Bulky Offensive",
       3,
       "P",
       "W"
      ],
      "Glameow": [
       "Life Orb Attacker",
       1,
       "P",
       "W"
      ],
      "Goldeen": [
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Golett": [
       "Tank",
       3,
       "P",
       "W"
      ],
      "Goomy": [
       "Gooey Pivot",
       3,
       "S",
       "MW"
      ],
      "Gothita": [
       "Choice Scarf",
       1,
       "S",
       "RK",
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Grimer": [
       "Bulky Attacker",
       3,
       "P",
       "W"
      ],
      "Growlithe": [
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Helioptile": [
       "Paralysis Pivot",
       4,
       "S",
       "S"
      ],
      "Hippopotas": [
       "Physical Wall",
       4,
       "P",
       "PW"
      ],
      "Honedge": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Hoppip": [
       "Offensive Support",
       2,
       "P",
       "S"
      ],
      "Horsea": [
       "Swift Swim",
       1,
       "S",
       "W"
      ],
      "Houndour": [
       "Mixed Attacker",
       2,
       "M",
       "W",
       "Choice Scarf",
       2,
       "M",
       "RK"
      ],
      "Inkay": [
       "Choice Scarf",
       1,
       "P",
       "OS",
       "Trick Room",
       1,
       "P",
       "OS"
      ],
      "Joltik": [
       "Choice Scarf",
       1,
       "S",
       "RK",
       "Substitute + 3 Attacks",
       1,
       "S",
       "W"
      ],
      "Kabuto": [
       "Support",
       2,
       "P",
       "S"
      ],
      "Karrablast": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Koffing": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Krabby": [
       "Boosting Sweeper",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Larvesta": [
       "Pivot",
       "",
       "",
       ""
      ],
      "Larvitar": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Lickitung": [
       "Wish Support",
       4,
       "P",
       "S"
      ],
      "Lileep": [
       "Tank",
       4,
       "S",
       "MW"
      ],
      "Lillipup": [
       "Thunder Wave Support",
       2,
       "P",
       "S"
      ],
      "Litleo": [
       "Special Attacker",
       1,
       "S",
       "W"
      ],
      "Litwick": [
       "Trick Room Sweeper",
       1,
       "S",
       "OS"
      ],
      "Lotad": [
       "Life Orb",
       1,
       "S",
       "W"
      ],
      "Machop": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Magby": [
       "Belly Drum",
       1,
       "P",
       "OS",
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Magnemite": [
       "Sturdy + Berry Juice",
       3,
       "S",
       "W",
       "Choice Scarf",
       1,
       "S",
       "RK",
       "Magnet Pull",
       2,
       "S",
       "SB"
      ],
      "Mankey": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Mantyke": [
       "Rain Dance",
       1,
       "S",
       "W",
       "RestTalk",
       4,
       "S",
       "MW"
      ],
      "Mareep": [
       "Dual Screens",
       4,
       "S",
       "S"
      ],
      "Meowth": [
       "Mixed Attacker",
       1,
       "M",
       "W",
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Mienfoo": [
       "Fast Pivot",
       "",
       "",
       "",
       "Bulky Pivot",
       "",
       "",
       "",
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Mime Jr.": [
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Minccino": [
       "Life Orb",
       2,
       "P",
       "W",
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Munchlax": [
       "Physically Offensive Tank",
       3,
       "P",
       "W",
       "RestTalk",
       4,
       "P",
       "SW"
      ],
      "Munna": [
       "Trick Room",
       4,
       "S",
       "S"
      ],
      "Natu": [
       "Defensive",
       4,
       "M",
       "MW",
       "Life Orb",
       1,
       "M",
       "W",
       "Dual Screens",
       2,
       "M",
       "S"
      ],
      "Nidoran-M": [
       "Hone Claws",
       1,
       "P",
       "OS"
      ],
      "Noibat": [
       "Tailwind + 3 Attacks",
       2,
       "S",
       "W"
      ],
      "Nosepass": [
       "Utility",
       4,
       "S",
       "MW"
      ],
      "Numel": [
       "Defensive",
       3,
       "S",
       "SW",
       "Simple Sweeper",
       1,
       "S",
       "OS"
      ],
      "Oddish": [
       "Chlorophyll Sweeper",
       1,
       "S",
       "OS",
       "Eviolite",
       3,
       "S",
       "W"
      ],
      "Omanyte": [
       "Shell Smash",
       "",
       "",
       "",
       "Entry Hazard Setter",
       2,
       "M",
       "S"
      ],
      "Onix": [
       "SturdyJuice",
       "",
       "",
       "",
       "Weak Armor",
       "",
       "",
       ""
      ],
      "Oshawott": [
       "Croagunk Lure",
       1,
       "S",
       "W"
      ],
      "Pancham": [
       "Pivot",
       3,
       "P",
       "W",
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Panpour": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Pansage": [
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Pansear": [
       "Berry Juice Stall",
       4,
       "P",
       "SW",
       "Nasty Plot",
       1,
       "M",
       "OS"
      ],
      "Paras": [
       "Utility",
       4,
       "P",
       "PW"
      ],
      "Pawniard": [
       "Standard",
       3,
       "P",
       "W",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Petilil": [
       "Sun Support",
       2,
       "S",
       "S"
      ],
      "Phanpy": [
       "Utility",
       3,
       "P",
       "S"
      ],
      "Phantump": [
       "SubSeeder",
       4,
       "P",
       "MW",
       "Attacker",
       3,
       "P",
       "W"
      ],
      "Pineco": [
       "Entry Hazard Lead",
       2,
       "P",
       "OL"
      ],
      "Piplup": [
       "Stealth Rock + Defog",
       4,
       "S",
       "S"
      ],
      "Poliwag": [
       "Belly Drum",
       1,
       "P",
       "OS"
      ],
      "Ponyta": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Poochyena": [
       "Quick Feet",
       1,
       "P",
       "W"
      ],
      "Porygon": [
       "Defensive",
       4,
       "S",
       "PW",
       "Agility + 3 Attacks",
       "",
       "",
       "",
       "Bulky Attacker",
       3,
       "S",
       "W",
       "Bulky Agility",
       "",
       "",
       ""
      ],
      "Pumpkaboo-Small": [
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Pumpkaboo-Super": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Purrloin": [
       "Disruptive Pivot",
       2,
       "P",
       "S"
      ],
      "Rattata": [
       "Hustle",
       1,
       "P",
       "W"
      ],
      "Remoraid": [
       "Mixed Choice Scarf",
       1,
       "M",
       "RK"
      ],
      "Rhyhorn": [
       "Tank",
       3,
       "P",
       "W"
      ],
      "Riolu": [
       "Offensive Swords Dance Sweeper",
       1,
       "P",
       "OS",
       "Bulky Swords Dance Sweeper",
       3,
       "P",
       "BS"
      ],
      "Rufflet": [
       "Bulk Up",
       3,
       "P",
       "BS",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Sandile": [
       "Bulky Stealth Rock",
       3,
       "P",
       "S",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Sandshrew": [
       "Rapid Spin",
       3,
       "P",
       "S"
      ],
      "Scraggy": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Seel": [
       "Perish Trapper",
       4,
       "S",
       "SB",
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Sewaddle": [
       "Sticky Web Setter",
       2,
       "S",
       "OL"
      ],
      "Shellder": [
       "Shell Smash",
       "",
       "",
       ""
      ],
      "Shellos": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Shelmet": [
       "Spikes",
       1,
       "P",
       "W"
      ],
      "Shieldon": [
       "Support",
       4,
       "S",
       "S"
      ],
      "Shinx": [
       "Intimidate Pivot",
       2,
       "P",
       "W"
      ],
      "Shroomish": [
       "Tank",
       3,
       "P",
       "W",
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Shuppet": [
       "Offensive Trick Room",
       2,
       "P",
       "OL"
      ],
      "Skiddo": [
       "Bulk Up",
       3,
       "P",
       "BS"
      ],
      "Skorupi": [
       "Support",
       2,
       "P",
       "S"
      ],
      "Skrelp": [
       "Special Attacker",
       1,
       "S",
       "W",
       "RestTalk",
       3,
       "S",
       "W"
      ],
      "Slowpoke": [
       "Tank",
       4,
       "S",
       "MW"
      ],
      "Slugma": [
       "Status Spreader",
       4,
       "S",
       "S",
       "Dual Screens",
       4,
       "S",
       "S"
      ],
      "Smoochum": [
       "Setup",
       1,
       "S",
       "OS",
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Snivy": [
       "SubGlare",
       "",
       "",
       ""
      ],
      "Snorunt": [
       "Spikes",
       2,
       "M",
       "OL"
      ],
      "Snover": [
       "Choice Scarf",
       1,
       "M",
       "RK",
       "Eviolite",
       1,
       "M",
       "W"
      ],
      "Snubbull": [
       "Berry Juice",
       2,
       "P",
       "W",
       "Bulky Eviolite",
       "",
       "",
       "",
       "Offensive Eviolite",
       "",
       "",
       ""
      ],
      "Solosis": [
       "Trick Room Sweeper",
       1,
       "S",
       "OS"
      ],
      "Spinarak": [
       "Sticky Web",
       2,
       "P",
       "OL"
      ],
      "Spritzee": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Squirtle": [
       "Rapid Spinner",
       2,
       "P",
       "S"
      ],
      "Starly": [
       "Choice Scarf",
       1,
       "P",
       "W"
      ],
      "Staryu": [
       "Spinner",
       "",
       "",
       ""
      ],
      "Stunky": [
       "Bulky Pursuit",
       3,
       "P",
       "W",
       "Fast Utility",
       2,
       "P",
       "S"
      ],
      "Surskit": [
       "Sticky Web Setter",
       "",
       "",
       ""
      ],
      "Swablu": [
       "Cotton Guard",
       3,
       "P",
       "BS"
      ],
      "Swinub": [
       "Stealth Rock",
       2,
       "P",
       "OL"
      ],
      "Taillow": [
       "Life Orb",
       1,
       "M",
       "W",
       "Guts Sweeper",
       1,
       "P",
       "OS"
      ],
      "Teddiursa": [
       "Quick Feet",
       1,
       "P",
       "W"
      ],
      "Tentacool": [
       "Rapid Spinner",
       4,
       "M",
       "SW",
       "Offensive",
       1,
       "M",
       "W"
      ],
      "Tepig": [
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Timburr": [
       "Tank",
       "",
       "",
       ""
      ],
      "Tirtouga": [
       "Stealth Rock + Shell Smash",
       "",
       "",
       ""
      ],
      "Torchic": [
       "Life Orb",
       "",
       "",
       ""
      ],
      "Totodile": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Trapinch": [
       "Trapper",
       1,
       "P",
       "SB"
      ],
      "Treecko": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Trubbish": [
       "Spikes",
       4,
       "P",
       "S"
      ],
      "Turtwig": [
       "Stealth Rock",
       4,
       "P",
       "MW"
      ],
      "Tympole": [
       "Rain Sweeper",
       1,
       "S",
       "OS"
      ],
      "Tyrunt": [
       "Dragon Dance Sweeper",
       1,
       "P",
       "OS",
       "Stealth Rock Phazer",
       2,
       "P",
       "S"
      ],
      "Vanillite": [
       "Autotomize",
       1,
       "S",
       "OS"
      ],
      "Venipede": [
       "Entry Hazard Setter",
       2,
       "P",
       "OL"
      ],
      "Venonat": [
       "Toxic Spikes Setter",
       4,
       "S",
       "S"
      ],
      "Voltorb": [
       "Lead",
       2,
       "S",
       "OL",
       "Offensive",
       1,
       "S",
       "W"
      ],
      "Vullaby": [
       "Offensive Berry Juice",
       "",
       "",
       "",
       "Bulky Berry Juice",
       "",
       "",
       "",
       "Defensive",
       4,
       "P",
       "PW",
       "Offensive Eviolite",
       "",
       "",
       "",
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Vulpix": [
       "Sun Setter",
       "",
       "",
       ""
      ],
      "Wailmer": [
       "Choice Scarf",
       1,
       "S",
       "W",
       "Tank",
       4,
       "S",
       "MW"
      ],
      "Wingull": [
       "Life Orb",
       2,
       "M",
       "W"
      ],
      "Woobat": [
       "Simple Sweeper",
       1,
       "S",
       "OS"
      ],
      "Wooper": [
       "Water Absorb",
       4,
       "M",
       "MW"
      ],
      "Wynaut": [
       "Standard",
       5,
       "M",
       "S"
      ],
      "Yamask": [
       "Support",
       4,
       "M",
       "S"
      ],
      "Zigzagoon": [
       "Belly Drum",
       1,
       "P",
       "OS"
      ],
      "Zorua": [
       "Life Orb Attacker",
       1,
       "M",
       "W"
      ],
      "Zubat": [
       "Support",
       4,
       "P",
       "S"
      ]
     }
    },
    "7": {
     "Ubers": {
      "Aegislash": [
       "Specially Defensive",
       4,
       "M",
       "SW"
      ],
      "Arceus": [
       "Extreme Killer",
       3,
       "P",
       "BS",
       "Normalium Z",
       2,
       "P",
       "OS"
      ],
      "Arceus-Bug": [
       "Stealth Rock",
       2,
       "S",
       "S"
      ],
      "Arceus-Dark": [
       "Support",
       4,
       "S",
       "S",
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Arceus-Dragon": [
       "Support",
       4,
       "S",
       "S"
      ],
      "Arceus-Electric": [
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Arceus-Fairy": [
       "Calm Mind",
       3,
       "S",
       "BS",
       "Stealth Rock",
       4,
       "S",
       "S"
      ],
      "Arceus-Fighting": [
       "Offensive Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Arceus-Fire": [
       "Offensive Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Arceus-Flying": [
       "Calm Mind",
       3,
       "S",
       "S"
      ],
      "Arceus-Ghost": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Arceus-Grass": [
       "Offensive",
       2,
       "S",
       "W"
      ],
      "Arceus-Ground": [
       "Calm Mind",
       1,
       "S",
       "OS",
       "Support",
       4,
       "S",
       "S",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Arceus-Ice": [
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Arceus-Poison": [
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Arceus-Psychic": [
       "Wall",
       4,
       "S",
       "S"
      ],
      "Arceus-Rock": [
       "Stealth Rock",
       4,
       "S",
       "S"
      ],
      "Arceus-Steel": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Arceus-Water": [
       "Support",
       4,
       "S",
       "S",
       "Stealth Rock",
       4,
       "S",
       "S"
      ],
      "Blaziken": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Blaziken-Mega": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Blissey": [
       "Support",
       5,
       "S",
       "SW"
      ],
      "Buzzwole": [
       "Physical Wall",
       4,
       "P",
       "PW"
      ],
      "Celesteela": [
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Chansey": [
       "Support",
       5,
       "S",
       "SW"
      ],
      "Cloyster": [
       "Entry Hazard Lead",
       2,
       "P",
       "OL"
      ],
      "Darkrai": [
       "Special Attacker",
       1,
       "S",
       "OS"
      ],
      "Deoxys": [
       "Marshadow Lure",
       2,
       "S",
       "S"
      ],
      "Deoxys-Attack": [
       "All-out Attacker",
       1,
       "M",
       "W"
      ],
      "Deoxys-Defense": [
       "Spikes",
       5,
       "S",
       "S"
      ],
      "Deoxys-Speed": [
       "Lead",
       5,
       "S",
       "OL"
      ],
      "Dialga": [
       "Offensive Utility",
       2,
       "S",
       "W"
      ],
      "Diancie": [
       "Mega Diancie",
       2,
       "M",
       "W"
      ],
      "Diancie-Mega": [
       "Mega Diancie",
       2,
       "M",
       "W"
      ],
      "Ditto": [
       "no u (Revenge Killer)",
       5,
       "M",
       "RK"
      ],
      "Dugtrio": [
       "Utility Trapper",
       2,
       "P",
       "SB"
      ],
      "Excadrill": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Ferrothorn": [
       "Defensive",
       4,
       "P",
       "SW"
      ],
      "Genesect": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Gengar": [
       "Offensive Trapper",
       1,
       "S",
       "SB",
       "Hex",
       2,
       "S",
       "SB",
       "Utility Trapper",
       2,
       "S",
       "SB"
      ],
      "Gengar-Mega": [
       "Offensive Trapper",
       1,
       "S",
       "SB",
       "Hex",
       2,
       "S",
       "SB",
       "Utility Trapper",
       2,
       "S",
       "SB"
      ],
      "Giratina": [
       "Defog",
       5,
       "M",
       "MW"
      ],
      "Giratina-Origin": [
       "Defog",
       3,
       "S",
       "W"
      ],
      "Gothitelle": [
       "PP Stall",
       1,
       "P",
       "W"
      ],
      "Gothorita": [
       "Trapper",
       5,
       "W",
       "SB"
      ],
      "Greninja": [
       "Lead",
       2,
       "S",
       "OL"
      ],
      "Groudon": [
       "Stealth Rock + Swords Dance",
       2,
       "P",
       "OS",
       "Defensive Support",
       4,
       "M",
       "SW",
       "Mixed Rock Polish",
       1,
       "M",
       "OS",
       "Mixed Swords Dance",
       1,
       "M",
       "OS",
       "Offensive Support",
       2,
       "M",
       "S",
       "Double Dance",
       1,
       "P",
       "OS"
      ],
      "Groudon-Primal": [
       "Stealth Rock + Swords Dance",
       2,
       "P",
       "OS",
       "Defensive Support",
       4,
       "M",
       "SW",
       "Mixed Rock Polish",
       1,
       "M",
       "OS",
       "Mixed Swords Dance",
       1,
       "M",
       "OS",
       "Offensive Support",
       2,
       "M",
       "S",
       "Double Dance",
       1,
       "P",
       "OS"
      ],
      "Gyarados": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Gyarados-Mega": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Ho-Oh": [
       "Defensive",
       4,
       "P",
       "PW",
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Tank",
       3,
       "P",
       "W",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Kangaskhan": [
       "Utility Attacker",
       2,
       "P",
       "W"
      ],
      "Kangaskhan-Mega": [
       "Utility Attacker",
       2,
       "P",
       "W"
      ],
      "Klefki": [
       "Spikes Support",
       4,
       "P",
       "S"
      ],
      "Kyogre": [
       "Calm Mind + Water Spout",
       1,
       "S",
       "OS",
       "Physical Attacker",
       1,
       "M",
       "W",
       "Defensive",
       4,
       "S",
       "PW",
       "Special Attacker",
        1,
       "S",
       "W"
      ],
      "Kyogre-Primal": [
       "Calm Mind + Water Spout",
       1,
       "S",
       "OS",
       "Physical Attacker",
       1,
       "M",
       "W",
       "Defensive",
       4,
       "S",
       "PW",
       "Special Attacker",
       1,
       "S",
       "W"
      ],
      "Kyurem-White": [
       "Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Landorus": [
       "Wallbreaker",
       1,
       "M",
       "W"
      ],
      "Latias": [
       "Support",
       4,
       "S",
       "S"
      ],
      "Latias-Mega": [
       "Support",
       4,
       "S",
       "S"
      ],
      "Lopunny": [
       "Healing Wish",
       2,
       "P",
       "W"
      ],
      "Lopunny-Mega": [
       "Healing Wish",
       2,
       "P",
       "W"
      ],
      "Lucario": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Lucario-Mega": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Lugia": [
       "Wall",
       4,
       "S",
       "MW"
      ],
      "Lunala": [
       "Calm Mind",
       1,
       "S",
       "OS",
       "Choice Scarf",
       1,
       "S",
       "RK",
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Magearna": [
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Marshadow": [
       "Life Orb Attacker",
       1,
       "P",
       "W",
       "Bulk Up",
       1,
       "P",
       "OS"
      ],
      "Metagross": [
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Metagross-Mega": [
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Mewtwo": [
       "Special Attacker",
       1,
       "S",
       "W",
       "Physical Attacker",
       2,
       "M",
       "W"
      ],
      "Mewtwo-Mega-X": [
       "Physical Attacker",
       2,
       "M",
       "W"
      ],
      "Mewtwo-Mega-Y": [
       "Special Attacker",
       1,
       "S",
       "W"
      ],
      "Muk-Alola": [
       "Assault Vest",
       3,
       "P",
       "W"
      ],
      "Naganadel": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Necrozma-Dawn-Wings": [
       "Ultra Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Necrozma-Dusk-Mane": [
       "Trick Room",
       3,
       "P",
       "BS",
       "Ultra Swords Dance",
       1,
       "P",
       "OS",
       "Specially Defensive",
       4,
       "P",
       "SW",
       "Stealth Rock Ultra",
       2,
       "S",
       "W",
       "Ultra Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Necrozma-Ultra": [
       "Ultra Swords Dance - Dawn-Wings",
       1,
       "P",
       "OS",
       "Ultra Swords Dance - Dusk-Mane",
       1,
       "P",
       "OS",
       "Stealth Rock Ultra - Dusk-Mane",
       2,
       "S",
       "W",
       "Ultra Calm Mind - Dusk-Mane",
       1,
       "S",
       "OS"
      ],
      "Palkia": [
       "All-out Attacker",
       1,
       "M",
       "W"
      ],
      "Pheromosa": [
       "Offensive Pivot",
       1,
       "M",
       "W"
      ],
      "Rayquaza": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Mixed Wallbreaker",
       1,
       "M",
       "W",
       "Choice Scarf",
       1,
       "M",
       "RK"
      ],
      "Reshiram": [
       "Life Orb",
       1,
       "S",
       "W"
      ],
      "Ribombee": [
       "Offensive Sticky Web",
       2,
       "S",
       "OS"
      ],
      "Sableye": [
       "Support",
       4,
       "P",
       "S"
      ],
      "Sableye-Mega": [
       "Support",
       4,
       "P",
       "S"
      ],
      "Salamence": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Offensive Defog",
       2,
       "P",
       "W",
       "Defensive",
       4,
       "P",
       "PW"
      ],
      "Salamence-Mega": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Offensive Defog",
       2,
       "P",
       "W",
       "Defensive",
       4,
       "P",
       "PW"
      ],
      "Scizor": [
       "Bulky Pivot",
       1,
       "P",
       "W"
      ],
      "Scizor-Mega": [
       "Bulky Pivot",
       4,
       "P",
       "SW"
      ],
      "Shaymin-Sky": [
       "Special Attacker",
       2,
       "S",
       "W"
      ],
      "Skarmory": [
       "Physically Defensive",
       5,
       "P",
       "PW"
      ],
      "Slowbro": [
       "Physical Wall",
       4,
       "S",
       "PW"
      ],
      "Slowbro-Mega": [
       "Physical Wall",
       4,
       "S",
       "PW"
      ],
      "Smeargle": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Solgaleo": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Tapu Koko": [
       "Dual Screens",
       2,
       "P",
       "S",
       "Offensive Utility",
       2,
       "M",
       "W"
      ],
      "Tapu Lele": [
       "Psychic Terrain Support",
       2,
       "S",
       "S",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Toxapex": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Tyranitar": [
       "Choice Band",
       2,
       "P",
       "W",
       "Utility",
       2,
       "P",
       "S"
      ],
      "Venusaur": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Venusaur-Mega": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Wobbuffet": [
       "Trapper",
       5,
       "M",
       "SB"
      ],
      "Xerneas": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Geomancy",
       1,
       "S",
       "OS",
       "Choice Specs",
       2,
       "S",
       "W",
       "Defensive",
       4,
       "S",
       "PW",
       "Z-Geomancy",
       3,
       "S",
       "BS"
      ],
      "Yveltal": [
       "Life Orb",
       2,
       "M",
       "W",
       "Choice Scarf",
       2,
       "M",
       "RK",
       "Stallbreaker",
       4,
       "M",
       "SB",
       "Bulky Choice Scarf",
       3,
       "P",
       "RK",
       "Physically Defensive",
       4,
       "P",
       "PW",
       "Choice Specs",
       1,
       "S",
       "W",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Zekrom": [
       "Hone Claws",
       1,
       "P",
       "OS",
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Zygarde": [
       "Big Boss (Dragon Dance)",
       3,
       "P",
       "BS",
       "Defensive",
       4,
       "P",
       "PW",
       "Thousand Waves",
       3,
       "P",
       "S"
      ],
      "Zygarde-Complete": [
       "Big Boss (Dragon Dance) - 50%",
       3,
       "P",
       "S",
       "Defensive - 50%",
       4,
       "P",
       "W",
       "Thousand Waves - 50%",
       3,
       "P",
       "S"
      ]
     },
     "OU": {
      "Aggron": [
       "Mega Tank",
       4,
       "P",
       "MW"
      ],
      "Aggron-Mega": [
       "Mega Tank",
       4,
       "P",
       "MW"
      ],
      "Alakazam": [
       "Late-Game Cleaner",
       "",
       "",
       "",
       "Life Orb",
       1,
       "S",
       "W"
      ],
      "Alakazam-Mega": [
       "Late-Game Cleaner",
       "",
       "",
       ""
      ],
      "Alomomola": [
       "WishPass",
       4,
       "S",
       "MW"
      ],
      "Amoonguss": [
       "Black Sludge",
       4,
       "S",
       "SW",
       "Assault Vest",
       4,
       "M",
       "SW"
      ],
      "Araquanid": [
       "Sticky Web Lead",
       2,
       "P",
       "OL"
      ],
      "Avalugg": [
       "Physical Wall",
       4,
       "P",
       "PW"
      ],
      "Azumarill": [
       "Belly Drum",
       1,
       "P",
       "OS"
      ],
      "Bisharp": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Blacephalon": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Substitute + Calm Mind",
       1,
       "P",
       "OS"
      ],
      "Breloom": [
       "SubSeed",
       3,
       "P",
       "SB"
      ],
      "Buzzwole": [
       "Bulk Up",
       3,
       "P",
       "BS"
      ],
      "Celesteela": [
       "Defensive",
       4,
       "M",
       "SW"
      ],
      "Chansey": [
       "Defensive",
       4,
       "P",
       "SW"
      ],
      "Charizard": [
       "Dragon Dance X",
       1,
       "P",
       "OS",
       "Drought Wallbreaker Y",
       1,
       "S",
       "W",
       "3 Attacks",
       1,
       "P",
       "W"
      ],
      "Charizard-Mega-X": [
       "Dragon Dance X",
       1,
       "P",
       "OS",
       "3 Attacks",
       1,
       "P",
       "W"
      ],
      "Charizard-Mega-Y": [
       "Drought Wallbreaker Y",
       1,
       "S",
       "W"
      ],
      "Clefable": [
       "Defensive Magic Guard",
       4,
       "S",
       "PW",
       "Life Orb",
       1,
       "S",
       "W",
       "Unaware",
       4,
       "S",
       "PW"
      ],
      "Conkeldurr": [
       "Offensive",
       1,
       "P",
       "W"
      ],
      "Crawdaunt": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Cresselia": [
       "Calm Mind",
       "",
       "",
       "",
       "Trick Room",
       4,
       "S",
       "S"
      ],
      "Diancie": [
       "Offensive",
       2,
       "M",
       "W",
       "Substitute + Endeavor",
       "",
       "",
       ""
      ],
      "Diancie-Mega": [
       "Offensive",
       2,
       "M",
       "W",
       "Substitute + Endeavor",
       "",
       "",
       ""
      ],
      "Diggersby": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Ditto": [
       "Imposter",
       5,
       "M",
       "RK"
      ],
      "Dragonite": [
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Excadrill": [
       "Sand Rush Sweeper",
       1,
       "P",
       "OS",
       "Focus Sash",
       2,
       "P",
       "OL"
      ],
      "Ferrothorn": [
       "Hazard Setter",
       4,
       "P",
       "MW"
      ],
      "Gallade": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Gallade-Mega": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Garchomp": [
       "Offensive Stealth Rock",
       2,
       "P",
       "OS",
       "Mixed",
       "",
       "",
       "",
       "Tank",
       4,
       "M",
       "PW",
       "Mega Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Garchomp-Mega": [
       "Mixed",
       "",
       "",
       "",
       "Mega Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Gardevoir": [
       "Offensive Support",
       2,
       "S",
       "S"
      ],
      "Gardevoir-Mega": [
       "Offensive Support",
       2,
       "S",
       "S"
      ],
      "Gastrodon": [
       "Specially Defensive",
       4,
       "M",
       "SW"
      ],
      "Gengar": [
       "Offensive Utility",
       2,
       "S",
       "W",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Gliscor": [
       "Swords Dance",
       3,
       "P",
       "W",
       "Utility",
       "",
       "",
       ""
      ],
      "Golem-Alola": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Greninja": [
       "Offensive",
       2,
       "S",
       "W",
       "Physically Based Protean",
       2,
       "M",
       "W",
       "Specially Based Protean",
       2,
       "M",
       "W",
       "Choice Scarf",
       2,
       "M",
       "RK"
      ],
      "Gyarados": [
       "Dragon Dance Sweeper",
       1,
       "P",
       "OS",
       "Mega Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Gyarados-Mega": [
       "Mega Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Hawlucha": [
       "Terrain Seed Sweeper",
       1,
       "P",
       "OS"
      ],
      "Heatran": [
       "Specially Defensive",
       4,
       "S",
       "SW",
       "Z-Move",
       1,
       "S",
       "W"
      ],
      "Heracross": [
       "Swords Dance",
       1,
       "P",
       "W"
      ],
      "Heracross-Mega": [
       "Swords Dance",
       1,
       "P",
       "W"
      ],
      "Hippowdon": [
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Hoopa-Unbound": [
       "Choice Band",
       1,
       "P",
       "W",
       "Nasty Plot",
       1,
       "S",
       "OS",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Hydreigon": [
       "Darkinium Z",
       1,
       "S",
       "W"
      ],
      "Jirachi": [
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Wish",
       4,
       "P",
       "SW",
       "Stealth Rock",
       4,
       "P",
       "SW"
      ],
      "Kartana": [
       "Paper Cut (Swords Dance)",
       1,
       "P",
       "OS",
       "Paper Plane (Choice Scarf)",
       1,
       "P",
       "RK",
       "Paper Press (Choice Band)",
       1,
       "P",
       "W",
       "Paper Fan (Utility)",
       "",
       "",
       ""
      ],
      "Keldeo": [
       "Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Kingdra": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Kommo-o": [
       "Dragon Dance",
       "",
       "",
       "",
       "Offensive Stealth Rock",
       2,
       "M",
       "W",
       "Specially Defensive",
       4,
       "P",
       "SW",
       "Belly Drum",
       1,
       "P",
       "OS"
      ],
      "Krookodile": [
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Kyurem": [
       "SubRoost",
       1,
       "S",
       "W"
      ],
      "Kyurem-Black": [
       "Z-Move",
       1,
       "M",
       "W",
       "Life Orb",
       1,
       "M",
       "W"
      ],
      "Landorus-Therian": [
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Offensive Z-Move",
       2,
       "P",
       "W",
       "Defensive",
       4,
       "M",
       "PW",
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Latias": [
       "Utility",
       "",
       "",
       "",
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Latias-Mega": [
       "Utility",
       "",
       "",
       "",
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Latios": [
       "Mega Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Latios-Mega": [
       "Mega Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Lopunny": [
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Lopunny-Mega": [
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Magearna": [
       "Shift Gear",
       1,
       "S",
       "OS",
       "Heart Swap",
       3,
       "S",
       "SW",
       "Assault Vest",
       3,
       "S",
       "SW",
       "Calm Mind + Pain Split",
       1,
       "S",
       "OS"
      ],
      "Magnezone": [
       "Substitute Z",
       1,
       "S",
       "SB",
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Choice Specs",
       2,
       "S",
       "RK"
      ],
      "Mamoswine": [
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Manaphy": [
       "2 Attacks + Rest",
       3,
       "S",
       "BS",
       "Three Attacks",
       1,
       "S",
       "OS"
      ],
      "Mantine": [
       "Mixed Wall",
       4,
       "S",
       "MW"
      ],
      "Marowak-Alola": [
       "Offensive",
       1,
       "P",
       "W"
      ],
      "Mawile": [
       "Swords Dance",
       1,
       "P",
       "W",
       "All-out Attacker",
       1,
       "P",
       "W",
       "Substitute",
       1,
       "P",
       "W"
      ],
      "Mawile-Mega": [
       "Swords Dance",
       1,
       "P",
       "W",
       "All-out Attacker",
       1,
       "P",
       "W",
       "Substitute",
       1,
       "P",
       "W"
      ],
      "Medicham": [
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Medicham-Mega": [
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Mew": [
       "Lead",
       "",
       "",
       "",
       "Defensive",
       4,
       "P",
       "S",
       "Nasty Plot",
       1,
       "S",
       "S"
      ],
      "Mimikyu": [
       "Swords Dance",
       2,
       "P",
       "OS"
      ],
      "Moltres": [
       "Pressure",
       2,
       "S",
       "S"
      ],
      "Muk-Alola": [
       "Assault Vest",
       3,
       "P",
       "SW"
      ],
      "Nidoking": [
       "Life Orb Attacker",
       1,
       "S",
       "W"
      ],
      "Nihilego": [
       "Toxic Spikes Setter",
       2,
       "S",
       "W"
      ],
      "Ninetales-Alola": [
       "Aurora Veil",
       2,
       "S",
       "S"
      ],
      "Pelipper": [
       "Defensive",
       4,
       "M",
       "SW",
       "Choice Specs",
       2,
       "S",
       "W"
      ],
      "Pinsir": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Pinsir-Mega": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Porygon-Z": [
       "Z-Conversion",
       1,
       "S",
       "OS"
      ],
      "Pyukumuku": [
       "Unaware Wall",
       5,
       "M",
       "PW"
      ],
      "Quagsire": [
       "Unaware Wall",
       4,
       "M",
       "PW"
      ],
      "Reuniclus": [
       "2 Attacks",
       3,
       "S",
       "BS",
       "Double Dance",
       4,
       "S",
       "BS"
      ],
      "Ribombee": [
       "Sticky Web Lead",
       2,
       "S",
       "OL"
      ],
      "Rotom-Wash": [
       "Offensive",
       2,
       "S",
       "W",
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Sableye": [
       "Utility",
       4,
       "P",
       "SW"
      ],
      "Sableye-Mega": [
       "Utility",
       4,
       "P",
       "SW"
      ],
      "Salamence": [
       "Flyinium Z",
       1,
       "P",
       "OS"
      ],
      "Scizor": [
       "Swords Dance",
       3,
       "P",
       "BS"
      ],
      "Scizor-Mega": [
       "Swords Dance",
       3,
       "P",
       "BS"
      ],
      "Scolipede": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Seismitoad": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Serperior": [
       "Taunt Support",
       "",
       "",
       "",
       "Substitute Attacker",
       1,
       "S",
       "OS",
       "Choice Scarf",
       1,
       "S",
       "OS"
      ],
      "Shedinja": [
       "Tank",
       "",
       "",
       ""
      ],
      "Skarmory": [
       "Physically Defensive",
       5,
       "P",
       "PW"
      ],
      "Slowbro": [
       "Defensive",
       "",
       "",
       "",
       "Paper Shell (Mega)",
       "",
       "",
       ""
      ],
      "Slowbro-Mega": [
       "Paper Shell (Mega)",
       "",
       "",
       ""
      ],
      "Staraptor": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Suicune": [
       "Substitute + Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Swampert": [
       "Rain Sweeper",
       1,
       "P",
       "OS"
      ],
      "Swampert-Mega": [
       "Rain Sweeper",
       1,
       "P",
       "OS"
      ],
      "Tangrowth": [
       "Physically Defensive",
       4,
       "M",
       "PW",
       "Assault Vest",
       4,
       "M",
       "SW"
      ],
      "Tapu Bulu": [
       "Choice Band",
       2,
       "P",
       "W",
       "Specially Defensive",
       4,
       "P",
       "SW",
       "Swords Dance",
       2,
       "P",
       "W",
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Tapu Fini": [
       "Defog",
       4,
       "S",
       "S"
      ],
      "Tapu Koko": [
       "Choice Specs",
       2,
       "S",
       "W",
       "Z Offensive",
       2,
       "M",
       "W",
       "Shuca Pivot",
       2,
       "M",
       "W"
      ],
      "Tapu Lele": [
       "Choice Specs",
       2,
       "S",
       "W",
       "Fightinium Z",
       2,
       "S",
       "OS",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Terrakion": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Thundurus": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Thundurus-Therian": [
       "Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Tornadus-Therian": [
       "Bulky Pivot",
       "",
       "",
       "",
       "Offensive Z-Move",
       2,
       "M",
       "W"
      ],
      "Toxapex": [
       "The Pex",
       4,
       "S",
       "MW"
      ],
      "Tyranitar": [
       "Stealth Rock",
       2,
       "P",
       "S",
       "Assault Vest",
       4,
       "P",
       "SW",
       "Choice Band",
       1,
       "P",
       "W",
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Tyranitar-Mega": [
       "Stealth Rock",
       2,
       "P",
       "S",
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Uxie": [
       "Trick Room Setter",
       5,
       "M",
       "S"
      ],
      "Venusaur": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Venusaur-Mega": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Victini": [
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Choice Band",
       1,
       "P",
       "W",
       "Z-Celebrate",
       1,
       "S",
       "OS"
      ],
      "Volcanion": [
       "Substitute",
       1,
       "S",
       "W"
      ],
      "Volcarona": [
       "Bulky Quiver Dance",
       3,
       "S",
       "BS",
       "Offensive Quiver Dance",
       1,
       "S",
       "OS",
       "Substitute + Swarm",
       "",
       "",
       ""
      ],
      "Weavile": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Xurkitree": [
       "Tail Glow",
       1,
       "S",
       "W"
      ],
      "Zapdos": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Zygarde-10%": [
       "Choice Band",
       2,
       "P",
       "W"
      ],
      "Zygarde-Complete": [
       "Choice Band - 10%",
       2,
       "P",
       "W"
      ]
     },
     "UU": {
      "Absol": [
       "All-out Attacker",
       1,
       "M",
       "W"
      ],
      "Absol-Mega": [
       "All-out Attacker",
       1,
       "M",
       "W"
      ],
      "Aerodactyl": [
       "Offensive",
       1,
       "P",
       "W",
       "Stealth Rock",
       2,
       "P",
       "W"
      ],
      "Aerodactyl-Mega": [
       "Offensive",
       1,
       "P",
       "W",
       "Stealth Rock",
       2,
       "P",
       "W"
      ],
      "Aggron": [
       "Stealth Rock",
       4,
       "P",
       "MW",
       "Curse",
       4,
       "P",
       "BS"
      ],
      "Aggron-Mega": [
       "Stealth Rock",
       4,
       "P",
       "MW",
       "Curse",
       4,
       "P",
       "BS"
      ],
      "Alomomola": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Altaria": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Refresh",
       "",
       "",
       "",
       "Defensive",
       "",
       "",
       "",
       "Special Tank",
       "",
       "",
       ""
      ],
      "Altaria-Mega": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Refresh",
       2,
       "P",
       "OS",
       "Defensive",
       4,
       "M",
       "PW",
       "Special Tank",
       3,
       "S",
       "W"
      ],
      "Amoonguss": [
       "Defensive Pivot",
       4,
       "S",
       "MW"
      ],
      "Araquanid": [
       "Sticky Web",
       2,
       "P",
       "W"
      ],
      "Articuno": [
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Aurorus": [
       "Aurora Veil Lead",
       2,
       "S",
       "OL"
      ],
      "Azelf": [
       "Nasty Plot",
       1,
       "S",
       "OS",
       "Suicide Lead",
       2,
       "P",
       "OL",
       "Dual Screens",
       2,
       "P",
       "S"
      ],
      "Barbaracle": [
       "Shell Smash",
       1,
       "P",
       "OS"
      ],
      "Beedrill": [
       "Offensive Pivot",
       2,
       "P",
       "W"
      ],
      "Beedrill-Mega": [
       "Offensive Pivot",
       2,
       "P",
       "W"
      ],
      "Bewear": [
       "Choice Band",
       1,
       "P",
       "W",
       "Swords Dance",
       1,
       "P",
       "W"
      ],
      "Bisharp": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Assault Vest",
       3,
       "P",
       "W"
      ],
      "Blastoise": [
       "Offensive Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Blastoise-Mega": [
       "Offensive Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Blissey": [
       "Defensive",
       4,
       "P",
       "SW"
      ],
      "Bronzong": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Celebi": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Chandelure": [
       "Substitute + Calm Mind",
       1,
       "S",
       "OS",
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Chesnaught": [
       "Spikes",
       4,
       "P",
       "PW"
      ],
      "Cobalion": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Cofagrigus": [
       "Trick Room",
       1,
       "S",
       "OS"
      ],
      "Crawdaunt": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Cresselia": [
       "Defensive Z-Move",
       4,
       "S",
       "PW"
      ],
      "Crobat": [
       "Stallbreaker",
       1,
       "P",
       "SB"
      ],
      "Darmanitan": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Darmanitan-Zen": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Decidueye": [
       "Swords Dance",
       2,
       "P",
       "OS"
      ],
      "Diancie": [
       "Support",
       4,
       "S",
       "SW"
      ],
      "Doublade": [
       "Swords Dance",
       3,
       "P",
       "BS"
      ],
      "Durant": [
       "Hone Claws",
       1,
       "P",
       "OS"
      ],
      "Empoleon": [
       "Utility",
       4,
       "S",
       "S"
      ],
      "Entei": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Feraligatr": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Agility",
       1,
       "P",
       "OS"
      ],
      "Ferroseed": [
       "Bulky Entry Hazard Setter",
       4,
       "P",
       "MW"
      ],
      "Florges": [
       "Cleric",
       4,
       "S",
       "S"
      ],
      "Froslass": [
       "Suicide Lead",
       2,
       "S",
       "OL"
      ],
      "Gastrodon": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Gengar": [
       "Substitute",
       1,
       "S",
       "W"
      ],
      "Glalie": [
       "Offensive Spiker",
       2,
       "M",
       "W"
      ],
      "Glalie-Mega": [
       "Offensive Spiker",
       2,
       "M",
       "W"
      ],
      "Gligar": [
       "Defensive Utility",
       4,
       "P",
       "S"
      ],
      "Haxorus": [
       "Swords Dance",
       1,
       "P",
       "W",
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Heracross": [
       "Swords Dance",
       1,
       "P",
       "W"
      ],
      "Hippowdon": [
       "Mixed Wall",
       4,
       "P",
       "MW"
      ],
      "Hoopa": [
       "Nasty Plot",
       1,
       "S",
       "W"
      ],
      "Houndoom": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Houndoom-Mega": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Hydreigon": [
       "Choice Scarf",
       1,
       "M",
       "RK",
       "Defog",
       2,
       "S",
       "W",
       "Taunt",
       2,
       "S",
       "SB",
       "Life Orb Attacker",
       1,
       "S",
       "W",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Infernape": [
       "Nasty Plot",
       1,
       "S",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Mixed Attacker",
       1,
       "M",
       "W",
       "Choice Band",
       1,
       "P",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Jellicent": [
       "Physically Defensive",
       4,
       "S",
       "PW"
      ],
      "Klefki": [
       "Support",
       4,
       "P",
       "S"
      ],
      "Krookodile": [
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Stealth Rock",
       2,
       "P",
       "S"
      ],
      "Kyurem": [
       "SubRoost",
       2,
       "S",
       "W",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Latias": [
       "Calm Mind",
       1,
       "S",
       "OS",
       "Electrium Z",
       1,
       "S",
       "OS",
       "Choice Specs",
       2,
       "S",
       "W",
       "3 Attacks + Roost",
       1,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Linoone": [
       "Belly Drum Sweeper",
       1,
       "P",
       "W"
      ],
      "Lucario": [
       "Nasty Plot",
       1,
       "S",
       "OS",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Magneton": [
       "Choice Specs",
       2,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Mamoswine": [
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Mandibuzz": [
       "Utility Birb",
       4,
       "P",
       "SW"
      ],
      "Manectric": [
       "All-out Attacker",
       1,
       "S",
       "W"
      ],
      "Manectric-Mega": [
       "All-out Attacker",
       1,
       "S",
       "W"
      ],
      "Mantine": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Marowak-Alola": [
       "Offensive Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Meloetta": [
       "Z-Celebrate",
       1,
       "S",
       "OS"
      ],
      "Metagross": [
       "Choice Band",
       2,
       "P",
       "W",
       "Offensive Stealth Rock",
       2,
       "P",
       "W",
       "Mixed Offensive Lure",
       2,
       "M",
       "W"
      ],
      "Mew": [
       "Stallbreaker",
       4,
       "P",
       "SB",
       "Defensive Utility",
       4,
       "P",
       "S"
      ],
      "Mienshao": [
       "Assault Vest",
       3,
       "P",
       "SW"
      ],
      "Mimikyu": [
       "Swords Dance",
       2,
       "P",
       "OS"
      ],
      "Moltres": [
       "Offensive",
       1,
       "M",
       "W",
       "Defensive",
       4,
       "S",
       "S",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Muk-Alola": [
       "Pursuit Trapper",
       3,
       "P",
       "SW"
      ],
      "Necrozma": [
       "Stealth Rock",
       2,
       "S",
       "W",
       "Choice Specs",
       1,
       "S",
       "W",
       "Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Nidoking": [
       "Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Nidoqueen": [
       "Offensive Hazard Setter",
       2,
       "S",
       "W",
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Nihilego": [
       "3 Attacks",
       2,
       "S",
       "W",
       "Choice Scarf",
       1,
       "S",
       "RK",
       "Stall Utility",
       2,
       "S",
       "W"
      ],
      "Palossand": [
       "Stealth Rock",
       4,
       "S",
       "PW"
      ],
      "Pidgeot": [
       "Special Attacker",
       1,
       "P",
       "W"
      ],
      "Pidgeot-Mega": [
       "Special Attacker",
       1,
       "S",
       "W"
      ],
      "Porygon2": [
       "Z-Conversion",
       1,
       "S",
       "OS"
      ],
      "Primarina": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Pyukumuku": [
       "Specially Defensive",
       5,
       "M",
       "SW"
      ],
      "Registeel": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Reuniclus": [
       "Defensive Calm Mind",
       4,
       "S",
       "BS",
       "Offensive Trick Room",
       1,
       "S",
       "W"
      ],
      "Rhyperior": [
       "Tank",
       4,
       "P",
       "MW"
      ],
      "Roserade": [
       "3 Attacks",
       2,
       "S",
       "W"
      ],
      "Rotom-Heat": [
       "Fast Bulky Pivot",
       3,
       "S",
       "S",
       "Offensive Pivot",
       2,
       "S",
       "S"
      ],
      "Rotom-Mow": [
       "Offensive Pivot",
       2,
       "S",
       "W"
      ],
      "Salazzle": [
       "Nasty Plot",
       1,
       "S",
       "OS",
       "Corrosion",
       2,
       "S",
       "S"
      ],
      "Sandslash-Alola": [
       "Aurora Veil Setter",
       2,
       "P",
       "S"
      ],
      "Sceptile": [
       "All-out Attacker",
       1,
       "S",
       "W"
      ],
      "Sceptile-Mega": [
       "All-out Attacker",
       1,
       "S",
       "W"
      ],
      "Scizor": [
       "Choice Band",
       2,
       "P",
       "W",
       "Life Orb + Swords Dance",
       1,
       "P",
       "OS",
       "Bulky Swords Dance",
       3,
       "P",
       "OS",
       "Offensive Swords Dance",
       1,
       "P",
       "OS",
       "Choice Scarf",
       2,
       "P",
       "W"
      ],
      "Seismitoad": [
       "Offensive Stealth Rock",
       2,
       "S",
       "W",
       "Defensive Stealth Rock",
       4,
       "M",
       "PW"
      ],
      "Sharpedo": [
       "Cleaner",
       1,
       "P",
       "OS"
      ],
      "Sharpedo-Mega": [
       "Cleaner",
       1,
       "P",
       "OS"
      ],
      "Shaymin": [
       "Z-Celebrate",
       1,
       "S",
       "OS"
      ],
      "Silvally-Steel": [
       "Defog Pivot",
       4,
       "S",
       "SW"
      ],
      "Slowbro": [
       "Mega Calm Mind",
       4,
       "S",
       "BS",
       "Calm Mind",
       4,
       "S",
       "BS",
       "Defensive",
       4,
       "S",
       "PW",
       "Block",
       4,
       "S",
       "SB",
       "Tank",
       4,
       "S",
       "MW",
       "Special Attacker",
       3,
       "S",
       "W",
       "Future Sight Attacker",
       "",
       "",
       ""
      ],
      "Slowbro-Mega": [
       "Mega Calm Mind",
       4,
       "S",
       "BS",
       "Tank",
       4,
       "S",
       "MW",
       "Special Attacker",
       3,
       "S",
       "W",
       "Future Sight Attacker",
       "",
       "",
       ""
      ],
      "Snorlax": [
       "Papa Lax (Curse + Recycle)",
       3,
       "P",
       "BS",
       "RestTalk",
       4,
       "P",
       "BS"
      ],
      "Stakataka": [
       "Offensive Trick Room",
       2,
       "P",
       "W",
       "Defensive",
       4,
       "P",
       "MW"
      ],
      "Starmie": [
       "Offensive",
       2,
       "S",
       "W",
       "Bulky Spinner",
       4,
       "S",
       "S"
      ],
      "Steelix": [
       "Offensive Stealth Rock",
       3,
       "P",
       "W"
      ],
      "Steelix-Mega": [
       "Offensive Stealth Rock",
       3,
       "P",
       "W"
      ],
      "Suicune": [
       "Calm Mind + Protect",
       3,
       "S",
       "BS",
       "CroCune",
       4,
       "S",
       "BS"
      ],
      "Swampert": [
       "Defensive",
       4,
       "M",
       "PW",
       "Choice Band",
       1,
       "P",
       "W",
       "Offensive Stealth Rock",
       "",
       "",
       ""
      ],
      "Sylveon": [
       "Cleric",
       4,
       "S",
       "S"
      ],
      "Talonflame": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Tentacruel": [
       "Defensive",
       4,
       "M",
       "MW"
      ],
      "Terrakion": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Togekiss": [
       "Nasty Plot",
       3,
       "S",
       "BS",
       "Offensive Nasty Plot",
       1,
       "S",
       "OS",
       "Support",
       4,
       "S",
       "S",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Tornadus": [
       "Life Orb",
       1,
       "M",
       "W",
       "Offensive Support",
       2,
       "S",
       "S"
      ],
      "Toxicroak": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Tsareena": [
       "Choice Band",
       1,
       "P",
       "W",
       "Offensive Utility",
       2,
       "P",
       "W"
      ],
      "Umbreon": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Uxie": [
       "Trick Room Setter",
       5,
       "S",
       "S"
      ],
      "Venomoth": [
       "Quiver Dance",
       1,
       "S",
       "OS"
      ],
      "Volcanion": [
       "Defog",
       2,
       "S",
       "W",
       "Choice Specs",
       1,
       "S",
       "W",
       "Toxic",
       2,
       "S",
       "W"
      ],
      "Xatu": [
       "Dual Screens",
       4,
       "P",
       "S"
      ],
      "Zeraora": [
       "Mixed Attacker",
       1,
       "M",
       "W",
       "Bulk Up",
       1,
       "P",
       "OS"
      ],
      "Zoroark": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Zygarde-10%": [
       "Choice Band",
       2,
       "P",
       "W"
      ],
      "Zygarde-Complete": [
       "Choice Band - 10%",
       2,
       "P",
       "W"
      ]
     },
     "RU": {
      "Abomasnow": [
       "Swords Dance",
       1,
       "P",
       "W",
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Abomasnow-Mega": [
       "Swords Dance",
       1,
       "P",
       "W",
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Aerodactyl": [
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Ampharos": [
       "Special Attacker",
       1,
       "S",
       "W"
      ],
      "Ampharos-Mega": [
       "Special Attacker",
       1,
       "P",
       "W"
      ],
      "Araquanid": [
       "Sticky Web",
       2,
       "P",
       "OL",
       "Substitute + Toxic",
       2,
       "P",
       "W"
      ],
      "Arcanine": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Articuno": [
       "Defensive Defog",
       4,
       "S",
       "SW"
      ],
      "Banette": [
       "Offensive",
       2,
       "P",
       "W"
      ],
      "Banette-Mega": [
       "Offensive",
       2,
       "P",
       "W"
      ],
      "Barbaracle": [
       "Shell Smash",
       1,
       "P",
       "OS"
      ],
      "Bewear": [
       "Swords Dance",
       1,
       "P",
       "W",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Blastoise": [
       "Offensive Spinner",
       2,
       "M",
       "W"
      ],
      "Blastoise-Mega": [
       "Offensive Spinner",
       2,
       "M",
       "W"
      ],
      "Bronzong": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Bruxish": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Camerupt": [
       "Tank",
       4,
       "S",
       "SW"
      ],
      "Camerupt-Mega": [
       "Tank",
       4,
       "S",
       "SW"
      ],
      "Cloyster": [
       "Shell Smash",
       1,
       "P",
       "OS"
      ],
      "Cofagrigus": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Cresselia": [
       "Physically Defensive",
       4,
       "S",
       "PW"
      ],
      "Dhelmise": [
       "Bulky Spinner",
       3,
       "P",
       "S"
      ],
      "Diancie": [
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Ditto": [
       "Revenge Killer",
       1,
       "P",
       "W"
      ],
      "Donphan": [
       "Offensive Spinner",
       2,
       "P",
       "W"
      ],
      "Dragalge": [
       "Offensive",
       2,
       "S",
       "W"
      ],
      "Drapion": [
       "Choice Band",
       2,
       "P",
       "W"
      ],
      "Emboar": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Escavalier": [
       "Tank",
       3,
       "P",
       "W",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Espeon": [
       "Calm Mind",
       1,
       "S",
       "W",
       "Choice Specs",
       2,
       "S",
       "W"
      ],
      "Exploud": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Florges": [
       "Cleric",
       4,
       "S",
       "W"
      ],
      "Flygon": [
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Forretress": [
       "Defensive",
       4,
       "M",
       "PW"
      ],
      "Galvantula": [
       "Sticky Web",
       2,
       "S",
       "W"
      ],
      "Garbodor": [
       "Physically Defensive Spikes",
       4,
       "P",
       "PW"
      ],
      "Gardevoir": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Choice Specs",
       2,
       "S",
       "W"
      ],
      "Gastrodon": [
       "Defensive",
       4,
       "M",
       "MW"
      ],
      "Gigalith": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Glalie": [
       "Wallbreaker",
       2,
       "P",
       "W"
      ],
      "Glalie-Mega": [
       "Wallbreaker",
       2,
       "P",
       "W"
      ],
      "Golbat": [
       "Defensive",
       4,
       "P",
       "PW"
      ],
      "Golisopod": [
       "Revenge Killer",
       2,
       "P",
       "RK"
      ],
      "Goodra": [
       "Choice Scarf",
       1,
       "M",
       "RK",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Hariyama": [
       "Tank",
       3,
       "P",
       "W"
      ],
      "Honchkrow": [
       "Darkinium Z",
       null,
       null,
       null
      ],
      "Hoopa": [
       "Wallbreaker",
       2,
       "P",
       "W"
      ],
      "Houndoom": [
       "Nasty Plot",
       1,
       "S",
       "OS",
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Jolteon": [
       "Special Attacker",
       2,
       "S",
       "W"
      ],
      "Kingdra": [
       "CritDra",
       1,
       "S",
       "W"
      ],
      "Klinklang": [
       "Shift Gear",
       1,
       "P",
       "OS"
      ],
      "Lycanroc-Dusk": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Machamp": [
       "Guts Wallbreaker",
       1,
       "P",
       "W",
       "Assault Vest",
       3,
       "P",
       "W"
      ],
      "Mandibuzz": [
       "Taunt + Toxic",
       4,
       "P",
       "S",
       "Defog",
       4,
       "P",
       "SW"
      ],
      "Mantine": [
       "Defog",
       4,
       "S",
       "SW"
      ],
      "Marowak-Alola": [
       "Swords Dance Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Medicham": [
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Metagross": [
       "Offensive Stealth Rock",
       2,
       "P",
       "W",
       "Choice Band",
       1,
       "P",
       "W",
       "Agility",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Milotic": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Mismagius": [
       "Nasty Plot",
       2,
       "S",
       "OS"
      ],
      "Necrozma": [
       "Calm Mind",
       1,
       "S",
       "OS",
       "Offensive Stealth Rock",
       2,
       "S",
       "W"
      ],
      "Nidoqueen": [
       "Stealth Rock",
       2,
       "S",
       "W"
      ],
      "Ninetales": [
       "Nasty Plot Wallbreaker",
       1,
       "S",
       "W",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Noivern": [
       "Support",
       2,
       "S",
       "S",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Palossand": [
       "Defensive Stealth Rock",
       4,
       "S",
       "PW"
      ],
      "Pangoro": [
       "Choice Band",
       1,
       "P",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Passimian": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Choice Band",
       2,
       "P",
       "W"
      ],
      "Porygon2": [
       "Defensive",
       4,
       "M",
       "PW"
      ],
      "Pyukumuku": [
       "Unaware Wall",
       5,
       "M",
       "PW"
      ],
      "Raikou": [
       "Substitute + Calm Mind",
       2,
       "S",
       "OS",
       "Calm Mind + 3 Attacks",
       1,
       "S",
       "OS"
      ],
      "Registeel": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Rhyperior": [
       "Stealth Rock",
       4,
       "P",
       "MW",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Ribombee": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Quiver Dance",
       1,
       "S",
       "OS"
      ],
      "Roserade": [
       "Offensive Spikes",
       2,
       "S",
       "W"
      ],
      "Rotom-Mow": [
       "Offensive Support",
       2,
       "S",
       "S"
      ],
      "Salazzle": [
       "Special Sweeper",
       1,
       "S",
       "OS",
       "Choice Scarf",
       1,
       "2",
       "RK"
      ],
      "Sawk": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Sceptile": [
       "Leech Seed + Protect",
       2,
       "S",
       "RK"
      ],
      "Sceptile-Mega": [
       "Leech Seed + Protect",
       2,
       "S",
       "RK"
      ],
      "Seismitoad": [
       "Stealth Rock",
       4,
       "M",
       "PW"
      ],
      "Shaymin": [
       "Offensive",
       1,
       "S",
       "W",
       "Choice Scarf",
       1,
       "S",
       "RK",
       "Leech Seed",
       2,
       "S",
       "W",
       "Z-Celebrate",
       1,
       "S",
       "OS"
      ],
      "Sigilyph": [
       "Offensive Defog",
       2,
       "S",
       "W",
       "Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Slowbro": [
       "Defensive Pivot",
       4,
       "S",
       "PW"
      ],
      "Slowking": [
       "Assault Vest",
       3,
       "S",
       "SW"
      ],
      "Slurpuff": [
       "Belly Drum Sweeper",
       1,
       "P",
       "OS"
      ],
      "Sneasel": [
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Snorlax": [
       "Standard CurseLax",
       3,
       "P",
       "BS",
       "Recycle CurseLax",
       3,
       "P",
       "BS",
       "Choice Band",
       2,
       "P",
       "W"
      ],
      "Steelix": [
       "Tank",
       4,
       "P",
       "PW"
      ],
      "Stoutland": [
       "Sand Attacker",
       1,
       "P",
       "W"
      ],
      "Swellow": [
       "Boomburst",
       1,
       "S",
       "W"
      ],
      "Tangela": [
       "Defensive Pivot",
       1,
       "P",
       "W"
      ],
      "Torterra": [
       "Defensive",
       4,
       "M",
       "PW"
      ],
      "Toxicroak": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Tsareena": [
       "Offensive",
       2,
       "P",
       "W"
      ],
      "Tyrantrum": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Choice Band",
       1,
       "P",
       "W",
       "Rock Polish",
       1,
       "P",
       "OS"
      ],
      "Umbreon": [
       "Cleric",
       4,
       "P",
       "SW"
      ],
      "Uxie": [
       "Utility",
       4,
       "M",
       "S"
      ],
      "Vanilluxe": [
       "Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Vaporeon": [
       "Support",
       4,
       "S",
       "SW"
      ],
      "Venusaur": [
       "Sun Sweeper",
       1,
       "S",
       "OS"
      ],
      "Vikavolt": [
       "Bulky Pivot",
       4,
       "S",
       "PW"
      ],
      "Vileplume": [
       "Strength Sap",
       4,
       "S",
       "PW"
      ],
      "Virizion": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Vivillon": [
       "Quiver Dance",
       2,
       "S",
       "OS"
      ],
      "Xatu": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Yanmega": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Speed Boost Sweeper",
       1,
       "S",
       "OS"
      ],
      "Zygarde-10%": [
       "Dragon Dance",
       2,
       "P",
       "OS",
       "Choice Band",
       2,
       "P",
       "W"
      ],
      "Zygarde-Complete": [
       "Dragon Dance - 10%",
       2,
       "P",
       "OS",
       "Choice Band - 10%",
       2,
       "P",
       "W"
      ]
     },
     "NU": {
      "Abomasnow": [
       "Mixed Attacker",
       1,
       "M",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Abomasnow-Mega": [
       "Mixed Attacker",
       1,
       "M",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Absol": [
       "All-Out Attacker",
       1,
       "P",
       "W"
      ],
      "Accelgor": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Fightinium Z",
       2,
       "S",
       "W"
      ],
      "Aerodactyl": [
       "Choice Band",
       1,
       "P",
       "W",
       "Flyinium Z",
       1,
       "P",
       "W"
      ],
      "Ambipom": [
       "Offensive Pivot",
       2,
       "P",
       "W"
      ],
      "Archeops": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Aromatisse": [
       "Offensive Trick Room",
       2,
       "S",
       "OS"
      ],
      "Audino": [
       "Defensive Pivot",
       4,
       "P",
       "S"
      ],
      "Audino-Mega": [
       "Defensive Pivot",
       4,
       "P",
       "S"
      ],
      "Aurorus": [
       "Offensive Stealth Rock",
       2,
       "S",
       "W"
      ],
      "Blastoise": [
       "Defensive",
       4,
       "M",
       "PW"
      ],
      "Braviary": [
       "Offensive Bulk Up",
       1,
       "P",
       "OS",
       "Substitute + Bulk Up",
       3,
       "P",
       "BS"
      ],
      "Charizard": [
       "Z-Hold Hands",
       1,
       "S",
       "OS"
      ],
      "Cinccino": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Clawitzer": [
       "Wallbreaker",
       1,
       "S",
       "W",
       "Substitute + Toxic",
       2,
       "S",
       "W"
      ],
      "Clefairy": [
       "Defensive",
       4,
       "P",
       "SW"
      ],
      "Comfey": [
       "Calm Mind",
       3,
       "S",
       "RK"
      ],
      "Decidueye": [
       "Nasty Plot",
       1,
       "S",
       "OS",
       "Defensive Defog",
       4,
       "S",
       "S",
       "Offensive Defog",
       2,
       "S",
       "W"
      ],
      "Delphox": [
       "Calm Mind",
       1,
       "S",
       "OS",
       "Wish + Protect",
       4,
       "S",
       "S",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Dhelmise": [
       "Rapid Spin",
       2,
       "P",
       "S",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Druddigon": [
       "Defensive",
       4,
       "P",
       "SW",
       "Dragonium Z",
       2,
       "P",
       "W"
      ],
      "Exeggutor-Alola": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Ferroseed": [
       "Defensive Hazard Setter",
       4,
       "P",
       "PW"
      ],
      "Gallade": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Garbodor": [
       "Offensive Spikes Setter",
       2,
       "P",
       "W",
       "Defensive Spikes Setter",
       4,
       "P",
       "SW"
      ],
      "Glalie": [
       "Spikes",
       2,
       "P",
       "W"
      ],
      "Glalie-Mega": [
       "Spikes",
       2,
       "P",
       "W"
      ],
      "Golbat": [
       "Defensive",
       4,
       "P",
       "S"
      ],
      "Guzzlord": [
       "Choice Specs",
       3,
       "S",
       "W",
       "Dragonium Z",
       3,
       "M",
       "W"
      ],
      "Hariyama": [
       "Assault Vest",
       3,
       "P",
       "W",
       "Defensive",
       4,
       "P",
       "MW"
      ],
      "Heliolisk": [
       "All-out Attacker",
       1,
       "S",
       "W"
      ],
      "Hitmonlee": [
       "Curse",
       1,
       "P",
       "OS"
      ],
      "Hitmontop": [
       "Rapid Spin",
       4,
       "P",
       "PW"
      ],
      "Incineroar": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Defensive Pivot",
       3,
       "P",
       "MW",
       "Weakness Policy",
       3,
       "P",
       "BS"
      ],
      "Kingler": [
       "Double Dance",
       1,
       "P",
       "OS"
      ],
      "Klinklang": [
       "Shift Gear",
       1,
       "P",
       "OS"
      ],
      "Lilligant": [
       "Quiver Dance",
       1,
       "S",
       "OS"
      ],
      "Magmortar": [
       "Z-Move",
       2,
       "S",
       "W",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Malamar": [
       "Rest Talk Sweeper",
       3,
       "P",
       "S"
      ],
      "Medicham": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Mesprit": [
       "Offensive Support",
       2,
       "S",
       "S"
      ],
      "Miltank": [
       "Stealth Rock",
       4,
       "P",
       "PW"
      ],
      "Minior": [
       "Shell Smash",
       1,
       "M",
       "OS"
      ],
      "Mismagius": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Palossand": [
       "Defensive Stealth Rock",
       4,
       "S",
       "PW"
      ],
      "Pangoro": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Passimian": [
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Piloswine": [
       "Stealth Rock",
       2,
       "P",
       "W"
      ],
      "Pyroar": [
       "Z-Move",
       2,
       "S",
       "W"
      ],
      "Pyukumuku": [
       "Unaware Wall",
       5,
       "M",
       "PW"
      ],
      "Regirock": [
       "Mixed Defensive",
       4,
       "P",
       "MW"
      ],
      "Rhydon": [
       "Stealth Rock",
       2,
       "P",
       "W"
      ],
      "Rotom": [
       "Defensive Defog",
       4,
       "S",
       "S",
       "Offensive Defog",
       2,
       "S",
       "S",
       "Choice Specs",
       2,
       "S",
       "W"
      ],
      "Samurott": [
       "Special Wallbreaker",
       1,
       "S",
       "W",
       "Swords Dance Sweeper",
       1,
       "P",
       "OS"
      ],
      "Sawk": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Sceptile": [
       "All-out Attacker",
       1,
       "S",
       "W"
      ],
      "Scrafty": [
       "Bulk Up",
       3,
       "P",
       "BS",
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Seismitoad": [
       "Defensive Stealth Rock",
       4,
       "M",
       "PW",
       "Offensive Stealth Rock",
       2,
       "M",
       "W",
       "Substitute + Toxic",
       2,
       "M",
       "S"
      ],
      "Sigilyph": [
       "Life Orb Attacker",
       2,
       "S",
       "W",
       "Choice Specs",
       1,
       "S",
       "W",
       "Calm Mind + Flyinium Z",
       3,
       "S",
       "BS"
      ],
      "Silvally-Poison": [
       "Pivot",
       4,
       "M",
       "S"
      ],
      "Silvally-Steel": [
       "Defensive Pivot",
       4,
       "M",
       "SW"
      ],
      "Slowking": [
       "Assault Vest",
       3,
       "S",
       "SW",
       "Nasty Plot",
       3,
       "S",
       "BS",
       "Physically Defensive",
       4,
       "S",
       "PW"
      ],
      "Sneasel": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Steelix": [
       "Defensive",
       4,
       "P",
       "MW"
      ],
      "Tauros": [
       "Tauros",
       1,
       "M",
       "OS"
      ],
      "Togedemaru": [
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Torterra": [
       "Offensive",
       1,
       "P",
       "W"
      ],
      "Typhlosion": [
       "Typhlosion",
       1,
       "S",
       "W"
      ],
      "Vaporeon": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Victreebel": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Vikavolt": [
       "Pivot",
       3,
       "S",
       "W",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Vivillon": [
       "Quiver Dance",
       2,
       "S",
       "OS"
      ],
      "Weezing": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Whimsicott": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Xatu": [
       "Defensive Pivot",
       4,
       "M",
       "PW"
      ]
     },
     "PU": {
      "Abomasnow": [
       "Mixed Wallbreaker",
       1,
       "M",
       "W",
       "Choice Scarf",
       1,
       "M",
       "RK",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Absol": [
       "Choice Band",
       2,
       "P",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Aggron": [
       "Choice Band",
       1,
       "P",
       "W",
       "Offensive Stealth Rock",
       2,
       "P",
       "S"
      ],
      "Altaria": [
       "Defensive Defog",
       4,
       "S",
       "SW"
      ],
      "Ampharos": [
       "Cleric",
       3,
       "S",
       "W"
      ],
      "Arbok": [
       "Offensive Coil",
       1,
       "P",
       "OS"
      ],
      "Ariados": [
       "Lead",
       2,
       "P",
       "OL"
      ],
      "Armaldo": [
       "Offensive Spinner",
       2,
       "P",
       "W"
      ],
      "Articuno": [
       "3 Attacks + Roost",
       1,
       "S",
       "W",
       "SubRoost",
       2,
       "S",
       "W",
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Audino": [
       "Wish Passer",
       4,
       "S",
       "S"
      ],
      "Aurorus": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Choice Scarf",
       1,
       "M",
       "RK",
       "Stealth Rock Lead",
       2,
       "M",
       "OL"
      ],
      "Avalugg": [
       "Defensive Spinner",
       4,
       "P",
       "MW"
      ],
      "Banette": [
       "Offensive",
       1,
       "P",
       "W"
      ],
      "Basculin": [
       "All-out Attacker",
       2,
       "P",
       "W"
      ],
      "Bastiodon": [
       "Special Wall",
       4,
       "P",
       "SW"
      ],
      "Beartic": [
       "Weather Sweeper",
       1,
       "P",
       "OS"
      ],
      "Beautifly": [
       "Quiver Dance",
       2,
       "S",
       "OS"
      ],
      "Beedrill": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Beheeyem": [
       "Offensive Trick Room",
       2,
       "S",
       "W"
      ],
      "Bellossom": [
       "Bulky Quiver Dance",
       3,
       "S",
       "BS"
      ],
      "Bibarel": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Bouffalant": [
       "Substitute + Swords Dance",
       3,
       "P",
       "BS"
      ],
      "Bronzor": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Butterfree": [
       "Quiver Dance",
       2,
       "S",
       "OS"
      ],
      "Cacturne": [
       "Offensive Spikes",
       2,
       "M",
       "W"
      ],
      "Camerupt": [
       "Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Carbink": [
       "Trick Room Lead",
       4,
       "P",
       "S",
       "Stealth Rock",
       4,
       "S",
       "SW"
      ],
      "Carnivine": [
       "Swords Dance",
       1,
       "P",
       "W"
      ],
      "Carracosta": [
       "Shell Smash",
       1,
       "M",
       "OS"
      ],
      "Castform": [
       "Z-Rain Dance",
       1,
       "S",
       "OS"
      ],
      "Chatot": [
       "Choice Attacker",
       1,
       "S",
       "W"
      ],
      "Cherrim": [
       "Z-Sunny Day",
       1,
       "P",
       "W"
      ],
      "Chimecho": [
       "Supporter",
       4,
       "S",
       "S"
      ],
      "Claydol": [
       "Rapid Spin",
       1,
       "P",
       "W"
      ],
      "Clefairy": [
       "Calm Mind",
       3,
       "M",
       "S",
       "Specially Defensive",
       null,
       null,
       null
      ],
      "Combusken": [
       "Specially Offensive",
       1,
       "S",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Corsola": [
       "Stealth Rock",
       4,
       "S",
       "PW"
      ],
      "Crabominable": [
       "Assault Vest",
       4,
       "P",
       "SW",
       "SubToxic",
       4,
       "P",
       "SW",
       "Trick Room Attacker",
       1,
       "P",
       "W"
      ],
      "Cradily": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Crustle": [
       "Entry Hazard Lead",
       2,
       "P",
       "OL"
      ],
      "Cryogonal": [
       "Offensive",
       2,
       "M",
       "W",
       "Defensive",
       4,
       "M",
       "S"
      ],
      "Dedenne": [
       "SubRecycle",
       2,
       "S",
       "W"
      ],
      "Delcatty": [
       "Normalize",
       2,
       "P",
       "W"
      ],
      "Delibird": [
       "Lead",
       2,
       "M",
       "OL"
      ],
      "Dewgong": [
       "Perish Trapper",
       4,
       "S",
       "SB"
      ],
      "Ditto": [
       "Imposter",
       5,
       "M",
       "RK"
      ],
      "Dodrio": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Drampa": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Calm Mind",
       2,
       "S",
       "W"
      ],
      "Drifblim": [
       "Substitute + Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Dugtrio": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Dugtrio-Alola": [
       "Substitute + Toxic",
       2,
       "P",
       "W",
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Dunsparce": [
       "ParaFlinch",
       2,
       "P",
       "S"
      ],
      "Dusknoir": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Dustox": [
       "Quiver Dance + Iron Defense",
       3,
       "S",
       "BS"
      ],
      "Eelektross": [
       "Assault Vest",
       3,
       "P",
       "W"
      ],
      "Electivire": [
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Electrode": [
       "Dual Screens",
       2,
       "P",
       "S"
      ],
      "Emolga": [
       "Utility Pivot",
       2,
       "S",
       "S"
      ],
      "Exeggutor": [
       "Trick Room",
       2,
       "S",
       "W",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Farfetch’d": [
       "All-out Attacker",
       "",
       "",
       ""
      ],
      "Fearow": [
       "Critical Hit",
       1,
       "P",
       "W"
      ],
      "Ferroseed": [
       "Defensive",
       4,
       "P",
       "PW"
      ],
      "Flareon": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Floatzel": [
       "Specially Offensive",
       1,
       "S",
       "W",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Furfrou": [
       "Offensive Pivot",
       2,
       "P",
       "W"
      ],
      "Furret": [
       "Frisk + Trick",
       2,
       "P",
       "W"
      ],
      "Gastrodon": [
       "Defensive",
       4,
       "M",
       "MW"
      ],
      "Girafarig": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Glaceon": [
       "Z-Celebrate",
       1,
       "S",
       "OS"
      ],
      "Glalie": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Gogoat": [
       "Bulk Up",
       3,
       "P",
       "BS"
      ],
      "Golduck": [
       "Rain Sweeper",
       1,
       "S",
       "OS"
      ],
      "Golem": [
       "Lead",
       2,
       "P",
       "OL"
      ],
      "Golem-Alola": [
       "Trapper",
       1,
       "P",
       "W"
      ],
      "Golurk": [
       "Stealth Rock",
       2,
       "P",
       "RK"
      ],
      "Gorebyss": [
       "Shell Smash",
       1,
       "S",
       "OS"
      ],
      "Gothitelle": [
       "Calm Mind",
       1,
       "S",
       "W"
      ],
      "Gourgeist": [
       "Z-Trick-or-Treat",
       1,
       "P",
       "OS"
      ],
      "Gourgeist-Large": [
       "Defensive",
       4,
       "P",
       "PW"
      ],
      "Gourgeist-Small": [
       "SubSeed",
       4,
       "P",
       "S"
      ],
      "Gourgeist-Super": [
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Granbull": [
       "Offensive Support",
       2,
       "P",
       "S"
      ],
      "Grumpig": [
       "3 Attacks",
       2,
       "S",
       "W"
      ],
      "Gumshoos": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Gurdurr": [
       "Bulky Attacker",
       3,
       "P",
       "BS"
      ],
      "Haunter": [
       "Life Orb",
       2,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Heatmor": [
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Hitmonchan": [
       "Toxic + Iapapa Berry",
       4,
       "P",
       "S",
       "Life Orb Attacker",
       2,
       "P",
       "W",
       "Assault Vest",
       3,
       "P",
       "W"
      ],
      "Huntail": [
       "Shell Smash",
       1,
       "P",
       "OS"
      ],
      "Hypno": [
       "Z-Hypnosis Belly Drum",
       1,
       "P",
       "OS"
      ],
      "Illumise": [
       "Weather Setter",
       2,
       "P",
       "S"
      ],
      "Jellicent": [
       "Defensive Utility",
       4,
       "S",
       "PW",
       "Offensive Taunt",
       "",
       "",
       "",
       "Offensive Trick Room",
       2,
       "S",
       "W",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Jumpluff": [
       "Swords Dance",
       2,
       "P",
       "OS",
       "Fast Pivot",
       2,
       "P",
       "S"
      ],
      "Jynx": [
       "Z-Lovely Kiss",
       2,
       "S",
       "OS",
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Substitute + Nasty Plot",
       2,
       "S",
       "OS"
      ],
      "Kabutops": [
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Rain Sweeper",
       1,
       "P",
       "OS"
      ],
      "Kadabra": [
       "Focus Sash Revenge Killer",
       1,
       "M",
       "RK"
      ],
      "Kangaskhan": [
       "All-Out Attacker",
       1,
       "P",
       "W",
       "Power-Up Punch + Z-Move",
       1,
       "P",
       "OS",
       "Substitute + Toxic",
       3,
       "P",
       "BS"
      ],
      "Kecleon": [
       "Assault Vest",
       3,
       "P",
       "W"
      ],
      "Komala": [
       "Bulky Spinner",
       3,
       "P",
       "W"
      ],
      "Kricketune": [
       "Suicide Lead",
       1,
       "P",
       "W"
      ],
      "Lanturn": [
       "Bulky Pivot",
       4,
       "S",
       "MW",
       "Assault Vest",
       3,
       "S",
       "W",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Lapras": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Leafeon": [
       "Z-Celebrate",
       1,
       "P",
       "OS",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Leavanny": [
       "Sticky Web",
       2,
       "P",
       "OL"
      ],
      "Ledian": [
       "Falcon PUNCH (All-out Attacker)",
       1,
       "P",
       "W"
      ],
      "Lickilicky": [
       "Wish",
       4,
       "P",
       "WS"
      ],
      "Liepard": [
       "Choice Band",
       2,
       "P",
       "W",
       "Nasty Plot",
       2,
       "S",
       "W",
       "Weather",
       2,
       "P",
       "S"
      ],
      "Lopunny": [
       "Switcheroo",
       2,
       "P",
       "S"
      ],
      "Ludicolo": [
       "Rain Sweeper",
       1,
       "S",
       "OS"
      ],
      "Lumineon": [
       "Defog",
       1,
       "MP",
       "PW"
      ],
      "Lunatone": [
       "Offensive",
       1,
       "S",
       "OS"
      ],
      "Lurantis": [
       "Defog",
       4,
       "P",
       "S"
      ],
      "Luvdisc": [
       "Rain Sweeper",
       2,
       "S",
       "OS"
      ],
      "Luxray": [
       "All-Out Attacker",
       1,
       "P",
       "W"
      ],
      "Lycanroc": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Offensive Stealth Rock",
       2,
       "P",
       "W"
      ],
      "Lycanroc-Midnight": [
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Magcargo": [
       "Stealth Rock",
       4,
       "S",
       "SW"
      ],
      "Manectric": [
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Maractus": [
       "Lead",
       2,
       "M",
       "OL"
      ],
      "Marowak": [
       "Trick Room Attacker",
       1,
       "P",
       "W"
      ],
      "Masquerain": [
       "Sticky Web Lead",
       2,
       "S",
       "OL"
      ],
      "Mawile": [
       "Wallbreaker",
       1,
       "M",
       "W",
       "Physical Wall",
       4,
       "P",
       "PW"
      ],
      "Meganium": [
       "Cleric",
       4,
       "M",
       "S"
      ],
      "Meowstic": [
       "Dual Screens",
       2,
       "S",
       "S"
      ],
      "Meowstic-F": [
       "Competitive Sweeper",
       1,
       "S",
       "OS"
      ],
      "Metang": [
       "Stealth Rock",
       3,
       "P",
       "W"
      ],
      "Mightyena": [
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Minun": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Mothim": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Mr. Mime": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Mudsdale": [
       "Stealth Rock",
       4,
       "P",
       "PW",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Muk": [
       "Rest + Sleep Talk",
       4,
       "P",
       "SW",
       "Choice Band",
       3,
       "P",
       "W"
      ],
      "Musharna": [
       "Future Sight",
       3,
       "S",
       "W",
       "Calm Mind",
       3,
       "S",
       "BS",
       "Calm Mind + Barrier",
       4,
       "S",
       "BS"
      ],
      "Natu": [
       "Defensive Magic Bounce",
       4,
       "M",
       "S"
      ],
      "Ninjask": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Noctowl": [
       "Double Dance",
       1,
       "S",
       "OS"
      ],
      "Octillery": [
       "Trick Room",
       1,
       "S",
       "W"
      ],
      "Omastar": [
       "Shell Smash",
       1,
       "S",
       "OS",
       "Lead",
       2,
       "S",
       "OL"
      ],
      "Oranguru": [
       "Trick Room",
       1,
       "S",
       "OS"
      ],
      "Oricorio": [
       "Offensive Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Oricorio-Pa'u": [
       "Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Oricorio-Pom-Pom": [
       "Calm Mind",
       1,
       "S",
       "OS",
       "Stallbreaker",
       4,
       "S",
       "SB"
      ],
      "Oricorio-Sensu": [
       "Bulky Calm Mind",
       3,
       "S",
       "BS",
       "Offensive Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Pachirisu": [
       "Utility",
       4,
       "P",
       "S"
      ],
      "Parasect": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Pawniard": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Persian": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Persian-Alola": [
       "Nasty Plot",
       1,
       "S",
       "OS",
       "Bulky Pivot",
       4,
       "P",
       "S"
      ],
      "Phione": [
       "Rain Dance",
       4,
       "M",
       "S"
      ],
      "Pidgeot": [
       "Defog",
       2,
       "P",
       "W"
      ],
      "Pinsir": [
       "Z-Me First",
       1,
       "P",
       "OS",
       "Swords Dance",
       1,
       "P",
       "W"
      ],
      "Plusle": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Politoed": [
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Poliwrath": [
       "Special Tank",
       3,
       "S",
       "W",
       "Physically Defensive",
       4,
       "M",
       "PW"
      ],
      "Primeape": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Offensive",
       2,
       "P",
       "W",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Probopass": [
       "Offensive Stealth Rock",
       2,
       "S",
       "W"
      ],
      "Purugly": [
       "All-out Attacker",
       2,
       "P",
       "W"
      ],
      "Pyukumuku": [
       "Unaware Trapper",
       5,
       "M",
       "PW"
      ],
      "Qwilfish": [
       "Utility",
       2,
       "M",
       "S",
       "Rain Sweeper",
       1,
       "P",
       "OS"
      ],
      "Raichu": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Raichu-Alola": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Rampardos": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Rapidash": [
       "Offensive Utility",
       2,
       "P",
       "W"
      ],
      "Raticate": [
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Raticate-Alola": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Regice": [
       "Rock Polish",
       1,
       "2",
       "OS"
      ],
      "Regigigas": [
       "Slow Utility",
       3,
       "P",
       "W"
      ],
      "Regirock": [
       "Stealth Rock",
       4,
       "P",
       "PW",
       "Sunny Day",
       4,
       "P",
       "S"
      ],
      "Relicanth": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Roselia": [
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Rotom-Fan": [
       "Defensive Pivot",
       4,
       "S",
       "PW"
      ],
      "Rotom-Frost": [
       "Offensive Defog",
       2,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Sableye": [
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Sandslash": [
       "Utility",
       4,
       "P",
       "S"
      ],
      "Sandslash-Alola": [
       "Hail Sweeper",
       1,
       "P",
       "OS",
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Offensive Support",
       2,
       "P",
       "S"
      ],
      "Sawsbuck": [
       "Sun Sweeper",
       1,
       "P",
       "OS"
      ],
      "Scyther": [
       "Bulky Swords Dance",
       3,
       "P",
       "BS",
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Choice Band",
       2,
       "P",
       "W"
      ],
      "Seaking": [
       "Offensive Utility",
       1,
       "P",
       "W"
      ],
      "Servine": [
       "Fast Utility",
       2,
       "S",
       "S"
      ],
      "Seviper": [
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Shedinja": [
       "Swords Dance",
       2,
       "P",
       "OS"
      ],
      "Shiftry": [
       "Mixed Life Orb",
       2,
       "M",
       "W",
       "Swords Dance",
       1,
       "P",
       "W",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Shiinotic": [
       "Choice Specs",
       2,
       "S",
       "W"
      ],
      "Shuckle": [
       "Sticky Web Setter",
       5,
       "M",
       "OL"
      ],
      "Silvally": [
       "Swords Dance",
       2,
       "P",
       "OS"
      ],
      "Silvally-Bug": [
       "Offensive Utility",
       2,
       "P",
       "S"
      ],
      "Silvally-Dark": [
       "Pursuit Trapper",
       1,
       "P",
       "W"
      ],
      "Silvally-Dragon": [
       "Offensive Utility",
       2,
       "S",
       "W"
      ],
      "Silvally-Electric": [
       "BoltBeam",
       2,
       "S",
       "W"
      ],
      "Silvally-Fairy": [
       "Support",
       4,
       "M",
       "S",
       "Swords Dance",
       2,
       "P",
       "OS"
      ],
      "Silvally-Fighting": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Silvally-Fire": [
       "Offensive Pivot",
       2,
       "S",
       "W"
      ],
      "Silvally-Flying": [
       "Offensive Pivot",
       2,
       "S",
       "W"
      ],
      "Silvally-Ghost": [
       "Offensive Pivot",
       2,
       "S",
       "W"
      ],
      "Silvally-Grass": [
       "Offensive Pivot",
       2,
       "S",
       "W"
      ],
      "Silvally-Ground": [
       "Fast Pivot",
       2,
       "P",
       "S"
      ],
      "Silvally-Ice": [
       "Physically Offensive",
       1,
       "P",
       "OS"
      ],
      "Silvally-Poison": [
       "Bulky Pivot",
       4,
       "M",
       "SW"
      ],
      "Silvally-Psychic": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Silvally-Rock": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Silvally-Water": [
       "Defensive Defog",
       4,
       "S",
       "PW"
      ],
      "Simipour": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Simisage": [
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Simisear": [
       "Nasty Plot",
       1,
       "S",
       "OS",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Skuntank": [
       "Physically Offensive",
       2,
       "P",
       "W",
       "Choice Band",
       2,
       "P",
       "W",
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Special Attacker",
       2,
       "S",
       "W"
      ],
      "Slaking": [
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Smeargle": [
       "Sticky Web Lead",
       4,
       "P",
       "OL"
      ],
      "Solrock": [
       "Stealth Rock",
       4,
       "P",
       "PW"
      ],
      "Spinda": [
       "Trick Room",
       2,
       "P",
       "OS"
      ],
      "Spiritomb": [
       "Pursuit Trapper",
       3,
       "P",
       "W",
       "Calm Mind",
       4,
       "S",
       "BS"
      ],
      "Stantler": [
       "All-out Attacker",
       1,
       "MP",
       "W"
      ],
      "Stoutland": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Stunfisk": [
       "Defensive Stealth Rock",
       4,
       "S",
       "PW"
      ],
      "Sudowoodo": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Sunflora": [
       "Sun Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Swalot": [
       "Assault Vest",
       3,
       "S",
       "W"
      ],
      "Swanna": [
       "Offensive Defog",
       2,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Swoobat": [
       "Calm Mind",
       1,
       "S",
       "WOS"
      ],
      "Tangela": [
       "Defensive Pivot",
       4,
       "M",
       "PW"
      ],
      "Throh": [
       "Bulk Up",
       3,
       "P",
       "BS"
      ],
      "Torkoal": [
       "Rapid Spin",
       4,
       "M",
       "PW"
      ],
      "Torterra": [
       "Rock Polish",
       1,
       "P",
       "OS",
       "Stealth Rock",
       4,
       "P",
       "SW",
       "Bulky Swords Dance",
       3,
       "P",
       "BS"
      ],
      "Toucannon": [
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Trevenant": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Tropius": [
       "SubSeed",
       4,
       "S",
       "PW"
      ],
      "Turtonator": [
       "Shell Smash",
       1,
       "S",
       "OS"
      ],
      "Type: Null": [
       "Bulky Pivot",
       4,
       "P",
       "SW",
       "Swords Dance",
       3,
       "P",
       "BS"
      ],
      "Unfezant": [
       "Tailwind Support",
       2,
       "P",
       "S"
      ],
      "Unown": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Ursaring": [
       "Trick Room Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Vespiquen": [
       "Pressure Stall",
       4,
       "S",
       "PW"
      ],
      "Victreebel": [
       "Specially Offensive",
       2,
       "S",
       "W",
       "Swords Dance",
       2,
       "P",
       "OS"
      ],
      "Volbeat": [
       "Weather Setter",
       4,
       "P",
       "S"
      ],
      "Wailord": [
       "Pressure Stall",
       1,
       "P",
       "W"
      ],
      "Walrein": [
       "Specially Defensive",
       5,
       "S",
       "SW"
      ],
      "Watchog": [
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Whiscash": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Wigglytuff": [
       "Stealth Rock",
       2,
       "S",
       "W"
      ],
      "Wishiwashi": [
       "Trick Room Sweeper",
       1,
       "S",
       "OS"
      ],
      "Wobbuffet": [
       "Bulky Death Fodder",
       5,
       "M",
       "SW"
      ],
      "Wormadam": [
       "Quiver Dance",
       2,
       "S",
       "OS"
      ],
      "Wormadam-Sandy": [
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Wormadam-Trash": [
       "Defensive Utility",
       4,
       "P",
       "SW"
      ],
      "Zangoose": [
       "Toxic Orb Wallbreaker",
       1,
       "P",
       "W",
       "Belly Drum",
       1,
       "P",
       "OS"
      ],
      "Zebstrika": [
       "All-out Attacker",
       1,
       "S",
       "W"
      ]
     },
     "LC": {
      "Abra": [
       "Focus Sash",
       1,
       "S",
       "RK",
       "Life Orb",
       1,
       "S",
       "W"
      ],
      "Amaura": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Anorith": [
       "Utility",
       2,
       "P",
       "S"
      ],
      "Archen": [
       "The Hero",
       1,
       "M",
       "W",
       "Utility",
       2,
       "P",
       "W"
      ],
      "Aron": [
       "Rock Polish",
       3,
       "P",
       "BS"
      ],
      "Axew": [
       "Dragon Dance Sweeper",
       1,
       "P",
       "OS"
      ],
      "Azurill": [
       "Trick Room Sweeper",
       1,
       "P",
       "OS"
      ],
      "Bagon": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Baltoy": [
       "Rapid Spin",
       4,
       "M",
       "MW"
      ],
      "Barboach": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Bellsprout": [
       "Praise The Sun (Sun Sweeper)",
       1,
       "S",
       "OS"
      ],
      "Bergmite": [
       "Bulky Spinner",
       4,
       "P",
       "MW"
      ],
      "Bidoof": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Binacle": [
       "Shell Smash",
       1,
       "P",
       "OS"
      ],
      "Blitzle": [
       "All-out Attacker",
       1,
       "M",
       "W"
      ],
      "Bonsly": [
       "SturdyJuice",
       2,
       "P",
       "S"
      ],
      "Bounsweet": [
       "Rapid Spin",
       4,
       "P",
       "S"
      ],
      "Bronzor": [
       "Stealth Rock Setter",
       4,
       "P",
       "PW"
      ],
      "Budew": [
       "Entry Hazard Setter",
       4,
       "S",
       "S"
      ],
      "Buizel": [
       "Icium Z",
       1,
       "M",
       "W"
      ],
      "Bulbasaur": [
       "Z-Celebrate Sweeper",
       1,
       "S",
       "OS"
      ],
      "Buneary": [
       "Offensive Utility",
       2,
       "P",
       "W",
       "Z-Splash",
       1,
       "P",
       "OS"
      ],
      "Bunnelby": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Cacnea": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Carvanha": [
       "Physical Life Orb",
       1,
       "P",
       "OS",
       "Special Life Orb",
       1,
       "S",
       "OS"
      ],
      "Charmander": [
       "Life Orb",
       1,
       "M",
       "OS"
      ],
      "Cherubi": [
       "Sun 'Sweeper'",
       2,
       "S",
       "OS"
      ],
      "Chespin": [
       "Offensive Utility",
       2,
       "P",
       "S"
      ],
      "Chikorita": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Chimchar": [
       "Suicide Lead",
       1,
       "M",
       "OL"
      ],
      "Chinchou": [
       "Bulky Pivot",
       4,
       "S",
       "PW",
       "Choice Scarf Pivot",
       1,
       "S",
       "RK"
      ],
      "Chingling": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Clamperl": [
       "Shell Smash",
       1,
       "S",
       "OS"
      ],
      "Clauncher": [
       "Choice Scarf",
       1,
       "M",
       "RK"
      ],
      "Cleffa": [
       "Counter",
       2,
       "P",
       "OL"
      ],
      "Corphish": [
       "Wallbreaker",
       1,
       "P",
       "W",
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Cottonee": [
       "Offensive Prankster",
       2,
       "S",
       "S"
      ],
      "Crabrawler": [
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Cranidos": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Croagunk": [
       "Special Attacker",
       1,
       "S",
       "OS",
       "Mixed Utility",
       2,
       "M",
       "W",
       "Physical Support",
       1,
       "P",
       "W"
      ],
      "Cubchoo": [
       "Hail Sweeper",
       1,
       "P",
       "OS"
      ],
      "Cubone": [
       "Physical Attacker",
       1,
       "P",
       "W"
      ],
      "Cyndaquil": [
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Darumaka": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Deerling": [
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Deino": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Diglett": [
       "Offensive Trapper",
       2,
       "P",
       "SB",
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Focus Sash",
       2,
       "P",
       "SB"
      ],
      "Diglett-Alola": [
       "Sand Sweeper",
       1,
       "P",
       "OS"
      ],
      "Doduo": [
       "Physical Attacker",
       1,
       "P",
       "W",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Dratini": [
       "Life Orb Mixed Attacker",
       1,
       "M",
       "W",
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Drilbur": [
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Utility",
       2,
       "P",
       "S",
       "All-out Attacker",
       2,
       "P",
       "W"
      ],
      "Drowzee": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Ducklett": [
       "Utility Defog",
       4,
       "S",
       "MW"
      ],
      "Duskull": [
       "Bulky Utility",
       4,
       "P",
       "MW"
      ],
      "Dwebble": [
       "Entry Hazard Setter",
       2,
       "P",
       "S",
       "Shell Smash",
       1,
       "P",
       "OS"
      ],
      "Ekans": [
       "Coil Sweeper",
       1,
       "P",
       "OS"
      ],
      "Electrike": [
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Elekid": [
       "Special Attacker",
       1,
       "S",
       "W"
      ],
      "Elgyem": [
       "Offensive Trick Room",
       2,
       "S",
       "OS"
      ],
      "Espurr": [
       "Electrium Z",
       1,
       "S",
       "W"
      ],
      "Exeggcute": [
       "Harvest",
       3,
       "S",
       "W"
      ],
      "Fennekin": [
       "Magician",
       2,
       "S",
       "W"
      ],
      "Ferroseed": [
       "Wall",
       4,
       "P",
       "MW"
      ],
      "Finneon": [
       "Defog",
       4,
       "M",
       "PW"
      ],
      "Flabébé": [
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Fletchling": [
       "Bulky Sweeper",
       3,
       "P",
       "BS"
      ],
      "Fomantis": [
       "Defensive Defog",
       4,
       "S",
       "PW"
      ],
      "Foongus": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Frillish": [
       "Tank",
       4,
       "S",
       "MW",
       "Choice Scarf + Water Spout",
       1,
       "S",
       "RK"
      ],
      "Froakie": [
       "Life Orb",
       1,
       "M",
       "W"
      ],
      "Gastly": [
       "Life Orb",
       1,
       "S",
       "W",
       "Hex",
       2,
       "S",
       "W",
       "Lure",
       2,
       "S",
       "W",
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Geodude": [
       "Stealth Rock",
       2,
       "P",
       "OL"
      ],
      "Geodude-Alola": [
       "Magnet Pull",
       2,
       "P",
       "W"
      ],
      "Gible": [
       "Stealth Rock",
       3,
       "S",
       "W"
      ],
      "Glameow": [
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Goldeen": [
       "Supersonic Skystrike",
       1,
       "P",
       "W"
      ],
      "Golett": [
       "Tank",
       3,
       "P",
       "W"
      ],
      "Goomy": [
       "Sap Sipper",
       4,
       "S",
       "MW"
      ],
      "Grimer": [
       "Tank",
       3,
       "P",
       "W"
      ],
      "Grimer-Alola": [
       "Pursuit Trap",
       2,
       "P",
       "W",
       "RestTalk",
       4,
       "P",
       "MW"
      ],
      "Growlithe": [
       "Bulky Pivot",
       4,
       "P",
       "MW"
      ],
      "Grubbin": [
       "Electroweb Pivot",
       4,
       "P",
       "MW"
      ],
      "Helioptile": [
       "Life Orb",
       2,
       "M",
       "W"
      ],
      "Hippopotas": [
       "Physical Wall",
       4,
       "P",
       "PW"
      ],
      "Honedge": [
       "Offensive",
       3,
       "P",
       "W"
      ],
      "Hoothoot": [
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Hoppip": [
       "Bulky Support",
       4,
       "P",
       "S"
      ],
      "Horsea": [
       "Rain Sweeper",
       2,
       "S",
       "OS"
      ],
      "Houndour": [
       "Life Orb",
       1,
       "M",
       "W",
       "Choice Scarf",
       2,
       "M",
       "RK"
      ],
      "Igglybuff": [
       "Wish + Protect",
       4,
       "S",
       "S"
      ],
      "Inkay": [
       "Choice Scarf",
       1,
       "P",
       "OS"
      ],
      "Jangmo-o": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Joltik": [
       "All Out Attacker",
       1,
       "S",
       "W"
      ],
      "Kabuto": [
       "Offensive Support",
       2,
       "P",
       "S"
      ],
      "Karrablast": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Klink": [
       "Shift Gear",
       1,
       "P",
       "OS"
      ],
      "Koffing": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Krabby": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Larvesta": [
       "Bulky Pivot",
       4,
       "P",
       "MW"
      ],
      "Larvitar": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Ledyba": [
       "Swords Dance",
       1,
       "P",
       "W"
      ],
      "Lickitung": [
       "Wish Support",
       4,
       "P",
       "S"
      ],
      "Lileep": [
       "Tank",
       4,
       "S",
       "PW"
      ],
      "Lillipup": [
       "Bulky Attacker",
       3,
       "P",
       "W"
      ],
      "Litleo": [
       "Moxie Sweeper",
       1,
       "P",
       "OS"
      ],
      "Litten": [
       "Intimidate Pivot",
       4,
       "P",
       "PW"
      ],
      "Litwick": [
       "Trick Room",
       4,
       "S",
       "S"
      ],
      "Lotad": [
       "Rain Sweeper",
       1,
       "S",
       "OS"
      ],
      "Machop": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Magby": [
       "Belly Drum",
       1,
       "P",
       "OS",
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Magnemite": [
       "Choice Scarf",
       1,
       "S",
       "RK",
       "SturdyJuice",
       2,
       "S",
       "W"
      ],
      "Makuhita": [
       "Belly Drum",
       1,
       "P",
       "OS"
      ],
      "Mankey": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Mantyke": [
       "Eye of the Storm (Rain Dance)",
       1,
       "S",
       "W"
      ],
      "Mareanie": [
       "Defensive Pivot",
       4,
       "M",
       "MW"
      ],
      "Mareep": [
       "Dual Screens",
       2,
       "S",
       "S"
      ],
      "Meowth": [
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Meowth-Alola": [
       "Z-Parting Shot",
       2,
       "S",
       "S",
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Mienfoo": [
       "Bulky Attacker",
       3,
       "P",
       "W",
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Flyinium Z",
       2,
       "P",
       "W"
      ],
      "Minccino": [
       "Life Orb",
       2,
       "P",
       "W"
      ],
      "Morelull": [
       "Defensive Pivot",
       4,
       "S",
       "MW"
      ],
      "Mudbray": [
       "Offensive",
       2,
       "P",
       "W",
       "RestTalk",
       4,
       "P",
       "MW",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Mudkip": [
       "Bulky Attacker",
       3,
       "M",
       "W"
      ],
      "Munchlax": [
       "Recycle + Berry Juice Tank",
       3,
       "P",
       "SW",
       "RestTalk",
       4,
       "P",
       "BS"
      ],
      "Munna": [
       "Calm Mind Sweeper",
       3,
       "P",
       "BS"
      ],
      "Natu": [
       "Life Orb",
       1,
       "M",
       "W",
       "Defensive",
       4,
       "M",
       "PW"
      ],
      "Nidoran-F": [
       "Toxic Spikes",
       2,
       "P",
       "S"
      ],
      "Nidoran-M": [
       "Hone Claws",
       1,
       "P",
       "OS"
      ],
      "Nincada": [
       "Final Gambit",
       3,
       "P",
       "W"
      ],
      "Noibat": [
       "Life Orb",
       2,
       "M",
       "S"
      ],
      "Nosepass": [
       "SturdyJuice Utility",
       4,
       "M",
       "MW"
      ],
      "Numel": [
       "Sweeper",
       1,
       "M",
       "OS"
      ],
      "Oddish": [
       "Defensive Pivot",
       4,
       "S",
       "PW"
      ],
      "Omanyte": [
       "Shell Smash Sweeper",
       1,
       "S",
       "OS",
       "Support",
       2,
       "M",
       "S"
      ],
      "Onix": [
       "SturdyJuice",
       2,
       "P",
       "W",
       "Weak Armor",
       2,
       "P",
       "OL"
      ],
      "Oshawott": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Pancham": [
       "Parting Shot Pivot",
       3,
       "P",
       "W",
       "Swords Dance Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Panpour": [
       "Nasty Plot",
       1,
       "P",
       "OS"
      ],
      "Pansage": [
       "All-Out Offensive",
       1,
       "P",
       "W"
      ],
      "Pansear": [
       "Substitute + Will-O-Wisp",
       4,
       "P",
       "MW"
      ],
      "Paras": [
       "Spore Utility",
       4,
       "P",
       "MW"
      ],
      "Patrat": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Pawniard": [
       "Bulky Attacker",
       3,
       "P",
       "W",
       "Choice Scarf Attacker",
       2,
       "P",
       "RK",
       "Life Orb Attacker",
       1,
       "P",
       "W"
      ],
      "Petilil": [
       "Sun Sweeper",
       2,
       "S",
       "OS"
      ],
      "Phanpy": [
       "Utility",
       3,
       "P",
       "S"
      ],
      "Phantump": [
       "Z-Forest's Curse",
       1,
       "P",
       "W"
      ],
      "Pichu": [
       "Life Orb Attacker",
       1,
       "P",
       "OS"
      ],
      "Pidgey": [
       "Pidgey",
       1,
       "P",
       "RK"
      ],
      "Pidove": [
       "Z-Tailwind",
       2,
       "M",
       "W"
      ],
      "Pikipek": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Pineco": [
       "Lead",
       2,
       "P",
       "OL"
      ],
      "Piplup": [
       "Utility",
       1,
       "P",
       "W"
      ],
      "Poliwag": [
       "Belly Drum",
       2,
       "P",
       "OS"
      ],
      "Ponyta": [
       "Physical Firium Z",
       1,
       "P",
       "W",
       "Physical Utility",
       4,
       "P",
       "PW",
       "Bloom Doom",
       2,
       "M",
       "W",
       "Sunny Day",
       2,
       "P",
       "S"
      ],
      "Poochyena": [
       "Z-Howl",
       1,
       "P",
       "OS"
      ],
      "Psyduck": [
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Pumpkaboo-Small": [
       "Z-Trick-or-Treat",
       1,
       "P",
       "OS"
      ],
      "Pumpkaboo-Super": [
       "Special Spinblocker",
       4,
       "P",
       "SW",
       "Mixed Spinblocker",
       4,
       "P",
       "SW"
      ],
      "Purrloin": [
       "Utility",
       2,
       "P",
       "S"
      ],
      "Ralts": [
       "Revenge Trapper",
       2,
       "S",
       "RK"
      ],
      "Rattata": [
       "Hustle Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Rattata-Alola": [
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Remoraid": [
       "Choice Scarf",
       1,
       "M",
       "RK"
      ],
      "Rhyhorn": [
       "Rhyhorn",
       3,
       "P",
       "W"
      ],
      "Riolu": [
       "Bulky Swords Dance",
       3,
       "P",
       "BS"
      ],
      "Rockruff": [
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Roggenrola": [
       "Weak Armor",
       2,
       "P",
       "OL"
      ],
      "Rowlet": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Rufflet": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Bulk Up",
       3,
       "P",
       "BS"
      ],
      "Salandit": [
       "Poisonium Z",
       1,
       "M",
       "W",
       "Life Orb",
       1,
       "S",
       "OS"
      ],
      "Sandile": [
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Sandshrew": [
       "Bulky Support",
       3,
       "P",
       "S"
      ],
      "Sandshrew-Alola": [
       "Hail Sweeper",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Sandygast": [
       "Rock Polish",
       1,
       "S",
       "OS"
      ],
      "Scraggy": [
       "Dragon Dance Sweeper",
       1,
       "P",
       "OS",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Seedot": [
       "Chlorophyll Sweeper",
       1,
       "M",
       "OS"
      ],
      "Seel": [
       "Perish Trapper",
       4,
       "S",
       "SB"
      ],
      "Shellder": [
       "SMASHING",
       1,
       "P",
       "OS"
      ],
      "Shellos": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Shieldon": [
       "SturdyJuice",
       4,
       "P",
       "MW"
      ],
      "Shinx": [
       "Pivot",
       2,
       "M",
       "S"
      ],
      "Shroomish": [
       "Tank",
       4,
       "P",
       "MW"
      ],
      "Shuppet": [
       "Trick Room Utility",
       2,
       "P",
       "S"
      ],
      "Skiddo": [
       "Bulk Up",
       3,
       "P",
       "BS"
      ],
      "Skitty": [
       "Skitty",
       2,
       "P",
       "W"
      ],
      "Skorupi": [
       "Team Support",
       4,
       "P",
       "S"
      ],
      "Skrelp": [
       "Special Attacker",
       2,
       "S",
       "W"
      ],
      "Slowpoke": [
       "Tank",
       4,
       "S",
       "MW"
      ],
      "Slugma": [
       "Utility",
       4,
       "S",
       "S"
      ],
      "Smoochum": [
       "Icium Z Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Snivy": [
       "Eviolite Wallbreaker",
       1,
       "S",
       "W",
       "Berry Juice",
       2,
       "S",
       "OS",
       "Normalium Z",
       4,
       "S",
       "OS",
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Snorunt": [
       "Scarf Spikes",
       2,
       "S",
       "W"
      ],
      "Snover": [
       "Choice Scarf",
       1,
       "M",
       "RK",
       "Balanced Pivot",
       2,
       "M",
       "W"
      ],
      "Snubbull": [
       "Berry Juice",
       3,
       "P",
       "W",
       "Sub Snub (Substitute)",
       2,
       "P",
       "W",
       "Eviolite",
       3,
       "P",
       "W"
      ],
      "Solosis": [
       "Offensive Trick Room",
       2,
       "S",
       "W"
      ],
      "Spearow": [
       "Life Orb Attacker",
       1,
       "P",
       "W"
      ],
      "Spheal": [
       "Special Attacker",
       2,
       "S",
       "W"
      ],
      "Spoink": [
       "Calm Mind",
       1,
       "P",
       "OS"
      ],
      "Spritzee": [
       "Defensive",
       4,
       "M",
       "S",
       "Nasty Plot",
       2,
       "S",
       "W"
      ],
      "Squirtle": [
       "Rapid Spin",
       2,
       "P",
       "S"
      ],
      "Starly": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Staryu": [
       "All-Out Attacker",
       1,
       "S",
       "W",
       "Offensive Rapid Spin",
       2,
       "M",
       "W",
       "Defensive Rapid Spin",
       4,
       "M",
       "S"
      ],
      "Stufful": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Stunky": [
       "Life Orb",
       1,
       "P",
       "W",
       "Offensive Utility",
       2,
       "P",
       "W"
      ],
      "Swinub": [
       "Stealth Rock",
       2,
       "P",
       "OL"
      ],
      "Taillow": [
       "Mixed Life Orb",
       1,
       "M",
       "W",
       "Guts Physical Sweeper",
       1,
       "P",
       "OS"
      ],
      "Teddiursa": [
       "Quick Feet",
       1,
       "P",
       "W"
      ],
      "Tentacool": [
       "Defensive Utility",
       4,
       "M",
       "MW",
       "Offensive",
       1,
       "M",
       "W"
      ],
      "Tepig": [
       "Life Orb",
       1,
       "P",
       "W"
      ],
      "Timburr": [
       "Bulky Attacker",
       3,
       "P",
       "W",
       "Bulk Up",
       3,
       "P",
       "BS"
      ],
      "Tirtouga": [
       "Defensive",
       4,
       "P",
       "W",
       "Solid Rock Smash",
       3,
       "P",
       "OS",
       "Sturdy Smash",
       1,
       "P",
       "W"
      ],
      "Togepi": [
       "Tank",
       3,
       "S",
       "BS"
      ],
      "Torchic": [
       "Offensive",
       2,
       "S",
       "W"
      ],
      "Totodile": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Treecko": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Trubbish": [
       "Spikes",
       4,
       "P",
       "S"
      ],
      "Turtwig": [
       "Defensive Stealth Rock",
       4,
       "P",
       "SW"
      ],
      "Tympole": [
       "Rain Dance Sweeper",
       2,
       "S",
       "W"
      ],
      "Tyrunt": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Vanillite": [
       "Weak Armor Sweeper",
       2,
       "P",
       "OS"
      ],
      "Venipede": [
       "Entry Hazard Stacker",
       2,
       "P",
       "OL"
      ],
      "Venonat": [
       "Sleep Powder Support",
       2,
       "S",
       "S"
      ],
      "Voltorb": [
       "Dual Screens",
       2,
       "S",
       "S"
      ],
      "Vullaby": [
       "Offensive Pivot",
       "",
       "",
       "",
       "Mixed Attacker",
       1,
       "P",
       "W",
       "Flyinium Z",
       "",
       "",
       "",
       "Nasty Plot",
       1,
       "S",
       "OS",
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Vulpix-Alola": [
       "Hail Support",
       2,
       "S",
       "S"
      ],
      "Wailmer": [
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Whismur": [
       "Trick Room Breaker",
       1,
       "S",
       "W"
      ],
      "Wimpod": [
       "Spikes Setter",
       2,
       "P",
       "OL"
      ],
      "Woobat": [
       "Simple Sweeper",
       1,
       "S",
       "OS"
      ],
      "Wooper": [
       "Defensive",
       4,
       "M",
       "PW"
      ],
      "Wynaut": [
       "Trapper",
       5,
       "M",
       "S"
      ],
      "Yamask": [
       "Support",
       4,
       "S",
       "W"
      ],
      "Yungoos": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Zigzagoon": [
       "Belly Drum Sweeper",
       1,
       "P",
       "OS"
      ],
      "Zorua": [
       "Life Orb",
       1,
       "M",
       "W"
      ],
      "Zubat": [
       "Choice Scarf",
       2,
       "P",
       "W"
      ]
     }
    },
    "8": {
     "Ubers": {
      "Aerodactyl": [
       "Stealth Rock Lead",
       2,
       "P",
       "OL"
      ],
      "Audino": [
       "Support",
       "",
       "",
       ""
      ],
      "Blissey": [
       "Special Wall",
       5,
       "P",
       "SW"
      ],
      "Buzzwole": [
       "Defensive",
       3,
       "P",
       "BS",
       "Bulky Attacker",
       3,
       "P",
       "W"
      ],
      "Calyrex-Ice": [
       "SubSeed",
       2,
       "P",
       "W",
       "Choice Band",
       2,
       "P",
       "W"
      ],
      "Calyrex-Shadow": [
       "Choice Item",
       2,
       "S",
       "W",
       "SubSeed",
       2,
       "P",
       "OS",
       "Nasty Plot",
       1,
       "P",
       "OS",
       "Disable",
       "",
       "",
       ""
      ],
      "Chansey": [
       "Support",
       "",
       "",
       ""
      ],
      "Cinderace": [
       "Physical Attacker",
       2,
       "P",
       "W"
      ],
      "Clefable": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Cloyster": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Darmanitan-Galar": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Darmanitan-Galar-Zen": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Dialga": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Ditto": [
       "I'm you, but stronger",
       5,
       "M",
       "RK"
      ],
      "Dracovish": [
       "Choice Item",
       1,
       "P",
       "W"
      ],
      "Dugtrio": [
       "Trapper",
       2,
       "P",
       "SB"
      ],
      "Eternatus": [
       "Specially Defensive",
       4,
       "S",
       "SW",
       "Meteor Beam",
       1,
       "S",
       "W",
       "Demon (Cosmic Power)",
       3,
       "S",
       "BS",
       "Life Orb",
       1,
       "S",
       "W",
       "Physically Defensive",
       3,
       "S",
       "PW"
      ],
      "Excadrill": [
       "Entry Hazard Lead",
       2,
       "P",
       "OL",
       "Sand Rush",
       2,
       "P",
       "OS"
      ],
      "Ferrothorn": [
       "Physically Defensive",
       4,
       "P",
       "PW",
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Froslass": [
       "Suicide Lead",
       2,
       "S",
       "OL"
      ],
      "Galvantula": [
       "Sticky Web Setter",
       2,
       "S",
       "OL"
      ],
      "Garchomp": [
       "Swords Dance",
       1,
       "M",
       "OS"
      ],
      "Gastrodon": [
       "Specially Defensive",
       4,
       "M",
       "SW"
      ],
      "Genesect": [
       "Choice Scarf",
       1,
       "M",
       "RK"
      ],
      "Giratina": [
       "Defog",
       5,
       "P",
       "PW"
      ],
      "Giratina-Origin": [
       "Special Attacker",
       3,
       "S",
       "W",
       "Physical Attacker",
       2,
       "P",
       "W"
      ],
      "Grimmsnarl": [
       "Dual Screens",
       4,
       "P",
       "S"
      ],
      "Groudon": [
       "Bulky Booster",
       3,
       "P",
       "BS",
       "Double Dance",
       1,
       "P",
       "OS",
       "Defensive",
       4,
       "P",
       "PW"
      ],
      "Heatran": [
       "Specially Defensive Trapper",
       4,
       "S",
       "SW"
      ],
      "Ho-Oh": [
       "Defensive",
       4,
       "P",
       "PW",
       "Choice Band",
       2,
       "P",
       "W",
       "Offensive",
       3,
       "P",
       "W"
      ],
      "Hydreigon": [
       "Life Orb",
       1,
       "S",
       "W"
      ],
      "Kyogre": [
       "Bulky Calm Mind",
       4,
       "S",
       "BS",
       "Choice Specs",
       1,
       "S",
       "W",
       "Choice Scarf",
       1,
       "S",
       "RK",
       "SubCM",
       3,
       "S",
       "BS"
      ],
      "Kyurem": [
       "Pressure",
       3,
       "P",
       "BS"
      ],
      "Kyurem-Black": [
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Kyurem-White": [
       "Special Attacker",
       1,
       "S",
       "W"
      ],
      "Landorus": [
       "Wallbreaker",
       1,
       "M",
       "W"
      ],
      "Landorus-Therian": [
       "Defensive",
       4,
       "P",
       "PW"
      ],
      "Lugia": [
       "Great Wall (Defensive)",
       4,
       "S",
       "MW"
      ],
      "Lunala": [
       "Defensive",
       4,
       "S",
       "S",
       "Meteor Beam",
       2,
       "S",
       "W"
      ],
      "Magearna": [
       "Physically Defensive",
       4,
       "S",
       "PW"
      ],
      "Magnezone": [
       "Iron Defense",
       3,
       "M",
       "SB"
      ],
      "Marshadow": [
       "Offensive Cleaner",
       "",
       "",
       "",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Mew": [
       "Lead",
       2,
       "S",
       "OL"
      ],
      "Mewtwo": [
       "All-out Attacker",
       1,
       "S",
       "W"
      ],
      "Naganadel": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Necrozma-Dawn-Wings": [
       "Trick Room",
       3,
       "S",
       "W"
      ],
      "Necrozma-Dusk-Mane": [
       "Specially Defensive",
       4,
       "P",
       "SW",
       "Bulky Booster",
       3,
       "P",
       "BS",
       "Offensive Dragon Dance",
       1,
       "P",
       "OS",
       "Physically Defensive",
       4,
       "P",
       "PW",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Obstagoon": [
       "Physical Attacker",
       "",
       "",
       ""
      ],
      "Palkia": [
       "Special Attacker",
       1,
       "S",
       "W",
       "Bulk Up",
       1,
       "M",
       "OS"
      ],
      "Pheromosa": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Porygon2": [
       "Trick Room Setter",
       "",
       "",
       ""
      ],
      "Rayquaza": [
       "Choice Band",
       1,
       "P",
       "W",
       "Swords Dance",
       1,
       "P",
       "W",
       "MixQuaza",
       1,
       "M",
       "W"
      ],
      "Regieleki": [
       "Physical Attacker",
       2,
       "P",
       "W",
       "Special Attacker",
       2,
       "S",
       "W"
      ],
      "Reshiram": [
       "Life Orb",
       1,
       "M",
       "W"
      ],
      "Rotom-Wash": [
       "Defensive Pivot",
       "",
       "",
       ""
      ],
      "Shedinja": [
       "Wonder Guard",
       4,
       "P",
       "S"
      ],
      "Shuckle": [
       "Sticky Web",
       5,
       "S",
       "OL"
      ],
      "Skarmory": [
       "Defensive Spikes",
       4,
       "P",
       "PW"
      ],
      "Slurpuff": [
       "Sticky Web Lead",
       4,
       "S",
       "OL"
      ],
      "Solgaleo": [
       "FuturePort",
       4,
       "M",
       "SW"
      ],
      "Spectrier": [
       "Hex",
       3,
       "S",
       "BS"
      ],
      "Suicune": [
       "VinCune",
       "",
       "",
       ""
      ],
      "Tangrowth": [
       "Sleeper",
       4,
       "M",
       "PW"
      ],
      "Tapu Fini": [
       "Trapper",
       4,
       "S",
       "SB"
      ],
      "Thundurus-Therian": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Toxapex": [
       "The Pex",
       4,
       "M",
       "PW"
      ],
      "Tyranitar": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Urshifu": [
       "Choice Band",
       1,
       "P",
       "W",
       "Bulk Up",
       1,
       "P",
       "OS"
      ],
      "Weavile": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Xatu": [
       "Magic Bounce",
       4,
       "S",
       "S"
      ],
      "Xerneas": [
       "Geomancy",
       3,
       "S",
       "BS",
       "Defensive",
       4,
       "S",
       "PW",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Yveltal": [
       "Fast Utility",
       3,
       "P",
       "S",
       "Specially Defensive",
       4,
       "P",
       "SW",
       "Hone Claws",
       1,
       "P",
       "OS",
       "Special Attacker",
       2,
       "M",
       "W",
       "Choice Scarf",
       3,
       "P",
       "RK",
       "Physical Attacker",
       2,
       "P",
       "W",
       "Choice Band",
       2,
       "P",
       "W"
      ],
      "Zamazenta": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Zarude": [
       "Specially Defensive",
       4,
       "P",
       "SW",
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Zekrom": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Mixed",
       1,
       "M",
       "W"
      ],
      "Zygarde": [
       "Dragon Dance",
       1,
       "P",
       "W",
       "Defensive Coil",
       3,
       "P",
       "BS",
       "Demon Zygarde",
       3,
       "M",
       "S"
      ],
      "Zygarde-Complete": [
       "Dragon Dance - 50%",
       1,
       "P",
       "W",
       "Defensive Coil - 50%",
       3,
       "P",
       "BS",
       "Demon Zygarde - 50%",
       3,
       "M",
       "S"
      ]
     },
     "OU": {
      "Aegislash": [
       "All-Out Attacker",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Amoonguss": [
       "Defensive",
       4,
       "S",
       "MW"
      ],
      "Arctozolt": [
       "Hail Sweeper",
       "",
       "",
       ""
      ],
      "Avalugg": [
       "Physical Wall",
       4,
       "P",
       "PW"
      ],
      "Azumarill": [
       "Belly Drum",
       1,
       "P",
       "OS"
      ],
      "Barraskewda": [
       "Choice Band",
       2,
       "P",
       "W"
      ],
      "Bisharp": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Blacephalon": [
       "Choice Specs",
       2,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Blaziken": [
       "Swords Dance + Protect",
       "",
       "",
       "",
       "Swords Dance + 3 Attacks",
       "",
       "",
       "",
       "Choice Band",
       2,
       "P",
       "W"
      ],
      "Blissey": [
       "Defensive",
       4,
       "P",
       "SW"
      ],
      "Buzzwole": [
       "Choice Band",
       "",
       "",
       "",
       "Tank",
       "",
       "",
       ""
      ],
      "Celesteela": [
       "Autotomize",
       "",
       "",
       ""
      ],
      "Charizard": [
       "Sun Wallbreaker",
       "",
       "",
       ""
      ],
      "Clefable": [
       "Utility",
       4,
       "M",
       "MW",
       "Unaware",
       "",
       "",
       "",
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Cloyster": [
       "Mixed Sweeper",
       "",
       "",
       "",
       "Physical Sweeper",
       "",
       "",
       ""
      ],
      "Conkeldurr": [
       "Guts Wallbreaker",
       "",
       "",
       ""
      ],
      "Corviknight": [
       "Defog",
       4,
       "P",
       "PW"
      ],
      "Crawdaunt": [
       "Choice Band",
       1,
       "P",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Cresselia": [
       "Utility",
       "",
       "",
       ""
      ],
      "Ditto": [
       "Imposter",
       5,
       "M",
       "RK"
      ],
      "Dracozolt": [
       "Substitute + Fire Spin",
       2,
       "M",
       "SB",
       "Life Orb",
       1,
       "M",
       "W"
      ],
      "Dragapult": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Dragonite": [
       "Bulky Dragon Dance",
       "",
       "",
       "",
       "Offensive Dragon Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       "",
       "",
       "",
       "Defensive",
       "",
       "",
       ""
      ],
      "Excadrill": [
       "Sand Rush",
       2,
       "P",
       "OS",
       "Utility",
       3,
       "P",
       "SW"
      ],
      "Ferrothorn": [
       "Utility",
       4,
       "P",
       "PW"
      ],
      "Garchomp": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Specially Defensive",
       "",
       "",
       ""
      ],
      "Gastrodon": [
       "Specially Defensive",
       4,
       "M",
       "SW"
      ],
      "Gengar": [
       "Substitute",
       1,
       "S",
       "OS"
      ],
      "Glastrier": [
       "Swords Dance",
       1,
       "P",
       "W"
      ],
      "Grimmsnarl": [
       "Dual Screens",
       2,
       "P",
       "S"
      ],
      "Hatterene": [
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Hawlucha": [
       "Unburden Sweeper",
       2,
       "P",
       "OS"
      ],
      "Haxorus": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Heatran": [
       "Specially Defensive",
       4,
       "S",
       "SW",
       "Physically Defensive",
       "",
       "",
       "",
       "Offensive",
       3,
       "S",
       "W"
      ],
      "Hippowdon": [
       "Special Wall",
       4,
       "P",
       "SW"
      ],
      "Hydreigon": [
       "Three Attacks",
       1,
       "S",
       "W",
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Jirachi": [
       "Specially Defensive",
       4,
       "P",
       "SW",
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Kartana": [
       "Paper Cut (Swords Dance)",
       "",
       "",
       "",
       "Paper Press (Choice Band)",
       "",
       "",
       "",
       "Paper Plane (Choice Scarf)",
       "",
       "",
       ""
      ],
      "Keldeo": [
       "Calm Mind",
       2,
       "S",
       "OS"
      ],
      "Kingdra": [
       "Rain Sweeper",
       "",
       "",
       ""
      ],
      "Kommo-o": [
       "Defensive",
       4,
       "P",
       "PW"
      ],
      "Landorus-Therian": [
       "Specially Defensive",
       "",
       "",
       "",
       "Swords Dance",
       2,
       "P",
       "W",
       "Explosive Stealth Rock",
       "",
       "",
       ""
      ],
      "Latias": [
       "Double Dance",
       1,
       "S",
       "OS"
      ],
      "Latios": [
       "Choice Specs",
       2,
       "S",
       "W",
       "Life Orb",
       1,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Magnezone": [
       "Iron Defense",
       3,
       "M",
       "SB",
       "Choice Specs",
       2,
       "S",
       "W"
      ],
      "Mamoswine": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Mandibuzz": [
       "Defensive",
       4,
       "P",
       "MW"
      ],
      "Marowak-Alola": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Melmetal": [
       "Protect + Leftovers",
       "",
       "",
       "",
       "Assault Vest",
       4,
       "P",
       "SW"
      ],
      "Mew": [
       "Utility",
       4,
       "P",
       "S",
       "Cosmic Power",
       3,
       "M",
       "BS",
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Moltres": [
       "Substitute",
       2,
       "S",
       "W"
      ],
      "Moltres-Galar": [
       "Double Dance",
       1,
       "S",
       "OS"
      ],
      "Nidoking": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Nihilego": [
       "Meteor Beam Sweeper",
       "",
       "",
       ""
      ],
      "Ninetales-Alola": [
       "Hail Setter",
       2,
       "S",
       "S",
       "Aurora Veil",
       2,
       "S",
       "S",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Pelipper": [
       "Defensive",
       4,
       "M",
       "PW",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Polteageist": [
       "Shell Smash",
       "",
       "",
       ""
      ],
      "Primarina": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Substitute + Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Quagsire": [
       "Unaware",
       4,
       "M",
       "PW"
      ],
      "Regieleki": [
       "Special Attacker",
       "",
       "",
       "",
       "Dual Screens",
       "",
       "",
       ""
      ],
      "Reuniclus": [
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Rillaboom": [
       "Bulky Swords Dance",
       "",
       "",
       "",
       "Offensive Swords Dance",
       "",
       "",
       "",
       "Choice Band",
       2,
       "P",
       "W"
      ],
      "Rotom-Heat": [
       "Nasty Plot",
       2,
       "S",
       "W"
      ],
      "Rotom-Wash": [
       "Defensive Pivot",
       4,
       "S",
       "SW"
      ],
      "Scizor": [
       "Bulky Swords Dance",
       "",
       "",
       "",
       "Offensive Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Seismitoad": [
       "Special Rain Wallbreaker",
       "",
       "",
       "",
       "Physical Rain Wallbreaker",
       "",
       "",
       ""
      ],
      "Shedinja": [
       "Utility",
       4,
       "S",
       "S"
      ],
      "Shuckle": [
       "Sticky Web",
       4,
       "S",
       "OL"
      ],
      "Skarmory": [
       "Defensive Spikes",
       4,
       "P",
       "PW"
      ],
      "Slowbro": [
       "Defensive Pivot",
       4,
       "S",
       "PW"
      ],
      "Slowking": [
       "Specially Defensive Pivot",
       4,
       "S",
       "SW"
      ],
      "Slowking-Galar": [
       "Assault Vest",
       4,
       "S",
       "SW",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Suicune": [
       "VinCune (Substitute + Protect)",
       "",
       "",
       ""
      ],
      "Swampert": [
       "Defensive Pivot",
       4,
       "P",
       "SW"
      ],
      "Tangrowth": [
       "Physically Defensive",
       4,
       "M",
       "PW"
      ],
      "Tapu Bulu": [
       "Swords Dance",
       1,
       "P",
       "W"
      ],
      "Tapu Fini": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Whirlpool",
       4,
       "S",
       "SB",
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Tapu Koko": [
       "Calm Mind",
       "",
       "",
       "",
       "Dual Screens",
       "",
       "",
       "",
       "Offensive Pivot",
       2,
       "S",
       "S"
      ],
      "Tapu Lele": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Choice Scarf",
       1,
       "S",
       "RK",
       "Calm Mind",
       1,
       "S",
       "OS",
       "Assault Vest",
       "",
       "",
       ""
      ],
      "Terrakion": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Thundurus-Therian": [
       "Rain Wallbreaker",
       "",
       "",
       ""
      ],
      "Togekiss": [
       "Stallbreaker",
       "",
       "",
       ""
      ],
      "Torkoal": [
       "Sun Setter",
       "",
       "",
       ""
      ],
      "Tornadus-Therian": [
       "Utility",
       "",
       "",
       "",
       "Nasty Plot",
       2,
       "S",
       "W",
       "Assault Vest",
       "",
       "",
       ""
      ],
      "Toxapex": [
       "The Pex",
       4,
       "M",
       "PW"
      ],
      "Toxtricity": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Tyranitar": [
       "Choice Band",
       1,
       "P",
       "W",
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Urshifu-Rapid-Strike": [
       "Choice Band",
       1,
       "P",
       "W",
       "Protective Pads",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Venusaur": [
       "Sun Sweeper",
       "",
       "",
       ""
      ],
      "Victini": [
       "Mixed Attacker",
       1,
       "M",
       "W"
      ],
      "Volcanion": [
       "Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Volcarona": [
       "Bulky Quiver Dance",
       3,
       "S",
       "BS",
       "Offensive Quiver Dance",
       1,
       "S",
       "OS"
      ],
      "Weavile": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Xatu": [
       "Magic Bounce",
       4,
       "SP",
       "S"
      ],
      "Zapdos": [
       "Utility",
       4,
       "S",
       "PW",
       "Rain Attacker",
       "",
       "",
       "",
       "Offensive",
       "",
       "",
       "",
       "Offensive Rain Sweeper",
       1,
       "S",
       "OS"
      ],
      "Zapdos-Galar": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Zarude": [
       "Bulk Up",
       1,
       "P",
       "OS"
      ],
      "Zeraora": [
       "Bulk Up",
       1,
       "P",
       "OS",
       "Offensive Pivot",
       2,
       "P",
       "S"
      ]
     },
     "UU": {
      "Amoonguss": [
       "Defensive",
       4,
       "M",
       "PW"
      ],
      "Articuno": [
       "Specially Defensive",
       "",
       "",
       ""
      ],
      "Azelf": [
       "Pivot",
       "",
       "",
       "",
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Azumarill": [
       "Choice Band",
       1,
       "P",
       "W",
       "Belly Drum",
       1,
       "P",
       "OS"
      ],
      "Celesteela": [
       "Defensive",
       4,
       "M",
       "SW",
       "Autotomize",
       1,
       "S",
       "OS"
      ],
      "Chandelure": [
       "Hex",
       2,
       "S",
       "W",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Chansey": [
       "Defensive",
       4,
       "P",
       "SW"
      ],
      "Cloyster": [
       "Shell Smash Sweeper",
       1,
       "M",
       "OS"
      ],
      "Cobalion": [
       "Wallbreaker",
       "",
       "",
       "",
       "Utility",
       2,
       "M",
       "S"
      ],
      "Conkeldurr": [
       "Guts Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Crawdaunt": [
       "Choice Band",
       "",
       "",
       ""
      ],
      "Cresselia": [
       "Trick Room Setter",
       4,
       "S",
       "S"
      ],
      "Crobat": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Darmanitan": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Darmanitan-Zen": [
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Dhelmise": [
       "Spinblocker",
       "",
       "",
       ""
      ],
      "Diggersby": [
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Swords Dance",
       1,
       "P",
       "W"
      ],
      "Ditto": [
       "Imposter",
       5,
       "M",
       "RK"
      ],
      "Durant": [
       "All-out Attacker",
       "",
       "",
       ""
      ],
      "Entei": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Excadrill": [
       "Utility",
       2,
       "P",
       "S",
       "Suicide Lead",
       2,
       "P",
       "OL",
       "Swords Dance",
       2,
       "P",
       "OS"
      ],
      "Flygon": [
       "Defog",
       2,
       "S",
       "S"
      ],
      "Froslass": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Gastrodon": [
       "Mixed Wall",
       4,
       "M",
       "MW"
      ],
      "Golisopod": [
       "Spikes",
       "",
       "",
       ""
      ],
      "Gyarados": [
       "Dragon Dance Sweeper",
       1,
       "P",
       "OS",
       "Substitute + Dragon Dance",
       "",
       "",
       ""
      ],
      "Hatterene": [
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Haxorus": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Heliolisk": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Hippowdon": [
       "Stealth Rock",
       4,
       "P",
       "MW"
      ],
      "Hydreigon": [
       "HYDREIGON SPECS",
       1,
       "S",
       "W",
       "Choice Scarf",
       1,
       "M",
       "RK",
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Jellicent": [
       "Defensive Utility",
       "",
       "",
       ""
      ],
      "Jirachi": [
       "Choice Scarf",
       2,
       "P",
       "RK",
       "SubToxic",
       3,
       "P",
       "S",
       "Wish + Protect",
       4,
       "P",
       "S"
      ],
      "Keldeo": [
       "Choice Specs",
       1,
       "S",
       "W",
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Kingdra": [
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Krookodile": [
       "Stealth Rock",
       2,
       "P",
       "S"
      ],
      "Lanturn": [
       "Cleric Support",
       "",
       "",
       ""
      ],
      "Lycanroc-Dusk": [
       "All-out Attacker",
       1,
       "P",
       "RK"
      ],
      "Magneton": [
       "Choice Specs Trapper",
       2,
       "S",
       "W"
      ],
      "Mamoswine": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Mandibuzz": [
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Mantine": [
       "Rain Sweeper",
       "",
       "",
       ""
      ],
      "Marowak-Alola": [
       "Trick Room Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Moltres": [
       "Offensive",
       2,
       "M",
       "W",
       "Support",
       2,
       "M",
       "S"
      ],
      "Necrozma": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Meteor Beam",
       1,
       "S",
       "OS",
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Nidoking": [
       "Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Nidoqueen": [
       "Offensive Stealth Rock",
       "",
       "",
       ""
      ],
      "Nihilego": [
       "Stealth Rock Utility",
       2,
       "M",
       "S",
       "Meteor Beam Sweeper",
       1,
       "S",
       "OS"
      ],
      "Noivern": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Obstagoon": [
       "RestTalk",
       "",
       "",
       ""
      ],
      "Politoed": [
       "Rain Setter",
       "",
       "",
       ""
      ],
      "Porygon2": [
       "Trick Room Setter",
       4,
       "P",
       "S"
      ],
      "Primarina": [
       "RestTalk",
       4,
       "S",
       "SW",
       "3 Attacks",
       "",
       "",
       "",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Quagsire": [
       "Unaware Wall",
       4,
       "M",
       "PW"
      ],
      "Raikou": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Registeel": [
       "Demon Registeel (Double Dance)",
       "",
       "",
       "",
       "Stealth Rock",
       "",
       "",
       ""
      ],
      "Reuniclus": [
       "Life Orb + 3 Attacks",
       "",
       "",
       ""
      ],
      "Rhyperior": [
       "Stealth Rock",
       4,
       "P",
       "MW"
      ],
      "Ribombee": [
       "Lead",
       2,
       "S",
       "OL"
      ],
      "Roserade": [
       "Spikes",
       2,
       "S",
       "S"
      ],
      "Rotom-Heat": [
       "Pivot",
       4,
       "S",
       "S"
      ],
      "Rotom-Wash": [
       "Pivot",
       4,
       "S",
       "S",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Salamence": [
       "Special Attacker",
       2,
       "S",
       "W",
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Defensive",
       4,
       "M",
       "S"
      ],
      "Salazzle": [
       "Offensive",
       2,
       "M",
       "W"
      ],
      "Scizor": [
       "3 Attacks + Roost",
       4,
       "P",
       "MW",
       "Bulky Swords Dance",
       3,
       "P",
       "BS",
       "Offensive Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Scolipede": [
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Seismitoad": [
       "Defensive Stealth Rock",
       4,
       "M",
       "PW"
      ],
      "Sigilyph": [
       "Offensive Defog",
       2,
       "S",
       "W"
      ],
      "Skarmory": [
       "Iron Defense",
       4,
       "P",
       "PW",
       "Physical Wall",
       4,
       "P",
       "PW"
      ],
      "Slowbro-Galar": [
       "Calm Mind",
       3,
       "S",
       "BS",
       "Assault Vest",
       4,
       "S",
       "SW"
      ],
      "Slowking": [
       "Defensive Pivot",
       4,
       "SP",
       "MW",
       "Calm Mind",
       3,
       "S",
       "BS"
      ],
      "Starmie": [
       "Offensive",
       1,
       "S",
       "W"
      ],
      "Suicune": [
       "CroCune",
       3,
       "S",
       "BS"
      ],
      "Swampert": [
       "Mixed Wall",
       4,
       "P",
       "MW"
      ],
      "Tangrowth": [
       "Assault Vest",
       4,
       "M",
       "SW",
       "Physically Defensive",
       4,
       "M",
       "PW"
      ],
      "Tapu Bulu": [
       "Swords Dance",
       1,
       "P",
       "W",
       "Defensive",
       4,
       "M",
       "PW"
      ],
      "Tentacruel": [
       "Defensive Spinner",
       4,
       "M",
       "S"
      ],
      "Thundurus-Therian": [
       "Pivot",
       2,
       "S",
       "W",
       "Nasty Plot",
       1,
       "S",
       "W"
      ],
      "Togekiss": [
       "Nasty Plot",
       3,
       "S",
       "W"
      ],
      "Torkoal": [
       "Sun Setter",
       4,
       "M",
       "PW"
      ],
      "Tornadus": [
       "Mixed Offensive Pivot",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Toxtricity": [
       "Offensive",
       1,
       "S",
       "W"
      ],
      "Umbreon": [
       "Physically Defensive",
       4,
       "P",
       "PW"
      ],
      "Vanilluxe": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Venusaur": [
       "Chlorophyll Sweeper",
       1,
       "S",
       "OS"
      ],
      "Zarude": [
       "Offensive Pivot",
       2,
       "P",
       "S",
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Zarude-Dada": [
       "Offensive Pivot",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Zygarde-10%": [
       "Choice Band",
       2,
       "P",
       "W"
      ],
      "Zygarde-Complete": [
       "Choice Band - 10%",
       2,
       "P",
       "W"
      ]
     },
     "RU": {
      "Abomasnow": [
       "Hail Setter",
       2,
       "P",
       "OS"
      ],
      "Aerodactyl": [
       "3 Attacks + Roost",
       1,
       "P",
       "W",
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Arctovish": [
       "Hail Wallbreaker",
       1,
       "M",
       "W"
      ],
      "Aurorus": [
       "Hail Lead",
       2,
       "S",
       "OL"
      ],
      "Barbaracle": [
       "Shell Smash",
       1,
       "P",
       "OS"
      ],
      "Bewear": [
       "Swords Dance",
       1,
       "P",
       "W",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Bronzong": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Celebi": [
       "Nasty Plot",
       2,
       "S",
       "OS"
      ],
      "Chandelure": [
       "Wallbreaker",
       2,
       "S",
       "W",
       "Choice Specs",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Charizard": [
       "Solar Power",
       "",
       "",
       ""
      ],
      "Cloyster": [
       "Shell Smash Sweeper",
       "",
       "",
       ""
      ],
      "Cresselia": [
       "Choice Scarf",
       2,
       "S",
       "S"
      ],
      "Crobat": [
       "Pivot",
       2,
       "P",
       "S",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Decidueye": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Dhelmise": [
       "Offensive Utility",
       3,
       "P",
       "S"
      ],
      "Diancie": [
       "Defensive",
       4,
       "4",
       "SW"
      ],
      "Ditto": [
       "Revenge Killer",
       5,
       "M",
       "RK"
      ],
      "Doublade": [
       "Swords Dance",
       3,
       "P",
       "BS"
      ],
      "Dragalge": [
       "Utility",
       3,
       "S",
       "S"
      ],
      "Drapion": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Drednaw": [
       "Rain Sweeper",
       "",
       "",
       ""
      ],
      "Entei": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Escavalier": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Flygon": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Defog",
       2,
       "P",
       "WS",
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Froslass": [
       "Spikes",
       2,
       "S",
       "OL"
      ],
      "Gardevoir": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Gastrodon": [
       "Physically Defensive",
       4,
       "S",
       "SW"
      ],
      "Golisopod": [
       "Revenge Killer",
       2,
       "P",
       "RK"
      ],
      "Golurk": [
       "Wallbreaker",
       2,
       "P",
       "W"
      ],
      "Goodra": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Guzzlord": [
       "Tank",
       3,
       "P",
       "W",
       "RestTalk",
       "",
       "",
       ""
      ],
      "Heliolisk": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Heracross": [
       "Heavy-Duty Boots",
       "",
       "",
       "",
       "Flame Orb",
       1,
       "P",
       "W",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Incineroar": [
       "Offensive",
       "",
       "",
       "",
       "Specially Defensive",
       4,
       "M",
       "SW"
      ],
      "Indeedee": [
       "Choice Specs",
       2,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Jellicent": [
       "Defensive Utility",
       "",
       "",
       ""
      ],
      "Kabutops": [
       "Rain Sweeper",
       1,
       "P",
       "OS"
      ],
      "Kingdra": [
       "Rain Sweeper",
       1,
       "S",
       "OS"
      ],
      "Klefki": [
       "Spikes",
       4,
       "S",
       "S"
      ],
      "Linoone": [
       "Belly Drum",
       1,
       "P",
       "OS"
      ],
      "Lucario": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Ludicolo": [
       "Swift Swim",
       1,
       "S",
       "OS"
      ],
      "Marowak-Alola": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Metagross": [
       "Cosmic Power",
       "",
       "",
       "",
       "Stealth Rock",
       3,
       "P",
       "S",
       "Choice Scarf",
       2,
       "P",
       "RK",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Milotic": [
       "Defensive",
       4,
       "M",
       "PW"
      ],
      "Mimikyu": [
       "Swords Dance",
       2,
       "P",
       "OS"
      ],
      "Nidoqueen": [
       "Stealth Rock",
       2,
       "S",
       "W",
       "Wallbreaker",
       2,
       "S",
       "W"
      ],
      "Ninetales": [
       "Sun Setter",
       "",
       "",
       ""
      ],
      "Noivern": [
       "Offensive Utility",
       2,
       "S",
       "W"
      ],
      "Pangoro": [
       "Choice Band",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Politoed": [
       "Rain Setter",
       4,
       "S",
       "S"
      ],
      "Polteageist": [
       "Shell Smash",
       2,
       "S",
       "OS"
      ],
      "Porygon-Z": [
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Porygon2": [
       "Specially Defensive",
       4,
       "S",
       "SW"
      ],
      "Quagsire": [
       "Unaware Wall",
       4,
       "M",
       "PW"
      ],
      "Raikou": [
       "Offensive Pivot",
       2,
       "S",
       "S",
       "Calm Mind",
       1,
       "S",
       "OS"
      ],
      "Regidrago": [
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Registeel": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Reuniclus": [
       "Defensive Calm Mind",
       3,
       "S",
       "BS",
       "Assault Vest",
       4,
       "S",
       "SW"
      ],
      "Rhyperior": [
       "Stealth Rock",
       4,
       "P",
       "MW"
      ],
      "Roserade": [
       "Defensive Spikes",
       "",
       "",
       "",
       "Offensive Spikes",
       "",
       "",
       ""
      ],
      "Rotom-Mow": [
       "Choice Scarf",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Salazzle": [
       "Wallbreaker",
       2,
       "S",
       "W"
      ],
      "Sandslash-Alola": [
       "Slush Rush Sweeper",
       "",
       "",
       ""
      ],
      "Seismitoad": [
       "Defensive Stealth Rock",
       "",
       "",
       "",
       "Offensive Stealth Rock",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       "",
       "Rain Sweeper",
       "",
       "",
       ""
      ],
      "Sharpedo": [
       "Specially-based Mixed Cleaner",
       1,
       "M",
       "OS",
       "Physical Cleaner",
       1,
       "P",
       "OS"
      ],
      "Shiftry": [
       "Sun Sweeper",
       "",
       "",
       ""
      ],
      "Sigilyph": [
       "Life Orb Attacker",
       1,
       "S",
       "W"
      ],
      "Slurpuff": [
       "Belly Drum",
       1,
       "P",
       "OS",
       "Sash Lead",
       2,
       "S",
       "OL"
      ],
      "Snorlax": [
       "CurseLax",
       "",
       "",
       ""
      ],
      "Stakataka": [
       "Defensive Stealth Rock",
       4,
       "P",
       "MW"
      ],
      "Starmie": [
       "Rapid Spin",
       4,
       "M",
       "S",
       "Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Steelix": [
       "Defensive",
       4,
       "P",
       "MW"
      ],
      "Suicune": [
       "Substitute + Calm Mind",
       3,
       "S",
       "BS",
       "RestTalk",
       4,
       "S",
       "BS"
      ],
      "Talonflame": [
       "Utility Pivot",
       2,
       "P",
       "S"
      ],
      "Tentacruel": [
       "Defensive Utility",
       "",
       "",
       ""
      ],
      "Togekiss": [
       "Nasty Plot",
       3,
       "S",
       "BS",
       "Utility",
       4,
       "S",
       "S"
      ],
      "Tornadus": [
       "Offensive Utility",
       2,
       "M",
       "S",
       "Nasty Plot",
       1,
       "S",
       "W"
      ],
      "Toxicroak": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Toxtricity": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Tsareena": [
       "Rapid Spin",
       2,
       "P",
       "W"
      ],
      "Tyrantrum": [
       "Dragon Dance",
       "",
       "",
       "",
       "Choice Scarf",
       1,
       "P",
       "RK"
      ],
      "Umbreon": [
       "Defensive",
       4,
       "P",
       "S"
      ],
      "Vanilluxe": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Vaporeon": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Vileplume": [
       "Physically Defensive",
       4,
       "S",
       "PW"
      ],
      "Weezing-Galar": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Xatu": [
       "Magic Bounce",
       4,
       "S",
       "S"
      ],
      "Xurkitree": [
       "Offensive Pivot",
       1,
       "S",
       "W",
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Zoroark": [
       "Heavy-Duty Boots",
       "",
       "",
       ""
      ]
     },
     "NU": {
      "Absol": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Aerodactyl": [
       "Utility",
       "",
       "",
       "",
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Araquanid": [
       "Substitute Attacker",
       2,
       "P",
       "W"
      ],
      "Arcanine": [
       "Defensive Pivot",
       4,
       "P",
       "PW"
      ],
      "Articuno-Galar": [
       "Future Sight",
       2,
       "S",
       "W"
      ],
      "Aurorus": [
       "Wallbreaker",
       "",
       "",
       "",
       "Dedicated Lead",
       "",
       "",
       ""
      ],
      "Braviary": [
       "Setup Sweeper",
       "",
       "",
       ""
      ],
      "Copperajah": [
       "Assault Vest",
       3,
       "P",
       "W",
       "Stealth Rock",
       4,
       "P",
       "PW"
      ],
      "Decidueye": [
       "Physical Attacker",
       "",
       "",
       "",
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Dhelmise": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Diancie": [
       "Stealth Rock",
       4,
       "M",
       "S"
      ],
      "Doublade": [
       "Swords Dance",
       3,
       "P",
       "BS"
      ],
      "Drampa": [
       "Calm Mind Sweeper",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Drapion": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Druddigon": [
       "Stealth Rock",
       4,
       "P",
       "MW"
      ],
      "Duraludon": [
       "Expert Belt",
       1,
       "M",
       "W",
       "Eject Pack",
       2,
       "M",
       "W"
      ],
      "Eldegoss": [
       "Defensive Utility",
       "",
       "",
       ""
      ],
      "Escavalier": [
       "Specially Defensive",
       4,
       "P",
       "SW",
       "Swords Dance",
       1,
       "P",
       "W"
      ],
      "Espeon": [
       "Wallbreaker",
       2,
       "S",
       "W"
      ],
      "Exeggutor-Alola": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Exploud": [
       "DAT LOUD",
       1,
       "S",
       "W"
      ],
      "Froslass": [
       "Dedicated Lead",
       "",
       "",
       ""
      ],
      "Gallade": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Garbodor": [
       "Defensive",
       4,
       "P",
       "PW"
      ],
      "Gastrodon": [
       "Physical Wall",
       "",
       "",
       ""
      ],
      "Gigalith": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Glastrier": [
       "Swords Dance",
       3,
       "P",
       "W"
      ],
      "Golurk": [
       "Choice Band",
       1,
       "P",
       "W",
       "TrickyBarb",
       "",
       "",
       ""
      ],
      "Grimmsnarl": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Guzzlord": [
       "Choice Band",
       1,
       "P",
       "W",
       "Defensive",
       "",
       "",
       ""
      ],
      "Heliolisk": [
       "All-out Attacker",
       1,
       "S",
       "W",
       "Choice Scarf",
       1,
       "S",
       "RK"
      ],
      "Hitmontop": [
       "Spitmontop (Rapid Spin)",
       "",
       "",
       ""
      ],
      "Inteleon": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Jellicent": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Kabutops": [
       "Suicide Lead",
       "",
       "",
       ""
      ],
      "Kingdra": [
       "CritDra",
       1,
       "S",
       "OS"
      ],
      "Lycanroc": [
       "Sand Rush Sweeper",
       1,
       "P",
       "OS"
      ],
      "Magneton": [
       "Trapper",
       "",
       "",
       ""
      ],
      "Mantine": [
       "Defensive Utility",
       "",
       "",
       ""
      ],
      "Mudsdale": [
       "Defensive",
       4,
       "P",
       "PW"
      ],
      "Ninjask": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Omastar": [
       "Shell Smash Sweeper",
       "",
       "",
       ""
      ],
      "Palossand": [
       "Physically Defensive",
       4,
       "S",
       "PW"
      ],
      "Passimian": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Pincurchin": [
       "Offensive Terrain Setter",
       "",
       "",
       ""
      ],
      "Quagsire": [
       "Mixed Wall",
       4,
       "M",
       "MW"
      ],
      "Regice": [
       "Three Attacks",
       "",
       "",
       ""
      ],
      "Rhydon": [
       "Stealth Rock",
       "",
       "",
       ""
      ],
      "Rotom-Mow": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Nasty Plot",
       2,
       "S",
       "OS",
       "Utility",
       2,
       "S",
       "S"
      ],
      "Sableye": [
       "Anti-Setup Wall",
       "",
       "",
       ""
      ],
      "Salazzle": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Sandslash": [
       "Sand Rush Sweeper",
       1,
       "P",
       "OS"
      ],
      "Sceptile": [
       "Terrain Sweeper",
       "",
       "",
       ""
      ],
      "Scrafty": [
       "Defensive Bulk Up",
       3,
       "P",
       "BS"
      ],
      "Scyther": [
       "Offensive Pivot",
       2,
       "P",
       "S"
      ],
      "Silvally-Fairy": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Silvally-Ground": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Silvally-Steel": [
       "Utility",
       "",
       "",
       ""
      ],
      "Sneasel": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Snorlax": [
       "CurseLax",
       4,
       "P",
       "BS"
      ],
      "Stakataka": [
       "Utility",
       4,
       "P",
       "MW",
       "Trick Room",
       "",
       "",
       ""
      ],
      "Starmie": [
       "Wallbreaker",
       2,
       "S",
       "W"
      ],
      "Stunfisk-Galar": [
       "Special Wall",
       "",
       "",
       ""
      ],
      "Sylveon": [
       "Utility",
       4,
       "S",
       "S",
       "Choice Specs",
       2,
       "S",
       "W"
      ],
      "Talonflame": [
       "Defensive Utility",
       4,
       "P",
       "S"
      ],
      "Tangela": [
       "Physical Wall",
       4,
       "M",
       "PW"
      ],
      "Tauros": [
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Togedemaru": [
       "Defensive Pivot",
       4,
       "P",
       "S",
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Toxicroak": [
       "Swords Dance",
       1,
       "P",
       "W",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Tsareena": [
       "Utility",
       2,
       "P",
       "W"
      ],
      "Tyrantrum": [
       "Choice Band",
       1,
       "P",
       "W",
       "Setup Sweeper",
       1,
       "P",
       "OS"
      ],
      "Vanilluxe": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Vaporeon": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Vileplume": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Virizion": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Weezing": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Xatu": [
       "Defensive Pivot",
       "",
       "",
       ""
      ],
      "Zoroark": [
       "Choice Specs",
       "",
       "",
       ""
      ]
     },
     "PU": {
      "Abomasnow": [
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Absol": [
       "Choice Band",
       1,
       "P",
       "W",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Accelgor": [
       "Spikes",
       "",
       "",
       "",
       "Throat Spray",
       "",
       "",
       ""
      ],
      "Aggron": [
       "Choice Band",
       1,
       "P",
       "W",
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Alcremie": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Altaria": [
       "Defog",
       4,
       "S",
       "SW"
      ],
      "Archeops": [
       "Meteor Beam",
       "",
       "",
       "",
       "Heavy-Duty Boots",
       2,
       "P",
       "W",
       "Suicide Lead",
       2,
       "P",
       "OL"
      ],
      "Arctovish": [
       "Use Fishious Rend",
       "",
       "",
       ""
      ],
      "Aromatisse": [
       "Defensive",
       4,
       "S",
       "S"
      ],
      "Articuno": [
       "Specially Defensive",
       4,
       "M",
       "SW"
      ],
      "Articuno-Galar": [
       "Heavy-Duty Boots",
       2,
       "P",
       "W",
       "Choice Specs",
       1,
       "P",
       "W"
      ],
      "Audino": [
       "Cleric",
       "",
       "",
       ""
      ],
      "Aurorus": [
       "Choice Specs",
       "",
       "",
       "",
       "Meteor Beam",
       "",
       "",
       ""
      ],
      "Basculin": [
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Centiskorch": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Charizard": [
       "Special Attacker",
       2,
       "S",
       "W",
       "Defensive",
       4,
       "S",
       "S",
       "Dragon Dance",
       1,
       "P",
       "OS"
      ],
      "Cinccino": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Claydol": [
       "Defensive",
       4,
       "S",
       "PW"
      ],
      "Clefairy": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Coalossal": [
       "Specially Defensive",
       4,
       "M",
       "SW"
      ],
      "Comfey": [
       "Calm Mind",
       "",
       "",
       "",
       "Defog",
       "",
       "",
       ""
      ],
      "Ditto": [
       "Imposter",
       "",
       "",
       ""
      ],
      "Doublade": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Druddigon": [
       "Defensive",
       4,
       "P",
       "PW"
      ],
      "Dugtrio-Alola": [
       "Sand Wallbreaker",
       "",
       "",
       ""
      ],
      "Eldegoss": [
       "Defensive Spinner",
       "",
       "",
       "",
       "Offensive Spinner",
       "",
       "",
       ""
      ],
      "Exeggutor": [
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Ferroseed": [
       "Defensive",
       4,
       "P",
       "PW"
      ],
      "Froslass": [
       "Choice Band",
       2,
       "P",
       "W",
       "Spikes",
       2,
       "S",
       "OL"
      ],
      "Frosmoth": [
       "Quiver Dance",
       1,
       "S",
       "OS"
      ],
      "Gallade": [
       "All-out Attacker",
       "",
       "",
       "",
       "Swords Dance",
       1,
       "P",
       "W"
      ],
      "Galvantula": [
       "Offensive Support",
       2,
       "S",
       "S"
      ],
      "Garbodor": [
       "Spiker",
       "",
       "",
       ""
      ],
      "Gigalith": [
       "Specially Defensive",
       4,
       "P",
       "SW"
      ],
      "Glastrier": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Gourgeist-Small": [
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Gourgeist-Super": [
       "Tank",
       "",
       "",
       ""
      ],
      "Hattrem": [
       "Tank",
       "",
       "",
       ""
      ],
      "Haunter": [
       "Substitute + 3 Attacks",
       1,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Hitmonlee": [
       "Terrain Sweeper",
       1,
       "P",
       "OS"
      ],
      "Jellicent": [
       "Defensive Utility",
       4,
       "S",
       "PW",
       "Special Wallbreaker",
       2,
       "S",
       "W"
      ],
      "Jolteon": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Krokorok": [
       "Stealth Rock",
       2,
       "P",
       "S"
      ],
      "Lanturn": [
       "Bulky Pivot",
       4,
       "S",
       "MW"
      ],
      "Lycanroc": [
       "All-out Attacker",
       1,
       "P",
       "RK"
      ],
      "Magmortar": [
       "Wallbreaker",
       1,
       "S",
       "W"
      ],
      "Magneton": [
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Malamar": [
       "Contrary Booster",
       "",
       "",
       ""
      ],
      "Manectric": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Choice Specs",
       1,
       "S",
       "W",
       "Toxic + Protect",
       2,
       "S",
       "W"
      ],
      "Mareanie": [
       "Specially Defensive Wall",
       "",
       "",
       ""
      ],
      "Mesprit": [
       "Choice Scarf",
       2,
       "M",
       "RK",
       "Nasty Plot",
       1,
       "S",
       "OS",
       "Offensive Stealth Rock",
       2,
       "S",
       "W",
       "Choice Specs",
       1,
       "S",
       "W"
      ],
      "Ninjask": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Perrserker": [
       "Swords Dance",
       1,
       "P",
       "W",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Persian-Alola": [
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Poliwrath": [
       "Choice Band",
       1,
       "P",
       "W",
       "Defensive",
       4,
       "M",
       "PW"
      ],
      "Pyukumuku": [
       "Unaware Trapper",
       5,
       "P",
       "SB"
      ],
      "Quagsire": [
       "Unaware Wall",
       4,
       "M",
       "PW"
      ],
      "Qwilfish": [
       "Spikes",
       4,
       "P",
       "S"
      ],
      "Regirock": [
       "UN UN UN (Stealth Rock)",
       "",
       "",
       ""
      ],
      "Relicanth": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Rhydon": [
       "Offensive Stealth Rock",
       2,
       "P",
       "W"
      ],
      "Ribombee": [
       "Quiver Dance",
       1,
       "S",
       "OS",
       "Choice Specs",
       1,
       "S",
       "W",
       "Offensive Support",
       2,
       "M",
       "S"
      ],
      "Rotom": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Defog",
       2,
       "S",
       "S"
      ],
      "Rotom-Frost": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Runerigus": [
       "Defensive",
       4,
       "P",
       "PW",
       "Bulky Setup Sweeper",
       4,
       "P",
       "BS"
      ],
      "Sableye": [
       "Physical Wall",
       "",
       "",
       ""
      ],
      "Sandaconda": [
       "Stealth Rock",
       4,
       "P",
       "PW",
       "Defensive Coil",
       3,
       "P",
       "BS"
      ],
      "Sandslash": [
       "Offensive Swords Dance",
       "",
       "",
       "",
       "Utility",
       "",
       "",
       ""
      ],
      "Sawk": [
       "Choice Attacker",
       1,
       "P",
       "W",
       "Sturdy Boots",
       1,
       "P",
       "W"
      ],
      "Shiftry": [
       "Defog",
       "",
       "",
       ""
      ],
      "Silvally-Fairy": [
       "Utility",
       3,
       "M",
       "S",
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Silvally-Ghost": [
       "Swords Dance",
       1,
       "P",
       "OS"
      ],
      "Silvally-Grass": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Silvally-Poison": [
       "Work Up",
       1,
       "M",
       "OS",
       "Defog",
       3,
       "M",
       "S"
      ],
      "Silvally-Steel": [
       "Work Up",
       "",
       "",
       "",
       "Utility",
       "",
       "",
       ""
      ],
      "Sneasel": [
       "Swords Dance",
       1,
       "P",
       "OS",
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Stunfisk-Galar": [
       "Specially Defensive",
       1,
       "P",
       "W"
      ],
      "Swoobat": [
       "Simple Sweeper",
       "",
       "",
       ""
      ],
      "Tangela": [
       "Defensive",
       4,
       "M",
       "PW"
      ],
      "Thievul": [
       "Unburden Sweeper",
       "",
       "",
       "",
       "Stakeout",
       "",
       "",
       ""
      ],
      "Thwackey": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Togedemaru": [
       "Choice Scarf",
       1,
       "P",
       "RK",
       "Wish Passer",
       4,
       "P",
       "SW"
      ],
      "Trevenant": [
       "Choice Band",
       1,
       "P",
       "W"
      ],
      "Turtonator": [
       "Shell Smash",
       1,
       "S",
       "OS"
      ],
      "Uxie": [
       "Grassy Seed Sweeper",
       "",
       "",
       ""
      ],
      "Vikavolt": [
       "Offensive Pivot",
       2,
       "S",
       "W",
       "Agility",
       1,
       "S",
       "OS"
      ],
      "Weezing": [
       "Defensive Utility",
       4,
       "S",
       "PW"
      ],
      "Whimsicott": [
       "Offensive",
       2,
       "S",
       "W",
       "Utility",
       2,
       "S",
       "S",
       "SubSeed",
       3,
       "S",
       "W"
      ],
      "Wishiwashi": [
       "Defensive Pivot",
       "",
       "",
       ""
      ]
     },
     "LC": {
      "Abra": [
       "Shed Shell",
       2,
       "M",
       "W",
       "Focus Sash",
       2,
       "M",
       "RK",
       "Life Orb",
       1,
       "M",
       "W"
      ],
      "Amaura": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Screens Setter",
       2,
       "S",
       "S"
      ],
      "Archen": [
       "Choice Scarf",
       "",
       "",
       "",
       "Berry Juice",
       "",
       "",
       ""
      ],
      "Bunnelby": [
       "Wallbreaker",
       1,
       "P",
       "W"
      ],
      "Carvanha": [
       "Physical Sweeper",
       1,
       "P",
       "OS"
      ],
      "Charmander": [
       "Sun Wallbreaker",
       2,
       "S",
       "W"
      ],
      "Chinchou": [
       "Offensive Pivot",
       2,
       "S",
       "W"
      ],
      "Cottonee": [
       "Memento",
       2,
       "M",
       "S"
      ],
      "Croagunk": [
       "Nasty Plot",
       1,
       "S",
       "OS"
      ],
      "Diglett": [
       "Air Balloon",
       2,
       "P",
       "SB",
       "Eviolite",
       2,
       "P",
       "W",
       "Life Orb",
       1,
       "P",
       "W",
       "Special Focus Sash",
       "",
       "",
       ""
      ],
      "Drilbur": [
       "Fast Utility",
       "",
       "",
       ""
      ],
      "Dwebble": [
       "Entry Hazard Setter",
       "",
       "",
       "",
       "Shell Smash",
       "",
       "",
       ""
      ],
      "Elekid": [
       "Offensive",
       1,
       "M",
       "W"
      ],
      "Farfetch’d-Galar": [
       "Choice Scarf",
       "",
       "",
       "",
       "Life Orb",
       "",
       "",
       ""
      ],
      "Ferroseed": [
       "Defensive Support",
       1,
       "P",
       "W"
      ],
      "Foongus": [
       "Tank",
       4,
       "S",
       "MW"
      ],
      "Frillish": [
       "Special Tank",
       4,
       "S",
       "MW",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Golett": [
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Grookey": [
       "Life Orb",
       "",
       "",
       "",
       "Eviolite",
       2,
       "P",
       "W",
       "Grassy Seed",
       "",
       "",
       ""
      ],
      "Kabuto": [
       "Support",
       2,
       "P",
       "S"
      ],
      "Koffing": [
       "Tank",
       "",
       "",
       ""
      ],
      "Larvesta": [
       "Physically Defensive Pivot",
       4,
       "P",
       "PW"
      ],
      "Lickitung": [
       "Defensive",
       4,
       "P",
       "MW"
      ],
      "Magnemite": [
       "Choice Scarf",
       2,
       "S",
       "RK",
       "Berry Juice",
       3,
       "S",
       "W",
       "Trapper",
       2,
       "S",
       "SB"
      ],
      "Mareanie": [
       "Wall",
       4,
       "M",
       "MW"
      ],
      "Meowth": [
       "All-out Attacker",
       1,
       "P",
       "RK"
      ],
      "Mienfoo": [
       "Bulky Pivot",
       3,
       "P",
       "W",
       "Choice Scarf",
       2,
       "P",
       "RK"
      ],
      "Morelull": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Mudbray": [
       "Stealth Rock",
       2,
       "P",
       "W",
       "Choice Scarf",
       1,
       "P",
       "RK",
       "RestTalk",
       4,
       "P",
       "MW"
      ],
      "Munchlax": [
       "Defensive",
       4,
       "P",
       "BS"
      ],
      "Natu": [
       "Bulky Attacker",
       3,
       "M",
       "W",
       "Setup Sweeper",
       2,
       "S",
       "OS",
       "Dual Screens Support",
       5,
       "S",
       "S",
       "Life Orb",
       "",
       "",
       ""
      ],
      "Omanyte": [
       "Shell Smash Sweeper",
       1,
       "S",
       "OS",
       "Entry Hazard Setter",
       3,
       "M",
       "S"
      ],
      "Onix": [
       "SturdyJuice",
       2,
       "P",
       "S",
       "Dragon Dance",
       1,
       "P",
       "OS",
       "Weak Armor",
       3,
       "P",
       "S"
      ],
      "Pancham": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Pawniard": [
       "Berry Juice",
       2,
       "P",
       "W",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Ponyta": [
       "Berry Juice Attacker",
       1,
       "P",
       "W",
       "Eviolite",
       4,
       "P",
       "MW"
      ],
      "Ponyta-Galar": [
       "Calm Mind",
       2,
       "S",
       "OS"
      ],
      "Porygon": [
       "Defensive",
       4,
       "S",
       "MW",
       "Agility",
       2,
       "S",
       "OS",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ],
      "Sandshrew-Alola": [
       "Hail Sweeper",
       2,
       "P",
       "OS"
      ],
      "Sandygast": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Scorbunny": [
       "All-out Attacker",
       1,
       "P",
       "W"
      ],
      "Shellder": [
       "Shell Smash",
       1,
       "P",
       "OS"
      ],
      "Shellos": [
       "Curse Sweeper",
       4,
       "P",
       "BS"
      ],
      "Skrelp": [
       "Special Attacker",
       2,
       "S",
       "W"
      ],
      "Slowpoke": [
       "Pivot",
       4,
       "S",
       "MW"
      ],
      "Snover": [
       "Hail Setter",
       2,
       "M",
       "S"
      ],
      "Spritzee": [
       "Defensive",
       4,
       "M",
       "S",
       "Nasty Plot",
       2,
       "S",
       "OS"
      ],
      "Staryu": [
       "Offensive",
       1,
       "S",
       "W",
       "Defensive",
       4,
       "M",
       "PW"
      ],
      "Stunky": [
       "Wallbreaker",
       1,
       "M",
       "W"
      ],
      "Tentacool": [
       "Defensive Utility",
       4,
       "M",
       "MW"
      ],
      "Timburr": [
       "Bulky Attacker",
       3,
       "P",
       "W"
      ],
      "Tirtouga": [
       "Defensive",
       4,
       "P",
       "MW",
       "Shell Smash",
       1,
       "P",
       "OS"
      ],
      "Trapinch": [
       "Trapper",
       3,
       "P",
       "SB"
      ],
      "Treecko": [
       "Sweeper",
       1,
       "P",
       "OS"
      ],
      "Trubbish": [
       "Spikes",
       "",
       "",
       ""
      ],
      "Tyrunt": [
       "Dragon Dance Sweeper",
       1,
       "P",
       "OS"
      ],
      "Venipede": [
       "Spikes Setter",
       2,
       "P",
       "OL"
      ],
      "Vulpix": [
       "Sun Setter",
       2,
       "S",
       "W",
       "Choice Scarf",
       2,
       "S",
       "RK"
      ]
     }
    },
    "9": {
     "Ubers": {
      "Alomomola": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Annihilape": [
       "Bulk Up",
       "",
       "",
       ""
      ],
      "Arceus": [
       "Swords Dance Extreme Killer",
       "",
       "",
       ""
      ],
      "Arceus-Bug": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Arceus-Dark": [
       "Calm Mind + Taunt",
       "",
       "",
       "",
       "Defensive",
       "",
       "",
       ""
      ],
      "Arceus-Dragon": [
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Arceus-Electric": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Arceus-Fairy": [
       "Defensive Wall",
       "",
       "",
       ""
      ],
      "Arceus-Fighting": [
       "Cosmic Power",
       "",
       "",
       ""
      ],
      "Arceus-Fire": [
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Arceus-Flying": [
       "Calm Mind + Taunt",
       "",
       "",
       ""
      ],
      "Arceus-Ghost": [
       "Dragon Dance",
       "",
       "",
       "",
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Arceus-Grass": [
       "Calm Mind",
       "",
       "",
       "",
       "3 Attacks",
       "",
       "",
       ""
      ],
      "Arceus-Ground": [
       "Dragon Dance",
       "",
       "",
       "",
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Arceus-Ice": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Arceus-Poison": [
       "Support",
       "",
       "",
       "",
       "Iron Defense",
       "",
       "",
       ""
      ],
      "Arceus-Psychic": [
       "Stored Power",
       "",
       "",
       ""
      ],
      "Arceus-Rock": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Arceus-Steel": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Arceus-Water": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Baxcalibur": [
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Blissey": [
       "Pink Blob (Specially Defensive)",
       "",
       "",
       ""
      ],
      "Calyrex-Ice": [
       "Offensive Trick Room",
       "",
       "",
       ""
      ],
      "Chi-Yu": [
       "Feesh (Offensive Wallbreaker)",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Chien-Pao": [
       "All-out Attacker",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Clodsire": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Corviknight": [
       "Physically Defensive",
       "",
       "",
       "",
       "Specially Defensive",
       "",
       "",
       ""
      ],
      "Darkrai": [
       "Choice Scarf",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Deoxys-Attack": [
       "Mixed Attacker",
       "",
       "",
       "",
       "Lead",
       "",
       "",
       ""
      ],
      "Deoxys-Speed": [
       "Lead",
       "",
       "",
       ""
      ],
      "Dialga": [
       "Choiced",
       "",
       "",
       ""
      ],
      "Dialga-Origin": [
       "Stealth Rock Setter",
       "",
       "",
       ""
      ],
      "Ditto": [
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Dondozo": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Espathra": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Eternatus": [
       "Meteor Beam Attacker",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Flutter Mane": [
       "Choice Specs",
       "",
       "",
       "",
       "Life Orb",
       "",
       "",
       ""
      ],
      "Gholdengo": [
       "Choice Scarf",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Giratina": [
       "Defog",
       "",
       "",
       ""
      ],
      "Giratina-Origin": [
       "Physical Utility",
       "",
       "",
       "",
       "Special Utility",
       "",
       "",
       ""
      ],
      "Glimmora": [
       "Suicide Lead",
       "",
       "",
       ""
      ],
      "Gliscor": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Gothitelle": [
       "Choice Item",
       "",
       "",
       "",
       "Delay Goth (Trapper)",
       "",
       "",
       ""
      ],
      "Great Tusk": [
       "Choice Item",
       "",
       "",
       "",
       "Offensive Utility",
       "",
       "",
       "",
       "Setup Sweeper",
       "",
       "",
       "",
       "Defensive",
       "",
       "",
       ""
      ],
      "Grimmsnarl": [
       "Dual Screens",
       "",
       "",
       ""
      ],
      "Groudon": [
       "Defensive",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Hatterene": [
       "Bulky Calm Mind",
       "",
       "",
       ""
      ],
      "Ho-Oh": [
       "Defensive",
       "",
       "",
       "",
       "Offensive",
       "",
       "",
       ""
      ],
      "Iron Bundle": [
       "Heavy-Duty Boots",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Iron Treads": [
       "Specially Defensive",
       "",
       "",
       "",
       "Assault Vest",
       "",
       "",
       ""
      ],
      "Kingambit": [
       "Setup Sweeper",
       "",
       "",
       ""
      ],
      "Koraidon": [
       "Choice Scarf",
       "",
       "",
       "",
       "Scale Shot",
       "",
       "",
       ""
      ],
      "Kyogre": [
       "Calm Mind",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Kyurem-Black": [
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Landorus": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Landorus-Therian": [
       "Defensive",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Lunala": [
       "Agility",
       "",
       "",
       ""
      ],
      "Magearna": [
       "Double Dance",
       "",
       "",
       "",
       "Trick Room Setter",
       "",
       "",
       ""
      ],
      "Mewtwo": [
       "Nasty Plot",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Miraidon": [
       "Pivot",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       "",
       "Double Dance",
       "",
       "",
       "",
       "Wallbreaker",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Necrozma-Dusk-Mane": [
       "Defensive Dragon Dance",
       "",
       "",
       "",
       "Offensive Dragon Dance",
       "",
       "",
       "",
       "Trick Room",
       "",
       "",
       "",
       "Defensive",
       "",
       "",
       ""
      ],
      "Ogerpon-Hearthflame": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Orthworm": [
       "Shed Tail",
       "",
       "",
       ""
      ],
      "Palafin": [
       "Choice Band",
       "",
       "",
       "",
       "Bulk Up",
       "",
       "",
       ""
      ],
      "Palkia": [
       "Substitute",
       "",
       "",
       ""
      ],
      "Palkia-Origin": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Rayquaza": [
       "Dragon Dance",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       "",
       "Suicide Lead",
       "",
       "",
       ""
      ],
      "Regieleki": [
       "Dual Screens",
       "",
       "",
       ""
      ],
      "Ribombee": [
       "Sticky Web",
       "",
       "",
       ""
      ],
      "Roaring Moon": [
       "Dragon Dance",
       "",
       "",
       "",
       "Full Moon (Choice Band)",
       "",
       "",
       ""
      ],
      "Shaymin-Sky": [
       "Choice Scarf",
       "",
       "",
       "",
       "SubSeed",
       "",
       "",
       ""
      ],
      "Skarmory": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Skeledirge": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Spectrier": [
       "Nasty Plot",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Ting-Lu": [
       "Special Wall",
       "",
       "",
       ""
      ],
      "Toxapex": [
       "Physical Wall",
       "",
       "",
       ""
      ],
      "Ursaluna-Bloodmoon": [
       "Bear",
       "",
       "",
       ""
      ],
      "Urshifu": [
       "Choice Band",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Urshifu-Rapid-Strike": [
       "Choice Band",
       "",
       "",
       ""
      ],
      "Volcarona": [
       "Quiver Dance",
       "",
       "",
       ""
      ],
      "Walking Wake": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Zacian": [
       "Choice Band Wallbreaker",
       "",
       "",
       ""
      ],
      "Zekrom": [
       "Dragon Dance",
       "",
       "",
       "",
       "Mixed Dragon Dance",
       "",
       "",
       ""
      ]
     },
     "OU": {
      "Alomomola": [
       "Defensive Pivot",
       "",
       "",
       ""
      ],
      "Arcanine-Hisui": [
       "Choice Band",
       "",
       "",
       ""
      ],
      "Azumarill": [
       "Belly Drum",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       "",
       "Assault Vest",
       "",
       "",
       ""
      ],
      "Barraskewda": [
       "Rain Sweeper",
       "",
       "",
       ""
      ],
      "Basculegion": [
       "Rain Sweeper",
       "",
       "",
       ""
      ],
      "Blaziken": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Blissey": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Ceruledge": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Cinderace": [
       "Offensive Pivot",
       "",
       "",
       "",
       "Bulky Pivot",
       "",
       "",
       ""
      ],
      "Clefable": [
       "Utility",
       "",
       "",
       ""
      ],
      "Clodsire": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Comfey": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Corviknight": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Cresselia": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Darkrai": [
       "Nasty Plot",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       "",
       "Offensive",
       "",
       "",
       ""
      ],
      "Deoxys-Speed": [
       "Hazard Lead",
       "",
       "",
       "",
       "Offensive",
       "",
       "",
       "",
       "Boots Attacker",
       "",
       "",
       "",
       "Dual Screens",
       "",
       "",
       ""
      ],
      "Dondozo": [
       "Wall",
       "",
       "",
       ""
      ],
      "Dragapult": [
       "Boots Pivot",
       "",
       "",
       "",
       "Focus Sash",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Dragonite": [
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Enamorus": [
       "Choice Scarf",
       "",
       "",
       "",
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Enamorus-Therian": [
       "Double Dance",
       "",
       "",
       ""
      ],
      "Excadrill": [
       "Sand Sweeper",
       "",
       "",
       ""
      ],
      "Garchomp": [
       "TankChomp",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Garganacl": [
       "Curse",
       "",
       "",
       "",
       "Stealth Rock",
       "",
       "",
       ""
      ],
      "Gholdengo": [
       "Offensive",
       "",
       "",
       "",
       "Defensive",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Glimmora": [
       "Lead",
       "",
       "",
       "",
       "Offensive",
       "",
       "",
       ""
      ],
      "Gliscor": [
       "Spikes",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Goodra-Hisui": [
       "Assault Vest",
       "",
       "",
       ""
      ],
      "Gouging Fire": [
       "Offensive Dragon Dance",
       "",
       "",
       "",
       "Bulky Dragon Dance",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Great Tusk": [
       "Offensive Bulk Up",
       "",
       "",
       "",
       "Offensive Utility",
       "",
       "",
       "",
       "Defensive",
       "",
       "",
       ""
      ],
      "Greninja": [
       "Battle Bond",
       "",
       "",
       ""
      ],
      "Grimmsnarl": [
       "Dual Screens",
       "",
       "",
       ""
      ],
      "Hatterene": [
       "Calm Mind",
       "",
       "",
       "",
       "Healing Wish",
       "",
       "",
       ""
      ],
      "Hawlucha": [
       "Unburden Sweeper",
       "",
       "",
       ""
      ],
      "Heatran": [
       "Offensive",
       "",
       "",
       "",
       "Specially Defensive",
       "",
       "",
       ""
      ],
      "Hippowdon": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Hoopa-Unbound": [
       "Assault Vest",
       "",
       "",
       ""
      ],
      "Hydrapple": [
       "Assault Vest",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Indeedee": [
       "Terrain Setter",
       "",
       "",
       ""
      ],
      "Iron Boulder": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Iron Crown": [
       "Assault Vest",
       "",
       "",
       ""
      ],
      "Iron Jugulis": [
       "Booster Energy Sweeper",
       "",
       "",
       ""
      ],
      "Iron Moth": [
       "Booster Energy",
       "",
       "",
       ""
      ],
      "Iron Treads": [
       "Lead",
       "",
       "",
       ""
      ],
      "Iron Valiant": [
       "Calm Mind",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       "",
       "Mixed",
       "",
       "",
       ""
      ],
      "Keldeo": [
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Kingambit": [
       "Offensive Swords Dance",
       "",
       "",
       "",
       "Bulky Swords Dance",
       "",
       "",
       ""
      ],
      "Kingdra": [
       "Rain Sweeper",
       "",
       "",
       ""
      ],
      "Kommo-o": [
       "Clangorous Soul",
       "",
       "",
       ""
      ],
      "Kyurem": [
       "Choice Specs",
       "",
       "",
       "",
       "Boots Attacker",
       "",
       "",
       "",
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Landorus-Therian": [
       "Fast Utility",
       "",
       "",
       "",
       "Defensive",
       "",
       "",
       ""
      ],
      "Latias": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Latios": [
       "Choice Scarf",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Lilligant-Hisui": [
       "Sun Sweeper",
       "",
       "",
       ""
      ],
      "Mamoswine": [
       "Stealth Rock",
       "",
       "",
       ""
      ],
      "Manaphy": [
       "Tail Glow",
       "",
       "",
       "",
       "Double Dance",
       "",
       "",
       ""
      ],
      "Mandibuzz": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Maushold": [
       "Tidy Up Sweeper",
       "",
       "",
       ""
      ],
      "Meowscarada": [
       "Boots Pivot",
       "",
       "",
       "",
       "Choice Item",
       "",
       "",
       ""
      ],
      "Milotic": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Moltres": [
       "Physically Defensive",
       "",
       "",
       "",
       "Specially Defensive",
       "",
       "",
       ""
      ],
      "Moltres-Galar": [
       "Double Dance",
       "",
       "",
       ""
      ],
      "Muk": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Necrozma": [
       "Lead",
       "",
       "",
       ""
      ],
      "Ninetales-Alola": [
       "Aurora Veil",
       "",
       "",
       ""
      ],
      "Ogerpon": [
       "Pivot",
       "",
       "",
       ""
      ],
      "Ogerpon-Cornerstone": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Ogerpon-Wellspring": [
       "Swords Dance",
       "",
       "",
       "",
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Pecharunt": [
       "Nasty Plot",
       "",
       "",
       "",
       "Pivot",
       "",
       "",
       ""
      ],
      "Pelipper": [
       "Rain Setter",
       "",
       "",
       ""
      ],
      "Pincurchin": [
       "Terrain Setter",
       "",
       "",
       ""
      ],
      "Polteageist": [
       "Shell Smash",
       "",
       "",
       ""
      ],
      "Primarina": [
       "Assault Vest",
       "",
       "",
       "",
       "Offensive Calm Mind",
       "",
       "",
       "",
       "Bulky Calm Mind",
       "",
       "",
       ""
      ],
      "Raging Bolt": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Reuniclus": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Ribombee": [
       "Sticky Web",
       "",
       "",
       ""
      ],
      "Rillaboom": [
       "Choice Band",
       "",
       "",
       "",
       "Utility",
       "",
       "",
       ""
      ],
      "Roaring Moon": [
       "Dragon Dance",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Rotom-Wash": [
       "Defensive Pivot",
       "",
       "",
       ""
      ],
      "Samurott-Hisui": [
       "Lead",
       "",
       "",
       "",
       "Boots Attacker",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       "",
       "Assault Vest",
       "",
       "",
       ""
      ],
      "Sandy Shocks": [
       "Offensive Pivot",
       "",
       "",
       "",
       "Hazard Lead",
       "",
       "",
       ""
      ],
      "Scizor": [
       "Choice Band",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Scream Tail": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Serperior": [
       "Contrary Sweeper",
       "",
       "",
       ""
      ],
      "Sinistcha": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Skarmory": [
       "Iron Defense",
       "",
       "",
       ""
      ],
      "Skeledirge": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Slowking-Galar": [
       "Defensive Pivot",
       "",
       "",
       "",
       "Assault Vest",
       "",
       "",
       ""
      ],
      "Smeargle": [
       "Lead",
       "",
       "",
       ""
      ],
      "Suicune": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Talonflame": [
       "Defog",
       "",
       "",
       ""
      ],
      "Thundurus-Therian": [
       "Choice Specs",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       "",
       "Pivot",
       "",
       "",
       ""
      ],
      "Ting-Lu": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Tinkaton": [
       "Utility",
       "",
       "",
       ""
      ],
      "Torkoal": [
       "Sun Setter",
       "",
       "",
       ""
      ],
      "Tornadus-Therian": [
       "Pivot",
       "",
       "",
       ""
      ],
      "Toxapex": [
       "The Pex",
       "",
       "",
       ""
      ],
      "Tyranitar": [
       "Choice Band",
       "",
       "",
       "",
       "Sand Setter",
       "",
       "",
       ""
      ],
      "Ursaluna": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Venusaur": [
       "Sun Sweeper",
       "",
       "",
       ""
      ],
      "Volcanion": [
       "Utility Wallbreaker",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Walking Wake": [
       "Sun Wallbreaker",
       "",
       "",
       ""
      ],
      "Weavile": [
       "Offensive",
       "",
       "",
       ""
      ],
      "Weezing-Galar": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Wo-Chien": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Zamazenta": [
       "All-Out Attacker",
       "",
       "",
       "",
       "Iron Defense",
       "",
       "",
       ""
      ],
      "Zapdos": [
       "Defensive",
       "",
       "",
       "",
       "Offensive",
       "",
       "",
       ""
      ],
      "Zarude": [
       "Swords Dance",
       "",
       "",
       "",
       "Bulk Up",
       "",
       "",
       ""
      ]
     },
     "UU": {
      "Amoonguss": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Araquanid": [
       "Sticky Web",
       "",
       "",
       ""
      ],
      "Arcanine-Hisui": [
       "Offensive",
       "",
       "",
       ""
      ],
      "Azumarill": [
       "Belly Drum",
       "",
       "",
       "",
       "Offensive",
       "",
       "",
       ""
      ],
      "Barraskewda": [
       "Rain Sweeper",
       "",
       "",
       ""
      ],
      "Bellibolt": [
       "Physically Defensive Static",
       "",
       "",
       ""
      ],
      "Bisharp": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Chesnaught": [
       "Spikes Utility",
       "",
       "",
       ""
      ],
      "Cinccino": [
       "Tidy Up",
       "",
       "",
       ""
      ],
      "Cobalion": [
       "Swords Dance",
       "",
       "",
       "",
       "Utility",
       "",
       "",
       ""
      ],
      "Comfey": [
       "Calm Mind + Synthesis",
       "",
       "",
       ""
      ],
      "Ditto": [
       "Suspicious Imposter",
       "",
       "",
       ""
      ],
      "Donphan": [
       "Offensive Utility",
       "",
       "",
       ""
      ],
      "Empoleon": [
       "Defensive Pivot",
       "",
       "",
       "",
       "Offensive",
       "",
       "",
       ""
      ],
      "Enamorus-Therian": [
       "Offensive",
       "",
       "",
       ""
      ],
      "Excadrill": [
       "Specially Defensive",
       "",
       "",
       "",
       "Offensive Swords Dance",
       "",
       "",
       "",
       "Sand Rush",
       "",
       "",
       "",
       "Lead",
       "",
       "",
       ""
      ],
      "Gastrodon": [
       "Specially Defensive",
       "",
       "",
       ""
      ],
      "Gengar": [
       "Nasty Plot",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Goodra-Hisui": [
       "Specially Defensive Wall",
       "",
       "",
       ""
      ],
      "Greninja": [
       "Battle Bond",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Grimmsnarl": [
       "Dual Screens",
       "",
       "",
       ""
      ],
      "Hawlucha": [
       "Unburden Sweeper",
       "",
       "",
       ""
      ],
      "Haxorus": [
       "Choice Band",
       "",
       "",
       ""
      ],
      "Hippowdon": [
       "Stealth Rock",
       "",
       "",
       ""
      ],
      "Hoopa-Unbound": [
       "Mixed",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Hydrapple": [
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Hydreigon": [
       "Nasty Plot",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Indeedee": [
       "Terrain Setter",
       "",
       "",
       ""
      ],
      "Iron Crown": [
       "Booster Energy",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       "",
       "Assault Vest",
       "",
       "",
       "",
       "Double Dance",
       "",
       "",
       ""
      ],
      "Iron Jugulis": [
       "Booster Energy",
       "",
       "",
       ""
      ],
      "Iron Leaves": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Jirachi": [
       "Wish",
       "",
       "",
       ""
      ],
      "Keldeo": [
       "Choice Specs",
       "",
       "",
       "",
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Kommo-o": [
       "Dragon Dance",
       "",
       "",
       "",
       "Mixed",
       "",
       "",
       "",
       "Physical Clangorous Soul",
       "",
       "",
       "",
       "Special Clangorous Soul",
       "",
       "",
       "",
       "Defensive Kommo-o",
       "",
       "",
       ""
      ],
      "Latios": [
       "Choice Specs",
       "",
       "",
       "",
       "Calm Mind + Thunderbolt",
       "",
       "",
       "",
       "Calm Mind",
       "",
       "",
       "",
       "Offensive",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Lokix": [
       "Pivot",
       "",
       "",
       ""
      ],
      "Mamoswine": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Manaphy": [
       "Tail Glow",
       "",
       "",
       ""
      ],
      "Mandibuzz": [
       "Mixed Defensive",
       "",
       "",
       ""
      ],
      "Metagross": [
       "Bulky Attacker",
       "",
       "",
       "",
       "METABOOM",
       "",
       "",
       ""
      ],
      "Mienshao": [
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Ninetales-Alola": [
       "Aurora Veil",
       "",
       "",
       ""
      ],
      "Ogerpon": [
       "Swords Dance",
       "",
       "",
       "",
       "Pivot",
       "",
       "",
       ""
      ],
      "Ogerpon-Cornerstone": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Okidogi": [
       "Bulk Up",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Pecharunt": [
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Pelipper": [
       "Rain Setter",
       "",
       "",
       ""
      ],
      "Polteageist": [
       "Shell Smash",
       "",
       "",
       ""
      ],
      "Quagsire": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Quaquaval": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Raikou": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Rhyperior": [
       "Stealth Rock",
       "",
       "",
       ""
      ],
      "Rotom-Wash": [
       "Utility Pivot",
       "",
       "",
       ""
      ],
      "Salamence": [
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Sandy Shocks": [
       "Pivot",
       "",
       "",
       "",
       "Booster Energy",
       "",
       "",
       ""
      ],
      "Scizor": [
       "Swords Dance",
       "",
       "",
       "",
       "Offensive Swords Dance",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Scream Tail": [
       "Wish",
       "",
       "",
       ""
      ],
      "Sinistcha": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Sinistcha-Masterpiece": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Skeledirge": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Slowbro": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Slowking": [
       "Defensive Pivot",
       "",
       "",
       ""
      ],
      "Terrakion": [
       "Choice Scarf",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Thundurus-Therian": [
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Tinkaton": [
       "Utility",
       "",
       "",
       ""
      ],
      "Tornadus-Therian": [
       "Assault Vest",
       "",
       "",
       "",
       "Pivot",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Toxapex": [
       "The Pex",
       "",
       "",
       ""
      ],
      "Tyranitar": [
       "Specially Defensive",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       "",
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Ursaluna": [
       "Bulk Up",
       "",
       "",
       "",
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Volcanion": [
       "Offensive",
       "",
       "",
       ""
      ],
      "Weezing-Galar": [
       "Defensive Utility",
       "",
       "",
       ""
      ],
      "Zapdos": [
       "Defensive",
       "",
       "",
       "",
       "Offensive",
       "",
       "",
       ""
      ],
      "Zapdos-Galar": [
       "Choice Scarf",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Zarude": [
       "Bulk Up",
       "",
       "",
       ""
      ]
     },
     "RU": {
      "Amoonguss": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Araquanid": [
       "Sticky Web",
       "",
       "",
       ""
      ],
      "Armarouge": [
       "Calm Mind",
       "",
       "",
       "",
       "Weakness Policy",
       "",
       "",
       ""
      ],
      "Articuno-Galar": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Azelf": [
       "Expert Belt",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       "",
       "Offensive Stealth Rock",
       "",
       "",
       ""
      ],
      "Barraskewda": [
       "Rain Sweeper",
       "",
       "",
       ""
      ],
      "Basculegion-F": [
       "Choice Scarf",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       "",
       "Rain Wallbreaker",
       "",
       "",
       ""
      ],
      "Bellibolt": [
       "Mr. Belli (Defensive)",
       "",
       "",
       ""
      ],
      "Bisharp": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Blastoise": [
       "Shell Smash",
       "",
       "",
       ""
      ],
      "Breloom": [
       "Choice Band",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Bronzong": [
       "Bulky Setup Sweeper",
       "",
       "",
       ""
      ],
      "Chesnaught": [
       "Spikes",
       "",
       "",
       ""
      ],
      "Cinccino": [
       "Tidy Up",
       "",
       "",
       ""
      ],
      "Cloyster": [
       "Shell Smash Sweeper",
       "",
       "",
       ""
      ],
      "Cobalion": [
       "Choice Specs",
       "",
       "",
       "",
       "Iron Defense + Body Press",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Conkeldurr": [
       "Guts Wallbreaker",
       "",
       "",
       ""
      ],
      "Crawdaunt": [
       "Choice Band",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Cresselia": [
       "Bulky Calm Mind",
       "",
       "",
       "",
       "Fast Calm Mind",
       "",
       "",
       ""
      ],
      "Cyclizar": [
       "Rapid Spin",
       "",
       "",
       "",
       "Assault Vest",
       "",
       "",
       ""
      ],
      "Deoxys-Defense": [
       "Utility",
       "",
       "",
       ""
      ],
      "Diancie": [
       "Stealth Rock",
       "",
       "",
       ""
      ],
      "Ditto": [
       "Imposter",
       "",
       "",
       ""
      ],
      "Dragalge": [
       "Utility",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Empoleon": [
       "Specially Defensive",
       "",
       "",
       ""
      ],
      "Enamorus-Therian": [
       "Calm Mind",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       "",
       "Double Dance",
       "",
       "",
       ""
      ],
      "Entei": [
       "Choice Band",
       "",
       "",
       ""
      ],
      "Espeon": [
       "Choice Specs",
       "",
       "",
       "",
       "Calm Mind",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Feraligatr": [
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Fezandipiti": [
       "Calm Mind",
       "",
       "",
       "",
       "Pivot",
       "",
       "",
       ""
      ],
      "Floatzel": [
       "Choice Band",
       "",
       "",
       ""
      ],
      "Flygon": [
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Forretress": [
       "Support",
       "",
       "",
       ""
      ],
      "Froslass": [
       "Spikes Lead",
       "",
       "",
       ""
      ],
      "Galvantula": [
       "Webs Lead",
       "",
       "",
       ""
      ],
      "Gardevoir": [
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Gastrodon": [
       "Specially Defensive",
       "",
       "",
       ""
      ],
      "Gengar": [
       "Choice Scarf",
       "",
       "",
       "",
       "Hex + Will-O-Wisp",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Grafaiai": [
       "Unburden Sweeper",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       "",
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Gyarados": [
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Hippowdon": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Incineroar": [
       "Defensive Pivot",
       "",
       "",
       ""
      ],
      "Infernape": [
       "Physical Attacker",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Inteleon": [
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Iron Leaves": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Kilowattrel": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Kingdra": [
       "Rain Sweeper",
       "",
       "",
       ""
      ],
      "Kleavor": [
       "Lead",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Klefki": [
       "Spikes",
       "",
       "",
       ""
      ],
      "Krookodile": [
       "Choice Scarf",
       "",
       "",
       "",
       "Stealth Rock",
       "",
       "",
       "",
       "Bulk Up",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Lucario": [
       "Swords Dance",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Lycanroc-Dusk": [
       "Swords Dance",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Magnezone": [
       "Choice Specs",
       "",
       "",
       "",
       "Assualt Vest",
       "",
       "",
       ""
      ],
      "Maushold": [
       "Tidy Up",
       "",
       "",
       ""
      ],
      "Maushold-Four": [
       "Tidy Up",
       "",
       "",
       ""
      ],
      "Mew": [
       "Nasty Plot",
       "",
       "",
       "",
       "Double Dance",
       "",
       "",
       ""
      ],
      "Mienshao": [
       "Life Orb",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Milotic": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Mimikyu": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Moltres": [
       "Physically Defensive",
       "",
       "",
       "",
       "Fast Pivot",
       "",
       "",
       ""
      ],
      "Muk-Alola": [
       "RestTalk",
       "",
       "",
       ""
      ],
      "Munkidori": [
       "Offensive Pivot",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Necrozma": [
       "Stealth Rock",
       "",
       "",
       "",
       "Offensive Trick Room",
       "",
       "",
       "",
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Noivern": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Okidogi": [
       "Choice Band",
       "",
       "",
       "",
       "Bulk Up",
       "",
       "",
       ""
      ],
      "Oricorio-Pom-Pom": [
       "Quiver Dance Sweeper",
       "",
       "",
       ""
      ],
      "Overqwil": [
       "Rain Sweeper",
       "",
       "",
       ""
      ],
      "Palossand": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Politoed": [
       "Rain Setter",
       "",
       "",
       ""
      ],
      "Porygon-Z": [
       "Choice",
       "",
       "",
       ""
      ],
      "Quagsire": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Raikou": [
       "Calm Mind",
       "",
       "",
       "",
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Regidrago": [
       "Choice Specs",
       "",
       "",
       "",
       "Dragon Dance",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Reuniclus": [
       "Calm Mind Sweeper",
       "",
       "",
       ""
      ],
      "Revavroom": [
       "Shift Gear",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Rhyperior": [
       "Stealth Rock",
       "",
       "",
       ""
      ],
      "Rotom-Heat": [
       "Nasty Plot",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Salamence": [
       "Special Attacker",
       "",
       "",
       "",
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Salazzle": [
       "Substitute + Toxic",
       "",
       "",
       "",
       "Offensive",
       "",
       "",
       ""
      ],
      "Scream Tail": [
       "Wish Support",
       "",
       "",
       ""
      ],
      "Slither Wing": [
       "Bulky Pivot",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Slowbro": [
       "Defensive",
       "",
       "",
       "",
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Slowbro-Galar": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Suicune": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Swampert": [
       "Defensive Utility",
       "",
       "",
       ""
      ],
      "Talonflame": [
       "Utility",
       "",
       "",
       ""
      ],
      "Terrakion": [
       "Choice Scarf",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       "",
       "Stealth Rock",
       "",
       "",
       ""
      ],
      "Thundurus": [
       "Nasty Plot",
       "",
       "",
       "",
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Thundurus-Therian": [
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Torterra": [
       "Shell Smash Sweeper",
       "",
       "",
       ""
      ],
      "Toxicroak": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Toxtricity": [
       "Wallbreaker",
       "",
       "",
       "",
       "Offensive Pivot",
       "",
       "",
       "",
       "Shift Gear",
       "",
       "",
       ""
      ],
      "Tsareena": [
       "Rapid Spin",
       "",
       "",
       ""
      ],
      "Typhlosion-Hisui": [
       "3 Attacks + Will-O-Wisp",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Umbreon": [
       "Wish Support",
       "",
       "",
       ""
      ],
      "Vaporeon": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Venusaur": [
       "Sun Sweeper",
       "",
       "",
       ""
      ],
      "Vileplume": [
       "Phyiscally Defensive",
       "",
       "",
       ""
      ],
      "Volcanion": [
       "Offensive",
       "",
       "",
       ""
      ],
      "Wo-Chien": [
       "Leech Seed",
       "",
       "",
       "",
       "RestTalk",
       "",
       "",
       ""
      ],
      "Yanmega": [
       "Speed Boost Sweeper",
       "",
       "",
       ""
      ],
      "Zapdos-Galar": [
       "Choice Scarf",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Zoroark-Hisui": [
       "Choice",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ]
     },
     "NU": {
      "Abomasnow": [
       "Special Attacker",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Altaria": [
       "Utility",
       "",
       "",
       "",
       "Trapper",
       "",
       "",
       ""
      ],
      "Ambipom": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Appletun": [
       "Specially Defensive",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       "",
       "Eject Pack Pivot",
       "",
       "",
       ""
      ],
      "Arcanine": [
       "Offensive",
       "",
       "",
       ""
      ],
      "Articuno": [
       "Special Wall",
       "",
       "",
       ""
      ],
      "Articuno-Galar": [
       "Stored Power Sweeper",
       "",
       "",
       "",
       "Future Sight Pivot",
       "",
       "",
       ""
      ],
      "Avalugg": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Avalugg-Hisui": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Basculegion": [
       "Choice Item",
       "",
       "",
       ""
      ],
      "Basculin": [
       "Choice Band",
       "",
       "",
       ""
      ],
      "Bellibolt": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Bombirdier": [
       "Stealth Rock",
       "",
       "",
       "",
       "Dedicated Lead",
       "",
       "",
       "",
       "Choice Item",
       "",
       "",
       ""
      ],
      "Brambleghast": [
       "Offensive Utility",
       "",
       "",
       "",
       "Defensive",
       "",
       "",
       ""
      ],
      "Braviary": [
       "Bulk Up",
       "",
       "",
       ""
      ],
      "Bronzong": [
       "Utility",
       "",
       "",
       "",
       "IronPress",
       "",
       "",
       ""
      ],
      "Brute Bonnet": [
       "Tank",
       "",
       "",
       ""
      ],
      "Bruxish": [
       "Choice Band",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Cacturne": [
       "Offensive Spikes",
       "",
       "",
       "",
       "Swords Dance Sweeper",
       "",
       "",
       ""
      ],
      "Cetitan": [
       "Belly Drum",
       "",
       "",
       ""
      ],
      "Chandelure": [
       "Choice Item",
       "",
       "",
       ""
      ],
      "Clawitzer": [
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Cloyster": [
       "Shell Smash",
       "",
       "",
       ""
      ],
      "Coalossal": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Copperajah": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Crabominable": [
       "Assault Vest Tank",
       "",
       "",
       ""
      ],
      "Crocalor": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Cryogonal": [
       "Utility",
       "",
       "",
       ""
      ],
      "Dachsbun": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Decidueye": [
       "Swords Dance",
       "",
       "",
       "",
       "Utility",
       "",
       "",
       ""
      ],
      "Delphox": [
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Diancie": [
       "Special Wall",
       "",
       "",
       "",
       "Trick Room",
       "",
       "",
       "",
       "Rock Polish",
       "",
       "",
       ""
      ],
      "Dragalge": [
       "Toxic Spikes",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Drednaw": [
       "Shell Smash",
       "",
       "",
       ""
      ],
      "Drifblim": [
       "Defog",
       "",
       "",
       ""
      ],
      "Dudunsparce": [
       "Coil",
       "",
       "",
       "",
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Duraludon": [
       "Iron Defense",
       "",
       "",
       ""
      ],
      "Eelektross": [
       "Coil",
       "",
       "",
       "",
       "Assault Vest",
       "",
       "",
       ""
      ],
      "Electrode": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Electrode-Hisui": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Emboar": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Espeon": [
       "Choice Specs",
       "",
       "",
       "",
       "Sun Support",
       "",
       "",
       ""
      ],
      "Farigiraf": [
       "Double Dance",
       "",
       "",
       ""
      ],
      "Flamigo": [
       "Choice Item",
       "",
       "",
       ""
      ],
      "Floatzel": [
       "Rain Wallbreaker",
       "",
       "",
       ""
      ],
      "Florges": [
       "Wish + Calm Mind",
       "",
       "",
       ""
      ],
      "Flygon": [
       "Choice Scarf",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       "",
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Froslass": [
       "Spikes Utility",
       "",
       "",
       ""
      ],
      "Gallade": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Galvantula": [
       "Lead",
       "",
       "",
       ""
      ],
      "Gastrodon": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Glaceon": [
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Gligar": [
       "Physical Wall",
       "",
       "",
       ""
      ],
      "Golem-Alola": [
       "Magnet Pull Trapper",
       "",
       "",
       ""
      ],
      "Golurk": [
       "Choice Band",
       "",
       "",
       ""
      ],
      "Goodra": [
       "All-Out Attacker",
       "",
       "",
       "",
       "Choice User",
       "",
       "",
       ""
      ],
      "Grimmsnarl": [
       "Offensive",
       "",
       "",
       "",
       "Bulk Up",
       "",
       "",
       ""
      ],
      "Hariyama": [
       "Belly Drum",
       "",
       "",
       "",
       "Assault Vest",
       "",
       "",
       "",
       "Guts Wallbreaker",
       "",
       "",
       "",
       "Bulk Up",
       "",
       "",
       ""
      ],
      "Hattrem": [
       "Magic Bounce Support",
       "",
       "",
       ""
      ],
      "Haunter": [
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Heracross": [
       "Wallbreaker",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Hippopotas": [
       "Sand Setter",
       "",
       "",
       ""
      ],
      "Hitmonlee": [
       "Terrain Sweeper",
       "",
       "",
       ""
      ],
      "Hitmontop": [
       "Rapid Spin",
       "",
       "",
       ""
      ],
      "Hoopa": [
       "Substitute Wallbreaker",
       "",
       "",
       "",
       "Choice User",
       "",
       "",
       "",
       "Utility",
       "",
       "",
       ""
      ],
      "Incineroar": [
       "Defensive Pivot",
       "",
       "",
       ""
      ],
      "Infernape": [
       "Choice Scarf",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Inteleon": [
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Iron Thorns": [
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Jolteon": [
       "Calm Mind Sweeper",
       "",
       "",
       ""
      ],
      "Kilowattrel": [
       "Pivot",
       "",
       "",
       "",
       "Rain Sweeper",
       "",
       "",
       ""
      ],
      "Kingdra": [
       "Rain Sweeper",
       "",
       "",
       ""
      ],
      "Klefki": [
       "Special Wall",
       "",
       "",
       ""
      ],
      "Krookodile": [
       "Choice Scarf",
       "",
       "",
       "",
       "Bulk Up",
       "",
       "",
       ""
      ],
      "Leavanny": [
       "Sticky Web Support",
       "",
       "",
       ""
      ],
      "Lilligant": [
       "Quiver Dance Sweeper",
       "",
       "",
       ""
      ],
      "Lucario": [
       "Swords Dance",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Ludicolo": [
       "Rain Dance Sweeper",
       "",
       "",
       ""
      ],
      "Lurantis": [
       "Defog",
       "",
       "",
       ""
      ],
      "Lycanroc": [
       "Sand Wallbreaker",
       "",
       "",
       "",
       "Lead",
       "",
       "",
       ""
      ],
      "Lycanroc-Dusk": [
       "All-out Attacker",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Mabosstiff": [
       "Choice Scarf",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Magneton": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Magnezone": [
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Medicham": [
       "Choice Scarf",
       "",
       "",
       "",
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Meloetta": [
       "Choice Item",
       "",
       "",
       "",
       "Relic Song",
       "",
       "",
       ""
      ],
      "Meloetta-Pirouette": [
       "Relic Song",
       "",
       "",
       ""
      ],
      "Mesprit": [
       "Offensive Setup",
       "",
       "",
       "",
       "Defensive Setup",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Mew": [
       "Calm Mind",
       "",
       "",
       "",
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Mienshao": [
       "Choice Scarf",
       "",
       "",
       "",
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Milotic": [
       "Physical Wall",
       "",
       "",
       ""
      ],
      "Minior": [
       "Shell Smash",
       "",
       "",
       ""
      ],
      "Mismagius": [
       "Choice Scarf",
       "",
       "",
       "",
       "Substitute + Draining Kiss",
       "",
       "",
       ""
      ],
      "Mudsdale": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Muk": [
       "Utility",
       "",
       "",
       "",
       "Curse",
       "",
       "",
       ""
      ],
      "Muk-Alola": [
       "Special Wall",
       "",
       "",
       ""
      ],
      "Munkidori": [
       "Pivot",
       "",
       "",
       ""
      ],
      "Naclstack": [
       "IronPress",
       "",
       "",
       "",
       "Stealth Rock",
       "",
       "",
       ""
      ],
      "Ninetales": [
       "Sun Setter",
       "",
       "",
       ""
      ],
      "Noivern": [
       "Utility",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Oricorio-Pom-Pom": [
       "Quiver Dance",
       "",
       "",
       ""
      ],
      "Orthworm": [
       "Coil",
       "",
       "",
       "",
       "Utility",
       "",
       "",
       ""
      ],
      "Palossand": [
       "Physical Wall",
       "",
       "",
       ""
      ],
      "Passimian": [
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Pawmot": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Perrserker": [
       "Assault Vest Pivot",
       "",
       "",
       ""
      ],
      "Piloswine": [
       "Tank",
       "",
       "",
       ""
      ],
      "Porygon-Z": [
       "Choice Item",
       "",
       "",
       "",
       "Agility",
       "",
       "",
       ""
      ],
      "Primeape": [
       "Bulky Setup",
       "",
       "",
       "",
       "Lead",
       "",
       "",
       "",
       "Offensive Setup",
       "",
       "",
       ""
      ],
      "Pyroar": [
       "Taunt Wallbreaker",
       "",
       "",
       ""
      ],
      "Quagsire": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Qwilfish": [
       "Physical Wall",
       "",
       "",
       ""
      ],
      "Qwilfish-Hisui": [
       "Defensive",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Raikou": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Registeel": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Reuniclus": [
       "Assault Vest",
       "",
       "",
       "",
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Rhyperior": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Rotom": [
       "Choice Scarf",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       "",
       "Utility",
       "",
       "",
       ""
      ],
      "Rotom-Frost": [
       "Choice Scarf",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Rotom-Heat": [
       "Choice Scarf",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Rotom-Mow": [
       "Choice Scarf",
       "",
       "",
       "",
       "Utility",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Sableye": [
       "Prankster Wall",
       "",
       "",
       ""
      ],
      "Salazzle": [
       "Utility",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Samurott": [
       "Mixed Wallbreaker",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Sandaconda": [
       "Utility",
       "",
       "",
       "",
       "Coil",
       "",
       "",
       ""
      ],
      "Sandslash": [
       "Sand Wallbreaker",
       "",
       "",
       "",
       "Physical Wall",
       "",
       "",
       ""
      ],
      "Scrafty": [
       "Bulk Up",
       "",
       "",
       "",
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Scream Tail": [
       "Utility",
       "",
       "",
       ""
      ],
      "Scyther": [
       "Pivot",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Shaymin": [
       "Healing Wish",
       "",
       "",
       "",
       "Offensive",
       "",
       "",
       ""
      ],
      "Sliggoo-Hisui": [
       "Curse Sweeper",
       "",
       "",
       "",
       "All-Out Attacker",
       "",
       "",
       ""
      ],
      "Slowbro": [
       "Calm Mind",
       "",
       "",
       "",
       "Defensive",
       "",
       "",
       "",
       "Assault Vest",
       "",
       "",
       ""
      ],
      "Slowbro-Galar": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Smeargle": [
       "Lead",
       "",
       "",
       ""
      ],
      "Sneasel": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Sneasel-Hisui": [
       "Choice Item",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Spiritomb": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Staraptor": [
       "Choice Item",
       "",
       "",
       ""
      ],
      "Swampert": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Sylveon": [
       "Wish + Calm Mind",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Talonflame": [
       "Utility",
       "",
       "",
       ""
      ],
      "Tatsugiri": [
       "Nasty Plot",
       "",
       "",
       "",
       "Choice Item",
       "",
       "",
       ""
      ],
      "Tauros": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Tauros-Paldea-Aqua": [
       "Bulk Up",
       "",
       "",
       "",
       "Choice Item",
       "",
       "",
       ""
      ],
      "Tauros-Paldea-Blaze": [
       "Bulk Up",
       "",
       "",
       "",
       "Choice Item",
       "",
       "",
       ""
      ],
      "Tauros-Paldea-Combat": [
       "Bulk Up",
       "",
       "",
       ""
      ],
      "Tentacruel": [
       "Utility",
       "",
       "",
       ""
      ],
      "Thundurus": [
       "Nasty Plot",
       "",
       "",
       "",
       "Mixed Utility",
       "",
       "",
       "",
       "Physical Attacker",
       "",
       "",
       ""
      ],
      "Torterra": [
       "Shell Smash",
       "",
       "",
       ""
      ],
      "Toxicroak": [
       "Swords Dance",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Toxtricity": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Tsareena": [
       "Offensive",
       "",
       "",
       ""
      ],
      "Typhlosion": [
       "Choice Item",
       "",
       "",
       ""
      ],
      "Typhlosion-Hisui": [
       "Status Spreader",
       "",
       "",
       "",
       "Choice Item",
       "",
       "",
       ""
      ],
      "Umbreon": [
       "Utility",
       "",
       "",
       ""
      ],
      "Ursaring": [
       "Bulk Up",
       "",
       "",
       "",
       "Trailblaze Sweeper",
       "",
       "",
       ""
      ],
      "Uxie": [
       "Utility",
       "",
       "",
       ""
      ],
      "Vaporeon": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Veluza": [
       "Physical Sweeper",
       "",
       "",
       ""
      ],
      "Venusaur": [
       "Sun Sweeper",
       "",
       "",
       ""
      ],
      "Vespiquen": [
       "Pivot",
       "",
       "",
       ""
      ],
      "Victreebel": [
       "Sun Sweeper",
       "",
       "",
       ""
      ],
      "Vileplume": [
       "Physical Wall",
       "",
       "",
       ""
      ],
      "Weezing": [
       "Physical Wall",
       "",
       "",
       ""
      ],
      "Zangoose": [
       "Swords Dance",
       "",
       "",
       ""
      ]
     },
     "PU": {
      "Alcremie": [
       "Double Dance",
       "",
       "",
       ""
      ],
      "Altaria": [
       "Defensive Defog",
       "",
       "",
       ""
      ],
      "Arcanine": [
       "Curse",
       "",
       "",
       ""
      ],
      "Articuno-Galar": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Avalugg-Hisui": [
       "Entry Hazard Lead",
       "",
       "",
       "",
       "Offensive",
       "",
       "",
       ""
      ],
      "Bellibolt": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Bombirdier": [
       "Offensive Pivot",
       "",
       "",
       "",
       "Choice",
       "",
       "",
       "",
       "Entry Hazard Lead",
       "",
       "",
       ""
      ],
      "Braviary-Hisui": [
       "Agility",
       "",
       "",
       ""
      ],
      "Bronzong": [
       "Utility",
       "",
       "",
       "",
       "Bulky Setup Sweeper",
       "",
       "",
       ""
      ],
      "Bruxish": [
       "Choice Scarf",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Calyrex": [
       "Double Dance",
       "",
       "",
       ""
      ],
      "Charizard": [
       "Special Attacker",
       "",
       "",
       ""
      ],
      "Clawitzer": [
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Cramorant": [
       "Defog",
       "",
       "",
       ""
      ],
      "Decidueye": [
       "Defensive Defog",
       "",
       "",
       "",
       "Physical Attacker",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Decidueye-Hisui": [
       "Defensive Defog",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Delphox": [
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Dodrio": [
       "Swords Dance",
       "",
       "",
       "",
       "Choice",
       "",
       "",
       ""
      ],
      "Dudunsparce": [
       "Utility",
       "",
       "",
       "",
       "Calm Mind",
       "",
       "",
       "",
       "Coil",
       "",
       "",
       ""
      ],
      "Electrode-Hisui": [
       "Pivot",
       "",
       "",
       ""
      ],
      "Emboar": [
       "Wallbreaker",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Exeggutor-Alola": [
       "Choice Specs",
       "",
       "",
       "",
       "Eject Pack",
       "",
       "",
       ""
      ],
      "Farigiraf": [
       "Offensive Trick Room",
       "",
       "",
       "",
       "Double Dance",
       "",
       "",
       "",
       "Wish",
       "",
       "",
       ""
      ],
      "Flamigo": [
       "Choice Scarf",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Floatzel": [
       "Choice Band",
       "",
       "",
       "",
       "Bulk Up",
       "",
       "",
       ""
      ],
      "Florges": [
       "Wish",
       "",
       "",
       "",
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Froslass": [
       "Spikes Lead",
       "",
       "",
       "",
       "Utility",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Frosmoth": [
       "Quiver Dance",
       "",
       "",
       ""
      ],
      "Gastrodon": [
       "Specially Defensive",
       "",
       "",
       ""
      ],
      "Glastrier": [
       "Swords Dance",
       "",
       "",
       ""
      ],
      "Gligar": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Golurk": [
       "Choice Band",
       "",
       "",
       ""
      ],
      "Goodra": [
       "Heavy-Duty Boots",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Grafaiai": [
       "Utility",
       "",
       "",
       "",
       "Terrain Sweeper",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Grimmsnarl": [
       "Bulk Up",
       "",
       "",
       ""
      ],
      "Grumpig": [
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Hariyama": [
       "Bulk Up",
       "",
       "",
       "",
       "Assault Vest",
       "",
       "",
       "",
       "Belly Drum",
       "",
       "",
       ""
      ],
      "Hoopa": [
       "Choice",
       "",
       "",
       "",
       "Substitute",
       "",
       "",
       ""
      ],
      "Houndstone": [
       "Defensive",
       "",
       "",
       "",
       "Offensive",
       "",
       "",
       ""
      ],
      "Inteleon": [
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Jolteon": [
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Kilowattrel": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Lanturn": [
       "Defensive Pivot",
       "",
       "",
       ""
      ],
      "Lycanroc": [
       "Swords Dance",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       "",
       "Entry Hazard Lead",
       "",
       "",
       ""
      ],
      "Mesprit": [
       "Setup Sweeper",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       "",
       "Utility",
       "",
       "",
       ""
      ],
      "Milotic": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Mismagius": [
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Mudsdale": [
       "Stealth Rock",
       "",
       "",
       ""
      ],
      "Muk": [
       "Utility",
       "",
       "",
       ""
      ],
      "Orthworm": [
       "Coil",
       "",
       "",
       "",
       "Utility",
       "",
       "",
       ""
      ],
      "Palossand": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Pawmot": [
       "Offensive",
       "",
       "",
       ""
      ],
      "Poliwrath": [
       "Bulk Up",
       "",
       "",
       ""
      ],
      "Regirock": [
       "Stealth Rock",
       "",
       "",
       ""
      ],
      "Rhydon": [
       "Stealth Rock",
       "",
       "",
       "",
       "Offensive Swords Dance",
       "",
       "",
       ""
      ],
      "Rotom-Heat": [
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Rotom-Mow": [
       "Choice Scarf",
       "",
       "",
       "",
       "Utility",
       "",
       "",
       ""
      ],
      "Salazzle": [
       "Offensive",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Sandaconda": [
       "Stealth Rock",
       "",
       "",
       ""
      ],
      "Sandslash": [
       "Defensive Spinner",
       "",
       "",
       ""
      ],
      "Sandslash-Alola": [
       "Defensive Spinner",
       "",
       "",
       ""
      ],
      "Sceptile": [
       "Terrain Sweeper",
       "",
       "",
       "",
       "Special Attacker",
       "",
       "",
       ""
      ],
      "Scrafty": [
       "Bulky Dragon Dance",
       "",
       "",
       "",
       "Bulk Up",
       "",
       "",
       ""
      ],
      "Scream Tail": [
       "Wish",
       "",
       "",
       ""
      ],
      "Scyther": [
       "Swords Dance",
       "",
       "",
       "",
       "Pivot",
       "",
       "",
       ""
      ],
      "Skuntank": [
       "Utility",
       "",
       "",
       "",
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Slowbro-Galar": [
       "Defensive",
       "",
       "",
       "",
       "Assault Vest",
       "",
       "",
       "",
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Sneasel": [
       "Swords Dance",
       "",
       "",
       "",
       "Choice Band",
       "",
       "",
       ""
      ],
      "Snorlax": [
       "Tank",
       "",
       "",
       "",
       "Curse",
       "",
       "",
       ""
      ],
      "Staraptor": [
       "Choice",
       "",
       "",
       ""
      ],
      "Tatsugiri": [
       "Offensive",
       "",
       "",
       ""
      ],
      "Tauros-Paldea-Aqua": [
       "Bulk Up",
       "",
       "",
       "",
       "Choice",
       "",
       "",
       ""
      ],
      "Tauros-Paldea-Blaze": [
       "Bulk Up",
       "",
       "",
       "",
       "Choice",
       "",
       "",
       ""
      ],
      "Thwackey": [
       "Choice",
       "",
       "",
       ""
      ],
      "Toxicroak": [
       "Nasty Plot",
       "",
       "",
       "",
       "Swords Dance",
       "",
       "",
       "",
       "Choice",
       "",
       "",
       ""
      ],
      "Toxtricity": [
       "Shift Gear",
       "",
       "",
       "",
       "Choice Specs",
       "",
       "",
       ""
      ],
      "Uxie": [
       "Utility",
       "",
       "",
       "",
       "Terrain Sweeper",
       "",
       "",
       ""
      ],
      "Virizion": [
       "Swords Dance",
       "",
       "",
       "",
       "Calm Mind",
       "",
       "",
       ""
      ],
      "Weezing": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Wo-Chien": [
       "RestTalk",
       "",
       "",
       "",
       "Leech Seed",
       "",
       "",
       ""
      ]
     },
     "LC": {
      "Axew": [
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Azurill": [
       "Belly Drum",
       "",
       "",
       ""
      ],
      "Bellsprout": [
       "Sun Sweeper",
       "",
       "",
       ""
      ],
      "Bramblin": [
       "Spinner",
       "",
       "",
       ""
      ],
      "Buizel": [
       "Rain Wallbreaker",
       "",
       "",
       ""
      ],
      "Charmander": [
       "Sun Wallbreaker",
       "",
       "",
       ""
      ],
      "Chewtle": [
       "Shell Smash",
       "",
       "",
       ""
      ],
      "Chinchou": [
       "Pivot",
       "",
       "",
       ""
      ],
      "Corphish": [
       "Dragon Dance",
       "",
       "",
       ""
      ],
      "Croagunk": [
       "Bulky Attacker",
       "",
       "",
       ""
      ],
      "Deerling": [
       "Offensive",
       "",
       "",
       ""
      ],
      "Diglett-Alola": [
       "Life Orb",
       "",
       "",
       ""
      ],
      "Doduo": [
       "Fast Attacker",
       "",
       "",
       ""
      ],
      "Drilbur": [
       "Utility",
       "",
       "",
       ""
      ],
      "Elekid": [
       "Offensive Pivot",
       "",
       "",
       ""
      ],
      "Foongus": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Fuecoco": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Glimmet": [
       "Entry Hazard Setter",
       "",
       "",
       ""
      ],
      "Gothita": [
       "Trapper",
       "",
       "",
       ""
      ],
      "Grimer-Alola": [
       "Wallbreaker",
       "",
       "",
       ""
      ],
      "Grookey": [
       "Choice Scarf",
       "",
       "",
       "",
       "Pivot",
       "",
       "",
       ""
      ],
      "Growlithe-Hisui": [
       "Choice Scarf",
       "",
       "",
       "",
       "Eviolite",
       "",
       "",
       ""
      ],
      "Impidimp": [
       "Dual Screens",
       "",
       "",
       ""
      ],
      "Koffing": [
       "Tank",
       "",
       "",
       ""
      ],
      "Larvesta": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Magby": [
       "Belly Drum",
       "",
       "",
       ""
      ],
      "Magnemite": [
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Mankey": [
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Mareanie": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Maschiff": [
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Meowth": [
       "Revenge Killer",
       "",
       "",
       ""
      ],
      "Mienfoo": [
       "Fast Pivot",
       "",
       "",
       "",
       "Slow Pivot",
       "",
       "",
       ""
      ],
      "Minccino": [
       "Skill Link Attacker",
       "",
       "",
       ""
      ],
      "Mudbray": [
       "Offensive Stealth Rock",
       "",
       "",
       "",
       "RestTalk",
       "",
       "",
       ""
      ],
      "Numel": [
       "Special Attacker",
       "",
       "",
       ""
      ],
      "Pawniard": [
       "Swords Dance",
       "",
       "",
       "",
       "Stealth Rock",
       "",
       "",
       ""
      ],
      "Psyduck": [
       "Rain Wallbreaker",
       "",
       "",
       ""
      ],
      "Quaxly": [
       "Rapid Spin",
       "",
       "",
       ""
      ],
      "Sandile": [
       "Bulky Stealth Rock",
       "",
       "",
       ""
      ],
      "Sandshrew-Alola": [
       "Snow Sweeper",
       "",
       "",
       ""
      ],
      "Sandygast": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Shellder": [
       "Shell Smash",
       "",
       "",
       ""
      ],
      "Shellos": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Slowpoke": [
       "Defensive",
       "",
       "",
       ""
      ],
      "Snover": [
       "Snow Setter",
       "",
       "",
       ""
      ],
      "Snubbull": [
       "Physically Defensive",
       "",
       "",
       ""
      ],
      "Stunky": [
       "Physical Attacker",
       "",
       "",
       ""
      ],
      "Timburr": [
       "Physical Attacker",
       "",
       "",
       ""
      ],
      "Tinkatink": [
       "Utility",
       "",
       "",
       ""
      ],
      "Toedscool": [
       "Utility",
       "",
       "",
       ""
      ],
      "Torchic": [
       "Life Orb",
       "",
       "",
       ""
      ],
      "Trapinch": [
       "Trapper",
       "",
       "",
       ""
      ],
      "Voltorb-Hisui": [
       "Special Attacker",
       "",
       "",
       ""
      ],
      "Vullaby": [
       "Physical Attacker",
       "",
       "",
       "",
       "Nasty Plot",
       "",
       "",
       ""
      ],
      "Wattrel": [
       "Pivot",
       "",
       "",
       ""
      ],
      "Wingull": [
       "Offensive",
       "",
       "",
       ""
      ],
      "Zorua": [
       "Choice Scarf",
       "",
       "",
       ""
      ],
      "Zorua-Hisui": [
       "Wallbreaker",
       "",
       "",
       ""
      ]
     }
    }
   }
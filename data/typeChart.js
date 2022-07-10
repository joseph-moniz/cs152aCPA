/*
    Custom dictionary for the website that is used in several features of the app to calculate how effective types are against every other type.
    This format is common for generating type charts in many Pokemona apps.
    This dictionary was generated using a similar type chart as a template.

    The key is the type and the value is a dictionary containing every type and how effective the key type is against them.

    0 = neutral
    1 = super effective
    2 = not very effective
    3 = no effect

    Examples:
    typeChart["Bug"]["damageTaken"]["Fairy"] = 0 (Bug takes neutral damage from Fairy / Fairy deals neutral damage to Bug)
    typeChart["Fire"]["damageTaken"]["Water"] = 1 (Fire takes super effective damage from Water / Water is super effective against Fire)
    typeChart["Fire"]["damageTaken"]["Grass"] = 2 (Fire takes not very effective damage from Grass / Grass is not very effective against Fire)
    typeChart["Ground"]["damageTaken"]["Electric"] = 3 (Ground takes no damage from Electric / Electric has no effect on Ground)


    This dictionary is used in the Team Summary features for the calculations involving the type synergies of the user's team
    
*/

module.exports = {
    "Bug":{
        "damageTaken":{
            "Bug":0,"Dark":0,"Dragon":0,"Electric":0,"Fairy":0,"Fighting":2,"Fire":1,"Flying":1,"Ghost":0,"Grass":2,"Ground":2,"Ice":0,"Normal":0,"Poison":0,"Psychic":0,"Rock":1,"Steel":0,"Water":0}
        },
    "Dark":{
        "damageTaken":{
            "Bug":1,"Dark":2,"Dragon":0,"Electric":0,"Fairy":1,"Fighting":1,"Fire":0,"Flying":0,"Ghost":2,"Grass":0,"Ground":0,"Ice":0,"Normal":0,"Poison":0,"Psychic":3,"Rock":0,"Steel":0,"Water":0}
        },
    "Dragon":{
        "damageTaken":{
            "Bug":0,"Dark":0,"Dragon":1,"Electric":2,"Fairy":1,"Fighting":0,"Fire":2,"Flying":0,"Ghost":0,"Grass":2,"Ground":0,"Ice":1,"Normal":0,"Poison":0,"Psychic":0,"Rock":0,"Steel":0,"Water":2}
        },
    "Electric":{
        "damageTaken":{
            "Bug":0,"Dark":0,"Dragon":0,"Electric":2,"Fairy":0,"Fighting":0,"Fire":0,"Flying":2,"Ghost":0,"Grass":0,"Ground":1,"Ice":0,"Normal":0,"Poison":0,"Psychic":0,"Rock":0,"Steel":2,"Water":0}
        },
    "Fairy":{
        "damageTaken":{
            "Bug":2,"Dark":2,"Dragon":3,"Electric":0,"Fairy":0,"Fighting":2,"Fire":0,"Flying":0,"Ghost":0,"Grass":0,"Ground":0,"Ice":0,"Normal":0,"Poison":1,"Psychic":0,"Rock":0,"Steel":1,"Water":0}
        },
    "Fighting":{
        "damageTaken":{
            "Bug":2,"Dark":2,"Dragon":0,"Electric":0,"Fairy":1,"Fighting":0,"Fire":0,"Flying":1,"Ghost":0,"Grass":0,"Ground":0,"Ice":0,"Normal":0,"Poison":0,"Psychic":1,"Rock":2,"Steel":0,"Water":0}
        },
    "Fire":{
        "damageTaken":{
            "Bug":2,"Dark":0,"Dragon":0,"Electric":0,"Fairy":2,"Fighting":0,"Fire":2,"Flying":0,"Ghost":0,"Grass":2,"Ground":1,"Ice":2,"Normal":0,"Poison":0,"Psychic":0,"Rock":1,"Steel":2,"Water":1}
        },
    "Flying":{
        "damageTaken":{
            "Bug":2,"Dark":0,"Dragon":0,"Electric":1,"Fairy":0,"Fighting":2,"Fire":0,"Flying":0,"Ghost":0,"Grass":2,"Ground":3,"Ice":1,"Normal":0,"Poison":0,"Psychic":0,"Rock":1,"Steel":0,"Water":0}
        },
    "Ghost":{
        "damageTaken":{
            "Bug":2,"Dark":1,"Dragon":0,"Electric":0,"Fairy":0,"Fighting":3,"Fire":0,"Flying":0,"Ghost":1,"Grass":0,"Ground":0,"Ice":0,"Normal":3,"Poison":2,"Psychic":0,"Rock":0,"Steel":0,"Water":0}
        },
    "Grass":{
        "damageTaken":{
            "Bug":1,"Dark":0,"Dragon":0,"Electric":2,"Fairy":0,"Fighting":0,"Fire":1,"Flying":1,"Ghost":0,"Grass":2,"Ground":2,"Ice":1,"Normal":0,"Poison":1,"Psychic":0,"Rock":0,"Steel":0,"Water":2}
        },
    "Ground":
        {"damageTaken":{
            "Bug":0,"Dark":0,"Dragon":0,"Electric":3,"Fairy":0,"Fighting":0,"Fire":0,"Flying":0,"Ghost":0,"Grass":1,"Ground":0,"Ice":1,"Normal":0,"Poison":2,"Psychic":0,"Rock":2,"Steel":0,"Water":1}
        },
    "Ice":
        {"damageTaken":{
            "Bug":0,"Dark":0,"Dragon":0,"Electric":0,"Fairy":0,"Fighting":1,"Fire":1,"Flying":0,"Ghost":0,"Grass":0,"Ground":0,"Ice":2,"Normal":0,"Poison":0,"Psychic":0,"Rock":1,"Steel":1,"Water":0}
        },
    "Normal":{
        "damageTaken":{
            "Bug":0,"Dark":0,"Dragon":0,"Electric":0,"Fairy":0,"Fighting":1,"Fire":0,"Flying":0,"Ghost":3,"Grass":0,"Ground":0,"Ice":0,"Normal":0,"Poison":0,"Psychic":0,"Rock":0,"Steel":0,"Water":0}
        },
    "Poison":{
        "damageTaken":{
            "Bug":2,"Dark":0,"Dragon":0,"Electric":0,"Fairy":2,"Fighting":2,"Fire":0,"Flying":0,"Ghost":0,"Grass":2,"Ground":1,"Ice":0,"Normal":0,"Poison":2,"Psychic":1,"Rock":0,"Steel":0,"Water":0}
        },
    "Psychic":{
        "damageTaken":{
            "Bug":1,"Dark":1,"Dragon":0,"Electric":0,"Fairy":0,"Fighting":2,"Fire":0,"Flying":0,"Ghost":1,"Grass":0,"Ground":0,"Ice":0,"Normal":0,"Poison":0,"Psychic":2,"Rock":0,"Steel":0,"Water":0}
        },
    "Rock":{
        "damageTaken":{
            "Bug":0,"Dark":0,"Dragon":0,"Electric":0,"Fairy":0,"Fighting":1,"Fire":2,"Flying":2,"Ghost":0,"Grass":1,"Ground":1,"Ice":0,"Normal":2,"Poison":2,"Psychic":0,"Rock":0,"Steel":1,"Water":1}
        },
    "Steel":{
        "damageTaken":{
            "Bug":2,"Dark":0,"Dragon":2,"Electric":0,"Fairy":2,"Fighting":1,"Fire":1,"Flying":2,"Ghost":0,"Grass":2,"Ground":1,"Ice":2,"Normal":2,"Poison":3,"Psychic":2,"Rock":2,"Steel":2,"Water":0}
        },
    "Water":{
        "damageTaken":{
            "Bug":0,"Dark":0,"Dragon":0,"Electric":1,"Fairy":0,"Fighting":0,"Fire":2,"Flying":0,"Ghost":0,"Grass":1,"Ground":0,"Ice":2,"Normal":0,"Poison":0,"Psychic":0,"Rock":0,"Steel":2,"Water":2}
        }
    }
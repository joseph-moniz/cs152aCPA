var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const layouts = require("express-ejs-layouts");
const axios = require('axios');
const genDex = require('./data/genDex');
const abilityDex = require('./data/abilityDex');
const itemsDex = require('./data/itemsDex');
const movesDex = require('./data/movesDex');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { randomFill } = require('crypto');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(layouts)
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/sets',
(req,res,next) => {
  res.render('sets')
});

app.post('/sets',
async (req,res,next) => {
  const {pokemon, tier, generation} = req.body;
  res.locals.correctNameFormatCheck = Object.keys(genDex).includes(pokemon);

  if (res.locals.correctNameFormatCheck) {
    res.locals.pokemon = pokemon;
    res.locals.tier = tier;
    res.locals.generation = generation;
    const genPlusTier = generation+tier.toLowerCase();
    const tiers = ["Ubers", "OU", "UU", "RU", "NU", "PU", "LC"];
    const nonexistantGenTiers = ["4ru", "3ru", "2ru", "1ru", "3pu", "2pu", "1pu", "3lc", "2lc", "1lc"];

    res.locals.pokemonLowercase = getPokemonLowerCase(pokemon);
    res.locals.nonexistantTierFlag = getNonExistantTierFlag(nonexistantGenTiers, genPlusTier);
    res.locals.minGen = genDex[pokemon];
    
    const tiersIn = [];
    let index = 0;
    for (const newTier of tiers) {
      const genPlusTier = generation+newTier.toLowerCase();
      const nonexistantTierFlag = getNonExistantTierFlag(nonexistantGenTiers, genPlusTier);
      if (!nonexistantTierFlag) {
        const responseTier = await axios.get('https://play.pokemonshowdown.com/data/sets/gen'+genPlusTier+'.json')
        if (responseTier.data.dex[pokemon] != null) {
          tiersIn[index] = newTier;
          index++;
        }
      }
    }
    res.locals.otherTiers = tiersIn;

    let sets = [];
    let setDetails = [];
    let genTierSets = [];
    let evSpreads = [];
    
    if (res.locals.nonexistantTierFlag == false && generation >= res.locals.minGen) {

      const response = await axios.get('https://play.pokemonshowdown.com/data/sets/gen'+genPlusTier+'.json')
      console.dir(response.data.length)
      genTierSets = response.data.dex[pokemon];
      if (genTierSets != null) {
        sets = Object.keys(genTierSets);
        setDetails = Object.values(genTierSets);
        if (generation > 2) {
          const evNames = getEVNames(sets, setDetails);
          const evValues = getEVValues(sets, setDetails);
          evSpreads = getEVSpreads(evNames, evValues);
        }
        res.locals.genTierSets = genTierSets;
        res.locals.sets = sets;
        res.locals.setDetails = setDetails
        res.locals.evSpreads = evSpreads;
      }
      else {
        res.locals.genTierSets = [];
        res.locals.sets = [];
        res.locals.setDetails = [];
        res.locals.evSpreads = [];
      }
    }
    else {
      res.locals.genTierSets = [];
      res.locals.sets = [];
      res.locals.setDetails = [];
      res.locals.evSpreads = [];
    }
  }
  res.render('showSets')
})


app.get('/allSets',
(req,res,next) => {
  res.render('allSets')
});

app.post('/allSets',
async (req,res,next) => {
  const {pokemon, generation} = req.body;
  res.locals.correctNameFormatCheck = Object.keys(genDex).includes(pokemon);

  if (res.locals.correctNameFormatCheck) {
    res.locals.pokemon = pokemon;
    res.locals.pokemonLowercase = getPokemonLowerCase(pokemon);
    res.locals.generation = generation;
    res.locals.minGen = genDex[pokemon];
    const tiers = ["Ubers", "OU", "UU", "RU", "NU", "PU", "LC"];
    const nonexistantGenTiers = ["4ru", "3ru", "2ru", "1ru", "3pu", "2pu", "pu", "lc", "2lc", "1lc"];

    let allTierSets = [];
    
    if (generation >= res.locals.minGen) {
      for(let i = 0; i < tiers.length; i++) {
        const tierLowercase = tiers[i].toLowerCase();
        const genPlusTier = generation + tierLowercase;
        let tierSets = [];
        if (nonexistantGenTiers.includes(genPlusTier)) {
          allTierSets[i] = [];
        }
        else {
          const response = await axios.get('https://play.pokemonshowdown.com/data/sets/gen'+genPlusTier+'.json')
          console.dir(response.data.length)
          const genTierSets = response.data.dex[pokemon];
          if (genTierSets != null) {
            const sets = Object.keys(genTierSets);
            const setDetails = Object.values(genTierSets);
            let evSpreads = null;
            if (generation > 2) {
              const evNames = getEVNames(sets, setDetails);
              const evValues = getEVValues(sets, setDetails);
              evSpreads = getEVSpreads(evNames, evValues);
            }
            tierSets = [tiers[i], sets, setDetails, evSpreads]
          }
          else {
            allTierSets[i] = [];
          }
          allTierSets[i] = tierSets;
        }
      }
    }
    res.locals.allTierSetsList = allTierSets.filter(e => e.length);
  }
  res.render('showAllSets')
})

app.get('/usageStatsTier',
(req,res,next) => {
  res.render('usageStatsTier')
});

app.post('/usageStatsTier',
async (req,res,next) => {
  const {format, rating} = req.body;
  const generation = getGenFromString(format);
  const tier = getTierFromString(format);
  const genPlusTier = generation + tier.toLowerCase();
  const genTierSearch = getGenTierSearch(genPlusTier);
  const elo = getELO(genPlusTier, rating);
  const yearMonth = getYearMonth(genPlusTier);

  res.locals.rating = rating;
  res.locals.elo = elo;
  res.locals.generation = generation;
  res.locals.tier = tier;
  res.locals.date = getDate(yearMonth);
  
  const response = await axios.get('https://www.smogon.com/stats/'+yearMonth+'/chaos/'+genTierSearch+'-'+elo+'.json')
  console.dir(response.data.length);
  const usageData = response.data.data;
  const monsList = Object.keys(usageData);
  const monsDetails = Object.values(usageData);
  let monAndUsagePercentDict = {};
  let filteredMonsList = [];
  let filteredUsages = [];
  let filteredIndex = 0;
  for (let i = 0; i < monsList.length; i++) {
    if (monsDetails[i].usage >= 0.005) {
      filteredMonsList[filteredIndex] = monsList[i];
      filteredUsages[filteredIndex] = monsDetails[i].usage
      filteredIndex++;
    } 
  }
  for (let i = 0; i < filteredMonsList.length; i++) {
    monAndUsagePercentDict[filteredMonsList[i]] = (filteredUsages[i]* 100).toFixed(5); 
  }
  
  monAndUsagePercentDict = sortDictByValue(monAndUsagePercentDict);
  res.locals.sortedMonsList = Object.keys(monAndUsagePercentDict);
  res.locals.monAndUsagePercentDict = monAndUsagePercentDict;

  res.render('showUsageStatsTier')
})

app.get('/usageStatsMon',
(req,res,next) => {
  res.render('usageStatsMon')
});

app.post('/usageStatsMon',
async (req,res,next) => {
  const {pokemon, format, rating} = req.body;
  res.locals.correctNameFormatCheck = Object.keys(genDex).includes(pokemon);

  if (res.locals.correctNameFormatCheck) {
    res.locals.rating = rating;
    res.locals.pokemon = pokemon;
    res.locals.pokemonLowercase = getPokemonLowerCase(pokemon);
  
    res.locals.cap = 10;
    const teammateCap = 10;

    const generation = getGenFromString(format);
    const tier = getTierFromString(format);
    const genPlusTier = generation + tier.toLowerCase();
    const genTierSearch = getGenTierSearch(genPlusTier);
    const elo = getELO(genPlusTier, rating);
    const yearMonth = getYearMonth(genPlusTier);
    const tiers = ["Ubers", "OU", "UU", "RU", "NU", "PU", "LC"];
    const nonexistantGenTiers = ["4ru", "3ru", "2ru", "1ru", "3pu", "2pu", "1pu", "3lc", "2lc", "1lc"];

    res.locals.generation = generation;
    res.locals.tier = tier;
    res.locals.elo = elo;
    res.locals.date = getDate(yearMonth);
    res.locals.minGen = genDex[pokemon];

    const tiersIn = [];
    let tiersInIndex = 0;
    for (const newTier of tiers) {
      const genPlusTier = generation+newTier.toLowerCase();
      const genTierSearch = getGenTierSearch(genPlusTier);
      const elo = getELO(genPlusTier, rating);
      const yearMonth = getYearMonth(genPlusTier);
      const nonexistantTierFlag = getNonExistantTierFlag(nonexistantGenTiers, genPlusTier);
      if (!nonexistantTierFlag) {
        const responseTier = await axios.get('https://www.smogon.com/stats/'+yearMonth+'/chaos/'+genTierSearch+'-'+elo+'.json')
        if (responseTier.data.data[pokemon] != null) {
          tiersIn[tiersInIndex] = newTier;
          tiersInIndex++;
        }
      }
    }
    res.locals.otherTiers = tiersIn;
    
    if (tiersIn.length > 0 && generation >= res.locals.minGen) {
  
      const response = await axios.get('https://www.smogon.com/stats/'+yearMonth+'/chaos/'+genTierSearch+'-'+elo+'.json')
      console.dir(response.data.length);
      const allDetails = response.data.data
      const monDetails = allDetails[pokemon];
      if (monDetails != null) {
        const usagePercent = monDetails.usage * 100;
        const movesSorted = getStats(monDetails, "Moves");
        const abilitiesSorted = getStats(monDetails, "Abilities");
        const itemsSorted = getStats(monDetails, "Items");
        const spreadsSorted = getStats(monDetails, "Spreads");

        let teammatesSorted = {};
        const newEnough = compareDates(yearMonth);
        if (newEnough) {
          teammatesSorted = getTeammatesNew(monDetails, teammateCap);
        }
        else {
          teammatesSorted = getTeammatesOld(allDetails, monDetails, teammateCap);
        }

        const rank = getRank(allDetails, pokemon);


        res.locals.monDetails = monDetails;
        res.locals.usagePercent = usagePercent;
        res.locals.rank = rank;
        res.locals.moves = Object.keys(movesSorted);
        res.locals.abilities = Object.keys(abilitiesSorted);
        res.locals.items = Object.keys(itemsSorted);
        res.locals.spreads = Object.keys(spreadsSorted);
        res.locals.teammates = Object.keys(teammatesSorted);
        res.locals.movesStats = movesSorted;
        res.locals.abilitiesStats = abilitiesSorted;
        res.locals.itemsStats = itemsSorted;
        res.locals.spreadsStats = spreadsSorted;
        res.locals.teammatesStats = teammatesSorted;

      }
      else {
        res.locals.monDetails = monDetails;
        res.locals.usagePercent = 0
        res.locals.rank = 0;
        res.locals.moves = [];
        res.locals.abilities = [];
        res.locals.items = [];
        res.locals.spreads = [];
        res.locals.teammates = [];
        res.locals.movesStats = {};
        res.locals.abilitiesStats = {};
        res.locals.itemsStats = {};
        res.locals.spreadsStats = {};
        res.locals.teammatesStats = {};
      }

    }
  }
  res.render('showUsageStatsMon')
})


// app.get('/test',
// (req,res,next) => {
//   res.render('test')
// });

// app.post('/test',
// async (req,res,next) => {
//   const {pokemon, tier, generation} = req.body;
//   res.locals.pokemon = pokemon;


//     res.render('showTest')

// })


function convertEVFormats(evNames) {
  let evNamesProper = [];
  for (let i = 0; i < evNames.length; i++) {
    if (evNames[i] == "hp") {
      evNamesProper[i] = "HP";
    }
    if (evNames[i] == "atk") {
      evNamesProper[i] = "Atk";
    }
    if (evNames[i] == "def") {
      evNamesProper[i] = "Def";
    }
    if (evNames[i] == "spa") {
      evNamesProper[i] = "SpA";
    }
    if (evNames[i] == "spd") {
      evNamesProper[i] = "SpD";
    }
    if (evNames[i] == "spe") {
      evNamesProper[i] = "Spe";
    }
  }
  return evNamesProper;
}

function getEVNames(setNames, setDetails) {
  let evNamesList = [];
  for (let i = 0; i < setNames.length; i++) {
    const namesEVsSet = Object.keys(setDetails[i].evs);
    evNamesProper = convertEVFormats(namesEVsSet);
    evNamesList[i] = evNamesProper;
  }
  return evNamesList;
}

function getEVValues(setNames, setDetails) {
  let evList = [];
  for (let i = 0; i < setNames.length; i++) {
    const evsSet = Object.values(setDetails[i].evs);
    evList[i] = evsSet;
  }
  return evList;
}

function getEVSpreads(namesEVs, valuesEVs) {
  let evSpreads = [];
  for (let i = 0; i < namesEVs.length; i++) {
    let evSpread = "";
    for (let j = 0; j < namesEVs[i].length; j++) {
      if (j == namesEVs[i].length - 1) {
        evSpread = evSpread + valuesEVs[i][j] + " " + namesEVs[i][j];
      }
      else {
        evSpread = evSpread + valuesEVs[i][j] + " " + namesEVs[i][j] + " / ";
      }
    }
    evSpreads[i] = evSpread;
  }
  return evSpreads;
}

function reformatEVSpreads(oldSpreadList) {
  const newSpreads = [];
  const evStats = ["HP", "Atk", "Def", "SpA", "SpD", "Spe"];
  for (let i = 0; i < oldSpreadList.length; i++) {
    const natureAndEVs = oldSpreadList[i].split(":");
    const nature = natureAndEVs[0];
    let evSpreadString = nature + ", ";
    const evs = natureAndEVs[1];
    const evsSplit = evs.split("/");
    for (let j = 0; j < evsSplit.length; j++) {
      if (evsSplit[j] != "0") {
        if (j == evsSplit.length - 1) {
          evSpreadString = evSpreadString + evsSplit[j] + " " + evStats[j];
        }
        else {
          evSpreadString = evSpreadString + evsSplit[j] + " " + evStats[j] + " / ";
        }
      }
    }
    if (evSpreadString.slice(-3) == " / ") {
      evSpreadString = evSpreadString.slice(0, -3);
    }
    newSpreads[i] = evSpreadString;
    newSpreads[i] = evSpreadString;
  }
  return newSpreads;
}

function getNonExistantTierFlag(nonexistantGenTiers, genPlusTier) {
  let nonexistantTierFlag = false;
  if (nonexistantGenTiers.includes(genPlusTier)) {
    nonexistantTierFlag = true;
  }
  return nonexistantTierFlag;
}

//Schwartzian transform method to sort dictionary by value
function sortDictByValue(dict) {
  const items = Object.keys(dict).map(function(key) {
    return [key, dict[key]];
  });
  items.sort(function(first, second) {
    return second[1] - first[1];
  });
  let sortedDict={}
  items.forEach( function(v) {
    const useKey = v[0]
    const useValue = v[1]
    sortedDict[useKey] = useValue
  })
  return sortedDict;
}

function getGenTierSearch(genPlusTier) {
  let genTierSearch = "";
  if (genPlusTier == "6ru" || genPlusTier == "6nu" || genPlusTier == "6lc") {
    genTierSearch = genPlusTier.slice(1);
  }
  else {
    genTierSearch = "gen" + genPlusTier;
  }
  return genTierSearch;
}

function getTierFromString(format) {
  const chars = format.split("");
  const tierChars = chars.slice(1);
  const tier = tierChars.join('');
  return tier;
}

function getGenFromString(format) {
  const chars = format.split("");
  const gen = chars[0];
  return gen;
}

function getDate(yearMonth) {
  const yearAndDate = yearMonth.split("-");
  const year = yearAndDate[0];
  const yearLastTwoNums = year.slice(-2);
  let dateNum = yearAndDate[1];
  if (dateNum.split("")[0] == "0") {
    dateNum = dateNum.slice(1);
  }
  const date = dateNum+"/"+yearLastTwoNums;
  return date;
}

function getStats(monDetails, keyword) {
  let monAndStatPercentDict = {};
  let weightedStatTotal = 0;
    const items = Object.keys(monDetails[keyword]);
    for (const item of items) {
      weightedStatTotal = weightedStatTotal + monDetails[keyword][item];
    }
    for (const item of items) {
      if (keyword == "Moves") {
        if (((monDetails[keyword][item] / weightedStatTotal) * 400) >= 0.5) {
          monAndStatPercentDict[movesDex[item]] = ((monDetails[keyword][item] / weightedStatTotal) * 400).toFixed(3);
        }
      }
      else {
        if (keyword == "Abilities") {
          monAndStatPercentDict[abilityDex[item]] = ((monDetails[keyword][item] / weightedStatTotal) * 100).toFixed(3);
        }
        else if (keyword == "Items") {
          if (((monDetails[keyword][item] / weightedStatTotal) * 100) >= 0.5) {
            monAndStatPercentDict[itemsDex[item]] = ((monDetails[keyword][item] / weightedStatTotal) * 100).toFixed(3);
          }
        }
        else {
          if (((monDetails[keyword][item] / weightedStatTotal) * 100) >= 0.5) {
            monAndStatPercentDict[item] = ((monDetails[keyword][item] / weightedStatTotal) * 100).toFixed(3);
          }
        }
      }
    }
    monAndStatPercentDict = sortDictByValue(monAndStatPercentDict);
    if (keyword == "Spreads") {
      const oldSpreads = Object.keys(monAndStatPercentDict);
      const reformattedSpreads = reformatEVSpreads(Object.keys(monAndStatPercentDict));
      for (let i = 0; i < reformattedSpreads.length; i++) {
        if (oldSpreads[i] !== reformattedSpreads[i]) {
          Object.defineProperty(monAndStatPercentDict, reformattedSpreads[i],
            Object.getOwnPropertyDescriptor(monAndStatPercentDict, oldSpreads[i]));
          delete monAndStatPercentDict[oldSpreads[i]];
      }
      }
    }
  return monAndStatPercentDict;
}

function getTeammatesOld(allDetails, monDetails, cap) {
  //create dictionary of all teammates and their json values
  const teammateNames = Object.keys(monDetails["Teammates"]);
  let teammates = {};
  for (const teammate of teammateNames) {
    if (Object.keys(allDetails).includes(teammate)) {
      teammates[teammate] = monDetails["Teammates"][teammate];
    }
  }

  //calculate usageCount of searched Pokemon
  const abilities = Object.keys(monDetails["Abilities"]);
  let abilitiesTotal = 0;
  for (const ability of abilities) {
    abilitiesTotal = abilitiesTotal + monDetails["Abilities"][ability];
  }
  const usageCount = abilitiesTotal;

  //calculate teammatePercent
  //teammatePercent = ((teammate json value)/usageCount) * 100 + (teammateUsagePercent * 100)
  //add teammate name and percent to temporary dictionary
  let tempTeammates = {};
  for (const teammate of Object.keys(teammates)) {
    const teammateUsagePercent = allDetails[teammate]["usage"];
    const teammatePercent = ((teammates[teammate] / usageCount) * 100) + (teammateUsagePercent * 100);
    tempTeammates[teammate] = teammatePercent.toFixed(3);
  }

  //sort temp dictionary based on percent and put top teammates (based on cap) in new dictionary
  const sortedTempTeammates = sortDictByValue(tempTeammates);
  sortedTempTeammateNames = Object.keys(sortedTempTeammates);
  sortedTempTeammateValues = Object.values(sortedTempTeammates);
  let topTeammates = {};
  for (let i = 0; i < Object.keys(sortedTempTeammates).length; i++) {
    topTeammates[sortedTempTeammateNames[i]] = sortedTempTeammateValues[i];
  }

  return topTeammates;
}

function getTeammatesNew(monDetails, cap) {
  //order teammates based on value, then get all top teammates up to the cap
  //dictionary of top teammates and their values
  const sortedTeammates = sortDictByValue(monDetails["Teammates"]);
  sortedTeammateNames = Object.keys(sortedTeammates);
  sortedTeammateValues = Object.values(sortedTeammates);
  let topTeammates = {};
  for (let i = 0; i < cap; i++) {
    topTeammates[sortedTeammateNames[i]] = sortedTeammateValues[i];
  }

  //calculate usageCount of searched Pokemon
  const abilities = Object.keys(monDetails["Abilities"]);
  let abilitiesTotal = 0;
  for (const ability of abilities) {
    abilitiesTotal = abilitiesTotal + monDetails["Abilities"][ability];
  }
  const usageCount = abilitiesTotal;

  let monAndTeammatePercentDict = {};
  const teammates = Object.keys(topTeammates);
  for (const teammate of teammates) {
    //calculate teammatePercent
    const teammatePercent = (topTeammates[teammate] / usageCount) * 100;

    //add teammate name and percent to dictionary
    monAndTeammatePercentDict[teammate] = teammatePercent.toFixed(3);
  }
  return monAndTeammatePercentDict;
}

function getRank(allDetails, pokemon) {
  let usagesAndRanks = {};
  for (const mon of Object.keys(allDetails)) {
    usagesAndRanks[mon] = [allDetails[mon].usage]
  }
  usagesAndRanks = sortDictByValue(usagesAndRanks);
  
  pokemonList = Object.keys(usagesAndRanks);
  for (let i = 0; i < pokemonList.length; i++) {
    usagesAndRanks[pokemonList[i]].push(i);
  }
  const rank = usagesAndRanks[pokemon][1] + 1;
  return rank;
}

function compareDates(yearMonth) {
  const dateStr = yearMonth+'-01';
  const [year, month, day] = dateStr.split('-');
  const date = new Date(+year, month - 1, +day);
  const dateThreshold = new Date("May 5, 2021");
  if (date > dateThreshold) {
    return true;
  }
  else {
    return false;
  }
}

function getYearMonth(genPlusTier) {
  let yearMonth = "";
  switch (genPlusTier) {
    case "5nu": case "5uu": case "6pu": 
      yearMonth = "2022-04";
      break;
    case "4uu": case "5pu": case "7lc": 
      yearMonth = "2022-03";
      break;
    case "1nu": case "3uu": case "4ubers": 
      yearMonth = "2022-02";
      break;
    case "2uu": case "5lc": 
      yearMonth = "2022-01";
      break;
    case "1uu":
      yearMonth = "2021-12";
      break;
    case "6ubers":
      yearMonth = "2021-11";
      break;
    case "5ubers": case "7pu": 
      yearMonth = "2021-10";
      break;
    case "3ubers":
      yearMonth = "2021-08";
      break;
    case "2ubers": case "5ru": 
      yearMonth = "2021-07";
      break;
    case "1ubers": case "3nu": case "7uu": 
      yearMonth = "2021-06";
      break;
    case "4nu": 
      yearMonth = "2020-11";
      break;
    case "2nu": case "7nu": 
      yearMonth = "2020-01";
      break;
    case "4lc": 
      yearMonth = "2019-10";
      break;
    case "4pu": 
      yearMonth = "2018-12";
      break;
    case "6ru": case "6nu": case "6lc": 
      yearMonth = "2017-01";
      break;
    default: 
      yearMonth = "2022-05";
  };
  return yearMonth;
}

function getELO(genPlusTier, rating) {
  let elo = "";
  if (genPlusTier == "8ou") {
    if (rating == "Skilled") {
      elo = "1695";
    }
    if (rating == "Expert") {
      elo = "1825";
    }
  }
  else {
    if (rating == "Beginner") {
      elo = "0";
    }
    if (rating == "Average") {
      elo = "1500";
    }
    if (rating == "Skilled") {
      elo = "1630";
    }
    if (rating == "Expert") {
      elo = "1760";
    }
  }
  return elo;
}

function getPokemonLowerCase(pokemon) {
  let pokemonLowerCase = "";
  if (pokemon == "Mr. Mime") {
    pokemonLowerCase = "mrmime"
  }
  else if (pokemon == "Mr. Mime-Galar") {
    pokemonLowerCase = "mrmime-galar"
  }
  else if (pokemon == "Mr. Rime") {
    pokemonLowerCase = "mrrime"
  }
  else if (pokemon == "Mime Jr.") {
    pokemonLowerCase = "mimejr"
  }
  else if (pokemon == "Farfetch'd") {
    pokemonLowerCase = "farfetchd"
  }
  else if (pokemon == "Sirfetch'd") {
    pokemonLowerCase = "sirfetchd"
  }
  else if (pokemon == "Charizard-Mega-X") {
    pokemonLowerCase = "charizard-megax"
  }
  else if (pokemon == "Charizard-Mega-Y") {
    pokemonLowerCase = "charizard-megay"
  }
  else if (pokemon == "Mewtwo-Mega-X") {
    pokemonLowerCase = "mewtwo-megax"
  }
  else if (pokemon == "Mewtwo-Mega-Y") {
    pokemonLowerCase = "mewtwo-megay"
  }
  else if (pokemon == "Zygarde-10%") {
    pokemonLowerCase = "zygarde-10"
  }
  else if (pokemon == "Zygarde-Complete") {
    pokemonLowerCase = "zygarde-complete"
  }
  else if (pokemon == "Darmanitan-Galar-Zen") {
    pokemonLowerCase = "darmanitan-galarzen"
  }
  else if (pokemon == "Oricorio-Pau'") {
    pokemonLowerCase = "oricorio-pau"
  }
  else if (pokemon == "Oricorio-Pom-Pom") {
    pokemonLowerCase = "oricorio-pompom"
  }
  else if (pokemon == "Type: Null") {
    pokemonLowerCase = "typenull"
  }
  else if (pokemon == "Necrozma-Dawn-Wings") {
    pokemonLowerCase = "necrozma-dawnwings"
  }
  else if (pokemon == "Necrozma-Dusk-Mane") {
    pokemonLowerCase = "necrozma-duskmane"
  }
  else if (pokemon == "Urshifu-Rapid-Strike") {
    pokemonLowerCase = "urshifu-rapidstrike"
  }
  else {
    pokemonLowerCase = pokemon.toLowerCase();
  }
  return pokemonLowerCase;
}



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const layouts = require("express-ejs-layouts");
const axios = require('axios');
const genDex = require('./data/genDex');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

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
    
    const tiersIn = []
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

// app.get('/test',
// (req,res,next) => {
//   res.render('test')
// });

// app.post('/test',
// async (req,res,next) => {
//   const {pokemon, tier, generation} = req.body;
//   res.locals.pokemon = pokemon;
//   res.locals.pokemonLowercase = getPokemonLowerCase(pokemon);
//   res.locals.tier = tier;
//   res.locals.generation = generation;

//   const genCheckResponse = await axios.get('https://pokeapi.glitch.me/v1/pokemon/'+res.locals.pokemonLowercase)
//   console.dir(genCheckResponse.data.length);
//   res.locals.minGen = genCheckResponse.data[0].gen;

//     res.render('showTest')
//   //}
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

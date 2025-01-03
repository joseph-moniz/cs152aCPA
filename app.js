var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const layouts = require("express-ejs-layouts");

const helper = require('./helper/helperFunctions');

//load all custom dictionaries used in app
const genDex = require('./data/genDex');
const abilityDex = require('./data/abilityDex');
const itemsDex = require('./data/itemsDex');
const movesDex = require('./data/movesDex');
const genTierSetsDex = require('./data/genTierSetsDex');
const spriteIconDex = require('./data/spriteIconDex');
const typesDex = require('./data/typesDex');
const typeChart = require('./data/typeChart');

const abilitiesRaw = require('./data/abilitiesRaw');
const itemsRaw = require('./data/itemsRaw');

const missingSprites = require('./data/missingSpritesList.js');

const totalGenNum = 9;

const axios = require('axios');
const auth = require('./routes/auth');
const session = require("express-session"); 
const MongoDBStore = require('connect-mongodb-session')(session);


// *********************************************************** //
//  Loading models
// *********************************************************** //
const Member = require('./models/Member');

// *********************************************************** //
//  Connecting to the database
// *********************************************************** //

const mongoose = require( 'mongoose' );
//const mongodb_URI = 'mongodb://localhost:27017/cs103a_todo'
//const mongodb_URI = 'mongodb://localhost:27017'

const mongodb_URI = 'mongodb+srv://jmoniz:hellosir@cluster0.n2wmy.mongodb.net/?retryWrites=true&w=majority'
// const mongodb_URI = process.env.mongodb_URI

mongoose.connect( mongodb_URI, { useNewUrlParser: true, useUnifiedTopology: true } );
// fix deprecation warnings
//mongoose.set('useFindAndModify', false); 
//mongoose.set('useCreateIndex', true);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("we are connected!!!")});

// middleware to test if the user is logged in, and if not, send them to the login page
const isLoggedIn = (req,res,next) => {
  if (res.locals.loggedIn) {
    next()
  }
  else res.redirect('/login')
}


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//const { randomFill } = require('crypto');

var app = express();

var store = new MongoDBStore({
  uri: mongodb_URI,
  collection: 'mySessions'
});

// Catch errors
store.on('error', function(error) {
  console.log(error);
});

app.use(require('express-session')({
  secret: 'This is a secret 7f89a789789as789f73j2krklfdslu89fdsjklfds',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  // Boilerplate options, see:
  // * https://www.npmjs.com/package/express-session#resave
  // * https://www.npmjs.com/package/express-session#saveuninitialized
  resave: true,
  saveUninitialized: true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(layouts)
app.use(auth)
app.use('/', indexRouter);
app.use('/users', usersRouter);


// ******************************************************************************************************************//

//All pages and data loaded in them

// ******************************************************************************************************************//
//Print Data page for admin use only
//designed to update the custom dictionaries used by getting updated information from the Smogon API and making it a proper format

app.get('/printData',
(req,res,next) => {
  res.render('printData')
});

app.post('/printData',
async (req,res,next) => {
  const {dataType} = req.body;
  res.locals.dataType = dataType;
  const generationsTeambuilder = ["6", "7", "8", "9"];
  const tiers = ["Ubers", "OU", "UU", "RU", "NU", "PU", "LC"];
  let updatedData = {};
  if (dataType == "abilities") {
    updatedData = getDictionaryFromDataType(dataType, abilitiesRaw);
  } else if (dataType == "items") {
      updatedData = getDictionaryFromDataType(dataType, itemsRaw);
  } else if (dataType == "moves") {
      const response = await axios.get('https://play.pokemonshowdown.com/data/moves.json');
      const currentData = response.data;
      updatedData = getDictionaryFromDataType(dataType, currentData);
  } else if (dataType == "pokemonTypes") {
      const response = await axios.get('https://play.pokemonshowdown.com/data/pokedex.json');
      const currentData = response.data
      updatedData = getDictionaryFromDataType(dataType, currentData);
  } else if (dataType == "pokemonSpriteIconDex") {
      updatedData = getDictionaryFromDataType(dataType, genDex);
  } else if (dataType == "genTierSetsDex") {
      const validTiersTeambuilder = ["gen6ubers", "gen6ou", "gen6uu", "gen6ru", "gen6nu", "gen6pu", "gen6lc", 
      "gen7ubers", "gen7ou", "gen7uu", "gen7ru", "gen7nu", "gen7pu", "gen7lc", "gen8ubers", "gen8ou", "gen8uu", "gen8ru", "gen8nu", "gen8pu", "gen8lc", 
      "gen9ubers", "gen9ou", "gen9uu", "gen9ru", "gen9nu", "gen9pu", "gen9lc"]

      let genTierSetsAll = {};
      for (const gen of generationsTeambuilder) {
        const response = await axios.get('https://play.pokemonshowdown.com/data/sets/gen'+gen+'.json');
        const currentData = response.data;
        genTierSetsAll[gen] = currentData;
      }
      const genTierSetsDexDraft = generateNewGenTierSetsDex(generationsTeambuilder, validTiersTeambuilder, genTierSetsAll);
      updatedData = updateGenTierSetsDexInfo(genTierSetsDexDraft);
      
  } else if (dataType == "blankSets") {
      updatedData = getBlankSetsFromDex(generationsTeambuilder, genTierSetsDex);
  }
  
    // const genPlusTier = generation+tier.toLowerCase(); //format for URL during API fetch
    
    
    // const response = await axios.get('https://play.pokemonshowdown.com/data/sets/gen'+genPlusTier+'.json')
    // console.dir(response.data.length)
    

    // ********************************** //
    // this is the function that was used to generate the Pokemon set names for tiers in gens 6-8 for the genTierSetIndex.
    // used for debugging or updating the dictionary

    // let setNameDict = {};
    // for (const mon of Object.keys(response.data.dex).sort()) {
    //   theSets = Object.keys(response.data.dex[mon]);
    //   setNameDict[mon] = theSets;
    // }
    // let tierDict = {};
    // tierDict[tier] = setNameDict;
    // let genDict = {};
    // genDict[generation] = tierDict;
    // res.locals.tierDict = tierDict;
    // res.locals.genDict = genDict;
    // res.locals.genTierSetsDex = genTierSetsDex;
    // ********************************** //


  //res.locals.test = helper.testFunction("1","2");
  res.locals.generationsTeambuilder = generationsTeambuilder;
  res.locals.tiers = tiers;
  res.locals.updatedData = updatedData;
  res.render('showPrintData')
})

// ******************************************************************************************************************//


app.get('/sets',
(req,res,next) => {
  //keys of genDex is a list of all Pokemon names, used for the autocomplete feature when typing a Pokemon name
  res.locals.allMonNames = Object.keys(genDex);
  res.render('sets')
});

app.post('/sets',
async (req,res,next) => {
  const {pokemon, tier, generation} = req.body;
  res.locals.correctNameFormatCheck = Object.keys(genDex).includes(pokemon);

  //only look for information if the name the user inputs for the Pokemon is a valid Pokemon name
  if (res.locals.correctNameFormatCheck) {
    res.locals.pokemon = pokemon;
    res.locals.tier = tier;
    res.locals.generation = generation;
    const genPlusTier = generation+tier.toLowerCase(); //format for URL during API fetch
    const tiers = ["Ubers", "OU", "UU", "RU", "NU", "PU", "LC"];
    const nonexistantGenTiers = ["4ru", "3ru", "2ru", "1ru", "3pu", "2pu", "1pu", "3lc", "2lc", "1lc"];

    let pokemonLowerCase = getPokemonLowerCase(pokemon);
    //check to see if the Pokemon has an animated sprite in generation 9
    //if it does not, flag it as true to use backup sprite and use alternate lowercase name
    let missingSpriteCheck = false;
    if (generation == "9") {
      if (missingSprites.list.includes(pokemon)) {
        missingSpriteCheck = true;
        pokemonLowerCase = getPokemonLowerCaseBackupSprite(pokemon);
      }
    }
    res.locals.missingSpriteCheck = missingSpriteCheck;
    res.locals.pokemonLowercase = pokemonLowerCase; //format for URL when generating images of Pokemon

    //check if the user inputted generation and tier is a valid format and not in nonexistantGenTiers array
    res.locals.nonexistantTierFlag = getNonExistantTierFlag(nonexistantGenTiers, genPlusTier);
    res.locals.minGen = genDex[pokemon];

    //generate an array of all tiers the Pokemon is in for error message when the Pokemon chosen is not in the tier chosen
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
    
    //only look for information on user-inputted Pokemon if the tier exists and the generation the Pokemon is the same generation
    //or a generation that comes after the first generation the Pokemon existed in
    if (res.locals.nonexistantTierFlag == false && generation >= res.locals.minGen) {

      const response = await axios.get('https://play.pokemonshowdown.com/data/sets/gen'+genPlusTier+'.json')
      console.dir(response.data.length)
      genTierSets = response.data.dex[pokemon];

      // ********************************** //
      // this is the function that was used to generate the Pokemon set names for tiers in gens 6-8 for the genTierSetIndex.
      // used for debugging or updating the dictionary

      // let setNameDict = {};
      // for (const mon of Object.keys(response.data.dex).sort()) {
      //   theSets = Object.keys(response.data.dex[mon]);
      //   setNameDict[mon] = theSets;
      // }
      // let tierDict = {};
      // tierDict[tier] = setNameDict;
      // let genDict = {};
      // genDict[generation] = tierDict;
      // res.locals.tierDict = tierDict;
      // res.locals.genDict = genDict;
      // res.locals.genTierSetsDex = genTierSetsDex;
      // ********************************** //

      if (genTierSets != null) {
        sets = Object.keys(genTierSets);
        setDetails = Object.values(genTierSets);
        //generations 1-2 did not have EVs for Pokemon, so they are not calculated if generation = 1 or 2
        if (generation > 2) {
          //the format of the EVs in the API is weird
          //these methods alter the format so it is in the usual format for viewing competitive Pokemon sets
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
  //keys of genDex is a list of all Pokemon names, used for the autocomplete feature when typing a Pokemon name
  res.locals.allMonNames = Object.keys(genDex);
  res.render('allSets')
});

app.post('/allSets',
async (req,res,next) => {
  const {pokemon, generation} = req.body;
  res.locals.correctNameFormatCheck = Object.keys(genDex).includes(pokemon);

  //only look for information if the name the user inputs for the Pokemon is a valid Pokemon name
  if (res.locals.correctNameFormatCheck) {
    res.locals.pokemon = pokemon;
    res.locals.generation = generation;
    res.locals.minGen = genDex[pokemon];
    const tiers = ["Ubers", "OU", "UU", "RU", "NU", "PU", "LC"];
    const nonexistantGenTiers = ["4ru", "3ru", "2ru", "1ru", "3pu", "2pu", "1pu", "3lc", "2lc", "1lc"];

    let pokemonLowerCase = getPokemonLowerCase(pokemon); //format for URL when generating images of Pokemon
    //check to see if the Pokemon has an animated sprite in generation 9
    //if it does not, flag it as true to use backup sprite and use alternate lowercase name
    let missingSpriteCheck = false;
    if (generation == "9") {
      if (missingSprites.list.includes(pokemon)) {
        missingSpriteCheck = true;
        pokemonLowerCase = getPokemonLowerCaseBackupSprite(pokemon);
      }
    }
    res.locals.missingSpriteCheck = missingSpriteCheck;
    res.locals.pokemonLowercase = pokemonLowerCase; //format for URL when generating images of Pokemon


    //array to hold all the sets for all of the tiers the Pokemon is in
    //this array has 7 indexes, 1 for each tier
    let allTierSets = [];
    
    if (generation >= res.locals.minGen) {
      //loop over all tiers in a generation
      for(let i = 0; i < tiers.length; i++) {
        const tierLowercase = tiers[i].toLowerCase();
        const genPlusTier = generation + tierLowercase;
        let tierSets = [];
        //if the tier does not exist, the index corresponding to that tier is empty
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
            //generations 1-2 did not have EVs for Pokemon, so they are not calculated if generation = 1 or 2
            if (generation > 2) {
              //reformat EVs
              const evNames = getEVNames(sets, setDetails);
              const evValues = getEVValues(sets, setDetails);
              evSpreads = getEVSpreads(evNames, evValues);
            }
            //add to big array a smaller array that contains the tier name, the sets, set details, and EV spreads
            //the indexes for the last 3 are all the same, so index 0 of sets, setDetails, and evSpreads would be the
            //set name, set details, and EV spread of the first set for the Pokemon
            tierSets = [tiers[i], sets, setDetails, evSpreads]
          }
          else {
            //if the Pokemon does not have a set in the tier, the index for that tier in the big array is empty
            allTierSets[i] = [];
          }
          allTierSets[i] = tierSets;
        }
      }
    }
    //filters out all empty indexes, leaving only the tiers the Pokemon is in and the corresponding information
    res.locals.allTierSetsList = allTierSets.filter(e => e.length);
  }
  res.render('showAllSets')
})

app.get('/allSetsGenerations',
(req,res,next) => {
  //keys of genDex is a list of all Pokemon names, used for the autocomplete feature when typing a Pokemon name
  res.locals.allMonNames = Object.keys(genDex);
  res.render('allSetsGenerations')
});

app.post('/allSetsGenerations',
async (req,res,next) => {
  const {pokemon} = req.body;
  res.locals.correctNameFormatCheck = Object.keys(genDex).includes(pokemon);

  //only look for information if the name the user inputs for the Pokemon is a valid Pokemon name
  if (res.locals.correctNameFormatCheck) {
    res.locals.pokemon = pokemon;
    const minGen = genDex[pokemon];
    res.locals.minGen = minGen;
    const tiers = ["Ubers", "OU", "UU", "RU", "NU", "PU", "LC"];
    const nonexistantGenTiers = ["4ru", "3ru", "2ru", "1ru", "3pu", "2pu", "1pu", "3lc", "2lc", "1lc"];

    let pokemonLowerCase = getPokemonLowerCase(pokemon); //format for URL when generating images of Pokemon
    //check to see if the Pokemon has an animated sprite in generation 9
    //if it does not, flag it as true to use backup sprite and use alternate lowercase name
    let missingSpriteCheck = false;
    if (minGen == "9") {
      if (missingSprites.list.includes(pokemon)) {
        missingSpriteCheck = true;
        pokemonLowerCase = getPokemonLowerCaseBackupSprite(pokemon);
      }
    }
    res.locals.missingSpriteCheck = missingSpriteCheck;
    res.locals.pokemonLowercase = pokemonLowerCase; //format for URL when generating images of Pokemon


    let allTiersGenerationsSets = {};
    let genList = [];
    let currentGen = parseInt(minGen);
    //find all the sets for every generation the Pokemon is in
    for (let i = 0; i < totalGenNum - minGen + 1; i++) {

    //array to hold all the sets for all of the tiers the Pokemon is in
    //this array has 7 indexes, 1 for each tier
      let allTierSets = [];

      //loop over all tiers in a generation
      for (let j = 0; j < tiers.length; j++) {
        const tierLowercase = tiers[j].toLowerCase();
        const genPlusTier = currentGen.toString() + tierLowercase;
        let tierSets = [];
        // //if the tier does not exist, the index corresponding to that tier is empty
        if (nonexistantGenTiers.includes(genPlusTier)) {
          allTierSets[j] = [];
        }
        else {
          const response = await axios.get('https://play.pokemonshowdown.com/data/sets/gen'+genPlusTier+'.json')
          console.dir(response.data.length)
          const genTierSets = response.data.dex[pokemon];
          if (genTierSets != null) {
            const sets = Object.keys(genTierSets);
            const setDetails = Object.values(genTierSets);
            let evSpreads = null;
            //generations 1-2 did not have EVs for Pokemon, so they are not calculated if generation = 1 or 2
            if (currentGen > 2) {
              //reformat EVs
              const evNames = getEVNames(sets, setDetails);
              const evValues = getEVValues(sets, setDetails);
              evSpreads = getEVSpreads(evNames, evValues);
            }
            //add to big array a smaller array that contains the tier name, the sets, set details, and EV spreads
            //the indexes for the last 3 are all the same, so index 0 of sets, setDetails, and evSpreads would be the
            //set name, set details, and EV spread of the first set for the Pokemon
            tierSets = [tiers[j], sets, setDetails, evSpreads]
          }
          else {
            //if the Pokemon does not have a set in the tier, the index for that tier in the big array is empty
            allTierSets[j] = [];
          }
          allTierSets[j] = tierSets;
        }
      }
      //filters out all empty indexes, leaving only the tiers the Pokemon is in and the corresponding information

      const allTierSetsList = allTierSets.filter(e => e.length);
      allTiersGenerationsSets[currentGen.toString()] = allTierSetsList;
      genList[i] = currentGen.toString();
      currentGen++;
    }

    res.locals.totalGenNum = totalGenNum;
    res.locals.allTiersGenerationsSets = allTiersGenerationsSets;
    res.locals.genList = genList;
  }
  res.render('showAllSetsGenerations')
})

app.get('/usageStatsTier',
(req,res,next) => {
  res.render('usageStatsTier')
});

app.post('/usageStatsTier',
async (req,res,next) => {
  //get information that is used
  const {format, rating} = req.body;
  const generation = getGenFromString(format);
  const tier = getTierFromString(format);
  const genPlusTier = generation + tier.toLowerCase(); //for API search
  const genTierSearch = getGenTierSearch(genPlusTier);
  const elo = getELO(genPlusTier, rating); //for API search and results page
  
  
  //calculates the most recent reliable data Smogon has for the given tier and generation
  //data is skipped if there were less than 100 battles

  //temporarily start at the most recent date (1 month previous from current date)
  //if the link is not valid, keep going back until the most recent date for the generation and tier
  const startingYearMonth = getStartingYearMonthData();
  let yearMonthTemp = startingYearMonth;
  let validFormatsTemp = await getValidFormats(yearMonthTemp)
  
  //with this temporary starting point, keep checking previous data until there is one that includes more than 100 battles
  while (!validFormatsTemp.includes(genTierSearch+'-'+elo+'.json')) {
    yearMonthTemp = updateYearMonth(yearMonthTemp);
    validFormatsTemp = await getValidFormats(yearMonthTemp);
  }
  let responseYearMonth = await axios.get('https://www.smogon.com/stats/'+yearMonthTemp+'/chaos/'+genTierSearch+'-'+elo+'.json');
  let numBattlesTemp = responseYearMonth.data.info["number of battles"]; 
  while (validFormatsTemp.includes(genTierSearch+'-'+elo+'.json') && numBattlesTemp < 100 || !validFormatsTemp.includes(genTierSearch+'-'+elo+'.json')) {
    yearMonthTemp = updateYearMonth(yearMonthTemp);
    validFormatsTemp = await getValidFormats(yearMonthTemp);
    if (validFormatsTemp.includes(genTierSearch+'-'+elo+'.json')) {
      responseYearMonth = await axios.get('https://www.smogon.com/stats/'+yearMonthTemp+'/chaos/'+genTierSearch+'-'+elo+'.json');
      numBattlesTemp = responseYearMonth.data.info["number of battles"];
    }
  }
  const yearMonth = yearMonthTemp; //for API search and results page
  const numBattles = numBattlesTemp; //for results page
  
  res.locals.rating = rating;
  res.locals.elo = elo;
  res.locals.generation = generation;
  res.locals.tier = tier;
  res.locals.date = yearMonth;
  res.locals.numBattles = numBattles;
  
  const response = await axios.get('https://www.smogon.com/stats/'+yearMonth+'/chaos/'+genTierSearch+'-'+elo+'.json')
  console.dir(response.data.length);
  const usageData = response.data.data;
  const monsList = Object.keys(usageData);
  const monsDetails = Object.values(usageData);
  res.locals.numBattles = numBattles.toLocaleString();

  let monAndUsagePercentDict = {};
  let filteredMonsList = [];
  let filteredUsages = [];
  let filteredIndex = 0;
  
  //only keep the names and usage percentages of Pokemon that have more than 0.5% usage
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


  //sort dictionary by usage percentage
  monAndUsagePercentDict = sortDictByValue(monAndUsagePercentDict);

  //keys of now sorted dictionary is a list of Pokemon in the tier with > 0.5% usage ordered by usage percent
  const sortedMonsList = Object.keys(monAndUsagePercentDict);
  res.locals.sortedMonsList = sortedMonsList;
  res.locals.monAndUsagePercentDict = monAndUsagePercentDict;


  //calculates the most recent reliable data Smogon has for the given tier and generation
  //data is skipped if there were less than 100 battles
  //this one is used to find the rank delta and usage % delta, which requires doing the loop for every Pokemon from the starting tier results

  //temporarily start at the most recent date (1 month previous from current date)
  //if the link is not valid, keep going back until the most recent date for the generation and tier
    
  const previousDataStartingYearMonth = updateYearMonth(yearMonth);
  let previousDataYearMonthTemp = previousDataStartingYearMonth;
  let previousDataValidFormatsTemp = await getValidFormats(previousDataYearMonthTemp);

  //with this temporary starting point, keep checking previous data until there is one that includes more than 100 battles
  while (!previousDataValidFormatsTemp.includes(genTierSearch+'-'+elo+'.json')) {
    previousDataYearMonthTemp = updateYearMonth(previousDataYearMonthTemp);
    previousDataValidFormatsTemp = await getValidFormats(previousDataYearMonthTemp);
  }
  let previousDataResponseYearMonth = await axios.get('https://www.smogon.com/stats/'+previousDataYearMonthTemp+'/chaos/'+genTierSearch+'-'+elo+'.json');
  let previousDataNumBattlesTemp = previousDataResponseYearMonth.data.info["number of battles"]; 
  while (previousDataValidFormatsTemp.includes(genTierSearch+'-'+elo+'.json') && previousDataNumBattlesTemp < 100 || !previousDataValidFormatsTemp.includes(genTierSearch+'-'+elo+'.json')) {
    previousDataYearMonthTemp = updateYearMonth(previousDataYearMonthTemp);
    previousDataValidFormatsTemp = await getValidFormats(previousDataYearMonthTemp);
    if (previousDataValidFormatsTemp.includes(genTierSearch+'-'+elo+'.json')) {
      previousDataResponseYearMonth = await axios.get('https://www.smogon.com/stats/'+previousDataYearMonthTemp+'/chaos/'+genTierSearch+'-'+elo+'.json');
      previousDataNumBattlesTemp = previousDataResponseYearMonth.data.info["number of battles"];
    }
  }

  const previousDataYearMonth = previousDataYearMonthTemp; //for API search and results page
  res.locals.previousDataYearMonth = previousDataYearMonth;
  let previousDataMonAndUsagePercentDictUnsorted = {};
  let usagePercentDeltaDict = {};
  const previousDataResponse = await axios.get('https://www.smogon.com/stats/'+previousDataYearMonth+'/chaos/'+genTierSearch+'-'+elo+'.json')
  const previousDataAllDetails = previousDataResponse.data.data
  for (const pokemon of sortedMonsList) {
    const previousDataMonDetails = previousDataAllDetails[pokemon];
    if (previousDataMonDetails != null) {
      const usagePercent = monAndUsagePercentDict[pokemon];
      const previousDataUsagePercent = previousDataMonDetails.usage * 100;
      const usagePercentDelta = usagePercent - previousDataUsagePercent;
      usagePercentDeltaDict[pokemon] = usagePercentDelta.toFixed(5);
      previousDataMonAndUsagePercentDictUnsorted[pokemon] = previousDataUsagePercent;
    }
    else {
      usagePercentDeltaDict[pokemon] = monAndUsagePercentDict[pokemon];
      previousDataMonAndUsagePercentDictUnsorted[pokemon] = 0;
    }
  }

  res.locals.usagePercentDeltaDict = usagePercentDeltaDict;
  const previousDataMonAndUsagePercentDict = sortDictByValue(previousDataMonAndUsagePercentDictUnsorted);
  const previousSortedMonsList = Object.keys(previousDataMonAndUsagePercentDict);

  let rankDeltaDict = {};
  for (const pokemon of sortedMonsList) {
    const currentRank = sortedMonsList.indexOf(pokemon) + 1;
    const previousRank = previousSortedMonsList.indexOf(pokemon) + 1;
    let rankDelta = (previousRank - currentRank); //inverted because the lower the rank, the better
    if (currentRank == -1 || previousRank == -1) {
      rankDeltaDict[pokemon] = null;
    } else {
      rankDeltaDict[pokemon] = rankDelta;
    }
  }
  res.locals.rankDeltaDict = rankDeltaDict;

  //for sprite icons
  res.locals.spriteIconDex = spriteIconDex;

  res.render('showUsageStatsTier')
})

app.get('/usageStatsMon',
(req,res,next) => {
  res.locals.allMonNames = Object.keys(genDex);
  res.render('usageStatsMon')
});

app.post('/usageStatsMon',
async (req,res,next) => {
  try {
    const {pokemon, format, rating} = req.body;
    //only look for information if the name the user inputs for the Pokemon is a valid Pokemon name
    res.locals.correctNameFormatCheck = Object.keys(genDex).includes(pokemon);

    if (res.locals.correctNameFormatCheck) {
      res.locals.rating = rating;
      res.locals.pokemon = pokemon;
    
      //determines how many moves/items/teammates etc are shown in the results page
      res.locals.cap = 10;
      const teammatesCap = 10;
      const checksAndCountersCap = 12;

      const generation = getGenFromString(format);
      const tier = getTierFromString(format);
      const genPlusTier = generation + tier.toLowerCase();
      const genTierSearch = getGenTierSearch(genPlusTier);
      const elo = getELO(genPlusTier, rating);
      const tiers = ["Ubers", "OU", "UU", "RU", "NU", "PU", "LC"];
      const nonexistantGenTiers = ["4ru", "3ru", "2ru", "1ru", "3pu", "2pu", "1pu", "3lc", "2lc", "1lc"];


      let pokemonLowerCase = getPokemonLowerCase(pokemon); //format for URL when generating images of Pokemon
      //check to see if the Pokemon has an animated sprite in generation 9
      //if it does not, flag it as true to use backup sprite and use alternate lowercase name
      let missingSpriteCheck = false;
      if (generation == "9") {
        if (missingSprites.list.includes(pokemon)) {
          missingSpriteCheck = true;
          pokemonLowerCase = getPokemonLowerCaseBackupSprite(pokemon);
        }
      }
      res.locals.missingSpriteCheck = missingSpriteCheck;
      res.locals.pokemonLowercase = pokemonLowerCase; //format for URL when generating images of Pokemon


      //calculates the most recent reliable data Smogon has for the given tier and generation
      //data is skipped if there were less than 100 battles

      //temporarily start at the most recent date (1 month previous from current date)
      //if the link is not valid, keep going back until the most recent date for the generation and tier
      const startingYearMonth = getStartingYearMonthData();
      let yearMonthTemp = startingYearMonth;
      let validFormatsTemp = await getValidFormats(yearMonthTemp)
      console.log(genTierSearch, elo)      
      //with this temporary starting point, keep checking previous data until there is one that includes more than 100 battles
      while (!validFormatsTemp.includes(genTierSearch+'-'+elo+'.json')) {
        yearMonthTemp = updateYearMonth(yearMonthTemp);
        validFormatsTemp = await getValidFormats(yearMonthTemp);
      }
      let responseYearMonth = await axios.get('https://www.smogon.com/stats/'+yearMonthTemp+'/chaos/'+genTierSearch+'-'+elo+'.json');
      let numBattlesTemp = responseYearMonth.data.info["number of battles"]; 
      while (validFormatsTemp.includes(genTierSearch+'-'+elo+'.json') && numBattlesTemp < 100 || !validFormatsTemp.includes(genTierSearch+'-'+elo+'.json')) {
        yearMonthTemp = updateYearMonth(yearMonthTemp);
        validFormatsTemp = await getValidFormats(yearMonthTemp);
        if (validFormatsTemp.includes(genTierSearch+'-'+elo+'.json')) {
          responseYearMonth = await axios.get('https://www.smogon.com/stats/'+yearMonthTemp+'/chaos/'+genTierSearch+'-'+elo+'.json');
          numBattlesTemp = responseYearMonth.data.info["number of battles"];
        }
      }
      const yearMonth = yearMonthTemp; //for API search and results page
      const numBattles = numBattlesTemp; //for results page


      const previousDataStartingYearMonth = updateYearMonth(yearMonth);
      let previousDataYearMonthTemp = previousDataStartingYearMonth;
      let previousDataValidFormatsTemp = await getValidFormats(previousDataYearMonthTemp);
      console.log(genTierSearch, elo)      
      //with this temporary starting point, keep checking previous data until there is one that includes more than 100 battles
      while (!previousDataValidFormatsTemp.includes(genTierSearch+'-'+elo+'.json')) {
        previousDataYearMonthTemp = updateYearMonth(previousDataYearMonthTemp);
        previousDataValidFormatsTemp = await getValidFormats(previousDataYearMonthTemp);
      }
      let previousDataResponseYearMonth = await axios.get('https://www.smogon.com/stats/'+previousDataYearMonthTemp+'/chaos/'+genTierSearch+'-'+elo+'.json');
      let previousDataNumBattlesTemp = previousDataResponseYearMonth.data.info["number of battles"]; 
      while (previousDataValidFormatsTemp.includes(genTierSearch+'-'+elo+'.json') && previousDataNumBattlesTemp < 100 || !previousDataValidFormatsTemp.includes(genTierSearch+'-'+elo+'.json')) {
        previousDataYearMonthTemp = updateYearMonth(previousDataYearMonthTemp);
        previousDataValidFormatsTemp = await getValidFormats(previousDataYearMonthTemp);
        if (previousDataValidFormatsTemp.includes(genTierSearch+'-'+elo+'.json')) {
          previousDataResponseYearMonth = await axios.get('https://www.smogon.com/stats/'+previousDataYearMonthTemp+'/chaos/'+genTierSearch+'-'+elo+'.json');
          previousDataNumBattlesTemp = previousDataResponseYearMonth.data.info["number of battles"];
        }
      }
      const previousDataYearMonth = previousDataYearMonthTemp; //for API search and results page
      res.locals.previousDataYearMonth = previousDataYearMonth;

      res.locals.generation = generation;
      res.locals.tier = tier;
      res.locals.elo = elo;
      res.locals.date = yearMonth;
      res.locals.numBattles = numBattles.toLocaleString();
      res.locals.minGen = genDex[pokemon];

      //generate an array of all tiers the Pokemon is in for error message when the Pokemon chosen is not in the tier chosen
      const tiersIn = [];
      let tiersInIndex = 0;
      for (const newTier of tiers) {
        const genPlusTier = generation+newTier.toLowerCase();
        const nonexistantTierFlag = getNonExistantTierFlag(nonexistantGenTiers, genPlusTier);
        if (!nonexistantTierFlag) {
          const responseTier = await axios.get('https://play.pokemonshowdown.com/data/sets/gen'+genPlusTier+'.json')
          if (responseTier.data.dex[pokemon] != null) {
            tiersIn[tiersInIndex] = newTier;
            tiersInIndex++;
          }
        }
      }
      res.locals.otherTiers = tiersIn;
      
      
      //look for information only if the Pokemon has a set in at least one tier and the generation is higher than the minimum generation
      //the Pokemon is in
      if (tiersIn.length > 0 && generation >= res.locals.minGen) {
    
        const response = await axios.get('https://www.smogon.com/stats/'+yearMonth+'/chaos/'+genTierSearch+'-'+elo+'.json')
        console.dir(response.data.length);
        const allDetails = response.data.data
        const monDetails = allDetails[pokemon];
        if (monDetails != null) {
          const usagePercent = monDetails.usage * 100;
          const rank = getRank(allDetails, pokemon);

          //pass dictionary through method that generates new dictionaries of moves/abilities/items/EV spreads and their usage percentages
          const movesSorted = getStats(monDetails, "Moves");
          const abilitiesSorted = getStats(monDetails, "Abilities");
          const itemsSorted = getStats(monDetails, "Items");
          const spreadsSorted = getStats(monDetails, "Spreads");

          //the data for the teammates percentage is represented differently for old vs new json files Smogon generates
          //the method for converting the data to percentages is thus different
          let teammatesSorted = {};
          const newEnough = compareDates(yearMonth);
          if (newEnough) {
            teammatesSorted = getTeammatesNew(monDetails, teammatesCap);
          }
          else {
            teammatesSorted = getTeammatesOld(allDetails, monDetails, teammatesCap);
          }

          //generate checks and counters info
          const checksAndCountersSorted = getChecksAndCounters(monDetails, checksAndCountersCap);
         
          const checksAndCountersTextResponse = await axios.get('https://www.smogon.com/stats/'+yearMonth+'/moveset/'+genTierSearch+'-'+elo+'.txt')
          const checksAndCountersTextData = checksAndCountersTextResponse.data;
          let checksAndCountersTextDataSplit = checksAndCountersTextData.split("+----------------------------------------+");
          const textMonIndex = getNameIndexFromCCText(checksAndCountersTextDataSplit, pokemon);
          const checksAndCountersKOAndSwitchData = getKOAndSwitchedDataFromCCText(checksAndCountersTextDataSplit, textMonIndex);
          res.locals.checksAndCountersKOAndSwitchData = checksAndCountersKOAndSwitchData;


          res.locals.monDetails = monDetails;
          res.locals.usagePercent = usagePercent.toFixed(5);
          res.locals.rank = rank;
          res.locals.moves = Object.keys(movesSorted);
          res.locals.abilities = Object.keys(abilitiesSorted);
          res.locals.items = Object.keys(itemsSorted);
          res.locals.spreads = Object.keys(spreadsSorted);
          res.locals.teammates = Object.keys(teammatesSorted);
          res.locals.checksAndCounters = Object.keys(checksAndCountersSorted);
          res.locals.movesStats = movesSorted;
          res.locals.abilitiesStats = abilitiesSorted;
          res.locals.itemsStats = itemsSorted;
          res.locals.spreadsStats = spreadsSorted;
          res.locals.teammatesStats = teammatesSorted;
          res.locals.checksAndCountersStats = checksAndCountersSorted;

        }
        else {

          res.locals.monDetails = {};
          res.locals.usagePercent = 0
          res.locals.rank = 0;
          res.locals.moves = [];
          res.locals.abilities = [];
          res.locals.items = [];
          res.locals.spreads = [];
          res.locals.teammates = [];
          res.locals.checksAndCounters = [];
          res.locals.movesStats = {};
          res.locals.abilitiesStats = {};
          res.locals.itemsStats = {};
          res.locals.spreadsStats = {};
          res.locals.teammatesStats = {};
          res.locals.checksAndCountersStats = {};
        }

        const previousDataResponse = await axios.get('https://www.smogon.com/stats/'+previousDataYearMonth+'/chaos/'+genTierSearch+'-'+elo+'.json')
        console.dir(response.data.length);
        const previousDataAllDetails = previousDataResponse.data.data
        const previousDataMonDetails = previousDataAllDetails[pokemon];
        if (previousDataMonDetails != null) {
          const usagePercent = monDetails.usage * 100;
          const previousDataUsagePercent = previousDataMonDetails.usage * 100;
          const usagePercentDelta = usagePercent - previousDataUsagePercent;
          res.locals.usagePercentDelta = usagePercentDelta.toFixed(5);
        }
        else {
          res.locals.usagePercentDelta = 0;
        }

        const currentRank = getRank(allDetails, pokemon);
        const previousRank = getRank(previousDataAllDetails, pokemon);
        let rankDelta = (previousRank - currentRank); //inverted because the lower the rank, the better
        res.locals.rankDelta = rankDelta;

        res.locals.spriteIconDex = spriteIconDex;

      }
    }
    res.render('showUsageStatsMon')
  }catch(err){
    next(err);
  } 
})



app.get('/teambuilderHelper', 
  (req,res,next) => {
    res.render('teambuilderHelper')
})

app.post('/teambuilderHelper', 
  isLoggedIn,
  async (req,res,next) => {
    try {
      const {generation, tier} = req.body;
      res.locals.generation = generation;
      res.locals.tier = tier;
      res.locals.genTierSetsDex = genTierSetsDex;
      res.locals.spriteIconDex = spriteIconDex;
      res.locals.typesDex = typesDex;
      res.locals.members = await Member.find({userId:res.locals.user._id}).skip(Member.count() - 6);

      //memberNames array is used to disable the option for adding a Pokemon that has already been added to the team
      let memberNames = [];
      let index = 0;
      for (const member of res.locals.members) {
        memberNames[index] = member.monName;
        index++;
      }
      res.locals.memberNames = memberNames;


      res.render('showTeambuilderHelper')
    }catch(err){
      next(err);
    }  
})

app.get('/showTeambuilderHelper',
  isLoggedIn,
  async (req,res,next) => {
    try {
      //because the showTeambuilderHelper page constantly refreshes with new information being added,
      //old information is copied here so the information is always remembered 
      const {generation, tier} = req.body;
      res.locals.generation = generation;
      res.locals.tier = tier;
      res.locals.genTierSetsDex = genTierSetsDex;
      res.locals.spriteIconDex = spriteIconDex;
      res.locals.typesDex = typesDex;
      const members = await Member.find({userId:res.locals.user._id}).skip(Member.count() - 6);
      if (members == null) {
        res.locals.members = [];
      }
      else {
        res.locals.members = members;
      }

      //memberNames array is used to disable the option for adding a Pokemon that has already been added to the team
      let memberNames = [];
      let index = 0;
      for (const member of members) {
        memberNames[index] = member.monName;
        index++;
      }
      res.locals.memberNames = memberNames;

      res.render('showTeambuilderHelper');
    }catch(err){
      next(err);
    }
  }
)

app.post('/showTeambuilderHelper',
  isLoggedIn,
  async (req,res,next) => {
    try {
      //because the showTeambuilderHelper page constantly refreshes with new information being added,
      //old information is copied here so the information is always remembered 
      const {generation, tier, pokemon} = req.body;
      res.locals.generation = generation;
      res.locals.tier = tier;
      res.locals.genTierSetsDex = genTierSetsDex;
      res.locals.spriteIconDex = spriteIconDex;
      res.locals.typesDex = typesDex;

      //create a new Member object when the user adds a Pokemon to their team
      const memberObj = {
        userId:res.locals.user._id, //user ID
        monName: pokemon,
        monGen: generation,
        monTier: tier,
        monSet: genTierSetsDex[generation][tier][pokemon][0], //first set in the dictionary
        monSets: genTierSetsDex[generation][tier][pokemon], //the array of all of the sets and the set details for each set
      }
      const member = new Member(memberObj); // create ORM object for item
      await member.save();  // stores it in the database

      //update members so the array now includes the newly added Pokemon
      const updatedMembers = await Member.find({userId:res.locals.user._id}).skip(Member.count() - 6);
      res.locals.members = updatedMembers;

      //memberNames array is used to disable the option for adding a Pokemon that has already been added to the team
      let memberNames = [];
      let index = 0;
      for (const member of updatedMembers) {
        memberNames[index] = member.monName;
        index++;
      }
      res.locals.memberNames = memberNames;

      res.redirect('/showTeambuilderHelper');

    }catch(err){
      next(err);
    }
  }
)

//method to toggle the chosen set of the Pokemon 
app.get('/toggleSet/:itemId',
  isLoggedIn,
  async (req,res,next) => {
    try {
      const itemId = req.params.itemId;
      const member = await Member.findOne({_id:itemId});
      const currentIndex = member.monSets.indexOf(member.monSet)

      //if the current set is the last set, then next toggle press brings the index back to the first set
      //intervals are in 4s instead of 1s because of the formatting of the genTierSetIndex
      if (currentIndex == member.monSets.length - 4) {
        member.monSet = member.monSets[0];
      }
      else {
        member.monSet = member.monSets[currentIndex + 4];
      }
      console.log(member.monSet)
      await member.save();
      res.redirect('/showTeambuilderHelper');
    }
    catch(e){
      next(e);
   }
  }
)

//method to delete one Pokemon on the user's team
app.get('/deleteMember/:itemId',
  isLoggedIn,
  async (req,res,next) => {
    try {
      const itemId = req.params.itemId;
      await Member.deleteOne({_id:itemId});
      res.redirect('/showTeambuilderHelper');
    }
    catch(e){
      next(e);
   }
  }
)

//method to delete all the Members of the user
/*this is used when the Refresh Teambuilder Helper button is pressed to clear all currently chosen Pokemon so the Teambuilder Helper is
able to add Pokemon to a different generation/tier to the prior ones. If the button isn't pressed, the Teambuilder Helper will be unable
to add Pokemon to a team if there are 6 that already exist*/
app.get('/deleteAll',
  async (req,res,next) => {
    try {
      await Member.deleteMany({userId:res.locals.user._id});
      res.redirect('/teambuilderHelper')
    }catch(e){
      next(e);
    }
  }
)

app.get('/teamSummary', 
  isLoggedIn,
  async (req,res,next) => {
    try {
      const members = await Member.find({userId:res.locals.user._id}).skip(Member.count() - 6);
      
      //all Pokemon on the team would have the same generation and tier
      const generation = members[0].monGen;
      const tier = members[0].monTier;
      const genPlusTier = generation + tier.toLowerCase();

      //get stats used for the team summary page
      const numDefMons = getNumDefMons(members);
      const stalliness = getStalliness(members);
      const archetype = getTeamArchetype(stalliness, numDefMons);
      const damageSpreadValue = getDamageSpreadValue(members);

      const response = await axios.get('https://play.pokemonshowdown.com/data/sets/gen'+genPlusTier+'.json');
      const theSets = response.data.dex;
      console.dir(response.data.length)

      //create a dictionary for the team that stores a dictionary for each member of the team with their set details
      let teamSets = {};
      for (const member of members) {
        //create a dictionary for each member that has the item, ability, nature, EVs, and moves of the member's set
        let memberSet = {};
        const setDetails = theSets[member.monName][member.monSet]; //get the set details for the chosen set of each Pokemon on the team
        //reformat EV spreads
        const evNames = getEVNamesTeamSummary(setDetails);
        const evValues = getEVValuesTeamSummary(setDetails);
        const evSpread = getEVSpreadsTeamSummary(evNames, evValues);
        memberSet["item"] = setDetails["item"];
        memberSet["ability"] = setDetails["ability"];
        memberSet["nature"] = setDetails["nature"];
        memberSet["evs"] = evSpread;

        let movesList = [];
        let index = 0;
        for (const move of setDetails["moves"]) {
          movesList[index] = move;
          index++;
        }
        memberSet["moves"] = movesList;

        //add member dictionary to the big dictionary for the entire team
        teamSets[member.monName] = memberSet;
      }

      //generate dictionary of (set name, EVs) key-value pairs used when creating the EV spreads for the first part of the summary page
      let allMonEVs = {};
      for (const pokemon of Object.keys(theSets)) {
        let monEVs = {};
        for (const set of Object.keys(theSets[pokemon])) {
          const setDetails = theSets[pokemon][set];
          //reformat EV spreads
          const evNames = getEVNamesTeamSummary(setDetails);
          const evValues = getEVValuesTeamSummary(setDetails);
          const evSpread = getEVSpreadsTeamSummary(evNames, evValues);
          monEVs[set] = evSpread;
        }
        allMonEVs[pokemon] = monEVs;
      }

      //generate dictionary of lowercase names of the Pokemon on the user's team to use when generating sprite images of them
      let lowercaseNames = {};
      for (const member of members) {
        lowercaseNames[member.monName] = getPokemonLowerCase(member.monName);
      }

      //generate a dictionary that stores an array of the types of each move for each Pokemon on the team
      //key is the Pokemon name and value is the array of types
      let teamMoveTypes = {};
      for (const member of members) {
        //create an array of types for each member on the team
        let moveTypes = [];
        let index = 0;
        //find the type of each move in the set
        for (const move of teamSets[member.monName]["moves"]) {
          const moveResponse = await axios.get('https://play.pokemonshowdown.com/data/moves.json');
          const allMoves = moveResponse.data;
          console.dir(response.data.length)
          //move.replace(/[^A-Za-z0-9]/g, '').toLowerCase() creates the proper lowercase format of the move name without any spaces
          //or punctuation in order to search for the type of the move in the API
          const moveType = allMoves[move.replace(/[^A-Za-z0-9]/g, '').toLowerCase()]["type"];
          moveTypes[index] = moveType;
          index++;
        }
        teamMoveTypes[member.monName] = moveTypes;
      }

      const genTierSearch = getGenTierSearch(genPlusTier);
      let elo = "1760";
      if (tier == "OU") {
        elo = "1825";
      }
      const yearMonth = getYearMonth(genPlusTier);
      
      //use API to find the usage percentages of all Pokemon in the chosen generation and tier, similar to the View Sets features
      const usageResponse = await axios.get('https://www.smogon.com/stats/'+yearMonth+'/chaos/'+genTierSearch+'-'+elo+'.json')
      console.dir(usageResponse.data.length);
      const usageData = usageResponse.data.data;
      const monsList = Object.keys(usageData);
      const monsDetails = Object.values(usageData);
      let monAndUsagePercentDict = {};
      let filteredMonsList = [];
      let filteredUsages = [];
      let filteredIndex = 0;

      //create a dictionary of all of the Pokemon in the tier, this time with a usage percent of higher than 0.1%, and their usage percent
      for (let i = 0; i < monsList.length; i++) {
        if (monsDetails[i].usage >= 0.001) {
          filteredMonsList[filteredIndex] = monsList[i];
          filteredUsages[filteredIndex] = monsDetails[i].usage
          filteredIndex++;
        } 
      }
      for (let i = 0; i < filteredMonsList.length; i++) {
        monAndUsagePercentDict[filteredMonsList[i]] = (filteredUsages[i]* 100).toFixed(5); 
      }
      
      //sort the dictionary by usage percentage
      monAndUsagePercentDict = sortDictByValue(monAndUsagePercentDict);
      const monNames = Object.keys(monAndUsagePercentDict)

      //generate dictionary of lowercase names of all the Pokemon in the tier to use when generating sprite images of certain Pokemon in the
      //team summary threatlists
      let lowercaseNamesTier = {};
      for (const mon of monNames) {
        lowercaseNamesTier[mon] = getPokemonLowerCase(mon);
      }
      
      //calculate the offensive and defensive strengths and weaknesses of the team, which is shown in the team summary
      //specifically, these are 4 arrays that have the names of certain types
      //the types and the number of times each type is added is determined by the user's team and the below methods for calculating 
      //how weak or strong the user's team is offensively and defensively against all types
      const teamOffensiveStrengths = getTeamOffensiveStrengths(members);
      const teamOffensiveWeaknesses = getTeamOffensiveWeaknesses(members);
      const teamDefensiveStrengths = getTeamDefensiveStrengths(members);
      const teamDefensiveWeaknesses = getTeamDefensiveWeaknesses(members);

      res.locals.members = members;
      res.locals.generation = generation;
      res.locals.tier = tier;
      res.locals.numDefMons = numDefMons;
      res.locals.stalliness = stalliness;
      res.locals.archetype = archetype;
      res.locals.damageSpreadValue = damageSpreadValue;
      res.locals.teamSets = teamSets;
      res.locals.lowercaseNames = lowercaseNames;
      res.locals.teamMoveTypes = teamMoveTypes;
      res.locals.genTierSetsDex = genTierSetsDex;
      res.locals.spriteIconDex = spriteIconDex;
      res.locals.typesDex = typesDex;
      res.locals.monsList = monNames;
      res.locals.lowercaseNamesTier = lowercaseNamesTier;
      res.locals.theSets = theSets;
      res.locals.allMonEVs = allMonEVs;
      res.locals.monAndUsagePercentDict = monAndUsagePercentDict;
      //another method involved in the type synergy calculations
      res.locals.teamOffensiveStrengths = clearRedundantTypes(teamOffensiveStrengths, teamOffensiveWeaknesses);
      res.locals.teamOffensiveWeaknesses = clearRedundantTypes(teamOffensiveWeaknesses, teamOffensiveStrengths);
      res.locals.teamDefensiveStrengths = clearRedundantTypes(teamDefensiveStrengths, teamDefensiveWeaknesses);
      res.locals.teamDefensiveWeaknesses = clearRedundantTypes(teamDefensiveWeaknesses, teamDefensiveStrengths);


      res.render('teamSummary')
    } catch(e){
      next(e);
   }
  })


  
//get and post for a test page when it is needed for debugging
app.get('/test',
(req,res,next) => {
  res.render('test')
});

app.post('/test',
async (req,res,next) => {
  const {format, rating} = req.body;
  res.locals.format = format
  res.locals.rating = rating

  const generation = getGenFromString(format);
  const tier = getTierFromString(format);
  const genPlusTier = generation + tier.toLowerCase(); //for API search
  const genTierSearch = getGenTierSearch(genPlusTier);
  const elo = getELO(genPlusTier, rating); //for API search and results page
  
  res.locals.genDex = genDex;

  res.render('showTest')
  

})



// ******************************************************************************************************************//
//All helper functions used in generating and processing data


//function that converts the lowercase abbreviations of the EV stats to the proper capitalization 
//used in all features of the app where the EV spreads of Pokemon are visible
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

//function that gets an array of all EV names in a Pokemon set and then calls the convertEVFormats function to convert them to a nicer format
function getEVNames(setNames, setDetails) {
  let evNamesList = [];
  for (let i = 0; i < setNames.length; i++) {
    const namesEVsSet = Object.keys(setDetails[i]["evs"]);
    evNamesProper = convertEVFormats(namesEVsSet);
    evNamesList[i] = evNamesProper;
  }
  return evNamesList;
}

//function that gets an array of all EV values in a Pokemon set
function getEVValues(setNames, setDetails) {
  let evList = [];
  for (let i = 0; i < setNames.length; i++) {
    const evsSet = Object.values(setDetails[i]["evs"]);
    evList[i] = evsSet;
  }
  return evList;
}

//function that gets an array of all EV names in a Pokemon set and then calls the convertEVFormats function to convert them to a nicer format
//specifcally used for the Team Summary page because the already-inputted data is difficult to read
function getEVNamesTeamSummary(setDetails) {
  const namesEVsSet = Object.keys(setDetails["evs"]);
  const evNamesProper = convertEVFormats(namesEVsSet);
  const evNamesList = evNamesProper;
  return evNamesList;
}


//function that gets an array of all EV values in a Pokemon set, specifically used for the Team Summary page
//this is because the inputted array is in a different format than the rest
function getEVValuesTeamSummary(setDetails) {
  const evsSet = Object.values(setDetails["evs"]);
  const evList = evsSet;
  return evList;
}

//function that takes in the array of EV names and the corresponding array of EV values and outputs a string with the correct formatting
//of the EVs for viewing purposes
//Example: "252 Atk / 4 Def / 252 Spe"
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

//function that takes in the array of EV names and the corresponding array of EV values and outputs a string with the correct formatting
//of the EVs for viewing purposes
//Example: "252 Atk / 4 Def / 252 Spe"
function getEVSpreadsTeamSummary(namesEVs, valuesEVs) {
  let evSpread = "";
  for (let i = 0; i < namesEVs.length; i++) {
    if (i == namesEVs.length - 1) {
      evSpread = evSpread + valuesEVs[i] + " " + namesEVs[i];
    }
    else {
      evSpread = evSpread + valuesEVs[i] + " " + namesEVs[i] + " / ";
    }
  }
  return evSpread;
}

//function that takes in the array of EV names and values and outputs a string with the correct formatting of the EVs for viewing purposes
//Example: "252 Atk / 4 Def / 252 Spe"
//the EVs are in a different format than the EVs for the getEVSpreads function, so the process is different
//this is used in the Usage Statistics feature for a specific Pokemon
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
      //if an EV spread does not have a number for one of stats, then the rest is skipped
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


//function that returns true if the selected generation + tier is in the nonexistantTierFlag, false otherwise.
//used in features of the app where inputting an invalid generation + tier combination is valid; used for error checking
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

//function that takes the String combination of the generation + tier (ex: 8ou) as an input and outputs a String that is used in the API fetch
//most generation + tiers stay the same, but Gen 6 RU, gen 6 NU, and gen 6 LC are ru, nu, and lc, respectively
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

//function that takes the String combination of the generation + tier (the value of the select options in the usage statistics features; 
//(ex: 8OU) as an input and outputs a String representing the tier
function getTierFromString(format) {
  const chars = format.split("");
  const tierChars = chars.slice(1);
  const tier = tierChars.join('');
  return tier;
}

//function that takes the String combination of the generation + tier (the value of the select options in the usage statistics features; 
//(ex: 8OU) as an input and outputs a String representing the generation number
function getGenFromString(format) {
  const chars = format.split("");
  const gen = chars[0];
  return gen;
}

//function that takes the String combination of the year and month of the API data being used for the usage statistics sections as an input 
//and outputs the year and month in month/year format (ex: 2022-05 --> 5/22)
// function getDate(yearMonth) {
//   const yearAndDate = yearMonth.split("-");
//   const year = yearAndDate[0];
//   const yearLastTwoNums = year.slice(-2);
//   let dateNum = yearAndDate[1];
//   if (dateNum.split("")[0] == "0") {
//     dateNum = dateNum.slice(1);
//   }
//   const date = dateNum+"/"+yearLastTwoNums;
//   return date;
// }


/*
function used to obtain the usage statistics of a Pokemon's moves, abilities, items, and EV spreads for the Pokemon Usage Statistics section
of the app. The dictionary containing the detailed statistics of the Pokemon and a keyword representing what specific stat is searched for
are inputs, and the output is a dictionary containing a key-value pair for a specific move/item etc and its corresponding usage percentage  
*/
function getStats(monDetails, keyword) {
  //create dictionary of all names of keyword (moves, abilities, etc.) and the usage percentage of the search query
  let monAndStatPercentDict = {};
  let weightedStatTotal = 0;
    const items = Object.keys(monDetails[keyword]); //array of the names of all items of keyword
    for (const item of items) {
      //the json file in the API does not have the usage percents but rather weighted values that represent the usage
      //sum up all weighted totals to find what number 100% is. This is used in calculating the usage percent of something
      weightedStatTotal = weightedStatTotal + monDetails[keyword][item];
    }
    //this for loop adds the name of the item of the search query as a key and converts the weighted value to a usage percent for the value 
    //in the key-value pair
    for (const item of items) {
      if (keyword == "Moves") {
        //only add moves that have a usage percent of 0.5% or greater
        if (((monDetails[keyword][item] / weightedStatTotal) * 400) >= 0.5) {
          monAndStatPercentDict[movesDex[item][0]] = ((monDetails[keyword][item] / weightedStatTotal) * 400).toFixed(3);
        }
      }
      else {
        if (keyword == "Abilities") {
          monAndStatPercentDict[abilityDex[item]] = ((monDetails[keyword][item] / weightedStatTotal) * 100).toFixed(3);
        }
        else if (keyword == "Items") {
          //only add items that have a usage percent of 0.5% or greater
          if (((monDetails[keyword][item] / weightedStatTotal) * 100) >= 0.5) {
            monAndStatPercentDict[itemsDex[item]] = ((monDetails[keyword][item] / weightedStatTotal) * 100).toFixed(3);
          }
        }
        else {
          //only add EV spreads that have a usage percent of 0.5% or greater
          if (((monDetails[keyword][item] / weightedStatTotal) * 100) >= 0.5) {
            monAndStatPercentDict[item] = ((monDetails[keyword][item] / weightedStatTotal) * 100).toFixed(3);
          }
        }
      }
    }
    //sort dictionary by usage percent value
    monAndStatPercentDict = sortDictByValue(monAndStatPercentDict);
    if (keyword == "Spreads") {
      const oldSpreads = Object.keys(monAndStatPercentDict);
      //reformat the EV spreads in the same format as the other features in the app
      const reformattedSpreads = reformatEVSpreads(Object.keys(monAndStatPercentDict));

      //change the name of the key for each spread to be the new formatted version
      //method to change the name of a key in a dictionary
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

//function that finds the teammate usage percentage of the Pokemon selected in the Pokemon Usage Statistics feature
//this function is used for Smogon data that is older than April 2021
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
  const sortedTempTeammateNames = Object.keys(sortedTempTeammates);
  const sortedTempTeammateValues = Object.values(sortedTempTeammates);
  let topTeammates = {};
  let numTimes = cap;
  if (sortedTempTeammateNames.length < cap) {
    numTimes = sortedTempTeammateNames.length;
  }
  for (let i = 0; i < numTimes; i++) {
    topTeammates[sortedTempTeammateNames[i]] = sortedTempTeammateValues[i];
  }

  return topTeammates;
}

//function that finds the teammate usage percentage of the Pokemon selected in the Pokemon Usage Statistics feature
//this function is used for Smogon data that was made in April 2021 or is newer than April 2021
function getTeammatesNew(monDetails, cap) {
  //order teammates based on value, then get all top teammates up to the cap
  //dictionary of top teammates and their values
  const sortedTeammates = sortDictByValue(monDetails["Teammates"]);
  const sortedTeammateNames = Object.keys(sortedTeammates);
  const sortedTeammateValues = Object.values(sortedTeammates);
  let topTeammates = {};
  let numTimes = cap;
  if (sortedTeammateNames.length < cap) {
    numTimes = sortedTeammateNames.length;
  }
  for (let i = 0; i < numTimes; i++) {
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

function getChecksAndCounters(monDetails, cap) {
  //create dictionary of all teammates and their json values
  const checksAndCountersRawDict = monDetails["Checks and Counters"];
  let checksAndCountersInfoDictAll = {}
  const pokemon = Object.keys(checksAndCountersRawDict);
  //need to add 2 infos from txt file

  //get checks and counters data for all Pokemon listed under checks and counters
  for (const mon of pokemon) {
    const totalEncounters = checksAndCountersRawDict[mon][0]; 
    const switchedOrKOedPercent = (checksAndCountersRawDict[mon][1]*100);
    const standardDeviation = (checksAndCountersRawDict[mon][2]*100);
    
    // weighted score, to remove bias towards low probability matchups
    const weightedScore = (switchedOrKOedPercent - (4 * standardDeviation)); //the higher the number, the better the check/counter
    checksAndCountersInfoDictAll[mon] = [totalEncounters, switchedOrKOedPercent, standardDeviation, weightedScore];
    
  }

  //rank all the checks and counters by the score
  let scoreDict = {};
  for (const mon of Object.keys(checksAndCountersInfoDictAll)) {
    scoreDict[mon] = checksAndCountersInfoDictAll[mon][3];
  }

  const sortedChecksAndCountersDict = sortDictByValue(scoreDict);
  const sortedChecksAndCountersNames = Object.keys(sortedChecksAndCountersDict);

  //only keep checks and counters that have a 50 score or higher, with the maximum number in the dictionary being the cap
  //score of > 50 means the opposing Pokemon listed as a check/counter caused a KO or switch against the Pokemon more than half the time
  //if the length of the top checks is less than the cap, only iterate the length
  let numTimes = cap;
  if (sortedChecksAndCountersNames.length < cap) {
    numTimes = sortedChecksAndCountersNames.length;
  }
  
  let topChecksAndCounters = {};
  for (let i = 0; i < numTimes; i++) {
    const score = sortedChecksAndCountersDict[sortedChecksAndCountersNames[i]];
    if (score >= 50) {
      topChecksAndCounters[sortedChecksAndCountersNames[i]] = checksAndCountersInfoDictAll[sortedChecksAndCountersNames[i]];
    }
  }
  
  return topChecksAndCounters;
}


//this function parses the text file equivalent of the Smogon usage json files to access data not available in the json file
//this function specifically filters the text to retrieve the index of the name of the Pokemon in the big text file
//used to find the correct Checks and Counters section
function getNameIndexFromCCText(dataSplit, pokemon) {
  let monNameIndex = null;
  let found = false;
  let index = 1;
  //while the Pokemon name hasn't been found, parse the text file to retrieve the next Pokemon name
  while (!found) {
    let nameSplit = dataSplit[index];
    nameSplit = nameSplit.split(" | ");
    let nameJoin = nameSplit.join().trim();
    nameJoin = nameJoin.substring(1, nameJoin.length - 1);
    nameSplit = nameJoin.split("  ");
    const monNameText = nameSplit[0];
    console.log(monNameText);
    if (monNameText == pokemon) {
      monNameIndex = index;
      found = true;
    }
    else {
      index = index + 9; //with the way the data is split, the next index that has a name is 9 indexes away from the previous name
    }
  }
  console.log(monNameIndex);
  return monNameIndex;

}

//this function parses the text file equivalent of the Smogon usage json files to access data not available in the json file
//this function specifically filters the text to retrieve the KO and switched out% data for the usage stats pages
function getKOAndSwitchedDataFromCCText(dataSplit, textMonIndex) {
  //with the way the data is split, the index with the checks and counters info is 7 indexes away from the index with the Pokemon name
  const textChecksAndCountersIndex = textMonIndex + 7; 
  console.log(textChecksAndCountersIndex);
  let ccSplit = dataSplit[textChecksAndCountersIndex];
  ccSplit = dataSplit[textChecksAndCountersIndex].split("\n");
  let ccJoin = ccSplit.join();

  ccSplit = ccJoin.split("| , |");
  ccJoin = ccSplit.join();

  ccSplit = ccJoin.split("|, |");
  ccJoin = ccSplit.join();
  ccJoin = ccJoin.substring(0, ccJoin.length-4);

  ccSplit = ccJoin.split("\t");
  ccJoin = ccSplit.join();

  ccSplit = ccJoin.split(",,");
  ccJoin = ccSplit.join();

  ccSplit = ccJoin.split(", ").slice(2);
  ccJoin = ccSplit.join();

  ccSplit = ccJoin.split(",");
  let koSwitchData = [];
  let counter = 0;
  for (let i = 1; i < ccSplit.length; i = i + 2) {
    const koSwitchDataString = ccSplit[i].substring(1, ccSplit[i].length - 1);
    const koSwitchSplit = koSwitchDataString.split(" ");
    const koSwitchDataEntry = [koSwitchSplit[0], koSwitchSplit[3]];
    koSwitchData[counter] = koSwitchDataEntry;
    counter++;
  }
  return koSwitchData;
}



//function that returns the rank of the Pokemon chosen in the Pokemon Usage Statistics section based on usage percent
function getRank(allDetails, pokemon) {
  //create dictionary of all Pokemon in the tier and their rank
  let usagesAndRanks = {};
  for (const mon of Object.keys(allDetails)) {
    //key is the Pokemon name, value is an array with the usage percent in the 1st index and rank in the 2nd index
    usagesAndRanks[mon] = [allDetails[mon].usage]
  }
  //sort dictionary by usage percentage
  usagesAndRanks = sortDictByValue(usagesAndRanks);

  //add the ranks of all Pokemon in the dictionary
  //since array is ordered, the rank is just equal to the index in the array + 1
  pokemonList = Object.keys(usagesAndRanks);
  for (let i = 0; i < pokemonList.length; i++) {
    usagesAndRanks[pokemonList[i]].push(i + 1);
  }
  console.log(usagesAndRanks[pokemon])
  const rank = usagesAndRanks[pokemon][1];
  return rank;
}

//function that returns the number of defensive Pokemon the user selects in the teambuilder helper section
function getNumDefMons(members) {
  let numDefMons = 0;
  //check all Pokemon on the team
  for (const member of members) {
    //get the index of the currently chosen set name in the array of all the Pokemon's set names and abbreviated details
    const setIndex = member.monSets.indexOf(member.monSet);
    const memberStallinessScore = member.monSets[setIndex + 1]; //the number between 1-5
    const memberRole = member.monSets[setIndex + 3]; //the letter abbreviation

    //Smeargle, Shuckle, and Ditto are exceptions. They have the stats, moves, and EVs of defensive Pokemon but they are never considered as such
    //conditionals below specify the criteria for calculating the number of defensive Pokemon
    if (member.monName != "Smeargle" && member.monName != "Shuckle" && member.monName != "Ditto") {
      if (memberStallinessScore > 3 && memberRole != "OL") {
        numDefMons++;
      }
      else if (memberStallinessScore == 3 && (memberRole == "PW" || memberRole == "SW" || memberRole == "MW" || memberRole == "S")) {
        numDefMons++;
      }
    }
  }
  return numDefMons;
}

//function that returns the stalliness score of entire team the user selects in the teambuilder helper section
//info generated by this function is displayed in the team summary page
function getStalliness(members) {
  let stalliness = 0;
  //check all Pokemon on team
  for (const member of members) {
        //get the index of the currently chosen set name in the array of all the Pokemon's set names and abbreviated details
    const setIndex = member.monSets.indexOf(member.monSet);
    const score = member.monSets[setIndex + 1]; //the number between 1-5
    //add score from each Pokemon
    stalliness = stalliness + score;
  }
  return stalliness;
}

//function that uses the stalliness score of the team and the number of defensive Pokemon of the team the user creates in the teambuilder helper section
//info generated by this function is displayed in the team summary page
function getTeamArchetype(stalliness, numDefMons) {
  //team archetype is heaviliy influenced by the number of defensive Pokemon
  //ones that are more ambiguous are also influenced by the stalliness score
  let archetype = "";
  if (numDefMons == 0) {
    archetype = "Hyper Offense";
  }
  else if (stalliness >= 6 && numDefMons == 1) {
    archetype = "Offense";
  }
  else if (stalliness >= 10 && numDefMons == 2) {
    archetype = "Bulky Offense";
  }
  else if (stalliness >= 12 && (numDefMons == 3 || numDefMons == 4)) {
    archetype = "Balance";
  }
  else if (stalliness >= 16 && numDefMons == 5) {
    archetype = "Defensive";
  }
  else if (numDefMons == 6) {
    archetype = "Stall";
  }
  return archetype;
}

//function that calculates the damage spread of the team the user generates in the teambuilder summmary section
//ejs file gives different outputs depending on the number.
//the smaller the number, the more special damage your team has, and the bigger the number, the more physical damage your team does
//info generated by this function is displayed in the team summary page
function getDamageSpreadValue(members) {
  let damageSpreadValue = 0;
  for (const member of members) {
    const setIndex = member.monSets.indexOf(member.monSet);
    const damageType = member.monSets[setIndex + 2];
    if (damageType == "P") {
      damageSpreadValue++;
    }
    else if (damageType == "S") {
      damageSpreadValue--;
    }
  }
  return damageSpreadValue;
}


//function that calculates all of the types that the user's team is offensively good against, meaning what types the user's team can hit
//hard with a lot of super effective moves
//info generated by this function is displayed in the team summary page
function getTeamOffensiveStrengths(members) {
  let teamStrengths = []; //final dictionary of team strengths
  let allStrengths = []; //dictionary used before sorting

  //check through all members
  //each time a member's STAB type is offensively good against a type, the name of the type is added to the allStrengths dictionary
  //the number of times the name of a type is added to allStrengths per STAB type per member is different
  for (const member of members) {
    //conditional for if the Pokemon on the team only has one type
    if (typesDex[member.monName].length == 1) {
      const monType = typesDex[member.monName][0];
      //iterate through all types
      for (type of Object.keys(typeChart)) {
        //if a type takes super effective damage from the Pokemon's type, add its name to allStregnths
        if (typeChart[type]["damageTaken"][monType] == 1) {
          allStrengths.push(type);
        }
      }
    }

    //conditional for if the Pokemon on the team has two types
    else {
      const monType1 = typesDex[member.monName][0];
      const monType2 = typesDex[member.monName][1];
      //iterate through all types
      for (type of Object.keys(typeChart)) {
        //if a type takes super effective damage from both of the Pokemon's types, add its name twice
        if (typeChart[type]["damageTaken"][monType1] == 1 && typeChart[type]["damageTaken"][monType2] == 1) {
          allStrengths.push(type);
          allStrengths.push(type);
        }
        //if a type takes super effective damage from only one of the Pokemon's types, add its name once
        else if (typeChart[type]["damageTaken"][monType1] == 1 || typeChart[type]["damageTaken"][monType2] == 1) {
          allStrengths.push(type);
        }
      }
    }
  }
  
  //count how many times each type appears in allStrengths
  for (type of Object.keys(typeChart)) {
    let typeCount = 0;
    for (let i = 0; i < allStrengths.length; i++) {
      if (allStrengths[i] == type) {
        typeCount++;
      }
    }
    //if the type appears 3 times or more, the user's team is declared offensively strong against that type 
    //and the type is added to the teamStrengths array
    if (typeCount >= 3) {
      teamStrengths.push(type);
    }
  }
  return teamStrengths;
}

//function that calculates all of the types that the user's team is offensively bad against, meaning what types the user's team does not hit
//for much damage against
//info generated by this function is displayed in the team summary page
function getTeamOffensiveWeaknesses(members) {
  let teamWeaknesses = []; //final dictionary of team weaknesses
  let allWeaknesses = []; //dictionary used before sorting

  //check through all members
  //each time a member's STAB type is offensively bad against a type, the name of the type is added to the allStrengths dictionary
  //the number of times the name of a type is added to allStrengths per STAB type per member is different
  for (const member of members) {
    //conditional for if the Pokemon on the team only has one type
    if (typesDex[member.monName].length == 1) {
      const monType = typesDex[member.monName][0];
      //iterate through all types
      for (type of Object.keys(typeChart)) {
        //if a type takes not very effective damage from the Pokemon's type, add its name to allWeaknesses
        if (typeChart[type]["damageTaken"][monType] == 2) {
          allWeaknesses.push(type);
        }
        //if a type takes no damage from the Pokemon's type, add its name twice
        if (typeChart[type]["damageTaken"][monType] == 3) {
          allWeaknesses.push(type);
          allWeaknesses.push(type);
        }
      }
    }

    //conditional for if the Pokemon on the team has two types
    else {
      const monType1 = typesDex[member.monName][0];
      const monType2 = typesDex[member.monName][1];
      //iterate through all types
      for (type of Object.keys(typeChart)) {
        //if a type takes no damage from the Pokemon's first type, add it twice, but if it takes super effective damage from the second type, add it once
        if (typeChart[type]["damageTaken"][monType1] == 3) {
          allWeaknesses.push(type);
          allWeaknesses.push(type);
          if (typeChart[type]["damageTaken"][monType2] == 1) {
            allWeaknesses.pop();
          }
        }
        //if a type takes no damage from the Pokemon's second type, add it twice, but if it takes super effective damage from the first type, add it once
        else if (typeChart[type]["damageTaken"][monType2] == 3) {
          allWeaknesses.push(type);
          allWeaknesses.push(type);
          if (typeChart[type]["damageTaken"][monType1] == 1) {
            allWeaknesses.pop();
          }
        }
        //if a type takes not very effective damage from one of the Pokemon's types and neutral damage from the other type, add it once
        else if (typeChart[type]["damageTaken"][monType1] == 2 && typeChart[type]["damageTaken"][monType2] == 0) {
          allWeaknesses.push(type);
        }
        else if (typeChart[type]["damageTaken"][monType1] == 0 && typeChart[type]["damageTaken"][monType2] == 2) {
          allWeaknesses.push(type);
        }
        //if a type takes not very effective damage from both Pokemon's types, add it twice
        else if (typeChart[type]["damageTaken"][monType1] == 2 && typeChart[type]["damageTaken"][monType2] == 2) {
          allWeaknesses.push(type);
          allWeaknesses.push(type);
        }
      }
    }
  }
  
  //count how many times each type appears in allWeaknesses
  for (type of Object.keys(typeChart)) {
    let typeCount = 0;
    for (let i = 0; i < allWeaknesses.length; i++) {
      if (allWeaknesses[i] == type) {
        typeCount++;
      }
    }
    //if the type appears 3 times or more, the user's team is declared offensively weak against that type 
    //and the type is added to the teamWeaknesses array
    if (typeCount >= 3) {
      teamWeaknesses.push(type);
    }
  }
  return teamWeaknesses;
}

//function that calculates all of the types that the user's team is defensively good against, meaning what types the user's team does not
//take much damage from
//info generated by this function is displayed in the team summary page
function getTeamDefensiveStrengths(members) {
  let teamStrengths = []; //final dictionary of team strengths
  let allStrengths = []; //dictionary before sorting

  //check through all members
  //each time a member's STAB type is defensively good against a type, the name of the type is added to the allStrengths dictionary
  //the number of times the name of a type is added to allStrengths per STAB type per member is different
  for (const member of members) {
    //conditional for if the Pokemon on the team only has one type
    if (typesDex[member.monName].length == 1) {
      const monType = typesDex[member.monName][0];
      //iterate through all types
      for (type of Object.keys(typeChart)) {
        //if the Pokemon's type takes no damage from a type, add its name twice
        if (typeChart[monType]["damageTaken"][type] == 3) {
          allStrengths.push(type);
          allStrengths.push(type);
        }
        //if the Pokemon's type takes not very effective damage from a type, add its name once
        else if (typeChart[monType]["damageTaken"][type] == 2) {
          allStrengths.push(type);
        }
      }
    }

    //conditional for if the Pokemon on the team has two types
    else {
      const monType1 = typesDex[member.monName][0];
      const monType2 = typesDex[member.monName][1];
      //iterate through all types 
      for (type of Object.keys(typeChart)) {
        //if the Pokemon's first type takes no damage from a type, add it twice, but if its second type takes super effective damage from the type, add it once
        if (typeChart[monType1]["damageTaken"][type] == 3) {
          allStrengths.push(type);
          allStrengths.push(type);
          if (typeChart[monType2]["damageTaken"][type] == 1) {
            allStrengths.pop();
          }
        }
        //if the Pokemon's second type takes no damage from a type, add it twice, but if its first type takes super effective damage from the type, add it once
        else if (typeChart[monType2]["damageTaken"][type] == 3) {
          allStrengths.push(type);
          allStrengths.push(type);
          if (typeChart[monType1]["damageTaken"][type] == 1) {
            allStrengths.pop();
          }
        }
        //if both of the Pokemon's types take not very effective damage from a type, add it twice
        else if (typeChart[monType1]["damageTaken"][type] == 2 && typeChart[monType2]["damageTaken"][type] == 2) {
          allStrengths.push(type);
          allStrengths.push(type);
        }
        //if one of the Pokemon's types takes not very effective damage from a type
        //and the other one of the Pokemon's types takes neutral damage from the type, add it once
        else if (typeChart[monType1]["damageTaken"][type] == 2 && typeChart[monType2]["damageTaken"][type] == 0) {
          allStrengths.push(type);
        }
        else if (typeChart[monType1]["damageTaken"][type] == 0 && typeChart[monType2]["damageTaken"][type] == 2) {
          allStrengths.push(type);
        }
      }
    }
  }

  //count how many times each type appears in allStrengths
  for (type of Object.keys(typeChart)) {
    let typeCount = 0;
    for (let i = 0; i < allStrengths.length; i++) {
      if (allStrengths[i] == type) {
        typeCount++;
      }
    }
    //if the type appears 3 times or more, the user's team is declared defensively strong against that type 
    //and the type is added to the teamStrengths array
    if (typeCount >= 3) {
      teamStrengths.push(type);
    }
  }
  return teamStrengths;
}


//function that calculates all of the types that the user's team is defensively bad against, meaning what types the user's team takes a lot of 
//damage from
//info generated by this function is displayed in the team summary page
function getTeamDefensiveWeaknesses(members) {
  let teamWeaknesses = []; //final dictionary of team weaknesses
  let allWeaknesses = []; //dictionary before sorting

  //check through all members
  //each time a member's STAB type is defensively bad against a type, the name of the type is added to the allWeaknesses dictionary
  //the number of times the name of a type is added to allWeaknesses per STAB type per member is different
  for (const member of members) {
    //conditional for if the Pokemon on the team only has one type
    if (typesDex[member.monName].length == 1) {
      const monType = typesDex[member.monName][0];
      //iterate through all types
      for (type of Object.keys(typeChart)) {
        //if the Pokemon's type takes super effective damage from a type, add the type once
        if (typeChart[monType]["damageTaken"][type] == 1) {
          allWeaknesses.push(type);
        }
      }
    }

    //conditional for if the Pokemon on the team has two types
    else {
      const monType1 = typesDex[member.monName][0];
      const monType2 = typesDex[member.monName][1];
      //iterate through all types
      for (type of Object.keys(typeChart)) {
        //if both the Pokemon's types take super effective damage from a type, add the type twice
        if (typeChart[monType1]["damageTaken"][type] == 1 && typeChart[monType2]["damageTaken"][type] == 1) {
          allWeaknesses.push(type);
          allWeaknesses.push(type);
        }
        //if one of the Pokemon's types takes super effective damage from a type
        //and the other one of the Pokemon's types takes neutral damage from the type, add it once
        else if (typeChart[monType1]["damageTaken"][type] == 0 && typeChart[monType2]["damageTaken"][type] == 1) {
          allWeaknesses.push(type);
        }
        else if (typeChart[monType1]["damageTaken"][type] == 1 && typeChart[monType2]["damageTaken"][type] == 0) {
          allWeaknesses.push(type);
        }
      }
    }
  }
  
  //count how many times each type appears in allWeaknesses
  for (type of Object.keys(typeChart)) {
    let typeCount = 0;
    for (let i = 0; i < allWeaknesses.length; i++) {
      if (allWeaknesses[i] == type) {
        typeCount++;
      }
    }
    //if the type appears 3 times or more, the user's team is declared defensively weak against that type 
    //and the type is added to the teamWeaknesses array
    if (typeCount >= 3) {
      teamWeaknesses.push(type);
    }
  }
  return teamWeaknesses;
}

/*function that takes two lists of types generated by the getTeamOffensiveStrengths, getTeamOffensiveWeaknesses,
getTeamDefensiveStrengths, and getTeamDefensiveWeaknesses functions as inputs and outputs a new list with redundant types removed
the combinations would be:
  typeList1 = offensiveStrengths and typeList2 = offensiveWeaknesses (or vice versa) OR
  typeList1 = defensiveStrengths and typeList2 = defensiveWeaknesses (or vice versa)
the function removes types that appear in both lists, as logically a type that a team is both offensively/defensively strong against and weak to
would cancel out
*/

function clearRedundantTypes(typeList1, typeList2) {
  let newList = [];
  for (const type of typeList1) {
    if (!typeList2.includes(type)) {
      newList.push(type);
    }
  }
  return newList;
}


//function that returns the dictionary of data from the corresponding data type to update the data in the dictionaries for this website
function getDictionaryFromDataType(dataType, data) {
  let updatedData = {};
  if (dataType == "abilities") {
    const abilityAPINames = Object.keys(data);
    for (let i = 0; i < abilityAPINames.length; i++) {
      updatedData[abilityAPINames[i]] = data[abilityAPINames[i]]["name"];
    }
  } else if (dataType == "items") {
    const itemAPINames = Object.keys(data);
    for (let i = 0; i < itemAPINames.length; i++) {
      updatedData[itemAPINames[i]] = data[itemAPINames[i]]["name"];
    }
    updatedData["nothing"] = "No Item";
  } else if (dataType == "moves") {
    const moveAPINames = Object.keys(data);
    for (let i = 0; i < moveAPINames.length; i++) {
      updatedData[moveAPINames[i]] = [data[moveAPINames[i]]["name"], data[moveAPINames[i]]["type"]];
    }

  } else if (dataType == "pokemonTypes") {
    const pokemonAPINames = Object.keys(data);
    let counter = 0;
    let currentPokemon = pokemonAPINames[counter];
    let currentPokemonName = data[currentPokemon]["name"];
    //stop after finishing all valid Pokemon while filtering out some unnecessary ones
    while (currentPokemon != "missingno") {
      if (currentPokemonName.substring(currentPokemonName.length - 5) != "-Gmax" 
          && currentPokemonName.substring(currentPokemonName.length - 5) != "-Tera" 
          && currentPokemonName.substring(currentPokemonName.length - 6) != "-Totem"
          && currentPokemonName.substring(0, 8) != "Pikachu-") {
            updatedData[currentPokemonName] = data[currentPokemon]["types"];
            currentPokemon = pokemonAPINames[counter++];
            currentPokemonName = data[currentPokemon]["name"];
      } else {
        currentPokemon = pokemonAPINames[counter++];
        currentPokemonName = data[currentPokemon]["name"];
      }
    }
  } else if (dataType == "pokemonSpriteIconDex") {
    const allPokemonNames = Object.keys(genDex);
    for (let i = 0; i < allPokemonNames.length; i++) {
      updatedData[allPokemonNames[i]] = getPokemonLowerCaseSpriteIcon(allPokemonNames[i]);
    }
  }

  return updatedData;
}

//function that returns the dictionary of data from the corresponding data type to massively help update the data in genTierSetsDex
function generateNewGenTierSetsDex(generationsTeambuilder, validTiersTeambuilder, genTierSetsAll) {
  let teambuilderData = {};
  //for every generation, check all the tiers from the Smogon data
  for (const gen of generationsTeambuilder) {
    let teambuilderGenData = {};
    const genTiers = Object.keys(genTierSetsAll[gen]);
    for (const genTier of genTiers) {
      let teambuilderTierData = {};
      //if the tier is in the valid tiers list used in the website, add all the Pokemon
      if (validTiersTeambuilder.includes(genTier)) {
        const pokemonList = (Object.keys(genTierSetsAll[gen][genTier]["dex"])).sort();
        //for each Pokemon, add all of its set names with empty strings to be filtered later
        for (const mon of pokemonList) {
          let pokemonAllSetsData = [];
          const setList = Object.keys(genTierSetsAll[gen][genTier]["dex"][mon]);
          for (const set of setList) {
            const setData = [set, "", "", ""];
            pokemonAllSetsData.push(...setData);
          }
          teambuilderTierData[mon] = pokemonAllSetsData
        }
        const tier = changeTierFormat(genTier);
        console.log(tier)
        teambuilderGenData[tier] = teambuilderTierData;
      }
    }
    teambuilderData[gen] = teambuilderGenData;
  }
  
  return teambuilderData;
}

//function that takes the draft version of the genTierSetsDex and updates the set information
//used for the print data page to generate the updated genTierSetsDex
function updateGenTierSetsDexInfo(genTierSetsDexDraft) {
  const gens = Object.keys(genTierSetsDexDraft);
  for (const gen of gens) {
    const tiers = Object.keys(genTierSetsDexDraft[gen]);
    for (const tier of tiers) {
      const pokemonList = Object.keys(genTierSetsDexDraft[gen][tier]);
      const pokemonListOld = Object.keys(genTierSetsDex[gen][tier]);

      //for every Pokemon in a specific tier and generation, if the Pokemon also appeared in the pre-updated genTierSetsDex, update its data
      for (const mon of pokemonList) {
        if (pokemonListOld.includes(mon)) {
          let setData = genTierSetsDexDraft[gen][tier][mon];
          const setDataOld = genTierSetsDex[gen][tier][mon];
          let setNames = [];
          let setNamesOld = [];
          //set names appear every 4th index
          for (let i = 0; i < setData.length; i = i + 4) {
            setNames.push(setData[i]);
          }
          for (let i = 0; i < setDataOld.length; i = i + 4) {
            setNamesOld.push(setDataOld[i]);
          }

          //iterate over each set
          for (const set of setNames) {
            //if the Pokemon includes a set with the same name as one in the pre-updated genTierSetsDex, then it is the same set
            //the rest of the data then gets copied over to the new genTierSetsDex
            //because it is one list, and not all sets are the same, the data is updated from the specific index of the set name
            if (setNamesOld.includes(set)) {
              const setIndex = setData.indexOf(set);
              const setIndexOld = setDataOld.indexOf(set);
              for (let i = 1; i < 4; i++) {
                setData[setIndex+i] = setDataOld[setIndexOld+i];
              }
            }
          }
        }
      }
    }
  }
  return genTierSetsDexDraft;
}

//function that returns all the Pokemon in genTierSetsDex that have blank sets, but keeping the same formatting
//makes it much easier to find the Pokemon that need to be updated, instead of manually scanning the dictionary
function getBlankSetsFromDex(generationsTeambuilder, genTierSetsDex) {
  let blankSetsData = {};
  //for every generation, check all the tiers from the Smogon data
  for (const gen of generationsTeambuilder) {
    let blankSetsGenData = {};
    const tiers = Object.keys(genTierSetsDex[gen]);
    for (const tier of tiers) {
      let blankSetsTierData = {};
      const pokemonList = (Object.keys(genTierSetsDex[gen][tier])).sort();
      for (const mon of pokemonList) {
        let pokemonAllSetsData = [];
        const setData = genTierSetsDex[gen][tier][mon]
        let setNames = [];
        for (let i = 0; i < setData.length; i = i + 4) {
          setNames.push(setData[i]);
        }
        //for each Pokemon's set, check if the indexes next to the set name are blank
        //if they are, add them to the blankSetsData dictionary
        for (const set of setNames) {
          const setIndex = setData.indexOf(set);
          if (setData[setIndex+1] === "" && setData[setIndex+2] === "" && setData[setIndex+3] === "") {
            const blankSetData = [set, "", "", ""];
            pokemonAllSetsData.push(...blankSetData);
          }
        }
        //only add Pokemon if they had a blank set
        if (pokemonAllSetsData.length > 0) {
          blankSetsTierData[mon] = pokemonAllSetsData;
        } 
      }
      blankSetsGenData[tier] = blankSetsTierData;
    }
    blankSetsData[gen] = blankSetsGenData;
  }
  
  return blankSetsData;
}


//function that given one tier format changes it to the proper name without the generation (ex: gen6ubers -> Ubers)
function changeTierFormat(genTier) {
  let tier = genTier.substring(4, genTier.length);
  if (tier == "ubers") {
    tier = "Ubers";
  } else {
    tier = tier.toUpperCase();
  }
  return tier
}


//function that compares the date of the API data for sets in a generation and tier to April 2021
//returns true if date is as new or newer and false otherwise
//the boolean from this function is used to determine whether to use the process for getting teammate usage percentages for newer data
//or for the older data (which is in a different format)
function compareDates(yearMonth) {
  const dateStr = yearMonth+'-01';
  const [year, month, day] = dateStr.split('-');
  const date = new Date(+year, month - 1, +day);
  const dateThreshold = new Date("April 1, 2021");
  if (date >= dateThreshold) {
    return true;
  }
  else {
    return false;
  }
}

//function that returns a String of the ELO rating benchmarks Smogon uses for their data
//the number returned corresponds to the general skill level the user selects when viewing usage statistics
//Beginner, Average, etc. make more sense for users than arbitrary numbers
function getELO(genPlusTier, rating) {
  let elo = "";
  //gen 9 OU has slightly higher ELO rating benchmarks for the data
  if (genPlusTier == "9ou" && rating == "Skilled") {
      elo = "1695";
  } else if (genPlusTier == "9ou" && rating == "Expert") {
      elo = "1825";
  } else {
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

//function that returns the year and month of the most recent usage statistics data for a given tier
//not all formats have data every month, so the most recent data is case-by-case and depends on if there were enough battles
//in the format for Smogon to generate meaningful data
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
    case "3nu":
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
    case "6uu": case "7ru":
      yearMonth = "2022-05";
      break;
    default: 
      yearMonth = "2022-06";
  };
  return yearMonth;
}

//calculates the most recent reliable data Smogon has for the given tier and generation
//data is skipped if there were less than 100 battles
// async function getYearMonthUpdated(genTierSearch, elo) {
//   try {
//     //temporarily start at the most recent date (1 month previous from current date)
//     //if the link is not valid, keep going back until the most recent date for the generation and tier
//     const startingYearMonth = getStartingYearMonthData();
//     let yearMonthTemp = startingYearMonth;
//     let validFormatsTemp = getValidFormats(yearMonthTemp)
//     console.log('https://www.smogon.com/stats/'+yearMonthTemp+'/chaos/'+genTierSearch+'-'+elo+'.json')
    
//     //with this temporary starting point, keep checking previous data until there is one that includes more than 100 battles
//     while (!validFormatsTemp.includes(genTierSearch+'-'+elo+'.json')) {
//       yearMonthTemp = updateYearMonth(yearMonthTemp);
//       validFormatsTemp = getValidFormats(yearMonthTemp);
//     }
//     console.log("checkpoint 1")
//     let responseYearMonth = await axios.get('https://www.smogon.com/stats/'+yearMonthTemp+'/chaos/'+genTierSearch+'-'+elo+'.json');
//     let numBattlesTemp = responseYearMonth.data.info["number of battles"]; 
//     while (validFormatsTemp.includes(genTierSearch+'-'+elo+'.json') && numBattlesTemp < 100 || !validFormatsTemp.includes(genTierSearch+'-'+elo+'.json')) {
//       yearMonthTemp = updateYearMonth(yearMonthTemp);
//       validFormatsTemp = getValidFormats(yearMonthTemp);
//       if (validURL) {
//         responseYearMonth = await axios.get('https://www.smogon.com/stats/'+yearMonthTemp+'/chaos/'+genTierSearch+'-'+elo+'.json');
//         numBattlesTemp = responseYearMonth.data.info["number of battles"];
//       }
//     }
//     console.log("checkpoint 2")
//     const yearMonth = yearMonthTemp; //for API search and results page
//     return yearMonth;
    
//   }catch(err){
//    if (err.response) {
//     console.log(err.response.status)
//    }
//   }
// }

//function that generates the theoretical most updated date for Smogon data, which is one month behind the current date
function getStartingYearMonthData() {
  const currentDate = new Date();
  const currentYearInt = currentDate.getFullYear();
  const currentMonthInt = currentDate.getMonth() + 1; //getMonth() gives months from 0-11 so +1 makes 1-12
  
  //Most updated Smogon usage data is always from the previous month from the current month
  //turns current month into previous month and updates the year if the month goes from January to December
  let currentMonthDataInt = currentMonthInt - 1;
  let currentYearDataInt = currentYearInt;
  if (currentMonthDataInt == 0) {
    currentMonthDataInt = 12;
    currentYearDataInt = currentYearInt - 1;
  }

  //make string version of the year in year-month format
  let currentMonthData = "";
  if (currentMonthDataInt < 10) {
    currentMonthData = "0"+currentMonthDataInt.toString();
  } else {
    currentMonthData = currentMonthDataInt.toString();
  }
  const startingYearMonth = currentYearDataInt.toString()+"-"+currentMonthData;
  return startingYearMonth;
}

//function that updates the string for the year and month used in getYearMonthUpdated to get the most recent data
function updateYearMonth(yearMonth) {
  const yearMonthSplit = yearMonth.split("-");
  const year = parseInt(yearMonthSplit[0]);
  const month = parseInt(yearMonthSplit[1]);
  let extraHeader = "None";
  if (yearMonthSplit.length == 3) {
    extraHeader = yearMonthSplit[2];
  }

  let newYearMonth = "";
  if (extraHeader == "None") {
    let newMonth = month - 1;
    let newYear = year;
    //turns current month into previous month and updates the year if the month goes from January to December
    if (newMonth == 0) {
      newMonth = 12;
      newYear = year - 1;
    }
    if (newMonth < 10) {
      newYearMonth = newYear.toString()+"-0"+newMonth.toString();
    } else {
      newYearMonth = newYear.toString()+"-"+newMonth.toString();
    }
    //some of the stats in the Smogon stat index have an extra header for the year and month, which are case-by-case specific
    if (newYearMonth == "2023-12" || newYearMonth == "2023-09" || newYearMonth == "2020-10" || newYearMonth == "2020-06" 
    || newYearMonth == "2020-12" || newYearMonth == "2020-11") {
      if (newYearMonth == "2023-12" || newYearMonth == "2020-10") {
        newYearMonth = newYearMonth+"-DLC2";
      } else if (newYearMonth == "2023-09" || newYearMonth == "2020-06"){
        newYearMonth = newYearMonth+"-DLC1";
      } else {
        newYearMonth = newYearMonth+"-H2";
      }
    }
  } else {
    if (extraHeader == "H2") {
      if (month < 10) {
        newYearMonth = year.toString()+"-0"+month.toString()+"-H1";
      } else {
        newYearMonth = year.toString()+"-"+month.toString()+"-H1";
      }
    } else {
      if (month < 10) {
        newYearMonth = year.toString()+"-0"+month.toString();
      } else {
        newYearMonth = year.toString()+"-"+month.toString();
      }
    }
  }
  return newYearMonth;
}

//function to check if a URL is valid
//used in usage stats pages to obtain the most recent data
// async function isValidURL(string) {
//   try {
//     const response = await axios.get(string);
//     console.log(response.status);
//     return response.status;
//   }catch(err){
//    if (err.response) {
//     console.log(err.response.status)
//    }
//   }
// }


async function getValidFormats(yearMonth) {
  try {
    const response = await axios.get("https://www.smogon.com/stats/"+yearMonth+"/chaos/");
    let dataIndex = response.data;
    dataIndex = dataIndex.split("\r\n");
    dataIndex = dataIndex.slice(4, -3)
    let dataList = [];
    for (let i = 0; i < dataIndex.length; i++) {
      dataList[i] = dataIndex[i].split(" ")
    }
    let dataListFiltered = [];
    for (let i = 0; i < dataList.length; i++) {
      dataListFiltered[i] = dataList[i][1];
    }
    let dataListRefined = [];
    for (let i = 0; i < dataListFiltered.length; i++) {
      dataListRefined[i] = dataListFiltered[i].split("\"")[2];
    }
    let dataListNames = [];
    for (let i = 0; i < dataListRefined.length; i++) {
      dataListNames[i] = dataListRefined[i].slice(1, -4);
    }
    const validFormats = dataListNames;
    return validFormats;
  }catch(err){
   if (err.response) {
    console.log(err.response.status)
   }
  }
}

//function that has the properly formatted name of a Pokemon as input and returns the lowercase version of the name to use in the URL when
//getting the sprites of the Pokemon
//most Pokemon names are just the names but all in lowercase
//some of the Pokemon with punctuation or spaces in the name have to be modified in a case-by-case basis
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
  else if (pokemon == "Farfetch'd-Galar") {
    pokemonLowerCase = "farfetchd-galar"
  }
  else if (pokemon == "Ho-Oh") {
    pokemonLowerCase = "hooh"
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
  else if (pokemon == "Tapu Koko") {
    pokemonLowerCase = "tapukoko"
  }
  else if (pokemon == "Tapu Lele") {
    pokemonLowerCase = "tapulele"
  }
  else if (pokemon == "Tapu Fini") {
    pokemonLowerCase = "tapufini"
  }
  else if (pokemon == "Tapu Bulu") {
    pokemonLowerCase = "tapubulu"
  }
  else if (pokemon == "Darmanitan-Galar-Zen") {
    pokemonLowerCase = "darmanitan-galarzen"
  }
  else if (pokemon == "Oricorio-Pa'u") {
    pokemonLowerCase = "oricorio-pau"
  }
  else if (pokemon == "Oricorio-Pom-Pom") {
    pokemonLowerCase = "oricorio-pompom"
  }
  else if (pokemon == "Type: Null") {
    pokemonLowerCase = "typenull"
  }
  else if (pokemon == "Jangmo-o") {
    pokemonLowerCase = "jangmoo"
  }
  else if (pokemon == "Hakamo-o") {
    pokemonLowerCase = "hakamoo"
  }
  else if (pokemon == "Kommo-o") {
    pokemonLowerCase = "kommoo"
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

//function that has the properly formatted name of a Pokemon as input and returns the lowercase version of the name to use in the URL when
//getting the sprites of the Pokemon that do not have a gif sprite on Smogon
function getPokemonLowerCaseBackupSprite(pokemon) {
  const pokemonNameSplit = pokemon.split(" ");
  let pokemonLowerCase = "";
  if (pokemon == "Wooper-Paldea") {
    pokemonLowerCase = "wooper-paldean"
  } 
  else if (pokemon == "Tauros-Paldea-Combat") {
    pokemonLowerCase = "tauros-paldean"
  }
  else if (pokemon == "Tauros-Paldea-Aqua") {
    pokemonLowerCase = "tauros-paldean-aqua"
  }
  else if (pokemon == "Tauros-Paldea-Blaze") {
    pokemonLowerCase = "tauros-paldean-blaze"
  }
  //pokemon that are two words long (e.g. Great Tusk) will be hyphenated instead
  else if (pokemonNameSplit.length == 2) {
    const word1 = pokemonNameSplit[0].toLowerCase();
    const word2 = pokemonNameSplit[1].toLowerCase();
    pokemonLowerCase = word1 + "-" + word2;
  }
  else {
    pokemonLowerCase = pokemon.toLowerCase();
  }
  return pokemonLowerCase;
}

//function that has the properly formatted name of a Pokemon as input and returns the lowercase version of the name to use in the URL when
//getting the sprite icons of the Pokemon
function getPokemonLowerCaseSpriteIcon(pokemon) {
  let pokemonLowerCase = "";
  let pokemonName = pokemon;
  const pokemonNameSplit = pokemonName.split(" ");

  //pokemon that are two words long (e.g. Great Tusk) will be hyphenated instead
  if (pokemonNameSplit.length == 2) {
    pokemonName = pokemonName.replace(/ /g,'-');
  }
  if (pokemon.includes("'")) {
    pokemonName = pokemonName.replace("'","");
  } 
  if (pokemon.includes(".")) {
    pokemonName = pokemonName.replace(".",'').replace(/ /g,'-');
  } 

  //after preformatting, check specific cases
  else if (pokemonName == "Tauros-Paldea-Combat") {
    pokemonLowerCase = "tauros-paldean-combat"
  }
  else if (pokemonName == "Tauros-Paldea-Blaze") {
    pokemonLowerCase = "tauros-paldean-blaze"
  }
  else if (pokemonName == "Tauros-Paldea-Aqua") {
    pokemonLowerCase = "tauros-paldean-aqua"
  }
  else if (pokemonName == "Deoxys") {
    pokemonLowerCase = "deoxys-normal"
  } 
  else if (pokemonName == "Shaymin") {
    pokemonLowerCase = "shaymin-land"
  } 
  else if (pokemonName == "Deoxys") {
    pokemonLowerCase = "deoxys-normal"
  } 
  else if (pokemonName == "Darmanitan") {
    pokemonLowerCase = "darmanitan-standard"
  } 
  else if (pokemonName == "Darmanitan-Galar") {
    pokemonLowerCase = "darmanitan-galarian-standard"
  } 
  else if (pokemonName == "Darmanitan-Galar-Zen") {
    pokemonLowerCase = "darmanitan-galarian-zen"
  } 
  else if (pokemonName == "Basculin") {
    pokemonLowerCase = "basculin-red-striped"
  } 
  else if (pokemonName == "Meloetta") {
    pokemonLowerCase = "meloetta-aria"
  } 
  else if (pokemonName == "Keldeo") {
    pokemonLowerCase = "keldeo-ordinary"
  } 
  else if (pokemonName == "Tornadus" || pokemonName == "Thundurus" || pokemonName == "Landorus" || pokemonName == "Enamorus") {
    pokemonLowerCase = pokemonName.toLowerCase()+'-incarnate'
  } 
  else if (pokemonName == "Meowstic" || pokemonName == "Indeedee" || pokemonName == "Basculegion" || pokemonName == "Oinkologne") {
    pokemonLowerCase = pokemonName.toLowerCase()+'-male'
  } 
  else if (pokemonName == "Meowstic-F" || pokemonName == "Indeedee-F" || pokemonName == "Basculegion-F" || pokemonName == "Oinkologne-F") {
    pokemonLowerCase = pokemonName.toLowerCase()+'-female'
  } 
  else if (pokemonName == "Aegislash") {
    pokemonLowerCase = "aegislash-shield"
  } 
  else if (pokemonName == "Pumpkaboo" || pokemonName == "Gourgeist") {
    pokemonLowerCase = pokemonName.toLowerCase()+'-average'
  } 
  else if (pokemonName == "Zygarde") {
    pokemonLowerCase = "zygarde-50"
  } 
  else if (pokemonName == "Zygarde-10%") {
    pokemonLowerCase = "zygarde-10"
  } 
  else if (pokemonName == "Hoopa") {
    pokemonLowerCase = "hoopa-confined"
  } 
  else if (pokemonName == "Oricorio") {
    pokemonLowerCase = "oricorio-baile"
  } 
  else if (pokemonName == "Lycanroc") {
    pokemonLowerCase = "lycanroc-midday"
  } 
  else if (pokemonName == "Wishiwashi") {
    pokemonLowerCase = "wishiwashi-solo"
  } 
  else if (pokemonName == "Type: Null") {
    pokemonLowerCase = "type-null"
  } 
  else if (pokemonName == "Minior") {
    pokemonLowerCase = "minior-core"
  } 
  else if (pokemonName == "Toxtricity") {
    pokemonLowerCase = "toxtricity-amped"
  } 
  else if (pokemonName == "Eiscue") {
    pokemonLowerCase = "eiscue-ice"
  } 
  else if (pokemonName == "Morpeko") {
    pokemonLowerCase = "morpeko-full-belly"
  } 
  else if (pokemonName == "Zacian" || pokemonName == "Zamazenta") {
    pokemonLowerCase = pokemonName.toLowerCase()+'-hero'
  } 
  else if (pokemonName == "Urshifu") {
    pokemonLowerCase = "urshifu-single-strike"
  } 
  else if (pokemonName == "Calyrex-Ice" || pokemonName == "Calyrex-Shadow") {
    pokemonLowerCase = pokemonName.toLowerCase()+'-rider'
  } 
  else if (pokemonName == "Maushold") {
    pokemonLowerCase = "maushold-family4"
  } 
  else if (pokemonName == "Squawkabilly") {
    pokemonLowerCase = "squawkabilly-green"
  } 
  else if (pokemonName == "Palafin") {
    pokemonLowerCase = "palafin-zero"
  } 
  else if (pokemonName == "Tatsugiri") {
    pokemonLowerCase = "tatsugiri-curly"
  } 
  else if (pokemonName == "Dudunsparce") {
    pokemonLowerCase = "dudunsparce-two-segment"
  } 
  else if (pokemonName == "Gimmighoul") {
    pokemonLowerCase = "gimmighoul-chest"
  } 
  else if (pokemonName == "Ogerpon") {
    pokemonLowerCase = "ogerpon-teal"
  } 
  else if (pokemonName == "Terapagos") {
    pokemonLowerCase = "terapagos-normal"
  } 
  
  //regional forms are last so this can work with Darmanitan-Galar
  else if (pokemonName.substring(pokemonName.length - 6) == "-Alola" || pokemonName.substring(pokemonName.length - 7) == "-Paldea") {
    pokemonLowerCase = pokemonName.toLowerCase()+'n';
  } 
  else if (pokemonName.substring(pokemonName.length - 6) == "-Galar") {
    pokemonLowerCase = pokemonName.toLowerCase()+'ian';
  }
  else if (pokemonName.substring(pokemonName.length - 6) == "-Hisui") {
    pokemonLowerCase = pokemonName.toLowerCase()+'an';
  }
  else {
    pokemonLowerCase = pokemonName.toLowerCase();
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

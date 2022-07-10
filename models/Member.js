'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

//code to create a mongodb Member object, which represents a Pokemon a user puts on their team in the Teambuilder Helper
var memberSchema = Schema( {
  userId: {type:Schema.Types.ObjectId, ref:'User'}, //ID of user that is adding a Pokemon
  monName: String, //name of Pokemon
  monGen: String, //generation the Pokemon is in
  monTier: String, //tier the Pokemon is in in the generation represented by monGen
  monSet: String, //currently selected moveset
  monSets: Array, //array of all movesets + details of the Pokemon in the given generation + tier
} );

module.exports = mongoose.model( 'Member', memberSchema );
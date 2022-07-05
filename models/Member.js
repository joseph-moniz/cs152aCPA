'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var memberSchema = Schema( {
  userId: {type:Schema.Types.ObjectId, ref:'User'},
  monName: String,
  monGen: String,
  monTier: String,
  monSet: String,
  monSets: Array,
  teamName: String,
} );

module.exports = mongoose.model( 'Member', memberSchema );
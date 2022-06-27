'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

var todoSchema = Schema( {
  userId: {type:Schema.Types.ObjectId, ref:'User'},
  monName: String,
  monSet: String,
  monSets: Array,
} );

module.exports = mongoose.model( 'Member', todoSchema );
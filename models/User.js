'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;

//code to create a mongodb User object, which represents a user that is logged in
var userSchema = Schema( {
  username: String,
  passphrase: String,
  age: String
} );

module.exports = mongoose.model( 'User', userSchema );

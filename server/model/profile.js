const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// define schema 
const profileSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  linkedin: {
    type: String,
    required: true
  },
  twitter: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
})
// create logger model and export 

module.exports = mongoose.model('profile', profileSchema)
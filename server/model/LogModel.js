
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// define schema 
const logSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  deviceInfo: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
})
// create logger model and export 

module.exports = mongoose.model('log', logSchema)
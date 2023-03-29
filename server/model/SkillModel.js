const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    name: {
        type: String,
        require: true
    }, 
    level: {
        type: Number,
        default: 50
    },
    icon: {
        type: String,
        default: 'devicon-appwrite-plain'
    },
    hidden:{
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('skill', skillSchema)
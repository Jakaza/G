const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    subtitle: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    source: String,
    preview: String,
    languages: {
        type: String,
        require: true
    },
    hidden: Boolean,
    meta: {
        download: Number
    }
})

module.exports = mongoose.model('miniproject', projectSchema)
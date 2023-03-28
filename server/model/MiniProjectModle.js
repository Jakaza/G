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
    language: {
        type: String,
        require: true
    },
    hidden: {
        type: Boolean,
        default: true
    },
    meta: {
        download: Number,
        default: 0
    }
})

module.exports = mongoose.model('miniproject', projectSchema)
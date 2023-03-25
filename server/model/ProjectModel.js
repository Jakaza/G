
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
    imagelink: String,
    languages: [{ name: String }],
    body: String,
    hidden: Boolean,
    meta: {
        like: Number,
        share: Number
    }
})

module.exports = mongoose.model('projects', projectSchema)




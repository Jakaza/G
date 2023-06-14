const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        default: "/images/logo.png"
    },
    preview: String,
    languages: {
        type: String,
        require: true
    },
    hidden: Boolean,
    views: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('miniproject', projectSchema)
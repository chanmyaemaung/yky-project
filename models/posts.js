const mongoose = require('mongoose')

// Page Schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },

})


mongoose.model('Post', postSchema)
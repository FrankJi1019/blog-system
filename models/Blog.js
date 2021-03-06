const mongoose = require("mongoose")
const Schema = mongoose.Schema

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    comment: {
        type: Array,
        required: true
    }
})

const Blog = mongoose.model("blogs", blogSchema)

module.exports = Blog
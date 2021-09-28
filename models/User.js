const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        required: true,
        type: String
    }, 
    password: {
        required: true,
        type: String
    }
})

const User = mongoose.model("user", UserSchema)

module.exports = User
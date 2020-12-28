const mongoose = require('mongoose')

// creating schema mean shape of our document
const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    contactNumber: Number,
    fullAddress: String,
    password: String
})

// creating model class 
const User = mongoose.model('User', userSchema)

exports.User = User;
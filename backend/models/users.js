const mongoose = require('mongoose')
const joi = require('joi')

// creating model class 
const User = mongoose.model('User', new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255
    },
    contactNumber: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    fullAddress: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
}))

// validating user data using joi
function validateUser(user) {
    const schema = {
        fullName: joi.string().min(5).max(50).required(),
        email: joi.string().min(5).max(255).required().email(),
        contactNumber: joi.number().min(0).required(),
        fullAddress: joi.string().min(5).max(255).required(),
        password: joi.string().min(5).max(1024).required()
    };

    return joi.validate(user, schema);
}

module.exports.User = User;
module.exports.validateUser = validateUser;
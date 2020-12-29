const mongoose = require('mongoose')
const joi = require('joi')
const jwt = require('jsonwebtoken')
const config = require('config')

// creating schema
const userSchema = new mongoose.Schema({
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
})


// generateAuthToken is as a key and part of user object and function is a value
//  here we will use regular function syntax we cannot use arrow function here 
// because arrow function dont have their own 'this' and 'this' in arrow function 
// reference to calling function so we use arrow funcion for stand alone function 
// if we want to create a method that is part of object we should not use arrow function
userSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id, fullName: this.fullName, isAdmin: false }, config.get('jwtPrivateKey'))
}

// creating model class 
const User = mongoose.model('User', userSchema)

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
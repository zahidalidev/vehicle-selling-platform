const mongoose = require('mongoose')
const joi = require('joi')
const jwt = require('jsonwebtoken')
const config = require('config')

// creating schema
const adSchema = new mongoose.Schema({
    vehicleName: {
        type: String,
        required: true,
        maxlength: 255
    },
    registrationYear: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
        maxlength: 255
    },
    mileage: {
        type: String,
        required: true,
        maxlength: 255
    },
    exteriorColour: {
        type: String,
        required: true,
        maxlength: 155
    },
    vehicleModel: {
        type: String,
        required: true,
        maxlength: 155
    },
    vehicleDescription: {
        type: String,
        required: true,
    },
    sellingPrice: {
        type: String,
        required: true,
    },
    vehicleStatus: {
        type: String,
        required: true,
    },
    adStatus: {
        type: String,
    },
    engine: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    images: {
        type: [String],
        default: []
    },
    categoryTitle: {
        type: String,
        required: true,
    },
    userID: {
        type: String,
        required: true,
    },
})

// creating model class 
const Ad = mongoose.model('ad', adSchema)

module.exports = Ad;
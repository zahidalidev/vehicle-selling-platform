const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 255,
        required: true,
        unique: true
    }
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category;
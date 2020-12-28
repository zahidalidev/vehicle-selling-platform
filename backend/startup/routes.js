const express = require('express')

const users = require('../routes/users')

module.exports = function (app) {
    // to recognize the incoming Request Object as a JSON Object
    app.use(express.json());

    // any routes that start with '/api/users use users router
    app.use('/api/users', users)
}
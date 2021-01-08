const users = require('../routes/users');
const auth = require('../routes/auth');
const category = require('../routes/category');
const Ad = require('../routes/ad');

module.exports = function (app) {

    // any routes that start with '/api/users use users router
    app.use('/api/users', users);

    // any routes that start with '/api/auth use auth router
    app.use('/api/auth', auth);

    app.use('/api/category', category)
    app.use('/api/ad', Ad)
}
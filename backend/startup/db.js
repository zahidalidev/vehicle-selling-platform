const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb://localhost/autozone', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('connected to mongodb'))
        .catch(err => console.log('could not connect to mongodb', err))
}
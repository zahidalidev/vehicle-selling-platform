const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useCreateIndex', true);

module.exports = () => {
    mongoose.connect('mongodb://localhost/autozone')
        .then(() => console.log('connected to mongodb'))
        .catch(err => console.log('could not connect to mongodb', err))
}

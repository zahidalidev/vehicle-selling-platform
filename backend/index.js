const express = require('express')
const cors = require('cors')
const config = require('config')
var path = require('path');

if (!config.get('jwtPrivateKey')) {
    console.log('FATAL ERROR: jwtPrivateKey is not defined')
    process.exit(1)
}


const app = express()

// app.use(express.static('assets'))

// using cors to for public API
app.use(cors())

// to recognize the incoming Request Object as a JSON Object
app.use(express.json());


// let options = {
//     dotfiles: "ignore", //allow, deny, ignore
//     etag: true,
//     extensions: ["htm", "html"],
//     index: false, //to disable directory indexing
//     maxAge: "7d",
//     redirect: false,
//     setHeaders: function (res, path, stat) {
//         //add this header to all static responses
//         res.set("x-timestamp", Date.now());
//     }
// };

app.use(express.static('assets'))
// app.use(express.static(path.join(__dirname, 'assets')));

// to connect with mongodb
require('./startup/db')()

// to use the routers
require('./startup/routes')(app)


// setting port from env or 5000
app.set('port', (process.env.PORT || 5000))

// getting port and stating listining on that port
const port = app.get('port')
app.listen(port, () => console.log(`listining on port ${port}...`))
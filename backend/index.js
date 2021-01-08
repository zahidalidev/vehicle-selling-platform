const express = require('express')
const cors = require('cors')
const config = require('config')

if (!config.get('jwtPrivateKey')) {
    console.log('FATAL ERROR: jwtPrivateKey is not defined')
    process.exit(1)
}

const app = express()

// using cors to for public API
app.use(cors())

// to recognize the incoming Request Object as a JSON Object
app.use(express.json());

// to connect with mongodb
require('./startup/db')()

// to use the routers
require('./startup/routes')(app)


// setting port from env or 5000
app.set('port', (process.env.PORT || 5000))

// getting port and stating listining on that port
const port = app.get('port')
app.listen(port, () => console.log(`listining on port ${port}...`))
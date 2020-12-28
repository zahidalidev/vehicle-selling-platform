const express = require('express')
const cors = require('cors')

const app = express()

// to connect with mongodb
require('./startup/db')()

// to use the routers
require('./startup/routes')(app)

// using cors to for public sapi
app.use(cors())

// setting port from env or 5000
app.set('port', (process.env.PORT || 5000))

// getting port and stating listining on that port
const port = app.get('port')
app.listen(port, () => console.log(`listining on port ${port}...`))
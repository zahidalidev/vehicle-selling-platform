const express = require('express')
const cors = require('cors')

const app = express()

// using cors to for public sapi
app.use(cors())

// to recognize the incoming Request Object as a JSON Object
app.use(express.json())

// setting port from env or 5000
app.set('port', (process.env.PORT || 5000))

require('./startup/db')()
require('./startup/routes')(app)


// getting port and stating listining on that port
const port = app.get('port')
app.listen(port, () => console.log(`listining on port ${port}...`))
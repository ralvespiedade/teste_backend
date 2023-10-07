const express = require('express')
const cors = require('cors')

const routes = require('./src/routes/routes.js')
const db = require('./src/database/db.js')

const app = express()

//Connection with database
db.connect()

//Enabling CORS
app.use(cors())

//Enabling server to reiceve data from post (body)
app.use(express.json())

//Defining routes
app.use('/api', routes)



//Connection with server
const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})


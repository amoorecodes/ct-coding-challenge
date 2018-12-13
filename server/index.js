const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const path = require('path')

// activate environmental variables
require('dotenv').config()

const app = express()
const PORT = 3000

// fix cross-origin issues before they arrive
app.use(cors())

// enable auto encoding of the data
// app.use(parser.raw())
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))

// establish connection to a database
require('../db/index.js')

//server static files from Public folder
app.use(express.static('static'))

// fix server to server static for all routes that do not have '/api' in them (regex)
// [^(api)]

const { router } = require('./router/index.js')
app.use('/api', router)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'), err =>
    res.status(500).send(err)
  )
})

// start the server
app.listen(PORT, err => {
  if (err) console.err('There was a problem starting a server.\n', err)
  console.log('Server has started on port ', PORT)
})

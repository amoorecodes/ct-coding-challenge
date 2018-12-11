const express = require('express')
const parser = require('body-parser')

const app = express()
const PORT = 3000

// enable auto encoding of the data
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))

//server static files from Public folder
app.use(express.static('public'))

// start the server
app.listen(PORT, err => {
  if (err) console.err('There was a problem starting a server.\n', err)
  console.log('Server has started on port ', PORT)
})

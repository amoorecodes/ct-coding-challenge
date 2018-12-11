const express = require('express')
const parser = require('body-parser')
const path = require('path')

const app = express()
const PORT = 3000

// enable auto encoding of the data
app.use(parser.json())
app.use(parser.urlencoded({ extended: true }))

//server static files from Public folder
app.use(express.static(path.join(__dirname, '/public')))

// start the server
app.listen(PORT, () => console.log('Server has started on port ', PORT))

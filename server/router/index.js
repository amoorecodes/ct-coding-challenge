const express = require('express')
const router = express.Router()
const { pool } = require('../../db/index.js')
const path = require('path')
const stringDecoder = require('string_decoder').StringDecoder

const decoder = new stringDecoder('utf-8')

// function to handle login

router.route('/authenticate').post((req, res) => {
  const { username, passcode } = req.body

  // grabs user info based on the username entered from database
  pool
    .query(
      `select username, passcode from users where username = '${username}'`
    )

    // compares entered user/password with what is present in the database
    .then(data => {
      // if matches passes back user data, which allows redirect
      if (data[0].passcode && data[0].passcode === passcode) {
        res.status(200).send(data)
      } else {
        res.status(401).send('not authorised')
      }
    })
    .catch(err => console.error(err))
})

// saves current working draft into the database
router.route('/saveRawData').post((req, res) => {
  const { elements, user, html } = req.body
  const userID = 1
  pool
    .query(
      `insert into websites (elements, userID, link) values ('${JSON.stringify(
        elements
      )}', '${userID}', '${html}')`
    )
    .then(() => console.log('success'))
    .catch(err => console.error(err))
})

// call to database to retrieve elements object with all the html tags
router.route('/fetchRawData').get((req, res) => {
  let { username } = req.query

  // async call for data
  const request = async () => {
    let json = await pool.query(
      `select elements from websites inner join users on websites.userID = users.ID where users.username = '${username}'`
    )

    return json
  }

  // sends only the last save
  request()
    .then(data => {
      res.status(200).json(data[data.length - 1])
    })
    .catch(err => console.error('error fetchoing raw data on server', err))
})

module.exports = { router }

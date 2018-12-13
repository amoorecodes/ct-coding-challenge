const express = require('express')
const router = express.Router()
const { pool } = require('../../db/index.js')
const path = require('path')

router.route('/authenticate').post((req, res) => {
  // console.log('request in router')
  const { username, passcode } = req.body

  pool
    .query(
      `select username, passcode from users where username = '${username}'`
    )
    .then(data => {
      if (data[0].passcode && data[0].passcode === passcode) {
        // console.log('passcode match')
        res.status(200).send(data)
      } else {
        res.status(401).send('not authorised')
      }
    })
    .catch(err => console.error(err))
})

router.route('/saveRawData').post((req, res) => {
  const { elements, user } = req.body
  const userID = 1
  const link = 'www.bitly.com/fastsave'
  pool
    .query(
      `insert into websites (elements, userID, link) values ('${JSON.stringify(
        elements
      )}', '${userID}', '${link}')`
      // `insert into websites (elements) select websites.userID from users inner join users on websites.userID=users.ID where users.username=$1 values (${JSON.stringify(
      //   elements
      // )})`,
      // user
    )
    .then(() => console.log('success'))
    .catch(err => console.error(err))
})

module.exports = { router }

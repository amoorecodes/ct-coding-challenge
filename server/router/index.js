const express = require('express')
const router = express.Router()
const { pool } = require('../../db/index.js')

router.route('/authenticate').post((req, res) => {
  console.log('request in router')
  const { username, passcode } = req.body

  pool
    .query(
      `select username, passcode from users where username = '${username}'`
    )
    .then(data => {
      if (data[0].passcode === passcode) {
        console.log('passcode match')
        res.status(200).send(data)
      } else {
        res.status(401).send('not authorised')
      }
    })
    .catch(err => console.error(err))
})

// router.route('/*', express.static('public'))

module.exports = { router }

const mariadb = require('mariadb')

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'clicktools',
  port: 3306,
  connectionLimit: 5
})

pool
  .getConnection()
  .then(connection => {
    console.log('successfully connected to database!')
    // connection
    //   .query('USE clicktools')
    //   .then(() => console.log('successfully use the database'))
    // connection.end()
  })
  .catch(err => console.error(err))

// pool.end()
module.exports = { pool }

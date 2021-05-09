const Pool = require('pg').Pool
const dotenv = require('dotenv')
dotenv.config()
const pool = new Pool({
    user: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
    ssl: true
})
const getSymbols = (request, response) => {
  pool.query('SELECT symbol FROM stocks', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getNames = (request, response) => {
  pool.query('SELECT name FROM stocks', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getStocks = (request, response) => {
  pool.query('SELECT * FROM stocks', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getName = (request, response) => {
  pool.query('SELECT name FROM stocks where symbol = $1',[request.body.symbol], (error, results) => {
    if (error) {
      throw error
    }
    console.log(request.body.symbol)
    console.log(results)
    response.status(200).json(results.rows)
  })
}

module.exports = {
    getSymbols,
    getNames,
    getStocks,
    getName
  }
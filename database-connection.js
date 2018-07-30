const knex = require('knex')
const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')
const database = knex(config[environment])

module.exports = database


//this is how we are setting up connection to the database
//setting this up so we can use knex
//setting up the dev environment
//lets us connect to our database

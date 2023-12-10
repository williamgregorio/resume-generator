const knex = require('knex');
const configs = require('../knexfile.js');
const enviroment = process.env.NODE_ENV || 'development';

module.exports = knex(configs[enviroment]);

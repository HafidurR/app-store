require('dotenv').config();
const { NODE_ENV } = process.env;
const config = require('../../knexfile');

// module.exports = (NODE_ENV == 'development') ? require('knex')(config.development) : require('knex')(config.production);

const knexConfig = (NODE_ENV === 'development') ? config.development : config.production;

// Enable query logging in development environment
if (NODE_ENV === 'development') {
  knexConfig.debug = true;
}

const knex = require('knex')(knexConfig);

module.exports = knex;
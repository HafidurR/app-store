import dotenv from 'dotenv';
dotenv.config();

const { NODE_ENV } = process.env;
import { development as developmentConfig, production as productionConfig } from '../../knexfile.js';

const knexConfig = (NODE_ENV === 'development') ? developmentConfig : productionConfig;

if (NODE_ENV === 'development') {
  knexConfig.debug = true;
}

import knexLibrary from 'knex';
const knex = knexLibrary(knexConfig);

export default knex;
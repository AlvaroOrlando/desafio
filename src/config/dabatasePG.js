const { Client } = require('pg')
require('dotenv').config();

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'multiplier',
    password: process.env.PG_DB_PASSWORD,
    port: 5432
});

module.exports = client;
require('./index')
const { Pool } = require('pg');
const pool = new Pool()

module.exports = pool;

// {
//     user: process.env.PGUSER,
//     host: process.env.PGHOST,
//     database: process.env.PGDATABASE,
//     password: 
// }
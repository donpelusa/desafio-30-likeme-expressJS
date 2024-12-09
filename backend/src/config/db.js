const { Pool } = require('pg')

require('dotenv').config()
const { PGHOST, PGUSER, PGPASSWORD, PGDATABASE } = process.env;

const DB = new Pool({
    host: PGHOST,
    user: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    allowExitOnIdle: true
})

module.exports = {
    DB
}
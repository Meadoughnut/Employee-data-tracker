//  Importing the pool class from the node-postgres module.
const {Pool} = require('pg');


// creating a new instance of the pool class to manage the postgresSQL connections
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'employee_tracker',
    password: '0930364711',
    port: '5432',
});

module.exports = pool;








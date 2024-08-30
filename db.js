const { Pool } = require('pg');

const pool = new Pool({
	user: ({}).USER,
	host: 'localhost',
	database: ({}).DATABASE,
	password: '',
	port: 5432,
});

module.exports = pool;
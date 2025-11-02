const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'radha23@D',        // if you set a password during MySQL setup, put it here
  database: 'user_db', // or any name you create
  port: 3306           // matches what your screenshot shows
});

db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connect error:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL');
});

module.exports = db;

// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Simple health check
app.get('/', (req, res) => res.send('Signup API is running'));

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { full_name, email, phone, password } = req.body;

  // basic validation
  if (!full_name || !email || !phone || !password) {
    return res.status(400).json({ error: 'All fields (name, email, phone, password) are required.' });
  }

  try {
    // hash the password (safe storage)
    const hashed = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO users (full_name, email, phone, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [full_name, email, phone, hashed], (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ error: 'Email already registered.' });
        }
        console.error('DB insert error:', err);
        return res.status(500).json({ error: 'Database error' });
      }
      return res.status(201).json({ message: 'User registered successfully' });
    });
  } catch (err) {
    console.error('Signup error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

// start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

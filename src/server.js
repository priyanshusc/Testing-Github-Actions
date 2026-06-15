// src/server.js
const express = require('express');
const path = require('path');
const { validatePassword } = require('./auth.js');

const app = express();
app.use(express.json());

// Serve our index.html frontend file on the root web address URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing credentials' });
  }

  if (!validatePassword(password)) {
    return res.status(400).json({ error: 'Password does not meet requirements' });
  }

  return res.status(201).json({ message: 'User registered successfully!' });
});

module.exports = app;
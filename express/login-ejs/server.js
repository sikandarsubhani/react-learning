const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(express.static('public')); // Serve static files

// Dummy user credentials
const validUser = {
  email: "user@example.com",
  password: "password123"
};

// Routes
app.get('/', (req, res) => {
  res.render('login', { error: null });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === validUser.email && password === validUser.password) {
    res.render('dashboard', { email });
  } else {
    res.render('login', { error: "Invalid email or password" });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

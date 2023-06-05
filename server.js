const express = require('express');
const path = require('path');

const app = express();
const port = process.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Route for the Terms of Service page
app.get('/terms', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/terms.html'));
});

// Route for the Privacy Policy page
app.get('/privacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/privacy.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

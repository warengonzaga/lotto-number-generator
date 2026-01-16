const express = require('express');
const path = require('path');
const packageJson = require('./package.json');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// API endpoint to get app version
app.get('/api/version', (req, res) => {
  res.json({
    version: packageJson.version,
    name: packageJson.name
  });
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`PCSO 2D Lotto Generator is running on http://localhost:${PORT}`);
});

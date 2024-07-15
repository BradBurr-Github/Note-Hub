// Include required modules

const html = require('express').Router();
const path = require('path');

// GET Route for notes page
html.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// Wildcard "Catch-All" route to direct users to our Index page
html.get('*', (req, res) => 
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = html;
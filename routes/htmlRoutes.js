// Include required modules
const router = require('express').Router();
const path = require('path');

// GET Route for notes page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// Wildcard "Catch-All" route to direct users to our Index page
router.get('*', (req, res) => 
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;
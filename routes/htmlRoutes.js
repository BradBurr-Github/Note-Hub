// Include required modules
const html = require('express').Router();

// GET Route for notes page
html.get('/notes', (req, res) => {
  console.log('NOTES route');
  //res.sendFile(path.join(__dirname, './public/notes.html'))
  }
  
);

// Wildcard "Catch-All" route to direct users to our Index page
html.get('*', (req, res) => {
  console.log('CATCH ALL route')
  //res.sendFile(path.join(__dirname, './public/index.html'))
}
);

module.exports = html;
// Added required modules
const express = require('express');
const path = require('path');
const api = require('./routes/apiRoutes.js');
const html = require('./routes/htmlRoutes.js');

// Define port used or the default 3001 port
const PORT = process.env.PORT || 3001;

// Create new express instance
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up a middleware function that mounts the specified api and html routers
app.use('/api', api);
app.use('/html', html);

// Set up a middleware function to serve static files
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard "Catch-All" route to direct users to our Index page
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Call for app to listen at our port
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);
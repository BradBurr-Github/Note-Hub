const api = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving all the notes
api.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for submitting new notes
api.post('/notes', (req, res) => {
    let idNote = uuidv4();
    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    // Check if all the required properties are present
    if (idNote && title && text) {
        const newNote = {
        id: idNote,
        title,
        text
        };

        // Read note from JSON file and append new note
        readAndAppend(newNote, './db/db.json');

        // Create successful response
        const response = {
            status: 'success',
            body: newNote,
        };

        // return response
        res.json(response);
    }
    else {
        // An error occurred
        res.json('Error in posting new Note.');
    }
});

// DELETE Route for a specific note
api.delete('/notes:id', (req, res) => {
    console.log ('delete')
    const noteId = req.params.id;
    console.log (noteId)
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        // Make a new array of all notes except the one with the ID provided in the URL
        const result = json.filter((note) => note.id !== noteId);

        // Save that array to the filesystem
        writeToFile('./db/db.json', result);

        // Respond to the DELETE request
        res.json(`Note ${noteId} has been deleted 🗑️`);
    });
  });

module.exports = api;
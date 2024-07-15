const html = require('express').Router();
//const { v4: uuidv4 } = require('uuid');
//const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving all the feedback
html.get('/', (req, res) =>
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting feedback
html.post('/', (req, res) => {
  // Destructuring assignment for the items in req.body
//   const { email, feedbackType, feedback } = req.body;

//   // If all the required properties are present
//   if (email && feedbackType && feedback) {
//     // Variable for the object we will save
//     const newFeedback = {
//       email,
//       feedbackType,
//       feedback,
//       feedback_id: uuidv4(),
//     };

//     readAndAppend(newFeedback, './db/feedback.json');

//     const response = {
//       status: 'success',
//       body: newFeedback,
//     };

//     res.json(response);
//   } else {
//     res.json('Error in posting feedback');
//   }
});

module.exports = html;
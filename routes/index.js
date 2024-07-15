// Include Router to route to individual files
const router = require('express').Router();

// Import our modular routers for /api and /html
const apiRouter = require('./apiRoutes.js');
const htmlRouter = require('./htmlRoutes.js');

// Define routes to point to JS files
router.use('/api', apiRouter);
router.use('/', htmlRouter);

// Export router object
module.exports = router;
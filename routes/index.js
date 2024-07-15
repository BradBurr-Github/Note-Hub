const router = require('express').Router();

// Import our modular routers for /api and /html
const apiRouter = require('./apiRoutes');
const htmlRouter = require('./htmlRoutes');

// Define routes to point to JS files
router.use('/api', apiRouter);
router.use('/html', htmlRouter);

// Export router object
module.exports = router;
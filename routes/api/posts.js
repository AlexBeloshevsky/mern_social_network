const express = require('express');
const router = express.Router();

// @route   GET posts route
// @desc    a test route of the posts router
// @access  Public route
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;

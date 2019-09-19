const express = require('express');
const router = express.Router();

// @route   GET profile route
// @desc    a test route of the profile router
// @access  Public route
router.get('/', (req, res) => res.send('profile route'));

module.exports = router;

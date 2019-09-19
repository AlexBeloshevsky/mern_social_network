const express = require('express');
const router = express.Router();

// @route   GET auth route
// @desc    a test route of the auth router
// @access  Public route
router.get('/', (req, res) => res.send('Auth route'));

module.exports = router;

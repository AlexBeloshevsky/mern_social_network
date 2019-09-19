const express = require('express');
const router = express.Router();

// @route   GET users route
// @desc    a test route of the users router
// @access  Public route
router.get('/', (req, res) => res.send('Users route'));

module.exports = router;

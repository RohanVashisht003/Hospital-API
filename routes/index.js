const express = require('express');
// using express router
const router = express.Router();

// route for doctor
router.use('/doctors',require('./doctor'));


module.exports = router;
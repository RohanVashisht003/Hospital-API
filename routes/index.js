const express = require('express');
// using express router
const router = express.Router();

// route for doctor
router.use('/doctors',require('./doctor'));

// for patient
router.use('/patients',require('./patient'));

// for reports
router.use('/reports',require('./report'));

module.exports = router;
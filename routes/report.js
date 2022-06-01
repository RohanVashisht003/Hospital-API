const express = require('express');
const router = express.Router();

const reportsController = require('../controllers/reports_controller');

router.get('/:status',reportsController.filterReports);


module.exports = router;
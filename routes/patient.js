const express = require('express');
const router = express.Router();
const checkAuthentication = require('../config/manual-jwt-authenticate');
const patientsController = require('../controllers/patients_controller');


router.post('/register', checkAuthentication,patientsController.register);

router.post('/:id/create_report',checkAuthentication,patientsController.createReport);

router.get('/:id/all_reports',patientsController.showReports)

module.exports = router;
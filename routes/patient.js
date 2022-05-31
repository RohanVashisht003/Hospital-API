const express = require('express');
const { checkAuth } = require('../config/auth');
const router = express.Router();
const passport = require('../config/passport-jwt-strategy');


const patientsController = require('../controllers/patients_controller');

router.post('/register', passport.authenticate('jwt',{session:false}),patientsController.register);

router.post('/:id/create_report',patientsController.createReport);

module.exports = router;
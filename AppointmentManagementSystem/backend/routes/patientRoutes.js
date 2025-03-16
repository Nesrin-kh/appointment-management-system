const express = require('express');
const { checkAppointments } = require('../controllers/patientController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/appointments', authMiddleware, checkAppointments);

module.exports = router;
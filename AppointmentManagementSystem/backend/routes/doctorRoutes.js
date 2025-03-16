const express = require('express');
const { checkAppointments, updateAppointmentStatus } = require('../controllers/doctorController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/appointments', authMiddleware, checkAppointments);
router.put('/appointments/status', authMiddleware, updateAppointmentStatus);

module.exports = router;
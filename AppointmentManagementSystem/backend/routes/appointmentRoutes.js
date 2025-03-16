const express = require('express');
const { createAppointment } = require('../controllers/appointmentController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', authMiddleware, createAppointment);

module.exports = router;
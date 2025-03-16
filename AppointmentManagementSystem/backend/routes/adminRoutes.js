const express = require('express');
const {
  manageUsers,
  manageAppointments,
  deleteUser,
  updateAppointmentStatus,
} = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();


router.get('/users', authMiddleware, manageUsers);

router.get('/appointments', authMiddleware, manageAppointments);

router.delete('/users/:id', authMiddleware, deleteUser);

router.put('/appointments/status', authMiddleware, updateAppointmentStatus);


module.exports = router;
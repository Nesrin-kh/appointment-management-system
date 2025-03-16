const User = require('../models/User');
const Appointment = require('../models/Appointment');

//------------------------GET ALL USERS-----------------------------------
const manageUsers = (req, res) => {
  User.findAll((err, users) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ users });
  });
};

//----------------------GET ALL APPOINTMENTS---------------------------------
const manageAppointments = (req, res) => {
  Appointment.findAll((err, appointments) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ appointments });
  });
};

//--------------------DELETE A USER-------------------------------------------
const deleteUser = (req, res) => {
  const { id } = req.params;
  User.deleteById(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User deleted successfully' });
  });
};

//------------------------------UPDATE APPOINTMENT STATUS----------------------------
const updateAppointmentStatus = (req, res) => {
  const { appointmentId, status } = req.body;
  Appointment.updateStatus(appointmentId, status, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Appointment status updated' });
  });
};

module.exports = {
  manageUsers,
  manageAppointments,
  deleteUser,
  updateAppointmentStatus,
};
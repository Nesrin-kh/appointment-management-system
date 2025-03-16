const Appointment = require('../models/Appointment');

const checkAppointments = (req, res) => {
    const doctorId = req.user.id;
    Appointment.findByDoctorId(doctorId, (err, appointments) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ appointments });
    });
};

const updateAppointmentStatus = (req, res) => {
    const { appointmentId, status } = req.body;
    Appointment.updateStatus(appointmentId, status, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Appointment status updated' });
    });
};

module.exports = { checkAppointments, updateAppointmentStatus };
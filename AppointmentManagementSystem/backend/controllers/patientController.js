const Appointment = require('../models/Appointment');

const checkAppointments = (req, res) => {
    const patientId = req.user.id;
    Appointment.findByPatientId(patientId, (err, appointments) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ appointments });
    });
};

module.exports = { checkAppointments };
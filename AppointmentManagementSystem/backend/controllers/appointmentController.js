const Appointment = require('../models/Appointment');

const createAppointment = (req, res) => {
    const { patientId, doctorId, appointmentTime } = req.body;
    Appointment.create({ patientId, doctorId, appointmentTime }, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Appointment created successfully' });
    });
};

module.exports = { createAppointment };
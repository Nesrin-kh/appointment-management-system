const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

class Appointment {
    static create(appointment, callback) {
        const { patientId, doctorId, appointmentTime } = appointment;
        const sql = `INSERT INTO Appointments (patientId, doctorId, appointmentTime) VALUES (?, ?, ?)`;
        db.run(sql, [patientId, doctorId, appointmentTime], callback);
    }

    static findByPatientId(patientId, callback) {
        const sql = `SELECT * FROM Appointments WHERE patientId = ?`;
        db.all(sql, [patientId], callback);
    }

    static findByDoctorId(doctorId, callback) {
        const sql = `SELECT * FROM Appointments WHERE doctorId = ?`;
        db.all(sql, [doctorId], callback);
    }

    static updateStatus(appointmentId, status, callback) {
        const sql = `UPDATE Appointments SET status = ? WHERE id = ?`;
        db.run(sql, [status, appointmentId], callback);
    }

    static findAll(callback) {
        const sql = 'SELECT * FROM Appointments';
        db.all(sql, [], callback);
      }
}

module.exports = Appointment;
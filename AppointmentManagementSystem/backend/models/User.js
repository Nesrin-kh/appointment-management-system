const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

class User {
    static create(user, callback) {
        const { name, email, password, userType } = user;
        const sql = `INSERT INTO Users (name, email, password, userType) VALUES (?, ?, ?, ?)`;
        db.run(sql, [name, email, password, userType], callback);
    }

    static findByEmail(email, callback) {
        const sql = `SELECT * FROM Users WHERE email = ?`;
        db.get(sql, [email], callback);
    }

    static findAll(callback) {
        const sql = `SELECT * FROM Users`;
        db.all(sql, callback);
    }

    static deleteById(id, callback) {
        const sql = 'DELETE FROM Users WHERE id = ?';
        db.run(sql, [id], callback);
      }
}

module.exports = User;
const pool = require('../db');

class Organization {
    static async getById(id) {
        const query = 'SELECT * FROM Organization WHERE id = $1';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    }
}

module.exports = Organization;

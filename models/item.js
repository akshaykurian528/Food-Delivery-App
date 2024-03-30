// models/item.js
const pool = require('../db');

class Item {
    static async getById(id) {
        const query = 'SELECT * FROM Item WHERE id = $1';
        const { rows } = await pool.query(query, [id]);
        return rows[0];
    }
}

module.exports = Item;

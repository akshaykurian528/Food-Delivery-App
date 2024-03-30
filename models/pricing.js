// models/pricing.js
const pool = require('../db');

class Pricing {
    static async getByOrganizationAndZone(organizationId, zone) {
        const query = 'SELECT * FROM Pricing WHERE organization_id = $1 AND zone = $2';
        const { rows } = await pool.query(query, [organizationId, zone]);
        return rows[0];
    }
}

module.exports = Pricing;

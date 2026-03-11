const db = require('../db');

class PortfolioRepository {

    async create(data) {
        const [result] = await db.query(
            'INSERT INTO portfolios (userId, title, description) VALUES (?, ?, ?)',
            [data.userId, data.title, data.description]
        );
        return { id: result.insertId, ...data, isPublic: false };
    }

    async getByUser(userId) {
        const [rows] = await db.query(
            'SELECT * FROM portfolios WHERE userId = ?',
            [userId]
        );
        return rows;
    }

    async publish(id) {
        await db.query(
            'UPDATE portfolios SET isPublic = TRUE WHERE id = ?',
            [id]
        );
    }
}

module.exports = new PortfolioRepository();

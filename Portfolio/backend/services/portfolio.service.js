const repo = require('../repositories/portfolio.repository');

class PortfolioService {

    async create(data) {
        if (!data.title) {
            throw new Error("Title is required");
        }
        return repo.create(data);
    }

    async getByUser(userId) {
        return repo.getByUser(userId);
    }

    async publish(id) {
        return repo.publish(id);
    }
}

module.exports = new PortfolioService();

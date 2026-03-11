const service = require('../services/portfolio.service');

exports.create = async (req, res) => {
    try {
        const portfolio = await service.create(req.body);
        res.status(201).json({ success: true, data: portfolio });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

exports.getByUser = async (req, res) => {
    const portfolios = await service.getByUser(req.params.userId);
    res.json({ success: true, data: portfolios });
};

exports.publish = async (req, res) => {
    await service.publish(req.params.id);
    res.json({ success: true, message: "Portfolio published" });
};

const express = require('express');
const portfolioController = require('../controllers/portfolio.controller');
const projectController = require('../controllers/project.controller');

const router = express.Router();

router.post('/portfolios', portfolioController.create);
router.get('/users/:userId/portfolios', portfolioController.getByUser);
router.put('/portfolios/:id/publish', portfolioController.publish);

module.exports = router;
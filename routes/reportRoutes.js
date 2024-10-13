// routes/reportRoutes.js

const express = require('express');
const reportController = require('../controllers/reportController');
const authenticateJWT = require('../middlewares/auth');

const router = express.Router();

// Rota para obter relatório de culturas
router.get('/crops/report', authenticateJWT, reportController.getCropReport);

module.exports = router;

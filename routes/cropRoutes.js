// routes/cropRoutes.js
const express = require('express');
const cropController = require('../controllers/cropController');
const authenticateJWT = require('../middlewares/auth');

const router = express.Router();

// Rota para criar cultura
router.post('/', authenticateJWT, cropController.createCrop);

// Rota para obter culturas
router.get('/', authenticateJWT, cropController.getCrops);

// Rota para atualizar cultura
router.put('/:id', authenticateJWT, cropController.updateCrop);

// Rota para deletar cultura
router.delete('/:id', authenticateJWT, cropController.deleteCrop);

module.exports = router;

// routes/game.js

const express = require('express');
const authenticateJWT = require('../middleware/auth');
const router = express.Router();

// Rota protegida
router.get('/', authenticateJWT, (req, res) => {
  // Lógica para retornar jogos (adicione aqui)
  res.json({ message: 'Jogos disponíveis!' });
});

module.exports = router;

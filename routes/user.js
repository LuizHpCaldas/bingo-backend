const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/auth');

// Rota protegida para obter informações do usuário
router.get('/me', authenticate, (req, res) => {
  const { id, name, email } = req.user;
  res.json({ id, name, email });
});

module.exports = router;

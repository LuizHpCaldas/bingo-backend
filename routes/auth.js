const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

// Chave secreta para JWT (em produção, use variáveis de ambiente)
const JWT_SECRET = '@Agenciaif2017';

// Rota de registro
router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Verificar se o usuário já existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já existe.' });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar novo usuário
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Gerar token JWT
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao registrar usuário.' });
  }
});

// Rota de login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Encontrar usuário pelo email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado.' });
    }

    // Comparar senhas
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Senha incorreta.' });
    }

    // Gerar token JWT
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao fazer login.' });
  }
});

module.exports = router;

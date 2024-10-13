const jwt = require('jsonwebtoken');
const { User } = require('../models');

const JWT_SECRET = 'sua_chave_secreta';

const authenticate = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return res.status(401).json({ message: 'Token inválido.' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Token inválido.' });
  }
};

module.exports = authenticate;

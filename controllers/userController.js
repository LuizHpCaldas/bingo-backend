const User = require('../models/User'); // Ajuste o caminho conforme necessário
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Função de registro
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Verifica se o usuário já existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Usuário já existe!' });
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria o novo usuário
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    console.error("Erro ao registrar o usuário: ", error); // Log do erro no console
    res.status(500).json({ message: 'Erro ao registrar o usuário.' });
  }
};

// Função de login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verifica se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado!' });
    }

    // Compara a senha
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Senha incorreta!' });
    }

    // Gera o token JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // O token expira em 1 hora
    });

    res.status(200).json({ message: 'Login bem-sucedido!', token });
  } catch (error) {
    console.error("Erro ao fazer login: ", error); // Log do erro no console
    res.status(500).json({ message: 'Erro ao fazer login.' });
  }
};

// Exportando as funções
module.exports = {
  signup,
  login,
};

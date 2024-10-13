// index.js

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const userController = require('./controllers/userController');
const authenticateJWT = require('./middlewares/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rota de registro
app.post('/register', userController.register);

// Rota de login
app.post('/login', userController.login);

// Rota protegida
app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'Esta é uma rota protegida!', user: req.user });
});

// Sincronizar o banco de dados e iniciar o servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
});

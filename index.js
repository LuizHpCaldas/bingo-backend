// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models');
const userController = require('./controllers/userController');
const propertyController = require('./controllers/propertyController'); // Importar o controlador de propriedades
const cropController = require('./controllers/cropController'); // Importar o controlador de culturas
const authenticateJWT = require('./middlewares/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Habilitar CORS
app.use(bodyParser.json());

// Rota de registro
app.post('/register', userController.register);

// Rota de login
app.post('/login', userController.login);

// Rota para criar propriedade
app.post('/properties', authenticateJWT, propertyController.createProperty);

// Rota para obter propriedades
app.get('/properties', authenticateJWT, propertyController.getProperties);

// Rota para criar cultura
app.post('/crops', authenticateJWT, cropController.createCrop); // Rota para criar uma nova cultura

// Rota para obter culturas
app.get('/crops', authenticateJWT, cropController.getCrops); // Rota para obter todas as culturas

// Rota protegida
app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'Esta é uma rota protegida!', user: req.user });
});

// Sincronizar o banco de dados e iniciar o servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`); // Mensagem de inicialização do servidor
  });
});

// index.js

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const userController = require('./controllers/userController');
const propertyController = require('./controllers/propertyController');
const cropController = require('./controllers/cropController');
const reportController = require('./controllers/reportController'); // Importar controlador de relatórios
const authenticateJWT = require('./middlewares/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Rotas de usuários
app.post('/register', userController.register);
app.post('/login', userController.login);

// Rotas de propriedades
app.post('/properties', authenticateJWT, propertyController.createProperty);
app.get('/properties', authenticateJWT, propertyController.getProperties);

// Rotas de culturas
app.post('/crops', authenticateJWT, cropController.createCrop);
app.get('/crops', authenticateJWT, cropController.getCrops);
app.put('/crops/:id', authenticateJWT, cropController.updateCrop);
app.delete('/crops/:id', authenticateJWT, cropController.deleteCrop);

// Rota para relatório de culturas
app.get('/crops/report', authenticateJWT, reportController.getCropReport);

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

const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');
const db = require('./models'); // Para inicializar a conexão com o banco de dados

const app = express();
app.use(bodyParser.json());

// Rota de registro de usuário
app.post('/register', userController.signup);

// Rota de login
app.post('/api/auth/login', userController.login);

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Sincroniza os modelos com o banco de dados (opcional)
db.sequelize.sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch(err => {
    console.error("Error syncing database: ", err);
  });

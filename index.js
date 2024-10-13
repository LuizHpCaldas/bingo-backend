const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para ler o corpo da requisição como JSON
app.use(express.json());

// Configuração do Sequelize
const sequelize = new Sequelize('bingo', 'postgres', '@Agenciaif2017', {
  host: 'localhost',
  dialect: 'postgres',
});

// Testar a conexão com o banco de dados
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

// Importar modelos
const db = require('./models');
db.sequelize.sync();

// Importar rotas
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

// Usar rotas
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Usar rotas
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Hello, Bingo is live!');
});

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3001', // Substitua pela URL do seu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));


// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

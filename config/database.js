// config/database.js

require('dotenv').config(); // Carregar variáveis de ambiente

const { Sequelize } = require('sequelize');

// Usar variáveis de ambiente para configuração do banco de dados
const sequelize = new Sequelize(process.env.DATABASE_NAME || 'bingo', process.env.DATABASE_USER || 'postgres', process.env.DATABASE_PASSWORD || '@Agenciaif2017', {
  host: process.env.DATABASE_HOST || '127.0.0.1',
  dialect: 'postgres'
});

module.exports = sequelize;

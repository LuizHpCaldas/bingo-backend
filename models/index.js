const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config(); // Carregue as variáveis de ambiente

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres', // Aqui você especifica que está usando o PostgreSQL
});

// Verifica a conexão
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const db = {
  Sequelize,
  sequelize,
  Users: require('./user')(sequelize, DataTypes),
  Properties: require('./property')(sequelize, DataTypes),
  // Adicione outros modelos aqui
};

module.exports = db;

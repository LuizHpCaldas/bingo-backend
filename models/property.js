// models/property.js

module.exports = (sequelize, DataTypes) => {
    const Property = sequelize.define('Property', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      ownerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users', // Relaciona com a tabela Users
          key: 'id',
        },
      },
    });
  
    return Property;
  };
  
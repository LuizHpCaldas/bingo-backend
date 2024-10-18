module.exports = (sequelize, DataTypes) => {
  const Properties = sequelize.define('Properties', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Adicione mais campos conforme necessário
  });

  return Properties;
};

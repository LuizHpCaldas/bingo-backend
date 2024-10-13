// models/crop.js
module.exports = (sequelize, DataTypes) => {
    const Crop = sequelize.define('Crop', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        propertyId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Properties', // Nome da tabela de propriedades
                key: 'id'
            }
        }
    });

    Crop.associate = (models) => {
        Crop.belongsTo(models.Property, { foreignKey: 'propertyId' });
    };

    return Crop;
};

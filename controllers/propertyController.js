// controllers/propertyController.js

const { Property } = require('../models');

const createProperty = async (req, res) => {
  try {
    const { name, location, area } = req.body;
    const property = await Property.create({
      name,
      location,
      area,
      ownerId: req.user.id, // Associar a propriedade ao usuário autenticado
    });
    res.status(201).json({ message: 'Propriedade criada com sucesso!', property });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar propriedade', error });
  }
};

const getProperties = async (req, res) => {
  try {
    const properties = await Property.findAll({ where: { ownerId: req.user.id } });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter propriedades', error });
  }
};

module.exports = { createProperty, getProperties };

const { Property } = require('../models'); // Assumindo que você tenha um modelo de Propriedade

exports.createProperty = async (req, res) => {
  const { name, location } = req.body;

  try {
    const newProperty = await Property.create({ name, location, userId: req.user.id });
    res.status(201).json({ message: 'Property created successfully', property: newProperty });
  } catch (error) {
    res.status(500).json({ message: 'Error creating property', error });
  }
};

exports.getProperties = async (req, res) => {
  try {
    const properties = await Property.findAll({ where: { userId: req.user.id } });
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching properties', error });
  }
};

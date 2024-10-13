// controllers/cropController.js

const { Crop } = require('../models');

// Criar uma nova cultura
exports.createCrop = async (req, res) => {
  try {
    const crop = await Crop.create(req.body);
    return res.status(201).json(crop);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Obter todas as culturas
exports.getCrops = async (req, res) => {
  try {
    const crops = await Crop.findAll();
    return res.status(200).json(crops);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Atualizar uma cultura
exports.updateCrop = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Crop.update(req.body, { where: { id } });
    if (updated) {
      const updatedCrop = await Crop.findOne({ where: { id } });
      return res.status(200).json(updatedCrop);
    }
    throw new Error('Cultura não encontrada');
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Deletar uma cultura
exports.deleteCrop = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Crop.destroy({ where: { id } });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Cultura não encontrada');
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

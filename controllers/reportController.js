// controllers/reportController.js

const { Crop } = require('../models');

exports.getCropReport = async (req, res) => {
  try {
    const crops = await Crop.findAll();
    
    // Exemplo simples de geração de relatório
    const report = crops.map(crop => ({
      id: crop.id,
      name: crop.name,
      area: crop.area,
      yield: crop.yield,
      createdAt: crop.createdAt,
    }));

    return res.status(200).json(report);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// controllers/cropController.js
const { Crop } = require('../models');

exports.createCrop = async (req, res) => {
    try {
        const crop = await Crop.create(req.body);
        return res.status(201).json(crop);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

exports.getCrops = async (req, res) => {
    try {
        const crops = await Crop.findAll();
        return res.status(200).json(crops);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

exports.updateCrop = async (req, res) => {
    try {
        const { id } = req.params;
        const crop = await Crop.findByPk(id);
        if (!crop) {
            return res.status(404).json({ error: 'Crop not found' });
        }
        await crop.update(req.body);
        return res.status(200).json(crop);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

exports.deleteCrop = async (req, res) => {
    try {
        const { id } = req.params;
        const crop = await Crop.findByPk(id);
        if (!crop) {
            return res.status(404).json({ error: 'Crop not found' });
        }
        await crop.destroy();
        return res.status(204).send();
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

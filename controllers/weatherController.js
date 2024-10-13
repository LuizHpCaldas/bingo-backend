// controllers/weatherController.js

const axios = require('axios');

const API_KEY = process.env.OPENWEATHERMAP_API_KEY; // Adicione sua chave da API ao .env
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const getWeather = async (req, res) => {
  const { lat, lon } = req.query; // Receber latitude e longitude como parâmetros de consulta

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric', // Para obter a temperatura em graus Celsius
      },
    });

    return res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar dados meteorológicos:', error);
    return res.status(500).json({ error: 'Erro ao buscar dados meteorológicos' });
  }
};

module.exports = { getWeather };

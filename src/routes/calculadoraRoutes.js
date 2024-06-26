const express = require('express');
const router = express.Router();
const calculadoraController = require('../controller/calculadoraController');

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: './src/views' });
});

router.post('/calcular', calculadoraController.calcular);

router.get('/resultado', (req, res) => {
    res.sendFile('resultado.html', { root: './src/views' });
});

module.exports = router;

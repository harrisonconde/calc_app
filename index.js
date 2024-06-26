const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

// Middleware para processar dados do formulário
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'src', 'views')));

// Usar o roteador
app.use('/', calculadoraRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

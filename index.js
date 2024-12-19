const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importando o arquivo de rotas
const rota_detecoes = require('./routes/rota_detecoes');
const rota_disparos = require('./routes/rota_disparos');

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type,Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// Usando as rotas
app.use('/detecoes', rota_detecoes);
app.use('/disparos',rota_disparos);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

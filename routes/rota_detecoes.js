const express = require ('express');
const route = express.Router();
const cont_detecoes = require('../controllers/controlador_detecoes');

route.post('/adicionar',cont_detecoes.adicionar);
route.get('/ndetecoes',cont_detecoes.ndetecoes);
route.delete('/limpar',cont_detecoes.limpar);

module.exports = route;
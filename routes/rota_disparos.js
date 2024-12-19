const express = require('express');
const route = express.Router();
const cont_disparos = require('../controllers/controlador_disparos');

route.post('/adicionar',cont_disparos.adicionar);
route.get('/ndisparos',cont_disparos.ndisparos);
route.delete('/limpar',cont_disparos.limpar);

module.exports = route;
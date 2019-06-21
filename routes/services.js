const { Router } = require('express');
const ApiService = require('../api/services');

const routes = Router();

module.exports = routes;

routes.get('/', ApiService.healthCheck);
routes.get('/services', ApiService.getServices);

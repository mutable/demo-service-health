const { Router } = require('express');
const API_SERVICE = require('../api/services');

const routes = Router();

module.exports = routes;

routes.get('/', API_SERVICE.healthCheck);
routes.get('/services', API_SERVICE.getServices);

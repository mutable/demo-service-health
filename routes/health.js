const { Router } = require('express');
const API_HEALTH = require('../api/health');

const routes = Router();

module.exports = routes;

routes.get('/', API_HEALTH.healthCheck);

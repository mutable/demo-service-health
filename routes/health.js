const { Router } = require('express');
const ApiHealth = require('../api/health');

const routes = Router();

module.exports = routes;

routes.get('/', ApiHealth.healthCheck);

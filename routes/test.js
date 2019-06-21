const { Router } = require('express');
const ApiTest = require('../api/test');

const routes = Router();

module.exports = routes;

routes.get('/', ApiTest.count);
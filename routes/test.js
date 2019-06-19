const { Router } = require('express');
const API_TEST = require('../api/test');

const routes = Router();

module.exports = routes;

routes.get('/', API_TEST.count);
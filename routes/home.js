const { Router } = require('express');
const ApiHome = require('../api/home');

const routes = Router();

module.exports = routes;

routes.get('/', ApiHome.homePage);
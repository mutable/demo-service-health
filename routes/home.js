const { Router } = require('express');
const API_HOME = require('../api/home');

const routes = Router();

module.exports = routes;

routes.get('/', API_HOME.homePage);

/**
* Combine all routes
**/

const home = require('./home');
const test = require('./test');
const health = require('./health');
const services = require('./services');

module.exports = function initializeRoutes (app) {
  app.use('/', home);
  app.use('/test', test);
  app.use('/health', health);
  app.use('/api/healthCheck', services);
}
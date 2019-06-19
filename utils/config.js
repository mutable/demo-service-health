
/**
* DEMO FILE
* 
* Getting Configs set in Mutable App
**/

const Meta = require('@mutable/meta');

const ENV = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

const Config = {};

module.exports = Config;

let config = {};

//** Meta.config() returns configurations set in the Mutable app's Configurations tab **//

Meta.config()
.then((_config) => {
  config = _config;
  return _config;
})
.catch((e) => {throw e});
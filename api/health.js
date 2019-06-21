
/**
* Monitor service health
**/

const tooBusy = require("toobusy-js");

const HealthApi = {};

module.exports = HealthApi;

HealthApi.healthCheck = (req, res) => {
  res.send(tooBusy.lag().toString());
}
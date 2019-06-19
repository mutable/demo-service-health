
/**
* Monitor service health
**/

const tooBusy = require("toobusy-js");

const API = {};

module.exports = API;

API.healthCheck = (req, res) => {
  res.send(tooBusy.lag().toString());
}
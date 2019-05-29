const express = require('express');
const api = express.Router();
const fs = require('fs');
const Path = require('path');
const request = require('request-promise');
const Meta  = require('@mutable/meta');

let config;

Meta.config()
.then((c) => {
  config = c  
})

api.get('/healthChecks', (req, res) => {
  Meta.services()
  .then((services) => {
    return services.map((serviceName) => {
      return Meta.service(serviceName)
      .then((service) => request(`http://${service}/health`))
      .then((health) => Object.assign({}, {
        name: serviceName,
        result: parseInt(health)
      }))      
      .catch((error) => {
        console.error(error)
        res(Object.assign({}, { name: serviceName, result: 0 }))
      })
    })
  })
  .then((promisesArr) => {
    return Promise.all(promisesArr).then(results => res.send(results) )
  })
})

api.get('/services', (req, res) => {  
  Meta.services()
  .then(res.send)
})

module.exports = api;
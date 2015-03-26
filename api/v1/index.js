var express = require('express')
  , api = express.Router()
  , fs = require('fs')
  , Path = require('path')
  , request = require('request')
  , lsq  = require('lsq')
  , Promise = require('promise')
  , config

lsq.config.get().then(function(c){
  config = c

})

api.get('/healthChecks',function(req,res){
  
  lsq.services.list().then(function(services){
    var promisesArr = services.map(function(serviceName){ 
      return new Promise(function (resolve,reject) {
        lsq.services.get(serviceName)
          .then(function(service){
          request.get('http://'+service+'/health'
          , function (error, response, body) {
            if(error) return resolve({name:serviceName ,result:0})
            resolve({name:serviceName ,result:parseInt(body)})
          })
        })
      })  
    })
    Promise.all(promisesArr)
    .done(function(result){
      res.send(result)
    })
  })
})

// api.get('/',function(req,res){
//    res.send(fs.readFileSync(Path.join(__dirname,"../../","view","healthCheck.html")))
// })

api.get('/services',function(req,res){
  
  lsq.services.list().then(function(services){
    res.send(services)
  })
})

module.exports = api
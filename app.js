const express = require('express');
const http = require('http');
const logger = require('morgan');
const bodyParser = require('body-parser');
const debug = require('debug');
const methodOverride = require('method-override');

const tools = require('./tools');

const log = debug('app:log');
const error = debug('app:error');
const app = express();



app
.set('port', process.env.PORT || 3000)  
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true }))
.use(methodOverride('_method'))
.use(tools.getReportingInfo(tools.report))
.use('/api/v1/',require('./api/v1'))
.use(express.static('public'))
.get('/',tools.homePage)
.get('/test', tools.test)
.get('/health',tools.healthCheck)
.listen(app.get('port'),function(){
  console.log("Express server listening on port " + app.get('port'))
});
const express = require('express');
const http = require('http');
const path = require('path');
const lessMiddleware = require('less-middleware');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const errorHandler = require('errorhandler');

const initializeRoutes = require('./routes/index.js');

const app = express();

app.set('port', process.env.PORT || 3000),
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.use(lessMiddleware(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(errorHandler());

initializeRoutes(app);

http.createServer(app).listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
});

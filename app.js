'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

//Loading routes
var index_routes = require('./routes/index');
var client_routes = require('./routes/client');



app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(expressValidator());

//Configure http headers

//Basic Routes
app.use(index_routes);
app.use(client_routes);

module.exports = app;

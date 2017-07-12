/*
	File: index.js
	Located: routes
	Description: This file is principal file to route our request with the initial page
*/
'use strict'

var express = require('express');
var indexController = require('../controllers/index');

var api = express.Router();

api.get('/', indexController.home);

module.exports = api;
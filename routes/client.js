/*
	File: client.js
	Located: routes
	Description: This file is principal file to route our request with clients
*/
'use strict'

var express = require('express');
var clientController = require('../controllers/client');

var api = express.Router();

//GET
api.get('/testing-controller', clientController.test);
api.get('/addClient', clientController.addClientGet);

//POST
api.post('/addClientPost', clientController.addClientPost);


module.exports = api;

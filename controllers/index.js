/*
	File: client.js
	Located: controller
	Description: This file is a controller of clients
*/
'use strict'


function home(req, res){
    res.render('../views/pages/index');
}


module.exports = {
    home
};